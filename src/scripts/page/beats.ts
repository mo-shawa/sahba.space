/*
 * Chapter text. Each [data-beat="enter,exit"] is on screen only between those
 * two points of the chapter's progress: it starts rising in, word by word from
 * a mask, at `enter`, and its last word has left upward by `exit`; small print
 * ([data-fade]) fades instead. However long the text (Sahba edits it), a beat
 * whose `enter` is at or after the previous one's `exit` never shares the
 * screen with it. Everything is a function of
 * progress, written only when it changes, and nothing carries a transform
 * unless it is moving: a resting word has none, and a hidden beat is hidden
 * as a whole. Hundreds of standing transforms inside sticky stages made every
 * hover check during a scroll cost several milliseconds.
 */
export interface Beat {
	element: HTMLElement
	enter: number
	exit: number
	words: HTMLElement[]
	fades: HTMLElement[]
	/** The pause between one word leaving and the next, and how long the whole beat takes to leave. */
	exitStagger: number
	exitLength: number
	/** Last written value per word (yPercent) and per fade (opacity), to skip repeats. */
	wordState: Float32Array
	fadeState: Float32Array
	shown: boolean | null
}

// Words rise in one after another; they leave quicker and closer together, so a
// long beat still clears the screen in a fixed stretch.
const BEAT = { duration: 0.07, enterStagger: 0.004, exitDuration: 0.05, exitStagger: 0.003, exitSpread: 0.02, fadeStagger: 0.008 }
// GSAP's curves, which the beats were tuned with: powerN is x^(N+1).
const power3Out = (t: number) => 1 - (1 - t) ** 4
const power3In = (t: number) => t ** 4
const power2Out = (t: number) => 1 - (1 - t) ** 3
const power2In = (t: number) => t ** 3

export function readBeats(chapter: HTMLElement): Beat[] {
	return Array.from(chapter.querySelectorAll<HTMLElement>('[data-beat]'), (element) => {
		const [enter, exit] = (element.dataset.beat ?? '0,1').split(',').map(Number)
		const words = Array.from(element.querySelectorAll<HTMLElement>('.w > span'))
		const fades = Array.from(element.querySelectorAll<HTMLElement>('[data-fade]'))
		const exitStagger = words.length > 1 ? Math.min(BEAT.exitStagger, BEAT.exitSpread / (words.length - 1)) : 0
		const beat: Beat = {
			element,
			enter,
			exit,
			words,
			fades,
			exitStagger,
			exitLength: BEAT.exitDuration + exitStagger * Math.max(words.length - 1, 0),
			wordState: new Float32Array(words.length).fill(NaN),
			fadeState: new Float32Array(fades.length).fill(NaN),
			shown: null,
		}
		// Until the first frame places it, a later beat starts hidden.
		if (enter > 0) showBeat(beat, false)
		return beat
	})
}

function showBeat(beat: Beat, shown: boolean) {
	if (beat.shown === shown) return
	beat.shown = shown
	beat.element.style.opacity = shown ? '' : '0'
	beat.element.style.pointerEvents = shown ? '' : 'none'
}

/** Where word `i` sits (yPercent) at chapter progress p: 130 below, 0 in place, -130 gone. */
function wordAt(beat: Beat, i: number, p: number) {
	const { duration, enterStagger, exitDuration } = BEAT
	if (beat.exit < 1) {
		const leave = (p - (beat.exit - beat.exitLength + i * beat.exitStagger)) / exitDuration
		if (leave > 0) return -130 * power3In(Math.min(leave, 1))
	}
	if (beat.enter <= 0) return 0
	const arrive = (p - (beat.enter + i * enterStagger)) / duration
	return 130 * (1 - power3Out(Math.min(Math.max(arrive, 0), 1)))
}

/** Opacity of small print `i` at progress p (its lift follows the same curve). */
function fadeAt(beat: Beat, i: number, p: number) {
	const { duration, exitDuration, fadeStagger } = BEAT
	if (beat.exit < 1) {
		const leave = (p - (beat.exit - exitDuration)) / exitDuration
		if (leave > 0) return -power2In(Math.min(leave, 1))
	}
	if (beat.enter <= 0) return 1
	const arrive = (p - (beat.enter + duration * 0.5 + i * fadeStagger)) / duration
	return power2Out(Math.min(Math.max(arrive, 0), 1))
}

export function placeBeats(beats: Beat[], p: number) {
	for (const beat of beats) {
		let moving = false
		let visible = false
		for (let i = 0; i < beat.words.length; i++) {
			const y = wordAt(beat, i, p)
			if (y > -130 && y < 130) visible = true
			if (y !== 0 && Math.abs(y) !== 130) moving = true
		}
		for (let i = 0; i < beat.fades.length; i++) {
			const f = fadeAt(beat, i, p)
			const alpha = f >= 0 ? f : 1 + f
			if (alpha > 0) visible = true
			if (alpha > 0 && alpha < 1) moving = true
		}
		if (!beat.words.length && !beat.fades.length) visible = true

		showBeat(beat, visible)
		// A hidden or resting beat clears its words; only a moving one sets them.
		for (let i = 0; i < beat.words.length; i++) {
			const y = visible && moving ? wordAt(beat, i, p) : 0
			if (beat.wordState[i] === y) continue
			beat.wordState[i] = y
			beat.words[i].style.transform = y === 0 ? '' : `translateY(${y}%)`
		}
		for (let i = 0; i < beat.fades.length; i++) {
			const f = visible ? fadeAt(beat, i, p) : 1
			if (beat.fadeState[i] === f) continue
			beat.fadeState[i] = f
			const style = beat.fades[i].style
			// Positive: arriving (lifting from below); negative: leaving upward.
			const alpha = f >= 0 ? f : 1 + f
			const lift = f >= 0 ? 12 * (1 - f) : 12 * f
			style.opacity = alpha === 1 ? '' : String(alpha)
			style.visibility = alpha === 0 ? 'hidden' : ''
			style.transform = lift === 0 ? '' : `translateY(${lift}px)`
		}
	}
}

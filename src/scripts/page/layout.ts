/*
 * Page measurements (chapter positions, ScrollTrigger, the canvas size) are
 * redone when the page's height changes. While something animates its height,
 * that waits, and happens once when the motion ends.
 */
let held = false
let relayout = () => {}

/** Set by the page: what "measure everything again" means. */
export function onRelayout(callback: () => void) {
	relayout = callback
}

export const layoutHeld = () => held

export function holdLayout(hold: boolean) {
	held = hold
	if (!hold) relayout()
}

export function relayoutNow() {
	relayout()
}

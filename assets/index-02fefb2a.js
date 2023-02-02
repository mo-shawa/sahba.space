(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const jd="148",Jd=0,qc=1,Qd=2,Hh=1,ep=2,Ps=3,xr=0,Fi=1,_c=2,mo=3,Un=0,Jr=1,Il=2,Yc=3,Zc=4,tp=5,Wr=100,ip=101,np=102,Kc=103,$c=104,rp=200,sp=201,op=202,ap=203,Wh=204,Xh=205,lp=206,cp=207,up=208,hp=209,fp=210,dp=0,pp=1,mp=2,Fl=3,_p=4,gp=5,xp=6,vp=7,qh=0,Mp=1,yp=2,gn=0,Sp=1,bp=2,Tp=3,Ep=4,wp=5,Yh=300,ss=301,os=302,Ol=303,Ul=304,wa=306,Nl=1e3,Xi=1001,Bl=1002,Zt=1003,jc=1004,Ba=1005,Ri=1006,Ap=1007,Zs=1008,vr=1009,Rp=1010,Cp=1011,Zh=1012,Pp=1013,sr=1014,or=1015,Ks=1016,Dp=1017,Lp=1018,Qr=1020,Ip=1021,Fp=1022,qi=1023,Op=1024,Up=1025,cr=1026,as=1027,Np=1028,Bp=1029,zp=1030,kp=1031,Gp=1033,za=33776,ka=33777,Ga=33778,Va=33779,Jc=35840,Qc=35841,eu=35842,tu=35843,Vp=36196,iu=37492,nu=37496,ru=37808,su=37809,ou=37810,au=37811,lu=37812,cu=37813,uu=37814,hu=37815,fu=37816,du=37817,pu=37818,mu=37819,_u=37820,gu=37821,xu=36492,Mr=3e3,at=3001,Hp=3200,Wp=3201,Xp=0,qp=1,$i="srgb",$s="srgb-linear",Ha=7680,Yp=519,vu=35044,Mu="300 es",zl=1035;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,yu=180/Math.PI;function oo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function _i(r,e,t){return Math.max(e,Math.min(t,r))}function Zp(r,e){return(r%e+e)%e}function Xa(r,e,t){return(1-t)*r+t*e}function Su(r){return(r&r-1)===0&&r!==0}function kl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _o(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ui(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vi{constructor(){vi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],d=n[0],p=n[3],g=n[6],S=n[1],v=n[4],y=n[7],M=n[2],w=n[5],R=n[8];return s[0]=o*d+a*S+l*M,s[3]=o*p+a*v+l*w,s[6]=o*g+a*y+l*R,s[1]=c*d+u*S+f*M,s[4]=c*p+u*v+f*w,s[7]=c*g+u*y+f*R,s[2]=h*d+m*S+_*M,s[5]=h*p+m*v+_*w,s[8]=h*g+m*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,_=t*f+i*h+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=f*d,e[1]=(n*c-u*i)*d,e[2]=(a*i-n*o)*d,e[3]=h*d,e[4]=(u*t-n*l)*d,e[5]=(n*s-a*t)*d,e[6]=m*d,e[7]=(i*l-c*t)*d,e[8]=(o*t-i*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new vi;function Kh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ya={[$i]:{[$s]:ur},[$s]:{[$i]:Jo}},Wt={legacyMode:!0,get workingColorSpace(){return $s},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ya[e]&&Ya[e][t]!==void 0){const i=Ya[e][t];return r.r=i(r.r),r.g=i(r.g),r.b=i(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},Ni={h:0,s:0,l:0},go={h:0,s:0,l:0};function Za(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function xo(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Wt.workingColorSpace){if(e=Zp(e,1),t=_i(t,0,1),i=_i(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Za(o,s,e+1/3),this.g=Za(o,s,e),this.b=Za(o,s,e-1/3)}return Wt.toWorkingColorSpace(this,n),this}setStyle(e,t=$i){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Wt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Wt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$i){const i=$h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$i){return Wt.fromWorkingColorSpace(xo(this,St),e),_i(St.r*255,0,255)<<16^_i(St.g*255,0,255)<<8^_i(St.b*255,0,255)<<0}getHexString(e=$i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(xo(this,St),t);const i=St.r,n=St.g,s=St.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(n-s)/f+(n<s?6:0);break;case n:l=(s-i)/f+2;break;case s:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(xo(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=$i){return Wt.fromWorkingColorSpace(xo(this,St),e),e!==$i?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Ni),Ni.h+=e,Ni.s+=t,Ni.l+=i,this.setHSL(Ni.h,Ni.s,Ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(go);const i=Xa(Ni.h,go.h,t),n=Xa(Ni.s,go.s,t),s=Xa(Ni.l,go.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}st.NAMES=$h;let Ar;class jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=da("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jh{constructor(e=null){this.isSource=!0,this.uuid=oo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Ka(n[o].image)):s.push(Ka(n[o]))}else s=Ka(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kp=0;class Mi extends gs{constructor(e=Mi.DEFAULT_IMAGE,t=Mi.DEFAULT_MAPPING,i=Xi,n=Xi,s=Ri,o=Zs,a=qi,l=vr,c=Mi.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=oo(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=Yh;Mi.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,n=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,M=(g+1)/2,w=(u+h)/4,R=(f+d)/4,x=(_+p)/4;return v>y&&v>M?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):y>M?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=x/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=R/s,n=x/s),this.set(i,n,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-d)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yr extends gs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new Mi(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ri,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qh extends Mi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $p extends Mi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3];const h=s[o+0],m=s[o+1],_=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==_){let p=1-a;const g=l*h+c*m+u*_+f*d,S=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,g*S);p=Math.sin(p*w)/M,a=Math.sin(a*w)/M}const y=a*S;if(l=l*p+h*y,c=c*p+m*y,u=u*p+_*y,f=f*p+d*y,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-a*m,e[t+2]=c*_+u*m+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),f=a(s/2),h=l(i/2),m=l(n/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-n)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-n)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_i(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+n*c-s*l,this._y=n*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*n-a*i,u=l*i+a*t-s*n,f=l*n+s*i-o*t,h=-s*t-o*i-a*n;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_i(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new V,bu=new ao;class lo{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<n&&(n=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,n),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<n&&(n=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,n),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Kn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox),ja.applyMatrix4(e.matrixWorld),this.union(ja);const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),vo.subVectors(this.max,Ms),Rr.subVectors(e.a,Ms),Cr.subVectors(e.b,Ms),Pr.subVectors(e.c,Ms),Tn.subVectors(Cr,Rr),En.subVectors(Pr,Cr),$n.subVectors(Rr,Pr);let t=[0,-Tn.z,Tn.y,0,-En.z,En.y,0,-$n.z,$n.y,Tn.z,0,-Tn.x,En.z,0,-En.x,$n.z,0,-$n.x,-Tn.y,Tn.x,0,-En.y,En.x,0,-$n.y,$n.x,0];return!Ja(t,Rr,Cr,Pr,vo)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,Rr,Cr,Pr,vo))?!1:(Mo.crossVectors(Tn,En),t=[Mo.x,Mo.y,Mo.z],Ja(t,Rr,Cr,Pr,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new V,new V,new V,new V,new V,new V,new V,new V],Kn=new V,ja=new lo,Rr=new V,Cr=new V,Pr=new V,Tn=new V,En=new V,$n=new V,Ms=new V,vo=new V,Mo=new V,jn=new V;function Ja(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){jn.fromArray(r,s);const a=n.x*Math.abs(jn.x)+n.y*Math.abs(jn.y)+n.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=i.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jp=new lo,ys=new V,Qa=new V;class Aa{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ys,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Qa)),this.expandByPoint(ys.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new V,el=new V,yo=new V,wn=new V,tl=new V,So=new V,il=new V;class ef{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.direction).multiplyScalar(t).add(this.origin),an.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){el.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(el);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yo),a=wn.dot(this.direction),l=-wn.dot(yo),c=wn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),n&&n.copy(yo).multiplyScalar(h).add(el),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const i=an.dot(this.direction),n=an.dot(an)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,i,n,s){tl.subVectors(t,e),So.subVectors(i,e),il.crossVectors(tl,So);let o=this.direction.dot(il),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const l=a*this.direction.dot(So.crossVectors(wn,So));if(l<0)return null;const c=a*this.direction.dot(tl.cross(wn));if(c<0||l+c>o)return null;const u=-a*wn.dot(il);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,o,a,l,c,u,f,h,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,_=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h+d*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,_=a*u,d=a*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=_*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,Qp)}lookAt(e,t,i){const n=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),An.crossVectors(i,hi),An.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),An.crossVectors(i,hi)),An.normalize(),bo.crossVectors(hi,An),n[0]=An.x,n[4]=bo.x,n[8]=hi.x,n[1]=An.y,n[5]=bo.y,n[9]=hi.y,n[2]=An.z,n[6]=bo.z,n[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],d=i[6],p=i[10],g=i[14],S=i[3],v=i[7],y=i[11],M=i[15],w=n[0],R=n[4],x=n[8],E=n[12],P=n[1],N=n[5],q=n[9],O=n[13],L=n[2],z=n[6],G=n[10],$=n[14],B=n[3],J=n[7],C=n[11],k=n[15];return s[0]=o*w+a*P+l*L+c*B,s[4]=o*R+a*N+l*z+c*J,s[8]=o*x+a*q+l*G+c*C,s[12]=o*E+a*O+l*$+c*k,s[1]=u*w+f*P+h*L+m*B,s[5]=u*R+f*N+h*z+m*J,s[9]=u*x+f*q+h*G+m*C,s[13]=u*E+f*O+h*$+m*k,s[2]=_*w+d*P+p*L+g*B,s[6]=_*R+d*N+p*z+g*J,s[10]=_*x+d*q+p*G+g*C,s[14]=_*E+d*O+p*$+g*k,s[3]=S*w+v*P+y*L+M*B,s[7]=S*R+v*N+y*z+M*J,s[11]=S*x+v*q+y*G+M*C,s[15]=S*E+v*O+y*$+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+s*l*f-n*c*f-s*a*h+i*c*h+n*a*m-i*l*m)+d*(+t*l*m-t*c*h+s*o*h-n*o*m+n*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+g*(-n*a*u-t*l*f+t*a*h+n*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],S=f*p*c-d*h*c+d*l*m-a*p*m-f*l*g+a*h*g,v=_*h*c-u*p*c-_*l*m+o*p*m+u*l*g-o*h*g,y=u*d*c-_*f*c+_*a*m-o*d*m-u*a*g+o*f*g,M=_*f*l-u*d*l-_*a*h+o*d*h+u*a*p-o*f*p,w=t*S+i*v+n*y+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(d*h*s-f*p*s-d*n*m+i*p*m+f*n*g-i*h*g)*R,e[2]=(a*p*s-d*l*s+d*n*c-i*p*c-a*n*g+i*l*g)*R,e[3]=(f*l*s-a*h*s-f*n*c+i*h*c+a*n*m-i*l*m)*R,e[4]=v*R,e[5]=(u*p*s-_*h*s+_*n*m-t*p*m-u*n*g+t*h*g)*R,e[6]=(_*l*s-o*p*s-_*n*c+t*p*c+o*n*g-t*l*g)*R,e[7]=(o*h*s-u*l*s+u*n*c-t*h*c-o*n*m+t*l*m)*R,e[8]=y*R,e[9]=(_*f*s-u*d*s-_*i*m+t*d*m+u*i*g-t*f*g)*R,e[10]=(o*d*s-_*a*s+_*i*c-t*d*c-o*i*g+t*a*g)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*R,e[12]=M*R,e[13]=(u*d*n-_*f*n+_*i*h-t*d*h-u*i*p+t*f*p)*R,e[14]=(_*a*n-o*d*n-_*i*l+t*d*l+o*i*p-t*a*p)*R,e[15]=(o*f*n-u*a*n+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,_=s*f,d=o*u,p=o*f,g=a*f,S=l*c,v=l*u,y=l*f,M=i.x,w=i.y,R=i.z;return n[0]=(1-(d+g))*M,n[1]=(m+y)*M,n[2]=(_-v)*M,n[3]=0,n[4]=(m-y)*w,n[5]=(1-(h+g))*w,n[6]=(p+S)*w,n[7]=0,n[8]=(_+v)*R,n[9]=(p-S)*R,n[10]=(1-(h+d))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Dr.set(n[0],n[1],n[2]).length();const o=Dr.set(n[4],n[5],n[6]).length(),a=Dr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Bi.copy(this);const c=1/s,u=1/o,f=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=u,Bi.elements[5]*=u,Bi.elements[6]*=u,Bi.elements[8]*=f,Bi.elements[9]*=f,Bi.elements[10]*=f,t.setFromRotationMatrix(Bi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o){const a=this.elements,l=1/(t-e),c=1/(i-n),u=1/(o-s),f=(t+e)*l,h=(i+n)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Dr=new V,Bi=new Dt,Jp=new V(0,0,0),Qp=new V(1,1,1),An=new V,bo=new V,hi=new V,Tu=new Dt,Eu=new ao;class co{constructor(e=0,t=0,i=0,n=co.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(_i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_i(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_i(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_i(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_i(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_i(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}co.DefaultOrder="XYZ";co.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let em=0;const wu=new V,Lr=new ao,ln=new Dt,To=new V,Ss=new V,tm=new V,im=new ao,Au=new V(1,0,0),Ru=new V(0,1,0),Cu=new V(0,0,1),nm={type:"added"},Pu={type:"removed"};class ri extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DefaultUp.clone();const e=new V,t=new co,i=new ao,n=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Dt},normalMatrix:{value:new vi}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=ri.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ri.DefaultMatrixWorldAutoUpdate,this.layers=new tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?To.copy(e):To.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ss,To,this.up):ln.lookAt(To,Ss,this.up),this.quaternion.setFromRotationMatrix(ln),n&&(ln.extractRotation(n.matrixWorld),Lr.setFromRotationMatrix(ln),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Pu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ri.DefaultUp=new V(0,1,0);ri.DefaultMatrixAutoUpdate=!0;ri.DefaultMatrixWorldAutoUpdate=!0;const zi=new V,cn=new V,nl=new V,un=new V,Ir=new V,Fr=new V,Du=new V,rl=new V,sl=new V,ol=new V;class dn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),zi.subVectors(e,t),n.cross(zi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){zi.subVectors(n,t),cn.subVectors(i,t),nl.subVectors(e,t);const o=zi.dot(zi),a=zi.dot(cn),l=zi.dot(nl),c=cn.dot(cn),u=cn.dot(nl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,un),l.set(0,0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l}static isFrontFacing(e,t,i,n){return zi.subVectors(i,t),cn.subVectors(e,t),zi.cross(cn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),zi.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return dn.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Ir.subVectors(n,i),Fr.subVectors(s,i),rl.subVectors(e,i);const l=Ir.dot(rl),c=Fr.dot(rl);if(l<=0&&c<=0)return t.copy(i);sl.subVectors(e,n);const u=Ir.dot(sl),f=Fr.dot(sl);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ir,o);ol.subVectors(e,s);const m=Ir.dot(ol),_=Fr.dot(ol);if(_>=0&&m<=_)return t.copy(s);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Fr,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Du.subVectors(s,n),a=(f-u)/(f-u+(m-_)),t.copy(n).addScaledVector(Du,a);const g=1/(p+d+h);return o=d*g,a=h*g,t.copy(i).addScaledVector(Ir,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let rm=0;class uo extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Jr,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nf extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new V,Eo=new ot;class yi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array),n=ui(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array),n=ui(n,this.array),s=ui(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rf extends yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sf extends yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hr extends yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sm=0;const Ei=new Dt,al=new ri,Or=new V,fi=new lo,bs=new lo,Ct=new V;class bn extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?sf:rf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vi().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(fi.min,bs.min),fi.expandByPoint(Ct),Ct.addVectors(fi.max,bs.max),fi.expandByPoint(Ct)):(fi.expandByPoint(bs.min),fi.expandByPoint(bs.max))}fi.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),Ct.add(Or)),n=Math.max(n,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new V,u[P]=new V;const f=new V,h=new V,m=new V,_=new ot,d=new ot,p=new ot,g=new V,S=new V;function v(P,N,q){f.fromArray(n,P*3),h.fromArray(n,N*3),m.fromArray(n,q*3),_.fromArray(o,P*2),d.fromArray(o,N*2),p.fromArray(o,q*2),h.sub(f),m.sub(f),d.sub(_),p.sub(_);const O=1/(d.x*p.y-p.x*d.y);isFinite(O)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(O),S.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(O),c[P].add(g),c[N].add(g),c[q].add(g),u[P].add(S),u[N].add(S),u[q].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let P=0,N=y.length;P<N;++P){const q=y[P],O=q.start,L=q.count;for(let z=O,G=O+L;z<G;z+=3)v(i[z+0],i[z+1],i[z+2])}const M=new V,w=new V,R=new V,x=new V;function E(P){R.fromArray(s,P*3),x.copy(R);const N=c[P];M.copy(N),M.sub(R.multiplyScalar(R.dot(N))).normalize(),w.crossVectors(x,N);const O=w.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=O}for(let P=0,N=y.length;P<N;++P){const q=y[P],O=q.start,L=q.count;for(let z=O,G=O+L;z<G;z+=3)E(i[z+0]),E(i[z+1]),E(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const n=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(n,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)n.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(n,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let g=0;g<u;g++)h[_++]=c[m++]}return new yi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lu=new Dt,Ur=new ef,ll=new Aa,Ts=new V,Es=new V,ws=new V,cl=new V,wo=new V,Ao=new ot,Ro=new ot,Co=new ot,ul=new V,Po=new V;class Cn extends ri{constructor(e=new bn,t=new nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(cl.fromBufferAttribute(f,e),o?wo.addScaledVector(cl,u):wo.addScaledVector(cl.sub(t),u))}t.add(wo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(s),e.ray.intersectsSphere(ll)===!1)||(Lu.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Lu),i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(n))for(let m=0,_=f.length;m<_;m++){const d=f[m],p=n[d.materialIndex],g=Math.max(d.start,h.start),S=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let v=g,y=S;v<y;v+=3){const M=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);o=Do(this,p,e,Ur,c,u,M,w,R),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let d=m,p=_;d<p;d+=3){const g=a.getX(d),S=a.getX(d+1),v=a.getX(d+2);o=Do(this,n,e,Ur,c,u,g,S,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(n))for(let m=0,_=f.length;m<_;m++){const d=f[m],p=n[d.materialIndex],g=Math.max(d.start,h.start),S=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=g,y=S;v<y;v+=3){const M=v,w=v+1,R=v+2;o=Do(this,p,e,Ur,c,u,M,w,R),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let d=m,p=_;d<p;d+=3){const g=d,S=d+1,v=d+2;o=Do(this,n,e,Ur,c,u,g,S,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function om(r,e,t,i,n,s,o,a){let l;if(e.side===Fi?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===xr,a),l===null)return null;Po.copy(a),Po.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:r}}function Do(r,e,t,i,n,s,o,a,l){r.getVertexPosition(o,Ts),r.getVertexPosition(a,Es),r.getVertexPosition(l,ws);const c=om(r,e,t,i,Ts,Es,ws,ul);if(c){n&&(Ao.fromBufferAttribute(n,o),Ro.fromBufferAttribute(n,a),Co.fromBufferAttribute(n,l),c.uv=dn.getUV(ul,Ts,Es,ws,Ao,Ro,Co,new ot)),s&&(Ao.fromBufferAttribute(s,o),Ro.fromBufferAttribute(s,a),Co.fromBufferAttribute(s,l),c.uv2=dn.getUV(ul,Ts,Es,ws,Ao,Ro,Co,new ot));const u={a:o,b:a,c:l,normal:new V,materialIndex:0};dn.getNormal(Ts,Es,ws,u.normal),c.face=u}return c}class ho extends bn{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,n,o,2),_("x","z","y",1,-1,e,i,-t,n,o,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new hr(c,3)),this.setAttribute("normal",new hr(u,3)),this.setAttribute("uv",new hr(f,2));function _(d,p,g,S,v,y,M,w,R,x,E){const P=y/R,N=M/x,q=y/2,O=M/2,L=w/2,z=R+1,G=x+1;let $=0,B=0;const J=new V;for(let C=0;C<G;C++){const k=C*N-O;for(let Y=0;Y<z;Y++){const te=Y*P-q;J[d]=te*S,J[p]=k*v,J[g]=L,c.push(J.x,J.y,J.z),J[d]=0,J[p]=0,J[g]=w>0?1:-1,u.push(J.x,J.y,J.z),f.push(Y/R),f.push(1-C/x),$+=1}}for(let C=0;C<x;C++)for(let k=0;k<R;k++){const Y=h+k+z*C,te=h+k+z*(C+1),ie=h+(k+1)+z*(C+1),se=h+(k+1)+z*C;l.push(Y,te,se),l.push(te,ie,se),B+=6}a.addGroup(m,B,E),m+=B,h+=$}}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function qt(r){const e={};for(let t=0;t<r.length;t++){const i=ls(r[t]);for(const n in i)e[n]=i[n]}return e}function am(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function of(r){return r.getRenderTarget()===null&&r.outputEncoding===at?$i:$s}const lm={clone:ls,merge:qt},cm=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,um=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Gn extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class af extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ci extends af{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yu*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Br=1;class hm extends ri{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Ci(Nr,Br,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new Ci(Nr,Br,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ci(Nr,Br,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ci(Nr,Br,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ci(Nr,Br,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ci(Nr,Br,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class lf extends Mi{constructor(e,t,i,n,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,n,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fm extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new lf(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ho(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fi,blending:Un});s.uniforms.tEquirect.value=t;const o=new Cn(n,s),a=t.minFilter;return t.minFilter===Zs&&(t.minFilter=Ri),new hm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const hl=new V,dm=new V,pm=new vi;class er{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=hl.subVectors(i,t).cross(dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(hl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pm.getNormalMatrix(e),n=this.coplanarPoint(hl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Aa,Lo=new V;class cf{constructor(e=new er,t=new er,i=new er,n=new er,s=new er,o=new er){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],_=i[10],d=i[11],p=i[12],g=i[13],S=i[14],v=i[15];return t[0].setComponents(a-n,f-l,d-h,v-p).normalize(),t[1].setComponents(a+n,f+l,d+h,v+p).normalize(),t[2].setComponents(a+s,f+c,d+m,v+g).normalize(),t[3].setComponents(a-s,f-c,d-m,v-g).normalize(),t[4].setComponents(a-o,f-u,d-_,v-S).normalize(),t[5].setComponents(a+o,f+u,d+_,v+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Lo.x=n.normal.x>0?e.max.x:e.min.x,Lo.y=n.normal.y>0?e.max.y:e.min.y,Lo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uf(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function mm(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const f=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(r.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,n(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class gc extends bn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,f=e/a,h=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<u;g++){const S=g*h-o;for(let v=0;v<c;v++){const y=v*f-s;_.push(y,-S,0),d.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){const v=S+c*g,y=S+c*(g+1),M=S+1+c*(g+1),w=S+1+c*g;m.push(v,y,w),m.push(y,M,w)}this.setIndex(m),this.setAttribute("position",new hr(_,3)),this.setAttribute("normal",new hr(d,3)),this.setAttribute("uv",new hr(p,2))}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}const _m=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,gm=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,xm=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,vm=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Mm=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,ym=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Sm=`
vec3 transformed = vec3( position );
`,bm=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Tm=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

#ifdef USE_IRIDESCENCE

	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,Em=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			 return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,wm=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Am=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,Rm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Cm=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Pm=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Dm=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Lm=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Im=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Fm=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Om=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

float luminance( const in vec3 rgb ) {

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,Um=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,Nm=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Bm=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,zm=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,km=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Gm=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Vm=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Hm=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Wm=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Xm=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,qm=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,Ym=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,Zm=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,Km=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,$m=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,jm=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Jm=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Qm=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,e_=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,t_=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,i_=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,n_=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,r_=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,s_=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,o_=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,a_=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,l_=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,c_=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,u_=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,h_=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	#ifdef USE_IRIDESCENCE

		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );

	#else

		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,f_=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,d_=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,p_=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,m_=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,__=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,g_=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,x_=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,v_=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,M_=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,y_=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,S_=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,b_=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,T_=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,E_=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,w_=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,A_=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;

			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,R_=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,C_=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,P_=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,D_=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,L_=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,I_=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,F_=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,O_=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,U_=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,N_=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,B_=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,z_=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,k_=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}

float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,G_=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,V_=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,H_=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,W_=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,X_=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,q_=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Y_=`
#if NUM_SPOT_LIGHT_COORDS > 0

  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,Z_=`

#if NUM_SPOT_LIGHT_COORDS > 0

  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,K_=`
#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,$_=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,j_=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,J_=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );

		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );

		y = dy * ( y + 0.5 );

		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

		mat4 bone = mat4( v1, v2, v3, v4 );

		return bone;

	}

#endif
`,Q_=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,eg=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,tg=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,ig=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,ng=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,rg=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,sg=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );

#endif
`,og=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef texture2DLodEXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,ag=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,lg=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,cg=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,ug=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,hg=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,fg=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,dg=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,pg=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,mg=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,_g=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,gg=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,xg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,vg=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Mg=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,yg=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,Sg=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,bg=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,Tg=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Eg=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,wg=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Ag=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Rg=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Cg=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Pg=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Dg=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Lg=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Ig=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Fg=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Og=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Ug=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Ng=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Bg=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,zg=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,kg=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Gg=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Vg=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Hg=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Wg=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Xg=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,qg=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Yg=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,He={alphamap_fragment:_m,alphamap_pars_fragment:gm,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:Mm,aomap_pars_fragment:ym,begin_vertex:Sm,beginnormal_vertex:bm,bsdfs:Tm,iridescence_fragment:Em,bumpmap_pars_fragment:wm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Pm,color_fragment:Dm,color_pars_fragment:Lm,color_pars_vertex:Im,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:km,emissivemap_pars_fragment:Gm,encodings_fragment:Vm,encodings_pars_fragment:Hm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:qm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:s_,envmap_vertex:Zm,fog_vertex:Km,fog_pars_vertex:$m,fog_fragment:jm,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_fragment:e_,lightmap_pars_fragment:t_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:n_,lights_pars_begin:r_,lights_toon_fragment:o_,lights_toon_pars_fragment:a_,lights_phong_fragment:l_,lights_phong_pars_fragment:c_,lights_physical_fragment:u_,lights_physical_pars_fragment:h_,lights_fragment_begin:f_,lights_fragment_maps:d_,lights_fragment_end:p_,logdepthbuf_fragment:m_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:x_,map_fragment:v_,map_pars_fragment:M_,map_particle_fragment:y_,map_particle_pars_fragment:S_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:T_,morphcolor_vertex:E_,morphnormal_vertex:w_,morphtarget_pars_vertex:A_,morphtarget_vertex:R_,normal_fragment_begin:C_,normal_fragment_maps:P_,normal_pars_fragment:D_,normal_pars_vertex:L_,normal_vertex:I_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:B_,output_fragment:z_,packing:k_,premultiplied_alpha_fragment:G_,project_vertex:V_,dithering_fragment:H_,dithering_pars_fragment:W_,roughnessmap_fragment:X_,roughnessmap_pars_fragment:q_,shadowmap_pars_fragment:Y_,shadowmap_pars_vertex:Z_,shadowmap_vertex:K_,shadowmask_pars_fragment:$_,skinbase_vertex:j_,skinning_pars_vertex:J_,skinning_vertex:Q_,skinnormal_vertex:eg,specularmap_fragment:tg,specularmap_pars_fragment:ig,tonemapping_fragment:ng,tonemapping_pars_fragment:rg,transmission_fragment:sg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:lg,uv_vertex:cg,uv2_pars_fragment:ug,uv2_pars_vertex:hg,uv2_vertex:fg,worldpos_vertex:dg,background_vert:pg,background_frag:mg,backgroundCube_vert:_g,backgroundCube_frag:gg,cube_vert:xg,cube_frag:vg,depth_vert:Mg,depth_frag:yg,distanceRGBA_vert:Sg,distanceRGBA_frag:bg,equirect_vert:Tg,equirect_frag:Eg,linedashed_vert:wg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Dg,meshmatcap_vert:Lg,meshmatcap_frag:Ig,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Ug,meshphong_frag:Ng,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:kg,meshtoon_frag:Gg,points_vert:Vg,points_frag:Hg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vi},uv2Transform:{value:new vi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vi}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vi}}},Ji={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new st(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new st(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new vi},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Ji.physical={uniforms:qt([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ot(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Io={r:0,b:0,g:0};function Zg(r,e,t,i,n,s,o){const a=new st(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(p,g){let S=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wa)?(u===void 0&&(u=new Cn(new ho(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ls(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==at,(f!==v||h!==v.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Cn(new gc(2,2),new Gn({name:"BackgroundMaterial",uniforms:ls(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,g){p.getRGB(Io,of(r)),i.buffers.color.setClear(Io.r,Io.g,Io.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:_}}function Kg(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(L,z,G,$,B){let J=!1;if(o){const C=d($,G,z);c!==C&&(c=C,m(c.object)),J=g(L,$,G,B),J&&S(L,$,G,B)}else{const C=z.wireframe===!0;(c.geometry!==$.id||c.program!==G.id||c.wireframe!==C)&&(c.geometry=$.id,c.program=G.id,c.wireframe=C,J=!0)}B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,x(L,z,G,$),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function h(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function d(L,z,G){const $=G.wireframe===!0;let B=a[L.id];B===void 0&&(B={},a[L.id]=B);let J=B[z.id];J===void 0&&(J={},B[z.id]=J);let C=J[$];return C===void 0&&(C=p(h()),J[$]=C),C}function p(L){const z=[],G=[],$=[];for(let B=0;B<n;B++)z[B]=0,G[B]=0,$[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:$,object:L,attributes:{},index:null}}function g(L,z,G,$){const B=c.attributes,J=z.attributes;let C=0;const k=G.getAttributes();for(const Y in k)if(k[Y].location>=0){const ie=B[Y];let se=J[Y];if(se===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;C++}return c.attributesNum!==C||c.index!==$}function S(L,z,G,$){const B={},J=z.attributes;let C=0;const k=G.getAttributes();for(const Y in k)if(k[Y].location>=0){let ie=J[Y];ie===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),B[Y]=se,C++}c.attributes=B,c.attributesNum=C,c.index=$}function v(){const L=c.newAttributes;for(let z=0,G=L.length;z<G;z++)L[z]=0}function y(L){M(L,0)}function M(L,z){const G=c.newAttributes,$=c.enabledAttributes,B=c.attributeDivisors;G[L]=1,$[L]===0&&(r.enableVertexAttribArray(L),$[L]=1),B[L]!==z&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),B[L]=z)}function w(){const L=c.newAttributes,z=c.enabledAttributes;for(let G=0,$=z.length;G<$;G++)z[G]!==L[G]&&(r.disableVertexAttribArray(G),z[G]=0)}function R(L,z,G,$,B,J){i.isWebGL2===!0&&(G===r.INT||G===r.UNSIGNED_INT)?r.vertexAttribIPointer(L,z,G,B,J):r.vertexAttribPointer(L,z,G,$,B,J)}function x(L,z,G,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const B=$.attributes,J=G.getAttributes(),C=z.defaultAttributeValues;for(const k in J){const Y=J[k];if(Y.location>=0){let te=B[k];if(te===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),te!==void 0){const ie=te.normalized,se=te.itemSize,I=t.get(te);if(I===void 0)continue;const Le=I.buffer,he=I.type,Ie=I.bytesPerElement;if(te.isInterleavedBufferAttribute){const ue=te.data,ze=ue.stride,de=te.offset;if(ue.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)M(Y.location+ve,ue.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<Y.locationSize;ve++)y(Y.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let ve=0;ve<Y.locationSize;ve++)R(Y.location+ve,se/Y.locationSize,he,ie,ze*Ie,(de+se/Y.locationSize*ve)*Ie)}else{if(te.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)M(Y.location+ue,te.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<Y.locationSize;ue++)y(Y.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let ue=0;ue<Y.locationSize;ue++)R(Y.location+ue,se/Y.locationSize,he,ie,se*Ie,se/Y.locationSize*ue*Ie)}}else if(C!==void 0){const ie=C[k];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(Y.location,ie);break;case 3:r.vertexAttrib3fv(Y.location,ie);break;case 4:r.vertexAttrib4fv(Y.location,ie);break;default:r.vertexAttrib1fv(Y.location,ie)}}}}w()}function E(){q();for(const L in a){const z=a[L];for(const G in z){const $=z[G];for(const B in $)_($[B].object),delete $[B];delete z[G]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const z=a[L.id];for(const G in z){const $=z[G];for(const B in $)_($[B].object),delete $[B];delete z[G]}delete a[L.id]}function N(L){for(const z in a){const G=a[z];if(G[L.id]===void 0)continue;const $=G[L.id];for(const B in $)_($[B].object),delete $[B];delete G[L.id]}}function q(){O(),u=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:O,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function $g(r,e,t,i){const n=i.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(n)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function jg(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),M=v&&y,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:w}}function Jg(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new er,a=new vi,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const _=f.length!==0||h||i!==0||n;return n=h,t=u(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const _=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,g=r.get(f);if(!n||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,v=S*4;let y=g.clippingState||null;l.value=y,y=u(_,h,v,m);for(let M=0;M!==v;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=m;v!==d;++v,y+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Qg(r){let e=new WeakMap;function t(o,a){return a===Ol?o.mapping=ss:a===Ul&&(o.mapping=os),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ol||a===Ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fm(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class e0 extends af{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,Iu=[.125,.215,.35,.446,.526,.582],rr=20,fl=new e0,Fu=new st;let dl=null;const tr=(1+Math.sqrt(5))/2,kr=1/tr,Ou=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,tr,kr),new V(0,tr,-kr),new V(kr,0,tr),new V(-kr,0,tr),new V(tr,kr,0),new V(-tr,kr,0)];class Uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){dl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Ks,format:qi,encoding:Mr,depthBuffer:!1},n=Nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(s)),this._blurMaterial=i0(s,e,t)}return n}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,i,n){const a=new Ci(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Fu),u.toneMapping=gn,u.autoClear=!1;const m=new nf({name:"PMREM.Background",side:Fi,depthWrite:!1,depthTest:!1}),_=new Cn(new ho,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Fu),d=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):S===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;Fo(n,S*v,g>2?v:0,v,v),u.setRenderTarget(n),d&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===ss||e.mapping===os;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Ou[(n-1)%Ou.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Cn(this._lodPlanes[n],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),d=s/_,p=isFinite(s)?1+Math.floor(u*d):rr;p>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const g=[];let S=0;for(let R=0;R<rr;++R){const x=R/d,E=Math.exp(-x*x/2);g.push(E),R===0?S+=E:R<p&&(S+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const y=this._sizeLods[n],M=3*y*(n>v-Yr?n-v+Yr:0),w=4*(this._cubeSize-y);Fo(t,M,w,3*y,2*y),l.setRenderTarget(t),l.render(f,fl)}}function t0(r){const e=[],t=[],i=[];let n=r;const s=r-Yr+1+Iu.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-Yr?l=Iu[o-r+Yr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,d=3,p=2,g=1,S=new Float32Array(d*_*m),v=new Float32Array(p*_*m),y=new Float32Array(g*_*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,x=w>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];S.set(E,d*_*w),v.set(h,p*_*w);const P=[w,w,w,w,w,w];y.set(P,g*_*w)}const M=new bn;M.setAttribute("position",new yi(S,d)),M.setAttribute("uv",new yi(v,p)),M.setAttribute("faceIndex",new yi(y,g)),e.push(M),n>Yr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nu(r,e,t){const i=new yr(r,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function i0(r,e,t){const i=new Float32Array(rr),n=new V(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Bu(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function zu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n0(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ol||l===Ul,u=l===ss||l===os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Uu(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new Uu(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function r0(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function s0(r,e,t,i){const n={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete n[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],r.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],r.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let v=0,y=S.length;v<y;v+=3){const M=S[v+0],w=S[v+1],R=S[v+2];h.push(M,w,w,R,R,M)}}else{const S=_.array;d=_.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const M=v+0,w=v+1,R=v+2;h.push(M,w,w,R,R,M)}}const p=new(Kh(h)?sf:rf)(h,1);p.version=d;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function o0(r,e,t,i){const n=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let d,p;if(n)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function a0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function l0(r,e){return r[0]-e[0]}function c0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function u0(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let g=s.get(u);if(g===void 0||g.count!==p){let G=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var _=G;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),w===!0&&(P=3);let N=u.attributes.position.count*P,q=1;N>e.maxTextureSize&&(q=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const O=new Float32Array(N*q*4*p),L=new Qh(O,N,q,p);L.type=or,L.needsUpdate=!0;const z=P*4;for(let $=0;$<p;$++){const B=R[$],J=x[$],C=E[$],k=N*q*4*$;for(let Y=0;Y<B.count;Y++){const te=Y*z;y===!0&&(o.fromBufferAttribute(B,Y),O[k+te+0]=o.x,O[k+te+1]=o.y,O[k+te+2]=o.z,O[k+te+3]=0),M===!0&&(o.fromBufferAttribute(J,Y),O[k+te+4]=o.x,O[k+te+5]=o.y,O[k+te+6]=o.z,O[k+te+7]=0),w===!0&&(o.fromBufferAttribute(C,Y),O[k+te+8]=o.x,O[k+te+9]=o.y,O[k+te+10]=o.z,O[k+te+11]=C.itemSize===4?o.w:1)}}g={count:p,texture:L,size:new ot(N,q)},s.set(u,g),u.addEventListener("dispose",G)}let S=0;for(let y=0;y<m.length;y++)S+=m[y];const v=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const d=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];i[u.id]=p}for(let M=0;M<d;M++){const w=p[M];w[0]=M,w[1]=m[M]}p.sort(c0);for(let M=0;M<8;M++)M<d&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(l0);const g=u.morphAttributes.position,S=u.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const w=a[M],R=w[0],x=w[1];R!==Number.MAX_SAFE_INTEGER&&x?(g&&u.getAttribute("morphTarget"+M)!==g[R]&&u.setAttribute("morphTarget"+M,g[R]),S&&u.getAttribute("morphNormal"+M)!==S[R]&&u.setAttribute("morphNormal"+M,S[R]),n[M]=x,v+=x):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),S&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),n[M]=0)}const y=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function h0(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),f}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hf=new Mi,ff=new Qh,df=new $p,pf=new lf,ku=[],Gu=[],Vu=new Float32Array(16),Hu=new Float32Array(9),Wu=new Float32Array(4);function xs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=ku[n];if(s===void 0&&(s=new Float32Array(n),ku[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ra(r,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function f0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function p0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function m0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function _0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Wu.set(i),r.uniformMatrix2fv(this.addr,!1,Wu),wt(t,i)}}function g0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Hu.set(i),r.uniformMatrix3fv(this.addr,!1,Hu),wt(t,i)}}function x0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Vu.set(i),r.uniformMatrix4fv(this.addr,!1,Vu),wt(t,i)}}function v0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function M0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function S0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function b0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function T0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function E0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function w0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function A0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||hf,n)}function R0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||df,n)}function C0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||pf,n)}function P0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||ff,n)}function D0(r){switch(r){case 5126:return f0;case 35664:return d0;case 35665:return p0;case 35666:return m0;case 35674:return _0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return y0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return T0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(r,e){r.uniform1fv(this.addr,e)}function I0(r,e){const t=xs(e,this.size,2);r.uniform2fv(this.addr,t)}function F0(r,e){const t=xs(e,this.size,3);r.uniform3fv(this.addr,t)}function O0(r,e){const t=xs(e,this.size,4);r.uniform4fv(this.addr,t)}function U0(r,e){const t=xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function N0(r,e){const t=xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function B0(r,e){const t=xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function z0(r,e){r.uniform1iv(this.addr,e)}function k0(r,e){r.uniform2iv(this.addr,e)}function G0(r,e){r.uniform3iv(this.addr,e)}function V0(r,e){r.uniform4iv(this.addr,e)}function H0(r,e){r.uniform1uiv(this.addr,e)}function W0(r,e){r.uniform2uiv(this.addr,e)}function X0(r,e){r.uniform3uiv(this.addr,e)}function q0(r,e){r.uniform4uiv(this.addr,e)}function Y0(r,e,t){const i=this.cache,n=e.length,s=Ra(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||hf,s[o])}function Z0(r,e,t){const i=this.cache,n=e.length,s=Ra(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||df,s[o])}function K0(r,e,t){const i=this.cache,n=e.length,s=Ra(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||pf,s[o])}function $0(r,e,t){const i=this.cache,n=e.length,s=Ra(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||ff,s[o])}function j0(r){switch(r){case 5126:return L0;case 35664:return I0;case 35665:return F0;case 35666:return O0;case 35674:return U0;case 35675:return N0;case 35676:return B0;case 5124:case 35670:return z0;case 35667:case 35671:return k0;case 35668:case 35672:return G0;case 35669:case 35673:return V0;case 5125:return H0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return $0}}class J0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=D0(t.type)}}class Q0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=j0(t.type)}}class ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Xu(r,e){r.seq.push(e),r.map[e.id]=e}function tx(r,e,t){const i=r.name,n=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),o=pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Xu(t,c===void 0?new J0(a,r,e):new Q0(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new ex(a),Xu(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);tx(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function qu(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let ix=0;function nx(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function rx(r){switch(r){case Mr:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Yu(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+nx(r.getShaderSource(e),o)}else return n}function sx(r,e){const t=rx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ox(r,e){let t;switch(e){case Sp:t="Linear";break;case bp:t="Reinhard";break;case Tp:t="OptimizedCineon";break;case Ep:t="ACESFilmic";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ax(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function lx(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cx(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ds(r){return r!==""}function Zu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(r){return r.replace(ux,hx)}function hx(r,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gl(t)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(r){return r.replace(fx,dx)}function dx(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ju(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function px(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ep?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ps&&(e="SHADOWMAP_TYPE_VSM"),e}function mx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qh:e="ENVMAP_BLENDING_MULTIPLY";break;case Mp:e="ENVMAP_BLENDING_MIX";break;case yp:e="ENVMAP_BLENDING_ADD";break}return e}function xx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vx(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=px(t),c=mx(t),u=_x(t),f=gx(t),h=xx(t),m=t.isWebGL2?"":ax(t),_=lx(s),d=n.createProgram();let p,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(Ds).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Ds).join(`
`),g.length>0&&(g+=`
`)):(p=[ju(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),g=[m,ju(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?He.tonemapping_pars_fragment:"",t.toneMapping!==gn?ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,sx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Gl(o),o=Zu(o,t),o=Ku(o,t),a=Gl(a),a=Zu(a,t),a=Ku(a,t),o=$u(o),a=$u(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=S+p+o,y=S+g+a,M=qu(n,n.VERTEX_SHADER,v),w=qu(n,n.FRAGMENT_SHADER,y);if(n.attachShader(d,M),n.attachShader(d,w),t.index0AttributeName!==void 0?n.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),r.debug.checkShaderErrors){const E=n.getProgramInfoLog(d).trim(),P=n.getShaderInfoLog(M).trim(),N=n.getShaderInfoLog(w).trim();let q=!0,O=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1){q=!1;const L=Yu(n,M,"vertex"),z=Yu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+L+`
`+z)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||N==="")&&(O=!1);O&&(this.diagnostics={runnable:q,programLog:E,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:g}})}n.deleteShader(M),n.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Qo(n,d)),R};let x;return this.getAttributes=function(){return x===void 0&&(x=cx(n,d)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=w,this}let Mx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sx(e),t.set(e,i)),i}}class Sx{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function bx(r,e,t,i,n,s,o){const a=new tf,l=new yx,c=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,h=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,E,P,N,q){const O=N.fog,L=q.geometry,z=x.isMeshStandardMaterial?N.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),$=G&&G.mapping===wa?G.image.height:null,B=_[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,C=J!==void 0?J.length:0;let k=0;L.morphAttributes.position!==void 0&&(k=1),L.morphAttributes.normal!==void 0&&(k=2),L.morphAttributes.color!==void 0&&(k=3);let Y,te,ie,se;if(B){const ze=Ji[B];Y=ze.vertexShader,te=ze.fragmentShader}else Y=x.vertexShader,te=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const I=r.getRenderTarget(),Le=x.alphaTest>0,he=x.clearcoat>0,Ie=x.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:x.type,vertexShader:Y,fragmentShader:te,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:I===null?r.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:Mr,map:!!x.map,matcap:!!x.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===qp,tangentSpaceNormalMap:x.normalMapType===Xp,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===at,clearcoat:he,clearcoatMap:he&&!!x.clearcoatMap,clearcoatRoughnessMap:he&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!x.clearcoatNormalMap,iridescence:Ie,iridescenceMap:Ie&&!!x.iridescenceMap,iridescenceThicknessMap:Ie&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Jr,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:k,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:gn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_c,flipSided:x.side===Fi,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(E,x),S(E,x),E.push(r.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),x.push(a.mask)}function v(x){const E=_[x.type];let P;if(E){const N=Ji[E];P=lm.clone(N.uniforms)}else P=x.uniforms;return P}function y(x,E){let P;for(let N=0,q=c.length;N<q;N++){const O=c[N];if(O.cacheKey===E){P=O,++P.usedTimes;break}}return P===void 0&&(P=new vx(r,E,x,s),c.push(P)),P}function M(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function R(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:R}}function Tx(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Ex(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ju(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qu(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(f,h,m,_,d,p){let g=r[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:d,group:p},r[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=d,g.group=p),e++,g}function a(f,h,m,_,d,p){const g=o(f,h,m,_,d,p);m.transmission>0?i.push(g):m.transparent===!0?n.push(g):t.push(g)}function l(f,h,m,_,d,p){const g=o(f,h,m,_,d,p);m.transmission>0?i.unshift(g):m.transparent===!0?n.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||Ex),i.length>1&&i.sort(h||Ju),n.length>1&&n.sort(h||Ju)}function u(){for(let f=e,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:u,sort:c}}function wx(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new Qu,r.set(i,[o])):n>=s.length?(o=new Qu,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ax(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new st};break;case"SpotLight":t={position:new V,direction:new V,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function Rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cx=0;function Px(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Dx(r,e){const t=new Ax,i=Rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new V);const s=new V,o=new Dt,a=new Dt;function l(u,f){let h=0,m=0,_=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,p=0,g=0,S=0,v=0,y=0,M=0,w=0,R=0,x=0;u.sort(Px);const E=f!==!0?Math.PI:1;for(let N=0,q=u.length;N<q;N++){const O=u[N],L=O.color,z=O.intensity,G=O.distance,$=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=L.r*z*E,m+=L.g*z*E,_+=L.b*z*E;else if(O.isLightProbe)for(let B=0;B<9;B++)n.probe[B].addScaledVector(O.sh.coefficients[B],z);else if(O.isDirectionalLight){const B=t.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity*E),O.castShadow){const J=O.shadow,C=i.get(O);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,n.directionalShadow[d]=C,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=O.shadow.matrix,y++}n.directional[d]=B,d++}else if(O.isSpotLight){const B=t.get(O);B.position.setFromMatrixPosition(O.matrixWorld),B.color.copy(L).multiplyScalar(z*E),B.distance=G,B.coneCos=Math.cos(O.angle),B.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),B.decay=O.decay,n.spot[g]=B;const J=O.shadow;if(O.map&&(n.spotLightMap[R]=O.map,R++,J.updateMatrices(O),O.castShadow&&x++),n.spotLightMatrix[g]=J.matrix,O.castShadow){const C=i.get(O);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,n.spotShadow[g]=C,n.spotShadowMap[g]=$,w++}g++}else if(O.isRectAreaLight){const B=t.get(O);B.color.copy(L).multiplyScalar(z),B.halfWidth.set(O.width*.5,0,0),B.halfHeight.set(0,O.height*.5,0),n.rectArea[S]=B,S++}else if(O.isPointLight){const B=t.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity*E),B.distance=O.distance,B.decay=O.decay,O.castShadow){const J=O.shadow,C=i.get(O);C.shadowBias=J.bias,C.shadowNormalBias=J.normalBias,C.shadowRadius=J.radius,C.shadowMapSize=J.mapSize,C.shadowCameraNear=J.camera.near,C.shadowCameraFar=J.camera.far,n.pointShadow[p]=C,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=O.shadow.matrix,M++}n.point[p]=B,p++}else if(O.isHemisphereLight){const B=t.get(O);B.skyColor.copy(O.color).multiplyScalar(z*E),B.groundColor.copy(O.groundColor).multiplyScalar(z*E),n.hemi[v]=B,v++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=_;const P=n.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==S||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==R)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+R-x,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=x,P.directionalLength=d,P.pointLength=p,P.spotLength=g,P.rectAreaLength=S,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=R,n.version=Cx++)}function c(u,f){let h=0,m=0,_=0,d=0,p=0;const g=f.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const y=u[S];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(y.isSpotLight){const M=n.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),_++}else if(y.isRectAreaLight){const M=n.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=n.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:n}}function eh(r,e){const t=new Dx(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(f){i.push(f)}function a(f){n.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lx(r,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new eh(r,e),t.set(s,[l])):o>=a.length?(l=new eh(r,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Ix extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fx extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Ux=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function Nx(r,e,t){let i=new cf;const n=new ot,s=new ot,o=new Ut,a=new Ix({depthPacking:Wp}),l=new Fx,c={},u=t.maxTextureSize,f={0:Fi,1:xr,2:_c},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ox,fragmentShader:Ux}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new bn;_.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Cn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh,this.render=function(y,M,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const R=r.getRenderTarget(),x=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Un),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let N=0,q=y.length;N<q;N++){const O=y[N],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;n.copy(L.mapSize);const z=L.getFrameExtents();if(n.multiply(z),s.copy(L.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/z.x),n.x=s.x*z.x,L.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/z.y),n.y=s.y*z.y,L.mapSize.y=s.y)),L.map===null){const $=this.type!==Ps?{minFilter:Zt,magFilter:Zt}:{};L.map=new yr(n.x,n.y,$),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const G=L.getViewportCount();for(let $=0;$<G;$++){const B=L.getViewport($);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),P.viewport(o),L.updateMatrices(O,$),i=L.getFrustum(),v(M,w,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===Ps&&g(L,w),L.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(R,x,E)};function g(y,M){const w=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new yr(n.x,n.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,w,h,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,w,m,d,null)}function S(y,M,w,R,x,E){let P=null;const N=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0)P=N;else if(P=w.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const q=P.uuid,O=M.uuid;let L=c[q];L===void 0&&(L={},c[q]=L);let z=L[O];z===void 0&&(z=P.clone(),L[O]=z),P=z}return P.visible=M.visible,P.wireframe=M.wireframe,E===Ps?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(w.matrixWorld),P.nearDistance=R,P.farDistance=x),P}function v(y,M,w,R,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Ps)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const N=e.update(y),q=y.material;if(Array.isArray(q)){const O=N.groups;for(let L=0,z=O.length;L<z;L++){const G=O[L],$=q[G.materialIndex];if($&&$.visible){const B=S(y,$,R,w.near,w.far,x);r.renderBufferDirect(w,null,N,B,y,G)}}}else if(q.visible){const O=S(y,q,R,w.near,w.far,x);r.renderBufferDirect(w,null,N,O,y,null)}}const P=y.children;for(let N=0,q=P.length;N<q;N++)v(P[N],M,w,R,x)}}function Bx(r,e,t){const i=t.isWebGL2;function n(){let D=!1;const X=new Ut;let ee=null;const le=new Ut(0,0,0,0);return{setMask:function(_e){ee!==_e&&!D&&(r.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){D=_e},setClear:function(_e,Xe,et,ft,Ne){Ne===!0&&(_e*=ft,Xe*=ft,et*=ft),X.set(_e,Xe,et,ft),le.equals(X)===!1&&(r.clearColor(_e,Xe,et,ft),le.copy(X))},reset:function(){D=!1,ee=null,le.set(-1,0,0,0)}}}function s(){let D=!1,X=null,ee=null,le=null;return{setTest:function(_e){_e?Le(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(_e){X!==_e&&!D&&(r.depthMask(_e),X=_e)},setFunc:function(_e){if(ee!==_e){switch(_e){case dp:r.depthFunc(r.NEVER);break;case pp:r.depthFunc(r.ALWAYS);break;case mp:r.depthFunc(r.LESS);break;case Fl:r.depthFunc(r.LEQUAL);break;case _p:r.depthFunc(r.EQUAL);break;case gp:r.depthFunc(r.GEQUAL);break;case xp:r.depthFunc(r.GREATER);break;case vp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=_e}},setLocked:function(_e){D=_e},setClear:function(_e){le!==_e&&(r.clearDepth(_e),le=_e)},reset:function(){D=!1,X=null,ee=null,le=null}}}function o(){let D=!1,X=null,ee=null,le=null,_e=null,Xe=null,et=null,ft=null,Ne=null;return{setTest:function(ae){D||(ae?Le(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(ae){X!==ae&&!D&&(r.stencilMask(ae),X=ae)},setFunc:function(ae,re,ge){(ee!==ae||le!==re||_e!==ge)&&(r.stencilFunc(ae,re,ge),ee=ae,le=re,_e=ge)},setOp:function(ae,re,ge){(Xe!==ae||et!==re||ft!==ge)&&(r.stencilOp(ae,re,ge),Xe=ae,et=re,ft=ge)},setLocked:function(ae){D=ae},setClear:function(ae){Ne!==ae&&(r.clearStencil(ae),Ne=ae)},reset:function(){D=!1,X=null,ee=null,le=null,_e=null,Xe=null,et=null,ft=null,Ne=null}}}const a=new n,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,d=[],p=null,g=!1,S=null,v=null,y=null,M=null,w=null,R=null,x=null,E=!1,P=null,N=null,q=null,O=null,L=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=$>=2);let J=null,C={};const k=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),te=new Ut().fromArray(k),ie=new Ut().fromArray(Y);function se(D,X,ee){const le=new Uint8Array(4),_e=r.createTexture();r.bindTexture(D,_e),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<ee;Xe++)r.texImage2D(X+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return _e}const I={};I[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),I[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(r.DEPTH_TEST),l.setFunc(Fl),$e(!1),W(qc),Le(r.CULL_FACE),je(Un);function Le(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function he(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ie(D,X){return m[D]!==X?(r.bindFramebuffer(D,X),m[D]=X,i&&(D===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=X),D===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=X)),!0):!1}function ue(D,X){let ee=d,le=!1;if(D)if(ee=_.get(X),ee===void 0&&(ee=[],_.set(X,ee)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(ee.length!==_e.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,et=_e.length;Xe<et;Xe++)ee[Xe]=r.COLOR_ATTACHMENT0+Xe;ee.length=_e.length,le=!0}}else ee[0]!==r.COLOR_ATTACHMENT0&&(ee[0]=r.COLOR_ATTACHMENT0,le=!0);else ee[0]!==r.BACK&&(ee[0]=r.BACK,le=!0);le&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ze(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const de={[Wr]:r.FUNC_ADD,[ip]:r.FUNC_SUBTRACT,[np]:r.FUNC_REVERSE_SUBTRACT};if(i)de[Kc]=r.MIN,de[$c]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(de[Kc]=D.MIN_EXT,de[$c]=D.MAX_EXT)}const ve={[rp]:r.ZERO,[sp]:r.ONE,[op]:r.SRC_COLOR,[Wh]:r.SRC_ALPHA,[fp]:r.SRC_ALPHA_SATURATE,[up]:r.DST_COLOR,[lp]:r.DST_ALPHA,[ap]:r.ONE_MINUS_SRC_COLOR,[Xh]:r.ONE_MINUS_SRC_ALPHA,[hp]:r.ONE_MINUS_DST_COLOR,[cp]:r.ONE_MINUS_DST_ALPHA};function je(D,X,ee,le,_e,Xe,et,ft){if(D===Un){g===!0&&(he(r.BLEND),g=!1);return}if(g===!1&&(Le(r.BLEND),g=!0),D!==tp){if(D!==S||ft!==E){if((v!==Wr||w!==Wr)&&(r.blendEquation(r.FUNC_ADD),v=Wr,w=Wr),ft)switch(D){case Jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Il:r.blendFunc(r.ONE,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Il:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,R=null,x=null,S=D,E=ft}return}_e=_e||X,Xe=Xe||ee,et=et||le,(X!==v||_e!==w)&&(r.blendEquationSeparate(de[X],de[_e]),v=X,w=_e),(ee!==y||le!==M||Xe!==R||et!==x)&&(r.blendFuncSeparate(ve[ee],ve[le],ve[Xe],ve[et]),y=ee,M=le,R=Xe,x=et),S=D,E=!1}function nt(D,X){D.side===_c?he(r.CULL_FACE):Le(r.CULL_FACE);let ee=D.side===Fi;X&&(ee=!ee),$e(ee),D.blending===Jr&&D.transparent===!1?je(Un):je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const le=D.stencilWrite;c.setTest(le),le&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Le(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(D){P!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),P=D)}function W(D){D!==Jd?(Le(r.CULL_FACE),D!==N&&(D===qc?r.cullFace(r.BACK):D===Qd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),N=D}function Je(D){D!==q&&(G&&r.lineWidth(D),q=D)}function De(D,X,ee){D?(Le(r.POLYGON_OFFSET_FILL),(O!==X||L!==ee)&&(r.polygonOffset(X,ee),O=X,L=ee)):he(r.POLYGON_OFFSET_FILL)}function At(D){D?Le(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function gt(D){D===void 0&&(D=r.TEXTURE0+z-1),J!==D&&(r.activeTexture(D),J=D)}function A(D,X,ee){ee===void 0&&(J===null?ee=r.TEXTURE0+z-1:ee=J);let le=C[ee];le===void 0&&(le={type:void 0,texture:void 0},C[ee]=le),(le.type!==D||le.texture!==X)&&(J!==ee&&(r.activeTexture(ee),J=ee),r.bindTexture(D,X||I[D]),le.type=D,le.texture=X)}function b(){const D=C[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){te.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function Se(D){ie.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function ke(D,X){let ee=f.get(X);ee===void 0&&(ee=new WeakMap,f.set(X,ee));let le=ee.get(D);le===void 0&&(le=r.getUniformBlockIndex(X,D.name),ee.set(D,le))}function Ee(D,X){const le=f.get(X).get(D);u.get(X)!==le&&(r.uniformBlockBinding(X,le,D.__bindingPointIndex),u.set(X,le))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,C={},m={},_=new WeakMap,d=[],p=null,g=!1,S=null,v=null,y=null,M=null,w=null,R=null,x=null,E=!1,P=null,N=null,q=null,O=null,L=null,te.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:he,bindFramebuffer:Ie,drawBuffers:ue,useProgram:ze,setBlending:je,setMaterial:nt,setFlipSided:$e,setCullFace:W,setLineWidth:Je,setPolygonOffset:De,setScissorTest:At,activeTexture:gt,bindTexture:A,unbindTexture:b,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:Ce,texImage3D:pe,updateUBOMapping:ke,uniformBlockBinding:Ee,texStorage2D:K,texStorage3D:ye,texSubImage2D:Q,texSubImage3D:oe,compressedTexSubImage2D:be,compressedTexSubImage3D:fe,scissor:we,viewport:Se,reset:Qe}}function zx(r,e,t,i,n,s,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,f=n.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,b){return g?new OffscreenCanvas(A,b):da("canvas")}function v(A,b,j,ne){let Q=1;if((A.width>ne||A.height>ne)&&(Q=ne/Math.max(A.width,A.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=b?kl:Math.floor,be=oe(Q*A.width),fe=oe(Q*A.height);d===void 0&&(d=S(be,fe));const K=j?S(be,fe):d;return K.width=be,K.height=fe,K.getContext("2d").drawImage(A,0,0,be,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+fe+")."),K}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Su(A.width)&&Su(A.height)}function M(A){return a?!1:A.wrapS!==Xi||A.wrapT!==Xi||A.minFilter!==Zt&&A.minFilter!==Ri}function w(A,b){return A.generateMipmaps&&b&&A.minFilter!==Zt&&A.minFilter!==Ri}function R(A){r.generateMipmap(A)}function x(A,b,j,ne,Q=!1){if(a===!1)return b;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=b;return b===r.RED&&(j===r.FLOAT&&(oe=r.R32F),j===r.HALF_FLOAT&&(oe=r.R16F),j===r.UNSIGNED_BYTE&&(oe=r.R8)),b===r.RG&&(j===r.FLOAT&&(oe=r.RG32F),j===r.HALF_FLOAT&&(oe=r.RG16F),j===r.UNSIGNED_BYTE&&(oe=r.RG8)),b===r.RGBA&&(j===r.FLOAT&&(oe=r.RGBA32F),j===r.HALF_FLOAT&&(oe=r.RGBA16F),j===r.UNSIGNED_BYTE&&(oe=ne===at&&Q===!1?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)),(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function E(A,b,j){return w(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==Ri?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function P(A){return A===Zt||A===jc||A===Ba?r.NEAREST:r.LINEAR}function N(A){const b=A.target;b.removeEventListener("dispose",N),O(b),b.isVideoTexture&&_.delete(b)}function q(A){const b=A.target;b.removeEventListener("dispose",q),z(b)}function O(A){const b=i.get(A);if(b.__webglInit===void 0)return;const j=A.source,ne=p.get(j);if(ne){const Q=ne[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(A),Object.keys(ne).length===0&&p.delete(j)}i.remove(A)}function L(A){const b=i.get(A);r.deleteTexture(b.__webglTexture);const j=A.source,ne=p.get(j);delete ne[b.__cacheKey],o.memory.textures--}function z(A){const b=A.texture,j=i.get(A),ne=i.get(b);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(j.__webglFramebuffer[Q]),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let Q=0;Q<j.__webglColorRenderbuffer.length;Q++)j.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(j.__webglColorRenderbuffer[Q]);j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,oe=b.length;Q<oe;Q++){const be=i.get(b[Q]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(A)}let G=0;function $(){G=0}function B(){const A=G;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),G+=1,A}function J(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function C(A,b){const j=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(j,A,b);return}}t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function k(A,b){const j=i.get(A);if(A.version>0&&j.__version!==A.version){he(j,A,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function Y(A,b){const j=i.get(A);if(A.version>0&&j.__version!==A.version){he(j,A,b);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function te(A,b){const j=i.get(A);if(A.version>0&&j.__version!==A.version){Ie(j,A,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const ie={[Nl]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Bl]:r.MIRRORED_REPEAT},se={[Zt]:r.NEAREST,[jc]:r.NEAREST_MIPMAP_NEAREST,[Ba]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[Ap]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR};function I(A,b,j){if(j?(r.texParameteri(A,r.TEXTURE_WRAP_S,ie[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ie[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ie[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,se[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,se[b.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==Xi||b.wrapT!==Xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,P(b.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,P(b.minFilter)),b.minFilter!==Zt&&b.minFilter!==Ri&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Zt||b.minFilter!==Ba&&b.minFilter!==Zs||b.type===or&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ks&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(r.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Le(A,b){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N));const ne=b.source;let Q=p.get(ne);Q===void 0&&(Q={},p.set(ne,Q));const oe=J(b);if(oe!==A.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),Q[oe].usedTimes++;const be=Q[A.__cacheKey];be!==void 0&&(Q[A.__cacheKey].usedTimes--,be.usedTimes===0&&L(b)),A.__cacheKey=oe,A.__webglTexture=Q[oe].texture}return j}function he(A,b,j){let ne=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=r.TEXTURE_3D);const Q=Le(A,b),oe=b.source;t.bindTexture(ne,A.__webglTexture,r.TEXTURE0+j);const be=i.get(oe);if(oe.version!==be.__version||Q===!0){t.activeTexture(r.TEXTURE0+j),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const fe=M(b)&&y(b.image)===!1;let K=v(b.image,fe,!1,u);K=gt(b,K);const ye=y(K)||a,Ce=s.convert(b.format,b.encoding);let pe=s.convert(b.type),we=x(b.internalFormat,Ce,pe,b.encoding,b.isVideoTexture);I(ne,b,ye);let Se;const ke=b.mipmaps,Ee=a&&b.isVideoTexture!==!0,Qe=be.__version===void 0||Q===!0,D=E(b,K,ye);if(b.isDepthTexture)we=r.DEPTH_COMPONENT,a?b.type===or?we=r.DEPTH_COMPONENT32F:b.type===sr?we=r.DEPTH_COMPONENT24:b.type===Qr?we=r.DEPTH24_STENCIL8:we=r.DEPTH_COMPONENT16:b.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===cr&&we===r.DEPTH_COMPONENT&&b.type!==Zh&&b.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=sr,pe=s.convert(b.type)),b.format===as&&we===r.DEPTH_COMPONENT&&(we=r.DEPTH_STENCIL,b.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Qr,pe=s.convert(b.type))),Qe&&(Ee?t.texStorage2D(r.TEXTURE_2D,1,we,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,we,K.width,K.height,0,Ce,pe,null));else if(b.isDataTexture)if(ke.length>0&&ye){Ee&&Qe&&t.texStorage2D(r.TEXTURE_2D,D,we,ke[0].width,ke[0].height);for(let X=0,ee=ke.length;X<ee;X++)Se=ke[X],Ee?t.texSubImage2D(r.TEXTURE_2D,X,0,0,Se.width,Se.height,Ce,pe,Se.data):t.texImage2D(r.TEXTURE_2D,X,we,Se.width,Se.height,0,Ce,pe,Se.data);b.generateMipmaps=!1}else Ee?(Qe&&t.texStorage2D(r.TEXTURE_2D,D,we,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,Ce,pe,K.data)):t.texImage2D(r.TEXTURE_2D,0,we,K.width,K.height,0,Ce,pe,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ee&&Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,D,we,ke[0].width,ke[0].height,K.depth);for(let X=0,ee=ke.length;X<ee;X++)Se=ke[X],b.format!==qi?Ce!==null?Ee?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,K.depth,Ce,Se.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,we,Se.width,Se.height,K.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,K.depth,Ce,pe,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,we,Se.width,Se.height,K.depth,0,Ce,pe,Se.data)}else{Ee&&Qe&&t.texStorage2D(r.TEXTURE_2D,D,we,ke[0].width,ke[0].height);for(let X=0,ee=ke.length;X<ee;X++)Se=ke[X],b.format!==qi?Ce!==null?Ee?t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,X,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage2D(r.TEXTURE_2D,X,0,0,Se.width,Se.height,Ce,pe,Se.data):t.texImage2D(r.TEXTURE_2D,X,we,Se.width,Se.height,0,Ce,pe,Se.data)}else if(b.isDataArrayTexture)Ee?(Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,D,we,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ce,pe,K.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,K.width,K.height,K.depth,0,Ce,pe,K.data);else if(b.isData3DTexture)Ee?(Qe&&t.texStorage3D(r.TEXTURE_3D,D,we,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ce,pe,K.data)):t.texImage3D(r.TEXTURE_3D,0,we,K.width,K.height,K.depth,0,Ce,pe,K.data);else if(b.isFramebufferTexture){if(Qe)if(Ee)t.texStorage2D(r.TEXTURE_2D,D,we,K.width,K.height);else{let X=K.width,ee=K.height;for(let le=0;le<D;le++)t.texImage2D(r.TEXTURE_2D,le,we,X,ee,0,Ce,pe,null),X>>=1,ee>>=1}}else if(ke.length>0&&ye){Ee&&Qe&&t.texStorage2D(r.TEXTURE_2D,D,we,ke[0].width,ke[0].height);for(let X=0,ee=ke.length;X<ee;X++)Se=ke[X],Ee?t.texSubImage2D(r.TEXTURE_2D,X,0,0,Ce,pe,Se):t.texImage2D(r.TEXTURE_2D,X,we,Ce,pe,Se);b.generateMipmaps=!1}else Ee?(Qe&&t.texStorage2D(r.TEXTURE_2D,D,we,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,pe,K)):t.texImage2D(r.TEXTURE_2D,0,we,Ce,pe,K);w(b,ye)&&R(ne),be.__version=oe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ie(A,b,j){if(b.image.length!==6)return;const ne=Le(A,b),Q=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+j);const oe=i.get(Q);if(Q.version!==oe.__version||ne===!0){t.activeTexture(r.TEXTURE0+j),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,K=[];for(let X=0;X<6;X++)!be&&!fe?K[X]=v(b.image[X],!1,!0,c):K[X]=fe?b.image[X].image:b.image[X],K[X]=gt(b,K[X]);const ye=K[0],Ce=y(ye)||a,pe=s.convert(b.format,b.encoding),we=s.convert(b.type),Se=x(b.internalFormat,pe,we,b.encoding),ke=a&&b.isVideoTexture!==!0,Ee=oe.__version===void 0||ne===!0;let Qe=E(b,ye,Ce);I(r.TEXTURE_CUBE_MAP,b,Ce);let D;if(be){ke&&Ee&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Se,ye.width,ye.height);for(let X=0;X<6;X++){D=K[X].mipmaps;for(let ee=0;ee<D.length;ee++){const le=D[ee];b.format!==qi?pe!==null?ke?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee,0,0,le.width,le.height,pe,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee,Se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee,0,0,le.width,le.height,pe,we,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee,Se,le.width,le.height,0,pe,we,le.data)}}}else{D=b.mipmaps,ke&&Ee&&(D.length>0&&Qe++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Se,K[0].width,K[0].height));for(let X=0;X<6;X++)if(fe){ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,K[X].width,K[X].height,pe,we,K[X].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Se,K[X].width,K[X].height,0,pe,we,K[X].data);for(let ee=0;ee<D.length;ee++){const _e=D[ee].image[X].image;ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee+1,0,0,_e.width,_e.height,pe,we,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee+1,Se,_e.width,_e.height,0,pe,we,_e.data)}}else{ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,pe,we,K[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Se,pe,we,K[X]);for(let ee=0;ee<D.length;ee++){const le=D[ee];ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee+1,0,0,pe,we,le.image[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,ee+1,Se,pe,we,le.image[X])}}}w(b,Ce)&&R(r.TEXTURE_CUBE_MAP),oe.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ue(A,b,j,ne,Q){const oe=s.convert(j.format,j.encoding),be=s.convert(j.type),fe=x(j.internalFormat,oe,be,j.encoding);i.get(b).__hasExternalTextures||(Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,fe,b.width,b.height,b.depth,0,oe,be,null):t.texImage2D(Q,0,fe,b.width,b.height,0,oe,be,null)),t.bindFramebuffer(r.FRAMEBUFFER,A),De(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,i.get(j).__webglTexture,0,Je(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,i.get(j).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(A,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let ne=r.DEPTH_COMPONENT16;if(j||De(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===or?ne=r.DEPTH_COMPONENT32F:Q.type===sr&&(ne=r.DEPTH_COMPONENT24));const oe=Je(b);De(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,ne,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ne,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){const ne=Je(b);j&&De(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,b.width,b.height):De(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<ne.length;Q++){const oe=ne[Q],be=s.convert(oe.format,oe.encoding),fe=s.convert(oe.type),K=x(oe.internalFormat,be,fe,oe.encoding),ye=Je(b);j&&De(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,K,b.width,b.height):De(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),C(b.depthTexture,0);const ne=i.get(b.depthTexture).__webglTexture,Q=Je(b);if(b.depthTexture.format===cr)De(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(b.depthTexture.format===as)De(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ve(A){const b=i.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");de(b.__webglFramebuffer,A)}else if(j){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=r.createRenderbuffer(),ze(b.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),ze(b.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(A,b,j){const ne=i.get(A);b!==void 0&&ue(ne.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),j!==void 0&&ve(A)}function nt(A){const b=A.texture,j=i.get(A),ne=i.get(b);A.addEventListener("dispose",q),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=b.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,be=y(A)||a;if(Q){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)j.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(j.__webglFramebuffer=r.createFramebuffer(),oe)if(n.drawBuffers){const fe=A.texture;for(let K=0,ye=fe.length;K<ye;K++){const Ce=i.get(fe[K]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&De(A)===!1){const fe=oe?b:[b];j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let K=0;K<fe.length;K++){const ye=fe[K];j.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[K]);const Ce=s.convert(ye.format,ye.encoding),pe=s.convert(ye.type),we=x(ye.internalFormat,Ce,pe,ye.encoding,A.isXRRenderTarget===!0),Se=Je(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,we,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,j.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(j.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),I(r.TEXTURE_CUBE_MAP,b,be);for(let fe=0;fe<6;fe++)ue(j.__webglFramebuffer[fe],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe);w(b,be)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const fe=A.texture;for(let K=0,ye=fe.length;K<ye;K++){const Ce=fe[K],pe=i.get(Ce);t.bindTexture(r.TEXTURE_2D,pe.__webglTexture),I(r.TEXTURE_2D,Ce,be),ue(j.__webglFramebuffer,A,Ce,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D),w(Ce,be)&&R(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?fe=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ne.__webglTexture),I(fe,b,be),ue(j.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,fe),w(b,be)&&R(fe),t.unbindTexture()}A.depthBuffer&&ve(A)}function $e(A){const b=y(A)||a,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,Q=j.length;ne<Q;ne++){const oe=j[ne];if(w(oe,b)){const be=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,fe=i.get(oe).__webglTexture;t.bindTexture(be,fe),R(be),t.unbindTexture()}}}function W(A){if(a&&A.samples>0&&De(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],j=A.width,ne=A.height;let Q=r.COLOR_BUFFER_BIT;const oe=[],be=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=i.get(A),K=A.isWebGLMultipleRenderTargets===!0;if(K)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){oe.push(r.COLOR_ATTACHMENT0+ye),A.depthBuffer&&oe.push(be);const Ce=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ce===!1&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),K&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ye]),Ce===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[be]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[be])),K){const pe=i.get(b[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pe,0)}r.blitFramebuffer(0,0,j,ne,0,0,j,ne,Q,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ye]);const Ce=i.get(b[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Je(A){return Math.min(f,A.samples)}function De(A){const b=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(A){const b=o.render.frame;_.get(A)!==b&&(_.set(A,b),A.update())}function gt(A,b){const j=A.encoding,ne=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===zl||j!==Mr&&(j===at?a===!1?e.has("EXT_sRGB")===!0&&ne===qi?(A.format=zl,A.minFilter=Ri,A.generateMipmaps=!1):b=jh.sRGBToLinear(b):(ne!==qi||Q!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),b}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.setTexture2D=C,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=te,this.rebindTextures=je,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=De}function kx(r,e,t){const i=t.isWebGL2;function n(s,o=null){let a;if(s===vr)return r.UNSIGNED_BYTE;if(s===Dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Lp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Rp)return r.BYTE;if(s===Cp)return r.SHORT;if(s===Zh)return r.UNSIGNED_SHORT;if(s===Pp)return r.INT;if(s===sr)return r.UNSIGNED_INT;if(s===or)return r.FLOAT;if(s===Ks)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ip)return r.ALPHA;if(s===qi)return r.RGBA;if(s===Op)return r.LUMINANCE;if(s===Up)return r.LUMINANCE_ALPHA;if(s===cr)return r.DEPTH_COMPONENT;if(s===as)return r.DEPTH_STENCIL;if(s===Fp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),r.RGBA;if(s===zl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Np)return r.RED;if(s===Bp)return r.RED_INTEGER;if(s===zp)return r.RG;if(s===kp)return r.RG_INTEGER;if(s===Gp)return r.RGBA_INTEGER;if(s===za||s===ka||s===Ga||s===Va)if(o===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Va)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jc||s===Qc||s===eu||s===tu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===iu||s===nu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===iu)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ru||s===su||s===ou||s===au||s===lu||s===cu||s===uu||s===hu||s===fu||s===du||s===pu||s===mu||s===_u||s===gu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ru)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===su)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ou)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===au)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===du)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_u)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===xu)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Qr?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class Gx extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oo extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,i),g=this._getHandJoint(c,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Hx extends Mi{constructor(e,t,i,n,s,o,a,l,c,u){if(u=u!==void 0?u:cr,u!==cr&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=sr),i===void 0&&u===as&&(i=Qr),super(null,n,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1}}class Wx extends gs{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const _=t.getContextAttributes();let d=null,p=null;const g=[],S=[],v=new Set,y=new Map,M=new Ci;M.layers.enable(1),M.viewport=new Ut;const w=new Ci;w.layers.enable(2),w.viewport=new Ut;const R=[M,w],x=new Gx;x.layers.enable(1),x.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=g[k];return Y===void 0&&(Y=new ml,g[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=g[k];return Y===void 0&&(Y=new ml,g[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=g[k];return Y===void 0&&(Y=new ml,g[k]=Y),Y.getHandSpace()};function N(k){const Y=S.indexOf(k.inputSource);if(Y===-1)return;const te=g[Y];te!==void 0&&te.dispatchEvent({type:k.type,data:k.inputSource})}function q(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",O);for(let k=0;k<g.length;k++){const Y=S[k];Y!==null&&(S[k]=null,g[k].disconnect(Y))}E=null,P=null,e.setRenderTarget(d),h=null,f=null,u=null,n=null,p=null,C.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(d=e.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",q),n.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(n,t,Y),n.updateRenderState({baseLayer:h}),p=new yr(h.framebufferWidth,h.framebufferHeight,{format:qi,type:vr,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let Y=null,te=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?as:cr,te=_.stencil?Qr:sr);const se={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(n,t),f=u.createProjectionLayer(se),n.updateRenderState({layers:[f]}),p=new yr(f.textureWidth,f.textureHeight,{format:qi,type:vr,depthTexture:new Hx(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const I=e.properties.get(p);I.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await n.requestReferenceSpace(a),C.setContext(n),C.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(k){for(let Y=0;Y<k.removed.length;Y++){const te=k.removed[Y],ie=S.indexOf(te);ie>=0&&(S[ie]=null,g[ie].disconnect(te))}for(let Y=0;Y<k.added.length;Y++){const te=k.added[Y];let ie=S.indexOf(te);if(ie===-1){for(let I=0;I<g.length;I++)if(I>=S.length){S.push(te),ie=I;break}else if(S[I]===null){S[I]=te,ie=I;break}if(ie===-1)break}const se=g[ie];se&&se.connect(te)}}const L=new V,z=new V;function G(k,Y,te){L.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(te.matrixWorld);const ie=L.distanceTo(z),se=Y.projectionMatrix.elements,I=te.projectionMatrix.elements,Le=se[14]/(se[10]-1),he=se[14]/(se[10]+1),Ie=(se[9]+1)/se[5],ue=(se[9]-1)/se[5],ze=(se[8]-1)/se[0],de=(I[8]+1)/I[0],ve=Le*ze,je=Le*de,nt=ie/(-ze+de),$e=nt*-ze;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX($e),k.translateZ(nt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const W=Le+nt,Je=he+nt,De=ve-$e,At=je+(ie-$e),gt=Ie*he/Je*W,A=ue*he/Je*W;k.projectionMatrix.makePerspective(De,At,gt,A,W,Je)}function $(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;x.near=w.near=M.near=k.near,x.far=w.far=M.far=k.far,(E!==x.near||P!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,P=x.far);const Y=k.parent,te=x.cameras;$(x,Y);for(let se=0;se<te.length;se++)$(te[se],Y);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),k.matrix.copy(x.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ie=k.children;for(let se=0,I=ie.length;se<I;se++)ie[se].updateMatrixWorld(!0);te.length===2?G(x,M,w):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.getPlanes=function(){return v};let B=null;function J(k,Y){if(c=Y.getViewerPose(l||o),m=Y,c!==null){const te=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let ie=!1;te.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let se=0;se<te.length;se++){const I=te[se];let Le=null;if(h!==null)Le=h.getViewport(I);else{const Ie=u.getViewSubImage(f,I);Le=Ie.viewport,se===0&&(e.setRenderTargetTextures(p,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(p))}let he=R[se];he===void 0&&(he=new Ci,he.layers.enable(se),he.viewport=new Ut,R[se]=he),he.matrix.fromArray(I.transform.matrix),he.projectionMatrix.fromArray(I.projectionMatrix),he.viewport.set(Le.x,Le.y,Le.width,Le.height),se===0&&x.matrix.copy(he.matrix),ie===!0&&x.cameras.push(he)}}for(let te=0;te<g.length;te++){const ie=S[te],se=g[te];ie!==null&&se!==void 0&&se.update(ie,Y,l||o)}if(B&&B(k,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let te=null;for(const ie of v)Y.detectedPlanes.has(ie)||(te===null&&(te=[]),te.push(ie));if(te!==null)for(const ie of te)v.delete(ie),y.delete(ie),i.dispatchEvent({type:"planeremoved",data:ie});for(const ie of Y.detectedPlanes)if(!v.has(ie))v.add(ie),y.set(ie,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ie});else{const se=y.get(ie);ie.lastChangedTime>se&&(y.set(ie,ie.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ie}))}}m=null}const C=new uf;C.setAnimationLoop(J),this.setAnimationLoop=function(k){B=k},this.dispose=function(){}}}function Xx(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,of(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,g,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(d,p):p.isMeshToonMaterial?(n(d,p),u(d,p)):p.isMeshPhongMaterial?(n(d,p),c(d,p)):p.isMeshStandardMaterial?(n(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,v)):p.isMeshMatcapMaterial?(n(d,p),m(d,p)):p.isMeshDepthMaterial?n(d,p):p.isMeshDistanceMaterial?(n(d,p),_(d,p)):p.isMeshNormalMaterial?n(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Fi&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Fi&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Fi&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function qx(r,e,t,i){let n={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const y=v.program;i.uniformBlockBinding(S,y)}function c(S,v){let y=n[S.id];y===void 0&&(_(S),y=u(S),n[S.id]=y,S.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(S,M);const w=e.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function u(S){const v=f();S.__bindingPointIndex=v;const y=r.createBuffer(),M=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=n[S.id],y=S.uniforms,M=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,R=y.length;w<R;w++){const x=y[w];if(m(x,w,M)===!0){const E=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let N=0;for(let q=0;q<P.length;q++){const O=P[q],L=d(O);typeof O=="number"?(x.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,E+N,x.__data)):O.isMatrix3?(x.__data[0]=O.elements[0],x.__data[1]=O.elements[1],x.__data[2]=O.elements[2],x.__data[3]=O.elements[0],x.__data[4]=O.elements[3],x.__data[5]=O.elements[4],x.__data[6]=O.elements[5],x.__data[7]=O.elements[0],x.__data[8]=O.elements[6],x.__data[9]=O.elements[7],x.__data[10]=O.elements[8],x.__data[11]=O.elements[0]):(O.toArray(x.__data,N),N+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,E,x.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(S,v,y){const M=S.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const w=Array.isArray(M)?M:[M],R=[];for(let x=0;x<w.length;x++)R.push(w[x].clone());y[v]=R}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const w=Array.isArray(y[v])?y[v]:[y[v]],R=Array.isArray(M)?M:[M];for(let x=0;x<w.length;x++){const E=w[x];if(E.equals(R[x])===!1)return E.copy(R[x]),!0}}return!1}function _(S){const v=S.uniforms;let y=0;const M=16;let w=0;for(let R=0,x=v.length;R<x;R++){const E=v[R],P={boundary:0,storage:0},N=Array.isArray(E.value)?E.value:[E.value];for(let q=0,O=N.length;q<O;q++){const L=N[q],z=d(L);P.boundary+=z.boundary,P.storage+=z.storage}if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,R>0){w=y%M;const q=M-w;w!==0&&q-P.boundary<0&&(y+=M-w,E.__offset=y)}y+=P.storage}return w=y%M,w>0&&(y+=M-w),S.__size=y,S.__cache={},this}function d(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function g(){for(const S in n)r.deleteBuffer(n[S]);o=[],n={},s={}}return{bind:l,update:c,dispose:g}}function Yx(){const r=da("canvas");return r.style.display="block",r}function Zx(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Yx(),t=r.context!==void 0?r.context:null,i=r.depth!==void 0?r.depth:!0,n=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mr,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;const d=this;let p=!1,g=0,S=0,v=null,y=-1,M=null;const w=new Ut,R=new Ut;let x=null,E=e.width,P=e.height,N=1,q=null,O=null;const L=new Ut(0,0,E,P),z=new Ut(0,0,E,P);let G=!1;const $=new cf;let B=!1,J=!1,C=null;const k=new Dt,Y=new ot,te=new V,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?N:1}let I=t;function Le(T,U){for(let Z=0;Z<T.length;Z++){const F=T[Z],H=e.getContext(F,U);if(H!==null)return H}return null}try{const T={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jd}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",ke,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&U.shift(),I=Le(U,T),I===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let he,Ie,ue,ze,de,ve,je,nt,$e,W,Je,De,At,gt,A,b,j,ne,Q,oe,be,fe,K,ye;function Ce(){he=new r0(I),Ie=new jg(I,he,r),he.init(Ie),fe=new kx(I,he,Ie),ue=new Bx(I,he,Ie),ze=new a0(I),de=new Tx,ve=new zx(I,he,ue,de,Ie,fe,ze),je=new Qg(d),nt=new n0(d),$e=new mm(I,Ie),K=new Kg(I,he,$e,Ie),W=new s0(I,$e,ze,K),Je=new h0(I,W,$e,ze),Q=new u0(I,Ie,ve),b=new Jg(de),De=new bx(d,je,nt,he,Ie,K,b),At=new Xx(d,de),gt=new wx,A=new Lx(he,Ie),ne=new Zg(d,je,nt,ue,Je,u,o),j=new Nx(d,Je,Ie),ye=new qx(I,ze,Ie,ue),oe=new $g(I,he,ze,Ie),be=new o0(I,he,ze,Ie),ze.programs=De.programs,d.capabilities=Ie,d.extensions=he,d.properties=de,d.renderLists=gt,d.shadowMap=j,d.state=ue,d.info=ze}Ce();const pe=new Wx(d,I);this.xr=pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(E,P,!1))},this.getSize=function(T){return T.set(E,P)},this.setSize=function(T,U,Z){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,P=U,e.width=Math.floor(T*N),e.height=Math.floor(U*N),Z!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(E*N,P*N).floor()},this.setDrawingBufferSize=function(T,U,Z){E=T,P=U,N=Z,e.width=Math.floor(T*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,U,Z,F){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,U,Z,F),ue.viewport(w.copy(L).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,U,Z,F){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,U,Z,F),ue.scissor(R.copy(z).multiplyScalar(N).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){ue.setScissorTest(G=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(T=!0,U=!0,Z=!0){let F=0;T&&(F|=I.COLOR_BUFFER_BIT),U&&(F|=I.DEPTH_BUFFER_BIT),Z&&(F|=I.STENCIL_BUFFER_BIT),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),gt.dispose(),A.dispose(),de.dispose(),je.dispose(),nt.dispose(),Je.dispose(),K.dispose(),ye.dispose(),De.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",le),pe.removeEventListener("sessionend",_e),C&&(C.dispose(),C=null),Xe.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=ze.autoReset,U=j.enabled,Z=j.autoUpdate,F=j.needsUpdate,H=j.type;Ce(),ze.autoReset=T,j.enabled=U,j.autoUpdate=Z,j.needsUpdate=F,j.type=H}function ke(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ee(T){const U=T.target;U.removeEventListener("dispose",Ee),Qe(U)}function Qe(T){D(T),de.remove(T)}function D(T){const U=de.get(T).programs;U!==void 0&&(U.forEach(function(Z){De.releaseProgram(Z)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Z,F,H,xe){U===null&&(U=ie);const me=H.isMesh&&H.matrixWorld.determinant()<0,Me=Oe(T,U,Z,F,H);ue.setMaterial(F,me);let Te=Z.index,Ve=1;F.wireframe===!0&&(Te=W.getWireframeAttribute(Z),Ve=2);const Be=Z.drawRange,Re=Z.attributes.position;let Ue=Be.start*Ve,ct=(Be.start+Be.count)*Ve;xe!==null&&(Ue=Math.max(Ue,xe.start*Ve),ct=Math.min(ct,(xe.start+xe.count)*Ve)),Te!==null?(Ue=Math.max(Ue,0),ct=Math.min(ct,Te.count)):Re!=null&&(Ue=Math.max(Ue,0),ct=Math.min(ct,Re.count));const li=ct-Ue;if(li<0||li===1/0)return;K.setup(H,F,Me,Z,Te);let Ki,rt=oe;if(Te!==null&&(Ki=$e.get(Te),rt=be,rt.setIndex(Ki)),H.isMesh)F.wireframe===!0?(ue.setLineWidth(F.wireframeLinewidth*se()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(H.isLine){let Fe=F.linewidth;Fe===void 0&&(Fe=1),ue.setLineWidth(Fe*se()),H.isLineSegments?rt.setMode(I.LINES):H.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else H.isPoints?rt.setMode(I.POINTS):H.isSprite&&rt.setMode(I.TRIANGLES);if(H.isInstancedMesh)rt.renderInstances(Ue,li,H.count);else if(Z.isInstancedBufferGeometry){const Fe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,sn=Math.min(Z.instanceCount,Fe);rt.renderInstances(Ue,li,sn)}else rt.render(Ue,li)},this.compile=function(T,U){function Z(F,H,xe){F.transparent===!0&&F.side===mo?(F.side=Fi,F.needsUpdate=!0,ge(F,H,xe),F.side=xr,F.needsUpdate=!0,ge(F,H,xe),F.side=mo):ge(F,H,xe)}h=A.get(T),h.init(),_.push(h),T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(d.physicallyCorrectLights),T.traverse(function(F){const H=F.material;if(H)if(Array.isArray(H))for(let xe=0;xe<H.length;xe++){const me=H[xe];Z(me,T,F)}else Z(H,T,F)}),_.pop(),h=null};let X=null;function ee(T){X&&X(T)}function le(){Xe.stop()}function _e(){Xe.start()}const Xe=new uf;Xe.setAnimationLoop(ee),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(T){X=T,pe.setAnimationLoop(T),T===null?Xe.stop():Xe.start()},pe.addEventListener("sessionstart",le),pe.addEventListener("sessionend",_e),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,U,v),h=A.get(T,_.length),h.init(),_.push(h),k.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(k),J=this.localClippingEnabled,B=b.init(this.clippingPlanes,J,U),f=gt.get(T,m.length),f.init(),m.push(f),et(T,U,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(q,O),B===!0&&b.beginShadows();const Z=h.state.shadowsArray;if(j.render(Z,T,U),B===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,T),h.setupLights(d.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let H=0,xe=F.length;H<xe;H++){const me=F[H];ft(f,T,me,me.viewport)}}else ft(f,T,U);v!==null&&(ve.updateMultisampleRenderTarget(v),ve.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(d,T,U),K.resetDefaultState(),y=-1,M=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function et(T,U,Z,F){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){F&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const me=Je.update(T),Me=T.material;Me.visible&&f.push(T,me,Me,Z,te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ze.render.frame&&(T.skeleton.update(),T.skeleton.frame=ze.render.frame),!T.frustumCulled||$.intersectsObject(T))){F&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const me=Je.update(T),Me=T.material;if(Array.isArray(Me)){const Te=me.groups;for(let Ve=0,Be=Te.length;Ve<Be;Ve++){const Re=Te[Ve],Ue=Me[Re.materialIndex];Ue&&Ue.visible&&f.push(T,me,Ue,Z,te.z,Re)}}else Me.visible&&f.push(T,me,Me,Z,te.z,null)}}const xe=T.children;for(let me=0,Me=xe.length;me<Me;me++)et(xe[me],U,Z,F)}function ft(T,U,Z,F){const H=T.opaque,xe=T.transmissive,me=T.transparent;h.setupLightsView(Z),xe.length>0&&Ne(H,U,Z),F&&ue.viewport(w.copy(F)),H.length>0&&ae(H,U,Z),xe.length>0&&ae(xe,U,Z),me.length>0&&ae(me,U,Z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ne(T,U,Z){const F=Ie.isWebGL2;C===null&&(C=new yr(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Ks:vr,minFilter:Zs,samples:F&&s===!0?4:0})),d.getDrawingBufferSize(Y),F?C.setSize(Y.x,Y.y):C.setSize(kl(Y.x),kl(Y.y));const H=d.getRenderTarget();d.setRenderTarget(C),d.clear();const xe=d.toneMapping;d.toneMapping=gn,ae(T,U,Z),d.toneMapping=xe,ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C),d.setRenderTarget(H)}function ae(T,U,Z){const F=U.isScene===!0?U.overrideMaterial:null;for(let H=0,xe=T.length;H<xe;H++){const me=T[H],Me=me.object,Te=me.geometry,Ve=F===null?me.material:F,Be=me.group;Me.layers.test(Z.layers)&&re(Me,U,Z,Te,Ve,Be)}}function re(T,U,Z,F,H,xe){T.onBeforeRender(d,U,Z,F,H,xe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(d,U,Z,F,T,xe),H.transparent===!0&&H.side===mo?(H.side=Fi,H.needsUpdate=!0,d.renderBufferDirect(Z,U,F,H,T,xe),H.side=xr,H.needsUpdate=!0,d.renderBufferDirect(Z,U,F,H,T,xe),H.side=mo):d.renderBufferDirect(Z,U,F,H,T,xe),T.onAfterRender(d,U,Z,F,H,xe)}function ge(T,U,Z){U.isScene!==!0&&(U=ie);const F=de.get(T),H=h.state.lights,xe=h.state.shadowsArray,me=H.state.version,Me=De.getParameters(T,H.state,xe,U,Z),Te=De.getProgramCacheKey(Me);let Ve=F.programs;F.environment=T.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(T.isMeshStandardMaterial?nt:je).get(T.envMap||F.environment),Ve===void 0&&(T.addEventListener("dispose",Ee),Ve=new Map,F.programs=Ve);let Be=Ve.get(Te);if(Be!==void 0){if(F.currentProgram===Be&&F.lightsStateVersion===me)return Pe(T,Me),Be}else Me.uniforms=De.getUniforms(T),T.onBuild(Z,Me,d),T.onBeforeCompile(Me,d),Be=De.acquireProgram(Me,Te),Ve.set(Te,Be),F.uniforms=Me.uniforms;const Re=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=b.uniform),Pe(T,Me),F.needsLights=Ge(T),F.lightsStateVersion=me,F.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ue=Be.getUniforms(),ct=Qo.seqWithValue(Ue.seq,Re);return F.currentProgram=Be,F.uniformsList=ct,Be}function Pe(T,U){const Z=de.get(T);Z.outputEncoding=U.outputEncoding,Z.instancing=U.instancing,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Oe(T,U,Z,F,H){U.isScene!==!0&&(U=ie),ve.resetTextureUnits();const xe=U.fog,me=F.isMeshStandardMaterial?U.environment:null,Me=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Mr,Te=(F.isMeshStandardMaterial?nt:je).get(F.envMap||me),Ve=F.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Be=!!F.normalMap&&!!Z.attributes.tangent,Re=!!Z.morphAttributes.position,Ue=!!Z.morphAttributes.normal,ct=!!Z.morphAttributes.color,li=F.toneMapped?d.toneMapping:gn,Ki=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rt=Ki!==void 0?Ki.length:0,Fe=de.get(F),sn=h.state.lights;if(B===!0&&(J===!0||T!==M)){const ci=T===M&&F.id===y;b.setState(F,T,ci)}let Rt=!1;F.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==sn.state.version||Fe.outputEncoding!==Me||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Te||F.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==b.numPlanes||Fe.numIntersection!==b.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==Be||Fe.morphTargets!==Re||Fe.morphNormals!==Ue||Fe.morphColors!==ct||Fe.toneMapping!==li||Ie.isWebGL2===!0&&Fe.morphTargetsCount!==rt)&&(Rt=!0):(Rt=!0,Fe.__version=F.version);let Yn=Fe.currentProgram;Rt===!0&&(Yn=ge(F,U,H));let Wc=!1,vs=!1,Oa=!1;const Ht=Yn.getUniforms(),Zn=Fe.uniforms;if(ue.useProgram(Yn.program)&&(Wc=!0,vs=!0,Oa=!0),F.id!==y&&(y=F.id,vs=!0),Wc||M!==T){if(Ht.setValue(I,"projectionMatrix",T.projectionMatrix),Ie.logarithmicDepthBuffer&&Ht.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,vs=!0,Oa=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const ci=Ht.map.cameraPosition;ci!==void 0&&ci.setValue(I,te.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ht.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||H.isSkinnedMesh)&&Ht.setValue(I,"viewMatrix",T.matrixWorldInverse)}if(H.isSkinnedMesh){Ht.setOptional(I,H,"bindMatrix"),Ht.setOptional(I,H,"bindMatrixInverse");const ci=H.skeleton;ci&&(Ie.floatVertexTextures?(ci.boneTexture===null&&ci.computeBoneTexture(),Ht.setValue(I,"boneTexture",ci.boneTexture,ve),Ht.setValue(I,"boneTextureSize",ci.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ua=Z.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&Ie.isWebGL2===!0)&&Q.update(H,Z,F,Yn),(vs||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,Ht.setValue(I,"receiveShadow",H.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Zn.envMap.value=Te,Zn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),vs&&(Ht.setValue(I,"toneMappingExposure",d.toneMappingExposure),Fe.needsLights&&xt(Zn,Oa),xe&&F.fog===!0&&At.refreshFogUniforms(Zn,xe),At.refreshMaterialUniforms(Zn,F,N,P,C),Qo.upload(I,Fe.uniformsList,Zn,ve)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Qo.upload(I,Fe.uniformsList,Zn,ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ht.setValue(I,"center",H.center),Ht.setValue(I,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(I,"normalMatrix",H.normalMatrix),Ht.setValue(I,"modelMatrix",H.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ci=F.uniformsGroups;for(let Na=0,$d=ci.length;Na<$d;Na++)if(Ie.isWebGL2){const Xc=ci[Na];ye.update(Xc,Yn),ye.bind(Xc,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function xt(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ge(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,U,Z){de.get(T.texture).__webglTexture=U,de.get(T.depthTexture).__webglTexture=Z;const F=de.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Z===void 0,F.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const Z=de.get(T);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Z=0){v=T,g=U,S=Z;let F=!0,H=null,xe=!1,me=!1;if(T){const Te=de.get(T);Te.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(T):Te.__hasExternalTextures&&ve.rebindTextures(T,de.get(T.texture).__webglTexture,de.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const Be=de.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(H=Be[U],xe=!0):Ie.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?H=de.get(T).__webglMultisampledFramebuffer:H=Be,w.copy(T.viewport),R.copy(T.scissor),x=T.scissorTest}else w.copy(L).multiplyScalar(N).floor(),R.copy(z).multiplyScalar(N).floor(),x=G;if(ue.bindFramebuffer(I.FRAMEBUFFER,H)&&Ie.drawBuffers&&F&&ue.drawBuffers(T,H),ue.viewport(w),ue.scissor(R),ue.setScissorTest(x),xe){const Te=de.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,Z)}else if(me){const Te=de.get(T.texture),Ve=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,Z||0,Ve)}y=-1},this.readRenderTargetPixels=function(T,U,Z,F,H,xe,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){ue.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Te=T.texture,Ve=Te.format,Be=Te.type;if(Ve!==qi&&fe.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Be===Ks&&(he.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&he.has("EXT_color_buffer_float"));if(Be!==vr&&fe.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===or&&(Ie.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-F&&Z>=0&&Z<=T.height-H&&I.readPixels(U,Z,F,H,fe.convert(Ve),fe.convert(Be),xe)}finally{const Te=v!==null?de.get(v).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,U,Z=0){const F=Math.pow(2,-Z),H=Math.floor(U.image.width*F),xe=Math.floor(U.image.height*F);ve.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,T.x,T.y,H,xe),ue.unbindTexture()},this.copyTextureToTexture=function(T,U,Z,F=0){const H=U.image.width,xe=U.image.height,me=fe.convert(Z.format),Me=fe.convert(Z.type);ve.setTexture2D(Z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,T.x,T.y,H,xe,me,Me,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,me,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,T.x,T.y,me,Me,U.image),F===0&&Z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,U,Z,F,H=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,me=T.max.y-T.min.y+1,Me=T.max.z-T.min.z+1,Te=fe.convert(F.format),Ve=fe.convert(F.type);let Be;if(F.isData3DTexture)ve.setTexture3D(F,0),Be=I.TEXTURE_3D;else if(F.isDataArrayTexture)ve.setTexture2DArray(F,0),Be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Re=I.getParameter(I.UNPACK_ROW_LENGTH),Ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ct=I.getParameter(I.UNPACK_SKIP_PIXELS),li=I.getParameter(I.UNPACK_SKIP_ROWS),Ki=I.getParameter(I.UNPACK_SKIP_IMAGES),rt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?I.texSubImage3D(Be,H,U.x,U.y,U.z,xe,me,Me,Te,Ve,rt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Be,H,U.x,U.y,U.z,xe,me,Me,Te,rt.data)):I.texSubImage3D(Be,H,U.x,U.y,U.z,xe,me,Me,Te,Ve,rt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,li),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ki),H===0&&F.generateMipmaps&&I.generateMipmap(Be),ue.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){g=0,S=0,v=null,ue.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Kx extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $x extends uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const th=new Dt,Vl=new ef,Uo=new Aa,No=new V;class jx extends ri{constructor(e=new bn,t=new $x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(n),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;th.copy(n).invert(),Vl.copy(e.ray).applyMatrix4(th);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=h,d=m;_<d;_++){const p=c.getX(_);No.fromBufferAttribute(f,p),ih(No,p,l,n,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=h,d=m;_<d;_++)No.fromBufferAttribute(f,_),ih(No,_,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ih(r,e,t,i,n,s,o){const a=Vl.distanceSqToPoint(r);if(a<t){const l=new V;Vl.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Jx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nh(){return(typeof performance>"u"?Date:performance).now()}function hn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},vc,Gt,Mt,Di=1e8,it=1/Di,Hl=Math.PI*2,Qx=Hl/4,ev=0,_f=Math.sqrt,tv=Math.cos,iv=Math.sin,Lt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},vn=function(e){return typeof e=="number"},Mc=function(e){return typeof e>"u"},rn=function(e){return typeof e=="object"},si=function(e){return e!==!1},gf=function(){return typeof window<"u"},Bo=function(e){return pt(e)||Lt(e)},xf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Wl=/(?:-?\.?\d|\.)+/gi,vf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mf=/[+-]=-?[.\d]+/,yf=/[^,'"\[\]\s]+/gi,nv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Ai,Xl,yc,bi={},pa={},Sf,bf=function(e){return(pa=Sr(e,bi))&&Ti},Sc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ma=function(e,t){return!t&&console.warn(e)},Tf=function(e,t){return e&&(bi[e]=t)&&pa&&(pa[e]=t)||bi},js=function(){return 0},rv={suppressEvents:!0,isStart:!0,kill:!1},ea={suppressEvents:!0,kill:!1},sv={suppressEvents:!0},bc={},Nn=[],ql={},Ef,mi={},gl={},rh=30,ta=[],Tc="",Ec=function(e){var t=e[0],i,n;if(rn(t)||pt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=ta.length;n--&&!ta[n].targetTest(t););i=ta[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Yf(e[n],i)))||e.splice(n,1);return e},fr=function(e){return e._gsap||Ec(Li(e))[0]._gsap},wf=function(e,t,i){return(i=e[t])&&pt(i)?e[t]():Mc(i)&&e.getAttribute&&e.getAttribute(t)||i},oi=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},ov=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},_a=function(){var e=Nn.length,t=Nn.slice(0),i,n;for(ql={},Nn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Af=function(e,t,i,n){Nn.length&&!Gt&&_a(),e.render(t,i,n||Gt&&t<0&&(e._initted||e._startAt)),Nn.length&&!Gt&&_a()},Rf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yf).length<2?t:Lt(e)?e.trim():e},Cf=function(e){return e},Ui=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},av=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Sr=function(e,t){for(var i in t)e[i]=t[i];return e},sh=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=rn(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},ga=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Ns=function(e){var t=e.parent||ut,i=e.keyframes?av(Vt(e.keyframes)):Ui;if(si(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lv=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Pf=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Ca=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Vn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},cv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yl=function(e,t,i,n){return e._startAt&&(Gt?e._startAt.revert(ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},uv=function r(e){return!e||e._ts&&r(e.parent)},oh=function(e){return e._repeat?us(e._tTime,e=e.duration()+e._rDelay)*e:0},us=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},xa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pa=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},Da=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pa(e),i._dirty||dr(i,e)),e},Df=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=xa(e.rawTime(),t),(!t._dur||fo(0,t.totalDuration(),i)-t._tTime>it)&&t.render(i,!0)),dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-it}},Qi=function(e,t,i,n){return t.parent&&Vn(t),t._start=Ot((vn(i)?i:i||e!==ut?wi(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pf(e,t,"_first","_last",e._sort?"_start":0),Zl(t)||(e._recent=t),n||Df(e,t),e._ts<0&&Da(e,e._tTime),e},Lf=function(e,t){return(bi.ScrollTrigger||Sc("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},If=function(e,t,i,n,s){if(Ac(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ef!==gi.frame)return Nn.push(e),e._lazy=[s,n],1},hv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fv=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&hv(e)&&!(!e._initted&&Zl(e))||(e._ts<0||e._dp._ts<0)&&!Zl(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=fo(0,e._tDur,t),u=us(l,a),e._yoyo&&u&1&&(o=1-o),u!==us(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Gt||n||e._zTime===it||!t&&e._zTime){if(!e._initted&&If(e,t,n,i,l))return;for(f=e._zTime,e._zTime=t||(i?it:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Yl(e,t,i,!0),e._onUpdate&&!i&&Ii(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vn(e,1),!i&&!Gt&&(Ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dv=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},hs=function(e,t,i,n){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!n&&Da(e,e._tTime=e._tDur*a),e.parent&&Pa(e),i||dr(e.parent,e),e},ah=function(e){return e instanceof ni?dr(e):hs(e,e._dur)},pv={_start:0,endTime:js,totalDuration:js},wi=function r(e,t,i){var n=e.labels,s=e._recent||pv,o=e.duration()>=Di?s.endTime(!1):e._dur,a,l,c;return Lt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Vt(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Bs=function(e,t,i){var n=vn(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;o.immediateRender=si(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new bt(t[0],o,t[s+1])},qn=function(e,t){return e||e===0?t(e):t},fo=function(e,t,i){return i<e?e:i>t?t:i},kt=function(e,t){return!Lt(e)||!(t=nv.exec(e))?"":t[1]},mv=function(e,t,i){return qn(i,function(n){return fo(e,t,n)})},Kl=[].slice,Ff=function(e,t){return e&&rn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&rn(e[0]))&&!e.nodeType&&e!==Ai},_v=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return Lt(n)&&!t||Ff(n,1)?(s=i).push.apply(s,Li(n)):i.push(n)})||i},Li=function(e,t,i){return Mt&&!t&&Mt.selector?Mt.selector(e):Lt(e)&&!i&&(Xl||!fs())?Kl.call((t||yc).querySelectorAll(e),0):Vt(e)?_v(e,i):Ff(e)?Kl.call(e,0):e?[e]:[]},$l=function(e){return e=Li(e)[0]||ma("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Li(t,i.querySelectorAll?i:i===e?ma("Invalid scope")||yc.createElement("div"):e)}},Of=function(e){return e.sort(function(){return .5-Math.random()})},Uf=function(e){if(pt(e))return e;var t=rn(e)?e:{each:e},i=pr(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,u=n,f=n;return Lt(n)?u=f={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],f=n[1]),function(h,m,_){var d=(_||t).length,p=o[d],g,S,v,y,M,w,R,x,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,Di])[1],!E){for(R=-Di;R<(R=_[E++].getBoundingClientRect().left)&&E<d;);E--}for(p=o[d]=[],g=l?Math.min(E,d)*u-.5:n%E,S=E===Di?0:l?d*f/E-.5:n/E|0,R=0,x=Di,w=0;w<d;w++)v=w%E-g,y=S-(w/E|0),p[w]=M=c?Math.abs(c==="y"?y:v):_f(v*v+y*y),M>R&&(R=M),M<x&&(x=M);n==="random"&&Of(p),p.max=R-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(E>d?d-1:c?c==="y"?d/E:E:Math.max(E,d/E))||0)*(n==="edges"?-1:1),p.b=d<0?s-d:s,p.u=kt(t.amount||t.each)||0,i=i&&d<0?Wf(i):i}return d=(p[h]-p.min)/p.max||0,Ot(p.b+(i?i(d):d)*p.v)+p.u}},jl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Ot(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(vn(i)?0:kt(i))}},Nf=function(e,t){var i=Vt(e),n,s;return!i&&rn(e)&&(n=i=e.radius||Di,e.values?(e=Li(e.values),(s=!vn(e[0]))&&(n*=n)):e=jl(e.increment)),qn(t,i?pt(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Di,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-a,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!n||c<=n?e[u]:o,s||u===o||vn(o)?u:u+kt(o)}:jl(e))},Bf=function(e,t,i,n){return qn(Vt(e)?!t:i===!0?!!(i=0):!n,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},gv=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},xv=function(e,t){return function(i){return e(parseFloat(i))+(t||kt(i))}},vv=function(e,t,i){return kf(e,t,0,1,i)},zf=function(e,t,i){return qn(i,function(n){return e[~~t(n)]})},Mv=function r(e,t,i){var n=t-e;return Vt(e)?zf(e,r(0,e.length),t):qn(i,function(s){return(n+(s-e)%n)%n+e})},yv=function r(e,t,i){var n=t-e,s=n*2;return Vt(e)?zf(e,r(0,e.length-1),t):qn(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},Js=function(e){for(var t=0,i="",n,s,o,a;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",s=e.substr(n+7,o-n-7).match(a?yf:Wl),i+=e.substr(t,n-t)+Bf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},kf=function(e,t,i,n,s){var o=t-e,a=n-i;return qn(s,function(l){return i+((l-e)/o*a||0)})},Sv=function r(e,t,i,n){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Lt(e),a={},l,c,u,f,h;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var d=Math.min(h,~~_);return u[d](_-d)},i=t}else n||(e=Sr(Vt(e)?[]:{},e));if(!u){for(l in t)wc.call(a,e,l,"get",t[l]);s=function(_){return Pc(_,a)||(o?e.p:e)}}}return qn(i,s)},lh=function(e,t,i){var n=e.labels,s=Di,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ii=function(e,t,i){var n=e.vars,s=n[t],o=Mt,a=e._ctx,l,c,u;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&Nn.length&&_a(),a&&(Mt=a),u=l?s.apply(c,l):s.call(c),Mt=o,u},Ls=function(e){return Vn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Ii(e,"onInterrupt"),e},Kr,bv=function(e){e=!e.name&&e.default||e;var t=e.name,i=pt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:js,render:Pc,add:wc,kill:zv,modifier:Bv,rawVars:0},o={targetTest:0,get:0,getSetter:Cc,aliases:{},register:0};if(fs(),e!==n){if(mi[t])return;Ui(n,Ui(ga(e,s),o)),Sr(n.prototype,Sr(s,ga(e,o))),mi[n.prop=t]=n,e.targetTest&&(ta.push(n),bc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Tf(t,n),e.register&&e.register(Ti,n,ai)},tt=255,Is={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},xl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*tt+.5|0},Gf=function(e,t,i){var n=e?vn(e)?[e>>16,e>>8&tt,e&tt]:0:Is.black,s,o,a,l,c,u,f,h,m,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Is[e])n=Is[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&tt,n&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Wl),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,n.length>3&&(n[3]*=1),n[0]=xl(l+1/3,s,o),n[1]=xl(l,s,o),n[2]=xl(l-1/3,s,o);else if(~e.indexOf("="))return n=e.match(vf),i&&n.length<4&&(n[3]=1),n}else n=e.match(Wl)||Is.transparent;n=n.map(Number)}return t&&!_&&(s=n[0]/tt,o=n[1]/tt,a=n[2]/tt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Vf=function(e){var t=[],i=[],n=-1;return e.split(Bn).forEach(function(s){var o=s.match(Zr)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},ch=function(e,t,i){var n="",s=(e+n).match(Bn),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Gf(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Vf(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Bn,"1").split(Zr),f=c.length-1;a<f;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Bn),f=c.length-1;a<f;a++)n+=c[a]+s[a];return n+c[f]},Bn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Is)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Tv=/hsl[a]?\(/,Hf=function(e){var t=e.join(" "),i;if(Bn.lastIndex=0,Bn.test(t))return i=Tv.test(t),e[1]=ch(e[1],i),e[0]=ch(e[0],i,Vf(e[1])),!0},Qs,gi=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,u,f,h,m,_=function d(p){var g=r()-n,S=p===!0,v,y,M,w;if(g>e&&(i+=g-t),n+=g,M=n-i,v=M-o,(v>0||S)&&(w=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,o+=v+(v>=s?4:s-v),y=1),S||(l=c(d)),y)for(m=0;m<a.length;m++)a[m](M,h,w,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Sf&&(!Xl&&gf()&&(Ai=Xl=window,yc=Ai.document||{},bi.gsap=Ti,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(Ti.version),bf(pa||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),u=Ai.requestAnimationFrame),l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Qs=1,_(2))},sleep:function(){(u?Ai.cancelAnimationFrame:clearTimeout)(l),Qs=0,c=js},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,g,S){var v=g?function(y,M,w,R){p(y,M,w,R),f.remove(v)}:p;return f.remove(p),a[S?"unshift":"push"](v),fs(),v},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&m>=g&&m--},_listeners:a},f}(),fs=function(){return!Qs&&gi.wake()},Ke={},Ev=/^[\d.\-M][\d.\-,\s]/,wv=/["']/g,Av=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(wv,"").trim():+c,n=l.substr(a+1).trim();return t},Rv=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Cv=function(e){var t=(e+"").split("("),i=Ke[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Av(t[1])]:Rv(e).split(",").map(Rf)):Ke._CE&&Ev.test(e)?Ke._CE("",e):i},Wf=function(e){return function(t){return 1-e(1-t)}},Xf=function r(e,t){for(var i=e._first,n;i;)i instanceof ni?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},pr=function(e,t){return e&&(pt(e)?e:Ke[e]||Cv(e))||t},wr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return oi(e,function(a){Ke[a]=bi[a]=s,Ke[o=a.toLowerCase()]=i;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},qf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vl=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Hl*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*iv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:qf(a);return s=Hl/s,l.config=function(c,u){return r(e,c,u)},l},Ml=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:qf(i);return n.config=function(s){return r(e,s)},n};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;wr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;wr("Elastic",vl("in"),vl("out"),vl());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};wr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);wr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});wr("Circ",function(r){return-(_f(1-r*r)-1)});wr("Sine",function(r){return r===1?1:-tv(r*Qx)+1});wr("Back",Ml("in"),Ml("out"),Ml());Ke.SteppedEase=Ke.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-it;return function(a){return((n*fo(0,o,a)|0)+s)*i}}};cs.ease=Ke["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Tc+=r+","+r+"Params,"});var Yf=function(e,t){this.id=ev++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wf,this.set=t?t.getSetter:Cc},ds=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,hs(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),Qs||gi.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,hs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Da(this,i),!s._dp||s.parent||Df(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===it||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Af(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+oh(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+oh(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?us(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-it?0:this._rts,this.totalTime(fo(-this._delay,this._tDur,n),!0),Pa(this),cv(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Qi(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(si(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sv);var n=Gt;return Gt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ah(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ah(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(wi(this,i),si(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,si(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-it)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(s){var o=pt(i)?i:Cf,a=function(){var c=n.then;n.then=null,pt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),s(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){Ls(this)},r}();Ui(ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var ni=function(r){mf(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=si(i.sortChildren),ut&&Qi(i.parent||ut,hn(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Lf(hn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return Bs(0,arguments,this),this},t.from=function(n,s,o){return Bs(1,arguments,this),this},t.fromTo=function(n,s,o,a){return Bs(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,Ns(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new bt(n,s,wi(this,o),1),this},t.call=function(n,s,o){return Qi(this,bt.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new bt(n,o,wi(this,l)),this},t.staggerFrom=function(n,s,o,a,l,c,u){return o.runBackwards=1,Ns(o).immediateRender=si(o.immediateRender),this.staggerTo(n,s,o,a,l,c,u)},t.staggerFromTo=function(n,s,o,a,l,c,u,f){return a.startAt=o,Ns(a).immediateRender=si(a.immediateRender),this.staggerTo(n,s,a,l,c,u,f)},t.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:Ot(n),f=this._zTime<0!=n<0&&(this._initted||!c),h,m,_,d,p,g,S,v,y,M,w,R;if(this!==ut&&u>l&&n>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,n+=this._time-a),h=u,y=this._start,v=this._ts,g=!v,f&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,s,o);if(h=Ot(u%p),u===l?(d=this._repeat,h=c):(d=~~(u/p),d&&d===u/p&&(h=c,d--),h>c&&(h=c)),M=us(this._tTime,p),!a&&this._tTime&&M!==d&&(M=d),w&&d&1&&(h=c-h,R=1),d!==M&&!this._lock){var x=w&&M&1,E=x===(w&&d&1);if(d<M&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(R?0:Ot(d*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ii(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Xf(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=dv(this,Ot(a),Ot(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&!s&&(Ii(this,"onStart"),this._tTime!==u))return this;if(h>=a&&n>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,s,o);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,o),h!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=-it);break}}m=_}else{m=this._last;for(var P=n<0?n:h;m;){if(_=m._prev,(m._act||P<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,s,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,s,o||Gt&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=P?-it:it);break}}m=_}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-it)._zTime=h>=a?1:-1,this._ts))return this._start=y,Pa(this),this.render(n,s,o);this._onUpdate&&!s&&Ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vn(this,1),!s&&!(n<0&&!a)&&(u||a||!l)&&(Ii(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(vn(s)||(s=wi(this,s,n)),!(n instanceof ds)){if(Vt(n))return n.forEach(function(a){return o.add(a,s)}),this;if(Lt(n))return this.addLabel(n,s);if(pt(n))n=bt.delayedCall(0,n);else return this}return this!==n?Qi(this,n,s):this},t.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof bt?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return Lt(n)?this.removeLabel(n):pt(n)?this.killTweensOf(n):(Ca(this,n),n===this._recent&&(this._recent=this._last),dr(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(gi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=wi(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var a=bt.delayedCall(0,s||js,o);return a.data="isPause",this._hasPause=1,Qi(this,a,wi(this,n))},t.removePause=function(n){var s=this._first;for(n=wi(this,n);s;)s._start===n&&s.data==="isPause"&&Vn(s),s=s._next},t.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Pn!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],a=Li(n),l=this._first,c=vn(s),u;l;)l instanceof bt?ov(l._targets,a)&&(c?(!Pn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,a=wi(o,n),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,_=bt.to(o,Ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||it,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&hs(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,Ui({startAt:{time:wi(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),lh(this,wi(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),lh(this,wi(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return dr(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),dr(this)},t.totalDuration=function(n){var s=0,o=this,a=o._last,l=Di,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Qi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;hs(o,o===ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(ut._ts&&(Af(ut,xa(n,ut)),Ef=gi.frame),gi.frame>=rh){rh+=Si.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&Si.autoSleep&&gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gi.sleep()}}},e}(ds);Ui(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var Pv=function(e,t,i,n,s,o,a){var l=new ai(this._pt,e,t,0,1,Qf,null,s),c=0,u=0,f,h,m,_,d,p,g,S;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Js(n)),o&&(S=[i,n],o(S,e,t),i=S[0],n=S[1]),h=i.match(_l)||[];f=_l.exec(n);)_=f[0],d=n.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:_.charAt(1)==="="?es(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=_l.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Mf.test(n)||g)&&(l.e=0),this._pt=l,l},wc=function(e,t,i,n,s,o,a,l,c,u){pt(n)&&(n=n(s||0,e,o));var f=e[t],h=i!=="get"?i:pt(f)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=pt(f)?c?Ov:jf:Rc,_;if(Lt(n)&&(~n.indexOf("random(")&&(n=Js(n)),n.charAt(1)==="="&&(_=es(h,n)+(kt(h)||0),(_||_===0)&&(n=_))),!u||h!==n||Jl)return!isNaN(h*n)&&n!==""?(_=new ai(this._pt,e,t,+h||0,n-(h||0),typeof f=="boolean"?Nv:Jf,0,m),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Sc(t,n),Pv.call(this,e,t,h,n,m,l||Si.stringFilter,c))},Dv=function(e,t,i,n,s){if(pt(e)&&(e=zs(e,s,t,i,n)),!rn(e)||e.style&&e.nodeType||Vt(e)||xf(e))return Lt(e)?zs(e,s,t,i,n):e;var o={},a;for(a in e)o[a]=zs(e[a],s,t,i,n);return o},Zf=function(e,t,i,n,s,o){var a,l,c,u;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:Dv(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new ai(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Kr))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Pn,Jl,Ac=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.onUpdateParams,f=n.callbackScope,h=n.runBackwards,m=n.yoyoEase,_=n.keyframes,d=n.autoRevert,p=e._dur,g=e._startAt,S=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:S,M=e._overwrite==="auto"&&!vc,w=e.timeline,R,x,E,P,N,q,O,L,z,G,$,B,J;if(w&&(!_||!s)&&(s="none"),e._ease=pr(s,cs.ease),e._yEase=m?Wf(pr(m===!0?s:m,cs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!w&&!!n.runBackwards,!w||_&&!n.stagger){if(L=S[0]?fr(S[0]).harness:0,B=L&&n[L.prop],R=ga(n,bc),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&p?ea:rv),g._lazy=0),o){if(Vn(e._startAt=bt.set(S,Ui({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&si(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!a&&!d)&&e._startAt.revert(ea),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&p&&!g){if(t&&(a=!1),E=Ui({overwrite:!1,data:"isFromStart",lazy:a&&!g&&si(l),immediateRender:a,stagger:0,parent:v},R),B&&(E[L.prop]=B),Vn(e._startAt=bt.set(S,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(ea):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&si(l)||l&&!p,x=0;x<S.length;x++){if(N=S[x],O=N._gsap||Ec(S)[x]._gsap,e._ptLookup[x]=G={},ql[O.id]&&Nn.length&&_a(),$=y===S?x:y.indexOf(N),L&&(z=new L).init(N,B||R,e,$,y)!==!1&&(e._pt=P=new ai(e._pt,N,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(C){G[C]=P}),z.priority&&(q=1)),!L||B)for(E in R)mi[E]&&(z=Zf(E,R,e,$,N,y))?z.priority&&(q=1):G[E]=P=wc.call(e,N,E,"get",R[E],$,y,0,n.stringFilter);e._op&&e._op[x]&&e.kill(N,e._op[x]),M&&e._pt&&(Pn=e,ut.killTweensOf(N,G,e.globalTime(t)),J=!e.parent,Pn=0),e._pt&&l&&(ql[O.id]=1)}q&&ed(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,_&&t<=0&&w.render(Di,!0,!0)},Lv=function(e,t,i,n,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Jl=1,e.vars[t]="+=0",Ac(e,a),Jl=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(n||n===0)&&!s?n:c.s+(n||0)+o*c.c,c.c=i-c.s,u.e&&(u.e=_t(i)+kt(u.e)),u.b&&(u.b=c.s+kt(u.b))},Iv=function(e,t){var i=e[0]?fr(e[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return t;s=Sr({},t);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Fv=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,a;if(Vt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},zs=function(e,t,i,n,s){return pt(e)?e.call(t,i,n,s):Lt(e)&&~e.indexOf("random(")?Js(e):e},Kf=Tc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$f={};oi(Kf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return $f[r]=1});var bt=function(r){mf(e,r);function e(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:Ns(n))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,d=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,S=n.parent||ut,v=(Vt(i)||xf(i)?vn(i[0]):"length"in n)?[i]:Li(i),y,M,w,R,x,E,P,N;if(a._targets=v.length?Ec(v):ma("GSAP target "+i+" not found. https://greensock.com",!Si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,_||h||Bo(c)||Bo(u)){if(n=a.vars,y=a.timeline=new ni({data:"nested",defaults:d||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=hn(a),y._start=0,h||Bo(c)||Bo(u)){if(R=v.length,P=h&&Uf(h),rn(h))for(x in h)~Kf.indexOf(x)&&(N||(N={}),N[x]=h[x]);for(M=0;M<R;M++)w=ga(n,$f),w.stagger=0,g&&(w.yoyoEase=g),N&&Sr(w,N),E=v[M],w.duration=+zs(c,hn(a),M,E,v),w.delay=(+zs(u,hn(a),M,E,v)||0)-a._delay,!h&&R===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),y.to(E,w,P?P(M,E,v):0),y._ease=Ke.none;y.duration()?c=u=0:a.timeline=0}else if(_){Ns(Ui(y.vars.defaults,{ease:"none"})),y._ease=pr(_.ease||n.ease||"none");var q=0,O,L,z;if(Vt(_))_.forEach(function(G){return y.to(v,G,">")}),y.duration();else{w={};for(x in _)x==="ease"||x==="easeEach"||Fv(x,_[x],w,_.easeEach);for(x in w)for(O=w[x].sort(function(G,$){return G.t-$.t}),q=0,M=0;M<O.length;M++)L=O[M],z={ease:L.e,duration:(L.t-(M?O[M-1].t:0))/100*c},z[x]=L.v,y.to(v,z,q),q+=z.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return m===!0&&!vc&&(Pn=hn(a),ut.killTweensOf(v),Pn=0),Qi(S,hn(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(f||!c&&!_&&a._start===Ot(S._time)&&si(f)&&uv(hn(a))&&S.data!=="nested")&&(a._tTime=-it,a.render(Math.max(0,-u)||0)),p&&Lf(hn(a),p),a}var t=e.prototype;return t.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,u=n<0,f=n>l-it&&!u?l:n<it?0:n,h,m,_,d,p,g,S,v,y;if(!c)fv(this,n,s,o);else if(f!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+n,s,o);if(h=Ot(f%d),f===l?(_=this._repeat,h=c):(_=~~(f/d),_&&_===f/d&&(h=c,_--),h>c&&(h=c)),g=this._yoyo&&_&1,g&&(y=this._yEase,h=c-h),p=us(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;_!==p&&(v&&this._yEase&&Xf(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(Ot(d*_),!0).invalidate()._lock=0))}if(!this._initted){if(If(this,u?n:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(n,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(h/c),this._from&&(this.ratio=S=1-S),h&&!a&&!s&&(Ii(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;v&&v.render(n<0?n:!h&&g?-it:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&Yl(this,n,s,o),Ii(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Ii(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Yl(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vn(this,1),!s&&!(u&&!a)&&(f||a||g)&&(Ii(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,a){Qs||gi.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ac(this,l),c=this._ease(l/this._dur),Lv(this,n,s,o,a,c,l)?this.resetTo(n,s,o,a):(Da(this,0),this.parent||Pf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ls(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Pn&&Pn.vars.overwrite!==!0)._first||Ls(this),this.parent&&o!==this.timeline.totalDuration()&&hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Li(n):a,c=this._ptLookup,u=this._pt,f,h,m,_,d,p,g;if((!s||s==="all")&&lv(a,l))return s==="all"&&(this._pt=0),Ls(this);for(f=this._op=this._op||[],s!=="all"&&(Lt(s)&&(d={},oi(s,function(S){return d[S]=1}),s=d),s=Iv(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){h=c[g],s==="all"?(f[g]=s,_=h,m={}):(m=f[g]=f[g]||{},_=s);for(d in _)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Ca(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Ls(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return Bs(1,arguments)},e.delayedCall=function(n,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,s,o){return Bs(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return ut.killTweensOf(n,s,o)},e}(ds);Ui(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(r){bt[r]=function(){var e=new ni,t=Kl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Rc=function(e,t,i){return e[t]=i},jf=function(e,t,i){return e[t](i)},Ov=function(e,t,i,n){return e[t](n.fp,i)},Uv=function(e,t,i){return e.setAttribute(t,i)},Cc=function(e,t){return pt(e[t])?jf:Mc(e[t])&&e.setAttribute?Uv:Rc},Jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Nv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qf=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Pc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Bv=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},zv=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Ca(this,t,"_pt"):t.dep||(i=1),t=n;return!i},kv=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},ed=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},ai=function(){function r(t,i,n,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||Jf,this.d=l||this,this.set=c||Rc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=kv,this.m=i,this.mt=s,this.tween=n},r}();oi(Tc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return bc[r]=1});bi.TweenMax=bi.TweenLite=bt;bi.TimelineLite=bi.TimelineMax=ni;ut=new ni({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=Hf;var ps=[],ia={},Gv=[],uh=0,yl=function(e){return(ia[e]||Gv).map(function(t){return t()})},Ql=function(){var e=Date.now(),t=[];e-uh>2&&(yl("matchMediaInit"),ps.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=Ai.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),yl("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),uh=e,yl("matchMedia"))},td=function(){function r(t,i){this.selector=i&&$l(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){pt(i)&&(s=n,n=i,i=pt);var o=this,a=function(){var c=Mt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=$l(s)),Mt=o,f=n.apply(o,arguments),pt(f)&&o._r.push(f),Mt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===pt?a(o):i?o[i]=a:a},e.ignore=function(i){var n=Mt;Mt=null,i(this),Mt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof bt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof ds)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n){var a=ps.indexOf(this);~a&&ps.splice(a,1)}},e.revert=function(i){this.kill(i||{})},r}(),Vv=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(i,n,s){rn(i)||(i={matches:i});var o=new td(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?u=1:(l=Ai.matchMedia(i[c]),l&&(ps.indexOf(o)<0&&ps.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ql):l.addEventListener("change",Ql)));return u&&n(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),va={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return bv(n)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,i,n){Lt(e)&&(e=Li(e)[0]);var s=fr(e||{}).get,o=i?Cf:Rf;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,n)):function(a,l,c){return o((mi[a]&&mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Li(e),e.length>1){var n=e.map(function(u){return Ti.quickSetter(u,t,i)}),s=n.length;return function(u){for(var f=s;f--;)n[f](u)}}e=e[0]||{};var o=mi[t],a=fr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Kr._pt=0,f.init(e,i?u+i:u,Kr,0,[e]),f.render(1,f),Kr._pt&&Pc(1,Kr)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var n,s=Ti.to(e,Sr((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=pr(e.ease,cs.ease)),sh(cs,e||{})},config:function(e){return sh(Si,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!mi[a]&&!bi[a]&&ma(t+" effect requires "+a+" plugin.")}),gl[t]=function(a,l,c){return i(Li(a),Ui(l||{},s),c)},o&&(ni.prototype[t]=function(a,l,c){return this.add(gl[t](a,rn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=pr(t)},parseEase:function(e,t){return arguments.length?pr(e,t):Ke},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ni(e),n,s;for(i.smoothChildTiming=si(e.smoothChildTiming),ut.remove(i),i._dp=0,i._time=i._tTime=ut._time,n=ut._first;n;)s=n._next,(t||!(!n._dur&&n instanceof bt&&n.vars.onComplete===n._targets[0]))&&Qi(i,n,n._start-n._delay),n=s;return Qi(ut,i,0),i},context:function(e,t){return e?new td(e,t):Mt},matchMedia:function(e){return new Vv(e)},matchMediaRefresh:function(){return ps.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Ql()},addEventListener:function(e,t){var i=ia[e]||(ia[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ia[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Mv,wrapYoyo:yv,distribute:Uf,random:Bf,snap:Nf,normalize:vv,getUnit:kt,clamp:mv,splitColor:Gf,toArray:Li,selector:$l,mapRange:kf,pipe:gv,unitize:xv,interpolate:Sv,shuffle:Of},install:bf,effects:gl,ticker:gi,updateRoot:ni.updateRoot,plugins:mi,globalTimeline:ut,core:{PropTween:ai,globals:Tf,Tween:bt,Timeline:ni,Animation:ds,getCache:fr,_removeLinkedListItem:Ca,reverting:function(){return Gt},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return vc=e}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return va[r]=bt[r]});gi.add(ni.updateRoot);Kr=va.to({},{duration:0});var Hv=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Wv=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=Hv(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},Sl=function(e,t){return{name:e,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(Lt(s)&&(l={},oi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Wv(a,s)}}}},Ti=va.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Sl("roundProps",jl),Sl("modifiers"),Sl("snap",Nf))||va;bt.version=ni.version=Ti.version="3.11.4";Sf=1;gf()&&fs();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hh,Dn,ts,Dc,ar,fh,Lc,Xv=function(){return typeof window<"u"},Mn={},ir=180/Math.PI,is=Math.PI/180,Gr=Math.atan2,dh=1e8,Ic=/([A-Z])/g,qv=/(left|right|width|margin|padding|x)/i,Yv=/[\s,\(]\S/,mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ec=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$v=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},id=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},jv=function(e,t,i){return e.style[t]=i},Jv=function(e,t,i){return e.style.setProperty(t,i)},Qv=function(e,t,i){return e._gsap[t]=i},eM=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tM=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},iM=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},ht="transform",Zi=ht+"Origin",nM=function(e,t){var i=this,n=this.target,s=n.style;if(e in Mn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=mn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=fn(n,o)}):this.tfm[e]=n._gsap.x?n._gsap[e]:fn(n,e)),this.props.indexOf(ht)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Zi,t,"")),e=ht}(s||t)&&this.props.push(e,t,s[e])},rd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rM=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].replace(Ic,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Lc(),s&&!s.isStart&&!i[ht]&&(rd(i),n.uncache=1)}},sd=function(e,t){var i={target:e,props:[],revert:rM,save:nM};return t&&t.split(",").forEach(function(n){return i.save(n)}),i},od,tc=function(e,t){var i=Dn.createElementNS?Dn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Dn.createElement(e);return i.style?i:Dn.createElement(e)},tn=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ic,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,ms(t)||t,1)||""},ph="O,Moz,ms,Ms,Webkit".split(","),ms=function(e,t,i){var n=t||ar,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ph[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ph[o]:"")+e},ic=function(){Xv()&&window.document&&(hh=window,Dn=hh.document,ts=Dn.documentElement,ar=tc("div")||{style:{}},tc("div"),ht=ms(ht),Zi=ht+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",od=!!ms("perspective"),Lc=Ti.core.reverting,Dc=1)},bl=function r(e){var t=tc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(ts.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ts.removeChild(t),this.style.cssText=s,o},mh=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ad=function(e){var t;try{t=e.getBBox()}catch{t=bl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===bl||(t=bl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+mh(e,["x","cx","x1"])||0,y:+mh(e,["y","cy","y1"])||0,width:0,height:0}:t},ld=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ad(e))},eo=function(e,t){if(t){var i=e.style;t in Mn&&t!==Zi&&(t=ht),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Ic,"-$1").toLowerCase())):i.removeAttribute(t)}},Ln=function(e,t,i,n,s,o){var a=new ai(e._pt,t,i,0,1,o?nd:id);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},_h={deg:1,rad:1,turn:1},sM={grid:1,flex:1},Hn=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ar.style,l=qv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=n==="px",m=n==="%",_,d,p,g;return n===o||!s||_h[n]||_h[o]?s:(o!=="px"&&!h&&(s=r(e,t,i,"px")),g=e.getCTM&&ld(e),(m||o==="%")&&(Mn[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],_t(m?s/_*f:s/100*_)):(a[l?"width":"height"]=f+(h?o:n),d=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Dn||!d.appendChild)&&(d=Dn.body),p=d._gsap,p&&m&&p.width&&l&&p.time===gi.time&&!p.uncache?_t(s/p.width*f):((m||o==="%")&&!sM[tn(d,"display")]&&(a.position=tn(e,"position")),d===e&&(a.position="static"),d.appendChild(ar),_=ar[u],d.removeChild(ar),a.position="absolute",l&&m&&(p=fr(d),p.time=gi.time,p.width=d[u]),_t(h?_*s/f:_&&s?f/_*s:0))))},fn=function(e,t,i,n){var s;return Dc||ic(),t in mn&&t!=="transform"&&(t=mn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mn[t]&&t!=="transform"?(s=io(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ya(tn(e,Zi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Ma[t]&&Ma[t](e,t,i)||tn(e,t)||wf(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hn(e,t,s,i)+i:s},oM=function(e,t,i,n){if(!i||i==="none"){var s=ms(t,e,1),o=s&&tn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=tn(e,"borderTopColor"))}var a=new ai(this._pt,e.style,t,0,1,Qf),l=0,c=0,u,f,h,m,_,d,p,g,S,v,y,M;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=tn(e,t)||n,e.style[t]=i),u=[i,n],Hf(u),i=u[0],n=u[1],h=i.match(Zr)||[],M=n.match(Zr)||[],M.length){for(;f=Zr.exec(n);)p=f[0],S=n.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=es(m,p)+y),g=parseFloat(p),v=p.substr((g+"").length),l=Zr.lastIndex-v.length,v||(v=v||Si.units[t]||y,l===n.length&&(n+=v,a.e+=v)),y!==v&&(m=Hn(e,t,d,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?nd:id;return Mf.test(n)&&(a.e=0),this._pt=a,a},gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aM=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=gh[i]||i,t[1]=gh[n]||n,t.join(" ")},lM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Mn[a]&&(l=1,a=a==="transformOrigin"?Zi:ht),eo(i,a);l&&(eo(i,ht),o&&(o.svg&&i.removeAttribute("transform"),io(i,1),o.uncache=1,rd(n)))}},Ma={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new ai(e._pt,t,i,0,0,lM);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},to=[1,0,0,1,0,0],cd={},ud=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xh=function(e){var t=tn(e,ht);return ud(t)?to:t.substr(7).match(vf).map(_t)},Fc=function(e,t){var i=e._gsap||fr(e),n=e.style,s=xh(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?to:s):(s===to&&!e.offsetParent&&e!==ts&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ts.appendChild(e)),s=xh(e),l?n.display=l:eo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ts.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nc=function(e,t,i,n,s,o){var a=e._gsap,l=s||Fc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,m=l[0],_=l[1],d=l[2],p=l[3],g=l[4],S=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,w,R,x,E;i?l!==to&&(R=m*p-_*d)&&(x=y*(p/R)+M*(-d/R)+(d*S-p*g)/R,E=y*(-_/R)+M*(m/R)-(m*S-_*g)/R,y=x,M=E):(w=ad(e),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),M=w.y+(~(v[1]||v[0]).indexOf("%")?M/100*w.height:M)),n||n!==!1&&a.smooth?(g=y-c,S=M-u,a.xOffset=f+(g*m+S*d)-g,a.yOffset=h+(g*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[Zi]="0px 0px",o&&(Ln(o,a,"xOrigin",c,y),Ln(o,a,"yOrigin",u,M),Ln(o,a,"xOffset",f,a.xOffset),Ln(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},io=function(e,t){var i=e._gsap||new Yf(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=tn(e,Zi)||"0",u,f,h,m,_,d,p,g,S,v,y,M,w,R,x,E,P,N,q,O,L,z,G,$,B,J,C,k,Y,te,ie,se;return u=f=h=d=p=g=S=v=y=0,m=_=1,i.svg=!!(e.getCTM&&ld(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),n.scale=n.rotate=n.translate="none"),R=Fc(e,i.svg),i.svg&&(i.uncache?(B=e.getBBox(),c=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),nc(e,$||c,!!$||i.originIsAbsolute,i.smooth!==!1,R)),M=i.xOrigin||0,w=i.yOrigin||0,R!==to&&(N=R[0],q=R[1],O=R[2],L=R[3],u=z=R[4],f=G=R[5],R.length===6?(m=Math.sqrt(N*N+q*q),_=Math.sqrt(L*L+O*O),d=N||q?Gr(q,N)*ir:0,S=O||L?Gr(O,L)*ir+d:0,S&&(_*=Math.abs(Math.cos(S*is))),i.svg&&(u-=M-(M*N+w*O),f-=w-(M*q+w*L))):(se=R[6],te=R[7],C=R[8],k=R[9],Y=R[10],ie=R[11],u=R[12],f=R[13],h=R[14],x=Gr(se,Y),p=x*ir,x&&(E=Math.cos(-x),P=Math.sin(-x),$=z*E+C*P,B=G*E+k*P,J=se*E+Y*P,C=z*-P+C*E,k=G*-P+k*E,Y=se*-P+Y*E,ie=te*-P+ie*E,z=$,G=B,se=J),x=Gr(-O,Y),g=x*ir,x&&(E=Math.cos(-x),P=Math.sin(-x),$=N*E-C*P,B=q*E-k*P,J=O*E-Y*P,ie=L*P+ie*E,N=$,q=B,O=J),x=Gr(q,N),d=x*ir,x&&(E=Math.cos(x),P=Math.sin(x),$=N*E+q*P,B=z*E+G*P,q=q*E-N*P,G=G*E-z*P,N=$,z=B),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,g=180-g),m=_t(Math.sqrt(N*N+q*q+O*O)),_=_t(Math.sqrt(G*G+se*se)),x=Gr(z,G),S=Math.abs(x)>2e-4?x*ir:0,y=ie?1/(ie<0?-ie:ie):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ud(tn(e,ht)),$&&e.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(m*=-1,S+=d<=0?180:-180,d+=d<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=_t(m),i.scaleY=_t(_),i.rotation=_t(d)+a,i.rotationX=_t(p)+a,i.rotationY=_t(g)+a,i.skewX=S+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(n[Zi]=ya(c)),i.xOffset=i.yOffset=0,i.force3D=Si.force3D,i.renderTransform=i.svg?uM:od?hd:cM,i.uncache=0,i},ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tl=function(e,t,i){var n=kt(t);return _t(parseFloat(t)+parseFloat(Hn(e,"x",i+"px",n)))+n},cM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hd(e,t)},Jn="0deg",As="0px",Qn=") ",hd=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,m=i.skewY,_=i.scaleX,d=i.scaleY,p=i.transformPerspective,g=i.force3D,S=i.target,v=i.zOrigin,y="",M=g==="auto"&&e&&e!==1||g===!0;if(v&&(f!==Jn||u!==Jn)){var w=parseFloat(u)*is,R=Math.sin(w),x=Math.cos(w),E;w=parseFloat(f)*is,E=Math.cos(w),o=Tl(S,o,R*E*-v),a=Tl(S,a,-Math.sin(w)*-v),l=Tl(S,l,x*E*-v+v)}p!==As&&(y+="perspective("+p+Qn),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(M||o!==As||a!==As||l!==As)&&(y+=l!==As||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qn),c!==Jn&&(y+="rotate("+c+Qn),u!==Jn&&(y+="rotateY("+u+Qn),f!==Jn&&(y+="rotateX("+f+Qn),(h!==Jn||m!==Jn)&&(y+="skew("+h+", "+m+Qn),(_!==1||d!==1)&&(y+="scale("+_+", "+d+Qn),S.style[ht]=y||"translate(0, 0)"},uM=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,m=i.target,_=i.xOrigin,d=i.yOrigin,p=i.xOffset,g=i.yOffset,S=i.forceCSS,v=parseFloat(o),y=parseFloat(a),M,w,R,x,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=is,c*=is,M=Math.cos(l)*f,w=Math.sin(l)*f,R=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=is,E=Math.tan(c-u),E=Math.sqrt(1+E*E),R*=E,x*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),M*=E,w*=E)),M=_t(M),w=_t(w),R=_t(R),x=_t(x)):(M=f,x=h,w=R=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Hn(m,"x",o,"px"),y=Hn(m,"y",a,"px")),(_||d||p||g)&&(v=_t(v+_-(_*M+d*R)+p),y=_t(y+d-(_*w+d*x)+g)),(n||s)&&(E=m.getBBox(),v=_t(v+n/100*E.width),y=_t(y+s/100*E.height)),E="matrix("+M+","+w+","+R+","+x+","+v+","+y+")",m.setAttribute("transform",E),S&&(m.style[ht]=E)},hM=function(e,t,i,n,s){var o=360,a=Lt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ir:1),c=l-n,u=n+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*dh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*dh)%o-~~(c/o)*o)),e._pt=h=new ai(e._pt,t,i,n,c,Zv),h.e=u,h.u="deg",e._props.push(i),h},vh=function(e,t){for(var i in t)e[i]=t[i];return e},fM=function(e,t,i){var n=vh({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,m,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[ht]=t,a=io(i,1),eo(i,ht),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ht],o[ht]=t,a=io(i,1),o[ht]=c);for(l in Mn)c=n[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=kt(c),_=kt(u),f=m!==_?Hn(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new ai(e._pt,a,l,f,h-f,ec),e._pt.u=_||0,e._props.push(l));vh(a,n)};oi("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?r+a:"border"+a+r});Ma[e>1?"border"+r:r]=function(a,l,c,u,f){var h,m;if(arguments.length<4)return h=o.map(function(_){return fn(a,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},o.forEach(function(_,d){return m[_]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,m,f)}});var fd={name:"css",register:ic,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,m,_,d,p,g,S,v,y,M,w,R,x;Dc||ic(),this.styles=this.styles||sd(e),x=this.styles.props,this.tween=i;for(d in t)if(d!=="autoRound"&&(u=t[d],!(mi[d]&&Zf(d,t,i,n,e,s)))){if(m=typeof u,_=Ma[d],m==="function"&&(u=u.call(i,n,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Js(u)),_)_(this,e,d,u,i)&&(R=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Bn.lastIndex=0,Bn.test(c)||(p=kt(c),g=kt(u)),g?p!==g&&(c=Hn(e,d,c,g)+g):p&&(u+=p),this.add(a,"setProperty",c,u,n,s,0,0,d),o.push(d),x.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(i,n,e,s):l[d],Lt(c)&&~c.indexOf("random(")&&(c=Js(c)),kt(c+"")||(c+=Si.units[d]||kt(fn(e,d))||""),(c+"").charAt(1)==="="&&(c=fn(e,d))):c=fn(e,d),h=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),d in mn&&(d==="autoAlpha"&&(h===1&&fn(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),Ln(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=mn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in Mn,v){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||io(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new ai(this._pt,a,ht,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new ai(this._pt,M,"scaleY",M.scaleY,(S?es(M.scaleY,S+f):f)-M.scaleY||0,ec),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(Zi,0,a[Zi]),u=aM(u),M.svg?nc(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&Ln(this,M,"zOrigin",M.zOrigin,g),Ln(this,a,d,ya(c),ya(u)));continue}else if(d==="svgOrigin"){nc(e,u,1,w,0,this);continue}else if(d in cd){hM(this,M,d,h,S?es(h,S+u):u);continue}else if(d==="smoothOrigin"){Ln(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){fM(this,u,e);continue}}else d in a||(d=ms(d)||d);if(v||(f||f===0)&&(h||h===0)&&!Yv.test(u)&&d in a)p=(c+"").substr((h+"").length),f||(f=0),g=kt(u)||(d in Si.units?Si.units[d]:p),p!==g&&(h=Hn(e,d,c,g)),this._pt=new ai(this._pt,v?M:a,d,h,(S?es(h,S+f):f)-h,!v&&(g==="px"||d==="zIndex")&&t.autoRound!==!1?$v:ec),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Kv);else if(d in a)oM.call(this,e,d,c,S?S+u:u);else if(d in e)this.add(e,d,c||e[d],S?S+u:u,n,s);else if(d!=="parseTransform"){Sc(d,u);continue}v||(d in a?x.push(d,0,a[d]):x.push(d,1,c||e[d])),o.push(d)}}R&&ed(this)},render:function(e,t){if(t.tween._time||!Lc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:fn,aliases:mn,getSetter:function(e,t,i){var n=mn[t];return n&&n.indexOf(",")<0&&(t=n),t in Mn&&t!==Zi&&(e._gsap.x||fn(e,"x"))?i&&fh===i?t==="scale"?eM:Qv:(fh=i||{})&&(t==="scale"?tM:iM):e.style&&!Mc(e.style[t])?jv:~t.indexOf("-")?Jv:Cc(e,t)},core:{_removeProperty:eo,_getMatrix:Fc}};Ti.utils.checkPrefix=ms;Ti.core.getStyleSaver=sd;(function(r,e,t,i){var n=oi(r+","+e+","+t,function(s){Mn[s]=1});oi(e,function(s){Si.units[s]="deg",cd[s]=1}),mn[n[13]]=r+","+e,oi(i,function(s){var o=s.split(":");mn[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Si.units[r]="px"});Ti.registerPlugin(fd);var Qt=Ti.registerPlugin(fd)||Ti;Qt.core.Tween;function Mh(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function dM(r,e,t){return e&&Mh(r.prototype,e),t&&Mh(r,t),r}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nt,rc,xi,In,Fn,ns,dd,nr,ks,pd,_n,ki,md,_d=function(){return Nt||typeof window<"u"&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt},gd=1,$r=[],qe=[],nn=[],Gs=Date.now,sc=function(e,t){return t},pM=function(){var e=ks.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,qe),n.push.apply(n,nn),qe=i,nn=n,sc=function(o,a){return t[o](a)}},zn=function(e,t){return~nn.indexOf(e)&&nn[nn.indexOf(e)+1][t]},Vs=function(e){return!!~pd.indexOf(e)},ei=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:!n,capture:!!s})},Xt=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},zo="scrollLeft",ko="scrollTop",oc=function(){return _n&&_n.isPressed||qe.cache++},Sa=function(e,t){var i=function n(s){if(s||s===0){gd&&(xi.history.scrollRestoration="manual");var o=_n&&_n.isPressed;s=n.v=Math.round(s)||(_n&&_n.iOS?1:0),e(s),n.cacheID=qe.cache,o&&sc("ss",s)}else(t||qe.cache!==n.cacheID||sc("ref"))&&(n.cacheID=qe.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},$t={s:zo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sa(function(r){return arguments.length?xi.scrollTo(r,Tt.sc()):xi.pageXOffset||In[zo]||Fn[zo]||ns[zo]||0})},Tt={s:ko,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$t,sc:Sa(function(r){return arguments.length?xi.scrollTo($t.sc(),r):xi.pageYOffset||In[ko]||Fn[ko]||ns[ko]||0})},ti=function(e){return Nt.utils.toArray(e)[0]||(typeof e=="string"&&Nt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Wn=function(e,t){var i=t.s,n=t.sc;Vs(e)&&(e=In.scrollingElement||Fn);var s=qe.indexOf(e),o=n===Tt.sc?1:2;!~s&&(s=qe.push(e)-1),qe[s+o]||e.addEventListener("scroll",oc);var a=qe[s+o],l=a||(qe[s+o]=Sa(zn(e,i),!0)||(Vs(e)?n:Sa(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Nt.getProperty(e,"scrollBehavior")==="smooth"),l},ac=function(e,t,i){var n=e,s=e,o=Gs(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,d){var p=Gs();d||p-o>l?(s=n,n=_,a=o,o=p):i?n+=_:n=s+(_-s)/(p-a)*(o-a)},f=function(){s=n=i?0:n,a=o=0},h=function(_){var d=a,p=s,g=Gs();return(_||_===0)&&_!==n&&u(_),o===a||g-a>c?0:(n+(i?p:-p))/((i?g:o)-d)*1e3};return{update:u,reset:f,getVelocity:h}},Rs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yh=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},xd=function(){ks=Nt.core.globals().ScrollTrigger,ks&&ks.core&&pM()},vd=function(e){return Nt=e||_d(),Nt&&typeof document<"u"&&document.body&&(xi=window,In=document,Fn=In.documentElement,ns=In.body,pd=[xi,In,Fn,ns],Nt.utils.clamp,md=Nt.core.context||function(){},nr="onpointerenter"in ns?"pointer":"mouse",dd=yt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=yt.eventTypes=("ontouchstart"in Fn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gd=0},500),xd(),rc=1),rc};$t.op=Tt;qe.cache=0;var yt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){rc||vd(Nt)||console.warn("Please gsap.registerPlugin(Observer)"),ks||xd();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,h=i.onStopDelay,m=i.ignore,_=i.wheelSpeed,d=i.event,p=i.onDragStart,g=i.onDragEnd,S=i.onDrag,v=i.onPress,y=i.onRelease,M=i.onRight,w=i.onLeft,R=i.onUp,x=i.onDown,E=i.onChangeX,P=i.onChangeY,N=i.onChange,q=i.onToggleX,O=i.onToggleY,L=i.onHover,z=i.onHoverEnd,G=i.onMove,$=i.ignoreCheck,B=i.isNormalizer,J=i.onGestureStart,C=i.onGestureEnd,k=i.onWheel,Y=i.onEnable,te=i.onDisable,ie=i.onClick,se=i.scrollSpeed,I=i.capture,Le=i.allowClicks,he=i.lockAxis,Ie=i.onLockAxis;this.target=a=ti(a)||Fn,this.vars=i,m&&(m=Nt.utils.toArray(m)),n=n||1e-9,s=s||0,_=_||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xi.getComputedStyle(ns).lineHeight)||22);var ue,ze,de,ve,je,nt,$e,W=this,Je=0,De=0,At=Wn(a,$t),gt=Wn(a,Tt),A=At(),b=gt(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ki[0]==="pointerdown",ne=Vs(a),Q=a.ownerDocument||In,oe=[0,0,0],be=[0,0,0],fe=0,K=function(){return fe=Gs()},ye=function(ae,re){return(W.event=ae)&&m&&~m.indexOf(ae.target)||re&&j&&ae.pointerType!=="touch"||$&&$(ae,re)},Ce=function(){W._vx.reset(),W._vy.reset(),ze.pause(),f&&f(W)},pe=function(){var ae=W.deltaX=yh(oe),re=W.deltaY=yh(be),ge=Math.abs(ae)>=n,Pe=Math.abs(re)>=n;N&&(ge||Pe)&&N(W,ae,re,oe,be),ge&&(M&&W.deltaX>0&&M(W),w&&W.deltaX<0&&w(W),E&&E(W),q&&W.deltaX<0!=Je<0&&q(W),Je=W.deltaX,oe[0]=oe[1]=oe[2]=0),Pe&&(x&&W.deltaY>0&&x(W),R&&W.deltaY<0&&R(W),P&&P(W),O&&W.deltaY<0!=De<0&&O(W),De=W.deltaY,be[0]=be[1]=be[2]=0),(ve||de)&&(G&&G(W),de&&(S(W),de=!1),ve=!1),nt&&!(nt=!1)&&Ie&&Ie(W),je&&(k(W),je=!1),ue=0},we=function(ae,re,ge){oe[ge]+=ae,be[ge]+=re,W._vx.update(ae),W._vy.update(re),c?ue||(ue=requestAnimationFrame(pe)):pe()},Se=function(ae,re){he&&!$e&&(W.axis=$e=Math.abs(ae)>Math.abs(re)?"x":"y",nt=!0),$e!=="y"&&(oe[2]+=ae,W._vx.update(ae,!0)),$e!=="x"&&(be[2]+=re,W._vy.update(re,!0)),c?ue||(ue=requestAnimationFrame(pe)):pe()},ke=function(ae){if(!ye(ae,1)){ae=Rs(ae,u);var re=ae.clientX,ge=ae.clientY,Pe=re-W.x,Oe=ge-W.y,xt=W.isDragging;W.x=re,W.y=ge,(xt||Math.abs(W.startX-re)>=s||Math.abs(W.startY-ge)>=s)&&(S&&(de=!0),xt||(W.isDragging=!0),Se(Pe,Oe),xt||p&&p(W))}},Ee=W.onPress=function(Ne){ye(Ne,1)||(W.axis=$e=null,ze.pause(),W.isPressed=!0,Ne=Rs(Ne),Je=De=0,W.startX=W.x=Ne.clientX,W.startY=W.y=Ne.clientY,W._vx.reset(),W._vy.reset(),ei(B?a:Q,ki[1],ke,u,!0),W.deltaX=W.deltaY=0,v&&v(W))},Qe=function(ae){if(!ye(ae,1)){Xt(B?a:Q,ki[1],ke,!0);var re=!isNaN(W.y-W.startY),ge=W.isDragging&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Pe=Rs(ae);!ge&&re&&(W._vx.reset(),W._vy.reset(),u&&Le&&Nt.delayedCall(.08,function(){if(Gs()-fe>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(Q.createEvent){var Oe=Q.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,xi,1,Pe.screenX,Pe.screenY,Pe.clientX,Pe.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(Oe)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&!B&&ze.restart(!0),g&&ge&&g(W),y&&y(W,ge)}},D=function(ae){return ae.touches&&ae.touches.length>1&&(W.isGesturing=!0)&&J(ae,W.isDragging)},X=function(){return(W.isGesturing=!1)||C(W)},ee=function(ae){if(!ye(ae)){var re=At(),ge=gt();we((re-A)*se,(ge-b)*se,1),A=re,b=ge,f&&ze.restart(!0)}},le=function(ae){if(!ye(ae)){ae=Rs(ae,u),k&&(je=!0);var re=(ae.deltaMode===1?l:ae.deltaMode===2?xi.innerHeight:1)*_;we(ae.deltaX*re,ae.deltaY*re,0),f&&!B&&ze.restart(!0)}},_e=function(ae){if(!ye(ae)){var re=ae.clientX,ge=ae.clientY,Pe=re-W.x,Oe=ge-W.y;W.x=re,W.y=ge,ve=!0,(Pe||Oe)&&Se(Pe,Oe)}},Xe=function(ae){W.event=ae,L(W)},et=function(ae){W.event=ae,z(W)},ft=function(ae){return ye(ae)||Rs(ae,u)&&ie(W)};ze=W._dc=Nt.delayedCall(h||.25,Ce).pause(),W.deltaX=W.deltaY=0,W._vx=ac(0,50,!0),W._vy=ac(0,50,!0),W.scrollX=At,W.scrollY=gt,W.isDragging=W.isGesturing=W.isPressed=!1,md(this),W.enable=function(Ne){return W.isEnabled||(ei(ne?Q:a,"scroll",oc),o.indexOf("scroll")>=0&&ei(ne?Q:a,"scroll",ee,u,I),o.indexOf("wheel")>=0&&ei(a,"wheel",le,u,I),(o.indexOf("touch")>=0&&dd||o.indexOf("pointer")>=0)&&(ei(a,ki[0],Ee,u,I),ei(Q,ki[2],Qe),ei(Q,ki[3],Qe),Le&&ei(a,"click",K,!1,!0),ie&&ei(a,"click",ft),J&&ei(Q,"gesturestart",D),C&&ei(Q,"gestureend",X),L&&ei(a,nr+"enter",Xe),z&&ei(a,nr+"leave",et),G&&ei(a,nr+"move",_e)),W.isEnabled=!0,Ne&&Ne.type&&Ee(Ne),Y&&Y(W)),W},W.disable=function(){W.isEnabled&&($r.filter(function(Ne){return Ne!==W&&Vs(Ne.target)}).length||Xt(ne?Q:a,"scroll",oc),W.isPressed&&(W._vx.reset(),W._vy.reset(),Xt(B?a:Q,ki[1],ke,!0)),Xt(ne?Q:a,"scroll",ee,I),Xt(a,"wheel",le,I),Xt(a,ki[0],Ee,I),Xt(Q,ki[2],Qe),Xt(Q,ki[3],Qe),Xt(a,"click",K,!0),Xt(a,"click",ft),Xt(Q,"gesturestart",D),Xt(Q,"gestureend",X),Xt(a,nr+"enter",Xe),Xt(a,nr+"leave",et),Xt(a,nr+"move",_e),W.isEnabled=W.isPressed=W.isDragging=!1,te&&te(W))},W.kill=W.revert=function(){W.disable();var Ne=$r.indexOf(W);Ne>=0&&$r.splice(Ne,1),_n===W&&(_n=0)},$r.push(W),B&&Vs(a)&&(_n=W),W.enable(d)},dM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();yt.version="3.11.4";yt.create=function(r){return new yt(r)};yt.register=vd;yt.getAll=function(){return $r.slice()};yt.getById=function(r){return $r.filter(function(e){return e.vars.id===r})[0]};_d()&&Nt.registerPlugin(yt);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,Xr,Ze,lt,Hi,dt,Md,ba,Ta,jr,na,Go,zt,La,lc,Yt,Sh,bh,qr,yd,El,Sd,di,bd,Td,Ed,Rn,cc,Oc,wl,Vo=1,Kt=Date.now,Al=Kt(),Oi=0,Ho=0,Th=function(){return La=1},Eh=function(){return La=0},ji=function(e){return e},Fs=function(e){return Math.round(e*1e5)/1e5||0},wd=function(){return typeof window<"u"},Ad=function(){return Ae||wd()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},br=function(e){return!!~Md.indexOf(e)},Rd=function(e){return zn(e,"getBoundingClientRect")||(br(e)?function(){return ca.width=Ze.innerWidth,ca.height=Ze.innerHeight,ca}:function(){return pn(e)})},mM=function(e,t,i){var n=i.d,s=i.d2,o=i.a;return(o=zn(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?Ze["inner"+s]:e["client"+s])||0}},_M=function(e,t){return!t||~nn.indexOf(e)?Rd(e):function(){return ca}},On=function(e,t){var i=t.s,n=t.d2,s=t.d,o=t.a;return(i="scroll"+n)&&(o=zn(e,i))?o()-Rd(e)()[s]:br(e)?(Hi[i]||dt[i])-(Ze["inner"+n]||Hi["client"+n]||dt["client"+n]):e[i]-e["offset"+n]},Wo=function(e,t){for(var i=0;i<qr.length;i+=3)(!t||~t.indexOf(qr[i+1]))&&e(qr[i],qr[i+1],qr[i+2])},Gi=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Os=function(e){return typeof e=="number"},ra=function(e){return typeof e=="object"},Cs=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Rl=function(e,t){if(e.enabled){var i=t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Vr=Math.abs,Cd="left",Pd="top",Uc="right",Nc="bottom",mr="width",_r="height",Hs="Right",Ws="Left",Xs="Top",qs="Bottom",mt="padding",Pi="margin",_s="Width",Bc="Height",It="px",Yi=function(e){return Ze.getComputedStyle(e)},gM=function(e){var t=Yi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wh=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pn=function(e,t){var i=t&&Yi(e)[lc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},uc=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Dd=function(e){var t=[],i=e.labels,n=e.duration(),s;for(s in i)t.push(i[s]/n);return t},xM=function(e){return function(t){return Ae.utils.snap(Dd(e),t)}},zc=function(e){var t=Ae.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return t(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=t(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:t(s<0?n-e:n+e)}},vM=function(e){return function(t,i){return zc(Dd(e))(t,i.direction)}},Xo=function(e,t,i,n){return i.split(",").forEach(function(s){return e(t,s,n)})},Ft=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:!n,capture:!!s})},Pt=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},qo=function(e,t,i){return i&&i.wheelHandler&&e(t,"wheel",i)},Ah={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yo={toggleActions:"play",anticipatePin:0},Ea={top:0,left:0,center:.5,bottom:1,right:1},sa=function(e,t){if(Gi(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in Ea?Ea[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Zo=function(e,t,i,n,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,m=s.fontWeight,_=lt.createElement("div"),d=br(i)||zn(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=d?dt:i,S=e.indexOf("start")!==-1,v=S?c:u,y="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(y+=(n===Tt?Uc:Nc)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(_,g.children[0]):g.appendChild(_),_._offset=_["offset"+n.op.d2],oa(_,0,n,S),_},oa=function(e,t,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+_s]=1,s["border"+a+_s]=0,s[i.p]=t+"px",Ae.set(e,s)},We=[],hc={},no,Rh=function(){return Kt()-Oi>34&&(no||(no=requestAnimationFrame(Xn)))},Hr=function(){(!di||!di.isPressed||di.startX>dt.clientWidth)&&(qe.cache++,di?no||(no=requestAnimationFrame(Xn)):Xn(),Oi||Er("scrollStart"),Oi=Kt())},Cl=function(){Ed=Ze.innerWidth,Td=Ze.innerHeight},Us=function(){qe.cache++,!zt&&!Sd&&!lt.fullscreenElement&&!lt.webkitFullscreenElement&&(!bd||Ed!==Ze.innerWidth||Math.abs(Ze.innerHeight-Td)>Ze.innerHeight*.25)&&ba.restart(!0)},Tr={},MM=[],Ld=function r(){return Pt(Ye,"scrollEnd",r)||lr(!0)},Er=function(e){return Tr[e]&&Tr[e].map(function(t){return t()})||MM},pi=[],Id=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},kc=function(e,t){var i;for(Yt=0;Yt<We.length;Yt++)i=We[Yt],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));t&&Id(t),t||Er("revert")},Fd=function(e,t){qe.cache++,(t||!Vi)&&qe.forEach(function(i){return jt(i)&&i.cacheID++&&(i.rec=0)}),Gi(e)&&(Ze.history.scrollRestoration=Oc=e)},Vi,gr=0,Ch,yM=function(){if(Ch!==gr){var e=Ch=gr;requestAnimationFrame(function(){return e===gr&&lr(!0)})}},lr=function(e,t){if(Oi&&!e){Ft(Ye,"scrollEnd",Ld);return}Vi=Ye.isRefreshing=!0,qe.forEach(function(n){return jt(n)&&n.cacheID++&&(n.rec=n())});var i=Er("refreshInit");yd&&Ye.sort(),t||kc(),qe.forEach(function(n){jt(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),We.slice(0).forEach(function(n){return n.refresh()}),We.forEach(function(n,s){if(n._subPinOffset&&n.pin){var o=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[o];n.revert(!0,1),n.adjustPinSpacing(n.pin[o]-a),n.revert(!1,1)}}),We.forEach(function(n){return n.vars.end==="max"&&n.setPositions(n.start,Math.max(n.start+1,On(n.scroller,n._dir)))}),i.forEach(function(n){return n&&n.render&&n.render(-1)}),qe.forEach(function(n){jt(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Fd(Oc,1),ba.pause(),gr++,Xn(2),We.forEach(function(n){return jt(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Vi=Ye.isRefreshing=!1,Er("refresh")},Ph=0,aa=1,Ys,Xn=function(e){if(!Vi||e===2){Ye.isUpdating=!0,Ys&&Ys.update(0);var t=We.length,i=Kt(),n=i-Al>=50,s=t&&We[0].scroll();if(aa=Ph>s?-1:1,Ph=s,n&&(Oi&&!La&&i-Oi>200&&(Oi=0,Er("scrollEnd")),na=Al,Al=i),aa<0){for(Yt=t;Yt-- >0;)We[Yt]&&We[Yt].update(0,n);aa=1}else for(Yt=0;Yt<t;Yt++)We[Yt]&&We[Yt].update(0,n);Ye.isUpdating=!1}no=0},fc=[Cd,Pd,Nc,Uc,Pi+qs,Pi+Hs,Pi+Xs,Pi+Ws,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],la=fc.concat([mr,_r,"boxSizing","max"+_s,"max"+Bc,"position",Pi,mt,mt+Xs,mt+Hs,mt+qs,mt+Ws]),SM=function(e,t,i){rs(i);var n=e._gsap;if(n.spacerIsNative)rs(n.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Pl=function(e,t,i,n){if(!e._gsap.swappedIn){for(var s=fc.length,o=t.style,a=e.style,l;s--;)l=fc[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Nc]=a[Uc]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[mr]=uc(e,$t)+It,o[_r]=uc(e,Tt)+It,o[mt]=a[Pi]=a[Pd]=a[Cd]="0",rs(n),a[mr]=a["max"+_s]=i[mr],a[_r]=a["max"+Bc]=i[_r],a[mt]=i[mt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},bM=/([A-Z])/g,rs=function(e){if(e){var t=e.t.style,i=e.length,n=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],s=e[n],o?t[s]=o:t[s]&&t.removeProperty(s.replace(bM,"-$1").toLowerCase())}},Ko=function(e){for(var t=la.length,i=e.style,n=[],s=0;s<t;s++)n.push(la[s],i[la[s]]);return n.t=e,n},TM=function(e,t,i){for(var n=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},ca={left:0,top:0},Dh=function(e,t,i,n,s,o,a,l,c,u,f,h,m){jt(e)&&(e=e(l)),Gi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?sa("0"+e.substr(3),i):0));var _=m?m.time():0,d,p,g;if(m&&m.seek(0),Os(e))a&&oa(a,i,n,!0);else{jt(t)&&(t=t(l));var S=(e||"0").split(" "),v,y,M,w;g=ti(t)||dt,v=pn(g)||{},(!v||!v.left&&!v.top)&&Yi(g).display==="none"&&(w=g.style.display,g.style.display="block",v=pn(g),w?g.style.display=w:g.style.removeProperty("display")),y=sa(S[0],v[n.d]),M=sa(S[1]||"0",i),e=v[n.p]-c[n.p]-u+y+s-M,a&&oa(a,M,n,i-M<20||a._isStart&&M>20),i-=i-M}if(o){var R=e+i,x=o._isStart;d="scroll"+n.d2,oa(o,R,n,x&&R>20||!x&&(f?Math.max(dt[d],Hi[d]):o.parentNode[d])<=R+1),f&&(c=pn(a),f&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+It))}return m&&g&&(d=pn(g),m.seek(h),p=pn(g),m._caScrollDist=d[n.p]-p[n.p],e=e/m._caScrollDist*h),m&&m.seek(_),m?e:Math.round(e)},EM=/(webkit|moz|length|cssText|inset)/i,Lh=function(e,t,i,n){if(e.parentNode!==t){var s=e.style,o,a;if(t===dt){e._stOrig=s.cssText,a=Yi(e);for(o in a)!+o&&!EM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},Ih=function(e,t){var i=Wn(e,t),n="_scroll"+t.p2,s,o,a=function l(c,u,f,h,m){var _=l.tween,d=u.onComplete,p={};return f=f||i(),m=h&&m||0,h=h||c-f,_&&_.kill(),s=Math.round(f),u[n]=c,u.modifiers=p,p[n]=function(g){return g=Math.round(i()),g!==s&&g!==o&&Math.abs(g-s)>3&&Math.abs(g-o)>3?(_.kill(),l.tween=0):g=f+h*_.ratio+m*_.ratio*_.ratio,o=s,s=Math.round(g)},u.onUpdate=function(){qe.cache++,Xn()},u.onComplete=function(){l.tween=0,d&&d.call(_)},_=l.tween=Ae.to(e,u),_};return e[n]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Ft(e,"wheel",i.wheelHandler),a},Ye=function(){function r(t,i){Xr||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,i)}var e=r.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ho){this.update=this.refresh=this.kill=ji;return}i=wh(Gi(i)||Os(i)||i.nodeType?{trigger:i}:i,Yo);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,m=s.pin,_=s.pinSpacing,d=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,S=s.onSnapComplete,v=s.once,y=s.snap,M=s.pinReparent,w=s.pinSpacer,R=s.containerAnimation,x=s.fastScrollEnd,E=s.preventOverlaps,P=i.horizontal||i.containerAnimation&&i.horizontal!==!1?$t:Tt,N=!f&&f!==0,q=ti(i.scroller||Ze),O=Ae.core.getCache(q),L=br(q),z=("pinType"in i?i.pinType:zn(q,"pinType")||L&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],$=N&&i.toggleActions.split(" "),B="markers"in i?i.markers:Yo.markers,J=L?0:parseFloat(Yi(q)["border"+P.p2+_s])||0,C=this,k=i.onRefreshInit&&function(){return i.onRefreshInit(C)},Y=mM(q,L,P),te=_M(q,L),ie=0,se=0,I=Wn(q,P),Le,he,Ie,ue,ze,de,ve,je,nt,$e,W,Je,De,At,gt,A,b,j,ne,Q,oe,be,fe,K,ye,Ce,pe,we,Se,ke,Ee,Qe,D,X,ee,le,_e,Xe,et;if(cc(C),C._dir=P,p*=45,C.scroller=q,C.scroll=R?R.time.bind(R):I,ue=I(),C.vars=i,n=n||i.animation,"refreshPriority"in i&&(yd=1,i.refreshPriority===-9999&&(Ys=C)),O.tweenScroll=O.tweenScroll||{top:Ih(q,Tt),left:Ih(q,$t)},C.tweenTo=Le=O.tweenScroll[P.p],C.scrubDuration=function(re){Qe=Os(re)&&re,Qe?Ee?Ee.duration(re):Ee=Ae.to(n,{ease:"expo",totalProgress:"+=0.001",duration:Qe,paused:!0,onComplete:function(){return g&&g(C)}}):(Ee&&Ee.progress(1).kill(),Ee=0)},n&&(n.vars.lazy=!1,n._initted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),C.animation=n.pause(),n.scrollTrigger=C,C.scrubDuration(f),Se=0,l||(l=n.vars.id)),We.push(C),y&&((!ra(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in dt.style&&Ae.set(L?[dt,Hi]:q,{scrollBehavior:"auto"}),qe.forEach(function(re){return jt(re)&&re.target===(L?lt.scrollingElement||Hi:q)&&(re.smooth=!1)}),Ie=jt(y.snapTo)?y.snapTo:y.snapTo==="labels"?xM(n):y.snapTo==="labelsDirectional"?vM(n):y.directional!==!1?function(re,ge){return zc(y.snapTo)(re,Kt()-se<500?0:ge.direction)}:Ae.utils.snap(y.snapTo),D=y.duration||{min:.1,max:2},D=ra(D)?jr(D.min,D.max):jr(D,D),X=Ae.delayedCall(y.delay||Qe/2||.1,function(){var re=I(),ge=Kt()-se<500,Pe=Le.tween;if((ge||Math.abs(C.getVelocity())<10)&&!Pe&&!La&&ie!==re){var Oe=(re-de)/De,xt=n&&!N?n.totalProgress():Oe,Ge=ge?0:(xt-ke)/(Kt()-na)*1e3||0,T=Ae.utils.clamp(-Oe,1-Oe,Vr(Ge/2)*Ge/.185),U=Oe+(y.inertia===!1?0:T),Z=jr(0,1,Ie(U,C)),F=Math.round(de+Z*De),H=y,xe=H.onStart,me=H.onInterrupt,Me=H.onComplete;if(re<=ve&&re>=de&&F!==re){if(Pe&&!Pe._initted&&Pe.data<=Vr(F-re))return;y.inertia===!1&&(T=Z-Oe),Le(F,{duration:D(Vr(Math.max(Vr(U-xt),Vr(Z-xt))*.185/Ge/.05||0)),ease:y.ease||"power3",data:Vr(F-re),onInterrupt:function(){return X.restart(!0)&&me&&me(C)},onComplete:function(){C.update(),ie=I(),Se=ke=n&&!N?n.totalProgress():C.progress,S&&S(C),Me&&Me(C)}},re,T*De,F-re-T*De),xe&&xe(C,Le.tween)}}else C.isActive&&ie!==re&&X.restart(!0)}).pause()),l&&(hc[l]=C),h=C.trigger=ti(h||m),et=h&&h._gsap&&h._gsap.stRevert,et&&(et=et(C)),m=m===!0?h:ti(m),Gi(a)&&(a={targets:h,className:a}),m&&(_===!1||_===Pi||(_=!_&&m.parentNode&&m.parentNode.style&&Yi(m.parentNode).display==="flex"?!1:mt),C.pin=m,he=Ae.core.getCache(m),he.spacer?At=he.pinState:(w&&(w=ti(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),he.spacerIsNative=!!w,w&&(he.spacerState=Ko(w))),he.spacer=b=w||lt.createElement("div"),b.classList.add("pin-spacer"),l&&b.classList.add("pin-spacer-"+l),he.pinState=At=Ko(m)),i.force3D!==!1&&Ae.set(m,{force3D:!0}),C.spacer=b=he.spacer,we=Yi(m),fe=we[_+P.os2],ne=Ae.getProperty(m),Q=Ae.quickSetter(m,P.a,It),Pl(m,b,we),A=Ko(m)),B){Je=ra(B)?wh(B,Ah):Ah,$e=Zo("scroller-start",l,q,P,Je,0),W=Zo("scroller-end",l,q,P,Je,0,$e),j=$e["offset"+P.op.d2];var ft=ti(zn(q,"content")||q);je=this.markerStart=Zo("start",l,ft,P,Je,j,0,R),nt=this.markerEnd=Zo("end",l,ft,P,Je,j,0,R),R&&(Xe=Ae.quickSetter([je,nt],P.a,It)),!z&&!(nn.length&&zn(q,"fixedMarkers")===!0)&&(gM(L?dt:q),Ae.set([$e,W],{force3D:!0}),ye=Ae.quickSetter($e,P.a,It),pe=Ae.quickSetter(W,P.a,It))}if(R){var Ne=R.vars.onUpdate,ae=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){C.update(0,0,1),Ne&&Ne.apply(ae||[])})}C.previous=function(){return We[We.indexOf(C)-1]},C.next=function(){return We[We.indexOf(C)+1]},C.revert=function(re,ge){if(!ge)return C.kill(!0);var Pe=re!==!1||!C.enabled,Oe=zt;Pe!==C.isReverted&&(Pe&&(le=Math.max(I(),C.scroll.rec||0),ee=C.progress,_e=n&&n.progress()),je&&[je,nt,$e,W].forEach(function(xt){return xt.style.display=Pe?"none":"block"}),Pe&&(zt=1,C.update(Pe)),m&&(!M||!C.isActive)&&(Pe?SM(m,b,At):Pl(m,b,Yi(m),K)),Pe||C.update(Pe),zt=Oe,C.isReverted=Pe)},C.refresh=function(re,ge){if(!((zt||!C.enabled)&&!ge)){if(m&&re&&Oi){Ft(r,"scrollEnd",Ld);return}!Vi&&k&&k(C),zt=1,se=Kt(),Le.tween&&(Le.tween.kill(),Le.tween=0),Ee&&Ee.pause(),d&&n&&n.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;for(var Pe=Y(),Oe=te(),xt=R?R.duration():On(q,P),Ge=0,T=0,U=i.end,Z=i.endTrigger||h,F=i.start||(i.start===0||!h?0:m?"0 0":"0 100%"),H=C.pinnedContainer=i.pinnedContainer&&ti(i.pinnedContainer),xe=h&&Math.max(0,We.indexOf(C))||0,me=xe,Me,Te,Ve,Be,Re,Ue,ct,li,Ki,rt,Fe;me--;)Ue=We[me],Ue.end||Ue.refresh(0,1)||(zt=1),ct=Ue.pin,ct&&(ct===h||ct===m)&&!Ue.isReverted&&(rt||(rt=[]),rt.unshift(Ue),Ue.revert(!0,!0)),Ue!==We[me]&&(xe--,me--);for(jt(F)&&(F=F(C)),de=Dh(F,h,Pe,P,I(),je,$e,C,Oe,J,z,xt,R)||(m?-.001:0),jt(U)&&(U=U(C)),Gi(U)&&!U.indexOf("+=")&&(~U.indexOf(" ")?U=(Gi(F)?F.split(" ")[0]:"")+U:(Ge=sa(U.substr(2),Pe),U=Gi(F)?F:de+Ge,Z=h)),ve=Math.max(de,Dh(U||(Z?"100% 0":xt),Z,Pe,P,I()+Ge,nt,W,C,Oe,J,z,xt,R))||-.001,De=ve-de||(de-=.01)&&.001,Ge=0,me=xe;me--;)Ue=We[me],ct=Ue.pin,ct&&Ue.start-Ue._pinPush<=de&&!R&&Ue.end>0&&(Me=Ue.end-Ue.start,(ct===h&&Ue.start-Ue._pinPush<de||ct===H)&&!Os(F)&&(Ge+=Me*(1-Ue.progress)),ct===m&&(T+=Me));if(de+=Ge,ve+=Ge,C._pinPush=T,je&&Ge&&(Me={},Me[P.a]="+="+Ge,H&&(Me[P.p]="-="+I()),Ae.set([je,nt],Me)),m)Me=Yi(m),Be=P===Tt,Ve=I(),oe=parseFloat(ne(P.a))+T,!xt&&ve>1&&(Fe=(L?lt.scrollingElement||Hi:q).style,Fe={style:Fe,value:Fe["overflow"+P.a.toUpperCase()]},Fe["overflow"+P.a.toUpperCase()]="scroll"),Pl(m,b,Me),A=Ko(m),Te=pn(m,!0),li=z&&Wn(q,Be?$t:Tt)(),_&&(K=[_+P.os2,De+T+It],K.t=b,me=_===mt?uc(m,P)+De+T:0,me&&K.push(P.d,me+It),rs(K),H&&We.forEach(function(sn){sn.pin===H&&sn.vars.pinSpacing!==!1&&(sn._subPinOffset=!0)}),z&&I(le)),z&&(Re={top:Te.top+(Be?Ve-de:li)+It,left:Te.left+(Be?li:Ve-de)+It,boxSizing:"border-box",position:"fixed"},Re[mr]=Re["max"+_s]=Math.ceil(Te.width)+It,Re[_r]=Re["max"+Bc]=Math.ceil(Te.height)+It,Re[Pi]=Re[Pi+Xs]=Re[Pi+Hs]=Re[Pi+qs]=Re[Pi+Ws]="0",Re[mt]=Me[mt],Re[mt+Xs]=Me[mt+Xs],Re[mt+Hs]=Me[mt+Hs],Re[mt+qs]=Me[mt+qs],Re[mt+Ws]=Me[mt+Ws],gt=TM(At,Re,M),Vi&&I(0)),n?(Ki=n._initted,El(1),n.render(n.duration(),!0,!0),be=ne(P.a)-oe+De+T,Ce=Math.abs(De-be)>1,z&&Ce&&gt.splice(gt.length-2,2),n.render(0,!0,!0),Ki||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),El(0)):be=De,Fe&&(Fe.value?Fe.style["overflow"+P.a.toUpperCase()]=Fe.value:Fe.style.removeProperty("overflow-"+P.a));else if(h&&I()&&!R)for(Te=h.parentNode;Te&&Te!==dt;)Te._pinOffset&&(de-=Te._pinOffset,ve-=Te._pinOffset),Te=Te.parentNode;rt&&rt.forEach(function(sn){return sn.revert(!1,!0)}),C.start=de,C.end=ve,ue=ze=Vi?le:I(),!R&&!Vi&&(ue<le&&I(le),C.scroll.rec=0),C.revert(!1,!0),X&&(ie=-1,C.isActive&&I(de+De*ee),X.restart(!0)),zt=0,n&&N&&(n._initted||_e)&&n.progress()!==_e&&n.progress(_e,!0).render(n.time(),!0,!0),(ee!==C.progress||R)&&(n&&!N&&n.totalProgress(ee,!0),C.progress=(ue-de)/De===ee?0:ee),m&&_&&(b._pinOffset=Math.round(C.progress*be)),u&&!Vi&&u(C)}},C.getVelocity=function(){return(I()-ze)/(Kt()-na)*1e3||0},C.endAnimation=function(){Cs(C.callbackAnimation),n&&(Ee?Ee.progress(1):n.paused()?N||Cs(n,C.direction<0,1):Cs(n,n.reversed()))},C.labelToScroll=function(re){return n&&n.labels&&(de||C.refresh()||de)+n.labels[re]/n.duration()*De||0},C.getTrailing=function(re){var ge=We.indexOf(C),Pe=C.direction>0?We.slice(0,ge).reverse():We.slice(ge+1);return(Gi(re)?Pe.filter(function(Oe){return Oe.vars.preventOverlaps===re}):Pe).filter(function(Oe){return C.direction>0?Oe.end<=de:Oe.start>=ve})},C.update=function(re,ge,Pe){if(!(R&&!Pe&&!re)){var Oe=Vi?le:C.scroll(),xt=re?0:(Oe-de)/De,Ge=xt<0?0:xt>1?1:xt||0,T=C.progress,U,Z,F,H,xe,me,Me,Te;if(ge&&(ze=ue,ue=R?I():Oe,y&&(ke=Se,Se=n&&!N?n.totalProgress():Ge)),p&&!Ge&&m&&!zt&&!Vo&&Oi&&de<Oe+(Oe-ze)/(Kt()-na)*p&&(Ge=1e-4),Ge!==T&&C.enabled){if(U=C.isActive=!!Ge&&Ge<1,Z=!!T&&T<1,me=U!==Z,xe=me||!!Ge!=!!T,C.direction=Ge>T?1:-1,C.progress=Ge,xe&&!zt&&(F=Ge&&!T?0:Ge===1?1:T===1?2:3,N&&(H=!me&&$[F+1]!=="none"&&$[F+1]||$[F],Te=n&&(H==="complete"||H==="reset"||H in n))),E&&(me||Te)&&(Te||f||!n)&&(jt(E)?E(C):C.getTrailing(E).forEach(function(Ue){return Ue.endAnimation()})),N||(Ee&&!zt&&!Vo?(Ee._dp._time-Ee._start!==Ee._time&&Ee.render(Ee._dp._time-Ee._start),Ee.resetTo?Ee.resetTo("totalProgress",Ge,n._tTime/n._tDur):(Ee.vars.totalProgress=Ge,Ee.invalidate().restart())):n&&n.totalProgress(Ge,!!zt)),m){if(re&&_&&(b.style[_+P.os2]=fe),!z)Q(Fs(oe+be*Ge));else if(xe){if(Me=!re&&Ge>T&&ve+1>Oe&&Oe+1>=On(q,P),M)if(!re&&(U||Me)){var Ve=pn(m,!0),Be=Oe-de;Lh(m,dt,Ve.top+(P===Tt?Be:0)+It,Ve.left+(P===Tt?0:Be)+It)}else Lh(m,b);rs(U||Me?gt:A),Ce&&Ge<1&&U||Q(oe+(Ge===1&&!Me?be:0))}}y&&!Le.tween&&!zt&&!Vo&&X.restart(!0),a&&(me||v&&Ge&&(Ge<1||!wl))&&Ta(a.targets).forEach(function(Ue){return Ue.classList[U||v?"add":"remove"](a.className)}),o&&!N&&!re&&o(C),xe&&!zt?(N&&(Te&&(H==="complete"?n.pause().totalProgress(1):H==="reset"?n.restart(!0).pause():H==="restart"?n.restart(!0):n[H]()),o&&o(C)),(me||!wl)&&(c&&me&&Rl(C,c),G[F]&&Rl(C,G[F]),v&&(Ge===1?C.kill(!1,1):G[F]=0),me||(F=Ge===1?1:3,G[F]&&Rl(C,G[F]))),x&&!U&&Math.abs(C.getVelocity())>(Os(x)?x:2500)&&(Cs(C.callbackAnimation),Ee?Ee.progress(1):Cs(n,H==="reverse"?1:!Ge,1))):N&&o&&!zt&&o(C)}if(pe){var Re=R?Oe/R.duration()*(R._caScrollDist||0):Oe;ye(Re+($e._isFlipped?1:0)),pe(Re)}Xe&&Xe(-Oe/R.duration()*(R._caScrollDist||0))}},C.enable=function(re,ge){C.enabled||(C.enabled=!0,Ft(q,"resize",Us),Ft(L?lt:q,"scroll",Hr),k&&Ft(r,"refreshInit",k),re!==!1&&(C.progress=ee=0,ue=ze=ie=I()),ge!==!1&&C.refresh())},C.getTween=function(re){return re&&Le?Le.tween:Ee},C.setPositions=function(re,ge){m&&(oe+=re-de,be+=ge-re-De,_===mt&&C.adjustPinSpacing(ge-re-De)),C.start=de=re,C.end=ve=ge,De=ge-re,C.update()},C.adjustPinSpacing=function(re){if(K){var ge=K.indexOf(P.d)+1;K[ge]=parseFloat(K[ge])+re+It,K[1]=parseFloat(K[1])+re+It,rs(K)}},C.disable=function(re,ge){if(C.enabled&&(re!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,ge||Ee&&Ee.pause(),le=0,he&&(he.uncache=1),k&&Pt(r,"refreshInit",k),X&&(X.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!L)){for(var Pe=We.length;Pe--;)if(We[Pe].scroller===q&&We[Pe]!==C)return;Pt(q,"resize",Us),Pt(q,"scroll",Hr)}},C.kill=function(re,ge){C.disable(re,ge),Ee&&!ge&&Ee.kill(),l&&delete hc[l];var Pe=We.indexOf(C);Pe>=0&&We.splice(Pe,1),Pe===Yt&&aa>0&&Yt--,Pe=0,We.forEach(function(Oe){return Oe.scroller===C.scroller&&(Pe=1)}),Pe||Vi||(C.scroll.rec=0),n&&(n.scrollTrigger=null,re&&n.revert({kill:!1}),ge||n.kill()),je&&[je,nt,$e,W].forEach(function(Oe){return Oe.parentNode&&Oe.parentNode.removeChild(Oe)}),Ys===C&&(Ys=0),m&&(he&&(he.uncache=1),Pe=0,We.forEach(function(Oe){return Oe.pin===m&&Pe++}),Pe||(he.spacer=0)),i.onKill&&i.onKill(C)},C.enable(!1,!1),et&&et(C),!n||!n.add||De?C.refresh():Ae.delayedCall(.01,function(){return de||ve||C.refresh()})&&(De=.01)&&(de=ve=0),m&&yM()},r.register=function(i){return Xr||(Ae=i||Ad(),wd()&&window.document&&r.enable(),Xr=Ho),Xr},r.defaults=function(i){if(i)for(var n in i)Yo[n]=i[n];return Yo},r.disable=function(i,n){Ho=0,We.forEach(function(o){return o[n?"kill":"disable"](i)}),Pt(Ze,"wheel",Hr),Pt(lt,"scroll",Hr),clearInterval(Go),Pt(lt,"touchcancel",ji),Pt(dt,"touchstart",ji),Xo(Pt,lt,"pointerdown,touchstart,mousedown",Th),Xo(Pt,lt,"pointerup,touchend,mouseup",Eh),ba.kill(),Wo(Pt);for(var s=0;s<qe.length;s+=3)qo(Pt,qe[s],qe[s+1]),qo(Pt,qe[s],qe[s+2])},r.enable=function(){if(Ze=window,lt=document,Hi=lt.documentElement,dt=lt.body,Ae&&(Ta=Ae.utils.toArray,jr=Ae.utils.clamp,cc=Ae.core.context||ji,El=Ae.core.suppressOverwrites||ji,Oc=Ze.history.scrollRestoration||"auto",Ae.core.globals("ScrollTrigger",r),dt)){Ho=1,yt.register(Ae),r.isTouch=yt.isTouch,Rn=yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft(Ze,"wheel",Hr),Md=[Ze,lt,Hi,dt],Ae.matchMedia?(r.matchMedia=function(l){var c=Ae.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ae.addEventListener("matchMediaInit",function(){return kc()}),Ae.addEventListener("matchMediaRevert",function(){return Id()}),Ae.addEventListener("matchMedia",function(){lr(0,1),Er("matchMedia")}),Ae.matchMedia("(orientation: portrait)",function(){return Cl(),Cl})):console.warn("Requires GSAP 3.11.0 or later"),Cl(),Ft(lt,"scroll",Hr);var i=dt.style,n=i.borderTopStyle,s=Ae.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=pn(dt),Tt.m=Math.round(o.top+Tt.sc())||0,$t.m=Math.round(o.left+$t.sc())||0,n?i.borderTopStyle=n:i.removeProperty("border-top-style"),Go=setInterval(Rh,250),Ae.delayedCall(.5,function(){return Vo=0}),Ft(lt,"touchcancel",ji),Ft(dt,"touchstart",ji),Xo(Ft,lt,"pointerdown,touchstart,mousedown",Th),Xo(Ft,lt,"pointerup,touchend,mouseup",Eh),lc=Ae.utils.checkPrefix("transform"),la.push(lc),Xr=Kt(),ba=Ae.delayedCall(.2,lr).pause(),qr=[lt,"visibilitychange",function(){var l=Ze.innerWidth,c=Ze.innerHeight;lt.hidden?(Sh=l,bh=c):(Sh!==l||bh!==c)&&Us()},lt,"DOMContentLoaded",lr,Ze,"load",lr,Ze,"resize",Us],Wo(Ft),We.forEach(function(l){return l.enable(0,1)}),a=0;a<qe.length;a+=3)qo(Pt,qe[a],qe[a+1]),qo(Pt,qe[a],qe[a+2])}},r.config=function(i){"limitCallbacks"in i&&(wl=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Go)||(Go=n)&&setInterval(Rh,n),"ignoreMobileResize"in i&&(bd=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Wo(Pt)||Wo(Ft,i.autoRefreshEvents||"none"),Sd=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=ti(i),o=qe.indexOf(s),a=br(s);~o&&qe.splice(o,a?6:2),n&&(a?nn.unshift(Ze,n,dt,n,Hi,n):nn.unshift(s,n))},r.clearMatchMedia=function(i){We.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(Gi(i)?ti(i):i).getBoundingClientRect(),a=o[s?mr:_r]*n||0;return s?o.right-a>0&&o.left+a<Ze.innerWidth:o.bottom-a>0&&o.top+a<Ze.innerHeight},r.positionInViewport=function(i,n,s){Gi(i)&&(i=ti(i));var o=i.getBoundingClientRect(),a=o[s?mr:_r],l=n==null?a/2:n in Ea?Ea[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/Ze.innerWidth:(o.top+l)/Ze.innerHeight},r.killAll=function(i){if(We.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=Tr.killAll||[];Tr={},n.forEach(function(s){return s()})}},r}();Ye.version="3.11.4";Ye.saveStyles=function(r){return r?Ta(r).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),cc())}}):pi};Ye.revert=function(r,e){return kc(!r,e)};Ye.create=function(r,e){return new Ye(r,e)};Ye.refresh=function(r){return r?Us():(Xr||Ye.register())&&lr(!0)};Ye.update=function(r){return++qe.cache&&Xn(r===!0?2:0)};Ye.clearScrollMemory=Fd;Ye.maxScroll=function(r,e){return On(r,e?$t:Tt)};Ye.getScrollFunc=function(r,e){return Wn(ti(r),e?$t:Tt)};Ye.getById=function(r){return hc[r]};Ye.getAll=function(){return We.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!Oi};Ye.snapDirectional=zc;Ye.addEventListener=function(r,e){var t=Tr[r]||(Tr[r]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(r,e){var t=Tr[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ye.batch=function(r,e){var t=[],i={},n=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],m=Ae.delayedCall(n,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||m.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&m.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&jt(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return jt(s)&&(s=s(),Ft(Ye,"refresh",function(){return s=e.batchMax()})),Ta(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(Ye.create(c))}),t};var Fh=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Dl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(yt.isTouch?" pinch-zoom":""):"none",e===Hi&&r(dt,t)},$o={auto:1,scroll:1},wM=function(e){var t=e.event,i=e.target,n=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=Kt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==dt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($o[(l=Yi(s)).overflowY]||$o[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!br(s)&&($o[(l=Yi(s)).overflowY]||$o[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Od=function(e,t,i,n){return yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&wM,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ft(lt,yt.eventTypes[0],Uh,!1,!0)},onDisable:function(){return Pt(lt,yt.eventTypes[0],Uh,!0)}})},AM=/(input|label|select|textarea)/i,Oh,Uh=function(e){var t=AM.test(e.target.tagName);(t||Oh)&&(e._gsapAllow=!0,Oh=t)},RM=function(e){ra(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,s=t.allowNestedScroll,o,a,l=ti(e.target)||Hi,c=Ae.core.globals().ScrollSmoother,u=c&&c.get(),f=Rn&&(e.content&&ti(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),h=Wn(l,Tt),m=Wn(l,$t),_=1,d=(yt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,p=0,g=jt(n)?function(){return n(o)}:function(){return n||2.8},S,v,y=Od(l,e.type,!0,s),M=function(){return v=!1},w=ji,R=ji,x=function(){a=On(l,Tt),R=jr(Rn?1:0,a),i&&(w=jr(0,On(l,$t))),S=gr},E=function(){f._gsap.y=Fs(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},P=function(){if(v){requestAnimationFrame(M);var $=Fs(o.deltaY/2),B=R(h.v-$);if(f&&B!==h.v+h.offset){h.offset=B-h.v;var J=Fs((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+J+", 0, 1)",f._gsap.y=J+"px",h.cacheID=qe.cache,Xn()}return!0}h.offset&&E(),v=!0},N,q,O,L,z=function(){x(),N.isActive()&&N.vars.scrollY>a&&(h()>a?N.progress(1)&&h(a):N.resetTo("scrollY",a))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(G){return Rn&&G.type==="touchmove"&&P()||_>1.05&&G.type!=="touchstart"||o.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){var G=_;_=Fs((Ze.visualViewport&&Ze.visualViewport.scale||1)/d),N.pause(),G!==_&&Dl(l,_>1.01?!0:i?!1:"x"),q=m(),O=h(),x(),S=gr},e.onRelease=e.onGestureStart=function(G,$){if(h.offset&&E(),!$)L.restart(!0);else{qe.cache++;var B=g(),J,C;i&&(J=m(),C=J+B*.05*-G.velocityX/.227,B*=Fh(m,J,C,On(l,$t)),N.vars.scrollX=w(C)),J=h(),C=J+B*.05*-G.velocityY/.227,B*=Fh(h,J,C,On(l,Tt)),N.vars.scrollY=R(C),N.invalidate().duration(B).play(.01),(Rn&&N.vars.scrollY>=a||J>=a-1)&&Ae.to({},{onUpdate:z,duration:B})}},e.onWheel=function(){N._ts&&N.pause(),Kt()-p>1e3&&(S=0,p=Kt())},e.onChange=function(G,$,B,J,C){if(gr!==S&&x(),$&&i&&m(w(J[2]===$?q+(G.startX-G.x):m()+$-J[1])),B){h.offset&&E();var k=C[2]===B,Y=k?O+G.startY-G.y:h()+B-C[1],te=R(Y);k&&Y!==te&&(O+=te-Y),h(te)}(B||$)&&Xn()},e.onEnable=function(){Dl(l,i?!1:"x"),Ye.addEventListener("refresh",z),Ft(Ze,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),y.enable()},e.onDisable=function(){Dl(l,!0),Pt(Ze,"resize",z),Ye.removeEventListener("refresh",z),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new yt(e),o.iOS=Rn,Rn&&!h()&&h(1),Rn&&Ae.ticker.add(ji),L=o._dc,N=Ae.to(o,{ease:"power4",paused:!0,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:L.vars.onComplete}),o};Ye.sort=function(r){return We.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(r){return new yt(r)};Ye.normalizeScroll=function(r){if(typeof r>"u")return di;if(r===!0&&di)return di.enable();if(r===!1)return di&&di.kill();var e=r instanceof yt?r:RM(r);return di&&di.target===e.target&&di.kill(),br(e.target)&&(di=e),e};Ye.core={_getVelocityProp:ac,_inputObserver:Od,_scrollers:qe,_proxies:nn,bridge:{ss:function(){Oi||Er("scrollStart"),Oi=Kt()},ref:function(){return zt}}};Ad()&&Ae.registerPlugin(Ye);/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jt,Ud,xn,en,kn,Nd,Bd,jo,zd=function(){return typeof window<"u"},kd=function(){return Jt||zd()&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},Gd=function(e){return typeof e=="string"},Nh=function(e){return typeof e=="function"},ro=function(e,t){var i=t==="x"?"Width":"Height",n="scroll"+i,s="client"+i;return e===xn||e===en||e===kn?Math.max(en[n],kn[n])-(xn["inner"+i]||en[s]||kn[s]):e[n]-e["offset"+i]},so=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===xn&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=en[i]!=null?en:kn),function(){return e[i]}},CM=function(e,t,i,n){if(Nh(e)&&(e=e(t,i,n)),typeof e!="object")return Gd(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Nh(e[o])?e[o](t,i,n):e[o];return s},Vd=function(e,t){if(e=Nd(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),n=!t||t===xn||t===kn,s=n?{top:en.clientTop-(xn.pageYOffset||en.scrollTop||kn.scrollTop||0),left:en.clientLeft-(xn.pageXOffset||en.scrollLeft||kn.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!n&&t&&(o.x+=so(t,"x")(),o.y+=so(t,"y")()),o},Bh=function(e,t,i,n,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:Gd(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+n-s:e==="max"?ro(t,i)-s:Math.min(ro(t,i),Vd(e,t)[i]-s)},zh=function(){Jt=kd(),zd()&&Jt&&typeof document<"u"&&document.body&&(xn=window,kn=document.body,en=document.documentElement,Nd=Jt.utils.toArray,Jt.config({autoKillThreshold:7}),Bd=Jt.config(),Ud=1)},po={version:"3.11.4",name:"scrollTo",rawVars:1,register:function(e){Jt=e,zh()},init:function(e,t,i,n,s){Ud||zh();var o=this,a=Jt.getProperty(e,"scrollSnapType");o.isWin=e===xn,o.target=e,o.tween=i,t=CM(t,n,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=so(e,"x"),o.getY=so(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),jo||(jo=Jt.core.globals().ScrollTrigger),Jt.getProperty(e,"scrollBehavior")==="smooth"&&Jt.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Bh(t.x,e,"x",o.x,t.offsetX||0),n,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Bh(t.y,e,"y",o.y,t.offsetY||0),n,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,n=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,f=t.snapInline,h,m,_,d,p;i;)i.r(e,i.d),i=i._next;h=c||!t.skipX?t.getX():a,m=c||!t.skipY?t.getY():l,_=m-l,d=h-a,p=Bd.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(d>p||d<-p)&&h<ro(n,"x")&&(t.skipX=1),!t.skipY&&(_>p||_<-p)&&m<ro(n,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?xn.scrollTo(t.skipX?h:t.x,t.skipY?m:t.y):(t.skipY||(n.scrollTop=t.y),t.skipX||(n.scrollLeft=t.x)),u&&(e===1||e===0)&&(m=n.scrollTop,h=n.scrollLeft,f?n.style.scrollSnapType=f:n.style.removeProperty("scroll-snap-type"),n.scrollTop=m+1,n.scrollLeft=h+1,n.scrollTop=m,n.scrollLeft=h),t.xPrev=t.x,t.yPrev=t.y,jo&&jo.update()},kill:function(e){var t=e==="scrollTo";(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1)}};po.max=ro;po.getOffset=Vd;po.buildGetter=so;kd()&&Jt.registerPlugin(po);const PM=`varying vec3 vColor;

void main() {

    float strength = distance(gl_PointCoord, vec2(0.5));
    strength *= 2.0;
    strength = 1.0 - strength;

    // Final Color
    vec3 color = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color, 1.0);
}`,DM=`uniform float uSize;
uniform float uTime;
attribute float aScale;
varying vec3 vColor;

void main() {

    /**
    * Position
    */
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Spin
    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.1;
    angle += angleOffset;
    modelPosition.x = cos(angle) * distanceToCenter;
    modelPosition.z = sin(angle) * distanceToCenter;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    /**
    * Size
    */
    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / -viewPosition.z);

    /**
    * Color
    */
    vColor = color;

}`,Ia="ontouchstart"in document.documentElement,LM=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),dc=document.getElementById("overlay"),kh={opacity:0,ease:"expo.inOut",duration:1,delay:1.5,onStart:()=>{document.body.style.overflowY="auto"},onComplete:()=>{dc.remove()}};window.scrollY>0?Qt.to(dc,{...kh,delay:0}):window.addEventListener("DOMContentLoaded",()=>{Qt.to(dc,kh)});const Gc=new Kx,Wi={width:window.innerWidth,height:Ia?window.outerHeight:window.innerHeight};window.addEventListener("resize",()=>{Ia&&Wi.height>window.outerHeight||Hd()});window.addEventListener("orientationchange",Hd);function Hd(){Wi.width=window.innerWidth,Wi.height=Ia?window.outerHeight:window.innerHeight,yn.aspect=Wi.width/Wi.height,yn.updateProjectionMatrix(),Sn.setSize(Wi.width,Wi.height),Sn.setPixelRatio(Math.min(window.devicePixelRatio,2))}const yn=new Ci(75,Wi.width/Wi.height,.1,100);yn.position.x=0;yn.position.y=.4;yn.position.z=0;Gc.add(yn);const Sn=new Zx;Sn.setSize(Wi.width,Wi.height);Sn.setPixelRatio(Math.min(window.devicePixelRatio,2));Sn.domElement.classList.add("webgl");var Vh;(Vh=document.getElementById("app"))==null||Vh.prepend(Sn.domElement);const ii={count:18e4,size:.005,radius:1.5,branches:6,spin:1,randomness:.9,insideColor:"#ffffff",outsideColor:"#35ffee",swirlRatio:800},Fa=new bn,ua=new Float32Array(ii.count*3),ha=new Float32Array(ii.count*3),Wd=new Float32Array(ii.count*1),IM=new st(ii.insideColor),FM=new st(ii.outsideColor);for(let r=0;r<ii.count;r++){const e=r*3,t=Math.random()*ii.radius,i=r/ii.branches*Math.PI*2,n=(Math.random()-.5)*ii.randomness,s=(Math.random()-.5)*ii.randomness,o=(Math.random()-.5)*ii.randomness;ua[e+0]=Math.cos(i)*t+n,ua[e+1]=Math.random()*.1+s,ua[e+2]=Math.sin(i)*t+o;const a=IM.clone();a.lerp(FM,t/ii.radius),ha[e+0]=a.r,ha[e+1]=a.g,ha[e+2]=a.b,Wd[r]=Math.random()}Fa.setAttribute("position",new yi(ua,3));Fa.setAttribute("color",new yi(ha,3));Fa.setAttribute("aScale",new yi(Wd,1));const Vc=new Gn({depthWrite:!1,blending:Il,vertexColors:!0,vertexShader:DM,fragmentShader:PM,uniforms:{uTime:{value:0},uSize:{value:8*Sn.getPixelRatio()}}}),Hc=new jx(Fa,Vc);yn.lookAt(Hc.position);Gc.add(Hc);const Ll=new Jx,Xd=()=>{Ll.getElapsedTime()>600&&Ll.start();const r=Ll.getElapsedTime();Vc.uniforms.uTime.value=(400+r)/ii.swirlRatio,Sn.render(Gc,yn),window.requestAnimationFrame(Xd)};Xd();Qt.registerPlugin(Ye,po);Ye.defaults({immediateRender:!1});const qd=document.querySelector("nav"),OM=qd.offsetHeight;Qt.from(qd,{y:-OM,opacity:0,scrollTrigger:{trigger:"#hero",start:"20%"}});const fa=document.getElementById("hamburger"),pc=document.getElementById("mobile-nav"),UM=document.querySelectorAll(".nav-link"),NM=document.querySelectorAll(".mobile-link");let mc=!1;const Yd={right:0,ease:"expo.inOut",onComplete:()=>{fa.classList.remove("disabled"),mc=!mc}},Zd={...Yd,right:"-100%"};fa.addEventListener("click",()=>{fa.classList.contains("disabled")||(fa.classList.add("disabled"),mc?Qt.to(pc,Zd):Qt.to(pc,Yd))});UM.forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.getAttribute("href");Qt.to(window,Kd(t))})});NM.forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.getAttribute("href");Qt.to(pc,Zd),Qt.to(window,Kd(t))})});function Kd(r){return{duration:1,ease:"expo.inOut",scrollTo:{y:r,offsetY:r==="#contact"?0:20}}}Qt.to("#pointer",{duration:1.5,y:15,repeat:-1,yoyo:!0,ease:"sine.inOut",scrollTrigger:{trigger:"#pointer",start:"top bottom",toggleActions:"play pause play pause"}});const BM=Qt.timeline({scrollTrigger:{trigger:"#about",start:"-30%",end:"-10%"}});document.querySelectorAll(".card, .section-title, .section-container, .lecture").forEach(r=>{Qt.from(r,{xPercent:-10,opacity:0,ease:"expo.out",scrollTrigger:{trigger:r,start:" 50%"}})});BM.from(".intro-container",{opacity:0,xPercent:-20});const zM=Qt.timeline({scrollTrigger:{trigger:"#app",start:"top top",end:"bottom -10%",scrub:1}});zM.to(Hc.rotation,{z:.3,ease:"expo.out"},0).from(Vc.uniforms.uSize,{value:(Ia||LM?1:0)*Sn.getPixelRatio()},0).to(ii,{swirlRatio:5,ease:"expo"},0).to(yn.position,{y:2,x:-1},0);const Gh=document.querySelectorAll(".icon-wrapper"),kM={delay:.5,scale:0,opacity:0,xPercent:-150,ease:"expo.inOut",duration:1,stagger:.1};Qt.from(Gh,{...kM,scrollTrigger:{trigger:Gh,end:"bottom bottom"}});document.getElementById("copyright-year").textContent=new Date().getFullYear().toString();

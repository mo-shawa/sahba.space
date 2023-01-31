(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="148",Hd=0,Wc=1,Xd=2,Bf=1,qd=2,Ds=3,xr=0,Fn=1,dc=2,mo=3,zi=0,Jr=1,Rl=2,Hc=3,Xc=4,Yd=5,Hr=100,$d=101,jd=102,qc=103,Yc=104,Zd=200,Kd=201,Jd=202,Qd=203,Gf=204,Vf=205,ep=206,tp=207,np=208,ip=209,rp=210,sp=0,op=1,ap=2,Il=3,lp=4,cp=5,up=6,fp=7,Wf=0,hp=1,dp=2,_i=0,pp=1,mp=2,gp=3,_p=4,xp=5,Hf=300,ss=301,os=302,Fl=303,Ol=304,Ea=306,zl=1e3,Xn=1001,Nl=1002,$t=1003,$c=1004,Na=1005,An=1006,vp=1007,$s=1008,vr=1009,yp=1010,Mp=1011,Xf=1012,Sp=1013,sr=1014,or=1015,js=1016,bp=1017,wp=1018,Qr=1020,Tp=1021,Ep=1022,qn=1023,Cp=1024,Ap=1025,cr=1026,as=1027,Pp=1028,Dp=1029,Lp=1030,Rp=1031,Ip=1033,Ua=33776,ka=33777,Ba=33778,Ga=33779,jc=35840,Zc=35841,Kc=35842,Jc=35843,Fp=36196,Qc=37492,eu=37496,tu=37808,nu=37809,iu=37810,ru=37811,su=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,fu=37818,hu=37819,du=37820,pu=37821,mu=36492,yr=3e3,at=3001,Op=3200,zp=3201,Np=0,Up=1,Zn="srgb",Zs="srgb-linear",Va=7680,kp=519,gu=35044,_u="300 es",Ul=1035;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,xu=180/Math.PI;function oo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[a&255]+Ut[a>>8&255]+Ut[a>>16&255]+Ut[a>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function gn(a,e,t){return Math.max(e,Math.min(t,a))}function Bp(a,e){return(a%e+e)%e}function Ha(a,e,t){return(1-t)*a+t*e}function vu(a){return(a&a-1)===0&&a!==0}function kl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function go(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function un(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(){vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],S=i[1],v=i[4],M=i[7],y=i[2],E=i[5],A=i[8];return r[0]=s*d+o*S+l*y,r[3]=s*p+o*v+l*E,r[6]=s*_+o*M+l*A,r[1]=c*d+u*S+h*y,r[4]=c*p+u*v+h*E,r[7]=c*_+u*M+h*A,r[2]=f*d+m*S+g*y,r[5]=f*p+m*v+g*E,r[8]=f*_+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,m=c*r-s*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*s)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-o*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(s*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new vn;function qf(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ha(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ur(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Jo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const qa={[Zn]:{[Zs]:ur},[Zs]:{[Zn]:Jo}},Ht={legacyMode:!0,get workingColorSpace(){return Zs},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(qa[e]&&qa[e][t]!==void 0){const n=qa[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},Nn={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Ya(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function xo(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ht.workingColorSpace){if(e=Bp(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ya(s,r,e+1/3),this.g=Ya(s,r,e),this.b=Ya(s,r,e-1/3)}return Ht.toWorkingColorSpace(this,i),this}setStyle(e,t=Zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ht.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ht.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ht.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ht.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Ht.fromWorkingColorSpace(xo(this,St),e),gn(St.r*255,0,255)<<16^gn(St.g*255,0,255)<<8^gn(St.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(xo(this,St),t);const n=St.r,i=St.g,r=St.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(xo(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Zn){return Ht.fromWorkingColorSpace(xo(this,St),e),e!==Zn?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Nn),Nn.h+=e,Nn.s+=t,Nn.l+=n,this.setHSL(Nn.h,Nn.s,Nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(_o);const n=Ha(Nn.h,_o.h,t),i=Ha(Nn.s,_o.s,t),r=Ha(Nn.l,_o.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}st.NAMES=Yf;let Cr;class $f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=ha("canvas")),Cr.width=e.width,Cr.height=e.height;const n=Cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ur(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jf{constructor(e=null){this.isSource=!0,this.uuid=oo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push($a(i[s].image)):r.push($a(i[s]))}else r=$a(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function $a(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?$f.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gp=0;class yn extends _s{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=Xn,i=Xn,r=An,s=$s,o=qn,l=vr,c=yn.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=oo(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Hf;yn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,y=(_+1)/2,E=(u+f)/4,A=(h+d)/4,x=(g+p)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=A/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-d)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mr extends _s{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zf extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vp extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],m=r[s+1],g=r[s+2],d=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-o;const _=l*f+c*m+u*g+h*d,S=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const y=Math.sqrt(v),E=Math.atan2(y,_*S);p=Math.sin(p*E)/y,o=Math.sin(o*E)/y}const M=o*S;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+d*M,p===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],m=r[s+2],g=r[s+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(s-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(s-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-o*i;return this.x=c*l+f*-r+u*-o-h*-s,this.y=u*l+f*-s+h*-r-c*-o,this.z=h*l+f*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new V,yu=new ao;class lo{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,o=r.count;s<o;s++)ji.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox),Za.applyMatrix4(e.matrixWorld),this.union(Za);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),vo.subVectors(this.max,ys),Ar.subVectors(e.a,ys),Pr.subVectors(e.b,ys),Dr.subVectors(e.c,ys),wi.subVectors(Pr,Ar),Ti.subVectors(Dr,Pr),Zi.subVectors(Ar,Dr);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Zi.y,Zi.x,0];return!Ka(t,Ar,Pr,Dr,vo)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Ar,Pr,Dr,vo))?!1:(yo.crossVectors(wi,Ti),t=[yo.x,yo.y,yo.z],Ka(t,Ar,Pr,Dr,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new V,new V,new V,new V,new V,new V,new V,new V],ji=new V,Za=new lo,Ar=new V,Pr=new V,Dr=new V,wi=new V,Ti=new V,Zi=new V,ys=new V,vo=new V,yo=new V,Ki=new V;function Ka(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Ki.fromArray(a,r);const o=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wp=new lo,Ms=new V,Ja=new V;class Ca{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Ja)),this.expandByPoint(Ms.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new V,Qa=new V,Mo=new V,Ei=new V,el=new V,So=new V,tl=new V;class Kf{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.direction).multiplyScalar(t).add(this.origin),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qa.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Qa);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Mo),o=Ei.dot(this.direction),l=-Ei.dot(Mo),c=Ei.lengthSq(),u=Math.abs(1-s*s);let h,f,m,g;if(u>0)if(h=s*l-o,f=s*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Mo).multiplyScalar(f).add(Qa),m}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){el.subVectors(t,e),So.subVectors(n,e),tl.crossVectors(el,So);let s=this.direction.dot(tl),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(So.crossVectors(Ei,So));if(l<0)return null;const c=o*this.direction.dot(el.cross(Ei));if(c<0||l+c>s)return null;const u=-o*Ei.dot(tl);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),s=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,m=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-m,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=m*o-g,t[6]=d+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-s*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*u,t[9]=d-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,m=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=s*l,m=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=s*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Xp)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ci.crossVectors(n,fn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ci.crossVectors(n,fn)),Ci.normalize(),bo.crossVectors(fn,Ci),i[0]=Ci.x,i[4]=bo.x,i[8]=fn.x,i[1]=Ci.y,i[5]=bo.y,i[9]=fn.y,i[2]=Ci.z,i[6]=bo.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],S=n[3],v=n[7],M=n[11],y=n[15],E=i[0],A=i[4],x=i[8],T=i[12],D=i[1],z=i[5],q=i[9],F=i[13],R=i[2],U=i[6],G=i[10],Z=i[14],N=i[3],J=i[7],P=i[11],k=i[15];return r[0]=s*E+o*D+l*R+c*N,r[4]=s*A+o*z+l*U+c*J,r[8]=s*x+o*q+l*G+c*P,r[12]=s*T+o*F+l*Z+c*k,r[1]=u*E+h*D+f*R+m*N,r[5]=u*A+h*z+f*U+m*J,r[9]=u*x+h*q+f*G+m*P,r[13]=u*T+h*F+f*Z+m*k,r[2]=g*E+d*D+p*R+_*N,r[6]=g*A+d*z+p*U+_*J,r[10]=g*x+d*q+p*G+_*P,r[14]=g*T+d*F+p*Z+_*k,r[3]=S*E+v*D+M*R+y*N,r[7]=S*A+v*z+M*U+y*J,r[11]=S*x+v*q+M*G+y*P,r[15]=S*T+v*F+M*Z+y*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*m-n*l*m)+d*(+t*l*m-t*c*f+r*s*f-i*s*m+i*c*u-r*l*u)+p*(+t*c*h-t*o*m-r*s*h+n*s*m+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],S=h*p*c-d*f*c+d*l*m-o*p*m-h*l*_+o*f*_,v=g*f*c-u*p*c-g*l*m+s*p*m+u*l*_-s*f*_,M=u*d*c-g*h*c+g*o*m-s*d*m-u*o*_+s*h*_,y=g*h*l-u*d*l-g*o*f+s*d*f+u*o*p-s*h*p,E=t*S+n*v+i*M+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=S*A,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*A,e[2]=(o*p*r-d*l*r+d*i*c-n*p*c-o*i*_+n*l*_)*A,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*m-n*l*m)*A,e[4]=v*A,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*_+t*f*_)*A,e[6]=(g*l*r-s*p*r-g*i*c+t*p*c+s*i*_-t*l*_)*A,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*m+t*l*m)*A,e[8]=M*A,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*_-t*h*_)*A,e[10]=(s*d*r-g*o*r+g*n*c-t*d*c-s*n*_+t*o*_)*A,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*m-t*o*m)*A,e[12]=y*A,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*A,e[14]=(g*o*i-s*d*i-g*n*l+t*d*l+s*n*p-t*o*p)*A,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,m=r*u,g=r*h,d=s*u,p=s*h,_=o*h,S=l*c,v=l*u,M=l*h,y=n.x,E=n.y,A=n.z;return i[0]=(1-(d+_))*y,i[1]=(m+M)*y,i[2]=(g-v)*y,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(f+_))*E,i[6]=(p+S)*E,i[7]=0,i[8]=(g+v)*A,i[9]=(p-S)*A,i[10]=(1-(f+d))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Lr.set(i[0],i[1],i[2]).length();const s=Lr.set(i[4],i[5],i[6]).length(),o=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);const c=1/r,u=1/s,h=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),m=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,m=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new V,Un=new Lt,Hp=new V(0,0,0),Xp=new V(1,1,1),Ci=new V,bo=new V,fn=new V,Mu=new Lt,Su=new ao;class co{constructor(e=0,t=0,n=0,i=co.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}co.DefaultOrder="XYZ";co.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qp=0;const bu=new V,Rr=new ao,li=new Lt,wo=new V,Ss=new V,Yp=new V,$p=new ao,wu=new V(1,0,0),Tu=new V(0,1,0),Eu=new V(0,0,1),jp={type:"added"},Cu={type:"removed"};class rn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DefaultUp.clone();const e=new V,t=new co,n=new ao,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new vn}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=rn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rn.DefaultMatrixWorldAutoUpdate,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ss,wo,this.up):li.lookAt(wo,Ss,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),Rr.setFromRotationMatrix(li),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,$p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rn.DefaultUp=new V(0,1,0);rn.DefaultMatrixAutoUpdate=!0;rn.DefaultMatrixWorldAutoUpdate=!0;const kn=new V,ci=new V,nl=new V,ui=new V,Ir=new V,Fr=new V,Au=new V,il=new V,rl=new V,sl=new V;class di{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),ci.subVectors(n,t),nl.subVectors(e,t);const s=kn.dot(kn),o=kn.dot(ci),l=kn.dot(nl),c=ci.dot(ci),u=ci.dot(nl),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,g=(s*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,ui),l.set(0,0),l.addScaledVector(r,ui.x),l.addScaledVector(s,ui.y),l.addScaledVector(o,ui.z),l}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),ci.subVectors(e,t),kn.cross(ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),kn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return di.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Ir.subVectors(i,n),Fr.subVectors(r,n),il.subVectors(e,n);const l=Ir.dot(il),c=Fr.dot(il);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,i);const u=Ir.dot(rl),h=Fr.dot(rl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Ir,s);sl.subVectors(e,r);const m=Ir.dot(sl),g=Fr.dot(sl);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Fr,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Au.subVectors(r,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Au,o);const _=1/(p+d+f);return s=d*_,o=f*_,t.copy(n).addScaledVector(Ir,s).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Zp=0;class uo extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Jr,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gf,this.blendDst=Vf,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qf extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new V,To=new ot;class Mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class eh extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class th extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fr extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kp=0;const Tn=new Lt,ol=new rn,Or=new V,hn=new lo,bs=new lo,Pt=new V;class bi extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?th:eh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new vn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(hn.min,bs.min),hn.expandByPoint(Pt),Pt.addVectors(hn.max,bs.max),hn.expandByPoint(Pt)):(hn.expandByPoint(bs.min),hn.expandByPoint(bs.max))}hn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(Or.fromBufferAttribute(e,c),Pt.add(Or)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new V,u[D]=new V;const h=new V,f=new V,m=new V,g=new ot,d=new ot,p=new ot,_=new V,S=new V;function v(D,z,q){h.fromArray(i,D*3),f.fromArray(i,z*3),m.fromArray(i,q*3),g.fromArray(s,D*2),d.fromArray(s,z*2),p.fromArray(s,q*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const F=1/(d.x*p.y-p.x*d.y);isFinite(F)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(F),S.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(F),c[D].add(_),c[z].add(_),c[q].add(_),u[D].add(S),u[z].add(S),u[q].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,z=M.length;D<z;++D){const q=M[D],F=q.start,R=q.count;for(let U=F,G=F+R;U<G;U+=3)v(n[U+0],n[U+1],n[U+2])}const y=new V,E=new V,A=new V,x=new V;function T(D){A.fromArray(r,D*3),x.copy(A);const z=c[D];y.copy(z),y.sub(A.multiplyScalar(A.dot(z))).normalize(),E.crossVectors(x,z);const F=E.dot(u[D])<0?-1:1;l[D*4]=y.x,l[D*4+1]=y.y,l[D*4+2]=y.z,l[D*4+3]=F}for(let D=0,z=M.length;D<z;++D){const q=M[D],F=q.start,R=q.count;for(let U=F,G=F+R;U<G;U+=3)T(n[U+0]),T(n[U+1]),T(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new V,r=new V,s=new V,o=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),s.fromBufferAttribute(t,p),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new Mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new Lt,zr=new Kf,al=new Ca,ws=new V,Ts=new V,Es=new V,ll=new V,Eo=new V,Co=new ot,Ao=new ot,Po=new ot,cl=new V,Do=new V;class Pi extends rn{constructor(e=new bi,t=new Qf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ll.fromBufferAttribute(h,e),s?Eo.addScaledVector(ll,u):Eo.addScaledVector(ll.sub(t),u))}t.add(Eo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(r),e.ray.intersectsSphere(al)===!1)||(Pu.copy(r).invert(),zr.copy(e.ray).applyMatrix4(Pu),n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),S=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let v=_,M=S;v<M;v+=3){const y=o.getX(v),E=o.getX(v+1),A=o.getX(v+2);s=Lo(this,p,e,zr,c,u,y,E,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=o.getX(d),S=o.getX(d+1),v=o.getX(d+2);s=Lo(this,i,e,zr,c,u,_,S,v),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),S=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let v=_,M=S;v<M;v+=3){const y=v,E=v+1,A=v+2;s=Lo(this,p,e,zr,c,u,y,E,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=d,S=d+1,v=d+2;s=Lo(this,i,e,zr,c,u,_,S,v),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Jp(a,e,t,n,i,r,s,o){let l;if(e.side===Fn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===xr,o),l===null)return null;Do.copy(o),Do.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:a}}function Lo(a,e,t,n,i,r,s,o,l){a.getVertexPosition(s,ws),a.getVertexPosition(o,Ts),a.getVertexPosition(l,Es);const c=Jp(a,e,t,n,ws,Ts,Es,cl);if(c){i&&(Co.fromBufferAttribute(i,s),Ao.fromBufferAttribute(i,o),Po.fromBufferAttribute(i,l),c.uv=di.getUV(cl,ws,Ts,Es,Co,Ao,Po,new ot)),r&&(Co.fromBufferAttribute(r,s),Ao.fromBufferAttribute(r,o),Po.fromBufferAttribute(r,l),c.uv2=di.getUV(cl,ws,Ts,Es,Co,Ao,Po,new ot));const u={a:s,b:o,c:l,normal:new V,materialIndex:0};di.getNormal(ws,Ts,Es,u.normal),c.face=u}return c}class fo extends bi{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fr(c,3)),this.setAttribute("normal",new fr(u,3)),this.setAttribute("uv",new fr(h,2));function g(d,p,_,S,v,M,y,E,A,x,T){const D=M/A,z=y/x,q=M/2,F=y/2,R=E/2,U=A+1,G=x+1;let Z=0,N=0;const J=new V;for(let P=0;P<G;P++){const k=P*z-F;for(let Y=0;Y<U;Y++){const te=Y*D-q;J[d]=te*S,J[p]=k*v,J[_]=R,c.push(J.x,J.y,J.z),J[d]=0,J[p]=0,J[_]=E>0?1:-1,u.push(J.x,J.y,J.z),h.push(Y/A),h.push(1-P/x),Z+=1}}for(let P=0;P<x;P++)for(let k=0;k<A;k++){const Y=f+k+U*P,te=f+k+U*(P+1),ne=f+(k+1)+U*(P+1),se=f+(k+1)+U*P;l.push(Y,te,se),l.push(te,ne,se),N+=6}o.addGroup(m,N,T),m+=N,f+=Z}}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(a){const e={};for(let t=0;t<a.length;t++){const n=ls(a[t]);for(const i in n)e[i]=n[i]}return e}function Qp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function nh(a){return a.getRenderTarget()===null&&a.outputEncoding===at?Zn:Zs}const em={clone:ls,merge:qt};var tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ih extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends ih{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xu*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Ur=1;class im extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pn(Nr,Ur,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Pn(Nr,Ur,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Pn(Nr,Ur,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new Pn(Nr,Ur,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Pn(Nr,Ur,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Pn(Nr,Ur,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=_i,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class rh extends yn{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rm extends Mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fo(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:zi});r.uniforms.tEquirect.value=t;const s=new Pi(i,r),o=t.minFilter;return t.minFilter===$s&&(t.minFilter=An),new im(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const ul=new V,sm=new V,om=new vn;class er{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ul.subVectors(n,t).cross(sm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ul),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||om.getNormalMatrix(e),i=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Ca,Ro=new V;class sh{constructor(e=new er,t=new er,n=new er,i=new er,r=new er,s=new er){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],S=n[14],v=n[15];return t[0].setComponents(o-i,h-l,d-f,v-p).normalize(),t[1].setComponents(o+i,h+l,d+f,v+p).normalize(),t[2].setComponents(o+r,h+c,d+m,v+_).normalize(),t[3].setComponents(o-r,h-c,d-m,v-_).normalize(),t[4].setComponents(o-s,h-u,d-g,v-S).normalize(),t[5].setComponents(o+s,h+u,d+g,v+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ro.x=i.normal.x>0?e.max.x:e.min.x,Ro.y=i.normal.y>0?e.max.y:e.min.y,Ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oh(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function am(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;a.bindBuffer(h,c),m.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class pc extends bi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const S=_*f-s;for(let v=0;v<c;v++){const M=v*h-r;g.push(M,-S,0),d.push(0,0,1),p.push(v/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const v=S+c*_,M=S+c*(_+1),y=S+1+c*(_+1),E=S+1+c*_;m.push(v,M,E),m.push(M,y,E)}this.setIndex(m),this.setAttribute("position",new fr(g,3)),this.setAttribute("normal",new fr(d,3)),this.setAttribute("uv",new fr(p,2))}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm="vec3 transformed = vec3( position );",mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
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
		float alpha = pow2( roughness );
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
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
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
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
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
#endif`,_m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
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
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
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
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
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
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
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
			mip = - 2.0 * log2( 1.16 * roughness );		}
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
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
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
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
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
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
#endif`,Km=`#if defined( USE_ENVMAP )
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,ig=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rg=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Sg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
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
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
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
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
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
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
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
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
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
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
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
#endif`,Vg=`float getShadowMask() {
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
	#endif
	return shadow;
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
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
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,e_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,t_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,n_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,i_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,r_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,s_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,h_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
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
}`,d_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,p_=`#define DISTANCE
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
}`,m_=`#define DISTANCE
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
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x_=`uniform float scale;
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
}`,v_=`uniform vec3 diffuse;
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
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
}`,S_=`#define LAMBERT
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
}`,b_=`#define LAMBERT
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,A_=`#define PHONG
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
}`,P_=`#define PHONG
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
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
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
}`,R_=`#define TOON
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
}`,I_=`#define TOON
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
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`uniform float size;
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
}`,O_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,N_=`uniform vec3 color;
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
}`,U_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,We={alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:um,alphatest_pars_fragment:fm,aomap_fragment:hm,aomap_pars_fragment:dm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:xm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:bm,color_pars_fragment:wm,color_pars_vertex:Tm,color_vertex:Em,common:Cm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Dm,displacementmap_vertex:Lm,emissivemap_fragment:Rm,emissivemap_pars_fragment:Im,encodings_fragment:Fm,encodings_pars_fragment:Om,envmap_fragment:zm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:km,envmap_physical_pars_fragment:Km,envmap_vertex:Bm,fog_vertex:Gm,fog_pars_vertex:Vm,fog_fragment:Wm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Xm,lightmap_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:$m,lights_lambert_pars_fragment:jm,lights_pars_begin:Zm,lights_toon_fragment:Jm,lights_toon_pars_fragment:Qm,lights_phong_fragment:eg,lights_phong_pars_fragment:tg,lights_physical_fragment:ng,lights_physical_pars_fragment:ig,lights_fragment_begin:rg,lights_fragment_maps:sg,lights_fragment_end:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:ug,map_fragment:fg,map_pars_fragment:hg,map_particle_fragment:dg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphcolor_vertex:_g,morphnormal_vertex:xg,morphtarget_pars_vertex:vg,morphtarget_vertex:yg,normal_fragment_begin:Mg,normal_fragment_maps:Sg,normal_pars_fragment:bg,normal_pars_vertex:wg,normal_vertex:Tg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Dg,output_fragment:Lg,packing:Rg,premultiplied_alpha_fragment:Ig,project_vertex:Fg,dithering_fragment:Og,dithering_pars_fragment:zg,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:Bg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:Hg,skinning_vertex:Xg,skinnormal_vertex:qg,specularmap_fragment:Yg,specularmap_pars_fragment:$g,tonemapping_fragment:jg,tonemapping_pars_fragment:Zg,transmission_fragment:Kg,transmission_pars_fragment:Jg,uv_pars_fragment:Qg,uv_pars_vertex:e_,uv_vertex:t_,uv2_pars_fragment:n_,uv2_pars_vertex:i_,uv2_vertex:r_,worldpos_vertex:s_,background_vert:o_,background_frag:a_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:u_,cube_frag:f_,depth_vert:h_,depth_frag:d_,distanceRGBA_vert:p_,distanceRGBA_frag:m_,equirect_vert:g_,equirect_frag:__,linedashed_vert:x_,linedashed_frag:v_,meshbasic_vert:y_,meshbasic_frag:M_,meshlambert_vert:S_,meshlambert_frag:b_,meshmatcap_vert:w_,meshmatcap_frag:T_,meshnormal_vert:E_,meshnormal_frag:C_,meshphong_vert:A_,meshphong_frag:P_,meshphysical_vert:D_,meshphysical_frag:L_,meshtoon_vert:R_,meshtoon_frag:I_,points_vert:F_,points_frag:O_,shadow_vert:z_,shadow_frag:N_,sprite_vert:U_,sprite_frag:k_},ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vn},uv2Transform:{value:new vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}}},Jn={basic:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new vn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:qt([ce.common,ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:qt([ce.lights,ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Jn.physical={uniforms:qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ot(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Io={r:0,b:0,g:0};function B_(a,e,t,n,i,r,s){const o=new st(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(p,_){let S=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const M=a.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?d(o,l):v&&v.isColor&&(d(v,1),S=!0),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ea)?(u===void 0&&(u=new Pi(new fo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:ls(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==at,(h!==v||f!==v.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pi(new pc(2,2),new Gi({name:"BackgroundMaterial",uniforms:ls(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(Io,nh(a)),n.buffers.color.setClear(Io.r,Io.g,Io.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:g}}function G_(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function h(R,U,G,Z,N){let J=!1;if(s){const P=d(Z,G,U);c!==P&&(c=P,m(c.object)),J=_(R,Z,G,N),J&&S(R,Z,G,N)}else{const P=U.wireframe===!0;(c.geometry!==Z.id||c.program!==G.id||c.wireframe!==P)&&(c.geometry=Z.id,c.program=G.id,c.wireframe=P,J=!0)}N!==null&&t.update(N,34963),(J||u)&&(u=!1,x(R,U,G,Z),N!==null&&a.bindBuffer(34963,t.get(N).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?a.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,U,G){const Z=G.wireframe===!0;let N=o[R.id];N===void 0&&(N={},o[R.id]=N);let J=N[U.id];J===void 0&&(J={},N[U.id]=J);let P=J[Z];return P===void 0&&(P=p(f()),J[Z]=P),P}function p(R){const U=[],G=[],Z=[];for(let N=0;N<i;N++)U[N]=0,G[N]=0,Z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Z,object:R,attributes:{},index:null}}function _(R,U,G,Z){const N=c.attributes,J=U.attributes;let P=0;const k=G.getAttributes();for(const Y in k)if(k[Y].location>=0){const ne=N[Y];let se=J[Y];if(se===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;P++}return c.attributesNum!==P||c.index!==Z}function S(R,U,G,Z){const N={},J=U.attributes;let P=0;const k=G.getAttributes();for(const Y in k)if(k[Y].location>=0){let ne=J[Y];ne===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),N[Y]=se,P++}c.attributes=N,c.attributesNum=P,c.index=Z}function v(){const R=c.newAttributes;for(let U=0,G=R.length;U<G;U++)R[U]=0}function M(R){y(R,0)}function y(R,U){const G=c.newAttributes,Z=c.enabledAttributes,N=c.attributeDivisors;G[R]=1,Z[R]===0&&(a.enableVertexAttribArray(R),Z[R]=1),N[R]!==U&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),N[R]=U)}function E(){const R=c.newAttributes,U=c.enabledAttributes;for(let G=0,Z=U.length;G<Z;G++)U[G]!==R[G]&&(a.disableVertexAttribArray(G),U[G]=0)}function A(R,U,G,Z,N,J){n.isWebGL2===!0&&(G===5124||G===5125)?a.vertexAttribIPointer(R,U,G,N,J):a.vertexAttribPointer(R,U,G,Z,N,J)}function x(R,U,G,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=Z.attributes,J=G.getAttributes(),P=U.defaultAttributeValues;for(const k in J){const Y=J[k];if(Y.location>=0){let te=N[k];if(te===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const ne=te.normalized,se=te.itemSize,B=t.get(te);if(B===void 0)continue;const Re=B.buffer,fe=B.type,Ie=B.bytesPerElement;if(te.isInterleavedBufferAttribute){const ue=te.data,ke=ue.stride,de=te.offset;if(ue.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)y(Y.location+ve,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<Y.locationSize;ve++)M(Y.location+ve);a.bindBuffer(34962,Re);for(let ve=0;ve<Y.locationSize;ve++)A(Y.location+ve,se/Y.locationSize,fe,ne,ke*Ie,(de+se/Y.locationSize*ve)*Ie)}else{if(te.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)y(Y.location+ue,te.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<Y.locationSize;ue++)M(Y.location+ue);a.bindBuffer(34962,Re);for(let ue=0;ue<Y.locationSize;ue++)A(Y.location+ue,se/Y.locationSize,fe,ne,se*Ie,se/Y.locationSize*ue*Ie)}}else if(P!==void 0){const ne=P[k];if(ne!==void 0)switch(ne.length){case 2:a.vertexAttrib2fv(Y.location,ne);break;case 3:a.vertexAttrib3fv(Y.location,ne);break;case 4:a.vertexAttrib4fv(Y.location,ne);break;default:a.vertexAttrib1fv(Y.location,ne)}}}}E()}function T(){q();for(const R in o){const U=o[R];for(const G in U){const Z=U[G];for(const N in Z)g(Z[N].object),delete Z[N];delete U[G]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const U=o[R.id];for(const G in U){const Z=U[G];for(const N in Z)g(Z[N].object),delete Z[N];delete U[G]}delete o[R.id]}function z(R){for(const U in o){const G=o[U];if(G[R.id]===void 0)continue;const Z=G[R.id];for(const N in Z)g(Z[N].object),delete Z[N];delete G[R.id]}}function q(){F(),u=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:M,disableUnusedAttributes:E}}function V_(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=a,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function W_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),d=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),S=a.getParameter(36349),v=f>0,M=s||e.has("OES_texture_float"),y=v&&M,E=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:E}}function H_(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new er,o=new vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,v=S*4;let M=_.clippingState||null;l.value=M,M=u(g,f,v,m);for(let y=0;y!==v;++y)M[y]=t[y];_.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let v=0,M=m;v!==d;++v,M+=4)s.copy(h[v]).applyMatrix4(S,o),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function X_(a){let e=new WeakMap;function t(s,o){return o===Fl?s.mapping=ss:o===Ol&&(s.mapping=os),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Fl||o===Ol)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new rm(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class q_ extends ih{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,Du=[.125,.215,.35,.446,.526,.582],rr=20,fl=new q_,Lu=new st;let hl=null;const tr=(1+Math.sqrt(5))/2,Br=1/tr,Ru=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,tr,Br),new V(0,tr,-Br),new V(Br,0,tr),new V(-Br,0,tr),new V(tr,Br,0),new V(-tr,Br,0)];class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){hl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:js,format:qn,encoding:yr,depthBuffer:!1},i=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y_(r)),this._blurMaterial=$_(r,e,t)}return i}_compileMaterial(e){const t=new Pi(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,n,i){const o=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Lu),u.toneMapping=_i,u.autoClear=!1;const m=new Qf({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new Pi(new fo,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Lu),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const v=this._cubeSize;Fo(i,S*v,_>2?v:0,v,v),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ss||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Pi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Ru[(i-1)%Ru.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pi(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*rr-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):rr;p>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const _=[];let S=0;for(let A=0;A<rr;++A){const x=A/d,T=Math.exp(-x*x/2);_.push(T),A===0?S+=T:A<p&&(S+=2*T)}for(let A=0;A<_.length;A++)_[A]=_[A]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-Yr?i-v+Yr:0),E=4*(this._cubeSize-M);Fo(t,y,E,3*M,2*M),l.setRenderTarget(t),l.render(h,fl)}}function Y_(a){const e=[],t=[],n=[];let i=a;const r=a-Yr+1+Du.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-Yr?l=Du[s-a+Yr-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,S=new Float32Array(d*g*m),v=new Float32Array(p*g*m),M=new Float32Array(_*g*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,x=E>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];S.set(T,d*g*E),v.set(f,p*g*E);const D=[E,E,E,E,E,E];M.set(D,_*g*E)}const y=new bi;y.setAttribute("position",new Mn(S,d)),y.setAttribute("uv",new Mn(v,p)),y.setAttribute("faceIndex",new Mn(M,_)),e.push(y),i>Yr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(a,e,t){const n=new Mr(a,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function $_(a,e,t){const n=new Float32Array(rr),i=new V(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ou(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function zu(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function j_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fl||l===Ol,u=l===ss||l===os;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Iu(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Iu(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Z_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K_(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let v=0,M=S.length;v<M;v+=3){const y=S[v+0],E=S[v+1],A=S[v+2];f.push(y,E,E,A,A,y)}}else{const S=g.array;d=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const y=v+0,E=v+1,A=v+2;f.push(y,E,E,A,A,y)}}const p=new(qf(f)?th:eh)(f,1);p.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function J_(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){a.drawElements(r,m,o,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=a,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,o,f*l,g),t.update(m,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Q_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function e0(a,e){return a[0]-e[0]}function t0(a,e){return Math.abs(e[1])-Math.abs(a[1])}function n0(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let G=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",G)};var g=G;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;M===!0&&(D=1),y===!0&&(D=2),E===!0&&(D=3);let z=u.attributes.position.count*D,q=1;z>e.maxTextureSize&&(q=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*q*4*p),R=new Zf(F,z,q,p);R.type=or,R.needsUpdate=!0;const U=D*4;for(let Z=0;Z<p;Z++){const N=A[Z],J=x[Z],P=T[Z],k=z*q*4*Z;for(let Y=0;Y<N.count;Y++){const te=Y*U;M===!0&&(s.fromBufferAttribute(N,Y),F[k+te+0]=s.x,F[k+te+1]=s.y,F[k+te+2]=s.z,F[k+te+3]=0),y===!0&&(s.fromBufferAttribute(J,Y),F[k+te+4]=s.x,F[k+te+5]=s.y,F[k+te+6]=s.z,F[k+te+7]=0),E===!0&&(s.fromBufferAttribute(P,Y),F[k+te+8]=s.x,F[k+te+9]=s.y,F[k+te+10]=s.z,F[k+te+11]=P.itemSize===4?s.w:1)}}_={count:p,texture:R,size:new ot(z,q)},r.set(u,_),u.addEventListener("dispose",G)}let S=0;for(let M=0;M<m.length;M++)S+=m[M];const v=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",m),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const E=p[y];E[0]=y,E[1]=m[y]}p.sort(t0);for(let y=0;y<8;y++)y<d&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(e0);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const E=o[y],A=E[0],x=E[1];A!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+y)!==_[A]&&u.setAttribute("morphTarget"+y,_[A]),S&&u.getAttribute("morphNormal"+y)!==S[A]&&u.setAttribute("morphNormal"+y,S[A]),i[y]=x,v+=x):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),S&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(a,"morphTargetBaseInfluence",M),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function i0(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const ah=new yn,lh=new Zf,ch=new Vp,uh=new rh,Nu=[],Uu=[],ku=new Float32Array(16),Bu=new Float32Array(9),Gu=new Float32Array(4);function xs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Nu[i];if(r===void 0&&(r=new Float32Array(i),Nu[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Tt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Et(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Aa(a,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function r0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function s0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;a.uniform2fv(this.addr,e),Et(t,e)}}function o0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;a.uniform3fv(this.addr,e),Et(t,e)}}function a0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;a.uniform4fv(this.addr,e),Et(t,e)}}function l0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Gu.set(n),a.uniformMatrix2fv(this.addr,!1,Gu),Et(t,n)}}function c0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Bu.set(n),a.uniformMatrix3fv(this.addr,!1,Bu),Et(t,n)}}function u0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;ku.set(n),a.uniformMatrix4fv(this.addr,!1,ku),Et(t,n)}}function f0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function h0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;a.uniform2iv(this.addr,e),Et(t,e)}}function d0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;a.uniform3iv(this.addr,e),Et(t,e)}}function p0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;a.uniform4iv(this.addr,e),Et(t,e)}}function m0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function g0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;a.uniform2uiv(this.addr,e),Et(t,e)}}function _0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;a.uniform3uiv(this.addr,e),Et(t,e)}}function x0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;a.uniform4uiv(this.addr,e),Et(t,e)}}function v0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ah,i)}function y0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ch,i)}function M0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uh,i)}function S0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lh,i)}function b0(a){switch(a){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return h0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function w0(a,e){a.uniform1fv(this.addr,e)}function T0(a,e){const t=xs(e,this.size,2);a.uniform2fv(this.addr,t)}function E0(a,e){const t=xs(e,this.size,3);a.uniform3fv(this.addr,t)}function C0(a,e){const t=xs(e,this.size,4);a.uniform4fv(this.addr,t)}function A0(a,e){const t=xs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function P0(a,e){const t=xs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function D0(a,e){const t=xs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function L0(a,e){a.uniform1iv(this.addr,e)}function R0(a,e){a.uniform2iv(this.addr,e)}function I0(a,e){a.uniform3iv(this.addr,e)}function F0(a,e){a.uniform4iv(this.addr,e)}function O0(a,e){a.uniform1uiv(this.addr,e)}function z0(a,e){a.uniform2uiv(this.addr,e)}function N0(a,e){a.uniform3uiv(this.addr,e)}function U0(a,e){a.uniform4uiv(this.addr,e)}function k0(a,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Tt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||ah,r[s])}function B0(a,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Tt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ch,r[s])}function G0(a,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Tt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||uh,r[s])}function V0(a,e,t){const n=this.cache,i=e.length,r=Aa(t,i);Tt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||lh,r[s])}function W0(a){switch(a){case 5126:return w0;case 35664:return T0;case 35665:return E0;case 35666:return C0;case 35674:return A0;case 35675:return P0;case 35676:return D0;case 5124:case 35670:return L0;case 35667:case 35671:return R0;case 35668:case 35672:return I0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return z0;case 36295:return N0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return V0}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=b0(t.type)}}class X0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=W0(t.type)}}class q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function Vu(a,e){a.seq.push(e),a.map[e.id]=e}function Y0(a,e,t){const n=a.name,i=n.length;for(dl.lastIndex=0;;){const r=dl.exec(n),s=dl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Vu(t,c===void 0?new H0(o,a,e):new X0(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new q0(o),Vu(t,h)),t=h}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Y0(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Wu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let $0=0;function j0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Z0(a){switch(a){case yr:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Hu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+j0(a.getShaderSource(e),s)}else return i}function K0(a,e){const t=Z0(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function J0(a,e){let t;switch(e){case pp:t="Linear";break;case mp:t="Reinhard";break;case gp:t="OptimizedCineon";break;case _p:t="ACESFilmic";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q0(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function ex(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tx(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Ls(a){return a!==""}function Xu(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(a){return a.replace(nx,ix)}function ix(a,e){const t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bl(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(a){return a.replace(rx,sx)}function sx(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $u(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ds&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function cx(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function ux(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fx(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=ox(t),c=ax(t),u=lx(t),h=cx(t),f=ux(t),m=t.isWebGL2?"":Q0(t),g=ex(r),d=i.createProgram();let p,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ls).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ls).join(`
`),_.length>0&&(_+=`
`)):(p=[$u(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),_=[m,$u(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?We.tonemapping_pars_fragment:"",t.toneMapping!==_i?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,K0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),s=Bl(s),s=Xu(s,t),s=qu(s,t),o=Bl(o),o=Xu(o,t),o=qu(o,t),s=Yu(s),o=Yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=S+p+s,M=S+_+o,y=Wu(i,35633,v),E=Wu(i,35632,M);if(i.attachShader(d,y),i.attachShader(d,E),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),a.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(E).trim();let q=!0,F=!0;if(i.getProgramParameter(d,35714)===!1){q=!1;const R=Hu(i,y,"vertex"),U=Hu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+R+`
`+U)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||z==="")&&(F=!1);F&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:z,prefix:_}})}i.deleteShader(y),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Qo(i,d)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=tx(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=$0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=E,this}let hx=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new px(e),t.set(e,n)),n}}class px{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}}function mx(a,e,t,n,i,r,s){const o=new Jf,l=new dx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,D,z,q){const F=z.fog,R=q.geometry,U=x.isMeshStandardMaterial?z.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),Z=G&&G.mapping===Ea?G.image.height:null,N=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,P=J!==void 0?J.length:0;let k=0;R.morphAttributes.position!==void 0&&(k=1),R.morphAttributes.normal!==void 0&&(k=2),R.morphAttributes.color!==void 0&&(k=3);let Y,te,ne,se;if(N){const ke=Jn[N];Y=ke.vertexShader,te=ke.fragmentShader}else Y=x.vertexShader,te=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const B=a.getRenderTarget(),Re=x.alphaTest>0,fe=x.clearcoat>0,Ie=x.iridescence>0;return{isWebGL2:u,shaderID:N,shaderName:x.type,vertexShader:Y,fragmentShader:te,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?a.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:yr,map:!!x.map,matcap:!!x.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:Z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Up,tangentSpaceNormalMap:x.normalMapType===Np,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===at,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:Ie,iridescenceMap:Ie&&!!x.iridescenceMap,iridescenceThicknessMap:Ie&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Jr,alphaMap:!!x.alphaMap,alphaTest:Re,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:k,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:x.toneMapped?a.toneMapping:_i,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dc,flipSided:x.side===Fn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(T,x),S(T,x),T.push(a.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.physicallyCorrectLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),x.push(o.mask)}function v(x){const T=g[x.type];let D;if(T){const z=Jn[T];D=em.clone(z.uniforms)}else D=x.uniforms;return D}function M(x,T){let D;for(let z=0,q=c.length;z<q;z++){const F=c[z];if(F.cacheKey===T){D=F,++D.usedTimes;break}}return D===void 0&&(D=new fx(a,T,x,r),c.push(D)),D}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function gx(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _x(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ju(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Zu(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,m,g,d,p){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function o(h,f,m,g,d,p){const _=s(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,d,p){const _=s(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||_x),n.length>1&&n.sort(f||ju),i.length>1&&i.sort(f||ju)}function u(){for(let h=e,f=a.length;h<f;h++){const m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function xx(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Zu,a.set(n,[s])):i>=r.length?(s=new Zu,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function vx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new st};break;case"SpotLight":t={position:new V,direction:new V,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new V,halfWidth:new V,halfHeight:new V};break}return a[e.id]=t,t}}}function yx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Mx=0;function Sx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function bx(a,e){const t=new vx,n=yx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new Lt,o=new Lt;function l(u,h){let f=0,m=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,p=0,_=0,S=0,v=0,M=0,y=0,E=0,A=0,x=0;u.sort(Sx);const T=h!==!0?Math.PI:1;for(let z=0,q=u.length;z<q;z++){const F=u[z],R=F.color,U=F.intensity,G=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=R.r*U*T,m+=R.g*U*T,g+=R.b*U*T;else if(F.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(F.sh.coefficients[N],U);else if(F.isDirectionalLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const J=F.shadow,P=n.get(F);P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,i.directionalShadow[d]=P,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=F.shadow.matrix,M++}i.directional[d]=N,d++}else if(F.isSpotLight){const N=t.get(F);N.position.setFromMatrixPosition(F.matrixWorld),N.color.copy(R).multiplyScalar(U*T),N.distance=G,N.coneCos=Math.cos(F.angle),N.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),N.decay=F.decay,i.spot[_]=N;const J=F.shadow;if(F.map&&(i.spotLightMap[A]=F.map,A++,J.updateMatrices(F),F.castShadow&&x++),i.spotLightMatrix[_]=J.matrix,F.castShadow){const P=n.get(F);P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=Z,E++}_++}else if(F.isRectAreaLight){const N=t.get(F);N.color.copy(R).multiplyScalar(U),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=N,S++}else if(F.isPointLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity*T),N.distance=F.distance,N.decay=F.decay,F.castShadow){const J=F.shadow,P=n.get(F);P.shadowBias=J.bias,P.shadowNormalBias=J.normalBias,P.shadowRadius=J.radius,P.shadowMapSize=J.mapSize,P.shadowCameraNear=J.camera.near,P.shadowCameraFar=J.camera.far,i.pointShadow[p]=P,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=F.shadow.matrix,y++}i.point[p]=N,p++}else if(F.isHemisphereLight){const N=t.get(F);N.skyColor.copy(F.color).multiplyScalar(U*T),N.groundColor.copy(F.groundColor).multiplyScalar(U*T),i.hemi[v]=N,v++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==v||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==E||D.numSpotMaps!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+A-x,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=x,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=v,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=E,D.numSpotMaps=A,i.version=Mx++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const M=u[S];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),f++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(M.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),d++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Ku(a,e){const t=new bx(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function wx(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Ku(a,e),t.set(r,[l])):s>=o.length?(l=new Ku(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Tx extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`;function Px(a,e,t){let n=new sh;const i=new ot,r=new ot,s=new zt,o=new Tx({depthPacking:zp}),l=new Ex,c={},u=t.maxTextureSize,h={0:Fn,1:xr,2:dc},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Cx,fragmentShader:Ax}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Pi(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bf,this.render=function(M,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const A=a.getRenderTarget(),x=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),D=a.state;D.setBlending(zi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let z=0,q=M.length;z<q;z++){const F=M[z],R=F.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const U=R.getFrameExtents();if(i.multiply(U),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==Ds?{minFilter:$t,magFilter:$t}:{};R.map=new Mr(i.x,i.y,Z),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const G=R.getViewportCount();for(let Z=0;Z<G;Z++){const N=R.getViewport(Z);s.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),D.viewport(s),R.updateMatrices(F,Z),n=R.getFrustum(),v(y,E,R.camera,F,this.type)}R.isPointLightShadow!==!0&&this.type===Ds&&_(R,E),R.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(A,x,T)};function _(M,y){const E=e.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Mr(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(y,null,E,f,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(y,null,E,m,d,null)}function S(M,y,E,A,x,T){let D=null;const z=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z!==void 0)D=z;else if(D=E.isPointLight===!0?l:o,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const q=D.uuid,F=y.uuid;let R=c[q];R===void 0&&(R={},c[q]=R);let U=R[F];U===void 0&&(U=D.clone(),R[F]=U),D=U}return D.visible=y.visible,D.wireframe=y.wireframe,T===Ds?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:h[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,E.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(E.matrixWorld),D.nearDistance=A,D.farDistance=x),D}function v(M,y,E,A,x){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Ds)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const z=e.update(M),q=M.material;if(Array.isArray(q)){const F=z.groups;for(let R=0,U=F.length;R<U;R++){const G=F[R],Z=q[G.materialIndex];if(Z&&Z.visible){const N=S(M,Z,A,E.near,E.far,x);a.renderBufferDirect(E,null,z,N,M,G)}}}else if(q.visible){const F=S(M,q,A,E.near,E.far,x);a.renderBufferDirect(E,null,z,F,M,null)}}const D=M.children;for(let z=0,q=D.length;z<q;z++)v(D[z],y,E,A,x)}}function Dx(a,e,t){const n=t.isWebGL2;function i(){let L=!1;const X=new zt;let ee=null;const le=new zt(0,0,0,0);return{setMask:function(ge){ee!==ge&&!L&&(a.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){L=ge},setClear:function(ge,Xe,et,ht,Ne){Ne===!0&&(ge*=ht,Xe*=ht,et*=ht),X.set(ge,Xe,et,ht),le.equals(X)===!1&&(a.clearColor(ge,Xe,et,ht),le.copy(X))},reset:function(){L=!1,ee=null,le.set(-1,0,0,0)}}}function r(){let L=!1,X=null,ee=null,le=null;return{setTest:function(ge){ge?Re(2929):fe(2929)},setMask:function(ge){X!==ge&&!L&&(a.depthMask(ge),X=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case sp:a.depthFunc(512);break;case op:a.depthFunc(519);break;case ap:a.depthFunc(513);break;case Il:a.depthFunc(515);break;case lp:a.depthFunc(514);break;case cp:a.depthFunc(518);break;case up:a.depthFunc(516);break;case fp:a.depthFunc(517);break;default:a.depthFunc(515)}ee=ge}},setLocked:function(ge){L=ge},setClear:function(ge){le!==ge&&(a.clearDepth(ge),le=ge)},reset:function(){L=!1,X=null,ee=null,le=null}}}function s(){let L=!1,X=null,ee=null,le=null,ge=null,Xe=null,et=null,ht=null,Ne=null;return{setTest:function(ae){L||(ae?Re(2960):fe(2960))},setMask:function(ae){X!==ae&&!L&&(a.stencilMask(ae),X=ae)},setFunc:function(ae,re,_e){(ee!==ae||le!==re||ge!==_e)&&(a.stencilFunc(ae,re,_e),ee=ae,le=re,ge=_e)},setOp:function(ae,re,_e){(Xe!==ae||et!==re||ht!==_e)&&(a.stencilOp(ae,re,_e),Xe=ae,et=re,ht=_e)},setLocked:function(ae){L=ae},setClear:function(ae){Ne!==ae&&(a.clearStencil(ae),Ne=ae)},reset:function(){L=!1,X=null,ee=null,le=null,ge=null,Xe=null,et=null,ht=null,Ne=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,v=null,M=null,y=null,E=null,A=null,x=null,T=!1,D=null,z=null,q=null,F=null,R=null;const U=a.getParameter(35661);let G=!1,Z=0;const N=a.getParameter(7938);N.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=Z>=1):N.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=Z>=2);let J=null,P={};const k=a.getParameter(3088),Y=a.getParameter(2978),te=new zt().fromArray(k),ne=new zt().fromArray(Y);function se(L,X,ee){const le=new Uint8Array(4),ge=a.createTexture();a.bindTexture(L,ge),a.texParameteri(L,10241,9728),a.texParameteri(L,10240,9728);for(let Xe=0;Xe<ee;Xe++)a.texImage2D(X+Xe,0,6408,1,1,0,6408,5121,le);return ge}const B={};B[3553]=se(3553,3553,1),B[34067]=se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(2929),l.setFunc(Il),Ze(!1),H(Wc),Re(2884),Ke(zi);function Re(L){f[L]!==!0&&(a.enable(L),f[L]=!0)}function fe(L){f[L]!==!1&&(a.disable(L),f[L]=!1)}function Ie(L,X){return m[L]!==X?(a.bindFramebuffer(L,X),m[L]=X,n&&(L===36009&&(m[36160]=X),L===36160&&(m[36009]=X)),!0):!1}function ue(L,X){let ee=d,le=!1;if(L)if(ee=g.get(X),ee===void 0&&(ee=[],g.set(X,ee)),L.isWebGLMultipleRenderTargets){const ge=L.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let Xe=0,et=ge.length;Xe<et;Xe++)ee[Xe]=36064+Xe;ee.length=ge.length,le=!0}}else ee[0]!==36064&&(ee[0]=36064,le=!0);else ee[0]!==1029&&(ee[0]=1029,le=!0);le&&(t.isWebGL2?a.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ke(L){return p!==L?(a.useProgram(L),p=L,!0):!1}const de={[Hr]:32774,[$d]:32778,[jd]:32779};if(n)de[qc]=32775,de[Yc]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(de[qc]=L.MIN_EXT,de[Yc]=L.MAX_EXT)}const ve={[Zd]:0,[Kd]:1,[Jd]:768,[Gf]:770,[rp]:776,[np]:774,[ep]:772,[Qd]:769,[Vf]:771,[ip]:775,[tp]:773};function Ke(L,X,ee,le,ge,Xe,et,ht){if(L===zi){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Re(3042),_=!0),L!==Yd){if(L!==S||ht!==T){if((v!==Hr||E!==Hr)&&(a.blendEquation(32774),v=Hr,E=Hr),ht)switch(L){case Jr:a.blendFuncSeparate(1,771,1,771);break;case Rl:a.blendFunc(1,1);break;case Hc:a.blendFuncSeparate(0,769,0,1);break;case Xc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jr:a.blendFuncSeparate(770,771,1,771);break;case Rl:a.blendFunc(770,1);break;case Hc:a.blendFuncSeparate(0,769,0,1);break;case Xc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,A=null,x=null,S=L,T=ht}return}ge=ge||X,Xe=Xe||ee,et=et||le,(X!==v||ge!==E)&&(a.blendEquationSeparate(de[X],de[ge]),v=X,E=ge),(ee!==M||le!==y||Xe!==A||et!==x)&&(a.blendFuncSeparate(ve[ee],ve[le],ve[Xe],ve[et]),M=ee,y=le,A=Xe,x=et),S=L,T=!1}function it(L,X){L.side===dc?fe(2884):Re(2884);let ee=L.side===Fn;X&&(ee=!ee),Ze(ee),L.blending===Jr&&L.transparent===!1?Ke(zi):Ke(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const le=L.stencilWrite;c.setTest(le),le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(32926):fe(32926)}function Ze(L){D!==L&&(L?a.frontFace(2304):a.frontFace(2305),D=L)}function H(L){L!==Hd?(Re(2884),L!==z&&(L===Wc?a.cullFace(1029):L===Xd?a.cullFace(1028):a.cullFace(1032))):fe(2884),z=L}function Je(L){L!==q&&(G&&a.lineWidth(L),q=L)}function Le(L,X,ee){L?(Re(32823),(F!==X||R!==ee)&&(a.polygonOffset(X,ee),F=X,R=ee)):fe(32823)}function Ct(L){L?Re(3089):fe(3089)}function _t(L){L===void 0&&(L=33984+U-1),J!==L&&(a.activeTexture(L),J=L)}function C(L,X,ee){ee===void 0&&(J===null?ee=33984+U-1:ee=J);let le=P[ee];le===void 0&&(le={type:void 0,texture:void 0},P[ee]=le),(le.type!==L||le.texture!==X)&&(J!==ee&&(a.activeTexture(ee),J=ee),a.bindTexture(L,X||B[L]),le.type=L,le.texture=X)}function b(){const L=P[J];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){te.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function Se(L){ne.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function Be(L,X){let ee=h.get(X);ee===void 0&&(ee=new WeakMap,h.set(X,ee));let le=ee.get(L);le===void 0&&(le=a.getUniformBlockIndex(X,L.name),ee.set(L,le))}function Te(L,X){const le=h.get(X).get(L);u.get(X)!==le&&(a.uniformBlockBinding(X,le,L.__bindingPointIndex),u.set(X,le))}function Qe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},J=null,P={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,v=null,M=null,y=null,E=null,A=null,x=null,T=!1,D=null,z=null,q=null,F=null,R=null,te.set(0,0,a.canvas.width,a.canvas.height),ne.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:fe,bindFramebuffer:Ie,drawBuffers:ue,useProgram:ke,setBlending:Ke,setMaterial:it,setFlipSided:Ze,setCullFace:H,setLineWidth:Je,setPolygonOffset:Le,setScissorTest:Ct,activeTexture:_t,bindTexture:C,unbindTexture:b,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:Pe,texImage3D:pe,updateUBOMapping:Be,uniformBlockBinding:Te,texStorage2D:j,texStorage3D:Me,texSubImage2D:Q,texSubImage3D:oe,compressedTexSubImage2D:be,compressedTexSubImage3D:he,scissor:Ee,viewport:Se,reset:Qe}}function Lx(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,b){return _?new OffscreenCanvas(C,b):ha("canvas")}function v(C,b,K,ie){let Q=1;if((C.width>ie||C.height>ie)&&(Q=ie/Math.max(C.width,C.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=b?kl:Math.floor,be=oe(Q*C.width),he=oe(Q*C.height);d===void 0&&(d=S(be,he));const j=K?S(be,he):d;return j.width=be,j.height=he,j.getContext("2d").drawImage(C,0,0,be,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+he+")."),j}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return vu(C.width)&&vu(C.height)}function y(C){return o?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==$t&&C.minFilter!==An}function E(C,b){return C.generateMipmaps&&b&&C.minFilter!==$t&&C.minFilter!==An}function A(C){a.generateMipmap(C)}function x(C,b,K,ie,Q=!1){if(o===!1)return b;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=b;return b===6403&&(K===5126&&(oe=33326),K===5131&&(oe=33325),K===5121&&(oe=33321)),b===33319&&(K===5126&&(oe=33328),K===5131&&(oe=33327),K===5121&&(oe=33323)),b===6408&&(K===5126&&(oe=34836),K===5131&&(oe=34842),K===5121&&(oe=ie===at&&Q===!1?35907:32856),K===32819&&(oe=32854),K===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function T(C,b,K){return E(C,K)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function D(C){return C===$t||C===$c||C===Na?9728:9729}function z(C){const b=C.target;b.removeEventListener("dispose",z),F(b),b.isVideoTexture&&g.delete(b)}function q(C){const b=C.target;b.removeEventListener("dispose",q),U(b)}function F(C){const b=n.get(C);if(b.__webglInit===void 0)return;const K=C.source,ie=p.get(K);if(ie){const Q=ie[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(C),Object.keys(ie).length===0&&p.delete(K)}n.remove(C)}function R(C){const b=n.get(C);a.deleteTexture(b.__webglTexture);const K=C.source,ie=p.get(K);delete ie[b.__cacheKey],s.memory.textures--}function U(C){const b=C.texture,K=n.get(C),ie=n.get(b);if(ie.__webglTexture!==void 0&&(a.deleteTexture(ie.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)a.deleteFramebuffer(K.__webglFramebuffer[Q]),K.__webglDepthbuffer&&a.deleteRenderbuffer(K.__webglDepthbuffer[Q]);else{if(a.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&a.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&a.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let Q=0;Q<K.__webglColorRenderbuffer.length;Q++)K.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(K.__webglColorRenderbuffer[Q]);K.__webglDepthRenderbuffer&&a.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,oe=b.length;Q<oe;Q++){const be=n.get(b[Q]);be.__webglTexture&&(a.deleteTexture(be.__webglTexture),s.memory.textures--),n.remove(b[Q])}n.remove(b),n.remove(C)}let G=0;function Z(){G=0}function N(){const C=G;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),G+=1,C}function J(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function P(C,b){const K=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(K,C,b);return}}t.bindTexture(3553,K.__webglTexture,33984+b)}function k(C,b){const K=n.get(C);if(C.version>0&&K.__version!==C.version){fe(K,C,b);return}t.bindTexture(35866,K.__webglTexture,33984+b)}function Y(C,b){const K=n.get(C);if(C.version>0&&K.__version!==C.version){fe(K,C,b);return}t.bindTexture(32879,K.__webglTexture,33984+b)}function te(C,b){const K=n.get(C);if(C.version>0&&K.__version!==C.version){Ie(K,C,b);return}t.bindTexture(34067,K.__webglTexture,33984+b)}const ne={[zl]:10497,[Xn]:33071,[Nl]:33648},se={[$t]:9728,[$c]:9984,[Na]:9986,[An]:9729,[vp]:9985,[$s]:9987};function B(C,b,K){if(K?(a.texParameteri(C,10242,ne[b.wrapS]),a.texParameteri(C,10243,ne[b.wrapT]),(C===32879||C===35866)&&a.texParameteri(C,32882,ne[b.wrapR]),a.texParameteri(C,10240,se[b.magFilter]),a.texParameteri(C,10241,se[b.minFilter])):(a.texParameteri(C,10242,33071),a.texParameteri(C,10243,33071),(C===32879||C===35866)&&a.texParameteri(C,32882,33071),(b.wrapS!==Xn||b.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,10240,D(b.magFilter)),a.texParameteri(C,10241,D(b.minFilter)),b.minFilter!==$t&&b.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===$t||b.minFilter!==Na&&b.minFilter!==$s||b.type===or&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===js&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(a.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Re(C,b){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",z));const ie=b.source;let Q=p.get(ie);Q===void 0&&(Q={},p.set(ie,Q));const oe=J(b);if(oe!==C.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,K=!0),Q[oe].usedTimes++;const be=Q[C.__cacheKey];be!==void 0&&(Q[C.__cacheKey].usedTimes--,be.usedTimes===0&&R(b)),C.__cacheKey=oe,C.__webglTexture=Q[oe].texture}return K}function fe(C,b,K){let ie=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=35866),b.isData3DTexture&&(ie=32879);const Q=Re(C,b),oe=b.source;t.bindTexture(ie,C.__webglTexture,33984+K);const be=n.get(oe);if(oe.version!==be.__version||Q===!0){t.activeTexture(33984+K),a.pixelStorei(37440,b.flipY),a.pixelStorei(37441,b.premultiplyAlpha),a.pixelStorei(3317,b.unpackAlignment),a.pixelStorei(37443,0);const he=y(b)&&M(b.image)===!1;let j=v(b.image,he,!1,u);j=_t(b,j);const Me=M(j)||o,Pe=r.convert(b.format,b.encoding);let pe=r.convert(b.type),Ee=x(b.internalFormat,Pe,pe,b.encoding,b.isVideoTexture);B(ie,b,Me);let Se;const Be=b.mipmaps,Te=o&&b.isVideoTexture!==!0,Qe=be.__version===void 0||Q===!0,L=T(b,j,Me);if(b.isDepthTexture)Ee=6402,o?b.type===or?Ee=36012:b.type===sr?Ee=33190:b.type===Qr?Ee=35056:Ee=33189:b.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===cr&&Ee===6402&&b.type!==Xf&&b.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=sr,pe=r.convert(b.type)),b.format===as&&Ee===6402&&(Ee=34041,b.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Qr,pe=r.convert(b.type))),Qe&&(Te?t.texStorage2D(3553,1,Ee,j.width,j.height):t.texImage2D(3553,0,Ee,j.width,j.height,0,Pe,pe,null));else if(b.isDataTexture)if(Be.length>0&&Me){Te&&Qe&&t.texStorage2D(3553,L,Ee,Be[0].width,Be[0].height);for(let X=0,ee=Be.length;X<ee;X++)Se=Be[X],Te?t.texSubImage2D(3553,X,0,0,Se.width,Se.height,Pe,pe,Se.data):t.texImage2D(3553,X,Ee,Se.width,Se.height,0,Pe,pe,Se.data);b.generateMipmaps=!1}else Te?(Qe&&t.texStorage2D(3553,L,Ee,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Pe,pe,j.data)):t.texImage2D(3553,0,Ee,j.width,j.height,0,Pe,pe,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Te&&Qe&&t.texStorage3D(35866,L,Ee,Be[0].width,Be[0].height,j.depth);for(let X=0,ee=Be.length;X<ee;X++)Se=Be[X],b.format!==qn?Pe!==null?Te?t.compressedTexSubImage3D(35866,X,0,0,0,Se.width,Se.height,j.depth,Pe,Se.data,0,0):t.compressedTexImage3D(35866,X,Ee,Se.width,Se.height,j.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage3D(35866,X,0,0,0,Se.width,Se.height,j.depth,Pe,pe,Se.data):t.texImage3D(35866,X,Ee,Se.width,Se.height,j.depth,0,Pe,pe,Se.data)}else{Te&&Qe&&t.texStorage2D(3553,L,Ee,Be[0].width,Be[0].height);for(let X=0,ee=Be.length;X<ee;X++)Se=Be[X],b.format!==qn?Pe!==null?Te?t.compressedTexSubImage2D(3553,X,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(3553,X,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(3553,X,0,0,Se.width,Se.height,Pe,pe,Se.data):t.texImage2D(3553,X,Ee,Se.width,Se.height,0,Pe,pe,Se.data)}else if(b.isDataArrayTexture)Te?(Qe&&t.texStorage3D(35866,L,Ee,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Pe,pe,j.data)):t.texImage3D(35866,0,Ee,j.width,j.height,j.depth,0,Pe,pe,j.data);else if(b.isData3DTexture)Te?(Qe&&t.texStorage3D(32879,L,Ee,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Pe,pe,j.data)):t.texImage3D(32879,0,Ee,j.width,j.height,j.depth,0,Pe,pe,j.data);else if(b.isFramebufferTexture){if(Qe)if(Te)t.texStorage2D(3553,L,Ee,j.width,j.height);else{let X=j.width,ee=j.height;for(let le=0;le<L;le++)t.texImage2D(3553,le,Ee,X,ee,0,Pe,pe,null),X>>=1,ee>>=1}}else if(Be.length>0&&Me){Te&&Qe&&t.texStorage2D(3553,L,Ee,Be[0].width,Be[0].height);for(let X=0,ee=Be.length;X<ee;X++)Se=Be[X],Te?t.texSubImage2D(3553,X,0,0,Pe,pe,Se):t.texImage2D(3553,X,Ee,Pe,pe,Se);b.generateMipmaps=!1}else Te?(Qe&&t.texStorage2D(3553,L,Ee,j.width,j.height),t.texSubImage2D(3553,0,0,0,Pe,pe,j)):t.texImage2D(3553,0,Ee,Pe,pe,j);E(b,Me)&&A(ie),be.__version=oe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ie(C,b,K){if(b.image.length!==6)return;const ie=Re(C,b),Q=b.source;t.bindTexture(34067,C.__webglTexture,33984+K);const oe=n.get(Q);if(Q.version!==oe.__version||ie===!0){t.activeTexture(33984+K),a.pixelStorei(37440,b.flipY),a.pixelStorei(37441,b.premultiplyAlpha),a.pixelStorei(3317,b.unpackAlignment),a.pixelStorei(37443,0);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,he=b.image[0]&&b.image[0].isDataTexture,j=[];for(let X=0;X<6;X++)!be&&!he?j[X]=v(b.image[X],!1,!0,c):j[X]=he?b.image[X].image:b.image[X],j[X]=_t(b,j[X]);const Me=j[0],Pe=M(Me)||o,pe=r.convert(b.format,b.encoding),Ee=r.convert(b.type),Se=x(b.internalFormat,pe,Ee,b.encoding),Be=o&&b.isVideoTexture!==!0,Te=oe.__version===void 0||ie===!0;let Qe=T(b,Me,Pe);B(34067,b,Pe);let L;if(be){Be&&Te&&t.texStorage2D(34067,Qe,Se,Me.width,Me.height);for(let X=0;X<6;X++){L=j[X].mipmaps;for(let ee=0;ee<L.length;ee++){const le=L[ee];b.format!==qn?pe!==null?Be?t.compressedTexSubImage2D(34069+X,ee,0,0,le.width,le.height,pe,le.data):t.compressedTexImage2D(34069+X,ee,Se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+X,ee,0,0,le.width,le.height,pe,Ee,le.data):t.texImage2D(34069+X,ee,Se,le.width,le.height,0,pe,Ee,le.data)}}}else{L=b.mipmaps,Be&&Te&&(L.length>0&&Qe++,t.texStorage2D(34067,Qe,Se,j[0].width,j[0].height));for(let X=0;X<6;X++)if(he){Be?t.texSubImage2D(34069+X,0,0,0,j[X].width,j[X].height,pe,Ee,j[X].data):t.texImage2D(34069+X,0,Se,j[X].width,j[X].height,0,pe,Ee,j[X].data);for(let ee=0;ee<L.length;ee++){const ge=L[ee].image[X].image;Be?t.texSubImage2D(34069+X,ee+1,0,0,ge.width,ge.height,pe,Ee,ge.data):t.texImage2D(34069+X,ee+1,Se,ge.width,ge.height,0,pe,Ee,ge.data)}}else{Be?t.texSubImage2D(34069+X,0,0,0,pe,Ee,j[X]):t.texImage2D(34069+X,0,Se,pe,Ee,j[X]);for(let ee=0;ee<L.length;ee++){const le=L[ee];Be?t.texSubImage2D(34069+X,ee+1,0,0,pe,Ee,le.image[X]):t.texImage2D(34069+X,ee+1,Se,pe,Ee,le.image[X])}}}E(b,Pe)&&A(34067),oe.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ue(C,b,K,ie,Q){const oe=r.convert(K.format,K.encoding),be=r.convert(K.type),he=x(K.internalFormat,oe,be,K.encoding);n.get(b).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,he,b.width,b.height,b.depth,0,oe,be,null):t.texImage2D(Q,0,he,b.width,b.height,0,oe,be,null)),t.bindFramebuffer(36160,C),Le(b)?f.framebufferTexture2DMultisampleEXT(36160,ie,Q,n.get(K).__webglTexture,0,Je(b)):(Q===3553||Q>=34069&&Q<=34074)&&a.framebufferTexture2D(36160,ie,Q,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,b,K){if(a.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let ie=33189;if(K||Le(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===or?ie=36012:Q.type===sr&&(ie=33190));const oe=Je(b);Le(b)?f.renderbufferStorageMultisampleEXT(36161,oe,ie,b.width,b.height):a.renderbufferStorageMultisample(36161,oe,ie,b.width,b.height)}else a.renderbufferStorage(36161,ie,b.width,b.height);a.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const ie=Je(b);K&&Le(b)===!1?a.renderbufferStorageMultisample(36161,ie,35056,b.width,b.height):Le(b)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,b.width,b.height):a.renderbufferStorage(36161,34041,b.width,b.height),a.framebufferRenderbuffer(36160,33306,36161,C)}else{const ie=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<ie.length;Q++){const oe=ie[Q],be=r.convert(oe.format,oe.encoding),he=r.convert(oe.type),j=x(oe.internalFormat,be,he,oe.encoding),Me=Je(b);K&&Le(b)===!1?a.renderbufferStorageMultisample(36161,Me,j,b.width,b.height):Le(b)?f.renderbufferStorageMultisampleEXT(36161,Me,j,b.width,b.height):a.renderbufferStorage(36161,j,b.width,b.height)}}a.bindRenderbuffer(36161,null)}function de(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),P(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,Q=Je(b);if(b.depthTexture.format===cr)Le(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,Q):a.framebufferTexture2D(36160,36096,3553,ie,0);else if(b.depthTexture.format===as)Le(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,Q):a.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function ve(C){const b=n.get(C),K=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");de(b.__webglFramebuffer,C)}else if(K){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]=a.createRenderbuffer(),ke(b.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=a.createRenderbuffer(),ke(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ke(C,b,K){const ie=n.get(C);b!==void 0&&ue(ie.__webglFramebuffer,C,C.texture,36064,3553),K!==void 0&&ve(C)}function it(C){const b=C.texture,K=n.get(C),ie=n.get(b);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=b.version,s.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,be=M(C)||o;if(Q){K.__webglFramebuffer=[];for(let he=0;he<6;he++)K.__webglFramebuffer[he]=a.createFramebuffer()}else{if(K.__webglFramebuffer=a.createFramebuffer(),oe)if(i.drawBuffers){const he=C.texture;for(let j=0,Me=he.length;j<Me;j++){const Pe=n.get(he[j]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Le(C)===!1){const he=oe?b:[b];K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer);for(let j=0;j<he.length;j++){const Me=he[j];K.__webglColorRenderbuffer[j]=a.createRenderbuffer(),a.bindRenderbuffer(36161,K.__webglColorRenderbuffer[j]);const Pe=r.convert(Me.format,Me.encoding),pe=r.convert(Me.type),Ee=x(Me.internalFormat,Pe,pe,Me.encoding,C.isXRRenderTarget===!0),Se=Je(C);a.renderbufferStorageMultisample(36161,Se,Ee,C.width,C.height),a.framebufferRenderbuffer(36160,36064+j,36161,K.__webglColorRenderbuffer[j])}a.bindRenderbuffer(36161,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),ke(K.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,ie.__webglTexture),B(34067,b,be);for(let he=0;he<6;he++)ue(K.__webglFramebuffer[he],C,b,36064,34069+he);E(b,be)&&A(34067),t.unbindTexture()}else if(oe){const he=C.texture;for(let j=0,Me=he.length;j<Me;j++){const Pe=he[j],pe=n.get(Pe);t.bindTexture(3553,pe.__webglTexture),B(3553,Pe,be),ue(K.__webglFramebuffer,C,Pe,36064+j,3553),E(Pe,be)&&A(3553)}t.unbindTexture()}else{let he=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?he=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ie.__webglTexture),B(he,b,be),ue(K.__webglFramebuffer,C,b,36064,he),E(b,be)&&A(he),t.unbindTexture()}C.depthBuffer&&ve(C)}function Ze(C){const b=M(C)||o,K=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,Q=K.length;ie<Q;ie++){const oe=K[ie];if(E(oe,b)){const be=C.isWebGLCubeRenderTarget?34067:3553,he=n.get(oe).__webglTexture;t.bindTexture(be,he),A(be),t.unbindTexture()}}}function H(C){if(o&&C.samples>0&&Le(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],K=C.width,ie=C.height;let Q=16384;const oe=[],be=C.stencilBuffer?33306:36096,he=n.get(C),j=C.isWebGLMultipleRenderTargets===!0;if(j)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){oe.push(36064+Me),C.depthBuffer&&oe.push(be);const Pe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Pe===!1&&(C.depthBuffer&&(Q|=256),C.stencilBuffer&&(Q|=1024)),j&&a.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[Me]),Pe===!0&&(a.invalidateFramebuffer(36008,[be]),a.invalidateFramebuffer(36009,[be])),j){const pe=n.get(b[Me]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,pe,0)}a.blitFramebuffer(0,0,K,ie,0,0,K,ie,Q,9728),m&&a.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Me,36161,he.__webglColorRenderbuffer[Me]);const Pe=n.get(b[Me]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Me,3553,Pe,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function Je(C){return Math.min(h,C.samples)}function Le(C){const b=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(C){const b=s.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function _t(C,b){const K=C.encoding,ie=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ul||K!==yr&&(K===at?o===!1?e.has("EXT_sRGB")===!0&&ie===qn?(C.format=Ul,C.minFilter=An,C.generateMipmaps=!1):b=$f.sRGBToLinear(b):(ie!==qn||Q!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",K)),b}this.allocateTextureUnit=N,this.resetTextureUnits=Z,this.setTexture2D=P,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=te,this.rebindTextures=Ke,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Le}function Rx(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===vr)return 5121;if(r===bp)return 32819;if(r===wp)return 32820;if(r===yp)return 5120;if(r===Mp)return 5122;if(r===Xf)return 5123;if(r===Sp)return 5124;if(r===sr)return 5125;if(r===or)return 5126;if(r===js)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Tp)return 6406;if(r===qn)return 6408;if(r===Cp)return 6409;if(r===Ap)return 6410;if(r===cr)return 6402;if(r===as)return 34041;if(r===Ep)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ul)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Pp)return 6403;if(r===Dp)return 36244;if(r===Lp)return 33319;if(r===Rp)return 33320;if(r===Ip)return 36249;if(r===Ua||r===ka||r===Ba||r===Ga)if(s===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jc||r===Zc||r===Kc||r===Jc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qc||r===eu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Qc)return s===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===eu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tu||r===nu||r===iu||r===ru||r===su||r===ou||r===au||r===lu||r===cu||r===uu||r===fu||r===hu||r===du||r===pu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===tu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===iu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ru)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===su)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ou)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===au)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===du)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pu)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===mu)return s===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Qr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Ix extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oo extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fx={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Oo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ox extends yn{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:cr,u!==cr&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=sr),n===void 0&&u===as&&(n=Qr),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}}class zx extends _s{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],S=[],v=new Set,M=new Map,y=new Pn;y.layers.enable(1),y.viewport=new zt;const E=new Pn;E.layers.enable(2),E.viewport=new zt;const A=[y,E],x=new Ix;x.layers.enable(1),x.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=_[k];return Y===void 0&&(Y=new pl,_[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=_[k];return Y===void 0&&(Y=new pl,_[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=_[k];return Y===void 0&&(Y=new pl,_[k]=Y),Y.getHandSpace()};function z(k){const Y=S.indexOf(k.inputSource);if(Y===-1)return;const te=_[Y];te!==void 0&&te.dispatchEvent({type:k.type,data:k.inputSource})}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",F);for(let k=0;k<_.length;k++){const Y=S[k];Y!==null&&(S[k]=null,_[k].disconnect(Y))}T=null,D=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,P.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),p=new Mr(f.framebufferWidth,f.framebufferHeight,{format:qn,type:vr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let Y=null,te=null,ne=null;g.depth&&(ne=g.stencil?35056:33190,Y=g.stencil?as:cr,te=g.stencil?Qr:sr);const se={colorFormat:32856,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(se),i.updateRenderState({layers:[h]}),p=new Mr(h.textureWidth,h.textureHeight,{format:qn,type:vr,depthTexture:new Ox(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const B=e.properties.get(p);B.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(o),P.setContext(i),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(k){for(let Y=0;Y<k.removed.length;Y++){const te=k.removed[Y],ne=S.indexOf(te);ne>=0&&(S[ne]=null,_[ne].disconnect(te))}for(let Y=0;Y<k.added.length;Y++){const te=k.added[Y];let ne=S.indexOf(te);if(ne===-1){for(let B=0;B<_.length;B++)if(B>=S.length){S.push(te),ne=B;break}else if(S[B]===null){S[B]=te,ne=B;break}if(ne===-1)break}const se=_[ne];se&&se.connect(te)}}const R=new V,U=new V;function G(k,Y,te){R.setFromMatrixPosition(Y.matrixWorld),U.setFromMatrixPosition(te.matrixWorld);const ne=R.distanceTo(U),se=Y.projectionMatrix.elements,B=te.projectionMatrix.elements,Re=se[14]/(se[10]-1),fe=se[14]/(se[10]+1),Ie=(se[9]+1)/se[5],ue=(se[9]-1)/se[5],ke=(se[8]-1)/se[0],de=(B[8]+1)/B[0],ve=Re*ke,Ke=Re*de,it=ne/(-ke+de),Ze=it*-ke;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ze),k.translateZ(it),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const H=Re+it,Je=fe+it,Le=ve-Ze,Ct=Ke+(ne-Ze),_t=Ie*fe/Je*H,C=ue*fe/Je*H;k.projectionMatrix.makePerspective(Le,Ct,_t,C,H,Je)}function Z(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;x.near=E.near=y.near=k.near,x.far=E.far=y.far=k.far,(T!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,D=x.far);const Y=k.parent,te=x.cameras;Z(x,Y);for(let se=0;se<te.length;se++)Z(te[se],Y);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),k.matrix.copy(x.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ne=k.children;for(let se=0,B=ne.length;se<B;se++)ne[se].updateMatrixWorld(!0);te.length===2?G(x,y,E):x.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.getPlanes=function(){return v};let N=null;function J(k,Y){if(c=Y.getViewerPose(l||s),m=Y,c!==null){const te=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ne=!1;te.length!==x.cameras.length&&(x.cameras.length=0,ne=!0);for(let se=0;se<te.length;se++){const B=te[se];let Re=null;if(f!==null)Re=f.getViewport(B);else{const Ie=u.getViewSubImage(h,B);Re=Ie.viewport,se===0&&(e.setRenderTargetTextures(p,Ie.colorTexture,h.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(p))}let fe=A[se];fe===void 0&&(fe=new Pn,fe.layers.enable(se),fe.viewport=new zt,A[se]=fe),fe.matrix.fromArray(B.transform.matrix),fe.projectionMatrix.fromArray(B.projectionMatrix),fe.viewport.set(Re.x,Re.y,Re.width,Re.height),se===0&&x.matrix.copy(fe.matrix),ne===!0&&x.cameras.push(fe)}}for(let te=0;te<_.length;te++){const ne=S[te],se=_[te];ne!==null&&se!==void 0&&se.update(ne,Y,l||s)}if(N&&N(k,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let te=null;for(const ne of v)Y.detectedPlanes.has(ne)||(te===null&&(te=[]),te.push(ne));if(te!==null)for(const ne of te)v.delete(ne),M.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of Y.detectedPlanes)if(!v.has(ne))v.add(ne),M.set(ne,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const se=M.get(ne);ne.lastChangedTime>se&&(M.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}m=null}const P=new oh;P.setAnimationLoop(J),this.setAnimationLoop=function(k){N=k},this.dispose=function(){}}}function Nx(a,e){function t(d,p){p.color.getRGB(d.fogColor.value,nh(a)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,v)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&s(d,p)):p.isPointsMaterial?o(d,p,_,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Fn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Fn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=a.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function s(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,_,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Fn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ux(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(S,y);const E=e.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){const v=h();S.__bindingPointIndex=v;const M=a.createBuffer(),y=S.__size,E=S.usage;return a.bindBuffer(35345,M),a.bufferData(35345,y,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,v,M),M}function h(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],M=S.uniforms,y=S.__cache;a.bindBuffer(35345,v);for(let E=0,A=M.length;E<A;E++){const x=M[E];if(m(x,E,y)===!0){const T=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let z=0;for(let q=0;q<D.length;q++){const F=D[q],R=d(F);typeof F=="number"?(x.__data[0]=F,a.bufferSubData(35345,T+z,x.__data)):F.isMatrix3?(x.__data[0]=F.elements[0],x.__data[1]=F.elements[1],x.__data[2]=F.elements[2],x.__data[3]=F.elements[0],x.__data[4]=F.elements[3],x.__data[5]=F.elements[4],x.__data[6]=F.elements[5],x.__data[7]=F.elements[0],x.__data[8]=F.elements[6],x.__data[9]=F.elements[7],x.__data[10]=F.elements[8],x.__data[11]=F.elements[0]):(F.toArray(x.__data,z),z+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,T,x.__data)}}a.bindBuffer(35345,null)}function m(S,v,M){const y=S.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const E=Array.isArray(y)?y:[y],A=[];for(let x=0;x<E.length;x++)A.push(E[x].clone());M[v]=A}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const E=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(y)?y:[y];for(let x=0;x<E.length;x++){const T=E[x];if(T.equals(A[x])===!1)return T.copy(A[x]),!0}}return!1}function g(S){const v=S.uniforms;let M=0;const y=16;let E=0;for(let A=0,x=v.length;A<x;A++){const T=v[A],D={boundary:0,storage:0},z=Array.isArray(T.value)?T.value:[T.value];for(let q=0,F=z.length;q<F;q++){const R=z[q],U=d(R);D.boundary+=U.boundary,D.storage+=U.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,A>0){E=M%y;const q=y-E;E!==0&&q-D.boundary<0&&(M+=y-E,T.__offset=M)}M+=D.storage}return E=M%y,E>0&&(M+=y-E),S.__size=M,S.__cache={},this}function d(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const M=s.indexOf(v.__bindingPointIndex);s.splice(M,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function _(){for(const S in i)a.deleteBuffer(i[S]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function kx(){const a=ha("canvas");return a.style.display="block",a}function fh(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:kx(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,s=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yr,this.physicallyCorrectLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const d=this;let p=!1,_=0,S=0,v=null,M=-1,y=null;const E=new zt,A=new zt;let x=null,T=e.width,D=e.height,z=1,q=null,F=null;const R=new zt(0,0,T,D),U=new zt(0,0,T,D);let G=!1;const Z=new sh;let N=!1,J=!1,P=null;const k=new Lt,Y=new ot,te=new V,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?z:1}let B=t;function Re(w,O){for(let $=0;$<w.length;$++){const I=w[$],W=e.getContext(I,O);if(W!==null)return W}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hc}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Be,!1),B===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),B=Re(O,w),B===null)throw Re(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let fe,Ie,ue,ke,de,ve,Ke,it,Ze,H,Je,Le,Ct,_t,C,b,K,ie,Q,oe,be,he,j,Me;function Pe(){fe=new Z_(B),Ie=new W_(B,fe,a),fe.init(Ie),he=new Rx(B,fe,Ie),ue=new Dx(B,fe,Ie),ke=new Q_,de=new gx,ve=new Lx(B,fe,ue,de,Ie,he,ke),Ke=new X_(d),it=new j_(d),Ze=new am(B,Ie),j=new G_(B,fe,Ze,Ie),H=new K_(B,Ze,ke,j),Je=new i0(B,H,Ze,ke),Q=new n0(B,Ie,ve),b=new H_(de),Le=new mx(d,Ke,it,fe,Ie,j,b),Ct=new Nx(d,de),_t=new xx,C=new wx(fe,Ie),ie=new B_(d,Ke,it,ue,Je,u,s),K=new Px(d,Je,Ie),Me=new Ux(B,ke,Ie,ue),oe=new V_(B,fe,ke,Ie),be=new J_(B,fe,ke,Ie),ke.programs=Le.programs,d.capabilities=Ie,d.extensions=fe,d.properties=de,d.renderLists=_t,d.shadowMap=K,d.state=ue,d.info=ke}Pe();const pe=new zx(d,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(T,D,!1))},this.getSize=function(w){return w.set(T,D)},this.setSize=function(w,O,$){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=w,D=O,e.width=Math.floor(w*z),e.height=Math.floor(O*z),$!==!1&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(T*z,D*z).floor()},this.setDrawingBufferSize=function(w,O,$){T=w,D=O,z=$,e.width=Math.floor(w*$),e.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,O,$,I){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,O,$,I),ue.viewport(E.copy(R).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,O,$,I){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,O,$,I),ue.scissor(A.copy(U).multiplyScalar(z).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(w){ue.setScissorTest(G=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(w=!0,O=!0,$=!0){let I=0;w&&(I|=16384),O&&(I|=256),$&&(I|=1024),B.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),_t.dispose(),C.dispose(),de.dispose(),Ke.dispose(),it.dispose(),Je.dispose(),j.dispose(),Me.dispose(),Le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",le),pe.removeEventListener("sessionend",ge),P&&(P.dispose(),P=null),Xe.stop()};function Ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=ke.autoReset,O=K.enabled,$=K.autoUpdate,I=K.needsUpdate,W=K.type;Pe(),ke.autoReset=w,K.enabled=O,K.autoUpdate=$,K.needsUpdate=I,K.type=W}function Be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){const O=w.target;O.removeEventListener("dispose",Te),Qe(O)}function Qe(w){L(w),de.remove(w)}function L(w){const O=de.get(w).programs;O!==void 0&&(O.forEach(function($){Le.releaseProgram($)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,I,W,xe){O===null&&(O=ne);const me=W.isMesh&&W.matrixWorld.determinant()<0,ye=Oe(w,O,$,I,W);ue.setMaterial(I,me);let we=$.index,Ve=1;I.wireframe===!0&&(we=H.getWireframeAttribute($),Ve=2);const Ue=$.drawRange,Ae=$.attributes.position;let ze=Ue.start*Ve,ct=(Ue.start+Ue.count)*Ve;xe!==null&&(ze=Math.max(ze,xe.start*Ve),ct=Math.min(ct,(xe.start+xe.count)*Ve)),we!==null?(ze=Math.max(ze,0),ct=Math.min(ct,we.count)):Ae!=null&&(ze=Math.max(ze,0),ct=Math.min(ct,Ae.count));const ln=ct-ze;if(ln<0||ln===1/0)return;j.setup(W,I,ye,$,we);let jn,rt=oe;if(we!==null&&(jn=Ze.get(we),rt=be,rt.setIndex(jn)),W.isMesh)I.wireframe===!0?(ue.setLineWidth(I.wireframeLinewidth*se()),rt.setMode(1)):rt.setMode(4);else if(W.isLine){let Fe=I.linewidth;Fe===void 0&&(Fe=1),ue.setLineWidth(Fe*se()),W.isLineSegments?rt.setMode(1):W.isLineLoop?rt.setMode(2):rt.setMode(3)}else W.isPoints?rt.setMode(0):W.isSprite&&rt.setMode(4);if(W.isInstancedMesh)rt.renderInstances(ze,ln,W.count);else if($.isInstancedBufferGeometry){const Fe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,si=Math.min($.instanceCount,Fe);rt.renderInstances(ze,ln,si)}else rt.render(ze,ln)},this.compile=function(w,O){function $(I,W,xe){I.transparent===!0&&I.side===mo?(I.side=Fn,I.needsUpdate=!0,_e(I,W,xe),I.side=xr,I.needsUpdate=!0,_e(I,W,xe),I.side=mo):_e(I,W,xe)}f=C.get(w),f.init(),g.push(f),w.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(d.physicallyCorrectLights),w.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let xe=0;xe<W.length;xe++){const me=W[xe];$(me,w,I)}else $(W,w,I)}),g.pop(),f=null};let X=null;function ee(w){X&&X(w)}function le(){Xe.stop()}function ge(){Xe.start()}const Xe=new oh;Xe.setAnimationLoop(ee),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){X=w,pe.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},pe.addEventListener("sessionstart",le),pe.addEventListener("sessionend",ge),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,O,v),f=C.get(w,g.length),f.init(),g.push(f),k.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(k),J=this.localClippingEnabled,N=b.init(this.clippingPlanes,J,O),h=_t.get(w,m.length),h.init(),m.push(h),et(w,O,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(q,F),N===!0&&b.beginShadows();const $=f.state.shadowsArray;if(K.render($,w,O),N===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(h,w),f.setupLights(d.physicallyCorrectLights),O.isArrayCamera){const I=O.cameras;for(let W=0,xe=I.length;W<xe;W++){const me=I[W];ht(h,w,me,me.viewport)}}else ht(h,w,O);v!==null&&(ve.updateMultisampleRenderTarget(v),ve.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(d,w,O),j.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function et(w,O,$,I){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){I&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);const me=Je.update(w),ye=w.material;ye.visible&&h.push(w,me,ye,$,te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==ke.render.frame&&(w.skeleton.update(),w.skeleton.frame=ke.render.frame),!w.frustumCulled||Z.intersectsObject(w))){I&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);const me=Je.update(w),ye=w.material;if(Array.isArray(ye)){const we=me.groups;for(let Ve=0,Ue=we.length;Ve<Ue;Ve++){const Ae=we[Ve],ze=ye[Ae.materialIndex];ze&&ze.visible&&h.push(w,me,ze,$,te.z,Ae)}}else ye.visible&&h.push(w,me,ye,$,te.z,null)}}const xe=w.children;for(let me=0,ye=xe.length;me<ye;me++)et(xe[me],O,$,I)}function ht(w,O,$,I){const W=w.opaque,xe=w.transmissive,me=w.transparent;f.setupLightsView($),xe.length>0&&Ne(W,O,$),I&&ue.viewport(E.copy(I)),W.length>0&&ae(W,O,$),xe.length>0&&ae(xe,O,$),me.length>0&&ae(me,O,$),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ne(w,O,$){const I=Ie.isWebGL2;P===null&&(P=new Mr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?js:vr,minFilter:$s,samples:I&&r===!0?4:0})),d.getDrawingBufferSize(Y),I?P.setSize(Y.x,Y.y):P.setSize(kl(Y.x),kl(Y.y));const W=d.getRenderTarget();d.setRenderTarget(P),d.clear();const xe=d.toneMapping;d.toneMapping=_i,ae(w,O,$),d.toneMapping=xe,ve.updateMultisampleRenderTarget(P),ve.updateRenderTargetMipmap(P),d.setRenderTarget(W)}function ae(w,O,$){const I=O.isScene===!0?O.overrideMaterial:null;for(let W=0,xe=w.length;W<xe;W++){const me=w[W],ye=me.object,we=me.geometry,Ve=I===null?me.material:I,Ue=me.group;ye.layers.test($.layers)&&re(ye,O,$,we,Ve,Ue)}}function re(w,O,$,I,W,xe){w.onBeforeRender(d,O,$,I,W,xe),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(d,O,$,I,w,xe),W.transparent===!0&&W.side===mo?(W.side=Fn,W.needsUpdate=!0,d.renderBufferDirect($,O,I,W,w,xe),W.side=xr,W.needsUpdate=!0,d.renderBufferDirect($,O,I,W,w,xe),W.side=mo):d.renderBufferDirect($,O,I,W,w,xe),w.onAfterRender(d,O,$,I,W,xe)}function _e(w,O,$){O.isScene!==!0&&(O=ne);const I=de.get(w),W=f.state.lights,xe=f.state.shadowsArray,me=W.state.version,ye=Le.getParameters(w,W.state,xe,O,$),we=Le.getProgramCacheKey(ye);let Ve=I.programs;I.environment=w.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(w.isMeshStandardMaterial?it:Ke).get(w.envMap||I.environment),Ve===void 0&&(w.addEventListener("dispose",Te),Ve=new Map,I.programs=Ve);let Ue=Ve.get(we);if(Ue!==void 0){if(I.currentProgram===Ue&&I.lightsStateVersion===me)return De(w,ye),Ue}else ye.uniforms=Le.getUniforms(w),w.onBuild($,ye,d),w.onBeforeCompile(ye,d),Ue=Le.acquireProgram(ye,we),Ve.set(we,Ue),I.uniforms=ye.uniforms;const Ae=I.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=b.uniform),De(w,ye),I.needsLights=Ge(w),I.lightsStateVersion=me,I.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.directionalShadowMap.value=W.state.directionalShadowMap,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotShadowMap.value=W.state.spotShadowMap,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMap.value=W.state.pointShadowMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix);const ze=Ue.getUniforms(),ct=Qo.seqWithValue(ze.seq,Ae);return I.currentProgram=Ue,I.uniformsList=ct,Ue}function De(w,O){const $=de.get(w);$.outputEncoding=O.outputEncoding,$.instancing=O.instancing,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Oe(w,O,$,I,W){O.isScene!==!0&&(O=ne),ve.resetTextureUnits();const xe=O.fog,me=I.isMeshStandardMaterial?O.environment:null,ye=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:yr,we=(I.isMeshStandardMaterial?it:Ke).get(I.envMap||me),Ve=I.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ue=!!I.normalMap&&!!$.attributes.tangent,Ae=!!$.morphAttributes.position,ze=!!$.morphAttributes.normal,ct=!!$.morphAttributes.color,ln=I.toneMapped?d.toneMapping:_i,jn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rt=jn!==void 0?jn.length:0,Fe=de.get(I),si=f.state.lights;if(N===!0&&(J===!0||w!==y)){const cn=w===y&&I.id===M;b.setState(I,w,cn)}let At=!1;I.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==si.state.version||Fe.outputEncoding!==ye||W.isInstancedMesh&&Fe.instancing===!1||!W.isInstancedMesh&&Fe.instancing===!0||W.isSkinnedMesh&&Fe.skinning===!1||!W.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==we||I.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==b.numPlanes||Fe.numIntersection!==b.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==Ue||Fe.morphTargets!==Ae||Fe.morphNormals!==ze||Fe.morphColors!==ct||Fe.toneMapping!==ln||Ie.isWebGL2===!0&&Fe.morphTargetsCount!==rt)&&(At=!0):(At=!0,Fe.__version=I.version);let Yi=Fe.currentProgram;At===!0&&(Yi=_e(I,O,W));let Gc=!1,vs=!1,Fa=!1;const Wt=Yi.getUniforms(),$i=Fe.uniforms;if(ue.useProgram(Yi.program)&&(Gc=!0,vs=!0,Fa=!0),I.id!==M&&(M=I.id,vs=!0),Gc||y!==w){if(Wt.setValue(B,"projectionMatrix",w.projectionMatrix),Ie.logarithmicDepthBuffer&&Wt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,vs=!0,Fa=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const cn=Wt.map.cameraPosition;cn!==void 0&&cn.setValue(B,te.setFromMatrixPosition(w.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Wt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&Wt.setValue(B,"viewMatrix",w.matrixWorldInverse)}if(W.isSkinnedMesh){Wt.setOptional(B,W,"bindMatrix"),Wt.setOptional(B,W,"bindMatrixInverse");const cn=W.skeleton;cn&&(Ie.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Wt.setValue(B,"boneTexture",cn.boneTexture,ve),Wt.setValue(B,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oa=$.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0&&Ie.isWebGL2===!0)&&Q.update(W,$,I,Yi),(vs||Fe.receiveShadow!==W.receiveShadow)&&(Fe.receiveShadow=W.receiveShadow,Wt.setValue(B,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&($i.envMap.value=we,$i.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),vs&&(Wt.setValue(B,"toneMappingExposure",d.toneMappingExposure),Fe.needsLights&&xt($i,Fa),xe&&I.fog===!0&&Ct.refreshFogUniforms($i,xe),Ct.refreshMaterialUniforms($i,I,z,D,P),Qo.upload(B,Fe.uniformsList,$i,ve)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Qo.upload(B,Fe.uniformsList,$i,ve),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Wt.setValue(B,"center",W.center),Wt.setValue(B,"modelViewMatrix",W.modelViewMatrix),Wt.setValue(B,"normalMatrix",W.normalMatrix),Wt.setValue(B,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const cn=I.uniformsGroups;for(let za=0,Wd=cn.length;za<Wd;za++)if(Ie.isWebGL2){const Vc=cn[za];Me.update(Vc,Yi),Me.bind(Vc,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function xt(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ge(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,O,$){de.get(w.texture).__webglTexture=O,de.get(w.depthTexture).__webglTexture=$;const I=de.get(w);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=$===void 0,I.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const $=de.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,$=0){v=w,_=O,S=$;let I=!0,W=null,xe=!1,me=!1;if(w){const we=de.get(w);we.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),I=!1):we.__webglFramebuffer===void 0?ve.setupRenderTarget(w):we.__hasExternalTextures&&ve.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const Ue=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(W=Ue[O],xe=!0):Ie.isWebGL2&&w.samples>0&&ve.useMultisampledRTT(w)===!1?W=de.get(w).__webglMultisampledFramebuffer:W=Ue,E.copy(w.viewport),A.copy(w.scissor),x=w.scissorTest}else E.copy(R).multiplyScalar(z).floor(),A.copy(U).multiplyScalar(z).floor(),x=G;if(ue.bindFramebuffer(36160,W)&&Ie.drawBuffers&&I&&ue.drawBuffers(w,W),ue.viewport(E),ue.scissor(A),ue.setScissorTest(x),xe){const we=de.get(w.texture);B.framebufferTexture2D(36160,36064,34069+O,we.__webglTexture,$)}else if(me){const we=de.get(w.texture),Ve=O||0;B.framebufferTextureLayer(36160,36064,we.__webglTexture,$||0,Ve)}M=-1},this.readRenderTargetPixels=function(w,O,$,I,W,xe,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){ue.bindFramebuffer(36160,ye);try{const we=w.texture,Ve=we.format,Ue=we.type;if(Ve!==qn&&he.convert(Ve)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Ue===js&&(fe.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Ue!==vr&&he.convert(Ue)!==B.getParameter(35738)&&!(Ue===or&&(Ie.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-I&&$>=0&&$<=w.height-W&&B.readPixels(O,$,I,W,he.convert(Ve),he.convert(Ue),xe)}finally{const we=v!==null?de.get(v).__webglFramebuffer:null;ue.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(w,O,$=0){const I=Math.pow(2,-$),W=Math.floor(O.image.width*I),xe=Math.floor(O.image.height*I);ve.setTexture2D(O,0),B.copyTexSubImage2D(3553,$,0,0,w.x,w.y,W,xe),ue.unbindTexture()},this.copyTextureToTexture=function(w,O,$,I=0){const W=O.image.width,xe=O.image.height,me=he.convert($.format),ye=he.convert($.type);ve.setTexture2D($,0),B.pixelStorei(37440,$.flipY),B.pixelStorei(37441,$.premultiplyAlpha),B.pixelStorei(3317,$.unpackAlignment),O.isDataTexture?B.texSubImage2D(3553,I,w.x,w.y,W,xe,me,ye,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(3553,I,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,me,O.mipmaps[0].data):B.texSubImage2D(3553,I,w.x,w.y,me,ye,O.image),I===0&&$.generateMipmaps&&B.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,O,$,I,W=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,me=w.max.y-w.min.y+1,ye=w.max.z-w.min.z+1,we=he.convert(I.format),Ve=he.convert(I.type);let Ue;if(I.isData3DTexture)ve.setTexture3D(I,0),Ue=32879;else if(I.isDataArrayTexture)ve.setTexture2DArray(I,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,I.flipY),B.pixelStorei(37441,I.premultiplyAlpha),B.pixelStorei(3317,I.unpackAlignment);const Ae=B.getParameter(3314),ze=B.getParameter(32878),ct=B.getParameter(3316),ln=B.getParameter(3315),jn=B.getParameter(32877),rt=$.isCompressedTexture?$.mipmaps[0]:$.image;B.pixelStorei(3314,rt.width),B.pixelStorei(32878,rt.height),B.pixelStorei(3316,w.min.x),B.pixelStorei(3315,w.min.y),B.pixelStorei(32877,w.min.z),$.isDataTexture||$.isData3DTexture?B.texSubImage3D(Ue,W,O.x,O.y,O.z,xe,me,ye,we,Ve,rt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ue,W,O.x,O.y,O.z,xe,me,ye,we,rt.data)):B.texSubImage3D(Ue,W,O.x,O.y,O.z,xe,me,ye,we,Ve,rt),B.pixelStorei(3314,Ae),B.pixelStorei(32878,ze),B.pixelStorei(3316,ct),B.pixelStorei(3315,ln),B.pixelStorei(32877,jn),W===0&&I.generateMipmaps&&B.generateMipmap(Ue),ue.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){_=0,S=0,v=null,ue.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Bx extends fh{}Bx.prototype.isWebGL1Renderer=!0;class Gx extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Vx extends uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ju=new Lt,Gl=new Kf,zo=new Ca,No=new V;class Wx extends rn{constructor(e=new bi,t=new Vx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;Ju.copy(i).invert(),Gl.copy(e.ray).applyMatrix4(Ju);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=f,d=m;g<d;g++){const p=c.getX(g);No.fromBufferAttribute(h,p),Qu(No,p,l,i,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let g=f,d=m;g<d;g++)No.fromBufferAttribute(h,g),Qu(No,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qu(a,e,t,n,i,r,s){const o=Gl.distanceSqToPoint(a);if(o<t){const l=new V;Gl.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Hx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ef(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);function fi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function hh(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},gc,Gt,yt,Ln=1e8,nt=1/Ln,Vl=Math.PI*2,Xx=Vl/4,qx=0,dh=Math.sqrt,Yx=Math.cos,$x=Math.sin,Rt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},vi=function(e){return typeof e=="number"},_c=function(e){return typeof e>"u"},ii=function(e){return typeof e=="object"},sn=function(e){return e!==!1},ph=function(){return typeof window<"u"},Uo=function(e){return pt(e)||Rt(e)},mh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Wl=/(?:-?\.?\d|\.)+/gi,gh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_h=/[+-]=-?[.\d]+/,xh=/[^,'"\[\]\s]+/gi,jx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Cn,Hl,xc,bn={},da={},vh,yh=function(e){return(da=Sr(e,bn))&&wn},vc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pa=function(e,t){return!t&&console.warn(e)},Mh=function(e,t){return e&&(bn[e]=t)&&da&&(da[e]=t)||bn},Ks=function(){return 0},Zx={suppressEvents:!0,isStart:!0,kill:!1},ea={suppressEvents:!0,kill:!1},Kx={suppressEvents:!0},yc={},Ni=[],Xl={},Sh,mn={},gl={},tf=30,ta=[],Mc="",Sc=function(e){var t=e[0],n,i;if(ii(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ta.length;i--&&!ta[i].targetTest(t););n=ta[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hh(e[i],n)))||e.splice(i,1);return e},hr=function(e){return e._gsap||Sc(Rn(e))[0]._gsap},bh=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():_c(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Jx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ma=function(){var e=Ni.length,t=Ni.slice(0),n,i;for(Xl={},Ni.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wh=function(e,t,n,i){Ni.length&&!Gt&&ma(),e.render(t,n,i||Gt&&t<0&&(e._initted||e._startAt)),Ni.length&&!Gt&&ma()},Th=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(xh).length<2?t:Rt(e)?e.trim():e},Eh=function(e){return e},zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Qx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Sr=function(e,t){for(var n in t)e[n]=t[n];return e},nf=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ii(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},ga=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ns=function(e){var t=e.parent||ut,n=e.keyframes?Qx(Vt(e.keyframes)):zn;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ev=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ch=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Pa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Vi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ql=function(e,t,n,i){return e._startAt&&(Gt?e._startAt.revert(ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},nv=function a(e){return!e||e._ts&&a(e.parent)},rf=function(e){return e._repeat?us(e._tTime,e=e.duration()+e._rDelay)*e:0},us=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},_a=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Da=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},La=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Da(e),n._dirty||dr(n,e)),e},Ah=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=_a(e.rawTime(),t),(!t._dur||ho(0,t.totalDuration(),n)-t._tTime>nt)&&t.render(n,!0)),dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nt}},Qn=function(e,t,n,i){return t.parent&&Vi(t),t._start=Ot((vi(n)?n:n||e!==ut?En(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ch(e,t,"_first","_last",e._sort?"_start":0),Yl(t)||(e._recent=t),i||Ah(e,t),e._ts<0&&La(e,e._tTime),e},Ph=function(e,t){return(bn.ScrollTrigger||vc("scrollTrigger",t))&&bn.ScrollTrigger.create(t,e)},Dh=function(e,t,n,i,r){if(wc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sh!==_n.frame)return Ni.push(e),e._lazy=[r,i],1},iv=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Yl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rv=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&iv(e)&&!(!e._initted&&Yl(e))||(e._ts<0||e._dp._ts<0)&&!Yl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ho(0,e._tDur,t),u=us(l,o),e._yoyo&&u&1&&(s=1-s),u!==us(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Gt||i||e._zTime===nt||!t&&e._zTime){if(!e._initted&&Dh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?nt:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&ql(e,t,n,!0),e._onUpdate&&!n&&In(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Vi(e,1),!n&&!Gt&&(In(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},fs=function(e,t,n,i){var r=e._repeat,s=Ot(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Ot(s*(r+1)+e._rDelay*r):s,o>0&&!i&&La(e,e._tTime=e._tDur*o),e.parent&&Da(e),n||dr(e.parent,e),e},sf=function(e){return e instanceof nn?dr(e):fs(e,e._dur)},ov={_start:0,endTime:Ks,totalDuration:Ks},En=function a(e,t,n){var i=e.labels,r=e._recent||ov,s=e.duration()>=Ln?r.endTime(!1):e._dur,o,l,c;return Rt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Vt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},Us=function(e,t,n){var i=vi(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;s.immediateRender=sn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new bt(t[0],s,t[r+1])},qi=function(e,t){return e||e===0?t(e):t},ho=function(e,t,n){return n<e?e:n>t?t:n},Bt=function(e,t){return!Rt(e)||!(t=jx.exec(e))?"":t[1]},av=function(e,t,n){return qi(n,function(i){return ho(e,t,i)})},$l=[].slice,Lh=function(e,t){return e&&ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ii(e[0]))&&!e.nodeType&&e!==Cn},lv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Rt(i)&&!t||Lh(i,1)?(r=n).push.apply(r,Rn(i)):n.push(i)})||n},Rn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Rt(e)&&!n&&(Hl||!hs())?$l.call((t||xc).querySelectorAll(e),0):Vt(e)?lv(e,n):Lh(e)?$l.call(e,0):e?[e]:[]},jl=function(e){return e=Rn(e)[0]||pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Rn(t,n.querySelectorAll?n:n===e?pa("Invalid scope")||xc.createElement("div"):e)}},Rh=function(e){return e.sort(function(){return .5-Math.random()})},Ih=function(e){if(pt(e))return e;var t=ii(e)?e:{each:e},n=pr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Rt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=s[d],_,S,v,M,y,E,A,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!T){for(A=-Ln;A<(A=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=s[d]=[],_=l?Math.min(T,d)*u-.5:i%T,S=T===Ln?0:l?d*h/T-.5:i/T|0,A=0,x=Ln,E=0;E<d;E++)v=E%T-_,M=S-(E/T|0),p[E]=y=c?Math.abs(c==="y"?M:v):dh(v*v+M*M),y>A&&(A=y),y<x&&(x=y);i==="random"&&Rh(p),p.max=A-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=Bt(t.amount||t.each)||0,n=n&&d<0?Gh(n):n}return d=(p[f]-p.min)/p.max||0,Ot(p.b+(n?n(d):d)*p.v)+p.u}},Zl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(vi(n)?0:Bt(n))}},Fh=function(e,t){var n=Vt(e),i,r;return!n&&ii(e)&&(i=n=e.radius||Ln,e.values?(e=Rn(e.values),(r=!vi(e[0]))&&(i*=i)):e=Zl(e.increment)),qi(t,n?pt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Ln,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-o,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||vi(s)?u:u+Bt(s)}:Zl(e))},Oh=function(e,t,n,i){return qi(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},uv=function(e,t){return function(n){return e(parseFloat(n))+(t||Bt(n))}},fv=function(e,t,n){return Nh(e,t,0,1,n)},zh=function(e,t,n){return qi(n,function(i){return e[~~t(i)]})},hv=function a(e,t,n){var i=t-e;return Vt(e)?zh(e,a(0,e.length),t):qi(n,function(r){return(i+(r-e)%i)%i+e})},dv=function a(e,t,n){var i=t-e,r=i*2;return Vt(e)?zh(e,a(0,e.length-1),t):qi(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Js=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?xh:Wl),n+=e.substr(t,i-t)+Oh(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Nh=function(e,t,n,i,r){var s=t-e,o=i-n;return qi(r,function(l){return n+((l-e)/s*o||0)})},pv=function a(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var s=Rt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=Sr(Vt(e)?[]:{},e));if(!u){for(l in t)bc.call(o,e,l,"get",t[l]);r=function(g){return Cc(g,o)||(s?e.p:e)}}}return qi(n,r)},of=function(e,t,n){var i=e.labels,r=Ln,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},In=function(e,t,n){var i=e.vars,r=i[t],s=yt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ni.length&&ma(),o&&(yt=o),u=l?r.apply(c,l):r.call(c),yt=s,u},Rs=function(e){return Vi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&In(e,"onInterrupt"),e},jr,mv=function(e){e=!e.name&&e.default||e;var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ks,render:Cc,add:bc,kill:Lv,modifier:Dv,rawVars:0},s={targetTest:0,get:0,getSetter:Ec,aliases:{},register:0};if(hs(),e!==i){if(mn[t])return;zn(i,zn(ga(e,r),s)),Sr(i.prototype,Sr(r,ga(e,s))),mn[i.prop=t]=i,e.targetTest&&(ta.push(i),yc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mh(t,i),e.register&&e.register(wn,i,an)},tt=255,Is={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},_l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},Uh=function(e,t,n){var i=e?vi(e)?[e>>16,e>>8&tt,e&tt]:0:Is.black,r,s,o,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Is[e])i=Is[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&tt,i&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Wl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=_l(l+1/3,r,s),i[1]=_l(l,r,s),i[2]=_l(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(gh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wl)||Is.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/tt,s=i[1]/tt,o=i[2]/tt,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(s-o)/m+(s<o?6:0):h===s?(o-r)/m+2:(r-s)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},kh=function(e){var t=[],n=[],i=-1;return e.split(Ui).forEach(function(r){var s=r.match($r)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},af=function(e,t,n){var i="",r=(e+i).match(Ui),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Uh(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=kh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ui,"1").split($r),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Ui),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Ui=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Is)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),gv=/hsl[a]?\(/,Bh=function(e){var t=e.join(" "),n;if(Ui.lastIndex=0,Ui.test(t))return n=gv.test(t),e[1]=af(e[1],n),e[0]=af(e[0],n,kh(e[1])),!0},Qs,_n=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,m,g=function d(p){var _=a()-i,S=p===!0,v,M,y,E;if(_>e&&(n+=_-t),i+=_,y=i-n,v=y-s,(v>0||S)&&(E=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,s+=v+(v>=r?4:r-v),M=1),S||(l=c(d)),M)for(m=0;m<o.length;m++)o[m](y,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){vh&&(!Hl&&ph()&&(Cn=Hl=window,xc=Cn.document||{},bn.gsap=wn,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(wn.version),yh(da||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),u=Cn.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,s-h.time*1e3+1|0)},Qs=1,g(2))},sleep:function(){(u?Cn.cancelAnimationFrame:clearTimeout)(l),Qs=0,c=Ks},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),s=h.time*1e3+r},add:function(p,_,S){var v=_?function(M,y,E,A){p(M,y,E,A),h.remove(v)}:p;return h.remove(p),o[S?"unshift":"push"](v),hs(),v},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&m>=_&&m--},_listeners:o},h}(),hs=function(){return!Qs&&_n.wake()},je={},_v=/^[\d.\-M][\d.\-,\s]/,xv=/["']/g,vv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(xv,"").trim():+c,i=l.substr(o+1).trim();return t},yv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Mv=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vv(t[1])]:yv(e).split(",").map(Th)):je._CE&&_v.test(e)?je._CE("",e):n},Gh=function(e){return function(t){return 1-e(1-t)}},Vh=function a(e,t){for(var n=e._first,i;n;)n instanceof nn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},pr=function(e,t){return e&&(pt(e)?e:je[e]||Mv(e))||t},Er=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return on(e,function(o){je[o]=bn[o]=r,je[s=o.toLowerCase()]=n;for(var l in r)je[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[o+"."+l]=r[l]}),r},Wh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xl=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Vl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*$x((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Wh(o);return r=Vl/r,l.config=function(c,u){return a(e,c,u)},l},vl=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Wh(n);return i.config=function(r){return a(e,r)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Er(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Er("Elastic",xl("in"),xl("out"),xl());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Er("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Er("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Er("Circ",function(a){return-(dh(1-a*a)-1)});Er("Sine",function(a){return a===1?1:-Yx(a*Xx)+1});Er("Back",vl("in"),vl("out"),vl());je.SteppedEase=je.steps=bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-nt;return function(o){return((i*ho(0,s,o)|0)+r)*n}}};cs.ease=je["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Mc+=a+","+a+"Params,"});var Hh=function(e,t){this.id=qx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bh,this.set=t?t.getSetter:Ec},ds=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fs(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),Qs||_n.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(hs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(La(this,n),!r._dp||r.parent||Ah(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?us(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?_a(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-nt?0:this._rts,this.totalTime(ho(-this._delay,this._tDur,i),!0),Da(this),tv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_a(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Kx);var i=Gt;return Gt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Gt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(En(this,n),sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,sn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-nt)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=pt(n)?n:Eh,o=function(){var c=i.then;i.then=null,pt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Rs(this)},a}();zn(ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var nn=function(a){hh(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=sn(n.sortChildren),ut&&Qn(n.parent||ut,fi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ph(fi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return Us(0,arguments,this),this},t.from=function(i,r,s){return Us(1,arguments,this),this},t.fromTo=function(i,r,s,o){return Us(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,Ns(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new bt(i,r,En(this,s),1),this},t.call=function(i,r,s){return Qn(this,bt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new bt(i,s,En(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,Ns(s).immediateRender=sn(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,Ns(o).immediateRender=sn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ot(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,S,v,M,y,E,A;if(this!==ut&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,v=this._ts,_=!v,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,s);if(f=Ot(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),y=us(this._tTime,p),!o&&this._tTime&&y!==d&&(y=d),E&&d&1&&(f=c-f,A=1),d!==y&&!this._lock){var x=E&&y&1,T=x===(E&&d&1);if(d<y&&(x=!x),o=x?0:c,this._lock=1,this.render(o||(A?0:Ot(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Vh(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=sv(this,Ot(o),Ot(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&(In(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,s),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=-nt);break}}m=g}else{m=this._last;for(var D=i<0?i:f;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,s||Gt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=D?-nt:nt);break}}m=g}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-nt)._zTime=f>=o?1:-1,this._ts))return this._start=M,Da(this),this.render(i,r,s);this._onUpdate&&!r&&In(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vi(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(In(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(vi(r)||(r=En(this,r,i)),!(i instanceof ds)){if(Vt(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Rt(i))return this.addLabel(i,r);if(pt(i))i=bt.delayedCall(0,i);else return this}return this!==i?Qn(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Ln);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof bt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Rt(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(Pa(this,i),i===this._recent&&(this._recent=this._last),dr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(_n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=En(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=bt.delayedCall(0,r||Ks,s);return o.data="isPause",this._hasPause=1,Qn(this,o,En(this,i))},t.removePause=function(i){var r=this._first;for(i=En(this,i);r;)r._start===i&&r.data==="isPause"&&Vi(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)Di!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Rn(i),l=this._first,c=vi(r),u;l;)l instanceof bt?Jx(l._targets,o)&&(c?(!Di||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=En(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=bt.to(s,zn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||nt,onStart:function(){if(s.pause(),!m){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==p&&fs(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,zn({startAt:{time:En(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),of(this,En(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),of(this,En(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return dr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),dr(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Ln,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Qn(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;fs(s,s===ut&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(ut._ts&&(wh(ut,_a(i,ut)),Sh=_n.frame),_n.frame>=tf){tf+=Sn.autoSleep||120;var r=ut._first;if((!r||!r._ts)&&Sn.autoSleep&&_n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||_n.sleep()}}},e}(ds);zn(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sv=function(e,t,n,i,r,s,o){var l=new an(this._pt,e,t,0,1,Zh,null,r),c=0,u=0,h,f,m,g,d,p,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Js(i)),s&&(S=[n,i],s(S,e,t),n=S[0],i=S[1]),f=n.match(ml)||[];h=ml.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?es(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ml.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(_h.test(i)||_)&&(l.e=0),this._pt=l,l},bc=function(e,t,n,i,r,s,o,l,c,u){pt(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:pt(h)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=pt(h)?c?Cv:$h:Tc,g;if(Rt(i)&&(~i.indexOf("random(")&&(i=Js(i)),i.charAt(1)==="="&&(g=es(f,i)+(Bt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Kl)return!isNaN(f*i)&&i!==""?(g=new an(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Pv:jh,0,m),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&vc(t,i),Sv.call(this,e,t,f,i,m,l||Sn.stringFilter,c))},bv=function(e,t,n,i,r){if(pt(e)&&(e=ks(e,r,t,n,i)),!ii(e)||e.style&&e.nodeType||Vt(e)||mh(e))return Rt(e)?ks(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=ks(e[o],r,t,n,i);return s},Xh=function(e,t,n,i,r,s){var o,l,c,u;if(mn[e]&&(o=new mn[e]).init(r,o.rawVars?t[e]:bv(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new an(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==jr))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Di,Kl,wc=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,S=e._targets,v=e.parent,M=v&&v.data==="nested"?v.vars.targets:S,y=e._overwrite==="auto"&&!gc,E=e.timeline,A,x,T,D,z,q,F,R,U,G,Z,N,J;if(E&&(!g||!r)&&(r="none"),e._ease=pr(r,cs.ease),e._yEase=m?Gh(pr(m===!0?r:m,cs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(R=S[0]?hr(S[0]).harness:0,N=R&&i[R.prop],A=ga(i,yc),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&p?ea:Zx),_._lazy=0),s){if(Vi(e._startAt=bt.set(S,zn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!_&&sn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!o&&!d)&&e._startAt.revert(ea),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!_){if(t&&(o=!1),T=zn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&sn(l),immediateRender:o,stagger:0,parent:v},A),N&&(T[R.prop]=N),Vi(e._startAt=bt.set(S,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(ea):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&sn(l)||l&&!p,x=0;x<S.length;x++){if(z=S[x],F=z._gsap||Sc(S)[x]._gsap,e._ptLookup[x]=G={},Xl[F.id]&&Ni.length&&ma(),Z=M===S?x:M.indexOf(z),R&&(U=new R).init(z,N||A,e,Z,M)!==!1&&(e._pt=D=new an(e._pt,z,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(P){G[P]=D}),U.priority&&(q=1)),!R||N)for(T in A)mn[T]&&(U=Xh(T,A,e,Z,z,M))?U.priority&&(q=1):G[T]=D=bc.call(e,z,T,"get",A[T],Z,M,0,i.stringFilter);e._op&&e._op[x]&&e.kill(z,e._op[x]),y&&e._pt&&(Di=e,ut.killTweensOf(z,G,e.globalTime(t)),J=!e.parent,Di=0),e._pt&&l&&(Xl[F.id]=1)}q&&Kh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&E.render(Ln,!0,!0)},wv=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Kl=1,e.vars[t]="+=0",wc(e,o),Kl=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=gt(n)+Bt(u.e)),u.b&&(u.b=c.s+Bt(u.b))},Tv=function(e,t){var n=e[0]?hr(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Sr({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},Ev=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(Vt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},ks=function(e,t,n,i,r){return pt(e)?e.call(t,n,i,r):Rt(e)&&~e.indexOf("random(")?Js(e):e},qh=Mc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yh={};on(qh+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Yh[a]=1});var bt=function(a){hh(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:Ns(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,S=i.parent||ut,v=(Vt(n)||mh(n)?vi(n[0]):"length"in i)?[n]:Rn(n),M,y,E,A,x,T,D,z;if(o._targets=v.length?Sc(v):pa("GSAP target "+n+" not found. https://greensock.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||Uo(c)||Uo(u)){if(i=o.vars,M=o.timeline=new nn({data:"nested",defaults:d||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=fi(o),M._start=0,f||Uo(c)||Uo(u)){if(A=v.length,D=f&&Ih(f),ii(f))for(x in f)~qh.indexOf(x)&&(z||(z={}),z[x]=f[x]);for(y=0;y<A;y++)E=ga(i,Yh),E.stagger=0,_&&(E.yoyoEase=_),z&&Sr(E,z),T=v[y],E.duration=+ks(c,fi(o),y,T,v),E.delay=(+ks(u,fi(o),y,T,v)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),M.to(T,E,D?D(y,T,v):0),M._ease=je.none;M.duration()?c=u=0:o.timeline=0}else if(g){Ns(zn(M.vars.defaults,{ease:"none"})),M._ease=pr(g.ease||i.ease||"none");var q=0,F,R,U;if(Vt(g))g.forEach(function(G){return M.to(v,G,">")}),M.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||Ev(x,g[x],E,g.easeEach);for(x in E)for(F=E[x].sort(function(G,Z){return G.t-Z.t}),q=0,y=0;y<F.length;y++)R=F[y],U={ease:R.e,duration:(R.t-(y?F[y-1].t:0))/100*c},U[x]=R.v,M.to(v,U,q),q+=U.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!gc&&(Di=fi(o),ut.killTweensOf(v),Di=0),Qn(S,fi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ot(S._time)&&sn(h)&&nv(fi(o))&&S.data!=="nested")&&(o._tTime=-nt,o.render(Math.max(0,-u)||0)),p&&Ph(fi(o),p),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-nt&&!u?l:i<nt?0:i,f,m,g,d,p,_,S,v,M;if(!c)rv(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,s);if(f=Ot(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(M=this._yEase,f=c-f),p=us(this._tTime,d),f===o&&!s&&this._initted)return this._tTime=h,this;g!==p&&(v&&this._yEase&&Vh(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(Ot(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Dh(this,u?i:f,s,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&(In(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;v&&v.render(i<0?i:!f&&_?-nt:v._dur*v._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ql(this,i,r,s),In(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&In(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ql(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vi(this,1),!r&&!(u&&!o)&&(h||o||_)&&(In(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o){Qs||_n.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||wc(this,l),c=this._ease(l/this._dur),wv(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(La(this,0),this.parent||Ch(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Rs(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Di&&Di.vars.overwrite!==!0)._first||Rs(this),this.parent&&s!==this.timeline.totalDuration()&&fs(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Rn(i):o,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&ev(o,l))return r==="all"&&(this._pt=0),Rs(this);for(h=this._op=this._op||[],r!=="all"&&(Rt(r)&&(d={},on(r,function(S){return d[S]=1}),r=d),r=Tv(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Pa(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Rs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Us(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return Us(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return ut.killTweensOf(i,r,s)},e}(ds);zn(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(a){bt[a]=function(){var e=new nn,t=$l.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Tc=function(e,t,n){return e[t]=n},$h=function(e,t,n){return e[t](n)},Cv=function(e,t,n,i){return e[t](i.fp,n)},Av=function(e,t,n){return e.setAttribute(t,n)},Ec=function(e,t){return pt(e[t])?$h:_c(e[t])&&e.setAttribute?Av:Tc},jh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Pv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Dv=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},Lv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Pa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Rv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kh=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},an=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||jh,this.d=l||this,this.set=c||Tc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Rv,this.m=n,this.mt=r,this.tween=i},a}();on(Mc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return yc[a]=1});bn.TweenMax=bn.TweenLite=bt;bn.TimelineLite=bn.TimelineMax=nn;ut=new nn({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=Bh;var ps=[],na={},Iv=[],lf=0,yl=function(e){return(na[e]||Iv).map(function(t){return t()})},Jl=function(){var e=Date.now(),t=[];e-lf>2&&(yl("matchMediaInit"),ps.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=Cn.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),yl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),lf=e,yl("matchMedia"))},Jh=function(){function a(t,n){this.selector=n&&jl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){pt(n)&&(r=i,i=n,n=pt);var s=this,o=function(){var c=yt,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=jl(r)),yt=s,h=i.apply(s,arguments),pt(h)&&s._r.push(h),yt=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===pt?o(s):n?s[n]=o:o},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof bt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ds)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=ps.indexOf(this);~o&&ps.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a}(),Fv=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){ii(n)||(n={matches:n});var s=new Jh(0,r||this.scope),o=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=Cn.matchMedia(n[c]),l&&(ps.indexOf(s)<0&&ps.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Jl):l.addEventListener("change",Jl)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return mv(i)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){Rt(e)&&(e=Rn(e)[0]);var r=hr(e||{}).get,s=n?Eh:Th;return n==="native"&&(n=""),e&&(t?s((mn[t]&&mn[t].get||r)(e,t,n,i)):function(o,l,c){return s((mn[o]&&mn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Rn(e),e.length>1){var i=e.map(function(u){return wn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=mn[t],o=hr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;jr._pt=0,h.init(e,n?u+n:u,jr,0,[e]),h.render(1,h),jr._pt&&Cc(1,jr)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=wn.to(e,Sr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=pr(e.ease,cs.ease)),nf(cs,e||{})},config:function(e){return nf(Sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!mn[o]&&!bn[o]&&pa(t+" effect requires "+o+" plugin.")}),gl[t]=function(o,l,c){return n(Rn(o),zn(l||{},r),c)},s&&(nn.prototype[t]=function(o,l,c){return this.add(gl[t](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=pr(t)},parseEase:function(e,t){return arguments.length?pr(e,t):je},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),i,r;for(n.smoothChildTiming=sn(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,i=ut._first;i;)r=i._next,(t||!(!i._dur&&i instanceof bt&&i.vars.onComplete===i._targets[0]))&&Qn(n,i,i._start-i._delay),i=r;return Qn(ut,n,0),n},context:function(e,t){return e?new Jh(e,t):yt},matchMedia:function(e){return new Fv(e)},matchMediaRefresh:function(){return ps.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Jl()},addEventListener:function(e,t){var n=na[e]||(na[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=na[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:hv,wrapYoyo:dv,distribute:Ih,random:Oh,snap:Fh,normalize:fv,getUnit:Bt,clamp:av,splitColor:Uh,toArray:Rn,selector:jl,mapRange:Nh,pipe:cv,unitize:uv,interpolate:pv,shuffle:Rh},install:yh,effects:gl,ticker:_n,updateRoot:nn.updateRoot,plugins:mn,globalTimeline:ut,core:{PropTween:an,globals:Mh,Tween:bt,Timeline:nn,Animation:ds,getCache:hr,_removeLinkedListItem:Pa,reverting:function(){return Gt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return gc=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return xa[a]=bt[a]});_n.add(nn.updateRoot);jr=xa.to({},{duration:0});var Ov=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zv=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Ov(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Ml=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Rt(r)&&(l={},on(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}zv(o,r)}}}},wn=xa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Gt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ml("roundProps",Zl),Ml("modifiers"),Ml("snap",Fh))||xa;bt.version=nn.version=wn.version="3.11.4";vh=1;ph()&&hs();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cf,Li,ts,Ac,ar,uf,Pc,Nv=function(){return typeof window<"u"},yi={},nr=180/Math.PI,ns=Math.PI/180,Gr=Math.atan2,ff=1e8,Dc=/([A-Z])/g,Uv=/(left|right|width|margin|padding|x)/i,kv=/[\s,\(]\S/,mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ql=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ed=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Wv=function(e,t,n){return e.style[t]=n},Hv=function(e,t,n){return e.style.setProperty(t,n)},Xv=function(e,t,n){return e._gsap[t]=n},qv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Yv=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},$v=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},ft="transform",$n=ft+"Origin",jv=function(e,t){var n=this,i=this.target,r=i.style;if(e in yi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=hi(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:hi(i,e)),this.props.indexOf(ft)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=ft}(r||t)&&this.props.push(e,t,r[e])},td=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Zv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(Dc,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Pc(),r&&!r.isStart&&!n[ft]&&(td(n),i.uncache=1)}},nd=function(e,t){var n={target:e,props:[],revert:Zv,save:jv};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},id,ec=function(e,t){var n=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return n.style?n:Li.createElement(e)},ti=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Dc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,ms(t)||t,1)||""},hf="O,Moz,ms,Ms,Webkit".split(","),ms=function(e,t,n){var i=t||ar,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(hf[s]+e in r););return s<0?null:(s===3?"ms":s>=0?hf[s]:"")+e},tc=function(){Nv()&&window.document&&(cf=window,Li=cf.document,ts=Li.documentElement,ar=ec("div")||{style:{}},ec("div"),ft=ms(ft),$n=ft+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",id=!!ms("perspective"),Pc=wn.core.reverting,Ac=1)},Sl=function a(e){var t=ec("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(ts.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ts.removeChild(t),this.style.cssText=r,s},df=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},rd=function(e){var t;try{t=e.getBBox()}catch{t=Sl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sl||(t=Sl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+df(e,["x","cx","x1"])||0,y:+df(e,["y","cy","y1"])||0,width:0,height:0}:t},sd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rd(e))},eo=function(e,t){if(t){var n=e.style;t in yi&&t!==$n&&(t=ft),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Dc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ri=function(e,t,n,i,r,s){var o=new an(e._pt,t,n,0,1,s?ed:Qh);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},pf={deg:1,rad:1,turn:1},Kv={grid:1,flex:1},Wi=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=ar.style,l=Uv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===s||!r||pf[i]||pf[s]?r:(s!=="px"&&!f&&(r=a(e,t,n,"px")),_=e.getCTM&&sd(e),(m||s==="%")&&(yi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],gt(m?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(f?s:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Li||!d.appendChild)&&(d=Li.body),p=d._gsap,p&&m&&p.width&&l&&p.time===_n.time&&!p.uncache?gt(r/p.width*h):((m||s==="%")&&!Kv[ti(d,"display")]&&(o.position=ti(e,"position")),d===e&&(o.position="static"),d.appendChild(ar),g=ar[u],d.removeChild(ar),o.position="absolute",l&&m&&(p=hr(d),p.time=_n.time,p.width=d[u]),gt(f?g*r/h:g&&r?h/g*r:0))))},hi=function(e,t,n,i){var r;return Ac||tc(),t in mi&&t!=="transform"&&(t=mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),yi[t]&&t!=="transform"?(r=no(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ya(ti(e,$n))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=va[t]&&va[t](e,t,n)||ti(e,t)||bh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Wi(e,t,r,n)+n:r},Jv=function(e,t,n,i){if(!n||n==="none"){var r=ms(t,e,1),s=r&&ti(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var o=new an(this._pt,e.style,t,0,1,Zh),l=0,c=0,u,h,f,m,g,d,p,_,S,v,M,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ti(e,t)||i,e.style[t]=n),u=[n,i],Bh(u),n=u[0],i=u[1],f=n.match($r)||[],y=i.match($r)||[],y.length){for(;h=$r.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,M=d.substr((m+"").length),p.charAt(1)==="="&&(p=es(m,p)+M),_=parseFloat(p),v=p.substr((_+"").length),l=$r.lastIndex-v.length,v||(v=v||Sn.units[t]||M,l===i.length&&(i+=v,o.e+=v)),M!==v&&(m=Wi(e,t,d,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?ed:Qh;return _h.test(i)&&(o.e=0),this._pt=o,o},mf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=mf[n]||n,t[1]=mf[i]||i,t.join(" ")},ey=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],yi[o]&&(l=1,o=o==="transformOrigin"?$n:ft),eo(n,o);l&&(eo(n,ft),s&&(s.svg&&n.removeAttribute("transform"),no(n,1),s.uncache=1,td(i)))}},va={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new an(e._pt,t,n,0,0,ey);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},to=[1,0,0,1,0,0],od={},ad=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},gf=function(e){var t=ti(e,ft);return ad(t)?to:t.substr(7).match(gh).map(gt)},Lc=function(e,t){var n=e._gsap||hr(e),i=e.style,r=gf(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?to:r):(r===to&&!e.offsetParent&&e!==ts&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ts.appendChild(e)),r=gf(e),l?i.display=l:eo(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):ts.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},nc=function(e,t,n,i,r,s){var o=e._gsap,l=r||Lc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],S=l[5],v=t.split(" "),M=parseFloat(v[0])||0,y=parseFloat(v[1])||0,E,A,x,T;n?l!==to&&(A=m*p-g*d)&&(x=M*(p/A)+y*(-d/A)+(d*S-p*_)/A,T=M*(-g/A)+y*(m/A)-(m*S-g*_)/A,M=x,y=T):(E=rd(e),M=E.x+(~v[0].indexOf("%")?M/100*E.width:M),y=E.y+(~(v[1]||v[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&o.smooth?(_=M-c,S=y-u,o.xOffset=h+(_*m+S*d)-_,o.yOffset=f+(_*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[$n]="0px 0px",s&&(Ri(s,o,"xOrigin",c,M),Ri(s,o,"yOrigin",u,y),Ri(s,o,"xOffset",h,o.xOffset),Ri(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},no=function(e,t){var n=e._gsap||new Hh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=ti(e,$n)||"0",u,h,f,m,g,d,p,_,S,v,M,y,E,A,x,T,D,z,q,F,R,U,G,Z,N,J,P,k,Y,te,ne,se;return u=h=f=d=p=_=S=v=M=0,m=g=1,n.svg=!!(e.getCTM&&sd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),i.scale=i.rotate=i.translate="none"),A=Lc(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),nc(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,E=n.yOrigin||0,A!==to&&(z=A[0],q=A[1],F=A[2],R=A[3],u=U=A[4],h=G=A[5],A.length===6?(m=Math.sqrt(z*z+q*q),g=Math.sqrt(R*R+F*F),d=z||q?Gr(q,z)*nr:0,S=F||R?Gr(F,R)*nr+d:0,S&&(g*=Math.abs(Math.cos(S*ns))),n.svg&&(u-=y-(y*z+E*F),h-=E-(y*q+E*R))):(se=A[6],te=A[7],P=A[8],k=A[9],Y=A[10],ne=A[11],u=A[12],h=A[13],f=A[14],x=Gr(se,Y),p=x*nr,x&&(T=Math.cos(-x),D=Math.sin(-x),Z=U*T+P*D,N=G*T+k*D,J=se*T+Y*D,P=U*-D+P*T,k=G*-D+k*T,Y=se*-D+Y*T,ne=te*-D+ne*T,U=Z,G=N,se=J),x=Gr(-F,Y),_=x*nr,x&&(T=Math.cos(-x),D=Math.sin(-x),Z=z*T-P*D,N=q*T-k*D,J=F*T-Y*D,ne=R*D+ne*T,z=Z,q=N,F=J),x=Gr(q,z),d=x*nr,x&&(T=Math.cos(x),D=Math.sin(x),Z=z*T+q*D,N=U*T+G*D,q=q*T-z*D,G=G*T-U*D,z=Z,U=N),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=gt(Math.sqrt(z*z+q*q+F*F)),g=gt(Math.sqrt(G*G+se*se)),x=Gr(U,G),S=Math.abs(x)>2e-4?x*nr:0,M=ne?1/(ne<0?-ne:ne):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ad(ti(e,ft)),Z&&e.setAttribute("transform",Z))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=gt(m),n.scaleY=gt(g),n.rotation=gt(d)+o,n.rotationX=gt(p)+o,n.rotationY=gt(_)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=M+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[$n]=ya(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?ny:id?ld:ty,n.uncache=0,n},ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},bl=function(e,t,n){var i=Bt(t);return gt(parseFloat(t)+parseFloat(Wi(e,"x",n+"px",i)))+i},ty=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ld(e,t)},Ji="0deg",Cs="0px",Qi=") ",ld=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,S=n.target,v=n.zOrigin,M="",y=_==="auto"&&e&&e!==1||_===!0;if(v&&(h!==Ji||u!==Ji)){var E=parseFloat(u)*ns,A=Math.sin(E),x=Math.cos(E),T;E=parseFloat(h)*ns,T=Math.cos(E),s=bl(S,s,A*T*-v),o=bl(S,o,-Math.sin(E)*-v),l=bl(S,l,x*T*-v+v)}p!==Cs&&(M+="perspective("+p+Qi),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||s!==Cs||o!==Cs||l!==Cs)&&(M+=l!==Cs||y?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Qi),c!==Ji&&(M+="rotate("+c+Qi),u!==Ji&&(M+="rotateY("+u+Qi),h!==Ji&&(M+="rotateX("+h+Qi),(f!==Ji||m!==Ji)&&(M+="skew("+f+", "+m+Qi),(g!==1||d!==1)&&(M+="scale("+g+", "+d+Qi),S.style[ft]=M||"translate(0, 0)"},ny=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,S=n.forceCSS,v=parseFloat(s),M=parseFloat(o),y,E,A,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ns,c*=ns,y=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=ns,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,E*=T)),y=gt(y),E=gt(E),A=gt(A),x=gt(x)):(y=h,x=f,E=A=0),(v&&!~(s+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=Wi(m,"x",s,"px"),M=Wi(m,"y",o,"px")),(g||d||p||_)&&(v=gt(v+g-(g*y+d*A)+p),M=gt(M+d-(g*E+d*x)+_)),(i||r)&&(T=m.getBBox(),v=gt(v+i/100*T.width),M=gt(M+r/100*T.height)),T="matrix("+y+","+E+","+A+","+x+","+v+","+M+")",m.setAttribute("transform",T),S&&(m.style[ft]=T)},iy=function(e,t,n,i,r){var s=360,o=Rt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?nr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*ff)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*ff)%s-~~(c/s)*s)),e._pt=f=new an(e._pt,t,n,i,c,Bv),f.e=u,f.u="deg",e._props.push(n),f},_f=function(e,t){for(var n in t)e[n]=t[n];return e},ry=function(e,t,n){var i=_f({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[ft]=t,o=no(n,1),eo(n,ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ft],s[ft]=t,o=no(n,1),s[ft]=c);for(l in yi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(m=Bt(c),g=Bt(u),h=m!==g?Wi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new an(e._pt,o,l,h,f-h,Ql),e._pt.u=g||0,e._props.push(l));_f(o,i)};on("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});va[e>1?"border"+a:a]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=s.map(function(g){return hi(o,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,m,h)}});var cd={name:"css",register:tc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,S,v,M,y,E,A,x;Ac||tc(),this.styles=this.styles||nd(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(mn[d]&&Xh(d,t,n,i,e,r)))){if(m=typeof u,g=va[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Js(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Ui.lastIndex=0,Ui.test(c)||(p=Bt(c),_=Bt(u)),_?p!==_&&(c=Wi(e,d,c,_)+_):p&&(u+=p),this.add(o,"setProperty",c,u,i,r,0,0,d),s.push(d),x.push(d,0,o[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],Rt(c)&&~c.indexOf("random(")&&(c=Js(c)),Bt(c+"")||(c+=Sn.units[d]||Bt(hi(e,d))||""),(c+"").charAt(1)==="="&&(c=hi(e,d))):c=hi(e,d),f=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),d in mi&&(d==="autoAlpha"&&(f===1&&hi(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,o.visibility),Ri(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=mi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in yi,v){if(this.styles.save(d),M||(y=e._gsap,y.renderTransform&&!t.parseTransform||no(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new an(this._pt,o,ft,0,1,y.renderTransform,y,0,-1),M.dep=1),d==="scale")this._pt=new an(this._pt,y,"scaleY",y.scaleY,(S?es(y.scaleY,S+h):h)-y.scaleY||0,Ql),this._pt.u=0,s.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push($n,0,o[$n]),u=Qv(u),y.svg?nc(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&Ri(this,y,"zOrigin",y.zOrigin,_),Ri(this,o,d,ya(c),ya(u)));continue}else if(d==="svgOrigin"){nc(e,u,1,E,0,this);continue}else if(d in od){iy(this,y,d,f,S?es(f,S+u):u);continue}else if(d==="smoothOrigin"){Ri(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){ry(this,u,e);continue}}else d in o||(d=ms(d)||d);if(v||(h||h===0)&&(f||f===0)&&!kv.test(u)&&d in o)p=(c+"").substr((f+"").length),h||(h=0),_=Bt(u)||(d in Sn.units?Sn.units[d]:p),p!==_&&(f=Wi(e,d,c,_)),this._pt=new an(this._pt,v?y:o,d,f,(S?es(f,S+h):h)-f,!v&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Vv:Ql),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Gv);else if(d in o)Jv.call(this,e,d,c,S?S+u:u);else if(d in e)this.add(e,d,c||e[d],S?S+u:u,i,r);else if(d!=="parseTransform"){vc(d,u);continue}v||(d in o?x.push(d,0,o[d]):x.push(d,1,c||e[d])),s.push(d)}}A&&Kh(this)},render:function(e,t){if(t.tween._time||!Pc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hi,aliases:mi,getSetter:function(e,t,n){var i=mi[t];return i&&i.indexOf(",")<0&&(t=i),t in yi&&t!==$n&&(e._gsap.x||hi(e,"x"))?n&&uf===n?t==="scale"?qv:Xv:(uf=n||{})&&(t==="scale"?Yv:$v):e.style&&!_c(e.style[t])?Wv:~t.indexOf("-")?Hv:Ec(e,t)},core:{_removeProperty:eo,_getMatrix:Lc}};wn.utils.checkPrefix=ms;wn.core.getStyleSaver=nd;(function(a,e,t,n){var i=on(a+","+e+","+t,function(r){yi[r]=1});on(e,function(r){Sn.units[r]="deg",od[r]=1}),mi[i[13]]=a+","+e,on(n,function(r){var s=r.split(":");mi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Sn.units[a]="px"});wn.registerPlugin(cd);var ri=wn.registerPlugin(cd)||wn;ri.core.Tween;function xf(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function sy(a,e,t){return e&&xf(a.prototype,e),t&&xf(a,t),a}/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nt,ic,xn,Ii,Fi,is,ud,ir,Bs,fd,gi,Bn,hd,dd=function(){return Nt||typeof window<"u"&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt},pd=1,Zr=[],qe=[],ni=[],Gs=Date.now,rc=function(e,t){return t},oy=function(){var e=Bs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,qe),i.push.apply(i,ni),qe=n,ni=i,rc=function(s,o){return t[s](o)}},ki=function(e,t){return~ni.indexOf(e)&&ni[ni.indexOf(e)+1][t]},Vs=function(e){return!!~fd.indexOf(e)},Qt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Xt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ko="scrollLeft",Bo="scrollTop",sc=function(){return gi&&gi.isPressed||qe.cache++},Ma=function(e,t){var n=function i(r){if(r||r===0){pd&&(xn.history.scrollRestoration="manual");var s=gi&&gi.isPressed;r=i.v=Math.round(r)||(gi&&gi.iOS?1:0),e(r),i.cacheID=qe.cache,s&&rc("ss",r)}else(t||qe.cache!==i.cacheID||rc("ref"))&&(i.cacheID=qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Zt={s:ko,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ma(function(a){return arguments.length?xn.scrollTo(a,wt.sc()):xn.pageXOffset||Ii[ko]||Fi[ko]||is[ko]||0})},wt={s:Bo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Zt,sc:Ma(function(a){return arguments.length?xn.scrollTo(Zt.sc(),a):xn.pageYOffset||Ii[Bo]||Fi[Bo]||is[Bo]||0})},en=function(e){return Nt.utils.toArray(e)[0]||(typeof e=="string"&&Nt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hi=function(e,t){var n=t.s,i=t.sc;Vs(e)&&(e=Ii.scrollingElement||Fi);var r=qe.indexOf(e),s=i===wt.sc?1:2;!~r&&(r=qe.push(e)-1),qe[r+s]||e.addEventListener("scroll",sc);var o=qe[r+s],l=o||(qe[r+s]=Ma(ki(e,n),!0)||(Vs(e)?i:Ma(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Nt.getProperty(e,"scrollBehavior")==="smooth"),l},oc=function(e,t,n){var i=e,r=e,s=Gs(),o=s,l=t||50,c=Math.max(500,l*3),u=function(g,d){var p=Gs();d||p-s>l?(r=i,i=g,o=s,s=p):n?i+=g:i=r+(g-r)/(p-o)*(s-o)},h=function(){r=i=n?0:i,o=s=0},f=function(g){var d=o,p=r,_=Gs();return(g||g===0)&&g!==i&&u(g),s===o||_-o>c?0:(i+(n?p:-p))/((n?_:s)-d)*1e3};return{update:u,reset:h,getVelocity:f}},As=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},vf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},md=function(){Bs=Nt.core.globals().ScrollTrigger,Bs&&Bs.core&&oy()},gd=function(e){return Nt=e||dd(),Nt&&typeof document<"u"&&document.body&&(xn=window,Ii=document,Fi=Ii.documentElement,is=Ii.body,fd=[xn,Ii,Fi,is],Nt.utils.clamp,hd=Nt.core.context||function(){},ir="onpointerenter"in is?"pointer":"mouse",ud=Mt.isTouch=xn.matchMedia&&xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bn=Mt.eventTypes=("ontouchstart"in Fi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return pd=0},500),md(),ic=1),ic};Zt.op=wt;qe.cache=0;var Mt=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){ic||gd(Nt)||console.warn("Please gsap.registerPlugin(Observer)"),Bs||md();var i=n.tolerance,r=n.dragMinimum,s=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,_=n.onDragEnd,S=n.onDrag,v=n.onPress,M=n.onRelease,y=n.onRight,E=n.onLeft,A=n.onUp,x=n.onDown,T=n.onChangeX,D=n.onChangeY,z=n.onChange,q=n.onToggleX,F=n.onToggleY,R=n.onHover,U=n.onHoverEnd,G=n.onMove,Z=n.ignoreCheck,N=n.isNormalizer,J=n.onGestureStart,P=n.onGestureEnd,k=n.onWheel,Y=n.onEnable,te=n.onDisable,ne=n.onClick,se=n.scrollSpeed,B=n.capture,Re=n.allowClicks,fe=n.lockAxis,Ie=n.onLockAxis;this.target=o=en(o)||Fi,this.vars=n,m&&(m=Nt.utils.toArray(m)),i=i||1e-9,r=r||0,g=g||1,se=se||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xn.getComputedStyle(is).lineHeight)||22);var ue,ke,de,ve,Ke,it,Ze,H=this,Je=0,Le=0,Ct=Hi(o,Zt),_t=Hi(o,wt),C=Ct(),b=_t(),K=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Bn[0]==="pointerdown",ie=Vs(o),Q=o.ownerDocument||Ii,oe=[0,0,0],be=[0,0,0],he=0,j=function(){return he=Gs()},Me=function(ae,re){return(H.event=ae)&&m&&~m.indexOf(ae.target)||re&&K&&ae.pointerType!=="touch"||Z&&Z(ae,re)},Pe=function(){H._vx.reset(),H._vy.reset(),ke.pause(),h&&h(H)},pe=function(){var ae=H.deltaX=vf(oe),re=H.deltaY=vf(be),_e=Math.abs(ae)>=i,De=Math.abs(re)>=i;z&&(_e||De)&&z(H,ae,re,oe,be),_e&&(y&&H.deltaX>0&&y(H),E&&H.deltaX<0&&E(H),T&&T(H),q&&H.deltaX<0!=Je<0&&q(H),Je=H.deltaX,oe[0]=oe[1]=oe[2]=0),De&&(x&&H.deltaY>0&&x(H),A&&H.deltaY<0&&A(H),D&&D(H),F&&H.deltaY<0!=Le<0&&F(H),Le=H.deltaY,be[0]=be[1]=be[2]=0),(ve||de)&&(G&&G(H),de&&(S(H),de=!1),ve=!1),it&&!(it=!1)&&Ie&&Ie(H),Ke&&(k(H),Ke=!1),ue=0},Ee=function(ae,re,_e){oe[_e]+=ae,be[_e]+=re,H._vx.update(ae),H._vy.update(re),c?ue||(ue=requestAnimationFrame(pe)):pe()},Se=function(ae,re){fe&&!Ze&&(H.axis=Ze=Math.abs(ae)>Math.abs(re)?"x":"y",it=!0),Ze!=="y"&&(oe[2]+=ae,H._vx.update(ae,!0)),Ze!=="x"&&(be[2]+=re,H._vy.update(re,!0)),c?ue||(ue=requestAnimationFrame(pe)):pe()},Be=function(ae){if(!Me(ae,1)){ae=As(ae,u);var re=ae.clientX,_e=ae.clientY,De=re-H.x,Oe=_e-H.y,xt=H.isDragging;H.x=re,H.y=_e,(xt||Math.abs(H.startX-re)>=r||Math.abs(H.startY-_e)>=r)&&(S&&(de=!0),xt||(H.isDragging=!0),Se(De,Oe),xt||p&&p(H))}},Te=H.onPress=function(Ne){Me(Ne,1)||(H.axis=Ze=null,ke.pause(),H.isPressed=!0,Ne=As(Ne),Je=Le=0,H.startX=H.x=Ne.clientX,H.startY=H.y=Ne.clientY,H._vx.reset(),H._vy.reset(),Qt(N?o:Q,Bn[1],Be,u,!0),H.deltaX=H.deltaY=0,v&&v(H))},Qe=function(ae){if(!Me(ae,1)){Xt(N?o:Q,Bn[1],Be,!0);var re=!isNaN(H.y-H.startY),_e=H.isDragging&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),De=As(ae);!_e&&re&&(H._vx.reset(),H._vy.reset(),u&&Re&&Nt.delayedCall(.08,function(){if(Gs()-he>300&&!ae.defaultPrevented){if(ae.target.click)ae.target.click();else if(Q.createEvent){var Oe=Q.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,xn,1,De.screenX,De.screenY,De.clientX,De.clientY,!1,!1,!1,!1,0,null),ae.target.dispatchEvent(Oe)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&!N&&ke.restart(!0),_&&_e&&_(H),M&&M(H,_e)}},L=function(ae){return ae.touches&&ae.touches.length>1&&(H.isGesturing=!0)&&J(ae,H.isDragging)},X=function(){return(H.isGesturing=!1)||P(H)},ee=function(ae){if(!Me(ae)){var re=Ct(),_e=_t();Ee((re-C)*se,(_e-b)*se,1),C=re,b=_e,h&&ke.restart(!0)}},le=function(ae){if(!Me(ae)){ae=As(ae,u),k&&(Ke=!0);var re=(ae.deltaMode===1?l:ae.deltaMode===2?xn.innerHeight:1)*g;Ee(ae.deltaX*re,ae.deltaY*re,0),h&&!N&&ke.restart(!0)}},ge=function(ae){if(!Me(ae)){var re=ae.clientX,_e=ae.clientY,De=re-H.x,Oe=_e-H.y;H.x=re,H.y=_e,ve=!0,(De||Oe)&&Se(De,Oe)}},Xe=function(ae){H.event=ae,R(H)},et=function(ae){H.event=ae,U(H)},ht=function(ae){return Me(ae)||As(ae,u)&&ne(H)};ke=H._dc=Nt.delayedCall(f||.25,Pe).pause(),H.deltaX=H.deltaY=0,H._vx=oc(0,50,!0),H._vy=oc(0,50,!0),H.scrollX=Ct,H.scrollY=_t,H.isDragging=H.isGesturing=H.isPressed=!1,hd(this),H.enable=function(Ne){return H.isEnabled||(Qt(ie?Q:o,"scroll",sc),s.indexOf("scroll")>=0&&Qt(ie?Q:o,"scroll",ee,u,B),s.indexOf("wheel")>=0&&Qt(o,"wheel",le,u,B),(s.indexOf("touch")>=0&&ud||s.indexOf("pointer")>=0)&&(Qt(o,Bn[0],Te,u,B),Qt(Q,Bn[2],Qe),Qt(Q,Bn[3],Qe),Re&&Qt(o,"click",j,!1,!0),ne&&Qt(o,"click",ht),J&&Qt(Q,"gesturestart",L),P&&Qt(Q,"gestureend",X),R&&Qt(o,ir+"enter",Xe),U&&Qt(o,ir+"leave",et),G&&Qt(o,ir+"move",ge)),H.isEnabled=!0,Ne&&Ne.type&&Te(Ne),Y&&Y(H)),H},H.disable=function(){H.isEnabled&&(Zr.filter(function(Ne){return Ne!==H&&Vs(Ne.target)}).length||Xt(ie?Q:o,"scroll",sc),H.isPressed&&(H._vx.reset(),H._vy.reset(),Xt(N?o:Q,Bn[1],Be,!0)),Xt(ie?Q:o,"scroll",ee,B),Xt(o,"wheel",le,B),Xt(o,Bn[0],Te,B),Xt(Q,Bn[2],Qe),Xt(Q,Bn[3],Qe),Xt(o,"click",j,!0),Xt(o,"click",ht),Xt(Q,"gesturestart",L),Xt(Q,"gestureend",X),Xt(o,ir+"enter",Xe),Xt(o,ir+"leave",et),Xt(o,ir+"move",ge),H.isEnabled=H.isPressed=H.isDragging=!1,te&&te(H))},H.kill=H.revert=function(){H.disable();var Ne=Zr.indexOf(H);Ne>=0&&Zr.splice(Ne,1),gi===H&&(gi=0)},Zr.push(H),N&&Vs(o)&&(gi=H),H.enable(d)},sy(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();Mt.version="3.11.4";Mt.create=function(a){return new Mt(a)};Mt.register=gd;Mt.getAll=function(){return Zr.slice()};Mt.getById=function(a){return Zr.filter(function(e){return e.vars.id===a})[0]};dd()&&Nt.registerPlugin(Mt);/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,Xr,$e,lt,Hn,dt,_d,Sa,ba,Kr,ia,Go,kt,Ra,ac,Yt,yf,Mf,qr,xd,wl,vd,dn,yd,Md,Sd,Ai,lc,Rc,Tl,Vo=1,jt=Date.now,El=jt(),On=0,Wo=0,Sf=function(){return Ra=1},bf=function(){return Ra=0},Kn=function(e){return e},Fs=function(e){return Math.round(e*1e5)/1e5||0},bd=function(){return typeof window<"u"},wd=function(){return Ce||bd()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},br=function(e){return!!~_d.indexOf(e)},Td=function(e){return ki(e,"getBoundingClientRect")||(br(e)?function(){return ca.width=$e.innerWidth,ca.height=$e.innerHeight,ca}:function(){return pi(e)})},ay=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=ki(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?$e["inner"+r]:e["client"+r])||0}},ly=function(e,t){return!t||~ni.indexOf(e)?Td(e):function(){return ca}},Oi=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return(n="scroll"+i)&&(s=ki(e,n))?s()-Td(e)()[r]:br(e)?(Hn[n]||dt[n])-($e["inner"+i]||Hn["client"+i]||dt["client"+i]):e[n]-e["offset"+i]},Ho=function(e,t){for(var n=0;n<qr.length;n+=3)(!t||~t.indexOf(qr[n+1]))&&e(qr[n],qr[n+1],qr[n+2])},Gn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},Os=function(e){return typeof e=="number"},ra=function(e){return typeof e=="object"},Ps=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Cl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Vr=Math.abs,Ed="left",Cd="top",Ic="right",Fc="bottom",mr="width",gr="height",Ws="Right",Hs="Left",Xs="Top",qs="Bottom",mt="padding",Dn="margin",gs="Width",Oc="Height",It="px",Yn=function(e){return $e.getComputedStyle(e)},cy=function(e){var t=Yn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pi=function(e,t){var n=t&&Yn(e)[ac]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},cc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ad=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},uy=function(e){return function(t){return Ce.utils.snap(Ad(e),t)}},zc=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var o;if(!r)return t(i);if(r>0){for(i-=s,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=s;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var o=t(i);return!r||Math.abs(o-i)<s||o-i<0==r<0?o:t(r<0?i-e:i+e)}},fy=function(e){return function(t,n){return zc(Ad(e))(t,n.direction)}},Xo=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ft=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Dt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qo=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},Tf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yo={toggleActions:"play",anticipatePin:0},wa={top:0,left:0,center:.5,bottom:1,right:1},sa=function(e,t){if(Gn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in wa?wa[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$o=function(e,t,n,i,r,s,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,m=r.fontWeight,g=lt.createElement("div"),d=br(n)||ki(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=d?dt:n,S=e.indexOf("start")!==-1,v=S?c:u,M="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(M+=(i===wt?Ic:Fc)+":"+(s+parseFloat(f))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],oa(g,0,i,S),g},oa=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+gs]=1,r["border"+o+gs]=0,r[n.p]=t+"px",Ce.set(e,r)},He=[],uc={},io,Ef=function(){return jt()-On>34&&(io||(io=requestAnimationFrame(Xi)))},Wr=function(){(!dn||!dn.isPressed||dn.startX>dt.clientWidth)&&(qe.cache++,dn?io||(io=requestAnimationFrame(Xi)):Xi(),On||Tr("scrollStart"),On=jt())},Al=function(){Sd=$e.innerWidth,Md=$e.innerHeight},zs=function(){qe.cache++,!kt&&!vd&&!lt.fullscreenElement&&!lt.webkitFullscreenElement&&(!yd||Sd!==$e.innerWidth||Math.abs($e.innerHeight-Md)>$e.innerHeight*.25)&&Sa.restart(!0)},wr={},hy=[],Pd=function a(){return Dt(Ye,"scrollEnd",a)||lr(!0)},Tr=function(e){return wr[e]&&wr[e].map(function(t){return t()})||hy},pn=[],Dd=function(e){for(var t=0;t<pn.length;t+=5)(!e||pn[t+4]&&pn[t+4].query===e)&&(pn[t].style.cssText=pn[t+1],pn[t].getBBox&&pn[t].setAttribute("transform",pn[t+2]||""),pn[t+3].uncache=1)},Nc=function(e,t){var n;for(Yt=0;Yt<He.length;Yt++)n=He[Yt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Dd(t),t||Tr("revert")},Ld=function(e,t){qe.cache++,(t||!Vn)&&qe.forEach(function(n){return Kt(n)&&n.cacheID++&&(n.rec=0)}),Gn(e)&&($e.history.scrollRestoration=Rc=e)},Vn,_r=0,Cf,dy=function(){if(Cf!==_r){var e=Cf=_r;requestAnimationFrame(function(){return e===_r&&lr(!0)})}},lr=function(e,t){if(On&&!e){Ft(Ye,"scrollEnd",Pd);return}Vn=Ye.isRefreshing=!0,qe.forEach(function(i){return Kt(i)&&i.cacheID++&&(i.rec=i())});var n=Tr("refreshInit");xd&&Ye.sort(),t||Nc(),qe.forEach(function(i){Kt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),He.slice(0).forEach(function(i){return i.refresh()}),He.forEach(function(i,r){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.revert(!1,1)}}),He.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Oi(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),qe.forEach(function(i){Kt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ld(Rc,1),Sa.pause(),_r++,Xi(2),He.forEach(function(i){return Kt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Vn=Ye.isRefreshing=!1,Tr("refresh")},Af=0,aa=1,Ys,Xi=function(e){if(!Vn||e===2){Ye.isUpdating=!0,Ys&&Ys.update(0);var t=He.length,n=jt(),i=n-El>=50,r=t&&He[0].scroll();if(aa=Af>r?-1:1,Af=r,i&&(On&&!Ra&&n-On>200&&(On=0,Tr("scrollEnd")),ia=El,El=n),aa<0){for(Yt=t;Yt-- >0;)He[Yt]&&He[Yt].update(0,i);aa=1}else for(Yt=0;Yt<t;Yt++)He[Yt]&&He[Yt].update(0,i);Ye.isUpdating=!1}io=0},fc=[Ed,Cd,Fc,Ic,Dn+qs,Dn+Ws,Dn+Xs,Dn+Hs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],la=fc.concat([mr,gr,"boxSizing","max"+gs,"max"+Oc,"position",Dn,mt,mt+Xs,mt+Ws,mt+qs,mt+Hs]),py=function(e,t,n){rs(n);var i=e._gsap;if(i.spacerIsNative)rs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Pl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=fc.length,s=t.style,o=e.style,l;r--;)l=fc[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[Fc]=o[Ic]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[mr]=cc(e,Zt)+It,s[gr]=cc(e,wt)+It,s[mt]=o[Dn]=o[Cd]=o[Ed]="0",rs(i),o[mr]=o["max"+gs]=n[mr],o[gr]=o["max"+Oc]=n[gr],o[mt]=n[mt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},my=/([A-Z])/g,rs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(my,"-$1").toLowerCase())}},jo=function(e){for(var t=la.length,n=e.style,i=[],r=0;r<t;r++)i.push(la[r],n[la[r]]);return i.t=e,i},gy=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,o;s<r;s+=2)o=e[s],i.push(o,o in t?t[o]:e[s+1]);return i.t=e.t,i},ca={left:0,top:0},Pf=function(e,t,n,i,r,s,o,l,c,u,h,f,m){Kt(e)&&(e=e(l)),Gn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?sa("0"+e.substr(3),n):0));var g=m?m.time():0,d,p,_;if(m&&m.seek(0),Os(e))o&&oa(o,n,i,!0);else{Kt(t)&&(t=t(l));var S=(e||"0").split(" "),v,M,y,E;_=en(t)||dt,v=pi(_)||{},(!v||!v.left&&!v.top)&&Yn(_).display==="none"&&(E=_.style.display,_.style.display="block",v=pi(_),E?_.style.display=E:_.style.removeProperty("display")),M=sa(S[0],v[i.d]),y=sa(S[1]||"0",n),e=v[i.p]-c[i.p]-u+M+r-y,o&&oa(o,y,i,n-y<20||o._isStart&&y>20),n-=n-y}if(s){var A=e+n,x=s._isStart;d="scroll"+i.d2,oa(s,A,i,x&&A>20||!x&&(h?Math.max(dt[d],Hn[d]):s.parentNode[d])<=A+1),h&&(c=pi(o),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+It))}return m&&_&&(d=pi(_),m.seek(f),p=pi(_),m._caScrollDist=d[i.p]-p[i.p],e=e/m._caScrollDist*f),m&&m.seek(g),m?e:Math.round(e)},_y=/(webkit|moz|length|cssText|inset)/i,Df=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,o;if(t===dt){e._stOrig=r.cssText,o=Yn(e);for(s in o)!+s&&!_y.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},Lf=function(e,t){var n=Hi(e,t),i="_scroll"+t.p2,r,s,o=function l(c,u,h,f,m){var g=l.tween,d=u.onComplete,p={};return h=h||n(),m=f&&m||0,f=f||c-h,g&&g.kill(),r=Math.round(h),u[i]=c,u.modifiers=p,p[i]=function(_){return _=Math.round(n()),_!==r&&_!==s&&Math.abs(_-r)>3&&Math.abs(_-s)>3?(g.kill(),l.tween=0):_=h+f*g.ratio+m*g.ratio*g.ratio,s=r,r=Math.round(_)},u.onUpdate=function(){qe.cache++,Xi()},u.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Ce.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Ft(e,"wheel",n.wheelHandler),o},Ye=function(){function a(t,n){Xr||a.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wo){this.update=this.refresh=this.kill=Kn;return}n=wf(Gn(n)||Os(n)||n.nodeType?{trigger:n}:n,Yo);var r=n,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,m=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,p=r.anticipatePin,_=r.onScrubComplete,S=r.onSnapComplete,v=r.once,M=r.snap,y=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,x=r.fastScrollEnd,T=r.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Zt:wt,z=!h&&h!==0,q=en(n.scroller||$e),F=Ce.core.getCache(q),R=br(q),U=("pinType"in n?n.pinType:ki(q,"pinType")||R&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=z&&n.toggleActions.split(" "),N="markers"in n?n.markers:Yo.markers,J=R?0:parseFloat(Yn(q)["border"+D.p2+gs])||0,P=this,k=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Y=ay(q,R,D),te=ly(q,R),ne=0,se=0,B=Hi(q,D),Re,fe,Ie,ue,ke,de,ve,Ke,it,Ze,H,Je,Le,Ct,_t,C,b,K,ie,Q,oe,be,he,j,Me,Pe,pe,Ee,Se,Be,Te,Qe,L,X,ee,le,ge,Xe,et;if(lc(P),P._dir=D,p*=45,P.scroller=q,P.scroll=A?A.time.bind(A):B,ue=B(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(xd=1,n.refreshPriority===-9999&&(Ys=P)),F.tweenScroll=F.tweenScroll||{top:Lf(q,wt),left:Lf(q,Zt)},P.tweenTo=Re=F.tweenScroll[D.p],P.scrubDuration=function(re){Qe=Os(re)&&re,Qe?Te?Te.duration(re):Te=Ce.to(i,{ease:"expo",totalProgress:"+=0.001",duration:Qe,paused:!0,onComplete:function(){return _&&_(P)}}):(Te&&Te.progress(1).kill(),Te=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),Se=0,l||(l=i.vars.id)),He.push(P),M&&((!ra(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in dt.style&&Ce.set(R?[dt,Hn]:q,{scrollBehavior:"auto"}),qe.forEach(function(re){return Kt(re)&&re.target===(R?lt.scrollingElement||Hn:q)&&(re.smooth=!1)}),Ie=Kt(M.snapTo)?M.snapTo:M.snapTo==="labels"?uy(i):M.snapTo==="labelsDirectional"?fy(i):M.directional!==!1?function(re,_e){return zc(M.snapTo)(re,jt()-se<500?0:_e.direction)}:Ce.utils.snap(M.snapTo),L=M.duration||{min:.1,max:2},L=ra(L)?Kr(L.min,L.max):Kr(L,L),X=Ce.delayedCall(M.delay||Qe/2||.1,function(){var re=B(),_e=jt()-se<500,De=Re.tween;if((_e||Math.abs(P.getVelocity())<10)&&!De&&!Ra&&ne!==re){var Oe=(re-de)/Le,xt=i&&!z?i.totalProgress():Oe,Ge=_e?0:(xt-Be)/(jt()-ia)*1e3||0,w=Ce.utils.clamp(-Oe,1-Oe,Vr(Ge/2)*Ge/.185),O=Oe+(M.inertia===!1?0:w),$=Kr(0,1,Ie(O,P)),I=Math.round(de+$*Le),W=M,xe=W.onStart,me=W.onInterrupt,ye=W.onComplete;if(re<=ve&&re>=de&&I!==re){if(De&&!De._initted&&De.data<=Vr(I-re))return;M.inertia===!1&&(w=$-Oe),Re(I,{duration:L(Vr(Math.max(Vr(O-xt),Vr($-xt))*.185/Ge/.05||0)),ease:M.ease||"power3",data:Vr(I-re),onInterrupt:function(){return X.restart(!0)&&me&&me(P)},onComplete:function(){P.update(),ne=B(),Se=Be=i&&!z?i.totalProgress():P.progress,S&&S(P),ye&&ye(P)}},re,w*Le,I-re-w*Le),xe&&xe(P,Re.tween)}}else P.isActive&&ne!==re&&X.restart(!0)}).pause()),l&&(uc[l]=P),f=P.trigger=en(f||m),et=f&&f._gsap&&f._gsap.stRevert,et&&(et=et(P)),m=m===!0?f:en(m),Gn(o)&&(o={targets:f,className:o}),m&&(g===!1||g===Dn||(g=!g&&m.parentNode&&m.parentNode.style&&Yn(m.parentNode).display==="flex"?!1:mt),P.pin=m,fe=Ce.core.getCache(m),fe.spacer?Ct=fe.pinState:(E&&(E=en(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),fe.spacerIsNative=!!E,E&&(fe.spacerState=jo(E))),fe.spacer=b=E||lt.createElement("div"),b.classList.add("pin-spacer"),l&&b.classList.add("pin-spacer-"+l),fe.pinState=Ct=jo(m)),n.force3D!==!1&&Ce.set(m,{force3D:!0}),P.spacer=b=fe.spacer,Ee=Yn(m),he=Ee[g+D.os2],ie=Ce.getProperty(m),Q=Ce.quickSetter(m,D.a,It),Pl(m,b,Ee),C=jo(m)),N){Je=ra(N)?wf(N,Tf):Tf,Ze=$o("scroller-start",l,q,D,Je,0),H=$o("scroller-end",l,q,D,Je,0,Ze),K=Ze["offset"+D.op.d2];var ht=en(ki(q,"content")||q);Ke=this.markerStart=$o("start",l,ht,D,Je,K,0,A),it=this.markerEnd=$o("end",l,ht,D,Je,K,0,A),A&&(Xe=Ce.quickSetter([Ke,it],D.a,It)),!U&&!(ni.length&&ki(q,"fixedMarkers")===!0)&&(cy(R?dt:q),Ce.set([Ze,H],{force3D:!0}),Me=Ce.quickSetter(Ze,D.a,It),pe=Ce.quickSetter(H,D.a,It))}if(A){var Ne=A.vars.onUpdate,ae=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),Ne&&Ne.apply(ae||[])})}P.previous=function(){return He[He.indexOf(P)-1]},P.next=function(){return He[He.indexOf(P)+1]},P.revert=function(re,_e){if(!_e)return P.kill(!0);var De=re!==!1||!P.enabled,Oe=kt;De!==P.isReverted&&(De&&(le=Math.max(B(),P.scroll.rec||0),ee=P.progress,ge=i&&i.progress()),Ke&&[Ke,it,Ze,H].forEach(function(xt){return xt.style.display=De?"none":"block"}),De&&(kt=1,P.update(De)),m&&(!y||!P.isActive)&&(De?py(m,b,Ct):Pl(m,b,Yn(m),j)),De||P.update(De),kt=Oe,P.isReverted=De)},P.refresh=function(re,_e){if(!((kt||!P.enabled)&&!_e)){if(m&&re&&On){Ft(a,"scrollEnd",Pd);return}!Vn&&k&&k(P),kt=1,se=jt(),Re.tween&&(Re.tween.kill(),Re.tween=0),Te&&Te.pause(),d&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;for(var De=Y(),Oe=te(),xt=A?A.duration():Oi(q,D),Ge=0,w=0,O=n.end,$=n.endTrigger||f,I=n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),W=P.pinnedContainer=n.pinnedContainer&&en(n.pinnedContainer),xe=f&&Math.max(0,He.indexOf(P))||0,me=xe,ye,we,Ve,Ue,Ae,ze,ct,ln,jn,rt,Fe;me--;)ze=He[me],ze.end||ze.refresh(0,1)||(kt=1),ct=ze.pin,ct&&(ct===f||ct===m)&&!ze.isReverted&&(rt||(rt=[]),rt.unshift(ze),ze.revert(!0,!0)),ze!==He[me]&&(xe--,me--);for(Kt(I)&&(I=I(P)),de=Pf(I,f,De,D,B(),Ke,Ze,P,Oe,J,U,xt,A)||(m?-.001:0),Kt(O)&&(O=O(P)),Gn(O)&&!O.indexOf("+=")&&(~O.indexOf(" ")?O=(Gn(I)?I.split(" ")[0]:"")+O:(Ge=sa(O.substr(2),De),O=Gn(I)?I:de+Ge,$=f)),ve=Math.max(de,Pf(O||($?"100% 0":xt),$,De,D,B()+Ge,it,H,P,Oe,J,U,xt,A))||-.001,Le=ve-de||(de-=.01)&&.001,Ge=0,me=xe;me--;)ze=He[me],ct=ze.pin,ct&&ze.start-ze._pinPush<=de&&!A&&ze.end>0&&(ye=ze.end-ze.start,(ct===f&&ze.start-ze._pinPush<de||ct===W)&&!Os(I)&&(Ge+=ye*(1-ze.progress)),ct===m&&(w+=ye));if(de+=Ge,ve+=Ge,P._pinPush=w,Ke&&Ge&&(ye={},ye[D.a]="+="+Ge,W&&(ye[D.p]="-="+B()),Ce.set([Ke,it],ye)),m)ye=Yn(m),Ue=D===wt,Ve=B(),oe=parseFloat(ie(D.a))+w,!xt&&ve>1&&(Fe=(R?lt.scrollingElement||Hn:q).style,Fe={style:Fe,value:Fe["overflow"+D.a.toUpperCase()]},Fe["overflow"+D.a.toUpperCase()]="scroll"),Pl(m,b,ye),C=jo(m),we=pi(m,!0),ln=U&&Hi(q,Ue?Zt:wt)(),g&&(j=[g+D.os2,Le+w+It],j.t=b,me=g===mt?cc(m,D)+Le+w:0,me&&j.push(D.d,me+It),rs(j),W&&He.forEach(function(si){si.pin===W&&si.vars.pinSpacing!==!1&&(si._subPinOffset=!0)}),U&&B(le)),U&&(Ae={top:we.top+(Ue?Ve-de:ln)+It,left:we.left+(Ue?ln:Ve-de)+It,boxSizing:"border-box",position:"fixed"},Ae[mr]=Ae["max"+gs]=Math.ceil(we.width)+It,Ae[gr]=Ae["max"+Oc]=Math.ceil(we.height)+It,Ae[Dn]=Ae[Dn+Xs]=Ae[Dn+Ws]=Ae[Dn+qs]=Ae[Dn+Hs]="0",Ae[mt]=ye[mt],Ae[mt+Xs]=ye[mt+Xs],Ae[mt+Ws]=ye[mt+Ws],Ae[mt+qs]=ye[mt+qs],Ae[mt+Hs]=ye[mt+Hs],_t=gy(Ct,Ae,y),Vn&&B(0)),i?(jn=i._initted,wl(1),i.render(i.duration(),!0,!0),be=ie(D.a)-oe+Le+w,Pe=Math.abs(Le-be)>1,U&&Pe&&_t.splice(_t.length-2,2),i.render(0,!0,!0),jn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),wl(0)):be=Le,Fe&&(Fe.value?Fe.style["overflow"+D.a.toUpperCase()]=Fe.value:Fe.style.removeProperty("overflow-"+D.a));else if(f&&B()&&!A)for(we=f.parentNode;we&&we!==dt;)we._pinOffset&&(de-=we._pinOffset,ve-=we._pinOffset),we=we.parentNode;rt&&rt.forEach(function(si){return si.revert(!1,!0)}),P.start=de,P.end=ve,ue=ke=Vn?le:B(),!A&&!Vn&&(ue<le&&B(le),P.scroll.rec=0),P.revert(!1,!0),X&&(ne=-1,P.isActive&&B(de+Le*ee),X.restart(!0)),kt=0,i&&z&&(i._initted||ge)&&i.progress()!==ge&&i.progress(ge,!0).render(i.time(),!0,!0),(ee!==P.progress||A)&&(i&&!z&&i.totalProgress(ee,!0),P.progress=(ue-de)/Le===ee?0:ee),m&&g&&(b._pinOffset=Math.round(P.progress*be)),u&&!Vn&&u(P)}},P.getVelocity=function(){return(B()-ke)/(jt()-ia)*1e3||0},P.endAnimation=function(){Ps(P.callbackAnimation),i&&(Te?Te.progress(1):i.paused()?z||Ps(i,P.direction<0,1):Ps(i,i.reversed()))},P.labelToScroll=function(re){return i&&i.labels&&(de||P.refresh()||de)+i.labels[re]/i.duration()*Le||0},P.getTrailing=function(re){var _e=He.indexOf(P),De=P.direction>0?He.slice(0,_e).reverse():He.slice(_e+1);return(Gn(re)?De.filter(function(Oe){return Oe.vars.preventOverlaps===re}):De).filter(function(Oe){return P.direction>0?Oe.end<=de:Oe.start>=ve})},P.update=function(re,_e,De){if(!(A&&!De&&!re)){var Oe=Vn?le:P.scroll(),xt=re?0:(Oe-de)/Le,Ge=xt<0?0:xt>1?1:xt||0,w=P.progress,O,$,I,W,xe,me,ye,we;if(_e&&(ke=ue,ue=A?B():Oe,M&&(Be=Se,Se=i&&!z?i.totalProgress():Ge)),p&&!Ge&&m&&!kt&&!Vo&&On&&de<Oe+(Oe-ke)/(jt()-ia)*p&&(Ge=1e-4),Ge!==w&&P.enabled){if(O=P.isActive=!!Ge&&Ge<1,$=!!w&&w<1,me=O!==$,xe=me||!!Ge!=!!w,P.direction=Ge>w?1:-1,P.progress=Ge,xe&&!kt&&(I=Ge&&!w?0:Ge===1?1:w===1?2:3,z&&(W=!me&&Z[I+1]!=="none"&&Z[I+1]||Z[I],we=i&&(W==="complete"||W==="reset"||W in i))),T&&(me||we)&&(we||h||!i)&&(Kt(T)?T(P):P.getTrailing(T).forEach(function(ze){return ze.endAnimation()})),z||(Te&&!kt&&!Vo?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo("totalProgress",Ge,i._tTime/i._tDur):(Te.vars.totalProgress=Ge,Te.invalidate().restart())):i&&i.totalProgress(Ge,!!kt)),m){if(re&&g&&(b.style[g+D.os2]=he),!U)Q(Fs(oe+be*Ge));else if(xe){if(ye=!re&&Ge>w&&ve+1>Oe&&Oe+1>=Oi(q,D),y)if(!re&&(O||ye)){var Ve=pi(m,!0),Ue=Oe-de;Df(m,dt,Ve.top+(D===wt?Ue:0)+It,Ve.left+(D===wt?0:Ue)+It)}else Df(m,b);rs(O||ye?_t:C),Pe&&Ge<1&&O||Q(oe+(Ge===1&&!ye?be:0))}}M&&!Re.tween&&!kt&&!Vo&&X.restart(!0),o&&(me||v&&Ge&&(Ge<1||!Tl))&&ba(o.targets).forEach(function(ze){return ze.classList[O||v?"add":"remove"](o.className)}),s&&!z&&!re&&s(P),xe&&!kt?(z&&(we&&(W==="complete"?i.pause().totalProgress(1):W==="reset"?i.restart(!0).pause():W==="restart"?i.restart(!0):i[W]()),s&&s(P)),(me||!Tl)&&(c&&me&&Cl(P,c),G[I]&&Cl(P,G[I]),v&&(Ge===1?P.kill(!1,1):G[I]=0),me||(I=Ge===1?1:3,G[I]&&Cl(P,G[I]))),x&&!O&&Math.abs(P.getVelocity())>(Os(x)?x:2500)&&(Ps(P.callbackAnimation),Te?Te.progress(1):Ps(i,W==="reverse"?1:!Ge,1))):z&&s&&!kt&&s(P)}if(pe){var Ae=A?Oe/A.duration()*(A._caScrollDist||0):Oe;Me(Ae+(Ze._isFlipped?1:0)),pe(Ae)}Xe&&Xe(-Oe/A.duration()*(A._caScrollDist||0))}},P.enable=function(re,_e){P.enabled||(P.enabled=!0,Ft(q,"resize",zs),Ft(R?lt:q,"scroll",Wr),k&&Ft(a,"refreshInit",k),re!==!1&&(P.progress=ee=0,ue=ke=ne=B()),_e!==!1&&P.refresh())},P.getTween=function(re){return re&&Re?Re.tween:Te},P.setPositions=function(re,_e){m&&(oe+=re-de,be+=_e-re-Le,g===mt&&P.adjustPinSpacing(_e-re-Le)),P.start=de=re,P.end=ve=_e,Le=_e-re,P.update()},P.adjustPinSpacing=function(re){if(j){var _e=j.indexOf(D.d)+1;j[_e]=parseFloat(j[_e])+re+It,j[1]=parseFloat(j[1])+re+It,rs(j)}},P.disable=function(re,_e){if(P.enabled&&(re!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,_e||Te&&Te.pause(),le=0,fe&&(fe.uncache=1),k&&Dt(a,"refreshInit",k),X&&(X.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!R)){for(var De=He.length;De--;)if(He[De].scroller===q&&He[De]!==P)return;Dt(q,"resize",zs),Dt(q,"scroll",Wr)}},P.kill=function(re,_e){P.disable(re,_e),Te&&!_e&&Te.kill(),l&&delete uc[l];var De=He.indexOf(P);De>=0&&He.splice(De,1),De===Yt&&aa>0&&Yt--,De=0,He.forEach(function(Oe){return Oe.scroller===P.scroller&&(De=1)}),De||Vn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,re&&i.revert({kill:!1}),_e||i.kill()),Ke&&[Ke,it,Ze,H].forEach(function(Oe){return Oe.parentNode&&Oe.parentNode.removeChild(Oe)}),Ys===P&&(Ys=0),m&&(fe&&(fe.uncache=1),De=0,He.forEach(function(Oe){return Oe.pin===m&&De++}),De||(fe.spacer=0)),n.onKill&&n.onKill(P)},P.enable(!1,!1),et&&et(P),!i||!i.add||Le?P.refresh():Ce.delayedCall(.01,function(){return de||ve||P.refresh()})&&(Le=.01)&&(de=ve=0),m&&dy()},a.register=function(n){return Xr||(Ce=n||wd(),bd()&&window.document&&a.enable(),Xr=Wo),Xr},a.defaults=function(n){if(n)for(var i in n)Yo[i]=n[i];return Yo},a.disable=function(n,i){Wo=0,He.forEach(function(s){return s[i?"kill":"disable"](n)}),Dt($e,"wheel",Wr),Dt(lt,"scroll",Wr),clearInterval(Go),Dt(lt,"touchcancel",Kn),Dt(dt,"touchstart",Kn),Xo(Dt,lt,"pointerdown,touchstart,mousedown",Sf),Xo(Dt,lt,"pointerup,touchend,mouseup",bf),Sa.kill(),Ho(Dt);for(var r=0;r<qe.length;r+=3)qo(Dt,qe[r],qe[r+1]),qo(Dt,qe[r],qe[r+2])},a.enable=function(){if($e=window,lt=document,Hn=lt.documentElement,dt=lt.body,Ce&&(ba=Ce.utils.toArray,Kr=Ce.utils.clamp,lc=Ce.core.context||Kn,wl=Ce.core.suppressOverwrites||Kn,Rc=$e.history.scrollRestoration||"auto",Ce.core.globals("ScrollTrigger",a),dt)){Wo=1,Mt.register(Ce),a.isTouch=Mt.isTouch,Ai=Mt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft($e,"wheel",Wr),_d=[$e,lt,Hn,dt],Ce.matchMedia?(a.matchMedia=function(l){var c=Ce.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ce.addEventListener("matchMediaInit",function(){return Nc()}),Ce.addEventListener("matchMediaRevert",function(){return Dd()}),Ce.addEventListener("matchMedia",function(){lr(0,1),Tr("matchMedia")}),Ce.matchMedia("(orientation: portrait)",function(){return Al(),Al})):console.warn("Requires GSAP 3.11.0 or later"),Al(),Ft(lt,"scroll",Wr);var n=dt.style,i=n.borderTopStyle,r=Ce.core.Animation.prototype,s,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=pi(dt),wt.m=Math.round(s.top+wt.sc())||0,Zt.m=Math.round(s.left+Zt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Go=setInterval(Ef,250),Ce.delayedCall(.5,function(){return Vo=0}),Ft(lt,"touchcancel",Kn),Ft(dt,"touchstart",Kn),Xo(Ft,lt,"pointerdown,touchstart,mousedown",Sf),Xo(Ft,lt,"pointerup,touchend,mouseup",bf),ac=Ce.utils.checkPrefix("transform"),la.push(ac),Xr=jt(),Sa=Ce.delayedCall(.2,lr).pause(),qr=[lt,"visibilitychange",function(){var l=$e.innerWidth,c=$e.innerHeight;lt.hidden?(yf=l,Mf=c):(yf!==l||Mf!==c)&&zs()},lt,"DOMContentLoaded",lr,$e,"load",lr,$e,"resize",zs],Ho(Ft),He.forEach(function(l){return l.enable(0,1)}),o=0;o<qe.length;o+=3)qo(Dt,qe[o],qe[o+1]),qo(Dt,qe[o],qe[o+2])}},a.config=function(n){"limitCallbacks"in n&&(Tl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Go)||(Go=i)&&setInterval(Ef,i),"ignoreMobileResize"in n&&(yd=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ho(Dt)||Ho(Ft,n.autoRefreshEvents||"none"),vd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=en(n),s=qe.indexOf(r),o=br(r);~s&&qe.splice(s,o?6:2),i&&(o?ni.unshift($e,i,dt,i,Hn,i):ni.unshift(r,i))},a.clearMatchMedia=function(n){He.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},a.isInViewport=function(n,i,r){var s=(Gn(n)?en(n):n).getBoundingClientRect(),o=s[r?mr:gr]*i||0;return r?s.right-o>0&&s.left+o<$e.innerWidth:s.bottom-o>0&&s.top+o<$e.innerHeight},a.positionInViewport=function(n,i,r){Gn(n)&&(n=en(n));var s=n.getBoundingClientRect(),o=s[r?mr:gr],l=i==null?o/2:i in wa?wa[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(s.left+l)/$e.innerWidth:(s.top+l)/$e.innerHeight},a.killAll=function(n){if(He.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=wr.killAll||[];wr={},i.forEach(function(r){return r()})}},a}();Ye.version="3.11.4";Ye.saveStyles=function(a){return a?ba(a).forEach(function(e){if(e&&e.style){var t=pn.indexOf(e);t>=0&&pn.splice(t,5),pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),lc())}}):pn};Ye.revert=function(a,e){return Nc(!a,e)};Ye.create=function(a,e){return new Ye(a,e)};Ye.refresh=function(a){return a?zs():(Xr||Ye.register())&&lr(!0)};Ye.update=function(a){return++qe.cache&&Xi(a===!0?2:0)};Ye.clearScrollMemory=Ld;Ye.maxScroll=function(a,e){return Oi(a,e?Zt:wt)};Ye.getScrollFunc=function(a,e){return Hi(en(a),e?Zt:wt)};Ye.getById=function(a){return uc[a]};Ye.getAll=function(){return He.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!On};Ye.snapDirectional=zc;Ye.addEventListener=function(a,e){var t=wr[a]||(wr[a]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(a,e){var t=wr[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var h=[],f=[],m=Ce.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||m.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&m.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Kt(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return Kt(r)&&(r=r(),Ft(Ye,"refresh",function(){return r=e.batchMax()})),ba(a).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};var Rf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Dl=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Mt.isTouch?" pinch-zoom":""):"none",e===Hn&&a(dt,t)},Zo={auto:1,scroll:1},xy=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||Ce.core.getCache(r),o=jt(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==dt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Zo[(l=Yn(r)).overflowY]||Zo[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!br(r)&&(Zo[(l=Yn(r)).overflowY]||Zo[l.overflowX]),s._isScrollT=o}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Rd=function(e,t,n,i){return Mt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&xy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ft(lt,Mt.eventTypes[0],Ff,!1,!0)},onDisable:function(){return Dt(lt,Mt.eventTypes[0],Ff,!0)}})},vy=/(input|label|select|textarea)/i,If,Ff=function(e){var t=vy.test(e.target.tagName);(t||If)&&(e._gsapAllow=!0,If=t)},yy=function(e){ra(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s,o,l=en(e.target)||Hn,c=Ce.core.globals().ScrollSmoother,u=c&&c.get(),h=Ai&&(e.content&&en(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Hi(l,wt),m=Hi(l,Zt),g=1,d=(Mt.isTouch&&$e.visualViewport?$e.visualViewport.scale*$e.visualViewport.width:$e.outerWidth)/$e.innerWidth,p=0,_=Kt(i)?function(){return i(s)}:function(){return i||2.8},S,v,M=Rd(l,e.type,!0,r),y=function(){return v=!1},E=Kn,A=Kn,x=function(){o=Oi(l,wt),A=Kr(Ai?1:0,o),n&&(E=Kr(0,Oi(l,Zt))),S=_r},T=function(){h._gsap.y=Fs(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(y);var Z=Fs(s.deltaY/2),N=A(f.v-Z);if(h&&N!==f.v+f.offset){f.offset=N-f.v;var J=Fs((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+J+", 0, 1)",h._gsap.y=J+"px",f.cacheID=qe.cache,Xi()}return!0}f.offset&&T(),v=!0},z,q,F,R,U=function(){x(),z.isActive()&&z.vars.scrollY>o&&(f()>o?z.progress(1)&&f(o):z.resetTo("scrollY",o))};return h&&Ce.set(h,{y:"+=0"}),e.ignoreCheck=function(G){return Ai&&G.type==="touchmove"&&D()||g>1.05&&G.type!=="touchstart"||s.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){var G=g;g=Fs(($e.visualViewport&&$e.visualViewport.scale||1)/d),z.pause(),G!==g&&Dl(l,g>1.01?!0:n?!1:"x"),q=m(),F=f(),x(),S=_r},e.onRelease=e.onGestureStart=function(G,Z){if(f.offset&&T(),!Z)R.restart(!0);else{qe.cache++;var N=_(),J,P;n&&(J=m(),P=J+N*.05*-G.velocityX/.227,N*=Rf(m,J,P,Oi(l,Zt)),z.vars.scrollX=E(P)),J=f(),P=J+N*.05*-G.velocityY/.227,N*=Rf(f,J,P,Oi(l,wt)),z.vars.scrollY=A(P),z.invalidate().duration(N).play(.01),(Ai&&z.vars.scrollY>=o||J>=o-1)&&Ce.to({},{onUpdate:U,duration:N})}},e.onWheel=function(){z._ts&&z.pause(),jt()-p>1e3&&(S=0,p=jt())},e.onChange=function(G,Z,N,J,P){if(_r!==S&&x(),Z&&n&&m(E(J[2]===Z?q+(G.startX-G.x):m()+Z-J[1])),N){f.offset&&T();var k=P[2]===N,Y=k?F+G.startY-G.y:f()+N-P[1],te=A(Y);k&&Y!==te&&(F+=te-Y),f(te)}(N||Z)&&Xi()},e.onEnable=function(){Dl(l,n?!1:"x"),Ye.addEventListener("refresh",U),Ft($e,"resize",U),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),M.enable()},e.onDisable=function(){Dl(l,!0),Dt($e,"resize",U),Ye.removeEventListener("refresh",U),M.kill()},e.lockAxis=e.lockAxis!==!1,s=new Mt(e),s.iOS=Ai,Ai&&!f()&&f(1),Ai&&Ce.ticker.add(Kn),R=s._dc,z=Ce.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:R.vars.onComplete}),s};Ye.sort=function(a){return He.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(a){return new Mt(a)};Ye.normalizeScroll=function(a){if(typeof a>"u")return dn;if(a===!0&&dn)return dn.enable();if(a===!1)return dn&&dn.kill();var e=a instanceof Mt?a:yy(a);return dn&&dn.target===e.target&&dn.kill(),br(e.target)&&(dn=e),e};Ye.core={_getVelocityProp:oc,_inputObserver:Rd,_scrollers:qe,_proxies:ni,bridge:{ss:function(){On||Tr("scrollStart"),On=jt()},ref:function(){return kt}}};wd()&&Ce.registerPlugin(Ye);/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jt,Id,xi,ei,Bi,Fd,Od,Ko,zd=function(){return typeof window<"u"},Nd=function(){return Jt||zd()&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},Ud=function(e){return typeof e=="string"},Of=function(e){return typeof e=="function"},ro=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return e===xi||e===ei||e===Bi?Math.max(ei[i],Bi[i])-(xi["inner"+n]||ei[r]||Bi[r]):e[i]-e["offset"+n]},so=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===xi&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=ei[n]!=null?ei:Bi),function(){return e[n]}},My=function(e,t,n,i){if(Of(e)&&(e=e(t,n,i)),typeof e!="object")return Ud(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var r={},s;for(s in e)r[s]=s!=="onAutoKill"&&Of(e[s])?e[s](t,n,i):e[s];return r},kd=function(e,t){if(e=Fd(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===xi||t===Bi,r=i?{top:ei.clientTop-(xi.pageYOffset||ei.scrollTop||Bi.scrollTop||0),left:ei.clientLeft-(xi.pageXOffset||ei.scrollLeft||Bi.scrollLeft||0)}:t.getBoundingClientRect(),s={x:n.left-r.left,y:n.top-r.top};return!i&&t&&(s.x+=so(t,"x")(),s.y+=so(t,"y")()),s},zf=function(e,t,n,i,r){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-r:Ud(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-r:e==="max"?ro(t,n)-r:Math.min(ro(t,n),kd(e,t)[n]-r)},Nf=function(){Jt=Nd(),zd()&&Jt&&typeof document<"u"&&document.body&&(xi=window,Bi=document.body,ei=document.documentElement,Fd=Jt.utils.toArray,Jt.config({autoKillThreshold:7}),Od=Jt.config(),Id=1)},po={version:"3.11.4",name:"scrollTo",rawVars:1,register:function(e){Jt=e,Nf()},init:function(e,t,n,i,r){Id||Nf();var s=this,o=Jt.getProperty(e,"scrollSnapType");s.isWin=e===xi,s.target=e,s.tween=n,t=My(t,i,e,r),s.vars=t,s.autoKill=!!t.autoKill,s.getX=so(e,"x"),s.getY=so(e,"y"),s.x=s.xPrev=s.getX(),s.y=s.yPrev=s.getY(),Ko||(Ko=Jt.core.globals().ScrollTrigger),Jt.getProperty(e,"scrollBehavior")==="smooth"&&Jt.set(e,{scrollBehavior:"auto"}),o&&o!=="none"&&(s.snap=1,s.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(s.add(s,"x",s.x,zf(t.x,e,"x",s.x,t.offsetX||0),i,r),s._props.push("scrollTo_x")):s.skipX=1,t.y!=null?(s.add(s,"y",s.y,zf(t.y,e,"y",s.y,t.offsetY||0),i,r),s._props.push("scrollTo_y")):s.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,r=t.tween,s=t.autoKill,o=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,f,m,g,d,p;n;)n.r(e,n.d),n=n._next;f=c||!t.skipX?t.getX():o,m=c||!t.skipY?t.getY():l,g=m-l,d=f-o,p=Od.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),s&&(!t.skipX&&(d>p||d<-p)&&f<ro(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&m<ro(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(r.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(r,t.vars.onAutoKillParams||[]))),c?xi.scrollTo(t.skipX?f:t.x,t.skipY?m:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(m=i.scrollTop,f=i.scrollLeft,h?i.style.scrollSnapType=h:i.style.removeProperty("scroll-snap-type"),i.scrollTop=m+1,i.scrollLeft=f+1,i.scrollTop=m,i.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,Ko&&Ko.update()},kill:function(e){var t=e==="scrollTo";(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1)}};po.max=ro;po.getOffset=kd;po.buildGetter=so;Nd()&&Jt.registerPlugin(po);const Sy=`varying vec3 vColor;

void main() {

    float strength = distance(gl_PointCoord, vec2(0.5));
    strength *= 2.0;
    strength = 1.0 - strength;

    // Final Color
    vec3 color = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color, 1.0);
}`,by=`uniform float uSize;
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

}`,Ta="ontouchstart"in document.documentElement;window.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("overlay");setTimeout(()=>{ri.to(a,{yPercent:40,opacity:0,ease:"expo.inOut",duration:1,onStart:()=>{document.body.style.overflowY="auto"},onComplete:()=>{a.remove()}})},1500)});const Uc=new Gx,Wn={width:window.innerWidth,height:Ta?window.outerHeight:window.innerHeight};window.addEventListener("resize",()=>{Ta&&Wn.height>window.outerHeight||(Wn.width=window.innerWidth,Wn.height=Ta?window.outerHeight:window.innerHeight,Mi.aspect=Wn.width/Wn.height,Mi.updateProjectionMatrix(),Si.setSize(Wn.width,Wn.height),Si.setPixelRatio(Math.min(window.devicePixelRatio,2)))});const Mi=new Pn(75,Wn.width/Wn.height,.1,100);Mi.position.x=0;Mi.position.y=.4;Mi.position.z=0;Uc.add(Mi);const Si=new fh;Si.setSize(Wn.width,Wn.height);Si.setPixelRatio(Math.min(window.devicePixelRatio,2));Si.domElement.classList.add("webgl");var kf;(kf=document.getElementById("app"))==null||kf.prepend(Si.domElement);const tn={count:18e4,size:.005,radius:1.5,branches:6,spin:1,randomness:.9,insideColor:"#ffffff",outsideColor:"#35ffee",swirlRatio:800},Ia=new bi,ua=new Float32Array(tn.count*3),fa=new Float32Array(tn.count*3),Bd=new Float32Array(tn.count*1),wy=new st(tn.insideColor),Ty=new st(tn.outsideColor);for(let a=0;a<tn.count;a++){const e=a*3,t=Math.random()*tn.radius,n=a/tn.branches*Math.PI*2,i=(Math.random()-.5)*tn.randomness,r=(Math.random()-.5)*tn.randomness,s=(Math.random()-.5)*tn.randomness;ua[e+0]=Math.cos(n)*t+i,ua[e+1]=Math.random()*.1+r,ua[e+2]=Math.sin(n)*t+s;const o=wy.clone();o.lerp(Ty,t/tn.radius),fa[e+0]=o.r,fa[e+1]=o.g,fa[e+2]=o.b,Bd[a]=Math.random()}Ia.setAttribute("position",new Mn(ua,3));Ia.setAttribute("color",new Mn(fa,3));Ia.setAttribute("aScale",new Mn(Bd,1));const kc=new Gi({depthWrite:!1,blending:Rl,vertexColors:!0,vertexShader:by,fragmentShader:Sy,uniforms:{uTime:{value:0},uSize:{value:8*Si.getPixelRatio()}}}),Bc=new Wx(Ia,kc);Mi.lookAt(Bc.position);Uc.add(Bc);const Ll=new Hx,Gd=()=>{Ll.getElapsedTime()>600&&Ll.start();const a=Ll.getElapsedTime();kc.uniforms.uTime.value=(400+a)/tn.swirlRatio,Si.render(Uc,Mi),window.requestAnimationFrame(Gd)};Gd();ri.registerPlugin(Ye,po);Ye.defaults({immediateRender:!1});const Vd=document.querySelector("nav"),Ey=Vd.offsetHeight;ri.from(Vd,{y:-Ey,opacity:0,scrollTrigger:{end:"5%"}});ri.to("#pointer",{duration:1.5,y:15,repeat:-1,yoyo:!0,ease:"sine.inOut",scrollTrigger:{trigger:"#pointer",start:"top bottom",toggleActions:"play pause play pause"}});const Cy=ri.timeline({scrollTrigger:{trigger:"#about",start:"-30%",end:"-10%"}});document.querySelectorAll(".card, .section-title, .section-container, .lecture").forEach(a=>{ri.from(a,{xPercent:-10,opacity:0,ease:"expo.out",scrollTrigger:{trigger:a,start:" 50%"}})});Cy.from(".intro-container",{opacity:0,xPercent:-20});const Ay=ri.timeline({scrollTrigger:{trigger:"#app",start:"top top",end:"bottom 0%",scrub:1}});Ay.to(Bc.rotation,{z:.3,ease:"expo.out"},0).from(kc.uniforms.uSize,{value:(Ta?2:0)*Si.getPixelRatio()},0).to(tn,{swirlRatio:5,ease:"expo"},0).to(Mi.position,{y:2,x:-1},0);const Py=document.querySelectorAll(".nav-link");Py.forEach(a=>{a.addEventListener("click",e=>{e.preventDefault(),ri.to(window,{duration:.6,scrollTo:{y:a.getAttribute("href"),offsetY:20}})})});const Uf=document.querySelectorAll(".icon-wrapper"),Dy={delay:1,xPercent:-150,ease:"power3.out",duration:1,stagger:.1};ri.from(Uf,{...Dy,scrollTrigger:{trigger:Uf,end:"bottom bottom"}});document.getElementById("copyright-year").textContent=new Date().getFullYear().toString();

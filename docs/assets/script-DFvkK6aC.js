(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const kh="182",a_=0,If=1,l_=2,yl=1,Wp=2,Wo=3,mr=0,Vn=1,ki=2,fr=0,Js=1,Nf=2,Uf=3,Ff=4,c_=5,os=100,u_=101,h_=102,f_=103,d_=104,p_=200,m_=201,g_=202,__=203,pu=204,mu=205,x_=206,v_=207,S_=208,M_=209,y_=210,T_=211,b_=212,E_=213,w_=214,gu=0,_u=1,xu=2,ao=3,vu=4,Su=5,Mu=6,yu=7,Xp=0,A_=1,R_=2,Pi=0,Yp=1,qp=2,Kp=3,jp=4,$p=5,Zp=6,Jp=7,Of="attached",C_="detached",Qp=300,Ss=301,lo=302,Tu=303,bu=304,ic=306,co=1e3,Vi=1001,kl=1002,sn=1003,em=1004,Xo=1005,on=1006,Tl=1007,cr=1008,ti=1009,tm=1010,nm=1011,_a=1012,zh=1013,Ki=1014,gi=1015,gr=1016,Vh=1017,Hh=1018,xa=1020,im=35902,rm=35899,sm=1021,om=1022,_i=1023,_r=1026,ls=1027,Gh=1028,Wh=1029,uo=1030,Xh=1031,Yh=1033,bl=33776,El=33777,wl=33778,Al=33779,Eu=35840,wu=35841,Au=35842,Ru=35843,Cu=36196,Pu=37492,Du=37496,Lu=37488,Iu=37489,Nu=37490,Uu=37491,Fu=37808,Ou=37809,Bu=37810,ku=37811,zu=37812,Vu=37813,Hu=37814,Gu=37815,Wu=37816,Xu=37817,Yu=37818,qu=37819,Ku=37820,ju=37821,$u=36492,Zu=36494,Ju=36495,Qu=36283,eh=36284,th=36285,nh=36286,va=2300,Sa=2301,mc=2302,Bf=2400,kf=2401,zf=2402,P_=2500,D_=0,am=1,ih=2,L_=3200,lm=0,I_=1,Pr="",fn="srgb",On="srgb-linear",zl="linear",bt="srgb",ws=7680,Vf=519,N_=512,U_=513,F_=514,qh=515,O_=516,B_=517,Kh=518,k_=519,rh=35044,Hf="300 es",Hi=2e3,Vl=2001;function cm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function z_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function V_(){const r=Ma("canvas");return r.style.display="block",r}const Gf={};function Hl(...r){const e="THREE."+r.shift();console.log(e,...r)}function ze(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ze(...r){const e="THREE."+r.shift();console.error(e,...r)}function ya(...r){const e=r.join(" ");e in Gf||(Gf[e]=!0,ze(...r))}function H_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class bo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wf=1234567;const ta=Math.PI/180,ho=180/Math.PI;function Di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function jh(r,e){return(r%e+e)%e}function G_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function W_(r,e,t){return r!==e?(t-r)/(e-r):0}function na(r,e,t){return(1-t)*r+t*e}function X_(r,e,t,n){return na(r,e,1-Math.exp(-t*n))}function Y_(r,e=1){return e-Math.abs(jh(r,e*2)-e)}function q_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function K_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function j_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $_(r,e){return r+Math.random()*(e-r)}function Z_(r){return r*(.5-Math.random())}function J_(r){r!==void 0&&(Wf=r);let e=Wf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Q_(r){return r*ta}function e0(r){return r*ho}function t0(r){return(r&r-1)===0&&r!==0}function n0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function i0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function r0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rl={DEG2RAD:ta,RAD2DEG:ho,generateUUID:Di,clamp:ut,euclideanModulo:jh,mapLinear:G_,inverseLerp:W_,lerp:na,damp:X_,pingpong:Y_,smoothstep:q_,smootherstep:K_,randInt:j_,randFloat:$_,randFloatSpread:Z_,seededRandom:J_,degToRad:Q_,radToDeg:e0,isPowerOfTwo:t0,ceilPowerOfTwo:n0,floorPowerOfTwo:i0,setQuaternionFromProperEuler:r0,normalize:Et,denormalize:Ri};class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const T=Math.acos(m),b=Math.sin(T);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a;const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new H,Xf=new Wr;class it{constructor(e,t,n,i,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],b=i[4],S=i[7],M=i[2],w=i[5],A=i[8];return s[0]=o*_+a*T+l*M,s[3]=o*m+a*b+l*w,s[6]=o*p+a*S+l*A,s[1]=c*_+u*T+h*M,s[4]=c*m+u*b+h*w,s[7]=c*p+u*S+h*A,s[2]=f*_+d*T+g*M,s[5]=f*m+d*b+g*w,s[8]=f*p+d*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new it,Yf=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qf=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){const r={enabled:!0,workingColorSpace:On,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pr?zl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[On]:{primaries:e,whitePoint:n,transfer:zl,toXYZ:Yf,fromXYZ:qf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Yf,fromXYZ:qf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),r}const dt=s0();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let As;class o0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Ma("canvas")),As.width=e.width,As.height=e.height;const i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=As}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a0=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(xc(i[o].image)):s.push(xc(i[o]))}else s=xc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function xc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?o0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let l0=0;const vc=new H;class dn extends bo{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Vi,i=Vi,s=on,o=cr,a=_i,l=ti,c=dn.DEFAULT_ANISOTROPY,u=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Di(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Qp;dn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(d+1)/2,M=(p+1)/2,w=(u+f)/4,A=(h+_)/4,P=(g+m)/4;return b>S&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=A/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=P/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c0 extends bo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new dn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends c0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class um extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Ba.subVectors(this.max,Po),Rs.subVectors(e.a,Po),Cs.subVectors(e.b,Po),Ps.subVectors(e.c,Po),Mr.subVectors(Cs,Rs),yr.subVectors(Ps,Cs),qr.subVectors(Rs,Ps);let t=[0,-Mr.z,Mr.y,0,-yr.z,yr.y,0,-qr.z,qr.y,Mr.z,0,-Mr.x,yr.z,0,-yr.x,qr.z,0,-qr.x,-Mr.y,Mr.x,0,-yr.y,yr.x,0,-qr.y,qr.x,0];return!Sc(t,Rs,Cs,Ps,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,Rs,Cs,Ps,Ba))?!1:(ka.crossVectors(Mr,yr),t=[ka.x,ka.y,ka.z],Sc(t,Rs,Cs,Ps,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new H,new H,new H,new H,new H,new H,new H,new H],bi=new H,Oa=new Si,Rs=new H,Cs=new H,Ps=new H,Mr=new H,yr=new H,qr=new H,Po=new H,Ba=new H,ka=new H,Kr=new H;function Sc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Kr.fromArray(r,s);const a=i.x*Math.abs(Kr.x)+i.y*Math.abs(Kr.y)+i.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=n.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h0=new Si,Do=new H,Mc=new H;class Ji{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const t=Do.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Do,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Mc)),this.expandByPoint(Do.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const tr=new H,yc=new H,za=new H,Tr=new H,Tc=new H,Va=new H,bc=new H;class rc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yc.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(yc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(za),a=Tr.dot(this.direction),l=-Tr.dot(za),c=Tr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yc).addScaledVector(za,f),d}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const n=tr.dot(this.direction),i=tr.dot(tr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,i,s){Tc.subVectors(t,e),Va.subVectors(n,e),bc.crossVectors(Tc,Va);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Tr,Va));if(l<0)return null;const c=a*this.direction.dot(Tc.cross(Tr));if(c<0||l+c>o)return null;const u=-a*Tr.dot(bc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),br.crossVectors(n,jn),br.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),br.crossVectors(n,jn)),br.normalize(),Ha.crossVectors(jn,br),i[0]=br.x,i[4]=Ha.x,i[8]=jn.x,i[1]=br.y,i[5]=Ha.y,i[9]=jn.y,i[2]=br.z,i[6]=Ha.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],b=n[7],S=n[11],M=n[15],w=i[0],A=i[4],P=i[8],x=i[12],y=i[1],D=i[5],I=i[9],F=i[13],z=i[2],W=i[6],k=i[10],O=i[14],K=i[3],te=i[7],C=i[11],ie=i[15];return s[0]=o*w+a*y+l*z+c*K,s[4]=o*A+a*D+l*W+c*te,s[8]=o*P+a*I+l*k+c*C,s[12]=o*x+a*F+l*O+c*ie,s[1]=u*w+h*y+f*z+d*K,s[5]=u*A+h*D+f*W+d*te,s[9]=u*P+h*I+f*k+d*C,s[13]=u*x+h*F+f*O+d*ie,s[2]=g*w+_*y+m*z+p*K,s[6]=g*A+_*D+m*W+p*te,s[10]=g*P+_*I+m*k+p*C,s[14]=g*x+_*F+m*O+p*ie,s[3]=T*w+b*y+S*z+M*K,s[7]=T*A+b*D+S*W+M*te,s[11]=T*P+b*I+S*k+M*C,s[15]=T*x+b*F+S*O+M*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],T=l*d-c*f,b=a*d-c*h,S=a*f-l*h,M=o*d-c*u,w=o*f-l*u,A=o*h-a*u;return t*(_*T-m*b+p*S)-n*(g*T-m*M+p*w)+i*(g*b-_*M+p*A)-s*(g*S-_*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,b=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,M=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=t*T+n*b+i*S+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=T*A,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=b*A,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*A,e[8]=S*A,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=M*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,T=l*c,b=l*u,S=l*h,M=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+S)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(d-S)*w,i[5]=(1-(f+p))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+b)*A,i[9]=(m-T)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ds.set(i[0],i[1],i[2]).length();const o=Ds.set(i[4],i[5],i[6]).length(),a=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Ei.copy(this);const c=1/s,u=1/o,h=1/a;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=h,Ei.elements[9]*=h,Ei.elements[10]*=h,t.setFromRotationMatrix(Ei),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Hi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Hi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Hi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Hi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Vl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new H,Ei=new st,f0=new H(0,0,0),d0=new H(1,1,1),br=new H,Ha=new H,jn=new H,Kf=new st,jf=new Wr;class ji{constructor(e=0,t=0,n=0,i=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const $f=new H,Ls=new Wr,nr=new st,Ga=new H,Lo=new H,m0=new H,g0=new Wr,Zf=new H(1,0,0),Jf=new H(0,1,0),Qf=new H(0,0,1),ed={type:"added"},_0={type:"removed"},Is={type:"childadded",child:null},Ec={type:"childremoved",child:null};class Ht extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new H,t=new ji,n=new Wr,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new it}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Lo,Ga,this.up):nr.lookAt(Ga,Lo,this.up),this.quaternion.setFromRotationMatrix(nr),i&&(nr.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(nr),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Is.child=e,this.dispatchEvent(Is),Is.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_0),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new H(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new H,ir=new H,wc=new H,rr=new H,Ns=new H,Us=new H,td=new H,Ac=new H,Rc=new H,Cc=new H,Pc=new Ut,Dc=new Ut,Lc=new Ut;class Ci{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),ir.subVectors(n,t),wc.subVectors(e,t);const o=wi.dot(wi),a=wi.dot(ir),l=wi.dot(wc),c=ir.dot(ir),u=ir.dot(wc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rr.x),l.addScaledVector(o,rr.y),l.addScaledVector(a,rr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Pc.setScalar(0),Dc.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,t),Dc.fromBufferAttribute(e,n),Lc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Pc,s.x),o.addScaledVector(Dc,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),ir.subVectors(e,t),wi.cross(ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),wi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ns.subVectors(i,n),Us.subVectors(s,n),Ac.subVectors(e,n);const l=Ns.dot(Ac),c=Us.dot(Ac);if(l<=0&&c<=0)return t.copy(n);Rc.subVectors(e,i);const u=Ns.dot(Rc),h=Us.dot(Rc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ns,o);Cc.subVectors(e,s);const d=Ns.dot(Cc),g=Us.dot(Cc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Us,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return td.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(td,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=jh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ic(o,s,e+1/3),this.g=Ic(o,s,e),this.b=Ic(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=fm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return dt.workingToColorSpace(vn.copy(this),e),Math.round(ut(vn.r*255,0,255))*65536+Math.round(ut(vn.g*255,0,255))*256+Math.round(ut(vn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,s=vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=fn){dt.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(Wa);const n=na(Er.h,Wa.h,t),i=na(Er.s,Wa.s,t),s=na(Er.l,Wa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new et;et.NAMES=fm;let x0=0;class Yi extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Js,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pu&&(n.blendSrc=this.blendSrc),this.blendDst!==mu&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new H,Xa=new _t;let v0=0;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class dm extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pm extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Li extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let S0=0;const hi=new st,Nc=new Ht,Fs=new H,$n=new Si,Io=new Si,cn=new H;class yi extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?pm:dm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,n){return hi.makeTranslation(e,t,n),this.applyMatrix4(hi),this}scale(e,t,n){return hi.makeScale(e,t,n),this.applyMatrix4(hi),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Li(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors($n.min,Io.min),$n.expandByPoint(cn),cn.addVectors($n.max,Io.max),$n.expandByPoint(cn)):($n.expandByPoint(Io.min),$n.expandByPoint(Io.max))}$n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),cn.add(Fs)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new H,l[P]=new H;const c=new H,u=new H,h=new H,f=new _t,d=new _t,g=new _t,_=new H,m=new H;function p(P,x,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[x].add(_),a[y].add(_),l[P].add(m),l[x].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,x=T.length;P<x;++P){const y=T[P],D=y.start,I=y.count;for(let F=D,z=D+I;F<z;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new H,S=new H,M=new H,w=new H;function A(P){M.fromBufferAttribute(i,P),w.copy(M);const x=a[P];b.copy(x),b.sub(M.multiplyScalar(M.dot(x))).normalize(),S.crossVectors(w,x);const D=S.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,x=T.length;P<x;++P){const y=T[P],D=y.start,I=y.count;for(let F=D,z=D+I;F<z;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Fn(f,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new st,jr=new rc,Ya=new Ji,id=new H,qa=new H,Ka=new H,ja=new H,Uc=new H,$a=new H,rd=new H,Za=new H;class ai extends Ht{constructor(e=new yi,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Uc.fromBufferAttribute(h,e),o?$a.addScaledVector(Uc,u):$a.addScaledVector(Uc.sub(t),u))}t.add($a)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Ya.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Ya,id)===null||jr.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(s).invert(),jr.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,M=b;S<M;S+=3){const w=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);i=Ja(this,p,e,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);i=Ja(this,o,e,n,c,u,h,T,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,M=b;S<M;S+=3){const w=S,A=S+1,P=S+2;i=Ja(this,p,e,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,b=m+1,S=m+2;i=Ja(this,o,e,n,c,u,h,T,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function M0(r,e,t,n,i,s,o,a){let l;if(e.side===Vn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===mr,a),l===null)return null;Za.copy(a),Za.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:r}}function Ja(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,qa),r.getVertexPosition(l,Ka),r.getVertexPosition(c,ja);const u=M0(r,e,t,n,qa,Ka,ja,rd);if(u){const h=new H;Ci.getBarycoord(rd,qa,Ka,ja,h),i&&(u.uv=Ci.getInterpolatedAttribute(i,a,l,c,h,new _t)),s&&(u.uv1=Ci.getInterpolatedAttribute(s,a,l,c,h,new _t)),o&&(u.normal=Ci.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Ci.getNormal(qa,Ka,ja,f.normal),u.face=f,u.barycoord=h}return u}class Na extends yi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(h,2));function g(_,m,p,T,b,S,M,w,A,P,x){const y=S/A,D=M/P,I=S/2,F=M/2,z=w/2,W=A+1,k=P+1;let O=0,K=0;const te=new H;for(let C=0;C<k;C++){const ie=C*D-F;for(let Ee=0;Ee<W;Ee++){const Ie=Ee*y-I;te[_]=Ie*T,te[m]=ie*b,te[p]=z,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=w>0?1:-1,u.push(te.x,te.y,te.z),h.push(Ee/A),h.push(1-C/P),O+=1}}for(let C=0;C<P;C++)for(let ie=0;ie<A;ie++){const Ee=f+ie+W*C,Ie=f+ie+W*(C+1),Ve=f+(ie+1)+W*(C+1),Ke=f+(ie+1)+W*C;l.push(Ee,Ie,Ke),l.push(Ie,Ve,Ke),K+=6}a.addGroup(d,K,x),d+=K,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=fo(r[t]);for(const i in n)e[i]=n[i]}return e}function y0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const T0={clone:fo,merge:Cn};var b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gm extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new H,sd=new _t,od=new _t;class In extends gm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,sd,od),t.subVectors(od,sd)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,Bs=1;class w0 extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(Os,Bs,e,t);i.layers=this.layers,this.add(i);const s=new In(Os,Bs,e,t);s.layers=this.layers,this.add(s);const o=new In(Os,Bs,e,t);o.layers=this.layers,this.add(o);const a=new In(Os,Bs,e,t);a.layers=this.layers,this.add(a);const l=new In(Os,Bs,e,t);l.layers=this.layers,this.add(l);const c=new In(Os,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _m extends dn{constructor(e=[],t=Ss,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xm extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _m(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Na(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:fr});s.uniforms.tEquirect.value=t;const o=new ai(i,s),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=on),new w0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class us extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A0={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class R0 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class C0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new H;class Zh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Hl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ad=new H,ld=new Ut,cd=new Ut,P0=new H,ud=new st,Qa=new H,Oc=new Ji,hd=new st,Bc=new rc;class D0 extends ai{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Of,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qa),this.boundingBox.expandByPoint(Qa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ji),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qa),this.boundingSphere.expandByPoint(Qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(i),e.ray.intersectsSphere(Oc)!==!1&&(hd.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(hd),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Of?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===C_?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ld.fromBufferAttribute(i.attributes.skinIndex,e),cd.fromBufferAttribute(i.attributes.skinWeight,e),ad.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=cd.getComponent(s);if(o!==0){const a=ld.getComponent(s);ud.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(P0.copy(ad).applyMatrix4(ud),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vm extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jh extends dn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=sn,u=sn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fd=new st,L0=new st;class Qh{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:L0;fd.multiplyMatrices(a,t[s]),fd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Jh(t,e,e,_i,gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ze("Skeleton: No bone found with UUID:",s),o=new vm),this.bones.push(o),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class sh extends Fn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ks=new st,dd=new st,el=[],pd=new Si,I0=new st,No=new ai,Uo=new Ji;class N0 extends ai{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,I0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),pd.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(pd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Uo.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),e.ray.intersectsSphere(Uo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ks),dd.multiplyMatrices(n,ks),No.matrixWorld=dd,No.raycast(e,el);for(let o=0,a=el.length;o<a;o++){const l=el[o];l.instanceId=s,l.object=this,t.push(l)}el.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jh(new Float32Array(i*this.count),i,this.count,Gh,gi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kc=new H,U0=new H,F0=new it;class ns{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=kc.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||F0.getNormalMatrix(e),i=this.coplanarPoint(kc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Ji,O0=new _t(.5,.5),tl=new H;class ef{constructor(e=new ns,t=new ns,n=new ns,i=new ns,s=new ns,o=new ns){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],b=s[13],S=s[14],M=s[15];if(i[0].setComponents(c-o,d-u,p-g,M-T).normalize(),i[1].setComponents(c+o,d+u,p+g,M+T).normalize(),i[2].setComponents(c+a,d+h,p+_,M+b).normalize(),i[3].setComponents(c-a,d-h,p-_,M-b).normalize(),n)i[4].setComponents(l,f,m,S).normalize(),i[5].setComponents(c-l,d-f,p-m,M-S).normalize();else if(i[4].setComponents(c-l,d-f,p-m,M-S).normalize(),t===Hi)i[5].setComponents(c+l,d+f,p+m,M+S).normalize();else if(t===Vl)i[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const t=O0.distanceTo(e.center);return $r.radius=.7071067811865476+t,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(tl.x=i.normal.x>0?e.max.x:e.min.x,tl.y=i.normal.y>0?e.max.y:e.min.y,tl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sm extends Yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new H,Wl=new H,md=new st,Fo=new rc,nl=new Ji,zc=new H,gd=new H;class tf extends Ht{constructor(e=new yi,t=new Sm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Gl.fromBufferAttribute(t,i-1),Wl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gl.distanceTo(Wl);e.setAttribute("lineDistance",new Li(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(i),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;md.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(md);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),T=u.getX(_+1),b=il(this,e,Fo,l,p,T,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=il(this,e,Fo,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=il(this,e,Fo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=il(this,e,Fo,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function il(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Gl.fromBufferAttribute(a,i),Wl.fromBufferAttribute(a,s),t.distanceSqToSegment(Gl,Wl,zc,gd)>n)return;zc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(zc);if(!(c<e.near||c>e.far))return{distance:c,point:gd.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const _d=new H,xd=new H;class B0 extends tf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_d.fromBufferAttribute(t,i),xd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_d.distanceTo(xd);e.setAttribute("lineDistance",new Li(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k0 extends tf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Mm extends Yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vd=new st,oh=new rc,rl=new Ji,sl=new H;class z0 extends Ht{constructor(e=new yi,t=new Mm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(i),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;vd.copy(i).invert(),oh.copy(e.ray).applyMatrix4(vd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);sl.fromBufferAttribute(h,m),Sd(sl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)sl.fromBufferAttribute(h,g),Sd(sl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sd(r,e,t,n,i,s,o){const a=oh.distanceSqToPoint(r);if(a<t){const l=new H;oh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ta extends dn{constructor(e,t,n=Ki,i,s,o,a=sn,l=sn,c,u=_r,h=1){if(u!==_r&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class V0 extends Ta{constructor(e,t=Ki,n=Ss,i,s,o=sn,a=sn,l,c=_r){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ym extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sc extends yi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let b=0;b<c;b++){const S=b*h-s;g.push(S,-T,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const b=T+c*p,S=T+c*(p+1),M=T+1+c*(p+1),w=T+1+c*p;d.push(b,S,w),d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new Li(g,3)),this.setAttribute("normal",new Li(_,3)),this.setAttribute("uv",new Li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class H0 extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nf extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lm,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qi extends nf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class G0 extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W0 extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ol(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function X0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Md(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Tm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ua{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Y0 extends Ua{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bf,endingEnd:Bf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kf:s=e,a=2*t-n;break;case zf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kf:o=e,l=2*n-t;break;case zf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,T=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+T*o[c+M]+b*o[l+M]+S*o[h+M];return s}}class q0 extends Ua{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class K0 extends Ua{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ol(t,this.TimeBufferType),this.values=ol(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ol(e.times,Array),values:ol(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new K0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Y0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case Sa:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&z_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Sa;class Eo extends Ii{constructor(e,t,n){super(e,t,n)}}Eo.prototype.ValueTypeName="bool";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=va;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class bm extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}bm.prototype.ValueTypeName="color";class po extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}po.prototype.ValueTypeName="number";class j0 extends Ua{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Wr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class mo extends Ii{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new j0(this.times,this.values,this.getValueSize(),e)}}mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends Ii{constructor(e,t,n){super(e,t,n)}}wo.prototype.ValueTypeName="string";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=va;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}go.prototype.ValueTypeName="vector";class $0{constructor(e="",t=-1,n=[],i=P_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(J0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=X0(l);l=Md(l,1,u),c=Md(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new po(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ze("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Tm(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let T=0;T!==f[g].morphTargets.length;++T){const b=f[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new po(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(go,d+".position",f,"pos",i),n(mo,d+".quaternion",f,"rot",i),n(go,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Z0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return po;case"vector":case"vector2":case"vector3":case"vector4":return go;case"color":return bm;case"quaternion":return mo;case"bool":case"boolean":return Eo;case"string":return wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function J0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Z0(r.type);if(r.times===void 0){const t=[],n=[];Tm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ur={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Q0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ex=new Q0;class Ao{constructor(e){this.manager=e!==void 0?e:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr={};class tx extends Error{constructor(e,t){super(e),this.response=t}}class Em extends Ao{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ur.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(sr[e]!==void 0){sr[e].push({onLoad:t,onProgress:n,onError:i});return}sr[e]=[],sr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=sr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:b,value:S})=>{if(b)p.close();else{_+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,A=u.length;w<A;w++){const P=u[w];P.onProgress&&P.onProgress(M)}p.enqueue(S),T()}},b=>{p.error(b)})}}});return new Response(m)}else throw new tx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ur.add(`file:${e}`,c);const u=sr[e];delete sr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=sr[e];if(u===void 0)throw this.manager.itemError(e),c;delete sr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zs=new WeakMap;class nx extends Ao{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ur.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=zs.get(o);h===void 0&&(h=[],zs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Ma("img");function l(){u(),t&&t(this);const h=zs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}zs.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),ur.remove(`image:${e}`);const f=zs.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}zs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ur.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class ix extends Ao{constructor(e){super(e)}load(e,t,n,i){const s=new dn,o=new nx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class oc extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Vc=new st,yd=new H,Td=new H;class rf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ef,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rx extends rf{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ho*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sx extends oc{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new rx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ox extends rf{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class ax extends oc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ac extends gm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lx extends rf{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ah extends oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new lx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cx extends oc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ia{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Hc=new WeakMap;class ux extends Ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ur.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Hc.has(o)===!0)i&&i(Hc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ur.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Hc.set(l,c),ur.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ur.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class hx extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const sf="\\[\\]\\.:\\/",dx=new RegExp("["+sf+"]","g"),of="[^"+sf+"]",px="[^"+sf.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",of),gx=/(WCOD+)?/.source.replace("WCOD",px),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",of),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",of),vx=new RegExp("^"+mx+gx+_x+xx+"$"),Sx=["material","materials","bones","map"];class Mx{constructor(e,t,n){const i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class wt{constructor(e,t,n){this.path=t,this.parsedPath=n||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new wt.Composite(e,t,n):new wt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(e){const t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Sx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=Mx;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function bd(r,e,t,n){const i=yx(n);switch(t){case sm:return r*e;case Gh:return r*e/i.components*i.byteLength;case Wh:return r*e/i.components*i.byteLength;case uo:return r*e*2/i.components*i.byteLength;case Xh:return r*e*2/i.components*i.byteLength;case om:return r*e*3/i.components*i.byteLength;case _i:return r*e*4/i.components*i.byteLength;case Yh:return r*e*4/i.components*i.byteLength;case bl:case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wu:case Ru:return Math.max(r,16)*Math.max(e,8)/4;case Eu:case Au:return Math.max(r,8)*Math.max(e,8)/2;case Cu:case Pu:case Lu:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Du:case Nu:case Uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $u:case Zu:case Ju:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qu:case eh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case th:case nh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yx(r){switch(r){case ti:case tm:return{byteLength:1,components:1};case _a:case nm:case gr:return{byteLength:2,components:1};case Vh:case Hh:return{byteLength:2,components:4};case Ki:case zh:case gi:return{byteLength:4,components:1};case im:case rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);function wm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Tx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qx=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hv=`#ifdef USE_GRADIENTMAP
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
}`,fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,lS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xS=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bS=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,PS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,LS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,HS=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,YS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,KS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:bx,alphahash_pars_fragment:Ex,alphamap_fragment:wx,alphamap_pars_fragment:Ax,alphatest_fragment:Rx,alphatest_pars_fragment:Cx,aomap_fragment:Px,aomap_pars_fragment:Dx,batching_pars_vertex:Lx,batching_vertex:Ix,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:Fx,iridescence_fragment:Ox,bumpmap_pars_fragment:Bx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:Yx,common:qx,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:jx,displacementmap_pars_vertex:$x,displacementmap_vertex:Zx,emissivemap_fragment:Jx,emissivemap_pars_fragment:Qx,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:rv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:gv,envmap_vertex:ov,fog_vertex:av,fog_pars_vertex:lv,fog_fragment:cv,fog_pars_fragment:uv,gradientmap_pars_fragment:hv,lightmap_pars_fragment:fv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:_v,lights_toon_pars_fragment:xv,lights_phong_fragment:vv,lights_phong_pars_fragment:Sv,lights_physical_fragment:Mv,lights_physical_pars_fragment:yv,lights_fragment_begin:Tv,lights_fragment_maps:bv,lights_fragment_end:Ev,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Cv,map_fragment:Pv,map_pars_fragment:Dv,map_particle_fragment:Lv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Fv,morphcolor_vertex:Ov,morphnormal_vertex:Bv,morphtarget_pars_vertex:kv,morphtarget_vertex:zv,normal_fragment_begin:Vv,normal_fragment_maps:Hv,normal_pars_fragment:Gv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:$v,opaque_fragment:Zv,packing:Jv,premultiplied_alpha_fragment:Qv,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:oS,shadowmap_vertex:aS,shadowmask_pars_fragment:lS,skinbase_vertex:cS,skinning_pars_vertex:uS,skinning_vertex:hS,skinnormal_vertex:fS,specularmap_fragment:dS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:_S,transmission_pars_fragment:xS,uv_pars_fragment:vS,uv_pars_vertex:SS,uv_vertex:MS,worldpos_vertex:yS,background_vert:TS,background_frag:bS,backgroundCube_vert:ES,backgroundCube_frag:wS,cube_vert:AS,cube_frag:RS,depth_vert:CS,depth_frag:PS,distance_vert:DS,distance_frag:LS,equirect_vert:IS,equirect_frag:NS,linedashed_vert:US,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:BS,meshlambert_vert:kS,meshlambert_frag:zS,meshmatcap_vert:VS,meshmatcap_frag:HS,meshnormal_vert:GS,meshnormal_frag:WS,meshphong_vert:XS,meshphong_frag:YS,meshphysical_vert:qS,meshphysical_frag:KS,meshtoon_vert:jS,meshtoon_frag:$S,points_vert:ZS,points_frag:JS,shadow_vert:QS,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Bi={basic:{uniforms:Cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Cn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Cn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Cn([Me.points,Me.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Cn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Cn([Me.common,Me.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Cn([Me.sprite,Me.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Cn([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Cn([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Bi.physical={uniforms:Cn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const al={r:0,b:0,g:0},Zr=new ji,iM=new st;function rM(r,e,t,n,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const M=g(b);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,S){const M=g(S);M&&(M.isCubeTexture||M.mapping===ic)?(u===void 0&&(u=new ai(new Na(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:fo(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Zr.copy(S.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Zr)),u.material.toneMapped=dt.getTransfer(M.colorSpace)!==bt,(h!==M||f!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ai(new sc(2,2),new $i({name:"BackgroundMaterial",uniforms:fo(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dt.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(al,mm(r)),n.buffers.color.setClear(al.r,al.g,al.b,S,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:T}}function sM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(y,D,I,F,z){let W=!1;const k=h(F,I,D);s!==k&&(s=k,c(s.object)),W=d(y,F,I,z),W&&g(y,F,I,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(y,D,I,F),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,D,I){const F=I.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let W=z[D.id];W===void 0&&(W={},z[D.id]=W);let k=W[F];return k===void 0&&(k=f(l()),W[F]=k),k}function f(y){const D=[],I=[],F=[];for(let z=0;z<t;z++)D[z]=0,I[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,D,I,F){const z=s.attributes,W=D.attributes;let k=0;const O=I.getAttributes();for(const K in O)if(O[K].location>=0){const C=z[K];let ie=W[K];if(ie===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),C===void 0||C.attribute!==ie||ie&&C.data!==ie.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(y,D,I,F){const z={},W=D.attributes;let k=0;const O=I.getAttributes();for(const K in O)if(O[K].location>=0){let C=W[K];C===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(C=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(C=y.instanceColor));const ie={};ie.attribute=C,C&&C.data&&(ie.data=C.data),z[K]=ie,k++}s.attributes=z,s.attributesNum=k,s.index=F}function _(){const y=s.newAttributes;for(let D=0,I=y.length;D<I;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const I=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;I[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),z[y]!==D&&(r.vertexAttribDivisor(y,D),z[y]=D)}function T(){const y=s.newAttributes,D=s.enabledAttributes;for(let I=0,F=D.length;I<F;I++)D[I]!==y[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function b(y,D,I,F,z,W,k){k===!0?r.vertexAttribIPointer(y,D,I,z,W):r.vertexAttribPointer(y,D,I,F,z,W)}function S(y,D,I,F){_();const z=F.attributes,W=I.getAttributes(),k=D.defaultAttributeValues;for(const O in W){const K=W[O];if(K.location>=0){let te=z[O];if(te===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){const C=te.normalized,ie=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;const Ie=Ee.buffer,Ve=Ee.type,Ke=Ee.bytesPerElement,Z=Ve===r.INT||Ve===r.UNSIGNED_INT||te.gpuType===zh;if(te.isInterleavedBufferAttribute){const J=te.data,de=J.stride,we=te.offset;if(J.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)p(K.location+Ae,J.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)m(K.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Ae=0;Ae<K.locationSize;Ae++)b(K.location+Ae,ie/K.locationSize,Ve,C,de*Ke,(we+ie/K.locationSize*Ae)*Ke,Z)}else{if(te.isInstancedBufferAttribute){for(let J=0;J<K.locationSize;J++)p(K.location+J,te.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let J=0;J<K.locationSize;J++)m(K.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let J=0;J<K.locationSize;J++)b(K.location+J,ie/K.locationSize,Ve,C,ie*Ke,ie/K.locationSize*J*Ke,Z)}}else if(k!==void 0){const C=k[O];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(K.location,C);break;case 3:r.vertexAttrib3fv(K.location,C);break;case 4:r.vertexAttrib4fv(K.location,C);break;default:r.vertexAttrib1fv(K.location,C)}}}}T()}function M(){P();for(const y in n){const D=n[y];for(const I in D){const F=D[I];for(const z in F)u(F[z].object),delete F[z];delete D[I]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const I in D){const F=D[I];for(const z in F)u(F[z].object),delete F[z];delete D[I]}delete n[y.id]}function A(y){for(const D in n){const I=n[D];if(I[y.id]===void 0)continue;const F=I[y.id];for(const z in F)u(F[z].object),delete F[z];delete I[y.id]}}function P(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function oM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==_i&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ti&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!P)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,maxSamples:M,samples:w}}function lM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ns,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,b=T*4;let S=p.clippingState||null;l.value=S,S=u(g,f,b,d);for(let M=0;M!==b;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=d;b!==_;++b,S+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cM(r){let e=new WeakMap;function t(o,a){return a===Tu?o.mapping=Ss:a===bu&&(o.mapping=lo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tu||a===bu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xm(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Dr=4,Ed=[.125,.215,.35,.446,.526,.582],as=20,uM=256,Oo=new ac,wd=new et;let Gc=null,Wc=0,Xc=0,Yc=!1;const hM=new H;class Ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=hM}=s;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:gr,format:_i,colorSpace:On,depthBuffer:!1},i=Rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fM(s)),this._blurMaterial=pM(s,e,t),this._ggxMaterial=dM(s,e,t)}return i}_compileMaterial(e){const t=new ai(new yi,e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,i,s){const l=new In(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(wd),h.toneMapping=Pi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new Na,new cs({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(wd),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const M=this._cubeSize;Vs(i,S*M,b>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ss||e.mapping===lo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Dr?n-g+Dr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Vs(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,Oo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Vs(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,Oo)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*as-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):as;m>as&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let T=0;for(let A=0;A<as;++A){const P=A/_,x=Math.exp(-P*P/2);p.push(x),A===0?T+=x:A<m&&(T+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[i],M=3*S*(i>b-Dr?i-b+Dr:0),w=4*(this._cubeSize-S);Vs(t,M,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Oo)}}function fM(r){const e=[],t=[],n=[];let i=r;const s=r-Dr+1+Ed.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Dr?l=Ed[o-r+Dr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),b=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,P=w>2?0:-1,x=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];T.set(x,_*g*w),b.set(f,m*g*w);const y=[w,w,w,w,w,w];S.set(y,p*g*w)}const M=new yi;M.setAttribute("position",new Fn(T,_)),M.setAttribute("uv",new Fn(b,m)),M.setAttribute("faceIndex",new Fn(S,p)),n.push(new ai(M,null)),i>Dr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Rd(r,e,t){const n=new Xi(r,e,t);return n.texture.mapping=ic,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dM(r,e,t){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function pM(r,e,t){const n=new Float32Array(as),i=new H(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lc(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Cd(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Pd(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function mM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tu||l===bu,u=l===Ss||l===lo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ad(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Ad(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ya("WebGLRenderer: "+n+" extension not supported."),i}}}function _M(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let b=0,S=T.length;b<S;b+=3){const M=T[b+0],w=T[b+1],A=T[b+2];f.push(M,w,w,A,A,M)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const M=b+0,w=b+1,A=b+2;f.push(M,w,w,A,A,M)}}else return;const m=new(cm(f)?pm:dm)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function SM(r,e,t){const n=new WeakMap,i=new Ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let S=a.attributes.position.count*b,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*M*4*h),A=new um(w,S,M,h);A.type=gi,A.needsUpdate=!0;const P=b*4;for(let y=0;y<h;y++){const D=m[y],I=p[y],F=T[y],z=S*M*4*y;for(let W=0;W<D.count;W++){const k=W*P;d===!0&&(i.fromBufferAttribute(D,W),w[z+k+0]=i.x,w[z+k+1]=i.y,w[z+k+2]=i.z,w[z+k+3]=0),g===!0&&(i.fromBufferAttribute(I,W),w[z+k+4]=i.x,w[z+k+5]=i.y,w[z+k+6]=i.z,w[z+k+7]=0),_===!0&&(i.fromBufferAttribute(F,W),w[z+k+8]=i.x,w[z+k+9]=i.y,w[z+k+10]=i.z,w[z+k+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new _t(S,M)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function MM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const yM={[Yp]:"LINEAR_TONE_MAPPING",[qp]:"REINHARD_TONE_MAPPING",[Kp]:"CINEON_TONE_MAPPING",[jp]:"ACES_FILMIC_TONE_MAPPING",[Zp]:"AGX_TONE_MAPPING",[Jp]:"NEUTRAL_TONE_MAPPING",[$p]:"CUSTOM_TONE_MAPPING"};function TM(r,e,t,n,i){const s=new Xi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Xi(e,t,{type:gr,depthBuffer:!1,stencilBuffer:!1}),a=new yi;a.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Li([0,2,0,0,2,0],2));const l=new H0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ai(a,l),u=new ac(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(T,b){s.setSize(T,b),o.setSize(T,b);for(let S=0;S<m.length;S++){const M=m[S];M.setSize&&M.setSize(T,b)}},this.setEffects=function(T){m=T,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,S=s.height;for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(b,S)}},this.begin=function(T,b){if(d||T.toneMapping===Pi&&m.length===0)return!1;if(_=b,b!==null){const S=b.width,M=b.height;(s.width!==S||s.height!==M)&&this.setSize(S,M)}return p===!1&&T.setRenderTarget(s),g=T.toneMapping,T.toneMapping=Pi,!0},this.hasRenderPass=function(){return p},this.end=function(T,b){T.toneMapping=g,d=!0;let S=s,M=o;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(T,M,S,b),A.needsSwap!==!1)){const P=S;S=M,M=P}}if(h!==T.outputColorSpace||f!==T.toneMapping){h=T.outputColorSpace,f=T.toneMapping,l.defines={},dt.getTransfer(h)===bt&&(l.defines.SRGB_TRANSFER="");const w=yM[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,T.setRenderTarget(_),T.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Am=new dn,lh=new Ta(1,1),Rm=new um,Cm=new u0,Pm=new _m,Dd=[],Ld=[],Id=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function Ro(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dd[i];if(s===void 0&&(s=new Float32Array(i),Dd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cc(r,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function bM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function EM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function wM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function AM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function RM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Ud.set(n),r.uniformMatrix2fv(this.addr,!1,Ud),ln(t,n)}}function CM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Nd.set(n),r.uniformMatrix3fv(this.addr,!1,Nd),ln(t,n)}}function PM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Id.set(n),r.uniformMatrix4fv(this.addr,!1,Id),ln(t,n)}}function DM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function LM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function NM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function UM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function kM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(lh.compareFunction=t.isReversedDepthBuffer()?Kh:qh,s=lh):s=Am,t.setTexture2D(e||s,i)}function zM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cm,i)}function VM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pm,i)}function HM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rm,i)}function GM(r){switch(r){case 5126:return bM;case 35664:return EM;case 35665:return wM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return DM;case 35667:case 35671:return LM;case 35668:case 35672:return IM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return FM;case 36295:return OM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return HM}}function WM(r,e){r.uniform1fv(this.addr,e)}function XM(r,e){const t=Ro(e,this.size,2);r.uniform2fv(this.addr,t)}function YM(r,e){const t=Ro(e,this.size,3);r.uniform3fv(this.addr,t)}function qM(r,e){const t=Ro(e,this.size,4);r.uniform4fv(this.addr,t)}function KM(r,e){const t=Ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jM(r,e){const t=Ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $M(r,e){const t=Ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ZM(r,e){r.uniform1iv(this.addr,e)}function JM(r,e){r.uniform2iv(this.addr,e)}function QM(r,e){r.uniform3iv(this.addr,e)}function ey(r,e){r.uniform4iv(this.addr,e)}function ty(r,e){r.uniform1uiv(this.addr,e)}function ny(r,e){r.uniform2uiv(this.addr,e)}function iy(r,e){r.uniform3uiv(this.addr,e)}function ry(r,e){r.uniform4uiv(this.addr,e)}function sy(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=lh:o=Am;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function oy(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Cm,s[o])}function ay(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Pm,s[o])}function ly(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rm,s[o])}function cy(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return YM;case 35666:return qM;case 35674:return KM;case 35675:return jM;case 35676:return $M;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}class uy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}}class hy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cy(t.type)}}class fy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function Fd(r,e){r.seq.push(e),r.map[e.id]=e}function dy(r,e,t){const n=r.name,i=n.length;for(qc.lastIndex=0;;){const s=qc.exec(n),o=qc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fd(t,c===void 0?new uy(a,r,e):new hy(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new fy(a),Fd(t,h)),t=h}}}class Cl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);dy(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Od(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const py=37297;let my=0;function gy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Bd=new it;function _y(r){dt._getMatrix(Bd,dt.workingColorSpace,r);const e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case zl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+gy(r.getShaderSource(e),a)}else return s}function xy(r,e){const t=_y(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vy={[Yp]:"Linear",[qp]:"Reinhard",[Kp]:"Cineon",[jp]:"ACESFilmic",[Zp]:"AgX",[Jp]:"Neutral",[$p]:"Custom"};function Sy(r,e){const t=vy[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ll=new H;function My(){dt.getLuminanceCoefficients(ll);const r=ll.x.toFixed(4),e=ll.y.toFixed(4),t=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function Ty(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function by(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Yo(r){return r!==""}function zd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(r){return r.replace(Ey,Ay)}const wy=new Map;function Ay(r,e){let t=rt[e];if(t===void 0){const n=wy.get(e);if(n!==void 0)t=rt[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}const Ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(r){return r.replace(Ry,Cy)}function Cy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Py={[yl]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function Dy(r){return Py[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ly={[Ss]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[ic]:"ENVMAP_TYPE_CUBE_UV"};function Iy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Ly[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ny={[lo]:"ENVMAP_MODE_REFRACTION"};function Uy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ny[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fy={[Xp]:"ENVMAP_BLENDING_MULTIPLY",[A_]:"ENVMAP_BLENDING_MIX",[R_]:"ENVMAP_BLENDING_ADD"};function Oy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Fy[r.combine]||"ENVMAP_BLENDING_NONE"}function By(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ky(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Dy(t),c=Iy(t),u=Uy(t),h=Oy(t),f=By(t),d=yy(t),g=Ty(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yo).join(`
`),p.length>0&&(p+=`
`)):(m=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),p=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,xy("linearToOutputTexel",t.outputColorSpace),My(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),o=ch(o),o=zd(o,t),o=Vd(o,t),a=ch(a),a=zd(a,t),a=Vd(a,t),o=Hd(o),a=Hd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+o,S=T+p+a,M=Od(i,i.VERTEX_SHADER,b),w=Od(i,i.FRAGMENT_SHADER,S);i.attachShader(_,M),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(M)||"",z=i.getShaderInfoLog(w)||"",W=I.trim(),k=F.trim(),O=z.trim();let K=!0,te=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,w);else{const C=kd(i,M,"vertex"),ie=kd(i,w,"fragment");Ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+C+`
`+ie)}else W!==""?ze("WebGLProgram: Program Info Log:",W):(k===""||O==="")&&(te=!1);te&&(D.diagnostics={runnable:K,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(M),i.deleteShader(w),P=new Cl(i,_),x=by(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,py)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=my++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let zy=0;class Vy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hy(e),t.set(e,n)),n}}class Hy{constructor(e){this.id=zy++,this.code=e,this.usedTimes=0}}function Gy(r,e,t,n,i,s,o){const a=new hm,l=new Vy,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,D,I,F){const z=I.fog,W=F.geometry,k=x.isMeshStandardMaterial?I.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),K=O&&O.mapping===ic?O.image.height:null,te=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const C=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=C!==void 0?C.length:0;let Ee=0;W.morphAttributes.position!==void 0&&(Ee=1),W.morphAttributes.normal!==void 0&&(Ee=2),W.morphAttributes.color!==void 0&&(Ee=3);let Ie,Ve,Ke,Z;if(te){const ye=Bi[te];Ie=ye.vertexShader,Ve=ye.fragmentShader}else Ie=x.vertexShader,Ve=x.fragmentShader,l.update(x),Ke=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const J=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,He=!!x.map,ct=!!x.matcap,Re=!!O,Xe=!!x.aoMap,Qe=!!x.lightMap,ke=!!x.bumpMap,G=!!x.normalMap,N=!!x.displacementMap,Q=!!x.emissiveMap,Se=!!x.metalnessMap,fe=!!x.roughnessMap,oe=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,U=x.iridescence>0,j=x.sheen>0,$=x.transmission>0,X=oe&&!!x.anisotropyMap,_e=R&&!!x.clearcoatMap,le=R&&!!x.clearcoatNormalMap,Ce=R&&!!x.clearcoatRoughnessMap,Pe=U&&!!x.iridescenceMap,se=U&&!!x.iridescenceThicknessMap,ce=j&&!!x.sheenColorMap,be=j&&!!x.sheenRoughnessMap,De=!!x.specularMap,he=!!x.specularColorMap,qe=!!x.specularIntensityMap,L=$&&!!x.transmissionMap,pe=$&&!!x.thicknessMap,re=!!x.gradientMap,me=!!x.alphaMap,ne=x.alphaTest>0,ee=!!x.alphaHash,ae=!!x.extensions;let Oe=Pi;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=r.toneMapping);const mt={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Ve,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:On,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:ct,envMap:Re,envMapMode:Re&&O.mapping,envMapCubeUVHeight:K,aoMap:Xe,lightMap:Qe,bumpMap:ke,normalMap:G,displacementMap:N,emissiveMap:Q,normalMapObjectSpace:G&&x.normalMapType===I_,normalMapTangentSpace:G&&x.normalMapType===lm,metalnessMap:Se,roughnessMap:fe,anisotropy:oe,anisotropyMap:X,clearcoat:R,clearcoatMap:_e,clearcoatNormalMap:le,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:U,iridescenceMap:Pe,iridescenceThicknessMap:se,sheen:j,sheenColorMap:ce,sheenRoughnessMap:be,specularMap:De,specularColorMap:he,specularIntensityMap:qe,transmission:$,transmissionMap:L,thicknessMap:pe,gradientMap:re,opaque:x.transparent===!1&&x.blending===Js&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:ee,combine:x.combine,mapUv:He&&_(x.map.channel),aoMapUv:Xe&&_(x.aoMap.channel),lightMapUv:Qe&&_(x.lightMap.channel),bumpMapUv:ke&&_(x.bumpMap.channel),normalMapUv:G&&_(x.normalMap.channel),displacementMapUv:N&&_(x.displacementMap.channel),emissiveMapUv:Q&&_(x.emissiveMap.channel),metalnessMapUv:Se&&_(x.metalnessMap.channel),roughnessMapUv:fe&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:_e&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(x.sheenRoughnessMap.channel),specularMapUv:De&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:qe&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:pe&&_(x.thicknessMap.channel),alphaMapUv:me&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(G||oe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(He||me),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Oe,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Q&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ki,flipSided:x.side===Vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)y.push(D),y.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(T(y,x),b(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function T(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function b(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){const y=g[x.type];let D;if(y){const I=Bi[y];D=T0.clone(I.uniforms)}else D=x.uniforms;return D}function M(x,y){let D=h.get(y);return D!==void 0?++D.usedTimes:(D=new ky(r,y,x,s),u.push(D),h.set(y,D)),D}function w(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:P}}function Wy(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Xy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Xy),n.length>1&&n.sort(f||Wd),i.length>1&&i.sort(f||Wd)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Yy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Xd,r.set(n,[o])):i>=s.length?(o=new Xd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function qy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function Ky(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let jy=0;function $y(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Zy(r){const e=new qy,t=Ky(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new st,o=new st;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,b=0,S=0,M=0,w=0,A=0;c.sort($y);for(let x=0,y=c.length;x<y;x++){const D=c[x],I=D.color,F=D.intensity,z=D.distance;let W=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===uo?W=D.shadow.map.texture:W=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*F,h+=I.g*F,f+=I.b*F;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],F);A++}else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,K=t.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=D.shadow.matrix,T++}n.directional[d]=k,d++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(I).multiplyScalar(F),k.distance=z,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[_]=k;const O=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,O.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=O.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=W,S++}_++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(I).multiplyScalar(F),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=k,m++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const O=D.shadow,K=t.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,K.shadowCameraNear=O.camera.near,K.shadowCameraFar=O.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=k,g++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(F),k.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==b||P.numSpotShadows!==S||P.numSpotMaps!==M||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=b,P.numSpotShadows=S,P.numSpotMaps=M,P.numLightProbes=A,n.version=jy++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Yd(r){const e=new Zy(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Jy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Yd(r),e.set(i,[a])):s>=o.length?(a=new Yd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tT=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],nT=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],qd=new st,Bo=new H,Kc=new H;function iT(r,e,t){let n=new ef;const i=new _t,s=new _t,o=new Ut,a=new G0,l=new W0,c={},u=t.maxTextureSize,h={[mr]:Vn,[Vn]:mr,[ki]:ki},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Qy,fragmentShader:eT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new yi;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ai(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let p=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Wp&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=yl);const x=r.getRenderTarget(),y=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(fr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(W=>W.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,W=w.length;z<W;z++){const k=w[z],O=k.shadow;if(O===void 0){ze("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const K=O.getFrameExtents();if(i.multiply(K),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,O.mapSize.y=s.y)),O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Wo){if(k.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Xi(i.x,i.y,{format:uo,type:gr,minFilter:on,magFilter:on,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new Ta(i.x,i.y,gi),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=_r,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn}else{k.isPointLight?(O.map=new xm(i.x),O.map.depthTexture=new V0(i.x,Ki)):(O.map=new Xi(i.x,i.y),O.map.depthTexture=new Ta(i.x,i.y,Ki)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=_r;const C=r.state.buffers.depth.getReversed();this.type===yl?(O.map.depthTexture.compareFunction=C?Kh:qh,O.map.depthTexture.minFilter=on,O.map.depthTexture.magFilter=on):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn)}O.camera.updateProjectionMatrix()}const te=O.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<te;C++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,C),r.clear();else{C===0&&(r.setRenderTarget(O.map),r.clear());const ie=O.getViewport(C);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),I.viewport(o)}if(k.isPointLight){const ie=O.camera,Ee=O.matrix,Ie=k.distance||ie.far;Ie!==ie.far&&(ie.far=Ie,ie.updateProjectionMatrix()),Bo.setFromMatrixPosition(k.matrixWorld),ie.position.copy(Bo),Kc.copy(ie.position),Kc.add(tT[C]),ie.up.copy(nT[C]),ie.lookAt(Kc),ie.updateMatrixWorld(),Ee.makeTranslation(-Bo.x,-Bo.y,-Bo.z),qd.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qd,ie.coordinateSystem,ie.reversedDepth)}else O.updateMatrices(k);n=O.getFrustum(),S(A,P,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===Wo&&T(O,P),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,y,D)};function T(w,A){const P=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(i.x,i.y,{format:uo,type:gr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,P,d,_,null)}function b(w,A,P,x){let y=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)y=D;else if(y=P.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=y.uuid,F=A.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let W=z[F];W===void 0&&(W=y.clone(),z[F]=W,A.addEventListener("dispose",M)),y=W}if(y.visible=A.visible,y.wireframe=A.wireframe,x===Wo?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=r.properties.get(y);I.light=P}return y}function S(w,A,P,x,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Wo)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const F=e.update(w),z=w.material;if(Array.isArray(z)){const W=F.groups;for(let k=0,O=W.length;k<O;k++){const K=W[k],te=z[K.materialIndex];if(te&&te.visible){const C=b(w,te,x,y);w.onBeforeShadow(r,w,A,P,F,C,K),r.renderBufferDirect(P,null,F,C,w,K),w.onAfterShadow(r,w,A,P,F,C,K)}}}else if(z.visible){const W=b(w,z,x,y);w.onBeforeShadow(r,w,A,P,F,W,null),r.renderBufferDirect(P,null,F,W,w,null),w.onAfterShadow(r,w,A,P,F,W,null)}}const I=w.children;for(let F=0,z=I.length;F<z;F++)S(I[F],A,P,x,y)}function M(w){w.target.removeEventListener("dispose",M);for(const P in c){const x=c[P],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const rT={[gu]:_u,[xu]:Mu,[vu]:yu,[ao]:Su,[_u]:gu,[Mu]:xu,[yu]:vu,[Su]:ao};function sT(r,e){function t(){let L=!1;const pe=new Ut;let re=null;const me=new Ut(0,0,0,0);return{setMask:function(ne){re!==ne&&!L&&(r.colorMask(ne,ne,ne,ne),re=ne)},setLocked:function(ne){L=ne},setClear:function(ne,ee,ae,Oe,mt){mt===!0&&(ne*=Oe,ee*=Oe,ae*=Oe),pe.set(ne,ee,ae,Oe),me.equals(pe)===!1&&(r.clearColor(ne,ee,ae,Oe),me.copy(pe))},reset:function(){L=!1,re=null,me.set(-1,0,0,0)}}}function n(){let L=!1,pe=!1,re=null,me=null,ne=null;return{setReversed:function(ee){if(pe!==ee){const ae=e.get("EXT_clip_control");ee?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),pe=ee;const Oe=ne;ne=null,this.setClear(Oe)}},getReversed:function(){return pe},setTest:function(ee){ee?J(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(ee){re!==ee&&!L&&(r.depthMask(ee),re=ee)},setFunc:function(ee){if(pe&&(ee=rT[ee]),me!==ee){switch(ee){case gu:r.depthFunc(r.NEVER);break;case _u:r.depthFunc(r.ALWAYS);break;case xu:r.depthFunc(r.LESS);break;case ao:r.depthFunc(r.LEQUAL);break;case vu:r.depthFunc(r.EQUAL);break;case Su:r.depthFunc(r.GEQUAL);break;case Mu:r.depthFunc(r.GREATER);break;case yu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ne!==ee&&(pe&&(ee=1-ee),r.clearDepth(ee),ne=ee)},reset:function(){L=!1,re=null,me=null,ne=null,pe=!1}}}function i(){let L=!1,pe=null,re=null,me=null,ne=null,ee=null,ae=null,Oe=null,mt=null;return{setTest:function(ye){L||(ye?J(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(ye){pe!==ye&&!L&&(r.stencilMask(ye),pe=ye)},setFunc:function(ye,Ne,tt){(re!==ye||me!==Ne||ne!==tt)&&(r.stencilFunc(ye,Ne,tt),re=ye,me=Ne,ne=tt)},setOp:function(ye,Ne,tt){(ee!==ye||ae!==Ne||Oe!==tt)&&(r.stencilOp(ye,Ne,tt),ee=ye,ae=Ne,Oe=tt)},setLocked:function(ye){L=ye},setClear:function(ye){mt!==ye&&(r.clearStencil(ye),mt=ye)},reset:function(){L=!1,pe=null,re=null,me=null,ne=null,ee=null,ae=null,Oe=null,mt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,S=null,M=null,w=null,A=new et(0,0,0),P=0,x=!1,y=null,D=null,I=null,F=null,z=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=O>=1):K.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=O>=2);let te=null,C={};const ie=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Ie=new Ut().fromArray(ie),Ve=new Ut().fromArray(Ee);function Ke(L,pe,re,me){const ne=new Uint8Array(4),ee=r.createTexture();r.bindTexture(L,ee),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<re;ae++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(pe+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return ee}const Z={};Z[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(ao),ke(!1),G(If),J(r.CULL_FACE),Xe(fr);function J(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function de(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function we(L,pe){return h[L]!==pe?(r.bindFramebuffer(L,pe),h[L]=pe,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=pe),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ae(L,pe){let re=d,me=!1;if(L){re=f.get(pe),re===void 0&&(re=[],f.set(pe,re));const ne=L.textures;if(re.length!==ne.length||re[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,ae=ne.length;ee<ae;ee++)re[ee]=r.COLOR_ATTACHMENT0+ee;re.length=ne.length,me=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,me=!0);me&&r.drawBuffers(re)}function He(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const ct={[os]:r.FUNC_ADD,[u_]:r.FUNC_SUBTRACT,[h_]:r.FUNC_REVERSE_SUBTRACT};ct[f_]=r.MIN,ct[d_]=r.MAX;const Re={[p_]:r.ZERO,[m_]:r.ONE,[g_]:r.SRC_COLOR,[pu]:r.SRC_ALPHA,[y_]:r.SRC_ALPHA_SATURATE,[S_]:r.DST_COLOR,[x_]:r.DST_ALPHA,[__]:r.ONE_MINUS_SRC_COLOR,[mu]:r.ONE_MINUS_SRC_ALPHA,[M_]:r.ONE_MINUS_DST_COLOR,[v_]:r.ONE_MINUS_DST_ALPHA,[T_]:r.CONSTANT_COLOR,[b_]:r.ONE_MINUS_CONSTANT_COLOR,[E_]:r.CONSTANT_ALPHA,[w_]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(L,pe,re,me,ne,ee,ae,Oe,mt,ye){if(L===fr){_===!0&&(de(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),L!==c_){if(L!==m||ye!==x){if((p!==os||S!==os)&&(r.blendEquation(r.FUNC_ADD),p=os,S=os),ye)switch(L){case Js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nf:r.blendFunc(r.ONE,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ff:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ze("WebGLState: Invalid blending: ",L);break}else switch(L){case Js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uf:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ff:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",L);break}T=null,b=null,M=null,w=null,A.set(0,0,0),P=0,m=L,x=ye}return}ne=ne||pe,ee=ee||re,ae=ae||me,(pe!==p||ne!==S)&&(r.blendEquationSeparate(ct[pe],ct[ne]),p=pe,S=ne),(re!==T||me!==b||ee!==M||ae!==w)&&(r.blendFuncSeparate(Re[re],Re[me],Re[ee],Re[ae]),T=re,b=me,M=ee,w=ae),(Oe.equals(A)===!1||mt!==P)&&(r.blendColor(Oe.r,Oe.g,Oe.b,mt),A.copy(Oe),P=mt),m=L,x=!1}function Qe(L,pe){L.side===ki?de(r.CULL_FACE):J(r.CULL_FACE);let re=L.side===Vn;pe&&(re=!re),ke(re),L.blending===Js&&L.transparent===!1?Xe(fr):Xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;a.setTest(me),me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){y!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),y=L)}function G(L){L!==a_?(J(r.CULL_FACE),L!==D&&(L===If?r.cullFace(r.BACK):L===l_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),D=L}function N(L){L!==I&&(k&&r.lineWidth(L),I=L)}function Q(L,pe,re){L?(J(r.POLYGON_OFFSET_FILL),(F!==pe||z!==re)&&(r.polygonOffset(pe,re),F=pe,z=re)):de(r.POLYGON_OFFSET_FILL)}function Se(L){L?J(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function fe(L){L===void 0&&(L=r.TEXTURE0+W-1),te!==L&&(r.activeTexture(L),te=L)}function oe(L,pe,re){re===void 0&&(te===null?re=r.TEXTURE0+W-1:re=te);let me=C[re];me===void 0&&(me={type:void 0,texture:void 0},C[re]=me),(me.type!==L||me.texture!==pe)&&(te!==re&&(r.activeTexture(re),te=re),r.bindTexture(L,pe||Z[L]),me.type=L,me.texture=pe)}function R(){const L=C[te];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function j(){try{r.texSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function $(){try{r.texSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function _e(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function le(){try{r.texStorage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Ce(){try{r.texStorage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Pe(){try{r.texImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function se(){try{r.texImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function ce(L){Ie.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ie.copy(L))}function be(L){Ve.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function De(L,pe){let re=c.get(pe);re===void 0&&(re=new WeakMap,c.set(pe,re));let me=re.get(L);me===void 0&&(me=r.getUniformBlockIndex(pe,L.name),re.set(L,me))}function he(L,pe){const me=c.get(pe).get(L);l.get(pe)!==me&&(r.uniformBlockBinding(pe,me,L.__bindingPointIndex),l.set(pe,me))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,C={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,S=null,M=null,w=null,A=new et(0,0,0),P=0,x=!1,y=null,D=null,I=null,F=null,z=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Ve.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:de,bindFramebuffer:we,drawBuffers:Ae,useProgram:He,setBlending:Xe,setMaterial:Qe,setFlipSided:ke,setCullFace:G,setLineWidth:N,setPolygonOffset:Q,setScissorTest:Se,activeTexture:fe,bindTexture:oe,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Pe,texImage3D:se,updateUBOMapping:De,uniformBlockBinding:he,texStorage2D:le,texStorage3D:Ce,texSubImage2D:j,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:_e,scissor:ce,viewport:be,reset:qe}}function oT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):Ma("canvas")}function _(R,v,U){let j=1;const $=oe(R);if(($.width>U||$.height>U)&&(j=U/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(j*$.width),_e=Math.floor(j*$.height);h===void 0&&(h=g(X,_e));const le=v?g(X,_e):h;return le.width=X,le.height=_e,le.getContext("2d").drawImage(R,0,0,X,_e),ze("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+_e+")."),le}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(R,v,U,j,$=!1){if(R!==null){if(r[R]!==void 0)return r[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=v;if(v===r.RED&&(U===r.FLOAT&&(X=r.R32F),U===r.HALF_FLOAT&&(X=r.R16F),U===r.UNSIGNED_BYTE&&(X=r.R8)),v===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.R8UI),U===r.UNSIGNED_SHORT&&(X=r.R16UI),U===r.UNSIGNED_INT&&(X=r.R32UI),U===r.BYTE&&(X=r.R8I),U===r.SHORT&&(X=r.R16I),U===r.INT&&(X=r.R32I)),v===r.RG&&(U===r.FLOAT&&(X=r.RG32F),U===r.HALF_FLOAT&&(X=r.RG16F),U===r.UNSIGNED_BYTE&&(X=r.RG8)),v===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.RG8UI),U===r.UNSIGNED_SHORT&&(X=r.RG16UI),U===r.UNSIGNED_INT&&(X=r.RG32UI),U===r.BYTE&&(X=r.RG8I),U===r.SHORT&&(X=r.RG16I),U===r.INT&&(X=r.RG32I)),v===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.RGB8UI),U===r.UNSIGNED_SHORT&&(X=r.RGB16UI),U===r.UNSIGNED_INT&&(X=r.RGB32UI),U===r.BYTE&&(X=r.RGB8I),U===r.SHORT&&(X=r.RGB16I),U===r.INT&&(X=r.RGB32I)),v===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),U===r.UNSIGNED_INT&&(X=r.RGBA32UI),U===r.BYTE&&(X=r.RGBA8I),U===r.SHORT&&(X=r.RGBA16I),U===r.INT&&(X=r.RGBA32I)),v===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),v===r.RGBA){const _e=$?zl:dt.getTransfer(j);U===r.FLOAT&&(X=r.RGBA32F),U===r.HALF_FLOAT&&(X=r.RGBA16F),U===r.UNSIGNED_BYTE&&(X=_e===bt?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(R,v){let U;return R?v===null||v===Ki||v===xa?U=r.DEPTH24_STENCIL8:v===gi?U=r.DEPTH32F_STENCIL8:v===_a&&(U=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ki||v===xa?U=r.DEPTH_COMPONENT24:v===gi?U=r.DEPTH_COMPONENT32F:v===_a&&(U=r.DEPTH_COMPONENT16),U}function M(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&u.delete(v)}function A(R){const v=R.target;v.removeEventListener("dispose",A),y(v)}function P(R){const v=n.get(R);if(v.__webglInit===void 0)return;const U=R.source,j=f.get(U);if(j){const $=j[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(R),Object.keys(j).length===0&&f.delete(U)}n.remove(R)}function x(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const U=R.source,j=f.get(U);delete j[v.__cacheKey],o.memory.textures--}function y(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let $=0;$<v.__webglFramebuffer[j].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[j][$]);else r.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)r.deleteFramebuffer(v.__webglFramebuffer[j]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=R.textures;for(let j=0,$=U.length;j<$;j++){const X=n.get(U[j]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(U[j])}n.remove(R)}let D=0;function I(){D=0}function F(){const R=D;return R>=i.maxTextures&&ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function z(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function W(R,v){const U=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const j=R.image;if(j===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+v)}function k(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Z(U,R,v);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+v)}function O(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Z(U,R,v);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+v)}function K(R,v){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){J(U,R,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+v)}const te={[co]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[kl]:r.MIRRORED_REPEAT},C={[sn]:r.NEAREST,[em]:r.NEAREST_MIPMAP_NEAREST,[Xo]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[Tl]:r.LINEAR_MIPMAP_NEAREST,[cr]:r.LINEAR_MIPMAP_LINEAR},ie={[N_]:r.NEVER,[k_]:r.ALWAYS,[U_]:r.LESS,[qh]:r.LEQUAL,[F_]:r.EQUAL,[Kh]:r.GEQUAL,[O_]:r.GREATER,[B_]:r.NOTEQUAL};function Ee(R,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===on||v.magFilter===Tl||v.magFilter===Xo||v.magFilter===cr||v.minFilter===on||v.minFilter===Tl||v.minFilter===Xo||v.minFilter===cr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,C[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,C[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==Xo&&v.minFilter!==cr||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ie(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const j=v.source;let $=f.get(j);$===void 0&&($={},f.set(j,$));const X=z(v);if(X!==R.__cacheKey){$[X]===void 0&&($[X]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[X].usedTimes++;const _e=$[R.__cacheKey];_e!==void 0&&($[R.__cacheKey].usedTimes--,_e.usedTimes===0&&x(v)),R.__cacheKey=X,R.__webglTexture=$[X].texture}return U}function Ve(R,v,U){return Math.floor(Math.floor(R/U)/v)}function Ke(R,v,U,j){const X=R.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,U,j,v.data);else{X.sort((se,ce)=>se.start-ce.start);let _e=0;for(let se=1;se<X.length;se++){const ce=X[_e],be=X[se],De=ce.start+ce.count,he=Ve(be.start,v.width,4),qe=Ve(ce.start,v.width,4);be.start<=De+1&&he===qe&&Ve(be.start+be.count-1,v.width,4)===he?ce.count=Math.max(ce.count,be.start+be.count-ce.start):(++_e,X[_e]=be)}X.length=_e+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Ce=r.getParameter(r.UNPACK_SKIP_PIXELS),Pe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let se=0,ce=X.length;se<ce;se++){const be=X[se],De=Math.floor(be.start/4),he=Math.ceil(be.count/4),qe=De%v.width,L=Math.floor(De/v.width),pe=he,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,qe,L,pe,re,U,j,v.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,Pe)}}function Z(R,v,U){let j=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=r.TEXTURE_3D);const $=Ie(R,v),X=v.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+U);const _e=n.get(X);if(X.version!==_e.__version||$===!0){t.activeTexture(r.TEXTURE0+U);const le=dt.getPrimaries(dt.workingColorSpace),Ce=v.colorSpace===Pr?null:dt.getPrimaries(v.colorSpace),Pe=v.colorSpace===Pr||le===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let se=_(v.image,!1,i.maxTextureSize);se=fe(v,se);const ce=s.convert(v.format,v.colorSpace),be=s.convert(v.type);let De=b(v.internalFormat,ce,be,v.colorSpace,v.isVideoTexture);Ee(j,v);let he;const qe=v.mipmaps,L=v.isVideoTexture!==!0,pe=_e.__version===void 0||$===!0,re=X.dataReady,me=M(v,se);if(v.isDepthTexture)De=S(v.format===ls,v.type),pe&&(L?t.texStorage2D(r.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ce,be,null));else if(v.isDataTexture)if(qe.length>0){L&&pe&&t.texStorage2D(r.TEXTURE_2D,me,De,qe[0].width,qe[0].height);for(let ne=0,ee=qe.length;ne<ee;ne++)he=qe[ne],L?re&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,ce,be,he.data):t.texImage2D(r.TEXTURE_2D,ne,De,he.width,he.height,0,ce,be,he.data);v.generateMipmaps=!1}else L?(pe&&t.texStorage2D(r.TEXTURE_2D,me,De,se.width,se.height),re&&Ke(v,se,ce,be)):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ce,be,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,De,qe[0].width,qe[0].height,se.depth);for(let ne=0,ee=qe.length;ne<ee;ne++)if(he=qe[ne],v.format!==_i)if(ce!==null)if(L){if(re)if(v.layerUpdates.size>0){const ae=bd(he.width,he.height,v.format,v.type);for(const Oe of v.layerUpdates){const mt=he.data.subarray(Oe*ae/he.data.BYTES_PER_ELEMENT,(Oe+1)*ae/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Oe,he.width,he.height,1,ce,mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,ce,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,De,he.width,he.height,se.depth,0,he.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,ce,be,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,De,he.width,he.height,se.depth,0,ce,be,he.data)}else{L&&pe&&t.texStorage2D(r.TEXTURE_2D,me,De,qe[0].width,qe[0].height);for(let ne=0,ee=qe.length;ne<ee;ne++)he=qe[ne],v.format!==_i?ce!==null?L?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,De,he.width,he.height,0,he.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he.width,he.height,ce,be,he.data):t.texImage2D(r.TEXTURE_2D,ne,De,he.width,he.height,0,ce,be,he.data)}else if(v.isDataArrayTexture)if(L){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,De,se.width,se.height,se.depth),re)if(v.layerUpdates.size>0){const ne=bd(se.width,se.height,v.format,v.type);for(const ee of v.layerUpdates){const ae=se.data.subarray(ee*ne/se.data.BYTES_PER_ELEMENT,(ee+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ce,be,ae)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ce,be,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,ce,be,se.data);else if(v.isData3DTexture)L?(pe&&t.texStorage3D(r.TEXTURE_3D,me,De,se.width,se.height,se.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ce,be,se.data)):t.texImage3D(r.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,ce,be,se.data);else if(v.isFramebufferTexture){if(pe)if(L)t.texStorage2D(r.TEXTURE_2D,me,De,se.width,se.height);else{let ne=se.width,ee=se.height;for(let ae=0;ae<me;ae++)t.texImage2D(r.TEXTURE_2D,ae,De,ne,ee,0,ce,be,null),ne>>=1,ee>>=1}}else if(qe.length>0){if(L&&pe){const ne=oe(qe[0]);t.texStorage2D(r.TEXTURE_2D,me,De,ne.width,ne.height)}for(let ne=0,ee=qe.length;ne<ee;ne++)he=qe[ne],L?re&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ce,be,he):t.texImage2D(r.TEXTURE_2D,ne,De,ce,be,he);v.generateMipmaps=!1}else if(L){if(pe){const ne=oe(se);t.texStorage2D(r.TEXTURE_2D,me,De,ne.width,ne.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,be,se)}else t.texImage2D(r.TEXTURE_2D,0,De,ce,be,se);m(v)&&p(j),_e.__version=X.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function J(R,v,U){if(v.image.length!==6)return;const j=Ie(R,v),$=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);const X=n.get($);if($.version!==X.__version||j===!0){t.activeTexture(r.TEXTURE0+U);const _e=dt.getPrimaries(dt.workingColorSpace),le=v.colorSpace===Pr?null:dt.getPrimaries(v.colorSpace),Ce=v.colorSpace===Pr||_e===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!Pe&&!se?ce[ee]=_(v.image[ee],!0,i.maxCubemapSize):ce[ee]=se?v.image[ee].image:v.image[ee],ce[ee]=fe(v,ce[ee]);const be=ce[0],De=s.convert(v.format,v.colorSpace),he=s.convert(v.type),qe=b(v.internalFormat,De,he,v.colorSpace),L=v.isVideoTexture!==!0,pe=X.__version===void 0||j===!0,re=$.dataReady;let me=M(v,be);Ee(r.TEXTURE_CUBE_MAP,v);let ne;if(Pe){L&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,qe,be.width,be.height);for(let ee=0;ee<6;ee++){ne=ce[ee].mipmaps;for(let ae=0;ae<ne.length;ae++){const Oe=ne[ae];v.format!==_i?De!==null?L?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,0,0,Oe.width,Oe.height,De,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,qe,Oe.width,Oe.height,0,Oe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,0,0,Oe.width,Oe.height,De,he,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae,qe,Oe.width,Oe.height,0,De,he,Oe.data)}}}else{if(ne=v.mipmaps,L&&pe){ne.length>0&&me++;const ee=oe(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){L?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,De,he,ce[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,ce[ee].width,ce[ee].height,0,De,he,ce[ee].data);for(let ae=0;ae<ne.length;ae++){const mt=ne[ae].image[ee].image;L?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,0,0,mt.width,mt.height,De,he,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,qe,mt.width,mt.height,0,De,he,mt.data)}}else{L?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,he,ce[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,De,he,ce[ee]);for(let ae=0;ae<ne.length;ae++){const Oe=ne[ae];L?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,0,0,De,he,Oe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae+1,qe,De,he,Oe.image[ee])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),X.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function de(R,v,U,j,$,X){const _e=s.convert(U.format,U.colorSpace),le=s.convert(U.type),Ce=b(U.internalFormat,_e,le,U.colorSpace),Pe=n.get(v),se=n.get(U);if(se.__renderTarget=v,!Pe.__hasExternalTextures){const ce=Math.max(1,v.width>>X),be=Math.max(1,v.height>>X);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,X,Ce,ce,be,v.depth,0,_e,le,null):t.texImage2D($,X,Ce,ce,be,0,_e,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Q(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,se.__webglTexture,0,N(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,$,se.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,v,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const j=v.depthTexture,$=j&&j.isDepthTexture?j.type:null,X=S(v.stencilBuffer,$),_e=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Q(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(v),X,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(v),X,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,X,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,R)}else{const j=v.textures;for(let $=0;$<j.length;$++){const X=j[$],_e=s.convert(X.format,X.colorSpace),le=s.convert(X.type),Ce=b(X.internalFormat,_e,le,X.colorSpace);Q(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(v),Ce,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(v),Ce,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(R,v,U){const j=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,v.depthTexture);const Pe=s.convert(v.depthTexture.format),se=s.convert(v.depthTexture.type);let ce;v.depthTexture.format===_r?ce=r.DEPTH_COMPONENT24:v.depthTexture.format===ls&&(ce=r.DEPTH24_STENCIL8);for(let be=0;be<6;be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ce,v.width,v.height,0,Pe,se,null)}}else W(v.depthTexture,0);const X=$.__webglTexture,_e=N(v),le=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,Ce=v.depthTexture.format===ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===_r)Q(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,le,X,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,le,X,0);else if(v.depthTexture.format===ls)Q(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,le,X,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,le,X,0);else throw new Error("Unknown depthTexture format")}function He(R){const v=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=j}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)Ae(v.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Ae(v.__webglFramebuffer[0],R,0):Ae(v.__webglFramebuffer,R,0)}else if(U){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=r.createRenderbuffer(),we(v.__webglDepthbuffer[j],R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),we(v.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(R,v,U){const j=n.get(R);v!==void 0&&de(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&He(R)}function Re(R){const v=R.texture,U=n.get(R),j=n.get(v);R.addEventListener("dispose",A);const $=R.textures,X=R.isWebGLCubeRenderTarget===!0,_e=$.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=v.version,o.memory.textures++),X){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)U.__webglFramebuffer[le][Ce]=r.createFramebuffer()}else U.__webglFramebuffer[le]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)U.__webglFramebuffer[le]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(_e)for(let le=0,Ce=$.length;le<Ce;le++){const Pe=n.get($[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Q(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const Ce=$[le];U.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[le]);const Pe=s.convert(Ce.format,Ce.colorSpace),se=s.convert(Ce.type),ce=b(Ce.internalFormat,Pe,se,Ce.colorSpace,R.isXRRenderTarget===!0),be=N(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,U.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),we(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)de(U.__webglFramebuffer[le][Ce],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce);else de(U.__webglFramebuffer[le],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let le=0,Ce=$.length;le<Ce;le++){const Pe=$[le],se=n.get(Pe);let ce=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,se.__webglTexture),Ee(ce,Pe),de(U.__webglFramebuffer,R,Pe,r.COLOR_ATTACHMENT0+le,ce,0),m(Pe)&&p(ce)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Ee(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)de(U.__webglFramebuffer[Ce],R,v,r.COLOR_ATTACHMENT0,le,Ce);else de(U.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}R.depthBuffer&&He(R)}function Xe(R){const v=R.textures;for(let U=0,j=v.length;U<j;U++){const $=v[U];if(m($)){const X=T(R),_e=n.get($).__webglTexture;t.bindTexture(X,_e),p(X),t.unbindTexture()}}}const Qe=[],ke=[];function G(R){if(R.samples>0){if(Q(R)===!1){const v=R.textures,U=R.width,j=R.height;let $=r.COLOR_BUFFER_BIT;const X=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(R),le=v.length>1;if(le)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ce=R.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Pe]);const se=n.get(v[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,U,j,0,0,U,j,$,r.NEAREST),l===!0&&(Qe.length=0,ke.length=0,Qe.push(r.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Qe.push(X),ke.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ke)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Pe]);const se=n.get(v[Pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function N(R){return Math.min(i.maxSamples,R.samples)}function Q(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Se(R){const v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function fe(R,v){const U=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==On&&U!==Pr&&(dt.getTransfer(U)===bt?(j!==_i||$!==ti)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",U)),v}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=ct,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Q,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aT(r,e){function t(n,i=Pr){let s;const o=dt.getTransfer(i);if(n===ti)return r.UNSIGNED_BYTE;if(n===Vh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Hh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===im)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===rm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===tm)return r.BYTE;if(n===nm)return r.SHORT;if(n===_a)return r.UNSIGNED_SHORT;if(n===zh)return r.INT;if(n===Ki)return r.UNSIGNED_INT;if(n===gi)return r.FLOAT;if(n===gr)return r.HALF_FLOAT;if(n===sm)return r.ALPHA;if(n===om)return r.RGB;if(n===_i)return r.RGBA;if(n===_r)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===Gh)return r.RED;if(n===Wh)return r.RED_INTEGER;if(n===uo)return r.RG;if(n===Xh)return r.RG_INTEGER;if(n===Yh)return r.RGBA_INTEGER;if(n===bl||n===El||n===wl||n===Al)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eu||n===wu||n===Au||n===Ru)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cu||n===Pu||n===Du||n===Lu||n===Iu||n===Nu||n===Uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cu||n===Pu)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Du)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lu)return s.COMPRESSED_R11_EAC;if(n===Iu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nu)return s.COMPRESSED_RG11_EAC;if(n===Uu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fu||n===Ou||n===Bu||n===ku||n===zu||n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===Ku||n===ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ou)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ku)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ju)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$u||n===Zu||n===Ju)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$u)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===eh||n===th||n===nh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===th)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ym(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $i({vertexShader:lT,fragmentShader:cT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new sc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hT extends bo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new uT,p={},T=t.getContextAttributes();let b=null,S=null;const M=[],w=[],A=new _t;let P=null;const x=new In;x.viewport=new Ut;const y=new In;y.viewport=new Ut;const D=[x,y],I=new hx;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=M[Z];return J===void 0&&(J=new Fc,M[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=M[Z];return J===void 0&&(J=new Fc,M[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=M[Z];return J===void 0&&(J=new Fc,M[Z]=J),J.getHandSpace()};function W(Z){const J=w.indexOf(Z.inputSource);if(J===-1)return;const de=M[J];de!==void 0&&(de.update(Z.inputSource,Z.frame,c||o),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",O);for(let Z=0;Z<M.length;Z++){const J=w[Z];J!==null&&(w[Z]=null,M[Z].disconnect(J))}F=null,z=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(b),d=null,f=null,h=null,i=null,S=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",k),i.addEventListener("inputsourceschange",O),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,we=null,Ae=null;T.depth&&(Ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=T.stencil?ls:_r,we=T.stencil?xa:Ki);const He={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(He),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xi(f.textureWidth,f.textureHeight,{format:_i,type:ti,depthTexture:new Ta(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xi(d.framebufferWidth,d.framebufferHeight,{format:_i,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Z){for(let J=0;J<Z.removed.length;J++){const de=Z.removed[J],we=w.indexOf(de);we>=0&&(w[we]=null,M[we].disconnect(de))}for(let J=0;J<Z.added.length;J++){const de=Z.added[J];let we=w.indexOf(de);if(we===-1){for(let He=0;He<M.length;He++)if(He>=w.length){w.push(de),we=He;break}else if(w[He]===null){w[He]=de,we=He;break}if(we===-1)break}const Ae=M[we];Ae&&Ae.connect(de)}}const K=new H,te=new H;function C(Z,J,de){K.setFromMatrixPosition(J.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const we=K.distanceTo(te),Ae=J.projectionMatrix.elements,He=de.projectionMatrix.elements,ct=Ae[14]/(Ae[10]-1),Re=Ae[14]/(Ae[10]+1),Xe=(Ae[9]+1)/Ae[5],Qe=(Ae[9]-1)/Ae[5],ke=(Ae[8]-1)/Ae[0],G=(He[8]+1)/He[0],N=ct*ke,Q=ct*G,Se=we/(-ke+G),fe=Se*-ke;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(fe),Z.translateZ(Se),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const oe=ct+Se,R=Re+Se,v=N-fe,U=Q+(we-fe),j=Xe*Re/R*oe,$=Qe*Re/R*oe;Z.projectionMatrix.makePerspective(v,U,j,$,oe,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let J=Z.near,de=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(de=m.depthFar)),I.near=y.near=x.near=J,I.far=y.far=x.far=de,(F!==I.near||z!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,z=I.far),I.layers.mask=Z.layers.mask|6,x.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const we=Z.parent,Ae=I.cameras;ie(I,we);for(let He=0;He<Ae.length;He++)ie(Ae[He],we);Ae.length===2?C(I,x,y):I.projectionMatrix.copy(x.projectionMatrix),Ee(Z,I,we)};function Ee(Z,J,de){de===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ho*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let Ie=null;function Ve(Z,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let we=!1;de.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let Re=0;Re<de.length;Re++){const Xe=de[Re];let Qe=null;if(d!==null)Qe=d.getViewport(Xe);else{const G=h.getViewSubImage(f,Xe);Qe=G.viewport,Re===0&&(e.setRenderTargetTextures(S,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(S))}let ke=D[Re];ke===void 0&&(ke=new In,ke.layers.enable(Re),ke.viewport=new Ut,D[Re]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Re===0&&(I.matrix.copy(ke.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(ke)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Re=h.getDepthInformation(de[0]);Re&&Re.isValid&&Re.texture&&m.init(Re,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Re=0;Re<de.length;Re++){const Xe=de[Re].camera;if(Xe){let Qe=p[Xe];Qe||(Qe=new ym,p[Xe]=Qe);const ke=h.getCameraImage(Xe);Qe.sourceTexture=ke}}}}for(let de=0;de<M.length;de++){const we=w[de],Ae=M[de];we!==null&&Ae!==void 0&&Ae.update(we,J,c||o)}Ie&&Ie(Z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ke=new wm;Ke.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}}const Jr=new ji,fT=new st;function dT(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),b=T.envMap,S=T.envMapRotation;b&&(m.envMap.value=b,Jr.copy(S),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),m.envMapRotation.value.setFromMatrix4(fT.makeRotationFromEuler(Jr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function c(T,b){let S=i[T.id];S===void 0&&(g(T),S=u(T),i[T.id]=S,T.addEventListener("dispose",m));const M=b.program;n.updateUBOMapping(T,M);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function u(T){const b=h();T.__bindingPointIndex=b;const S=r.createBuffer(),M=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=i[T.id],S=T.uniforms,M=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,A=S.length;w<A;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,y=P.length;x<y;x++){const D=P[x];if(d(D,w,x,M)===!0){const I=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let W=0;W<F.length;W++){const k=F[W],O=_(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+z,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,b,S,M){const w=T.value,A=b+"_"+S;if(M[A]===void 0)return typeof w=="number"||typeof w=="boolean"?M[A]=w:M[A]=w.clone(),!0;{const P=M[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return M[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){const b=T.uniforms;let S=0;const M=16;for(let A=0,P=b.length;A<P;A++){const x=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,D=x.length;y<D;y++){const I=x[y],F=Array.isArray(I.value)?I.value:[I.value];for(let z=0,W=F.length;z<W;z++){const k=F[z],O=_(k),K=S%M,te=K%O.boundary,C=K+te;S+=te,C!==0&&M-C<O.storage&&(S+=M-C),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}const w=S%M;return w>0&&(S+=M-w),T.__size=S,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const mT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function gT(){return Ni===null&&(Ni=new Jh(mT,16,16,uo,gr),Ni.name="DFG_LUT",Ni.minFilter=on,Ni.magFilter=on,Ni.wrapS=Vi,Ni.wrapT=Vi,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class _T{constructor(e={}){const{canvas:t=V_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ti}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=d,m=new Set([Yh,Xh,Wh]),p=new Set([ti,Ki,_a,xa,Vh,Hh]),T=new Uint32Array(4),b=new Int32Array(4);let S=null,M=null;const w=[],A=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=fn;let D=0,I=0,F=null,z=-1,W=null;const k=new Ut,O=new Ut;let K=null;const te=new et(0);let C=0,ie=t.width,Ee=t.height,Ie=1,Ve=null,Ke=null;const Z=new Ut(0,0,ie,Ee),J=new Ut(0,0,ie,Ee);let de=!1;const we=new ef;let Ae=!1,He=!1;const ct=new st,Re=new H,Xe=new Ut,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function G(){return F===null?Ie:1}let N=n;function Q(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){const B="webgl2";if(N=Q(B,E),N===null)throw Q(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let Se,fe,oe,R,v,U,j,$,X,_e,le,Ce,Pe,se,ce,be,De,he,qe,L,pe,re,me,ne;function ee(){Se=new gM(N),Se.init(),re=new aT(N,Se),fe=new aM(N,Se,e,re),oe=new sT(N,Se),fe.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),R=new vM(N),v=new Wy,U=new oT(N,Se,oe,v,fe,re,R),j=new cM(x),$=new mM(x),X=new Tx(N),me=new sM(N,X),_e=new _M(N,X,R,me),le=new MM(N,_e,X,R),qe=new SM(N,fe,U),be=new lM(v),Ce=new Gy(x,j,$,Se,fe,me,be),Pe=new dT(x,v),se=new Yy,ce=new Jy(Se),he=new rM(x,j,$,oe,le,g,l),De=new iT(x,le,fe),ne=new pT(N,R,fe,oe),L=new oM(N,Se,R),pe=new xM(N,Se,R),R.programs=Ce.programs,x.capabilities=fe,x.extensions=Se,x.properties=v,x.renderLists=se,x.shadowMap=De,x.state=oe,x.info=R}ee(),_!==ti&&(P=new TM(_,t.width,t.height,i,s));const ae=new hT(x,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(E){E!==void 0&&(Ie=E,this.setSize(ie,Ee,!1))},this.getSize=function(E){return E.set(ie,Ee)},this.setSize=function(E,B,q=!0){if(ae.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=E,Ee=B,t.width=Math.floor(E*Ie),t.height=Math.floor(B*Ie),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(ie*Ie,Ee*Ie).floor()},this.setDrawingBufferSize=function(E,B,q){ie=E,Ee=B,Ie=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(_===ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,B,q,Y){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,B,q,Y),oe.viewport(k.copy(Z).multiplyScalar(Ie).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,B,q,Y){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,B,q,Y),oe.scissor(O.copy(J).multiplyScalar(Ie).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){oe.setScissorTest(de=E)},this.setOpaqueSort=function(E){Ve=E},this.setTransparentSort=function(E){Ke=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let Y=0;if(E){let V=!1;if(F!==null){const ue=F.texture.format;V=m.has(ue)}if(V){const ue=F.texture.type,Te=p.has(ue),ge=he.getClearColor(),ve=he.getClearAlpha(),Ue=ge.r,Ye=ge.g,Ge=ge.b;Te?(T[0]=Ue,T[1]=Ye,T[2]=Ge,T[3]=ve,N.clearBufferuiv(N.COLOR,0,T)):(b[0]=Ue,b[1]=Ye,b[2]=Ge,b[3]=ve,N.clearBufferiv(N.COLOR,0,b))}else Y|=N.COLOR_BUFFER_BIT}B&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),he.dispose(),se.dispose(),ce.dispose(),v.dispose(),j.dispose(),$.dispose(),le.dispose(),me.dispose(),ne.dispose(),Ce.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Bt),ae.removeEventListener("sessionend",nt),vt.stop()};function Oe(E){E.preventDefault(),Hl("WebGLRenderer: Context Lost."),y=!0}function mt(){Hl("WebGLRenderer: Context Restored."),y=!1;const E=R.autoReset,B=De.enabled,q=De.autoUpdate,Y=De.needsUpdate,V=De.type;ee(),R.autoReset=E,De.enabled=B,De.autoUpdate=q,De.needsUpdate=Y,De.type=V}function ye(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){const B=E.target;B.removeEventListener("dispose",Ne),tt(B)}function tt(E){xe(E),v.remove(E)}function xe(E){const B=v.get(E).programs;B!==void 0&&(B.forEach(function(q){Ce.releaseProgram(q)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,Y,V,ue){B===null&&(B=Qe);const Te=V.isMesh&&V.matrixWorld.determinant()<0,ge=Yt(E,B,q,Y,V);oe.setMaterial(Y,Te);let ve=q.index,Ue=1;if(Y.wireframe===!0){if(ve=_e.getWireframeAttribute(q),ve===void 0)return;Ue=2}const Ye=q.drawRange,Ge=q.attributes.position;let Be=Ye.start*Ue,gt=(Ye.start+Ye.count)*Ue;ue!==null&&(Be=Math.max(Be,ue.start*Ue),gt=Math.min(gt,(ue.start+ue.count)*Ue)),ve!==null?(Be=Math.max(Be,0),gt=Math.min(gt,ve.count)):Ge!=null&&(Be=Math.max(Be,0),gt=Math.min(gt,Ge.count));const Ft=gt-Be;if(Ft<0||Ft===1/0)return;me.setup(V,Y,ge,q,ve);let Dt,At=L;if(ve!==null&&(Dt=X.get(ve),At=pe,At.setIndex(Dt)),V.isMesh)Y.wireframe===!0?(oe.setLineWidth(Y.wireframeLinewidth*G()),At.setMode(N.LINES)):At.setMode(N.TRIANGLES);else if(V.isLine){let We=Y.linewidth;We===void 0&&(We=1),oe.setLineWidth(We*G()),V.isLineSegments?At.setMode(N.LINES):V.isLineLoop?At.setMode(N.LINE_LOOP):At.setMode(N.LINE_STRIP)}else V.isPoints?At.setMode(N.POINTS):V.isSprite&&At.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ya("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))At.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const We=V._multiDrawStarts,Tt=V._multiDrawCounts,Mt=V._multiDrawCount,qn=ve?X.get(ve).bytesPerElement:1,Es=v.get(Y).currentProgram.getUniforms();for(let Kn=0;Kn<Mt;Kn++)Es.setValue(N,"_gl_DrawID",Kn),At.render(We[Kn]/qn,Tt[Kn])}else if(V.isInstancedMesh)At.renderInstances(Be,Ft,V.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,We);At.renderInstances(Be,Ft,Tt)}else At.render(Be,Ft)};function je(E,B,q){E.transparent===!0&&E.side===ki&&E.forceSinglePass===!1?(E.side=Vn,E.needsUpdate=!0,St(E,B,q),E.side=mr,E.needsUpdate=!0,St(E,B,q),E.side=ki):St(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),M=ce.get(q),M.init(B),A.push(M),q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),E!==q&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights();const Y=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let Te=0;Te<ue.length;Te++){const ge=ue[Te];je(ge,q,V),Y.add(ge)}else je(ue,q,V),Y.add(ue)}),M=A.pop(),Y},this.compileAsync=function(E,B,q=null){const Y=this.compile(E,B,q);return new Promise(V=>{function ue(){if(Y.forEach(function(Te){v.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){V(E);return}setTimeout(ue,10)}Se.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Fe=null;function $e(E){Fe&&Fe(E)}function Bt(){vt.stop()}function nt(){vt.start()}const vt=new wm;vt.setAnimationLoop($e),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(E){Fe=E,ae.setAnimationLoop(E),E===null?vt.stop():vt.start()},ae.addEventListener("sessionstart",Bt),ae.addEventListener("sessionend",nt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const q=ae.enabled===!0&&ae.isPresenting===!0,Y=P!==null&&(F===null||q)&&P.begin(x,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,F),M=ce.get(E,A.length),M.init(B),A.push(M),ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),we.setFromProjectionMatrix(ct,Hi,B.reversedDepth),He=this.localClippingEnabled,Ae=be.init(this.clippingPlanes,He),S=se.get(E,w.length),S.init(),w.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Te=x.xr.getDepthSensingMesh();Te!==null&&Nt(Te,B,-1/0,x.sortObjects)}Nt(E,B,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(Ve,Ke),ke=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ke&&he.addToRenderList(S,E),this.info.render.frame++,Ae===!0&&be.beginShadows();const V=M.state.shadowsArray;if(De.render(V,E,B),Ae===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&P.hasRenderPass())===!1){const Te=S.opaque,ge=S.transmissive;if(M.setupLights(),B.isArrayCamera){const ve=B.cameras;if(ge.length>0)for(let Ue=0,Ye=ve.length;Ue<Ye;Ue++){const Ge=ve[Ue];xt(Te,ge,E,Ge)}ke&&he.render(E);for(let Ue=0,Ye=ve.length;Ue<Ye;Ue++){const Ge=ve[Ue];Rt(S,E,Ge,Ge.viewport)}}else ge.length>0&&xt(Te,ge,E,B),ke&&he.render(E),Rt(S,E,B)}F!==null&&I===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),Y&&P.end(x),E.isScene===!0&&E.onAfterRender(x,E,B),me.resetDefaultState(),z=-1,W=null,A.pop(),A.length>0?(M=A[A.length-1],Ae===!0&&be.setGlobalState(x.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Nt(E,B,q,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||we.intersectsSprite(E)){Y&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ct);const Te=le.update(E),ge=E.material;ge.visible&&S.push(E,Te,ge,q,Xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||we.intersectsObject(E))){const Te=le.update(E),ge=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Xe.copy(Te.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(ct)),Array.isArray(ge)){const ve=Te.groups;for(let Ue=0,Ye=ve.length;Ue<Ye;Ue++){const Ge=ve[Ue],Be=ge[Ge.materialIndex];Be&&Be.visible&&S.push(E,Te,Be,q,Xe.z,Ge)}}else ge.visible&&S.push(E,Te,ge,q,Xe.z,null)}}const ue=E.children;for(let Te=0,ge=ue.length;Te<ge;Te++)Nt(ue[Te],B,q,Y)}function Rt(E,B,q,Y){const{opaque:V,transmissive:ue,transparent:Te}=E;M.setupLightsView(q),Ae===!0&&be.setGlobalState(x.clippingPlanes,q),Y&&oe.viewport(k.copy(Y)),V.length>0&&ft(V,B,q),ue.length>0&&ft(ue,B,q),Te.length>0&&ft(Te,B,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function xt(E,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const Be=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Xi(1,1,{generateMipmaps:!0,type:Be?gr:ti,minFilter:cr,samples:fe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const ue=M.state.transmissionRenderTarget[Y.id],Te=Y.viewport||k;ue.setSize(Te.z*x.transmissionResolutionScale,Te.w*x.transmissionResolutionScale);const ge=x.getRenderTarget(),ve=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(ue),x.getClearColor(te),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear(),ke&&he.render(q);const Ye=x.toneMapping;x.toneMapping=Pi;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Ae===!0&&be.setGlobalState(x.clippingPlanes,Y),ft(E,q,Y),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let gt=0,Ft=B.length;gt<Ft;gt++){const Dt=B[gt],{object:At,geometry:We,material:Tt,group:Mt}=Dt;if(Tt.side===ki&&At.layers.test(Y.layers)){const qn=Tt.side;Tt.side=Vn,Tt.needsUpdate=!0,Gt(At,q,Y,We,Tt,Mt),Tt.side=qn,Tt.needsUpdate=!0,Be=!0}}Be===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}x.setRenderTarget(ge,ve,Ue),x.setClearColor(te,C),Ge!==void 0&&(Y.viewport=Ge),x.toneMapping=Ye}function ft(E,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ue=E.length;V<ue;V++){const Te=E[V],{object:ge,geometry:ve,group:Ue}=Te;let Ye=Te.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),ge.layers.test(q.layers)&&Gt(ge,B,q,ve,Ye,Ue)}}function Gt(E,B,q,Y,V,ue){E.onBeforeRender(x,B,q,Y,V,ue),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(x,B,q,Y,E,ue),V.transparent===!0&&V.side===ki&&V.forceSinglePass===!1?(V.side=Vn,V.needsUpdate=!0,x.renderBufferDirect(q,B,Y,V,E,ue),V.side=mr,V.needsUpdate=!0,x.renderBufferDirect(q,B,Y,V,E,ue),V.side=ki):x.renderBufferDirect(q,B,Y,V,E,ue),E.onAfterRender(x,B,q,Y,V,ue)}function St(E,B,q){B.isScene!==!0&&(B=Qe);const Y=v.get(E),V=M.state.lights,ue=M.state.shadowsArray,Te=V.state.version,ge=Ce.getParameters(E,V.state,ue,B,q),ve=Ce.getProgramCacheKey(ge);let Ue=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?$:j).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Ne),Ue=new Map,Y.programs=Ue);let Ye=Ue.get(ve);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Te)return _n(E,ge),Ye}else ge.uniforms=Ce.getUniforms(E),E.onBeforeCompile(ge,x),Ye=Ce.acquireProgram(ge,ve),Ue.set(ve,Ye),Y.uniforms=ge.uniforms;const Ge=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=be.uniform),_n(E,ge),Y.needsLights=qt(E),Y.lightsStateVersion=Te,Y.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMap.value=V.state.directionalShadowMap,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotShadowMap.value=V.state.spotShadowMap,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMap.value=V.state.pointShadowMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function $t(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Cl.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function _n(E,B){const q=v.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Yt(E,B,q,Y,V){B.isScene!==!0&&(B=Qe),U.resetTextureUnits();const ue=B.fog,Te=Y.isMeshStandardMaterial?B.environment:null,ge=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:On,ve=(Y.isMeshStandardMaterial?$:j).get(Y.envMap||Te),Ue=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!q.morphAttributes.position,Be=!!q.morphAttributes.normal,gt=!!q.morphAttributes.color;let Ft=Pi;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=Dt!==void 0?Dt.length:0,We=v.get(Y),Tt=M.state.lights;if(Ae===!0&&(He===!0||E!==W)){const En=E===W&&Y.id===z;be.setState(Y,E,En)}let Mt=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Tt.state.version||We.outputColorSpace!==ge||V.isBatchedMesh&&We.batching===!1||!V.isBatchedMesh&&We.batching===!0||V.isBatchedMesh&&We.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&We.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&We.instancing===!1||!V.isInstancedMesh&&We.instancing===!0||V.isSkinnedMesh&&We.skinning===!1||!V.isSkinnedMesh&&We.skinning===!0||V.isInstancedMesh&&We.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&We.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&We.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&We.instancingMorph===!1&&V.morphTexture!==null||We.envMap!==ve||Y.fog===!0&&We.fog!==ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==Ue||We.vertexTangents!==Ye||We.morphTargets!==Ge||We.morphNormals!==Be||We.morphColors!==gt||We.toneMapping!==Ft||We.morphTargetsCount!==At)&&(Mt=!0):(Mt=!0,We.__version=Y.version);let qn=We.currentProgram;Mt===!0&&(qn=St(Y,B,V));let Es=!1,Kn=!1,Co=!1;const Lt=qn.getUniforms(),Bn=We.uniforms;if(oe.useProgram(qn.program)&&(Es=!0,Kn=!0,Co=!0),Y.id!==z&&(z=Y.id,Kn=!0),Es||W!==E){oe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Lt.setValue(N,"projectionMatrix",E.projectionMatrix),Lt.setValue(N,"viewMatrix",E.matrixWorldInverse);const kn=Lt.map.cameraPosition;kn!==void 0&&kn.setValue(N,Re.setFromMatrixPosition(E.matrixWorld)),fe.logarithmicDepthBuffer&&Lt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,Kn=!0,Co=!0)}if(We.needsLights&&(Tt.state.directionalShadowMap.length>0&&Lt.setValue(N,"directionalShadowMap",Tt.state.directionalShadowMap,U),Tt.state.spotShadowMap.length>0&&Lt.setValue(N,"spotShadowMap",Tt.state.spotShadowMap,U),Tt.state.pointShadowMap.length>0&&Lt.setValue(N,"pointShadowMap",Tt.state.pointShadowMap,U)),V.isSkinnedMesh){Lt.setOptional(N,V,"bindMatrix"),Lt.setOptional(N,V,"bindMatrixInverse");const En=V.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Lt.setValue(N,"boneTexture",En.boneTexture,U))}V.isBatchedMesh&&(Lt.setOptional(N,V,"batchingTexture"),Lt.setValue(N,"batchingTexture",V._matricesTexture,U),Lt.setOptional(N,V,"batchingIdTexture"),Lt.setValue(N,"batchingIdTexture",V._indirectTexture,U),Lt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Lt.setValue(N,"batchingColorTexture",V._colorsTexture,U));const ui=q.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&qe.update(V,q,qn),(Kn||We.receiveShadow!==V.receiveShadow)&&(We.receiveShadow=V.receiveShadow,Lt.setValue(N,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Bn.envMap.value=ve,Bn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),Bn.dfgLUT!==void 0&&(Bn.dfgLUT.value=gT()),Kn&&(Lt.setValue(N,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Wt(Bn,Co),ue&&Y.fog===!0&&Pe.refreshFogUniforms(Bn,ue),Pe.refreshMaterialUniforms(Bn,Y,Ie,Ee,M.state.transmissionRenderTarget[E.id]),Cl.upload(N,$t(We),Bn,U)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cl.upload(N,$t(We),Bn,U),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(N,"center",V.center),Lt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Lt.setValue(N,"normalMatrix",V.normalMatrix),Lt.setValue(N,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const En=Y.uniformsGroups;for(let kn=0,pc=En.length;kn<pc;kn++){const Yr=En[kn];ne.update(Yr,qn),ne.bind(Yr,qn)}}return qn}function Wt(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function qt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,B,q){const Y=v.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=B,v.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const q=v.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Ti=N.createFramebuffer();this.setRenderTarget=function(E,B=0,q=0){F=E,D=B,I=q;let Y=null,V=!1,ue=!1;if(E){const ge=v.get(E);if(ge.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),k.copy(E.viewport),O.copy(E.scissor),K=E.scissorTest,oe.viewport(k),oe.scissor(O),oe.setScissorTest(K),z=-1;return}else if(ge.__webglFramebuffer===void 0)U.setupRenderTarget(E);else if(ge.__hasExternalTextures)U.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ye=E.depthTexture;if(ge.__boundDepthTexture!==Ye){if(Ye!==null&&v.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(E)}}const ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);const Ue=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?Y=Ue[B][q]:Y=Ue[B],V=!0):E.samples>0&&U.useMultisampledRTT(E)===!1?Y=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?Y=Ue[q]:Y=Ue,k.copy(E.viewport),O.copy(E.scissor),K=E.scissorTest}else k.copy(Z).multiplyScalar(Ie).floor(),O.copy(J).multiplyScalar(Ie).floor(),K=de;if(q!==0&&(Y=Ti),oe.bindFramebuffer(N.FRAMEBUFFER,Y)&&oe.drawBuffers(E,Y),oe.viewport(k),oe.scissor(O),oe.setScissorTest(K),V){const ge=v.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,q)}else if(ue){const ge=B;for(let ve=0;ve<E.textures.length;ve++){const Ue=v.get(E.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,Ue.__webglTexture,q,ge)}}else if(E!==null&&q!==0){const ge=v.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,q)}z=-1},this.readRenderTargetPixels=function(E,B,q,Y,V,ue,Te,ge=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(ve=ve[Te]),ve){oe.bindFramebuffer(N.FRAMEBUFFER,ve);try{const Ue=E.textures[ge],Ye=Ue.format,Ge=Ue.type;if(!fe.textureFormatReadable(Ye)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Ge)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-V&&(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),N.readPixels(B,q,Y,V,re.convert(Ye),re.convert(Ge),ue))}finally{const Ue=F!==null?v.get(F).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,Y,V,ue,Te,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(ve=ve[Te]),ve)if(B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-V){oe.bindFramebuffer(N.FRAMEBUFFER,ve);const Ue=E.textures[ge],Ye=Ue.format,Ge=Ue.type;if(!fe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Be),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),N.readPixels(B,q,Y,V,re.convert(Ye),re.convert(Ge),0);const gt=F!==null?v.get(F).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,gt);const Ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await H_(N,Ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(Be),N.deleteSync(Ft),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){const Y=Math.pow(2,-q),V=Math.floor(E.image.width*Y),ue=Math.floor(E.image.height*Y),Te=B!==null?B.x:0,ge=B!==null?B.y:0;U.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Te,ge,V,ue),oe.unbindTexture()};const Sr=N.createFramebuffer(),Zt=N.createFramebuffer();this.copyTextureToTexture=function(E,B,q=null,Y=null,V=0,ue=null){ue===null&&(V!==0?(ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=V,V=0):ue=0);let Te,ge,ve,Ue,Ye,Ge,Be,gt,Ft;const Dt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(q!==null)Te=q.max.x-q.min.x,ge=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,Ye=q.min.y,Ge=q.isBox3?q.min.z:0;else{const ui=Math.pow(2,-V);Te=Math.floor(Dt.width*ui),ge=Math.floor(Dt.height*ui),E.isDataArrayTexture?ve=Dt.depth:E.isData3DTexture?ve=Math.floor(Dt.depth*ui):ve=1,Ue=0,Ye=0,Ge=0}Y!==null?(Be=Y.x,gt=Y.y,Ft=Y.z):(Be=0,gt=0,Ft=0);const At=re.convert(B.format),We=re.convert(B.type);let Tt;B.isData3DTexture?(U.setTexture3D(B,0),Tt=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Tt=N.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Tt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Mt=N.getParameter(N.UNPACK_ROW_LENGTH),qn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Es=N.getParameter(N.UNPACK_SKIP_PIXELS),Kn=N.getParameter(N.UNPACK_SKIP_ROWS),Co=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const Lt=E.isDataArrayTexture||E.isData3DTexture,Bn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const ui=v.get(E),En=v.get(B),kn=v.get(ui.__renderTarget),pc=v.get(En.__renderTarget);oe.bindFramebuffer(N.READ_FRAMEBUFFER,kn.__webglFramebuffer),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,pc.__webglFramebuffer);for(let Yr=0;Yr<ve;Yr++)Lt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(E).__webglTexture,V,Ge+Yr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(B).__webglTexture,ue,Ft+Yr)),N.blitFramebuffer(Ue,Ye,Te,ge,Be,gt,Te,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);oe.bindFramebuffer(N.READ_FRAMEBUFFER,null),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||v.has(E)){const ui=v.get(E),En=v.get(B);oe.bindFramebuffer(N.READ_FRAMEBUFFER,Sr),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zt);for(let kn=0;kn<ve;kn++)Lt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ui.__webglTexture,V,Ge+kn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ui.__webglTexture,V),Bn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,En.__webglTexture,ue,Ft+kn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,En.__webglTexture,ue),V!==0?N.blitFramebuffer(Ue,Ye,Te,ge,Be,gt,Te,ge,N.COLOR_BUFFER_BIT,N.NEAREST):Bn?N.copyTexSubImage3D(Tt,ue,Be,gt,Ft+kn,Ue,Ye,Te,ge):N.copyTexSubImage2D(Tt,ue,Be,gt,Ue,Ye,Te,ge);oe.bindFramebuffer(N.READ_FRAMEBUFFER,null),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Bn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Tt,ue,Be,gt,Ft,Te,ge,ve,At,We,Dt.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,ue,Be,gt,Ft,Te,ge,ve,At,Dt.data):N.texSubImage3D(Tt,ue,Be,gt,Ft,Te,ge,ve,At,We,Dt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ue,Be,gt,Te,ge,At,We,Dt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ue,Be,gt,Dt.width,Dt.height,At,Dt.data):N.texSubImage2D(N.TEXTURE_2D,ue,Be,gt,Te,ge,At,We,Dt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Es),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Co),ue===0&&B.generateMipmaps&&N.generateMipmap(Tt),oe.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&U.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?U.setTextureCube(E,0):E.isData3DTexture?U.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?U.setTexture2DArray(E,0):U.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){D=0,I=0,F=null,oe.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function Kd(r,e){if(e===D_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ih||e===am){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ih)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class xT extends Ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new TT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new OT(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ia.extractUrlBase(e);o=ia.resolveURL(c,this.path)}else o=ia.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Em(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dm){try{o[ht.KHR_BINARY_GLTF]=new BT(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ZT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new MT;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new kT(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new zT;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new VT;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function vT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ST{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new et(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],On);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ah(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ax(u),c.distance=h;break;case"spot":c=new sx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class MT{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return cs}extendParams(e,t,n){const i=[];e.color=new et(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],On),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,fn))}return Promise.all(i)}}class yT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class TT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _t(a,a)}return Promise.all(s)}}class bT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class ET{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class wT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],On)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,fn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class AT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class RT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new et().setRGB(a[0],a[1],a[2],On),Promise.all(s)}}class CT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class PT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new et().setRGB(a[0],a[1],a[2],On),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,fn)),Promise.all(s)}}class DT{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class LT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class IT{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class NT{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class UT{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class FT{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class OT{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==di.TRIANGLES&&c.mode!==di.TRIANGLE_STRIP&&c.mode!==di.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new st,m=new H,p=new Wr,T=new H(1,1,1),b=new N0(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&T.fromBufferAttribute(l.SCALE,S),b.setMatrixAt(S,_.compose(m,p,T));for(const S in l)if(S==="_COLOR_0"){const M=l[S];b.instanceColor=new sh(M.array,M.itemSize,M.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Ht.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Dm="glTF",ko=12,jd={JSON:1313821514,BIN:5130562};class BT{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ko,s=new DataView(e,ko);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===jd.JSON){const c=new Uint8Array(e,ko+o,a);this.content=n.decode(c)}else if(l===jd.BIN){const c=ko+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=uh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=uh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=eo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,On,f)})})}}class zT{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class VT{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Lm extends Ua{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,T=1-m,b=p-f+h;for(let S=0;S!==a;S++){const M=o[_+S+a],w=o[_+S+l]*u,A=o[g+S+a],P=o[g+S]*u;s[S]=T*M+b*w+m*A+p*P}return s}}const HT=new Wr;class GT extends Lm{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return HT.fromArray(s).normalize().toArray(s),s}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$d={9728:sn,9729:on,9984:em,9985:Tl,9986:Xo,9987:cr},Zd={33071:Vi,33648:kl,10497:co},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ar={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WT={CUBICSPLINE:void 0,LINEAR:Sa,STEP:va},$c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new nf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mr})),r.DefaultMaterial}function Qr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ui(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YT(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function qT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KT(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zc(t.attributes):e=r.indices+":"+Zc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Zc(r.targets[n]);return e}function Zc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function hh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $T=new st;class ZT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new ix(this.options.manager):this.textureLoader=new ux(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Em(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Qr(s,a,i),Ui(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ia.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=jc[i.type],a=eo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Fn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=jc[i.type],c=eo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(T);b||(_=new c(a,p*d,i.count*d/u),b=new C0(_,d/u),t.cache.add(T,b)),m=new Zh(b,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Fn(_,l,g);if(i.sparse!==void 0){const p=jc.SCALAR,T=eo[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,M=new T(o[1],b,i.sparse.count*p),w=new c(o[2],S,i.sparse.count*l);a!==null&&(m=new Fn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=M.length;A<P;A++){const x=M[A];if(m.setX(x,w[A*l]),l>=2&&m.setY(x,w[A*l+1]),l>=3&&m.setZ(x,w[A*l+2]),l>=4&&m.setW(x,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=$d[f.magFilter]||on,u.minFilter=$d[f.minFilter]||cr,u.wrapS=Zd[f.wrapS]||co,u.wrapT=Zd[f.wrapT]||co,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==on,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new dn(_);m.needsUpdate=!0,f(m)}),t.load(ia.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ui(h,o),h.userData.mimeType=o.mimeType||jT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Mm,Yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Sm,Yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new et(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],On),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,fn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ki);const u=s.alphaMode||$c.OPAQUE;if(u===$c.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===$c.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==cs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new _t(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==cs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==cs){const h=s.emissiveFactor;a.emissive=new et().setRGB(h[0],h[1],h[2],On)}return s.emissiveTexture!==void 0&&o!==cs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,fn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ui(h,s),t.associations.set(h,{materials:e}),s.extensions&&Qr(i,h,s),h})}createUniqueName(e){const t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=KT(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Jd(new yi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?XT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const T=c[d];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new D0(_,T):new ai(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===di.TRIANGLE_STRIP?p.geometry=Kd(p.geometry,am):m.mode===di.TRIANGLE_FAN&&(p.geometry=Kd(p.geometry,ih));else if(m.mode===di.LINES)p=new B0(_,T);else if(m.mode===di.LINE_STRIP)p=new tf(_,T);else if(m.mode===di.LINE_LOOP)p=new k0(_,T);else if(m.mode===di.POINTS)p=new z0(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&qT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ui(p,s),m.extensions&&Qr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Qr(i,h[0],s),h[0];const f=new us;s.extensions&&Qr(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new In(Rl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ac(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ui(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new st;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let b=0,S=f.length;b<S;b++){const M=f[b],w=d[b],A=g[b],P=_[b],x=m[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const y=n._createAnimationTracks(M,w,A,P,x);if(y)for(let D=0;D<y.length;D++)p.push(y[D])}const T=new $0(s,void 0,p);return Ui(T,i),T})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,$T)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new vm:c.length>1?u=new us:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ui(u,s),s.extensions&&Qr(n,u,s),s.matrix!==void 0){const h=new st;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new us;n.name&&(s.name=i.createUniqueName(n.name)),Ui(s,n),n.extensions&&Qr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Yi||f instanceof dn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ar[s.path]===Ar.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ar[s.path]){case Ar.weights:c=po;break;case Ar.rotation:c=mo;break;case Ar.translation:case Ar.scale:c=go;break;default:n.itemSize===1?c=po:c=go;break}const u=i.interpolation!==void 0?WT[i.interpolation]:Sa,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Ar[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hh(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof mo?GT:Lm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function JT(r,e,t){const n=e.attributes,i=new Si;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=hh(eo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=hh(eo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ji;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Jd(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=uh[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==On&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Ui(r,e),JT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?YT(r,e.targets,t):r})}function or(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Im(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_o={duration:.5,overwrite:!1,delay:0},af,gn,Ot,xi=1e8,Pt=1/xi,fh=Math.PI*2,QT=fh/4,eb=0,Nm=Math.sqrt,tb=Math.cos,nb=Math.sin,pn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},lf=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},cf=function(){return typeof window<"u"},cl=function(e){return Xt(e)||pn(e)},Um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,ib=/random\([^)]+\)/g,rb=/,\s*/g,Qd=/(?:-?\.?\d|\.)+/gi,Fm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Om=/[+-]=-?[.\d]+/,sb=/[^,'"\[\]\s]+/gi,ob=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Fi,dh,uf,li={},Xl={},Bm,km=function(e){return(Xl=xo(e,li))&&Yn},hf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ba=function(e,t){return!t&&console.warn(e)},zm=function(e,t){return e&&(li[e]=t)&&Xl&&(Xl[e]=t)||li},Ea=function(){return 0},ab={suppressEvents:!0,isStart:!0,kill:!1},Pl={suppressEvents:!0,kill:!1},lb={suppressEvents:!0},ff={},Or=[],ph={},Vm,Qn={},Qc={},ep=30,Dl=[],df="",pf=function(e){var t=e[0],n,i;if(Zi(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Dl.length;i--&&!Dl[i].targetTest(t););n=Dl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new hg(e[i],n)))||e.splice(i,1);return e},ds=function(e){return e._gsap||pf(vi(e))[0]._gsap},Hm=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():lf(n)&&e.getAttribute&&e.getAttribute(t)||n},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},to=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},cb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yl=function(){var e=Or.length,t=Or.slice(0),n,i;for(ph={},Or.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mf=function(e){return!!(e._initted||e._startAt||e.add)},Gm=function(e,t,n,i){Or.length&&!gn&&Yl(),e.render(t,n,!!(gn&&t<0&&mf(e))),Or.length&&!gn&&Yl()},Wm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(sb).length<2?t:pn(e)?e.trim():e},Xm=function(e){return e},ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ub=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xo=function(e,t){for(var n in t)e[n]=t[n];return e},tp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ql=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ra=function(e){var t=e.parent||zt,n=e.keyframes?ub(bn(e.keyframes)):ci;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ym=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},uc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},fb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},db=function r(e){return!e||e._ts&&r(e.parent)},np=function(e){return e._repeat?vo(e._tTime,e=e.duration()+e._rDelay)*e:0},vo=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},Kl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hc=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},fc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hc(e),n._dirty||ps(n,e)),e},qm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Kl(e.rawTime(),t),(!t._dur||Fa(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},zi=function(e,t,n,i){return t.parent&&zr(t),t._start=kt((xr(n)?n:n||e!==zt?fi(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ym(e,t,"_first","_last",e._sort?"_start":0),gh(t)||(e._recent=t),i||qm(e,t),e._ts<0&&fc(e,e._tTime),e},Km=function(e,t){return(li.ScrollTrigger||hf("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},jm=function(e,t,n,i,s){if(_f(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vm!==ni.frame)return Or.push(e),e._lazy=[s,i],1},pb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mb=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&pb(e)&&!(!e._initted&&gh(e))||(e._ts<0||e._dp._ts<0)&&!gh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Fa(0,e._tDur,t),u=vo(l,a),e._yoyo&&u&1&&(o=1-o),u!==vo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&jm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&mh(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zr(e,1),!n&&!gn&&(ri(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},So=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&fc(e,e._tTime=e._tDur*a),e.parent&&hc(e),n||ps(e.parent,e),e},ip=function(e){return e instanceof Nn?ps(e):So(e,e._dur)},_b={_start:0,endTime:Ea,totalDuration:Ea},fi=function r(e,t,n){var i=e.labels,s=e._recent||_b,o=e.duration()>=xi?s.endTime(!1):e._dur,a,l,c;return pn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},sa=function(e,t,n){var i=xr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;o.immediateRender=Hn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new en(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},Fa=function(e,t,n){return n<e?e:n>t?t:n},yn=function(e,t){return!pn(e)||!(t=ob.exec(e))?"":t[1]},xb=function(e,t,n){return Xr(n,function(i){return Fa(e,t,i)})},_h=[].slice,$m=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Fi},vb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return pn(i)&&!t||$m(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):pn(e)&&!n&&(dh||!Mo())?_h.call((t||uf).querySelectorAll(e),0):bn(e)?vb(e,n):$m(e)?_h.call(e,0):e?[e]:[]},xh=function(e){return e=vi(e)[0]||ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?ba("Invalid scope")||uf.createElement("div"):e)}},Zm=function(e){return e.sort(function(){return .5-Math.random()})},Jm=function(e){if(Xt(e))return e;var t=Zi(e)?e:{each:e},n=ms(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return pn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,T,b,S,M,w,A,P,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,xi])[1],!x){for(A=-xi;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:i%x,T=x===xi?0:l?_*h/x-.5:i/x|0,A=0,P=xi,w=0;w<_;w++)b=w%x-p,S=T-(w/x|0),m[w]=M=c?Math.abs(c==="y"?S:b):Nm(b*b+S*S),M>A&&(A=M),M<P&&(P=M);i==="random"&&Zm(m),m.max=A-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=yn(t.amount||t.each)||0,n=n&&_<0?lg(n):n}return _=(m[f]-m.min)/m.max||0,kt(m.b+(n?n(_):_)*m.v)+m.u}},vh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xr(n)?0:yn(n))}},Qm=function(e,t){var n=bn(e),i,s;return!n&&Zi(e)&&(i=n=e.radius||xi,e.values?(e=vi(e.values),(s=!xr(e[0]))&&(i*=i)):e=vh(e.increment)),Xr(t,n?Xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=xi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||xr(o)?u:u+yn(o)}:vh(e))},eg=function(e,t,n,i){return Xr(bn(e)?!t:n===!0?!!(n=0):!i,function(){return bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Sb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Mb=function(e,t){return function(n){return e(parseFloat(n))+(t||yn(n))}},yb=function(e,t,n){return ng(e,t,0,1,n)},tg=function(e,t,n){return Xr(n,function(i){return e[~~t(i)]})},Tb=function r(e,t,n){var i=t-e;return bn(e)?tg(e,r(0,e.length),t):Xr(n,function(s){return(i+(s-e)%i)%i+e})},bb=function r(e,t,n){var i=t-e,s=i*2;return bn(e)?tg(e,r(0,e.length-1),t):Xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},wa=function(e){return e.replace(ib,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(rb);return eg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ng=function(e,t,n,i,s){var o=t-e,a=i-n;return Xr(s,function(l){return n+((l-e)/o*a||0)})},Eb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=pn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=xo(bn(e)?[]:{},e));if(!u){for(l in t)gf.call(a,e,l,"get",t[l]);s=function(g){return Sf(g,a)||(o?e.p:e)}}}return Xr(n,s)},rp=function(e,t,n){var i=e.labels,s=xi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ri=function(e,t,n){var i=e.vars,s=i[t],o=Ot,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Or.length&&Yl(),a&&(Ot=a),u=l?s.apply(c,l):s.call(c),Ot=o,u},qo=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ri(e,"onInterrupt"),e},$s,ig=[],rg=function(e){if(e)if(e=!e.name&&e.default||e,cf()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ea,render:Sf,add:gf,kill:Vb,modifier:zb,rawVars:0},o={targetTest:0,get:0,getSetter:vf,aliases:{},register:0};if(Mo(),e!==i){if(Qn[t])return;ci(i,ci(ql(e,s),o)),xo(i.prototype,xo(s,ql(e,o))),Qn[i.prop=t]=i,e.targetTest&&(Dl.push(i),ff[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}zm(t,i),e.register&&e.register(Yn,i,Wn)}else ig.push(e)},Ct=255,Ko={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},eu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},sg=function(e,t,n){var i=e?xr(e)?[e>>16,e>>8&Ct,e&Ct]:0:Ko.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ko[e])i=Ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Qd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=eu(l+1/3,s,o),i[1]=eu(l,s,o),i[2]=eu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Fm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Qd)||Ko.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ct,o=i[1]/Ct,a=i[2]/Ct,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},og=function(e){var t=[],n=[],i=-1;return e.split(Br).forEach(function(s){var o=s.match(js)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},sp=function(e,t,n){var i="",s=(e+i).match(Br),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=sg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=og(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Br,"1").split(js),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Br),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Br=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ko)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),wb=/hsl[a]?\(/,ag=function(e){var t=e.join(" "),n;if(Br.lastIndex=0,Br.test(t))return n=wb.test(t),e[1]=sp(e[1],n),e[0]=sp(e[0],n,og(e[1])),!0},Aa,ni=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,T=m===!0,b,S,M,w;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,b=M-o,(b>0||T)&&(w=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=b+(b>=s?4:s-b),S=1),T||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](M,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Bm&&(!dh&&cf()&&(Fi=dh=window,uf=Fi.document||{},li.gsap=Yn,(Fi.gsapVersions||(Fi.gsapVersions=[])).push(Yn.version),km(Xl||Fi.GreenSockGlobals||!Fi.gsap&&Fi||{}),ig.forEach(rg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Aa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ea},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,T){var b=p?function(S,M,w,A){m(S,M,w,A),h.remove(b)}:m;return h.remove(m),a[T?"unshift":"push"](b),Mo(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Mo=function(){return!Aa&&ni.wake()},pt={},Ab=/^[\d.\-M][\d.\-,\s]/,Rb=/["']/g,Cb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Rb,"").trim():+c,i=l.substr(a+1).trim();return t},Pb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Db=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Cb(t[1])]:Pb(e).split(",").map(Wm)):pt._CE&&Ab.test(e)?pt._CE("",e):n},lg=function(e){return function(t){return 1-e(1-t)}},cg=function r(e,t){for(var n=e._first,i;n;)n instanceof Nn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ms=function(e,t){return e&&(Xt(e)?e:pt[e]||Db(e))||t},bs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Gn(e,function(a){pt[a]=li[a]=s,pt[o=a.toLowerCase()]=n;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},ug=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},tu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/fh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*nb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ug(a);return s=fh/s,l.config=function(c,u){return r(e,c,u)},l},nu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ug(n);return i.config=function(s){return r(e,s)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;bs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;bs("Elastic",tu("in"),tu("out"),tu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});bs("Circ",function(r){return-(Nm(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-tb(r*QT)+1});bs("Back",nu("in"),nu("out"),nu());pt.SteppedEase=pt.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((i*Fa(0,o,a)|0)+s)*n}}};_o.ease=pt["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return df+=r+","+r+"Params,"});var hg=function(e,t){this.id=eb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Hm,this.set=t?t.getSetter:vf},Ra=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,So(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),Aa||ni.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,So(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Mo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fc(this,n),!s._dp||s.parent||qm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+np(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+np(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?vo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),hc(this),fb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=lb);var i=gn;return gn=n,mf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ip(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ip(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(fi(this,n),Hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i)),this._dur||(this._zTime=-Pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Xt(n)?n:Xm,l=function(){var u=i.then;i.then=null,s&&s(),Xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){qo(this)},r})();ci(Ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Nn=(function(r){Im(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),zt&&zi(n.parent||zt,or(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Km(or(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return sa(0,arguments,this),this},t.from=function(i,s,o){return sa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return sa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(i,s,fi(this,o),1),this},t.call=function(i,s,o){return zi(this,en.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new en(i,o,fi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ra(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ra(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:kt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,T,b,S,M,w,A;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,b=this._ts,p=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=kt(u%m),u===l?(_=this._repeat,f=c):(M=kt(u/m),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=vo(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),w&&_&1&&(f=c-f,A=1),_!==M&&!this._lock){var P=w&&M&1,x=P===(w&&_&1);if(_<M&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:kt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;cg(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=gb(this,kt(a),kt(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!M&&(ri(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-Pt);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||gn&&mf(d)),f!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=y?-Pt:Pt);break}}d=g}}if(T&&!s&&(this.pause(),T.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=S,hc(this),this.render(i,s,o);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ri(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(xr(s)||(s=fi(this,s,i)),!(i instanceof Ra)){if(bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(pn(i))return this.addLabel(i,s);if(Xt(i))i=en.delayedCall(0,i);else return this}return this!==i?zi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-xi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof en?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return pn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&uc(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=fi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=en.delayedCall(0,s||Ea,o);return a.data="isPause",this._hasPause=1,zi(this,a,fi(this,i))},t.removePause=function(i){var s=this._first;for(i=fi(this,i);s;)s._start===i&&s.data==="isPause"&&zr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Lr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=vi(i),l=this._first,c=xr(s),u;l;)l instanceof en?cb(l._targets,a)&&(c?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=fi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=en.to(o,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&So(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ci({startAt:{time:fi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rp(this,fi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rp(this,fi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=kt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=xi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=kt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;So(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(zt._ts&&(Gm(zt,Kl(i,zt)),Vm=ni.frame),ni.frame>=ep){ep+=oi.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&oi.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},e})(Ra);ci(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lb=function(e,t,n,i,s,o,a){var l=new Wn(this._pt,e,t,0,1,_g,null,s),c=0,u=0,h,f,d,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=wa(i)),o&&(T=[n,i],o(T,e,t),n=T[0],i=T[1]),f=n.match(Jc)||[];h=Jc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?to(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Jc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Om.test(i)||p)&&(l.e=0),this._pt=l,l},gf=function(e,t,n,i,s,o,a,l,c,u){Xt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Xt(h)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Xt(h)?c?Ob:mg:xf,g;if(pn(i)&&(~i.indexOf("random(")&&(i=wa(i)),i.charAt(1)==="="&&(g=to(f,i)+(yn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Sh)return!isNaN(f*i)&&i!==""?(g=new Wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?kb:gg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&hf(t,i),Lb.call(this,e,t,f,i,d,l||oi.stringFilter,c))},Ib=function(e,t,n,i,s){if(Xt(e)&&(e=oa(e,s,t,n,i)),!Zi(e)||e.style&&e.nodeType||bn(e)||Um(e))return pn(e)?oa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=oa(e[a],s,t,n,i);return o},fg=function(e,t,n,i,s,o){var a,l,c,u;if(Qn[e]&&(a=new Qn[e]).init(s,a.rawVars?t[e]:Ib(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Wn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==$s))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Lr,Sh,_f=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!af,S=e.timeline,M,w,A,P,x,y,D,I,F,z,W,k,O;if(S&&(!f||!s)&&(s="none"),e._ease=ms(s,_o.ease),e._yEase=h?lg(ms(h===!0?s:h,_o.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(I=m[0]?ds(m[0]).harness:0,k=I&&i[I.prop],M=ql(i,ff),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Pl:ab),_._lazy=0),o){if(zr(e._startAt=en.set(m,ci({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!d)&&e._startAt.revert(Pl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),A=ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Hn(l),immediateRender:a,stagger:0,parent:p},M),k&&(A[I.prop]=k),zr(e._startAt=en.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Pl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Hn(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],D=x._gsap||pf(m)[w]._gsap,e._ptLookup[w]=z={},ph[D.id]&&Or.length&&Yl(),W=T===m?w:T.indexOf(x),I&&(F=new I).init(x,k||M,e,W,T)!==!1&&(e._pt=P=new Wn(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(K){z[K]=P}),F.priority&&(y=1)),!I||k)for(A in M)Qn[A]&&(F=fg(A,M,e,W,x,T))?F.priority&&(y=1):z[A]=P=gf.call(e,x,A,"get",M[A],W,T,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),b&&e._pt&&(Lr=e,zt.killTweensOf(x,z,e.globalTime(t)),O=!e.parent,Lr=0),e._pt&&l&&(ph[D.id]=1)}y&&xg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&S.render(xi,!0,!0)},Nb=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sh=1,e.vars[t]="+=0",_f(e,a),Sh=0,l?ba(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Kt(n)+yn(h.e)),h.b&&(h.b=u.s+yn(h.b))},Ub=function(e,t){var n=e[0]?ds(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=xo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Fb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(bn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},oa=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):pn(e)&&~e.indexOf("random(")?wa(e):e},dg=df+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pg={};Gn(dg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return pg[r]=1});var en=(function(r){Im(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ra(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||zt,b=(bn(n)||Um(n)?xr(n[0]):"length"in i)?[n]:vi(n),S,M,w,A,P,x,y,D;if(a._targets=b.length?pf(b):ba("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||cl(c)||cl(u)){if(i=a.vars,S=a.timeline=new Nn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:b}),S.kill(),S.parent=S._dp=or(a),S._start=0,f||cl(c)||cl(u)){if(A=b.length,y=f&&Jm(f),Zi(f))for(P in f)~dg.indexOf(P)&&(D||(D={}),D[P]=f[P]);for(M=0;M<A;M++)w=ql(i,pg),w.stagger=0,p&&(w.yoyoEase=p),D&&xo(w,D),x=b[M],w.duration=+oa(c,or(a),M,x,b),w.delay=(+oa(u,or(a),M,x,b)||0)-a._delay,!f&&A===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(x,w,y?y(M,x,b):0),S._ease=pt.none;S.duration()?c=u=0:a.timeline=0}else if(g){ra(ci(S.vars.defaults,{ease:"none"})),S._ease=ms(g.ease||i.ease||"none");var I=0,F,z,W;if(bn(g))g.forEach(function(k){return S.to(b,k,">")}),S.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||Fb(P,g[P],w,g.easeEach);for(P in w)for(F=w[P].sort(function(k,O){return k.t-O.t}),I=0,M=0;M<F.length;M++)z=F[M],W={ease:z.e,duration:(z.t-(M?F[M-1].t:0))/100*c},W[P]=z.v,S.to(b,W,I),I+=W.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!af&&(Lr=or(a),zt.killTweensOf(b),Lr=0),zi(T,or(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===kt(T._time)&&Hn(h)&&db(or(a))&&T.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-u)||0)),m&&Km(or(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Pt&&!u?l:i<Pt?0:i,f,d,g,_,m,p,T,b,S;if(!c)mb(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=kt(h%_),h===l?(g=this._repeat,f=c):(m=kt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=c-f),m=vo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(b&&this._yEase&&cg(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(jm(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(S||this._ease)(f/c),this._from&&(this.ratio=T=1-T),!a&&h&&!s&&!m&&(ri(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&mh(this,i,s,o),ri(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&mh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Aa||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||_f(this,c),u=this._ease(c/this._dur),Nb(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(fc(this,0),this.parent||Ym(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Lr&&Lr.vars.overwrite!==!0)._first||qo(this),this.parent&&o!==this.timeline.totalDuration()&&So(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&hb(a,l))return s==="all"&&(this._pt=0),qo(this);for(h=this._op=this._op||[],s!=="all"&&(pn(s)&&(_={},Gn(s,function(T){return _[T]=1}),s=_),s=Ub(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&uc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&qo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return sa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return sa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return zt.killTweensOf(i,s,o)},e})(Ra);ci(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(r){en[r]=function(){var e=new Nn,t=_h.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var xf=function(e,t,n){return e[t]=n},mg=function(e,t,n){return e[t](n)},Ob=function(e,t,n,i){return e[t](i.fp,n)},Bb=function(e,t,n){return e.setAttribute(t,n)},vf=function(e,t){return Xt(e[t])?mg:lf(e[t])&&e.setAttribute?Bb:xf},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},kb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_g=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Sf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zb=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Vb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?uc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Hb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},xg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Wn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||gg,this.d=l||this,this.set=c||xf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Hb,this.m=n,this.mt=s,this.tween=i},r})();Gn(df+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ff[r]=1});li.TweenMax=li.TweenLite=en;li.TimelineLite=li.TimelineMax=Nn;zt=new Nn({sortChildren:!1,defaults:_o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=ag;var gs=[],Ll={},Gb=[],op=0,Wb=0,iu=function(e){return(Ll[e]||Gb).map(function(t){return t()})},Mh=function(){var e=Date.now(),t=[];e-op>2&&(iu("matchMediaInit"),gs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Fi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),iu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),op=e,iu("matchMedia"))},vg=(function(){function r(t,n){this.selector=n&&xh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Wb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var o=this,a=function(){var c=Ot,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=xh(s)),Ot=o,h=i.apply(o,arguments),Xt(h)&&o._r.push(h),Ot=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Xt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Xb=(function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Zi(n)||(n={matches:n});var o=new vg(0,s||this.scope),a=o.conditions={},l,c,u;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Fi.matchMedia(n[c]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Mh):l.addEventListener("change",Mh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),jl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return rg(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){pn(e)&&(e=vi(e)[0]);var s=ds(e||{}).get,o=n?Xm:Wm;return n==="native"&&(n=""),e&&(t?o((Qn[t]&&Qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Qn[a]&&Qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Qn[t],a=ds(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;$s._pt=0,h.init(e,n?u+n:u,$s,0,[e]),h.render(1,h),$s._pt&&Sf(1,$s)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Yn.to(e,ci((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,_o.ease)),tp(_o,e||{})},config:function(e){return tp(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qn[a]&&!li[a]&&ba(t+" effect requires "+a+" plugin.")}),Qc[t]=function(a,l,c){return n(vi(a),ci(l||{},s),c)},o&&(Nn.prototype[t]=function(a,l,c){return this.add(Qc[t](a,Zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):pt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,s;for(n.smoothChildTiming=Hn(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&zi(n,i,i._start-i._delay),i=s;return zi(zt,n,0),n},context:function(e,t){return e?new vg(e,t):Ot},matchMedia:function(e){return new Xb(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Mh()},addEventListener:function(e,t){var n=Ll[e]||(Ll[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ll[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Tb,wrapYoyo:bb,distribute:Jm,random:eg,snap:Qm,normalize:yb,getUnit:yn,clamp:xb,splitColor:sg,toArray:vi,selector:xh,mapRange:ng,pipe:Sb,unitize:Mb,interpolate:Eb,shuffle:Zm},install:km,effects:Qc,ticker:ni,updateRoot:Nn.updateRoot,plugins:Qn,globalTimeline:zt,core:{PropTween:Wn,globals:zm,Tween:en,Timeline:Nn,Animation:Ra,getCache:ds,_removeLinkedListItem:uc,reverting:function(){return gn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return af=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return jl[r]=en[r]});ni.add(Nn.updateRoot);$s=jl.to({},{duration:0});var Yb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qb=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Yb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ru=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(pn(s)&&(l={},Gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}qb(a,s)}}}},Yn=jl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ru("roundProps",vh),ru("modifiers"),ru("snap",Qm))||jl;en.version=Nn.version=Yn.version="3.14.2";Bm=1;cf()&&Mo();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var ap,Ir,no,Mf,hs,lp,yf,Kb=function(){return typeof window<"u"},vr={},is=180/Math.PI,io=Math.PI/180,Hs=Math.atan2,cp=1e8,Tf=/([A-Z])/g,jb=/(left|right|width|margin|padding|x)/i,$b=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Jb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Sg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tE=function(e,t,n){return e.style[t]=n},nE=function(e,t,n){return e.style.setProperty(t,n)},iE=function(e,t,n){return e._gsap[t]=n},rE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},sE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},oE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Vt="transform",Xn=Vt+"Origin",aE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in vr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ar(i,a)}):this.tfm[e]=o.x?o[e]:ar(i,e),e===Xn&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},yg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=yf(),(!s||!s.isStart)&&!n[Vt]&&(yg(n),i.zOrigin&&n[Xn]&&(n[Xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Tg=function(e,t){var n={target:e,props:[],revert:lE,save:aE};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},bg,Th=function(e,t){var n=Ir.createElementNS?Ir.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ir.createElement(e);return n&&n.style?n:Ir.createElement(e)},si=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Tf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,yo(t)||t,1)||""},up="O,Moz,ms,Ms,Webkit".split(","),yo=function(e,t,n){var i=t||hs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(up[o]+e in s););return o<0?null:(o===3?"ms":o>=0?up[o]:"")+e},bh=function(){Kb()&&window.document&&(ap=window,Ir=ap.document,no=Ir.documentElement,hs=Th("div")||{style:{}},Th("div"),Vt=yo(Vt),Xn=Vt+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bg=!!yo("perspective"),yf=Yn.core.reverting,Mf=1)},hp=function(e){var t=e.ownerSVGElement,n=Th("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),no.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),no.removeChild(n),s},fp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Eg=function(e){var t,n;try{t=e.getBBox()}catch{t=hp(e),n=1}return t&&(t.width||t.height)||n||(t=hp(e)),t&&!t.width&&!t.x&&!t.y?{x:+fp(e,["x","cx","x1"])||0,y:+fp(e,["y","cy","y1"])||0,width:0,height:0}:t},wg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Eg(e))},Vr=function(e,t){if(t){var n=e.style,i;t in vr&&t!==Xn&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Tf,"-$1").toLowerCase())):n.removeAttribute(t)}},Nr=function(e,t,n,i,s,o){var a=new Wn(e._pt,t,n,0,1,o?Mg:Sg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},dp={deg:1,rad:1,turn:1},cE={grid:1,flex:1},Hr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=hs.style,l=jb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||dp[i]||dp[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&wg(e),(d||o==="%")&&(vr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ir||!_.appendChild)&&(_=Ir.body),m=_._gsap,m&&d&&m.width&&l&&m.time===ni.time&&!m.uncache)return Kt(s/m.width*h);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+i,g=e[u],T?e.style[t]=T:Vr(e,t)}else(d||o==="%")&&!cE[si(_,"display")]&&(a.position=si(e,"position")),_===e&&(a.position="static"),_.appendChild(hs),g=hs[u],_.removeChild(hs),a.position="absolute";return l&&d&&(m=ds(_),m.time=ni.time,m.width=_[u]),Kt(f?g*s/h:g&&s?h/g*s:0)},ar=function(e,t,n,i){var s;return Mf||bh(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(s=Pa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Zl(si(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$l[t]&&$l[t](e,t,n)||si(e,t)||Hm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Hr(e,t,s,n)+n:s},uE=function(e,t,n,i){if(!n||n==="none"){var s=yo(t,e,1),o=s&&si(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=si(e,"borderTopColor"))}var a=new Wn(this._pt,e.style,t,0,1,_g),l=0,c=0,u,h,f,d,g,_,m,p,T,b,S,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=si(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=si(e,t)||i,_?e.style[t]=_:Vr(e,t)),u=[n,i],ag(u),n=u[0],i=u[1],f=n.match(js)||[],M=i.match(js)||[],M.length){for(;h=js.exec(i);)m=h[0],T=i.substring(l,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=to(d,m)+S),p=parseFloat(m),b=m.substr((p+"").length),l=js.lastIndex-b.length,b||(b=b||oi.units[t]||S,l===i.length&&(i+=b,a.e+=b)),S!==b&&(d=Hr(e,t,_,b)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Mg:Sg;return Om.test(i)&&(a.e=0),this._pt=a,a},pp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=pp[n]||n,t[1]=pp[i]||i,t.join(" ")},fE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],vr[a]&&(l=1,a=a==="transformOrigin"?Xn:Vt),Vr(n,a);l&&(Vr(n,Vt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Pa(n,1),o.uncache=1,yg(i)))}},$l={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Wn(e._pt,t,n,0,0,fE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ca=[1,0,0,1,0,0],Ag={},Rg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mp=function(e){var t=si(e,Vt);return Rg(t)?Ca:t.substr(7).match(Fm).map(Kt)},bf=function(e,t){var n=e._gsap||ds(e),i=e.style,s=mp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ca:s):(s===Ca&&!e.offsetParent&&e!==no&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,no.appendChild(e)),s=mp(e),l?i.display=l:Vr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):no.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Eh=function(e,t,n,i,s,o){var a=e._gsap,l=s||bf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],b=t.split(" "),S=parseFloat(b[0])||0,M=parseFloat(b[1])||0,w,A,P,x;n?l!==Ca&&(A=d*m-g*_)&&(P=S*(m/A)+M*(-_/A)+(_*T-m*p)/A,x=S*(-g/A)+M*(d/A)-(d*T-g*p)/A,S=P,M=x):(w=Eg(e),S=w.x+(~b[0].indexOf("%")?S/100*w.width:S),M=w.y+(~(b[1]||b[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&a.smooth?(p=S-c,T=M-u,a.xOffset=h+(p*d+T*_)-p,a.yOffset=f+(p*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Xn]="0px 0px",o&&(Nr(o,a,"xOrigin",c,S),Nr(o,a,"yOrigin",u,M),Nr(o,a,"xOffset",h,a.xOffset),Nr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Pa=function(e,t){var n=e._gsap||new hg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=si(e,Xn)||"0",u,h,f,d,g,_,m,p,T,b,S,M,w,A,P,x,y,D,I,F,z,W,k,O,K,te,C,ie,Ee,Ie,Ve,Ke;return u=h=f=_=m=p=T=b=S=0,d=g=1,n.svg=!!(e.getCTM&&wg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),A=bf(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Eh(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,w=n.yOrigin||0,A!==Ca&&(D=A[0],I=A[1],F=A[2],z=A[3],u=W=A[4],h=k=A[5],A.length===6?(d=Math.sqrt(D*D+I*I),g=Math.sqrt(z*z+F*F),_=D||I?Hs(I,D)*is:0,T=F||z?Hs(F,z)*is+_:0,T&&(g*=Math.abs(Math.cos(T*io))),n.svg&&(u-=M-(M*D+w*F),h-=w-(M*I+w*z))):(Ke=A[6],Ie=A[7],C=A[8],ie=A[9],Ee=A[10],Ve=A[11],u=A[12],h=A[13],f=A[14],P=Hs(Ke,Ee),m=P*is,P&&(x=Math.cos(-P),y=Math.sin(-P),O=W*x+C*y,K=k*x+ie*y,te=Ke*x+Ee*y,C=W*-y+C*x,ie=k*-y+ie*x,Ee=Ke*-y+Ee*x,Ve=Ie*-y+Ve*x,W=O,k=K,Ke=te),P=Hs(-F,Ee),p=P*is,P&&(x=Math.cos(-P),y=Math.sin(-P),O=D*x-C*y,K=I*x-ie*y,te=F*x-Ee*y,Ve=z*y+Ve*x,D=O,I=K,F=te),P=Hs(I,D),_=P*is,P&&(x=Math.cos(P),y=Math.sin(P),O=D*x+I*y,K=W*x+k*y,I=I*x-D*y,k=k*x-W*y,D=O,W=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Kt(Math.sqrt(D*D+I*I+F*F)),g=Kt(Math.sqrt(k*k+Ke*Ke)),P=Hs(W,k),T=Math.abs(P)>2e-4?P*is:0,S=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Rg(si(e,Vt)),O&&e.setAttribute("transform",O))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Kt(d),n.scaleY=Kt(g),n.rotation=Kt(_)+a,n.rotationX=Kt(m)+a,n.rotationY=Kt(p)+a,n.skewX=T+a,n.skewY=b+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xn]=Zl(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?pE:bg?Cg:dE,n.uncache=0,n},Zl=function(e){return(e=e.split(" "))[0]+" "+e[1]},su=function(e,t,n){var i=yn(t);return Kt(parseFloat(t)+parseFloat(Hr(e,"x",n+"px",i)))+i},dE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cg(e,t)},es="0deg",zo="0px",ts=") ",Cg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,b=n.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==es||u!==es)){var w=parseFloat(u)*io,A=Math.sin(w),P=Math.cos(w),x;w=parseFloat(h)*io,x=Math.cos(w),o=su(T,o,A*x*-b),a=su(T,a,-Math.sin(w)*-b),l=su(T,l,P*x*-b+b)}m!==zo&&(S+="perspective("+m+ts),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||o!==zo||a!==zo||l!==zo)&&(S+=l!==zo||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ts),c!==es&&(S+="rotate("+c+ts),u!==es&&(S+="rotateY("+u+ts),h!==es&&(S+="rotateX("+h+ts),(f!==es||d!==es)&&(S+="skew("+f+", "+d+ts),(g!==1||_!==1)&&(S+="scale("+g+", "+_+ts),T.style[Vt]=S||"translate(0, 0)"},pE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,b=parseFloat(o),S=parseFloat(a),M,w,A,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=io,c*=io,M=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=io,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,w*=x)),M=Kt(M),w=Kt(w),A=Kt(A),P=Kt(P)):(M=h,P=f,w=A=0),(b&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(b=Hr(d,"x",o,"px"),S=Hr(d,"y",a,"px")),(g||_||m||p)&&(b=Kt(b+g-(g*M+_*A)+m),S=Kt(S+_-(g*w+_*P)+p)),(i||s)&&(x=d.getBBox(),b=Kt(b+i/100*x.width),S=Kt(S+s/100*x.height)),x="matrix("+M+","+w+","+A+","+P+","+b+","+S+")",d.setAttribute("transform",x),T&&(d.style[Vt]=x)},mE=function(e,t,n,i,s){var o=360,a=pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?is:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*cp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*cp)%o-~~(c/o)*o)),e._pt=f=new Wn(e._pt,t,n,i,c,Zb),f.e=u,f.u="deg",e._props.push(n),f},gp=function(e,t){for(var n in t)e[n]=t[n];return e},gE=function(e,t,n){var i=gp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Vt]=t,a=Pa(n,1),Vr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],o[Vt]=t,a=Pa(n,1),o[Vt]=c);for(l in vr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=yn(c),g=yn(u),h=d!==g?Hr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Wn(e._pt,a,l,h,f-h,yh),e._pt.u=g||0,e._props.push(l));gp(a,i)};Gn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});$l[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ar(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Pg={name:"css",register:bh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,T,b,S,M,w,A,P,x;Mf||bh(),this.styles=this.styles||Tg(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Qn[_]&&fg(_,t,n,i,e,s)))){if(d=typeof u,g=$l[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=wa(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Br.lastIndex=0,Br.test(c)||(m=yn(c),p=yn(u),p?m!==p&&(c=Hr(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],pn(c)&&~c.indexOf("random(")&&(c=wa(c)),yn(c+"")||c==="auto"||(c+=oi.units[_]||yn(ar(e,_))||""),(c+"").charAt(1)==="="&&(c=ar(e,_))):c=ar(e,_),f=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),_ in Gi&&(_==="autoAlpha"&&(f===1&&ar(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Nr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in vr,b){if(this.styles.save(_),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=si(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=si(e,"perspective"),y?e.style.perspective=y:Vr(e,"perspective")}h=parseFloat(u)}if(S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Pa(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new Wn(this._pt,a,Vt,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new Wn(this._pt,M,"scaleY",M.scaleY,(T?to(M.scaleY,T+h):h)-M.scaleY||0,yh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Xn,0,a[Xn]),u=hE(u),M.svg?Eh(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Nr(this,M,"zOrigin",M.zOrigin,p),Nr(this,a,_,Zl(c),Zl(u)));continue}else if(_==="svgOrigin"){Eh(e,u,1,w,0,this);continue}else if(_ in Ag){mE(this,M,_,f,T?to(f,T+u):u);continue}else if(_==="smoothOrigin"){Nr(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){gE(this,u,e);continue}}else _ in a||(_=yo(_)||_);if(b||(h||h===0)&&(f||f===0)&&!$b.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=yn(u)||(_ in oi.units?oi.units[_]:m),m!==p&&(f=Hr(e,_,c,p)),this._pt=new Wn(this._pt,b?M:a,_,f,(T?to(f,T+h):h)-f,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?eE:yh),this._pt.u=p||0,b&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=Qb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Jb);else if(_ in a)uE.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,i,s);else if(_!=="parseTransform"){hf(_,u);continue}b||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),o.push(_)}}A&&xg(this)},render:function(e,t){if(t.tween._time||!yf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ar,aliases:Gi,getSetter:function(e,t,n){var i=Gi[t];return i&&i.indexOf(",")<0&&(t=i),t in vr&&t!==Xn&&(e._gsap.x||ar(e,"x"))?n&&lp===n?t==="scale"?rE:iE:(lp=n||{})&&(t==="scale"?sE:oE):e.style&&!lf(e.style[t])?tE:~t.indexOf("-")?nE:vf(e,t)},core:{_removeProperty:Vr,_getMatrix:bf}};Yn.utils.checkPrefix=yo;Yn.core.getStyleSaver=Tg;(function(r,e,t,n){var i=Gn(r+","+e+","+t,function(s){vr[s]=1});Gn(e,function(s){oi.units[s]="deg",Ag[s]=1}),Gi[i[13]]=r+","+e,Gn(n,function(s){var o=s.split(":");Gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){oi.units[r]="px"});Yn.registerPlugin(Pg);var tn=Yn.registerPlugin(Pg)||Yn;tn.core.Tween;function _E(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function xE(r,e,t){return e&&_E(r.prototype,e),r}var mn,Il,ii,Ur,Fr,ro,Dg,rs,aa,Lg,hr,Ai,Ig,Ng=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},Ug=1,Zs=[],lt=[],qi=[],la=Date.now,wh=function(e,t){return t},vE=function(){var e=aa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,qi),lt=n,qi=i,wh=function(o,a){return t[o](a)}},kr=function(e,t){return~qi.indexOf(e)&&qi[qi.indexOf(e)+1][t]},ca=function(e){return!!~Lg.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ul="scrollLeft",hl="scrollTop",Ah=function(){return hr&&hr.isPressed||lt.cache++},Jl=function(e,t){var n=function i(s){if(s||s===0){Ug&&(ii.history.scrollRestoration="manual");var o=hr&&hr.isPressed;s=i.v=Math.round(s)||(hr&&hr.iOS?1:0),e(s),i.cacheID=lt.cache,o&&wh("ss",s)}else(t||lt.cache!==i.cacheID||wh("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Un={s:ul,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jl(function(r){return arguments.length?ii.scrollTo(r,rn.sc()):ii.pageXOffset||Ur[ul]||Fr[ul]||ro[ul]||0})},rn={s:hl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:Jl(function(r){return arguments.length?ii.scrollTo(Un.sc(),r):ii.pageYOffset||Ur[hl]||Fr[hl]||ro[hl]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},SE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Gr=function(e,t){var n=t.s,i=t.sc;ca(e)&&(e=Ur.scrollingElement||Fr);var s=lt.indexOf(e),o=i===rn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Rn(e,"scroll",Ah);var a=lt[s+o],l=a||(lt[s+o]=Jl(kr(e,n),!0)||(ca(e)?i:Jl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},Rh=function(e,t,n){var i=e,s=e,o=la(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=la();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=la();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Vo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_p=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Fg=function(){aa=mn.core.globals().ScrollTrigger,aa&&aa.core&&vE()},Og=function(e){return mn=e||Ng(),!Il&&mn&&typeof document<"u"&&document.body&&(ii=window,Ur=document,Fr=Ur.documentElement,ro=Ur.body,Lg=[ii,Ur,Fr,ro],mn.utils.clamp,Ig=mn.core.context||function(){},rs="onpointerenter"in ro?"pointer":"mouse",Dg=jt.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=jt.eventTypes=("ontouchstart"in Fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ug=0},500),Fg(),Il=1),Il};Un.op=rn;lt.cache=0;var jt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Il||Og(mn)||console.warn("Please gsap.registerPlugin(Observer)"),aa||Fg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,b=n.onPress,S=n.onRelease,M=n.onRight,w=n.onLeft,A=n.onUp,P=n.onDown,x=n.onChangeX,y=n.onChangeY,D=n.onChange,I=n.onToggleX,F=n.onToggleY,z=n.onHover,W=n.onHoverEnd,k=n.onMove,O=n.ignoreCheck,K=n.isNormalizer,te=n.onGestureStart,C=n.onGestureEnd,ie=n.onWheel,Ee=n.onEnable,Ie=n.onDisable,Ve=n.onClick,Ke=n.scrollSpeed,Z=n.capture,J=n.allowClicks,de=n.lockAxis,we=n.onLockAxis;this.target=a=zn(a)||Fr,this.vars=n,d&&(d=mn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Ke=Ke||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(ro).lineHeight)||22);var Ae,He,ct,Re,Xe,Qe,ke,G=this,N=0,Q=0,Se=n.passive||!u&&n.passive!==!1,fe=Gr(a,Un),oe=Gr(a,rn),R=fe(),v=oe(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",j=ca(a),$=a.ownerDocument||Ur,X=[0,0,0],_e=[0,0,0],le=0,Ce=function(){return le=la()},Pe=function(Ne,tt){return(G.event=Ne)&&d&&SE(Ne.target,d)||tt&&U&&Ne.pointerType!=="touch"||O&&O(Ne,tt)},se=function(){G._vx.reset(),G._vy.reset(),He.pause(),h&&h(G)},ce=function(){var Ne=G.deltaX=_p(X),tt=G.deltaY=_p(_e),xe=Math.abs(Ne)>=i,je=Math.abs(tt)>=i;D&&(xe||je)&&D(G,Ne,tt,X,_e),xe&&(M&&G.deltaX>0&&M(G),w&&G.deltaX<0&&w(G),x&&x(G),I&&G.deltaX<0!=N<0&&I(G),N=G.deltaX,X[0]=X[1]=X[2]=0),je&&(P&&G.deltaY>0&&P(G),A&&G.deltaY<0&&A(G),y&&y(G),F&&G.deltaY<0!=Q<0&&F(G),Q=G.deltaY,_e[0]=_e[1]=_e[2]=0),(Re||ct)&&(k&&k(G),ct&&(m&&ct===1&&m(G),T&&T(G),ct=0),Re=!1),Qe&&!(Qe=!1)&&we&&we(G),Xe&&(ie(G),Xe=!1),Ae=0},be=function(Ne,tt,xe){X[xe]+=Ne,_e[xe]+=tt,G._vx.update(Ne),G._vy.update(tt),c?Ae||(Ae=requestAnimationFrame(ce)):ce()},De=function(Ne,tt){de&&!ke&&(G.axis=ke=Math.abs(Ne)>Math.abs(tt)?"x":"y",Qe=!0),ke!=="y"&&(X[2]+=Ne,G._vx.update(Ne,!0)),ke!=="x"&&(_e[2]+=tt,G._vy.update(tt,!0)),c?Ae||(Ae=requestAnimationFrame(ce)):ce()},he=function(Ne){if(!Pe(Ne,1)){Ne=Vo(Ne,u);var tt=Ne.clientX,xe=Ne.clientY,je=tt-G.x,Fe=xe-G.y,$e=G.isDragging;G.x=tt,G.y=xe,($e||(je||Fe)&&(Math.abs(G.startX-tt)>=s||Math.abs(G.startY-xe)>=s))&&(ct||(ct=$e?2:1),$e||(G.isDragging=!0),De(je,Fe))}},qe=G.onPress=function(ye){Pe(ye,1)||ye&&ye.button||(G.axis=ke=null,He.pause(),G.isPressed=!0,ye=Vo(ye),N=Q=0,G.startX=G.x=ye.clientX,G.startY=G.y=ye.clientY,G._vx.reset(),G._vy.reset(),Rn(K?a:$,Ai[1],he,Se,!0),G.deltaX=G.deltaY=0,b&&b(G))},L=G.onRelease=function(ye){if(!Pe(ye,1)){An(K?a:$,Ai[1],he,!0);var Ne=!isNaN(G.y-G.startY),tt=G.isDragging,xe=tt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),je=Vo(ye);!xe&&Ne&&(G._vx.reset(),G._vy.reset(),u&&J&&mn.delayedCall(.08,function(){if(la()-le>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if($.createEvent){var Fe=$.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,ii,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(Fe)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&tt&&!K&&He.restart(!0),ct&&ce(),p&&tt&&p(G),S&&S(G,xe)}},pe=function(Ne){return Ne.touches&&Ne.touches.length>1&&(G.isGesturing=!0)&&te(Ne,G.isDragging)},re=function(){return(G.isGesturing=!1)||C(G)},me=function(Ne){if(!Pe(Ne)){var tt=fe(),xe=oe();be((tt-R)*Ke,(xe-v)*Ke,1),R=tt,v=xe,h&&He.restart(!0)}},ne=function(Ne){if(!Pe(Ne)){Ne=Vo(Ne,u),ie&&(Xe=!0);var tt=(Ne.deltaMode===1?l:Ne.deltaMode===2?ii.innerHeight:1)*g;be(Ne.deltaX*tt,Ne.deltaY*tt,0),h&&!K&&He.restart(!0)}},ee=function(Ne){if(!Pe(Ne)){var tt=Ne.clientX,xe=Ne.clientY,je=tt-G.x,Fe=xe-G.y;G.x=tt,G.y=xe,Re=!0,h&&He.restart(!0),(je||Fe)&&De(je,Fe)}},ae=function(Ne){G.event=Ne,z(G)},Oe=function(Ne){G.event=Ne,W(G)},mt=function(Ne){return Pe(Ne)||Vo(Ne,u)&&Ve(G)};He=G._dc=mn.delayedCall(f||.25,se).pause(),G.deltaX=G.deltaY=0,G._vx=Rh(0,50,!0),G._vy=Rh(0,50,!0),G.scrollX=fe,G.scrollY=oe,G.isDragging=G.isGesturing=G.isPressed=!1,Ig(this),G.enable=function(ye){return G.isEnabled||(Rn(j?$:a,"scroll",Ah),o.indexOf("scroll")>=0&&Rn(j?$:a,"scroll",me,Se,Z),o.indexOf("wheel")>=0&&Rn(a,"wheel",ne,Se,Z),(o.indexOf("touch")>=0&&Dg||o.indexOf("pointer")>=0)&&(Rn(a,Ai[0],qe,Se,Z),Rn($,Ai[2],L),Rn($,Ai[3],L),J&&Rn(a,"click",Ce,!0,!0),Ve&&Rn(a,"click",mt),te&&Rn($,"gesturestart",pe),C&&Rn($,"gestureend",re),z&&Rn(a,rs+"enter",ae),W&&Rn(a,rs+"leave",Oe),k&&Rn(a,rs+"move",ee)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Re=ct=!1,G._vx.reset(),G._vy.reset(),R=fe(),v=oe(),ye&&ye.type&&qe(ye),Ee&&Ee(G)),G},G.disable=function(){G.isEnabled&&(Zs.filter(function(ye){return ye!==G&&ca(ye.target)}).length||An(j?$:a,"scroll",Ah),G.isPressed&&(G._vx.reset(),G._vy.reset(),An(K?a:$,Ai[1],he,!0)),An(j?$:a,"scroll",me,Z),An(a,"wheel",ne,Z),An(a,Ai[0],qe,Z),An($,Ai[2],L),An($,Ai[3],L),An(a,"click",Ce,!0),An(a,"click",mt),An($,"gesturestart",pe),An($,"gestureend",re),An(a,rs+"enter",ae),An(a,rs+"leave",Oe),An(a,rs+"move",ee),G.isEnabled=G.isPressed=G.isDragging=!1,Ie&&Ie(G))},G.kill=G.revert=function(){G.disable();var ye=Zs.indexOf(G);ye>=0&&Zs.splice(ye,1),hr===G&&(hr=0)},Zs.push(G),K&&ca(a)&&(hr=G),G.enable(_)},xE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();jt.version="3.14.2";jt.create=function(r){return new jt(r)};jt.register=Og;jt.getAll=function(){return Zs.slice()};jt.getById=function(r){return Zs.filter(function(e){return e.vars.id===r})[0]};Ng()&&mn.registerPlugin(jt);var Le,qs,at,It,ei,yt,Ef,Ql,Da,ua,jo,fl,Sn,dc,Ch,Dn,xp,vp,Ks,Bg,ou,kg,Pn,Ph,zg,Vg,Cr,Dh,wf,so,Af,ha,Lh,au,dl=1,Mn=Date.now,lu=Mn(),Mi=0,$o=0,Sp=function(e,t,n){var i=Jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mp=function(e,t){return t&&(!Jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ME=function r(){return $o&&requestAnimationFrame(r)},yp=function(){return dc=1},Tp=function(){return dc=0},Oi=function(e){return e},Zo=function(e){return Math.round(e*1e5)/1e5||0},Hg=function(){return typeof window<"u"},Gg=function(){return Le||Hg()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Ms=function(e){return!!~Ef.indexOf(e)},Wg=function(e){return(e==="Height"?Af:at["inner"+e])||ei["client"+e]||yt["client"+e]},Xg=function(e){return kr(e,"getBoundingClientRect")||(Ms(e)?function(){return Bl.width=at.innerWidth,Bl.height=Af,Bl}:function(){return lr(e)})},yE=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=kr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Wg(s):e["client"+s])||0}},TE=function(e,t){return!t||~qi.indexOf(e)?Xg(e):function(){return Bl}},Wi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=kr(e,n))?o()-Xg(e)()[s]:Ms(e)?(ei[n]||yt[n])-Wg(i):e[n]-e["offset"+i])},pl=function(e,t){for(var n=0;n<Ks.length;n+=3)(!t||~t.indexOf(Ks[n+1]))&&e(Ks[n],Ks[n+1],Ks[n+2])},Jn=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},Jo=function(e){return typeof e=="number"},ss=function(e){return typeof e=="object"},Ho=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},cu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Gs=Math.abs,Yg="left",qg="top",Rf="right",Cf="bottom",_s="width",xs="height",fa="Right",da="Left",pa="Top",ma="Bottom",Qt="padding",pi="margin",To="Width",Pf="Height",nn="px",mi=function(e){return at.getComputedStyle(e)},bE=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},bp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lr=function(e,t){var n=t&&mi(e)[Ch]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ec=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Kg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},EE=function(e){return function(t){return Le.utils.snap(Kg(e),t)}},Df=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},wE=function(e){return function(t,n){return Df(Kg(e))(t,n.direction)}},ml=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},gl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ep={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_l={toggleActions:"play",anticipatePin:0},tc={top:0,left:0,center:.5,bottom:1,right:1},Nl=function(e,t){if(Jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in tc?tc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},xl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=It.createElement("div"),_=Ms(n)||kr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?yt:n,T=e.indexOf("start")!==-1,b=T?c:u,S="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===rn?Rf:Cf)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ul(g,0,i,T),g},Ul=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+To]=1,s["border"+a+To]=0,s[n.p]=t+"px",Le.set(e,s)},ot=[],Ih={},La,wp=function(){return Mn()-Mi>34&&(La||(La=requestAnimationFrame(pr)))},Ws=function(){(!Pn||!Pn.isPressed||Pn.startX>yt.clientWidth)&&(lt.cache++,Pn?La||(La=requestAnimationFrame(pr)):pr(),Mi||Ts("scrollStart"),Mi=Mn())},uu=function(){Vg=at.innerWidth,zg=at.innerHeight},Qo=function(e){lt.cache++,(e===!0||!Sn&&!kg&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!Ph||Vg!==at.innerWidth||Math.abs(at.innerHeight-zg)>at.innerHeight*.25))&&Ql.restart(!0)},ys={},AE=[],jg=function r(){return un(Je,"scrollEnd",r)||fs(!0)},Ts=function(e){return ys[e]&&ys[e].map(function(t){return t()})||AE},Zn=[],$g=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},Zg=function(){return lt.forEach(function(e){return Tn(e)&&++e.cacheID&&(e.rec=e())})},Lf=function(e,t){var n;for(Dn=0;Dn<ot.length;Dn++)n=ot[Dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ha=!0,t&&$g(t),t||Ts("revert")},Jg=function(e,t){lt.cache++,(t||!Ln)&&lt.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),Jn(e)&&(at.history.scrollRestoration=wf=e)},Ln,vs=0,Ap,RE=function(){if(Ap!==vs){var e=Ap=vs;requestAnimationFrame(function(){return e===vs&&fs(!0)})}},Qg=function(){yt.appendChild(so),Af=!Pn&&so.offsetHeight||at.innerHeight,yt.removeChild(so)},Rp=function(e){return Da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},fs=function(e,t){if(ei=It.documentElement,yt=It.body,Ef=[at,It,ei,yt],Mi&&!e&&!ha){hn(Je,"scrollEnd",jg);return}Qg(),Ln=Je.isRefreshing=!0,ha||Zg();var n=Ts("refreshInit");Bg&&Je.sort(),t||Lf(),lt.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),ha=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Lh=1,Rp(!0),ot.forEach(function(i){var s=Wi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Rp(!1),Lh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Jg(wf,1),Ql.pause(),vs++,Ln=2,pr(2),ot.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=Je.isRefreshing=!1,Ts("refresh")},Nh=0,Fl=1,ga,pr=function(e){if(e===2||!Ln&&!ha){Je.isUpdating=!0,ga&&ga.update(0);var t=ot.length,n=Mn(),i=n-lu>=50,s=t&&ot[0].scroll();if(Fl=Nh>s?-1:1,Ln||(Nh=s),i&&(Mi&&!dc&&n-Mi>200&&(Mi=0,Ts("scrollEnd")),jo=lu,lu=n),Fl<0){for(Dn=t;Dn-- >0;)ot[Dn]&&ot[Dn].update(0,i);Fl=1}else for(Dn=0;Dn<t;Dn++)ot[Dn]&&ot[Dn].update(0,i);Je.isUpdating=!1}La=0},Uh=[Yg,qg,Cf,Rf,pi+ma,pi+fa,pi+pa,pi+da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ol=Uh.concat([_s,xs,"boxSizing","max"+To,"max"+Pf,"position",pi,Qt,Qt+pa,Qt+fa,Qt+ma,Qt+da]),CE=function(e,t,n){oo(n);var i=e._gsap;if(i.spacerIsNative)oo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},hu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Uh.length,o=t.style,a=e.style,l;s--;)l=Uh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Cf]=a[Rf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_s]=ec(e,Un)+nn,o[xs]=ec(e,rn)+nn,o[Qt]=a[pi]=a[qg]=a[Yg]="0",oo(i),a[_s]=a["max"+To]=n[_s],a[xs]=a["max"+Pf]=n[xs],a[Qt]=n[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},PE=/([A-Z])/g,oo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(PE,"-$1").toLowerCase())}},vl=function(e){for(var t=Ol.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ol[s],n[Ol[s]]);return i.t=e,i},DE=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Bl={left:0,top:0},Cp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Tn(e)&&(e=e(l)),Jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Nl("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,T;if(d&&d.seek(0),isNaN(e)||(e=+e),Jo(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ul(a,n,i,!0);else{Tn(t)&&(t=t(l));var b=(e||"0").split(" "),S,M,w,A;T=zn(t,l)||yt,S=lr(T)||{},(!S||!S.left&&!S.top)&&mi(T).display==="none"&&(A=T.style.display,T.style.display="block",S=lr(T),A?T.style.display=A:T.style.removeProperty("display")),M=Nl(b[0],S[i.d]),w=Nl(b[1]||"0",n),e=S[i.p]-c[i.p]-u+M+s-w,a&&Ul(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+n,x=o._isStart;m="scroll"+i.d2,Ul(o,P,i,x&&P>20||!x&&(h?Math.max(yt[m],ei[m]):o.parentNode[m])<=P+1),h&&(c=lr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return d&&T&&(m=lr(T),d.seek(f),p=lr(T),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},LE=/(webkit|moz|length|cssText|inset)/i,Pp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=mi(e);for(o in a)!+o&&!LE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},e_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Sl=function(e,t,n){var i={};i[t.p]="+="+n,Le.set(e,i)},Dp=function(e,t){var n=Gr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=e_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&pr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Le.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",n.wheelHandler),Je.isTouch&&hn(e,"touchmove",n.wheelHandler),s},Je=(function(){function r(t,n){qs||r.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=Oi;return}n=bp(Jn(n)||Jo(n)||n.nodeType?{trigger:n}:n,_l);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,b=s.once,S=s.snap,M=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,P=s.fastScrollEnd,x=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:rn,D=!h&&h!==0,I=zn(n.scroller||at),F=Le.core.getCache(I),z=Ms(I),W=("pinType"in n?n.pinType:kr(I,"pinType")||z&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:_l.markers,te=z?0:parseFloat(mi(I)["border"+y.p2+To])||0,C=this,ie=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Ee=yE(I,z,y),Ie=TE(I,z),Ve=0,Ke=0,Z=0,J=Gr(I,y),de,we,Ae,He,ct,Re,Xe,Qe,ke,G,N,Q,Se,fe,oe,R,v,U,j,$,X,_e,le,Ce,Pe,se,ce,be,De,he,qe,L,pe,re,me,ne,ee,ae,Oe;if(C._startClamp=C._endClamp=!1,C._dir=y,m*=45,C.scroller=I,C.scroll=A?A.time.bind(A):J,He=J(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Bg=1,n.refreshPriority===-9999&&(ga=C)),F.tweenScroll=F.tweenScroll||{top:Dp(I,rn),left:Dp(I,Un)},C.tweenTo=de=F.tweenScroll[y.p],C.scrubDuration=function(xe){pe=Jo(xe)&&xe,pe?L?L.duration(xe):L=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pe,paused:!0,onComplete:function(){return p&&p(C)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),he=0,l||(l=i.vars.id)),S&&((!ss(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in yt.style&&Le.set(z?[yt,ei]:I,{scrollBehavior:"auto"}),lt.forEach(function(xe){return Tn(xe)&&xe.target===(z?It.scrollingElement||ei:I)&&(xe.smooth=!1)}),Ae=Tn(S.snapTo)?S.snapTo:S.snapTo==="labels"?EE(i):S.snapTo==="labelsDirectional"?wE(i):S.directional!==!1?function(xe,je){return Df(S.snapTo)(xe,Mn()-Ke<500?0:je.direction)}:Le.utils.snap(S.snapTo),re=S.duration||{min:.1,max:2},re=ss(re)?ua(re.min,re.max):ua(re,re),me=Le.delayedCall(S.delay||pe/2||.1,function(){var xe=J(),je=Mn()-Ke<500,Fe=de.tween;if((je||Math.abs(C.getVelocity())<10)&&!Fe&&!dc&&Ve!==xe){var $e=(xe-Re)/fe,Bt=i&&!D?i.totalProgress():$e,nt=je?0:(Bt-qe)/(Mn()-jo)*1e3||0,vt=Le.utils.clamp(-$e,1-$e,Gs(nt/2)*nt/.185),Nt=$e+(S.inertia===!1?0:vt),Rt,xt,ft=S,Gt=ft.onStart,St=ft.onInterrupt,$t=ft.onComplete;if(Rt=Ae(Nt,C),Jo(Rt)||(Rt=Nt),xt=Math.max(0,Math.round(Re+Rt*fe)),xe<=Xe&&xe>=Re&&xt!==xe){if(Fe&&!Fe._initted&&Fe.data<=Gs(xt-xe))return;S.inertia===!1&&(vt=Rt-$e),de(xt,{duration:re(Gs(Math.max(Gs(Nt-Bt),Gs(Rt-Bt))*.185/nt/.05||0)),ease:S.ease||"power3",data:Gs(xt-xe),onInterrupt:function(){return me.restart(!0)&&St&&St(C)},onComplete:function(){C.update(),Ve=J(),i&&!D&&(L?L.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),he=qe=i&&!D?i.totalProgress():C.progress,T&&T(C),$t&&$t(C)}},xe,vt*fe,xt-xe-vt*fe),Gt&&Gt(C,de.tween)}}else C.isActive&&Ve!==xe&&me.restart(!0)}).pause()),l&&(Ih[l]=C),f=C.trigger=zn(f||d!==!0&&d),Oe=f&&f._gsap&&f._gsap.stRevert,Oe&&(Oe=Oe(C)),d=d===!0?f:zn(d),Jn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===pi||(g=!g&&d.parentNode&&d.parentNode.style&&mi(d.parentNode).display==="flex"?!1:Qt),C.pin=d,we=Le.core.getCache(d),we.spacer?oe=we.pinState:(w&&(w=zn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),we.spacerIsNative=!!w,w&&(we.spacerState=vl(w))),we.spacer=U=w||It.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),we.pinState=oe=vl(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),C.spacer=U=we.spacer,De=mi(d),Ce=De[g+y.os2],$=Le.getProperty(d),X=Le.quickSetter(d,y.a,nn),hu(d,U,De),v=vl(d)),K){Q=ss(K)?bp(K,Ep):Ep,G=xl("scroller-start",l,I,y,Q,0),N=xl("scroller-end",l,I,y,Q,0,G),j=G["offset"+y.op.d2];var mt=zn(kr(I,"content")||I);Qe=this.markerStart=xl("start",l,mt,y,Q,j,0,A),ke=this.markerEnd=xl("end",l,mt,y,Q,j,0,A),A&&(ae=Le.quickSetter([Qe,ke],y.a,nn)),!W&&!(qi.length&&kr(I,"fixedMarkers")===!0)&&(bE(z?yt:I),Le.set([G,N],{force3D:!0}),se=Le.quickSetter(G,y.a,nn),be=Le.quickSetter(N,y.a,nn))}if(A){var ye=A.vars.onUpdate,Ne=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){C.update(0,0,1),ye&&ye.apply(A,Ne||[])})}if(C.previous=function(){return ot[ot.indexOf(C)-1]},C.next=function(){return ot[ot.indexOf(C)+1]},C.revert=function(xe,je){if(!je)return C.kill(!0);var Fe=xe!==!1||!C.enabled,$e=Sn;Fe!==C.isReverted&&(Fe&&(ne=Math.max(J(),C.scroll.rec||0),Z=C.progress,ee=i&&i.progress()),Qe&&[Qe,ke,G,N].forEach(function(Bt){return Bt.style.display=Fe?"none":"block"}),Fe&&(Sn=C,C.update(Fe)),d&&(!M||!C.isActive)&&(Fe?CE(d,U,oe):hu(d,U,mi(d),Pe)),Fe||C.update(Fe),Sn=$e,C.isReverted=Fe)},C.refresh=function(xe,je,Fe,$e){if(!((Sn||!C.enabled)&&!je)){if(d&&xe&&Mi){hn(r,"scrollEnd",jg);return}!Ln&&ie&&ie(C),Sn=C,de.tween&&!Fe&&(de.tween.kill(),de.tween=0),L&&L.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Bt=Ee(),nt=Ie(),vt=A?A.duration():Wi(I,y),Nt=fe<=.01||!fe,Rt=0,xt=$e||0,ft=ss(Fe)?Fe.end:n.end,Gt=n.endTrigger||f,St=ss(Fe)?Fe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),$t=C.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,C),_n=f&&Math.max(0,ot.indexOf(C))||0,Yt=_n,Wt,qt,Ti,Sr,Zt,E,B,q,Y,V,ue,Te,ge;for(K&&ss(Fe)&&(Te=Le.getProperty(G,y.p),ge=Le.getProperty(N,y.p));Yt-- >0;)E=ot[Yt],E.end||E.refresh(0,1)||(Sn=C),B=E.pin,B&&(B===f||B===d||B===$t)&&!E.isReverted&&(V||(V=[]),V.unshift(E),E.revert(!0,!0)),E!==ot[Yt]&&(_n--,Yt--);for(Tn(St)&&(St=St(C)),St=Sp(St,"start",C),Re=Cp(St,f,Bt,y,J(),Qe,G,C,nt,te,W,vt,A,C._startClamp&&"_startClamp")||(d?-.001:0),Tn(ft)&&(ft=ft(C)),Jn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Jn(St)?St.split(" ")[0]:"")+ft:(Rt=Nl(ft.substr(2),Bt),ft=Jn(St)?St:(A?Le.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Re):Re)+Rt,Gt=f)),ft=Sp(ft,"end",C),Xe=Math.max(Re,Cp(ft||(Gt?"100% 0":vt),Gt,Bt,y,J()+Rt,ke,N,C,nt,te,W,vt,A,C._endClamp&&"_endClamp"))||-.001,Rt=0,Yt=_n;Yt--;)E=ot[Yt]||{},B=E.pin,B&&E.start-E._pinPush<=Re&&!A&&E.end>0&&(Wt=E.end-(C._startClamp?Math.max(0,E.start):E.start),(B===f&&E.start-E._pinPush<Re||B===$t)&&isNaN(St)&&(Rt+=Wt*(1-E.progress)),B===d&&(xt+=Wt));if(Re+=Rt,Xe+=Rt,C._startClamp&&(C._startClamp+=Rt),C._endClamp&&!Ln&&(C._endClamp=Xe||-.001,Xe=Math.min(Xe,Wi(I,y))),fe=Xe-Re||(Re-=.01)&&.001,Nt&&(Z=Le.utils.clamp(0,1,Le.utils.normalize(Re,Xe,ne))),C._pinPush=xt,Qe&&Rt&&(Wt={},Wt[y.a]="+="+Rt,$t&&(Wt[y.p]="-="+J()),Le.set([Qe,ke],Wt)),d&&!(Lh&&C.end>=Wi(I,y)))Wt=mi(d),Sr=y===rn,Ti=J(),_e=parseFloat($(y.a))+xt,!vt&&Xe>1&&(ue=(z?It.scrollingElement||ei:I).style,ue={style:ue,value:ue["overflow"+y.a.toUpperCase()]},z&&mi(yt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ue.style["overflow"+y.a.toUpperCase()]="scroll")),hu(d,U,Wt),v=vl(d),qt=lr(d,!0),q=W&&Gr(I,Sr?Un:rn)(),g?(Pe=[g+y.os2,fe+xt+nn],Pe.t=U,Yt=g===Qt?ec(d,y)+fe+xt:0,Yt&&(Pe.push(y.d,Yt+nn),U.style.flexBasis!=="auto"&&(U.style.flexBasis=Yt+nn)),oo(Pe),$t&&ot.forEach(function(ve){ve.pin===$t&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),W&&J(ne)):(Yt=ec(d,y),Yt&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=Yt+nn)),W&&(Zt={top:qt.top+(Sr?Ti-Re:q)+nn,left:qt.left+(Sr?q:Ti-Re)+nn,boxSizing:"border-box",position:"fixed"},Zt[_s]=Zt["max"+To]=Math.ceil(qt.width)+nn,Zt[xs]=Zt["max"+Pf]=Math.ceil(qt.height)+nn,Zt[pi]=Zt[pi+pa]=Zt[pi+fa]=Zt[pi+ma]=Zt[pi+da]="0",Zt[Qt]=Wt[Qt],Zt[Qt+pa]=Wt[Qt+pa],Zt[Qt+fa]=Wt[Qt+fa],Zt[Qt+ma]=Wt[Qt+ma],Zt[Qt+da]=Wt[Qt+da],R=DE(oe,Zt,M),Ln&&J(0)),i?(Y=i._initted,ou(1),i.render(i.duration(),!0,!0),le=$(y.a)-_e+fe+xt,ce=Math.abs(fe-le)>1,W&&ce&&R.splice(R.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ou(0)):le=fe,ue&&(ue.value?ue.style["overflow"+y.a.toUpperCase()]=ue.value:ue.style.removeProperty("overflow-"+y.a));else if(f&&J()&&!A)for(qt=f.parentNode;qt&&qt!==yt;)qt._pinOffset&&(Re-=qt._pinOffset,Xe-=qt._pinOffset),qt=qt.parentNode;V&&V.forEach(function(ve){return ve.revert(!1,!0)}),C.start=Re,C.end=Xe,He=ct=Ln?ne:J(),!A&&!Ln&&(He<ne&&J(ne),C.scroll.rec=0),C.revert(!1,!0),Ke=Mn(),me&&(Ve=-1,me.restart(!0)),Sn=0,i&&D&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(Nt||Z!==C.progress||A||_||i&&!i._initted)&&(i&&!D&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Re<-.001&&!Z?Le.utils.normalize(Re,Xe,0):Z,!0),C.progress=Nt||(He-Re)/fe===Z?0:Z),d&&g&&(U._pinOffset=Math.round(C.progress*le)),L&&L.invalidate(),isNaN(Te)||(Te-=Le.getProperty(G,y.p),ge-=Le.getProperty(N,y.p),Sl(G,y,Te),Sl(Qe,y,Te-($e||0)),Sl(N,y,ge),Sl(ke,y,ge-($e||0))),Nt&&!Ln&&C.update(),u&&!Ln&&!Se&&(Se=!0,u(C),Se=!1)}},C.getVelocity=function(){return(J()-ct)/(Mn()-jo)*1e3||0},C.endAnimation=function(){Ho(C.callbackAnimation),i&&(L?L.progress(1):i.paused()?D||Ho(i,C.direction<0,1):Ho(i,i.reversed()))},C.labelToScroll=function(xe){return i&&i.labels&&(Re||C.refresh()||Re)+i.labels[xe]/i.duration()*fe||0},C.getTrailing=function(xe){var je=ot.indexOf(C),Fe=C.direction>0?ot.slice(0,je).reverse():ot.slice(je+1);return(Jn(xe)?Fe.filter(function($e){return $e.vars.preventOverlaps===xe}):Fe).filter(function($e){return C.direction>0?$e.end<=Re:$e.start>=Xe})},C.update=function(xe,je,Fe){if(!(A&&!Fe&&!xe)){var $e=Ln===!0?ne:C.scroll(),Bt=xe?0:($e-Re)/fe,nt=Bt<0?0:Bt>1?1:Bt||0,vt=C.progress,Nt,Rt,xt,ft,Gt,St,$t,_n;if(je&&(ct=He,He=A?J():$e,S&&(qe=he,he=i&&!D?i.totalProgress():nt)),m&&d&&!Sn&&!dl&&Mi&&(!nt&&Re<$e+($e-ct)/(Mn()-jo)*m?nt=1e-4:nt===1&&Xe>$e+($e-ct)/(Mn()-jo)*m&&(nt=.9999)),nt!==vt&&C.enabled){if(Nt=C.isActive=!!nt&&nt<1,Rt=!!vt&&vt<1,St=Nt!==Rt,Gt=St||!!nt!=!!vt,C.direction=nt>vt?1:-1,C.progress=nt,Gt&&!Sn&&(xt=nt&&!vt?0:nt===1?1:vt===1?2:3,D&&(ft=!St&&O[xt+1]!=="none"&&O[xt+1]||O[xt],_n=i&&(ft==="complete"||ft==="reset"||ft in i))),x&&(St||_n)&&(_n||h||!i)&&(Tn(x)?x(C):C.getTrailing(x).forEach(function(Ti){return Ti.endAnimation()})),D||(L&&!Sn&&!dl?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",nt,i._tTime/i._tDur):(L.vars.totalProgress=nt,L.invalidate().restart())):i&&i.totalProgress(nt,!!(Sn&&(Ke||xe)))),d){if(xe&&g&&(U.style[g+y.os2]=Ce),!W)X(Zo(_e+le*nt));else if(Gt){if($t=!xe&&nt>vt&&Xe+1>$e&&$e+1>=Wi(I,y),M)if(!xe&&(Nt||$t)){var Yt=lr(d,!0),Wt=$e-Re;Pp(d,yt,Yt.top+(y===rn?Wt:0)+nn,Yt.left+(y===rn?0:Wt)+nn)}else Pp(d,U);oo(Nt||$t?R:v),ce&&nt<1&&Nt||X(_e+(nt===1&&!$t?le:0))}}S&&!de.tween&&!Sn&&!dl&&me.restart(!0),a&&(St||b&&nt&&(nt<1||!au))&&Da(a.targets).forEach(function(Ti){return Ti.classList[Nt||b?"add":"remove"](a.className)}),o&&!D&&!xe&&o(C),Gt&&!Sn?(D&&(_n&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),o&&o(C)),(St||!au)&&(c&&St&&cu(C,c),k[xt]&&cu(C,k[xt]),b&&(nt===1?C.kill(!1,1):k[xt]=0),St||(xt=nt===1?1:3,k[xt]&&cu(C,k[xt]))),P&&!Nt&&Math.abs(C.getVelocity())>(Jo(P)?P:2500)&&(Ho(C.callbackAnimation),L?L.progress(1):Ho(i,ft==="reverse"?1:!nt,1))):D&&o&&!Sn&&o(C)}if(be){var qt=A?$e/A.duration()*(A._caScrollDist||0):$e;se(qt+(G._isFlipped?1:0)),be(qt)}ae&&ae(-$e/A.duration()*(A._caScrollDist||0))}},C.enable=function(xe,je){C.enabled||(C.enabled=!0,hn(I,"resize",Qo),z||hn(I,"scroll",Ws),ie&&hn(r,"refreshInit",ie),xe!==!1&&(C.progress=Z=0,He=ct=Ve=J()),je!==!1&&C.refresh())},C.getTween=function(xe){return xe&&de?de.tween:L},C.setPositions=function(xe,je,Fe,$e){if(A){var Bt=A.scrollTrigger,nt=A.duration(),vt=Bt.end-Bt.start;xe=Bt.start+vt*xe/nt,je=Bt.start+vt*je/nt}C.refresh(!1,!1,{start:Mp(xe,Fe&&!!C._startClamp),end:Mp(je,Fe&&!!C._endClamp)},$e),C.update()},C.adjustPinSpacing=function(xe){if(Pe&&xe){var je=Pe.indexOf(y.d)+1;Pe[je]=parseFloat(Pe[je])+xe+nn,Pe[1]=parseFloat(Pe[1])+xe+nn,oo(Pe)}},C.disable=function(xe,je){if(xe!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,je||L&&L.pause(),ne=0,we&&(we.uncache=1),ie&&un(r,"refreshInit",ie),me&&(me.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!z)){for(var Fe=ot.length;Fe--;)if(ot[Fe].scroller===I&&ot[Fe]!==C)return;un(I,"resize",Qo),z||un(I,"scroll",Ws)}},C.kill=function(xe,je){C.disable(xe,je),L&&!je&&L.kill(),l&&delete Ih[l];var Fe=ot.indexOf(C);Fe>=0&&ot.splice(Fe,1),Fe===Dn&&Fl>0&&Dn--,Fe=0,ot.forEach(function($e){return $e.scroller===C.scroller&&(Fe=1)}),Fe||Ln||(C.scroll.rec=0),i&&(i.scrollTrigger=null,xe&&i.revert({kill:!1}),je||i.kill()),Qe&&[Qe,ke,G,N].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),ga===C&&(ga=0),d&&(we&&(we.uncache=1),Fe=0,ot.forEach(function($e){return $e.pin===d&&Fe++}),Fe||(we.spacer=0)),n.onKill&&n.onKill(C)},ot.push(C),C.enable(!1,!1),Oe&&Oe(C),i&&i.add&&!fe){var tt=C.update;C.update=function(){C.update=tt,lt.cache++,Re||Xe||C.refresh()},Le.delayedCall(.01,C.update),fe=.01,Re=Xe=0}else C.refresh();d&&RE()},r.register=function(n){return qs||(Le=n||Gg(),Hg()&&window.document&&r.enable(),qs=$o),qs},r.defaults=function(n){if(n)for(var i in n)_l[i]=n[i];return _l},r.disable=function(n,i){$o=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),un(at,"wheel",Ws),un(It,"scroll",Ws),clearInterval(fl),un(It,"touchcancel",Oi),un(yt,"touchstart",Oi),ml(un,It,"pointerdown,touchstart,mousedown",yp),ml(un,It,"pointerup,touchend,mouseup",Tp),Ql.kill(),pl(un);for(var s=0;s<lt.length;s+=3)gl(un,lt[s],lt[s+1]),gl(un,lt[s],lt[s+2])},r.enable=function(){if(at=window,It=document,ei=It.documentElement,yt=It.body,Le&&(Da=Le.utils.toArray,ua=Le.utils.clamp,Dh=Le.core.context||Oi,ou=Le.core.suppressOverwrites||Oi,wf=at.history.scrollRestoration||"auto",Nh=at.pageYOffset||0,Le.core.globals("ScrollTrigger",r),yt)){$o=1,so=document.createElement("div"),so.style.height="100vh",so.style.position="absolute",Qg(),ME(),jt.register(Le),r.isTouch=jt.isTouch,Cr=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ph=jt.isTouch===1,hn(at,"wheel",Ws),Ef=[at,It,ei,yt],Le.matchMedia?(r.matchMedia=function(c){var u=Le.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Le.addEventListener("matchMediaInit",function(){Zg(),Lf()}),Le.addEventListener("matchMediaRevert",function(){return $g()}),Le.addEventListener("matchMedia",function(){fs(0,1),Ts("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return uu(),uu})):console.warn("Requires GSAP 3.11.0 or later"),uu(),hn(It,"scroll",Ws);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=lr(yt),rn.m=Math.round(a.top+rn.sc())||0,Un.m=Math.round(a.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),fl=setInterval(wp,250),Le.delayedCall(.5,function(){return dl=0}),hn(It,"touchcancel",Oi),hn(yt,"touchstart",Oi),ml(hn,It,"pointerdown,touchstart,mousedown",yp),ml(hn,It,"pointerup,touchend,mouseup",Tp),Ch=Le.utils.checkPrefix("transform"),Ol.push(Ch),qs=Mn(),Ql=Le.delayedCall(.2,fs).pause(),Ks=[It,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;It.hidden?(xp=c,vp=u):(xp!==c||vp!==u)&&Qo()},It,"DOMContentLoaded",fs,at,"load",fs,at,"resize",Qo],pl(hn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)gl(un,lt[l],lt[l+1]),gl(un,lt[l],lt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(au=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(fl)||(fl=i)&&setInterval(wp,i),"ignoreMobileResize"in n&&(Ph=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pl(un)||pl(hn,n.autoRefreshEvents||"none"),kg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),o=lt.indexOf(s),a=Ms(s);~o&&lt.splice(o,a?6:2),i&&(a?qi.unshift(at,i,yt,i,ei,i):qi.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Jn(n)?zn(n):n).getBoundingClientRect(),a=o[s?_s:xs]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){Jn(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[s?_s:xs],l=i==null?a/2:i in tc?tc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(s){return s()})}},r})();Je.version="3.14.2";Je.saveStyles=function(r){return r?Da(r).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Dh())}}):Zn};Je.revert=function(r,e){return Lf(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?Qo(!0):(qs||Je.register())&&fs(!0)};Je.update=function(r){return++lt.cache&&pr(r===!0?2:0)};Je.clearScrollMemory=Jg;Je.maxScroll=function(r,e){return Wi(r,e?Un:rn)};Je.getScrollFunc=function(r,e){return Gr(zn(r),e?Un:rn)};Je.getById=function(r){return Ih[r]};Je.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Mi};Je.snapDirectional=Df;Je.addEventListener=function(r,e){var t=ys[r]||(ys[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=ys[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Le.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Tn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Tn(s)&&(s=s(),hn(Je,"refresh",function(){return s=e.batchMax()})),Da(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var Lp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},fu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===ei&&r(yt,t)},Ml={auto:1,scroll:1},IE=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ml[(l=mi(s)).overflowY]||Ml[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ms(s)&&(Ml[(l=mi(s)).overflowY]||Ml[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},t_=function(e,t,n,i){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&IE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(It,jt.eventTypes[0],Np,!1,!0)},onDisable:function(){return un(It,jt.eventTypes[0],Np,!0)}})},NE=/(input|label|select|textarea)/i,Ip,Np=function(e){var t=NE.test(e.target.tagName);(t||Ip)&&(e._gsapAllow=!0,Ip=t)},UE=function(e){ss(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=zn(e.target)||ei,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),f=Cr&&(e.content&&zn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Gr(c,rn),g=Gr(c,Un),_=1,m=(jt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,T=Tn(i)?function(){return i(a)}:function(){return i||2.8},b,S,M=t_(c,e.type,!0,s),w=function(){return S=!1},A=Oi,P=Oi,x=function(){l=Wi(c,rn),P=ua(Cr?1:0,l),n&&(A=ua(0,Wi(c,Un))),b=vs},y=function(){f._gsap.y=Zo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(S){requestAnimationFrame(w);var K=Zo(a.deltaY/2),te=P(d.v-K);if(f&&te!==d.v+d.offset){d.offset=te-d.v;var C=Zo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=lt.cache,pr()}return!0}d.offset&&y(),S=!0},I,F,z,W,k=function(){x(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return Cr&&O.type==="touchmove"&&D()||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){S=!1;var O=_;_=Zo((at.visualViewport&&at.visualViewport.scale||1)/m),I.pause(),O!==_&&fu(c,_>1.01?!0:n?!1:"x"),F=g(),z=d(),x(),b=vs},e.onRelease=e.onGestureStart=function(O,K){if(d.offset&&y(),!K)W.restart(!0);else{lt.cache++;var te=T(),C,ie;n&&(C=g(),ie=C+te*.05*-O.velocityX/.227,te*=Lp(g,C,ie,Wi(c,Un)),I.vars.scrollX=A(ie)),C=d(),ie=C+te*.05*-O.velocityY/.227,te*=Lp(d,C,ie,Wi(c,rn)),I.vars.scrollY=P(ie),I.invalidate().duration(te).play(.01),(Cr&&I.vars.scrollY>=l||C>=l-1)&&Le.to({},{onUpdate:k,duration:te})}o&&o(O)},e.onWheel=function(){I._ts&&I.pause(),Mn()-p>1e3&&(b=0,p=Mn())},e.onChange=function(O,K,te,C,ie){if(vs!==b&&x(),K&&n&&g(A(C[2]===K?F+(O.startX-O.x):g()+K-C[1])),te){d.offset&&y();var Ee=ie[2]===te,Ie=Ee?z+O.startY-O.y:d()+te-ie[1],Ve=P(Ie);Ee&&Ie!==Ve&&(z+=Ve-Ie),d(Ve)}(te||K)&&pr()},e.onEnable=function(){fu(c,n?!1:"x"),Je.addEventListener("refresh",k),hn(at,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){fu(c,!0),un(at,"resize",k),Je.removeEventListener("refresh",k),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=Cr,Cr&&!d()&&d(1),Cr&&Le.ticker.add(Oi),W=a._dc,I=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:e_(d,d(),function(){return I.pause()})},onUpdate:pr,onComplete:W.vars.onComplete}),a};Je.sort=function(r){if(Tn(r))return ot.sort(r);var e=at.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new jt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof jt?r:UE(r);return Pn&&Pn.target===e.target&&Pn.kill(),Ms(e.target)&&(Pn=e),e};Je.core={_getVelocityProp:Rh,_inputObserver:t_,_scrollers:lt,_proxies:qi,bridge:{ss:function(){Mi||Ts("scrollStart"),Mi=Mn()},ref:function(){return Sn}}};Gg()&&Le.registerPlugin(Je);let Go,Xs,Up=typeof Symbol=="function"?Symbol():"_split",Fh,FE=()=>Fh||ea.register(window.gsap),Fp=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ia=r=>typeof r=="string"?Ia(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...Ia(t)):e.push(t),e),[]):[r],Op=r=>Ia(r).filter(e=>e instanceof HTMLElement),Oh=[],du=function(){},OE={add:r=>r()},BE=/\s+/g,Bp=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),nc={left:0,top:0,width:0,height:0},kE=(r,e)=>{for(;++e<r.length&&r[e]===nc;);return r[e]||nc},kp=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},zp=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Oh),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Vp=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Ys=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Bh=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return l&&(n=n.replace("++","")),c.collection=t,c},zE=(r,e,t,n)=>{let i=Bh("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},n_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=e,m=r.getBoundingClientRect(),p=m,T=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",b=0,S=t.collection,M,w,A,P,x,y,D,I,F,z,W,k,O,K,te,C,ie,Ee;for(typeof d=="object"?(A=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",M=w!==" ";f<h.length;f++)if(P=h[f],P.nodeType===3){for(te=P.textContent||"",g?te=te.replace(BE," "):T&&(te=te.replace(/\n/g,w+`
`)),_&&(te=_(te,r)),P.textContent=te,x=w||A?te.split(A||w):te.match(a)||Oh,ie=x[x.length-1],I=M?ie.slice(-1)===" ":!ie,ie||x.pop(),p=m,D=M?x[0].charAt(0)===" ":!x[0],D&&Ys(" ",r,P),x[0]||x.shift(),zp(x,l),s&&c||(P.textContent=""),F=1;F<=x.length;F++)if(C=x[F-1],!g&&T&&C.charAt(0)===`
`&&((u=P.previousSibling)==null||u.remove(),Ys(document.createElement("br"),r,P),C=C.slice(1)),!g&&C==="")Ys(w,r,P);else if(C===" ")r.insertBefore(document.createTextNode(" "),P);else{if(M&&C.charAt(0)===" "&&Ys(" ",r,P),b&&F===1&&!D&&S.indexOf(b.parentNode)>-1?(y=S[S.length-1],y.appendChild(document.createTextNode(n?"":C))):(y=t(n?"":C),Ys(y,r,P),b&&F===1&&!D&&y.insertBefore(b,y.firstChild)),n)for(W=Fp?zp([...Fp.segment(C)].map(Ie=>Ie.segment),l):C.match(a)||Oh,Ee=0;Ee<W.length;Ee++)y.appendChild(W[Ee]===" "?document.createTextNode(" "):n(W[Ee]));if(s&&c){if(te=P.textContent=te.substring(C.length+1,te.length),z=y.getBoundingClientRect(),z.top>p.top&&z.left<=p.left){for(k=r.cloneNode(),O=r.childNodes[0];O&&O!==y;)K=O,O=O.nextSibling,k.appendChild(K);r.parentNode.insertBefore(k,r),i&&Vp(k)}p=z}(F<x.length||I)&&Ys(F>=x.length?" ":M&&C.slice(-1)===" "?" "+w:w,r,P)}r.removeChild(P),b=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),b=P):(n_(P,e,t,n,i,s,o,a,l,!0),b=0),i&&Vp(P))};const i_=class r_{constructor(e,t){this.isSplit=!1,FE(),this.elements=Op(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Up])==null||a._data.orig.filter(({element:l})=>l===o).forEach(kp)),o[Up]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},du(this),this.split(t)}split(e){return(this._ctx||OE).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+Bp.source,"gu"):Bp,m=!!e.ignore&&Op(e.ignore),{orig:p,animTime:T,obs:b}=this._data,S;(h||f||u)&&(this.elements.forEach((M,w)=>{p[w]={element:M,html:M.innerHTML,ariaL:M.getAttribute("aria-label"),ariaH:M.getAttribute("aria-hidden")},n==="auto"?M.setAttribute("aria-label",(M.textContent||"").trim()):n==="hidden"&&M.setAttribute("aria-hidden","true");let A=[],P=[],x=[],y=h?Bh("char",e,A):null,D=Bh("word",e,P),I,F,z,W;if(n_(M,e,D,y,d,i&&(u||d),m,_,g,!1),u){let k=Ia(M.childNodes),O=zE(M,k,e,x),K,te=[],C=0,ie=k.map(Ve=>Ve.nodeType===1?Ve.getBoundingClientRect():nc),Ee=nc,Ie;for(I=0;I<k.length;I++)K=k[I],K.nodeType===1&&(K.nodeName==="BR"?((!I||k[I-1].nodeName!=="BR")&&(te.push(K),O(C,I+1)),C=I+1,Ee=kE(ie,I)):(Ie=ie[I],I&&Ie.top>Ee.top&&Ie.left<Ee.left+Ee.width-1&&(O(C,I),C=I),Ee=Ie));C<I&&O(C,I),te.forEach(Ve=>{var Ke;return(Ke=Ve.parentNode)==null?void 0:Ke.removeChild(Ve)})}if(!f){for(I=0;I<P.length;I++)if(F=P[I],h||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!u){for(z=document.createElement("span"),z.style.whiteSpace="nowrap";F.firstChild;)z.appendChild(F.firstChild);F.replaceWith(z)}else F.replaceWith(...F.childNodes);else W=F.nextSibling,W&&W.nodeType===3&&(W.textContent=(F.textContent||"")+(W.textContent||""),F.remove());P.length=0,M.normalize()}this.lines.push(...x),this.words.push(...P),this.chars.push(...A)}),c&&this[c]&&this.masks.push(...this[c].map(M=>{let w=M.cloneNode();return M.replaceWith(w),w.appendChild(M),M.className&&(w.className=M.className.trim()+"-mask"),w.style.overflow="clip",w}))),this.isSplit=!0,Xs&&u&&(a?Xs.addEventListener("loadingdone",this._split):Xs.status==="loading"&&console.warn("SplitText called before fonts loaded")),(S=o&&o(this))&&S.totalTime&&(this._data.anim=T?S.totalTime(T):S),u&&a&&this.elements.forEach((M,w)=>{p[w].width=M.offsetWidth,b&&b.observe(M)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Xs?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(kp),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new r_(e,t)}static register(e){Go=Go||e||window.gsap,Go&&(Ia=Go.utils.toArray,du=Go.core.context||du),!Fh&&window.innerWidth>0&&(Xs=document.fonts,Fh=!0)}};i_.version="3.14.2";let ea=i_;var VE="1.3.17";function s_(r,e,t){return Math.max(r,Math.min(e,t))}function HE(r,e,t){return(1-t)*r+t*e}function GE(r,e,t,n){return HE(r,e,1-Math.exp(-t*n))}function WE(r,e){return(r%e+e)%e}var XE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=s_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=GE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function YE(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var qE=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=YE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},o_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Hp=100/6,Rr={passive:!1},KE=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Rr),this.element.addEventListener("touchstart",this.onTouchStart,Rr),this.element.addEventListener("touchmove",this.onTouchMove,Rr),this.element.addEventListener("touchend",this.onTouchEnd,Rr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new o_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Rr),this.element.removeEventListener("touchstart",this.onTouchStart,Rr),this.element.removeEventListener("touchmove",this.onTouchMove,Rr),this.element.removeEventListener("touchend",this.onTouchEnd,Rr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Hp:n===2?this.window.width:1,s=n===1?Hp:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Gp=r=>Math.min(1,1.001-Math.pow(2,-10*r)),jE=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new XE;emitter=new o_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:T=!0,autoRaf:b=!1,anchors:S=!1,autoToggle:M=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:P=A,stopInertiaOnNavigate:x=!1}={}){window.lenisVersion=VE,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Gp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:T,autoRaf:b,anchors:S,autoToggle:M,allowNestedScroll:w,naiveDimensions:P,stopInertiaOnNavigate:x},this.dimensions=new qE(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new KE(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=s_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=Gp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const M=window.getComputedStyle(r);i.computedStyle=M;const w=M.overflowX,A=M.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(A),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const M=e!==0,w=t!==0;M&&s&&a&&(g="x"),w&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,T,b;if(g==="x")_=r.scrollLeft,m=c-h,p=e,T=s,b=a;else if(g==="y")_=r.scrollTop,m=u-f,p=t,T=o,b=l;else return!1;return(p>0?_<m:_>0)&&T&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?WE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};document.addEventListener("DOMContentLoaded",()=>{tn.registerPlugin(Je,ea);const r=new jE;r.on("scroll",Je.update),tn.ticker.add(Q=>r.raf(Q*1e3)),tn.ticker.lagSmoothing(0);const e=document.querySelector(".nav"),t=document.querySelector(".nav-menu"),n=document.querySelector(".nav-toggle"),i=document.querySelector(".nav-subtoggle"),s=document.querySelector("#projects-submenu"),o=document.querySelectorAll(".nav-menu .nav-link, .nav-menu .nav-sublink");let a=!1,l=!1,c=window.scrollY;const u=Q=>{!i||!s||(i.setAttribute("aria-expanded",String(Q)),s.setAttribute("aria-hidden",String(!Q)),s.classList.toggle("is-open",Q))},h=Q=>{e&&(l=Q,e.classList.toggle("nav-hidden",Q))},f=tn.timeline({paused:!0});f.to(t,{opacity:1,y:"0%",duration:.4,ease:"power3.out"}),f.addLabel("linksStart","-=0.15"),f.to(o,{opacity:1,y:0,duration:.5,stagger:.05,ease:"power3.out"},"linksStart"),i&&f.to(i,{opacity:1,y:0,duration:.35,ease:"power3.out"},"linksStart+=0.375");const d=Q=>{if(a=Q,document.body.classList.toggle("nav-open",a),n.setAttribute("aria-expanded",String(a)),t.setAttribute("aria-hidden",String(!a)),a&&h(!1),!a){u(!1),f.reverse();return}f.play(0)},g=()=>{a&&d(!1)},_=Q=>{if(!e)return;if(a){h(!1),c=Q;return}const Se=Q-c;if(Q<=40){h(!1),c=Q;return}Se>10&&!l?h(!0):Se<-6&&l&&h(!1),c=Q};typeof r?.on=="function"&&r.on("scroll",({scroll:Q})=>{_(Q)}),window.addEventListener("scroll",()=>{_(window.scrollY)},{passive:!0}),_(window.scrollY);const m=(Q,Se=1.2)=>{if(typeof r?.scrollTo=="function"){r.scrollTo(Q,{duration:Se,easing:fe=>1-Math.pow(1-fe,3)});return}window.scrollTo({top:Q,behavior:"smooth"})},p=(Q,Se=1.2)=>{if(!Q)return;const fe=Q.getBoundingClientRect().top+window.scrollY;m(fe,Se)};n&&n.addEventListener("click",()=>{d(!a)}),i&&i.addEventListener("click",Q=>{Q.preventDefault(),Q.stopPropagation();const Se=i.getAttribute("aria-expanded")==="true";u(!Se)}),o.forEach(Q=>{Q.addEventListener("click",()=>{g()})}),document.querySelectorAll('a[href="#projects-anchor"]').forEach(Q=>{Q.addEventListener("click",Se=>{Se.preventDefault();const fe=Je.getById("projects-pin");if(!fe){p(document.querySelector("#projects-anchor")),g();return}const R=fe.start+(fe.end-fe.start)*.082;m(R),g()})}),document.querySelectorAll('a[href="#about-anchor"]').forEach(Q=>{Q.addEventListener("click",Se=>{Se.preventDefault();const fe=Je.getById("projects-pin");if(!fe){p(document.querySelector("#about-anchor")),g();return}const $=.132*.1+.35+.02+.1+.02,X=fe.start+(fe.end-fe.start)*$;m(X),g()})}),document.querySelectorAll('a[href="#gallery-section"]').forEach(Q=>{Q.addEventListener("click",Se=>{Se.preventDefault();const fe=document.querySelector("#gallery-section");if(!fe)return;const oe=Je.getById("gallery-pin"),R=oe?oe.start:fe.getBoundingClientRect().top+window.scrollY,v=1.2;m(R,v),window.galleryPinned=!0,window.setTimeout(()=>{Je.update()},v*1e3+100),g()})});const M=(Q,Se={})=>{const{total:fe=.7,charDuration:oe=.12,ease:R="power3.out",splitType:v}=Se,U=v??"words",j=new ea(Q,{type:U,charsClass:"char",wordsClass:"char"}),$=U==="words"?j.words:j.chars;$.forEach(Ce=>{Ce.innerHTML=`<span>${Ce.innerHTML}</span>`});const X=$.length||1,_e=X>1?Math.max(0,(fe-oe)/(X-1)):0,le=tn.timeline({paused:!0});return tn.set(`${Q} .char > span`,{y:"100%"}),le.to(`${Q} .char > span`,{y:"0%",duration:oe,ease:R,stagger:_e}),{split:j,tl:le}};let w=null,A=null,P=null,x=null,y=null,D=null,I=null,F=[];(()=>{F.forEach(({split:Se,tl:fe})=>{fe&&fe.kill(),Se&&typeof Se.revert=="function"&&Se.revert()}),F=[];let Q=M(".header-1 h1",{total:.7,charDuration:.12});w=Q.tl,F.push(Q),Q=M('.horizontal-grid-row-2[data-position="4"] h2',{total:.5,charDuration:.12}),A=Q.tl,F.push(Q),Q=M('.horizontal-grid-row[data-position="5"] h2',{total:.5,charDuration:.12}),P=Q.tl,F.push(Q),Q=M('.horizontal-grid-row[data-position="7"] h1',{total:.5,charDuration:.12}),x=Q.tl,F.push(Q),Q=M('.horizontal-grid-row-2[data-position="9"] h1',{total:.5,charDuration:.12}),y=Q.tl,F.push(Q),Q=M('.horizontal-grid-row[data-position="10"] h2',{total:.5,charDuration:.12}),D=Q.tl,F.push(Q),Q=M('.horizontal-grid-row-2[data-position="10"] h2',{total:.5,charDuration:.12}),I=Q.tl,F.push(Q),Je.refresh()})();const W=new ea(".tooltip .title h2",{type:"lines",linesClass:"line"}),k=new ea(".tooltip .description p",{type:"lines",linesClass:"line"}),O=document.querySelector(".rectangular-mask");if(O){const Q=(Se,fe)=>{const oe=O.getBoundingClientRect(),R=(Se-oe.left)/oe.width*100,v=(fe-oe.top)/oe.height*100,U=Math.max(0,Math.min(100,R)),j=Math.max(0,Math.min(100,v));O.style.setProperty("--mx",`${U}%`),O.style.setProperty("--my",`${j}%`)};O.addEventListener("pointermove",Se=>{Q(Se.clientX,Se.clientY)}),O.addEventListener("pointerleave",()=>{O.style.setProperty("--mx","50%"),O.style.setProperty("--my","50%")})}[...W.lines,...k.lines].forEach(Q=>{Q.innerHTML=`<span>${Q.innerHTML}</span>`});const K=[{trigger:.02,elements:[".tooltip:nth-of-type(1) .icon ion-icon",".tooltip:nth-of-type(1) .title .line > span",".tooltip:nth-of-type(1) .description .line > span"]},{trigger:.07,elements:[".tooltip:nth-of-type(2) .icon ion-icon",".tooltip:nth-of-type(2) .title .line > span",".tooltip:nth-of-type(2) .description .line > span"]}],te=K.reduce((Q,{trigger:Se})=>Math.max(Q,Se??0),0);let C=null,ie=null,Ee=0,Ie=0;const Ve=new H(0,1,0),Ke=new fx,Z=8,J=new R0,de=new In(60,window.innerWidth/window.innerHeight,.1,1e3),we=new _T({antialias:!0,alpha:!0});we.setClearColor(0,0),we.setSize(window.innerWidth,window.innerHeight),we.setPixelRatio(Math.min(window.devicePixelRatio,2)),we.shadowMap.enabled=!0,we.shadowMap.type=Wp,"outputColorSpace"in we&&(we.outputColorSpace=fn),we.toneMapping=Pi,we.toneMappingExposure=1;const Ae=document.querySelector(".model-container");if(!Ae){console.warn('Missing ".model-container" in HTML. Canvas not attached.');return}Ae.appendChild(we.domElement),J.add(new cx(16777215,.7));const He=new ah(16777215,1);He.position.set(1,2,3),He.castShadow=!0,He.shadow.bias=-.001,He.shadow.mapSize.width=1024,He.shadow.mapSize.height=1024,J.add(He);const ct=new ah(16777215,.5);ct.position.set(-2,0,-2),J.add(ct);function Re(){if(!C||!ie)return;const Q=window.innerWidth<1e3;C.rotation.set(0,0,0),C.rotation.z=Q?0:Rl.degToRad(25);const Se=new Si().setFromObject(C),fe=Se.getCenter(new H),oe=Se.getSize(new H);C.position.sub(fe),C.position.y+=oe.y*.2,Ee=0,Ie!==0&&(C.rotateOnAxis(Ve,Ie),Ee=Ie);const R=Q?1.35:1.15,U=new Si().setFromObject(C).getSize(new H),j=Rl.degToRad(de.fov),$=U.y*R/(2*Math.tan(j/2)),X=U.x*R/(2*Math.tan(j/2)*de.aspect),_e=Math.max($,X)+U.z*.5;de.position.set(0,0,_e),de.lookAt(0,0,0)}new xT().load("/models/laptop.glb",Q=>{C=Q.scene,C.traverse(fe=>{if(fe.isMesh){fe.castShadow=!0,fe.receiveShadow=!0;const oe=fe.material;oe&&typeof oe=="object"&&("roughness"in oe&&(oe.roughness=.05),"metalness"in oe&&(oe.metalness=.9),oe.needsUpdate=!0)}}),ie=new Si().setFromObject(C).getSize(new H),J.add(C),Re()},void 0,Q=>console.error("GLB load failed ❌",Q));function Qe(){requestAnimationFrame(Qe);const Q=Math.min(.05,Ke.getDelta());if(C){const Se=Rl.damp(Ee,Ie,Z,Q),fe=Se-Ee;Math.abs(fe)>1e-6&&(C.rotateOnAxis(Ve,fe),Ee=Se)}we.render(J,de)}Qe();let ke=null;window.addEventListener("resize",()=>{ke&&window.clearTimeout(ke),ke=window.setTimeout(()=>{de.aspect=window.innerWidth/window.innerHeight,de.updateProjectionMatrix(),we.setSize(window.innerWidth,window.innerHeight),we.setPixelRatio(Math.min(window.devicePixelRatio,2)),Re(),typeof r?.resize=="function"&&r.resize(),Je.refresh()},150)});const G=document.querySelector(".header-1"),N=document.querySelector(".header-2");Je.create({trigger:".projects",start:"top top",end:()=>`+=${window.innerHeight*10}`,pin:!0,pinSpacing:!0,scrub:1,id:"projects-pin",onUpdate:({progress:Q})=>{const fe=Math.max(0,Math.min(1,Q/.132)),oe=O?.getBoundingClientRect?.(),R=oe?.width??0,v=oe?.height??0,U=fe,j=R&&v?R/v:1,$=U,X=U;let _e=U;j>1&&(_e=(1-1/j*(1-2*$))/2);const Pe=Math.max(0,Math.min(1,(U-.2)/.25)),se=X+(_e-X)*Pe,ce=Math.max(0,Math.min(.5,se)),be=Math.max(0,Math.min(.5,$)),De=R*(1-2*ce),he=v*(1-2*be),qe=0,pe=Math.max(0,Math.min(1,(U-qe)/(1-qe)))*3,re=Math.max(0,Math.min(De,he)/2)*pe;tn.set(".rectangular-mask",{clipPath:`inset(${be*100}% ${ce*100}% ${be*100}% ${ce*100}% round ${re}px)`});const me=Math.min(1,fe*.9);tn.set(".model-container",{scale:me}),tn.set(".rect-intro",{scale:1-Math.min(1,fe*1.4)});const ne=.132*.1,ee=.35,ae=10,Oe=Math.max(0,Math.min(1,(Q-ne)/ee)),mt=.05,ye=.25,Ne=.35;w.progress(Math.min(1,(Oe-mt)*ae)),A.progress(Math.min(1,(Oe-ye)*ae)),P.progress(Math.min(1,(Oe-Ne)*ae));const xe=-(G?G.scrollWidth||G.getBoundingClientRect().width:window.innerWidth),je=Q<ne?0:Q>ne+ee?xe:tn.utils.interpolate(0,xe,Oe);G&&tn.set(G,{x:je,xPercent:0});const Fe=ne,$e=ee*1.6,Bt=Math.max(0,Math.min(1,(Q-Fe)/$e));tn.set("#header-1 .background-h1",{xPercent:Q<Fe?0:Q>Fe+$e?-10:-10*Bt});const nt=ne+ee+.02,vt=.1,Nt=Math.max(0,Math.min(1,(Q-nt)/vt)),Rt=Nt*100;if(tn.set(".circular-mask",{clipPath:`circle(${Rt}% at 50% 50%)`}),n){const Be=Nt*Nt*(3-2*Nt);tn.set(n,{backgroundPosition:`${Be*100}% 50%`})}const xt=nt+vt+.02,ft=.25,Gt=Math.max(0,Math.min(1,(Q-xt)/ft)),St=.18,$t=1-St;let _n=Gt;if(Gt>$t){const Be=(Gt-$t)/St,gt=-Be*Be*Be+Be*Be+Be;_n=$t+gt*St}const Yt=N?N.scrollWidth||N.getBoundingClientRect().width:window.innerWidth,Wt=window.innerWidth,qt=-Yt,Ti=Q<xt?Wt:Q>xt+ft?qt:tn.utils.interpolate(Wt,qt,_n),Sr=.15,Zt=.4,E=.55;if(x.progress(Math.min(1,(Gt-Sr)*ae)),y.progress(Math.min(1,(Gt-Zt)*ae)),D.progress(Math.min(1,(Gt-E)*ae)),I.progress(Math.min(1,(Gt-E)*ae)),N){const Be=Q>=xt;tn.set(N,{x:Ti,xPercent:0,autoAlpha:Be?1:0})}const B=xt+ft-.05,q=Math.max(0,Math.min(1,(Q-B)/.2)),Y=q*q*(3-2*q);tn.set(".tooltip .divider",{scaleX:Y});const V=.07;K.forEach(({trigger:Be,elements:gt})=>{const Ft=B+Be,Dt=Math.max(0,Math.min(1,(Q-Ft)/V)),We=`${(1-Dt*Dt*(3-2*Dt))*125}%`;tn.set(gt,{y:We})});const ue=.05,Te=B+te+.03,ge=Math.max(1e-4,Te-ue),ve=Math.max(0,Math.min(1,(Q-ue)/ge)),Ue=.25,Ye=1-Ue;let Ge=ve;if(ve>Ye){const Be=(ve-Ye)/Ue,gt=-Be*Be*Be+Be*Be+Be;Ge=Ye+gt*Ue}Ie=Math.PI*3*4*Ge}}),Je.create({trigger:".gallery-section",start:"top top",end:()=>`+=${window.innerHeight*1.5}`,pin:!0,pinSpacing:!0,id:"gallery-pin",onEnter:()=>{window.galleryPinned=!0},onLeave:()=>{window.galleryPinned=!1},onEnterBack:()=>{window.galleryPinned=!0},onLeaveBack:()=>{window.galleryPinned=!1}})});export{jE as L,Je as S,tn as g};

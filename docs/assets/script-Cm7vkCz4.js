(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Yh="182",y_=0,Vf=1,T_=2,Cl=1,Mu=2,jo=3,xr=0,Yn=1,Vi=2,mr=0,no=1,Hf=2,Gf=3,Wf=4,b_=5,us=100,E_=101,w_=102,A_=103,R_=104,C_=200,P_=201,L_=202,D_=203,yu=204,Tu=205,I_=206,N_=207,U_=208,F_=209,O_=210,B_=211,k_=212,z_=213,V_=214,bu=0,Eu=1,wu=2,ho=3,Au=4,Ru=5,Cu=6,Pu=7,nm=0,H_=1,G_=2,Ti=0,im=1,rm=2,sm=3,om=4,am=5,lm=6,cm=7,Xf="attached",W_="detached",um=300,bs=301,fo=302,Lu=303,Du=304,cc=306,po=1e3,Gi=1001,Xl=1002,on=1003,hm=1004,$o=1005,an=1006,Pl=1007,fr=1008,ri=1009,fm=1010,dm=1011,Ta=1012,qh=1013,$i=1014,vi=1015,vr=1016,Kh=1017,jh=1018,ba=1020,pm=35902,mm=35899,gm=1021,_m=1022,Si=1023,Sr=1026,fs=1027,$h=1028,Zh=1029,mo=1030,Jh=1031,Qh=1033,Ll=33776,Dl=33777,Il=33778,Nl=33779,Iu=35840,Nu=35841,Uu=35842,Fu=35843,Ou=36196,Bu=37492,ku=37496,zu=37488,Vu=37489,Hu=37490,Gu=37491,Wu=37808,Xu=37809,Yu=37810,qu=37811,Ku=37812,ju=37813,$u=37814,Zu=37815,Ju=37816,Qu=37817,eh=37818,th=37819,nh=37820,ih=37821,rh=36492,sh=36494,oh=36495,ah=36283,lh=36284,ch=36285,uh=36286,Ea=2300,wa=2301,yc=2302,Yf=2400,qf=2401,Kf=2402,X_=2500,Y_=0,xm=1,hh=2,q_=3200,vm=0,K_=1,Ur="",sn="srgb",Gn="srgb-linear",Yl="linear",Et="srgb",Ps=7680,jf=519,j_=512,$_=513,Z_=514,ef=515,J_=516,Q_=517,tf=518,e0=519,fh=35044,$f="300 es",Wi=2e3,ql=2001;function Sm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function t0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function n0(){const r=Aa("canvas");return r.style.display="block",r}const Zf={};function Kl(...r){const e="THREE."+r.shift();console.log(e,...r)}function Be(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ke(...r){const e="THREE."+r.shift();console.error(e,...r)}function Ra(...r){const e=r.join(" ");e in Zf||(Zf[e]=!0,Be(...r))}function i0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jf=1234567;const aa=Math.PI/180,go=180/Math.PI;function Di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function nf(r,e){return(r%e+e)%e}function r0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function s0(r,e,t){return r!==e?(t-r)/(e-r):0}function la(r,e,t){return(1-t)*r+t*e}function o0(r,e,t,n){return la(r,e,1-Math.exp(-t*n))}function a0(r,e=1){return e-Math.abs(nf(r,e*2)-e)}function l0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function c0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function u0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function h0(r,e){return r+Math.random()*(e-r)}function f0(r){return r*(.5-Math.random())}function d0(r){r!==void 0&&(Jf=r);let e=Jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p0(r){return r*aa}function m0(r){return r*go}function g0(r){return(r&r-1)===0&&r!==0}function _0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function x0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function v0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ir={DEG2RAD:aa,RAD2DEG:go,generateUUID:Di,clamp:ft,euclideanModulo:nf,mapLinear:r0,inverseLerp:s0,lerp:la,damp:o0,pingpong:a0,smoothstep:l0,smootherstep:c0,randInt:u0,randFloat:h0,randFloatSpread:f0,seededRandom:d0,degToRad:p0,radToDeg:m0,isPowerOfTwo:g0,ceilPowerOfTwo:_0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:v0,normalize:wt,denormalize:Pi};class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new V,Qf=new jr;class tt{constructor(e,t,n,i,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],b=i[4],S=i[7],M=i[2],w=i[5],A=i[8];return s[0]=o*_+a*y+l*M,s[3]=o*m+a*b+l*w,s[6]=o*p+a*S+l*A,s[1]=c*_+u*y+h*M,s[4]=c*m+u*b+h*w,s[7]=c*p+u*S+h*A,s[2]=f*_+d*y+g*M,s[5]=f*m+d*b+g*w,s[8]=f*p+d*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new tt,ed=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){const r={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(i.r=io(i.r),i.g=io(i.g),i.b=io(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ur?Yl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Gn]:{primaries:e,whitePoint:n,transfer:Yl,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),r}const mt=S0();function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ls;class M0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Aa("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=gr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gr(t[n]/255)*255):t[n]=gr(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y0=0;class rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ec(i[o].image)):s.push(Ec(i[o]))}else s=Ec(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ec(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?M0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let T0=0;const wc=new V;class pn extends Ro{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=Gi,i=Gi,s=an,o=fr,a=Si,l=ri,c=pn.DEFAULT_ANISOTROPY,u=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Di(),this.name="",this.source=new rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==um)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=um;pn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(d+1)/2,M=(p+1)/2,w=(u+f)/4,A=(h+_)/4,P=(g+m)/4;return b>S&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=A/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=P/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=P/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b0 extends Ro{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new pn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new rf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends b0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mm extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E0 extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(s,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),Xa.subVectors(this.max,Uo),Ds.subVectors(e.a,Uo),Is.subVectors(e.b,Uo),Ns.subVectors(e.c,Uo),Er.subVectors(Is,Ds),wr.subVectors(Ns,Is),Zr.subVectors(Ds,Ns);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-Zr.z,Zr.y,Er.z,0,-Er.x,wr.z,0,-wr.x,Zr.z,0,-Zr.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-Zr.y,Zr.x,0];return!Ac(t,Ds,Is,Ns,Xa)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Ds,Is,Ns,Xa))?!1:(Ya.crossVectors(Er,wr),t=[Ya.x,Ya.y,Ya.z],Ac(t,Ds,Is,Ns,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new V,new V,new V,new V,new V,new V,new V,new V],wi=new V,Wa=new kn,Ds=new V,Is=new V,Ns=new V,Er=new V,wr=new V,Zr=new V,Uo=new V,Xa=new V,Ya=new V,Jr=new V;function Ac(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Jr.fromArray(r,s);const a=i.x*Math.abs(Jr.x)+i.y*Math.abs(Jr.y)+i.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),u=n.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const w0=new kn,Fo=new V,Rc=new V;class er{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Rc)),this.expandByPoint(Fo.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const rr=new V,Cc=new V,qa=new V,Ar=new V,Pc=new V,Ka=new V,Lc=new V;class uc{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Cc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=Ar.dot(this.direction),l=-Ar.dot(qa),c=Ar.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Cc).addScaledVector(qa,f),d}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const n=rr.dot(this.direction),i=rr.dot(rr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,n,i,s){Pc.subVectors(t,e),Ka.subVectors(n,e),Lc.crossVectors(Pc,Ka);let o=this.direction.dot(Lc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(Ar,Ka));if(l<0)return null;const c=a*this.direction.dot(Pc.cross(Ar));if(c<0||l+c>o)return null;const u=-a*Ar.dot(Lc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A0,e,R0)}lookAt(e,t,n){const i=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Rr.crossVectors(n,Jn),Rr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Rr.crossVectors(n,Jn)),Rr.normalize(),ja.crossVectors(Jn,Rr),i[0]=Rr.x,i[4]=ja.x,i[8]=Jn.x,i[1]=Rr.y,i[5]=ja.y,i[9]=Jn.y,i[2]=Rr.z,i[6]=ja.z,i[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],b=n[7],S=n[11],M=n[15],w=i[0],A=i[4],P=i[8],x=i[12],T=i[1],D=i[5],I=i[9],F=i[13],H=i[2],X=i[6],z=i[10],O=i[14],K=i[3],re=i[7],C=i[11],se=i[15];return s[0]=o*w+a*T+l*H+c*K,s[4]=o*A+a*D+l*X+c*re,s[8]=o*P+a*I+l*z+c*C,s[12]=o*x+a*F+l*O+c*se,s[1]=u*w+h*T+f*H+d*K,s[5]=u*A+h*D+f*X+d*re,s[9]=u*P+h*I+f*z+d*C,s[13]=u*x+h*F+f*O+d*se,s[2]=g*w+_*T+m*H+p*K,s[6]=g*A+_*D+m*X+p*re,s[10]=g*P+_*I+m*z+p*C,s[14]=g*x+_*F+m*O+p*se,s[3]=y*w+b*T+S*H+M*K,s[7]=y*A+b*D+S*X+M*re,s[11]=y*P+b*I+S*z+M*C,s[15]=y*x+b*F+S*O+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*d-c*f,b=a*d-c*h,S=a*f-l*h,M=o*d-c*u,w=o*f-l*u,A=o*h-a*u;return t*(_*y-m*b+p*S)-n*(g*y-m*M+p*w)+i*(g*b-_*M+p*A)-s*(g*S-_*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,b=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,M=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=t*y+n*b+i*S+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=b*A,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*A,e[8]=S*A,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=M*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,y=l*c,b=l*u,S=l*h,M=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+S)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(d-S)*w,i[5]=(1-(f+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+b)*A,i[9]=(m-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Us.set(i[0],i[1],i[2]).length();const o=Us.set(i[4],i[5],i[6]).length(),a=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Ai.copy(this);const c=1/s,u=1/o,h=1/a;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=h,Ai.elements[9]*=h,Ai.elements[10]*=h,t.setFromRotationMatrix(Ai),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Wi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Wi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ql)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Wi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Wi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ql)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Us=new V,Ai=new rt,A0=new V(0,0,0),R0=new V(1,1,1),Rr=new V,ja=new V,Jn=new V,nd=new rt,id=new jr;class Zi{constructor(e=0,t=0,n=0,i=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C0=0;const rd=new V,Fs=new jr,sr=new rt,$a=new V,Oo=new V,P0=new V,L0=new jr,sd=new V(1,0,0),od=new V(0,1,0),ad=new V(0,0,1),ld={type:"added"},D0={type:"removed"},Os={type:"childadded",child:null},Dc={type:"childremoved",child:null};class Ht extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new V,t=new Zi,n=new jr,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new tt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Oo,$a,this.up):sr.lookAt($a,Oo,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(sr),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),Os.child=e,this.dispatchEvent(Os),Os.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,P0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new V(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new V,or=new V,Ic=new V,ar=new V,Bs=new V,ks=new V,cd=new V,Nc=new V,Uc=new V,Fc=new V,Oc=new Nt,Bc=new Nt,kc=new Nt;class Li{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ri.subVectors(i,t),or.subVectors(n,t),Ic.subVectors(e,t);const o=Ri.dot(Ri),a=Ri.dot(or),l=Ri.dot(Ic),c=or.dot(or),u=or.dot(Ic),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(o,ar.y),l.addScaledVector(a,ar.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Oc.setScalar(0),Bc.setScalar(0),kc.setScalar(0),Oc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Oc,s.x),o.addScaledVector(Bc,s.y),o.addScaledVector(kc,s.z),o}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),or.subVectors(e,t),Ri.cross(or).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ri.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Bs.subVectors(i,n),ks.subVectors(s,n),Nc.subVectors(e,n);const l=Bs.dot(Nc),c=ks.dot(Nc);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,i);const u=Bs.dot(Uc),h=ks.dot(Uc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Bs,o);Fc.subVectors(e,s);const d=Bs.dot(Fc),g=ks.dot(Fc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ks,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return cd.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(cd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Bs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function zc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=nf(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zc(o,s,e+1/3),this.g=zc(o,s,e),this.b=zc(o,s,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return mt.workingToColorSpace(bn.copy(this),e),Math.round(ft(bn.r*255,0,255))*65536+Math.round(ft(bn.g*255,0,255))*256+Math.round(ft(bn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(bn.copy(this),t);const n=bn.r,i=bn.g,s=bn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=sn){mt.workingToColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,i=bn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Za);const n=la(Cr.h,Za.h,t),i=la(Cr.s,Za.s,t),s=la(Cr.l,Za.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Je;Je.NAMES=Tm;let I0=0;class Ki extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=no,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=Tu,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yu&&(n.blendSrc=this.blendSrc),this.blendDst!==Tu&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ds extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new V,Ja=new _t;let N0=0;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class bm extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Em extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ii extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let U0=0;const pi=new rt,Vc=new Ht,zs=new V,Qn=new kn,Bo=new kn,hn=new V;class Ei extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sm(e)?Em:bm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ii(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Qn.min,Bo.min),Qn.expandByPoint(hn),hn.addVectors(Qn.max,Bo.max),Qn.expandByPoint(hn)):(Qn.expandByPoint(Bo.min),Qn.expandByPoint(Bo.max))}Qn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),hn.add(zs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new V,l[P]=new V;const c=new V,u=new V,h=new V,f=new _t,d=new _t,g=new _t,_=new V,m=new V;function p(P,x,T){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,T),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[x].add(_),a[T].add(_),l[P].add(m),l[x].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,x=y.length;P<x;++P){const T=y[P],D=T.start,I=T.count;for(let F=D,H=D+I;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new V,S=new V,M=new V,w=new V;function A(P){M.fromBufferAttribute(i,P),w.copy(M);const x=a[P];b.copy(x),b.sub(M.multiplyScalar(M.dot(x))).normalize(),S.crossVectors(w,x);const D=S.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,x=y.length;P<x;++P){const T=y[P],D=T.start,I=T.count;for(let F=D,H=D+I;F<H;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Hn(f,u,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new rt,Qr=new uc,Qa=new er,hd=new V,el=new V,tl=new V,nl=new V,Hc=new V,il=new V,fd=new V,rl=new V;class ui extends Ht{constructor(e=new Ei,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Hc.fromBufferAttribute(h,e),o?il.addScaledVector(Hc,u):il.addScaledVector(Hc.sub(t),u))}t.add(il)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(Qa.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Qa,hd)===null||Qr.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(ud.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=b;S<M;S+=3){const w=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);i=sl(this,p,e,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);i=sl(this,o,e,n,c,u,h,y,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,M=b;S<M;S+=3){const w=S,A=S+1,P=S+2;i=sl(this,p,e,n,c,u,h,w,A,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,b=m+1,S=m+2;i=sl(this,o,e,n,c,u,h,y,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function F0(r,e,t,n,i,s,o,a){let l;if(e.side===Yn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===xr,a),l===null)return null;rl.copy(a),rl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:r}}function sl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,el),r.getVertexPosition(l,tl),r.getVertexPosition(c,nl);const u=F0(r,e,t,n,el,tl,nl,fd);if(u){const h=new V;Li.getBarycoord(fd,el,tl,nl,h),i&&(u.uv=Li.getInterpolatedAttribute(i,a,l,c,h,new _t)),s&&(u.uv1=Li.getInterpolatedAttribute(s,a,l,c,h,new _t)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Li.getNormal(el,tl,nl,f.normal),u.face=f,u.barycoord=h}return u}class za extends Ei{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(h,2));function g(_,m,p,y,b,S,M,w,A,P,x){const T=S/A,D=M/P,I=S/2,F=M/2,H=w/2,X=A+1,z=P+1;let O=0,K=0;const re=new V;for(let C=0;C<z;C++){const se=C*D-F;for(let Ee=0;Ee<X;Ee++){const De=Ee*T-I;re[_]=De*y,re[m]=se*b,re[p]=H,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=w>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ee/A),h.push(1-C/P),O+=1}}for(let C=0;C<P;C++)for(let se=0;se<A;se++){const Ee=f+se+X*C,De=f+se+X*(C+1),ke=f+(se+1)+X*(C+1),qe=f+(se+1)+X*C;l.push(Ee,De,qe),l.push(De,ke,qe),K+=6}a.addGroup(d,K,x),d+=K,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const n=_o(r[t]);for(const i in n)e[i]=n[i]}return e}function O0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function wm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const B0={clone:_o,merge:Un};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Am extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new V,dd=new _t,pd=new _t;class An extends Am{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,dd,pd),t.subVectors(pd,dd)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Hs=1;class V0 extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(Vs,Hs,e,t);i.layers=this.layers,this.add(i);const s=new An(Vs,Hs,e,t);s.layers=this.layers,this.add(s);const o=new An(Vs,Hs,e,t);o.layers=this.layers,this.add(o);const a=new An(Vs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new An(Vs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new An(Vs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ql)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rm extends pn{constructor(e=[],t=bs,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cm extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Rm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new za(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:mr});s.uniforms.tEquirect.value=t;const o=new ui(i,s),a=t.minFilter;return t.minFilter===fr&&(t.minFilter=an),new V0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ps extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class md extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class G0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new V;class sf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Kl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Kl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gd=new V,_d=new Nt,xd=new Nt,W0=new V,vd=new rt,ol=new V,Wc=new er,Sd=new rt,Xc=new uc;class X0 extends ui{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xf,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingBox.expandByPoint(ol)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new er),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingSphere.expandByPoint(ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wc.copy(this.boundingSphere),Wc.applyMatrix4(i),e.ray.intersectsSphere(Wc)!==!1&&(Sd.copy(i).invert(),Xc.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===W_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_d.fromBufferAttribute(i.attributes.skinIndex,e),xd.fromBufferAttribute(i.attributes.skinWeight,e),gd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=xd.getComponent(s);if(o!==0){const a=_d.getComponent(s);vd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(W0.copy(gd).applyMatrix4(vd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pm extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class of extends pn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=on,u=on,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new rt,Y0=new rt;class af{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Y0;Md.multiplyMatrices(a,t[s]),Md.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new af(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new of(t,e,e,Si,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Be("Skeleton: No bone found with UUID:",s),o=new Pm),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class dh extends Hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new rt,yd=new rt,al=[],Td=new kn,q0=new rt,ko=new ui,zo=new er;class K0 extends ui{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,q0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Td.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Td)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),zo.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(n),e.ray.intersectsSphere(zo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Gs),yd.multiplyMatrices(n,Gs),ko.matrixWorld=yd,ko.raycast(e,al);for(let o=0,a=al.length;o<a;o++){const l=al[o];l.instanceId=s,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new of(new Float32Array(i*this.count),i,this.count,$h,vi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yc=new V,j0=new V,$0=new tt;class os{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yc.subVectors(n,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$0.getNormalMatrix(e),i=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new er,Z0=new _t(.5,.5),ll=new V;class lf{constructor(e=new os,t=new os,n=new os,i=new os,s=new os,o=new os){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],b=s[13],S=s[14],M=s[15];if(i[0].setComponents(c-o,d-u,p-g,M-y).normalize(),i[1].setComponents(c+o,d+u,p+g,M+y).normalize(),i[2].setComponents(c+a,d+h,p+_,M+b).normalize(),i[3].setComponents(c-a,d-h,p-_,M-b).normalize(),n)i[4].setComponents(l,f,m,S).normalize(),i[5].setComponents(c-l,d-f,p-m,M-S).normalize();else if(i[4].setComponents(c-l,d-f,p-m,M-S).normalize(),t===Wi)i[5].setComponents(c+l,d+f,p+m,M+S).normalize();else if(t===ql)i[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Z0.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ll.x=i.normal.x>0?e.max.x:e.min.x,ll.y=i.normal.y>0?e.max.y:e.min.y,ll.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lm extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new V,$l=new V,bd=new rt,Vo=new uc,cl=new er,qc=new V,Ed=new V;class cf extends Ht{constructor(e=new Ei,t=new Lm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)jl.fromBufferAttribute(t,i-1),$l.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=jl.distanceTo($l);e.setAttribute("lineDistance",new Ii(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;bd.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(bd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),b=ul(this,e,Vo,l,p,y,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ul(this,e,Vo,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=ul(this,e,Vo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ul(this,e,Vo,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ul(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(jl.fromBufferAttribute(a,i),$l.fromBufferAttribute(a,s),t.distanceSqToSegment(jl,$l,qc,Ed)>n)return;qc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(qc);if(!(c<e.near||c>e.far))return{distance:c,point:Ed.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const wd=new V,Ad=new V;class J0 extends cf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)wd.fromBufferAttribute(t,i),Ad.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wd.distanceTo(Ad);e.setAttribute("lineDistance",new Ii(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends cf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dm extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rd=new rt,ph=new uc,hl=new er,fl=new V;class ex extends Ht{constructor(e=new Ei,t=new Dm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(i),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Rd.copy(i).invert(),ph.copy(e.ray).applyMatrix4(Rd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);fl.fromBufferAttribute(h,m),Cd(fl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)fl.fromBufferAttribute(h,g),Cd(fl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cd(r,e,t,n,i,s,o){const a=ph.distanceSqToPoint(r);if(a<t){const l=new V;ph.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ca extends pn{constructor(e,t,n=$i,i,s,o,a=on,l=on,c,u=Sr,h=1){if(u!==Sr&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tx extends Ca{constructor(e,t=$i,n=bs,i,s,o=on,a=on,l,c=Sr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Im extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hc extends Ei{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let b=0;b<c;b++){const S=b*h-s;g.push(S,-y,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const b=y+c*p,S=y+c*(p+1),M=y+1+c*(p+1),w=y+1+c*p;d.push(b,S,w),d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(_,3)),this.setAttribute("uv",new Ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}class nx extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uf extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vm,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends uf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ix extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rx extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function dl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function sx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Nm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Va{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ox extends Va{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yf,endingEnd:Yf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qf:s=e,a=2*t-n;break;case Kf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qf:o=e,l=2*n-t;break;case Kf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+y*o[c+M]+b*o[l+M]+S*o[h+M];return s}}class ax extends Va{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class lx extends Va{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ni{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dl(t,this.TimeBufferType),this.values=dl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dl(e.times,Array),values:dl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ox(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&t0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=wa;class Co extends Ni{constructor(e,t,n){super(e,t,n)}}Co.prototype.ValueTypeName="bool";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=Ea;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class Um extends Ni{constructor(e,t,n,i){super(e,t,n,i)}}Um.prototype.ValueTypeName="color";class xo extends Ni{constructor(e,t,n,i){super(e,t,n,i)}}xo.prototype.ValueTypeName="number";class cx extends Va{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)jr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class vo extends Ni{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new cx(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends Ni{constructor(e,t,n){super(e,t,n)}}Po.prototype.ValueTypeName="string";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=Ea;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends Ni{constructor(e,t,n,i){super(e,t,n,i)}}So.prototype.ValueTypeName="vector";class ux{constructor(e="",t=-1,n=[],i=X_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(fx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ni.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=sx(l);l=Pd(l,1,u),c=Pd(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new xo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ke("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Nm(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const b=f[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new xo(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(So,d+".position",f,"pos",i),n(vo,d+".quaternion",f,"rot",i),n(So,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function hx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return Um;case"quaternion":return vo;case"bool":case"boolean":return Co;case"string":return Po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function fx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hx(r.type);if(r.times===void 0){const t=[],n=[];Nm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const dr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class dx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const px=new dx;class Lo{constructor(e){this.manager=e!==void 0?e:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const lr={};class mx extends Error{constructor(e,t){super(e),this.response=t}}class Fm extends Lo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(lr[e]!==void 0){lr[e].push({onLoad:t,onProgress:n,onError:i});return}lr[e]=[],lr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=lr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:b,value:S})=>{if(b)p.close();else{_+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,A=u.length;w<A;w++){const P=u[w];P.onProgress&&P.onProgress(M)}p.enqueue(S),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new mx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{dr.add(`file:${e}`,c);const u=lr[e];delete lr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=lr[e];if(u===void 0)throw this.manager.itemError(e),c;delete lr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ws=new WeakMap;class gx extends Lo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=dr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Ws.get(o);h===void 0&&(h=[],Ws.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Aa("img");function l(){u(),t&&t(this);const h=Ws.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Ws.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),dr.remove(`image:${e}`);const f=Ws.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Ws.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),dr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class _x extends Lo{constructor(e){super(e)}load(e,t,n,i){const s=new pn,o=new gx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class fc extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kc=new rt,Ld=new V,Dd=new V;class hf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xx extends hf{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=go*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vx extends fc{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new xx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Sx extends hf{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class Mx extends fc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dc extends Am{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yx extends hf{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zo extends fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new yx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Id extends fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ca{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const jc=new WeakMap;class Tx extends Lo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=dr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(jc.has(o)===!0)i&&i(jc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return dr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),jc.set(l,c),dr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});dr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class bx extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ex{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ff="\\[\\]\\.:\\/",wx=new RegExp("["+ff+"]","g"),df="[^"+ff+"]",Ax="[^"+ff.replace("\\.","")+"]",Rx=/((?:WC+[\/:])*)/.source.replace("WC",df),Cx=/(WCOD+)?/.source.replace("WCOD",Ax),Px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),Dx=new RegExp("^"+Rx+Cx+Px+Lx+"$"),Ix=["material","materials","bones","map"];class Nx{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){const t=Dx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ix.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Nx;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Nd(r,e,t,n){const i=Ux(n);switch(t){case gm:return r*e;case $h:return r*e/i.components*i.byteLength;case Zh:return r*e/i.components*i.byteLength;case mo:return r*e*2/i.components*i.byteLength;case Jh:return r*e*2/i.components*i.byteLength;case _m:return r*e*3/i.components*i.byteLength;case Si:return r*e*4/i.components*i.byteLength;case Qh:return r*e*4/i.components*i.byteLength;case Ll:case Dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Il:case Nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nu:case Fu:return Math.max(r,16)*Math.max(e,8)/4;case Iu:case Uu:return Math.max(r,8)*Math.max(e,8)/2;case Ou:case Bu:case zu:case Vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ku:case Hu:case Gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ju:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rh:case sh:case oh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ah:case lh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ch:case uh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ux(r){switch(r){case ri:case fm:return{byteLength:1,components:1};case Ta:case dm:case vr:return{byteLength:2,components:1};case Kh:case jh:return{byteLength:2,components:4};case $i:case qh:case vi:return{byteLength:4,components:1};case pm:case mm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);function Om(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Fx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
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
#endif`,kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
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
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$x=`#ifdef USE_IRIDESCENCE
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
#endif`,Zx=`#ifdef USE_BUMPMAP
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ov=`#define PI 3.141592653589793
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
} // validated`,av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lv=`vec3 transformedNormal = objectNormal;
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
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bv=`#ifdef USE_GRADIENTMAP
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
}`,Ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
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
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nv=`PhysicalMaterial material;
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
#endif`,Uv=`uniform sampler2D dfgLUT;
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
}`,Fv=`
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
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yv=`#if defined( USE_POINTS_UV )
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
#endif`,qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`#ifdef USE_MORPHTARGETS
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
#endif`,Qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sS=`#ifdef USE_NORMALMAP
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
#endif`,oS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MS=`float getShadowMask() {
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
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,bS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ES=`#ifdef USE_SKINNING
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
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`#include <common>
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
}`,GS=`#if DEPTH_PACKING == 3200
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
}`,WS=`#define DISTANCE
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
}`,XS=`#define DISTANCE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
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
}`,jS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,ZS=`uniform vec3 diffuse;
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
}`,JS=`#define LAMBERT
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
}`,QS=`#define LAMBERT
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
}`,eM=`#define MATCAP
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
}`,tM=`#define MATCAP
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
}`,nM=`#define NORMAL
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
}`,iM=`#define NORMAL
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
}`,rM=`#define PHONG
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
}`,sM=`#define PHONG
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
}`,oM=`#define STANDARD
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
}`,aM=`#define STANDARD
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
}`,lM=`#define TOON
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
}`,cM=`#define TOON
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
}`,uM=`uniform float size;
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
}`,hM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,dM=`uniform vec3 color;
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
}`,pM=`uniform float rotation;
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
}`,mM=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Ox,alphahash_pars_fragment:Bx,alphamap_fragment:kx,alphamap_pars_fragment:zx,alphatest_fragment:Vx,alphatest_pars_fragment:Hx,aomap_fragment:Gx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:Yx,begin_vertex:qx,beginnormal_vertex:Kx,bsdfs:jx,iridescence_fragment:$x,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:ev,clipping_planes_vertex:tv,color_fragment:nv,color_pars_fragment:iv,color_pars_vertex:rv,color_vertex:sv,common:ov,cube_uv_reflection_fragment:av,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:uv,emissivemap_fragment:hv,emissivemap_pars_fragment:fv,colorspace_fragment:dv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:_v,envmap_pars_vertex:xv,envmap_physical_pars_fragment:Cv,envmap_vertex:vv,fog_vertex:Sv,fog_pars_vertex:Mv,fog_fragment:yv,fog_pars_fragment:Tv,gradientmap_pars_fragment:bv,lightmap_pars_fragment:Ev,lights_lambert_fragment:wv,lights_lambert_pars_fragment:Av,lights_pars_begin:Rv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Lv,lights_phong_fragment:Dv,lights_phong_pars_fragment:Iv,lights_physical_fragment:Nv,lights_physical_pars_fragment:Uv,lights_fragment_begin:Fv,lights_fragment_maps:Ov,lights_fragment_end:Bv,logdepthbuf_fragment:kv,logdepthbuf_pars_fragment:zv,logdepthbuf_pars_vertex:Vv,logdepthbuf_vertex:Hv,map_fragment:Gv,map_pars_fragment:Wv,map_particle_fragment:Xv,map_particle_pars_fragment:Yv,metalnessmap_fragment:qv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:jv,morphcolor_vertex:$v,morphnormal_vertex:Zv,morphtarget_pars_vertex:Jv,morphtarget_vertex:Qv,normal_fragment_begin:eS,normal_fragment_maps:tS,normal_pars_fragment:nS,normal_pars_vertex:iS,normal_vertex:rS,normalmap_pars_fragment:sS,clearcoat_normal_fragment_begin:oS,clearcoat_normal_fragment_maps:aS,clearcoat_pars_fragment:lS,iridescence_pars_fragment:cS,opaque_fragment:uS,packing:hS,premultiplied_alpha_fragment:fS,project_vertex:dS,dithering_fragment:pS,dithering_pars_fragment:mS,roughnessmap_fragment:gS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:vS,shadowmap_vertex:SS,shadowmask_pars_fragment:MS,skinbase_vertex:yS,skinning_pars_vertex:TS,skinning_vertex:bS,skinnormal_vertex:ES,specularmap_fragment:wS,specularmap_pars_fragment:AS,tonemapping_fragment:RS,tonemapping_pars_fragment:CS,transmission_fragment:PS,transmission_pars_fragment:LS,uv_pars_fragment:DS,uv_pars_vertex:IS,uv_vertex:NS,worldpos_vertex:US,background_vert:FS,background_frag:OS,backgroundCube_vert:BS,backgroundCube_frag:kS,cube_vert:zS,cube_frag:VS,depth_vert:HS,depth_frag:GS,distance_vert:WS,distance_frag:XS,equirect_vert:YS,equirect_frag:qS,linedashed_vert:KS,linedashed_frag:jS,meshbasic_vert:$S,meshbasic_frag:ZS,meshlambert_vert:JS,meshlambert_frag:QS,meshmatcap_vert:eM,meshmatcap_frag:tM,meshnormal_vert:nM,meshnormal_frag:iM,meshphong_vert:rM,meshphong_frag:sM,meshphysical_vert:oM,meshphysical_frag:aM,meshtoon_vert:lM,meshtoon_frag:cM,points_vert:uM,points_frag:hM,shadow_vert:fM,shadow_frag:dM,sprite_vert:pM,sprite_frag:mM},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},zi={basic:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Un([Me.points,Me.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Un([Me.common,Me.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Un([Me.sprite,Me.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Un([Me.common,Me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Un([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};zi.physical={uniforms:Un([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const pl={r:0,b:0,g:0},ts=new Zi,gM=new rt;function _M(r,e,t,n,i,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const M=g(b);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,S){const M=g(S);M&&(M.isCubeTexture||M.mapping===cc)?(u===void 0&&(u=new ui(new za(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:_o(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ts.copy(S.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gM.makeRotationFromEuler(ts)),u.material.toneMapped=mt.getTransfer(M.colorSpace)!==Et,(h!==M||f!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ui(new hc(2,2),new Ji({name:"BackgroundMaterial",uniforms:_o(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=mt.getTransfer(M.colorSpace)!==Et,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(pl,wm(r)),n.buffers.color.setClear(pl.r,pl.g,pl.b,S,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:y}}function xM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(T,D,I,F,H){let X=!1;const z=h(F,I,D);s!==z&&(s=z,c(s.object)),X=d(T,F,I,H),X&&g(T,F,I,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(T,D,I,F),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,D,I){const F=I.wireframe===!0;let H=n[T.id];H===void 0&&(H={},n[T.id]=H);let X=H[D.id];X===void 0&&(X={},H[D.id]=X);let z=X[F];return z===void 0&&(z=f(l()),X[F]=z),z}function f(T){const D=[],I=[],F=[];for(let H=0;H<t;H++)D[H]=0,I[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:F,object:T,attributes:{},index:null}}function d(T,D,I,F){const H=s.attributes,X=D.attributes;let z=0;const O=I.getAttributes();for(const K in O)if(O[K].location>=0){const C=H[K];let se=X[K];if(se===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(se=T.instanceColor)),C===void 0||C.attribute!==se||se&&C.data!==se.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function g(T,D,I,F){const H={},X=D.attributes;let z=0;const O=I.getAttributes();for(const K in O)if(O[K].location>=0){let C=X[K];C===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(C=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(C=T.instanceColor));const se={};se.attribute=C,C&&C.data&&(se.data=C.data),H[K]=se,z++}s.attributes=H,s.attributesNum=z,s.index=F}function _(){const T=s.newAttributes;for(let D=0,I=T.length;D<I;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){const I=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;I[T]=1,F[T]===0&&(r.enableVertexAttribArray(T),F[T]=1),H[T]!==D&&(r.vertexAttribDivisor(T,D),H[T]=D)}function y(){const T=s.newAttributes,D=s.enabledAttributes;for(let I=0,F=D.length;I<F;I++)D[I]!==T[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function b(T,D,I,F,H,X,z){z===!0?r.vertexAttribIPointer(T,D,I,H,X):r.vertexAttribPointer(T,D,I,F,H,X)}function S(T,D,I,F){_();const H=F.attributes,X=I.getAttributes(),z=D.defaultAttributeValues;for(const O in X){const K=X[O];if(K.location>=0){let re=H[O];if(re===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),re!==void 0){const C=re.normalized,se=re.itemSize,Ee=e.get(re);if(Ee===void 0)continue;const De=Ee.buffer,ke=Ee.type,qe=Ee.bytesPerElement,Q=ke===r.INT||ke===r.UNSIGNED_INT||re.gpuType===qh;if(re.isInterleavedBufferAttribute){const te=re.data,de=te.stride,we=re.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)p(K.location+Ae,te.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)m(K.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,De);for(let Ae=0;Ae<K.locationSize;Ae++)b(K.location+Ae,se/K.locationSize,ke,C,de*qe,(we+se/K.locationSize*Ae)*qe,Q)}else{if(re.isInstancedBufferAttribute){for(let te=0;te<K.locationSize;te++)p(K.location+te,re.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let te=0;te<K.locationSize;te++)m(K.location+te);r.bindBuffer(r.ARRAY_BUFFER,De);for(let te=0;te<K.locationSize;te++)b(K.location+te,se/K.locationSize,ke,C,se*qe,se/K.locationSize*te*qe,Q)}}else if(z!==void 0){const C=z[O];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(K.location,C);break;case 3:r.vertexAttrib3fv(K.location,C);break;case 4:r.vertexAttrib4fv(K.location,C);break;default:r.vertexAttrib1fv(K.location,C)}}}}y()}function M(){P();for(const T in n){const D=n[T];for(const I in D){const F=D[I];for(const H in F)u(F[H].object),delete F[H];delete D[I]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const I in D){const F=D[I];for(const H in F)u(F[H].object),delete F[H];delete D[I]}delete n[T.id]}function A(T){for(const D in n){const I=n[D];if(I[T.id]===void 0)continue;const F=I[T.id];for(const H in F)u(F[H].object),delete F[H];delete I[T.id]}}function P(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function vM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Si&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ri&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!P)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,maxSamples:M,samples:w}}function MM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new os,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,b=y*4;let S=p.clippingState||null;l.value=S,S=u(g,f,b,d);for(let M=0;M!==b;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=d;b!==_;++b,S+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function yM(r){let e=new WeakMap;function t(o,a){return a===Lu?o.mapping=bs:a===Du&&(o.mapping=fo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lu||a===Du)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cm(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Fr=4,Ud=[.125,.215,.35,.446,.526,.582],hs=20,TM=256,Ho=new dc,Fd=new Je;let $c=null,Zc=0,Jc=0,Qc=!1;const bM=new V;class Od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=bM}=s;$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Zc,Jc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:vr,format:Si,colorSpace:Gn,depthBuffer:!1},i=Bd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EM(s)),this._blurMaterial=AM(s,e,t),this._ggxMaterial=wM(s,e,t)}return i}_compileMaterial(e){const t=new ui(new Ei,e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,n,i,s){const l=new An(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Fd),h.toneMapping=Ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new za,new ds({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Fd),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const M=this._cubeSize;Xs(i,S*M,b>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bs||e.mapping===fo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ho)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Fr?n-g+Fr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Xs(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,Ho),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Xs(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,Ho)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):hs;m>hs&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const p=[];let y=0;for(let A=0;A<hs;++A){const P=A/_,x=Math.exp(-P*P/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[i],M=3*S*(i>b-Fr?i-b+Fr:0),w=4*(this._cubeSize-S);Xs(t,M,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Ho)}}function EM(r){const e=[],t=[],n=[];let i=r;const s=r-Fr+1+Ud.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Fr?l=Ud[o-r+Fr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),b=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,P=w>2?0:-1,x=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(x,_*g*w),b.set(f,m*g*w);const T=[w,w,w,w,w,w];S.set(T,p*g*w)}const M=new Ei;M.setAttribute("position",new Hn(y,_)),M.setAttribute("uv",new Hn(b,m)),M.setAttribute("faceIndex",new Hn(S,p)),n.push(new ui(M,null)),i>Fr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Bd(r,e,t){const n=new qi(r,e,t);return n.texture.mapping=cc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wM(r,e,t){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function AM(r,e,t){const n=new Float32Array(hs),i=new V(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function kd(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function zd(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function RM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lu||l===Du,u=l===bs||l===fo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Od(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Od(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function CM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ra("WebGLRenderer: "+n+" extension not supported."),i}}}function PM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let b=0,S=y.length;b<S;b+=3){const M=y[b+0],w=y[b+1],A=y[b+2];f.push(M,w,w,A,A,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,S=y.length/3-1;b<S;b+=3){const M=b+0,w=b+1,A=b+2;f.push(M,w,w,A,A,M)}}else return;const m=new(Sm(f)?Em:bm)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function LM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function DM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function IM(r,e,t){const n=new WeakMap,i=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let S=a.attributes.position.count*b,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*M*4*h),A=new Mm(w,S,M,h);A.type=vi,A.needsUpdate=!0;const P=b*4;for(let T=0;T<h;T++){const D=m[T],I=p[T],F=y[T],H=S*M*4*T;for(let X=0;X<D.count;X++){const z=X*P;d===!0&&(i.fromBufferAttribute(D,X),w[H+z+0]=i.x,w[H+z+1]=i.y,w[H+z+2]=i.z,w[H+z+3]=0),g===!0&&(i.fromBufferAttribute(I,X),w[H+z+4]=i.x,w[H+z+5]=i.y,w[H+z+6]=i.z,w[H+z+7]=0),_===!0&&(i.fromBufferAttribute(F,X),w[H+z+8]=i.x,w[H+z+9]=i.y,w[H+z+10]=i.z,w[H+z+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new _t(S,M)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function NM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const UM={[im]:"LINEAR_TONE_MAPPING",[rm]:"REINHARD_TONE_MAPPING",[sm]:"CINEON_TONE_MAPPING",[om]:"ACES_FILMIC_TONE_MAPPING",[lm]:"AGX_TONE_MAPPING",[cm]:"NEUTRAL_TONE_MAPPING",[am]:"CUSTOM_TONE_MAPPING"};function FM(r,e,t,n,i){const s=new qi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new qi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),a=new Ei;a.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const l=new nx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ui(a,l),u=new dc(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(y,b){s.setSize(y,b),o.setSize(y,b);for(let S=0;S<m.length;S++){const M=m[S];M.setSize&&M.setSize(y,b)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,S=s.height;for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(b,S)}},this.begin=function(y,b){if(d||y.toneMapping===Ti&&m.length===0)return!1;if(_=b,b!==null){const S=b.width,M=b.height;(s.width!==S||s.height!==M)&&this.setSize(S,M)}return p===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Ti,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=g,d=!0;let S=s,M=o;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(y,M,S,b),A.needsSwap!==!1)){const P=S;S=M,M=P}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},mt.getTransfer(h)===Et&&(l.defines.SRGB_TRANSFER="");const w=UM[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(_),y.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Bm=new pn,mh=new Ca(1,1),km=new Mm,zm=new E0,Vm=new Rm,Vd=[],Hd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Do(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vd[i];if(s===void 0&&(s=new Float32Array(i),Vd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function mc(r,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function OM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function VM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Xd.set(n),r.uniformMatrix2fv(this.addr,!1,Xd),cn(t,n)}}function HM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Wd.set(n),r.uniformMatrix3fv(this.addr,!1,Wd),cn(t,n)}}function GM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Gd.set(n),r.uniformMatrix4fv(this.addr,!1,Gd),cn(t,n)}}function WM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function KM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function JM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mh.compareFunction=t.isReversedDepthBuffer()?tf:ef,s=mh):s=Bm,t.setTexture2D(e||s,i)}function QM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zm,i)}function ey(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vm,i)}function ty(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||km,i)}function ny(r){switch(r){case 5126:return OM;case 35664:return BM;case 35665:return kM;case 35666:return zM;case 35674:return VM;case 35675:return HM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return YM;case 35669:case 35673:return qM;case 5125:return KM;case 36294:return jM;case 36295:return $M;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(r,e){r.uniform1fv(this.addr,e)}function ry(r,e){const t=Do(e,this.size,2);r.uniform2fv(this.addr,t)}function sy(r,e){const t=Do(e,this.size,3);r.uniform3fv(this.addr,t)}function oy(r,e){const t=Do(e,this.size,4);r.uniform4fv(this.addr,t)}function ay(r,e){const t=Do(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ly(r,e){const t=Do(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cy(r,e){const t=Do(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uy(r,e){r.uniform1iv(this.addr,e)}function hy(r,e){r.uniform2iv(this.addr,e)}function fy(r,e){r.uniform3iv(this.addr,e)}function dy(r,e){r.uniform4iv(this.addr,e)}function py(r,e){r.uniform1uiv(this.addr,e)}function my(r,e){r.uniform2uiv(this.addr,e)}function gy(r,e){r.uniform3uiv(this.addr,e)}function _y(r,e){r.uniform4uiv(this.addr,e)}function xy(r,e,t){const n=this.cache,i=e.length,s=mc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=mh:o=Bm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function vy(r,e,t){const n=this.cache,i=e.length,s=mc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zm,s[o])}function Sy(r,e,t){const n=this.cache,i=e.length,s=mc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vm,s[o])}function My(r,e,t){const n=this.cache,i=e.length,s=mc(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||km,s[o])}function yy(r){switch(r){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return fy;case 35669:case 35673:return dy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return My}}class Ty{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ny(t.type)}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yy(t.type)}}class Ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const eu=/(\w+)(\])?(\[|\.)?/g;function Yd(r,e){r.seq.push(e),r.map[e.id]=e}function wy(r,e,t){const n=r.name,i=n.length;for(eu.lastIndex=0;;){const s=eu.exec(n),o=eu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Yd(t,c===void 0?new Ty(a,r,e):new by(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Ey(a),Yd(t,h)),t=h}}}class Ul{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wy(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ay=37297;let Ry=0;function Cy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Kd=new tt;function Py(r){mt._getMatrix(Kd,mt.workingColorSpace,r);const e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case Yl:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function jd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Cy(r.getShaderSource(e),a)}else return s}function Ly(r,e){const t=Py(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Dy={[im]:"Linear",[rm]:"Reinhard",[sm]:"Cineon",[om]:"ACESFilmic",[lm]:"AgX",[cm]:"Neutral",[am]:"Custom"};function Iy(r,e){const t=Dy[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ml=new V;function Ny(){mt.getLuminanceCoefficients(ml);const r=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function Fy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Oy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Jo(r){return r!==""}function $d(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const By=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(r){return r.replace(By,zy)}const ky=new Map;function zy(r,e){let t=it[e];if(t===void 0){const n=ky.get(e);if(n!==void 0)t=it[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}const Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(r){return r.replace(Vy,Hy)}function Hy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const Gy={[Cl]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function Wy(r){return Gy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xy={[bs]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function Yy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Xy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const qy={[fo]:"ENVMAP_MODE_REFRACTION"};function Ky(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":qy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jy={[nm]:"ENVMAP_BLENDING_MULTIPLY",[H_]:"ENVMAP_BLENDING_MIX",[G_]:"ENVMAP_BLENDING_ADD"};function $y(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jy[r.combine]||"ENVMAP_BLENDING_NONE"}function Zy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wy(t),c=Yy(t),u=Ky(t),h=$y(t),f=Zy(t),d=Uy(t),g=Fy(s),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jo).join(`
`),p.length>0&&(p+=`
`)):(m=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),p=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?it.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),Ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),o=gh(o),o=$d(o,t),o=Zd(o,t),a=gh(a),a=$d(a,t),a=Zd(a,t),o=Jd(o),a=Jd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+o,S=y+p+a,M=qd(i,i.VERTEX_SHADER,b),w=qd(i,i.FRAGMENT_SHADER,S);i.attachShader(_,M),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(M)||"",H=i.getShaderInfoLog(w)||"",X=I.trim(),z=F.trim(),O=H.trim();let K=!0,re=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,w);else{const C=jd(i,M,"vertex"),se=jd(i,w,"fragment");Ke("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+C+`
`+se)}else X!==""?Be("WebGLProgram: Program Info Log:",X):(z===""||O==="")&&(re=!1);re&&(D.diagnostics={runnable:K,programLog:X,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(M),i.deleteShader(w),P=new Ul(i,_),x=Oy(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,Ay)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let Qy=0;class eT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tT(e),t.set(e,n)),n}}class tT{constructor(e){this.id=Qy++,this.code=e,this.usedTimes=0}}function nT(r,e,t,n,i,s,o){const a=new ym,l=new eT,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,D,I,F){const H=I.fog,X=F.geometry,z=x.isMeshStandardMaterial?I.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),K=O&&O.mapping===cc?O.image.height:null,re=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const C=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=C!==void 0?C.length:0;let Ee=0;X.morphAttributes.position!==void 0&&(Ee=1),X.morphAttributes.normal!==void 0&&(Ee=2),X.morphAttributes.color!==void 0&&(Ee=3);let De,ke,qe,Q;if(re){const _e=zi[re];De=_e.vertexShader,ke=_e.fragmentShader}else De=x.vertexShader,ke=x.fragmentShader,l.update(x),qe=l.getVertexShaderID(x),Q=l.getFragmentShaderID(x);const te=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,ze=!!x.map,ht=!!x.matcap,Ce=!!O,Ge=!!x.aoMap,Ue=!!x.lightMap,Oe=!!x.bumpMap,W=!!x.normalMap,N=!!x.displacementMap,xt=!!x.emissiveMap,Qe=!!x.metalnessMap,Xe=!!x.roughnessMap,ge=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,U=x.iridescence>0,j=x.sheen>0,ee=x.transmission>0,$=ge&&!!x.anisotropyMap,ye=R&&!!x.clearcoatMap,ue=R&&!!x.clearcoatNormalMap,be=R&&!!x.clearcoatRoughnessMap,Te=U&&!!x.iridescenceMap,ae=U&&!!x.iridescenceThicknessMap,he=j&&!!x.sheenColorMap,Re=j&&!!x.sheenRoughnessMap,k=!!x.specularMap,Z=!!x.specularColorMap,pe=!!x.specularIntensityMap,L=ee&&!!x.transmissionMap,le=ee&&!!x.thicknessMap,ie=!!x.gradientMap,oe=!!x.alphaMap,ne=x.alphaTest>0,J=!!x.alphaHash,ce=!!x.extensions;let Pe=Ti;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Pe=r.toneMapping);const et={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:ke,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Gn,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:ht,envMap:Ce,envMapMode:Ce&&O.mapping,envMapCubeUVHeight:K,aoMap:Ge,lightMap:Ue,bumpMap:Oe,normalMap:W,displacementMap:N,emissiveMap:xt,normalMapObjectSpace:W&&x.normalMapType===K_,normalMapTangentSpace:W&&x.normalMapType===vm,metalnessMap:Qe,roughnessMap:Xe,anisotropy:ge,anisotropyMap:$,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:ue,clearcoatRoughnessMap:be,dispersion:v,iridescence:U,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:j,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:k,specularColorMap:Z,specularIntensityMap:pe,transmission:ee,transmissionMap:L,thicknessMap:le,gradientMap:ie,opaque:x.transparent===!1&&x.blending===no&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:ne,alphaHash:J,combine:x.combine,mapUv:ze&&_(x.map.channel),aoMapUv:Ge&&_(x.aoMap.channel),lightMapUv:Ue&&_(x.lightMap.channel),bumpMapUv:Oe&&_(x.bumpMap.channel),normalMapUv:W&&_(x.normalMap.channel),displacementMapUv:N&&_(x.displacementMap.channel),emissiveMapUv:xt&&_(x.emissiveMap.channel),metalnessMapUv:Qe&&_(x.metalnessMap.channel),roughnessMapUv:Xe&&_(x.roughnessMap.channel),anisotropyMapUv:$&&_(x.anisotropyMap.channel),clearcoatMapUv:ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(x.sheenRoughnessMap.channel),specularMapUv:k&&_(x.specularMap.channel),specularColorMapUv:Z&&_(x.specularColorMap.channel),specularIntensityMapUv:pe&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:le&&_(x.thicknessMap.channel),alphaMapUv:oe&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(W||ge),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ze||oe),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&mt.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:xt&&x.emissiveMap.isVideoTexture===!0&&mt.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vi,flipSided:x.side===Yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(y(T,x),b(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){const T=g[x.type];let D;if(T){const I=zi[T];D=B0.clone(I.uniforms)}else D=x.uniforms;return D}function M(x,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new Jy(r,T,x,s),u.push(D),h.set(T,D)),D}function w(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:P}}function iT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function rT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ep(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||rT),n.length>1&&n.sort(f||ep),i.length>1&&i.sort(f||ep)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function sT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new tp,r.set(n,[o])):i>=s.length?(o=new tp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function oT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Je};break;case"SpotLight":t={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function aT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let lT=0;function cT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function uT(r){const e=new oT,t=aT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const i=new V,s=new rt,o=new rt;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,b=0,S=0,M=0,w=0,A=0;c.sort(cT);for(let x=0,T=c.length;x<T;x++){const D=c[x],I=D.color,F=D.intensity,H=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===mo?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*F,h+=I.g*F,f+=I.b*F;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],F);A++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,K=t.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=D.shadow.matrix,y++}n.directional[d]=z,d++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(I).multiplyScalar(F),z.distance=H,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[_]=z;const O=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,O.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=O.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=X,S++}_++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(I).multiplyScalar(F),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const O=D.shadow,K=t.get(D);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,K.shadowCameraNear=O.camera.near,K.shadowCameraFar=O.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(F),z.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==S||P.numSpotMaps!==M||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=S,P.numSpotMaps=M,P.numLightProbes=A,n.version=lT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function np(r){const e=new uT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function hT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new np(r),e.set(i,[a])):s>=o.length?(a=new np(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dT=`uniform sampler2D shadow_pass;
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
}`,pT=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],mT=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ip=new rt,Go=new V,tu=new V;function gT(r,e,t){let n=new lf;const i=new _t,s=new _t,o=new Nt,a=new ix,l=new rx,c={},u=t.maxTextureSize,h={[xr]:Yn,[Yn]:xr,[Vi]:Vi},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:fT,fragmentShader:dT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ei;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ui(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let p=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Mu&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Cl);const x=r.getRenderTarget(),T=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(mr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(X=>X.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,X=w.length;H<X;H++){const z=w[H],O=z.shadow;if(O===void 0){Be("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const K=O.getFrameExtents();if(i.multiply(K),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,O.mapSize.y=s.y)),O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===jo){if(z.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new qi(i.x,i.y,{format:mo,type:vr,minFilter:an,magFilter:an,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Ca(i.x,i.y,vi),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Sr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=on,O.map.depthTexture.magFilter=on}else{z.isPointLight?(O.map=new Cm(i.x),O.map.depthTexture=new tx(i.x,$i)):(O.map=new qi(i.x,i.y),O.map.depthTexture=new Ca(i.x,i.y,$i)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Sr;const C=r.state.buffers.depth.getReversed();this.type===Cl?(O.map.depthTexture.compareFunction=C?tf:ef,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=on,O.map.depthTexture.magFilter=on)}O.camera.updateProjectionMatrix()}const re=O.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<re;C++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,C),r.clear();else{C===0&&(r.setRenderTarget(O.map),r.clear());const se=O.getViewport(C);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),I.viewport(o)}if(z.isPointLight){const se=O.camera,Ee=O.matrix,De=z.distance||se.far;De!==se.far&&(se.far=De,se.updateProjectionMatrix()),Go.setFromMatrixPosition(z.matrixWorld),se.position.copy(Go),tu.copy(se.position),tu.add(pT[C]),se.up.copy(mT[C]),se.lookAt(tu),se.updateMatrixWorld(),Ee.makeTranslation(-Go.x,-Go.y,-Go.z),ip.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ip,se.coordinateSystem,se.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),S(A,P,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===jo&&y(O,P),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,T,D)};function y(w,A){const P=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qi(i.x,i.y,{format:mo,type:vr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,P,d,_,null)}function b(w,A,P,x){let T=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)T=D;else if(T=P.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=T.uuid,F=A.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let X=H[F];X===void 0&&(X=T.clone(),H[F]=X,A.addEventListener("dispose",M)),T=X}if(T.visible=A.visible,T.wireframe=A.wireframe,x===jo?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const I=r.properties.get(T);I.light=P}return T}function S(w,A,P,x,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===jo)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const F=e.update(w),H=w.material;if(Array.isArray(H)){const X=F.groups;for(let z=0,O=X.length;z<O;z++){const K=X[z],re=H[K.materialIndex];if(re&&re.visible){const C=b(w,re,x,T);w.onBeforeShadow(r,w,A,P,F,C,K),r.renderBufferDirect(P,null,F,C,w,K),w.onAfterShadow(r,w,A,P,F,C,K)}}}else if(H.visible){const X=b(w,H,x,T);w.onBeforeShadow(r,w,A,P,F,X,null),r.renderBufferDirect(P,null,F,X,w,null),w.onAfterShadow(r,w,A,P,F,X,null)}}const I=w.children;for(let F=0,H=I.length;F<H;F++)S(I[F],A,P,x,T)}function M(w){w.target.removeEventListener("dispose",M);for(const P in c){const x=c[P],T=w.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}const _T={[bu]:Eu,[wu]:Cu,[Au]:Pu,[ho]:Ru,[Eu]:bu,[Cu]:wu,[Pu]:Au,[Ru]:ho};function xT(r,e){function t(){let L=!1;const le=new Nt;let ie=null;const oe=new Nt(0,0,0,0);return{setMask:function(ne){ie!==ne&&!L&&(r.colorMask(ne,ne,ne,ne),ie=ne)},setLocked:function(ne){L=ne},setClear:function(ne,J,ce,Pe,et){et===!0&&(ne*=Pe,J*=Pe,ce*=Pe),le.set(ne,J,ce,Pe),oe.equals(le)===!1&&(r.clearColor(ne,J,ce,Pe),oe.copy(le))},reset:function(){L=!1,ie=null,oe.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,ie=null,oe=null,ne=null;return{setReversed:function(J){if(le!==J){const ce=e.get("EXT_clip_control");J?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),le=J;const Pe=ne;ne=null,this.setClear(Pe)}},getReversed:function(){return le},setTest:function(J){J?te(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(J){ie!==J&&!L&&(r.depthMask(J),ie=J)},setFunc:function(J){if(le&&(J=_T[J]),oe!==J){switch(J){case bu:r.depthFunc(r.NEVER);break;case Eu:r.depthFunc(r.ALWAYS);break;case wu:r.depthFunc(r.LESS);break;case ho:r.depthFunc(r.LEQUAL);break;case Au:r.depthFunc(r.EQUAL);break;case Ru:r.depthFunc(r.GEQUAL);break;case Cu:r.depthFunc(r.GREATER);break;case Pu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=J}},setLocked:function(J){L=J},setClear:function(J){ne!==J&&(le&&(J=1-J),r.clearDepth(J),ne=J)},reset:function(){L=!1,ie=null,oe=null,ne=null,le=!1}}}function i(){let L=!1,le=null,ie=null,oe=null,ne=null,J=null,ce=null,Pe=null,et=null;return{setTest:function(_e){L||(_e?te(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(_e){le!==_e&&!L&&(r.stencilMask(_e),le=_e)},setFunc:function(_e,Ie,Ze){(ie!==_e||oe!==Ie||ne!==Ze)&&(r.stencilFunc(_e,Ie,Ze),ie=_e,oe=Ie,ne=Ze)},setOp:function(_e,Ie,Ze){(J!==_e||ce!==Ie||Pe!==Ze)&&(r.stencilOp(_e,Ie,Ze),J=_e,ce=Ie,Pe=Ze)},setLocked:function(_e){L=_e},setClear:function(_e){et!==_e&&(r.clearStencil(_e),et=_e)},reset:function(){L=!1,le=null,ie=null,oe=null,ne=null,J=null,ce=null,Pe=null,et=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,b=null,S=null,M=null,w=null,A=new Je(0,0,0),P=0,x=!1,T=null,D=null,I=null,F=null,H=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=O>=1):K.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=O>=2);let re=null,C={};const se=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),De=new Nt().fromArray(se),ke=new Nt().fromArray(Ee);function qe(L,le,ie,oe){const ne=new Uint8Array(4),J=r.createTexture();r.bindTexture(L,J),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<ie;ce++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(le+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return J}const Q={};Q[r.TEXTURE_2D]=qe(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(ho),Oe(!1),W(Vf),te(r.CULL_FACE),Ge(mr);function te(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function de(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function we(L,le){return h[L]!==le?(r.bindFramebuffer(L,le),h[L]=le,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Ae(L,le){let ie=d,oe=!1;if(L){ie=f.get(le),ie===void 0&&(ie=[],f.set(le,ie));const ne=L.textures;if(ie.length!==ne.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let J=0,ce=ne.length;J<ce;J++)ie[J]=r.COLOR_ATTACHMENT0+J;ie.length=ne.length,oe=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,oe=!0);oe&&r.drawBuffers(ie)}function ze(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const ht={[us]:r.FUNC_ADD,[E_]:r.FUNC_SUBTRACT,[w_]:r.FUNC_REVERSE_SUBTRACT};ht[A_]=r.MIN,ht[R_]=r.MAX;const Ce={[C_]:r.ZERO,[P_]:r.ONE,[L_]:r.SRC_COLOR,[yu]:r.SRC_ALPHA,[O_]:r.SRC_ALPHA_SATURATE,[U_]:r.DST_COLOR,[I_]:r.DST_ALPHA,[D_]:r.ONE_MINUS_SRC_COLOR,[Tu]:r.ONE_MINUS_SRC_ALPHA,[F_]:r.ONE_MINUS_DST_COLOR,[N_]:r.ONE_MINUS_DST_ALPHA,[B_]:r.CONSTANT_COLOR,[k_]:r.ONE_MINUS_CONSTANT_COLOR,[z_]:r.CONSTANT_ALPHA,[V_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ge(L,le,ie,oe,ne,J,ce,Pe,et,_e){if(L===mr){_===!0&&(de(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),L!==b_){if(L!==m||_e!==x){if((p!==us||S!==us)&&(r.blendEquation(r.FUNC_ADD),p=us,S=us),_e)switch(L){case no:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hf:r.blendFunc(r.ONE,r.ONE);break;case Gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ke("WebGLState: Invalid blending: ",L);break}else switch(L){case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gf:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wf:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",L);break}y=null,b=null,M=null,w=null,A.set(0,0,0),P=0,m=L,x=_e}return}ne=ne||le,J=J||ie,ce=ce||oe,(le!==p||ne!==S)&&(r.blendEquationSeparate(ht[le],ht[ne]),p=le,S=ne),(ie!==y||oe!==b||J!==M||ce!==w)&&(r.blendFuncSeparate(Ce[ie],Ce[oe],Ce[J],Ce[ce]),y=ie,b=oe,M=J,w=ce),(Pe.equals(A)===!1||et!==P)&&(r.blendColor(Pe.r,Pe.g,Pe.b,et),A.copy(Pe),P=et),m=L,x=!1}function Ue(L,le){L.side===Vi?de(r.CULL_FACE):te(r.CULL_FACE);let ie=L.side===Yn;le&&(ie=!ie),Oe(ie),L.blending===no&&L.transparent===!1?Ge(mr):Ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const oe=L.stencilWrite;a.setTest(oe),oe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function W(L){L!==y_?(te(r.CULL_FACE),L!==D&&(L===Vf?r.cullFace(r.BACK):L===T_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),D=L}function N(L){L!==I&&(z&&r.lineWidth(L),I=L)}function xt(L,le,ie){L?(te(r.POLYGON_OFFSET_FILL),(F!==le||H!==ie)&&(r.polygonOffset(le,ie),F=le,H=ie)):de(r.POLYGON_OFFSET_FILL)}function Qe(L){L?te(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function Xe(L){L===void 0&&(L=r.TEXTURE0+X-1),re!==L&&(r.activeTexture(L),re=L)}function ge(L,le,ie){ie===void 0&&(re===null?ie=r.TEXTURE0+X-1:ie=re);let oe=C[ie];oe===void 0&&(oe={type:void 0,texture:void 0},C[ie]=oe),(oe.type!==L||oe.texture!==le)&&(re!==ie&&(r.activeTexture(ie),re=ie),r.bindTexture(L,le||Q[L]),oe.type=L,oe.texture=le)}function R(){const L=C[re];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function j(){try{r.texSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ee(){try{r.texSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ue(){try{r.texStorage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function be(){try{r.texStorage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function Te(){try{r.texImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ae(){try{r.texImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function he(L){De.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function Re(L){ke.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ke.copy(L))}function k(L,le){let ie=c.get(le);ie===void 0&&(ie=new WeakMap,c.set(le,ie));let oe=ie.get(L);oe===void 0&&(oe=r.getUniformBlockIndex(le,L.name),ie.set(L,oe))}function Z(L,le){const oe=c.get(le).get(L);l.get(le)!==oe&&(r.uniformBlockBinding(le,oe,L.__bindingPointIndex),l.set(le,oe))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},re=null,C={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,b=null,S=null,M=null,w=null,A=new Je(0,0,0),P=0,x=!1,T=null,D=null,I=null,F=null,H=null,De.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:de,bindFramebuffer:we,drawBuffers:Ae,useProgram:ze,setBlending:Ge,setMaterial:Ue,setFlipSided:Oe,setCullFace:W,setLineWidth:N,setPolygonOffset:xt,setScissorTest:Qe,activeTexture:Xe,bindTexture:ge,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Te,texImage3D:ae,updateUBOMapping:k,uniformBlockBinding:Z,texStorage2D:ue,texStorage3D:be,texSubImage2D:j,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:ye,scissor:he,viewport:Re,reset:pe}}function vT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):Aa("canvas")}function _(R,v,U){let j=1;const ee=ge(R);if((ee.width>U||ee.height>U)&&(j=U/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(j*ee.width),ye=Math.floor(j*ee.height);h===void 0&&(h=g($,ye));const ue=v?g($,ye):h;return ue.width=$,ue.height=ye,ue.getContext("2d").drawImage(R,0,0,$,ye),Be("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+ye+")."),ue}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(R,v,U,j,ee=!1){if(R!==null){if(r[R]!==void 0)return r[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=v;if(v===r.RED&&(U===r.FLOAT&&($=r.R32F),U===r.HALF_FLOAT&&($=r.R16F),U===r.UNSIGNED_BYTE&&($=r.R8)),v===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&($=r.R8UI),U===r.UNSIGNED_SHORT&&($=r.R16UI),U===r.UNSIGNED_INT&&($=r.R32UI),U===r.BYTE&&($=r.R8I),U===r.SHORT&&($=r.R16I),U===r.INT&&($=r.R32I)),v===r.RG&&(U===r.FLOAT&&($=r.RG32F),U===r.HALF_FLOAT&&($=r.RG16F),U===r.UNSIGNED_BYTE&&($=r.RG8)),v===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&($=r.RG8UI),U===r.UNSIGNED_SHORT&&($=r.RG16UI),U===r.UNSIGNED_INT&&($=r.RG32UI),U===r.BYTE&&($=r.RG8I),U===r.SHORT&&($=r.RG16I),U===r.INT&&($=r.RG32I)),v===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&($=r.RGB8UI),U===r.UNSIGNED_SHORT&&($=r.RGB16UI),U===r.UNSIGNED_INT&&($=r.RGB32UI),U===r.BYTE&&($=r.RGB8I),U===r.SHORT&&($=r.RGB16I),U===r.INT&&($=r.RGB32I)),v===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&($=r.RGBA8UI),U===r.UNSIGNED_SHORT&&($=r.RGBA16UI),U===r.UNSIGNED_INT&&($=r.RGBA32UI),U===r.BYTE&&($=r.RGBA8I),U===r.SHORT&&($=r.RGBA16I),U===r.INT&&($=r.RGBA32I)),v===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),v===r.RGBA){const ye=ee?Yl:mt.getTransfer(j);U===r.FLOAT&&($=r.RGBA32F),U===r.HALF_FLOAT&&($=r.RGBA16F),U===r.UNSIGNED_BYTE&&($=ye===Et?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(R,v){let U;return R?v===null||v===$i||v===ba?U=r.DEPTH24_STENCIL8:v===vi?U=r.DEPTH32F_STENCIL8:v===Ta&&(U=r.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===ba?U=r.DEPTH_COMPONENT24:v===vi?U=r.DEPTH_COMPONENT32F:v===Ta&&(U=r.DEPTH_COMPONENT16),U}function M(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&u.delete(v)}function A(R){const v=R.target;v.removeEventListener("dispose",A),T(v)}function P(R){const v=n.get(R);if(v.__webglInit===void 0)return;const U=R.source,j=f.get(U);if(j){const ee=j[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&x(R),Object.keys(j).length===0&&f.delete(U)}n.remove(R)}function x(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const U=R.source,j=f.get(U);delete j[v.__cacheKey],o.memory.textures--}function T(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let ee=0;ee<v.__webglFramebuffer[j].length;ee++)r.deleteFramebuffer(v.__webglFramebuffer[j][ee]);else r.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)r.deleteFramebuffer(v.__webglFramebuffer[j]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=R.textures;for(let j=0,ee=U.length;j<ee;j++){const $=n.get(U[j]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(U[j])}n.remove(R)}let D=0;function I(){D=0}function F(){const R=D;return R>=i.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function H(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function X(R,v){const U=n.get(R);if(R.isVideoTexture&&Qe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const j=R.image;if(j===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+v)}function z(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Q(U,R,v);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+v)}function O(R,v){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Q(U,R,v);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+v)}function K(R,v){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){te(U,R,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+v)}const re={[po]:r.REPEAT,[Gi]:r.CLAMP_TO_EDGE,[Xl]:r.MIRRORED_REPEAT},C={[on]:r.NEAREST,[hm]:r.NEAREST_MIPMAP_NEAREST,[$o]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[Pl]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR},se={[j_]:r.NEVER,[e0]:r.ALWAYS,[$_]:r.LESS,[ef]:r.LEQUAL,[Z_]:r.EQUAL,[tf]:r.GEQUAL,[J_]:r.GREATER,[Q_]:r.NOTEQUAL};function Ee(R,v){if(v.type===vi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Pl||v.magFilter===$o||v.magFilter===fr||v.minFilter===an||v.minFilter===Pl||v.minFilter===$o||v.minFilter===fr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,re[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,re[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,re[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,C[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,C[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===on||v.minFilter!==$o&&v.minFilter!==fr||v.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function De(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const j=v.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const $=H(v);if($!==R.__cacheKey){ee[$]===void 0&&(ee[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[$].usedTimes++;const ye=ee[R.__cacheKey];ye!==void 0&&(ee[R.__cacheKey].usedTimes--,ye.usedTimes===0&&x(v)),R.__cacheKey=$,R.__webglTexture=ee[$].texture}return U}function ke(R,v,U){return Math.floor(Math.floor(R/U)/v)}function qe(R,v,U,j){const $=R.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,U,j,v.data);else{$.sort((ae,he)=>ae.start-he.start);let ye=0;for(let ae=1;ae<$.length;ae++){const he=$[ye],Re=$[ae],k=he.start+he.count,Z=ke(Re.start,v.width,4),pe=ke(he.start,v.width,4);Re.start<=k+1&&Z===pe&&ke(Re.start+Re.count-1,v.width,4)===Z?he.count=Math.max(he.count,Re.start+Re.count-he.start):(++ye,$[ye]=Re)}$.length=ye+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),be=r.getParameter(r.UNPACK_SKIP_PIXELS),Te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let ae=0,he=$.length;ae<he;ae++){const Re=$[ae],k=Math.floor(Re.start/4),Z=Math.ceil(Re.count/4),pe=k%v.width,L=Math.floor(k/v.width),le=Z,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,pe,L,le,ie,U,j,v.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,be),r.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function Q(R,v,U){let j=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=r.TEXTURE_3D);const ee=De(R,v),$=v.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+U);const ye=n.get($);if($.version!==ye.__version||ee===!0){t.activeTexture(r.TEXTURE0+U);const ue=mt.getPrimaries(mt.workingColorSpace),be=v.colorSpace===Ur?null:mt.getPrimaries(v.colorSpace),Te=v.colorSpace===Ur||ue===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=_(v.image,!1,i.maxTextureSize);ae=Xe(v,ae);const he=s.convert(v.format,v.colorSpace),Re=s.convert(v.type);let k=b(v.internalFormat,he,Re,v.colorSpace,v.isVideoTexture);Ee(j,v);let Z;const pe=v.mipmaps,L=v.isVideoTexture!==!0,le=ye.__version===void 0||ee===!0,ie=$.dataReady,oe=M(v,ae);if(v.isDepthTexture)k=S(v.format===fs,v.type),le&&(L?t.texStorage2D(r.TEXTURE_2D,1,k,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,k,ae.width,ae.height,0,he,Re,null));else if(v.isDataTexture)if(pe.length>0){L&&le&&t.texStorage2D(r.TEXTURE_2D,oe,k,pe[0].width,pe[0].height);for(let ne=0,J=pe.length;ne<J;ne++)Z=pe[ne],L?ie&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Z.width,Z.height,he,Re,Z.data):t.texImage2D(r.TEXTURE_2D,ne,k,Z.width,Z.height,0,he,Re,Z.data);v.generateMipmaps=!1}else L?(le&&t.texStorage2D(r.TEXTURE_2D,oe,k,ae.width,ae.height),ie&&qe(v,ae,he,Re)):t.texImage2D(r.TEXTURE_2D,0,k,ae.width,ae.height,0,he,Re,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,k,pe[0].width,pe[0].height,ae.depth);for(let ne=0,J=pe.length;ne<J;ne++)if(Z=pe[ne],v.format!==Si)if(he!==null)if(L){if(ie)if(v.layerUpdates.size>0){const ce=Nd(Z.width,Z.height,v.format,v.type);for(const Pe of v.layerUpdates){const et=Z.data.subarray(Pe*ce/Z.data.BYTES_PER_ELEMENT,(Pe+1)*ce/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Pe,Z.width,Z.height,1,he,et)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,Z.width,Z.height,ae.depth,he,Z.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,k,Z.width,Z.height,ae.depth,0,Z.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,Z.width,Z.height,ae.depth,he,Re,Z.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,k,Z.width,Z.height,ae.depth,0,he,Re,Z.data)}else{L&&le&&t.texStorage2D(r.TEXTURE_2D,oe,k,pe[0].width,pe[0].height);for(let ne=0,J=pe.length;ne<J;ne++)Z=pe[ne],v.format!==Si?he!==null?L?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,Z.width,Z.height,he,Z.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,k,Z.width,Z.height,0,Z.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Z.width,Z.height,he,Re,Z.data):t.texImage2D(r.TEXTURE_2D,ne,k,Z.width,Z.height,0,he,Re,Z.data)}else if(v.isDataArrayTexture)if(L){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,k,ae.width,ae.height,ae.depth),ie)if(v.layerUpdates.size>0){const ne=Nd(ae.width,ae.height,v.format,v.type);for(const J of v.layerUpdates){const ce=ae.data.subarray(J*ne/ae.data.BYTES_PER_ELEMENT,(J+1)*ne/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,he,Re,ce)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,Re,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,k,ae.width,ae.height,ae.depth,0,he,Re,ae.data);else if(v.isData3DTexture)L?(le&&t.texStorage3D(r.TEXTURE_3D,oe,k,ae.width,ae.height,ae.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,Re,ae.data)):t.texImage3D(r.TEXTURE_3D,0,k,ae.width,ae.height,ae.depth,0,he,Re,ae.data);else if(v.isFramebufferTexture){if(le)if(L)t.texStorage2D(r.TEXTURE_2D,oe,k,ae.width,ae.height);else{let ne=ae.width,J=ae.height;for(let ce=0;ce<oe;ce++)t.texImage2D(r.TEXTURE_2D,ce,k,ne,J,0,he,Re,null),ne>>=1,J>>=1}}else if(pe.length>0){if(L&&le){const ne=ge(pe[0]);t.texStorage2D(r.TEXTURE_2D,oe,k,ne.width,ne.height)}for(let ne=0,J=pe.length;ne<J;ne++)Z=pe[ne],L?ie&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he,Re,Z):t.texImage2D(r.TEXTURE_2D,ne,k,he,Re,Z);v.generateMipmaps=!1}else if(L){if(le){const ne=ge(ae);t.texStorage2D(r.TEXTURE_2D,oe,k,ne.width,ne.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Re,ae)}else t.texImage2D(r.TEXTURE_2D,0,k,he,Re,ae);m(v)&&p(j),ye.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function te(R,v,U){if(v.image.length!==6)return;const j=De(R,v),ee=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);const $=n.get(ee);if(ee.version!==$.__version||j===!0){t.activeTexture(r.TEXTURE0+U);const ye=mt.getPrimaries(mt.workingColorSpace),ue=v.colorSpace===Ur?null:mt.getPrimaries(v.colorSpace),be=v.colorSpace===Ur||ye===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,he=[];for(let J=0;J<6;J++)!Te&&!ae?he[J]=_(v.image[J],!0,i.maxCubemapSize):he[J]=ae?v.image[J].image:v.image[J],he[J]=Xe(v,he[J]);const Re=he[0],k=s.convert(v.format,v.colorSpace),Z=s.convert(v.type),pe=b(v.internalFormat,k,Z,v.colorSpace),L=v.isVideoTexture!==!0,le=$.__version===void 0||j===!0,ie=ee.dataReady;let oe=M(v,Re);Ee(r.TEXTURE_CUBE_MAP,v);let ne;if(Te){L&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,pe,Re.width,Re.height);for(let J=0;J<6;J++){ne=he[J].mipmaps;for(let ce=0;ce<ne.length;ce++){const Pe=ne[ce];v.format!==Si?k!==null?L?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Pe.width,Pe.height,k,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,pe,Pe.width,Pe.height,0,Pe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Pe.width,Pe.height,k,Z,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,pe,Pe.width,Pe.height,0,k,Z,Pe.data)}}}else{if(ne=v.mipmaps,L&&le){ne.length>0&&oe++;const J=ge(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,pe,J.width,J.height)}for(let J=0;J<6;J++)if(ae){L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,he[J].width,he[J].height,k,Z,he[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,pe,he[J].width,he[J].height,0,k,Z,he[J].data);for(let ce=0;ce<ne.length;ce++){const et=ne[ce].image[J].image;L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,et.width,et.height,k,Z,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,pe,et.width,et.height,0,k,Z,et.data)}}else{L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,k,Z,he[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,pe,k,Z,he[J]);for(let ce=0;ce<ne.length;ce++){const Pe=ne[ce];L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,k,Z,Pe.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,pe,k,Z,Pe.image[J])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),$.__version=ee.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function de(R,v,U,j,ee,$){const ye=s.convert(U.format,U.colorSpace),ue=s.convert(U.type),be=b(U.internalFormat,ye,ue,U.colorSpace),Te=n.get(v),ae=n.get(U);if(ae.__renderTarget=v,!Te.__hasExternalTextures){const he=Math.max(1,v.width>>$),Re=Math.max(1,v.height>>$);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,be,he,Re,v.depth,0,ye,ue,null):t.texImage2D(ee,$,be,he,Re,0,ye,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),xt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,ee,ae.__webglTexture,0,N(v)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,ee,ae.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,v,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const j=v.depthTexture,ee=j&&j.isDepthTexture?j.type:null,$=S(v.stencilBuffer,ee),ye=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(v),$,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(v),$,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,$,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{const j=v.textures;for(let ee=0;ee<j.length;ee++){const $=j[ee],ye=s.convert($.format,$.colorSpace),ue=s.convert($.type),be=b($.internalFormat,ye,ue,$.colorSpace);xt(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(v),be,v.width,v.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(v),be,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,be,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(R,v,U){const j=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(v.depthTexture);if(ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,v.depthTexture);const Te=s.convert(v.depthTexture.format),ae=s.convert(v.depthTexture.type);let he;v.depthTexture.format===Sr?he=r.DEPTH_COMPONENT24:v.depthTexture.format===fs&&(he=r.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,he,v.width,v.height,0,Te,ae,null)}}else X(v.depthTexture,0);const $=ee.__webglTexture,ye=N(v),ue=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,be=v.depthTexture.format===fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Sr)xt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ue,$,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,be,ue,$,0);else if(v.depthTexture.format===fs)xt(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ue,$,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,be,ue,$,0);else throw new Error("Unknown depthTexture format")}function ze(R){const v=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=j}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)Ae(v.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Ae(v.__webglFramebuffer[0],R,0):Ae(v.__webglFramebuffer,R,0)}else if(U){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=r.createRenderbuffer(),we(v.__webglDepthbuffer[j],R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,$)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),we(v.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(R,v,U){const j=n.get(R);v!==void 0&&de(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&ze(R)}function Ce(R){const v=R.texture,U=n.get(R),j=n.get(v);R.addEventListener("dispose",A);const ee=R.textures,$=R.isWebGLCubeRenderTarget===!0,ye=ee.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=v.version,o.memory.textures++),$){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let be=0;be<v.mipmaps.length;be++)U.__webglFramebuffer[ue][be]=r.createFramebuffer()}else U.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)U.__webglFramebuffer[ue]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ue=0,be=ee.length;ue<be;ue++){const Te=n.get(ee[ue]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&xt(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const be=ee[ue];U.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);const Te=s.convert(be.format,be.colorSpace),ae=s.convert(be.type),he=b(be.internalFormat,Te,ae,be.colorSpace,R.isXRRenderTarget===!0),Re=N(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,he,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),we(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)de(U.__webglFramebuffer[ue][be],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be);else de(U.__webglFramebuffer[ue],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ue=0,be=ee.length;ue<be;ue++){const Te=ee[ue],ae=n.get(Te);let he=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,ae.__webglTexture),Ee(he,Te),de(U.__webglFramebuffer,R,Te,r.COLOR_ATTACHMENT0+ue,he,0),m(Te)&&p(he)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),Ee(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)de(U.__webglFramebuffer[be],R,v,r.COLOR_ATTACHMENT0,ue,be);else de(U.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}R.depthBuffer&&ze(R)}function Ge(R){const v=R.textures;for(let U=0,j=v.length;U<j;U++){const ee=v[U];if(m(ee)){const $=y(R),ye=n.get(ee).__webglTexture;t.bindTexture($,ye),p($),t.unbindTexture()}}}const Ue=[],Oe=[];function W(R){if(R.samples>0){if(xt(R)===!1){const v=R.textures,U=R.width,j=R.height;let ee=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),ue=v.length>1;if(ue)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);const ae=n.get(v[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,U,j,0,0,U,j,ee,r.NEAREST),l===!0&&(Ue.length=0,Oe.length=0,Ue.push(r.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ue.push($),Oe.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);const ae=n.get(v[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function N(R){return Math.min(i.maxSamples,R.samples)}function xt(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(R){const v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Xe(R,v){const U=R.colorSpace,j=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Gn&&U!==Ur&&(mt.getTransfer(U)===Et?(j!==Si||ee!==ri)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",U)),v}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=ht,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ST(r,e){function t(n,i=Ur){let s;const o=mt.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===Kh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===jh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===pm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===mm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===fm)return r.BYTE;if(n===dm)return r.SHORT;if(n===Ta)return r.UNSIGNED_SHORT;if(n===qh)return r.INT;if(n===$i)return r.UNSIGNED_INT;if(n===vi)return r.FLOAT;if(n===vr)return r.HALF_FLOAT;if(n===gm)return r.ALPHA;if(n===_m)return r.RGB;if(n===Si)return r.RGBA;if(n===Sr)return r.DEPTH_COMPONENT;if(n===fs)return r.DEPTH_STENCIL;if(n===$h)return r.RED;if(n===Zh)return r.RED_INTEGER;if(n===mo)return r.RG;if(n===Jh)return r.RG_INTEGER;if(n===Qh)return r.RGBA_INTEGER;if(n===Ll||n===Dl||n===Il||n===Nl)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Iu||n===Nu||n===Uu||n===Fu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ou||n===Bu||n===ku||n===zu||n===Vu||n===Hu||n===Gu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ou||n===Bu)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ku)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zu)return s.COMPRESSED_R11_EAC;if(n===Vu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Hu)return s.COMPRESSED_RG11_EAC;if(n===Gu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wu||n===Xu||n===Yu||n===qu||n===Ku||n===ju||n===$u||n===Zu||n===Ju||n===Qu||n===eh||n===th||n===nh||n===ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ku)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ju)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$u)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ju)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qu)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===th)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nh)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ih)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rh||n===sh||n===oh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rh)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===lh||n===ch||n===uh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ah)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ba?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const MT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yT=`
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

}`;class TT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Im(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ji({vertexShader:MT,fragmentShader:yT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new hc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends Ro{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new TT,p={},y=t.getContextAttributes();let b=null,S=null;const M=[],w=[],A=new _t;let P=null;const x=new An;x.viewport=new Nt;const T=new An;T.viewport=new Nt;const D=[x,T],I=new bx;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let te=M[Q];return te===void 0&&(te=new Gc,M[Q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Q){let te=M[Q];return te===void 0&&(te=new Gc,M[Q]=te),te.getGripSpace()},this.getHand=function(Q){let te=M[Q];return te===void 0&&(te=new Gc,M[Q]=te),te.getHandSpace()};function X(Q){const te=w.indexOf(Q.inputSource);if(te===-1)return;const de=M[te];de!==void 0&&(de.update(Q.inputSource,Q.frame,c||o),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",O);for(let Q=0;Q<M.length;Q++){const te=w[Q];te!==null&&(w[Q]=null,M[Q].disconnect(te))}F=null,H=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(b),d=null,f=null,h=null,i=null,S=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",z),i.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,we=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?fs:Sr,we=y.stencil?ba:$i);const ze={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qi(f.textureWidth,f.textureHeight,{format:Si,type:ri,depthTexture:new Ca(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new qi(d.framebufferWidth,d.framebufferHeight,{format:Si,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Q){for(let te=0;te<Q.removed.length;te++){const de=Q.removed[te],we=w.indexOf(de);we>=0&&(w[we]=null,M[we].disconnect(de))}for(let te=0;te<Q.added.length;te++){const de=Q.added[te];let we=w.indexOf(de);if(we===-1){for(let ze=0;ze<M.length;ze++)if(ze>=w.length){w.push(de),we=ze;break}else if(w[ze]===null){w[ze]=de,we=ze;break}if(we===-1)break}const Ae=M[we];Ae&&Ae.connect(de)}}const K=new V,re=new V;function C(Q,te,de){K.setFromMatrixPosition(te.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);const we=K.distanceTo(re),Ae=te.projectionMatrix.elements,ze=de.projectionMatrix.elements,ht=Ae[14]/(Ae[10]-1),Ce=Ae[14]/(Ae[10]+1),Ge=(Ae[9]+1)/Ae[5],Ue=(Ae[9]-1)/Ae[5],Oe=(Ae[8]-1)/Ae[0],W=(ze[8]+1)/ze[0],N=ht*Oe,xt=ht*W,Qe=we/(-Oe+W),Xe=Qe*-Oe;if(te.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Xe),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ge=ht+Qe,R=Ce+Qe,v=N-Xe,U=xt+(we-Xe),j=Ge*Ce/R*ge,ee=Ue*Ce/R*ge;Q.projectionMatrix.makePerspective(v,U,j,ee,ge,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,te){te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let te=Q.near,de=Q.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(de=m.depthFar)),I.near=T.near=x.near=te,I.far=T.far=x.far=de,(F!==I.near||H!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,H=I.far),I.layers.mask=Q.layers.mask|6,x.layers.mask=I.layers.mask&3,T.layers.mask=I.layers.mask&5;const we=Q.parent,Ae=I.cameras;se(I,we);for(let ze=0;ze<Ae.length;ze++)se(Ae[ze],we);Ae.length===2?C(I,x,T):I.projectionMatrix.copy(x.projectionMatrix),Ee(Q,I,we)};function Ee(Q,te,de){de===null?Q.matrix.copy(te.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(te.projectionMatrix),Q.projectionMatrixInverse.copy(te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=go*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Q){return p[Q]};let De=null;function ke(Q,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let we=!1;de.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let Ce=0;Ce<de.length;Ce++){const Ge=de[Ce];let Ue=null;if(d!==null)Ue=d.getViewport(Ge);else{const W=h.getViewSubImage(f,Ge);Ue=W.viewport,Ce===0&&(e.setRenderTargetTextures(S,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(S))}let Oe=D[Ce];Oe===void 0&&(Oe=new An,Oe.layers.enable(Ce),Oe.viewport=new Nt,D[Ce]=Oe),Oe.matrix.fromArray(Ge.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ge.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ce===0&&(I.matrix.copy(Oe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(Oe)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Ce=h.getDepthInformation(de[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(Ce,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ce=0;Ce<de.length;Ce++){const Ge=de[Ce].camera;if(Ge){let Ue=p[Ge];Ue||(Ue=new Im,p[Ge]=Ue);const Oe=h.getCameraImage(Ge);Ue.sourceTexture=Oe}}}}for(let de=0;de<M.length;de++){const we=w[de],Ae=M[de];we!==null&&Ae!==void 0&&Ae.update(we,te,c||o)}De&&De(Q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const qe=new Om;qe.setAnimationLoop(ke),this.setAnimationLoop=function(Q){De=Q},this.dispose=function(){}}}const ns=new Zi,ET=new rt;function wT(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,S=y.envMapRotation;b&&(m.envMap.value=b,ns.copy(S),ns.x*=-1,ns.y*=-1,ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(ET.makeRotationFromEuler(ns)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",m));const M=b.program;n.updateUBOMapping(y,M);const w=e.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function u(y){const b=h();y.__bindingPointIndex=b;const S=r.createBuffer(),M=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=i[y.id],S=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,A=S.length;w<A;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,T=P.length;x<T;x++){const D=P[x];if(d(D,w,x,M)===!0){const I=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let H=0;for(let X=0;X<F.length;X++){const z=F[X],O=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,I+H,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,H),H+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,b,S,M){const w=y.value,A=b+"_"+S;if(M[A]===void 0)return typeof w=="number"||typeof w=="boolean"?M[A]=w:M[A]=w.clone(),!0;{const P=M[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return M[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(y){const b=y.uniforms;let S=0;const M=16;for(let A=0,P=b.length;A<P;A++){const x=Array.isArray(b[A])?b[A]:[b[A]];for(let T=0,D=x.length;T<D;T++){const I=x[T],F=Array.isArray(I.value)?I.value:[I.value];for(let H=0,X=F.length;H<X;H++){const z=F[H],O=_(z),K=S%M,re=K%O.boundary,C=K+re;S+=re,C!==0&&M-C<O.storage&&(S+=M-C),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}const w=S%M;return w>0&&(S+=M-w),y.__size=S,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const RT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function CT(){return Fi===null&&(Fi=new of(RT,16,16,mo,vr),Fi.name="DFG_LUT",Fi.minFilter=an,Fi.magFilter=an,Fi.wrapS=Gi,Fi.wrapT=Gi,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class rp{constructor(e={}){const{canvas:t=n0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ri}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=d,m=new Set([Qh,Jh,Zh]),p=new Set([ri,$i,Ta,ba,Kh,jh]),y=new Uint32Array(4),b=new Int32Array(4);let S=null,M=null;const w=[],A=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=sn;let D=0,I=0,F=null,H=-1,X=null;const z=new Nt,O=new Nt;let K=null;const re=new Je(0);let C=0,se=t.width,Ee=t.height,De=1,ke=null,qe=null;const Q=new Nt(0,0,se,Ee),te=new Nt(0,0,se,Ee);let de=!1;const we=new lf;let Ae=!1,ze=!1;const ht=new rt,Ce=new V,Ge=new Nt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function W(){return F===null?De:1}let N=n;function xt(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yh}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){const B="webgl2";if(N=xt(B,E),N===null)throw xt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ke("WebGLRenderer: "+E.message),E}let Qe,Xe,ge,R,v,U,j,ee,$,ye,ue,be,Te,ae,he,Re,k,Z,pe,L,le,ie,oe,ne;function J(){Qe=new CM(N),Qe.init(),ie=new ST(N,Qe),Xe=new SM(N,Qe,e,ie),ge=new xT(N,Qe),Xe.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),R=new DM(N),v=new iT,U=new vT(N,Qe,ge,v,Xe,ie,R),j=new yM(x),ee=new RM(x),$=new Fx(N),oe=new xM(N,$),ye=new PM(N,$,R,oe),ue=new NM(N,ye,$,R),pe=new IM(N,Xe,U),Re=new MM(v),be=new nT(x,j,ee,Qe,Xe,oe,Re),Te=new wT(x,v),ae=new sT,he=new hT(Qe),Z=new _M(x,j,ee,ge,ue,g,l),k=new gT(x,ue,Xe),ne=new AT(N,R,Xe,ge),L=new vM(N,Qe,R),le=new LM(N,Qe,R),R.programs=be.programs,x.capabilities=Xe,x.extensions=Qe,x.properties=v,x.renderLists=ae,x.shadowMap=k,x.state=ge,x.info=R}J(),_!==ri&&(P=new FM(_,t.width,t.height,i,s));const ce=new bT(x,N);this.xr=ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(E){E!==void 0&&(De=E,this.setSize(se,Ee,!1))},this.getSize=function(E){return E.set(se,Ee)},this.setSize=function(E,B,q=!0){if(ce.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}se=E,Ee=B,t.width=Math.floor(E*De),t.height=Math.floor(B*De),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(se*De,Ee*De).floor()},this.setDrawingBufferSize=function(E,B,q){se=E,Ee=B,De=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(_===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,B,q,Y){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,B,q,Y),ge.viewport(z.copy(Q).multiplyScalar(De).round())},this.getScissor=function(E){return E.copy(te)},this.setScissor=function(E,B,q,Y){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,B,q,Y),ge.scissor(O.copy(te).multiplyScalar(De).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){ge.setScissorTest(de=E)},this.setOpaqueSort=function(E){ke=E},this.setTransparentSort=function(E){qe=E},this.getClearColor=function(E){return E.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let Y=0;if(E){let G=!1;if(F!==null){const fe=F.texture.format;G=m.has(fe)}if(G){const fe=F.texture.type,Se=p.has(fe),me=Z.getClearColor(),xe=Z.getClearAlpha(),Ne=me.r,We=me.g,Ve=me.b;Se?(y[0]=Ne,y[1]=We,y[2]=Ve,y[3]=xe,N.clearBufferuiv(N.COLOR,0,y)):(b[0]=Ne,b[1]=We,b[2]=Ve,b[3]=xe,N.clearBufferiv(N.COLOR,0,b))}else Y|=N.COLOR_BUFFER_BIT}B&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Z.dispose(),ae.dispose(),he.dispose(),v.dispose(),j.dispose(),ee.dispose(),ue.dispose(),oe.dispose(),ne.dispose(),be.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ut),ce.removeEventListener("sessionend",st),Mt.stop()};function Pe(E){E.preventDefault(),Kl("WebGLRenderer: Context Lost."),T=!0}function et(){Kl("WebGLRenderer: Context Restored."),T=!1;const E=R.autoReset,B=k.enabled,q=k.autoUpdate,Y=k.needsUpdate,G=k.type;J(),R.autoReset=E,k.enabled=B,k.autoUpdate=q,k.needsUpdate=Y,k.type=G}function _e(E){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const B=E.target;B.removeEventListener("dispose",Ie),Ze(B)}function Ze(E){ve(E),v.remove(E)}function ve(E){const B=v.get(E).programs;B!==void 0&&(B.forEach(function(q){be.releaseProgram(q)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,Y,G,fe){B===null&&(B=Ue);const Se=G.isMesh&&G.matrixWorld.determinant()<0,me=Yt(E,B,q,Y,G);ge.setMaterial(Y,Se);let xe=q.index,Ne=1;if(Y.wireframe===!0){if(xe=ye.getWireframeAttribute(q),xe===void 0)return;Ne=2}const We=q.drawRange,Ve=q.attributes.position;let nt=We.start*Ne,yt=(We.start+We.count)*Ne;fe!==null&&(nt=Math.max(nt,fe.start*Ne),yt=Math.min(yt,(fe.start+fe.count)*Ne)),xe!==null?(nt=Math.max(nt,0),yt=Math.min(yt,xe.count)):Ve!=null&&(nt=Math.max(nt,0),yt=Math.min(yt,Ve.count));const It=yt-nt;if(It<0||It===1/0)return;oe.setup(G,Y,me,q,xe);let Ft,bt=L;if(xe!==null&&(Ft=$.get(xe),bt=le,bt.setIndex(Ft)),G.isMesh)Y.wireframe===!0?(ge.setLineWidth(Y.wireframeLinewidth*W()),bt.setMode(N.LINES)):bt.setMode(N.TRIANGLES);else if(G.isLine){let He=Y.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*W()),G.isLineSegments?bt.setMode(N.LINES):G.isLineLoop?bt.setMode(N.LINE_LOOP):bt.setMode(N.LINE_STRIP)}else G.isPoints?bt.setMode(N.POINTS):G.isSprite&&bt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ra("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))bt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,St=G._multiDrawCounts,lt=G._multiDrawCount,gn=xe?$.get(xe).bytesPerElement:1,Tr=v.get(Y).currentProgram.getUniforms();for(let vn=0;vn<lt;vn++)Tr.setValue(N,"_gl_DrawID",vn),bt.render(He[vn]/gn,St[vn])}else if(G.isInstancedMesh)bt.renderInstances(nt,It,G.count);else if(q.isInstancedBufferGeometry){const He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,St=Math.min(q.instanceCount,He);bt.renderInstances(nt,It,St)}else bt.render(nt,It)};function Ye(E,B,q){E.transparent===!0&&E.side===Vi&&E.forceSinglePass===!1?(E.side=Yn,E.needsUpdate=!0,vt(E,B,q),E.side=xr,E.needsUpdate=!0,vt(E,B,q),E.side=Vi):vt(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),M=he.get(q),M.init(B),A.push(M),q.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),E!==q&&E.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();const Y=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const me=fe[Se];Ye(me,q,G),Y.add(me)}else Ye(fe,q,G),Y.add(fe)}),M=A.pop(),Y},this.compileAsync=function(E,B,q=null){const Y=this.compile(E,B,q);return new Promise(G=>{function fe(){if(Y.forEach(function(Se){v.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){G(E);return}setTimeout(fe,10)}Qe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Fe=null;function je(E){Fe&&Fe(E)}function Ut(){Mt.stop()}function st(){Mt.start()}const Mt=new Om;Mt.setAnimationLoop(je),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(E){Fe=E,ce.setAnimationLoop(E),E===null?Mt.stop():Mt.start()},ce.addEventListener("sessionstart",Ut),ce.addEventListener("sessionend",st),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const q=ce.enabled===!0&&ce.isPresenting===!0,Y=P!==null&&(F===null||q)&&P.begin(x,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,F),M=he.get(E,A.length),M.init(B),A.push(M),ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),we.setFromProjectionMatrix(ht,Wi,B.reversedDepth),ze=this.localClippingEnabled,Ae=Re.init(this.clippingPlanes,ze),S=ae.get(E,w.length),S.init(),w.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Se=x.xr.getDepthSensingMesh();Se!==null&&Gt(Se,B,-1/0,x.sortObjects)}Gt(E,B,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(ke,qe),Oe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Oe&&Z.addToRenderList(S,E),this.info.render.frame++,Ae===!0&&Re.beginShadows();const G=M.state.shadowsArray;if(k.render(G,E,B),Ae===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&P.hasRenderPass())===!1){const Se=S.opaque,me=S.transmissive;if(M.setupLights(),B.isArrayCamera){const xe=B.cameras;if(me.length>0)for(let Ne=0,We=xe.length;Ne<We;Ne++){const Ve=xe[Ne];pt(Se,me,E,Ve)}Oe&&Z.render(E);for(let Ne=0,We=xe.length;Ne<We;Ne++){const Ve=xe[Ne];Ct(S,E,Ve,Ve.viewport)}}else me.length>0&&pt(Se,me,E,B),Oe&&Z.render(E),Ct(S,E,B)}F!==null&&I===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),Y&&P.end(x),E.isScene===!0&&E.onAfterRender(x,E,B),oe.resetDefaultState(),H=-1,X=null,A.pop(),A.length>0?(M=A[A.length-1],Ae===!0&&Re.setGlobalState(x.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Gt(E,B,q,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||we.intersectsSprite(E)){Y&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const Se=ue.update(E),me=E.material;me.visible&&S.push(E,Se,me,q,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||we.intersectsObject(E))){const Se=ue.update(E),me=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ge.copy(Se.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(me)){const xe=Se.groups;for(let Ne=0,We=xe.length;Ne<We;Ne++){const Ve=xe[Ne],nt=me[Ve.materialIndex];nt&&nt.visible&&S.push(E,Se,nt,q,Ge.z,Ve)}}else me.visible&&S.push(E,Se,me,q,Ge.z,null)}}const fe=E.children;for(let Se=0,me=fe.length;Se<me;Se++)Gt(fe[Se],B,q,Y)}function Ct(E,B,q,Y){const{opaque:G,transmissive:fe,transparent:Se}=E;M.setupLightsView(q),Ae===!0&&Re.setGlobalState(x.clippingPlanes,q),Y&&ge.viewport(z.copy(Y)),G.length>0&&at(G,B,q),fe.length>0&&at(fe,B,q),Se.length>0&&at(Se,B,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function pt(E,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const nt=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new qi(1,1,{generateMipmaps:!0,type:nt?vr:ri,minFilter:fr,samples:Xe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const fe=M.state.transmissionRenderTarget[Y.id],Se=Y.viewport||z;fe.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const me=x.getRenderTarget(),xe=x.getActiveCubeFace(),Ne=x.getActiveMipmapLevel();x.setRenderTarget(fe),x.getClearColor(re),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear(),Oe&&Z.render(q);const We=x.toneMapping;x.toneMapping=Ti;const Ve=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Ae===!0&&Re.setGlobalState(x.clippingPlanes,Y),at(E,q,Y),U.updateMultisampleRenderTarget(fe),U.updateRenderTargetMipmap(fe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let yt=0,It=B.length;yt<It;yt++){const Ft=B[yt],{object:bt,geometry:He,material:St,group:lt}=Ft;if(St.side===Vi&&bt.layers.test(Y.layers)){const gn=St.side;St.side=Yn,St.needsUpdate=!0,Wt(bt,q,Y,He,St,lt),St.side=gn,St.needsUpdate=!0,nt=!0}}nt===!0&&(U.updateMultisampleRenderTarget(fe),U.updateRenderTargetMipmap(fe))}x.setRenderTarget(me,xe,Ne),x.setClearColor(re,C),Ve!==void 0&&(Y.viewport=Ve),x.toneMapping=We}function at(E,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let G=0,fe=E.length;G<fe;G++){const Se=E[G],{object:me,geometry:xe,group:Ne}=Se;let We=Se.material;We.allowOverride===!0&&Y!==null&&(We=Y),me.layers.test(q.layers)&&Wt(me,B,q,xe,We,Ne)}}function Wt(E,B,q,Y,G,fe){E.onBeforeRender(x,B,q,Y,G,fe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(x,B,q,Y,E,fe),G.transparent===!0&&G.side===Vi&&G.forceSinglePass===!1?(G.side=Yn,G.needsUpdate=!0,x.renderBufferDirect(q,B,Y,G,E,fe),G.side=xr,G.needsUpdate=!0,x.renderBufferDirect(q,B,Y,G,E,fe),G.side=Vi):x.renderBufferDirect(q,B,Y,G,E,fe),E.onAfterRender(x,B,q,Y,G,fe)}function vt(E,B,q){B.isScene!==!0&&(B=Ue);const Y=v.get(E),G=M.state.lights,fe=M.state.shadowsArray,Se=G.state.version,me=be.getParameters(E,G.state,fe,B,q),xe=be.getProgramCacheKey(me);let Ne=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?ee:j).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Ie),Ne=new Map,Y.programs=Ne);let We=Ne.get(xe);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===Se)return Ln(E,me),We}else me.uniforms=be.getUniforms(E),E.onBeforeCompile(me,x),We=be.acquireProgram(me,xe),Ne.set(xe,We),Y.uniforms=me.uniforms;const Ve=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=Re.uniform),Ln(E,me),Y.needsLights=Bt(E),Y.lightsStateVersion=Se,Y.needsLights&&(Ve.ambientLightColor.value=G.state.ambient,Ve.lightProbe.value=G.state.probe,Ve.directionalLights.value=G.state.directional,Ve.directionalLightShadows.value=G.state.directionalShadow,Ve.spotLights.value=G.state.spot,Ve.spotLightShadows.value=G.state.spotShadow,Ve.rectAreaLights.value=G.state.rectArea,Ve.ltc_1.value=G.state.rectAreaLTC1,Ve.ltc_2.value=G.state.rectAreaLTC2,Ve.pointLights.value=G.state.point,Ve.pointLightShadows.value=G.state.pointShadow,Ve.hemisphereLights.value=G.state.hemi,Ve.directionalShadowMap.value=G.state.directionalShadowMap,Ve.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ve.spotShadowMap.value=G.state.spotShadowMap,Ve.spotLightMatrix.value=G.state.spotLightMatrix,Ve.spotLightMap.value=G.state.spotLightMap,Ve.pointShadowMap.value=G.state.pointShadowMap,Ve.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=We,Y.uniformsList=null,We}function un(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Ul.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ln(E,B){const q=v.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Yt(E,B,q,Y,G){B.isScene!==!0&&(B=Ue),U.resetTextureUnits();const fe=B.fog,Se=Y.isMeshStandardMaterial?B.environment:null,me=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Gn,xe=(Y.isMeshStandardMaterial?ee:j).get(Y.envMap||Se),Ne=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,yt=!!q.morphAttributes.color;let It=Ti;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(It=x.toneMapping);const Ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=Ft!==void 0?Ft.length:0,He=v.get(Y),St=M.state.lights;if(Ae===!0&&(ze===!0||E!==X)){const tn=E===X&&Y.id===H;Re.setState(Y,E,tn)}let lt=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==St.state.version||He.outputColorSpace!==me||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==xe||Y.fog===!0&&He.fog!==fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Re.numPlanes||He.numIntersection!==Re.numIntersection)||He.vertexAlphas!==Ne||He.vertexTangents!==We||He.morphTargets!==Ve||He.morphNormals!==nt||He.morphColors!==yt||He.toneMapping!==It||He.morphTargetsCount!==bt)&&(lt=!0):(lt=!0,He.__version=Y.version);let gn=He.currentProgram;lt===!0&&(gn=vt(Y,B,G));let Tr=!1,vn=!1,br=!1;const Rt=gn.getUniforms(),Sn=He.uniforms;if(ge.useProgram(gn.program)&&(Tr=!0,vn=!0,br=!0),Y.id!==H&&(H=Y.id,vn=!0),Tr||X!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Rt.setValue(N,"projectionMatrix",E.projectionMatrix),Rt.setValue(N,"viewMatrix",E.matrixWorldInverse);const yn=Rt.map.cameraPosition;yn!==void 0&&yn.setValue(N,Ce.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&Rt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Rt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,vn=!0,br=!0)}if(He.needsLights&&(St.state.directionalShadowMap.length>0&&Rt.setValue(N,"directionalShadowMap",St.state.directionalShadowMap,U),St.state.spotShadowMap.length>0&&Rt.setValue(N,"spotShadowMap",St.state.spotShadowMap,U),St.state.pointShadowMap.length>0&&Rt.setValue(N,"pointShadowMap",St.state.pointShadowMap,U)),G.isSkinnedMesh){Rt.setOptional(N,G,"bindMatrix"),Rt.setOptional(N,G,"bindMatrixInverse");const tn=G.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Rt.setValue(N,"boneTexture",tn.boneTexture,U))}G.isBatchedMesh&&(Rt.setOptional(N,G,"batchingTexture"),Rt.setValue(N,"batchingTexture",G._matricesTexture,U),Rt.setOptional(N,G,"batchingIdTexture"),Rt.setValue(N,"batchingIdTexture",G._indirectTexture,U),Rt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Rt.setValue(N,"batchingColorTexture",G._colorsTexture,U));const Mn=q.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&pe.update(G,q,gn),(vn||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Rt.setValue(N,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Sn.envMap.value=xe,Sn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Sn.envMapIntensity.value=B.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=CT()),vn&&(Rt.setValue(N,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Zt(Sn,br),fe&&Y.fog===!0&&Te.refreshFogUniforms(Sn,fe),Te.refreshMaterialUniforms(Sn,Y,De,Ee,M.state.transmissionRenderTarget[E.id]),Ul.upload(N,un(He),Sn,U)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ul.upload(N,un(He),Sn,U),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Rt.setValue(N,"center",G.center),Rt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Rt.setValue(N,"normalMatrix",G.normalMatrix),Rt.setValue(N,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const tn=Y.uniformsGroups;for(let yn=0,Cs=tn.length;yn<Cs;yn++){const nr=tn[yn];ne.update(nr,gn),ne.bind(nr,gn)}}return gn}function Zt(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Bt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,B,q){const Y=v.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=B,v.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const q=v.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const di=N.createFramebuffer();this.setRenderTarget=function(E,B=0,q=0){F=E,D=B,I=q;let Y=null,G=!1,fe=!1;if(E){const me=v.get(E);if(me.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),z.copy(E.viewport),O.copy(E.scissor),K=E.scissorTest,ge.viewport(z),ge.scissor(O),ge.setScissorTest(K),H=-1;return}else if(me.__webglFramebuffer===void 0)U.setupRenderTarget(E);else if(me.__hasExternalTextures)U.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(me.__boundDepthTexture!==We){if(We!==null&&v.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const Ne=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?Y=Ne[B][q]:Y=Ne[B],G=!0):E.samples>0&&U.useMultisampledRTT(E)===!1?Y=v.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[q]:Y=Ne,z.copy(E.viewport),O.copy(E.scissor),K=E.scissorTest}else z.copy(Q).multiplyScalar(De).floor(),O.copy(te).multiplyScalar(De).floor(),K=de;if(q!==0&&(Y=di),ge.bindFramebuffer(N.FRAMEBUFFER,Y)&&ge.drawBuffers(E,Y),ge.viewport(z),ge.scissor(O),ge.setScissorTest(K),G){const me=v.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,q)}else if(fe){const me=B;for(let xe=0;xe<E.textures.length;xe++){const Ne=v.get(E.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,Ne.__webglTexture,q,me)}}else if(E!==null&&q!==0){const me=v.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,q)}H=-1},this.readRenderTargetPixels=function(E,B,q,Y,G,fe,Se,me=0){if(!(E&&E.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se]),xe){ge.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Ne=E.textures[me],We=Ne.format,Ve=Ne.type;if(!Xe.textureFormatReadable(We)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ve)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-G&&(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),N.readPixels(B,q,Y,G,ie.convert(We),ie.convert(Ve),fe))}finally{const Ne=F!==null?v.get(F).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,Y,G,fe,Se,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se]),xe)if(B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-G){ge.bindFramebuffer(N.FRAMEBUFFER,xe);const Ne=E.textures[me],We=Ne.format,Ve=Ne.type;if(!Xe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),N.readPixels(B,q,Y,G,ie.convert(We),ie.convert(Ve),0);const yt=F!==null?v.get(F).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,yt);const It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await i0(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.deleteBuffer(nt),N.deleteSync(It),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){const Y=Math.pow(2,-q),G=Math.floor(E.image.width*Y),fe=Math.floor(E.image.height*Y),Se=B!==null?B.x:0,me=B!==null?B.y:0;U.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Se,me,G,fe),ge.unbindTexture()};const Ui=N.createFramebuffer(),qt=N.createFramebuffer();this.copyTextureToTexture=function(E,B,q=null,Y=null,G=0,fe=null){fe===null&&(G!==0?(Ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=G,G=0):fe=0);let Se,me,xe,Ne,We,Ve,nt,yt,It;const Ft=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(q!==null)Se=q.max.x-q.min.x,me=q.max.y-q.min.y,xe=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,We=q.min.y,Ve=q.isBox3?q.min.z:0;else{const Mn=Math.pow(2,-G);Se=Math.floor(Ft.width*Mn),me=Math.floor(Ft.height*Mn),E.isDataArrayTexture?xe=Ft.depth:E.isData3DTexture?xe=Math.floor(Ft.depth*Mn):xe=1,Ne=0,We=0,Ve=0}Y!==null?(nt=Y.x,yt=Y.y,It=Y.z):(nt=0,yt=0,It=0);const bt=ie.convert(B.format),He=ie.convert(B.type);let St;B.isData3DTexture?(U.setTexture3D(B,0),St=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),St=N.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const lt=N.getParameter(N.UNPACK_ROW_LENGTH),gn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tr=N.getParameter(N.UNPACK_SKIP_PIXELS),vn=N.getParameter(N.UNPACK_SKIP_ROWS),br=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const Rt=E.isDataArrayTexture||E.isData3DTexture,Sn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Mn=v.get(E),tn=v.get(B),yn=v.get(Mn.__renderTarget),Cs=v.get(tn.__renderTarget);ge.bindFramebuffer(N.READ_FRAMEBUFFER,yn.__webglFramebuffer),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let nr=0;nr<xe;nr++)Rt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(E).__webglTexture,G,Ve+nr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,v.get(B).__webglTexture,fe,It+nr)),N.blitFramebuffer(Ne,We,Se,me,nt,yt,Se,me,N.DEPTH_BUFFER_BIT,N.NEAREST);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||v.has(E)){const Mn=v.get(E),tn=v.get(B);ge.bindFramebuffer(N.READ_FRAMEBUFFER,Ui),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,qt);for(let yn=0;yn<xe;yn++)Rt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mn.__webglTexture,G,Ve+yn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mn.__webglTexture,G),Sn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,tn.__webglTexture,fe,It+yn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,tn.__webglTexture,fe),G!==0?N.blitFramebuffer(Ne,We,Se,me,nt,yt,Se,me,N.COLOR_BUFFER_BIT,N.NEAREST):Sn?N.copyTexSubImage3D(St,fe,nt,yt,It+yn,Ne,We,Se,me):N.copyTexSubImage2D(St,fe,nt,yt,Ne,We,Se,me);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Sn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(St,fe,nt,yt,It,Se,me,xe,bt,He,Ft.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(St,fe,nt,yt,It,Se,me,xe,bt,Ft.data):N.texSubImage3D(St,fe,nt,yt,It,Se,me,xe,bt,He,Ft):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,nt,yt,Se,me,bt,He,Ft.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,nt,yt,Ft.width,Ft.height,bt,Ft.data):N.texSubImage2D(N.TEXTURE_2D,fe,nt,yt,Se,me,bt,He,Ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tr),N.pixelStorei(N.UNPACK_SKIP_ROWS,vn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,br),fe===0&&B.generateMipmaps&&N.generateMipmap(St),ge.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&U.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?U.setTextureCube(E,0):E.isData3DTexture?U.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?U.setTexture2DArray(E,0):U.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){D=0,I=0,F=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}function sp(r,e){if(e===Y_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===hh||e===xm){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===hh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class op extends Lo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new KT(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ca.extractUrlBase(e);o=ca.resolveURL(c,this.path)}else o=ca.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hm){try{o[dt.KHR_BINARY_GLTF]=new jT(e)}catch(h){i&&i(h);return}s=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case dt.KHR_MATERIALS_UNLIT:o[h]=new DT;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[h]=new $T(s,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[h]=new ZT;break;case dt.KHR_MESH_QUANTIZATION:o[h]=new JT;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function PT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LT{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Gn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mx(u),c.distance=h;break;case"spot":c=new vx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class DT{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return ds}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,sn))}return Promise.all(i)}}class IT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class NT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _t(a,a)}return Promise.all(s)}}class UT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class FT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class OT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,sn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class BT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class kT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(a[0],a[1],a[2],Gn),Promise.all(s)}}class zT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class VT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(a[0],a[1],a[2],Gn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,sn)),Promise.all(s)}}class HT{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class GT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class WT{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class XT{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class YT{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class qT{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class KT{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==gi.TRIANGLES&&c.mode!==gi.TRIANGLE_STRIP&&c.mode!==gi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new rt,m=new V,p=new jr,y=new V(1,1,1),b=new K0(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),b.setMatrixAt(S,_.compose(m,p,y));for(const S in l)if(S==="_COLOR_0"){const M=l[S];b.instanceColor=new dh(M.array,M.itemSize,M.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Ht.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Hm="glTF",Wo=12,ap={JSON:1313821514,BIN:5130562};class jT{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Wo,s=new DataView(e,Wo);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===ap.JSON){const c=new Uint8Array(e,Wo+o,a);this.content=n.decode(c)}else if(l===ap.BIN){const c=Wo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $T{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=_h[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=_h[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ro[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Gn,f)})})}}class ZT{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JT{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Gm extends Va{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,y=1-m,b=p-f+h;for(let S=0;S!==a;S++){const M=o[_+S+a],w=o[_+S+l]*u,A=o[g+S+a],P=o[g+S]*u;s[S]=y*M+b*w+m*A+p*P}return s}}const QT=new jr;class eb extends Gm{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return QT.fromArray(s).normalize().toArray(s),s}}const gi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lp={9728:on,9729:an,9984:hm,9985:Pl,9986:$o,9987:fr},cp={33071:Gi,33648:Xl,10497:po},nu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tb={CUBICSPLINE:void 0,LINEAR:wa,STEP:Ea},iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new uf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xr})),r.DefaultMaterial}function is(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ib(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function rb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sb(r){let e;const t=r.extensions&&r.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ru(t.attributes):e=r.indices+":"+ru(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ru(r.targets[n]);return e}function ru(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function xh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ob(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ab=new rt;class lb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _x(this.options.manager):this.textureLoader=new Tx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return is(s,a,i),Oi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ca.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=nu[i.type],a=ro[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Hn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=nu[i.type],c=ro[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(y);b||(_=new c(a,p*d,i.count*d/u),b=new G0(_,d/u),t.cache.add(y,b)),m=new sf(b,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Hn(_,l,g);if(i.sparse!==void 0){const p=nu.SCALAR,y=ro[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,M=new y(o[1],b,i.sparse.count*p),w=new c(o[2],S,i.sparse.count*l);a!==null&&(m=new Hn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=M.length;A<P;A++){const x=M[A];if(m.setX(x,w[A*l]),l>=2&&m.setY(x,w[A*l+1]),l>=3&&m.setZ(x,w[A*l+2]),l>=4&&m.setW(x,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=lp[f.magFilter]||an,u.minFilter=lp[f.minFilter]||fr,u.wrapS=cp[f.wrapS]||po,u.wrapT=cp[f.wrapT]||po,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==on&&u.minFilter!==an,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new pn(_);m.needsUpdate=!0,f(m)}),t.load(ca.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Oi(h,o),h.userData.mimeType=o.mimeType||ob(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[dt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Dm,Ki.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Lm,Ki.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return uf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){const h=i[dt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Gn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,sn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Vi);const u=s.alphaMode||iu.OPAQUE;if(u===iu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===iu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ds&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new _t(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ds&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ds){const h=s.emissiveFactor;a.emissive=new Je().setRGB(h[0],h[1],h[2],Gn)}return s.emissiveTexture!==void 0&&o!==ds&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,sn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Oi(h,s),t.associations.set(h,{materials:e}),s.extensions&&is(i,h,s),h})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return up(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=sb(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=up(new Ei,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?nb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const y=c[d];if(m.mode===gi.TRIANGLES||m.mode===gi.TRIANGLE_STRIP||m.mode===gi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new X0(_,y):new ui(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gi.TRIANGLE_STRIP?p.geometry=sp(p.geometry,xm):m.mode===gi.TRIANGLE_FAN&&(p.geometry=sp(p.geometry,hh));else if(m.mode===gi.LINES)p=new J0(_,y);else if(m.mode===gi.LINE_STRIP)p=new cf(_,y);else if(m.mode===gi.LINE_LOOP)p=new Q0(_,y);else if(m.mode===gi.POINTS)p=new ex(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&rb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Oi(p,s),m.extensions&&is(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&is(i,h[0],s),h[0];const f=new ps;s.extensions&&is(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(Ir.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new dc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new rt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new af(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let b=0,S=f.length;b<S;b++){const M=f[b],w=d[b],A=g[b],P=_[b],x=m[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const T=n._createAnimationTracks(M,w,A,P,x);if(T)for(let D=0;D<T.length;D++)p.push(T[D])}const y=new ux(s,void 0,p);return Oi(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ab)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Pm:c.length>1?u=new ps:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Oi(u,s),s.extensions&&is(n,u,s),s.matrix!==void 0){const h=new rt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ps;n.name&&(s.name=i.createUniqueName(n.name)),Oi(s,n),n.extensions&&is(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ki||f instanceof pn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Lr[s.path]===Lr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Lr[s.path]){case Lr.weights:c=xo;break;case Lr.rotation:c=vo;break;case Lr.translation:case Lr.scale:c=So;break;default:n.itemSize===1?c=xo:c=So;break}const u=i.interpolation!==void 0?tb[i.interpolation]:wa,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Lr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xh(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vo?eb:Gm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cb(r,e,t){const n=e.attributes,i=new kn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const u=xh(ro[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new V,l=new V;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=xh(ro[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new er;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function up(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=_h[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return mt.workingColorSpace!==Gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),Oi(r,e),cb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ib(r,e.targets,t):r})}function cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mo={duration:.5,overwrite:!1,delay:0},pf,xn,Ot,Mi=1e8,Lt=1/Mi,vh=Math.PI*2,ub=vh/4,hb=0,Xm=Math.sqrt,fb=Math.cos,db=Math.sin,mn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Mr=function(e){return typeof e=="number"},mf=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},qn=function(e){return e!==!1},gf=function(){return typeof window<"u"},gl=function(e){return Xt(e)||mn(e)},Ym=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,pb=/random\([^)]+\)/g,mb=/,\s*/g,hp=/(?:-?\.?\d|\.)+/gi,qm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Km=/[+-]=-?[.\d]+/,gb=/[^,'"\[\]\s]+/gi,_b=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Bi,Sh,_f,hi={},Zl={},jm,$m=function(e){return(Zl=yo(e,hi))&&Zn},xf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pa=function(e,t){return!t&&console.warn(e)},Zm=function(e,t){return e&&(hi[e]=t)&&Zl&&(Zl[e]=t)||hi},La=function(){return 0},xb={suppressEvents:!0,isStart:!0,kill:!1},Fl={suppressEvents:!0,kill:!1},vb={suppressEvents:!0},vf={},Hr=[],Mh={},Jm,ni={},ou={},fp=30,Ol=[],Sf="",Mf=function(e){var t=e[0],n,i;if(Qi(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ol.length;i--&&!Ol[i].targetTest(t););n=Ol[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new yg(e[i],n)))||e.splice(i,1);return e},_s=function(e){return e._gsap||Mf(yi(e))[0]._gsap},Qm=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():mf(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},so=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Sb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Jl=function(){var e=Hr.length,t=Hr.slice(0),n,i;for(Mh={},Hr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yf=function(e){return!!(e._initted||e._startAt||e.add)},eg=function(e,t,n,i){Hr.length&&!xn&&Jl(),e.render(t,n,!!(xn&&t<0&&yf(e))),Hr.length&&!xn&&Jl()},tg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gb).length<2?t:mn(e)?e.trim():e},ng=function(e){return e},fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Mb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},yo=function(e,t){for(var n in t)e[n]=t[n];return e},dp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ql=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ua=function(e){var t=e.parent||zt,n=e.keyframes?Mb(Pn(e.keyframes)):fi;if(qn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ig=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},gc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Tb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yh=function(e,t,n,i){return e._startAt&&(xn?e._startAt.revert(Fl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},bb=function r(e){return!e||e._ts&&r(e.parent)},pp=function(e){return e._repeat?To(e._tTime,e=e.duration()+e._rDelay)*e:0},To=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},ec=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_c=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},xc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_c(e),n._dirty||xs(n,e)),e},rg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ec(e.rawTime(),t),(!t._dur||Ha(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},Hi=function(e,t,n,i){return t.parent&&Xr(t),t._start=kt((Mr(n)?n:n||e!==zt?mi(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ig(e,t,"_first","_last",e._sort?"_start":0),Th(t)||(e._recent=t),i||rg(e,t),e._ts<0&&xc(e,e._tTime),e},sg=function(e,t){return(hi.ScrollTrigger||xf("scrollTrigger",t))&&hi.ScrollTrigger.create(t,e)},og=function(e,t,n,i,s){if(bf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jm!==si.frame)return Hr.push(e),e._lazy=[s,i],1},Eb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Th=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wb=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Eb(e)&&!(!e._initted&&Th(e))||(e._ts<0||e._dp._ts<0)&&!Th(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ha(0,e._tDur,t),u=To(l,a),e._yoyo&&u&1&&(o=1-o),u!==To(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&og(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&yh(e,t,n,!0),e._onUpdate&&!n&&ai(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xr(e,1),!n&&!xn&&(ai(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ab=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bo=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&xc(e,e._tTime=e._tDur*a),e.parent&&_c(e),n||xs(e.parent,e),e},mp=function(e){return e instanceof zn?xs(e):bo(e,e._dur)},Rb={_start:0,endTime:La,totalDuration:La},mi=function r(e,t,n){var i=e.labels,s=e._recent||Rb,o=e.duration()>=Mi?s.endTime(!1):e._dur,a,l,c;return mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ha=function(e,t,n){var i=Mr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;o.immediateRender=qn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new en(t[0],o,t[s+1])},$r=function(e,t){return e||e===0?t(e):t},Ha=function(e,t,n){return n<e?e:n>t?t:n},Rn=function(e,t){return!mn(e)||!(t=_b.exec(e))?"":t[1]},Cb=function(e,t,n){return $r(n,function(i){return Ha(e,t,i)})},bh=[].slice,ag=function(e,t){return e&&Qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==Bi},Pb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return mn(i)&&!t||ag(i,1)?(s=n).push.apply(s,yi(i)):n.push(i)})||n},yi=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):mn(e)&&!n&&(Sh||!Eo())?bh.call((t||_f).querySelectorAll(e),0):Pn(e)?Pb(e,n):ag(e)?bh.call(e,0):e?[e]:[]},Eh=function(e){return e=yi(e)[0]||Pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yi(t,n.querySelectorAll?n:n===e?Pa("Invalid scope")||_f.createElement("div"):e)}},lg=function(e){return e.sort(function(){return .5-Math.random()})},cg=function(e){if(Xt(e))return e;var t=Qi(e)?e:{each:e},n=vs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return mn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,y,b,S,M,w,A,P,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Mi])[1],!x){for(A=-Mi;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:i%x,y=x===Mi?0:l?_*h/x-.5:i/x|0,A=0,P=Mi,w=0;w<_;w++)b=w%x-p,S=y-(w/x|0),m[w]=M=c?Math.abs(c==="y"?S:b):Xm(b*b+S*S),M>A&&(A=M),M<P&&(P=M);i==="random"&&lg(m),m.max=A-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Rn(t.amount||t.each)||0,n=n&&_<0?vg(n):n}return _=(m[f]-m.min)/m.max||0,kt(m.b+(n?n(_):_)*m.v)+m.u}},wh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Mr(n)?0:Rn(n))}},ug=function(e,t){var n=Pn(e),i,s;return!n&&Qi(e)&&(i=n=e.radius||Mi,e.values?(e=yi(e.values),(s=!Mr(e[0]))&&(i*=i)):e=wh(e.increment)),$r(t,n?Xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Mi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Mr(o)?u:u+Rn(o)}:wh(e))},hg=function(e,t,n,i){return $r(Pn(e)?!t:n===!0?!!(n=0):!i,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Lb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Db=function(e,t){return function(n){return e(parseFloat(n))+(t||Rn(n))}},Ib=function(e,t,n){return dg(e,t,0,1,n)},fg=function(e,t,n){return $r(n,function(i){return e[~~t(i)]})},Nb=function r(e,t,n){var i=t-e;return Pn(e)?fg(e,r(0,e.length),t):$r(n,function(s){return(i+(s-e)%i)%i+e})},Ub=function r(e,t,n){var i=t-e,s=i*2;return Pn(e)?fg(e,r(0,e.length-1),t):$r(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Da=function(e){return e.replace(pb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(mb);return hg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},dg=function(e,t,n,i,s){var o=t-e,a=i-n;return $r(s,function(l){return n+((l-e)/o*a||0)})},Fb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=mn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=yo(Pn(e)?[]:{},e));if(!u){for(l in t)Tf.call(a,e,l,"get",t[l]);s=function(g){return Af(g,a)||(o?e.p:e)}}}return $r(n,s)},gp=function(e,t,n){var i=e.labels,s=Mi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ai=function(e,t,n){var i=e.vars,s=i[t],o=Ot,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Hr.length&&Jl(),a&&(Ot=a),u=l?s.apply(c,l):s.call(c),Ot=o,u},Qo=function(e){return Xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&ai(e,"onInterrupt"),e},eo,pg=[],mg=function(e){if(e)if(e=!e.name&&e.default||e,gf()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:La,render:Af,add:Tf,kill:Jb,modifier:Zb,rawVars:0},o={targetTest:0,get:0,getSetter:wf,aliases:{},register:0};if(Eo(),e!==i){if(ni[t])return;fi(i,fi(Ql(e,s),o)),yo(i.prototype,yo(s,Ql(e,o))),ni[i.prop=t]=i,e.targetTest&&(Ol.push(i),vf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zm(t,i),e.register&&e.register(Zn,i,jn)}else pg.push(e)},Pt=255,ea={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},au=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},gg=function(e,t,n){var i=e?Mr(e)?[e>>16,e>>8&Pt,e&Pt]:0:ea.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])i=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Pt,i&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(hp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=au(l+1/3,s,o),i[1]=au(l,s,o),i[2]=au(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(qm),n&&i.length<4&&(i[3]=1),i}else i=e.match(hp)||ea.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Pt,o=i[1]/Pt,a=i[2]/Pt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_g=function(e){var t=[],n=[],i=-1;return e.split(Gr).forEach(function(s){var o=s.match(Qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},_p=function(e,t,n){var i="",s=(e+i).match(Gr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=gg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=_g(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gr,"1").split(Qs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Gr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Gr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Ob=/hsl[a]?\(/,xg=function(e){var t=e.join(" "),n;if(Gr.lastIndex=0,Gr.test(t))return n=Ob.test(t),e[1]=_p(e[1],n),e[0]=_p(e[0],n,_g(e[1])),!0},Ia,si=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,y=m===!0,b,S,M,w;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,b=M-o,(b>0||y)&&(w=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=b+(b>=s?4:s-b),S=1),y||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](M,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){jm&&(!Sh&&gf()&&(Bi=Sh=window,_f=Bi.document||{},hi.gsap=Zn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(Zn.version),$m(Zl||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),pg.forEach(mg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ia=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ia=0,c=La},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var b=p?function(S,M,w,A){m(S,M,w,A),h.remove(b)}:m;return h.remove(m),a[y?"unshift":"push"](b),Eo(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Eo=function(){return!Ia&&si.wake()},gt={},Bb=/^[\d.\-M][\d.\-,\s]/,kb=/["']/g,zb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(kb,"").trim():+c,i=l.substr(a+1).trim();return t},Vb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Hb=function(e){var t=(e+"").split("("),n=gt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zb(t[1])]:Vb(e).split(",").map(tg)):gt._CE&&Bb.test(e)?gt._CE("",e):n},vg=function(e){return function(t){return 1-e(1-t)}},Sg=function r(e,t){for(var n=e._first,i;n;)n instanceof zn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vs=function(e,t){return e&&(Xt(e)?e:gt[e]||Hb(e))||t},Rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Kn(e,function(a){gt[a]=hi[a]=s,gt[o=a.toLowerCase()]=n;for(var l in s)gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=gt[a+"."+l]=s[l]}),s},Mg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/vh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*db((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Mg(a);return s=vh/s,l.config=function(c,u){return r(e,c,u)},l},cu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Mg(n);return i.config=function(s){return r(e,s)},i};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});gt.Linear.easeNone=gt.none=gt.Linear.easeIn;Rs("Elastic",lu("in"),lu("out"),lu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Rs("Circ",function(r){return-(Xm(1-r*r)-1)});Rs("Sine",function(r){return r===1?1:-fb(r*ub)+1});Rs("Back",cu("in"),cu("out"),cu());gt.SteppedEase=gt.steps=hi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Lt;return function(a){return((i*Ha(0,o,a)|0)+s)*n}}};Mo.ease=gt["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sf+=r+","+r+"Params,"});var yg=function(e,t){this.id=hb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qm,this.set=t?t.getSetter:wf},Na=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bo(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),Ia||si.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Eo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xc(this,n),!s._dp||s.parent||rg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?To(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ec(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Ha(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),_c(this),Tb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ec(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vb);var i=xn;return xn=n,yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mi(this,n),qn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qn(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Xt(n)?n:ng,l=function(){var u=i.then;i.then=null,s&&s(),Xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Qo(this)},r})();fi(Na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var zn=(function(r){Wm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qn(n.sortChildren),zt&&Hi(n.parent||zt,cr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sg(cr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ha(0,arguments,this),this},t.from=function(i,s,o){return ha(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ha(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ua(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(i,s,mi(this,o),1),this},t.call=function(i,s,o){return Hi(this,en.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new en(i,o,mi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ua(o).immediateRender=qn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ua(a).immediateRender=qn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:kt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,y,b,S,M,w,A;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,b=this._ts,p=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=kt(u%m),u===l?(_=this._repeat,f=c):(M=kt(u/m),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=To(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),w&&_&1&&(f=c-f,A=1),_!==M&&!this._lock){var P=w&&M&1,x=P===(w&&_&1);if(_<M&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:kt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Sg(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ab(this,kt(a),kt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!M&&(ai(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-Lt);break}}d=g}else{d=this._last;for(var T=i<0?i:f;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||xn&&yf(d)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=T?-Lt:Lt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Lt)._zTime=f>=a?1:-1,this._ts))return this._start=S,_c(this),this.render(i,s,o);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ai(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Mr(s)||(s=mi(this,s,i)),!(i instanceof Na)){if(Pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(mn(i))return this.addLabel(i,s);if(Xt(i))i=en.delayedCall(0,i);else return this}return this!==i?Hi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof en?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return mn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&gc(this,i),i===this._recent&&(this._recent=this._last),xs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(si.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=mi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=en.delayedCall(0,s||La,o);return a.data="isPause",this._hasPause=1,Hi(this,a,mi(this,i))},t.removePause=function(i){var s=this._first;for(i=mi(this,i);s;)s._start===i&&s.data==="isPause"&&Xr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Or!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=yi(i),l=this._first,c=Mr(s),u;l;)l instanceof en?Sb(l._targets,a)&&(c?(!Or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=mi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=en.to(o,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&bo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,fi({startAt:{time:mi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gp(this,mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gp(this,mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=kt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return xs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Mi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Hi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=kt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;bo(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(zt._ts&&(eg(zt,ec(i,zt)),Jm=si.frame),si.frame>=fp){fp+=ci.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&ci.autoSleep&&si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||si.sleep()}}},e})(Na);fi(zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gb=function(e,t,n,i,s,o,a){var l=new jn(this._pt,e,t,0,1,Rg,null,s),c=0,u=0,h,f,d,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Da(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(su)||[];h=su.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?so(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=su.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Km.test(i)||p)&&(l.e=0),this._pt=l,l},Tf=function(e,t,n,i,s,o,a,l,c,u){Xt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Xt(h)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Xt(h)?c?Kb:wg:Ef,g;if(mn(i)&&(~i.indexOf("random(")&&(i=Da(i)),i.charAt(1)==="="&&(g=so(f,i)+(Rn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ah)return!isNaN(f*i)&&i!==""?(g=new jn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?$b:Ag,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&xf(t,i),Gb.call(this,e,t,f,i,d,l||ci.stringFilter,c))},Wb=function(e,t,n,i,s){if(Xt(e)&&(e=fa(e,s,t,n,i)),!Qi(e)||e.style&&e.nodeType||Pn(e)||Ym(e))return mn(e)?fa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=fa(e[a],s,t,n,i);return o},Tg=function(e,t,n,i,s,o){var a,l,c,u;if(ni[e]&&(a=new ni[e]).init(s,a.rawVars?t[e]:Wb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new jn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==eo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Or,Ah,bf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!pf,S=e.timeline,M,w,A,P,x,T,D,I,F,H,X,z,O;if(S&&(!f||!s)&&(s="none"),e._ease=vs(s,Mo.ease),e._yEase=h?vg(vs(h===!0?s:h,Mo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(I=m[0]?_s(m[0]).harness:0,z=I&&i[I.prop],M=Ql(i,vf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Fl:xb),_._lazy=0),o){if(Xr(e._startAt=en.set(m,fi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!d)&&e._startAt.revert(Fl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),A=fi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&qn(l),immediateRender:a,stagger:0,parent:p},M),z&&(A[I.prop]=z),Xr(e._startAt=en.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(Fl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&qn(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],D=x._gsap||Mf(m)[w]._gsap,e._ptLookup[w]=H={},Mh[D.id]&&Hr.length&&Jl(),X=y===m?w:y.indexOf(x),I&&(F=new I).init(x,z||M,e,X,y)!==!1&&(e._pt=P=new jn(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(K){H[K]=P}),F.priority&&(T=1)),!I||z)for(A in M)ni[A]&&(F=Tg(A,M,e,X,x,y))?F.priority&&(T=1):H[A]=P=Tf.call(e,x,A,"get",M[A],X,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),b&&e._pt&&(Or=e,zt.killTweensOf(x,H,e.globalTime(t)),O=!e.parent,Or=0),e._pt&&l&&(Mh[D.id]=1)}T&&Cg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&S.render(Mi,!0,!0)},Xb=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ah=1,e.vars[t]="+=0",bf(e,a),Ah=0,l?Pa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=jt(n)+Rn(h.e)),h.b&&(h.b=u.s+Rn(h.b))},Yb=function(e,t){var n=e[0]?_s(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=yo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},qb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},fa=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):mn(e)&&~e.indexOf("random(")?Da(e):e},bg=Sf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Eg={};Kn(bg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Eg[r]=1});var en=(function(r){Wm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ua(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||zt,b=(Pn(n)||Ym(n)?Mr(n[0]):"length"in i)?[n]:yi(n),S,M,w,A,P,x,T,D;if(a._targets=b.length?Mf(b):Pa("GSAP target "+n+" not found. https://gsap.com",!ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||gl(c)||gl(u)){if(i=a.vars,S=a.timeline=new zn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:b}),S.kill(),S.parent=S._dp=cr(a),S._start=0,f||gl(c)||gl(u)){if(A=b.length,T=f&&cg(f),Qi(f))for(P in f)~bg.indexOf(P)&&(D||(D={}),D[P]=f[P]);for(M=0;M<A;M++)w=Ql(i,Eg),w.stagger=0,p&&(w.yoyoEase=p),D&&yo(w,D),x=b[M],w.duration=+fa(c,cr(a),M,x,b),w.delay=(+fa(u,cr(a),M,x,b)||0)-a._delay,!f&&A===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(x,w,T?T(M,x,b):0),S._ease=gt.none;S.duration()?c=u=0:a.timeline=0}else if(g){ua(fi(S.vars.defaults,{ease:"none"})),S._ease=vs(g.ease||i.ease||"none");var I=0,F,H,X;if(Pn(g))g.forEach(function(z){return S.to(b,z,">")}),S.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||qb(P,g[P],w,g.easeEach);for(P in w)for(F=w[P].sort(function(z,O){return z.t-O.t}),I=0,M=0;M<F.length;M++)H=F[M],X={ease:H.e,duration:(H.t-(M?F[M-1].t:0))/100*c},X[P]=H.v,S.to(b,X,I),I+=X.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!pf&&(Or=cr(a),zt.killTweensOf(b),Or=0),Hi(y,cr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===kt(y._time)&&qn(h)&&bb(cr(a))&&y.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-u)||0)),m&&sg(cr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Lt&&!u?l:i<Lt?0:i,f,d,g,_,m,p,y,b,S;if(!c)wb(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=kt(h%_),h===l?(g=this._repeat,f=c):(m=kt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=c-f),m=To(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(b&&this._yEase&&Sg(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(og(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&h&&!s&&!m&&(ai(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&yh(this,i,s,o),ai(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&yh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(ai(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ia||si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||bf(this,c),u=this._ease(c/this._dur),Xb(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(xc(this,0),this.parent||ig(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Or&&Or.vars.overwrite!==!0)._first||Qo(this),this.parent&&o!==this.timeline.totalDuration()&&bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&yb(a,l))return s==="all"&&(this._pt=0),Qo(this);for(h=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},Kn(s,function(y){return _[y]=1}),s=_),s=Yb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&gc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Qo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ha(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ha(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return zt.killTweensOf(i,s,o)},e})(Na);fi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(r){en[r]=function(){var e=new zn,t=bh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ef=function(e,t,n){return e[t]=n},wg=function(e,t,n){return e[t](n)},Kb=function(e,t,n,i){return e[t](i.fp,n)},jb=function(e,t,n){return e.setAttribute(t,n)},wf=function(e,t){return Xt(e[t])?wg:mf(e[t])&&e.setAttribute?jb:Ef},Ag=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$b=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Af=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Zb=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Jb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?gc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Qb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Cg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},jn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ag,this.d=l||this,this.set=c||Ef,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Qb,this.m=n,this.mt=s,this.tween=i},r})();Kn(Sf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return vf[r]=1});hi.TweenMax=hi.TweenLite=en;hi.TimelineLite=hi.TimelineMax=zn;zt=new zn({sortChildren:!1,defaults:Mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ci.stringFilter=xg;var Ss=[],Bl={},eE=[],xp=0,tE=0,uu=function(e){return(Bl[e]||eE).map(function(t){return t()})},Rh=function(){var e=Date.now(),t=[];e-xp>2&&(uu("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Bi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),uu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xp=e,uu("matchMedia"))},Pg=(function(){function r(t,n){this.selector=n&&Eh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=tE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var o=this,a=function(){var c=Ot,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Eh(s)),Ot=o,h=i.apply(o,arguments),Xt(h)&&o._r.push(h),Ot=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Xt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof zn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ss.length;o--;)Ss[o].id===this.id&&Ss.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),nE=(function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Qi(n)||(n={matches:n});var o=new Pg(0,s||this.scope),a=o.conditions={},l,c,u;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Bi.matchMedia(n[c]),l&&(Ss.indexOf(o)<0&&Ss.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rh):l.addEventListener("change",Rh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),tc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return mg(i)})},timeline:function(e){return new zn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){mn(e)&&(e=yi(e)[0]);var s=_s(e||{}).get,o=n?ng:tg;return n==="native"&&(n=""),e&&(t?o((ni[t]&&ni[t].get||s)(e,t,n,i)):function(a,l,c){return o((ni[a]&&ni[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=yi(e),e.length>1){var i=e.map(function(u){return Zn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=ni[t],a=_s(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;eo._pt=0,h.init(e,n?u+n:u,eo,0,[e]),h.render(1,h),eo._pt&&Af(1,eo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Zn.to(e,fi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vs(e.ease,Mo.ease)),dp(Mo,e||{})},config:function(e){return dp(ci,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ni[a]&&!hi[a]&&Pa(t+" effect requires "+a+" plugin.")}),ou[t]=function(a,l,c){return n(yi(a),fi(l||{},s),c)},o&&(zn.prototype[t]=function(a,l,c){return this.add(ou[t](a,Qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){gt[e]=vs(t)},parseEase:function(e,t){return arguments.length?vs(e,t):gt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zn(e),i,s;for(n.smoothChildTiming=qn(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=s;return Hi(zt,n,0),n},context:function(e,t){return e?new Pg(e,t):Ot},matchMedia:function(e){return new nE(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Rh()},addEventListener:function(e,t){var n=Bl[e]||(Bl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Nb,wrapYoyo:Ub,distribute:cg,random:hg,snap:ug,normalize:Ib,getUnit:Rn,clamp:Cb,splitColor:gg,toArray:yi,selector:Eh,mapRange:dg,pipe:Lb,unitize:Db,interpolate:Fb,shuffle:lg},install:$m,effects:ou,ticker:si,updateRoot:zn.updateRoot,plugins:ni,globalTimeline:zt,core:{PropTween:jn,globals:Zm,Tween:en,Timeline:zn,Animation:Na,getCache:_s,_removeLinkedListItem:gc,reverting:function(){return xn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return pf=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return tc[r]=en[r]});si.add(zn.updateRoot);eo=tc.to({},{duration:0});var iE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=iE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},hu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(mn(s)&&(l={},Kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}rE(a,s)}}}},Zn=tc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)xn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},hu("roundProps",wh),hu("modifiers"),hu("snap",ug))||tc;en.version=zn.version=Zn.version="3.14.2";jm=1;gf()&&Eo();gt.Power0;gt.Power1;gt.Power2;gt.Power3;gt.Power4;gt.Linear;gt.Quad;gt.Cubic;gt.Quart;gt.Quint;gt.Strong;gt.Elastic;gt.Back;gt.SteppedEase;gt.Bounce;gt.Sine;gt.Expo;gt.Circ;var vp,Br,oo,Rf,ms,Sp,Cf,sE=function(){return typeof window<"u"},yr={},as=180/Math.PI,ao=Math.PI/180,Ys=Math.atan2,Mp=1e8,Pf=/([A-Z])/g,oE=/(left|right|width|margin|padding|x)/i,aE=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Lg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fE=function(e,t,n){return e.style[t]=n},dE=function(e,t,n){return e.style.setProperty(t,n)},pE=function(e,t,n){return e._gsap[t]=n},mE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},gE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},_E=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Vt="transform",$n=Vt+"Origin",xE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ur(i,a)}):this.tfm[e]=o.x?o[e]:ur(i,e),e===$n&&(this.tfm.zOrigin=o.zOrigin);else return Xi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},Ig=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cf(),(!s||!s.isStart)&&!n[Vt]&&(Ig(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ng=function(e,t){var n={target:e,props:[],revert:vE,save:xE};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ug,Ph=function(e,t){var n=Br.createElementNS?Br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Br.createElement(e);return n&&n.style?n:Br.createElement(e)},li=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,wo(t)||t,1)||""},yp="O,Moz,ms,Ms,Webkit".split(","),wo=function(e,t,n){var i=t||ms,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?yp[o]:"")+e},Lh=function(){sE()&&window.document&&(vp=window,Br=vp.document,oo=Br.documentElement,ms=Ph("div")||{style:{}},Ph("div"),Vt=wo(Vt),$n=Vt+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ug=!!wo("perspective"),Cf=Zn.core.reverting,Rf=1)},Tp=function(e){var t=e.ownerSVGElement,n=Ph("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),oo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),oo.removeChild(n),s},bp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Fg=function(e){var t,n;try{t=e.getBBox()}catch{t=Tp(e),n=1}return t&&(t.width||t.height)||n||(t=Tp(e)),t&&!t.width&&!t.x&&!t.y?{x:+bp(e,["x","cx","x1"])||0,y:+bp(e,["y","cy","y1"])||0,width:0,height:0}:t},Og=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Fg(e))},Yr=function(e,t){if(t){var n=e.style,i;t in yr&&t!==$n&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Pf,"-$1").toLowerCase())):n.removeAttribute(t)}},kr=function(e,t,n,i,s,o){var a=new jn(e._pt,t,n,0,1,o?Dg:Lg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Ep={deg:1,rad:1,turn:1},SE={grid:1,flex:1},qr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ms.style,l=oE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Ep[i]||Ep[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Og(e),(d||o==="%")&&(yr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],jt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Br||!_.appendChild)&&(_=Br.body),m=_._gsap,m&&d&&m.width&&l&&m.time===si.time&&!m.uncache)return jt(s/m.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,g=e[u],y?e.style[t]=y:Yr(e,t)}else(d||o==="%")&&!SE[li(_,"display")]&&(a.position=li(e,"position")),_===e&&(a.position="static"),_.appendChild(ms),g=ms[u],_.removeChild(ms),a.position="absolute";return l&&d&&(m=_s(_),m.time=si.time,m.width=_[u]),jt(f?g*s/h:g&&s?h/g*s:0)},ur=function(e,t,n,i){var s;return Rf||Lh(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(s=Fa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ic(li(e,$n))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=nc[t]&&nc[t](e,t,n)||li(e,t)||Qm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qr(e,t,s,n)+n:s},ME=function(e,t,n,i){if(!n||n==="none"){var s=wo(t,e,1),o=s&&li(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=li(e,"borderTopColor"))}var a=new jn(this._pt,e.style,t,0,1,Rg),l=0,c=0,u,h,f,d,g,_,m,p,y,b,S,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=li(e,t)||i,_?e.style[t]=_:Yr(e,t)),u=[n,i],xg(u),n=u[0],i=u[1],f=n.match(Qs)||[],M=i.match(Qs)||[],M.length){for(;h=Qs.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=so(d,m)+S),p=parseFloat(m),b=m.substr((p+"").length),l=Qs.lastIndex-b.length,b||(b=b||ci.units[t]||S,l===i.length&&(i+=b,a.e+=b)),S!==b&&(d=qr(e,t,_,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Dg:Lg;return Km.test(i)&&(a.e=0),this._pt=a,a},wp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=wp[n]||n,t[1]=wp[i]||i,t.join(" ")},TE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],yr[a]&&(l=1,a=a==="transformOrigin"?$n:Vt),Yr(n,a);l&&(Yr(n,Vt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Fa(n,1),o.uncache=1,Ig(i)))}},nc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new jn(e._pt,t,n,0,0,TE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ua=[1,0,0,1,0,0],Bg={},kg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ap=function(e){var t=li(e,Vt);return kg(t)?Ua:t.substr(7).match(qm).map(jt)},Lf=function(e,t){var n=e._gsap||_s(e),i=e.style,s=Ap(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ua:s):(s===Ua&&!e.offsetParent&&e!==oo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,oo.appendChild(e)),s=Ap(e),l?i.display=l:Yr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):oo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Lf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],b=t.split(" "),S=parseFloat(b[0])||0,M=parseFloat(b[1])||0,w,A,P,x;n?l!==Ua&&(A=d*m-g*_)&&(P=S*(m/A)+M*(-_/A)+(_*y-m*p)/A,x=S*(-g/A)+M*(d/A)-(d*y-g*p)/A,S=P,M=x):(w=Fg(e),S=w.x+(~b[0].indexOf("%")?S/100*w.width:S),M=w.y+(~(b[1]||b[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&a.smooth?(p=S-c,y=M-u,a.xOffset=h+(p*d+y*_)-p,a.yOffset=f+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[$n]="0px 0px",o&&(kr(o,a,"xOrigin",c,S),kr(o,a,"yOrigin",u,M),kr(o,a,"xOffset",h,a.xOffset),kr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Fa=function(e,t){var n=e._gsap||new yg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=li(e,$n)||"0",u,h,f,d,g,_,m,p,y,b,S,M,w,A,P,x,T,D,I,F,H,X,z,O,K,re,C,se,Ee,De,ke,qe;return u=h=f=_=m=p=y=b=S=0,d=g=1,n.svg=!!(e.getCTM&&Og(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),A=Lf(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Dh(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,w=n.yOrigin||0,A!==Ua&&(D=A[0],I=A[1],F=A[2],H=A[3],u=X=A[4],h=z=A[5],A.length===6?(d=Math.sqrt(D*D+I*I),g=Math.sqrt(H*H+F*F),_=D||I?Ys(I,D)*as:0,y=F||H?Ys(F,H)*as+_:0,y&&(g*=Math.abs(Math.cos(y*ao))),n.svg&&(u-=M-(M*D+w*F),h-=w-(M*I+w*H))):(qe=A[6],De=A[7],C=A[8],se=A[9],Ee=A[10],ke=A[11],u=A[12],h=A[13],f=A[14],P=Ys(qe,Ee),m=P*as,P&&(x=Math.cos(-P),T=Math.sin(-P),O=X*x+C*T,K=z*x+se*T,re=qe*x+Ee*T,C=X*-T+C*x,se=z*-T+se*x,Ee=qe*-T+Ee*x,ke=De*-T+ke*x,X=O,z=K,qe=re),P=Ys(-F,Ee),p=P*as,P&&(x=Math.cos(-P),T=Math.sin(-P),O=D*x-C*T,K=I*x-se*T,re=F*x-Ee*T,ke=H*T+ke*x,D=O,I=K,F=re),P=Ys(I,D),_=P*as,P&&(x=Math.cos(P),T=Math.sin(P),O=D*x+I*T,K=X*x+z*T,I=I*x-D*T,z=z*x-X*T,D=O,X=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=jt(Math.sqrt(D*D+I*I+F*F)),g=jt(Math.sqrt(z*z+qe*qe)),P=Ys(X,z),y=Math.abs(P)>2e-4?P*as:0,S=ke?1/(ke<0?-ke:ke):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!kg(li(e,Vt)),O&&e.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=jt(d),n.scaleY=jt(g),n.rotation=jt(_)+a,n.rotationX=jt(m)+a,n.rotationY=jt(p)+a,n.skewX=y+a,n.skewY=b+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[$n]=ic(c)),n.xOffset=n.yOffset=0,n.force3D=ci.force3D,n.renderTransform=n.svg?EE:Ug?zg:bE,n.uncache=0,n},ic=function(e){return(e=e.split(" "))[0]+" "+e[1]},fu=function(e,t,n){var i=Rn(t);return jt(parseFloat(t)+parseFloat(qr(e,"x",n+"px",i)))+i},bE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zg(e,t)},rs="0deg",Xo="0px",ss=") ",zg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,b=n.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==rs||u!==rs)){var w=parseFloat(u)*ao,A=Math.sin(w),P=Math.cos(w),x;w=parseFloat(h)*ao,x=Math.cos(w),o=fu(y,o,A*x*-b),a=fu(y,a,-Math.sin(w)*-b),l=fu(y,l,P*x*-b+b)}m!==Xo&&(S+="perspective("+m+ss),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||o!==Xo||a!==Xo||l!==Xo)&&(S+=l!==Xo||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ss),c!==rs&&(S+="rotate("+c+ss),u!==rs&&(S+="rotateY("+u+ss),h!==rs&&(S+="rotateX("+h+ss),(f!==rs||d!==rs)&&(S+="skew("+f+", "+d+ss),(g!==1||_!==1)&&(S+="scale("+g+", "+_+ss),y.style[Vt]=S||"translate(0, 0)"},EE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,b=parseFloat(o),S=parseFloat(a),M,w,A,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ao,c*=ao,M=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=ao,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,w*=x)),M=jt(M),w=jt(w),A=jt(A),P=jt(P)):(M=h,P=f,w=A=0),(b&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(b=qr(d,"x",o,"px"),S=qr(d,"y",a,"px")),(g||_||m||p)&&(b=jt(b+g-(g*M+_*A)+m),S=jt(S+_-(g*w+_*P)+p)),(i||s)&&(x=d.getBBox(),b=jt(b+i/100*x.width),S=jt(S+s/100*x.height)),x="matrix("+M+","+w+","+A+","+P+","+b+","+S+")",d.setAttribute("transform",x),y&&(d.style[Vt]=x)},wE=function(e,t,n,i,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?as:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Mp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Mp)%o-~~(c/o)*o)),e._pt=f=new jn(e._pt,t,n,i,c,lE),f.e=u,f.u="deg",e._props.push(n),f},Rp=function(e,t){for(var n in t)e[n]=t[n];return e},AE=function(e,t,n){var i=Rp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Vt]=t,a=Fa(n,1),Yr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],o[Vt]=t,a=Fa(n,1),o[Vt]=c);for(l in yr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Rn(c),g=Rn(u),h=d!==g?qr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new jn(e._pt,a,l,h,f-h,Ch),e._pt.u=g||0,e._props.push(l));Rp(a,i)};Kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});nc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ur(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Vg={name:"css",register:Lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,y,b,S,M,w,A,P,x;Rf||Lh(),this.styles=this.styles||Ng(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ni[_]&&Tg(_,t,n,i,e,s)))){if(d=typeof u,g=nc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Da(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Gr.lastIndex=0,Gr.test(c)||(m=Rn(c),p=Rn(u),p?m!==p&&(c=qr(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],mn(c)&&~c.indexOf("random(")&&(c=Da(c)),Rn(c+"")||c==="auto"||(c+=ci.units[_]||Rn(ur(e,_))||""),(c+"").charAt(1)==="="&&(c=ur(e,_))):c=ur(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Xi&&(_==="autoAlpha"&&(f===1&&ur(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),kr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in yr,b){if(this.styles.save(_),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=li(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=li(e,"perspective"),T?e.style.perspective=T:Yr(e,"perspective")}h=parseFloat(u)}if(S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Fa(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new jn(this._pt,a,Vt,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new jn(this._pt,M,"scaleY",M.scaleY,(y?so(M.scaleY,y+h):h)-M.scaleY||0,Ch),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push($n,0,a[$n]),u=yE(u),M.svg?Dh(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&kr(this,M,"zOrigin",M.zOrigin,p),kr(this,a,_,ic(c),ic(u)));continue}else if(_==="svgOrigin"){Dh(e,u,1,w,0,this);continue}else if(_ in Bg){wE(this,M,_,f,y?so(f,y+u):u);continue}else if(_==="smoothOrigin"){kr(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){AE(this,u,e);continue}}else _ in a||(_=wo(_)||_);if(b||(h||h===0)&&(f||f===0)&&!aE.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=Rn(u)||(_ in ci.units?ci.units[_]:m),m!==p&&(f=qr(e,_,c,p)),this._pt=new jn(this._pt,b?M:a,_,f,(y?so(f,y+h):h)-f,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?hE:Ch),this._pt.u=p||0,b&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=uE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=cE);else if(_ in a)ME.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){xf(_,u);continue}b||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),o.push(_)}}A&&Cg(this)},render:function(e,t){if(t.tween._time||!Cf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ur,aliases:Xi,getSetter:function(e,t,n){var i=Xi[t];return i&&i.indexOf(",")<0&&(t=i),t in yr&&t!==$n&&(e._gsap.x||ur(e,"x"))?n&&Sp===n?t==="scale"?mE:pE:(Sp=n||{})&&(t==="scale"?gE:_E):e.style&&!mf(e.style[t])?fE:~t.indexOf("-")?dE:wf(e,t)},core:{_removeProperty:Yr,_getMatrix:Lf}};Zn.utils.checkPrefix=wo;Zn.core.getStyleSaver=Ng;(function(r,e,t,n){var i=Kn(r+","+e+","+t,function(s){yr[s]=1});Kn(e,function(s){ci.units[s]="deg",Bg[s]=1}),Xi[i[13]]=r+","+e,Kn(n,function(s){var o=s.split(":");Xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ci.units[r]="px"});Zn.registerPlugin(Vg);var Kt=Zn.registerPlugin(Vg)||Zn;Kt.core.Tween;function RE(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function CE(r,e,t){return e&&RE(r.prototype,e),r}var _n,kl,oi,zr,Vr,lo,Hg,ls,da,Gg,pr,Ci,Wg,Xg=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},Yg=1,to=[],ut=[],ji=[],pa=Date.now,Ih=function(e,t){return t},PE=function(){var e=da.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,ji),ut=n,ji=i,Ih=function(o,a){return t[o](a)}},Wr=function(e,t){return~ji.indexOf(e)&&ji[ji.indexOf(e)+1][t]},ma=function(e){return!!~Gg.indexOf(e)},Nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},In=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},_l="scrollLeft",xl="scrollTop",Nh=function(){return pr&&pr.isPressed||ut.cache++},rc=function(e,t){var n=function i(s){if(s||s===0){Yg&&(oi.history.scrollRestoration="manual");var o=pr&&pr.isPressed;s=i.v=Math.round(s)||(pr&&pr.iOS?1:0),e(s),i.cacheID=ut.cache,o&&Ih("ss",s)}else(t||ut.cache!==i.cacheID||Ih("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vn={s:_l,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rc(function(r){return arguments.length?oi.scrollTo(r,rn.sc()):oi.pageXOffset||zr[_l]||Vr[_l]||lo[_l]||0})},rn={s:xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:rc(function(r){return arguments.length?oi.scrollTo(Vn.sc(),r):oi.pageYOffset||zr[xl]||Vr[xl]||lo[xl]||0})},Xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},LE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Kr=function(e,t){var n=t.s,i=t.sc;ma(e)&&(e=zr.scrollingElement||Vr);var s=ut.indexOf(e),o=i===rn.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Nn(e,"scroll",Nh);var a=ut[s+o],l=a||(ut[s+o]=rc(Wr(e,n),!0)||(ma(e)?i:rc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),l},Uh=function(e,t,n){var i=e,s=e,o=pa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=pa();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=pa();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Yo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},qg=function(){da=_n.core.globals().ScrollTrigger,da&&da.core&&PE()},Kg=function(e){return _n=e||Xg(),!kl&&_n&&typeof document<"u"&&document.body&&(oi=window,zr=document,Vr=zr.documentElement,lo=zr.body,Gg=[oi,zr,Vr,lo],_n.utils.clamp,Wg=_n.core.context||function(){},ls="onpointerenter"in lo?"pointer":"mouse",Hg=$t.isTouch=oi.matchMedia&&oi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in oi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=$t.eventTypes=("ontouchstart"in Vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Yg=0},500),qg(),kl=1),kl};Vn.op=rn;ut.cache=0;var $t=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){kl||Kg(_n)||console.warn("Please gsap.registerPlugin(Observer)"),da||qg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,b=n.onPress,S=n.onRelease,M=n.onRight,w=n.onLeft,A=n.onUp,P=n.onDown,x=n.onChangeX,T=n.onChangeY,D=n.onChange,I=n.onToggleX,F=n.onToggleY,H=n.onHover,X=n.onHoverEnd,z=n.onMove,O=n.ignoreCheck,K=n.isNormalizer,re=n.onGestureStart,C=n.onGestureEnd,se=n.onWheel,Ee=n.onEnable,De=n.onDisable,ke=n.onClick,qe=n.scrollSpeed,Q=n.capture,te=n.allowClicks,de=n.lockAxis,we=n.onLockAxis;this.target=a=Xn(a)||Vr,this.vars=n,d&&(d=_n.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,qe=qe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(oi.getComputedStyle(lo).lineHeight)||22);var Ae,ze,ht,Ce,Ge,Ue,Oe,W=this,N=0,xt=0,Qe=n.passive||!u&&n.passive!==!1,Xe=Kr(a,Vn),ge=Kr(a,rn),R=Xe(),v=ge(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ci[0]==="pointerdown",j=ma(a),ee=a.ownerDocument||zr,$=[0,0,0],ye=[0,0,0],ue=0,be=function(){return ue=pa()},Te=function(Ie,Ze){return(W.event=Ie)&&d&&LE(Ie.target,d)||Ze&&U&&Ie.pointerType!=="touch"||O&&O(Ie,Ze)},ae=function(){W._vx.reset(),W._vy.reset(),ze.pause(),h&&h(W)},he=function(){var Ie=W.deltaX=Cp($),Ze=W.deltaY=Cp(ye),ve=Math.abs(Ie)>=i,Ye=Math.abs(Ze)>=i;D&&(ve||Ye)&&D(W,Ie,Ze,$,ye),ve&&(M&&W.deltaX>0&&M(W),w&&W.deltaX<0&&w(W),x&&x(W),I&&W.deltaX<0!=N<0&&I(W),N=W.deltaX,$[0]=$[1]=$[2]=0),Ye&&(P&&W.deltaY>0&&P(W),A&&W.deltaY<0&&A(W),T&&T(W),F&&W.deltaY<0!=xt<0&&F(W),xt=W.deltaY,ye[0]=ye[1]=ye[2]=0),(Ce||ht)&&(z&&z(W),ht&&(m&&ht===1&&m(W),y&&y(W),ht=0),Ce=!1),Ue&&!(Ue=!1)&&we&&we(W),Ge&&(se(W),Ge=!1),Ae=0},Re=function(Ie,Ze,ve){$[ve]+=Ie,ye[ve]+=Ze,W._vx.update(Ie),W._vy.update(Ze),c?Ae||(Ae=requestAnimationFrame(he)):he()},k=function(Ie,Ze){de&&!Oe&&(W.axis=Oe=Math.abs(Ie)>Math.abs(Ze)?"x":"y",Ue=!0),Oe!=="y"&&($[2]+=Ie,W._vx.update(Ie,!0)),Oe!=="x"&&(ye[2]+=Ze,W._vy.update(Ze,!0)),c?Ae||(Ae=requestAnimationFrame(he)):he()},Z=function(Ie){if(!Te(Ie,1)){Ie=Yo(Ie,u);var Ze=Ie.clientX,ve=Ie.clientY,Ye=Ze-W.x,Fe=ve-W.y,je=W.isDragging;W.x=Ze,W.y=ve,(je||(Ye||Fe)&&(Math.abs(W.startX-Ze)>=s||Math.abs(W.startY-ve)>=s))&&(ht||(ht=je?2:1),je||(W.isDragging=!0),k(Ye,Fe))}},pe=W.onPress=function(_e){Te(_e,1)||_e&&_e.button||(W.axis=Oe=null,ze.pause(),W.isPressed=!0,_e=Yo(_e),N=xt=0,W.startX=W.x=_e.clientX,W.startY=W.y=_e.clientY,W._vx.reset(),W._vy.reset(),Nn(K?a:ee,Ci[1],Z,Qe,!0),W.deltaX=W.deltaY=0,b&&b(W))},L=W.onRelease=function(_e){if(!Te(_e,1)){In(K?a:ee,Ci[1],Z,!0);var Ie=!isNaN(W.y-W.startY),Ze=W.isDragging,ve=Ze&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ye=Yo(_e);!ve&&Ie&&(W._vx.reset(),W._vy.reset(),u&&te&&_n.delayedCall(.08,function(){if(pa()-ue>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(ee.createEvent){var Fe=ee.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,oi,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Fe)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&Ze&&!K&&ze.restart(!0),ht&&he(),p&&Ze&&p(W),S&&S(W,ve)}},le=function(Ie){return Ie.touches&&Ie.touches.length>1&&(W.isGesturing=!0)&&re(Ie,W.isDragging)},ie=function(){return(W.isGesturing=!1)||C(W)},oe=function(Ie){if(!Te(Ie)){var Ze=Xe(),ve=ge();Re((Ze-R)*qe,(ve-v)*qe,1),R=Ze,v=ve,h&&ze.restart(!0)}},ne=function(Ie){if(!Te(Ie)){Ie=Yo(Ie,u),se&&(Ge=!0);var Ze=(Ie.deltaMode===1?l:Ie.deltaMode===2?oi.innerHeight:1)*g;Re(Ie.deltaX*Ze,Ie.deltaY*Ze,0),h&&!K&&ze.restart(!0)}},J=function(Ie){if(!Te(Ie)){var Ze=Ie.clientX,ve=Ie.clientY,Ye=Ze-W.x,Fe=ve-W.y;W.x=Ze,W.y=ve,Ce=!0,h&&ze.restart(!0),(Ye||Fe)&&k(Ye,Fe)}},ce=function(Ie){W.event=Ie,H(W)},Pe=function(Ie){W.event=Ie,X(W)},et=function(Ie){return Te(Ie)||Yo(Ie,u)&&ke(W)};ze=W._dc=_n.delayedCall(f||.25,ae).pause(),W.deltaX=W.deltaY=0,W._vx=Uh(0,50,!0),W._vy=Uh(0,50,!0),W.scrollX=Xe,W.scrollY=ge,W.isDragging=W.isGesturing=W.isPressed=!1,Wg(this),W.enable=function(_e){return W.isEnabled||(Nn(j?ee:a,"scroll",Nh),o.indexOf("scroll")>=0&&Nn(j?ee:a,"scroll",oe,Qe,Q),o.indexOf("wheel")>=0&&Nn(a,"wheel",ne,Qe,Q),(o.indexOf("touch")>=0&&Hg||o.indexOf("pointer")>=0)&&(Nn(a,Ci[0],pe,Qe,Q),Nn(ee,Ci[2],L),Nn(ee,Ci[3],L),te&&Nn(a,"click",be,!0,!0),ke&&Nn(a,"click",et),re&&Nn(ee,"gesturestart",le),C&&Nn(ee,"gestureend",ie),H&&Nn(a,ls+"enter",ce),X&&Nn(a,ls+"leave",Pe),z&&Nn(a,ls+"move",J)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Ce=ht=!1,W._vx.reset(),W._vy.reset(),R=Xe(),v=ge(),_e&&_e.type&&pe(_e),Ee&&Ee(W)),W},W.disable=function(){W.isEnabled&&(to.filter(function(_e){return _e!==W&&ma(_e.target)}).length||In(j?ee:a,"scroll",Nh),W.isPressed&&(W._vx.reset(),W._vy.reset(),In(K?a:ee,Ci[1],Z,!0)),In(j?ee:a,"scroll",oe,Q),In(a,"wheel",ne,Q),In(a,Ci[0],pe,Q),In(ee,Ci[2],L),In(ee,Ci[3],L),In(a,"click",be,!0),In(a,"click",et),In(ee,"gesturestart",le),In(ee,"gestureend",ie),In(a,ls+"enter",ce),In(a,ls+"leave",Pe),In(a,ls+"move",J),W.isEnabled=W.isPressed=W.isDragging=!1,De&&De(W))},W.kill=W.revert=function(){W.disable();var _e=to.indexOf(W);_e>=0&&to.splice(_e,1),pr===W&&(pr=0)},to.push(W),K&&ma(a)&&(pr=W),W.enable(_)},CE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$t.version="3.14.2";$t.create=function(r){return new $t(r)};$t.register=Kg;$t.getAll=function(){return to.slice()};$t.getById=function(r){return to.filter(function(e){return e.vars.id===r})[0]};Xg()&&_n.registerPlugin($t);var Le,Zs,ct,Dt,ii,Tt,Df,sc,Oa,ga,ta,vl,En,vc,Fh,On,Pp,Lp,Js,jg,du,$g,Fn,Oh,Zg,Jg,Nr,Bh,If,co,Nf,_a,kh,pu,Sl=1,wn=Date.now,mu=wn(),bi=0,na=0,Dp=function(e,t,n){var i=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ip=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},DE=function r(){return na&&requestAnimationFrame(r)},Np=function(){return vc=1},Up=function(){return vc=0},ki=function(e){return e},ia=function(e){return Math.round(e*1e5)/1e5||0},Qg=function(){return typeof window<"u"},e_=function(){return Le||Qg()&&(Le=window.gsap)&&Le.registerPlugin&&Le},Es=function(e){return!!~Df.indexOf(e)},t_=function(e){return(e==="Height"?Nf:ct["inner"+e])||ii["client"+e]||Tt["client"+e]},n_=function(e){return Wr(e,"getBoundingClientRect")||(Es(e)?function(){return Wl.width=ct.innerWidth,Wl.height=Nf,Wl}:function(){return hr(e)})},IE=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Wr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?t_(s):e["client"+s])||0}},NE=function(e,t){return!t||~ji.indexOf(e)?n_(e):function(){return Wl}},Yi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Wr(e,n))?o()-n_(e)()[s]:Es(e)?(ii[n]||Tt[n])-t_(i):e[n]-e["offset"+i])},Ml=function(e,t){for(var n=0;n<Js.length;n+=3)(!t||~t.indexOf(Js[n+1]))&&e(Js[n],Js[n+1],Js[n+2])},ti=function(e){return typeof e=="string"},Cn=function(e){return typeof e=="function"},ra=function(e){return typeof e=="number"},cs=function(e){return typeof e=="object"},qo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},gu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},qs=Math.abs,i_="left",r_="top",Uf="right",Ff="bottom",Ms="width",ys="height",xa="Right",va="Left",Sa="Top",Ma="Bottom",Qt="padding",_i="margin",Ao="Width",Of="Height",nn="px",xi=function(e){return ct.getComputedStyle(e)},UE=function(e){var t=xi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Fp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hr=function(e,t){var n=t&&xi(e)[Fh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},oc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},s_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},FE=function(e){return function(t){return Le.utils.snap(s_(e),t)}},Bf=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},OE=function(e){return function(t,n){return Bf(s_(e))(t,n.direction)}},yl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Tl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Op={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bl={toggleActions:"play",anticipatePin:0},ac={top:0,left:0,center:.5,bottom:1,right:1},zl=function(e,t){if(ti(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ac?ac[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},El=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Dt.createElement("div"),_=Es(n)||Wr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Tt:n,y=e.indexOf("start")!==-1,b=y?c:u,S="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===rn?Uf:Ff)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Vl(g,0,i,y),g},Vl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ao]=1,s["border"+a+Ao]=0,s[n.p]=t+"px",Le.set(e,s)},ot=[],zh={},Ba,Bp=function(){return wn()-bi>34&&(Ba||(Ba=requestAnimationFrame(_r)))},Ks=function(){(!Fn||!Fn.isPressed||Fn.startX>Tt.clientWidth)&&(ut.cache++,Fn?Ba||(Ba=requestAnimationFrame(_r)):_r(),bi||As("scrollStart"),bi=wn())},_u=function(){Jg=ct.innerWidth,Zg=ct.innerHeight},sa=function(e){ut.cache++,(e===!0||!En&&!$g&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!Oh||Jg!==ct.innerWidth||Math.abs(ct.innerHeight-Zg)>ct.innerHeight*.25))&&sc.restart(!0)},ws={},BE=[],o_=function r(){return fn($e,"scrollEnd",r)||gs(!0)},As=function(e){return ws[e]&&ws[e].map(function(t){return t()})||BE},ei=[],a_=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},l_=function(){return ut.forEach(function(e){return Cn(e)&&++e.cacheID&&(e.rec=e())})},kf=function(e,t){var n;for(On=0;On<ot.length;On++)n=ot[On],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));_a=!0,t&&a_(t),t||As("revert")},c_=function(e,t){ut.cache++,(t||!Bn)&&ut.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(ct.history.scrollRestoration=If=e)},Bn,Ts=0,kp,kE=function(){if(kp!==Ts){var e=kp=Ts;requestAnimationFrame(function(){return e===Ts&&gs(!0)})}},u_=function(){Tt.appendChild(co),Nf=!Fn&&co.offsetHeight||ct.innerHeight,Tt.removeChild(co)},zp=function(e){return Oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},gs=function(e,t){if(ii=Dt.documentElement,Tt=Dt.body,Df=[ct,Dt,ii,Tt],bi&&!e&&!_a){dn($e,"scrollEnd",o_);return}u_(),Bn=$e.isRefreshing=!0,_a||l_();var n=As("refreshInit");jg&&$e.sort(),t||kf(),ut.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),_a=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),kh=1,zp(!0),ot.forEach(function(i){var s=Yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),zp(!1),kh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),c_(If,1),sc.pause(),Ts++,Bn=2,_r(2),ot.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bn=$e.isRefreshing=!1,As("refresh")},Vh=0,Hl=1,ya,_r=function(e){if(e===2||!Bn&&!_a){$e.isUpdating=!0,ya&&ya.update(0);var t=ot.length,n=wn(),i=n-mu>=50,s=t&&ot[0].scroll();if(Hl=Vh>s?-1:1,Bn||(Vh=s),i&&(bi&&!vc&&n-bi>200&&(bi=0,As("scrollEnd")),ta=mu,mu=n),Hl<0){for(On=t;On-- >0;)ot[On]&&ot[On].update(0,i);Hl=1}else for(On=0;On<t;On++)ot[On]&&ot[On].update(0,i);$e.isUpdating=!1}Ba=0},Hh=[i_,r_,Ff,Uf,_i+Ma,_i+xa,_i+Sa,_i+va,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gl=Hh.concat([Ms,ys,"boxSizing","max"+Ao,"max"+Of,"position",_i,Qt,Qt+Sa,Qt+xa,Qt+Ma,Qt+va]),zE=function(e,t,n){uo(n);var i=e._gsap;if(i.spacerIsNative)uo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Hh.length,o=t.style,a=e.style,l;s--;)l=Hh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ff]=a[Uf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ms]=oc(e,Vn)+nn,o[ys]=oc(e,rn)+nn,o[Qt]=a[_i]=a[r_]=a[i_]="0",uo(i),a[Ms]=a["max"+Ao]=n[Ms],a[ys]=a["max"+Of]=n[ys],a[Qt]=n[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},VE=/([A-Z])/g,uo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(VE,"-$1").toLowerCase())}},wl=function(e){for(var t=Gl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Gl[s],n[Gl[s]]);return i.t=e,i},HE=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Wl={left:0,top:0},Vp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Cn(e)&&(e=e(l)),ti(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?zl("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),ra(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Vl(a,n,i,!0);else{Cn(t)&&(t=t(l));var b=(e||"0").split(" "),S,M,w,A;y=Xn(t,l)||Tt,S=hr(y)||{},(!S||!S.left&&!S.top)&&xi(y).display==="none"&&(A=y.style.display,y.style.display="block",S=hr(y),A?y.style.display=A:y.style.removeProperty("display")),M=zl(b[0],S[i.d]),w=zl(b[1]||"0",n),e=S[i.p]-c[i.p]-u+M+s-w,a&&Vl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+n,x=o._isStart;m="scroll"+i.d2,Vl(o,P,i,x&&P>20||!x&&(h?Math.max(Tt[m],ii[m]):o.parentNode[m])<=P+1),h&&(c=hr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return d&&y&&(m=hr(y),d.seek(f),p=hr(y),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},GE=/(webkit|moz|length|cssText|inset)/i,Hp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=xi(e);for(o in a)!+o&&!GE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},h_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Al=function(e,t,n){var i={};i[t.p]="+="+n,Le.set(e,i)},Gp=function(e,t){var n=Kr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=h_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&_r()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Le.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",n.wheelHandler),$e.isTouch&&dn(e,"touchmove",n.wheelHandler),s},$e=(function(){function r(t,n){Zs||r.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!na){this.update=this.refresh=this.kill=ki;return}n=Fp(ti(n)||ra(n)||n.nodeType?{trigger:n}:n,bl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,b=s.once,S=s.snap,M=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,P=s.fastScrollEnd,x=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vn:rn,D=!h&&h!==0,I=Xn(n.scroller||ct),F=Le.core.getCache(I),H=Es(I),X=("pinType"in n?n.pinType:Wr(I,"pinType")||H&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:bl.markers,re=H?0:parseFloat(xi(I)["border"+T.p2+Ao])||0,C=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Ee=IE(I,H,T),De=NE(I,H),ke=0,qe=0,Q=0,te=Kr(I,T),de,we,Ae,ze,ht,Ce,Ge,Ue,Oe,W,N,xt,Qe,Xe,ge,R,v,U,j,ee,$,ye,ue,be,Te,ae,he,Re,k,Z,pe,L,le,ie,oe,ne,J,ce,Pe;if(C._startClamp=C._endClamp=!1,C._dir=T,m*=45,C.scroller=I,C.scroll=A?A.time.bind(A):te,ze=te(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(jg=1,n.refreshPriority===-9999&&(ya=C)),F.tweenScroll=F.tweenScroll||{top:Gp(I,rn),left:Gp(I,Vn)},C.tweenTo=de=F.tweenScroll[T.p],C.scrubDuration=function(ve){le=ra(ve)&&ve,le?L?L.duration(ve):L=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(C)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Z=0,l||(l=i.vars.id)),S&&((!cs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Tt.style&&Le.set(H?[Tt,ii]:I,{scrollBehavior:"auto"}),ut.forEach(function(ve){return Cn(ve)&&ve.target===(H?Dt.scrollingElement||ii:I)&&(ve.smooth=!1)}),Ae=Cn(S.snapTo)?S.snapTo:S.snapTo==="labels"?FE(i):S.snapTo==="labelsDirectional"?OE(i):S.directional!==!1?function(ve,Ye){return Bf(S.snapTo)(ve,wn()-qe<500?0:Ye.direction)}:Le.utils.snap(S.snapTo),ie=S.duration||{min:.1,max:2},ie=cs(ie)?ga(ie.min,ie.max):ga(ie,ie),oe=Le.delayedCall(S.delay||le/2||.1,function(){var ve=te(),Ye=wn()-qe<500,Fe=de.tween;if((Ye||Math.abs(C.getVelocity())<10)&&!Fe&&!vc&&ke!==ve){var je=(ve-Ce)/Xe,Ut=i&&!D?i.totalProgress():je,st=Ye?0:(Ut-pe)/(wn()-ta)*1e3||0,Mt=Le.utils.clamp(-je,1-je,qs(st/2)*st/.185),Gt=je+(S.inertia===!1?0:Mt),Ct,pt,at=S,Wt=at.onStart,vt=at.onInterrupt,un=at.onComplete;if(Ct=Ae(Gt,C),ra(Ct)||(Ct=Gt),pt=Math.max(0,Math.round(Ce+Ct*Xe)),ve<=Ge&&ve>=Ce&&pt!==ve){if(Fe&&!Fe._initted&&Fe.data<=qs(pt-ve))return;S.inertia===!1&&(Mt=Ct-je),de(pt,{duration:ie(qs(Math.max(qs(Gt-Ut),qs(Ct-Ut))*.185/st/.05||0)),ease:S.ease||"power3",data:qs(pt-ve),onInterrupt:function(){return oe.restart(!0)&&vt&&vt(C)},onComplete:function(){C.update(),ke=te(),i&&!D&&(L?L.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),Z=pe=i&&!D?i.totalProgress():C.progress,y&&y(C),un&&un(C)}},ve,Mt*Xe,pt-ve-Mt*Xe),Wt&&Wt(C,de.tween)}}else C.isActive&&ke!==ve&&oe.restart(!0)}).pause()),l&&(zh[l]=C),f=C.trigger=Xn(f||d!==!0&&d),Pe=f&&f._gsap&&f._gsap.stRevert,Pe&&(Pe=Pe(C)),d=d===!0?f:Xn(d),ti(a)&&(a={targets:f,className:a}),d&&(g===!1||g===_i||(g=!g&&d.parentNode&&d.parentNode.style&&xi(d.parentNode).display==="flex"?!1:Qt),C.pin=d,we=Le.core.getCache(d),we.spacer?ge=we.pinState:(w&&(w=Xn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),we.spacerIsNative=!!w,w&&(we.spacerState=wl(w))),we.spacer=U=w||Dt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),we.pinState=ge=wl(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),C.spacer=U=we.spacer,k=xi(d),be=k[g+T.os2],ee=Le.getProperty(d),$=Le.quickSetter(d,T.a,nn),xu(d,U,k),v=wl(d)),K){xt=cs(K)?Fp(K,Op):Op,W=El("scroller-start",l,I,T,xt,0),N=El("scroller-end",l,I,T,xt,0,W),j=W["offset"+T.op.d2];var et=Xn(Wr(I,"content")||I);Ue=this.markerStart=El("start",l,et,T,xt,j,0,A),Oe=this.markerEnd=El("end",l,et,T,xt,j,0,A),A&&(ce=Le.quickSetter([Ue,Oe],T.a,nn)),!X&&!(ji.length&&Wr(I,"fixedMarkers")===!0)&&(UE(H?Tt:I),Le.set([W,N],{force3D:!0}),ae=Le.quickSetter(W,T.a,nn),Re=Le.quickSetter(N,T.a,nn))}if(A){var _e=A.vars.onUpdate,Ie=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){C.update(0,0,1),_e&&_e.apply(A,Ie||[])})}if(C.previous=function(){return ot[ot.indexOf(C)-1]},C.next=function(){return ot[ot.indexOf(C)+1]},C.revert=function(ve,Ye){if(!Ye)return C.kill(!0);var Fe=ve!==!1||!C.enabled,je=En;Fe!==C.isReverted&&(Fe&&(ne=Math.max(te(),C.scroll.rec||0),Q=C.progress,J=i&&i.progress()),Ue&&[Ue,Oe,W,N].forEach(function(Ut){return Ut.style.display=Fe?"none":"block"}),Fe&&(En=C,C.update(Fe)),d&&(!M||!C.isActive)&&(Fe?zE(d,U,ge):xu(d,U,xi(d),Te)),Fe||C.update(Fe),En=je,C.isReverted=Fe)},C.refresh=function(ve,Ye,Fe,je){if(!((En||!C.enabled)&&!Ye)){if(d&&ve&&bi){dn(r,"scrollEnd",o_);return}!Bn&&se&&se(C),En=C,de.tween&&!Fe&&(de.tween.kill(),de.tween=0),L&&L.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xe){return xe.vars.immediateRender&&xe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ut=Ee(),st=De(),Mt=A?A.duration():Yi(I,T),Gt=Xe<=.01||!Xe,Ct=0,pt=je||0,at=cs(Fe)?Fe.end:n.end,Wt=n.endTrigger||f,vt=cs(Fe)?Fe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),un=C.pinnedContainer=n.pinnedContainer&&Xn(n.pinnedContainer,C),Ln=f&&Math.max(0,ot.indexOf(C))||0,Yt=Ln,Zt,Bt,di,Ui,qt,E,B,q,Y,G,fe,Se,me;for(K&&cs(Fe)&&(Se=Le.getProperty(W,T.p),me=Le.getProperty(N,T.p));Yt-- >0;)E=ot[Yt],E.end||E.refresh(0,1)||(En=C),B=E.pin,B&&(B===f||B===d||B===un)&&!E.isReverted&&(G||(G=[]),G.unshift(E),E.revert(!0,!0)),E!==ot[Yt]&&(Ln--,Yt--);for(Cn(vt)&&(vt=vt(C)),vt=Dp(vt,"start",C),Ce=Vp(vt,f,Ut,T,te(),Ue,W,C,st,re,X,Mt,A,C._startClamp&&"_startClamp")||(d?-.001:0),Cn(at)&&(at=at(C)),ti(at)&&!at.indexOf("+=")&&(~at.indexOf(" ")?at=(ti(vt)?vt.split(" ")[0]:"")+at:(Ct=zl(at.substr(2),Ut),at=ti(vt)?vt:(A?Le.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ce):Ce)+Ct,Wt=f)),at=Dp(at,"end",C),Ge=Math.max(Ce,Vp(at||(Wt?"100% 0":Mt),Wt,Ut,T,te()+Ct,Oe,N,C,st,re,X,Mt,A,C._endClamp&&"_endClamp"))||-.001,Ct=0,Yt=Ln;Yt--;)E=ot[Yt]||{},B=E.pin,B&&E.start-E._pinPush<=Ce&&!A&&E.end>0&&(Zt=E.end-(C._startClamp?Math.max(0,E.start):E.start),(B===f&&E.start-E._pinPush<Ce||B===un)&&isNaN(vt)&&(Ct+=Zt*(1-E.progress)),B===d&&(pt+=Zt));if(Ce+=Ct,Ge+=Ct,C._startClamp&&(C._startClamp+=Ct),C._endClamp&&!Bn&&(C._endClamp=Ge||-.001,Ge=Math.min(Ge,Yi(I,T))),Xe=Ge-Ce||(Ce-=.01)&&.001,Gt&&(Q=Le.utils.clamp(0,1,Le.utils.normalize(Ce,Ge,ne))),C._pinPush=pt,Ue&&Ct&&(Zt={},Zt[T.a]="+="+Ct,un&&(Zt[T.p]="-="+te()),Le.set([Ue,Oe],Zt)),d&&!(kh&&C.end>=Yi(I,T)))Zt=xi(d),Ui=T===rn,di=te(),ye=parseFloat(ee(T.a))+pt,!Mt&&Ge>1&&(fe=(H?Dt.scrollingElement||ii:I).style,fe={style:fe,value:fe["overflow"+T.a.toUpperCase()]},H&&xi(Tt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(fe.style["overflow"+T.a.toUpperCase()]="scroll")),xu(d,U,Zt),v=wl(d),Bt=hr(d,!0),q=X&&Kr(I,Ui?Vn:rn)(),g?(Te=[g+T.os2,Xe+pt+nn],Te.t=U,Yt=g===Qt?oc(d,T)+Xe+pt:0,Yt&&(Te.push(T.d,Yt+nn),U.style.flexBasis!=="auto"&&(U.style.flexBasis=Yt+nn)),uo(Te),un&&ot.forEach(function(xe){xe.pin===un&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),X&&te(ne)):(Yt=oc(d,T),Yt&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=Yt+nn)),X&&(qt={top:Bt.top+(Ui?di-Ce:q)+nn,left:Bt.left+(Ui?q:di-Ce)+nn,boxSizing:"border-box",position:"fixed"},qt[Ms]=qt["max"+Ao]=Math.ceil(Bt.width)+nn,qt[ys]=qt["max"+Of]=Math.ceil(Bt.height)+nn,qt[_i]=qt[_i+Sa]=qt[_i+xa]=qt[_i+Ma]=qt[_i+va]="0",qt[Qt]=Zt[Qt],qt[Qt+Sa]=Zt[Qt+Sa],qt[Qt+xa]=Zt[Qt+xa],qt[Qt+Ma]=Zt[Qt+Ma],qt[Qt+va]=Zt[Qt+va],R=HE(ge,qt,M),Bn&&te(0)),i?(Y=i._initted,du(1),i.render(i.duration(),!0,!0),ue=ee(T.a)-ye+Xe+pt,he=Math.abs(Xe-ue)>1,X&&he&&R.splice(R.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),du(0)):ue=Xe,fe&&(fe.value?fe.style["overflow"+T.a.toUpperCase()]=fe.value:fe.style.removeProperty("overflow-"+T.a));else if(f&&te()&&!A)for(Bt=f.parentNode;Bt&&Bt!==Tt;)Bt._pinOffset&&(Ce-=Bt._pinOffset,Ge-=Bt._pinOffset),Bt=Bt.parentNode;G&&G.forEach(function(xe){return xe.revert(!1,!0)}),C.start=Ce,C.end=Ge,ze=ht=Bn?ne:te(),!A&&!Bn&&(ze<ne&&te(ne),C.scroll.rec=0),C.revert(!1,!0),qe=wn(),oe&&(ke=-1,oe.restart(!0)),En=0,i&&D&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Gt||Q!==C.progress||A||_||i&&!i._initted)&&(i&&!D&&(i._initted||Q||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Ce<-.001&&!Q?Le.utils.normalize(Ce,Ge,0):Q,!0),C.progress=Gt||(ze-Ce)/Xe===Q?0:Q),d&&g&&(U._pinOffset=Math.round(C.progress*ue)),L&&L.invalidate(),isNaN(Se)||(Se-=Le.getProperty(W,T.p),me-=Le.getProperty(N,T.p),Al(W,T,Se),Al(Ue,T,Se-(je||0)),Al(N,T,me),Al(Oe,T,me-(je||0))),Gt&&!Bn&&C.update(),u&&!Bn&&!Qe&&(Qe=!0,u(C),Qe=!1)}},C.getVelocity=function(){return(te()-ht)/(wn()-ta)*1e3||0},C.endAnimation=function(){qo(C.callbackAnimation),i&&(L?L.progress(1):i.paused()?D||qo(i,C.direction<0,1):qo(i,i.reversed()))},C.labelToScroll=function(ve){return i&&i.labels&&(Ce||C.refresh()||Ce)+i.labels[ve]/i.duration()*Xe||0},C.getTrailing=function(ve){var Ye=ot.indexOf(C),Fe=C.direction>0?ot.slice(0,Ye).reverse():ot.slice(Ye+1);return(ti(ve)?Fe.filter(function(je){return je.vars.preventOverlaps===ve}):Fe).filter(function(je){return C.direction>0?je.end<=Ce:je.start>=Ge})},C.update=function(ve,Ye,Fe){if(!(A&&!Fe&&!ve)){var je=Bn===!0?ne:C.scroll(),Ut=ve?0:(je-Ce)/Xe,st=Ut<0?0:Ut>1?1:Ut||0,Mt=C.progress,Gt,Ct,pt,at,Wt,vt,un,Ln;if(Ye&&(ht=ze,ze=A?te():je,S&&(pe=Z,Z=i&&!D?i.totalProgress():st)),m&&d&&!En&&!Sl&&bi&&(!st&&Ce<je+(je-ht)/(wn()-ta)*m?st=1e-4:st===1&&Ge>je+(je-ht)/(wn()-ta)*m&&(st=.9999)),st!==Mt&&C.enabled){if(Gt=C.isActive=!!st&&st<1,Ct=!!Mt&&Mt<1,vt=Gt!==Ct,Wt=vt||!!st!=!!Mt,C.direction=st>Mt?1:-1,C.progress=st,Wt&&!En&&(pt=st&&!Mt?0:st===1?1:Mt===1?2:3,D&&(at=!vt&&O[pt+1]!=="none"&&O[pt+1]||O[pt],Ln=i&&(at==="complete"||at==="reset"||at in i))),x&&(vt||Ln)&&(Ln||h||!i)&&(Cn(x)?x(C):C.getTrailing(x).forEach(function(di){return di.endAnimation()})),D||(L&&!En&&!Sl?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",st,i._tTime/i._tDur):(L.vars.totalProgress=st,L.invalidate().restart())):i&&i.totalProgress(st,!!(En&&(qe||ve)))),d){if(ve&&g&&(U.style[g+T.os2]=be),!X)$(ia(ye+ue*st));else if(Wt){if(un=!ve&&st>Mt&&Ge+1>je&&je+1>=Yi(I,T),M)if(!ve&&(Gt||un)){var Yt=hr(d,!0),Zt=je-Ce;Hp(d,Tt,Yt.top+(T===rn?Zt:0)+nn,Yt.left+(T===rn?0:Zt)+nn)}else Hp(d,U);uo(Gt||un?R:v),he&&st<1&&Gt||$(ye+(st===1&&!un?ue:0))}}S&&!de.tween&&!En&&!Sl&&oe.restart(!0),a&&(vt||b&&st&&(st<1||!pu))&&Oa(a.targets).forEach(function(di){return di.classList[Gt||b?"add":"remove"](a.className)}),o&&!D&&!ve&&o(C),Wt&&!En?(D&&(Ln&&(at==="complete"?i.pause().totalProgress(1):at==="reset"?i.restart(!0).pause():at==="restart"?i.restart(!0):i[at]()),o&&o(C)),(vt||!pu)&&(c&&vt&&gu(C,c),z[pt]&&gu(C,z[pt]),b&&(st===1?C.kill(!1,1):z[pt]=0),vt||(pt=st===1?1:3,z[pt]&&gu(C,z[pt]))),P&&!Gt&&Math.abs(C.getVelocity())>(ra(P)?P:2500)&&(qo(C.callbackAnimation),L?L.progress(1):qo(i,at==="reverse"?1:!st,1))):D&&o&&!En&&o(C)}if(Re){var Bt=A?je/A.duration()*(A._caScrollDist||0):je;ae(Bt+(W._isFlipped?1:0)),Re(Bt)}ce&&ce(-je/A.duration()*(A._caScrollDist||0))}},C.enable=function(ve,Ye){C.enabled||(C.enabled=!0,dn(I,"resize",sa),H||dn(I,"scroll",Ks),se&&dn(r,"refreshInit",se),ve!==!1&&(C.progress=Q=0,ze=ht=ke=te()),Ye!==!1&&C.refresh())},C.getTween=function(ve){return ve&&de?de.tween:L},C.setPositions=function(ve,Ye,Fe,je){if(A){var Ut=A.scrollTrigger,st=A.duration(),Mt=Ut.end-Ut.start;ve=Ut.start+Mt*ve/st,Ye=Ut.start+Mt*Ye/st}C.refresh(!1,!1,{start:Ip(ve,Fe&&!!C._startClamp),end:Ip(Ye,Fe&&!!C._endClamp)},je),C.update()},C.adjustPinSpacing=function(ve){if(Te&&ve){var Ye=Te.indexOf(T.d)+1;Te[Ye]=parseFloat(Te[Ye])+ve+nn,Te[1]=parseFloat(Te[1])+ve+nn,uo(Te)}},C.disable=function(ve,Ye){if(ve!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ye||L&&L.pause(),ne=0,we&&(we.uncache=1),se&&fn(r,"refreshInit",se),oe&&(oe.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!H)){for(var Fe=ot.length;Fe--;)if(ot[Fe].scroller===I&&ot[Fe]!==C)return;fn(I,"resize",sa),H||fn(I,"scroll",Ks)}},C.kill=function(ve,Ye){C.disable(ve,Ye),L&&!Ye&&L.kill(),l&&delete zh[l];var Fe=ot.indexOf(C);Fe>=0&&ot.splice(Fe,1),Fe===On&&Hl>0&&On--,Fe=0,ot.forEach(function(je){return je.scroller===C.scroller&&(Fe=1)}),Fe||Bn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Ye||i.kill()),Ue&&[Ue,Oe,W,N].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),ya===C&&(ya=0),d&&(we&&(we.uncache=1),Fe=0,ot.forEach(function(je){return je.pin===d&&Fe++}),Fe||(we.spacer=0)),n.onKill&&n.onKill(C)},ot.push(C),C.enable(!1,!1),Pe&&Pe(C),i&&i.add&&!Xe){var Ze=C.update;C.update=function(){C.update=Ze,ut.cache++,Ce||Ge||C.refresh()},Le.delayedCall(.01,C.update),Xe=.01,Ce=Ge=0}else C.refresh();d&&kE()},r.register=function(n){return Zs||(Le=n||e_(),Qg()&&window.document&&r.enable(),Zs=na),Zs},r.defaults=function(n){if(n)for(var i in n)bl[i]=n[i];return bl},r.disable=function(n,i){na=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),fn(ct,"wheel",Ks),fn(Dt,"scroll",Ks),clearInterval(vl),fn(Dt,"touchcancel",ki),fn(Tt,"touchstart",ki),yl(fn,Dt,"pointerdown,touchstart,mousedown",Np),yl(fn,Dt,"pointerup,touchend,mouseup",Up),sc.kill(),Ml(fn);for(var s=0;s<ut.length;s+=3)Tl(fn,ut[s],ut[s+1]),Tl(fn,ut[s],ut[s+2])},r.enable=function(){if(ct=window,Dt=document,ii=Dt.documentElement,Tt=Dt.body,Le&&(Oa=Le.utils.toArray,ga=Le.utils.clamp,Bh=Le.core.context||ki,du=Le.core.suppressOverwrites||ki,If=ct.history.scrollRestoration||"auto",Vh=ct.pageYOffset||0,Le.core.globals("ScrollTrigger",r),Tt)){na=1,co=document.createElement("div"),co.style.height="100vh",co.style.position="absolute",u_(),DE(),$t.register(Le),r.isTouch=$t.isTouch,Nr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Oh=$t.isTouch===1,dn(ct,"wheel",Ks),Df=[ct,Dt,ii,Tt],Le.matchMedia?(r.matchMedia=function(c){var u=Le.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Le.addEventListener("matchMediaInit",function(){l_(),kf()}),Le.addEventListener("matchMediaRevert",function(){return a_()}),Le.addEventListener("matchMedia",function(){gs(0,1),As("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return _u(),_u})):console.warn("Requires GSAP 3.11.0 or later"),_u(),dn(Dt,"scroll",Ks);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=hr(Tt),rn.m=Math.round(a.top+rn.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),vl=setInterval(Bp,250),Le.delayedCall(.5,function(){return Sl=0}),dn(Dt,"touchcancel",ki),dn(Tt,"touchstart",ki),yl(dn,Dt,"pointerdown,touchstart,mousedown",Np),yl(dn,Dt,"pointerup,touchend,mouseup",Up),Fh=Le.utils.checkPrefix("transform"),Gl.push(Fh),Zs=wn(),sc=Le.delayedCall(.2,gs).pause(),Js=[Dt,"visibilitychange",function(){var c=ct.innerWidth,u=ct.innerHeight;Dt.hidden?(Pp=c,Lp=u):(Pp!==c||Lp!==u)&&sa()},Dt,"DOMContentLoaded",gs,ct,"load",gs,ct,"resize",sa],Ml(dn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)Tl(fn,ut[l],ut[l+1]),Tl(fn,ut[l],ut[l+2])}},r.config=function(n){"limitCallbacks"in n&&(pu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(vl)||(vl=i)&&setInterval(Bp,i),"ignoreMobileResize"in n&&(Oh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ml(fn)||Ml(dn,n.autoRefreshEvents||"none"),$g=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Xn(n),o=ut.indexOf(s),a=Es(s);~o&&ut.splice(o,a?6:2),i&&(a?ji.unshift(ct,i,Tt,i,ii,i):ji.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ti(n)?Xn(n):n).getBoundingClientRect(),a=o[s?Ms:ys]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=Xn(n));var o=n.getBoundingClientRect(),a=o[s?Ms:ys],l=i==null?a/2:i in ac?ac[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ws.killAll||[];ws={},i.forEach(function(s){return s()})}},r})();$e.version="3.14.2";$e.saveStyles=function(r){return r?Oa(r).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Bh())}}):ei};$e.revert=function(r,e){return kf(!r,e)};$e.create=function(r,e){return new $e(r,e)};$e.refresh=function(r){return r?sa(!0):(Zs||$e.register())&&gs(!0)};$e.update=function(r){return++ut.cache&&_r(r===!0?2:0)};$e.clearScrollMemory=c_;$e.maxScroll=function(r,e){return Yi(r,e?Vn:rn)};$e.getScrollFunc=function(r,e){return Kr(Xn(r),e?Vn:rn)};$e.getById=function(r){return zh[r]};$e.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!bi};$e.snapDirectional=Bf;$e.addEventListener=function(r,e){var t=ws[r]||(ws[r]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(r,e){var t=ws[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Le.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Cn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Cn(s)&&(s=s(),dn($e,"refresh",function(){return s=e.batchMax()})),Oa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push($e.create(c))}),t};var Wp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===ii&&r(Tt,t)},Rl={auto:1,scroll:1},WE=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Rl[(l=xi(s)).overflowY]||Rl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Es(s)&&(Rl[(l=xi(s)).overflowY]||Rl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},f_=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&WE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&dn(Dt,$t.eventTypes[0],Yp,!1,!0)},onDisable:function(){return fn(Dt,$t.eventTypes[0],Yp,!0)}})},XE=/(input|label|select|textarea)/i,Xp,Yp=function(e){var t=XE.test(e.target.tagName);(t||Xp)&&(e._gsapAllow=!0,Xp=t)},YE=function(e){cs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Xn(e.target)||ii,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),f=Nr&&(e.content&&Xn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Kr(c,rn),g=Kr(c,Vn),_=1,m=($t.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,y=Cn(i)?function(){return i(a)}:function(){return i||2.8},b,S,M=f_(c,e.type,!0,s),w=function(){return S=!1},A=ki,P=ki,x=function(){l=Yi(c,rn),P=ga(Nr?1:0,l),n&&(A=ga(0,Yi(c,Vn))),b=Ts},T=function(){f._gsap.y=ia(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(S){requestAnimationFrame(w);var K=ia(a.deltaY/2),re=P(d.v-K);if(f&&re!==d.v+d.offset){d.offset=re-d.v;var C=ia((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=ut.cache,_r()}return!0}d.offset&&T(),S=!0},I,F,H,X,z=function(){x(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return Nr&&O.type==="touchmove"&&D()||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){S=!1;var O=_;_=ia((ct.visualViewport&&ct.visualViewport.scale||1)/m),I.pause(),O!==_&&vu(c,_>1.01?!0:n?!1:"x"),F=g(),H=d(),x(),b=Ts},e.onRelease=e.onGestureStart=function(O,K){if(d.offset&&T(),!K)X.restart(!0);else{ut.cache++;var re=y(),C,se;n&&(C=g(),se=C+re*.05*-O.velocityX/.227,re*=Wp(g,C,se,Yi(c,Vn)),I.vars.scrollX=A(se)),C=d(),se=C+re*.05*-O.velocityY/.227,re*=Wp(d,C,se,Yi(c,rn)),I.vars.scrollY=P(se),I.invalidate().duration(re).play(.01),(Nr&&I.vars.scrollY>=l||C>=l-1)&&Le.to({},{onUpdate:z,duration:re})}o&&o(O)},e.onWheel=function(){I._ts&&I.pause(),wn()-p>1e3&&(b=0,p=wn())},e.onChange=function(O,K,re,C,se){if(Ts!==b&&x(),K&&n&&g(A(C[2]===K?F+(O.startX-O.x):g()+K-C[1])),re){d.offset&&T();var Ee=se[2]===re,De=Ee?H+O.startY-O.y:d()+re-se[1],ke=P(De);Ee&&De!==ke&&(H+=ke-De),d(ke)}(re||K)&&_r()},e.onEnable=function(){vu(c,n?!1:"x"),$e.addEventListener("refresh",z),dn(ct,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){vu(c,!0),fn(ct,"resize",z),$e.removeEventListener("refresh",z),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=Nr,Nr&&!d()&&d(1),Nr&&Le.ticker.add(ki),X=a._dc,I=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:h_(d,d(),function(){return I.pause()})},onUpdate:_r,onComplete:X.vars.onComplete}),a};$e.sort=function(r){if(Cn(r))return ot.sort(r);var e=ct.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(r){return new $t(r)};$e.normalizeScroll=function(r){if(typeof r>"u")return Fn;if(r===!0&&Fn)return Fn.enable();if(r===!1){Fn&&Fn.kill(),Fn=r;return}var e=r instanceof $t?r:YE(r);return Fn&&Fn.target===e.target&&Fn.kill(),Es(e.target)&&(Fn=e),e};$e.core={_getVelocityProp:Uh,_inputObserver:f_,_scrollers:ut,_proxies:ji,bridge:{ss:function(){bi||As("scrollStart"),bi=wn()},ref:function(){return En}}};e_()&&Le.registerPlugin($e);let Ko,js,qp=typeof Symbol=="function"?Symbol():"_split",Gh,qE=()=>Gh||oa.register(window.gsap),Kp=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ka=r=>typeof r=="string"?ka(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...ka(t)):e.push(t),e),[]):[r],jp=r=>ka(r).filter(e=>e instanceof HTMLElement),Wh=[],Su=function(){},KE={add:r=>r()},jE=/\s+/g,$p=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),lc={left:0,top:0,width:0,height:0},$E=(r,e)=>{for(;++e<r.length&&r[e]===lc;);return r[e]||lc},Zp=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Jp=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Wh),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Qp=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),$s=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Xh=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return l&&(n=n.replace("++","")),c.collection=t,c},ZE=(r,e,t,n)=>{let i=Xh("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},d_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=e,m=r.getBoundingClientRect(),p=m,y=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",b=0,S=t.collection,M,w,A,P,x,T,D,I,F,H,X,z,O,K,re,C,se,Ee;for(typeof d=="object"?(A=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",M=w!==" ";f<h.length;f++)if(P=h[f],P.nodeType===3){for(re=P.textContent||"",g?re=re.replace(jE," "):y&&(re=re.replace(/\n/g,w+`
`)),_&&(re=_(re,r)),P.textContent=re,x=w||A?re.split(A||w):re.match(a)||Wh,se=x[x.length-1],I=M?se.slice(-1)===" ":!se,se||x.pop(),p=m,D=M?x[0].charAt(0)===" ":!x[0],D&&$s(" ",r,P),x[0]||x.shift(),Jp(x,l),s&&c||(P.textContent=""),F=1;F<=x.length;F++)if(C=x[F-1],!g&&y&&C.charAt(0)===`
`&&((u=P.previousSibling)==null||u.remove(),$s(document.createElement("br"),r,P),C=C.slice(1)),!g&&C==="")$s(w,r,P);else if(C===" ")r.insertBefore(document.createTextNode(" "),P);else{if(M&&C.charAt(0)===" "&&$s(" ",r,P),b&&F===1&&!D&&S.indexOf(b.parentNode)>-1?(T=S[S.length-1],T.appendChild(document.createTextNode(n?"":C))):(T=t(n?"":C),$s(T,r,P),b&&F===1&&!D&&T.insertBefore(b,T.firstChild)),n)for(X=Kp?Jp([...Kp.segment(C)].map(De=>De.segment),l):C.match(a)||Wh,Ee=0;Ee<X.length;Ee++)T.appendChild(X[Ee]===" "?document.createTextNode(" "):n(X[Ee]));if(s&&c){if(re=P.textContent=re.substring(C.length+1,re.length),H=T.getBoundingClientRect(),H.top>p.top&&H.left<=p.left){for(z=r.cloneNode(),O=r.childNodes[0];O&&O!==T;)K=O,O=O.nextSibling,z.appendChild(K);r.parentNode.insertBefore(z,r),i&&Qp(z)}p=H}(F<x.length||I)&&$s(F>=x.length?" ":M&&C.slice(-1)===" "?" "+w:w,r,P)}r.removeChild(P),b=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),b=P):(d_(P,e,t,n,i,s,o,a,l,!0),b=0),i&&Qp(P))};const p_=class m_{constructor(e,t){this.isSplit=!1,qE(),this.elements=jp(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[qp])==null||a._data.orig.filter(({element:l})=>l===o).forEach(Zp)),o[qp]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Su(this),this.split(t)}split(e){return(this._ctx||KE).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+$p.source,"gu"):$p,m=!!e.ignore&&jp(e.ignore),{orig:p,animTime:y,obs:b}=this._data,S;(h||f||u)&&(this.elements.forEach((M,w)=>{p[w]={element:M,html:M.innerHTML,ariaL:M.getAttribute("aria-label"),ariaH:M.getAttribute("aria-hidden")},n==="auto"?M.setAttribute("aria-label",(M.textContent||"").trim()):n==="hidden"&&M.setAttribute("aria-hidden","true");let A=[],P=[],x=[],T=h?Xh("char",e,A):null,D=Xh("word",e,P),I,F,H,X;if(d_(M,e,D,T,d,i&&(u||d),m,_,g,!1),u){let z=ka(M.childNodes),O=ZE(M,z,e,x),K,re=[],C=0,se=z.map(ke=>ke.nodeType===1?ke.getBoundingClientRect():lc),Ee=lc,De;for(I=0;I<z.length;I++)K=z[I],K.nodeType===1&&(K.nodeName==="BR"?((!I||z[I-1].nodeName!=="BR")&&(re.push(K),O(C,I+1)),C=I+1,Ee=$E(se,I)):(De=se[I],I&&De.top>Ee.top&&De.left<Ee.left+Ee.width-1&&(O(C,I),C=I),Ee=De));C<I&&O(C,I),re.forEach(ke=>{var qe;return(qe=ke.parentNode)==null?void 0:qe.removeChild(ke)})}if(!f){for(I=0;I<P.length;I++)if(F=P[I],h||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!u){for(H=document.createElement("span"),H.style.whiteSpace="nowrap";F.firstChild;)H.appendChild(F.firstChild);F.replaceWith(H)}else F.replaceWith(...F.childNodes);else X=F.nextSibling,X&&X.nodeType===3&&(X.textContent=(F.textContent||"")+(X.textContent||""),F.remove());P.length=0,M.normalize()}this.lines.push(...x),this.words.push(...P),this.chars.push(...A)}),c&&this[c]&&this.masks.push(...this[c].map(M=>{let w=M.cloneNode();return M.replaceWith(w),w.appendChild(M),M.className&&(w.className=M.className.trim()+"-mask"),w.style.overflow="clip",w}))),this.isSplit=!0,js&&u&&(a?js.addEventListener("loadingdone",this._split):js.status==="loading"&&console.warn("SplitText called before fonts loaded")),(S=o&&o(this))&&S.totalTime&&(this._data.anim=y?S.totalTime(y):S),u&&a&&this.elements.forEach((M,w)=>{p[w].width=M.offsetWidth,b&&b.observe(M)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),js?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Zp),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new m_(e,t)}static register(e){Ko=Ko||e||window.gsap,Ko&&(ka=Ko.utils.toArray,Su=Ko.core.context||Su),!Gh&&window.innerWidth>0&&(js=document.fonts,Gh=!0)}};p_.version="3.14.2";let oa=p_;var JE="1.3.17";function g_(r,e,t){return Math.max(r,Math.min(e,t))}function QE(r,e,t){return(1-t)*r+t*e}function ew(r,e,t,n){return QE(r,e,1-Math.exp(-t*n))}function tw(r,e){return(r%e+e)%e}var nw=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=g_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ew(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function iw(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var rw=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=iw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},__=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},em=100/6,Dr={passive:!1},sw=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Dr),this.element.addEventListener("touchstart",this.onTouchStart,Dr),this.element.addEventListener("touchmove",this.onTouchMove,Dr),this.element.addEventListener("touchend",this.onTouchEnd,Dr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new __;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Dr),this.element.removeEventListener("touchstart",this.onTouchStart,Dr),this.element.removeEventListener("touchmove",this.onTouchMove,Dr),this.element.removeEventListener("touchend",this.onTouchEnd,Dr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?em:n===2?this.window.width:1,s=n===1?em:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},tm=r=>Math.min(1,1.001-Math.pow(2,-10*r)),ow=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new nw;emitter=new __;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:b=!1,anchors:S=!1,autoToggle:M=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:P=A,stopInertiaOnNavigate:x=!1}={}){window.lenisVersion=JE,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=tm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:y,autoRaf:b,anchors:S,autoToggle:M,allowNestedScroll:w,naiveDimensions:P,stopInertiaOnNavigate:x},this.dimensions=new rw(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new sw(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=g_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=tm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const M=window.getComputedStyle(r);i.computedStyle=M;const w=M.overflowX,A=M.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(A),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const M=e!==0,w=t!==0;M&&s&&a&&(g="x"),w&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,y,b;if(g==="x")_=r.scrollLeft,m=c-h,p=e,y=s,b=a;else if(g==="y")_=r.scrollTop,m=u-f,p=t,y=o,b=l;else return!1;return(p>0?_<m:_>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?tw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};document.addEventListener("DOMContentLoaded",()=>{Kt.registerPlugin($e,oa);const r=new ow;r.on("scroll",$e.update),Kt.ticker.add(k=>r.raf(k*1e3)),Kt.ticker.lagSmoothing(0);const e=()=>{const k=window.visualViewport?.height??window.innerHeight,Z=window.visualViewport?.width??window.innerWidth;document.documentElement.style.setProperty("--vh",`${k*.01}px`),document.documentElement.style.setProperty("--vw",`${Z*.01}px`)},t=()=>{e(),typeof r?.resize=="function"&&r.resize(),$e.refresh()};e(),window.addEventListener("pageshow",k=>{requestAnimationFrame(()=>{requestAnimationFrame(t)}),k?.persisted&&window.setTimeout(t,50)}),window.addEventListener("load",()=>{window.setTimeout(t,50)}),window.addEventListener("orientationchange",()=>{window.setTimeout(t,250)}),window.visualViewport&&(window.visualViewport.addEventListener("resize",t),window.visualViewport.addEventListener("scroll",t));const n=document.querySelector(".nav"),i=document.querySelector(".nav-menu"),s=document.querySelector(".nav-toggle"),o=document.querySelector(".nav-subtoggle"),a=document.querySelector("#projects-submenu"),l=document.querySelectorAll(".nav-menu .nav-link, .nav-menu .nav-sublink");let c=!1,u=!1,h=window.scrollY;const f=k=>{!o||!a||(o.setAttribute("aria-expanded",String(k)),a.setAttribute("aria-hidden",String(!k)),a.classList.toggle("is-open",k))},d=k=>{n&&(u=k,n.classList.toggle("nav-hidden",k))},g=Kt.timeline({paused:!0});g.to(i,{opacity:1,y:"0%",duration:.4,ease:"power3.out"}),g.addLabel("linksStart","-=0.15"),g.to(l,{opacity:1,y:0,duration:.5,stagger:.05,ease:"power3.out"},"linksStart"),o&&g.to(o,{opacity:1,y:0,duration:.35,ease:"power3.out"},"linksStart+=0.375");const _=k=>{if(c=k,document.body.classList.toggle("nav-open",c),s.setAttribute("aria-expanded",String(c)),i.setAttribute("aria-hidden",String(!c)),c&&d(!1),!c){f(!1),g.reverse();return}g.play(0)},m=()=>{c&&_(!1)},p=k=>{if(!n)return;if(c){d(!1),h=k;return}const Z=k-h;if(k<=40){d(!1),h=k;return}Z>10&&!u?d(!0):Z<-6&&u&&d(!1),h=k};typeof r?.on=="function"&&r.on("scroll",({scroll:k})=>{p(k)}),window.addEventListener("scroll",()=>{p(window.scrollY)},{passive:!0}),p(window.scrollY);const y=(k,Z=1.2)=>{if(typeof r?.scrollTo=="function"){r.scrollTo(k,{duration:Z,easing:pe=>1-Math.pow(1-pe,3)});return}window.scrollTo({top:k,behavior:"smooth"})},b=(k,Z=1.2)=>{if(!k)return;const pe=k.getBoundingClientRect().top+window.scrollY;y(pe,Z)};s&&s.addEventListener("click",()=>{_(!c)}),o&&o.addEventListener("click",k=>{k.preventDefault(),k.stopPropagation();const Z=o.getAttribute("aria-expanded")==="true";f(!Z)}),l.forEach(k=>{k.addEventListener("click",()=>{m()})}),document.querySelector(".projects")&&(document.querySelectorAll('a[href$="#projects-anchor"]').forEach(L=>{L.addEventListener("click",le=>{le.preventDefault();const ie=$e.getById("projects-pin");if(!ie){b(document.querySelector("#projects-anchor")),m();return}const ne=.132*.1,Pe=Math.min(1,ne+.35*.16),et=ie.start+(ie.end-ie.start)*Pe;y(et),m()})}),document.querySelectorAll('a[href$="#about-anchor"]').forEach(L=>{L.addEventListener("click",le=>{le.preventDefault();const ie=$e.getById("projects-pin");if(!ie){b(document.querySelector("#about-anchor")),m();return}const Pe=.132*.1+.35+.005,_e=ie.start+(ie.end-ie.start)*(Pe+.02);y(_e),m()})}),document.querySelectorAll('a[href$="#gallery-section"]').forEach(L=>{L.addEventListener("click",le=>{le.preventDefault();const ie=document.querySelector("#gallery-section");if(!ie)return;const oe=$e.getById("gallery-pin"),ne=oe?oe.start+1:ie.getBoundingClientRect().top+window.scrollY,J=1.2;y(ne,J),window.galleryPinned=!0,window.setTimeout(()=>{$e.update()},J*1e3+100),m()})}));const M=(k,Z={})=>{const{total:pe=.7,charDuration:L=.12,ease:le="power3.out",splitType:ie}=Z,oe=ie??"words",ne=new oa(k,{type:oe,charsClass:"char",wordsClass:"char"}),J=oe==="words"?ne.words:ne.chars;J.forEach(_e=>{_e.innerHTML=`<span>${_e.innerHTML}</span>`});const ce=J.length||1,Pe=ce>1?Math.max(0,(pe-L)/(ce-1)):0,et=Kt.timeline({paused:!0});return Kt.set(`${k} .char > span`,{y:"100%"}),et.to(`${k} .char > span`,{y:"0%",duration:L,ease:le,stagger:Pe}),{split:ne,tl:et}};let w=null,A=null,P=null,x=null,T=null,D=null,I=null,F=[];(()=>{F.forEach(({split:Z,tl:pe})=>{pe&&pe.kill(),Z&&typeof Z.revert=="function"&&Z.revert()}),F=[];let k=M(".header-1 h1",{total:.7,charDuration:.12});w=k.tl,F.push(k),k=M('.horizontal-grid-row-2[data-position="4"] h2',{total:.5,charDuration:.12}),A=k.tl,F.push(k),k=M('.horizontal-grid-row[data-position="5"] h2',{total:.5,charDuration:.12}),P=k.tl,F.push(k),k=M('.horizontal-grid-row[data-position="7"] h1',{total:.5,charDuration:.12}),x=k.tl,F.push(k),k=M('.horizontal-grid-row-2[data-position="9"] h1',{total:.5,charDuration:.12}),T=k.tl,F.push(k),k=M('.horizontal-grid-row[data-position="10"] h2',{total:.5,charDuration:.12}),D=k.tl,F.push(k),k=M('.horizontal-grid-row-2[data-position="10"] h2',{total:.5,charDuration:.12}),I=k.tl,F.push(k),$e.refresh()})();const X=new oa(".tooltip .title h2",{type:"lines",linesClass:"line"}),z=new oa(".tooltip .description p",{type:"lines",linesClass:"line"}),O=document.querySelector(".rectangular-mask");if(O){const k=(Z,pe)=>{const L=O.getBoundingClientRect(),le=(Z-L.left)/L.width*100,ie=(pe-L.top)/L.height*100,oe=Math.max(0,Math.min(100,le)),ne=Math.max(0,Math.min(100,ie));O.style.setProperty("--mx",`${oe}%`),O.style.setProperty("--my",`${ne}%`)};O.addEventListener("pointermove",Z=>{k(Z.clientX,Z.clientY)}),O.addEventListener("pointerleave",()=>{O.style.setProperty("--mx","50%"),O.style.setProperty("--my","50%")})}[...X.lines,...z.lines].forEach(k=>{k.innerHTML=`<span>${k.innerHTML}</span>`});const K=[{trigger:.02,elements:[".tooltip:nth-of-type(1) .icon ion-icon",".tooltip:nth-of-type(1) .title .line > span",".tooltip:nth-of-type(1) .description .line > span"]},{trigger:.07,elements:[".tooltip:nth-of-type(2) .icon ion-icon",".tooltip:nth-of-type(2) .title .line > span",".tooltip:nth-of-type(2) .description .line > span"]}],re=K.reduce((k,{trigger:Z})=>Math.max(k,Z??0),0);let C=null,se=null,Ee=0,De=0;const ke=new V(0,1,0),qe=new Ex,Q=8,te=new md,de=new An(60,window.innerWidth/window.innerHeight,.1,1e3),we=new rp({antialias:!0,alpha:!0});we.setClearColor(0,0),we.setSize(window.innerWidth,window.innerHeight),we.setPixelRatio(Math.min(window.devicePixelRatio,2)),we.shadowMap.enabled=!0,we.shadowMap.type=Mu,"outputColorSpace"in we&&(we.outputColorSpace=sn),we.toneMapping=Ti,we.toneMappingExposure=1;const Ae=document.querySelector(".model-container--laptop");if(!Ae){console.warn('Missing ".model-container--laptop" in HTML. Canvas not attached.');return}Ae.appendChild(we.domElement),te.add(new Id(16777215,.7));const ze=new Zo(16777215,1);ze.position.set(1,2,3),ze.castShadow=!0,ze.shadow.bias=-.001,ze.shadow.mapSize.width=1024,ze.shadow.mapSize.height=1024,te.add(ze);const ht=new Zo(16777215,.5);ht.position.set(-2,0,-2),te.add(ht);function Ce(){if(!C||!se)return;const k=window.innerWidth<1e3;C.rotation.set(0,0,0),C.rotation.z=k?0:Ir.degToRad(25);const Z=new kn().setFromObject(C),pe=Z.getCenter(new V),L=Z.getSize(new V);C.position.sub(pe),C.position.y+=L.y*.2,Ee=0,De!==0&&(C.rotateOnAxis(ke,De),Ee=De);const le=k?1.35:1.15,oe=new kn().setFromObject(C).getSize(new V),ne=Ir.degToRad(de.fov),J=oe.y*le/(2*Math.tan(ne/2)),ce=oe.x*le/(2*Math.tan(ne/2)*de.aspect),Pe=Math.max(J,ce)+oe.z*.5;de.position.set(0,0,Pe),de.lookAt(0,0,0)}new op().load("/models/laptop.glb",k=>{C=k.scene,C.traverse(pe=>{if(pe.isMesh){pe.castShadow=!0,pe.receiveShadow=!0;const L=pe.material;L&&typeof L=="object"&&("roughness"in L&&(L.roughness=.05),"metalness"in L&&(L.metalness=.9),L.needsUpdate=!0)}}),se=new kn().setFromObject(C).getSize(new V),te.add(C),Ce()},void 0,k=>console.error("GLB load failed ❌",k));let Ue=null,Oe=null,W=0,N=0;const xt=new V(0,1,0),Qe=8,Xe=Math.PI*2,ge=document.querySelector(".model-container--gameboy");ge||console.warn('Missing ".model-container--gameboy" in HTML. Canvas not attached.');const R=()=>{if(!ge)return{width:window.innerWidth,height:window.innerHeight};const k=ge.offsetWidth||window.innerWidth,Z=ge.offsetHeight||window.innerHeight;return{width:k,height:Z}},v=ge?new md:null,U=ge?new An(60,1,.1,1e3):null,j=ge?new rp({antialias:!0,alpha:!0}):null;if(U){const{width:k,height:Z}=R();U.aspect=k/Z,U.updateProjectionMatrix()}if(j&&ge){const{width:k,height:Z}=R();j.setClearColor(0,0),j.setSize(k,Z),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=Mu,"outputColorSpace"in j&&(j.outputColorSpace=sn),j.toneMapping=Ti,j.toneMappingExposure=1,ge.appendChild(j.domElement),Kt.set(ge,{xPercent:-50,yPercent:-50,scale:0,autoAlpha:0,transformOrigin:"50% 50%"})}if(v){v.add(new Id(16777215,.8));const k=new Zo(16777215,.9);k.position.set(1,2,3),k.castShadow=!0,k.shadow.bias=-.001,k.shadow.mapSize.width=1024,k.shadow.mapSize.height=1024,v.add(k);const Z=new Zo(16777215,.5);Z.position.set(-2,0,-2),v.add(Z)}function ee(){if(!Ue||!Oe||!U)return;const k=window.innerWidth<1e3;Ue.rotation.set(0,0,0),Ue.rotation.y=Ir.degToRad(90);const Z=new kn().setFromObject(Ue),pe=Z.getCenter(new V),L=Z.getSize(new V);Ue.position.sub(pe);const le=k?-.14:-.1;Ue.position.x+=L.x*le;const ie=k?-.12:-.05;Ue.position.y+=L.y*ie,W=0,N!==0&&(Ue.rotateOnAxis(xt,N),W=N);const oe=k?1.85:1.3,J=new kn().setFromObject(Ue).getSize(new V),ce=Math.sqrt(J.x*J.x+J.z*J.z),Pe=Ir.degToRad(U.fov),et=J.y*oe/(2*Math.tan(Pe/2)),_e=ce*oe/(2*Math.tan(Pe/2)*U.aspect),Ie=Math.max(et,_e)+J.z*.5;U.position.set(0,0,Ie),U.lookAt(0,0,0)}v&&new op().load("/models/nintendo_gameboy_low-poly.glb",k=>{Ue=k.scene,Ue.traverse(pe=>{pe.isMesh&&(pe.castShadow=!0,pe.receiveShadow=!0)}),Oe=new kn().setFromObject(Ue).getSize(new V),v.add(Ue),ee()},void 0,k=>console.error("Gameboy GLB load failed",k));function ye(){requestAnimationFrame(ye);const k=Math.min(.05,qe.getDelta());if(C){const Z=Ir.damp(Ee,De,Q,k),pe=Z-Ee;Math.abs(pe)>1e-6&&(C.rotateOnAxis(ke,pe),Ee=Z)}if(Ue){const Z=Ir.damp(W,N,Qe,k),pe=Z-W;Math.abs(pe)>1e-6&&(Ue.rotateOnAxis(xt,pe),W=Z)}we.render(te,de),j&&v&&U&&j.render(v,U)}ye();let ue=null;window.addEventListener("resize",()=>{ue&&window.clearTimeout(ue),ue=window.setTimeout(()=>{if(e(),de.aspect=window.innerWidth/window.innerHeight,de.updateProjectionMatrix(),we.setSize(window.innerWidth,window.innerHeight),we.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ce(),U&&j){const{width:k,height:Z}=R();U.aspect=k/Z,U.updateProjectionMatrix(),j.setSize(k,Z),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),ee()}typeof r?.resize=="function"&&r.resize(),$e.refresh()},150)});const be=document.querySelector(".header-1"),Te=document.querySelector(".header-2"),ae=be?.querySelector(".horizontal-grid-spacer:last-of-type"),he=document.querySelector(".projects");he&&$e.create({trigger:he,start:"top top",end:()=>`+=${window.innerHeight*10}`,pin:!0,pinSpacing:!0,scrub:1,id:"projects-pin",onUpdate:({progress:k})=>{const pe=Math.max(0,Math.min(1,k/.132)),L=O?.getBoundingClientRect?.(),le=L?.width??0,ie=L?.height??0,oe=pe,ne=le&&ie?le/ie:1,J=oe,ce=oe;let Pe=oe;ne>1&&(Pe=(1-1/ne*(1-2*J))/2);const Ie=Math.max(0,Math.min(1,(oe-.2)/.25)),Ze=ce+(Pe-ce)*Ie,ve=Math.max(0,Math.min(.5,Ze)),Ye=Math.max(0,Math.min(.5,J)),Fe=le*(1-2*ve),je=ie*(1-2*Ye),Ut=0,Mt=Math.max(0,Math.min(1,(oe-Ut)/(1-Ut)))*3,Gt=Math.max(0,Math.min(Fe,je)/2)*Mt;Kt.set(".rectangular-mask",{clipPath:`inset(${Ye*100}% ${ve*100}% ${Ye*100}% ${ve*100}% round ${Gt}px)`});const Ct=Math.min(1,pe*.9);Kt.set(".rect-intro",{scale:1-Math.min(1,pe*1.4)});const pt=.132*.1,at=.35,Wt=10,vt=Math.max(0,Math.min(1,(k-pt)/at)),un=.05,Ln=.25,Yt=.35;w.progress(Math.min(1,(vt-un)*Wt)),A.progress(Math.min(1,(vt-Ln)*Wt)),P.progress(Math.min(1,(vt-Yt)*Wt));const Bt=-(be?be.scrollWidth||be.getBoundingClientRect().width:window.innerWidth),di=k<pt?0:k>pt+at?Bt:Kt.utils.interpolate(0,Bt,vt);be&&Kt.set(be,{x:di,xPercent:0});const Ui=pt,qt=at*1.6,E=Math.max(0,Math.min(1,(k-Ui)/qt));Kt.set("#header-1 .background-h1",{xPercent:k<Ui?0:k>Ui+qt?-10:-10*E});const B=pt+at+.005,q=.1,Y=Math.max(0,Math.min(1,(k-B)/q)),G=Y*100;if(Kt.set(".circular-mask",{clipPath:`circle(${G}% at 50% 50%)`}),s){const Wn=Y*Y*(3-2*Y);Kt.set(s,{backgroundPosition:`${Wn*100}% 50%`})}let fe=1;if(ae&&Bt!==0){const Wn=ae.getBoundingClientRect(),Io=window.innerWidth*.5,Sc=Wn.right-di,No=Math.max(0,Math.min(1,(Io-Sc)/Bt)),zf=pt+at*No,Ga=Math.min(Math.max(zf,pt),B),S_=B+q*.2,M_=Math.max(1e-4,S_-Ga),Mc=Math.max(0,Math.min(1,(k-Ga)/M_));fe=1-Mc*Mc*(3-2*Mc)}Kt.set(".model-container--laptop",{scale:Ct*fe,autoAlpha:1});const Se=B+q+.02,me=.25,xe=Math.max(0,Math.min(1,(k-Se)/me)),Ne=.18,We=1-Ne;let Ve=xe;if(xe>We){const Wn=(xe-We)/Ne,Io=-Wn*Wn*Wn+Wn*Wn+Wn;Ve=We+Io*Ne}const nt=Te?Te.scrollWidth||Te.getBoundingClientRect().width:window.innerWidth,yt=window.innerWidth,It=-nt,Ft=k<Se?yt:k>Se+me?It:Kt.utils.interpolate(yt,It,Ve),bt=.15,He=.4,St=.55;if(x.progress(Math.min(1,(xe-bt)*Wt)),T.progress(Math.min(1,(xe-He)*Wt)),D.progress(Math.min(1,(xe-St)*Wt)),I.progress(Math.min(1,(xe-St)*Wt)),Te){const Wn=k>=Se;Kt.set(Te,{x:Ft,xPercent:0,autoAlpha:Wn?1:0})}const lt=Se+me-.05,gn=Math.max(0,Math.min(1,(k-lt)/.2)),Tr=gn*gn*(3-2*gn);Kt.set(".tooltip .divider",{scaleX:Tr});const vn=.07;K.forEach(({trigger:Wn,elements:Io})=>{const Sc=lt+Wn,No=Math.max(0,Math.min(1,(k-Sc)/vn)),Ga=`${(1-No*No*(3-2*No))*125}%`;Kt.set(Io,{y:Ga})});const br=lt+(K[0]?.trigger??0),Rt=lt+re+vn,Sn=Math.max(1e-4,Rt-br),Mn=Math.max(0,Math.min(1,(k-br)/Sn)),tn=Mn*Mn*(3-2*Mn),yn=tn*.6;N=Xe*tn,Kt.set(".model-container--gameboy",{scale:yn,autoAlpha:tn});const Cs=.05,nr=lt+re+.03,x_=Math.max(1e-4,nr-Cs),v_=Math.max(0,Math.min(1,(k-Cs)/x_));De=Math.PI*3*4*v_}});const Re=document.querySelector(".gallery-section");Re&&$e.create({trigger:Re,start:"top top",end:()=>`+=${window.innerHeight*1.5}`,pin:!0,pinSpacing:!0,id:"gallery-pin",onEnter:()=>{window.galleryPinned=!0},onLeave:()=>{window.galleryPinned=!1},onEnterBack:()=>{window.galleryPinned=!0},onLeaveBack:()=>{window.galleryPinned=!1}})});export{ow as L,$e as S,Kt as g};

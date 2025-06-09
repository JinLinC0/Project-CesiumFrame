const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CgMLLQe2.js","assets/base-80a1f760-COOjvXmK.js","assets/consoleHook-59e792cb-D76BNI1I.js","assets/index-DtcaHI-e.js","assets/index--octljBG.css","assets/index-585bceb7-BfnANNfy.js","assets/index-CS48Wr0i.js"])))=>i.map(i=>d[i]);
import{q as ds,x as Qu,y as ue,z as oi,r as U,A as Tu,B as he,C as Ho,D as Oe,E as Vn,G as Rr,b as y,H as me,I as zt,J as Rt,K as Si,F as rt,L as m0,M as _,N as O0,O as g0,P as v0,Q as w0,u as Vt,_ as y0,R as b0,n as S0,d as C0,f as qs,w as Br,a as x0,o as k0,k as P0,l as $0}from"./index-DtcaHI-e.js";class G{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=Zn(this,e,t);let s=[];return this.decompose(0,e,s,2),n.length&&n.decompose(0,n.length,s,3),this.decompose(t,this.length,s,1),St.from(s,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=Zn(this,e,t);let n=[];return this.decompose(e,t,n,0),St.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),s=new ur(this),o=new ur(e);for(let a=t,l=t;;){if(s.next(a),o.next(a),a=0,s.lineBreak!=o.lineBreak||s.done!=o.done||s.value!=o.value)return!1;if(l+=s.value.length,s.done||l>=n)return!0}}iter(e=1){return new ur(this,e)}iterRange(e,t=this.length){return new Mu(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t==null&&(t=this.lines+1);let s=this.line(e).from;n=this.iterRange(s,Math.max(s,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new Ru(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?G.empty:e.length<=32?new pe(e):St.from(pe.split(e,[]))}}class pe extends G{constructor(e,t=Q0(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,s){for(let o=0;;o++){let a=this.text[o],l=s+a.length;if((t?n:l)>=e)return new T0(s,l,n,a);s=l+1,n++}}decompose(e,t,n,s){let o=e<=0&&t>=this.length?this:new pe(qa(this.text,e,t),Math.min(t,this.length)-Math.max(0,e));if(s&1){let a=n.pop(),l=ai(o.text,a.text.slice(),0,o.length);if(l.length<=32)n.push(new pe(l,a.length+o.length));else{let c=l.length>>1;n.push(new pe(l.slice(0,c)),new pe(l.slice(c)))}}else n.push(o)}replace(e,t,n){if(!(n instanceof pe))return super.replace(e,t,n);[e,t]=Zn(this,e,t);let s=ai(this.text,ai(n.text,qa(this.text,0,e)),t),o=this.length+n.length-(t-e);return s.length<=32?new pe(s,o):St.from(pe.split(s,[]),o)}sliceString(e,t=this.length,n=`
`){[e,t]=Zn(this,e,t);let s="";for(let o=0,a=0;o<=t&&a<this.text.length;a++){let l=this.text[a],c=o+l.length;o>e&&a&&(s+=n),e<c&&t>o&&(s+=l.slice(Math.max(0,e-o),t-o)),o=c+1}return s}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(e,t){let n=[],s=-1;for(let o of e)n.push(o),s+=o.length+1,n.length==32&&(t.push(new pe(n,s)),n=[],s=-1);return s>-1&&t.push(new pe(n,s)),t}}class St extends G{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let n of e)this.lines+=n.lines}lineInner(e,t,n,s){for(let o=0;;o++){let a=this.children[o],l=s+a.length,c=n+a.lines-1;if((t?c:l)>=e)return a.lineInner(e,t,n,s);s=l+1,n=c+1}}decompose(e,t,n,s){for(let o=0,a=0;a<=t&&o<this.children.length;o++){let l=this.children[o],c=a+l.length;if(e<=c&&t>=a){let u=s&((a<=e?1:0)|(c>=t?2:0));a>=e&&c<=t&&!u?n.push(l):l.decompose(e-a,t-a,n,u)}a=c+1}}replace(e,t,n){if([e,t]=Zn(this,e,t),n.lines<this.lines)for(let s=0,o=0;s<this.children.length;s++){let a=this.children[s],l=o+a.length;if(e>=o&&t<=l){let c=a.replace(e-o,t-o,n),u=this.lines-a.lines+c.lines;if(c.lines<u>>4&&c.lines>u>>6){let h=this.children.slice();return h[s]=c,new St(h,this.length-(t-e)+n.length)}return super.replace(o,l,c)}o=l+1}return super.replace(e,t,n)}sliceString(e,t=this.length,n=`
`){[e,t]=Zn(this,e,t);let s="";for(let o=0,a=0;o<this.children.length&&a<=t;o++){let l=this.children[o],c=a+l.length;a>e&&o&&(s+=n),e<c&&t>a&&(s+=l.sliceString(e-a,t-a,n)),a=c+1}return s}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(e,t){if(!(e instanceof St))return 0;let n=0,[s,o,a,l]=t>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;s+=t,o+=t){if(s==a||o==l)return n;let c=this.children[s],u=e.children[o];if(c!=u)return n+c.scanIdentical(u,t);n+=c.length+1}}static from(e,t=e.reduce((n,s)=>n+s.length+1,-1)){let n=0;for(let p of e)n+=p.lines;if(n<32){let p=[];for(let m of e)m.flatten(p);return new pe(p,t)}let s=Math.max(32,n>>5),o=s<<1,a=s>>1,l=[],c=0,u=-1,h=[];function d(p){let m;if(p.lines>o&&p instanceof St)for(let O of p.children)d(O);else p.lines>a&&(c>a||!c)?(f(),l.push(p)):p instanceof pe&&c&&(m=h[h.length-1])instanceof pe&&p.lines+m.lines<=32?(c+=p.lines,u+=p.length+1,h[h.length-1]=new pe(m.text.concat(p.text),m.length+1+p.length)):(c+p.lines>s&&f(),c+=p.lines,u+=p.length+1,h.push(p))}function f(){c!=0&&(l.push(h.length==1?h[0]:St.from(h,u)),u=-1,c=h.length=0)}for(let p of e)d(p);return f(),l.length==1?l[0]:new St(l,t)}}G.empty=new pe([""],0);function Q0(r){let e=-1;for(let t of r)e+=t.length+1;return e}function ai(r,e,t=0,n=1e9){for(let s=0,o=0,a=!0;o<r.length&&s<=n;o++){let l=r[o],c=s+l.length;c>=t&&(c>n&&(l=l.slice(0,n-s)),s<t&&(l=l.slice(t-s)),a?(e[e.length-1]+=l,a=!1):e.push(l)),s=c+1}return e}function qa(r,e,t){return ai(r,[""],e,t)}class ur{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[t>0?1:(e instanceof pe?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,s=this.nodes[n],o=this.offsets[n],a=o>>1,l=s instanceof pe?s.text.length:s.children.length;if(a==(t>0?l:0)){if(n==0)return this.done=!0,this.value="",this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((o&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(s instanceof pe){let c=s.text[a+(t<0?-1:0)];if(this.offsets[n]+=t,c.length>Math.max(0,e))return this.value=e==0?c:t>0?c.slice(e):c.slice(0,c.length-e),this;e-=c.length}else{let c=s.children[a+(t<0?-1:0)];e>c.length?(e-=c.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(c),this.offsets.push(t>0?1:(c instanceof pe?c.text.length:c.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Mu{constructor(e,t,n){this.value="",this.done=!1,this.cursor=new ur(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:s}=this.cursor.next(e);return this.pos+=(s.length+e)*t,this.value=s.length<=n?s:t<0?s.slice(s.length-n):s.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class Ru{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:t,lineBreak:n,value:s}=this.inner.next(e);return t&&this.afterBreak?(this.value="",this.afterBreak=!1):t?(this.done=!0,this.value=""):n?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=s,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(G.prototype[Symbol.iterator]=function(){return this.iter()},ur.prototype[Symbol.iterator]=Mu.prototype[Symbol.iterator]=Ru.prototype[Symbol.iterator]=function(){return this});class T0{constructor(e,t,n,s){this.from=e,this.to=t,this.number=n,this.text=s}get length(){return this.to-this.from}}function Zn(r,e,t){return e=Math.max(0,Math.min(r.length,e)),[e,Math.max(e,Math.min(r.length,t))]}let Qn="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(r=>r?parseInt(r,36):1);for(let r=1;r<Qn.length;r++)Qn[r]+=Qn[r-1];function M0(r){for(let e=1;e<Qn.length;e+=2)if(Qn[e]>r)return Qn[e-1]<=r;return!1}function Ua(r){return r>=127462&&r<=127487}const _a=8205;function Ye(r,e,t=!0,n=!0){return(t?Au:R0)(r,e,n)}function Au(r,e,t){if(e==r.length)return e;e&&Zu(r.charCodeAt(e))&&ju(r.charCodeAt(e-1))&&e--;let n=Qt(r,e);for(e+=jn(n);e<r.length;){let s=Qt(r,e);if(n==_a||s==_a||t&&M0(s))e+=jn(s),n=s;else if(Ua(s)){let o=0,a=e-2;for(;a>=0&&Ua(Qt(r,a));)o++,a-=2;if(o%2==0)break;e+=2}else break}return e}function R0(r,e,t){for(;e>0;){let n=Au(r,e-2,t);if(n<e)return n;e--}return 0}function Zu(r){return r>=56320&&r<57344}function ju(r){return r>=55296&&r<56320}function Qt(r,e){let t=r.charCodeAt(e);if(!ju(t)||e+1==r.length)return t;let n=r.charCodeAt(e+1);return Zu(n)?(t-55296<<10)+(n-56320)+65536:t}function A0(r){return r<=65535?String.fromCharCode(r):(r-=65536,String.fromCharCode((r>>10)+55296,(r&1023)+56320))}function jn(r){return r<65536?1:2}const Us=/\r\n?|\n/;var Me=function(r){return r[r.Simple=0]="Simple",r[r.TrackDel=1]="TrackDel",r[r.TrackBefore=2]="TrackBefore",r[r.TrackAfter=3]="TrackAfter",r}(Me||(Me={}));class Tt{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,s=0;t<this.sections.length;){let o=this.sections[t++],a=this.sections[t++];a<0?(e(n,s,o),s+=o):s+=a,n+=o}}iterChangedRanges(e,t=!1){_s(this,e,t)}get invertedDesc(){let e=[];for(let t=0;t<this.sections.length;){let n=this.sections[t++],s=this.sections[t++];s<0?e.push(n,s):e.push(s,n)}return new Tt(e)}composeDesc(e){return this.empty?e:e.empty?this:Eu(this,e)}mapDesc(e,t=!1){return e.empty?this:Gs(this,e,t)}mapPos(e,t=-1,n=Me.Simple){let s=0,o=0;for(let a=0;a<this.sections.length;){let l=this.sections[a++],c=this.sections[a++],u=s+l;if(c<0){if(u>e)return o+(e-s);o+=l}else{if(n!=Me.Simple&&u>=e&&(n==Me.TrackDel&&s<e&&u>e||n==Me.TrackBefore&&s<e||n==Me.TrackAfter&&u>e))return null;if(u>e||u==e&&t<0&&!l)return e==s||t<0?o:o+c;o+=c}s=u}if(e>s)throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);return o}touchesRange(e,t=e){for(let n=0,s=0;n<this.sections.length&&s<=t;){let o=this.sections[n++],a=this.sections[n++],l=s+o;if(a>=0&&s<=t&&l>=e)return s<e&&l>t?"cover":!0;s=l}return!1}toString(){let e="";for(let t=0;t<this.sections.length;){let n=this.sections[t++],s=this.sections[t++];e+=(e?" ":"")+n+(s>=0?":"+s:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(t=>typeof t!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new Tt(e)}static create(e){return new Tt(e)}}class be extends Tt{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return _s(this,(t,n,s,o,a)=>e=e.replace(s,s+(n-t),a),!1),e}mapDesc(e,t=!1){return Gs(this,e,t,!0)}invert(e){let t=this.sections.slice(),n=[];for(let s=0,o=0;s<t.length;s+=2){let a=t[s],l=t[s+1];if(l>=0){t[s]=l,t[s+1]=a;let c=s>>1;for(;n.length<c;)n.push(G.empty);n.push(a?e.slice(o,o+a):G.empty)}o+=a}return new be(t,n)}compose(e){return this.empty?e:e.empty?this:Eu(this,e,!0)}map(e,t=!1){return e.empty?this:Gs(this,e,t,!0)}iterChanges(e,t=!1){_s(this,e,t)}get desc(){return Tt.create(this.sections)}filter(e){let t=[],n=[],s=[],o=new Or(this);e:for(let a=0,l=0;;){let c=a==e.length?1e9:e[a++];for(;l<c||l==c&&o.len==0;){if(o.done)break e;let h=Math.min(o.len,c-l);Te(s,h,-1);let d=o.ins==-1?-1:o.off==0?o.ins:0;Te(t,h,d),d>0&&Ft(n,t,o.text),o.forward(h),l+=h}let u=e[a++];for(;l<u;){if(o.done)break e;let h=Math.min(o.len,u-l);Te(t,h,-1),Te(s,h,o.ins==-1?-1:o.off==0?o.ins:0),o.forward(h),l+=h}}return{changes:new be(t,n),filtered:Tt.create(s)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],s=this.sections[t+1];s<0?e.push(n):s==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(e,t,n){let s=[],o=[],a=0,l=null;function c(h=!1){if(!h&&!s.length)return;a<t&&Te(s,t-a,-1);let d=new be(s,o);l=l?l.compose(d.map(l)):d,s=[],o=[],a=0}function u(h){if(Array.isArray(h))for(let d of h)u(d);else if(h instanceof be){if(h.length!=t)throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);c(),l=l?l.compose(h.map(l)):h}else{let{from:d,to:f=d,insert:p}=h;if(d>f||d<0||f>t)throw new RangeError(`Invalid change range ${d} to ${f} (in doc of length ${t})`);let m=p?typeof p=="string"?G.of(p.split(n||Us)):p:G.empty,O=m.length;if(d==f&&O==0)return;d<a&&c(),d>a&&Te(s,d-a,-1),Te(s,f-d,O),Ft(o,s,m),a=f}}return u(e),c(!l),l}static empty(e){return new be(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let t=[],n=[];for(let s=0;s<e.length;s++){let o=e[s];if(typeof o=="number")t.push(o,-1);else{if(!Array.isArray(o)||typeof o[0]!="number"||o.some((a,l)=>l&&typeof a!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(o.length==1)t.push(o[0],0);else{for(;n.length<s;)n.push(G.empty);n[s]=G.of(o.slice(1)),t.push(o[0],n[s].length)}}}return new be(t,n)}static createSet(e,t){return new be(e,t)}}function Te(r,e,t,n=!1){if(e==0&&t<=0)return;let s=r.length-2;s>=0&&t<=0&&t==r[s+1]?r[s]+=e:e==0&&r[s]==0?r[s+1]+=t:n?(r[s]+=e,r[s+1]+=t):r.push(e,t)}function Ft(r,e,t){if(t.length==0)return;let n=e.length-2>>1;if(n<r.length)r[r.length-1]=r[r.length-1].append(t);else{for(;r.length<n;)r.push(G.empty);r.push(t)}}function _s(r,e,t){let n=r.inserted;for(let s=0,o=0,a=0;a<r.sections.length;){let l=r.sections[a++],c=r.sections[a++];if(c<0)s+=l,o+=l;else{let u=s,h=o,d=G.empty;for(;u+=l,h+=c,c&&n&&(d=d.append(n[a-2>>1])),!(t||a==r.sections.length||r.sections[a+1]<0);)l=r.sections[a++],c=r.sections[a++];e(s,u,o,h,d),s=u,o=h}}}function Gs(r,e,t,n=!1){let s=[],o=n?[]:null,a=new Or(r),l=new Or(e);for(let c=-1;;)if(a.ins==-1&&l.ins==-1){let u=Math.min(a.len,l.len);Te(s,u,-1),a.forward(u),l.forward(u)}else if(l.ins>=0&&(a.ins<0||c==a.i||a.off==0&&(l.len<a.len||l.len==a.len&&!t))){let u=l.len;for(Te(s,l.ins,-1);u;){let h=Math.min(a.len,u);a.ins>=0&&c<a.i&&a.len<=h&&(Te(s,0,a.ins),o&&Ft(o,s,a.text),c=a.i),a.forward(h),u-=h}l.next()}else if(a.ins>=0){let u=0,h=a.len;for(;h;)if(l.ins==-1){let d=Math.min(h,l.len);u+=d,h-=d,l.forward(d)}else if(l.ins==0&&l.len<h)h-=l.len,l.next();else break;Te(s,u,c<a.i?a.ins:0),o&&c<a.i&&Ft(o,s,a.text),c=a.i,a.forward(a.len-h)}else{if(a.done&&l.done)return o?be.createSet(s,o):Tt.create(s);throw new Error("Mismatched change set lengths")}}function Eu(r,e,t=!1){let n=[],s=t?[]:null,o=new Or(r),a=new Or(e);for(let l=!1;;){if(o.done&&a.done)return s?be.createSet(n,s):Tt.create(n);if(o.ins==0)Te(n,o.len,0,l),o.next();else if(a.len==0&&!a.done)Te(n,0,a.ins,l),s&&Ft(s,n,a.text),a.next();else{if(o.done||a.done)throw new Error("Mismatched change set lengths");{let c=Math.min(o.len2,a.len),u=n.length;if(o.ins==-1){let h=a.ins==-1?-1:a.off?0:a.ins;Te(n,c,h,l),s&&h&&Ft(s,n,a.text)}else a.ins==-1?(Te(n,o.off?0:o.len,c,l),s&&Ft(s,n,o.textBit(c))):(Te(n,o.off?0:o.len,a.off?0:a.ins,l),s&&!a.off&&Ft(s,n,a.text));l=(o.ins>c||a.ins>=0&&a.len>c)&&(l||n.length>u),o.forward2(c),a.forward(c)}}}}class Or{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?G.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?G.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class cn{constructor(e,t,n){this.from=e,this.to=t,this.flags=n}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}get goalColumn(){let e=this.flags>>6;return e==16777215?void 0:e}map(e,t=-1){let n,s;return this.empty?n=s=e.mapPos(this.from,t):(n=e.mapPos(this.from,1),s=e.mapPos(this.to,-1)),n==this.from&&s==this.to?this:new cn(n,s,this.flags)}extend(e,t=e){if(e<=this.anchor&&t>=this.anchor)return Q.range(e,t);let n=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return Q.range(this.anchor,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return Q.range(e.anchor,e.head)}static create(e,t,n){return new cn(e,t,n)}}class Q{constructor(e,t){this.ranges=e,this.mainIndex=t}map(e,t=-1){return e.empty?this:Q.create(this.ranges.map(n=>n.map(e,t)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new Q([this.main],0)}addRange(e,t=!0){return Q.create([e].concat(this.ranges),t?0:this.mainIndex+1)}replaceRange(e,t=this.mainIndex){let n=this.ranges.slice();return n[t]=e,Q.create(n,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new Q(e.ranges.map(t=>cn.fromJSON(t)),e.main)}static single(e,t=e){return new Q([Q.range(e,t)],0)}static create(e,t=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let n=0,s=0;s<e.length;s++){let o=e[s];if(o.empty?o.from<=n:o.from<n)return Q.normalized(e.slice(),t);n=o.to}return new Q(e,t)}static cursor(e,t=0,n,s){return cn.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n))|(s??16777215)<<6)}static range(e,t,n,s){let o=(n??16777215)<<6|(s==null?7:Math.min(6,s));return t<e?cn.create(t,e,48|o):cn.create(e,t,(t>e?8:0)|o)}static normalized(e,t=0){let n=e[t];e.sort((s,o)=>s.from-o.from),t=e.indexOf(n);for(let s=1;s<e.length;s++){let o=e[s],a=e[s-1];if(o.empty?o.from<=a.to:o.from<a.to){let l=a.from,c=Math.max(o.to,a.to);s<=t&&t--,e.splice(--s,2,o.anchor>o.head?Q.range(c,l):Q.range(l,c))}}return new Q(e,t)}}function Iu(r,e){for(let t of r.ranges)if(t.to>e)throw new RangeError("Selection points outside of document")}let Ko=0;class Y{constructor(e,t,n,s,o){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=s,this.id=Ko++,this.default=e([]),this.extensions=typeof o=="function"?o(this):o}get reader(){return this}static define(e={}){return new Y(e.combine||(t=>t),e.compareInput||((t,n)=>t===n),e.compare||(e.combine?(t,n)=>t===n:ea),!!e.static,e.enables)}of(e){return new li([],this,0,e)}compute(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new li(e,this,1,t)}computeN(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new li(e,this,2,t)}from(e,t){return t||(t=n=>n),this.compute([e],n=>t(n.field(e)))}}function ea(r,e){return r==e||r.length==e.length&&r.every((t,n)=>t===e[n])}class li{constructor(e,t,n,s){this.dependencies=e,this.facet=t,this.type=n,this.value=s,this.id=Ko++}dynamicSlot(e){var t;let n=this.value,s=this.facet.compareInput,o=this.id,a=e[o]>>1,l=this.type==2,c=!1,u=!1,h=[];for(let d of this.dependencies)d=="doc"?c=!0:d=="selection"?u=!0:((t=e[d.id])!==null&&t!==void 0?t:1)&1||h.push(e[d.id]);return{create(d){return d.values[a]=n(d),1},update(d,f){if(c&&f.docChanged||u&&(f.docChanged||f.selection)||Fs(d,h)){let p=n(d);if(l?!Ga(p,d.values[a],s):!s(p,d.values[a]))return d.values[a]=p,1}return 0},reconfigure:(d,f)=>{let p,m=f.config.address[o];if(m!=null){let O=xi(f,m);if(this.dependencies.every(v=>v instanceof Y?f.facet(v)===d.facet(v):v instanceof ft?f.field(v,!1)==d.field(v,!1):!0)||(l?Ga(p=n(d),O,s):s(p=n(d),O)))return d.values[a]=O,0}else p=n(d);return d.values[a]=p,1}}}}function Ga(r,e,t){if(r.length!=e.length)return!1;for(let n=0;n<r.length;n++)if(!t(r[n],e[n]))return!1;return!0}function Fs(r,e){let t=!1;for(let n of e)hr(r,n)&1&&(t=!0);return t}function Z0(r,e,t){let n=t.map(c=>r[c.id]),s=t.map(c=>c.type),o=n.filter(c=>!(c&1)),a=r[e.id]>>1;function l(c){let u=[];for(let h=0;h<n.length;h++){let d=xi(c,n[h]);if(s[h]==2)for(let f of d)u.push(f);else u.push(d)}return e.combine(u)}return{create(c){for(let u of n)hr(c,u);return c.values[a]=l(c),1},update(c,u){if(!Fs(c,o))return 0;let h=l(c);return e.compare(h,c.values[a])?0:(c.values[a]=h,1)},reconfigure(c,u){let h=Fs(c,n),d=u.config.facets[e.id],f=u.facet(e);if(d&&!h&&ea(t,d))return c.values[a]=f,0;let p=l(c);return e.compare(p,f)?(c.values[a]=f,0):(c.values[a]=p,1)}}}const Fa=Y.define({static:!0});class ft{constructor(e,t,n,s,o){this.id=e,this.createF=t,this.updateF=n,this.compareF=s,this.spec=o,this.provides=void 0}static define(e){let t=new ft(Ko++,e.create,e.update,e.compare||((n,s)=>n===s),e);return e.provide&&(t.provides=e.provide(t)),t}create(e){let t=e.facet(Fa).find(n=>n.field==this);return((t==null?void 0:t.create)||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:n=>(n.values[t]=this.create(n),1),update:(n,s)=>{let o=n.values[t],a=this.updateF(o,s);return this.compareF(o,a)?0:(n.values[t]=a,1)},reconfigure:(n,s)=>s.config.address[this.id]!=null?(n.values[t]=s.field(this),0):(n.values[t]=this.create(n),1)}}init(e){return[this,Fa.of({field:this,create:e})]}get extension(){return this}}const ln={lowest:4,low:3,default:2,high:1,highest:0};function _n(r){return e=>new Du(e,r)}const qi={highest:_n(ln.highest),high:_n(ln.high),default:_n(ln.default),low:_n(ln.low),lowest:_n(ln.lowest)};class Du{constructor(e,t){this.inner=e,this.prec=t}}class Ui{of(e){return new Js(this,e)}reconfigure(e){return Ui.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class Js{constructor(e,t){this.compartment=e,this.inner=t}}class Ci{constructor(e,t,n,s,o,a){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=s,this.staticValues=o,this.facets=a,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(e,t,n){let s=[],o=Object.create(null),a=new Map;for(let f of j0(e,t,a))f instanceof ft?s.push(f):(o[f.facet.id]||(o[f.facet.id]=[])).push(f);let l=Object.create(null),c=[],u=[];for(let f of s)l[f.id]=u.length<<1,u.push(p=>f.slot(p));let h=n==null?void 0:n.config.facets;for(let f in o){let p=o[f],m=p[0].facet,O=h&&h[f]||[];if(p.every(v=>v.type==0))if(l[m.id]=c.length<<1|1,ea(O,p))c.push(n.facet(m));else{let v=m.combine(p.map(w=>w.value));c.push(n&&m.compare(v,n.facet(m))?n.facet(m):v)}else{for(let v of p)v.type==0?(l[v.id]=c.length<<1|1,c.push(v.value)):(l[v.id]=u.length<<1,u.push(w=>v.dynamicSlot(w)));l[m.id]=u.length<<1,u.push(v=>Z0(v,m,p))}}let d=u.map(f=>f(l));return new Ci(e,a,d,l,c,o)}}function j0(r,e,t){let n=[[],[],[],[],[]],s=new Map;function o(a,l){let c=s.get(a);if(c!=null){if(c<=l)return;let u=n[c].indexOf(a);u>-1&&n[c].splice(u,1),a instanceof Js&&t.delete(a.compartment)}if(s.set(a,l),Array.isArray(a))for(let u of a)o(u,l);else if(a instanceof Js){if(t.has(a.compartment))throw new RangeError("Duplicate use of compartment in extensions");let u=e.get(a.compartment)||a.inner;t.set(a.compartment,u),o(u,l)}else if(a instanceof Du)o(a.inner,a.prec);else if(a instanceof ft)n[l].push(a),a.provides&&o(a.provides,l);else if(a instanceof li)n[l].push(a),a.facet.extensions&&o(a.facet.extensions,ln.default);else{let u=a.extension;if(!u)throw new Error(`Unrecognized extension value in extension set (${a}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);o(u,l)}}return o(r,ln.default),n.reduce((a,l)=>a.concat(l))}function hr(r,e){if(e&1)return 2;let t=e>>1,n=r.status[t];if(n==4)throw new Error("Cyclic dependency between fields and/or facets");if(n&2)return n;r.status[t]=4;let s=r.computeSlot(r,r.config.dynamicSlots[t]);return r.status[t]=2|s}function xi(r,e){return e&1?r.config.staticValues[e>>1]:r.values[e>>1]}const Xu=Y.define(),Hs=Y.define({combine:r=>r.some(e=>e),static:!0}),Yu=Y.define({combine:r=>r.length?r[0]:void 0,static:!0}),zu=Y.define(),Wu=Y.define(),Lu=Y.define(),Bu=Y.define({combine:r=>r.length?r[0]:!1});class ut{constructor(e,t){this.type=e,this.value=t}static define(){return new E0}}class E0{of(e){return new ut(this,e)}}class I0{constructor(e){this.map=e}of(e){return new se(this,e)}}class se{constructor(e,t){this.type=e,this.value=t}map(e){let t=this.type.map(this.value,e);return t===void 0?void 0:t==this.value?this:new se(this.type,t)}is(e){return this.type==e}static define(e={}){return new I0(e.map||(t=>t))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let s of e){let o=s.map(t);o&&n.push(o)}return n}}se.reconfigure=se.define();se.appendConfig=se.define();class ye{constructor(e,t,n,s,o,a){this.startState=e,this.changes=t,this.selection=n,this.effects=s,this.annotations=o,this.scrollIntoView=a,this._doc=null,this._state=null,n&&Iu(n,t.newLength),o.some(l=>l.type==ye.time)||(this.annotations=o.concat(ye.time.of(Date.now())))}static create(e,t,n,s,o,a){return new ye(e,t,n,s,o,a)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let t=this.annotation(ye.userEvent);return!!(t&&(t==e||t.length>e.length&&t.slice(0,e.length)==e&&t[e.length]=="."))}}ye.time=ut.define();ye.userEvent=ut.define();ye.addToHistory=ut.define();ye.remote=ut.define();function D0(r,e){let t=[];for(let n=0,s=0;;){let o,a;if(n<r.length&&(s==e.length||e[s]>=r[n]))o=r[n++],a=r[n++];else if(s<e.length)o=e[s++],a=e[s++];else return t;!t.length||t[t.length-1]<o?t.push(o,a):t[t.length-1]<a&&(t[t.length-1]=a)}}function Vu(r,e,t){var n;let s,o,a;return t?(s=e.changes,o=be.empty(e.changes.length),a=r.changes.compose(e.changes)):(s=e.changes.map(r.changes),o=r.changes.mapDesc(e.changes,!0),a=r.changes.compose(s)),{changes:a,selection:e.selection?e.selection.map(o):(n=r.selection)===null||n===void 0?void 0:n.map(s),effects:se.mapEffects(r.effects,s).concat(se.mapEffects(e.effects,o)),annotations:r.annotations.length?r.annotations.concat(e.annotations):e.annotations,scrollIntoView:r.scrollIntoView||e.scrollIntoView}}function Ks(r,e,t){let n=e.selection,s=Tn(e.annotations);return e.userEvent&&(s=s.concat(ye.userEvent.of(e.userEvent))),{changes:e.changes instanceof be?e.changes:be.of(e.changes||[],t,r.facet(Yu)),selection:n&&(n instanceof Q?n:Q.single(n.anchor,n.head)),effects:Tn(e.effects),annotations:s,scrollIntoView:!!e.scrollIntoView}}function Nu(r,e,t){let n=Ks(r,e.length?e[0]:{},r.doc.length);e.length&&e[0].filter===!1&&(t=!1);for(let o=1;o<e.length;o++){e[o].filter===!1&&(t=!1);let a=!!e[o].sequential;n=Vu(n,Ks(r,e[o],a?n.changes.newLength:r.doc.length),a)}let s=ye.create(r,n.changes,n.selection,n.effects,n.annotations,n.scrollIntoView);return Y0(t?X0(s):s)}function X0(r){let e=r.startState,t=!0;for(let s of e.facet(zu)){let o=s(r);if(o===!1){t=!1;break}Array.isArray(o)&&(t=t===!0?o:D0(t,o))}if(t!==!0){let s,o;if(t===!1)o=r.changes.invertedDesc,s=be.empty(e.doc.length);else{let a=r.changes.filter(t);s=a.changes,o=a.filtered.mapDesc(a.changes).invertedDesc}r=ye.create(e,s,r.selection&&r.selection.map(o),se.mapEffects(r.effects,o),r.annotations,r.scrollIntoView)}let n=e.facet(Wu);for(let s=n.length-1;s>=0;s--){let o=n[s](r);o instanceof ye?r=o:Array.isArray(o)&&o.length==1&&o[0]instanceof ye?r=o[0]:r=Nu(e,Tn(o),!1)}return r}function Y0(r){let e=r.startState,t=e.facet(Lu),n=r;for(let s=t.length-1;s>=0;s--){let o=t[s](r);o&&Object.keys(o).length&&(n=Vu(n,Ks(e,o,r.changes.newLength),!0))}return n==r?r:ye.create(e,r.changes,r.selection,n.effects,n.annotations,n.scrollIntoView)}const z0=[];function Tn(r){return r==null?z0:Array.isArray(r)?r:[r]}var He=function(r){return r[r.Word=0]="Word",r[r.Space=1]="Space",r[r.Other=2]="Other",r}(He||(He={}));const W0=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let eo;try{eo=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function L0(r){if(eo)return eo.test(r);for(let e=0;e<r.length;e++){let t=r[e];if(/\w/.test(t)||t>""&&(t.toUpperCase()!=t.toLowerCase()||W0.test(t)))return!0}return!1}function B0(r){return e=>{if(!/\S/.test(e))return He.Space;if(L0(e))return He.Word;for(let t=0;t<r.length;t++)if(e.indexOf(r[t])>-1)return He.Word;return He.Other}}class H{constructor(e,t,n,s,o,a){this.config=e,this.doc=t,this.selection=n,this.values=s,this.status=e.statusTemplate.slice(),this.computeSlot=o,a&&(a._state=this);for(let l=0;l<this.config.dynamicSlots.length;l++)hr(this,l<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw new RangeError("Field is not present in this state");return}return hr(this,n),xi(this,n)}update(...e){return Nu(this,e,!0)}applyTransaction(e){let t=this.config,{base:n,compartments:s}=t;for(let l of e.effects)l.is(Ui.reconfigure)?(t&&(s=new Map,t.compartments.forEach((c,u)=>s.set(u,c)),t=null),s.set(l.value.compartment,l.value.extension)):l.is(se.reconfigure)?(t=null,n=l.value):l.is(se.appendConfig)&&(t=null,n=Tn(n).concat(l.value));let o;t?o=e.startState.values.slice():(t=Ci.resolve(n,s,this),o=new H(t,this.doc,this.selection,t.dynamicSlots.map(()=>null),(c,u)=>u.reconfigure(c,this),null).values);let a=e.startState.facet(Hs)?e.newSelection:e.newSelection.asSingle();new H(t,e.newDoc,a,o,(l,c)=>c.update(l,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:Q.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),s=this.changes(n.changes),o=[n.range],a=Tn(n.effects);for(let l=1;l<t.ranges.length;l++){let c=e(t.ranges[l]),u=this.changes(c.changes),h=u.map(s);for(let f=0;f<l;f++)o[f]=o[f].map(h);let d=s.mapDesc(u,!0);o.push(c.range.map(d)),s=s.compose(h),a=se.mapEffects(a,h).concat(se.mapEffects(Tn(c.effects),d))}return{changes:s,selection:Q.create(o,t.mainIndex),effects:a}}changes(e=[]){return e instanceof be?e:be.of(e,this.doc.length,this.facet(H.lineSeparator))}toText(e){return G.of(e.split(this.facet(H.lineSeparator)||Us))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(hr(this,t),xi(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let s=e[n];s instanceof ft&&this.config.address[s.id]!=null&&(t[n]=s.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(e,t={},n){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let s=[];if(n){for(let o in n)if(Object.prototype.hasOwnProperty.call(e,o)){let a=n[o],l=e[o];s.push(a.init(c=>a.spec.fromJSON(l,c)))}}return H.create({doc:e.doc,selection:Q.fromJSON(e.selection),extensions:t.extensions?s.concat([t.extensions]):s})}static create(e={}){let t=Ci.resolve(e.extensions||[],new Map),n=e.doc instanceof G?e.doc:G.of((e.doc||"").split(t.staticFacet(H.lineSeparator)||Us)),s=e.selection?e.selection instanceof Q?e.selection:Q.single(e.selection.anchor,e.selection.head):Q.single(0);return Iu(s,n.length),t.staticFacet(Hs)||(s=s.asSingle()),new H(t,n,s,t.dynamicSlots.map(()=>null),(o,a)=>a.create(o),null)}get tabSize(){return this.facet(H.tabSize)}get lineBreak(){return this.facet(H.lineSeparator)||`
`}get readOnly(){return this.facet(Bu)}phrase(e,...t){for(let n of this.facet(H.phrases))if(Object.prototype.hasOwnProperty.call(n,e)){e=n[e];break}return t.length&&(e=e.replace(/\$(\$|\d*)/g,(n,s)=>{if(s=="$")return"$";let o=+(s||1);return!o||o>t.length?n:t[o-1]})),e}languageDataAt(e,t,n=-1){let s=[];for(let o of this.facet(Xu))for(let a of o(this,t,n))Object.prototype.hasOwnProperty.call(a,e)&&s.push(a[e]);return s}charCategorizer(e){return B0(this.languageDataAt("wordChars",e).join(""))}wordAt(e){let{text:t,from:n,length:s}=this.doc.lineAt(e),o=this.charCategorizer(e),a=e-n,l=e-n;for(;a>0;){let c=Ye(t,a,!1);if(o(t.slice(c,a))!=He.Word)break;a=c}for(;l<s;){let c=Ye(t,l);if(o(t.slice(l,c))!=He.Word)break;l=c}return a==l?null:Q.range(a+n,l+n)}}H.allowMultipleSelections=Hs;H.tabSize=Y.define({combine:r=>r.length?r[0]:4});H.lineSeparator=Yu;H.readOnly=Bu;H.phrases=Y.define({compare(r,e){let t=Object.keys(r),n=Object.keys(e);return t.length==n.length&&t.every(s=>r[s]==e[s])}});H.languageData=Xu;H.changeFilter=zu;H.transactionFilter=Wu;H.transactionExtender=Lu;Ui.reconfigure=se.define();function _i(r,e,t={}){let n={};for(let s of r)for(let o of Object.keys(s)){let a=s[o],l=n[o];if(l===void 0)n[o]=a;else if(!(l===a||a===void 0))if(Object.hasOwnProperty.call(t,o))n[o]=t[o](l,a);else throw new Error("Config merge conflict for field "+o)}for(let s in e)n[s]===void 0&&(n[s]=e[s]);return n}class fn{eq(e){return this==e}range(e,t=e){return to.create(e,t,this)}}fn.prototype.startSide=fn.prototype.endSide=0;fn.prototype.point=!1;fn.prototype.mapMode=Me.TrackDel;let to=class qu{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(e,t,n){return new qu(e,t,n)}};function no(r,e){return r.from-e.from||r.value.startSide-e.value.startSide}class ta{constructor(e,t,n,s){this.from=e,this.to=t,this.value=n,this.maxPoint=s}get length(){return this.to[this.to.length-1]}findIndex(e,t,n,s=0){let o=n?this.to:this.from;for(let a=s,l=o.length;;){if(a==l)return a;let c=a+l>>1,u=o[c]-e||(n?this.value[c].endSide:this.value[c].startSide)-t;if(c==a)return u>=0?a:l;u>=0?l=c:a=c+1}}between(e,t,n,s){for(let o=this.findIndex(t,-1e9,!0),a=this.findIndex(n,1e9,!1,o);o<a;o++)if(s(this.from[o]+e,this.to[o]+e,this.value[o])===!1)return!1}map(e,t){let n=[],s=[],o=[],a=-1,l=-1;for(let c=0;c<this.value.length;c++){let u=this.value[c],h=this.from[c]+e,d=this.to[c]+e,f,p;if(h==d){let m=t.mapPos(h,u.startSide,u.mapMode);if(m==null||(f=p=m,u.startSide!=u.endSide&&(p=t.mapPos(h,u.endSide),p<f)))continue}else if(f=t.mapPos(h,u.startSide),p=t.mapPos(d,u.endSide),f>p||f==p&&u.startSide>0&&u.endSide<=0)continue;(p-f||u.endSide-u.startSide)<0||(a<0&&(a=f),u.point&&(l=Math.max(l,p-f)),n.push(u),s.push(f-a),o.push(p-a))}return{mapped:n.length?new ta(s,o,n,l):null,pos:a}}}class K{constructor(e,t,n,s){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=s}static create(e,t,n,s){return new K(e,t,n,s)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:t=[],sort:n=!1,filterFrom:s=0,filterTo:o=this.length}=e,a=e.filter;if(t.length==0&&!a)return this;if(n&&(t=t.slice().sort(no)),this.isEmpty)return t.length?K.of(t):this;let l=new Uu(this,null,-1).goto(0),c=0,u=[],h=new En;for(;l.value||c<t.length;)if(c<t.length&&(l.from-t[c].from||l.startSide-t[c].value.startSide)>=0){let d=t[c++];h.addInner(d.from,d.to,d.value)||u.push(d)}else l.rangeIndex==1&&l.chunkIndex<this.chunk.length&&(c==t.length||this.chunkEnd(l.chunkIndex)<t[c].from)&&(!a||s>this.chunkEnd(l.chunkIndex)||o<this.chunkPos[l.chunkIndex])&&h.addChunk(this.chunkPos[l.chunkIndex],this.chunk[l.chunkIndex])?l.nextChunk():((!a||s>l.to||o<l.from||a(l.from,l.to,l.value))&&(h.addInner(l.from,l.to,l.value)||u.push(to.create(l.from,l.to,l.value))),l.next());return h.finishInner(this.nextLayer.isEmpty&&!u.length?K.empty:this.nextLayer.update({add:u,filter:a,filterFrom:s,filterTo:o}))}map(e){if(e.empty||this.isEmpty)return this;let t=[],n=[],s=-1;for(let a=0;a<this.chunk.length;a++){let l=this.chunkPos[a],c=this.chunk[a],u=e.touchesRange(l,l+c.length);if(u===!1)s=Math.max(s,c.maxPoint),t.push(c),n.push(e.mapPos(l));else if(u===!0){let{mapped:h,pos:d}=c.map(l,e);h&&(s=Math.max(s,h.maxPoint),t.push(h),n.push(d))}}let o=this.nextLayer.map(e);return t.length==0?o:new K(n,t,o||K.empty,s)}between(e,t,n){if(!this.isEmpty){for(let s=0;s<this.chunk.length;s++){let o=this.chunkPos[s],a=this.chunk[s];if(t>=o&&e<=o+a.length&&a.between(o,e-o,t-o,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return gr.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return gr.from(e).goto(t)}static compare(e,t,n,s,o=-1){let a=e.filter(d=>d.maxPoint>0||!d.isEmpty&&d.maxPoint>=o),l=t.filter(d=>d.maxPoint>0||!d.isEmpty&&d.maxPoint>=o),c=Ja(a,l,n),u=new Gn(a,c,o),h=new Gn(l,c,o);n.iterGaps((d,f,p)=>Ha(u,d,h,f,p,s)),n.empty&&n.length==0&&Ha(u,0,h,0,0,s)}static eq(e,t,n=0,s){s==null&&(s=999999999);let o=e.filter(h=>!h.isEmpty&&t.indexOf(h)<0),a=t.filter(h=>!h.isEmpty&&e.indexOf(h)<0);if(o.length!=a.length)return!1;if(!o.length)return!0;let l=Ja(o,a),c=new Gn(o,l,0).goto(n),u=new Gn(a,l,0).goto(n);for(;;){if(c.to!=u.to||!ro(c.active,u.active)||c.point&&(!u.point||!c.point.eq(u.point)))return!1;if(c.to>s)return!0;c.next(),u.next()}}static spans(e,t,n,s,o=-1){let a=new Gn(e,null,o).goto(t),l=t,c=a.openStart;for(;;){let u=Math.min(a.to,n);if(a.point){let h=a.activeForPoint(a.to),d=a.pointFrom<t?h.length+1:a.point.startSide<0?h.length:Math.min(h.length,c);s.point(l,u,a.point,h,d,a.pointRank),c=Math.min(a.openEnd(u),h.length)}else u>l&&(s.span(l,u,a.active,c),c=a.openEnd(u));if(a.to>n)return c+(a.point&&a.to>n?1:0);l=a.to,a.next()}}static of(e,t=!1){let n=new En;for(let s of e instanceof to?[e]:t?V0(e):e)n.add(s.from,s.to,s.value);return n.finish()}static join(e){if(!e.length)return K.empty;let t=e[e.length-1];for(let n=e.length-2;n>=0;n--)for(let s=e[n];s!=K.empty;s=s.nextLayer)t=new K(s.chunkPos,s.chunk,t,Math.max(s.maxPoint,t.maxPoint));return t}}K.empty=new K([],[],null,-1);function V0(r){if(r.length>1)for(let e=r[0],t=1;t<r.length;t++){let n=r[t];if(no(e,n)>0)return r.slice().sort(no);e=n}return r}K.empty.nextLayer=K.empty;class En{finishChunk(e){this.chunks.push(new ta(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,n){this.addInner(e,t,n)||(this.nextLayer||(this.nextLayer=new En)).add(e,t,n)}addInner(e,t,n){let s=e-this.lastTo||n.startSide-this.last.endSide;if(s<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return s<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(K.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=K.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}}function Ja(r,e,t){let n=new Map;for(let o of r)for(let a=0;a<o.chunk.length;a++)o.chunk[a].maxPoint<=0&&n.set(o.chunk[a],o.chunkPos[a]);let s=new Set;for(let o of e)for(let a=0;a<o.chunk.length;a++){let l=n.get(o.chunk[a]);l!=null&&(t?t.mapPos(l):l)==o.chunkPos[a]&&!(t!=null&&t.touchesRange(l,l+o.chunk[a].length))&&s.add(o.chunk[a])}return s}class Uu{constructor(e,t,n,s=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=s}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let s=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(s)||this.layer.chunkEnd(this.chunkIndex)<e||s.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let s=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<s)&&this.setRangeIndex(s)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class gr{constructor(e){this.heap=e}static from(e,t=null,n=-1){let s=[];for(let o=0;o<e.length;o++)for(let a=e[o];!a.isEmpty;a=a.nextLayer)a.maxPoint>=n&&s.push(new Uu(a,t,n,o));return s.length==1?s[0]:new gr(s)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let n=this.heap.length>>1;n>=0;n--)fs(this.heap,n);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let n=this.heap.length>>1;n>=0;n--)fs(this.heap,n);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),fs(this.heap,0)}}}function fs(r,e){for(let t=r[e];;){let n=(e<<1)+1;if(n>=r.length)break;let s=r[n];if(n+1<r.length&&s.compare(r[n+1])>=0&&(s=r[n+1],n++),t.compare(s)<0)break;r[n]=t,r[e]=s,e=n}}class Gn{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=gr.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Vr(this.active,e),Vr(this.activeTo,e),Vr(this.activeRank,e),this.minActive=Ka(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:s,rank:o}=this.cursor;for(;t<this.activeRank.length&&(o-this.activeRank[t]||s-this.activeTo[t])>0;)t++;Nr(this.active,t,n),Nr(this.activeTo,t,s),Nr(this.activeRank,t,o),e&&Nr(e,t,this.cursor.from),this.minActive=Ka(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let s=this.minActive;if(s>-1&&(this.activeTo[s]-this.cursor.from||this.active[s].endSide-this.cursor.startSide)<0){if(this.activeTo[s]>e){this.to=this.activeTo[s],this.endSide=this.active[s].endSide;break}this.removeActive(s),n&&Vr(n,s)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let o=this.cursor.value;if(!o.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=o,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=o.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(n){this.openStart=0;for(let s=n.length-1;s>=0&&n[s]<e;s--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}}function Ha(r,e,t,n,s,o){r.goto(e),t.goto(n);let a=n+s,l=n,c=n-e;for(;;){let u=r.to+c-t.to||r.endSide-t.endSide,h=u<0?r.to+c:t.to,d=Math.min(h,a);if(r.point||t.point?r.point&&t.point&&(r.point==t.point||r.point.eq(t.point))&&ro(r.activeForPoint(r.to),t.activeForPoint(t.to))||o.comparePoint(l,d,r.point,t.point):d>l&&!ro(r.active,t.active)&&o.compareRange(l,d,r.active,t.active),h>a)break;l=h,u<=0&&r.next(),u>=0&&t.next()}}function ro(r,e){if(r.length!=e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!=e[t]&&!r[t].eq(e[t]))return!1;return!0}function Vr(r,e){for(let t=e,n=r.length-1;t<n;t++)r[t]=r[t+1];r.pop()}function Nr(r,e,t){for(let n=r.length-1;n>=e;n--)r[n+1]=r[n];r[e]=t}function Ka(r,e){let t=-1,n=1e9;for(let s=0;s<e.length;s++)(e[s]-n||r[s].endSide-r[t].endSide)<0&&(t=s,n=e[s]);return t}function Ar(r,e,t=r.length){let n=0;for(let s=0;s<t;)r.charCodeAt(s)==9?(n+=e-n%e,s++):(n++,s=Ye(r,s));return n}function N0(r,e,t,n){for(let s=0,o=0;;){if(o>=e)return s;if(s==r.length)break;o+=r.charCodeAt(s)==9?t-o%t:1,s=Ye(r,s)}return n===!0?-1:r.length}const io="ͼ",el=typeof Symbol>"u"?"__"+io:Symbol.for(io),so=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class Ht{constructor(e,t){this.rules=[];let{finish:n}=t||{};function s(a){return/^@/.test(a)?[a]:a.split(/,\s*/)}function o(a,l,c,u){let h=[],d=/^@(\w+)\b/.exec(a[0]),f=d&&d[1]=="keyframes";if(d&&l==null)return c.push(a[0]+";");for(let p in l){let m=l[p];if(/&/.test(p))o(p.split(/,\s*/).map(O=>a.map(v=>O.replace(/&/,v))).reduce((O,v)=>O.concat(v)),m,c);else if(m&&typeof m=="object"){if(!d)throw new RangeError("The value of a property ("+p+") should be a primitive value.");o(s(p),m,h,f)}else m!=null&&h.push(p.replace(/_.*/,"").replace(/[A-Z]/g,O=>"-"+O.toLowerCase())+": "+m+";")}(h.length||f)&&c.push((n&&!d&&!u?a.map(n):a).join(", ")+" {"+h.join(" ")+"}")}for(let a in e)o(s(a),e[a],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=tl[el]||1;return tl[el]=e+1,io+e.toString(36)}static mount(e,t,n){let s=e[so],o=n&&n.nonce;s?o&&s.setNonce(o):s=new q0(e,o),s.mount(Array.isArray(t)?t:[t],e)}}let nl=new Map;class q0{constructor(e,t){let n=e.ownerDocument||e,s=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&s.CSSStyleSheet){let o=nl.get(n);if(o)return e[so]=o;this.sheet=new s.CSSStyleSheet,nl.set(n,this)}else this.styleTag=n.createElement("style"),t&&this.styleTag.setAttribute("nonce",t);this.modules=[],e[so]=this}mount(e,t){let n=this.sheet,s=0,o=0;for(let a=0;a<e.length;a++){let l=e[a],c=this.modules.indexOf(l);if(c<o&&c>-1&&(this.modules.splice(c,1),o--,c=-1),c==-1){if(this.modules.splice(o++,0,l),n)for(let u=0;u<l.rules.length;u++)n.insertRule(l.rules[u],s++)}else{for(;o<c;)s+=this.modules[o++].rules.length;s+=l.rules.length,o++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let a="";for(let c=0;c<this.modules.length;c++)a+=this.modules[c].getRules()+`
`;this.styleTag.textContent=a;let l=t.head||t;this.styleTag.parentNode!=l&&l.insertBefore(this.styleTag,l.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var Kt={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},vr={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},U0=typeof navigator<"u"&&/Mac/.test(navigator.platform),_0=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var Pe=0;Pe<10;Pe++)Kt[48+Pe]=Kt[96+Pe]=String(Pe);for(var Pe=1;Pe<=24;Pe++)Kt[Pe+111]="F"+Pe;for(var Pe=65;Pe<=90;Pe++)Kt[Pe]=String.fromCharCode(Pe+32),vr[Pe]=String.fromCharCode(Pe);for(var ps in Kt)vr.hasOwnProperty(ps)||(vr[ps]=Kt[ps]);function G0(r){var e=U0&&r.metaKey&&r.shiftKey&&!r.ctrlKey&&!r.altKey||_0&&r.shiftKey&&r.key&&r.key.length==1||r.key=="Unidentified",t=!e&&r.key||(r.shiftKey?vr:Kt)[r.keyCode]||r.key||"Unidentified";return t=="Esc"&&(t="Escape"),t=="Del"&&(t="Delete"),t=="Left"&&(t="ArrowLeft"),t=="Up"&&(t="ArrowUp"),t=="Right"&&(t="ArrowRight"),t=="Down"&&(t="ArrowDown"),t}function wr(r){let e;return r.nodeType==11?e=r.getSelection?r:r.ownerDocument:e=r,e.getSelection()}function oo(r,e){return e?r==e||r.contains(e.nodeType!=1?e.parentNode:e):!1}function F0(r){let e=r.activeElement;for(;e&&e.shadowRoot;)e=e.shadowRoot.activeElement;return e}function ci(r,e){if(!e.anchorNode)return!1;try{return oo(r,e.anchorNode)}catch{return!1}}function yr(r){return r.nodeType==3?mn(r,0,r.nodeValue.length).getClientRects():r.nodeType==1?r.getClientRects():[]}function dr(r,e,t,n){return t?rl(r,e,t,n,-1)||rl(r,e,t,n,1):!1}function pn(r){for(var e=0;;e++)if(r=r.previousSibling,!r)return e}function ki(r){return r.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(r.nodeName)}function rl(r,e,t,n,s){for(;;){if(r==t&&e==n)return!0;if(e==(s<0?0:Dt(r))){if(r.nodeName=="DIV")return!1;let o=r.parentNode;if(!o||o.nodeType!=1)return!1;e=pn(r)+(s<0?0:1),r=o}else if(r.nodeType==1){if(r=r.childNodes[e+(s<0?-1:0)],r.nodeType==1&&r.contentEditable=="false")return!1;e=s<0?Dt(r):0}else return!1}}function Dt(r){return r.nodeType==3?r.nodeValue.length:r.childNodes.length}function na(r,e){let t=e?r.left:r.right;return{left:t,right:t,top:r.top,bottom:r.bottom}}function J0(r){let e=r.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:r.innerWidth,top:0,bottom:r.innerHeight}}function _u(r,e){let t=e.width/r.offsetWidth,n=e.height/r.offsetHeight;return(t>.995&&t<1.005||!isFinite(t)||Math.abs(e.width-r.offsetWidth)<1)&&(t=1),(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.height-r.offsetHeight)<1)&&(n=1),{scaleX:t,scaleY:n}}function H0(r,e,t,n,s,o,a,l){let c=r.ownerDocument,u=c.defaultView||window;for(let h=r,d=!1;h&&!d;)if(h.nodeType==1){let f,p=h==c.body,m=1,O=1;if(p)f=J0(u);else{if(/^(fixed|sticky)$/.test(getComputedStyle(h).position)&&(d=!0),h.scrollHeight<=h.clientHeight&&h.scrollWidth<=h.clientWidth){h=h.assignedSlot||h.parentNode;continue}let x=h.getBoundingClientRect();({scaleX:m,scaleY:O}=_u(h,x)),f={left:x.left,right:x.left+h.clientWidth*m,top:x.top,bottom:x.top+h.clientHeight*O}}let v=0,w=0;if(s=="nearest")e.top<f.top?(w=-(f.top-e.top+a),t>0&&e.bottom>f.bottom+w&&(w=e.bottom-f.bottom+w+a)):e.bottom>f.bottom&&(w=e.bottom-f.bottom+a,t<0&&e.top-w<f.top&&(w=-(f.top+w-e.top+a)));else{let x=e.bottom-e.top,k=f.bottom-f.top;w=(s=="center"&&x<=k?e.top+x/2-k/2:s=="start"||s=="center"&&t<0?e.top-a:e.bottom-k+a)-f.top}if(n=="nearest"?e.left<f.left?(v=-(f.left-e.left+o),t>0&&e.right>f.right+v&&(v=e.right-f.right+v+o)):e.right>f.right&&(v=e.right-f.right+o,t<0&&e.left<f.left+v&&(v=-(f.left+v-e.left+o))):v=(n=="center"?e.left+(e.right-e.left)/2-(f.right-f.left)/2:n=="start"==l?e.left-o:e.right-(f.right-f.left)+o)-f.left,v||w)if(p)u.scrollBy(v,w);else{let x=0,k=0;if(w){let b=h.scrollTop;h.scrollTop+=w/O,k=(h.scrollTop-b)*O}if(v){let b=h.scrollLeft;h.scrollLeft+=v/m,x=(h.scrollLeft-b)*m}e={left:e.left-x,top:e.top-k,right:e.right-x,bottom:e.bottom-k},x&&Math.abs(x-v)<1&&(n="nearest"),k&&Math.abs(k-w)<1&&(s="nearest")}if(p)break;h=h.assignedSlot||h.parentNode}else if(h.nodeType==11)h=h.host;else break}function K0(r){let e=r.ownerDocument;for(let t=r.parentNode;t&&t!=e.body;)if(t.nodeType==1){if(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth)return t;t=t.assignedSlot||t.parentNode}else if(t.nodeType==11)t=t.host;else break;return null}class ep{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?Dt(t):0),n,Math.min(e.focusOffset,n?Dt(n):0))}set(e,t,n,s){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=s}}let Sn=null;function Gu(r){if(r.setActive)return r.setActive();if(Sn)return r.focus(Sn);let e=[];for(let t=r;t&&(e.push(t,t.scrollTop,t.scrollLeft),t!=t.ownerDocument);t=t.parentNode);if(r.focus(Sn==null?{get preventScroll(){return Sn={preventScroll:!0},!0}}:void 0),!Sn){Sn=!1;for(let t=0;t<e.length;){let n=e[t++],s=e[t++],o=e[t++];n.scrollTop!=s&&(n.scrollTop=s),n.scrollLeft!=o&&(n.scrollLeft=o)}}}let il;function mn(r,e,t=e){let n=il||(il=document.createRange());return n.setEnd(r,t),n.setStart(r,e),n}function Mn(r,e,t,n){let s={key:e,code:e,keyCode:t,which:t,cancelable:!0};n&&({altKey:s.altKey,ctrlKey:s.ctrlKey,shiftKey:s.shiftKey,metaKey:s.metaKey}=n);let o=new KeyboardEvent("keydown",s);o.synthetic=!0,r.dispatchEvent(o);let a=new KeyboardEvent("keyup",s);return a.synthetic=!0,r.dispatchEvent(a),o.defaultPrevented||a.defaultPrevented}function tp(r){for(;r;){if(r&&(r.nodeType==9||r.nodeType==11&&r.host))return r;r=r.assignedSlot||r.parentNode}return null}function Fu(r){for(;r.attributes.length;)r.removeAttributeNode(r.attributes[0])}function np(r,e){let t=e.focusNode,n=e.focusOffset;if(!t||e.anchorNode!=t||e.anchorOffset!=n)return!1;for(n=Math.min(n,Dt(t));;)if(n){if(t.nodeType!=1)return!1;let s=t.childNodes[n-1];s.contentEditable=="false"?n--:(t=s,n=Dt(t))}else{if(t==r)return!0;n=pn(t),t=t.parentNode}}function Ju(r){return r.scrollTop>Math.max(1,r.scrollHeight-r.clientHeight-4)}function Hu(r,e){for(let t=r,n=e;;){if(t.nodeType==3&&n>0)return{node:t,offset:n};if(t.nodeType==1&&n>0){if(t.contentEditable=="false")return null;t=t.childNodes[n-1],n=Dt(t)}else if(t.parentNode&&!ki(t))n=pn(t),t=t.parentNode;else return null}}function Ku(r,e){for(let t=r,n=e;;){if(t.nodeType==3&&n<t.nodeValue.length)return{node:t,offset:n};if(t.nodeType==1&&n<t.childNodes.length){if(t.contentEditable=="false")return null;t=t.childNodes[n],n=0}else if(t.parentNode&&!ki(t))n=pn(t)+1,t=t.parentNode;else return null}}class Re{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(e,t){return new Re(e.parentNode,pn(e),t)}static after(e,t){return new Re(e.parentNode,pn(e)+1,t)}}const ra=[];class re{constructor(){this.parent=null,this.dom=null,this.flags=2}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e){let t=this.posAtStart;for(let n of this.children){if(n==e)return t;t+=n.length+n.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}sync(e,t){if(this.flags&2){let n=this.dom,s=null,o;for(let a of this.children){if(a.flags&7){if(!a.dom&&(o=s?s.nextSibling:n.firstChild)){let l=re.get(o);(!l||!l.parent&&l.canReuseDOM(a))&&a.reuseDOM(o)}a.sync(e,t),a.flags&=-8}if(o=s?s.nextSibling:n.firstChild,t&&!t.written&&t.node==n&&o!=a.dom&&(t.written=!0),a.dom.parentNode==n)for(;o&&o!=a.dom;)o=sl(o);else n.insertBefore(a.dom,o);s=a.dom}for(o=s?s.nextSibling:n.firstChild,o&&t&&t.node==n&&(t.written=!0);o;)o=sl(o)}else if(this.flags&1)for(let n of this.children)n.flags&7&&(n.sync(e,t),n.flags&=-8)}reuseDOM(e){}localPosFromDOM(e,t){let n;if(e==this.dom)n=this.dom.childNodes[t];else{let s=Dt(e)==0?0:t==0?-1:1;for(;;){let o=e.parentNode;if(o==this.dom)break;s==0&&o.firstChild!=o.lastChild&&(e==o.firstChild?s=-1:s=1),e=o}s<0?n=e:n=e.nextSibling}if(n==this.dom.firstChild)return 0;for(;n&&!re.get(n);)n=n.nextSibling;if(!n)return this.length;for(let s=0,o=0;;s++){let a=this.children[s];if(a.dom==n)return o;o+=a.length+a.breakAfter}}domBoundsAround(e,t,n=0){let s=-1,o=-1,a=-1,l=-1;for(let c=0,u=n,h=n;c<this.children.length;c++){let d=this.children[c],f=u+d.length;if(u<e&&f>t)return d.domBoundsAround(e,t,u);if(f>=e&&s==-1&&(s=c,o=u),u>t&&d.dom.parentNode==this.dom){a=c,l=h;break}h=f,u=f+d.breakAfter}return{from:o,to:l<0?n+this.length:l,startDOM:(s?this.children[s-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:a<this.children.length&&a>=0?this.children[a].dom:null}}markDirty(e=!1){this.flags|=2,this.markParentsDirty(e)}markParentsDirty(e){for(let t=this.parent;t;t=t.parent){if(e&&(t.flags|=2),t.flags&1)return;t.flags|=1,e=!1}}setParent(e){this.parent!=e&&(this.parent=e,this.flags&7&&this.markParentsDirty(!0))}setDOM(e){this.dom!=e&&(this.dom&&(this.dom.cmView=null),this.dom=e,e.cmView=this)}get rootView(){for(let e=this;;){let t=e.parent;if(!t)return e;e=t}}replaceChildren(e,t,n=ra){this.markDirty();for(let s=e;s<t;s++){let o=this.children[s];o.parent==this&&n.indexOf(o)<0&&o.destroy()}this.children.splice(e,t-e,...n);for(let s=0;s<n.length;s++)n[s].setParent(this)}ignoreMutation(e){return!1}ignoreEvent(e){return!1}childCursor(e=this.length){return new eh(this.children,e,this.children.length)}childPos(e,t=1){return this.childCursor().findPos(e,t)}toString(){let e=this.constructor.name.replace("View","");return e+(this.children.length?"("+this.children.join()+")":this.length?"["+(e=="Text"?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(e){return e.cmView}get isEditable(){return!0}get isWidget(){return!1}get isHidden(){return!1}merge(e,t,n,s,o,a){return!1}become(e){return!1}canReuseDOM(e){return e.constructor==this.constructor&&!((this.flags|e.flags)&8)}getSide(){return 0}destroy(){for(let e of this.children)e.parent==this&&e.destroy();this.parent=null}}re.prototype.breakAfter=0;function sl(r){let e=r.nextSibling;return r.parentNode.removeChild(r),e}class eh{constructor(e,t,n){this.children=e,this.pos=t,this.i=n,this.off=0}findPos(e,t=1){for(;;){if(e>this.pos||e==this.pos&&(t>0||this.i==0||this.children[this.i-1].breakAfter))return this.off=e-this.pos,this;let n=this.children[--this.i];this.pos-=n.length+n.breakAfter}}}function th(r,e,t,n,s,o,a,l,c){let{children:u}=r,h=u.length?u[e]:null,d=o.length?o[o.length-1]:null,f=d?d.breakAfter:a;if(!(e==n&&h&&!a&&!f&&o.length<2&&h.merge(t,s,o.length?d:null,t==0,l,c))){if(n<u.length){let p=u[n];p&&(s<p.length||p.breakAfter&&(d!=null&&d.breakAfter))?(e==n&&(p=p.split(s),s=0),!f&&d&&p.merge(0,s,d,!0,0,c)?o[o.length-1]=p:((s||p.children.length&&!p.children[0].length)&&p.merge(0,s,null,!1,0,c),o.push(p))):p!=null&&p.breakAfter&&(d?d.breakAfter=1:a=1),n++}for(h&&(h.breakAfter=a,t>0&&(!a&&o.length&&h.merge(t,h.length,o[0],!1,l,0)?h.breakAfter=o.shift().breakAfter:(t<h.length||h.children.length&&h.children[h.children.length-1].length==0)&&h.merge(t,h.length,null,!1,l,0),e++));e<n&&o.length;)if(u[n-1].become(o[o.length-1]))n--,o.pop(),c=o.length?0:l;else if(u[e].become(o[0]))e++,o.shift(),l=o.length?0:c;else break;!o.length&&e&&n<u.length&&!u[e-1].breakAfter&&u[n].merge(0,0,u[e-1],!1,l,c)&&e--,(e<n||o.length)&&r.replaceChildren(e,n,o)}}function nh(r,e,t,n,s,o){let a=r.childCursor(),{i:l,off:c}=a.findPos(t,1),{i:u,off:h}=a.findPos(e,-1),d=e-t;for(let f of n)d+=f.length;r.length+=d,th(r,u,h,l,c,n,0,s,o)}let Ve=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},ao=typeof document<"u"?document:{documentElement:{style:{}}};const lo=/Edge\/(\d+)/.exec(Ve.userAgent),rh=/MSIE \d/.test(Ve.userAgent),co=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ve.userAgent),Gi=!!(rh||co||lo),ol=!Gi&&/gecko\/(\d+)/i.test(Ve.userAgent),ms=!Gi&&/Chrome\/(\d+)/.exec(Ve.userAgent),al="webkitFontSmoothing"in ao.documentElement.style,ih=!Gi&&/Apple Computer/.test(Ve.vendor),ll=ih&&(/Mobile\/\w+/.test(Ve.userAgent)||Ve.maxTouchPoints>2);var j={mac:ll||/Mac/.test(Ve.platform),windows:/Win/.test(Ve.platform),linux:/Linux|X11/.test(Ve.platform),ie:Gi,ie_version:rh?ao.documentMode||6:co?+co[1]:lo?+lo[1]:0,gecko:ol,gecko_version:ol?+(/Firefox\/(\d+)/.exec(Ve.userAgent)||[0,0])[1]:0,chrome:!!ms,chrome_version:ms?+ms[1]:0,ios:ll,android:/Android\b/.test(Ve.userAgent),webkit:al,safari:ih,webkit_version:al?+(/\bAppleWebKit\/(\d+)/.exec(Ve.userAgent)||[0,0])[1]:0,tabSize:ao.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};const rp=256;class ht extends re{constructor(e){super(),this.text=e}get length(){return this.text.length}createDOM(e){this.setDOM(e||document.createTextNode(this.text))}sync(e,t){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(t&&t.node==this.dom&&(t.written=!0),this.dom.nodeValue=this.text)}reuseDOM(e){e.nodeType==3&&this.createDOM(e)}merge(e,t,n){return this.flags&8||n&&(!(n instanceof ht)||this.length-(t-e)+n.length>rp||n.flags&8)?!1:(this.text=this.text.slice(0,e)+(n?n.text:"")+this.text.slice(t),this.markDirty(),!0)}split(e){let t=new ht(this.text.slice(e));return this.text=this.text.slice(0,e),this.markDirty(),t.flags|=this.flags&8,t}localPosFromDOM(e,t){return e==this.dom?t:t?this.text.length:0}domAtPos(e){return new Re(this.dom,e)}domBoundsAround(e,t,n){return{from:n,to:n+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(e,t){return ip(this.dom,e,t)}}class Xt extends re{constructor(e,t=[],n=0){super(),this.mark=e,this.children=t,this.length=n;for(let s of t)s.setParent(this)}setAttrs(e){if(Fu(e),this.mark.class&&(e.className=this.mark.class),this.mark.attrs)for(let t in this.mark.attrs)e.setAttribute(t,this.mark.attrs[t]);return e}canReuseDOM(e){return super.canReuseDOM(e)&&!((this.flags|e.flags)&8)}reuseDOM(e){e.nodeName==this.mark.tagName.toUpperCase()&&(this.setDOM(e),this.flags|=6)}sync(e,t){this.dom?this.flags&4&&this.setAttrs(this.dom):this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),super.sync(e,t)}merge(e,t,n,s,o,a){return n&&(!(n instanceof Xt&&n.mark.eq(this.mark))||e&&o<=0||t<this.length&&a<=0)?!1:(nh(this,e,t,n?n.children.slice():[],o-1,a-1),this.markDirty(),!0)}split(e){let t=[],n=0,s=-1,o=0;for(let l of this.children){let c=n+l.length;c>e&&t.push(n<e?l.split(e-n):l),s<0&&n>=e&&(s=o),n=c,o++}let a=this.length-e;return this.length=e,s>-1&&(this.children.length=s,this.markDirty()),new Xt(this.mark,t,a)}domAtPos(e){return sh(this,e)}coordsAt(e,t){return ah(this,e,t)}}function ip(r,e,t){let n=r.nodeValue.length;e>n&&(e=n);let s=e,o=e,a=0;e==0&&t<0||e==n&&t>=0?j.chrome||j.gecko||(e?(s--,a=1):o<n&&(o++,a=-1)):t<0?s--:o<n&&o++;let l=mn(r,s,o).getClientRects();if(!l.length)return null;let c=l[(a?a<0:t>=0)?0:l.length-1];return j.safari&&!a&&c.width==0&&(c=Array.prototype.find.call(l,u=>u.width)||c),a?na(c,a<0):c||null}class un extends re{static create(e,t,n){return new un(e,t,n)}constructor(e,t,n){super(),this.widget=e,this.length=t,this.side=n,this.prevWidget=null}split(e){let t=un.create(this.widget,this.length-e,this.side);return this.length-=e,t}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}getSide(){return this.side}merge(e,t,n,s,o,a){return n&&(!(n instanceof un)||!this.widget.compare(n.widget)||e>0&&o<=0||t<this.length&&a<=0)?!1:(this.length=e+(n?n.length:0)+(this.length-t),!0)}become(e){return e instanceof un&&e.side==this.side&&this.widget.constructor==e.widget.constructor?(this.widget.compare(e.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get overrideDOMText(){if(this.length==0)return G.empty;let e=this;for(;e.parent;)e=e.parent;let{view:t}=e,n=t&&t.state.doc,s=this.posAtStart;return n?n.slice(s,s+this.length):G.empty}domAtPos(e){return(this.length?e==0:this.side>0)?Re.before(this.dom):Re.after(this.dom,e==this.length)}domBoundsAround(){return null}coordsAt(e,t){let n=this.widget.coordsAt(this.dom,e,t);if(n)return n;let s=this.dom.getClientRects(),o=null;if(!s.length)return null;let a=this.side?this.side<0:e>0;for(let l=a?s.length-1:0;o=s[l],!(e>0?l==0:l==s.length-1||o.top<o.bottom);l+=a?-1:1);return na(o,!a)}get isEditable(){return!1}get isWidget(){return!0}get isHidden(){return this.widget.isHidden}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}}class In extends re{constructor(e){super(),this.side=e}get length(){return 0}merge(){return!1}become(e){return e instanceof In&&e.side==this.side}split(){return new In(this.side)}sync(){if(!this.dom){let e=document.createElement("img");e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),this.setDOM(e)}}getSide(){return this.side}domAtPos(e){return this.side>0?Re.before(this.dom):Re.after(this.dom)}localPosFromDOM(){return 0}domBoundsAround(){return null}coordsAt(e){return this.dom.getBoundingClientRect()}get overrideDOMText(){return G.empty}get isHidden(){return!0}}ht.prototype.children=un.prototype.children=In.prototype.children=ra;function sh(r,e){let t=r.dom,{children:n}=r,s=0;for(let o=0;s<n.length;s++){let a=n[s],l=o+a.length;if(!(l==o&&a.getSide()<=0)){if(e>o&&e<l&&a.dom.parentNode==t)return a.domAtPos(e-o);if(e<=o)break;o=l}}for(let o=s;o>0;o--){let a=n[o-1];if(a.dom.parentNode==t)return a.domAtPos(a.length)}for(let o=s;o<n.length;o++){let a=n[o];if(a.dom.parentNode==t)return a.domAtPos(0)}return new Re(t,0)}function oh(r,e,t){let n,{children:s}=r;t>0&&e instanceof Xt&&s.length&&(n=s[s.length-1])instanceof Xt&&n.mark.eq(e.mark)?oh(n,e.children[0],t-1):(s.push(e),e.setParent(r)),r.length+=e.length}function ah(r,e,t){let n=null,s=-1,o=null,a=-1;function l(u,h){for(let d=0,f=0;d<u.children.length&&f<=h;d++){let p=u.children[d],m=f+p.length;m>=h&&(p.children.length?l(p,h-f):(!o||o.isHidden&&t>0)&&(m>h||f==m&&p.getSide()>0)?(o=p,a=h-f):(f<h||f==m&&p.getSide()<0&&!p.isHidden)&&(n=p,s=h-f)),f=m}}l(r,e);let c=(t<0?n:o)||n||o;return c?c.coordsAt(Math.max(0,c==n?s:a),t):sp(r)}function sp(r){let e=r.dom.lastChild;if(!e)return r.dom.getBoundingClientRect();let t=yr(e);return t[t.length-1]||null}function uo(r,e){for(let t in r)t=="class"&&e.class?e.class+=" "+r.class:t=="style"&&e.style?e.style+=";"+r.style:e[t]=r[t];return e}const cl=Object.create(null);function Pi(r,e,t){if(r==e)return!0;r||(r=cl),e||(e=cl);let n=Object.keys(r),s=Object.keys(e);if(n.length-(t&&n.indexOf(t)>-1?1:0)!=s.length-(t&&s.indexOf(t)>-1?1:0))return!1;for(let o of n)if(o!=t&&(s.indexOf(o)==-1||r[o]!==e[o]))return!1;return!0}function ho(r,e,t){let n=!1;if(e)for(let s in e)t&&s in t||(n=!0,s=="style"?r.style.cssText="":r.removeAttribute(s));if(t)for(let s in t)e&&e[s]==t[s]||(n=!0,s=="style"?r.style.cssText=t[s]:r.setAttribute(s,t[s]));return n}function op(r){let e=Object.create(null);for(let t=0;t<r.attributes.length;t++){let n=r.attributes[t];e[n.name]=n.value}return e}class we extends re{constructor(){super(...arguments),this.children=[],this.length=0,this.prevAttrs=void 0,this.attrs=null,this.breakAfter=0}merge(e,t,n,s,o,a){if(n){if(!(n instanceof we))return!1;this.dom||n.transferDOM(this)}return s&&this.setDeco(n?n.attrs:null),nh(this,e,t,n?n.children.slice():[],o,a),!0}split(e){let t=new we;if(t.breakAfter=this.breakAfter,this.length==0)return t;let{i:n,off:s}=this.childPos(e);s&&(t.append(this.children[n].split(s),0),this.children[n].merge(s,this.children[n].length,null,!1,0,0),n++);for(let o=n;o<this.children.length;o++)t.append(this.children[o],0);for(;n>0&&this.children[n-1].length==0;)this.children[--n].destroy();return this.children.length=n,this.markDirty(),this.length=e,t}transferDOM(e){this.dom&&(this.markDirty(),e.setDOM(this.dom),e.prevAttrs=this.prevAttrs===void 0?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(e){Pi(this.attrs,e)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=e)}append(e,t){oh(this,e,t)}addLineDeco(e){let t=e.spec.attributes,n=e.spec.class;t&&(this.attrs=uo(t,this.attrs||{})),n&&(this.attrs=uo({class:n},this.attrs||{}))}domAtPos(e){return sh(this,e)}reuseDOM(e){e.nodeName=="DIV"&&(this.setDOM(e),this.flags|=6)}sync(e,t){var n;this.dom?this.flags&4&&(Fu(this.dom),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0):(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),this.prevAttrs!==void 0&&(ho(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(e,t);let s=this.dom.lastChild;for(;s&&re.get(s)instanceof Xt;)s=s.lastChild;if(!s||!this.length||s.nodeName!="BR"&&((n=re.get(s))===null||n===void 0?void 0:n.isEditable)==!1&&(!j.ios||!this.children.some(o=>o instanceof ht))){let o=document.createElement("BR");o.cmIgnore=!0,this.dom.appendChild(o)}}measureTextSize(){if(this.children.length==0||this.length>20)return null;let e=0,t;for(let n of this.children){if(!(n instanceof ht)||/[^ -~]/.test(n.text))return null;let s=yr(n.dom);if(s.length!=1)return null;e+=s[0].width,t=s[0].height}return e?{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length,textHeight:t}:null}coordsAt(e,t){let n=ah(this,e,t);if(!this.children.length&&n&&this.parent){let{heightOracle:s}=this.parent.view.viewState,o=n.bottom-n.top;if(Math.abs(o-s.lineHeight)<2&&s.textHeight<o){let a=(o-s.textHeight)/2;return{top:n.top+a,bottom:n.bottom-a,left:n.left,right:n.left}}}return n}become(e){return e instanceof we&&this.children.length==0&&e.children.length==0&&Pi(this.attrs,e.attrs)&&this.breakAfter==e.breakAfter}covers(){return!0}static find(e,t){for(let n=0,s=0;n<e.children.length;n++){let o=e.children[n],a=s+o.length;if(a>=t){if(o instanceof we)return o;if(a>t)break}s=a+o.breakAfter}return null}}class jt extends re{constructor(e,t,n){super(),this.widget=e,this.length=t,this.deco=n,this.breakAfter=0,this.prevWidget=null}merge(e,t,n,s,o,a){return n&&(!(n instanceof jt)||!this.widget.compare(n.widget)||e>0&&o<=0||t<this.length&&a<=0)?!1:(this.length=e+(n?n.length:0)+(this.length-t),!0)}domAtPos(e){return e==0?Re.before(this.dom):Re.after(this.dom,e==this.length)}split(e){let t=this.length-e;this.length=e;let n=new jt(this.widget,t,this.deco);return n.breakAfter=this.breakAfter,n}get children(){return ra}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}get overrideDOMText(){return this.parent?this.parent.view.state.doc.slice(this.posAtStart,this.posAtEnd):G.empty}domBoundsAround(){return null}become(e){return e instanceof jt&&e.widget.constructor==this.widget.constructor?(e.widget.compare(this.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,this.deco=e.deco,this.breakAfter=e.breakAfter,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get isEditable(){return!1}get isWidget(){return!0}coordsAt(e,t){return this.widget.coordsAt(this.dom,e,t)}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}covers(e){let{startSide:t,endSide:n}=this.deco;return t==n?!1:e<0?t<0:n>0}}class Nn{eq(e){return!1}updateDOM(e,t){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var tt=function(r){return r[r.Text=0]="Text",r[r.WidgetBefore=1]="WidgetBefore",r[r.WidgetAfter=2]="WidgetAfter",r[r.WidgetRange=3]="WidgetRange",r}(tt||(tt={}));class q extends fn{constructor(e,t,n,s){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=s}get heightRelevant(){return!1}static mark(e){return new Zr(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new en(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,s;if(e.isBlockGap)n=-5e8,s=4e8;else{let{start:o,end:a}=lh(e,t);n=(o?t?-3e8:-1:5e8)-1,s=(a?t?2e8:1:-6e8)+1}return new en(e,n,s,t,e.widget||null,!0)}static line(e){return new jr(e)}static set(e,t=!1){return K.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}q.none=K.empty;class Zr extends q{constructor(e){let{start:t,end:n}=lh(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||"span",this.class=e.class||"",this.attrs=e.attributes||null}eq(e){var t,n;return this==e||e instanceof Zr&&this.tagName==e.tagName&&(this.class||((t=this.attrs)===null||t===void 0?void 0:t.class))==(e.class||((n=e.attrs)===null||n===void 0?void 0:n.class))&&Pi(this.attrs,e.attrs,"class")}range(e,t=e){if(e>=t)throw new RangeError("Mark decorations may not be empty");return super.range(e,t)}}Zr.prototype.point=!1;class jr extends q{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof jr&&this.spec.class==e.spec.class&&Pi(this.spec.attributes,e.spec.attributes)}range(e,t=e){if(t!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,t)}}jr.prototype.mapMode=Me.TrackBefore;jr.prototype.point=!0;class en extends q{constructor(e,t,n,s,o,a){super(t,n,o,e),this.block=s,this.isReplace=a,this.mapMode=s?t<=0?Me.TrackBefore:Me.TrackAfter:Me.TrackDel}get type(){return this.startSide!=this.endSide?tt.WidgetRange:this.startSide<=0?tt.WidgetBefore:tt.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof en&&ap(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&t!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,t)}}en.prototype.point=!0;function lh(r,e=!1){let{inclusiveStart:t,inclusiveEnd:n}=r;return t==null&&(t=r.inclusive),n==null&&(n=r.inclusive),{start:t??e,end:n??e}}function ap(r,e){return r==e||!!(r&&e&&r.compare(e))}function fo(r,e,t,n=0){let s=t.length-1;s>=0&&t[s]+n>=r?t[s]=Math.max(t[s],e):t.push(r,e)}class fr{constructor(e,t,n,s){this.doc=e,this.pos=t,this.end=n,this.disallowBlockEffectsFor=s,this.content=[],this.curLine=null,this.breakAtStart=0,this.pendingBuffer=0,this.bufferMarks=[],this.atCursorPos=!0,this.openStart=-1,this.openEnd=-1,this.text="",this.textOff=0,this.cursor=e.iter(),this.skip=t}posCovered(){if(this.content.length==0)return!this.breakAtStart&&this.doc.lineAt(this.pos).from!=this.pos;let e=this.content[this.content.length-1];return!(e.breakAfter||e instanceof jt&&e.deco.endSide<0)}getLine(){return this.curLine||(this.content.push(this.curLine=new we),this.atCursorPos=!0),this.curLine}flushBuffer(e=this.bufferMarks){this.pendingBuffer&&(this.curLine.append(qr(new In(-1),e),e.length),this.pendingBuffer=0)}addBlockWidget(e){this.flushBuffer(),this.curLine=null,this.content.push(e)}finish(e){this.pendingBuffer&&e<=this.bufferMarks.length?this.flushBuffer():this.pendingBuffer=0,!this.posCovered()&&!(e&&this.content.length&&this.content[this.content.length-1]instanceof jt)&&this.getLine()}buildText(e,t,n){for(;e>0;){if(this.textOff==this.text.length){let{value:o,lineBreak:a,done:l}=this.cursor.next(this.skip);if(this.skip=0,l)throw new Error("Ran out of text content when drawing inline views");if(a){this.posCovered()||this.getLine(),this.content.length?this.content[this.content.length-1].breakAfter=1:this.breakAtStart=1,this.flushBuffer(),this.curLine=null,this.atCursorPos=!0,e--;continue}else this.text=o,this.textOff=0}let s=Math.min(this.text.length-this.textOff,e,512);this.flushBuffer(t.slice(t.length-n)),this.getLine().append(qr(new ht(this.text.slice(this.textOff,this.textOff+s)),t),n),this.atCursorPos=!0,this.textOff+=s,e-=s,n=0}}span(e,t,n,s){this.buildText(t-e,n,s),this.pos=t,this.openStart<0&&(this.openStart=s)}point(e,t,n,s,o,a){if(this.disallowBlockEffectsFor[a]&&n instanceof en){if(n.block)throw new RangeError("Block decorations may not be specified via plugins");if(t>this.doc.lineAt(this.pos).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}let l=t-e;if(n instanceof en)if(n.block)n.startSide>0&&!this.posCovered()&&this.getLine(),this.addBlockWidget(new jt(n.widget||Dn.block,l,n));else{let c=un.create(n.widget||Dn.inline,l,l?0:n.startSide),u=this.atCursorPos&&!c.isEditable&&o<=s.length&&(e<t||n.startSide>0),h=!c.isEditable&&(e<t||o>s.length||n.startSide<=0),d=this.getLine();this.pendingBuffer==2&&!u&&!c.isEditable&&(this.pendingBuffer=0),this.flushBuffer(s),u&&(d.append(qr(new In(1),s),o),o=s.length+Math.max(0,o-s.length)),d.append(qr(c,s),o),this.atCursorPos=h,this.pendingBuffer=h?e<t||o>s.length?1:2:0,this.pendingBuffer&&(this.bufferMarks=s.slice())}else this.doc.lineAt(this.pos).from==this.pos&&this.getLine().addLineDeco(n);l&&(this.textOff+l<=this.text.length?this.textOff+=l:(this.skip+=l-(this.text.length-this.textOff),this.text="",this.textOff=0),this.pos=t),this.openStart<0&&(this.openStart=o)}static build(e,t,n,s,o){let a=new fr(e,t,n,o);return a.openEnd=K.spans(s,t,n,a),a.openStart<0&&(a.openStart=a.openEnd),a.finish(a.openEnd),a}}function qr(r,e){for(let t of e)r=new Xt(t,[r],r.length);return r}class Dn extends Nn{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}Dn.inline=new Dn("span");Dn.block=new Dn("div");var Se=function(r){return r[r.LTR=0]="LTR",r[r.RTL=1]="RTL",r}(Se||(Se={}));const On=Se.LTR,ia=Se.RTL;function ch(r){let e=[];for(let t=0;t<r.length;t++)e.push(1<<+r[t]);return e}const lp=ch("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),cp=ch("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),po=Object.create(null),gt=[];for(let r of["()","[]","{}"]){let e=r.charCodeAt(0),t=r.charCodeAt(1);po[e]=t,po[t]=-e}function uh(r){return r<=247?lp[r]:1424<=r&&r<=1524?2:1536<=r&&r<=1785?cp[r-1536]:1774<=r&&r<=2220?4:8192<=r&&r<=8204?256:64336<=r&&r<=65023?4:1}const up=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class Jt{get dir(){return this.level%2?ia:On}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,s){let o=-1;for(let a=0;a<e.length;a++){let l=e[a];if(l.from<=t&&l.to>=t){if(l.level==n)return a;(o<0||(s!=0?s<0?l.from<t:l.to>t:e[o].level>l.level))&&(o=a)}}if(o<0)throw new RangeError("Index out of range");return o}}function hh(r,e){if(r.length!=e.length)return!1;for(let t=0;t<r.length;t++){let n=r[t],s=e[t];if(n.from!=s.from||n.to!=s.to||n.direction!=s.direction||!hh(n.inner,s.inner))return!1}return!0}const ne=[];function hp(r,e,t,n,s){for(let o=0;o<=n.length;o++){let a=o?n[o-1].to:e,l=o<n.length?n[o].from:t,c=o?256:s;for(let u=a,h=c,d=c;u<l;u++){let f=uh(r.charCodeAt(u));f==512?f=h:f==8&&d==4&&(f=16),ne[u]=f==4?2:f,f&7&&(d=f),h=f}for(let u=a,h=c,d=c;u<l;u++){let f=ne[u];if(f==128)u<l-1&&h==ne[u+1]&&h&24?f=ne[u]=h:ne[u]=256;else if(f==64){let p=u+1;for(;p<l&&ne[p]==64;)p++;let m=u&&h==8||p<t&&ne[p]==8?d==1?1:8:256;for(let O=u;O<p;O++)ne[O]=m;u=p-1}else f==8&&d==1&&(ne[u]=1);h=f,f&7&&(d=f)}}}function dp(r,e,t,n,s){let o=s==1?2:1;for(let a=0,l=0,c=0;a<=n.length;a++){let u=a?n[a-1].to:e,h=a<n.length?n[a].from:t;for(let d=u,f,p,m;d<h;d++)if(p=po[f=r.charCodeAt(d)])if(p<0){for(let O=l-3;O>=0;O-=3)if(gt[O+1]==-p){let v=gt[O+2],w=v&2?s:v&4?v&1?o:s:0;w&&(ne[d]=ne[gt[O]]=w),l=O;break}}else{if(gt.length==189)break;gt[l++]=d,gt[l++]=f,gt[l++]=c}else if((m=ne[d])==2||m==1){let O=m==s;c=O?0:1;for(let v=l-3;v>=0;v-=3){let w=gt[v+2];if(w&2)break;if(O)gt[v+2]|=2;else{if(w&4)break;gt[v+2]|=4}}}}}function fp(r,e,t,n){for(let s=0,o=n;s<=t.length;s++){let a=s?t[s-1].to:r,l=s<t.length?t[s].from:e;for(let c=a;c<l;){let u=ne[c];if(u==256){let h=c+1;for(;;)if(h==l){if(s==t.length)break;h=t[s++].to,l=s<t.length?t[s].from:e}else if(ne[h]==256)h++;else break;let d=o==1,f=(h<e?ne[h]:n)==1,p=d==f?d?1:2:n;for(let m=h,O=s,v=O?t[O-1].to:r;m>c;)m==v&&(m=t[--O].from,v=O?t[O-1].to:r),ne[--m]=p;c=h}else o=u,c++}}}function mo(r,e,t,n,s,o,a){let l=n%2?2:1;if(n%2==s%2)for(let c=e,u=0;c<t;){let h=!0,d=!1;if(u==o.length||c<o[u].from){let O=ne[c];O!=l&&(h=!1,d=O==16)}let f=!h&&l==1?[]:null,p=h?n:n+1,m=c;e:for(;;)if(u<o.length&&m==o[u].from){if(d)break e;let O=o[u];if(!h)for(let v=O.to,w=u+1;;){if(v==t)break e;if(w<o.length&&o[w].from==v)v=o[w++].to;else{if(ne[v]==l)break e;break}}if(u++,f)f.push(O);else{O.from>c&&a.push(new Jt(c,O.from,p));let v=O.direction==On!=!(p%2);Oo(r,v?n+1:n,s,O.inner,O.from,O.to,a),c=O.to}m=O.to}else{if(m==t||(h?ne[m]!=l:ne[m]==l))break;m++}f?mo(r,c,m,n+1,s,f,a):c<m&&a.push(new Jt(c,m,p)),c=m}else for(let c=t,u=o.length;c>e;){let h=!0,d=!1;if(!u||c>o[u-1].to){let O=ne[c-1];O!=l&&(h=!1,d=O==16)}let f=!h&&l==1?[]:null,p=h?n:n+1,m=c;e:for(;;)if(u&&m==o[u-1].to){if(d)break e;let O=o[--u];if(!h)for(let v=O.from,w=u;;){if(v==e)break e;if(w&&o[w-1].to==v)v=o[--w].from;else{if(ne[v-1]==l)break e;break}}if(f)f.push(O);else{O.to<c&&a.push(new Jt(O.to,c,p));let v=O.direction==On!=!(p%2);Oo(r,v?n+1:n,s,O.inner,O.from,O.to,a),c=O.from}m=O.from}else{if(m==e||(h?ne[m-1]!=l:ne[m-1]==l))break;m--}f?mo(r,m,c,n+1,s,f,a):m<c&&a.push(new Jt(m,c,p)),c=m}}function Oo(r,e,t,n,s,o,a){let l=e%2?2:1;hp(r,s,o,n,l),dp(r,s,o,n,l),fp(s,o,n,l),mo(r,s,o,e,t,n,a)}function pp(r,e,t){if(!r)return[new Jt(0,0,e==ia?1:0)];if(e==On&&!t.length&&!up.test(r))return dh(r.length);if(t.length)for(;r.length>ne.length;)ne[ne.length]=256;let n=[],s=e==On?0:1;return Oo(r,s,s,t,0,r.length,n),n}function dh(r){return[new Jt(0,r,0)]}let fh="";function mp(r,e,t,n,s){var o;let a=n.head-r.from,l=Jt.find(e,a,(o=n.bidiLevel)!==null&&o!==void 0?o:-1,n.assoc),c=e[l],u=c.side(s,t);if(a==u){let f=l+=s?1:-1;if(f<0||f>=e.length)return null;c=e[l=f],a=c.side(!s,t),u=c.side(s,t)}let h=Ye(r.text,a,c.forward(s,t));(h<c.from||h>c.to)&&(h=u),fh=r.text.slice(Math.min(a,h),Math.max(a,h));let d=l==(s?e.length-1:0)?null:e[l+(s?1:-1)];return d&&h==u&&d.level+(s?0:1)<c.level?Q.cursor(d.side(!s,t)+r.from,d.forward(s,t)?1:-1,d.level):Q.cursor(h+r.from,c.forward(s,t)?-1:1,c.level)}function Op(r,e,t){for(let n=e;n<t;n++){let s=uh(r.charCodeAt(n));if(s==1)return On;if(s==2||s==4)return ia}return On}const ph=Y.define(),mh=Y.define(),Oh=Y.define(),gh=Y.define(),go=Y.define(),vh=Y.define(),wh=Y.define(),yh=Y.define({combine:r=>r.some(e=>e)}),gp=Y.define({combine:r=>r.some(e=>e)}),bh=Y.define();class Rn{constructor(e,t="nearest",n="nearest",s=5,o=5,a=!1){this.range=e,this.y=t,this.x=n,this.yMargin=s,this.xMargin=o,this.isSnapshot=a}map(e){return e.empty?this:new Rn(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new Rn(Q.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Ur=se.define({map:(r,e)=>r.map(e)}),Sh=se.define();function xt(r,e,t){let n=r.facet(gh);n.length?n[0](e):window.onerror?window.onerror(String(e),t,void 0,void 0,e):t?console.error(t+":",e):console.error(e)}const Ut=Y.define({combine:r=>r.length?r[0]:!0});let vp=0;const rr=Y.define();class it{constructor(e,t,n,s,o){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=s,this.extension=o(this)}static define(e,t){const{eventHandlers:n,eventObservers:s,provide:o,decorations:a}=t||{};return new it(vp++,e,n,s,l=>{let c=[rr.of(l)];return a&&c.push(br.of(u=>{let h=u.plugin(l);return h?a(h):q.none})),o&&c.push(o(l)),c})}static fromClass(e,t){return it.define(n=>new e(n),t)}}class Os{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}update(e){if(this.value){if(this.mustUpdate){let t=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(t)}catch(n){if(xt(t.state,n,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.create(e)}catch(t){xt(e.state,t,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var t;if(!((t=this.value)===null||t===void 0)&&t.destroy)try{this.value.destroy()}catch(n){xt(e.state,n,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const Ch=Y.define(),sa=Y.define(),br=Y.define(),xh=Y.define(),oa=Y.define(),kh=Y.define();function ul(r,e){let t=r.state.facet(kh);if(!t.length)return t;let n=t.map(o=>o instanceof Function?o(r):o),s=[];return K.spans(n,e.from,e.to,{point(){},span(o,a,l,c){let u=o-e.from,h=a-e.from,d=s;for(let f=l.length-1;f>=0;f--,c--){let p=l[f].spec.bidiIsolate,m;if(p==null&&(p=Op(e.text,u,h)),c>0&&d.length&&(m=d[d.length-1]).to==u&&m.direction==p)m.to=h,d=m.inner;else{let O={from:u,to:h,direction:p,inner:[]};d.push(O),d=O.inner}}}}),s}const Ph=Y.define();function $h(r){let e=0,t=0,n=0,s=0;for(let o of r.state.facet(Ph)){let a=o(r);a&&(a.left!=null&&(e=Math.max(e,a.left)),a.right!=null&&(t=Math.max(t,a.right)),a.top!=null&&(n=Math.max(n,a.top)),a.bottom!=null&&(s=Math.max(s,a.bottom)))}return{left:e,right:t,top:n,bottom:s}}const ir=Y.define();class nt{constructor(e,t,n,s){this.fromA=e,this.toA=t,this.fromB=n,this.toB=s}join(e){return new nt(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let s=e[t-1];if(!(s.fromA>n.toA)){if(s.toA<n.fromA)break;n=n.join(s),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(e,t){if(t.length==0)return e;let n=[];for(let s=0,o=0,a=0,l=0;;s++){let c=s==e.length?null:e[s],u=a-l,h=c?c.fromB:1e9;for(;o<t.length&&t[o]<h;){let d=t[o],f=t[o+1],p=Math.max(l,d),m=Math.min(h,f);if(p<=m&&new nt(p+u,m+u,p,m).addToSet(n),f>h)break;o+=2}if(!c)return n;new nt(c.fromA,c.toA,c.fromB,c.toB).addToSet(n),a=c.toA,l=c.toB}}}class $i{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=be.empty(this.startState.doc.length);for(let o of n)this.changes=this.changes.compose(o.changes);let s=[];this.changes.iterChangedRanges((o,a,l,c)=>s.push(new nt(o,a,l,c))),this.changedRanges=s}static create(e,t,n){return new $i(e,t,n)}get viewportChanged(){return(this.flags&4)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&10)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}class hl extends re{get length(){return this.view.state.doc.length}constructor(e){super(),this.view=e,this.decorations=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.markedForComposition=new Set,this.editContextFormatting=q.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.setDOM(e.contentDOM),this.children=[new we],this.children[0].setParent(this),this.updateDeco(),this.updateInner([new nt(0,0,0,e.state.doc.length)],0,null)}update(e){var t;let n=e.changedRanges;this.minWidth>0&&n.length&&(n.every(({fromA:u,toA:h})=>h<this.minWidthFrom||u>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let s=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((t=this.domChanged)===null||t===void 0)&&t.newSel?s=this.domChanged.newSel.head:!kp(e.changes,this.hasComposition)&&!e.selectionSet&&(s=e.state.selection.main.head));let o=s>-1?yp(this.view,e.changes,s):null;if(this.domChanged=null,this.hasComposition){this.markedForComposition.clear();let{from:u,to:h}=this.hasComposition;n=new nt(u,h,e.changes.mapPos(u,-1),e.changes.mapPos(h,1)).addToSet(n.slice())}this.hasComposition=o?{from:o.range.fromB,to:o.range.toB}:null,(j.ie||j.chrome)&&!o&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let a=this.decorations,l=this.updateDeco(),c=Cp(a,l,e.changes);return n=nt.extendWithRanges(n,c),!(this.flags&7)&&n.length==0?!1:(this.updateInner(n,e.startState.doc.length,o),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t,n){this.view.viewState.mustMeasureContent=!0,this.updateChildren(e,t,n);let{observer:s}=this.view;s.ignore(()=>{this.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let a=j.chrome||j.ios?{node:s.selectionRange.focusNode,written:!1}:void 0;this.sync(this.view,a),this.flags&=-8,a&&(a.written||s.selectionRange.focusNode!=a.node)&&(this.forceSelection=!0),this.dom.style.height=""}),this.markedForComposition.forEach(a=>a.flags&=-9);let o=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let a of this.children)a instanceof jt&&a.widget instanceof dl&&o.push(a.dom);s.updateGaps(o)}updateChildren(e,t,n){let s=n?n.range.addToSet(e.slice()):e,o=this.childCursor(t);for(let a=s.length-1;;a--){let l=a>=0?s[a]:null;if(!l)break;let{fromA:c,toA:u,fromB:h,toB:d}=l,f,p,m,O;if(n&&n.range.fromB<d&&n.range.toB>h){let b=fr.build(this.view.state.doc,h,n.range.fromB,this.decorations,this.dynamicDecorationMap),g=fr.build(this.view.state.doc,n.range.toB,d,this.decorations,this.dynamicDecorationMap);p=b.breakAtStart,m=b.openStart,O=g.openEnd;let C=this.compositionView(n);g.breakAtStart?C.breakAfter=1:g.content.length&&C.merge(C.length,C.length,g.content[0],!1,g.openStart,0)&&(C.breakAfter=g.content[0].breakAfter,g.content.shift()),b.content.length&&C.merge(0,0,b.content[b.content.length-1],!0,0,b.openEnd)&&b.content.pop(),f=b.content.concat(C).concat(g.content)}else({content:f,breakAtStart:p,openStart:m,openEnd:O}=fr.build(this.view.state.doc,h,d,this.decorations,this.dynamicDecorationMap));let{i:v,off:w}=o.findPos(u,1),{i:x,off:k}=o.findPos(c,-1);th(this,x,k,v,w,f,p,m,O)}n&&this.fixCompositionDOM(n)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let n of t.effects)n.is(Sh)&&(this.editContextFormatting=n.value)}compositionView(e){let t=new ht(e.text.nodeValue);t.flags|=8;for(let{deco:s}of e.marks)t=new Xt(s,[t],t.length);let n=new we;return n.append(t,0),n}fixCompositionDOM(e){let t=(o,a)=>{a.flags|=8|(a.children.some(c=>c.flags&7)?1:0),this.markedForComposition.add(a);let l=re.get(o);l&&l!=a&&(l.dom=null),a.setDOM(o)},n=this.childPos(e.range.fromB,1),s=this.children[n.i];t(e.line,s);for(let o=e.marks.length-1;o>=-1;o--)n=s.childPos(n.off,1),s=s.children[n.i],t(o>=0?e.marks[o].node:e.text,s)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let n=this.view.root.activeElement,s=n==this.dom,o=!s&&ci(this.dom,this.view.observer.selectionRange)&&!(n&&this.dom.contains(n));if(!(s||t||o))return;let a=this.forceSelection;this.forceSelection=!1;let l=this.view.state.selection.main,c=this.moveToLine(this.domAtPos(l.anchor)),u=l.empty?c:this.moveToLine(this.domAtPos(l.head));if(j.gecko&&l.empty&&!this.hasComposition&&wp(c)){let d=document.createTextNode("");this.view.observer.ignore(()=>c.node.insertBefore(d,c.node.childNodes[c.offset]||null)),c=u=new Re(d,0),a=!0}let h=this.view.observer.selectionRange;(a||!h.focusNode||(!dr(c.node,c.offset,h.anchorNode,h.anchorOffset)||!dr(u.node,u.offset,h.focusNode,h.focusOffset))&&!this.suppressWidgetCursorChange(h,l))&&(this.view.observer.ignore(()=>{j.android&&j.chrome&&this.dom.contains(h.focusNode)&&xp(h.focusNode,this.dom)&&(this.dom.blur(),this.dom.focus({preventScroll:!0}));let d=wr(this.view.root);if(d)if(l.empty){if(j.gecko){let f=bp(c.node,c.offset);if(f&&f!=3){let p=(f==1?Hu:Ku)(c.node,c.offset);p&&(c=new Re(p.node,p.offset))}}d.collapse(c.node,c.offset),l.bidiLevel!=null&&d.caretBidiLevel!==void 0&&(d.caretBidiLevel=l.bidiLevel)}else if(d.extend){d.collapse(c.node,c.offset);try{d.extend(u.node,u.offset)}catch{}}else{let f=document.createRange();l.anchor>l.head&&([c,u]=[u,c]),f.setEnd(u.node,u.offset),f.setStart(c.node,c.offset),d.removeAllRanges(),d.addRange(f)}o&&this.view.root.activeElement==this.dom&&(this.dom.blur(),n&&n.focus())}),this.view.observer.setSelectionRange(c,u)),this.impreciseAnchor=c.precise?null:new Re(h.anchorNode,h.anchorOffset),this.impreciseHead=u.precise?null:new Re(h.focusNode,h.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&dr(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=wr(e.root),{anchorNode:s,anchorOffset:o}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let a=we.find(this,t.head);if(!a)return;let l=a.posAtStart;if(t.head==l||t.head==l+a.length)return;let c=this.coordsAt(t.head,-1),u=this.coordsAt(t.head,1);if(!c||!u||c.bottom>u.top)return;let h=this.domAtPos(t.head+t.assoc);n.collapse(h.node,h.offset),n.modify("move",t.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let d=e.observer.selectionRange;e.docView.posFromDOM(d.anchorNode,d.anchorOffset)!=t.from&&n.collapse(s,o)}moveToLine(e){let t=this.dom,n;if(e.node!=t)return e;for(let s=e.offset;!n&&s<t.childNodes.length;s++){let o=re.get(t.childNodes[s]);o instanceof we&&(n=o.domAtPos(0))}for(let s=e.offset-1;!n&&s>=0;s--){let o=re.get(t.childNodes[s]);o instanceof we&&(n=o.domAtPos(o.length))}return n?new Re(n.node,n.offset,!0):e}nearest(e){for(let t=e;t;){let n=re.get(t);if(n&&n.rootView==this)return n;t=t.parentNode}return null}posFromDOM(e,t){let n=this.nearest(e);if(!n)throw new RangeError("Trying to find position for a DOM position outside of the document");return n.localPosFromDOM(e,t)+n.posAtStart}domAtPos(e){let{i:t,off:n}=this.childCursor().findPos(e,-1);for(;t<this.children.length-1;){let s=this.children[t];if(n<s.length||s instanceof we)break;t++,n=0}return this.children[t].domAtPos(n)}coordsAt(e,t){let n=null,s=0;for(let o=this.length,a=this.children.length-1;a>=0;a--){let l=this.children[a],c=o-l.breakAfter,u=c-l.length;if(c<e)break;if(u<=e&&(u<e||l.covers(-1))&&(c>e||l.covers(1))&&(!n||l instanceof we&&!(n instanceof we&&t>=0)))n=l,s=u;else if(n&&u==e&&c==e&&l instanceof jt&&Math.abs(t)<2){if(l.deco.startSide<0)break;a&&(n=null)}o=u}return n?n.coordsAt(e-s,t):null}coordsForChar(e){let{i:t,off:n}=this.childPos(e,1),s=this.children[t];if(!(s instanceof we))return null;for(;s.children.length;){let{i:l,off:c}=s.childPos(n,1);for(;;l++){if(l==s.children.length)return null;if((s=s.children[l]).length)break}n=c}if(!(s instanceof ht))return null;let o=Ye(s.text,n);if(o==n)return null;let a=mn(s.dom,n,o).getClientRects();for(let l=0;l<a.length;l++){let c=a[l];if(l==a.length-1||c.top<c.bottom&&c.left<c.right)return c}return null}measureVisibleLineHeights(e){let t=[],{from:n,to:s}=e,o=this.view.contentDOM.clientWidth,a=o>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,l=-1,c=this.view.textDirection==Se.LTR;for(let u=0,h=0;h<this.children.length;h++){let d=this.children[h],f=u+d.length;if(f>s)break;if(u>=n){let p=d.dom.getBoundingClientRect();if(t.push(p.height),a){let m=d.dom.lastChild,O=m?yr(m):[];if(O.length){let v=O[O.length-1],w=c?v.right-p.left:p.right-v.left;w>l&&(l=w,this.minWidth=o,this.minWidthFrom=u,this.minWidthTo=f)}}}u=f+d.breakAfter}return t}textDirectionAt(e){let{i:t}=this.childPos(e,1);return getComputedStyle(this.children[t].dom).direction=="rtl"?Se.RTL:Se.LTR}measureTextSize(){for(let o of this.children)if(o instanceof we){let a=o.measureTextSize();if(a)return a}let e=document.createElement("div"),t,n,s;return e.className="cm-line",e.style.width="99999px",e.style.position="absolute",e.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.dom.appendChild(e);let o=yr(e.firstChild)[0];t=e.getBoundingClientRect().height,n=o?o.width/27:7,s=o?o.height:t,e.remove()}),{lineHeight:t,charWidth:n,textHeight:s}}childCursor(e=this.length){let t=this.children.length;return t&&(e-=this.children[--t].length),new eh(this.children,e,t)}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,s=0;;s++){let o=s==t.viewports.length?null:t.viewports[s],a=o?o.from-1:this.length;if(a>n){let l=(t.lineBlockAt(a).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(q.replace({widget:new dl(l),block:!0,inclusive:!0,isBlockGap:!0}).range(n,a))}if(!o)break;n=o.to+1}return q.set(e)}updateDeco(){let e=1,t=this.view.state.facet(br).map(o=>(this.dynamicDecorationMap[e++]=typeof o=="function")?o(this.view):o),n=!1,s=this.view.state.facet(xh).map((o,a)=>{let l=typeof o=="function";return l&&(n=!0),l?o(this.view):o});for(s.length&&(this.dynamicDecorationMap[e++]=n,t.push(K.join(s))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;return this.decorations}scrollIntoView(e){if(e.isSnapshot){let u=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=u.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let u of this.view.state.facet(bh))try{if(u(this.view,e.range,e))return!0}catch(h){xt(this.view.state,h,"scroll handler")}let{range:t}=e,n=this.coordsAt(t.head,t.empty?t.assoc:t.head>t.anchor?-1:1),s;if(!n)return;!t.empty&&(s=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,s.left),top:Math.min(n.top,s.top),right:Math.max(n.right,s.right),bottom:Math.max(n.bottom,s.bottom)});let o=$h(this.view),a={left:n.left-o.left,top:n.top-o.top,right:n.right+o.right,bottom:n.bottom+o.bottom},{offsetWidth:l,offsetHeight:c}=this.view.scrollDOM;H0(this.view.scrollDOM,a,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,l),-l),Math.max(Math.min(e.yMargin,c),-c),this.view.textDirection==Se.LTR)}}function wp(r){return r.node.nodeType==1&&r.node.firstChild&&(r.offset==0||r.node.childNodes[r.offset-1].contentEditable=="false")&&(r.offset==r.node.childNodes.length||r.node.childNodes[r.offset].contentEditable=="false")}class dl extends Nn{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function Qh(r,e){let t=r.observer.selectionRange;if(!t.focusNode)return null;let n=Hu(t.focusNode,t.focusOffset),s=Ku(t.focusNode,t.focusOffset),o=n||s;if(s&&n&&s.node!=n.node){let l=re.get(s.node);if(!l||l instanceof ht&&l.text!=s.node.nodeValue)o=s;else if(r.docView.lastCompositionAfterCursor){let c=re.get(n.node);!c||c instanceof ht&&c.text!=n.node.nodeValue||(o=s)}}if(r.docView.lastCompositionAfterCursor=o!=n,!o)return null;let a=e-o.offset;return{from:a,to:a+o.node.nodeValue.length,node:o.node}}function yp(r,e,t){let n=Qh(r,t);if(!n)return null;let{node:s,from:o,to:a}=n,l=s.nodeValue;if(/[\n\r]/.test(l)||r.state.doc.sliceString(n.from,n.to)!=l)return null;let c=e.invertedDesc,u=new nt(c.mapPos(o),c.mapPos(a),o,a),h=[];for(let d=s.parentNode;;d=d.parentNode){let f=re.get(d);if(f instanceof Xt)h.push({node:d,deco:f.mark});else{if(f instanceof we||d.nodeName=="DIV"&&d.parentNode==r.contentDOM)return{range:u,text:s,marks:h,line:d};if(d!=r.contentDOM)h.push({node:d,deco:new Zr({inclusive:!0,attributes:op(d),tagName:d.tagName.toLowerCase()})});else return null}}}function bp(r,e){return r.nodeType!=1?0:(e&&r.childNodes[e-1].contentEditable=="false"?1:0)|(e<r.childNodes.length&&r.childNodes[e].contentEditable=="false"?2:0)}let Sp=class{constructor(){this.changes=[]}compareRange(e,t){fo(e,t,this.changes)}comparePoint(e,t){fo(e,t,this.changes)}};function Cp(r,e,t){let n=new Sp;return K.compare(r,e,t,n),n.changes}function xp(r,e){for(let t=r;t&&t!=e;t=t.assignedSlot||t.parentNode)if(t.nodeType==1&&t.contentEditable=="false")return!0;return!1}function kp(r,e){let t=!1;return e&&r.iterChangedRanges((n,s)=>{n<e.to&&s>e.from&&(t=!0)}),t}function Pp(r,e,t=1){let n=r.charCategorizer(e),s=r.doc.lineAt(e),o=e-s.from;if(s.length==0)return Q.cursor(e);o==0?t=1:o==s.length&&(t=-1);let a=o,l=o;t<0?a=Ye(s.text,o,!1):l=Ye(s.text,o);let c=n(s.text.slice(a,l));for(;a>0;){let u=Ye(s.text,a,!1);if(n(s.text.slice(u,a))!=c)break;a=u}for(;l<s.length;){let u=Ye(s.text,l);if(n(s.text.slice(l,u))!=c)break;l=u}return Q.range(a+s.from,l+s.from)}function $p(r,e){return e.left>r?e.left-r:Math.max(0,r-e.right)}function Qp(r,e){return e.top>r?e.top-r:Math.max(0,r-e.bottom)}function gs(r,e){return r.top<e.bottom-1&&r.bottom>e.top+1}function fl(r,e){return e<r.top?{top:e,left:r.left,right:r.right,bottom:r.bottom}:r}function pl(r,e){return e>r.bottom?{top:r.top,left:r.left,right:r.right,bottom:e}:r}function vo(r,e,t){let n,s,o,a,l=!1,c,u,h,d;for(let m=r.firstChild;m;m=m.nextSibling){let O=yr(m);for(let v=0;v<O.length;v++){let w=O[v];s&&gs(s,w)&&(w=fl(pl(w,s.bottom),s.top));let x=$p(e,w),k=Qp(t,w);if(x==0&&k==0)return m.nodeType==3?ml(m,e,t):vo(m,e,t);if(!n||a>k||a==k&&o>x){n=m,s=w,o=x,a=k;let b=k?t<w.top?-1:1:x?e<w.left?-1:1:0;l=!b||(b>0?v<O.length-1:v>0)}x==0?t>w.bottom&&(!h||h.bottom<w.bottom)?(c=m,h=w):t<w.top&&(!d||d.top>w.top)&&(u=m,d=w):h&&gs(h,w)?h=pl(h,w.bottom):d&&gs(d,w)&&(d=fl(d,w.top))}}if(h&&h.bottom>=t?(n=c,s=h):d&&d.top<=t&&(n=u,s=d),!n)return{node:r,offset:0};let f=Math.max(s.left,Math.min(s.right,e));if(n.nodeType==3)return ml(n,f,t);if(l&&n.contentEditable!="false")return vo(n,f,t);let p=Array.prototype.indexOf.call(r.childNodes,n)+(e>=(s.left+s.right)/2?1:0);return{node:r,offset:p}}function ml(r,e,t){let n=r.nodeValue.length,s=-1,o=1e9,a=0;for(let l=0;l<n;l++){let c=mn(r,l,l+1).getClientRects();for(let u=0;u<c.length;u++){let h=c[u];if(h.top==h.bottom)continue;a||(a=e-h.left);let d=(h.top>t?h.top-t:t-h.bottom)-1;if(h.left-1<=e&&h.right+1>=e&&d<o){let f=e>=(h.left+h.right)/2,p=f;if((j.chrome||j.gecko)&&mn(r,l).getBoundingClientRect().left==h.right&&(p=!f),d<=0)return{node:r,offset:l+(p?1:0)};s=l+(p?1:0),o=d}}}return{node:r,offset:s>-1?s:a>0?r.nodeValue.length:0}}function Th(r,e,t,n=-1){var s,o;let a=r.contentDOM.getBoundingClientRect(),l=a.top+r.viewState.paddingTop,c,{docHeight:u}=r.viewState,{x:h,y:d}=e,f=d-l;if(f<0)return 0;if(f>u)return r.state.doc.length;for(let b=r.viewState.heightOracle.textHeight/2,g=!1;c=r.elementAtHeight(f),c.type!=tt.Text;)for(;f=n>0?c.bottom+b:c.top-b,!(f>=0&&f<=u);){if(g)return t?null:0;g=!0,n=-n}d=l+f;let p=c.from;if(p<r.viewport.from)return r.viewport.from==0?0:t?null:Ol(r,a,c,h,d);if(p>r.viewport.to)return r.viewport.to==r.state.doc.length?r.state.doc.length:t?null:Ol(r,a,c,h,d);let m=r.dom.ownerDocument,O=r.root.elementFromPoint?r.root:m,v=O.elementFromPoint(h,d);v&&!r.contentDOM.contains(v)&&(v=null),v||(h=Math.max(a.left+1,Math.min(a.right-1,h)),v=O.elementFromPoint(h,d),v&&!r.contentDOM.contains(v)&&(v=null));let w,x=-1;if(v&&((s=r.docView.nearest(v))===null||s===void 0?void 0:s.isEditable)!=!1){if(m.caretPositionFromPoint){let b=m.caretPositionFromPoint(h,d);b&&({offsetNode:w,offset:x}=b)}else if(m.caretRangeFromPoint){let b=m.caretRangeFromPoint(h,d);b&&({startContainer:w,startOffset:x}=b,(!r.contentDOM.contains(w)||j.safari&&Tp(w,x,h)||j.chrome&&Mp(w,x,h))&&(w=void 0))}}if(!w||!r.docView.dom.contains(w)){let b=we.find(r.docView,p);if(!b)return f>c.top+c.height/2?c.to:c.from;({node:w,offset:x}=vo(b.dom,h,d))}let k=r.docView.nearest(w);if(!k)return null;if(k.isWidget&&((o=k.dom)===null||o===void 0?void 0:o.nodeType)==1){let b=k.dom.getBoundingClientRect();return e.y<b.top||e.y<=b.bottom&&e.x<=(b.left+b.right)/2?k.posAtStart:k.posAtEnd}else return k.localPosFromDOM(w,x)+k.posAtStart}function Ol(r,e,t,n,s){let o=Math.round((n-e.left)*r.defaultCharacterWidth);if(r.lineWrapping&&t.height>r.defaultLineHeight*1.5){let l=r.viewState.heightOracle.textHeight,c=Math.floor((s-t.top-(r.defaultLineHeight-l)*.5)/l);o+=c*r.viewState.heightOracle.lineLength}let a=r.state.sliceDoc(t.from,t.to);return t.from+N0(a,o,r.state.tabSize)}function Tp(r,e,t){let n;if(r.nodeType!=3||e!=(n=r.nodeValue.length))return!1;for(let s=r.nextSibling;s;s=s.nextSibling)if(s.nodeType!=1||s.nodeName!="BR")return!1;return mn(r,n-1,n).getBoundingClientRect().left>t}function Mp(r,e,t){if(e!=0)return!1;for(let s=r;;){let o=s.parentNode;if(!o||o.nodeType!=1||o.firstChild!=s)return!1;if(o.classList.contains("cm-line"))break;s=o}let n=r.nodeType==1?r.getBoundingClientRect():mn(r,0,Math.max(r.nodeValue.length,1)).getBoundingClientRect();return t-n.left>5}function Rp(r,e){let t=r.lineBlockAt(e);if(Array.isArray(t.type)){for(let n of t.type)if(n.to>e||n.to==e&&(n.to==t.to||n.type==tt.Text))return n}return t}function Ap(r,e,t,n){let s=Rp(r,e.head),o=!n||s.type!=tt.Text||!(r.lineWrapping||s.widgetLineBreaks)?null:r.coordsAtPos(e.assoc<0&&e.head>s.from?e.head-1:e.head);if(o){let a=r.dom.getBoundingClientRect(),l=r.textDirectionAt(s.from),c=r.posAtCoords({x:t==(l==Se.LTR)?a.right-1:a.left+1,y:(o.top+o.bottom)/2});if(c!=null)return Q.cursor(c,t?-1:1)}return Q.cursor(t?s.to:s.from,t?-1:1)}function gl(r,e,t,n){let s=r.state.doc.lineAt(e.head),o=r.bidiSpans(s),a=r.textDirectionAt(s.from);for(let l=e,c=null;;){let u=mp(s,o,a,l,t),h=fh;if(!u){if(s.number==(t?r.state.doc.lines:1))return l;h=`
`,s=r.state.doc.line(s.number+(t?1:-1)),o=r.bidiSpans(s),u=r.visualLineSide(s,!t)}if(c){if(!c(h))return l}else{if(!n)return u;c=n(h)}l=u}}function Zp(r,e,t){let n=r.state.charCategorizer(e),s=n(t);return o=>{let a=n(o);return s==He.Space&&(s=a),s==a}}function jp(r,e,t,n){let s=e.head,o=t?1:-1;if(s==(t?r.state.doc.length:0))return Q.cursor(s,e.assoc);let a=e.goalColumn,l,c=r.contentDOM.getBoundingClientRect(),u=r.coordsAtPos(s,e.assoc||-1),h=r.documentTop;if(u)a==null&&(a=u.left-c.left),l=o<0?u.top:u.bottom;else{let p=r.viewState.lineBlockAt(s);a==null&&(a=Math.min(c.right-c.left,r.defaultCharacterWidth*(s-p.from))),l=(o<0?p.top:p.bottom)+h}let d=c.left+a,f=n??r.viewState.heightOracle.textHeight>>1;for(let p=0;;p+=10){let m=l+(f+p)*o,O=Th(r,{x:d,y:m},!1,o);if(m<c.top||m>c.bottom||(o<0?O<s:O>s)){let v=r.docView.coordsForChar(O),w=!v||m<v.top?-1:1;return Q.cursor(O,w,void 0,a)}}}function ui(r,e,t){for(;;){let n=0;for(let s of r)s.between(e-1,e+1,(o,a,l)=>{if(e>o&&e<a){let c=n||t||(e-o<a-e?-1:1);e=c<0?o:a,n=c}});if(!n)return e}}function vs(r,e,t){let n=ui(r.state.facet(oa).map(s=>s(r)),t.from,e.head>t.from?-1:1);return n==t.from?t:Q.cursor(n,n<t.from?1:-1)}class Ep{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,j.safari&&e.contentDOM.addEventListener("input",()=>null),j.gecko&&Jp(e.contentDOM.ownerDocument)}handleEvent(e){!Bp(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||this.runHandlers(e.type,e)}runHandlers(e,t){let n=this.handlers[e];if(n){for(let s of n.observers)s(this.view,t);for(let s of n.handlers){if(t.defaultPrevented)break;if(s(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=Ip(e),n=this.handlers,s=this.view.contentDOM;for(let o in t)if(o!="scroll"){let a=!t[o].handlers.length,l=n[o];l&&a!=!l.handlers.length&&(s.removeEventListener(o,this.handleEvent),l=null),l||s.addEventListener(o,this.handleEvent,{passive:a})}for(let o in n)o!="scroll"&&!t[o]&&s.removeEventListener(o,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Rh.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),j.android&&j.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let t;return j.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&((t=Mh.find(n=>n.keyCode==e.keyCode))&&!e.ctrlKey||Dp.indexOf(e.key)>-1&&e.ctrlKey&&!e.shiftKey)?(this.pendingIOSKey=t||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let t=this.pendingIOSKey;return!t||t.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,Mn(this.view.contentDOM,t.key,t.keyCode,t instanceof KeyboardEvent?t:void 0))}ignoreDuringComposition(e){return/^key/.test(e.type)?this.composing>0?!0:j.safari&&!j.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1:!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function vl(r,e){return(t,n)=>{try{return e.call(r,n,t)}catch(s){xt(t.state,s)}}}function Ip(r){let e=Object.create(null);function t(n){return e[n]||(e[n]={observers:[],handlers:[]})}for(let n of r){let s=n.spec;if(s&&s.domEventHandlers)for(let o in s.domEventHandlers){let a=s.domEventHandlers[o];a&&t(o).handlers.push(vl(n.value,a))}if(s&&s.domEventObservers)for(let o in s.domEventObservers){let a=s.domEventObservers[o];a&&t(o).observers.push(vl(n.value,a))}}for(let n in dt)t(n).handlers.push(dt[n]);for(let n in st)t(n).observers.push(st[n]);return e}const Mh=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],Dp="dthko",Rh=[16,17,18,20,91,92,224,225],_r=6;function Gr(r){return Math.max(0,r)*.7+8}function Xp(r,e){return Math.max(Math.abs(r.clientX-e.clientX),Math.abs(r.clientY-e.clientY))}class Yp{constructor(e,t,n,s){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=s,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParent=K0(e.contentDOM),this.atoms=e.state.facet(oa).map(a=>a(e));let o=e.contentDOM.ownerDocument;o.addEventListener("mousemove",this.move=this.move.bind(this)),o.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(H.allowMultipleSelections)&&zp(e,t),this.dragging=Lp(e,t)&&Eh(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){var t;if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&Xp(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let n=0,s=0,o=((t=this.scrollParent)===null||t===void 0?void 0:t.getBoundingClientRect())||{left:0,top:0,right:this.view.win.innerWidth,bottom:this.view.win.innerHeight},a=$h(this.view);e.clientX-a.left<=o.left+_r?n=-Gr(o.left-e.clientX):e.clientX+a.right>=o.right-_r&&(n=Gr(e.clientX-o.right)),e.clientY-a.top<=o.top+_r?s=-Gr(o.top-e.clientY):e.clientY+a.bottom>=o.bottom-_r&&(s=Gr(e.clientY-o.bottom)),this.setScrollSpeed(n,s)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){this.scrollParent?(this.scrollParent.scrollLeft+=this.scrollSpeed.x,this.scrollParent.scrollTop+=this.scrollSpeed.y):this.view.win.scrollBy(this.scrollSpeed.x,this.scrollSpeed.y),this.dragging===!1&&this.select(this.lastEvent)}skipAtoms(e){let t=null;for(let n=0;n<e.ranges.length;n++){let s=e.ranges[n],o=null;if(s.empty){let a=ui(this.atoms,s.from,0);a!=s.from&&(o=Q.cursor(a,-1))}else{let a=ui(this.atoms,s.from,-1),l=ui(this.atoms,s.to,1);(a!=s.from||l!=s.to)&&(o=Q.range(s.from==s.anchor?a:l,s.from==s.head?a:l))}o&&(t||(t=e.ranges.slice()),t[n]=o)}return t?Q.create(t,e.mainIndex):e}select(e){let{view:t}=this,n=this.skipAtoms(this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(t=>t.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function zp(r,e){let t=r.state.facet(ph);return t.length?t[0](e):j.mac?e.metaKey:e.ctrlKey}function Wp(r,e){let t=r.state.facet(mh);return t.length?t[0](e):j.mac?!e.altKey:!e.ctrlKey}function Lp(r,e){let{main:t}=r.state.selection;if(t.empty)return!1;let n=wr(r.root);if(!n||n.rangeCount==0)return!0;let s=n.getRangeAt(0).getClientRects();for(let o=0;o<s.length;o++){let a=s[o];if(a.left<=e.clientX&&a.right>=e.clientX&&a.top<=e.clientY&&a.bottom>=e.clientY)return!0}return!1}function Bp(r,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let t=e.target,n;t!=r.contentDOM;t=t.parentNode)if(!t||t.nodeType==11||(n=re.get(t))&&n.ignoreEvent(e))return!1;return!0}const dt=Object.create(null),st=Object.create(null),Ah=j.ie&&j.ie_version<15||j.ios&&j.webkit_version<604;function Vp(r){let e=r.dom.parentNode;if(!e)return;let t=e.appendChild(document.createElement("textarea"));t.style.cssText="position: fixed; left: -10000px; top: 10px",t.focus(),setTimeout(()=>{r.focus(),t.remove(),Zh(r,t.value)},50)}function Zh(r,e){let{state:t}=r,n,s=1,o=t.toText(e),a=o.lines==t.selection.ranges.length;if(wo!=null&&t.selection.ranges.every(c=>c.empty)&&wo==o.toString()){let c=-1;n=t.changeByRange(u=>{let h=t.doc.lineAt(u.from);if(h.from==c)return{range:u};c=h.from;let d=t.toText((a?o.line(s++).text:e)+t.lineBreak);return{changes:{from:h.from,insert:d},range:Q.cursor(u.from+d.length)}})}else a?n=t.changeByRange(c=>{let u=o.line(s++);return{changes:{from:c.from,to:c.to,insert:u.text},range:Q.cursor(c.from+u.length)}}):n=t.replaceSelection(o);r.dispatch(n,{userEvent:"input.paste",scrollIntoView:!0})}st.scroll=r=>{r.inputState.lastScrollTop=r.scrollDOM.scrollTop,r.inputState.lastScrollLeft=r.scrollDOM.scrollLeft};dt.keydown=(r,e)=>(r.inputState.setSelectionOrigin("select"),e.keyCode==27&&r.inputState.tabFocusMode!=0&&(r.inputState.tabFocusMode=Date.now()+2e3),!1);st.touchstart=(r,e)=>{r.inputState.lastTouchTime=Date.now(),r.inputState.setSelectionOrigin("select.pointer")};st.touchmove=r=>{r.inputState.setSelectionOrigin("select.pointer")};dt.mousedown=(r,e)=>{if(r.observer.flush(),r.inputState.lastTouchTime>Date.now()-2e3)return!1;let t=null;for(let n of r.state.facet(Oh))if(t=n(r,e),t)break;if(!t&&e.button==0&&(t=Up(r,e)),t){let n=!r.hasFocus;r.inputState.startMouseSelection(new Yp(r,e,t,n)),n&&r.observer.ignore(()=>{Gu(r.contentDOM);let o=r.root.activeElement;o&&!o.contains(r.contentDOM)&&o.blur()});let s=r.inputState.mouseSelection;if(s)return s.start(e),s.dragging===!1}return!1};function wl(r,e,t,n){if(n==1)return Q.cursor(e,t);if(n==2)return Pp(r.state,e,t);{let s=we.find(r.docView,e),o=r.state.doc.lineAt(s?s.posAtEnd:e),a=s?s.posAtStart:o.from,l=s?s.posAtEnd:o.to;return l<r.state.doc.length&&l==o.to&&l++,Q.range(a,l)}}let jh=(r,e)=>r>=e.top&&r<=e.bottom,yl=(r,e,t)=>jh(e,t)&&r>=t.left&&r<=t.right;function Np(r,e,t,n){let s=we.find(r.docView,e);if(!s)return 1;let o=e-s.posAtStart;if(o==0)return 1;if(o==s.length)return-1;let a=s.coordsAt(o,-1);if(a&&yl(t,n,a))return-1;let l=s.coordsAt(o,1);return l&&yl(t,n,l)?1:a&&jh(n,a)?-1:1}function bl(r,e){let t=r.posAtCoords({x:e.clientX,y:e.clientY},!1);return{pos:t,bias:Np(r,t,e.clientX,e.clientY)}}const qp=j.ie&&j.ie_version<=11;let Sl=null,Cl=0,xl=0;function Eh(r){if(!qp)return r.detail;let e=Sl,t=xl;return Sl=r,xl=Date.now(),Cl=!e||t>Date.now()-400&&Math.abs(e.clientX-r.clientX)<2&&Math.abs(e.clientY-r.clientY)<2?(Cl+1)%3:1}function Up(r,e){let t=bl(r,e),n=Eh(e),s=r.state.selection;return{update(o){o.docChanged&&(t.pos=o.changes.mapPos(t.pos),s=s.map(o.changes))},get(o,a,l){let c=bl(r,o),u,h=wl(r,c.pos,c.bias,n);if(t.pos!=c.pos&&!a){let d=wl(r,t.pos,t.bias,n),f=Math.min(d.from,h.from),p=Math.max(d.to,h.to);h=f<h.from?Q.range(f,p):Q.range(p,f)}return a?s.replaceRange(s.main.extend(h.from,h.to)):l&&n==1&&s.ranges.length>1&&(u=_p(s,c.pos))?u:l?s.addRange(h):Q.create([h])}}}function _p(r,e){for(let t=0;t<r.ranges.length;t++){let{from:n,to:s}=r.ranges[t];if(n<=e&&s>=e)return Q.create(r.ranges.slice(0,t).concat(r.ranges.slice(t+1)),r.mainIndex==t?0:r.mainIndex-(r.mainIndex>t?1:0))}return null}dt.dragstart=(r,e)=>{let{selection:{main:t}}=r.state;if(e.target.draggable){let s=r.docView.nearest(e.target);if(s&&s.isWidget){let o=s.posAtStart,a=o+s.length;(o>=t.to||a<=t.from)&&(t=Q.range(o,a))}}let{inputState:n}=r;return n.mouseSelection&&(n.mouseSelection.dragging=!0),n.draggedContent=t,e.dataTransfer&&(e.dataTransfer.setData("Text",r.state.sliceDoc(t.from,t.to)),e.dataTransfer.effectAllowed="copyMove"),!1};dt.dragend=r=>(r.inputState.draggedContent=null,!1);function kl(r,e,t,n){if(!t)return;let s=r.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:o}=r.inputState,a=n&&o&&Wp(r,e)?{from:o.from,to:o.to}:null,l={from:s,insert:t},c=r.state.changes(a?[a,l]:l);r.focus(),r.dispatch({changes:c,selection:{anchor:c.mapPos(s,-1),head:c.mapPos(s,1)},userEvent:a?"move.drop":"input.drop"}),r.inputState.draggedContent=null}dt.drop=(r,e)=>{if(!e.dataTransfer)return!1;if(r.state.readOnly)return!0;let t=e.dataTransfer.files;if(t&&t.length){let n=Array(t.length),s=0,o=()=>{++s==t.length&&kl(r,e,n.filter(a=>a!=null).join(r.state.lineBreak),!1)};for(let a=0;a<t.length;a++){let l=new FileReader;l.onerror=o,l.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(l.result)||(n[a]=l.result),o()},l.readAsText(t[a])}return!0}else{let n=e.dataTransfer.getData("Text");if(n)return kl(r,e,n,!0),!0}return!1};dt.paste=(r,e)=>{if(r.state.readOnly)return!0;r.observer.flush();let t=Ah?null:e.clipboardData;return t?(Zh(r,t.getData("text/plain")||t.getData("text/uri-list")),!0):(Vp(r),!1)};function Gp(r,e){let t=r.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement("textarea"));n.style.cssText="position: fixed; left: -10000px; top: 10px",n.value=e,n.focus(),n.selectionEnd=e.length,n.selectionStart=0,setTimeout(()=>{n.remove(),r.focus()},50)}function Fp(r){let e=[],t=[],n=!1;for(let s of r.selection.ranges)s.empty||(e.push(r.sliceDoc(s.from,s.to)),t.push(s));if(!e.length){let s=-1;for(let{from:o}of r.selection.ranges){let a=r.doc.lineAt(o);a.number>s&&(e.push(a.text),t.push({from:a.from,to:Math.min(r.doc.length,a.to+1)})),s=a.number}n=!0}return{text:e.join(r.lineBreak),ranges:t,linewise:n}}let wo=null;dt.copy=dt.cut=(r,e)=>{let{text:t,ranges:n,linewise:s}=Fp(r.state);if(!t&&!s)return!1;wo=s?t:null,e.type=="cut"&&!r.state.readOnly&&r.dispatch({changes:n,scrollIntoView:!0,userEvent:"delete.cut"});let o=Ah?null:e.clipboardData;return o?(o.clearData(),o.setData("text/plain",t),!0):(Gp(r,t),!1)};const Ih=ut.define();function Dh(r,e){let t=[];for(let n of r.facet(wh)){let s=n(r,e);s&&t.push(s)}return t?r.update({effects:t,annotations:Ih.of(!0)}):null}function Xh(r){setTimeout(()=>{let e=r.hasFocus;if(e!=r.inputState.notifiedFocused){let t=Dh(r.state,e);t?r.dispatch(t):r.update([])}},10)}st.focus=r=>{r.inputState.lastFocusTime=Date.now(),!r.scrollDOM.scrollTop&&(r.inputState.lastScrollTop||r.inputState.lastScrollLeft)&&(r.scrollDOM.scrollTop=r.inputState.lastScrollTop,r.scrollDOM.scrollLeft=r.inputState.lastScrollLeft),Xh(r)};st.blur=r=>{r.observer.clearSelectionRange(),Xh(r)};st.compositionstart=st.compositionupdate=r=>{r.observer.editContext||(r.inputState.compositionFirstChange==null&&(r.inputState.compositionFirstChange=!0),r.inputState.composing<0&&(r.inputState.composing=0))};st.compositionend=r=>{r.observer.editContext||(r.inputState.composing=-1,r.inputState.compositionEndedAt=Date.now(),r.inputState.compositionPendingKey=!0,r.inputState.compositionPendingChange=r.observer.pendingRecords().length>0,r.inputState.compositionFirstChange=null,j.chrome&&j.android?r.observer.flushSoon():r.inputState.compositionPendingChange?Promise.resolve().then(()=>r.observer.flush()):setTimeout(()=>{r.inputState.composing<0&&r.docView.hasComposition&&r.update([])},50))};st.contextmenu=r=>{r.inputState.lastContextMenu=Date.now()};dt.beforeinput=(r,e)=>{var t;let n;if(j.chrome&&j.android&&(n=Mh.find(s=>s.inputType==e.inputType))&&(r.observer.delayAndroidKey(n.key,n.keyCode),n.key=="Backspace"||n.key=="Delete")){let s=((t=window.visualViewport)===null||t===void 0?void 0:t.height)||0;setTimeout(()=>{var o;(((o=window.visualViewport)===null||o===void 0?void 0:o.height)||0)>s+10&&r.hasFocus&&(r.contentDOM.blur(),r.focus())},100)}return j.ios&&e.inputType=="deleteContentForward"&&r.observer.flushSoon(),j.safari&&e.inputType=="insertText"&&r.inputState.composing>=0&&setTimeout(()=>st.compositionend(r,e),20),!1};const Pl=new Set;function Jp(r){Pl.has(r)||(Pl.add(r),r.addEventListener("copy",()=>{}),r.addEventListener("cut",()=>{}))}const $l=["pre-wrap","normal","pre-line","break-spaces"];class Hp{constructor(e){this.lineWrapping=e,this.doc=G.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30,this.heightChanged=!1}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/(this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return $l.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let s=e[n];s<0?n++:this.heightSamples[Math.floor(s*10)]||(t=!0,this.heightSamples[Math.floor(s*10)]=!0)}return t}refresh(e,t,n,s,o,a){let l=$l.indexOf(e)>-1,c=Math.round(t)!=Math.round(this.lineHeight)||this.lineWrapping!=l;if(this.lineWrapping=l,this.lineHeight=t,this.charWidth=n,this.textHeight=s,this.lineLength=o,c){this.heightSamples={};for(let u=0;u<a.length;u++){let h=a[u];h<0?u++:this.heightSamples[Math.floor(h*10)]=!0}}return c}}class Kp{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}}class Ct{constructor(e,t,n,s,o){this.from=e,this.length=t,this.top=n,this.height=s,this._content=o}get type(){return typeof this._content=="number"?tt.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof en?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let t=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new Ct(this.from,this.length+e.length,this.top,this.height+e.height,t)}}var le=function(r){return r[r.ByPos=0]="ByPos",r[r.ByHeight=1]="ByHeight",r[r.ByPosNoHeight=2]="ByPosNoHeight",r}(le||(le={}));const hi=.001;class ze{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e,t){this.height!=t&&(Math.abs(this.height-t)>hi&&(e.heightChanged=!0),this.height=t)}replace(e,t,n){return ze.of(n)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,s){let o=this,a=n.doc;for(let l=s.length-1;l>=0;l--){let{fromA:c,toA:u,fromB:h,toB:d}=s[l],f=o.lineAt(c,le.ByPosNoHeight,n.setDoc(t),0,0),p=f.to>=u?f:o.lineAt(u,le.ByPosNoHeight,n,0,0);for(d+=p.to-u,u=p.to;l>0&&f.from<=s[l-1].toA;)c=s[l-1].fromA,h=s[l-1].fromB,l--,c<f.from&&(f=o.lineAt(c,le.ByPosNoHeight,n,0,0));h+=f.from-c,c=f.from;let m=aa.build(n.setDoc(a),e,h,d);o=o.replace(c,u,m)}return o.updateHeight(n,0)}static empty(){return new Ge(0,0)}static of(e){if(e.length==1)return e[0];let t=0,n=e.length,s=0,o=0;for(;;)if(t==n)if(s>o*2){let l=e[t-1];l.break?e.splice(--t,1,l.left,null,l.right):e.splice(--t,1,l.left,l.right),n+=1+l.break,s-=l.size}else if(o>s*2){let l=e[n];l.break?e.splice(n,1,l.left,null,l.right):e.splice(n,1,l.left,l.right),n+=2+l.break,o-=l.size}else break;else if(s<o){let l=e[t++];l&&(s+=l.size)}else{let l=e[--n];l&&(o+=l.size)}let a=0;return e[t-1]==null?(a=1,t--):e[t]==null&&(a=1,n++),new em(ze.of(e.slice(0,t)),a,ze.of(e.slice(n)))}}ze.prototype.size=1;class Yh extends ze{constructor(e,t,n){super(e,t),this.deco=n}blockAt(e,t,n,s){return new Ct(s,this.length,n,this.height,this.deco||0)}lineAt(e,t,n,s,o){return this.blockAt(0,n,s,o)}forEachLine(e,t,n,s,o,a){e<=o+this.length&&t>=o&&a(this.blockAt(0,n,s,o))}updateHeight(e,t=0,n=!1,s){return s&&s.from<=t&&s.more&&this.setHeight(e,s.heights[s.index++]),this.outdated=!1,this}toString(){return`block(${this.length})`}}class Ge extends Yh{constructor(e,t){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0}blockAt(e,t,n,s){return new Ct(s,this.length,n,this.height,this.breaks)}replace(e,t,n){let s=n[0];return n.length==1&&(s instanceof Ge||s instanceof ke&&s.flags&4)&&Math.abs(this.length-s.length)<10?(s instanceof ke?s=new Ge(s.length,this.height):s.height=this.height,this.outdated||(s.outdated=!1),s):ze.of(n)}updateHeight(e,t=0,n=!1,s){return s&&s.from<=t&&s.more?this.setHeight(e,s.heights[s.index++]):(n||this.outdated)&&this.setHeight(e,Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class ke extends ze{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,s=e.doc.lineAt(t+this.length).number,o=s-n+1,a,l=0;if(e.lineWrapping){let c=Math.min(this.height,e.lineHeight*o);a=c/o,this.length>o+1&&(l=(this.height-c)/(this.length-o-1))}else a=this.height/o;return{firstLine:n,lastLine:s,perLine:a,perChar:l}}blockAt(e,t,n,s){let{firstLine:o,lastLine:a,perLine:l,perChar:c}=this.heightMetrics(t,s);if(t.lineWrapping){let u=s+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),h=t.doc.lineAt(u),d=l+h.length*c,f=Math.max(n,e-d/2);return new Ct(h.from,h.length,f,d,0)}else{let u=Math.max(0,Math.min(a-o,Math.floor((e-n)/l))),{from:h,length:d}=t.doc.line(o+u);return new Ct(h,d,n+l*u,l,0)}}lineAt(e,t,n,s,o){if(t==le.ByHeight)return this.blockAt(e,n,s,o);if(t==le.ByPosNoHeight){let{from:p,to:m}=n.doc.lineAt(e);return new Ct(p,m-p,0,0,0)}let{firstLine:a,perLine:l,perChar:c}=this.heightMetrics(n,o),u=n.doc.lineAt(e),h=l+u.length*c,d=u.number-a,f=s+l*d+c*(u.from-o-d);return new Ct(u.from,u.length,Math.max(s,Math.min(f,s+this.height-h)),h,0)}forEachLine(e,t,n,s,o,a){e=Math.max(e,o),t=Math.min(t,o+this.length);let{firstLine:l,perLine:c,perChar:u}=this.heightMetrics(n,o);for(let h=e,d=s;h<=t;){let f=n.doc.lineAt(h);if(h==e){let m=f.number-l;d+=c*m+u*(e-o-m)}let p=c+u*f.length;a(new Ct(f.from,f.length,d,p,0)),d+=p,h=f.to+1}}replace(e,t,n){let s=this.length-t;if(s>0){let o=n[n.length-1];o instanceof ke?n[n.length-1]=new ke(o.length+s):n.push(null,new ke(s-1))}if(e>0){let o=n[0];o instanceof ke?n[0]=new ke(e+o.length):n.unshift(new ke(e-1),null)}return ze.of(n)}decomposeLeft(e,t){t.push(new ke(e-1),null)}decomposeRight(e,t){t.push(null,new ke(this.length-e-1))}updateHeight(e,t=0,n=!1,s){let o=t+this.length;if(s&&s.from<=t+this.length&&s.more){let a=[],l=Math.max(t,s.from),c=-1;for(s.from>t&&a.push(new ke(s.from-t-1).updateHeight(e,t));l<=o&&s.more;){let h=e.doc.lineAt(l).length;a.length&&a.push(null);let d=s.heights[s.index++];c==-1?c=d:Math.abs(d-c)>=hi&&(c=-2);let f=new Ge(h,d);f.outdated=!1,a.push(f),l+=h+1}l<=o&&a.push(null,new ke(o-l).updateHeight(e,l));let u=ze.of(a);return(c<0||Math.abs(u.height-this.height)>=hi||Math.abs(c-this.heightMetrics(e,t).perLine)>=hi)&&(e.heightChanged=!0),u}else(n||this.outdated)&&(this.setHeight(e,e.heightForGap(t,t+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class em extends ze{constructor(e,t,n){super(e.length+t+n.length,e.height+n.height,t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,s){let o=n+this.left.height;return e<o?this.left.blockAt(e,t,n,s):this.right.blockAt(e,t,o,s+this.left.length+this.break)}lineAt(e,t,n,s,o){let a=s+this.left.height,l=o+this.left.length+this.break,c=t==le.ByHeight?e<a:e<l,u=c?this.left.lineAt(e,t,n,s,o):this.right.lineAt(e,t,n,a,l);if(this.break||(c?u.to<l:u.from>l))return u;let h=t==le.ByPosNoHeight?le.ByPosNoHeight:le.ByPos;return c?u.join(this.right.lineAt(l,h,n,a,l)):this.left.lineAt(l,h,n,s,o).join(u)}forEachLine(e,t,n,s,o,a){let l=s+this.left.height,c=o+this.left.length+this.break;if(this.break)e<c&&this.left.forEachLine(e,t,n,s,o,a),t>=c&&this.right.forEachLine(e,t,n,l,c,a);else{let u=this.lineAt(c,le.ByPos,n,s,o);e<u.from&&this.left.forEachLine(e,u.from-1,n,s,o,a),u.to>=e&&u.from<=t&&a(u),t>u.to&&this.right.forEachLine(u.to+1,t,n,l,c,a)}}replace(e,t,n){let s=this.left.length+this.break;if(t<s)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-s,t-s,n));let o=[];e>0&&this.decomposeLeft(e,o);let a=o.length;for(let l of n)o.push(l);if(e>0&&Ql(o,a-1),t<this.length){let l=o.length;this.decomposeRight(t,o),Ql(o,l)}return ze.of(o)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,s=n+this.break;if(e>=s)return this.right.decomposeRight(e-s,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<s&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?ze.of(this.break?[e,null,t]:[e,t]):(this.left=e,this.right=t,this.height=e.height+t.height,this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,s){let{left:o,right:a}=this,l=t+o.length+this.break,c=null;return s&&s.from<=t+o.length&&s.more?c=o=o.updateHeight(e,t,n,s):o.updateHeight(e,t,n),s&&s.from<=l+a.length&&s.more?c=a=a.updateHeight(e,l,n,s):a.updateHeight(e,l,n),c?this.balanced(o,a):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function Ql(r,e){let t,n;r[e]==null&&(t=r[e-1])instanceof ke&&(n=r[e+1])instanceof ke&&r.splice(e-1,3,new ke(t.length+1+n.length))}const tm=5;class aa{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let n=Math.min(t,this.lineEnd),s=this.nodes[this.nodes.length-1];s instanceof Ge?s.length+=n-this.pos:(n>this.pos||!this.isCovered)&&this.nodes.push(new Ge(n-this.pos,-1)),this.writtenTo=n,t>n&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let s=n.widget?n.widget.estimatedHeight:0,o=n.widget?n.widget.lineBreaks:0;s<0&&(s=this.oracle.lineHeight);let a=t-e;n.block?this.addBlock(new Yh(a,s,n)):(a||o||s>=tm)&&this.addLineDeco(s,o,a)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new Ge(this.pos-e,-1)),this.writtenTo=this.pos}blankContent(e,t){let n=new ke(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof Ge)return e;let t=new Ge(0,-1);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let s=this.ensureLine();s.length+=n,s.collapsed+=n,s.widgetHeight=Math.max(s.widgetHeight,e),s.breaks+=t,this.writtenTo=this.pos=this.pos+n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof Ge)&&!this.isCovered?this.nodes.push(new Ge(0,-1)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let s of this.nodes)s instanceof Ge&&s.updateHeight(this.oracle,n),n+=s?s.length:1;return this.nodes}static build(e,t,n,s){let o=new aa(n,e);return K.spans(t,n,s,o,0),o.finish(n)}}function nm(r,e,t){let n=new rm;return K.compare(r,e,t,n,0),n.changes}class rm{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,s){(e<t||n&&n.heightRelevant||s&&s.heightRelevant)&&fo(e,t,this.changes,5)}}function im(r,e){let t=r.getBoundingClientRect(),n=r.ownerDocument,s=n.defaultView||window,o=Math.max(0,t.left),a=Math.min(s.innerWidth,t.right),l=Math.max(0,t.top),c=Math.min(s.innerHeight,t.bottom);for(let u=r.parentNode;u&&u!=n.body;)if(u.nodeType==1){let h=u,d=window.getComputedStyle(h);if((h.scrollHeight>h.clientHeight||h.scrollWidth>h.clientWidth)&&d.overflow!="visible"){let f=h.getBoundingClientRect();o=Math.max(o,f.left),a=Math.min(a,f.right),l=Math.max(l,f.top),c=u==r.parentNode?f.bottom:Math.min(c,f.bottom)}u=d.position=="absolute"||d.position=="fixed"?h.offsetParent:h.parentNode}else if(u.nodeType==11)u=u.host;else break;return{left:o-t.left,right:Math.max(o,a)-t.left,top:l-(t.top+e),bottom:Math.max(l,c)-(t.top+e)}}function sm(r,e){let t=r.getBoundingClientRect();return{left:0,right:t.right-t.left,top:e,bottom:t.bottom-(t.top+e)}}class ws{constructor(e,t,n){this.from=e,this.to=t,this.size=n}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let s=e[n],o=t[n];if(s.from!=o.from||s.to!=o.to||s.size!=o.size)return!1}return!0}draw(e,t){return q.replace({widget:new om(this.size*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}}class om extends Nn{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class Tl{constructor(e){this.state=e,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scrollTop=0,this.scrolledToBottom=!1,this.scaleX=1,this.scaleY=1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Ml,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=Se.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let t=e.facet(sa).some(n=>typeof n!="function"&&n.class=="cm-lineWrapping");this.heightOracle=new Hp(t),this.stateDeco=e.facet(br).filter(n=>typeof n!="function"),this.heightMap=ze.empty().applyChanges(this.stateDeco,G.empty,this.heightOracle.setDoc(e.doc),[new nt(0,0,0,e.doc.length)]);for(let n=0;n<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());n++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=q.set(this.lineGaps.map(n=>n.draw(this,!1))),this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let s=n?t.head:t.anchor;if(!e.some(({from:o,to:a})=>s>=o&&s<=a)){let{from:o,to:a}=this.lineBlockAt(s);e.push(new Fr(o,a))}}return this.viewports=e.sort((n,s)=>n.from-s.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?Ml:new la(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(sr(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=this.state.facet(br).filter(h=>typeof h!="function");let s=e.changedRanges,o=nt.extendWithRanges(s,nm(n,this.stateDeco,e?e.changes:be.empty(this.state.doc.length))),a=this.heightMap.height,l=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollTop);this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),o),this.heightMap.height!=a&&(e.flags|=2),l?(this.scrollAnchorPos=e.changes.mapPos(l.from,-1),this.scrollAnchorHeight=l.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=this.heightMap.height);let c=o.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<c.from||t.range.head>c.to)||!this.viewportIsAppropriate(c))&&(c=this.getViewport(0,t));let u=c.from!=this.viewport.from||c.to!=this.viewport.to;this.viewport=c,e.flags|=this.updateForViewport(),(u||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&e.selectionSet&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(gp)&&(this.mustEnforceCursorAssoc=!0)}measure(e){let t=e.contentDOM,n=window.getComputedStyle(t),s=this.heightOracle,o=n.whiteSpace;this.defaultTextDirection=n.direction=="rtl"?Se.RTL:Se.LTR;let a=this.heightOracle.mustRefreshForWrapping(o),l=t.getBoundingClientRect(),c=a||this.mustMeasureContent||this.contentDOMHeight!=l.height;this.contentDOMHeight=l.height,this.mustMeasureContent=!1;let u=0,h=0;if(l.width&&l.height){let{scaleX:b,scaleY:g}=_u(t,l);(b>.005&&Math.abs(this.scaleX-b)>.005||g>.005&&Math.abs(this.scaleY-g)>.005)&&(this.scaleX=b,this.scaleY=g,u|=8,a=c=!0)}let d=(parseInt(n.paddingTop)||0)*this.scaleY,f=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=d||this.paddingBottom!=f)&&(this.paddingTop=d,this.paddingBottom=f,u|=10),this.editorWidth!=e.scrollDOM.clientWidth&&(s.lineWrapping&&(c=!0),this.editorWidth=e.scrollDOM.clientWidth,u|=8);let p=e.scrollDOM.scrollTop*this.scaleY;this.scrollTop!=p&&(this.scrollAnchorHeight=-1,this.scrollTop=p),this.scrolledToBottom=Ju(e.scrollDOM);let m=(this.printing?sm:im)(t,this.paddingTop),O=m.top-this.pixelViewport.top,v=m.bottom-this.pixelViewport.bottom;this.pixelViewport=m;let w=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(w!=this.inView&&(this.inView=w,w&&(c=!0)),!this.inView&&!this.scrollTarget)return 0;let x=l.width;if((this.contentDOMWidth!=x||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=l.width,this.editorHeight=e.scrollDOM.clientHeight,u|=8),c){let b=e.docView.measureVisibleLineHeights(this.viewport);if(s.mustRefreshForHeights(b)&&(a=!0),a||s.lineWrapping&&Math.abs(x-this.contentDOMWidth)>s.charWidth){let{lineHeight:g,charWidth:C,textHeight:P}=e.docView.measureTextSize();a=g>0&&s.refresh(o,g,C,P,x/C,b),a&&(e.docView.minWidth=0,u|=8)}O>0&&v>0?h=Math.max(O,v):O<0&&v<0&&(h=Math.min(O,v)),s.heightChanged=!1;for(let g of this.viewports){let C=g.from==this.viewport.from?b:e.docView.measureVisibleLineHeights(g);this.heightMap=(a?ze.empty().applyChanges(this.stateDeco,G.empty,this.heightOracle,[new nt(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(s,0,a,new Kp(g.from,C))}s.heightChanged&&(u|=2)}let k=!this.viewportIsAppropriate(this.viewport,h)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return k&&(u&2&&(u|=this.updateScaler()),this.viewport=this.getViewport(h,this.scrollTarget),u|=this.updateForViewport()),(u&2||k)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(a?[]:this.lineGaps,e)),u|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),u}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),s=this.heightMap,o=this.heightOracle,{visibleTop:a,visibleBottom:l}=this,c=new Fr(s.lineAt(a-n*1e3,le.ByHeight,o,0,0).from,s.lineAt(l+(1-n)*1e3,le.ByHeight,o,0,0).to);if(t){let{head:u}=t.range;if(u<c.from||u>c.to){let h=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),d=s.lineAt(u,le.ByPos,o,0,0),f;t.y=="center"?f=(d.top+d.bottom)/2-h/2:t.y=="start"||t.y=="nearest"&&u<c.from?f=d.top:f=d.bottom-h,c=new Fr(s.lineAt(f-1e3/2,le.ByHeight,o,0,0).from,s.lineAt(f+h+1e3/2,le.ByHeight,o,0,0).to)}}return c}mapViewport(e,t){let n=t.mapPos(e.from,-1),s=t.mapPos(e.to,1);return new Fr(this.heightMap.lineAt(n,le.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(s,le.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:s}=this.heightMap.lineAt(e,le.ByPos,this.heightOracle,0,0),{bottom:o}=this.heightMap.lineAt(t,le.ByPos,this.heightOracle,0,0),{visibleTop:a,visibleBottom:l}=this;return(e==0||s<=a-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||o>=l+Math.max(10,Math.min(n,250)))&&s>a-2*1e3&&o<l+2*1e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let s of e)t.touchesRange(s.from,s.to)||n.push(new ws(t.mapPos(s.from),t.mapPos(s.to),s.size));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,s=n?1e4:2e3,o=s>>1,a=s<<1;if(this.defaultTextDirection!=Se.LTR&&!n)return[];let l=[],c=(h,d,f,p)=>{if(d-h<o)return;let m=this.state.selection.main,O=[m.from];m.empty||O.push(m.to);for(let w of O)if(w>h&&w<d){c(h,w-10,f,p),c(w+10,d,f,p);return}let v=lm(e,w=>w.from>=f.from&&w.to<=f.to&&Math.abs(w.from-h)<o&&Math.abs(w.to-d)<o&&!O.some(x=>w.from<x&&w.to>x));if(!v){if(d<f.to&&t&&n&&t.visibleRanges.some(w=>w.from<=d&&w.to>=d)){let w=t.moveToLineBoundary(Q.cursor(d),!1,!0).head;w>h&&(d=w)}v=new ws(h,d,this.gapSize(f,h,d,p))}l.push(v)},u=h=>{if(h.length<a||h.type!=tt.Text)return;let d=am(h.from,h.to,this.stateDeco);if(d.total<a)return;let f=this.scrollTarget?this.scrollTarget.range.head:null,p,m;if(n){let O=s/this.heightOracle.lineLength*this.heightOracle.lineHeight,v,w;if(f!=null){let x=Hr(d,f),k=((this.visibleBottom-this.visibleTop)/2+O)/h.height;v=x-k,w=x+k}else v=(this.visibleTop-h.top-O)/h.height,w=(this.visibleBottom-h.top+O)/h.height;p=Jr(d,v),m=Jr(d,w)}else{let O=d.total*this.heightOracle.charWidth,v=s*this.heightOracle.charWidth,w,x;if(f!=null){let k=Hr(d,f),b=((this.pixelViewport.right-this.pixelViewport.left)/2+v)/O;w=k-b,x=k+b}else w=(this.pixelViewport.left-v)/O,x=(this.pixelViewport.right+v)/O;p=Jr(d,w),m=Jr(d,x)}p>h.from&&c(h.from,p,h,d),m<h.to&&c(m,h.to,h,d)};for(let h of this.viewportLines)Array.isArray(h.type)?h.type.forEach(u):u(h);return l}gapSize(e,t,n,s){let o=Hr(s,n)-Hr(s,t);return this.heightOracle.lineWrapping?e.height*o:s.total*this.heightOracle.charWidth*o}updateLineGaps(e){ws.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=q.set(e.map(t=>t.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(){let e=this.stateDeco;this.lineGaps.length&&(e=e.concat(this.lineGapDeco));let t=[];K.spans(e,this.viewport.from,this.viewport.to,{span(s,o){t.push({from:s,to:o})},point(){}},20);let n=t.length!=this.visibleRanges.length||this.visibleRanges.some((s,o)=>s.from!=t[o].from||s.to!=t[o].to);return this.visibleRanges=t,n?4:0}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||sr(this.heightMap.lineAt(e,le.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||sr(this.heightMap.lineAt(this.scaler.fromDOM(e),le.ByHeight,this.heightOracle,0,0),this.scaler)}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return sr(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class Fr{constructor(e,t){this.from=e,this.to=t}}function am(r,e,t){let n=[],s=r,o=0;return K.spans(t,r,e,{span(){},point(a,l){a>s&&(n.push({from:s,to:a}),o+=a-s),s=l}},20),s<e&&(n.push({from:s,to:e}),o+=e-s),{total:o,ranges:n}}function Jr({total:r,ranges:e},t){if(t<=0)return e[0].from;if(t>=1)return e[e.length-1].to;let n=Math.floor(r*t);for(let s=0;;s++){let{from:o,to:a}=e[s],l=a-o;if(n<=l)return o+n;n-=l}}function Hr(r,e){let t=0;for(let{from:n,to:s}of r.ranges){if(e<=s){t+=e-n;break}t+=s-n}return t/r.total}function lm(r,e){for(let t of r)if(e(t))return t}const Ml={toDOM(r){return r},fromDOM(r){return r},scale:1,eq(r){return r==this}};class la{constructor(e,t,n){let s=0,o=0,a=0;this.viewports=n.map(({from:l,to:c})=>{let u=t.lineAt(l,le.ByPos,e,0,0).top,h=t.lineAt(c,le.ByPos,e,0,0).bottom;return s+=h-u,{from:l,to:c,top:u,bottom:h,domTop:0,domBottom:0}}),this.scale=(7e6-s)/(t.height-s);for(let l of this.viewports)l.domTop=a+(l.top-o)*this.scale,a=l.domBottom=l.domTop+(l.bottom-l.top),o=l.bottom}toDOM(e){for(let t=0,n=0,s=0;;t++){let o=t<this.viewports.length?this.viewports[t]:null;if(!o||e<o.top)return s+(e-n)*this.scale;if(e<=o.bottom)return o.domTop+(e-o.top);n=o.bottom,s=o.domBottom}}fromDOM(e){for(let t=0,n=0,s=0;;t++){let o=t<this.viewports.length?this.viewports[t]:null;if(!o||e<o.domTop)return n+(e-s)/this.scale;if(e<=o.domBottom)return o.top+(e-o.domTop);n=o.bottom,s=o.domBottom}}eq(e){return e instanceof la?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((t,n)=>t.from==e.viewports[n].from&&t.to==e.viewports[n].to):!1}}function sr(r,e){if(e.scale==1)return r;let t=e.toDOM(r.top),n=e.toDOM(r.bottom);return new Ct(r.from,r.length,t,n-t,Array.isArray(r._content)?r._content.map(s=>sr(s,e)):r._content)}const Kr=Y.define({combine:r=>r.join(" ")}),yo=Y.define({combine:r=>r.indexOf(!0)>-1}),bo=Ht.newName(),zh=Ht.newName(),Wh=Ht.newName(),Lh={"&light":"."+zh,"&dark":"."+Wh};function So(r,e,t){return new Ht(e,{finish(n){return/&/.test(n)?n.replace(/&\w*/,s=>{if(s=="&")return r;if(!t||!t[s])throw new RangeError(`Unsupported selector: ${s}`);return t[s]}):r+" "+n}})}const cm=So("."+bo,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#444"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",insetInlineStart:0,zIndex:200},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",borderRight:"1px solid #ddd"},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top"},".cm-highlightSpace:before":{content:"attr(data-display)",position:"absolute",pointerEvents:"none",color:"#888"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Lh),or="￿";class um{constructor(e,t){this.points=e,this.text="",this.lineSeparator=t.facet(H.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=or}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let s=e;;){this.findPointBefore(n,s);let o=this.text.length;this.readNode(s);let a=s.nextSibling;if(a==t)break;let l=re.get(s),c=re.get(a);(l&&c?l.breakAfter:(l?l.breakAfter:ki(s))||ki(a)&&(s.nodeName!="BR"||s.cmIgnore)&&this.text.length>o)&&this.lineBreak(),s=a}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,s=this.lineSeparator?null:/\r\n?|\n/g;;){let o=-1,a=1,l;if(this.lineSeparator?(o=t.indexOf(this.lineSeparator,n),a=this.lineSeparator.length):(l=s.exec(t))&&(o=l.index,a=l[0].length),this.append(t.slice(n,o<0?t.length:o)),o<0)break;if(this.lineBreak(),a>1)for(let c of this.points)c.node==e&&c.pos>this.text.length&&(c.pos-=a-1);n=o+a}}readNode(e){if(e.cmIgnore)return;let t=re.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let s=n.iter();!s.next().done;)s.lineBreak?this.lineBreak():this.append(s.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(e.nodeType==3?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(hm(e,n.node,n.offset)?t:0))}}function hm(r,e,t){for(;;){if(!e||t<Dt(e))return!1;if(e==r)return!0;t=pn(e)+1,e=e.parentNode}}class Rl{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}}class dm{constructor(e,t,n,s){this.typeOver=s,this.bounds=null,this.text="",this.domChanged=t>-1;let{impreciseHead:o,impreciseAnchor:a}=e.docView;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=e.docView.domBoundsAround(t,n,0))){let l=o||a?[]:mm(e),c=new um(l,e.state);c.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=c.text,this.newSel=Om(l,this.bounds.from)}else{let l=e.observer.selectionRange,c=o&&o.node==l.focusNode&&o.offset==l.focusOffset||!oo(e.contentDOM,l.focusNode)?e.state.selection.main.head:e.docView.posFromDOM(l.focusNode,l.focusOffset),u=a&&a.node==l.anchorNode&&a.offset==l.anchorOffset||!oo(e.contentDOM,l.anchorNode)?e.state.selection.main.anchor:e.docView.posFromDOM(l.anchorNode,l.anchorOffset),h=e.viewport;if((j.ios||j.chrome)&&e.state.selection.main.empty&&c!=u&&(h.from>0||h.to<e.state.doc.length)){let d=Math.min(c,u),f=Math.max(c,u),p=h.from-d,m=h.to-f;(p==0||p==1||d==0)&&(m==0||m==-1||f==e.state.doc.length)&&(c=0,u=e.state.doc.length)}this.newSel=Q.single(u,c)}}}function Bh(r,e){let t,{newSel:n}=e,s=r.state.selection.main,o=r.inputState.lastKeyTime>Date.now()-100?r.inputState.lastKeyCode:-1;if(e.bounds){let{from:a,to:l}=e.bounds,c=s.from,u=null;(o===8||j.android&&e.text.length<l-a)&&(c=s.to,u="end");let h=pm(r.state.doc.sliceString(a,l,or),e.text,c-a,u);h&&(j.chrome&&o==13&&h.toB==h.from+2&&e.text.slice(h.from,h.toB)==or+or&&h.toB--,t={from:a+h.from,to:a+h.toA,insert:G.of(e.text.slice(h.from,h.toB).split(or))})}else n&&(!r.hasFocus&&r.state.facet(Ut)||n.main.eq(s))&&(n=null);if(!t&&!n)return!1;if(!t&&e.typeOver&&!s.empty&&n&&n.main.empty?t={from:s.from,to:s.to,insert:r.state.doc.slice(s.from,s.to)}:t&&t.from>=s.from&&t.to<=s.to&&(t.from!=s.from||t.to!=s.to)&&s.to-s.from-(t.to-t.from)<=4?t={from:s.from,to:s.to,insert:r.state.doc.slice(s.from,t.from).append(t.insert).append(r.state.doc.slice(t.to,s.to))}:(j.mac||j.android)&&t&&t.from==t.to&&t.from==s.head-1&&/^\. ?$/.test(t.insert.toString())&&r.contentDOM.getAttribute("autocorrect")=="off"?(n&&t.insert.length==2&&(n=Q.single(n.main.anchor-1,n.main.head-1)),t={from:s.from,to:s.to,insert:G.of([" "])}):j.chrome&&t&&t.from==t.to&&t.from==s.head&&t.insert.toString()==`
 `&&r.lineWrapping&&(n&&(n=Q.single(n.main.anchor-1,n.main.head-1)),t={from:s.from,to:s.to,insert:G.of([" "])}),t)return Vh(r,t,n,o);if(n&&!n.main.eq(s)){let a=!1,l="select";return r.inputState.lastSelectionTime>Date.now()-50&&(r.inputState.lastSelectionOrigin=="select"&&(a=!0),l=r.inputState.lastSelectionOrigin),r.dispatch({selection:n,scrollIntoView:a,userEvent:l}),!0}else return!1}function Vh(r,e,t,n=-1){if(j.ios&&r.inputState.flushIOSKey(e))return!0;let s=r.state.selection.main;if(j.android&&(e.to==s.to&&(e.from==s.from||e.from==s.from-1&&r.state.sliceDoc(e.from,s.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&Mn(r.contentDOM,"Enter",13)||(e.from==s.from-1&&e.to==s.to&&e.insert.length==0||n==8&&e.insert.length<e.to-e.from&&e.to>s.head)&&Mn(r.contentDOM,"Backspace",8)||e.from==s.from&&e.to==s.to+1&&e.insert.length==0&&Mn(r.contentDOM,"Delete",46)))return!0;let o=e.insert.toString();r.inputState.composing>=0&&r.inputState.composing++;let a,l=()=>a||(a=fm(r,e,t));return r.state.facet(vh).some(c=>c(r,e.from,e.to,o,l))||r.dispatch(l()),!0}function fm(r,e,t){let n,s=r.state,o=s.selection.main;if(e.from>=o.from&&e.to<=o.to&&e.to-e.from>=(o.to-o.from)/3&&(!t||t.main.empty&&t.main.from==e.from+e.insert.length)&&r.inputState.composing<0){let l=o.from<e.from?s.sliceDoc(o.from,e.from):"",c=o.to>e.to?s.sliceDoc(e.to,o.to):"";n=s.replaceSelection(r.state.toText(l+e.insert.sliceString(0,void 0,r.state.lineBreak)+c))}else{let l=s.changes(e),c=t&&t.main.to<=l.newLength?t.main:void 0;if(s.selection.ranges.length>1&&r.inputState.composing>=0&&e.to<=o.to&&e.to>=o.to-10){let u=r.state.sliceDoc(e.from,e.to),h,d=t&&Qh(r,t.main.head);if(d){let m=e.insert.length-(e.to-e.from);h={from:d.from,to:d.to-m}}else h=r.state.doc.lineAt(o.head);let f=o.to-e.to,p=o.to-o.from;n=s.changeByRange(m=>{if(m.from==o.from&&m.to==o.to)return{changes:l,range:c||m.map(l)};let O=m.to-f,v=O-u.length;if(m.to-m.from!=p||r.state.sliceDoc(v,O)!=u||m.to>=h.from&&m.from<=h.to)return{range:m};let w=s.changes({from:v,to:O,insert:e.insert}),x=m.to-o.to;return{changes:w,range:c?Q.range(Math.max(0,c.anchor+x),Math.max(0,c.head+x)):m.map(w)}})}else n={changes:l,selection:c&&s.selection.replaceRange(c)}}let a="input.type";return(r.composing||r.inputState.compositionPendingChange&&r.inputState.compositionEndedAt>Date.now()-50)&&(r.inputState.compositionPendingChange=!1,a+=".compose",r.inputState.compositionFirstChange&&(a+=".start",r.inputState.compositionFirstChange=!1)),s.update(n,{userEvent:a,scrollIntoView:!0})}function pm(r,e,t,n){let s=Math.min(r.length,e.length),o=0;for(;o<s&&r.charCodeAt(o)==e.charCodeAt(o);)o++;if(o==s&&r.length==e.length)return null;let a=r.length,l=e.length;for(;a>0&&l>0&&r.charCodeAt(a-1)==e.charCodeAt(l-1);)a--,l--;if(n=="end"){let c=Math.max(0,o-Math.min(a,l));t-=a+c-o}if(a<o&&r.length<e.length){let c=t<=o&&t>=a?o-t:0;o-=c,l=o+(l-a),a=o}else if(l<o){let c=t<=o&&t>=l?o-t:0;o-=c,a=o+(a-l),l=o}return{from:o,toA:a,toB:l}}function mm(r){let e=[];if(r.root.activeElement!=r.contentDOM)return e;let{anchorNode:t,anchorOffset:n,focusNode:s,focusOffset:o}=r.observer.selectionRange;return t&&(e.push(new Rl(t,n)),(s!=t||o!=n)&&e.push(new Rl(s,o))),e}function Om(r,e){if(r.length==0)return null;let t=r[0].pos,n=r.length==2?r[1].pos:t;return t>-1&&n>-1?Q.single(t+e,n+e):null}const gm={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},ys=j.ie&&j.ie_version<=11;class vm{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new ep,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let n of t)this.queue.push(n);(j.ie&&j.ie_version<=11||j.ios&&e.composing)&&t.some(n=>n.type=="childList"&&n.removedNodes.length||n.type=="characterData"&&n.oldValue.length>n.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&e.constructor.EDIT_CONTEXT!==!1&&!(j.chrome&&j.chrome_version<126)&&(this.editContext=new ym(e),e.state.facet(Ut)&&(e.contentDOM.editContext=this.editContext.editContext)),ys&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var t;((t=this.view.docView)===null||t===void 0?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){e.type=="change"&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,s=this.selectionRange;if(n.state.facet(Ut)?n.root.activeElement!=this.dom:!ci(n.dom,s))return;let o=s.anchorNode&&n.docView.nearest(s.anchorNode);if(o&&o.ignoreEvent(e)){t||(this.selectionChanged=!1);return}(j.ie&&j.ie_version<=11||j.android&&j.chrome)&&!n.state.selection.main.empty&&s.focusNode&&dr(s.focusNode,s.focusOffset,s.anchorNode,s.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=wr(e.root);if(!t)return!1;let n=j.safari&&e.root.nodeType==11&&F0(this.dom.ownerDocument)==this.dom&&wm(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let s=ci(this.dom,n);return s&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&np(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),s&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(n.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let n of this.scrollTargets)n.removeEventListener("scroll",this.onScroll);for(let n of this.scrollTargets=t)n.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,gm),ys&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),ys&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){var n;if(!this.delayedAndroidKey){let s=()=>{let o=this.delayedAndroidKey;o&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=o.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&o.force&&Mn(this.dom,o.key,o.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(s)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!(!((n=this.delayedAndroidKey)===null||n===void 0)&&n.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,s=!1;for(let o of e){let a=this.readMutation(o);a&&(a.typeOver&&(s=!0),t==-1?{from:t,to:n}=a:(t=Math.min(a.from,t),n=Math.max(a.to,n)))}return{from:t,to:n,typeOver:s}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),s=this.selectionChanged&&ci(this.dom,this.selectionRange);if(e<0&&!s)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let o=new dm(this.view,e,t,n);return this.view.docView.domChanged={newSel:o.newSel?o.newSel.main:null},o}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let n=this.view.state,s=Bh(this.view,t);return this.view.state==n&&(t.domChanged||t.newSel&&!t.newSel.main.eq(this.view.state.selection.main))&&this.view.update([]),s}readMutation(e){let t=this.view.docView.nearest(e.target);if(!t||t.ignoreMutation(e))return null;if(t.markDirty(e.type=="attributes"),e.type=="attributes"&&(t.flags|=4),e.type=="childList"){let n=Al(t,e.previousSibling||e.target.previousSibling,-1),s=Al(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:s?t.posBefore(s):t.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener("change",this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener("change",this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Ut)!=e.state.facet(Ut)&&(e.view.contentDOM.editContext=e.state.facet(Ut)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(t=this.gapIntersection)===null||t===void 0||t.disconnect(),(n=this.resizeScroll)===null||n===void 0||n.disconnect();for(let s of this.scrollTargets)s.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey)}}function Al(r,e,t){for(;e;){let n=re.get(e);if(n&&n.parent==r)return n;let s=e.parentNode;e=s!=r.dom?s:t>0?e.nextSibling:e.previousSibling}return null}function Zl(r,e){let t=e.startContainer,n=e.startOffset,s=e.endContainer,o=e.endOffset,a=r.docView.domAtPos(r.state.selection.main.anchor);return dr(a.node,a.offset,s,o)&&([t,n,s,o]=[s,o,t,n]),{anchorNode:t,anchorOffset:n,focusNode:s,focusOffset:o}}function wm(r,e){if(e.getComposedRanges){let s=e.getComposedRanges(r.root)[0];if(s)return Zl(r,s)}let t=null;function n(s){s.preventDefault(),s.stopImmediatePropagation(),t=s.getTargetRanges()[0]}return r.contentDOM.addEventListener("beforeinput",n,!0),r.dom.ownerDocument.execCommand("indent"),r.contentDOM.removeEventListener("beforeinput",n,!0),t?Zl(r,t):null}class ym{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});t.addEventListener("textupdate",n=>{let{anchor:s}=e.state.selection.main,o={from:this.toEditorPos(n.updateRangeStart),to:this.toEditorPos(n.updateRangeEnd),insert:G.of(n.text.split(`
`))};o.from==this.from&&s<this.from?o.from=s:o.to==this.to&&s>this.to&&(o.to=s),!(o.from==o.to&&!o.insert.length)&&(this.pendingContextChange=o,Vh(e,o,Q.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd))),this.pendingContextChange&&this.revertPending(e.state))}),t.addEventListener("characterboundsupdate",n=>{let s=[],o=null;for(let a=this.toEditorPos(n.rangeStart),l=this.toEditorPos(n.rangeEnd);a<l;a++){let c=e.coordsForChar(a);o=c&&new DOMRect(c.left,c.top,c.right-c.left,c.bottom-c.top)||o||new DOMRect,s.push(o)}t.updateCharacterBounds(n.rangeStart,s)}),t.addEventListener("textformatupdate",n=>{let s=[];for(let o of n.getTextFormats()){let a=o.underlineStyle,l=o.underlineThickness;if(a!="None"&&l!="None"){let c=`text-decoration: underline ${a=="Dashed"?"dashed ":a=="Squiggle"?"wavy ":""}${l=="Thin"?1:2}px`;s.push(q.mark({attributes:{style:c}}).range(this.toEditorPos(o.rangeStart),this.toEditorPos(o.rangeEnd)))}}e.dispatch({effects:Sh.of(q.set(s))})}),t.addEventListener("compositionstart",()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)}),t.addEventListener("compositionend",()=>{e.inputState.composing=-1,e.inputState.compositionFirstChange=null}),this.measureReq={read:n=>{this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());let s=wr(n.root);s&&s.rangeCount&&this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,s=this.pendingContextChange;return e.changes.iterChanges((o,a,l,c,u)=>{if(n)return;let h=u.length-(a-o);if(s&&a>=s.to)if(s.from==o&&s.to==a&&s.insert.eq(u)){s=this.pendingContextChange=null,t+=h,this.to+=h;return}else s=null,this.revertPending(e.state);if(o+=t,a+=t,a<=this.from)this.from+=h,this.to+=h;else if(o<this.to){if(o<this.from||a>this.to||this.to-this.from+u.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(o),this.toContextPos(a),u.toString()),this.to+=h}t+=h}),s&&!n&&this.revertPending(e.state),!n}update(e){!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.resetRange(e.state),this.editContext.updateText(0,this.editContext.text.length,e.state.doc.sliceString(this.from,this.to)),this.setSelection(e.state)):(e.docChanged||e.selectionSet)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.to+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),s=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=s)&&this.editContext.updateSelection(n,s)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>1e4*3)}toEditorPos(e){return e+this.from}toContextPos(e){return e-this.from}}class z{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return this.inputState.composing>0}get compositionStarted(){return this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:t}=e;this.dispatchTransactions=e.dispatchTransactions||t&&(n=>n.forEach(s=>t(s,this)))||(n=>this.update(n)),this.dispatch=this.dispatch.bind(this),this._root=e.root||tp(e.parent)||document,this.viewState=new Tl(e.state||H.create(e)),e.scrollTo&&e.scrollTo.is(Ur)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(rr).map(n=>new Os(n));for(let n of this.plugins)n.update(this);this.observer=new vm(this),this.inputState=new Ep(this),this.inputState.ensureHandlers(this.plugins),this.docView=new hl(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure()}dispatch(...e){let t=e.length==1&&e[0]instanceof ye?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let t=!1,n=!1,s,o=this.state;for(let f of e){if(f.startState!=o)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");o=f.state}if(this.destroyed){this.viewState.state=o;return}let a=this.hasFocus,l=0,c=null;e.some(f=>f.annotation(Ih))?(this.inputState.notifiedFocused=a,l=1):a!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=a,c=Dh(o,a),c||(l=1));let u=this.observer.delayedAndroidKey,h=null;if(u?(this.observer.clearDelayedAndroidKey(),h=this.observer.readChange(),(h&&!this.state.doc.eq(o.doc)||!this.state.selection.eq(o.selection))&&(h=null)):this.observer.clear(),o.facet(H.phrases)!=this.state.facet(H.phrases))return this.setState(o);s=$i.create(this,o,e),s.flags|=l;let d=this.viewState.scrollTarget;try{this.updateState=2;for(let f of e){if(d&&(d=d.map(f.changes)),f.scrollIntoView){let{main:p}=f.state.selection;d=new Rn(p.empty?p:Q.cursor(p.head,p.head>p.anchor?-1:1))}for(let p of f.effects)p.is(Ur)&&(d=p.value.clip(this.state))}this.viewState.update(s,d),this.bidiCache=Qi.update(this.bidiCache,s.changes),s.empty||(this.updatePlugins(s),this.inputState.update(s)),t=this.docView.update(s),this.state.facet(ir)!=this.styleModules&&this.mountStyles(),n=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(t,e.some(f=>f.isUserEvent("select.pointer")))}finally{this.updateState=0}if(s.startState.facet(Kr)!=s.state.facet(Kr)&&(this.viewState.mustMeasureContent=!0),(t||n||d||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),t&&this.docViewUpdate(),!s.empty)for(let f of this.state.facet(go))try{f(s)}catch(p){xt(this.state,p,"update listener")}(c||h)&&Promise.resolve().then(()=>{c&&this.state==c.startState&&this.dispatch(c),h&&!Bh(this,h)&&u.force&&Mn(this.contentDOM,u.key,u.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let n of this.plugins)n.destroy(this);this.viewState=new Tl(e),this.plugins=e.facet(rr).map(n=>new Os(n)),this.pluginMap.clear();for(let n of this.plugins)n.update(this);this.docView.destroy(),this.docView=new hl(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(rr),n=e.state.facet(rr);if(t!=n){let s=[];for(let o of n){let a=t.indexOf(o);if(a<0)s.push(new Os(o));else{let l=this.plugins[a];l.mustUpdate=e,s.push(l)}}for(let o of this.plugins)o.mustUpdate!=e&&o.destroy(this);this.plugins=s,this.pluginMap.clear()}else for(let s of this.plugins)s.mustUpdate=e;for(let s=0;s<this.plugins.length;s++)this.plugins[s].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(n){xt(this.state,n,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.scrollDOM,s=n.scrollTop*this.scaleY,{scrollAnchorPos:o,scrollAnchorHeight:a}=this.viewState;Math.abs(s-this.viewState.scrollTop)>1&&(a=-1),this.viewState.scrollAnchorHeight=-1;try{for(let l=0;;l++){if(a<0)if(Ju(n))o=-1,a=this.viewState.heightMap.height;else{let p=this.viewState.scrollAnchorAt(s);o=p.from,a=p.top}this.updateState=1;let c=this.viewState.measure(this);if(!c&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(l>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let u=[];c&4||([this.measureRequests,u]=[u,this.measureRequests]);let h=u.map(p=>{try{return p.read(this)}catch(m){return xt(this.state,m),jl}}),d=$i.create(this,this.state,[]),f=!1;d.flags|=c,t?t.flags|=c:t=d,this.updateState=2,d.empty||(this.updatePlugins(d),this.inputState.update(d),this.updateAttrs(),f=this.docView.update(d),f&&this.docViewUpdate());for(let p=0;p<u.length;p++)if(h[p]!=jl)try{let m=u[p];m.write&&m.write(h[p],this)}catch(m){xt(this.state,m)}if(f&&this.docView.updateSelection(!0),!d.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,a=-1;continue}else{let m=(o<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(o).top)-a;if(m>1||m<-1){s=s+m,n.scrollTop=s/this.scaleY,a=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let l of this.state.facet(go))l(t)}get themeClasses(){return bo+" "+(this.state.facet(yo)?Wh:zh)+" "+this.state.facet(Kr)}updateAttrs(){let e=El(this,Ch,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),t={spellcheck:"false",autocorrect:"off",autocapitalize:"off",translate:"no",contenteditable:this.state.facet(Ut)?"true":"false",class:"cm-content",style:`${j.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(t["aria-readonly"]="true"),El(this,sa,t);let n=this.observer.ignore(()=>{let s=ho(this.contentDOM,this.contentAttrs,t),o=ho(this.dom,this.editorAttrs,e);return s||o});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(e){let t=!0;for(let n of e)for(let s of n.effects)if(s.is(z.announce)){t&&(this.announceDOM.textContent=""),t=!1;let o=this.announceDOM.appendChild(document.createElement("div"));o.textContent=s.value}}mountStyles(){this.styleModules=this.state.facet(ir);let e=this.state.facet(z.cspNonce);Ht.mount(this.root,this.styleModules.concat(cm).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.spec!=e)&&this.pluginMap.set(e,t=this.plugins.find(n=>n.spec==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return vs(this,e,gl(this,e,t,n))}moveByGroup(e,t){return vs(this,e,gl(this,e,t,n=>Zp(this,e.head,n)))}visualLineSide(e,t){let n=this.bidiSpans(e),s=this.textDirectionAt(e.from),o=n[t?n.length-1:0];return Q.cursor(o.side(t,s)+e.from,o.forward(!t,s)?1:-1)}moveToLineBoundary(e,t,n=!0){return Ap(this,e,t,n)}moveVertically(e,t,n){return vs(this,e,jp(this,e,t,n))}domAtPos(e){return this.docView.domAtPos(e)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){return this.readMeasured(),Th(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.docView.coordsAt(e,t);if(!n||n.left==n.right)return n;let s=this.state.doc.lineAt(e),o=this.bidiSpans(s),a=o[Jt.find(o,e-s.from,-1,t)];return na(n,a.dir==Se.LTR==t>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(yh)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>bm)return dh(e.length);let t=this.textDirectionAt(e.from),n;for(let o of this.bidiCache)if(o.from==e.from&&o.dir==t&&(o.fresh||hh(o.isolates,n=ul(this,e))))return o.order;n||(n=ul(this,e));let s=pp(e.text,t,n);return this.bidiCache.push(new Qi(e.from,e.to,t,n,!0,s)),s}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||j.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Gu(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return Ur.of(new Rn(typeof e=="number"?Q.cursor(e):e,t.y,t.x,t.yMargin,t.xMargin))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return Ur.of(new Rn(Q.cursor(n.from),"start","start",n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return it.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return it.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=Ht.newName(),s=[Kr.of(n),ir.of(So(`.${n}`,e))];return t&&t.dark&&s.push(yo.of(!0)),s}static baseTheme(e){return qi.lowest(ir.of(So("."+bo,e,Lh)))}static findFromDOM(e){var t;let n=e.querySelector(".cm-content"),s=n&&re.get(n)||re.get(e);return((t=s==null?void 0:s.rootView)===null||t===void 0?void 0:t.view)||null}}z.styleModule=ir;z.inputHandler=vh;z.scrollHandler=bh;z.focusChangeEffect=wh;z.perLineTextDirection=yh;z.exceptionSink=gh;z.updateListener=go;z.editable=Ut;z.mouseSelectionStyle=Oh;z.dragMovesSelection=mh;z.clickAddsSelectionRange=ph;z.decorations=br;z.outerDecorations=xh;z.atomicRanges=oa;z.bidiIsolatedRanges=kh;z.scrollMargins=Ph;z.darkTheme=yo;z.cspNonce=Y.define({combine:r=>r.length?r[0]:""});z.contentAttributes=sa;z.editorAttributes=Ch;z.lineWrapping=z.contentAttributes.of({class:"cm-lineWrapping"});z.announce=se.define();const bm=4096,jl={};class Qi{constructor(e,t,n,s,o,a){this.from=e,this.to=t,this.dir=n,this.isolates=s,this.fresh=o,this.order=a}static update(e,t){if(t.empty&&!e.some(o=>o.fresh))return e;let n=[],s=e.length?e[e.length-1].dir:Se.LTR;for(let o=Math.max(0,e.length-10);o<e.length;o++){let a=e[o];a.dir==s&&!t.touchesRange(a.from,a.to)&&n.push(new Qi(t.mapPos(a.from,1),t.mapPos(a.to,-1),a.dir,a.isolates,!1,a.order))}return n}}function El(r,e,t){for(let n=r.state.facet(e),s=n.length-1;s>=0;s--){let o=n[s],a=typeof o=="function"?o(r):o;a&&uo(a,t)}return t}const Sm=j.mac?"mac":j.windows?"win":j.linux?"linux":"key";function Cm(r,e){const t=r.split(/-(?!$)/);let n=t[t.length-1];n=="Space"&&(n=" ");let s,o,a,l;for(let c=0;c<t.length-1;++c){const u=t[c];if(/^(cmd|meta|m)$/i.test(u))l=!0;else if(/^a(lt)?$/i.test(u))s=!0;else if(/^(c|ctrl|control)$/i.test(u))o=!0;else if(/^s(hift)?$/i.test(u))a=!0;else if(/^mod$/i.test(u))e=="mac"?l=!0:o=!0;else throw new Error("Unrecognized modifier name: "+u)}return s&&(n="Alt-"+n),o&&(n="Ctrl-"+n),l&&(n="Meta-"+n),a&&(n="Shift-"+n),n}function ei(r,e,t){return e.altKey&&(r="Alt-"+r),e.ctrlKey&&(r="Ctrl-"+r),e.metaKey&&(r="Meta-"+r),t!==!1&&e.shiftKey&&(r="Shift-"+r),r}const xm=qi.default(z.domEventHandlers({keydown(r,e){return Qm(km(e.state),r,e,"editor")}})),Ti=Y.define({enables:xm}),Il=new WeakMap;function km(r){let e=r.facet(Ti),t=Il.get(e);return t||Il.set(e,t=$m(e.reduce((n,s)=>n.concat(s),[]))),t}let _t=null;const Pm=4e3;function $m(r,e=Sm){let t=Object.create(null),n=Object.create(null),s=(a,l)=>{let c=n[a];if(c==null)n[a]=l;else if(c!=l)throw new Error("Key binding "+a+" is used both as a regular binding and as a multi-stroke prefix")},o=(a,l,c,u,h)=>{var d,f;let p=t[a]||(t[a]=Object.create(null)),m=l.split(/ (?!$)/).map(w=>Cm(w,e));for(let w=1;w<m.length;w++){let x=m.slice(0,w).join(" ");s(x,!0),p[x]||(p[x]={preventDefault:!0,stopPropagation:!1,run:[k=>{let b=_t={view:k,prefix:x,scope:a};return setTimeout(()=>{_t==b&&(_t=null)},Pm),!0}]})}let O=m.join(" ");s(O,!1);let v=p[O]||(p[O]={preventDefault:!1,stopPropagation:!1,run:((f=(d=p._any)===null||d===void 0?void 0:d.run)===null||f===void 0?void 0:f.slice())||[]});c&&v.run.push(c),u&&(v.preventDefault=!0),h&&(v.stopPropagation=!0)};for(let a of r){let l=a.scope?a.scope.split(" "):["editor"];if(a.any)for(let u of l){let h=t[u]||(t[u]=Object.create(null));h._any||(h._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:d}=a;for(let f in h)h[f].run.push(p=>d(p,Co))}let c=a[e]||a.key;if(c)for(let u of l)o(u,c,a.run,a.preventDefault,a.stopPropagation),a.shift&&o(u,"Shift-"+c,a.shift,a.preventDefault,a.stopPropagation)}return t}let Co=null;function Qm(r,e,t,n){Co=e;let s=G0(e),o=Qt(s,0),a=jn(o)==s.length&&s!=" ",l="",c=!1,u=!1,h=!1;_t&&_t.view==t&&_t.scope==n&&(l=_t.prefix+" ",Rh.indexOf(e.keyCode)<0&&(u=!0,_t=null));let d=new Set,f=v=>{if(v){for(let w of v.run)if(!d.has(w)&&(d.add(w),w(t)))return v.stopPropagation&&(h=!0),!0;v.preventDefault&&(v.stopPropagation&&(h=!0),u=!0)}return!1},p=r[n],m,O;return p&&(f(p[l+ei(s,e,!a)])?c=!0:a&&(e.altKey||e.metaKey||e.ctrlKey)&&!(j.windows&&e.ctrlKey&&e.altKey)&&(m=Kt[e.keyCode])&&m!=s?(f(p[l+ei(m,e,!0)])||e.shiftKey&&(O=vr[e.keyCode])!=s&&O!=m&&f(p[l+ei(O,e,!1)]))&&(c=!0):a&&e.shiftKey&&f(p[l+ei(s,e,!0)])&&(c=!0),!c&&f(p._any)&&(c=!0)),u&&(c=!0),c&&h&&e.stopPropagation(),Co=null,c}const Tm=!j.ios,Dl={".cm-line":{"& ::selection, &::selection":{backgroundColor:"transparent !important"}},".cm-content":{"& :focus":{caretColor:"initial !important","&::selection, & ::selection":{backgroundColor:"Highlight !important"}}}};Tm&&(Dl[".cm-line"].caretColor=Dl[".cm-content"].caretColor="transparent !important");function Xl(r,e,t,n,s){e.lastIndex=0;for(let o=r.iterRange(t,n),a=t,l;!o.next().done;a+=o.value.length)if(!o.lineBreak)for(;l=e.exec(o.value);)s(a+l.index,l)}function Mm(r,e){let t=r.visibleRanges;if(t.length==1&&t[0].from==r.viewport.from&&t[0].to==r.viewport.to)return t;let n=[];for(let{from:s,to:o}of t)s=Math.max(r.state.doc.lineAt(s).from,s-e),o=Math.min(r.state.doc.lineAt(o).to,o+e),n.length&&n[n.length-1].to>=s?n[n.length-1].to=o:n.push({from:s,to:o});return n}class Rm{constructor(e){const{regexp:t,decoration:n,decorate:s,boundary:o,maxLength:a=1e3}=e;if(!t.global)throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");if(this.regexp=t,s)this.addMatch=(l,c,u,h)=>s(h,u,u+l[0].length,l,c);else if(typeof n=="function")this.addMatch=(l,c,u,h)=>{let d=n(l,c,u);d&&h(u,u+l[0].length,d)};else if(n)this.addMatch=(l,c,u,h)=>h(u,u+l[0].length,n);else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");this.boundary=o,this.maxLength=a}createDeco(e){let t=new En,n=t.add.bind(t);for(let{from:s,to:o}of Mm(e,this.maxLength))Xl(e.state.doc,this.regexp,s,o,(a,l)=>this.addMatch(l,e,a,n));return t.finish()}updateDeco(e,t){let n=1e9,s=-1;return e.docChanged&&e.changes.iterChanges((o,a,l,c)=>{c>e.view.viewport.from&&l<e.view.viewport.to&&(n=Math.min(l,n),s=Math.max(c,s))}),e.viewportChanged||s-n>1e3?this.createDeco(e.view):s>-1?this.updateRange(e.view,t.map(e.changes),n,s):t}updateRange(e,t,n,s){for(let o of e.visibleRanges){let a=Math.max(o.from,n),l=Math.min(o.to,s);if(l>a){let c=e.state.doc.lineAt(a),u=c.to<l?e.state.doc.lineAt(l):c,h=Math.max(o.from,c.from),d=Math.min(o.to,u.to);if(this.boundary){for(;a>c.from;a--)if(this.boundary.test(c.text[a-1-c.from])){h=a;break}for(;l<u.to;l++)if(this.boundary.test(u.text[l-u.from])){d=l;break}}let f=[],p,m=(O,v,w)=>f.push(w.range(O,v));if(c==u)for(this.regexp.lastIndex=h-c.from;(p=this.regexp.exec(c.text))&&p.index<d-c.from;)this.addMatch(p,e,p.index+c.from,m);else Xl(e.state.doc,this.regexp,h,d,(O,v)=>this.addMatch(v,e,O,m));t=t.update({filterFrom:h,filterTo:d,filter:(O,v)=>O<h||v>d,add:f})}}return t}}const xo=/x/.unicode!=null?"gu":"g",Am=new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`,xo),Zm={0:"null",7:"bell",8:"backspace",10:"newline",11:"vertical tab",13:"carriage return",27:"escape",8203:"zero width space",8204:"zero width non-joiner",8205:"zero width joiner",8206:"left-to-right mark",8207:"right-to-left mark",8232:"line separator",8237:"left-to-right override",8238:"right-to-left override",8294:"left-to-right isolate",8295:"right-to-left isolate",8297:"pop directional isolate",8233:"paragraph separator",65279:"zero width no-break space",65532:"object replacement"};let bs=null;function jm(){var r;if(bs==null&&typeof document<"u"&&document.body){let e=document.body.style;bs=((r=e.tabSize)!==null&&r!==void 0?r:e.MozTabSize)!=null}return bs||!1}const di=Y.define({combine(r){let e=_i(r,{render:null,specialChars:Am,addSpecialChars:null});return(e.replaceTabs=!jm())&&(e.specialChars=new RegExp("	|"+e.specialChars.source,xo)),e.addSpecialChars&&(e.specialChars=new RegExp(e.specialChars.source+"|"+e.addSpecialChars.source,xo)),e}});function Em(r={}){return[di.of(r),Im()]}let Yl=null;function Im(){return Yl||(Yl=it.fromClass(class{constructor(r){this.view=r,this.decorations=q.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(r.state.facet(di)),this.decorations=this.decorator.createDeco(r)}makeDecorator(r){return new Rm({regexp:r.specialChars,decoration:(e,t,n)=>{let{doc:s}=t.state,o=Qt(e[0],0);if(o==9){let a=s.lineAt(n),l=t.state.tabSize,c=Ar(a.text,l,n-a.from);return q.replace({widget:new zm((l-c%l)*this.view.defaultCharacterWidth/this.view.scaleX)})}return this.decorationCache[o]||(this.decorationCache[o]=q.replace({widget:new Ym(r,o)}))},boundary:r.replaceTabs?void 0:/[^]/})}update(r){let e=r.state.facet(di);r.startState.facet(di)!=e?(this.decorator=this.makeDecorator(e),this.decorations=this.decorator.createDeco(r.view)):this.decorations=this.decorator.updateDeco(r,this.decorations)}},{decorations:r=>r.decorations}))}const Dm="•";function Xm(r){return r>=32?Dm:r==10?"␤":String.fromCharCode(9216+r)}class Ym extends Nn{constructor(e,t){super(),this.options=e,this.code=t}eq(e){return e.code==this.code}toDOM(e){let t=Xm(this.code),n=e.state.phrase("Control character")+" "+(Zm[this.code]||"0x"+this.code.toString(16)),s=this.options.render&&this.options.render(this.code,n,t);if(s)return s;let o=document.createElement("span");return o.textContent=t,o.title=n,o.setAttribute("aria-label",n),o.className="cm-specialChar",o}ignoreEvent(){return!1}}class zm extends Nn{constructor(e){super(),this.width=e}eq(e){return e.width==this.width}toDOM(){let e=document.createElement("span");return e.textContent="	",e.className="cm-tab",e.style.width=this.width+"px",e}ignoreEvent(){return!1}}function Wm(){return Bm}const Lm=q.line({class:"cm-activeLine"}),Bm=it.fromClass(class{constructor(r){this.decorations=this.getDeco(r)}update(r){(r.docChanged||r.selectionSet)&&(this.decorations=this.getDeco(r.view))}getDeco(r){let e=-1,t=[];for(let n of r.state.selection.ranges){let s=r.lineBlockAt(n.head);s.from>e&&(t.push(Lm.range(s.from)),e=s.from)}return q.set(t)}},{decorations:r=>r.decorations});class gn extends fn{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}gn.prototype.elementClass="";gn.prototype.toDOM=void 0;gn.prototype.mapMode=Me.TrackBefore;gn.prototype.startSide=gn.prototype.endSide=-1;gn.prototype.point=!0;const Ss=Y.define(),fi=Y.define(),zl=Y.define({combine:r=>r.some(e=>e)});function Vm(r){return[Nm]}const Nm=it.fromClass(class{constructor(r){this.view=r,this.prevViewport=r.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=r.state.facet(fi).map(e=>new Ll(r,e));for(let e of this.gutters)this.dom.appendChild(e.dom);this.fixed=!r.state.facet(zl),this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),r.scrollDOM.insertBefore(this.dom,r.contentDOM)}update(r){if(this.updateGutters(r)){let e=this.prevViewport,t=r.view.viewport,n=Math.min(e.to,t.to)-Math.max(e.from,t.from);this.syncGutters(n<(t.to-t.from)*.8)}r.geometryChanged&&(this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px"),this.view.state.facet(zl)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":""),this.prevViewport=r.view.viewport}syncGutters(r){let e=this.dom.nextSibling;r&&this.dom.remove();let t=K.iter(this.view.state.facet(Ss),this.view.viewport.from),n=[],s=this.gutters.map(o=>new qm(o,this.view.viewport,-this.view.documentPadding.top));for(let o of this.view.viewportLineBlocks)if(n.length&&(n=[]),Array.isArray(o.type)){let a=!0;for(let l of o.type)if(l.type==tt.Text&&a){ko(t,n,l.from);for(let c of s)c.line(this.view,l,n);a=!1}else if(l.widget)for(let c of s)c.widget(this.view,l)}else if(o.type==tt.Text){ko(t,n,o.from);for(let a of s)a.line(this.view,o,n)}else if(o.widget)for(let a of s)a.widget(this.view,o);for(let o of s)o.finish();r&&this.view.scrollDOM.insertBefore(this.dom,e)}updateGutters(r){let e=r.startState.facet(fi),t=r.state.facet(fi),n=r.docChanged||r.heightChanged||r.viewportChanged||!K.eq(r.startState.facet(Ss),r.state.facet(Ss),r.view.viewport.from,r.view.viewport.to);if(e==t)for(let s of this.gutters)s.update(r)&&(n=!0);else{n=!0;let s=[];for(let o of t){let a=e.indexOf(o);a<0?s.push(new Ll(this.view,o)):(this.gutters[a].update(r),s.push(this.gutters[a]))}for(let o of this.gutters)o.dom.remove(),s.indexOf(o)<0&&o.destroy();for(let o of s)this.dom.appendChild(o.dom);this.gutters=s}return n}destroy(){for(let r of this.gutters)r.destroy();this.dom.remove()}},{provide:r=>z.scrollMargins.of(e=>{let t=e.plugin(r);return!t||t.gutters.length==0||!t.fixed?null:e.textDirection==Se.LTR?{left:t.dom.offsetWidth*e.scaleX}:{right:t.dom.offsetWidth*e.scaleX}})});function Wl(r){return Array.isArray(r)?r:[r]}function ko(r,e,t){for(;r.value&&r.from<=t;)r.from==t&&e.push(r.value),r.next()}class qm{constructor(e,t,n){this.gutter=e,this.height=n,this.i=0,this.cursor=K.iter(e.markers,t.from)}addElement(e,t,n){let{gutter:s}=this,o=(t.top-this.height)/e.scaleY,a=t.height/e.scaleY;if(this.i==s.elements.length){let l=new Nh(e,a,o,n);s.elements.push(l),s.dom.appendChild(l.dom)}else s.elements[this.i].update(e,a,o,n);this.height=t.bottom,this.i++}line(e,t,n){let s=[];ko(this.cursor,s,t.from),n.length&&(s=s.concat(n));let o=this.gutter.config.lineMarker(e,t,s);o&&s.unshift(o);let a=this.gutter;s.length==0&&!a.config.renderEmptyElements||this.addElement(e,t,s)}widget(e,t){let n=this.gutter.config.widgetMarker(e,t.widget,t);n&&this.addElement(e,t,[n])}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let t=e.elements.pop();e.dom.removeChild(t.dom),t.destroy()}}}class Ll{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let n in t.domEventHandlers)this.dom.addEventListener(n,s=>{let o=s.target,a;if(o!=this.dom&&this.dom.contains(o)){for(;o.parentNode!=this.dom;)o=o.parentNode;let c=o.getBoundingClientRect();a=(c.top+c.bottom)/2}else a=s.clientY;let l=e.lineBlockAtHeight(a-e.documentTop);t.domEventHandlers[n](e,l,s)&&s.preventDefault()});this.markers=Wl(t.markers(e)),t.initialSpacer&&(this.spacer=new Nh(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(e){let t=this.markers;if(this.markers=Wl(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let s=this.config.updateSpacer(this.spacer.markers[0],e);s!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[s])}let n=e.view.viewport;return!K.eq(this.markers,t,n.from,n.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}}class Nh{constructor(e,t,n,s){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(e,t,n,s)}update(e,t,n,s){this.height!=t&&(this.height=t,this.dom.style.height=t+"px"),this.above!=n&&(this.dom.style.marginTop=(this.above=n)?n+"px":""),Um(this.markers,s)||this.setMarkers(e,s)}setMarkers(e,t){let n="cm-gutterElement",s=this.dom.firstChild;for(let o=0,a=0;;){let l=a,c=o<t.length?t[o++]:null,u=!1;if(c){let h=c.elementClass;h&&(n+=" "+h);for(let d=a;d<this.markers.length;d++)if(this.markers[d].compare(c)){l=d,u=!0;break}}else l=this.markers.length;for(;a<l;){let h=this.markers[a++];if(h.toDOM){h.destroy(s);let d=s.nextSibling;s.remove(),s=d}}if(!c)break;c.toDOM&&(u?s=s.nextSibling:this.dom.insertBefore(c.toDOM(e),s)),u&&a++}this.dom.className=n,this.markers=t}destroy(){this.setMarkers(null,[])}}function Um(r,e){if(r.length!=e.length)return!1;for(let t=0;t<r.length;t++)if(!r[t].compare(e[t]))return!1;return!0}const _m=Y.define(),xn=Y.define({combine(r){return _i(r,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let n=Object.assign({},e);for(let s in t){let o=n[s],a=t[s];n[s]=o?(l,c,u)=>o(l,c,u)||a(l,c,u):a}return n}})}});class Cs extends gn{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}}function xs(r,e){return r.state.facet(xn).formatNumber(e,r.state)}const Gm=fi.compute([xn],r=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers(e){return e.state.facet(_m)},lineMarker(e,t,n){return n.some(s=>s.toDOM)?null:new Cs(xs(e,e.state.doc.lineAt(t.from).number))},widgetMarker:()=>null,lineMarkerChange:e=>e.startState.facet(xn)!=e.state.facet(xn),initialSpacer(e){return new Cs(xs(e,Bl(e.state.doc.lines)))},updateSpacer(e,t){let n=xs(t.view,Bl(t.view.state.doc.lines));return n==e.number?e:new Cs(n)},domEventHandlers:r.facet(xn).domEventHandlers}));function Fm(r={}){return[xn.of(r),Vm(),Gm]}function Bl(r){let e=9;for(;e<r;)e=e*10+9;return e}const qh=1024;let Jm=0;class Ke{constructor(e,t){this.from=e,this.to=t}}class N{constructor(e={}){this.id=Jm++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof e!="function"&&(e=Le.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}}N.closedBy=new N({deserialize:r=>r.split(" ")});N.openedBy=new N({deserialize:r=>r.split(" ")});N.group=new N({deserialize:r=>r.split(" ")});N.isolate=new N({deserialize:r=>{if(r&&r!="rtl"&&r!="ltr"&&r!="auto")throw new RangeError("Invalid value for isolate: "+r);return r||"auto"}});N.contextHash=new N({perNode:!0});N.lookAhead=new N({perNode:!0});N.mounted=new N({perNode:!0});class Sr{constructor(e,t,n){this.tree=e,this.overlay=t,this.parser=n}static get(e){return e&&e.props&&e.props[N.mounted.id]}}const Hm=Object.create(null);class Le{constructor(e,t,n,s=0){this.name=e,this.props=t,this.id=n,this.flags=s}static define(e){let t=e.props&&e.props.length?Object.create(null):Hm,n=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0),s=new Le(e.name||"",t,e.id,n);if(e.props){for(let o of e.props)if(Array.isArray(o)||(o=o(s)),o){if(o[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[o[0].id]=o[1]}}return s}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return!0;let t=this.prop(N.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let s of n.split(" "))t[s]=e[n];return n=>{for(let s=n.prop(N.group),o=-1;o<(s?s.length:0);o++){let a=t[o<0?n.name:s[o]];if(a)return a}}}}Le.none=new Le("",Object.create(null),0,8);class ca{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...e){let t=[];for(let n of this.types){let s=null;for(let o of e){let a=o(n);a&&(s||(s=Object.assign({},n.props)),s[a[0].id]=a[1])}t.push(s?new Le(n.name,s,n.id,n.flags):n)}return new ca(t)}}const ti=new WeakMap,Vl=new WeakMap;var ie;(function(r){r[r.ExcludeBuffers=1]="ExcludeBuffers",r[r.IncludeAnonymous=2]="IncludeAnonymous",r[r.IgnoreMounts=4]="IgnoreMounts",r[r.IgnoreOverlays=8]="IgnoreOverlays"})(ie||(ie={}));class de{constructor(e,t,n,s,o){if(this.type=e,this.children=t,this.positions=n,this.length=s,this.props=null,o&&o.length){this.props=Object.create(null);for(let[a,l]of o)this.props[typeof a=="number"?a:a.id]=l}}toString(){let e=Sr.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let n of this.children){let s=n.toString();s&&(t&&(t+=","),t+=s)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new Mi(this.topNode,e)}cursorAt(e,t=0,n=0){let s=ti.get(this)||this.topNode,o=new Mi(s);return o.moveTo(e,t),ti.set(this,o._tree),o}get topNode(){return new Ae(this,0,0,null)}resolve(e,t=0){let n=Cr(ti.get(this)||this.topNode,e,t,!1);return ti.set(this,n),n}resolveInner(e,t=0){let n=Cr(Vl.get(this)||this.topNode,e,t,!0);return Vl.set(this,n),n}resolveStack(e,t=0){return tO(this,e,t)}iterate(e){let{enter:t,leave:n,from:s=0,to:o=this.length}=e,a=e.mode||0,l=(a&ie.IncludeAnonymous)>0;for(let c=this.cursor(a|ie.IncludeAnonymous);;){let u=!1;if(c.from<=o&&c.to>=s&&(!l&&c.type.isAnonymous||t(c)!==!1)){if(c.firstChild())continue;u=!0}for(;u&&n&&(l||!c.type.isAnonymous)&&n(c),!c.nextSibling();){if(!c.parent())return;u=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:da(Le.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,s)=>new de(this.type,t,n,s,this.propValues),e.makeTree||((t,n,s)=>new de(Le.none,t,n,s)))}static build(e){return nO(e)}}de.empty=new de(Le.none,[],[],0);class ua{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new ua(this.buffer,this.index)}}class tn{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return Le.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],n=this.buffer[e+3],s=this.set.types[t],o=s.name;if(/\W/.test(o)&&!s.isError&&(o=JSON.stringify(o)),e+=4,n==e)return o;let a=[];for(;e<n;)a.push(this.childString(e)),e=this.buffer[e+3];return o+"("+a.join(",")+")"}findChild(e,t,n,s,o){let{buffer:a}=this,l=-1;for(let c=e;c!=t&&!(Uh(o,s,a[c+1],a[c+2])&&(l=c,n>0));c=a[c+3]);return l}slice(e,t,n){let s=this.buffer,o=new Uint16Array(t-e),a=0;for(let l=e,c=0;l<t;){o[c++]=s[l++],o[c++]=s[l++]-n;let u=o[c++]=s[l++]-n;o[c++]=s[l++]-e,a=Math.max(a,u)}return new tn(o,a,this.set)}}function Uh(r,e,t,n){switch(r){case-2:return t<e;case-1:return n>=e&&t<e;case 0:return t<e&&n>e;case 1:return t<=e&&n>e;case 2:return n>e;case 4:return!0}}function Cr(r,e,t,n){for(var s;r.from==r.to||(t<1?r.from>=e:r.from>e)||(t>-1?r.to<=e:r.to<e);){let a=!n&&r instanceof Ae&&r.index<0?null:r.parent;if(!a)return r;r=a}let o=n?0:ie.IgnoreOverlays;if(n)for(let a=r,l=a.parent;l;a=l,l=a.parent)a instanceof Ae&&a.index<0&&((s=l.enter(e,t,o))===null||s===void 0?void 0:s.from)!=a.from&&(r=l);for(;;){let a=r.enter(e,t,o);if(!a)return r;r=a}}class _h{cursor(e=0){return new Mi(this,e)}getChild(e,t=null,n=null){let s=Nl(this,e,t,n);return s.length?s[0]:null}getChildren(e,t=null,n=null){return Nl(this,e,t,n)}resolve(e,t=0){return Cr(this,e,t,!1)}resolveInner(e,t=0){return Cr(this,e,t,!0)}matchContext(e){return Po(this,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let s=t.lastChild;if(!s||s.to!=t.to)break;s.type.isError&&s.from==s.to?(n=t,t=s.prevSibling):t=s}return n}get node(){return this}get next(){return this.parent}}class Ae extends _h{constructor(e,t,n,s){super(),this._tree=e,this.from=t,this.index=n,this._parent=s}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,n,s,o=0){for(let a=this;;){for(let{children:l,positions:c}=a._tree,u=t>0?l.length:-1;e!=u;e+=t){let h=l[e],d=c[e]+a.from;if(Uh(s,n,d,d+h.length)){if(h instanceof tn){if(o&ie.ExcludeBuffers)continue;let f=h.findChild(0,h.buffer.length,t,n-d,s);if(f>-1)return new kt(new Km(a,h,e,d),null,f)}else if(o&ie.IncludeAnonymous||!h.type.isAnonymous||ha(h)){let f;if(!(o&ie.IgnoreMounts)&&(f=Sr.get(h))&&!f.overlay)return new Ae(f.tree,d,e,a);let p=new Ae(h,d,e,a);return o&ie.IncludeAnonymous||!p.type.isAnonymous?p:p.nextChild(t<0?h.children.length-1:0,t,n,s)}}}if(o&ie.IncludeAnonymous||!a.type.isAnonymous||(a.index>=0?e=a.index+t:e=t<0?-1:a._parent._tree.children.length,a=a._parent,!a))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}enter(e,t,n=0){let s;if(!(n&ie.IgnoreOverlays)&&(s=Sr.get(this._tree))&&s.overlay){let o=e-this.from;for(let{from:a,to:l}of s.overlay)if((t>0?a<=o:a<o)&&(t<0?l>=o:l>o))return new Ae(s.tree,s.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,n)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function Nl(r,e,t,n){let s=r.cursor(),o=[];if(!s.firstChild())return o;if(t!=null){for(let a=!1;!a;)if(a=s.type.is(t),!s.nextSibling())return o}for(;;){if(n!=null&&s.type.is(n))return o;if(s.type.is(e)&&o.push(s.node),!s.nextSibling())return n==null?o:[]}}function Po(r,e,t=e.length-1){for(let n=r.parent;t>=0;n=n.parent){if(!n)return!1;if(!n.type.isAnonymous){if(e[t]&&e[t]!=n.name)return!1;t--}}return!0}class Km{constructor(e,t,n,s){this.parent=e,this.buffer=t,this.index=n,this.start=s}}class kt extends _h{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(e,t,n){let{buffer:s}=this.context,o=s.findChild(this.index+4,s.buffer[this.index+3],e,t-this.context.start,n);return o<0?null:new kt(this.context,this,o)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}enter(e,t,n=0){if(n&ie.ExcludeBuffers)return null;let{buffer:s}=this.context,o=s.findChild(this.index+4,s.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return o<0?null:new kt(this.context,this,o)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new kt(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new kt(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,s=this.index+4,o=n.buffer[this.index+3];if(o>s){let a=n.buffer[this.index+1];e.push(n.slice(s,o,a)),t.push(0)}return new de(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Gh(r){if(!r.length)return null;let e=0,t=r[0];for(let o=1;o<r.length;o++){let a=r[o];(a.from>t.from||a.to<t.to)&&(t=a,e=o)}let n=t instanceof Ae&&t.index<0?null:t.parent,s=r.slice();return n?s[e]=n:s.splice(e,1),new eO(s,t)}class eO{constructor(e,t){this.heads=e,this.node=t}get next(){return Gh(this.heads)}}function tO(r,e,t){let n=r.resolveInner(e,t),s=null;for(let o=n instanceof Ae?n:n.context.parent;o;o=o.parent)if(o.index<0){let a=o.parent;(s||(s=[n])).push(a.resolve(e,t)),o=a}else{let a=Sr.get(o.tree);if(a&&a.overlay&&a.overlay[0].from<=e&&a.overlay[a.overlay.length-1].to>=e){let l=new Ae(a.tree,a.overlay[0].from+o.from,-1,o);(s||(s=[n])).push(Cr(l,e,t,!1))}}return s?Gh(s):n}class Mi{get name(){return this.type.name}constructor(e,t=0){if(this.mode=t,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof Ae)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let n=e._parent;n;n=n._parent)this.stack.unshift(n.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:s}=this.buffer;return this.type=t||s.set.types[s.buffer[e]],this.from=n+s.buffer[e+1],this.to=n+s.buffer[e+2],!0}yield(e){return e?e instanceof Ae?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:s}=this.buffer,o=s.findChild(this.index+4,s.buffer[this.index+3],e,t-this.buffer.start,n);return o<0?!1:(this.stack.push(this.index),this.yieldBuf(o))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&ie.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&ie.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&ie.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let s=n<0?0:this.stack[n]+4;if(this.index!=s)return this.yieldBuf(t.findChild(s,this.index,-1,0,4))}else{let s=t.buffer[this.index+3];if(s<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(s)}return n<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:s}=this;if(s){if(e>0){if(this.index<s.buffer.buffer.length)return!1}else for(let o=0;o<this.index;o++)if(s.buffer.buffer[o+3]<this.index)return!1;({index:t,parent:n}=s)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let o=t+e,a=e<0?-1:n._tree.children.length;o!=a;o+=e){let l=n._tree.children[o];if(this.mode&ie.IncludeAnonymous||l instanceof tn||!l.type.isAnonymous||ha(l))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)e:for(let s=this.index,o=this.stack.length;o>=0;){for(let a=e;a;a=a._parent)if(a.index==s){if(s==this.index)return a;t=a,n=o+1;break e}s=this.stack[--o]}for(let s=n;s<this.stack.length;s++)t=new kt(this.buffer,t,this.stack[s]);return this.bufferNode=new kt(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let s=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(s=!0)}for(;s&&t&&t(this),s=this.type.isAnonymous,!this.nextSibling();){if(!n)return;this.parent(),n--,s=!0}}}matchContext(e){if(!this.buffer)return Po(this.node,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let s=e.length-1,o=this.stack.length-1;s>=0;o--){if(o<0)return Po(this.node,e,s);let a=n[t.buffer[this.stack[o]]];if(!a.isAnonymous){if(e[s]&&e[s]!=a.name)return!1;s--}}return!0}}function ha(r){return r.children.some(e=>e instanceof tn||!e.type.isAnonymous||ha(e))}function nO(r){var e;let{buffer:t,nodeSet:n,maxBufferLength:s=qh,reused:o=[],minRepeatType:a=n.types.length}=r,l=Array.isArray(t)?new ua(t,t.length):t,c=n.types,u=0,h=0;function d(g,C,P,T,B,X){let{id:D,start:W,end:F,size:J}=l,ge=h;for(;J<0;)if(l.next(),J==-1){let Je=o[D];P.push(Je),T.push(W-g);return}else if(J==-3){u=D;return}else if(J==-4){h=D;return}else throw new RangeError(`Unrecognized record size: ${J}`);let Fe=c[D],qe,je,zr=W-g;if(F-W<=s&&(je=v(l.pos-C,B))){let Je=new Uint16Array(je.size-je.skip),Ee=l.pos-je.size,Ie=Je.length;for(;l.pos>Ee;)Ie=w(je.start,Je,Ie);qe=new tn(Je,F-je.start,n),zr=je.start-g}else{let Je=l.pos-J;l.next();let Ee=[],Ie=[],at=D>=a?D:-1,$=0,A=F;for(;l.pos>Je;)at>=0&&l.id==at&&l.size>=0?(l.end<=A-s&&(m(Ee,Ie,W,$,l.end,A,at,ge),$=Ee.length,A=l.end),l.next()):X>2500?f(W,Je,Ee,Ie):d(W,Je,Ee,Ie,at,X+1);if(at>=0&&$>0&&$<Ee.length&&m(Ee,Ie,W,$,W,A,at,ge),Ee.reverse(),Ie.reverse(),at>-1&&$>0){let V=p(Fe);qe=da(Fe,Ee,Ie,0,Ee.length,0,F-W,V,V)}else qe=O(Fe,Ee,Ie,F-W,ge-F)}P.push(qe),T.push(zr)}function f(g,C,P,T){let B=[],X=0,D=-1;for(;l.pos>C;){let{id:W,start:F,end:J,size:ge}=l;if(ge>4)l.next();else{if(D>-1&&F<D)break;D<0&&(D=J-s),B.push(W,F,J),X++,l.next()}}if(X){let W=new Uint16Array(X*4),F=B[B.length-2];for(let J=B.length-3,ge=0;J>=0;J-=3)W[ge++]=B[J],W[ge++]=B[J+1]-F,W[ge++]=B[J+2]-F,W[ge++]=ge;P.push(new tn(W,B[2]-F,n)),T.push(F-g)}}function p(g){return(C,P,T)=>{let B=0,X=C.length-1,D,W;if(X>=0&&(D=C[X])instanceof de){if(!X&&D.type==g&&D.length==T)return D;(W=D.prop(N.lookAhead))&&(B=P[X]+D.length+W)}return O(g,C,P,T,B)}}function m(g,C,P,T,B,X,D,W){let F=[],J=[];for(;g.length>T;)F.push(g.pop()),J.push(C.pop()+P-B);g.push(O(n.types[D],F,J,X-B,W-X)),C.push(B-P)}function O(g,C,P,T,B=0,X){if(u){let D=[N.contextHash,u];X=X?[D].concat(X):[D]}if(B>25){let D=[N.lookAhead,B];X=X?[D].concat(X):[D]}return new de(g,C,P,T,X)}function v(g,C){let P=l.fork(),T=0,B=0,X=0,D=P.end-s,W={size:0,start:0,skip:0};e:for(let F=P.pos-g;P.pos>F;){let J=P.size;if(P.id==C&&J>=0){W.size=T,W.start=B,W.skip=X,X+=4,T+=4,P.next();continue}let ge=P.pos-J;if(J<0||ge<F||P.start<D)break;let Fe=P.id>=a?4:0,qe=P.start;for(P.next();P.pos>ge;){if(P.size<0)if(P.size==-3)Fe+=4;else break e;else P.id>=a&&(Fe+=4);P.next()}B=qe,T+=J,X+=Fe}return(C<0||T==g)&&(W.size=T,W.start=B,W.skip=X),W.size>4?W:void 0}function w(g,C,P){let{id:T,start:B,end:X,size:D}=l;if(l.next(),D>=0&&T<a){let W=P;if(D>4){let F=l.pos-(D-4);for(;l.pos>F;)P=w(g,C,P)}C[--P]=W,C[--P]=X-g,C[--P]=B-g,C[--P]=T}else D==-3?u=T:D==-4&&(h=T);return P}let x=[],k=[];for(;l.pos>0;)d(r.start||0,r.bufferStart||0,x,k,-1,0);let b=(e=r.length)!==null&&e!==void 0?e:x.length?k[0]+x[0].length:0;return new de(c[r.topID],x.reverse(),k.reverse(),b)}const ql=new WeakMap;function pi(r,e){if(!r.isAnonymous||e instanceof tn||e.type!=r)return 1;let t=ql.get(e);if(t==null){t=1;for(let n of e.children){if(n.type!=r||!(n instanceof de)){t=1;break}t+=pi(r,n)}ql.set(e,t)}return t}function da(r,e,t,n,s,o,a,l,c){let u=0;for(let m=n;m<s;m++)u+=pi(r,e[m]);let h=Math.ceil(u*1.5/8),d=[],f=[];function p(m,O,v,w,x){for(let k=v;k<w;){let b=k,g=O[k],C=pi(r,m[k]);for(k++;k<w;k++){let P=pi(r,m[k]);if(C+P>=h)break;C+=P}if(k==b+1){if(C>h){let P=m[b];p(P.children,P.positions,0,P.children.length,O[b]+x);continue}d.push(m[b])}else{let P=O[k-1]+m[k-1].length-g;d.push(da(r,m,O,b,k,g,P,null,c))}f.push(g+x-o)}}return p(e,t,n,s,0),(l||c)(d,f,a)}class Fh{constructor(){this.map=new WeakMap}setBuffer(e,t,n){let s=this.map.get(e);s||this.map.set(e,s=new Map),s.set(t,n)}getBuffer(e,t){let n=this.map.get(e);return n&&n.get(t)}set(e,t){e instanceof kt?this.setBuffer(e.context.buffer,e.index,t):e instanceof Ae&&this.map.set(e.tree,t)}get(e){return e instanceof kt?this.getBuffer(e.context.buffer,e.index):e instanceof Ae?this.map.get(e.tree):void 0}cursorSet(e,t){e.buffer?this.setBuffer(e.buffer.buffer,e.index,t):this.map.set(e.tree,t)}cursorGet(e){return e.buffer?this.getBuffer(e.buffer.buffer,e.index):this.map.get(e.tree)}}class Et{constructor(e,t,n,s,o=!1,a=!1){this.from=e,this.to=t,this.tree=n,this.offset=s,this.open=(o?1:0)|(a?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(e,t=[],n=!1){let s=[new Et(0,e.length,e,0,!1,n)];for(let o of t)o.to>e.length&&s.push(o);return s}static applyChanges(e,t,n=128){if(!t.length)return e;let s=[],o=1,a=e.length?e[0]:null;for(let l=0,c=0,u=0;;l++){let h=l<t.length?t[l]:null,d=h?h.fromA:1e9;if(d-c>=n)for(;a&&a.from<d;){let f=a;if(c>=f.from||d<=f.to||u){let p=Math.max(f.from,c)-u,m=Math.min(f.to,d)-u;f=p>=m?null:new Et(p,m,f.tree,f.offset+u,l>0,!!h)}if(f&&s.push(f),a.to>d)break;a=o<e.length?e[o++]:null}if(!h)break;c=h.toA,u=h.toA-h.toB}return s}}class Jh{startParse(e,t,n){return typeof e=="string"&&(e=new rO(e)),n=n?n.length?n.map(s=>new Ke(s.from,s.to)):[new Ke(0,0)]:[new Ke(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let s=this.startParse(e,t,n);for(;;){let o=s.advance();if(o)return o}}}class rO{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}}function iO(r){return(e,t,n,s)=>new oO(e,r,t,n,s)}class Ul{constructor(e,t,n,s,o){this.parser=e,this.parse=t,this.overlay=n,this.target=s,this.from=o}}function _l(r){if(!r.length||r.some(e=>e.from>=e.to))throw new RangeError("Invalid inner parse ranges given: "+JSON.stringify(r))}class sO{constructor(e,t,n,s,o,a,l){this.parser=e,this.predicate=t,this.mounts=n,this.index=s,this.start=o,this.target=a,this.prev=l,this.depth=0,this.ranges=[]}}const $o=new N({perNode:!0});class oO{constructor(e,t,n,s,o){this.nest=t,this.input=n,this.fragments=s,this.ranges=o,this.inner=[],this.innerDone=0,this.baseTree=null,this.stoppedAt=null,this.baseParse=e}advance(){if(this.baseParse){let n=this.baseParse.advance();if(!n)return null;if(this.baseParse=null,this.baseTree=n,this.startInner(),this.stoppedAt!=null)for(let s of this.inner)s.parse.stopAt(this.stoppedAt)}if(this.innerDone==this.inner.length){let n=this.baseTree;return this.stoppedAt!=null&&(n=new de(n.type,n.children,n.positions,n.length,n.propValues.concat([[$o,this.stoppedAt]]))),n}let e=this.inner[this.innerDone],t=e.parse.advance();if(t){this.innerDone++;let n=Object.assign(Object.create(null),e.target.props);n[N.mounted.id]=new Sr(t,e.overlay,e.parser),e.target.props=n}return null}get parsedPos(){if(this.baseParse)return 0;let e=this.input.length;for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].from<e&&(e=Math.min(e,this.inner[t].parse.parsedPos));return e}stopAt(e){if(this.stoppedAt=e,this.baseParse)this.baseParse.stopAt(e);else for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].parse.stopAt(e)}startInner(){let e=new cO(this.fragments),t=null,n=null,s=new Mi(new Ae(this.baseTree,this.ranges[0].from,0,null),ie.IncludeAnonymous|ie.IgnoreMounts);e:for(let o,a;;){let l=!0,c;if(this.stoppedAt!=null&&s.from>=this.stoppedAt)l=!1;else if(e.hasNode(s)){if(t){let u=t.mounts.find(h=>h.frag.from<=s.from&&h.frag.to>=s.to&&h.mount.overlay);if(u)for(let h of u.mount.overlay){let d=h.from+u.pos,f=h.to+u.pos;d>=s.from&&f<=s.to&&!t.ranges.some(p=>p.from<f&&p.to>d)&&t.ranges.push({from:d,to:f})}}l=!1}else if(n&&(a=aO(n.ranges,s.from,s.to)))l=a!=2;else if(!s.type.isAnonymous&&(o=this.nest(s,this.input))&&(s.from<s.to||!o.overlay)){s.tree||lO(s);let u=e.findMounts(s.from,o.parser);if(typeof o.overlay=="function")t=new sO(o.parser,o.overlay,u,this.inner.length,s.from,s.tree,t);else{let h=Jl(this.ranges,o.overlay||(s.from<s.to?[new Ke(s.from,s.to)]:[]));h.length&&_l(h),(h.length||!o.overlay)&&this.inner.push(new Ul(o.parser,h.length?o.parser.startParse(this.input,Hl(u,h),h):o.parser.startParse(""),o.overlay?o.overlay.map(d=>new Ke(d.from-s.from,d.to-s.from)):null,s.tree,h.length?h[0].from:s.from)),o.overlay?h.length&&(n={ranges:h,depth:0,prev:n}):l=!1}}else t&&(c=t.predicate(s))&&(c===!0&&(c=new Ke(s.from,s.to)),c.from<c.to&&t.ranges.push(c));if(l&&s.firstChild())t&&t.depth++,n&&n.depth++;else for(;!s.nextSibling();){if(!s.parent())break e;if(t&&!--t.depth){let u=Jl(this.ranges,t.ranges);u.length&&(_l(u),this.inner.splice(t.index,0,new Ul(t.parser,t.parser.startParse(this.input,Hl(t.mounts,u),u),t.ranges.map(h=>new Ke(h.from-t.start,h.to-t.start)),t.target,u[0].from))),t=t.prev}n&&!--n.depth&&(n=n.prev)}}}}function aO(r,e,t){for(let n of r){if(n.from>=t)break;if(n.to>e)return n.from<=e&&n.to>=t?2:1}return 0}function Gl(r,e,t,n,s,o){if(e<t){let a=r.buffer[e+1];n.push(r.slice(e,t,a)),s.push(a-o)}}function lO(r){let{node:e}=r,t=[],n=e.context.buffer;do t.push(r.index),r.parent();while(!r.tree);let s=r.tree,o=s.children.indexOf(n),a=s.children[o],l=a.buffer,c=[o];function u(h,d,f,p,m,O){let v=t[O],w=[],x=[];Gl(a,h,v,w,x,p);let k=l[v+1],b=l[v+2];c.push(w.length);let g=O?u(v+4,l[v+3],a.set.types[l[v]],k,b-k,O-1):e.toTree();return w.push(g),x.push(k-p),Gl(a,l[v+3],d,w,x,p),new de(f,w,x,m)}s.children[o]=u(0,l.length,Le.none,0,a.length,t.length-1);for(let h of c){let d=r.tree.children[h],f=r.tree.positions[h];r.yield(new Ae(d,f+r.from,h,r._tree))}}class Fl{constructor(e,t){this.offset=t,this.done=!1,this.cursor=e.cursor(ie.IncludeAnonymous|ie.IgnoreMounts)}moveTo(e){let{cursor:t}=this,n=e-this.offset;for(;!this.done&&t.from<n;)t.to>=e&&t.enter(n,1,ie.IgnoreOverlays|ie.ExcludeBuffers)||t.next(!1)||(this.done=!0)}hasNode(e){if(this.moveTo(e.from),!this.done&&this.cursor.from+this.offset==e.from&&this.cursor.tree)for(let t=this.cursor.tree;;){if(t==e.tree)return!0;if(t.children.length&&t.positions[0]==0&&t.children[0]instanceof de)t=t.children[0];else break}return!1}}let cO=class{constructor(e){var t;if(this.fragments=e,this.curTo=0,this.fragI=0,e.length){let n=this.curFrag=e[0];this.curTo=(t=n.tree.prop($o))!==null&&t!==void 0?t:n.to,this.inner=new Fl(n.tree,-n.offset)}else this.curFrag=this.inner=null}hasNode(e){for(;this.curFrag&&e.from>=this.curTo;)this.nextFrag();return this.curFrag&&this.curFrag.from<=e.from&&this.curTo>=e.to&&this.inner.hasNode(e)}nextFrag(){var e;if(this.fragI++,this.fragI==this.fragments.length)this.curFrag=this.inner=null;else{let t=this.curFrag=this.fragments[this.fragI];this.curTo=(e=t.tree.prop($o))!==null&&e!==void 0?e:t.to,this.inner=new Fl(t.tree,-t.offset)}}findMounts(e,t){var n;let s=[];if(this.inner){this.inner.cursor.moveTo(e,1);for(let o=this.inner.cursor.node;o;o=o.parent){let a=(n=o.tree)===null||n===void 0?void 0:n.prop(N.mounted);if(a&&a.parser==t)for(let l=this.fragI;l<this.fragments.length;l++){let c=this.fragments[l];if(c.from>=o.to)break;c.tree==this.curFrag.tree&&s.push({frag:c,pos:o.from-c.offset,mount:a})}}}return s}};function Jl(r,e){let t=null,n=e;for(let s=1,o=0;s<r.length;s++){let a=r[s-1].to,l=r[s].from;for(;o<n.length;o++){let c=n[o];if(c.from>=l)break;c.to<=a||(t||(n=t=e.slice()),c.from<a?(t[o]=new Ke(c.from,a),c.to>l&&t.splice(o+1,0,new Ke(l,c.to))):c.to>l?t[o--]=new Ke(l,c.to):t.splice(o--,1))}}return n}function uO(r,e,t,n){let s=0,o=0,a=!1,l=!1,c=-1e9,u=[];for(;;){let h=s==r.length?1e9:a?r[s].to:r[s].from,d=o==e.length?1e9:l?e[o].to:e[o].from;if(a!=l){let f=Math.max(c,t),p=Math.min(h,d,n);f<p&&u.push(new Ke(f,p))}if(c=Math.min(h,d),c==1e9)break;h==c&&(a?(a=!1,s++):a=!0),d==c&&(l?(l=!1,o++):l=!0)}return u}function Hl(r,e){let t=[];for(let{pos:n,mount:s,frag:o}of r){let a=n+(s.overlay?s.overlay[0].from:0),l=a+s.tree.length,c=Math.max(o.from,a),u=Math.min(o.to,l);if(s.overlay){let h=s.overlay.map(f=>new Ke(f.from+n,f.to+n)),d=uO(e,h,c,u);for(let f=0,p=c;;f++){let m=f==d.length,O=m?u:d[f].from;if(O>p&&t.push(new Et(p,O,s.tree,-a,o.from>=p||o.openStart,o.to<=O||o.openEnd)),m)break;p=d[f].to}}else t.push(new Et(c,u,s.tree,-a,o.from>=a||o.openStart,o.to<=l||o.openEnd))}return t}let hO=0;class bt{constructor(e,t,n){this.set=e,this.base=t,this.modified=n,this.id=hO++}static define(e){if(e!=null&&e.base)throw new Error("Can not derive from a modified tag");let t=new bt([],null,[]);if(t.set.push(t),e)for(let n of e.set)t.set.push(n);return t}static defineModifier(){let e=new Ri;return t=>t.modified.indexOf(e)>-1?t:Ri.get(t.base||t,t.modified.concat(e).sort((n,s)=>n.id-s.id))}}let dO=0;class Ri{constructor(){this.instances=[],this.id=dO++}static get(e,t){if(!t.length)return e;let n=t[0].instances.find(l=>l.base==e&&fO(t,l.modified));if(n)return n;let s=[],o=new bt(s,e,t);for(let l of t)l.instances.push(o);let a=pO(t);for(let l of e.set)if(!l.modified.length)for(let c of a)s.push(Ri.get(l,c));return o}}function fO(r,e){return r.length==e.length&&r.every((t,n)=>t==e[n])}function pO(r){let e=[[]];for(let t=0;t<r.length;t++)for(let n=0,s=e.length;n<s;n++)e.push(e[n].concat(r[t]));return e.sort((t,n)=>n.length-t.length)}function Fi(r){let e=Object.create(null);for(let t in r){let n=r[t];Array.isArray(n)||(n=[n]);for(let s of t.split(" "))if(s){let o=[],a=2,l=s;for(let d=0;;){if(l=="..."&&d>0&&d+3==s.length){a=1;break}let f=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);if(!f)throw new RangeError("Invalid path: "+s);if(o.push(f[0]=="*"?"":f[0][0]=='"'?JSON.parse(f[0]):f[0]),d+=f[0].length,d==s.length)break;let p=s[d++];if(d==s.length&&p=="!"){a=0;break}if(p!="/")throw new RangeError("Invalid path: "+s);l=s.slice(d)}let c=o.length-1,u=o[c];if(!u)throw new RangeError("Invalid path: "+s);let h=new Ai(n,a,c>0?o.slice(0,c):null);e[u]=h.sort(e[u])}}return Hh.add(e)}const Hh=new N;class Ai{constructor(e,t,n,s){this.tags=e,this.mode=t,this.context=n,this.next=s}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}}Ai.empty=new Ai([],2,null);function Kh(r,e){let t=Object.create(null);for(let o of r)if(!Array.isArray(o.tag))t[o.tag.id]=o.class;else for(let a of o.tag)t[a.id]=o.class;let{scope:n,all:s=null}=e||{};return{style:o=>{let a=s;for(let l of o)for(let c of l.set){let u=t[c.id];if(u){a=a?a+" "+u:u;break}}return a},scope:n}}function mO(r,e){let t=null;for(let n of r){let s=n.style(e);s&&(t=t?t+" "+s:s)}return t}function ed(r,e,t,n=0,s=r.length){let o=new OO(n,Array.isArray(e)?e:[e],t);o.highlightRange(r.cursor(),n,s,"",o.highlighters),o.flush(s)}class OO{constructor(e,t,n){this.at=e,this.highlighters=t,this.span=n,this.class=""}startSpan(e,t){t!=this.class&&(this.flush(e),e>this.at&&(this.at=e),this.class=t)}flush(e){e>this.at&&this.class&&this.span(this.at,e,this.class)}highlightRange(e,t,n,s,o){let{type:a,from:l,to:c}=e;if(l>=n||c<=t)return;a.isTop&&(o=this.highlighters.filter(p=>!p.scope||p.scope(a)));let u=s,h=gO(e)||Ai.empty,d=mO(o,h.tags);if(d&&(u&&(u+=" "),u+=d,h.mode==1&&(s+=(s?" ":"")+d)),this.startSpan(Math.max(t,l),u),h.opaque)return;let f=e.tree&&e.tree.prop(N.mounted);if(f&&f.overlay){let p=e.node.enter(f.overlay[0].from+l,1),m=this.highlighters.filter(v=>!v.scope||v.scope(f.tree.type)),O=e.firstChild();for(let v=0,w=l;;v++){let x=v<f.overlay.length?f.overlay[v]:null,k=x?x.from+l:c,b=Math.max(t,w),g=Math.min(n,k);if(b<g&&O)for(;e.from<g&&(this.highlightRange(e,b,g,s,o),this.startSpan(Math.min(g,e.to),u),!(e.to>=k||!e.nextSibling())););if(!x||k>n)break;w=x.to+l,w>t&&(this.highlightRange(p.cursor(),Math.max(t,x.from+l),Math.min(n,w),"",m),this.startSpan(Math.min(n,w),u))}O&&e.parent()}else if(e.firstChild()){f&&(s="");do if(!(e.to<=t)){if(e.from>=n)break;this.highlightRange(e,t,n,s,o),this.startSpan(Math.min(n,e.to),u)}while(e.nextSibling());e.parent()}}}function gO(r){let e=r.type.prop(Hh);for(;e&&e.context&&!r.matchContext(e.context);)e=e.next;return e||null}const R=bt.define,ni=R(),Nt=R(),Kl=R(Nt),ec=R(Nt),qt=R(),ri=R(qt),ks=R(qt),yt=R(),an=R(yt),vt=R(),wt=R(),Qo=R(),Fn=R(Qo),ii=R(),S={comment:ni,lineComment:R(ni),blockComment:R(ni),docComment:R(ni),name:Nt,variableName:R(Nt),typeName:Kl,tagName:R(Kl),propertyName:ec,attributeName:R(ec),className:R(Nt),labelName:R(Nt),namespace:R(Nt),macroName:R(Nt),literal:qt,string:ri,docString:R(ri),character:R(ri),attributeValue:R(ri),number:ks,integer:R(ks),float:R(ks),bool:R(qt),regexp:R(qt),escape:R(qt),color:R(qt),url:R(qt),keyword:vt,self:R(vt),null:R(vt),atom:R(vt),unit:R(vt),modifier:R(vt),operatorKeyword:R(vt),controlKeyword:R(vt),definitionKeyword:R(vt),moduleKeyword:R(vt),operator:wt,derefOperator:R(wt),arithmeticOperator:R(wt),logicOperator:R(wt),bitwiseOperator:R(wt),compareOperator:R(wt),updateOperator:R(wt),definitionOperator:R(wt),typeOperator:R(wt),controlOperator:R(wt),punctuation:Qo,separator:R(Qo),bracket:Fn,angleBracket:R(Fn),squareBracket:R(Fn),paren:R(Fn),brace:R(Fn),content:yt,heading:an,heading1:R(an),heading2:R(an),heading3:R(an),heading4:R(an),heading5:R(an),heading6:R(an),contentSeparator:R(yt),list:R(yt),quote:R(yt),emphasis:R(yt),strong:R(yt),link:R(yt),monospace:R(yt),strikethrough:R(yt),inserted:R(),deleted:R(),changed:R(),invalid:R(),meta:ii,documentMeta:R(ii),annotation:R(ii),processingInstruction:R(ii),definition:bt.defineModifier(),constant:bt.defineModifier(),function:bt.defineModifier(),standard:bt.defineModifier(),local:bt.defineModifier(),special:bt.defineModifier()};Kh([{tag:S.link,class:"tok-link"},{tag:S.heading,class:"tok-heading"},{tag:S.emphasis,class:"tok-emphasis"},{tag:S.strong,class:"tok-strong"},{tag:S.keyword,class:"tok-keyword"},{tag:S.atom,class:"tok-atom"},{tag:S.bool,class:"tok-bool"},{tag:S.url,class:"tok-url"},{tag:S.labelName,class:"tok-labelName"},{tag:S.inserted,class:"tok-inserted"},{tag:S.deleted,class:"tok-deleted"},{tag:S.literal,class:"tok-literal"},{tag:S.string,class:"tok-string"},{tag:S.number,class:"tok-number"},{tag:[S.regexp,S.escape,S.special(S.string)],class:"tok-string2"},{tag:S.variableName,class:"tok-variableName"},{tag:S.local(S.variableName),class:"tok-variableName tok-local"},{tag:S.definition(S.variableName),class:"tok-variableName tok-definition"},{tag:S.special(S.variableName),class:"tok-variableName2"},{tag:S.definition(S.propertyName),class:"tok-propertyName tok-definition"},{tag:S.typeName,class:"tok-typeName"},{tag:S.namespace,class:"tok-namespace"},{tag:S.className,class:"tok-className"},{tag:S.macroName,class:"tok-macroName"},{tag:S.propertyName,class:"tok-propertyName"},{tag:S.operator,class:"tok-operator"},{tag:S.comment,class:"tok-comment"},{tag:S.meta,class:"tok-meta"},{tag:S.invalid,class:"tok-invalid"},{tag:S.punctuation,class:"tok-punctuation"}]);var Ps;const kn=new N;function td(r){return Y.define({combine:r?e=>e.concat(r):void 0})}const fa=new N;class ct{constructor(e,t,n=[],s=""){this.data=e,this.name=s,H.prototype.hasOwnProperty("tree")||Object.defineProperty(H.prototype,"tree",{get(){return xe(this)}}),this.parser=t,this.extension=[zn.of(this),H.languageData.of((o,a,l)=>{let c=tc(o,a,l),u=c.type.prop(kn);if(!u)return[];let h=o.facet(u),d=c.type.prop(fa);if(d){let f=c.resolve(a-c.from,l);for(let p of d)if(p.test(f,o)){let m=o.facet(p.facet);return p.type=="replace"?m:m.concat(h)}}return h})].concat(n)}isActiveAt(e,t,n=-1){return tc(e,t,n).type.prop(kn)==this.data}findRegions(e){let t=e.facet(zn);if((t==null?void 0:t.data)==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],s=(o,a)=>{if(o.prop(kn)==this.data){n.push({from:a,to:a+o.length});return}let l=o.prop(N.mounted);if(l){if(l.tree.prop(kn)==this.data){if(l.overlay)for(let c of l.overlay)n.push({from:c.from+a,to:c.to+a});else n.push({from:a,to:a+o.length});return}else if(l.overlay){let c=n.length;if(s(l.tree,l.overlay[0].from+a),n.length>c)return}}for(let c=0;c<o.children.length;c++){let u=o.children[c];u instanceof de&&s(u,o.positions[c]+a)}};return s(xe(e),0),n}get allowsNesting(){return!0}}ct.setState=se.define();function tc(r,e,t){let n=r.facet(zn),s=xe(r).topNode;if(!n||n.allowsNesting)for(let o=s;o;o=o.enter(e,t,ie.ExcludeBuffers))o.type.isTop&&(s=o);return s}class Xn extends ct{constructor(e,t,n){super(e,t,[],n),this.parser=t}static define(e){let t=td(e.languageData);return new Xn(t,e.parser.configure({props:[kn.add(n=>n.isTop?t:void 0)]}),e.name)}configure(e,t){return new Xn(this.data,this.parser.configure(e),t||this.name)}get allowsNesting(){return this.parser.hasWrappers()}}function xe(r){let e=r.field(ct.state,!1);return e?e.tree:de.empty}class vO{constructor(e){this.doc=e,this.cursorPos=0,this.string="",this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}}let Jn=null;class Zi{constructor(e,t,n=[],s,o,a,l,c){this.parser=e,this.state=t,this.fragments=n,this.tree=s,this.treeLen=o,this.viewport=a,this.skipped=l,this.scheduleOn=c,this.parse=null,this.tempSkipped=[]}static create(e,t,n){return new Zi(e,t,[],de.empty,0,n,[],null)}startParse(){return this.parser.startParse(new vO(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=de.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var n;if(typeof e=="number"){let s=Date.now()+e;e=()=>Date.now()>s}for(this.parse||(this.parse=this.startParse()),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let s=this.parse.advance();if(s)if(this.fragments=this.withoutTempSkipped(Et.addTree(s,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=(n=this.parse.stoppedAt)!==null&&n!==void 0?n:this.state.doc.length,this.tree=s,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0;if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(Et.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=Jn;Jn=this;try{return e()}finally{Jn=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=nc(e,t.from,t.to);return e}changes(e,t){let{fragments:n,tree:s,treeLen:o,viewport:a,skipped:l}=this;if(this.takeTree(),!e.empty){let c=[];if(e.iterChangedRanges((u,h,d,f)=>c.push({fromA:u,toA:h,fromB:d,toB:f})),n=Et.applyChanges(n,c),s=de.empty,o=0,a={from:e.mapPos(a.from,-1),to:e.mapPos(a.to,1)},this.skipped.length){l=[];for(let u of this.skipped){let h=e.mapPos(u.from,1),d=e.mapPos(u.to,-1);h<d&&l.push({from:h,to:d})}}}return new Zi(this.parser,t,n,s,o,a,l,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let n=0;n<this.skipped.length;n++){let{from:s,to:o}=this.skipped[n];s<e.to&&o>e.from&&(this.fragments=nc(this.fragments,s,o),this.skipped.splice(n--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends Jh{createParse(t,n,s){let o=s[0].from,a=s[s.length-1].to;return{parsedPos:o,advance(){let c=Jn;if(c){for(let u of s)c.tempSkipped.push(u);e&&(c.scheduleOn=c.scheduleOn?Promise.all([c.scheduleOn,e]):e)}return this.parsedPos=a,new de(Le.none,[],[],a-o)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return Jn}}function nc(r,e,t){return Et.applyChanges(r,[{fromA:e,toA:t,fromB:e,toB:t}])}class Yn{constructor(e){this.context=e,this.tree=e.tree}apply(e){if(!e.docChanged&&this.tree==this.context.tree)return this;let t=this.context.changes(e.changes,e.state),n=this.context.treeLen==e.startState.doc.length?void 0:Math.max(e.changes.mapPos(this.context.treeLen),t.viewport.to);return t.work(20,n)||t.takeTree(),new Yn(t)}static init(e){let t=Math.min(3e3,e.doc.length),n=Zi.create(e.facet(zn).parser,e,{from:0,to:t});return n.work(20,t)||n.takeTree(),new Yn(n)}}ct.state=ft.define({create:Yn.init,update(r,e){for(let t of e.effects)if(t.is(ct.setState))return t.value;return e.startState.facet(zn)!=e.state.facet(zn)?Yn.init(e.state):r.apply(e)}});let nd=r=>{let e=setTimeout(()=>r(),500);return()=>clearTimeout(e)};typeof requestIdleCallback<"u"&&(nd=r=>{let e=-1,t=setTimeout(()=>{e=requestIdleCallback(r,{timeout:400})},100);return()=>e<0?clearTimeout(t):cancelIdleCallback(e)});const $s=typeof navigator<"u"&&(!((Ps=navigator.scheduling)===null||Ps===void 0)&&Ps.isInputPending)?()=>navigator.scheduling.isInputPending():null,wO=it.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(ct.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(ct.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=nd(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:s}}=this.view,o=n.field(ct.state);if(o.tree==o.context.tree&&o.context.isDone(s+1e5))return;let a=Date.now()+Math.min(this.chunkBudget,100,e&&!$s?Math.max(25,e.timeRemaining()-5):1e9),l=o.context.treeLen<s&&n.doc.length>s+1e3,c=o.context.work(()=>$s&&$s()||Date.now()>a,s+(l?0:1e5));this.chunkBudget-=Date.now()-t,(c||this.chunkBudget<=0)&&(o.context.takeTree(),this.view.dispatch({effects:ct.setState.of(new Yn(o.context))})),this.chunkBudget>0&&!(c&&!l)&&this.scheduleWork(),this.checkAsyncSchedule(o.context)}checkAsyncSchedule(e){e.scheduleOn&&(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(t=>xt(this.view.state,t)).then(()=>this.workScheduled--),e.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),zn=Y.define({combine(r){return r.length?r[0]:null},enables:r=>[ct.state,wO,z.contentAttributes.compute([r],e=>{let t=e.facet(r);return t&&t.name?{"data-language":t.name}:{}})]});class pa{constructor(e,t=[]){this.language=e,this.support=t,this.extension=[e,t]}}const yO=Y.define(),Ji=Y.define({combine:r=>{if(!r.length)return"  ";let e=r[0];if(!e||/\S/.test(e)||Array.from(e).some(t=>t!=e[0]))throw new Error("Invalid indent unit: "+JSON.stringify(r[0]));return e}});function ji(r){let e=r.facet(Ji);return e.charCodeAt(0)==9?r.tabSize*e.length:e.length}function Ei(r,e){let t="",n=r.tabSize,s=r.facet(Ji)[0];if(s=="	"){for(;e>=n;)t+="	",e-=n;s=" "}for(let o=0;o<e;o++)t+=s;return t}function rd(r,e){r instanceof H&&(r=new Hi(r));for(let n of r.state.facet(yO)){let s=n(r,e);if(s!==void 0)return s}let t=xe(r.state);return t.length>=e?bO(r,t,e):null}class Hi{constructor(e,t={}){this.state=e,this.options=t,this.unit=ji(e)}lineAt(e,t=1){let n=this.state.doc.lineAt(e),{simulateBreak:s,simulateDoubleBreak:o}=this.options;return s!=null&&s>=n.from&&s<=n.to?o&&s==e?{text:"",from:e}:(t<0?s<e:s<=e)?{text:n.text.slice(s-n.from),from:s}:{text:n.text.slice(0,s-n.from),from:n.from}:n}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return"";let{text:n,from:s}=this.lineAt(e,t);return n.slice(e-s,Math.min(n.length,e+100-s))}column(e,t=1){let{text:n,from:s}=this.lineAt(e,t),o=this.countColumn(n,e-s),a=this.options.overrideIndentation?this.options.overrideIndentation(s):-1;return a>-1&&(o+=a-this.countColumn(n,n.search(/\S|$/))),o}countColumn(e,t=e.length){return Ar(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:n,from:s}=this.lineAt(e,t),o=this.options.overrideIndentation;if(o){let a=o(s);if(a>-1)return a}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const Ki=new N;function bO(r,e,t){let n=e.resolveStack(t),s=n.node.enterUnfinishedNodesBefore(t);if(s!=n.node){let o=[];for(let a=s;a!=n.node;a=a.parent)o.push(a);for(let a=o.length-1;a>=0;a--)n={node:o[a],next:n}}return id(n,r,t)}function id(r,e,t){for(let n=r;n;n=n.next){let s=CO(n.node);if(s)return s(ma.create(e,t,n))}return 0}function SO(r){return r.pos==r.options.simulateBreak&&r.options.simulateDoubleBreak}function CO(r){let e=r.type.prop(Ki);if(e)return e;let t=r.firstChild,n;if(t&&(n=t.type.prop(N.closedBy))){let s=r.lastChild,o=s&&n.indexOf(s.name)>-1;return a=>sd(a,!0,1,void 0,o&&!SO(a)?s.from:void 0)}return r.parent==null?xO:null}function xO(){return 0}class ma extends Hi{constructor(e,t,n){super(e.state,e.options),this.base=e,this.pos=t,this.context=n}get node(){return this.context.node}static create(e,t,n){return new ma(e,t,n)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let n=e.resolve(t.from);for(;n.parent&&n.parent.from==n.from;)n=n.parent;if(kO(n,e))break;t=this.state.doc.lineAt(n.from)}return this.lineIndent(t.from)}continue(){return id(this.context.next,this.base,this.pos)}}function kO(r,e){for(let t=e;t;t=t.parent)if(r==t)return!0;return!1}function PO(r){let e=r.node,t=e.childAfter(e.from),n=e.lastChild;if(!t)return null;let s=r.options.simulateBreak,o=r.state.doc.lineAt(t.from),a=s==null||s<=o.from?o.to:Math.min(o.to,s);for(let l=t.to;;){let c=e.childAfter(l);if(!c||c==n)return null;if(!c.type.isSkipped)return c.from<a?t:null;l=c.to}}function $O({closing:r,align:e=!0,units:t=1}){return n=>sd(n,e,t,r)}function sd(r,e,t,n,s){let o=r.textAfter,a=o.match(/^\s*/)[0].length,l=n&&o.slice(a,a+n.length)==n||s==r.pos+a,c=e?PO(r):null;return c?l?r.column(c.from):r.column(c.to):r.baseIndent+(l?0:r.unit*t)}const QO=r=>r.baseIndent;function mi({except:r,units:e=1}={}){return t=>{let n=r&&r.test(t.textAfter);return t.baseIndent+(n?0:e*t.unit)}}const Oa=new N;function od(r){let e=r.firstChild,t=r.lastChild;return e&&e.to<t.from?{from:e.to,to:t.type.isError?r.to:t.from}:null}class es{constructor(e,t){this.specs=e;let n;function s(l){let c=Ht.newName();return(n||(n=Object.create(null)))["."+c]=l,c}const o=typeof t.all=="string"?t.all:t.all?s(t.all):void 0,a=t.scope;this.scope=a instanceof ct?l=>l.prop(kn)==a.data:a?l=>l==a:void 0,this.style=Kh(e.map(l=>({tag:l.tag,class:l.class||s(Object.assign({},l,{tag:null}))})),{all:o}).style,this.module=n?new Ht(n):null,this.themeType=t.themeType}static define(e,t){return new es(e,t||{})}}const To=Y.define(),TO=Y.define({combine(r){return r.length?[r[0]]:null}});function Qs(r){let e=r.facet(To);return e.length?e:r.facet(TO)}function MO(r,e){let t=[AO],n;return r instanceof es&&(r.module&&t.push(z.styleModule.of(r.module)),n=r.themeType),n?t.push(To.computeN([z.darkTheme],s=>s.facet(z.darkTheme)==(n=="dark")?[r]:[])):t.push(To.of(r)),t}class RO{constructor(e){this.markCache=Object.create(null),this.tree=xe(e.state),this.decorations=this.buildDeco(e,Qs(e.state)),this.decoratedTo=e.viewport.to}update(e){let t=xe(e.state),n=Qs(e.state),s=n!=Qs(e.startState),{viewport:o}=e.view,a=e.changes.mapPos(this.decoratedTo,1);t.length<o.to&&!s&&t.type==this.tree.type&&a>=o.to?(this.decorations=this.decorations.map(e.changes),this.decoratedTo=a):(t!=this.tree||e.viewportChanged||s)&&(this.tree=t,this.decorations=this.buildDeco(e.view,n),this.decoratedTo=o.to)}buildDeco(e,t){if(!t||!this.tree.length)return q.none;let n=new En;for(let{from:s,to:o}of e.visibleRanges)ed(this.tree,t,(a,l,c)=>{n.add(a,l,this.markCache[c]||(this.markCache[c]=q.mark({class:c})))},s,o);return n.finish()}}const AO=qi.high(it.fromClass(RO,{decorations:r=>r.decorations})),ZO=z.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}}),ad=1e4,ld="()[]{}",cd=Y.define({combine(r){return _i(r,{afterCursor:!0,brackets:ld,maxScanDistance:ad,renderMatch:IO})}}),jO=q.mark({class:"cm-matchingBracket"}),EO=q.mark({class:"cm-nonmatchingBracket"});function IO(r){let e=[],t=r.matched?jO:EO;return e.push(t.range(r.start.from,r.start.to)),r.end&&e.push(t.range(r.end.from,r.end.to)),e}const DO=ft.define({create(){return q.none},update(r,e){if(!e.docChanged&&!e.selection)return r;let t=[],n=e.state.facet(cd);for(let s of e.state.selection.ranges){if(!s.empty)continue;let o=Pt(e.state,s.head,-1,n)||s.head>0&&Pt(e.state,s.head-1,1,n)||n.afterCursor&&(Pt(e.state,s.head,1,n)||s.head<e.state.doc.length&&Pt(e.state,s.head+1,-1,n));o&&(t=t.concat(n.renderMatch(o,e.state)))}return q.set(t,!0)},provide:r=>z.decorations.from(r)}),XO=[DO,ZO];function YO(r={}){return[cd.of(r),XO]}const ud=new N;function Mo(r,e,t){let n=r.prop(e<0?N.openedBy:N.closedBy);if(n)return n;if(r.name.length==1){let s=t.indexOf(r.name);if(s>-1&&s%2==(e<0?1:0))return[t[s+e]]}return null}function Ro(r){let e=r.type.prop(ud);return e?e(r.node):r}function Pt(r,e,t,n={}){let s=n.maxScanDistance||ad,o=n.brackets||ld,a=xe(r),l=a.resolveInner(e,t);for(let c=l;c;c=c.parent){let u=Mo(c.type,t,o);if(u&&c.from<c.to){let h=Ro(c);if(h&&(t>0?e>=h.from&&e<h.to:e>h.from&&e<=h.to))return zO(r,e,t,c,h,u,o)}}return WO(r,e,t,a,l.type,s,o)}function zO(r,e,t,n,s,o,a){let l=n.parent,c={from:s.from,to:s.to},u=0,h=l==null?void 0:l.cursor();if(h&&(t<0?h.childBefore(n.from):h.childAfter(n.to)))do if(t<0?h.to<=n.from:h.from>=n.to){if(u==0&&o.indexOf(h.type.name)>-1&&h.from<h.to){let d=Ro(h);return{start:c,end:d?{from:d.from,to:d.to}:void 0,matched:!0}}else if(Mo(h.type,t,a))u++;else if(Mo(h.type,-t,a)){if(u==0){let d=Ro(h);return{start:c,end:d&&d.from<d.to?{from:d.from,to:d.to}:void 0,matched:!1}}u--}}while(t<0?h.prevSibling():h.nextSibling());return{start:c,matched:!1}}function WO(r,e,t,n,s,o,a){let l=t<0?r.sliceDoc(e-1,e):r.sliceDoc(e,e+1),c=a.indexOf(l);if(c<0||c%2==0!=t>0)return null;let u={from:t<0?e-1:e,to:t>0?e+1:e},h=r.doc.iterRange(e,t>0?r.doc.length:0),d=0;for(let f=0;!h.next().done&&f<=o;){let p=h.value;t<0&&(f+=p.length);let m=e+f*t;for(let O=t>0?0:p.length-1,v=t>0?p.length:-1;O!=v;O+=t){let w=a.indexOf(p[O]);if(!(w<0||n.resolveInner(m+O,1).type!=s))if(w%2==0==t>0)d++;else{if(d==1)return{start:u,end:{from:m+O,to:m+O+1},matched:w>>1==c>>1};d--}}t>0&&(f+=p.length)}return h.done?{start:u,matched:!1}:null}const LO=Object.create(null),rc=[Le.none],ic=[],sc=Object.create(null),BO=Object.create(null);for(let[r,e]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])BO[r]=VO(LO,e);function Ts(r,e){ic.indexOf(r)>-1||(ic.push(r),console.warn(e))}function VO(r,e){let t=[];for(let l of e.split(" ")){let c=[];for(let u of l.split(".")){let h=r[u]||S[u];h?typeof h=="function"?c.length?c=c.map(h):Ts(u,`Modifier ${u} used at start of tag`):c.length?Ts(u,`Tag ${u} used as modifier`):c=Array.isArray(h)?h:[h]:Ts(u,`Unknown highlighting tag ${u}`)}for(let u of c)t.push(u)}if(!t.length)return 0;let n=e.replace(/ /g,"_"),s=n+" "+t.map(l=>l.id),o=sc[s];if(o)return o.id;let a=sc[s]=Le.define({id:rc.length,name:n,props:[Fi({[n]:t})]});return rc.push(a),a.id}Se.RTL,Se.LTR;function oc(r){let e=Object.keys(r).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function NO(r){let e=Object.create(null),t=Object.create(null);for(let{label:s}of r){e[s[0]]=!0;for(let o=1;o<s.length;o++)t[s[o]]=!0}let n=oc(e)+oc(t)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function qO(r){let e=r.map(s=>typeof s=="string"?{label:s}:s),[t,n]=e.every(s=>/^\w+$/.test(s.label))?[/\w*$/,/\w+$/]:NO(e);return s=>{let o=s.matchBefore(n);return o||s.explicit?{from:o?o.from:s.pos,options:e,validFor:t}:null}}function UO(r,e){return t=>{for(let n=xe(t.state).resolveInner(t.pos,-1);n;n=n.parent){if(r.indexOf(n.name)>-1)return null;if(n.type.isTop)break}return e(t)}}const _O=ut.define(),GO=z.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});class FO{constructor(e,t,n,s){this.field=e,this.line=t,this.from=n,this.to=s}}class ga{constructor(e,t,n){this.field=e,this.from=t,this.to=n}map(e){let t=e.mapPos(this.from,-1,Me.TrackDel),n=e.mapPos(this.to,1,Me.TrackDel);return t==null||n==null?null:new ga(this.field,t,n)}}class va{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let n=[],s=[t],o=e.doc.lineAt(t),a=/^\s*/.exec(o.text)[0];for(let c of this.lines){if(n.length){let u=a,h=/^\t*/.exec(c)[0].length;for(let d=0;d<h;d++)u+=e.facet(Ji);s.push(t+u.length-h),c=u+c.slice(h)}n.push(c),t+=c.length+1}let l=this.fieldPositions.map(c=>new ga(c.field,s[c.line]+c.from,s[c.line]+c.to));return{text:n,ranges:l}}static parse(e){let t=[],n=[],s=[],o;for(let a of e.split(/\r\n?|\n/)){for(;o=/[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(a);){let l=o[1]?+o[1]:null,c=o[2]||o[3]||"",u=-1,h=c.replace(/\\[{}]/g,d=>d[1]);for(let d=0;d<t.length;d++)(l!=null?t[d].seq==l:h&&t[d].name==h)&&(u=d);if(u<0){let d=0;for(;d<t.length&&(l==null||t[d].seq!=null&&t[d].seq<l);)d++;t.splice(d,0,{seq:l,name:h}),u=d;for(let f of s)f.field>=u&&f.field++}s.push(new FO(u,n.length,o.index,o.index+h.length)),a=a.slice(0,o.index)+c+a.slice(o.index+o[0].length)}a=a.replace(/\\([{}])/g,(l,c,u)=>{for(let h of s)h.line==n.length&&h.from>u&&(h.from--,h.to--);return c}),n.push(a)}return new va(n,s)}}let JO=q.widget({widget:new class extends Nn{toDOM(){let r=document.createElement("span");return r.className="cm-snippetFieldPosition",r}ignoreEvent(){return!1}}}),HO=q.mark({class:"cm-snippetField"});class qn{constructor(e,t){this.ranges=e,this.active=t,this.deco=q.set(e.map(n=>(n.from==n.to?JO:HO).range(n.from,n.to)))}map(e){let t=[];for(let n of this.ranges){let s=n.map(e);if(!s)return null;t.push(s)}return new qn(t,this.active)}selectionInsideField(e){return e.ranges.every(t=>this.ranges.some(n=>n.field==this.active&&n.from<=t.from&&n.to>=t.to))}}const Er=se.define({map(r,e){return r&&r.map(e)}}),KO=se.define(),xr=ft.define({create(){return null},update(r,e){for(let t of e.effects){if(t.is(Er))return t.value;if(t.is(KO)&&r)return new qn(r.ranges,t.value)}return r&&e.docChanged&&(r=r.map(e.changes)),r&&e.selection&&!r.selectionInsideField(e.selection)&&(r=null),r},provide:r=>z.decorations.from(r,e=>e?e.deco:q.none)});function wa(r,e){return Q.create(r.filter(t=>t.field==e).map(t=>Q.range(t.from,t.to)))}function eg(r){let e=va.parse(r);return(t,n,s,o)=>{let{text:a,ranges:l}=e.instantiate(t.state,s),c={changes:{from:s,to:o,insert:G.of(a)},scrollIntoView:!0,annotations:n?[_O.of(n),ye.userEvent.of("input.complete")]:void 0};if(l.length&&(c.selection=wa(l,0)),l.some(u=>u.field>0)){let u=new qn(l,0),h=c.effects=[Er.of(u)];t.state.field(xr,!1)===void 0&&h.push(se.appendConfig.of([xr,sg,og,GO]))}t.dispatch(t.state.update(c))}}function hd(r){return({state:e,dispatch:t})=>{let n=e.field(xr,!1);if(!n||r<0&&n.active==0)return!1;let s=n.active+r,o=r>0&&!n.ranges.some(a=>a.field==s+r);return t(e.update({selection:wa(n.ranges,s),effects:Er.of(o?null:new qn(n.ranges,s)),scrollIntoView:!0})),!0}}const tg=({state:r,dispatch:e})=>r.field(xr,!1)?(e(r.update({effects:Er.of(null)})),!0):!1,ng=hd(1),rg=hd(-1),ig=[{key:"Tab",run:ng,shift:rg},{key:"Escape",run:tg}],ac=Y.define({combine(r){return r.length?r[0]:ig}}),sg=qi.highest(Ti.compute([ac],r=>r.facet(ac)));function Be(r,e){return Object.assign(Object.assign({},e),{apply:eg(r)})}const og=z.domEventHandlers({mousedown(r,e){let t=e.state.field(xr,!1),n;if(!t||(n=e.posAtCoords({x:r.clientX,y:r.clientY}))==null)return!1;let s=t.ranges.find(o=>o.from<=n&&o.to>=n);return!s||s.field==t.active?!1:(e.dispatch({selection:wa(t.ranges,s.field),effects:Er.of(t.ranges.some(o=>o.field>s.field)?new qn(t.ranges,s.field):null),scrollIntoView:!0}),!0)}}),kr={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},hn=se.define({map(r,e){let t=e.mapPos(r,-1,Me.TrackAfter);return t??void 0}}),ya=new class extends fn{};ya.startSide=1;ya.endSide=-1;const dd=ft.define({create(){return K.empty},update(r,e){if(r=r.map(e.changes),e.selection){let t=e.state.doc.lineAt(e.selection.main.head);r=r.update({filter:n=>n>=t.from&&n<=t.to})}for(let t of e.effects)t.is(hn)&&(r=r.update({add:[ya.range(t.value,t.value+1)]}));return r}});function ag(){return[cg,dd]}const Ms="()[]{}<>";function fd(r){for(let e=0;e<Ms.length;e+=2)if(Ms.charCodeAt(e)==r)return Ms.charAt(e+1);return A0(r<128?r:r+1)}function pd(r,e){return r.languageDataAt("closeBrackets",e)[0]||kr}const lg=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),cg=z.inputHandler.of((r,e,t,n)=>{if((lg?r.composing:r.compositionStarted)||r.state.readOnly)return!1;let s=r.state.selection.main;if(n.length>2||n.length==2&&jn(Qt(n,0))==1||e!=s.from||t!=s.to)return!1;let o=dg(r.state,n);return o?(r.dispatch(o),!0):!1}),ug=({state:r,dispatch:e})=>{if(r.readOnly)return!1;let n=pd(r,r.selection.main.head).brackets||kr.brackets,s=null,o=r.changeByRange(a=>{if(a.empty){let l=fg(r.doc,a.head);for(let c of n)if(c==l&&ts(r.doc,a.head)==fd(Qt(c,0)))return{changes:{from:a.head-c.length,to:a.head+c.length},range:Q.cursor(a.head-c.length)}}return{range:s=a}});return s||e(r.update(o,{scrollIntoView:!0,userEvent:"delete.backward"})),!s},hg=[{key:"Backspace",run:ug}];function dg(r,e){let t=pd(r,r.selection.main.head),n=t.brackets||kr.brackets;for(let s of n){let o=fd(Qt(s,0));if(e==s)return o==s?Og(r,s,n.indexOf(s+s+s)>-1,t):pg(r,s,o,t.before||kr.before);if(e==o&&md(r,r.selection.main.from))return mg(r,s,o)}return null}function md(r,e){let t=!1;return r.field(dd).between(0,r.doc.length,n=>{n==e&&(t=!0)}),t}function ts(r,e){let t=r.sliceString(e,e+2);return t.slice(0,jn(Qt(t,0)))}function fg(r,e){let t=r.sliceString(e-2,e);return jn(Qt(t,0))==t.length?t:t.slice(1)}function pg(r,e,t,n){let s=null,o=r.changeByRange(a=>{if(!a.empty)return{changes:[{insert:e,from:a.from},{insert:t,from:a.to}],effects:hn.of(a.to+e.length),range:Q.range(a.anchor+e.length,a.head+e.length)};let l=ts(r.doc,a.head);return!l||/\s/.test(l)||n.indexOf(l)>-1?{changes:{insert:e+t,from:a.head},effects:hn.of(a.head+e.length),range:Q.cursor(a.head+e.length)}:{range:s=a}});return s?null:r.update(o,{scrollIntoView:!0,userEvent:"input.type"})}function mg(r,e,t){let n=null,s=r.changeByRange(o=>o.empty&&ts(r.doc,o.head)==t?{changes:{from:o.head,to:o.head+t.length,insert:t},range:Q.cursor(o.head+t.length)}:n={range:o});return n?null:r.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function Og(r,e,t,n){let s=n.stringPrefixes||kr.stringPrefixes,o=null,a=r.changeByRange(l=>{if(!l.empty)return{changes:[{insert:e,from:l.from},{insert:e,from:l.to}],effects:hn.of(l.to+e.length),range:Q.range(l.anchor+e.length,l.head+e.length)};let c=l.head,u=ts(r.doc,c),h;if(u==e){if(lc(r,c))return{changes:{insert:e+e,from:c},effects:hn.of(c+e.length),range:Q.cursor(c+e.length)};if(md(r,c)){let f=t&&r.sliceDoc(c,c+e.length*3)==e+e+e?e+e+e:e;return{changes:{from:c,to:c+f.length,insert:f},range:Q.cursor(c+f.length)}}}else{if(t&&r.sliceDoc(c-2*e.length,c)==e+e&&(h=cc(r,c-2*e.length,s))>-1&&lc(r,h))return{changes:{insert:e+e+e+e,from:c},effects:hn.of(c+e.length),range:Q.cursor(c+e.length)};if(r.charCategorizer(c)(u)!=He.Word&&cc(r,c,s)>-1&&!gg(r,c,e,s))return{changes:{insert:e+e,from:c},effects:hn.of(c+e.length),range:Q.cursor(c+e.length)}}return{range:o=l}});return o?null:r.update(a,{scrollIntoView:!0,userEvent:"input.type"})}function lc(r,e){let t=xe(r).resolveInner(e+1);return t.parent&&t.from==e}function gg(r,e,t,n){let s=xe(r).resolveInner(e,-1),o=n.reduce((a,l)=>Math.max(a,l.length),0);for(let a=0;a<5;a++){let l=r.sliceDoc(s.from,Math.min(s.to,s.from+t.length+o)),c=l.indexOf(t);if(!c||c>-1&&n.indexOf(l.slice(0,c))>-1){let h=s.firstChild;for(;h&&h.from==s.from&&h.to-h.from>t.length+c;){if(r.sliceDoc(h.to-t.length,h.to)==t)return!1;h=h.firstChild}return!0}let u=s.to==e&&s.parent;if(!u)break;s=u}return!1}function cc(r,e,t){let n=r.charCategorizer(e);if(n(r.sliceDoc(e-1,e))!=He.Word)return e;for(let s of t){let o=e-s.length;if(r.sliceDoc(o,e)==s&&n(r.sliceDoc(o-1,o))!=He.Word)return o}return-1}var uc={};class Ii{constructor(e,t,n,s,o,a,l,c,u,h=0,d){this.p=e,this.stack=t,this.state=n,this.reducePos=s,this.pos=o,this.score=a,this.buffer=l,this.bufferBase=c,this.curContext=u,this.lookAhead=h,this.parent=d}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(e,t,n=0){let s=e.parser.context;return new Ii(e,[],t,n,n,0,[],0,s?new hc(s,s.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){var t;let n=e>>19,s=e&65535,{parser:o}=this.p;this.reducePos<this.pos-25&&this.setLookAhead(this.pos);let a=o.dynamicPrecedence(s);if(a&&(this.score+=a),n==0){this.pushState(o.getGoto(this.state,s,!0),this.reducePos),s<o.minRepeatTerm&&this.storeNode(s,this.reducePos,this.reducePos,4,!0),this.reduceContext(s,this.reducePos);return}let l=this.stack.length-(n-1)*3-(e&262144?6:0),c=l?this.stack[l-2]:this.p.ranges[0].from,u=this.reducePos-c;u>=2e3&&!(!((t=this.p.parser.nodeSet.types[s])===null||t===void 0)&&t.isAnonymous)&&(c==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=u):this.p.lastBigReductionSize<u&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=c,this.p.lastBigReductionSize=u));let h=l?this.stack[l-1]:0,d=this.bufferBase+this.buffer.length-h;if(s<o.minRepeatTerm||e&131072){let f=o.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(s,c,f,d+4,!0)}if(e&262144)this.state=this.stack[l];else{let f=this.stack[l-3];this.state=o.getGoto(f,s,!0)}for(;this.stack.length>l;)this.stack.pop();this.reduceContext(s,c)}storeNode(e,t,n,s=4,o=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let a=this,l=this.buffer.length;if(l==0&&a.parent&&(l=a.bufferBase-a.parent.bufferBase,a=a.parent),l>0&&a.buffer[l-4]==0&&a.buffer[l-1]>-1){if(t==n)return;if(a.buffer[l-2]>=t){a.buffer[l-2]=n;return}}}if(!o||this.pos==n)this.buffer.push(e,t,n,s);else{let a=this.buffer.length;if(a>0&&this.buffer[a-4]!=0)for(;a>0&&this.buffer[a-2]>n;)this.buffer[a]=this.buffer[a-4],this.buffer[a+1]=this.buffer[a-3],this.buffer[a+2]=this.buffer[a-2],this.buffer[a+3]=this.buffer[a-1],a-=4,s>4&&(s-=4);this.buffer[a]=e,this.buffer[a+1]=t,this.buffer[a+2]=n,this.buffer[a+3]=s}}shift(e,t,n,s){if(e&131072)this.pushState(e&65535,this.pos);else if(e&262144)this.pos=s,this.shiftContext(t,n),t<=this.p.parser.maxNode&&this.buffer.push(t,n,s,4);else{let o=e,{parser:a}=this.p;(s>this.pos||t<=a.maxNode)&&(this.pos=s,a.stateFlag(o,1)||(this.reducePos=s)),this.pushState(o,n),this.shiftContext(t,n),t<=a.maxNode&&this.buffer.push(t,n,s,4)}}apply(e,t,n,s){e&65536?this.reduce(e):this.shift(e,t,n,s)}useNode(e,t){let n=this.p.reused.length-1;(n<0||this.p.reused[n]!=e)&&(this.p.reused.push(e),n++);let s=this.pos;this.reducePos=this.pos=s+e.length,this.pushState(t,s),this.buffer.push(n,s,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let e=this,t=e.buffer.length;for(;t>0&&e.buffer[t-2]>e.reducePos;)t-=4;let n=e.buffer.slice(t),s=e.bufferBase+t;for(;e&&s==e.bufferBase;)e=e.parent;return new Ii(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,n,s,this.curContext,this.lookAhead,e)}recoverByDelete(e,t){let n=e<=this.p.parser.maxNode;n&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,n?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new vg(this);;){let n=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(n==0)return!1;if(!(n&65536))return!0;t.reduce(n)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let s=[];for(let o=0,a;o<t.length;o+=2)(a=t[o+1])!=this.state&&this.p.parser.hasAction(a,e)&&s.push(t[o],a);if(this.stack.length<120)for(let o=0;s.length<8&&o<t.length;o+=2){let a=t[o+1];s.some((l,c)=>c&1&&l==a)||s.push(t[o],a)}t=s}let n=[];for(let s=0;s<t.length&&n.length<4;s+=2){let o=t[s+1];if(o==this.state)continue;let a=this.split();a.pushState(o,this.pos),a.storeNode(0,a.pos,a.pos,4,!0),a.shiftContext(t[s],this.pos),a.reducePos=this.pos,a.score-=200,n.push(a)}return n}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if(!(t&65536))return!1;if(!e.validAction(this.state,t)){let n=t>>19,s=t&65535,o=this.stack.length-n*3;if(o<0||e.getGoto(this.stack[o],s,!1)<0){let a=this.findForcedReduction();if(a==null)return!1;t=a}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],n=(s,o)=>{if(!t.includes(s))return t.push(s),e.allActions(s,a=>{if(!(a&393216))if(a&65536){let l=(a>>19)-o;if(l>1){let c=a&65535,u=this.stack.length-l*3;if(u>=0&&e.getGoto(this.stack[u],c,!1)>=0)return l<<19|65536|c}}else{let l=n(a,o+1);if(l!=null)return l}})};return n(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new hc(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){e>this.lookAhead&&(this.emitLookAhead(),this.lookAhead=e)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class hc{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}}class vg{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=e&65535,n=e>>19;n==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(n-1)*3;let s=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0);this.state=s}}class Di{constructor(e,t,n){this.stack=e,this.pos=t,this.index=n,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(e,t=e.bufferBase+e.buffer.length){return new Di(e,t,t-e.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new Di(this.stack,this.pos,this.index)}}function ar(r,e=Uint16Array){if(typeof r!="string")return r;let t=null;for(let n=0,s=0;n<r.length;){let o=0;for(;;){let a=r.charCodeAt(n++),l=!1;if(a==126){o=65535;break}a>=92&&a--,a>=34&&a--;let c=a-32;if(c>=46&&(c-=46,l=!0),o+=c,l)break;o*=46}t?t[s++]=o:t=new e(o)}return t}class Oi{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const dc=new Oi;class wg{constructor(e,t){this.input=e,this.ranges=t,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=dc,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let n=this.range,s=this.rangeIndex,o=this.pos+e;for(;o<n.from;){if(!s)return null;let a=this.ranges[--s];o-=n.from-a.to,n=a}for(;t<0?o>n.to:o>=n.to;){if(s==this.ranges.length-1)return null;let a=this.ranges[++s];o+=a.from-n.to,n=a}return o}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t=this.chunkOff+e,n,s;if(t>=0&&t<this.chunk.length)n=this.pos+e,s=this.chunk.charCodeAt(t);else{let o=this.resolveOffset(e,1);if(o==null)return-1;if(n=o,n>=this.chunk2Pos&&n<this.chunk2Pos+this.chunk2.length)s=this.chunk2.charCodeAt(n-this.chunk2Pos);else{let a=this.rangeIndex,l=this.range;for(;l.to<=n;)l=this.ranges[++a];this.chunk2=this.input.chunk(this.chunk2Pos=n),n+this.chunk2.length>l.to&&(this.chunk2=this.chunk2.slice(0,l.to-n)),s=this.chunk2.charCodeAt(0)}}return n>=this.token.lookAhead&&(this.token.lookAhead=n+1),s}acceptToken(e,t=0){let n=t?this.resolveOffset(t,-1):this.pos;if(n==null||n<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=e,this.token.end=n}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),t=this.pos+e.length;this.chunk=t>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=dc,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let n="";for(let s of this.ranges){if(s.from>=t)break;s.to>e&&(n+=this.input.read(Math.max(s.from,e),Math.min(s.to,t)))}return n}}class An{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:n}=t.p;Od(this.data,e,t,this.id,n.data,n.tokenPrecTable)}}An.prototype.contextual=An.prototype.fallback=An.prototype.extend=!1;class Xi{constructor(e,t,n){this.precTable=t,this.elseToken=n,this.data=typeof e=="string"?ar(e):e}token(e,t){let n=e.pos,s=0;for(;;){let o=e.next<0,a=e.resolveOffset(1,1);if(Od(this.data,e,t,0,this.data,this.precTable),e.token.value>-1)break;if(this.elseToken==null)return;if(o||s++,a==null)break;e.reset(a,e.token)}s&&(e.reset(n,e.token),e.acceptToken(this.elseToken,s))}}Xi.prototype.contextual=An.prototype.fallback=An.prototype.extend=!1;class pt{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}}function Od(r,e,t,n,s,o){let a=0,l=1<<n,{dialect:c}=t.p.parser;e:for(;l&r[a];){let u=r[a+1];for(let p=a+3;p<u;p+=2)if((r[p+1]&l)>0){let m=r[p];if(c.allows(m)&&(e.token.value==-1||e.token.value==m||yg(m,e.token.value,s,o))){e.acceptToken(m);break}}let h=e.next,d=0,f=r[a+2];if(e.next<0&&f>d&&r[u+f*3-3]==65535){a=r[u+f*3-1];continue e}for(;d<f;){let p=d+f>>1,m=u+p+(p<<1),O=r[m],v=r[m+1]||65536;if(h<O)f=p;else if(h>=v)d=p+1;else{a=r[m+2],e.advance();continue e}}break}}function fc(r,e,t){for(let n=e,s;(s=r[n])!=65535;n++)if(s==t)return n-e;return-1}function yg(r,e,t,n){let s=fc(t,n,e);return s<0||fc(t,n,r)<s}const Ue=typeof process<"u"&&uc&&/\bparse\b/.test(uc.LOG);let Rs=null;function pc(r,e,t){let n=r.cursor(ie.IncludeAnonymous);for(n.moveTo(e);;)if(!(t<0?n.childBefore(e):n.childAfter(e)))for(;;){if((t<0?n.to<e:n.from>e)&&!n.type.isError)return t<0?Math.max(0,Math.min(n.to-1,e-25)):Math.min(r.length,Math.max(n.from+1,e+25));if(t<0?n.prevSibling():n.nextSibling())break;if(!n.parent())return t<0?0:r.length}}class bg{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?pc(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?pc(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let n=this.trees[t],s=this.index[t];if(s==n.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let o=n.children[s],a=this.start[t]+n.positions[s];if(a>e)return this.nextStart=a,null;if(o instanceof de){if(a==e){if(a<this.safeFrom)return null;let l=a+o.length;if(l<=this.safeTo){let c=o.prop(N.lookAhead);if(!c||l+c<this.fragment.to)return o}}this.index[t]++,a+o.length>=Math.max(this.safeFrom,e)&&(this.trees.push(o),this.start.push(a),this.index.push(0))}else this.index[t]++,this.nextStart=a+o.length}}}class Sg{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(n=>new Oi)}getActions(e){let t=0,n=null,{parser:s}=e.p,{tokenizers:o}=s,a=s.stateSlot(e.state,3),l=e.curContext?e.curContext.hash:0,c=0;for(let u=0;u<o.length;u++){if(!(1<<u&a))continue;let h=o[u],d=this.tokens[u];if(!(n&&!h.fallback)&&((h.contextual||d.start!=e.pos||d.mask!=a||d.context!=l)&&(this.updateCachedToken(d,h,e),d.mask=a,d.context=l),d.lookAhead>d.end+25&&(c=Math.max(d.lookAhead,c)),d.value!=0)){let f=t;if(d.extended>-1&&(t=this.addActions(e,d.extended,d.end,t)),t=this.addActions(e,d.value,d.end,t),!h.extend&&(n=d,t>f))break}}for(;this.actions.length>t;)this.actions.pop();return c&&e.setLookAhead(c),!n&&e.pos==this.stream.end&&(n=new Oi,n.value=e.p.parser.eofTerm,n.start=n.end=e.pos,t=this.addActions(e,n.value,n.end,t)),this.mainToken=n,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new Oi,{pos:n,p:s}=e;return t.start=n,t.end=Math.min(n+1,s.stream.end),t.value=n==s.stream.end?s.parser.eofTerm:0,t}updateCachedToken(e,t,n){let s=this.stream.clipPos(n.pos);if(t.token(this.stream.reset(s,e),n),e.value>-1){let{parser:o}=n.p;for(let a=0;a<o.specialized.length;a++)if(o.specialized[a]==e.value){let l=o.specializers[a](this.stream.read(e.start,e.end),n);if(l>=0&&n.p.parser.dialect.allows(l>>1)){l&1?e.extended=l>>1:e.value=l>>1;break}}}else e.value=0,e.end=this.stream.clipPos(s+1)}putAction(e,t,n,s){for(let o=0;o<s;o+=3)if(this.actions[o]==e)return s;return this.actions[s++]=e,this.actions[s++]=t,this.actions[s++]=n,s}addActions(e,t,n,s){let{state:o}=e,{parser:a}=e.p,{data:l}=a;for(let c=0;c<2;c++)for(let u=a.stateSlot(o,c?2:1);;u+=3){if(l[u]==65535)if(l[u+1]==1)u=Zt(l,u+2);else{s==0&&l[u+1]==2&&(s=this.putAction(Zt(l,u+2),t,n,s));break}l[u]==t&&(s=this.putAction(Zt(l,u+1),t,n,s))}return s}}class Cg{constructor(e,t,n,s){this.parser=e,this.input=t,this.ranges=s,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new wg(t,s),this.tokens=new Sg(e,this.stream),this.topTerm=e.top[1];let{from:o}=s[0];this.stacks=[Ii.start(this,e.top[0],o)],this.fragments=n.length&&this.stream.end-o>e.bufferLength*4?new bg(n,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,t=this.minStackPos,n=this.stacks=[],s,o;if(this.bigReductionCount>300&&e.length==1){let[a]=e;for(;a.forceReduce()&&a.stack.length&&a.stack[a.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let a=0;a<e.length;a++){let l=e[a];for(;;){if(this.tokens.mainToken=null,l.pos>t)n.push(l);else{if(this.advanceStack(l,n,e))continue;{s||(s=[],o=[]),s.push(l);let c=this.tokens.getMainToken(l);o.push(c.value,c.end)}}break}}if(!n.length){let a=s&&kg(s);if(a)return Ue&&console.log("Finish with "+this.stackID(a)),this.stackToTree(a);if(this.parser.strict)throw Ue&&s&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+t);this.recovering||(this.recovering=5)}if(this.recovering&&s){let a=this.stoppedAt!=null&&s[0].pos>this.stoppedAt?s[0]:this.runRecovery(s,o,n);if(a)return Ue&&console.log("Force-finish "+this.stackID(a)),this.stackToTree(a.forceAll())}if(this.recovering){let a=this.recovering==1?1:this.recovering*3;if(n.length>a)for(n.sort((l,c)=>c.score-l.score);n.length>a;)n.pop();n.some(l=>l.reducePos>t)&&this.recovering--}else if(n.length>1){e:for(let a=0;a<n.length-1;a++){let l=n[a];for(let c=a+1;c<n.length;c++){let u=n[c];if(l.sameState(u)||l.buffer.length>500&&u.buffer.length>500)if((l.score-u.score||l.buffer.length-u.buffer.length)>0)n.splice(c--,1);else{n.splice(a--,1);continue e}}}n.length>12&&n.splice(12,n.length-12)}this.minStackPos=n[0].pos;for(let a=1;a<n.length;a++)n[a].pos<this.minStackPos&&(this.minStackPos=n[a].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}advanceStack(e,t,n){let s=e.pos,{parser:o}=this,a=Ue?this.stackID(e)+" -> ":"";if(this.stoppedAt!=null&&s>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let u=e.curContext&&e.curContext.tracker.strict,h=u?e.curContext.hash:0;for(let d=this.fragments.nodeAt(s);d;){let f=this.parser.nodeSet.types[d.type.id]==d.type?o.getGoto(e.state,d.type.id):-1;if(f>-1&&d.length&&(!u||(d.prop(N.contextHash)||0)==h))return e.useNode(d,f),Ue&&console.log(a+this.stackID(e)+` (via reuse of ${o.getName(d.type.id)})`),!0;if(!(d instanceof de)||d.children.length==0||d.positions[0]>0)break;let p=d.children[0];if(p instanceof de&&d.positions[0]==0)d=p;else break}}let l=o.stateSlot(e.state,4);if(l>0)return e.reduce(l),Ue&&console.log(a+this.stackID(e)+` (via always-reduce ${o.getName(l&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let c=this.tokens.getActions(e);for(let u=0;u<c.length;){let h=c[u++],d=c[u++],f=c[u++],p=u==c.length||!n,m=p?e:e.split(),O=this.tokens.mainToken;if(m.apply(h,d,O?O.start:m.pos,f),Ue&&console.log(a+this.stackID(m)+` (via ${h&65536?`reduce of ${o.getName(h&65535)}`:"shift"} for ${o.getName(d)} @ ${s}${m==e?"":", split"})`),p)return!0;m.pos>s?t.push(m):n.push(m)}return!1}advanceFully(e,t){let n=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>n)return mc(e,t),!0}}runRecovery(e,t,n){let s=null,o=!1;for(let a=0;a<e.length;a++){let l=e[a],c=t[a<<1],u=t[(a<<1)+1],h=Ue?this.stackID(l)+" -> ":"";if(l.deadEnd&&(o||(o=!0,l.restart(),Ue&&console.log(h+this.stackID(l)+" (restarted)"),this.advanceFully(l,n))))continue;let d=l.split(),f=h;for(let p=0;d.forceReduce()&&p<10&&(Ue&&console.log(f+this.stackID(d)+" (via force-reduce)"),!this.advanceFully(d,n));p++)Ue&&(f=this.stackID(d)+" -> ");for(let p of l.recoverByInsert(c))Ue&&console.log(h+this.stackID(p)+" (via recover-insert)"),this.advanceFully(p,n);this.stream.end>l.pos?(u==l.pos&&(u++,c=0),l.recoverByDelete(c,u),Ue&&console.log(h+this.stackID(l)+` (via recover-delete ${this.parser.getName(c)})`),mc(l,n)):(!s||s.score<l.score)&&(s=l)}return s}stackToTree(e){return e.close(),de.build({buffer:Di.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(Rs||(Rs=new WeakMap)).get(e);return t||Rs.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}}function mc(r,e){for(let t=0;t<e.length;t++){let n=e[t];if(n.pos==r.pos&&n.sameState(r)){e[t].score<r.score&&(e[t]=r);return}}e.push(r)}class xg{constructor(e,t,n){this.source=e,this.flags=t,this.disabled=n}allows(e){return!this.disabled||this.disabled[e]==0}}const As=r=>r;class gd{constructor(e){this.start=e.start,this.shift=e.shift||As,this.reduce=e.reduce||As,this.reuse=e.reuse||As,this.hash=e.hash||(()=>0),this.strict=e.strict!==!1}}class Wn extends Jh{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(" ");this.minRepeatTerm=t.length;for(let l=0;l<e.repeatNodeCount;l++)t.push("");let n=Object.keys(e.topRules).map(l=>e.topRules[l][1]),s=[];for(let l=0;l<t.length;l++)s.push([]);function o(l,c,u){s[l].push([c,c.deserialize(String(u))])}if(e.nodeProps)for(let l of e.nodeProps){let c=l[0];typeof c=="string"&&(c=N[c]);for(let u=1;u<l.length;){let h=l[u++];if(h>=0)o(h,c,l[u++]);else{let d=l[u+-h];for(let f=-h;f>0;f--)o(l[u++],c,d);u++}}}this.nodeSet=new ca(t.map((l,c)=>Le.define({name:c>=this.minRepeatTerm?void 0:l,id:c,props:s[c],top:n.indexOf(c)>-1,error:c==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(c)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=qh;let a=ar(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let l=0;l<this.specializerSpecs.length;l++)this.specialized[l]=this.specializerSpecs[l].term;this.specializers=this.specializerSpecs.map(Oc),this.states=ar(e.states,Uint32Array),this.data=ar(e.stateData),this.goto=ar(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(l=>typeof l=="number"?new An(a,l):l),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,n){let s=new Cg(this,e,t,n);for(let o of this.wrappers)s=o(s,e,t,n);return s}getGoto(e,t,n=!1){let s=this.goto;if(t>=s[0])return-1;for(let o=s[t+1];;){let a=s[o++],l=a&1,c=s[o++];if(l&&n)return c;for(let u=o+(a>>1);o<u;o++)if(s[o]==e)return c;if(l)return-1}}hasAction(e,t){let n=this.data;for(let s=0;s<2;s++)for(let o=this.stateSlot(e,s?2:1),a;;o+=3){if((a=n[o])==65535)if(n[o+1]==1)a=n[o=Zt(n,o+2)];else{if(n[o+1]==2)return Zt(n,o+2);break}if(a==t||a==0)return Zt(n,o+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,n=>n==t?!0:null)}allActions(e,t){let n=this.stateSlot(e,4),s=n?t(n):void 0;for(let o=this.stateSlot(e,1);s==null;o+=3){if(this.data[o]==65535)if(this.data[o+1]==1)o=Zt(this.data,o+2);else break;s=t(Zt(this.data,o+1))}return s}nextStates(e){let t=[];for(let n=this.stateSlot(e,1);;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=Zt(this.data,n+2);else break;if(!(this.data[n+2]&1)){let s=this.data[n+1];t.some((o,a)=>a&1&&o==s)||t.push(this.data[n],s)}}return t}configure(e){let t=Object.assign(Object.create(Wn.prototype),this);if(e.props&&(t.nodeSet=this.nodeSet.extend(...e.props)),e.top){let n=this.topRules[e.top];if(!n)throw new RangeError(`Invalid top rule name ${e.top}`);t.top=n}return e.tokenizers&&(t.tokenizers=this.tokenizers.map(n=>{let s=e.tokenizers.find(o=>o.from==n);return s?s.to:n})),e.specializers&&(t.specializers=this.specializers.slice(),t.specializerSpecs=this.specializerSpecs.map((n,s)=>{let o=e.specializers.find(l=>l.from==n.external);if(!o)return n;let a=Object.assign(Object.assign({},n),{external:o.to});return t.specializers[s]=Oc(a),a})),e.contextTracker&&(t.context=e.contextTracker),e.dialect&&(t.dialect=this.parseDialect(e.dialect)),e.strict!=null&&(t.strict=e.strict),e.wrap&&(t.wrappers=t.wrappers.concat(e.wrap)),e.bufferLength!=null&&(t.bufferLength=e.bufferLength),t}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),n=t.map(()=>!1);if(e)for(let o of e.split(" ")){let a=t.indexOf(o);a>=0&&(n[a]=!0)}let s=null;for(let o=0;o<t.length;o++)if(!n[o])for(let a=this.dialects[t[o]],l;(l=this.data[a++])!=65535;)(s||(s=new Uint8Array(this.maxTerm+1)))[l]=1;return new xg(e,n,s)}static deserialize(e){return new Wn(e)}}function Zt(r,e){return r[e]|r[e+1]<<16}function kg(r){let e=null;for(let t of r){let n=t.p.stoppedAt;(t.pos==t.p.stream.end||n!=null&&t.pos>n)&&t.p.parser.stateFlag(t.state,2)&&(!e||e.score<t.score)&&(e=t)}return e}function Oc(r){if(r.external){let e=r.extend?1:0;return(t,n)=>r.external(t,n)<<1|e}return r.get}const Pg=99,gc=1,$g=100,Qg=101,vc=2,vd=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],Tg=58,Mg=40,wd=95,Rg=91,gi=45,Ag=46,Zg=35,jg=37,Eg=38,Ig=92,Dg=10;function Pr(r){return r>=65&&r<=90||r>=97&&r<=122||r>=161}function yd(r){return r>=48&&r<=57}const Xg=new pt((r,e)=>{for(let t=!1,n=0,s=0;;s++){let{next:o}=r;if(Pr(o)||o==gi||o==wd||t&&yd(o))!t&&(o!=gi||s>0)&&(t=!0),n===s&&o==gi&&n++,r.advance();else if(o==Ig&&r.peek(1)!=Dg)r.advance(),r.next>-1&&r.advance(),t=!0;else{t&&r.acceptToken(o==Mg?$g:n==2&&e.canShift(vc)?vc:Qg);break}}}),Yg=new pt(r=>{if(vd.includes(r.peek(-1))){let{next:e}=r;(Pr(e)||e==wd||e==Zg||e==Ag||e==Rg||e==Tg&&Pr(r.peek(1))||e==gi||e==Eg)&&r.acceptToken(Pg)}}),zg=new pt(r=>{if(!vd.includes(r.peek(-1))){let{next:e}=r;if(e==jg&&(r.advance(),r.acceptToken(gc)),Pr(e)){do r.advance();while(Pr(r.next)||yd(r.next));r.acceptToken(gc)}}}),Wg=Fi({"AtKeyword import charset namespace keyframes media supports":S.definitionKeyword,"from to selector":S.keyword,NamespaceName:S.namespace,KeyframeName:S.labelName,KeyframeRangeName:S.operatorKeyword,TagName:S.tagName,ClassName:S.className,PseudoClassName:S.constant(S.className),IdName:S.labelName,"FeatureName PropertyName":S.propertyName,AttributeName:S.attributeName,NumberLiteral:S.number,KeywordQuery:S.keyword,UnaryQueryOp:S.operatorKeyword,"CallTag ValueName":S.atom,VariableName:S.variableName,Callee:S.operatorKeyword,Unit:S.unit,"UniversalSelector NestingSelector":S.definitionOperator,MatchOp:S.compareOperator,"ChildOp SiblingOp, LogicOp":S.logicOperator,BinOp:S.arithmeticOperator,Important:S.modifier,Comment:S.blockComment,ColorLiteral:S.color,"ParenthesizedContent StringLiteral":S.string,":":S.punctuation,"PseudoOp #":S.derefOperator,"; ,":S.separator,"( )":S.paren,"[ ]":S.squareBracket,"{ }":S.brace}),Lg={__proto__:null,lang:32,"nth-child":32,"nth-last-child":32,"nth-of-type":32,"nth-last-of-type":32,dir:32,"host-context":32,url:60,"url-prefix":60,domain:60,regexp:60,selector:138},Bg={__proto__:null,"@import":118,"@media":142,"@charset":146,"@namespace":150,"@keyframes":156,"@supports":168},Vg={__proto__:null,not:132,only:132},Ng=Wn.deserialize({version:14,states:":^QYQ[OOO#_Q[OOP#fOWOOOOQP'#Cd'#CdOOQP'#Cc'#CcO#kQ[O'#CfO$_QXO'#CaO$fQ[O'#ChO$qQ[O'#DTO$vQ[O'#DWOOQP'#Em'#EmO${QdO'#DgO%jQ[O'#DtO${QdO'#DvO%{Q[O'#DxO&WQ[O'#D{O&`Q[O'#ERO&nQ[O'#ETOOQS'#El'#ElOOQS'#EW'#EWQYQ[OOO&uQXO'#CdO'jQWO'#DcO'oQWO'#EsO'zQ[O'#EsQOQWOOP(UO#tO'#C_POOO)C@[)C@[OOQP'#Cg'#CgOOQP,59Q,59QO#kQ[O,59QO(aQ[O'#E[O({QWO,58{O)TQ[O,59SO$qQ[O,59oO$vQ[O,59rO(aQ[O,59uO(aQ[O,59wO(aQ[O,59xO)`Q[O'#DbOOQS,58{,58{OOQP'#Ck'#CkOOQO'#DR'#DROOQP,59S,59SO)gQWO,59SO)lQWO,59SOOQP'#DV'#DVOOQP,59o,59oOOQO'#DX'#DXO)qQ`O,59rOOQS'#Cp'#CpO${QdO'#CqO)yQvO'#CsO+ZQtO,5:ROOQO'#Cx'#CxO)lQWO'#CwO+oQWO'#CyO+tQ[O'#DOOOQS'#Ep'#EpOOQO'#Dj'#DjO+|Q[O'#DqO,[QWO'#EtO&`Q[O'#DoO,jQWO'#DrOOQO'#Eu'#EuO)OQWO,5:`O,oQpO,5:bOOQS'#Dz'#DzO,wQWO,5:dO,|Q[O,5:dOOQO'#D}'#D}O-UQWO,5:gO-ZQWO,5:mO-cQWO,5:oOOQS-E8U-E8UO${QdO,59}O-kQ[O'#E^O-xQWO,5;_O-xQWO,5;_POOO'#EV'#EVP.TO#tO,58yPOOO,58y,58yOOQP1G.l1G.lO.zQXO,5:vOOQO-E8Y-E8YOOQS1G.g1G.gOOQP1G.n1G.nO)gQWO1G.nO)lQWO1G.nOOQP1G/Z1G/ZO/XQ`O1G/^O/rQXO1G/aO0YQXO1G/cO0pQXO1G/dO1WQWO,59|O1]Q[O'#DSO1dQdO'#CoOOQP1G/^1G/^O${QdO1G/^O1kQpO,59]OOQS,59_,59_O${QdO,59aO1sQWO1G/mOOQS,59c,59cO1xQ!bO,59eOOQS'#DP'#DPOOQS'#EY'#EYO2QQ[O,59jOOQS,59j,59jO2YQWO'#DjO2eQWO,5:VO2jQWO,5:]O&`Q[O,5:XO&`Q[O'#E_O2rQWO,5;`O2}QWO,5:ZO(aQ[O,5:^OOQS1G/z1G/zOOQS1G/|1G/|OOQS1G0O1G0OO3`QWO1G0OO3eQdO'#EOOOQS1G0R1G0ROOQS1G0X1G0XOOQS1G0Z1G0ZO3pQtO1G/iOOQO,5:x,5:xO4WQ[O,5:xOOQO-E8[-E8[O4eQWO1G0yPOOO-E8T-E8TPOOO1G.e1G.eOOQP7+$Y7+$YOOQP7+$x7+$xO${QdO7+$xOOQS1G/h1G/hO4pQXO'#ErO4wQWO,59nO4|QtO'#EXO5tQdO'#EoO6OQWO,59ZO6TQpO7+$xOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%X7+%XO6]QWO1G/POOQS-E8W-E8WOOQS1G/U1G/UO${QdO1G/qOOQO1G/w1G/wOOQO1G/s1G/sO6bQWO,5:yOOQO-E8]-E8]O6pQXO1G/xOOQS7+%j7+%jO6wQYO'#CsOOQO'#EQ'#EQO7SQ`O'#EPOOQO'#EP'#EPO7_QWO'#E`O7gQdO,5:jOOQS,5:j,5:jO7rQtO'#E]O${QdO'#E]O8sQdO7+%TOOQO7+%T7+%TOOQO1G0d1G0dO9WQpO<<HdO9`QWO,5;^OOQP1G/Y1G/YOOQS-E8V-E8VO${QdO'#EZO9hQWO,5;ZOOQT1G.u1G.uOOQP<<Hd<<HdOOQS7+$k7+$kO9pQdO7+%]OOQO7+%d7+%dOOQO,5:k,5:kO3hQdO'#EaO7_QWO,5:zOOQS,5:z,5:zOOQS-E8^-E8^OOQS1G0U1G0UO9wQtO,5:wOOQS-E8Z-E8ZOOQO<<Ho<<HoOOQPAN>OAN>OO:xQdO,5:uOOQO-E8X-E8XOOQO<<Hw<<HwOOQO,5:{,5:{OOQO-E8_-E8_OOQS1G0f1G0f",stateData:";[~O#ZOS#[QQ~OUYOXYO]VO^VOqXOxWO![aO!]ZO!i[O!k]O!m^O!p_O!v`O#XRO#bTO~OQfOUYOXYO]VO^VOqXOxWO![aO!]ZO!i[O!k]O!m^O!p_O!v`O#XeO#bTO~O#U#gP~P!ZO#[jO~O#XlO~O]qO^qOqsOtoOxrO!OtO!RvO#VuO#bnO~O!TwO~P#pO`}O#WzO#XyO~O#X!OO~O#X!QO~OQ![Ob!TOf![Oh![On!YOq!ZO#W!WO#X!SO#e!UO~Ob!^O!d!`O!g!aO#X!]O!T#hP~Oh!fOn!YO#X!eO~Oh!hO#X!hO~Ob!^O!d!`O!g!aO#X!]O~O!Y#hP~P%jO]WX]!WX^WXqWXtWXxWX!OWX!RWX!TWX#VWX#bWX~O]!mO~O!Y!nO#U#gX!S#gX~O#U#gX!S#gX~P!ZO#]!qO#^!qO#_!sO~OUYOXYO]VO^VOqXOxWO#XRO#bTO~OtoO!TwO~O`!zO#WzO#XyO~O!S#gP~P!ZOb#RO~Ob#SO~Op#TO|#UO~OP#WObgXjgX!YgX!dgX!ggX#XgXagXQgXfgXhgXngXqgXtgX!XgX#UgX#WgX#egXpgX!SgX~Ob!^Oj#XO!d!`O!g!aO#X!]O!Y#hP~Ob#[O~Op#`O#X#]O~Ob!^O!d!`O!g!aO#X#aO~Ot#eO!b#dO!T#hX!Y#hX~Ob#hO~Oj#XO!Y#jO~O!Y#kO~Oh#lOn!YO~O!T#mO~O!TwO!b#dO~O!TwO!Y#pO~O!Y#QX#U#QX!S#QX~P!ZO!Y!nO#U#ga!S#ga~O#]!qO#^!qO#_#wO~O]qO^qOqsOxrO!OtO!RvO#VuO#bnO~Ot#Oa!T#Oaa#Oa~P.`Op#yO|#zO~O]qO^qOqsOxrO#bnO~Ot}i!O}i!R}i!T}i#V}ia}i~P/aOt!Pi!O!Pi!R!Pi!T!Pi#V!Pia!Pi~P/aOt!Qi!O!Qi!R!Qi!T!Qi#V!Qia!Qi~P/aO!S#{O~Oa#fP~P(aOa#cP~P${Oa$SOj#XO~O!Y$UO~Oh$VOo$VO~Op$XO#X#]O~O]!`Xa!^X!b!^X~O]$YO~Oa$ZO!b#dO~Ot#eO!T#ha!Y#ha~O!b#dOt!ca!T!ca!Y!caa!ca~O!Y$`O~O!S$gO#X$bO#e$aO~Oj#XOt$iO!X$kO!Y!Vi#U!Vi!S!Vi~P${O!Y#Qa#U#Qa!S#Qa~P!ZO!Y!nO#U#gi!S#gi~Oa#fX~P#pOa$oO~Oj#XOQ!{Xa!{Xb!{Xf!{Xh!{Xn!{Xq!{Xt!{X#W!{X#X!{X#e!{X~Ot$qOa#cX~P${Oa$sO~Oj#XOp$tO~Oa$uO~O!b#dOt#Ra!T#Ra!Y#Ra~Oa$wO~P.`OP#WOtgX!TgX~O#e$aOt!sX!T!sX~Ot$yO!TwO~O!S$}O#X$bO#e$aO~Oj#XOQ#PXb#PXf#PXh#PXn#PXq#PXt#PX!X#PX!Y#PX#U#PX#W#PX#X#PX#e#PX!S#PX~Ot$iO!X%QO!Y!Vq#U!Vq!S!Vq~P${Oj#XOp%RO~OtoOa#fa~Ot$qOa#ca~Oa%UO~P${Oj#XOQ#Pab#Paf#Pah#Pan#Paq#Pat#Pa!X#Pa!Y#Pa#U#Pa#W#Pa#X#Pa#e#Pa!S#Pa~Oa!}at!}a~P${O#Zo#[#ej!R#e~",goto:"-g#jPPP#kP#nP#w$WP#w$g#wPP$mPPP$s$|$|P%`P$|P$|%z&^PPPP$|&vP&z'Q#wP'W#w'^P#wP#w#wPPP'd'y(WPP#nPP(_(_(i(_P(_P(_(_P#nP#nP#nP(l#nP(o(r(u(|#nP#nP)R)X)h)v)|*S*^*d*n*t*zPPPPPPPPPP+Q+ZP+v+yP,o,r,x-RRkQ_bOPdhw!n#skYOPdhotuvw!n#R#h#skSOPdhotuvw!n#R#h#sQmTR!tnQ{VR!xqQ!x}Q#Z!XR#x!zq![Z]!T!m#S#U#X#q#z$P$Y$i$j$q$v%Sp![Z]!T!m#S#U#X#q#z$P$Y$i$j$q$v%SU$d#m$f$yR$x$cq!XZ]!T!m#S#U#X#q#z$P$Y$i$j$q$v%Sp![Z]!T!m#S#U#X#q#z$P$Y$i$j$q$v%SQ!f^R#l!gT#^!Z#_Q|VR!yqQ!x|R#x!yQ!PWR!{rQ!RXR!|sQxUQ!wpQ#i!cQ#o!jQ#p!kQ${$eR%X$zSgPwQ!phQ#r!nR$l#sZfPhw!n#sa!b[`a!V!^!`#d#eR#b!^R!g^R!i_R#n!iS$e#m$fR%V$yV$c#m$f$yQ!rjR#v!rQdOShPwU!ldh#sR#s!nQ$P#SU$p$P$v%SQ$v$YR%S$qQ#_!ZR$W#_Q$r$PR%T$rQpUS!vp$nR$n#|Q$j#qR%P$jQ!ogS#t!o#uR#u!pQ#f!_R$^#fQ$f#mR$|$fQ$z$eR%W$z_cOPdhw!n#s^UOPdhw!n#sQ!uoQ!}tQ#OuQ#PvQ#|#RR$_#hR$Q#SQ!VZQ!d]Q#V!TQ#q!m[$O#S$P$Y$q$v%SQ$R#UQ$T#XS$h#q$jQ$m#zR%O$iR#}#RQiPR#QwQ!c[Q!kaR#Y!VU!_[a!VQ!j`Q#c!^Q#g!`Q$[#dR$]#e",nodeNames:"⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent ] [ LineNames LineName , PseudoClassName ArgList IdSelector # IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports AtRule Styles",maxTerm:117,nodeProps:[["isolate",-2,3,24,""],["openedBy",17,"(",32,"[",50,"{"],["closedBy",18,")",33,"]",51,"}"]],propSources:[Wg],skippedNodes:[0,3,87],repeatNodeCount:11,tokenData:"J^~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Ab![!]B]!]!^CX!^!_$}!_!`Cj!`!aC{!a!b$}!b!cDw!c!}$}!}#OFa#O#P$}#P#QFr#Q#R6d#R#T$}#T#UGT#U#c$}#c#dHf#d#o$}#o#pH{#p#q6d#q#rI^#r#sIo#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`JW<%lO$}`%QSOy%^z;'S%^;'S;=`%o<%lO%^`%cSo`Oy%^z;'S%^;'S;=`%o<%lO%^`%rP;=`<%l%^~%zh#Z~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#Z~o`OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^l)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^l)sUo`Oy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^l*[Uo`Oy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^l*sUo`Oy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^l+[Uo`Oy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^l+sUo`Oy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^l,[Uo`Oy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^l,sUo`Oy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^l-[Uo`Oy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^l-uS!X[o`Oy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOh~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.Rn/zYxQOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^l0oYo`Oy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^l1dYo`Oy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^l2ZYf[o`Oy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^l3QYf[o`Oy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^l3uYo`Oy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^l4lYf[o`Oy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^l5aYo`Oy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^l6WSf[o`Oy%^z;'S%^;'S;=`%o<%lO%^d6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^d7QS|So`Oy%^z;'S%^;'S;=`%o<%lO%^b7cSXQOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7on9cSb^Oy%^z;'S%^;'S;=`%o<%lO%^~9tOa~n9{UUQjWOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^n:fWjW!RQOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^l;TUo`Oy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^l;nYo`#e[Oy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^l<cYo`Oy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=WUo`Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=qUo`#e[Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l>[[o`#e[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^n?VSt^Oy%^z;'S%^;'S;=`%o<%lO%^l?hWjWOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^n@VU#bQOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTjWOy%^z{@}{;'S%^;'S;=`%o<%lO%^~AUSo`#[~Oy%^z;'S%^;'S;=`%o<%lO%^lAg[#e[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^bBbU]QOy%^z![%^![!]Bt!];'S%^;'S;=`%o<%lO%^bB{S^Qo`Oy%^z;'S%^;'S;=`%o<%lO%^nC^S!Y^Oy%^z;'S%^;'S;=`%o<%lO%^dCoS|SOy%^z;'S%^;'S;=`%o<%lO%^bDQU!OQOy%^z!`%^!`!aDd!a;'S%^;'S;=`%o<%lO%^bDkS!OQo`Oy%^z;'S%^;'S;=`%o<%lO%^bDzWOy%^z!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^bEk[![Qo`Oy%^z}%^}!OEd!O!Q%^!Q![Ed![!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^nFfSq^Oy%^z;'S%^;'S;=`%o<%lO%^nFwSp^Oy%^z;'S%^;'S;=`%o<%lO%^bGWUOy%^z#b%^#b#cGj#c;'S%^;'S;=`%o<%lO%^bGoUo`Oy%^z#W%^#W#XHR#X;'S%^;'S;=`%o<%lO%^bHYS!bQo`Oy%^z;'S%^;'S;=`%o<%lO%^bHiUOy%^z#f%^#f#gHR#g;'S%^;'S;=`%o<%lO%^fIQS!TUOy%^z;'S%^;'S;=`%o<%lO%^nIcS!S^Oy%^z;'S%^;'S;=`%o<%lO%^fItU!RQOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^`JZP;=`<%l$}",tokenizers:[Yg,zg,Xg,1,2,3,4,new Xi("m~RRYZ[z{a~~g~aO#^~~dP!P!Qg~lO#_~~",28,105)],topRules:{StyleSheet:[0,4],Styles:[1,86]},specialized:[{term:100,get:r=>Lg[r]||-1},{term:58,get:r=>Bg[r]||-1},{term:101,get:r=>Vg[r]||-1}],tokenPrec:1200});let Zs=null;function js(){if(!Zs&&typeof document=="object"&&document.body){let{style:r}=document.body,e=[],t=new Set;for(let n in r)n!="cssText"&&n!="cssFloat"&&typeof r[n]=="string"&&(/[A-Z]/.test(n)&&(n=n.replace(/[A-Z]/g,s=>"-"+s.toLowerCase())),t.has(n)||(e.push(n),t.add(n)));Zs=e.sort().map(n=>({type:"property",label:n}))}return Zs||[]}const wc=["active","after","any-link","autofill","backdrop","before","checked","cue","default","defined","disabled","empty","enabled","file-selector-button","first","first-child","first-letter","first-line","first-of-type","focus","focus-visible","focus-within","fullscreen","has","host","host-context","hover","in-range","indeterminate","invalid","is","lang","last-child","last-of-type","left","link","marker","modal","not","nth-child","nth-last-child","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","part","placeholder","placeholder-shown","read-only","read-write","required","right","root","scope","selection","slotted","target","target-text","valid","visited","where"].map(r=>({type:"class",label:r})),yc=["above","absolute","activeborder","additive","activecaption","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","antialiased","appworkspace","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic-abegede-gez","ethiopic-halehame-aa-er","ethiopic-halehame-gez","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","graytext","grid","groove","hand","hard-light","help","hidden","hide","higher","highlight","highlighttext","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","justify","keep-all","landscape","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-hexadecimal","lower-latin","lower-norwegian","lowercase","ltr","luminosity","manipulation","match","matrix","matrix3d","medium","menu","menutext","message-box","middle","min-intrinsic","mix","monospace","move","multiple","multiple_mask_images","multiply","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","opacity","open-quote","optimizeLegibility","optimizeSpeed","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","text","text-bottom","text-top","textarea","textfield","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","to","top","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-latin","uppercase","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"].map(r=>({type:"keyword",label:r})).concat(["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"].map(r=>({type:"constant",label:r}))),qg=["a","abbr","address","article","aside","b","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","dd","del","details","dfn","dialog","div","dl","dt","em","figcaption","figure","footer","form","header","hgroup","h1","h2","h3","h4","h5","h6","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","meter","nav","ol","output","p","pre","ruby","section","select","small","source","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","tr","u","ul"].map(r=>({type:"type",label:r})),Lt=/^(\w[\w-]*|-\w[\w-]*|)$/,Ug=/^-(-[\w-]*)?$/;function _g(r,e){var t;if((r.name=="("||r.type.isError)&&(r=r.parent||r),r.name!="ArgList")return!1;let n=(t=r.parent)===null||t===void 0?void 0:t.firstChild;return(n==null?void 0:n.name)!="Callee"?!1:e.sliceString(n.from,n.to)=="var"}const bc=new Fh,Gg=["Declaration"];function Fg(r){for(let e=r;;){if(e.type.isTop)return e;if(!(e=e.parent))return r}}function bd(r,e,t){if(e.to-e.from>4096){let n=bc.get(e);if(n)return n;let s=[],o=new Set,a=e.cursor(ie.IncludeAnonymous);if(a.firstChild())do for(let l of bd(r,a.node,t))o.has(l.label)||(o.add(l.label),s.push(l));while(a.nextSibling());return bc.set(e,s),s}else{let n=[],s=new Set;return e.cursor().iterate(o=>{var a;if(t(o)&&o.matchContext(Gg)&&((a=o.node.nextSibling)===null||a===void 0?void 0:a.name)==":"){let l=r.sliceString(o.from,o.to);s.has(l)||(s.add(l),n.push({label:l,type:"variable"}))}}),n}}const Jg=r=>e=>{let{state:t,pos:n}=e,s=xe(t).resolveInner(n,-1),o=s.type.isError&&s.from==s.to-1&&t.doc.sliceString(s.from,s.to)=="-";if(s.name=="PropertyName"||(o||s.name=="TagName")&&/^(Block|Styles)$/.test(s.resolve(s.to).name))return{from:s.from,options:js(),validFor:Lt};if(s.name=="ValueName")return{from:s.from,options:yc,validFor:Lt};if(s.name=="PseudoClassName")return{from:s.from,options:wc,validFor:Lt};if(r(s)||(e.explicit||o)&&_g(s,t.doc))return{from:r(s)||o?s.from:n,options:bd(t.doc,Fg(s),r),validFor:Ug};if(s.name=="TagName"){for(let{parent:c}=s;c;c=c.parent)if(c.name=="Block")return{from:s.from,options:js(),validFor:Lt};return{from:s.from,options:qg,validFor:Lt}}if(!e.explicit)return null;let a=s.resolve(n),l=a.childBefore(n);return l&&l.name==":"&&a.name=="PseudoClassSelector"?{from:n,options:wc,validFor:Lt}:l&&l.name==":"&&a.name=="Declaration"||a.name=="ArgList"?{from:n,options:yc,validFor:Lt}:a.name=="Block"||a.name=="Styles"?{from:n,options:js(),validFor:Lt}:null},Hg=Jg(r=>r.name=="VariableName"),Yi=Xn.define({name:"css",parser:Ng.configure({props:[Ki.add({Declaration:mi()}),Oa.add({"Block KeyframeList":od})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"}},indentOnInput:/^\s*\}$/,wordChars:"-"}});function Sd(){return new pa(Yi,Yi.data.of({autocomplete:Hg}))}const Kg=54,e1=1,t1=55,n1=2,r1=56,i1=3,Sc=4,s1=5,zi=6,Cd=7,xd=8,kd=9,Pd=10,o1=11,a1=12,l1=13,Es=57,c1=14,Cc=58,$d=20,u1=22,Qd=23,h1=24,Ao=26,Td=27,d1=28,f1=31,p1=34,m1=36,O1=37,g1=0,v1=1,w1={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},y1={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},xc={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function b1(r){return r==45||r==46||r==58||r>=65&&r<=90||r==95||r>=97&&r<=122||r>=161}function Md(r){return r==9||r==10||r==13||r==32}let kc=null,Pc=null,$c=0;function Zo(r,e){let t=r.pos+e;if($c==t&&Pc==r)return kc;let n=r.peek(e);for(;Md(n);)n=r.peek(++e);let s="";for(;b1(n);)s+=String.fromCharCode(n),n=r.peek(++e);return Pc=r,$c=t,kc=s?s.toLowerCase():n==S1||n==C1?void 0:null}const Rd=60,Wi=62,ba=47,S1=63,C1=33,x1=45;function Qc(r,e){this.name=r,this.parent=e}const k1=[zi,Pd,Cd,xd,kd],P1=new gd({start:null,shift(r,e,t,n){return k1.indexOf(e)>-1?new Qc(Zo(n,1)||"",r):r},reduce(r,e){return e==$d&&r?r.parent:r},reuse(r,e,t,n){let s=e.type.id;return s==zi||s==m1?new Qc(Zo(n,1)||"",r):r},strict:!1}),$1=new pt((r,e)=>{if(r.next!=Rd){r.next<0&&e.context&&r.acceptToken(Es);return}r.advance();let t=r.next==ba;t&&r.advance();let n=Zo(r,0);if(n===void 0)return;if(!n)return r.acceptToken(t?c1:zi);let s=e.context?e.context.name:null;if(t){if(n==s)return r.acceptToken(o1);if(s&&y1[s])return r.acceptToken(Es,-2);if(e.dialectEnabled(g1))return r.acceptToken(a1);for(let o=e.context;o;o=o.parent)if(o.name==n)return;r.acceptToken(l1)}else{if(n=="script")return r.acceptToken(Cd);if(n=="style")return r.acceptToken(xd);if(n=="textarea")return r.acceptToken(kd);if(w1.hasOwnProperty(n))return r.acceptToken(Pd);s&&xc[s]&&xc[s][n]?r.acceptToken(Es,-1):r.acceptToken(zi)}},{contextual:!0}),Q1=new pt(r=>{for(let e=0,t=0;;t++){if(r.next<0){t&&r.acceptToken(Cc);break}if(r.next==x1)e++;else if(r.next==Wi&&e>=2){t>=3&&r.acceptToken(Cc,-2);break}else e=0;r.advance()}});function T1(r){for(;r;r=r.parent)if(r.name=="svg"||r.name=="math")return!0;return!1}const M1=new pt((r,e)=>{if(r.next==ba&&r.peek(1)==Wi){let t=e.dialectEnabled(v1)||T1(e.context);r.acceptToken(t?s1:Sc,2)}else r.next==Wi&&r.acceptToken(Sc,1)});function Sa(r,e,t){let n=2+r.length;return new pt(s=>{for(let o=0,a=0,l=0;;l++){if(s.next<0){l&&s.acceptToken(e);break}if(o==0&&s.next==Rd||o==1&&s.next==ba||o>=2&&o<n&&s.next==r.charCodeAt(o-2))o++,a++;else if((o==2||o==n)&&Md(s.next))a++;else if(o==n&&s.next==Wi){l>a?s.acceptToken(e,-a):s.acceptToken(t,-(a-2));break}else if((s.next==10||s.next==13)&&l){s.acceptToken(e,1);break}else o=a=0;s.advance()}})}const R1=Sa("script",Kg,e1),A1=Sa("style",t1,n1),Z1=Sa("textarea",r1,i1),j1=Fi({"Text RawText":S.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":S.angleBracket,TagName:S.tagName,"MismatchedCloseTag/TagName":[S.tagName,S.invalid],AttributeName:S.attributeName,"AttributeValue UnquotedAttributeValue":S.attributeValue,Is:S.definitionOperator,"EntityReference CharacterReference":S.character,Comment:S.blockComment,ProcessingInst:S.processingInstruction,DoctypeDecl:S.documentMeta}),E1=Wn.deserialize({version:14,states:",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",stateData:",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",goto:"%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:P1,nodeProps:[["closedBy",-10,1,2,3,7,8,9,10,11,12,13,"EndTag",6,"EndTag SelfClosingEndTag",-4,21,30,33,36,"CloseTag"],["openedBy",4,"StartTag StartCloseTag",5,"StartTag",-4,29,32,35,37,"OpenTag"],["group",-9,14,17,18,19,20,39,40,41,42,"Entity",16,"Entity TextContent",-3,28,31,34,"TextContent Entity"],["isolate",-11,21,29,30,32,33,35,36,37,38,41,42,"ltr",-3,26,27,39,""]],propSources:[j1],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[R1,A1,Z1,M1,$1,Q1,0,1,2,3,4,5],topRules:{Document:[0,15]},dialects:{noMatch:0,selfClosing:509},tokenPrec:511});function Ad(r,e){let t=Object.create(null);for(let n of r.getChildren(Qd)){let s=n.getChild(h1),o=n.getChild(Ao)||n.getChild(Td);s&&(t[e.read(s.from,s.to)]=o?o.type.id==Ao?e.read(o.from+1,o.to-1):e.read(o.from,o.to):"")}return t}function Tc(r,e){let t=r.getChild(u1);return t?e.read(t.from,t.to):" "}function Is(r,e,t){let n;for(let s of t)if(!s.attrs||s.attrs(n||(n=Ad(r.node.parent.firstChild,e))))return{parser:s.parser};return null}function Zd(r=[],e=[]){let t=[],n=[],s=[],o=[];for(let l of r)(l.tag=="script"?t:l.tag=="style"?n:l.tag=="textarea"?s:o).push(l);let a=e.length?Object.create(null):null;for(let l of e)(a[l.name]||(a[l.name]=[])).push(l);return iO((l,c)=>{let u=l.type.id;if(u==d1)return Is(l,c,t);if(u==f1)return Is(l,c,n);if(u==p1)return Is(l,c,s);if(u==$d&&o.length){let h=l.node,d=h.firstChild,f=d&&Tc(d,c),p;if(f){for(let m of o)if(m.tag==f&&(!m.attrs||m.attrs(p||(p=Ad(d,c))))){let O=h.lastChild,v=O.type.id==O1?O.from:h.to;if(v>d.to)return{parser:m.parser,overlay:[{from:d.to,to:v}]}}}}if(a&&u==Qd){let h=l.node,d;if(d=h.firstChild){let f=a[c.read(d.from,d.to)];if(f)for(let p of f){if(p.tagName&&p.tagName!=Tc(h.parent,c))continue;let m=h.lastChild;if(m.type.id==Ao){let O=m.from+1,v=m.lastChild,w=m.to-(v&&v.isError?0:1);if(w>O)return{parser:p.parser,overlay:[{from:O,to:w}]}}else if(m.type.id==Td)return{parser:p.parser,overlay:[{from:m.from,to:m.to}]}}}}return null})}const I1=312,Mc=1,D1=2,X1=3,Y1=4,z1=313,W1=315,L1=316,B1=5,V1=6,N1=0,jo=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],jd=125,q1=59,Eo=47,U1=42,_1=43,G1=45,F1=60,J1=44,H1=63,K1=46,e2=new gd({start:!1,shift(r,e){return e==B1||e==V1||e==W1?r:e==L1},strict:!1}),t2=new pt((r,e)=>{let{next:t}=r;(t==jd||t==-1||e.context)&&r.acceptToken(z1)},{contextual:!0,fallback:!0}),n2=new pt((r,e)=>{let{next:t}=r,n;jo.indexOf(t)>-1||t==Eo&&((n=r.peek(1))==Eo||n==U1)||t!=jd&&t!=q1&&t!=-1&&!e.context&&r.acceptToken(I1)},{contextual:!0}),r2=new pt((r,e)=>{let{next:t}=r;if(t==_1||t==G1){if(r.advance(),t==r.next){r.advance();let n=!e.context&&e.canShift(Mc);r.acceptToken(n?Mc:D1)}}else t==H1&&r.peek(1)==K1&&(r.advance(),r.advance(),(r.next<48||r.next>57)&&r.acceptToken(X1))},{contextual:!0});function Ds(r,e){return r>=65&&r<=90||r>=97&&r<=122||r==95||r>=192||!e&&r>=48&&r<=57}const i2=new pt((r,e)=>{if(r.next!=F1||!e.dialectEnabled(N1)||(r.advance(),r.next==Eo))return;let t=0;for(;jo.indexOf(r.next)>-1;)r.advance(),t++;if(Ds(r.next,!0)){for(r.advance(),t++;Ds(r.next,!1);)r.advance(),t++;for(;jo.indexOf(r.next)>-1;)r.advance(),t++;if(r.next==J1)return;for(let n=0;;n++){if(n==7){if(!Ds(r.next,!0))return;break}if(r.next!="extends".charCodeAt(n))break;r.advance(),t++}}r.acceptToken(Y1,-t)}),s2=Fi({"get set async static":S.modifier,"for while do if else switch try catch finally return throw break continue default case":S.controlKeyword,"in of await yield void typeof delete instanceof":S.operatorKeyword,"let var const using function class extends":S.definitionKeyword,"import export from":S.moduleKeyword,"with debugger as new":S.keyword,TemplateString:S.special(S.string),super:S.atom,BooleanLiteral:S.bool,this:S.self,null:S.null,Star:S.modifier,VariableName:S.variableName,"CallExpression/VariableName TaggedTemplateExpression/VariableName":S.function(S.variableName),VariableDefinition:S.definition(S.variableName),Label:S.labelName,PropertyName:S.propertyName,PrivatePropertyName:S.special(S.propertyName),"CallExpression/MemberExpression/PropertyName":S.function(S.propertyName),"FunctionDeclaration/VariableDefinition":S.function(S.definition(S.variableName)),"ClassDeclaration/VariableDefinition":S.definition(S.className),PropertyDefinition:S.definition(S.propertyName),PrivatePropertyDefinition:S.definition(S.special(S.propertyName)),UpdateOp:S.updateOperator,"LineComment Hashbang":S.lineComment,BlockComment:S.blockComment,Number:S.number,String:S.string,Escape:S.escape,ArithOp:S.arithmeticOperator,LogicOp:S.logicOperator,BitOp:S.bitwiseOperator,CompareOp:S.compareOperator,RegExp:S.regexp,Equals:S.definitionOperator,Arrow:S.function(S.punctuation),": Spread":S.punctuation,"( )":S.paren,"[ ]":S.squareBracket,"{ }":S.brace,"InterpolationStart InterpolationEnd":S.special(S.brace),".":S.derefOperator,", ;":S.separator,"@":S.meta,TypeName:S.typeName,TypeDefinition:S.definition(S.typeName),"type enum interface implements namespace module declare":S.definitionKeyword,"abstract global Privacy readonly override":S.modifier,"is keyof unique infer":S.operatorKeyword,JSXAttributeValue:S.attributeValue,JSXText:S.content,"JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag":S.angleBracket,"JSXIdentifier JSXNameSpacedName":S.tagName,"JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName":S.attributeName,"JSXBuiltin/JSXIdentifier":S.standard(S.tagName)}),o2={__proto__:null,export:20,as:25,from:33,default:36,async:41,function:42,extends:54,this:58,true:66,false:66,null:78,void:82,typeof:86,super:102,new:136,delete:148,yield:157,await:161,class:166,public:229,private:229,protected:229,readonly:231,instanceof:250,satisfies:253,in:254,const:256,import:290,keyof:345,unique:349,infer:355,is:391,abstract:411,implements:413,type:415,let:418,var:420,using:423,interface:429,enum:433,namespace:439,module:441,declare:445,global:449,for:468,of:477,while:480,with:484,do:488,if:492,else:494,switch:498,case:504,try:510,catch:514,finally:518,return:522,throw:526,break:530,continue:534,debugger:538},a2={__proto__:null,async:123,get:125,set:127,declare:189,public:191,private:191,protected:191,static:193,abstract:195,override:197,readonly:203,accessor:205,new:395},l2={__proto__:null,"<":187},c2=Wn.deserialize({version:14,states:"$@QO%TQ^OOO%[Q^OOO'_Q`OOP(lOWOOO*zQ?NdO'#CiO+RO!bO'#CjO+aO#tO'#CjO+oO!0LbO'#D^O.QQ^O'#DdO.bQ^O'#DoO%[Q^O'#DwO0fQ^O'#EPOOQ?Mr'#EX'#EXO1PQWO'#EUOOQO'#Em'#EmOOQO'#Ih'#IhO1XQWO'#GpO1dQWO'#ElO1iQWO'#ElO3hQ?NdO'#JmO6[Q?NdO'#JnO6uQWO'#F[O6zQ&jO'#FsOOQ?Mr'#Fe'#FeO7VO,YO'#FeO7eQ7[O'#FzO9RQWO'#FyOOQ?Mr'#Jn'#JnOOQ?Mp'#Jm'#JmO9WQWO'#GtOOQU'#KZ'#KZO9cQWO'#IUO9hQ?MxO'#IVOOQU'#JZ'#JZOOQU'#IZ'#IZQ`Q^OOO`Q^OOO9pQMnO'#DsO9wQ^O'#D{O:OQ^O'#D}O9^QWO'#GpO:VQ7[O'#CoO:eQWO'#EkO:pQWO'#EvO:uQ7[O'#FdO;dQWO'#GpOOQO'#K['#K[O;iQWO'#K[O;wQWO'#GxO;wQWO'#GyO;wQWO'#G{O9^QWO'#HOO<nQWO'#HRO>VQWO'#CeO>gQWO'#H_O>oQWO'#HeO>oQWO'#HgO`Q^O'#HiO>oQWO'#HkO>oQWO'#HnO>tQWO'#HtO>yQ?MyO'#HzO%[Q^O'#H|O?UQ?MyO'#IOO?aQ?MyO'#IQO9hQ?MxO'#ISO?lQ?NdO'#CiO@nQ`O'#DiQOQWOOO%[Q^O'#D}OAUQWO'#EQO:VQ7[O'#EkOAaQWO'#EkOAlQpO'#FdOOQU'#Cg'#CgOOQ?Mp'#Dn'#DnOOQ?Mp'#Jq'#JqO%[Q^O'#JqOOQO'#Jt'#JtOOQO'#Id'#IdOBlQ`O'#EdOOQ?Mp'#Ec'#EcOOQ?Mp'#Jx'#JxOChQ?NQO'#EdOCrQ`O'#ETOOQO'#Js'#JsODWQ`O'#JtOEeQ`O'#ETOCrQ`O'#EdPErO#@ItO'#CbPOOO)CDx)CDxOOOO'#I['#I[OE}O!bO,59UOOQ?Mr,59U,59UOOOO'#I]'#I]OF]O#tO,59UO%[Q^O'#D`OOOO'#I_'#I_OFkO!0LbO,59xOOQ?Mr,59x,59xOFyQ^O'#I`OG^QWO'#JoOI]QrO'#JoO+}Q^O'#JoOIdQWO,5:OOIzQWO'#EmOJXQWO'#KOOJdQWO'#J}OJdQWO'#J}OJlQWO,5;ZOJqQWO'#J|OOQ?Mv,5:Z,5:ZOJxQ^O,5:ZOLvQ?NdO,5:cOMgQWO,5:kONQQ?MxO'#J{ONXQWO'#JzO9WQWO'#JzONmQWO'#JzONuQWO,5;YONzQWO'#JzO!#PQrO'#JnOOQ?Mr'#Ci'#CiO%[Q^O'#EPO!#oQrO,5:pOOQQ'#Ju'#JuOOQO-E<f-E<fO9^QWO,5=[O!$VQWO,5=[O!$[Q^O,5;WO!&_Q7[O'#EhO!'xQWO,5;WO!'}Q^O'#DvO!(XQ`O,5;aO!(aQ`O,5;aO%[Q^O,5;aOOQU'#FS'#FSOOQU'#FU'#FUO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bOOQU'#FY'#FYO!(oQ^O,5;sOOQ?Mr,5;x,5;xOOQ?Mr,5;y,5;yOOQ?Mr,5;{,5;{O%[Q^O'#IlO!*rQ?MxO,5<gO%[Q^O,5;bO!&_Q7[O,5;bO!+aQ7[O,5;bO!-RQ7[O'#EZO%[Q^O,5;vOOQ?Mr,5;z,5;zO!-YQ&jO'#FiO!.VQ&jO'#KSO!-qQ&jO'#KSO!.^Q&jO'#KSOOQO'#KS'#KSO!.rQ&jO,5<ROOOS,5<_,5<_O!/TQ^O'#FuOOOS'#Ik'#IkO7VO,YO,5<PO!/[Q&jO'#FwOOQ?Mr,5<P,5<PO!/{Q!LQO'#CvOOQ?Mr'#Cz'#CzO!0`O!0LbO'#DOO!0|Q7[O,5<dO!1TQWO,5<fO!2pQ$ISO'#GVO!2}QWO'#GWO!3SQWO'#GWO!4rQ$ISO'#G[O!5nQ`O'#G`OOQO'#Gk'#GkO!+hQ7[O'#GjOOQO'#Gm'#GmO!+hQ7[O'#GlO!6aQ!LQO'#JgOOQ?Mr'#Jg'#JgO!6kQWO'#JfO!6yQWO'#JeO!7RQWO'#CuOOQ?Mr'#Cx'#CxO!7ZQWO'#CzOOQ?Mr'#DS'#DSOOQ?Mr'#DU'#DUO1SQWO'#DWO!+hQ7[O'#F}O!+hQ7[O'#GPO!7`QWO'#GRO!7eQWO'#GSO!3SQWO'#GYO!+hQ7[O'#G_O!7jQWO'#EnO!8XQWO,5<eOOQ?Mp'#Cr'#CrO!8aQWO'#EoO!9ZQ`O'#EpOOQ?Mp'#J|'#J|O!9bQ?MxO'#K]O9hQ?MxO,5=`O`Q^O,5>pOOQU'#Jc'#JcOOQU,5>q,5>qOOQU-E<X-E<XO!;aQ?NdO,5:_O!9UQ`O,5:]O!=zQ?NdO,5:gO%[Q^O,5:gO!@bQ?NdO,5:iOOQO,5@v,5@vO!ARQ7[O,5=[O!AaQ?MxO'#JdO9RQWO'#JdO!ArQ?MxO,59ZO!A}Q`O,59ZO!BVQ7[O,59ZO:VQ7[O,59ZO!BbQWO,5;WO!BjQWO'#H^O!COQWO'#K`O%[Q^O,5;|O!9UQ`O,5<OO!CWQWO,5=wO!C]QWO,5=wO!CbQWO,5=wO9hQ?MxO,5=wO;wQWO,5=gOOQO'#Cv'#CvO!CpQ`O,5=dO!CxQ7[O,5=eO!DTQWO,5=gO!DYQpO,5=jO!DbQWO'#K[O>tQWO'#HTO9^QWO'#HVO!DgQWO'#HVO:VQ7[O'#HXO!DlQWO'#HXOOQU,5=m,5=mO!DqQWO'#HYO!ESQWO'#CoO!EXQWO,59PO!EcQWO,59PO!GhQ^O,59POOQU,59P,59PO!GxQ?MxO,59PO%[Q^O,59PO!JTQ^O'#HaOOQU'#Hb'#HbOOQU'#Hc'#HcO`Q^O,5=yO!JkQWO,5=yO`Q^O,5>PO`Q^O,5>RO!JpQWO,5>TO`Q^O,5>VO!JuQWO,5>YO!JzQ^O,5>`OOQU,5>f,5>fO%[Q^O,5>fO9hQ?MxO,5>hOOQU,5>j,5>jO# UQWO,5>jOOQU,5>l,5>lO# UQWO,5>lOOQU,5>n,5>nO# rQ`O'#D[O%[Q^O'#JqO# |Q`O'#JqO#!kQ`O'#DjO#!|Q`O'#DjO#%_Q^O'#DjO#%fQWO'#JpO#%nQWO,5:TO#%sQWO'#EqO#&RQWO'#KPO#&ZQWO,5;[O#&`Q`O'#DjO#&mQ`O'#ESOOQ?Mr,5:l,5:lO%[Q^O,5:lO#&tQWO,5:lO>tQWO,5;VO!A}Q`O,5;VO!BVQ7[O,5;VO:VQ7[O,5;VO#&|QWO,5@]O#'RQ(CYO,5:pOOQO-E<b-E<bO#(XQ?NQO,5;OOCrQ`O,5:oO#(cQ`O,5:oOCrQ`O,5;OO!ArQ?MxO,5:oOOQ?Mp'#Eg'#EgOOQO,5;O,5;OO%[Q^O,5;OO#(pQ?MxO,5;OO#({Q?MxO,5;OO!A}Q`O,5:oOOQO,5;U,5;UO#)ZQ?MxO,5;OPOOO'#IY'#IYP#)oO#@ItO,58|POOO,58|,58|OOOO-E<Y-E<YOOQ?Mr1G.p1G.pOOOO-E<Z-E<ZO#)zQpO,59zOOOO-E<]-E<]OOQ?Mr1G/d1G/dO#*PQrO,5>zO+}Q^O,5>zOOQO,5?Q,5?QO#*ZQ^O'#I`OOQO-E<^-E<^O#*hQWO,5@ZO#*pQrO,5@ZO#*wQWO,5@iOOQ?Mr1G/j1G/jO%[Q^O,5@jO#+PQWO'#IfOOQO-E<d-E<dO#*wQWO,5@iOOQ?Mp1G0u1G0uOOQ?Mv1G/u1G/uOOQ?Mv1G0V1G0VO%[Q^O,5@gO#+eQ?MxO,5@gO#+vQ?MxO,5@gO#+}QWO,5@fO9WQWO,5@fO#,VQWO,5@fO#,eQWO'#IiO#+}QWO,5@fOOQ?Mp1G0t1G0tO!(XQ`O,5:rO!(dQ`O,5:rOOQQ,5:t,5:tO#-VQYO,5:tO#-_Q7[O1G2vO9^QWO1G2vOOQ?Mr1G0r1G0rO#-mQ?NdO1G0rO#.rQ?NbO,5;SOOQ?Mr'#GU'#GUO#/`Q?NdO'#JgO!$[Q^O1G0rO#1hQrO'#JrO%[Q^O'#JrO#1rQWO,5:bOOQ?Mr'#D['#D[OOQ?Mr1G0{1G0{O%[Q^O1G0{OOQ?Mr1G1e1G1eO#1wQWO1G0{O#4]Q?NdO1G0|O#4dQ?NdO1G0|O#6zQ?NdO1G0|O#7RQ?NdO1G0|O#9iQ?NdO1G0|O#<PQ?NdO1G0|O#<WQ?NdO1G0|O#<_Q?NdO1G0|O#>uQ?NdO1G0|O#>|Q?NdO1G0|O#AZQ07bO'#CiO#CUQ07bO1G1_O#C]Q07bO'#JnO#CpQ?NdO,5?WOOQ?Mp-E<j-E<jO#E}Q?NdO1G0|O#FzQ?NdO1G0|OOQ?Mr1G0|1G0|O#GzQ7[O'#JwO#HUQWO,5:uO#HZQ?NdO1G1bO#H}Q&jO,5<VO#IVQ&jO,5<WO#I_Q&jO'#FnO#IvQWO'#FmOOQO'#KT'#KTOOQO'#Ij'#IjO#I{Q&jO1G1mOOQ?Mr1G1m1G1mOOOS1G1x1G1xO#J^Q07bO'#JmO#JhQWO,5<aO!(oQ^O,5<aOOOS-E<i-E<iOOQ?Mr1G1k1G1kO#JmQ`O'#KSOOQ?Mr,5<c,5<cO#JuQ`O,5<cO!&_Q7[O'#DQOOOO'#I^'#I^O#JzO!0LbO,59jOOQ?Mr,59j,59jO%[Q^O1G2OO!7eQWO'#InO#KVQ7[O,5<xOOQ?Mr,5<u,5<uO!+hQ7[O'#IqO#KuQ7[O,5=UO!+hQ7[O'#IsO#LhQ7[O,5=WO!&_Q7[O,5=YOOQO1G2Q1G2QO#LrQpO'#CrO#MVQ$ISO'#EoO#NUQ`O'#G`O#NrQpO,5<qO#NyQWO'#KWO9WQWO'#KWO$ XQWO,5<sO!+hQ7[O,5<rO$ ^QWO'#GXO$ oQWO,5<rO$ tQpO'#GUO$!RQpO'#KXO$!]QWO'#KXO!&_Q7[O'#KXO$!bQWO,5<vO$!gQ`O'#GaO!5iQ`O'#GaO$!xQWO'#GcO$!}QWO'#GeO!3SQWO'#GhO$#SQ?MxO'#IpO$#_Q`O,5<zOOQ?Mv,5<z,5<zO$#fQ`O'#GaO$#tQ`O'#GbO$#|Q`O'#GbO$$RQ7[O,5=UO$$cQ7[O,5=WOOQ?Mr,5=Z,5=ZO!+hQ7[O,5@QO!+hQ7[O,5@QO$$sQWO'#IuO$%OQWO,5@PO$%WQWO,59aOOQ?Mr,59f,59fO$%zQ!LSO,59rOOQ?Mr'#Jk'#JkO$&mQ7[O,5<iO$'`Q7[O,5<kO@fQWO,5<mOOQ?Mr,5<n,5<nO$'jQWO,5<tO$'oQ7[O,5<yO$(PQWO'#JzO!$[Q^O1G2PO$(UQWO1G2PO9WQWO'#J}O9WQWO'#EqO%[Q^O'#EqO9WQWO'#IwO$(ZQ?MxO,5@wOOQU1G2z1G2zOOQU1G4[1G4[OOQ?Mr1G/y1G/yOOQ?Mr1G/w1G/wO$*]Q?NdO1G0ROOQU1G2v1G2vO!&_Q7[O1G2vO%[Q^O1G2vO#-bQWO1G2vO$,aQ7[O'#EhOOQ?Mp,5@O,5@OO$,kQ?MxO,5@OOOQU1G.u1G.uO!ArQ?MxO1G.uO!A}Q`O1G.uO!BVQ7[O1G.uO$,|QWO1G0rO$-RQWO'#CiO$-^QWO'#KaO$-fQWO,5=xO$-kQWO'#KaO$-pQWO'#KaO$.OQWO'#I}O$.^QWO,5@zO$.fQrO1G1hOOQ?Mr1G1j1G1jO9^QWO1G3cO@fQWO1G3cO$.mQWO1G3cO$.rQWO1G3cOOQU1G3c1G3cO!DTQWO1G3RO!&_Q7[O1G3OO$.wQWO1G3OOOQU1G3P1G3PO!&_Q7[O1G3PO$.|QWO1G3PO$/UQ`O'#G}OOQU1G3R1G3RO!5iQ`O'#IyO!DYQpO1G3UOOQU1G3U1G3UOOQU,5=o,5=oO$/^Q7[O,5=qO9^QWO,5=qO$!}QWO,5=sO9RQWO,5=sO!A}Q`O,5=sO!BVQ7[O,5=sO:VQ7[O,5=sO$/lQWO'#K_O$/wQWO,5=tOOQU1G.k1G.kO$/|Q?MxO1G.kO@fQWO1G.kO$0XQWO1G.kO9hQ?MxO1G.kO$2aQrO,5@|O$2nQWO,5@|O9WQWO,5@|O$2yQ^O,5={O$3QQWO,5={OOQU1G3e1G3eO`Q^O1G3eOOQU1G3k1G3kOOQU1G3m1G3mO>oQWO1G3oO$3VQ^O1G3qO$7ZQ^O'#HpOOQU1G3t1G3tO$7hQWO'#HvO>tQWO'#HxOOQU1G3z1G3zO$7pQ^O1G3zO9hQ?MxO1G4QOOQU1G4S1G4SOOQ?Mp'#G]'#G]O9hQ?MxO1G4UO9hQ?MxO1G4WO$;wQWO,5@]O!(oQ^O,5;]O9WQWO,5;]O>tQWO,5:UO!(oQ^O,5:UO!A}Q`O,5:UO$;|Q07bO,5:UOOQO,5;],5;]O$<WQ`O'#IaO$<nQWO,5@[OOQ?Mr1G/o1G/oO$<vQ`O'#IgO$=QQWO,5@kOOQ?Mp1G0v1G0vO#!|Q`O,5:UOOQO'#Ic'#IcO$=YQ`O,5:nOOQ?Mv,5:n,5:nO#&wQWO1G0WOOQ?Mr1G0W1G0WO%[Q^O1G0WOOQ?Mr1G0q1G0qO>tQWO1G0qO!A}Q`O1G0qO!BVQ7[O1G0qOOQ?Mp1G5w1G5wO!ArQ?MxO1G0ZOOQO1G0j1G0jO%[Q^O1G0jO$=aQ?MxO1G0jO$=lQ?MxO1G0jO!A}Q`O1G0ZOCrQ`O1G0ZO$=zQ?MxO1G0jOOQO1G0Z1G0ZO$>`Q?NdO1G0jPOOO-E<W-E<WPOOO1G.h1G.hOOOO1G/f1G/fO$>jQpO,5<gO$>rQrO1G4fOOQO1G4l1G4lO%[Q^O,5>zO$>|QWO1G5uO$?UQWO1G6TO$?^QrO1G6UO9WQWO,5?QO$?hQ?NdO1G6RO%[Q^O1G6RO$?xQ?MxO1G6RO$@ZQWO1G6QO$@ZQWO1G6QO9WQWO1G6QO$@cQWO,5?TO9WQWO,5?TOOQO,5?T,5?TO$@wQWO,5?TO$(PQWO,5?TOOQO-E<g-E<gOOQQ1G0^1G0^OOQQ1G0`1G0`O#-YQWO1G0`OOQU7+(b7+(bO!&_Q7[O7+(bO%[Q^O7+(bO$AVQWO7+(bO$AbQ7[O7+(bO$ApQ?NdO,5=UO$CxQ?NdO,5=WO$FQQ?NdO,5=UO$H`Q?NdO,5=WO$JnQ?NdO,59rO$LsQ?NdO,5<iO$N{Q?NdO,5<kO%#TQ?NdO,5<yOOQ?Mr7+&^7+&^O%%cQ?NdO7+&^O%&VQ^O'#IbO%&dQWO,5@^O%&lQrO,5@^OOQ?Mr1G/|1G/|O%&vQWO7+&gOOQ?Mr7+&g7+&gO%&{Q07bO,5:cO%[Q^O7+&yO%'VQ07bO,5:_O%'dQ07bO,5:gO%'nQ07bO,5:iO%'xQ7[O'#IeO%(SQWO,5@cOOQ?Mr1G0a1G0aOOQO1G1q1G1qOOQO1G1r1G1rO%([QtO,5<YO!(oQ^O,5<XOOQO-E<h-E<hOOQ?Mr7+'X7+'XOOOS7+'d7+'dOOOS1G1{1G1{O%(gQWO1G1{OOQ?Mr1G1}1G1}O%(lQpO,59lOOOO-E<[-E<[OOQ?Mr1G/U1G/UO%(sQ?NdO7+'jOOQ?Mr,5?Y,5?YO%)gQpO,5?YOOQ?Mr1G2d1G2dP!&_Q7[O'#InPOQ?Mr-E<l-E<lO%*VQ7[O,5?]OOQ?Mr-E<o-E<oO%*xQ7[O,5?_OOQ?Mr-E<q-E<qO%+SQpO1G2tO%+ZQpO'#CrO%+qQ7[O'#J}O%+xQ^O'#EqOOQ?Mr1G2]1G2]O%,SQWO'#ImO%,hQWO,5@rO%,hQWO,5@rO%,pQWO,5@rO%,{QWO,5@rOOQO1G2_1G2_O%-ZQ7[O1G2^O!+hQ7[O1G2^O%-kQ$ISO'#IoO%-xQWO,5@sO!&_Q7[O,5@sO%.QQpO,5@sOOQ?Mr1G2b1G2bOOQ?Mp,5<{,5<{OOQ?Mp,5<|,5<|O$(PQWO,5<|OCcQWO,5<|O!A}Q`O,5<{OOQO'#Gd'#GdO%.[QWO,5<}OOQ?Mp,5=P,5=PO$(PQWO,5=SOOQO,5?[,5?[OOQO-E<n-E<nOOQ?Mv1G2f1G2fO!5iQ`O,5<{O%.dQWO,5<|O$!xQWO,5<}O%.oQ`O,5<|O!+hQ7[O'#IqO%/`Q7[O1G2pO!+hQ7[O'#IsO%0RQ7[O1G2rO%0]Q7[O1G5lO%0gQ7[O1G5lOOQO,5?a,5?aOOQO-E<s-E<sOOQO1G.{1G.{O!9UQ`O,59tO%[Q^O,59tOOQ?Mr,5<h,5<hO%0tQWO1G2XO!+hQ7[O1G2`O%0yQ?NdO7+'kOOQ?Mr7+'k7+'kO!$[Q^O7+'kO%1mQWO,5;]OOQ?Mp,5?c,5?cOOQ?Mp-E<u-E<uO%1rQpO'#KYO#&wQWO7+(bO4UQrO7+(bO$AYQWO7+(bO%1|Q?NbO'#CiO%2aQ?NbO,5=QO%3RQWO,5=QOOQ?Mp1G5j1G5jOOQU7+$a7+$aO!ArQ?MxO7+$aO!A}Q`O7+$aO!$[Q^O7+&^O%3WQWO'#I|O%3oQWO,5@{OOQO1G3d1G3dO9^QWO,5@{O%3oQWO,5@{O%3wQWO,5@{OOQO,5?i,5?iOOQO-E<{-E<{OOQ?Mr7+'S7+'SO%3|QWO7+(}O9hQ?MxO7+(}O9^QWO7+(}O@fQWO7+(}OOQU7+(m7+(mO%4RQ?NbO7+(jO!&_Q7[O7+(jO%4]QpO7+(kOOQU7+(k7+(kO!&_Q7[O7+(kO%4dQWO'#K^O%4oQWO,5=iOOQO,5?e,5?eOOQO-E<w-E<wOOQU7+(p7+(pO%6RQ`O'#HWOOQU1G3]1G3]O!&_Q7[O1G3]O%[Q^O1G3]O%6YQWO1G3]O%6eQ7[O1G3]O9hQ?MxO1G3_O$!}QWO1G3_O9RQWO1G3_O!A}Q`O1G3_O!BVQ7[O1G3_O%6sQWO'#I{O%7XQWO,5@yO%7aQ`O,5@yOOQ?Mp1G3`1G3`OOQU7+$V7+$VO@fQWO7+$VO9hQ?MxO7+$VO%7lQWO7+$VO%[Q^O1G6hO%[Q^O1G6iO%7qQ?MxO1G6hO%7{Q^O1G3gO%8SQWO1G3gO%8XQ^O1G3gOOQU7+)P7+)PO9hQ?MxO7+)ZO`Q^O7+)]OOQU'#Kd'#KdOOQU'#JO'#JOO%8`Q^O,5>[OOQU,5>[,5>[O%[Q^O'#HqO%8mQWO'#HsOOQU,5>b,5>bO9WQWO,5>bOOQU,5>d,5>dOOQU7+)f7+)fOOQU7+)l7+)lOOQU7+)p7+)pOOQU7+)r7+)rO%8rQ`O1G5wO%9WQ07bO1G0wO%9bQWO1G0wOOQO1G/p1G/pO%9mQ07bO1G/pO>tQWO1G/pO!(oQ^O'#DjOOQO,5>{,5>{OOQO-E<_-E<_OOQO,5?R,5?ROOQO-E<e-E<eO!A}Q`O1G/pOOQO-E<a-E<aOOQ?Mv1G0Y1G0YOOQ?Mr7+%r7+%rO#&wQWO7+%rOOQ?Mr7+&]7+&]O>tQWO7+&]O!A}Q`O7+&]OOQO7+%u7+%uO$>`Q?NdO7+&UOOQO7+&U7+&UO%[Q^O7+&UO%9wQ?MxO7+&UO!ArQ?MxO7+%uO!A}Q`O7+%uO%:SQ?MxO7+&UO%:bQ?NdO7++mO%[Q^O7++mO%:rQWO7++lO%:rQWO7++lOOQO1G4o1G4oO9WQWO1G4oO%:zQWO1G4oOOQQ7+%z7+%zO#&wQWO<<K|O4UQrO<<K|O%;YQWO<<K|OOQU<<K|<<K|O!&_Q7[O<<K|O%[Q^O<<K|O%;bQWO<<K|O%;mQ?NdO,5?]O%=uQ?NdO,5?_O%?}Q?NdO1G2^O%B]Q?NdO1G2pO%DeQ?NdO1G2rO%FmQrO,5>|O%[Q^O,5>|OOQO-E<`-E<`O%FwQWO1G5xOOQ?Mr<<JR<<JRO%GPQ07bO1G0rO%IWQ07bO1G0|O%I_Q07bO1G0|O%K`Q07bO1G0|O%KgQ07bO1G0|O%MhQ07bO1G0|O& iQ07bO1G0|O& pQ07bO1G0|O& wQ07bO1G0|O&#xQ07bO1G0|O&$PQ07bO1G0|O&$WQ?NdO<<JeO&&OQ07bO1G0|O&&{Q07bO1G0|O&'{Q07bO'#JgO&*OQ07bO1G1bO&*]Q07bO1G0RO&*gQ7[O,5?POOQO-E<c-E<cO!(oQ^O'#FpOOQO'#KU'#KUOOQO1G1t1G1tO&*qQWO1G1sO&*vQ07bO,5?WOOOS7+'g7+'gOOOO1G/W1G/WOOQ?Mr1G4t1G4tO!+hQ7[O7+(`O&-WQrO'#CiO&-bQWO,5?XO9WQWO,5?XOOQO-E<k-E<kO&-pQWO1G6^O&-pQWO1G6^O&-xQWO1G6^O&.TQ7[O7+'xO&.eQpO,5?ZO&.oQWO,5?ZO!&_Q7[O,5?ZOOQO-E<m-E<mO&.tQpO1G6_O&/OQWO1G6_OOQ?Mp1G2h1G2hO$(PQWO1G2hOOQ?Mp1G2g1G2gO&/WQWO1G2iO!&_Q7[O1G2iOOQ?Mp1G2n1G2nO!A}Q`O1G2gOCcQWO1G2hO&/]QWO1G2iO&/eQWO1G2hO$!xQWO1G2iO&0XQ7[O,5?]OOQ?Mr-E<p-E<pO&0zQ7[O,5?_OOQ?Mr-E<r-E<rO!+hQ7[O7++WOOQ?Mr1G/`1G/`O&1UQWO1G/`OOQ?Mr7+'s7+'sO&1ZQ7[O7+'zO&1kQ?NdO<<KVOOQ?Mr<<KV<<KVO&2_QWO1G0wO!&_Q7[O'#IvO&2dQWO,5@tO&4fQrO<<K|O!&_Q7[O1G2lOOQU<<G{<<G{O!ArQ?MxO<<G{O&4mQ?NdO<<IxOOQ?Mr<<Ix<<IxOOQO,5?h,5?hO&5aQWO,5?hO&5fQWO,5?hOOQO-E<z-E<zO&5tQWO1G6gO&5tQWO1G6gO9^QWO1G6gO@fQWO<<LiOOQU<<Li<<LiO&5|QWO<<LiO9hQ?MxO<<LiOOQU<<LU<<LUO%4RQ?NbO<<LUOOQU<<LV<<LVO%4]QpO<<LVO&6RQ`O'#IxO&6^QWO,5@xO!(oQ^O,5@xOOQU1G3T1G3TO%+xQ^O'#JqOOQO'#Iz'#IzO9hQ?MxO'#IzO&6fQ`O,5=rOOQU,5=r,5=rO&6mQ`O'#EdO&7RQ`O'#GcO&7WQWO7+(wO&7]QWO7+(wOOQU7+(w7+(wO!&_Q7[O7+(wO%[Q^O7+(wO&7eQWO7+(wOOQU7+(y7+(yO9hQ?MxO7+(yO$!}QWO7+(yO9RQWO7+(yO!A}Q`O7+(yO&7pQWO,5?gOOQO-E<y-E<yOOQO'#HZ'#HZO&7{QWO1G6eO9hQ?MxO<<GqOOQU<<Gq<<GqO@fQWO<<GqO&8TQWO7+,SO&8YQWO7+,TO%[Q^O7+,SO%[Q^O7+,TOOQU7+)R7+)RO&8_QWO7+)RO&8dQ^O7+)RO&8kQWO7+)ROOQU<<Lu<<LuOOQU<<Lw<<LwOOQU-E<|-E<|OOQU1G3v1G3vO&8pQWO,5>]OOQU,5>_,5>_O&8uQWO1G3|O9WQWO7+&cO!(oQ^O7+&cOOQO7+%[7+%[O&8zQ07bO1G6UO>tQWO7+%[OOQ?Mr<<I^<<I^OOQ?Mr<<Iw<<IwO>tQWO<<IwOOQO<<Ip<<IpO$>`Q?NdO<<IpO%[Q^O<<IpOOQO<<Ia<<IaO!ArQ?MxO<<IaO&9UQ?MxO<<IpO&9aQ?NdO<= XO&9qQWO<= WOOQO7+*Z7+*ZO9WQWO7+*ZOOQUANAhANAhO&9yQrOANAhO!&_Q7[OANAhO#&wQWOANAhO4UQrOANAhO&:QQWOANAhO%[Q^OANAhO&:YQ?NdO7+'xO&<hQ?NdO,5?]O&>pQ?NdO,5?_O&@xQ?NdO7+'zO&CWQrO1G4hO&CbQ07bO7+&^O&EcQ07bO,5=UO&GgQ07bO,5=WO&GwQ07bO,5=UO&HXQ07bO,5=WO&HiQ07bO,59rO&JlQ07bO,5<iO&LlQ07bO,5<kO&N}Q07bO,5<yO'!pQ07bO7+'jO'!}Q07bO7+'kO'#[QWO,5<[OOQO7+'_7+'_O'#aQ7[O<<KzOOQO1G4s1G4sO'#hQWO1G4sO'#sQWO1G4sO'$RQWO7++xO'$RQWO7++xO!&_Q7[O1G4uO'$ZQpO1G4uO'$eQWO7++yOOQ?Mp7+(S7+(SO'$mQWO7+(TO'$xQpO7+(TOOQ?Mp7+(R7+(RO$(PQWO7+(SO'%PQWO7+(TO!&_Q7[O7+(TOCcQWO7+(SO'%UQWO7+(TO'%^Q7[O<<NrOOQ?Mr7+$z7+$zO'%hQpO,5?bOOQO-E<t-E<tO'%rQ?NbO7+(WOOQUAN=gAN=gO9^QWO1G5SOOQO1G5S1G5SO'&SQWO1G5SO'&XQWO7+,RO'&XQWO7+,RO9hQ?MxOANBTO@fQWOANBTOOQUANBTANBTOOQUANApANApOOQUANAqANAqO'&aQWO,5?dOOQO-E<v-E<vO'&lQ07bO1G6dOOQO,5?f,5?fOOQO-E<x-E<xOOQU1G3^1G3^O%+xQ^O,5<}O'&vQWO,5<}OOQU<<Lc<<LcO!&_Q7[O<<LcO&7WQWO<<LcO'&{QWO<<LcO%[Q^O<<LcOOQU<<Le<<LeO9hQ?MxO<<LeO$!}QWO<<LeO9RQWO<<LeO''TQ`O1G5RO''`QWO7+,POOQUAN=]AN=]O9hQ?MxOAN=]OOQU<= n<= nOOQU<= o<= oO''hQWO<= nO''mQWO<= oOOQU<<Lm<<LmO''rQWO<<LmO''wQ^O<<LmOOQU1G3w1G3wO>tQWO7+)hO'(OQWO<<I}O'(ZQ07bO<<I}OOQO<<Hv<<HvOOQ?MrAN?cAN?cOOQOAN?[AN?[O$>`Q?NdOAN?[OOQOAN>{AN>{O%[Q^OAN?[OOQO<<Mu<<MuOOQUG27SG27SO!&_Q7[OG27SO#&wQWOG27SO'(eQrOG27SO4UQrOG27SO'(lQWOG27SO'(tQ07bO<<JeO')RQ07bO1G2^O'*tQ07bO,5?]O',tQ07bO,5?_O'.tQ07bO1G2pO'0tQ07bO1G2rO'2tQ07bO<<KVO'3RQ07bO<<IxOOQO1G1v1G1vO!+hQ7[OANAfOOQO7+*_7+*_O'3`QWO7+*_O'3kQWO<= dO'3sQpO7+*aOOQ?Mp<<Ko<<KoO$(PQWO<<KoOCcQWO<<KoO'3}QWO<<KoOOQ?Mp<<Kn<<KnO'4YQpO<<KoO$(PQWO<<KnO'4aQWO<<KoO!&_Q7[O<<KoOOQO7+*n7+*nO9^QWO7+*nO'4fQWO<= mOOQUG27oG27oO9hQ?MxOG27oO!(oQ^O1G5OO'4nQWO7+,OO&7WQWOANA}OOQUANA}ANA}O!&_Q7[OANA}O'4vQWOANA}OOQUANBPANBPO9hQ?MxOANBPO$!}QWOANBPOOQO'#H['#H[OOQO7+*m7+*mOOQUG22wG22wOOQUANEYANEYOOQUANEZANEZOOQUANBXANBXO'5OQWOANBXOOQU<<MS<<MSO!(oQ^OAN?iOOQOG24vG24vO$>`Q?NdOG24vO#&wQWOLD,nOOQULD,nLD,nO!&_Q7[OLD,nO'5TQrOLD,nO'5[Q07bO7+'xO'6}Q07bO,5?]O'8}Q07bO,5?_O':}Q07bO7+'zO'<pQ7[OG27QOOQO<<My<<MyOOQ?MpANAZANAZO$(PQWOANAZOCcQWOANAZO'=QQWOANAZOOQ?MpANAYANAYO'=]QpOANAZOOQO<<NY<<NYOOQULD-ZLD-ZO'=dQ07bO7+*jOOQUG27iG27iO&7WQWOG27iO!&_Q7[OG27iOOQUG27kG27kO9hQ?MxOG27kOOQUG27sG27sO'=nQ07bOG25TOOQOLD*bLD*bOOQU!$(!Y!$(!YO#&wQWO!$(!YO!&_Q7[O!$(!YO'=xQ?NdOG27QOOQ?MpG26uG26uO$(PQWOG26uOCcQWOG26uO'@WQWOG26uOOQULD-TLD-TO&7WQWOLD-TOOQULD-VLD-VOOQU!)9Et!)9EtO#&wQWO!)9EtOOQ?MpLD,aLD,aO$(PQWOLD,aOCcQWOLD,aOOQU!$(!o!$(!oOOQU!.K;`!.K;`O'@cQ07bOG27QOOQ?Mp!$( {!$( {O$(PQWO!$( {OOQ?Mp!)9Eg!)9EgO!(oQ^O'#DwO1PQWO'#EUO'BUQrO'#JmO'B]QMnO'#DsO'BdQ^O'#D{O'BkQrO'#CiO'ERQrO'#CiO!(oQ^O'#D}O'EcQ^O,5;WO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O'#IlO'GfQWO,5<gO!(oQ^O,5;bO'GnQ7[O,5;bO'IXQ7[O,5;bO!(oQ^O,5;vO!&_Q7[O'#GjO'GnQ7[O'#GjO!&_Q7[O'#GlO'GnQ7[O'#GlO1SQWO'#DWO1SQWO'#DWO!&_Q7[O'#F}O'GnQ7[O'#F}O!&_Q7[O'#GPO'GnQ7[O'#GPO!&_Q7[O'#G_O'GnQ7[O'#G_O!(oQ^O,5:gO'I`Q`O'#D[O!(oQ^O,5@jO'EcQ^O1G0rO'IjQ07bO'#CiO!(oQ^O1G2OO!&_Q7[O'#IqO'GnQ7[O'#IqO!&_Q7[O'#IsO'GnQ7[O'#IsO'ItQpO'#CrO!&_Q7[O,5<rO'GnQ7[O,5<rO'EcQ^O1G2PO!(oQ^O7+&yO!&_Q7[O1G2^O'GnQ7[O1G2^O!&_Q7[O'#IqO'GnQ7[O'#IqO!&_Q7[O'#IsO'GnQ7[O'#IsO!&_Q7[O1G2`O'GnQ7[O1G2`O'EcQ^O7+'kO'EcQ^O7+&^O!&_Q7[OANAfO'GnQ7[OANAfO'JXQWO'#ElO'J^QWO'#ElO'JfQWO'#F[O'JkQWO'#EvO'JpQWO'#KOO'J{QWO'#J|O'KWQWO,5;WO'K]Q7[O,5<dO'KdQWO'#GWO'KiQWO'#GWO'KnQWO,5<eO'KvQWO,5;WO'LOQ07bO1G1_O'LVQWO,5<rO'L[QWO,5<rO'LaQWO,5<tO'LfQWO,5<tO'LkQWO1G2PO'LpQWO1G0rO'LuQ7[O<<KzO'L|Q7[O<<KzO7eQ7[O'#FzO9RQWO'#FyOAaQWO'#EkO!(oQ^O,5;sO!3SQWO'#GWO!3SQWO'#GWO!3SQWO'#GYO!3SQWO'#GYO!+hQ7[O7+(`O!+hQ7[O7+(`O%+SQpO1G2tO%+SQpO1G2tO!&_Q7[O,5=YO!&_Q7[O,5=Y",stateData:"'NQ~O'wOS'xOSTOS'yRQ~OPYOQYOSfOY!VOaqOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#t!PO$V|O%e}O%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO&S!WO&Y!XO&[!YO&^!ZO&`![O&c!]O&i!^O&o!_O&q!`O&s!aO&u!bO&w!cO(OSO(QTO(TUO([VO(j[O(yiO~OWtO~P`OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oa!wOp!nO!P!oO!_!yO!`!vO!a!vO!y;QO#Q!pO#R!pO#S!xO#T!pO#U!pO#X!zO#Y!zO(P!lO(QTO(TUO(`!mO(j!sO~O'y!{O~OP]XR]X[]Xa]Xo]X}]X!P]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X'u]X([]X(m]X(t]X(u]X~O!d%PX~P(qO_!}O(Q#PO(R!}O(S#PO~O_#QO(S#PO(T#PO(U#QO~Ou#SO!R#TO(]#TO(^#VO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O;UO(QTO(TUO([VO(j[O(yiO~O!X#ZO!Y#WO!V(cP!V(qP~P+}O!Z#cO~P`OPYOQYOSfOd!jOe!iOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(QTO(TUO([VO(j[O(yiO~Om#mO!X#iO!y]O#f#lO#g#iO(O;VO!h(nP~P.iO!i#oO(O#nO~O!u#sO!y]O%e#tO~O#h#uO~O!d#vO#h#uO~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y$_O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO([VO(m$YO(t#|O(u#}O~Oa(aX'u(aX's(aX!h(aX!V(aX![(aX%f(aX!d(aX~P1qO#P$dO#]$eO$P$eOP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#s(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX![(bX%f(bX~Oa(bX'u(bX's(bX!V(bX!h(bXs(bX!d(bX~P4UO#]$eO~O$[$hO$^$gO$e$mO~OSfO![$nO$h$oO$j$qO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(O$sO(QTO(TUO([$uO(t$}O(u%POg(XP~O!i%cO~O!P%fO![%gO(O%eO~O!d%kO~Oa%lO'u%lO~O}%pO~P%[O(P!lO~P%[O%k%tO~P%[Oh%VO!i%cO(O%eO(P!lO~Oe%{O!i%cO(O%eO~O#s$RO~O}&QO![%}O!i&PO%g&TO(O%eO(P!lO(QTO(TUO`)SP~O!u#sO~O%p&VO!P)OX![)OX(O)OX~O(O&WO~O!r&]O#t!PO%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO~Od&bOe&aO!u&_O%e&`O%x&^O~P;|Od&eOeyO![&dO!r&]O!uxO!y]O#t!PO%e}O%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO~Ob&hO#]&kO%g&fO(P!lO~P=RO!i&lO!r&pO~O!i#oO~O![XO~Oa%lO't&xO'u%lO~Oa%lO't&{O'u%lO~Oa%lO't&}O'u%lO~O's]X!V]Xs]X!h]X&W]X![]X%f]X!d]X~P(qO!_'[O!`'TO!a'TO(P!lO(QTO(TUO~Op'RO!P'QO!X'UO(`'PO!Z(dP!Z(sP~P@YOk'_O![']O(O%eO~Oe'dO!i%cO(O%eO~O}&QO!i&PO~Op!nO!P!oO!y;QO#Q!pO#R!pO#T!pO#U!pO(P!lO(QTO(TUO(`!mO(j!sO~O!_'jO!`'iO!a'iO#S!pO#X'kO#Y'kO~PAtOa%lOh%VO!d#vO!i%cO'u%lO(m'mO~O!m'qO#]'oO~PCSOp!nO!P!oO(QTO(TUO(`!mO(j!sO~O![XOp(hX!P(hX!_(hX!`(hX!a(hX!y(hX#Q(hX#R(hX#S(hX#T(hX#U(hX#X(hX#Y(hX(P(hX(Q(hX(T(hX(`(hX(j(hX~O!`'iO!a'iO(P!lO~PCrO'z'uO'{'uO'|'wO~O_!}O(Q'yO(R!}O(S'yO~O_#QO(S'yO(T'yO(U#QO~Ou#SO!R#TO(]#TO(^'}O~O!X(PO!V'SX!V'YX!Y'SX!Y'YX~P+}O!Y(RO!V(cX~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y(RO!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO([VO(m$YO(t#|O(u#}O~O!V(cX~PGfO!V(WO~O!V(pX!Y(pX!d(pX!h(pX(m(pX~O#](pX#h#aX!Z(pX~PIiO#](XO!V(rX!Y(rX~O!Y(YO!V(qX~O!V(]O~O#]$eO~PIiO!Z(^O~P`OR#zO}#yO!P#{O!i#xO([VOP!ka[!kao!ka!Y!ka!m!ka#O!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#q!ka#r!ka#s!ka#u!ka#w!ka#y!ka#z!ka(m!ka(t!ka(u!ka~Oa!ka'u!ka's!ka!V!ka!h!kas!ka![!ka%f!ka!d!ka~PKPO!h(_O~O!d#vO#](`O(m'mO!Y(oXa(oX'u(oX~O!h(oX~PMlO!P%fO![%gO!y]O#f(eO#g(dO(O%eO~O!Y(fO!h(nX~O!h(hO~O!P%fO![%gO#g(dO(O%eO~OP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#s(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX~O!d#vO!h(bX~P! YOR(jO}(iO!i#xO#P$dO!y!xa!P!xa~O!u!xa%e!xa![!xa#f!xa#g!xa(O!xa~P!#ZO!u(nO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;nO!P${O![$|O!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(O(rO(QTO(TUO([$uO(t$}O(u%PO~O#h(tO~O!X(vO!h(fP~P%[O(`(xO(j[O~O!P(zO!i#xO(`(xO(j[O~OP;POQ;POSfOd<zOe!iOmkOo;POpkOqkOwkOy;PO{;PO!PWO!TkO!UkO![!eO!f;SO!iZO!l;PO!m;PO!n;PO!p;TO!r;WO!u!hO$V!kO(O)XO(QTO(TUO([VO(j[O(y<xO~O!Y$_Oa$oa'u$oa's$oa!h$oa!V$oa![$oa%f$oa!d$oa~O#t)`O~P!&_Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(O(rO(QTO(TUO([$uO(t$}O(u%PO~Og(kP~P!+hO})eO!d)dO![$]X$Y$]X$[$]X$^$]X$e$]X~O!d)dO![(vX$Y(vX$[(vX$^(vX$e(vX~O})eO~P!-qO})eO![(vX$Y(vX$[(vX$^(vX$e(vX~O![)gO$Y)kO$[)fO$^)fO$e)lO~O!X)oO~P!(oO$[$hO$^$gO$e)sO~Ok$xX}$xX!P$xX#P$xX(t$xX(u$xX~OgjXg$xXkjX!YjX#]jX~P!/gOu)uO(])vO(^)xO~Ok*RO})zO!P){O(t$}O(u%PO~Og)yO~P!0kOg*SO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;nO!P*UO![*VO!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(QTO(TUO([$uO(t$}O(u%PO~O!X*YO(O*TO!h(zP~P!1YO#h*[O~O!i*]O~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;nO!P${O![$|O!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(O*_O(QTO(TUO([$uO(t$}O(u%PO~O!X*bO!V({P~P!3XOo*nO!P*fO!_*lO!`*eO!a*eO!i*]O#X*mO%]*hO(P!lO(`!mO~O!Z*kO~P!4|O#P$dOk(ZX}(ZX!P(ZX(t(ZX(u(ZX!Y(ZX#](ZX~Og(ZX#}(ZX~P!5uOk*sO#]*rOg(YX!Y(YX~O!Y*tOg(XX~O(O&WOg(XP~Op*wO~O!i*|O~O(O(rO~Om+QO!P%fO!X#iO![%gO!y]O#f#lO#g#iO(O%eO!h(nP~O!d#vO#h+RO~O!P%fO!X+TO!Y(YO![%gO(O%eO!V(qP~Op'XO!P+VO!X+UO(QTO(TUO(`(xO~O!Z(sP~P!8uO!Y+WOa)PX'u)PX~OP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO([VO(m$YO(t#|O(u#}O~Oa!ga!Y!ga'u!ga's!ga!V!ga!h!gas!ga![!ga%f!ga!d!ga~P!9mOR#zO}#yO!P#{O!i#xO([VOP!oa[!oao!oa!Y!oa!m!oa#O!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#q!oa#r!oa#s!oa#u!oa#w!oa#y!oa#z!oa(m!oa(t!oa(u!oa~Oa!oa'u!oa's!oa!V!oa!h!oas!oa![!oa%f!oa!d!oa~P!<TOR#zO}#yO!P#{O!i#xO([VOP!qa[!qao!qa!Y!qa!m!qa#O!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#q!qa#r!qa#s!qa#u!qa#w!qa#y!qa#z!qa(m!qa(t!qa(u!qa~Oa!qa'u!qa's!qa!V!qa!h!qas!qa![!qa%f!qa!d!qa~P!>kOh%VOk+aO![']O%f+`O~O!d+cOa(WX![(WX'u(WX!Y(WX~Oa%lO![XO'u%lO~Oh%VO!i%cO~Oh%VO!i%cO(O%eO~O!d#vO#h(tO~Ob+nO%g+oO(O+kO(QTO(TUO!Z)TP~O!Y+pO`)SX~O[+tO~O`+uO~O![%}O(O%eO(P!lO`)SP~Oh%VO#]+zO~Oh%VOk+}O![$|O~O![,PO~O},RO![XO~O%k%tO~O!u,WO~Oe,]O~Ob,^O(O#nO(QTO(TUO!Z)RP~Oe%{O~O%g!QO(O&WO~P=RO[,cO`,bO~OPYOQYOSfOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO!fuO!iZO!lYO!mYO!nYO!pvO!uxO!y]O%e}O(QTO(TUO([VO(j[O(yiO~O![!eO!r!gO$V!kO(O!dO~P!EkO`,bOa%lO'u%lO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oa,hO!rwO#t!OO%i!OO%j!OO%k!OO~P!HTO!i&lO~O&Y,nO~O![,pO~O&k,rO&m,sOP&haQ&haS&haY&haa&had&hae&ham&hao&hap&haq&haw&hay&ha{&ha!P&ha!T&ha!U&ha![&ha!f&ha!i&ha!l&ha!m&ha!n&ha!p&ha!r&ha!u&ha!y&ha#t&ha$V&ha%e&ha%g&ha%i&ha%j&ha%k&ha%n&ha%p&ha%s&ha%t&ha%v&ha&S&ha&Y&ha&[&ha&^&ha&`&ha&c&ha&i&ha&o&ha&q&ha&s&ha&u&ha&w&ha's&ha(O&ha(Q&ha(T&ha([&ha(j&ha(y&ha!Z&ha&a&hab&ha&f&ha~O(O,xO~Oh!bX!Y!OX!Z!OX!d!OX!d!bX!i!bX#]!OX~O!Y!bX!Z!bX~P# ZO!d,}O#],|Oh(eX!Y#eX!Y(eX!Z#eX!Z(eX!d(eX!i(eX~Oh%VO!d-PO!i%cO!Y!^X!Z!^X~Op!nO!P!oO(QTO(TUO(`!mO~OP;POQ;POSfOd<zOe!iOmkOo;POpkOqkOwkOy;PO{;PO!PWO!TkO!UkO![!eO!f;SO!iZO!l;PO!m;PO!n;PO!p;TO!r;WO!u!hO$V!kO(QTO(TUO([VO(j[O(y<xO~O(O;zO~P##_O!Y-TO!Z(dX~O!Z-VO~O!d,}O#],|O!Y#eX!Z#eX~O!Y-WO!Z(sX~O!Z-YO~O!`-ZO!a-ZO(P!lO~P#!|O!Z-^O~P'_Ok-aO![']O~O!V-fO~Op!xa!_!xa!`!xa!a!xa#Q!xa#R!xa#S!xa#T!xa#U!xa#X!xa#Y!xa(P!xa(Q!xa(T!xa(`!xa(j!xa~P!#ZO!m-kO#]-iO~PCSO!`-mO!a-mO(P!lO~PCrOa%lO#]-iO'u%lO~Oa%lO!d#vO#]-iO'u%lO~Oa%lO!d#vO!m-kO#]-iO'u%lO(m'mO~O'z'uO'{'uO'|-rO~Os-sO~O!V'Sa!Y'Sa~P!9mO!X-wO!V'SX!Y'SX~P%[O!Y(RO!V(ca~O!V(ca~PGfO!Y(YO!V(qa~O!P%fO!X-{O![%gO(O%eO!V'YX!Y'YX~O#]-}O!Y(oa!h(oaa(oa'u(oa~O!d#vO~P#+eO!Y(fO!h(na~O!P%fO![%gO#g.RO(O%eO~Om.WO!P%fO!X.TO![%gO!y]O#f.VO#g.TO(O%eO!Y']X!h']X~OR.[O!i#xO~Oh%VOk._O![']O%f.^O~Oa#`i!Y#`i'u#`i's#`i!V#`i!h#`is#`i![#`i%f#`i!d#`i~P!9mOk=UO})zO!P){O(t$}O(u%PO~O#h#[aa#[a#]#[a'u#[a!Y#[a!h#[a![#[a!V#[a~P#.aO#h(ZXP(ZXR(ZX[(ZXa(ZXo(ZX!i(ZX!m(ZX#O(ZX#k(ZX#l(ZX#m(ZX#n(ZX#o(ZX#p(ZX#q(ZX#r(ZX#s(ZX#u(ZX#w(ZX#y(ZX#z(ZX'u(ZX([(ZX(m(ZX!h(ZX!V(ZX's(ZXs(ZX![(ZX%f(ZX!d(ZX~P!5uO!Y.lO!h(fX~P!9mO!h.oO~O!V.qO~OP$[OR#zO}#yO!P#{O!i#xO!m$[O([VO[#jia#jio#ji!Y#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#k#ji~P#1|O#k$OO~P#1|OP$[OR#zOo$aO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO([VO[#jia#ji!Y#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#o#ji~P#4kO#o$QO~P#4kOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO([VOa#ji!Y#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#u#ji~P#7YOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO([VO(u#}Oa#ji!Y#ji#y#ji#z#ji'u#ji(m#ji(t#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#w$UO~P#9pO#w#ji~P#9pO#u$SO~P#7YOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO([VO(t#|O(u#}Oa#ji!Y#ji#z#ji'u#ji(m#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#y#ji~P#<fO#y$WO~P#<fOP]XR]X[]Xo]X}]X!P]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X!Y]X!Z]X~O#}]X~P#?TOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O#u;^O#w;`O#y;bO#z;cO([VO(m$YO(t#|O(u#}O~O#}.sO~P#AbO#P$dO#];iO$P;iO#}(bX!Z(bX~P! YOa'`a!Y'`a'u'`a's'`a!h'`a!V'`as'`a!['`a%f'`a!d'`a~P!9mO[#jia#jio#ji!Y#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO([VO(t#ji(u#ji~P#DdOk=UO})zO!P){O(t$}O(u%POP#jiR#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji([#ji~P#DdO!Y.wOg(kX~P!0kOg.yO~Oa$Oi!Y$Oi'u$Oi's$Oi!V$Oi!h$Ois$Oi![$Oi%f$Oi!d$Oi~P!9mO$[.zO$^.zO~O$[.{O$^.{O~O!d)dO#].|O![$bX$Y$bX$[$bX$^$bX$e$bX~O!X.}O~O![)gO$Y/PO$[)fO$^)fO$e/QO~O!Y;dO!Z(aX~P#AbO!Z/RO~O!d)dO$e(vX~O$e/TO~Ou)uO(])vO(^/WO~O!V/[O~P!&_O(t$}Ok%^a}%^a!P%^a(u%^a!Y%^a#]%^a~Og%^a#}%^a~P#K^O(u%POk%`a}%`a!P%`a(t%`a!Y%`a#]%`a~Og%`a#}%`a~P#LPO!YfX!dfX!hfX!h$xX(mfX~P!/gO!X/eO!Y(YO(O/dO!V(qP!V({P~P!1YOo*nO!_*lO!`*eO!a*eO!i*]O#X*mO%]*hO(P!lO~Op'XO!P/fO!X+UO!Z*kO(QTO(TUO(`;wO!Z(sP~P#MjO!h/gO~P#.aO!Y/hO!d#vO(m'mO!h(zX~O!h/mO~O!P%fO!X*YO![%gO(O%eO!h(zP~O#h/oO~O!V$xX!Y$xX!d%PX~P!/gO!Y/pO!V({X~P#.aO!d/rO~O!V/tO~Oh%VOo/xO!d#vO!i%cO(m'mO~O(O/zO~O!d+cO~Oa%lO!Y0OO'u%lO~O!Z0QO~P!4|O!`0RO!a0RO(P!lO(`!mO~O!P0TO(`!mO~O#X0UO~Og%^a!Y%^a#]%^a#}%^a~P!0kOg%`a!Y%`a#]%`a#}%`a~P!0kO(O&WOg'iX!Y'iX~O!Y*tOg(Xa~Og0_O~OR0`O}0`O!P0aO#P$dOkza(tza(uza!Yza#]za~Ogza#}za~P$%]O})zO!P){Ok$qa(t$qa(u$qa!Y$qa#]$qa~Og$qa#}$qa~P$&UO})zO!P){Ok$sa(t$sa(u$sa!Y$sa#]$sa~Og$sa#}$sa~P$&wO#h0dO~Og%Ra!Y%Ra#]%Ra#}%Ra~P!0kO!d#vO~O#h0gO~O!Y+WOa)Pa'u)Pa~OR#zO}#yO!P#{O!i#xO([VOP!oi[!oio!oi!Y!oi!m!oi#O!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#q!oi#r!oi#s!oi#u!oi#w!oi#y!oi#z!oi(m!oi(t!oi(u!oi~Oa!oi'u!oi's!oi!V!oi!h!ois!oi![!oi%f!oi!d!oi~P$(fOh%VOo%XOp$tOq$tOw%YOy%ZO{;nO!P${O![$|O!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(QTO(TUO([$uO(t$}O(u%PO~Om0pO(O0oO~P$*|O!d+cOa(Wa![(Wa'u(Wa!Y(Wa~O#h0vO~O[]X!YfX!ZfX~O!Y0wO!Z)TX~O!Z0yO~O[0zO~Ob0|O(O+kO(QTO(TUO~O![%}O(O%eO`'qX!Y'qX~O!Y+pO`)Sa~O!h1PO~P!9mO[1SO~O`1TO~O#]1WO~Ok1ZO![$|O~O(`(xO!Z)QP~Oh%VOk1dO![1aO%f1cO~O[1nO!Y1lO!Z)RX~O!Z1oO~O`1qOa%lO'u%lO~O(O#nO(QTO(TUO~O#P$dO#]$eO$P$eOP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX~O#s1tO&W1uOa(bX~P$0dO#]$eO#s1tO&W1uO~Oa1wO~P%[Oa1yO~O&a1|OP&_iQ&_iS&_iY&_ia&_id&_ie&_im&_io&_ip&_iq&_iw&_iy&_i{&_i!P&_i!T&_i!U&_i![&_i!f&_i!i&_i!l&_i!m&_i!n&_i!p&_i!r&_i!u&_i!y&_i#t&_i$V&_i%e&_i%g&_i%i&_i%j&_i%k&_i%n&_i%p&_i%s&_i%t&_i%v&_i&S&_i&Y&_i&[&_i&^&_i&`&_i&c&_i&i&_i&o&_i&q&_i&s&_i&u&_i&w&_i's&_i(O&_i(Q&_i(T&_i([&_i(j&_i(y&_i!Z&_ib&_i&f&_i~Ob2SO!Z2QO&f2RO~P`O![XO!i2UO~O&m,sOP&hiQ&hiS&hiY&hia&hid&hie&him&hio&hip&hiq&hiw&hiy&hi{&hi!P&hi!T&hi!U&hi![&hi!f&hi!i&hi!l&hi!m&hi!n&hi!p&hi!r&hi!u&hi!y&hi#t&hi$V&hi%e&hi%g&hi%i&hi%j&hi%k&hi%n&hi%p&hi%s&hi%t&hi%v&hi&S&hi&Y&hi&[&hi&^&hi&`&hi&c&hi&i&hi&o&hi&q&hi&s&hi&u&hi&w&hi's&hi(O&hi(Q&hi(T&hi([&hi(j&hi(y&hi!Z&hi&a&hib&hi&f&hi~O!V2[O~O!Y!^a!Z!^a~P#AbOp!nO!P!oO!X2bO(`!mO!Y'TX!Z'TX~P@YO!Y-TO!Z(da~O!Y'ZX!Z'ZX~P!8uO!Y-WO!Z(sa~O!Z2iO~P'_Oa%lO#]2rO'u%lO~Oa%lO!d#vO#]2rO'u%lO~Oa%lO!d#vO!m2vO#]2rO'u%lO(m'mO~Oa%lO'u%lO~P!9mO!Y$_Os$oa~O!V'Si!Y'Si~P!9mO!Y(RO!V(ci~O!Y(YO!V(qi~O!V(ri!Y(ri~P!9mO!Y(oi!h(oia(oi'u(oi~P!9mO#]2xO!Y(oi!h(oia(oi'u(oi~O!Y(fO!h(ni~O!P%fO![%gO!y]O#f2}O#g2|O(O%eO~O!P%fO![%gO#g2|O(O%eO~Ok3UO![']O%f3TO~Oh%VOk3UO![']O%f3TO~O#h%^aP%^aR%^a[%^aa%^ao%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'u%^a([%^a(m%^a!h%^a!V%^a's%^as%^a![%^a%f%^a!d%^a~P#K^O#h%`aP%`aR%`a[%`aa%`ao%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'u%`a([%`a(m%`a!h%`a!V%`a's%`as%`a![%`a%f%`a!d%`a~P#LPO#h%^aP%^aR%^a[%^aa%^ao%^a!Y%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'u%^a([%^a(m%^a!h%^a!V%^a's%^a#]%^as%^a![%^a%f%^a!d%^a~P#.aO#h%`aP%`aR%`a[%`aa%`ao%`a!Y%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'u%`a([%`a(m%`a!h%`a!V%`a's%`a#]%`as%`a![%`a%f%`a!d%`a~P#.aO#hzaPza[zaazaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza'uza([za(mza!hza!Vza'szasza![za%fza!dza~P$%]O#h$qaP$qaR$qa[$qaa$qao$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa'u$qa([$qa(m$qa!h$qa!V$qa's$qas$qa![$qa%f$qa!d$qa~P$&UO#h$saP$saR$sa[$saa$sao$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa'u$sa([$sa(m$sa!h$sa!V$sa's$sas$sa![$sa%f$sa!d$sa~P$&wO#h%RaP%RaR%Ra[%Raa%Rao%Ra!Y%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra'u%Ra([%Ra(m%Ra!h%Ra!V%Ra's%Ra#]%Ras%Ra![%Ra%f%Ra!d%Ra~P#.aOa#`q!Y#`q'u#`q's#`q!V#`q!h#`qs#`q![#`q%f#`q!d#`q~P!9mO!X3^O!Y'UX!h'UX~P%[O!Y.lO!h(fa~O!Y.lO!h(fa~P!9mO!V3aO~O#}!ka!Z!ka~PKPO#}!ga!Y!ga!Z!ga~P#AbO#}!oa!Z!oa~P!<TO#}!qa!Z!qa~P!>kOg'XX!Y'XX~P!+hO!Y.wOg(ka~OSfO![3uO$c3vO~O!Z3zO~Os3{O~P#.aOa$lq!Y$lq'u$lq's$lq!V$lq!h$lqs$lq![$lq%f$lq!d$lq~P!9mO!V3|O~P#.aO})zO!P){O(u%POk'ea(t'ea!Y'ea#]'ea~Og'ea#}'ea~P%)nO})zO!P){Ok'ga(t'ga(u'ga!Y'ga#]'ga~Og'ga#}'ga~P%*aO(m$YO~P#.aO!VfX!V$xX!YfX!Y$xX!d%PX#]fX~P!/gO(O<QO~P!1YOmkO(O4OO~P.iO!P%fO!X4QO![%gO(O%eO!Y'aX!h'aX~O!Y/hO!h(za~O!Y/hO!d#vO!h(za~O!Y/hO!d#vO(m'mO!h(za~Og$zi!Y$zi#]$zi#}$zi~P!0kO!X4YO!V'cX!Y'cX~P!3XO!Y/pO!V({a~O!Y/pO!V({a~P#.aO!d#vO#s4bO~Oo4eO!d#vO(m'mO~O!P4hO(`!mO~O(t$}Ok%^i}%^i!P%^i(u%^i!Y%^i#]%^i~Og%^i#}%^i~P%.wO(u%POk%`i}%`i!P%`i(t%`i!Y%`i#]%`i~Og%`i#}%`i~P%/jOg(Yi!Y(Yi~P!0kO#]4mOg(Yi!Y(Yi~P!0kO!h4pO~Oa$mq!Y$mq'u$mq's$mq!V$mq!h$mqs$mq![$mq%f$mq!d$mq~P!9mO!V4tO~O!Y4uO![(|X~P#.aOa$xX![$xX%Z]X'u$xX!Y$xX~P!/gO%Z4xOalXklX}lX!PlX![lX'ulX(tlX(ulX!YlX~O%Z4xO~Ob5OO%g5PO(O+kO(QTO(TUO!Y'pX!Z'pX~O!Y0wO!Z)Ta~O[5TO~O`5UO~Oa%lO'u%lO~P#.aO![$|O~P#.aO!Y5^O#]5`O!Z)QX~O!Z5aO~Oo5hOp!nO!P5bO!_!yO!`!vO!a!vO!y;QO#Q!pO#R!pO#S!pO#T!pO#U!pO#X5gO#Y!zO(P!lO(QTO(TUO(`!mO(j!sO~O!Z5fO~P%4tOk5mO![1aO%f5lO~Oh%VOk5mO![1aO%f5lO~Ob5tO(O#nO(QTO(TUO!Y'oX!Z'oX~O!Y1lO!Z)Ra~O(QTO(TUO(`5vO~O`5zO~O#s5}O&W6OO~PMlO!h6PO~P%[Oa6RO~Oa6RO~P%[Ob2SO!Z6WO&f2RO~P`O!d6YO~O!d6[Oh(ei!Y(ei!Z(ei!d(ei!i(ei~O!Y#ei!Z#ei~P#AbO#]6]O!Y#ei!Z#ei~O!Y!^i!Z!^i~P#AbOa%lO#]6fO'u%lO~Oa%lO!d#vO#]6fO'u%lO~O!Y(oq!h(oqa(oq'u(oq~P!9mO!Y(fO!h(nq~O!P%fO![%gO#g6mO(O%eO~O![']O%f6pO~Ok6tO![']O%f6pO~O#h'eaP'eaR'ea['eaa'eao'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea'u'ea(['ea(m'ea!h'ea!V'ea's'eas'ea!['ea%f'ea!d'ea~P%)nO#h'gaP'gaR'ga['gaa'gao'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga'u'ga(['ga(m'ga!h'ga!V'ga's'gas'ga!['ga%f'ga!d'ga~P%*aO#h$ziP$ziR$zi[$zia$zio$zi!Y$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi'u$zi([$zi(m$zi!h$zi!V$zi's$zi#]$zis$zi![$zi%f$zi!d$zi~P#.aO#h%^iP%^iR%^i[%^ia%^io%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i'u%^i([%^i(m%^i!h%^i!V%^i's%^is%^i![%^i%f%^i!d%^i~P%.wO#h%`iP%`iR%`i[%`ia%`io%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i'u%`i([%`i(m%`i!h%`i!V%`i's%`is%`i![%`i%f%`i!d%`i~P%/jO!Y'Ua!h'Ua~P!9mO!Y.lO!h(fi~O#}#`i!Y#`i!Z#`i~P#AbOP$[OR#zO}#yO!P#{O!i#xO!m$[O([VO[#jio#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O#k#ji~P%G^O#k;YO~P%G^OP$[OR#zOo;fO}#yO!P#{O!i#xO!m$[O#k;YO#l;ZO#m;ZO#n;ZO([VO[#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O#o#ji~P%IfO#o;[O~P%IfOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O([VO#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O#u#ji~P%KnOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O#u;^O([VO(u#}O#y#ji#z#ji#}#ji(m#ji(t#ji!Y#ji!Z#ji~O#w;`O~P%MoO#w#ji~P%MoO#u;^O~P%KnOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O#u;^O#w;`O([VO(t#|O(u#}O#z#ji#}#ji(m#ji!Y#ji!Z#ji~O#y#ji~P&!OO#y;bO~P&!OOa#{y!Y#{y'u#{y's#{y!V#{y!h#{ys#{y![#{y%f#{y!d#{y~P!9mO[#jio#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji!Y#ji!Z#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k;YO#l;ZO#m;ZO#n;ZO([VO(t#ji(u#ji~P&$zOk=VO})zO!P){O(t$}O(u%POP#jiR#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji([#ji~P&$zO#P$dOP(ZXR(ZX[(ZXk(ZXo(ZX}(ZX!P(ZX!i(ZX!m(ZX#O(ZX#k(ZX#l(ZX#m(ZX#n(ZX#o(ZX#p(ZX#q(ZX#r(ZX#s(ZX#u(ZX#w(ZX#y(ZX#z(ZX#}(ZX([(ZX(m(ZX(t(ZX(u(ZX!Y(ZX!Z(ZX~O#}$Oi!Y$Oi!Z$Oi~P#AbO#}!oi!Z!oi~P$(fOg'Xa!Y'Xa~P!0kO!Z7WO~O!Y'`a!Z'`a~P#AbOP]XR]X[]Xo]X}]X!P]X!V]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X~O!d%WX#s%WX~P&+QO!d#vO(m'mO!Y'aa!h'aa~O!Y/hO!h(zi~O!Y/hO!d#vO!h(zi~Og$zq!Y$zq#]$zq#}$zq~P!0kO!V'ca!Y'ca~P#.aO!d7_O~O!Y/pO!V({i~P#.aO!Y/pO!V({i~O!V7cO~O!d#vO#s7hO~Oo7iO!d#vO(m'mO~O})zO!P){O(u%POk'fa(t'fa!Y'fa#]'fa~Og'fa#}'fa~P&/pO})zO!P){Ok'ha(t'ha(u'ha!Y'ha#]'ha~Og'ha#}'ha~P&0cO!V7lO~Og$|q!Y$|q#]$|q#}$|q~P!0kOa$my!Y$my'u$my's$my!V$my!h$mys$my![$my%f$my!d$my~P!9mO!d6[O~O!Y4uO![(|a~O![']OP$SaR$Sa[$Sao$Sa}$Sa!P$Sa!Y$Sa!i$Sa!m$Sa#O$Sa#k$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#u$Sa#w$Sa#y$Sa#z$Sa([$Sa(m$Sa(t$Sa(u$Sa~O%f6pO~P&2lOa#`y!Y#`y'u#`y's#`y!V#`y!h#`ys#`y![#`y%f#`y!d#`y~P!9mO[7qO~Ob7sO(O+kO(QTO(TUO~O!Y0wO!Z)Ti~O`7wO~O(`(xO!Y'lX!Z'lX~O!Y5^O!Z)Qa~O!Z8QO~P%4tOp!nO!P8RO(QTO(TUO(`!mO(j!sO~O#X8SO~O![1aO~O![1aO%f8UO~Ok8XO![1aO%f8UO~O[8^O!Y'oa!Z'oa~O!Y1lO!Z)Ri~O!h8bO~O!h8cO~O!h8fO~O!h8fO~P%[Oa8hO~O!d8iO~O!h8jO~O!Y(ri!Z(ri~P#AbOa%lO#]8rO'u%lO~O!Y(oy!h(oya(oy'u(oy~P!9mO!Y(fO!h(ny~O%f8uO~P&2lO![']O%f8uO~O#h$zqP$zqR$zq[$zqa$zqo$zq!Y$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq'u$zq([$zq(m$zq!h$zq!V$zq's$zq#]$zqs$zq![$zq%f$zq!d$zq~P#.aO#h'faP'faR'fa['faa'fao'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa'u'fa(['fa(m'fa!h'fa!V'fa's'fas'fa!['fa%f'fa!d'fa~P&/pO#h'haP'haR'ha['haa'hao'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha'u'ha(['ha(m'ha!h'ha!V'ha's'has'ha!['ha%f'ha!d'ha~P&0cO#h$|qP$|qR$|q[$|qa$|qo$|q!Y$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q'u$|q([$|q(m$|q!h$|q!V$|q's$|q#]$|qs$|q![$|q%f$|q!d$|q~P#.aO!Y'Ui!h'Ui~P!9mO#}#`q!Y#`q!Z#`q~P#AbO(t$}OP%^aR%^a[%^ao%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a#}%^a([%^a(m%^a!Y%^a!Z%^a~Ok%^a}%^a!P%^a(u%^a~P&CoO(u%POP%`aR%`a[%`ao%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a#}%`a([%`a(m%`a!Y%`a!Z%`a~Ok%`a}%`a!P%`a(t%`a~P&EsOk=VO})zO!P){O(u%PO~P&CoOk=VO})zO!P){O(t$}O~P&EsOR0`O}0`O!P0aO#P$dOPza[zakzaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza#}za([za(mza(tza(uza!Yza!Zza~O})zO!P){OP$qaR$qa[$qak$qao$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa#}$qa([$qa(m$qa(t$qa(u$qa!Y$qa!Z$qa~O})zO!P){OP$saR$sa[$sak$sao$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa#}$sa([$sa(m$sa(t$sa(u$sa!Y$sa!Z$sa~Ok=VO})zO!P){O(t$}O(u%PO~OP%RaR%Ra[%Rao%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra#}%Ra([%Ra(m%Ra!Y%Ra!Z%Ra~P&NlO#}$lq!Y$lq!Z$lq~P#AbO#}$mq!Y$mq!Z$mq~P#AbO!Z9SO~O#}9TO~P!0kO!d#vO!Y'ai!h'ai~O!d#vO(m'mO!Y'ai!h'ai~O!Y/hO!h(zq~O!V'ci!Y'ci~P#.aO!Y/pO!V({q~Oo9[O!d#vO(m'mO~O!V9]O~P#.aO!V9]O~O!d#vO#s9bO~Og(Yy!Y(Yy~P!0kO!Y'ja!['ja~P#.aOa%Yq![%Yq'u%Yq!Y%Yq~P#.aO[9dO~O!Y0wO!Z)Tq~O#]9hO!Y'la!Z'la~O!Y5^O!Z)Qi~P#AbO!P4hO~O![1aO%f9lO~O(QTO(TUO(`9qO~O!Y1lO!Z)Rq~O!h9tO~O!h9uO~O!h9vO~O!h9vO~P%[O#]9yO!Y#ey!Z#ey~O!Y#ey!Z#ey~P#AbO%f:OO~P&2lO![']O%f:OO~O#}#{y!Y#{y!Z#{y~P#AbOP$ziR$zi[$zio$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi#}$zi([$zi(m$zi!Y$zi!Z$zi~P&NlO})zO!P){O(u%POP'eaR'ea['eak'eao'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea#}'ea(['ea(m'ea(t'ea!Y'ea!Z'ea~O})zO!P){OP'gaR'ga['gak'gao'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga#}'ga(['ga(m'ga(t'ga(u'ga!Y'ga!Z'ga~O(t$}OP%^iR%^i[%^ik%^io%^i}%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i#}%^i([%^i(m%^i(u%^i!Y%^i!Z%^i~O(u%POP%`iR%`i[%`ik%`io%`i}%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i#}%`i([%`i(m%`i(t%`i!Y%`i!Z%`i~O#}$my!Y$my!Z$my~P#AbO#}#`y!Y#`y!Z#`y~P#AbO!d#vO!Y'aq!h'aq~O!Y/hO!h(zy~O!V'cq!Y'cq~P#.aOo:YO!d#vO(m'mO~O!V:ZO~P#.aO!V:ZO~O!Y0wO!Z)Ty~O!Y5^O!Z)Qq~O![1aO%f:cO~O!h:fO~O%f:kO~P&2lOP$zqR$zq[$zqo$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq#}$zq([$zq(m$zq!Y$zq!Z$zq~P&NlO})zO!P){O(u%POP'faR'fa['fak'fao'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa#}'fa(['fa(m'fa(t'fa!Y'fa!Z'fa~O})zO!P){OP'haR'ha['hak'hao'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha#}'ha(['ha(m'ha(t'ha(u'ha!Y'ha!Z'ha~OP$|qR$|q[$|qo$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q#}$|q([$|q(m$|q!Y$|q!Z$|q~P&NlOg%b!Z!Y%b!Z#]%b!Z#}%b!Z~P!0kOo:oO!d#vO(m'mO~O!V:pO~P#.aO!Y'lq!Z'lq~P#AbO!Y#e!Z!Z#e!Z~P#AbO#h%b!ZP%b!ZR%b!Z[%b!Za%b!Zo%b!Z!Y%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z'u%b!Z([%b!Z(m%b!Z!h%b!Z!V%b!Z's%b!Z#]%b!Zs%b!Z![%b!Z%f%b!Z!d%b!Z~P#.aOo:xO!d#vO(m'mO~OP%b!ZR%b!Z[%b!Zo%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z#}%b!Z([%b!Z(m%b!Z!Y%b!Z!Z%b!Z~P&NlOs(aX~P1qO}%pO~P!(oO(P!lO~P!(oO!VfX!YfX#]fX~P&+QOP]XR]X[]Xo]X}]X!P]X!Y]X!YfX!i]X!m]X#O]X#P]X#]]X#]fX#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X~O!dfX!h]X!hfX(mfX~P'BxOP;POQ;POSfOd<zOe!iOmkOo;POpkOqkOwkOy;PO{;PO!PWO!TkO!UkO![XO!f;SO!iZO!l;PO!m;PO!n;PO!p;TO!r;WO!u!hO$V!kO(O)XO(QTO(TUO([VO(j[O(y<xO~O!Y;dO!Z$oa~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;oO!P${O![$|O!f=PO!i$xO#g;uO$V%_O$r;qO$t;sO$w%`O(O(rO(QTO(TUO([$uO(t$}O(u%PO~O#t)`O~P'GnOo!bX(m!bX~P# ZO!Z]X!ZfX~P'BxO!VfX!V$xX!YfX!Y$xX#]fX~P!/gO#h;XO~O!d#vO#h;XO~O#];iO~O#s;]O~O#];xO!Y(rX!Z(rX~O#];iO!Y(pX!Z(pX~O#h;yO~Og;{O~P!0kO#h<RO~O#h<SO~O!d#vO#h<TO~O!d#vO#h;yO~O#}<UO~P#AbO#h<VO~O#h<WO~O#h<]O~O#h<^O~O#h<_O~O#h<`O~O#}<aO~P!0kO#}<bO~P!0kO#P#Q#R#T#U#X#f#g#r(y$r$t$w%Z%e%f%g%n%p%s%t%v%x~'yT#l!U'w(P#mp#k#no}'x$['x(O$^(`~",goto:"$4Q)XPPPPPP)YPP)]P)nP+O/PPPPP5xPP6`PP<V?mP@QP@QPPP@QPBRP@QP@QP@QPBVPB[PByPGrPPPGvPPPPGvJxPPPKOKzPGvPGvPPNYGvPPPGvPGvP!!aGvP!%v!&{!'UP!'x!'|!'x!+YPPPPPPP!+y!&{PP!,Z!-gP!0jGvGv!0o!3z!8b!8b!<`PPP!<hGvPPPPPPPPPPP!?vP!ATPPGv!BfPGvPGvGvGvGvGvPGv!CxP!GRP!JWP!J[!Jf!Jj!JjP!GOP!Jn!JnP!MsP!MwGvGv!M}##RBV@QP@QP@Q@QP#$_@Q@Q#&j@Q#)Z@Q#+`@Q@Q#,O#.]#.]#.b#.k#.]#.wP#.]P@Q#/a@Q#3S@Q@Q5xPPP#6{PPP#7f#7fP#7fP#7|#7fPP#8SP#7yP#7y#8g#7y#9R#9X5u)]#9[)]P#9c#9c#9cP)]P)]P)]P)]PP)]P#9i#9lP#9l)]P#9pP#9sP)]P)]P)]P)]P)]P)])]PP#9y#:P#:[#:b#:h#:n#:t#;S#;Y#;d#;j#;t#;z#<[#<b#=S#=f#=l#=r#>Q#>g#@V#@e#@l#BR#Ba#C|#D[#Db#Dh#Dn#Dx#EO#EU#E`#Er#ExPPPPPPPPPP#FOPPPPPPP#Fs#Iz#KZ#Kb#KjPPP$!sP$!|$%t$,^$,a$,d$-P$-S$-Z$-cP$-i$-lP$.Y$.^$/U$0d$0i$1PPP$1U$1[$1`P$1c$1g$1k$2a$2x$3a$3e$3h$3k$3q$3t$3x$3|R!|RoqOXst!Z#d%k&o&q&r&t,k,p1|2PY!vQ']-]1a5eQ%rvQ%zyQ&R|Q&g!VS'T!e-TQ'c!iS'i!r!yU*e$|*V*jQ+i%{Q+v&TQ,[&aQ-Z'[Q-e'dQ-m'jQ0R*lQ1k,]R;v;T%QdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V,h,k,p-a-i-w-}.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3^5b5m5}6O6R6f8R8X8h8rS#q];Q!r)Z$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{U*y%[;n;oQ+n%}Q,^&dQ,e&lQ0m+aQ0q+cQ0|+oQ1s,cQ3Q._Q5O0wQ5t1lQ6r3UQ7s5PR8x6t'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{t!nQ!r!v!y!z'T'[']'i'j'k-T-Z-]-m1a5e5g$|$ti#v$b$c$d$x${%O%Q%]%^%b)u){)}*P*R*U*[*b*r*s+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4m4u4x5l6p7_7h8U8u9T9b9l:O:c:k;g;h;j;k;l;m;p;q;r;s;t;u;|;}<O<P<R<S<V<W<X<Y<Z<[<]<^<a<b<x=Q=R=U=VQ&U|Q'R!eU'X%g*V-WQ+n%}Q,^&dQ0c*|Q0|+oQ1R+uQ1r,bQ1s,cQ5O0wQ5X1TQ5t1lQ5w1nQ5x1qQ7s5PQ7v5UQ8a5zQ9g7wR9r8^rnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PR,`&h&x^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<z<{[#]WZ#W#Z'U(P!b%hm#h#i#l$x%c%f(Y(d(e(f*U*Y*]+T+U+W,g,}-{.R.S.T.V/e/h2U2|2}4Q6[6mQ%uxQ%yyS&O|&TQ&[!TQ'`!hQ'b!iQ(m#sS+h%z%{Q+l%}Q,V&_Q,Z&aS-d'c'dQ.a(nQ0u+iQ0{+oQ0}+pQ1Q+tQ1f,WS1j,[,]Q2n-eQ4}0wQ5R0zQ5W1SQ5s1kQ7r5PQ7u5TQ9c7qR:^9d!O$zi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=R!S%wy!i!u%y%z%{'S'b'c'd'h'r*d+h+i-Q-d-e-l/y0u2g2n2u4dQ+b%uQ+{&XQ,O&YQ,Y&aQ.`(mQ1e,VU1i,Z,[,]Q3V.aQ5n1fS5r1j1kQ8]5s#^<|#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vo<};g;h;k;m;q;s;u;}<P<S<W<Y<[<^<bW%Ti%V*t<xS&X!Q&fQ&Y!RQ&Z!SR+y&V$}%Si#v$b$c$d$x${%O%Q%]%^%b)u){)}*P*R*U*[*b*r*s+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4m4u4x5l6p7_7h8U8u9T9b9l:O:c:k;g;h;j;k;l;m;p;q;r;s;t;u;|;}<O<P<R<S<V<W<X<Y<Z<[<]<^<a<b<x=Q=R=U=VT)v$u)wV*y%[;n;oW'X!e%g*V-WS(y#y#zQ+]%pQ+s&QS.Y(i(jQ1[,PQ4n0`R7{5^'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{$i$^c#Y#e%o%q%s(O(U(p(u(})O)P)Q)R)S)T)U)V)W)Y)[)^)c)m+^+r-R-p-u-z-|.k.n.r.t.u.v/X0e2]2`2p2w3]3b3c3d3e3f3g3h3i3j3k3l3m3n3q3r3y4r4{6_6e6j6y6z7T7U7}8l8p8z9Q9R9{:`:g;R<oT#TV#U'PkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{Q'V!eR2c-Tv!nQ!e!r!v!y!z'T'[']'i'j'k-T-Z-]-m1a5e5gU*d$|*V*jS/y*e*lQ0S*mQ1^,RQ4d0RR4g0UnqOXst!Z#d%k&o&q&r&t,k,p1|2PQ&v!^Q's!xS(o#u;XQ+f%xQ,T&[Q,U&^Q-b'aQ-o'lS.j(t;yS0f+R<TQ0s+gQ1`,SQ2T,rQ2V,sQ2_-OQ2l-cQ2o-gS4s0g<_Q4y0tS4|0v<`Q6^2aQ6b2mQ6g2tQ7p4zQ8m6`Q8n6cQ8q6hR9x8j$d$]c#Y#e%q%s(O(U(p(u(})O)P)Q)R)S)T)U)V)W)Y)[)^)c)m+^+r-R-p-u-z-|.k.n.r.u.v/X0e2]2`2p2w3]3b3c3d3e3f3g3h3i3j3k3l3m3n3q3r3y4r4{6_6e6j6y6z7T7U7}8l8p8z9Q9R9{:`:g;R<oS(k#p'fQ({#zS+[%o.tS.Z(j(lR3O.['OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{S#q];QQ&q!XQ&r!YQ&t![Q&u!]R1{,nQ'^!hQ+_%uQ-`'`S.](m+bQ2j-_W3S.`.a0l0nQ6a2kW6n3P3R3V4wU8t6o6q6sU9}8v8w8yS:i9|:PQ:t:jR:z:uU!wQ']-]T5c1a5e!Q_OXZ`st!V!Z#d#h%c%k&f&h&o&q&r&t(f,k,p.S1|2P]!pQ!r']-]1a5eT#q];Q%[{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rS(y#y#zS.Y(i(j!s<f$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{U$fd)Z,eS(l#p'fU*q%R(s3pU0b*x.f7PQ4w0mQ6o3QQ8w6rR:P8xm!tQ!r!v!y!z']'i'j'k-]-m1a5e5gQ'q!uS(b#g1vS-k'h'tQ/k*XQ/w*dQ2v-nQ4U/lS4_/x0SQ7Z4PS7f4e4gQ9V7[Q9Z7cQ9`7iS:X9[9]S:n:Y:ZS:w:o:pR:}:xQ#wbQ'p!uS(a#g1vS(c#m+QQ+S%dQ+d%vQ+j%|U-j'h'q'tQ.O(bQ/j*XQ/v*dQ/|*gQ0r+eQ1g,XS2s-k-nQ2{.WS4T/k/lS4^/w0SQ4a/{Q4c/}Q5p1hQ6i2vQ7Y4PQ7^4US7b4_4gQ7g4fQ8Z5qS9U7Z7[Q9Y7cQ9^7fQ9a7jQ9o8[Q:V9VS:W9Z9]Q:[9`Q:e9pS:m:X:ZS:v:n:pQ:|:wQ;O:}Q<i<dQ<t<mR<u<nV!wQ']-]%[aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rS#wz!j!r<c$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{R<i<z%[bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rQ%dj!S%vy!i!u%y%z%{'S'b'c'd'h'r*d+h+i-Q-d-e-l/y0u2g2n2u4dS%|z!jQ+e%wQ,X&aW1h,Y,Z,[,]U5q1i1j1kS8[5r5sQ9p8]!r<d$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{Q<m<yR<n<z%OeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rY#bWZ#W#Z(P!b%hm#h#i#l$x%c%f(Y(d(e(f*U*Y*]+T+U+W,g,}-{.R.S.T.V/e/h2U2|2}4Q6[6mQ,f&l!p<e$Z$n)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{R<h'UU'Y!e%g*VR2e-W%QdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V,h,k,p-a-i-w-}.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3^5b5m5}6O6R6f8R8X8h8r!r)Z$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{Q,e&lQ0m+aQ3Q._Q6r3UR8x6t!b$Tc#Y%o(O(U(p(u)V)W)[)c+r-p-u-z-|.k.n/X0e2p2w3]3m4r4{6e6j6y8p9{;R!P;_)Y)m-R.t2]2`3b3k3l3q3y6_6z7T7U7}8l8z9Q9R:`:g<o!f$Vc#Y%o(O(U(p(u)S)T)V)W)[)c+r-p-u-z-|.k.n/X0e2p2w3]3m4r4{6e6j6y8p9{;R!T;a)Y)m-R.t2]2`3b3h3i3k3l3q3y6_6z7T7U7}8l8z9Q9R:`:g<o!^$Zc#Y%o(O(U(p(u)[)c+r-p-u-z-|.k.n/X0e2p2w3]3m4r4{6e6j6y8p9{;RQ3}/cz<{)Y)m-R.t2]2`3b3q3y6_6z7T7U7}8l8z9Q9R:`:g<oQ=Q=SR=R=T'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{S$oh$pR3v.|'VgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.|.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{T$kf$qQ$ifS)f$l)jR)r$qT$jf$qT)h$l)j'VhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.|.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{T$oh$pQ$rhR)q$p%[jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8r!s<y$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{#elOPXZst!Z!`!o#S#d#o#{$n%k&h&k&l&o&q&r&t&x'Q'_(z)o+V+a,h,k,p-a._.}/f0a1d1t1u1w1y1|2P2R3U3u5b5m5}6O6R6t8R8X8h!O%Ri$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=R#^(s#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=VQ*}%`Q/Y)zo3p;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<b!O$yi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=RQ*^$zU*g$|*V*jQ+O%aQ/}*h#^<k#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vn<l;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<bQ<p<|Q<q<}Q<r=OR<s=P!O%Ri$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=R#^(s#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vo3p;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<bnoOXst!Z#d%k&o&q&r&t,k,p1|2PS*a${*UQ,y&{Q,z&}R4X/p$|%Si#v$b$c$d$x${%O%Q%]%^%b)u){)}*P*R*U*[*b*r*s+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4m4u4x5l6p7_7h8U8u9T9b9l:O:c:k;g;h;j;k;l;m;p;q;r;s;t;u;|;}<O<P<R<S<V<W<X<Y<Z<[<]<^<a<b<x=Q=R=U=VQ+|&YQ1Y,OQ5[1XR7z5]V*i$|*V*jU*i$|*V*jT5d1a5eU/{*f/f5bS4f0T8RR7j4hQ+d%vQ/|*gQ0r+eQ1g,XQ5p1hQ8Z5qQ9o8[R:e9p!O%Oi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=Rr)}$v)a*O*p+P/n0Z0[3s4V4q7X7k:U<j<v<wS0V*o0W#^;j#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vn;k;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<b!`;|(q)_*W*`.b.e.i/U/Z/c/s0k1V1X3Y4W4[5Z5]6u6x7`7d7m7o9X9_:]:l=S=T`;}3o6{7O7S8{:Q:T:{S<X.d3ZT<Y6}9O!O%Qi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=Rv*P$v)a*Q*o+P/_/n0Z0[3s4V4i4q7X7k:U<j<v<wS0X*p0Y#^;l#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vn;m;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<b!d<O(q)_*W*`.c.d.i/U/Z/c/s0k1V1X3W3Y4W4[5Z5]6u6v6x7`7d7m7o9X9_:]:l=S=Td<P3o6|6}7S8{8|:Q:R:T:{S<Z.e3[T<[7O9PrnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PQ&c!UR,h&lrnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PR&c!UQ,Q&ZR1U+ysnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PQ1b,VS5k1e1fU8T5i5j5nS9k8V8WS:a9j9mQ:q:bR:y:rQ&j!VR,a&fR5w1nS&O|&TR0}+pQ&o!WR,k&pR,q&uT1},p2PR,u&vQ,t&vR2W,uQ'v!{R-q'vSsOtQ#dXT%ns#dQ#OTR'x#OQ#RUR'z#RQ)w$uR/V)wQ#UVR'|#UQ#XWU(S#X(T-xQ(T#YR-x(UQ-U'VR2d-UQ.m(uS3_.m3`R3`.nQ-]']R2h-]Y!rQ']-]1a5eR'g!rQ.x)aR3t.xU#_W%f*UU(Z#_([-yQ([#`R-y(VQ-X'YR2f-Xt`OXst!V!Z#d%k&f&h&o&q&r&t,k,p1|2PS#hZ%cU#r`#h.SR.S(fQ(g#jQ.P(cW.X(g.P2y6kQ2y.QR6k2zQ)j$lR/O)jQ$phR)p$pQ$`cU)]$`-t;eQ-t;RR;e)mQ/i*XW4R/i4S7]9WU4S/j/k/lS7]4T4UR9W7^$Z)|$v(q)_)a*W*`*o*p*z*{+P.d.e.g.h.i/U/Z/_/a/c/n/s0Z0[0k1V1X3W3X3Y3o3s4V4W4[4i4k4q5Z5]6u6v6w6x6}7O7Q7R7S7X7`7d7k7m7o8{8|8}9X9_:Q:R:S:T:U:]:l:{<j<v<w=S=TQ/q*`U4Z/q4]7aQ4]/sR7a4[S*j$|*VR0P*jr*O$v)a*o*p+P/n0Z0[3s4V4q7X7k:U<j<v<w!`.b(q)_*W*`.d.e.i/U/Z/c/s0k1V1X3Y4W4[5Z5]6u6x7`7d7m7o9X9_:]:l=S=TU/`*O.b6{a6{3o6}7O7S8{:Q:T:{Q0W*oQ3Z.dU4j0W3Z9OR9O6}v*Q$v)a*o*p+P/_/n0Z0[3s4V4i4q7X7k:U<j<v<w!d.c(q)_*W*`.d.e.i/U/Z/c/s0k1V1X3W3Y4W4[5Z5]6u6v6x7`7d7m7o9X9_:]:l=S=TU/b*Q.c6|e6|3o6}7O7S8{8|:Q:R:T:{Q0Y*pQ3[.eU4l0Y3[9PR9P7OQ*u%UR0^*uQ4v0kR7n4vQ+X%iR0j+XQ5_1[S7|5_9iR9i7}Q,S&[R1_,SQ5e1aR8P5eQ1m,^S5u1m8_R8_5wQ0x+lW5Q0x5S7t9eQ5S0{Q7t5RR9e7uQ+q&OR1O+qQ2P,pR6V2PYrOXst#dQ&s!ZQ+Z%kQ,j&oQ,l&qQ,m&rQ,o&tQ1z,kS1},p2PR6U1|Q%mpQ&w!_Q&z!aQ&|!bQ'O!cQ'n!uQ+Y%jQ+f%xQ+x&UQ,`&jQ,w&yW-h'h'p'q'tQ-o'lQ0O*iQ0s+gS1p,a,dQ2X,vQ2Y,yQ2Z,zQ2o-gW2q-j-k-n-pQ4y0tQ5V1RQ5Y1VQ5o1gQ5y1rQ6T1{U6d2p2s2vQ6g2tQ7p4zQ7x5XQ7y5ZQ8O5dQ8Y5pQ8`5xS8o6e6iQ8q6hQ9f7vQ9n8ZQ9s8aQ9z8pQ:_9gQ:d9oQ:h9{R:s:eQ%xyQ'a!iQ'l!uU+g%y%z%{Q-O'SU-c'b'c'dS-g'h'rQ/u*dS0t+h+iQ2a-QS2m-d-eQ2t-lQ4`/yQ4z0uQ6`2gQ6c2nQ6h2uR7e4dS$wi<xR*v%VU%Ui%V<xR0]*tQ$viS(q#v+cS)_$b$cQ)a$dQ*W$xS*`${*UQ*o%OQ*p%QQ*z%]Q*{%^Q+P%bQ.d;jQ.e;lQ.g;pQ.h;rQ.i;tQ/U)uS/Z){/]Q/_)}Q/a*PQ/c*RQ/n*[S/s*b/eQ0Z*rQ0[*sh0k+`.^1c3T5l6p8U8u9l:O:c:kQ1V+zQ1X+}Q3W;|Q3X<OQ3Y<RS3o;g;hQ3s.wQ4V/oQ4W/pQ4[/rQ4i0VQ4k0XQ4q0dQ5Z1WQ5]1ZQ6u<VQ6v<XQ6w<ZQ6x<]Q6};kQ7O;mQ7Q;qQ7R;sQ7S;uQ7X3}Q7`4YQ7d4bQ7k4mQ7m4uQ7o4xQ8{<SQ8|;}Q8}<PQ9X7_Q9_7hQ:Q<WQ:R<YQ:S<[Q:T<^Q:U9TQ:]9bQ:l<aQ:{<bQ<j<xQ<v=QQ<w=RQ=S=UR=T=VQ*x%[Q.f;nR7P;onpOXst!Z#d%k&o&q&r&t,k,p1|2PQ!fPS#fZ#oQ&y!`U'e!o5b8RQ'{#SQ(|#{Q)n$nS,d&h&kQ,i&lQ,v&xQ,{'QQ-_'_Q.p(zQ/S)oS0h+V/fQ0n+aQ1x,hQ2k-aQ3R._Q3x.}Q4o0aQ5j1dQ5{1tQ5|1uQ6Q1wQ6S1yQ6X2RQ6s3UQ7V3uQ8W5mQ8d5}Q8e6OQ8g6RQ8y6tQ9m8XR9w8h#YcOPXZst!Z!`!o#d#o#{%k&h&k&l&o&q&r&t&x'Q'_(z+V+a,h,k,p-a._/f0a1d1t1u1w1y1|2P2R3U5b5m5}6O6R6t8R8X8hQ#YWQ#eYQ%ouQ%qvS%sw!gS(O#W(RQ(U#ZQ(p#uQ(u#xQ(}$OQ)O$PQ)P$QQ)Q$RQ)R$SQ)S$TQ)T$UQ)U$VQ)V$WQ)W$XQ)Y$ZQ)[$_Q)^$aQ)c$eW)m$n)o.}3uQ+^%rQ+r&PS-R'U2bQ-p'oS-u(P-wQ-z(XQ-|(`Q.k(tQ.n(vQ.r;PQ.t;SQ.u;TQ.v;WQ/X)yQ0e+RQ2],|Q2`-PQ2p-iQ2w-}Q3].lQ3b;XQ3c;YQ3d;ZQ3e;[Q3f;]Q3g;^Q3h;_Q3i;`Q3j;aQ3k;bQ3l;cQ3m.sQ3n;fQ3q;iQ3r;vQ3y;dQ4r0gQ4{0vQ6_;xQ6e2rQ6j2xQ6y3^Q6z;yQ7T;{Q7U<TQ7}5`Q8l6]Q8p6fQ8z<UQ9Q<_Q9R<`Q9{8rQ:`9hQ:g9yQ;R#SR<o<{R#[WR'W!el!tQ!r!v!y!z']'i'j'k-]-m1a5e5gS'S!e-TS-Q'T'[R2g-ZR(w#xQ!fQT-[']-]]!qQ!r']-]1a5eQ#p]R'f;QR)b$dY!uQ']-]1a5eQ'h!rS'r!v!yS't!z5gS-l'i'jQ-n'kR2u-mT#kZ%cS#jZ%cS%im,gU(c#h#i#lS.Q(d(eQ.U(fQ0i+WQ2z.RU2{.S.T.VS6l2|2}R8s6md#^W#W#Z%f(P(Y*U+T-{/er#gZm#h#i#l%c(d(e(f+W.R.S.T.V2|2}6mS*X$x*]Q/l*YQ1v,gQ2^,}Q4P/hQ6Z2UQ7[4QQ8k6[T<g'U+UV#aW%f*UU#`W%f*US(Q#W(YU(V#Z+T/eS-S'U+UT-v(P-{V'Z!e%g*VQ$lfR)t$qT)i$l)jR3w.|T*Z$x*]T*c${*UQ0l+`Q3P.^Q5i1cQ6q3TQ8V5lQ8v6pQ9j8UQ9|8uQ:b9lQ:j:OQ:r:cR:u:knqOXst!Z#d%k&o&q&r&t,k,p1|2PQ&i!VR,`&ftmOXst!U!V!Z#d%k&f&o&q&r&t,k,p1|2PR,g&lT%jm,gR1],PR,_&dQ&S|R+w&TR+m%}T&m!W&pT&n!W&pT2O,p2P",nodeNames:"⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",maxTerm:376,context:e2,nodeProps:[["isolate",-8,5,6,14,34,36,48,50,52,""],["group",-26,9,17,19,65,204,208,212,213,215,218,221,231,233,239,241,243,245,248,254,260,262,264,266,268,270,271,"Statement",-34,13,14,29,32,33,39,48,51,52,54,59,67,69,73,77,79,81,82,107,108,117,118,135,138,140,141,142,143,144,146,147,166,167,169,"Expression",-23,28,30,34,38,40,42,171,173,175,176,178,179,180,182,183,184,186,187,188,198,200,202,203,"Type",-3,85,100,106,"ClassItem"],["openedBy",23,"<",35,"InterpolationStart",53,"[",57,"{",70,"(",159,"JSXStartCloseTag"],["closedBy",24,">",37,"InterpolationEnd",47,"]",58,"}",71,")",164,"JSXEndTag"]],propSources:[s2],skippedNodes:[0,5,6,274],repeatNodeCount:37,tokenData:"$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(U!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(U!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(RpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(RpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Rp(U!b'w0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(S#S$h&j'x0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Rp(U!b'x0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!m),Q(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(Q':f$h&j(U!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(U!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(U!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(U!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(U!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Rp(U!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Rp(U!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(U!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(U!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(RpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(RpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Rp(U!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(j%1l(Rp(U!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Rp(U!b$[#t(O,2j(`$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Rp(U!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Rp(U!b#m(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(u+JY$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(T';W$h&j(RpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(RpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(RpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(RpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(RpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!i/.^$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!h!Lf$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Rp(U!b(P%&f#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Rp(U!b#k(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Rp(U!bo+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Y+Jf$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Rp(U!b}.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!X!L^$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Rp(U!b#l(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(U!b!U7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!U7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!U7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!U7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!U7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(U!b!U7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(U!b!U7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(U!b!U7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(U!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(U!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Rp!U7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Rp!U7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Rp!U7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Rp!U7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(RpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(RpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Rp(U!b!U7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Rp(U!b!U7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Rp(U!b!U7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Rp(U!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Rp(U!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Rp(U!b'y0/l!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Rp(U!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(U!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(U!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(RpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(RpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Rp(U!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!d$b$h&j#})Lv(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#O-<U(Rp(U!b(y7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#o(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#p(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#]*!Y$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#h(Cl$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#p(Ch$e#|$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#p(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#o(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#o(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(m(Ct$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!y$Ip$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!P0,v$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!V#)l$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Rp(U!b([+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Rp(U!b(O,2j$^#t(`$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Rp(U!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X![#Hb(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(t+JY$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z(Kd$?V_!Z(Cds`$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!n7`$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Rp(U!b'w0/l$[#t(O,2j(`$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Rp(U!b'x0/l$[#t(O,2j(`$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",tokenizers:[n2,r2,i2,2,3,4,5,6,7,8,9,10,11,12,13,14,t2,new Xi("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOu~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!R~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(^~~",141,335),new Xi("j~RQYZXz{^~^O'{~~aP!P!Qd~iO'|~~",25,318)],topRules:{Script:[0,7],SingleExpression:[1,272],SingleClassItem:[2,273]},dialects:{jsx:0,ts:14725},dynamicPrecedences:{77:1,79:1,91:1,167:1,196:1},specialized:[{term:322,get:r=>o2[r]||-1},{term:338,get:r=>a2[r]||-1},{term:92,get:r=>l2[r]||-1}],tokenPrec:14749}),Ed=[Be("function ${name}(${params}) {\n	${}\n}",{label:"function",detail:"definition",type:"keyword"}),Be("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}",{label:"for",detail:"loop",type:"keyword"}),Be("for (let ${name} of ${collection}) {\n	${}\n}",{label:"for",detail:"of loop",type:"keyword"}),Be("do {\n	${}\n} while (${})",{label:"do",detail:"loop",type:"keyword"}),Be("while (${}) {\n	${}\n}",{label:"while",detail:"loop",type:"keyword"}),Be(`try {
	\${}
} catch (\${error}) {
	\${}
}`,{label:"try",detail:"/ catch block",type:"keyword"}),Be("if (${}) {\n	${}\n}",{label:"if",detail:"block",type:"keyword"}),Be(`if (\${}) {
	\${}
} else {
	\${}
}`,{label:"if",detail:"/ else block",type:"keyword"}),Be(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`,{label:"class",detail:"definition",type:"keyword"}),Be('import {${names}} from "${module}"\n${}',{label:"import",detail:"named",type:"keyword"}),Be('import ${name} from "${module}"\n${}',{label:"import",detail:"default",type:"keyword"})],u2=Ed.concat([Be("interface ${name} {\n	${}\n}",{label:"interface",detail:"definition",type:"keyword"}),Be("type ${name} = ${type}",{label:"type",detail:"definition",type:"keyword"}),Be("enum ${name} {\n	${}\n}",{label:"enum",detail:"definition",type:"keyword"})]),Rc=new Fh,Id=new Set(["Script","Block","FunctionExpression","FunctionDeclaration","ArrowFunction","MethodDeclaration","ForStatement"]);function Hn(r){return(e,t)=>{let n=e.node.getChild("VariableDefinition");return n&&t(n,r),!0}}const h2=["FunctionDeclaration"],d2={FunctionDeclaration:Hn("function"),ClassDeclaration:Hn("class"),ClassExpression:()=>!0,EnumDeclaration:Hn("constant"),TypeAliasDeclaration:Hn("type"),NamespaceDeclaration:Hn("namespace"),VariableDefinition(r,e){r.matchContext(h2)||e(r,"variable")},TypeDefinition(r,e){e(r,"type")},__proto__:null};function Dd(r,e){let t=Rc.get(e);if(t)return t;let n=[],s=!0;function o(a,l){let c=r.sliceString(a.from,a.to);n.push({label:c,type:l})}return e.cursor(ie.IncludeAnonymous).iterate(a=>{if(s)s=!1;else if(a.name){let l=d2[a.name];if(l&&l(a,o)||Id.has(a.name))return!1}else if(a.to-a.from>8192){for(let l of Dd(r,a.node))n.push(l);return!1}}),Rc.set(e,n),n}const Ac=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,Xd=["TemplateString","String","RegExp","LineComment","BlockComment","VariableDefinition","TypeDefinition","Label","PropertyDefinition","PropertyName","PrivatePropertyDefinition","PrivatePropertyName",".","?."];function f2(r){let e=xe(r.state).resolveInner(r.pos,-1);if(Xd.indexOf(e.name)>-1)return null;let t=e.name=="VariableName"||e.to-e.from<20&&Ac.test(r.state.sliceDoc(e.from,e.to));if(!t&&!r.explicit)return null;let n=[];for(let s=e;s;s=s.parent)Id.has(s.name)&&(n=n.concat(Dd(r.state.doc,s)));return{options:n,from:t?e.from:r.pos,validFor:Ac}}const Mt=Xn.define({name:"javascript",parser:c2.configure({props:[Ki.add({IfStatement:mi({except:/^\s*({|else\b)/}),TryStatement:mi({except:/^\s*({|catch\b|finally\b)/}),LabeledStatement:QO,SwitchBody:r=>{let e=r.textAfter,t=/^\s*\}/.test(e),n=/^\s*(case|default)\b/.test(e);return r.baseIndent+(t?0:n?1:2)*r.unit},Block:$O({closing:"}"}),ArrowFunction:r=>r.baseIndent+r.unit,"TemplateString BlockComment":()=>null,"Statement Property":mi({except:/^{/}),JSXElement(r){let e=/^\s*<\//.test(r.textAfter);return r.lineIndent(r.node.from)+(e?0:r.unit)},JSXEscape(r){let e=/\s*\}/.test(r.textAfter);return r.lineIndent(r.node.from)+(e?0:r.unit)},"JSXOpenTag JSXSelfClosingTag"(r){return r.column(r.node.from)+r.unit}}),Oa.add({"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType":od,BlockComment(r){return{from:r.from+2,to:r.to-2}}})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\}|<\/)$/,wordChars:"$"}}),Yd={test:r=>/^JSX/.test(r.name),facet:td({commentTokens:{block:{open:"{/*",close:"*/}"}}})},zd=Mt.configure({dialect:"ts"},"typescript"),Wd=Mt.configure({dialect:"jsx",props:[fa.add(r=>r.isTop?[Yd]:void 0)]}),Ld=Mt.configure({dialect:"jsx ts",props:[fa.add(r=>r.isTop?[Yd]:void 0)]},"typescript");let Bd=r=>({label:r,type:"keyword"});const Vd="break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Bd),p2=Vd.concat(["declare","implements","private","protected","public"].map(Bd));function Io(r={}){let e=r.jsx?r.typescript?Ld:Wd:r.typescript?zd:Mt,t=r.typescript?u2.concat(p2):Ed.concat(Vd);return new pa(e,[Mt.data.of({autocomplete:UO(Xd,qO(t))}),Mt.data.of({autocomplete:f2}),r.jsx?g2:[]])}function m2(r){for(;;){if(r.name=="JSXOpenTag"||r.name=="JSXSelfClosingTag"||r.name=="JSXFragmentTag")return r;if(r.name=="JSXEscape"||!r.parent)return null;r=r.parent}}function Zc(r,e,t=r.length){for(let n=e==null?void 0:e.firstChild;n;n=n.nextSibling)if(n.name=="JSXIdentifier"||n.name=="JSXBuiltin"||n.name=="JSXNamespacedName"||n.name=="JSXMemberExpression")return r.sliceString(n.from,Math.min(n.to,t));return""}const O2=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),g2=z.inputHandler.of((r,e,t,n,s)=>{if((O2?r.composing:r.compositionStarted)||r.state.readOnly||e!=t||n!=">"&&n!="/"||!Mt.isActiveAt(r.state,e,-1))return!1;let o=s(),{state:a}=o,l=a.changeByRange(c=>{var u;let{head:h}=c,d=xe(a).resolveInner(h-1,-1),f;if(d.name=="JSXStartTag"&&(d=d.parent),!(a.doc.sliceString(h-1,h)!=n||d.name=="JSXAttributeValue"&&d.to>h)){if(n==">"&&d.name=="JSXFragmentTag")return{range:c,changes:{from:h,insert:"</>"}};if(n=="/"&&d.name=="JSXStartCloseTag"){let p=d.parent,m=p.parent;if(m&&p.from==h-2&&((f=Zc(a.doc,m.firstChild,h))||((u=m.firstChild)===null||u===void 0?void 0:u.name)=="JSXFragmentTag")){let O=`${f}>`;return{range:Q.cursor(h+O.length,-1),changes:{from:h,insert:O}}}}else if(n==">"){let p=m2(d);if(p&&p.name=="JSXOpenTag"&&!/^\/?>|^<\//.test(a.doc.sliceString(h,h+2))&&(f=Zc(a.doc,p,h)))return{range:c,changes:{from:h,insert:`</${f}>`}}}}return{range:c}});return l.changes.empty?!1:(r.dispatch([o,a.update(l,{userEvent:"input.complete",scrollIntoView:!0})]),!0)}),Kn=["_blank","_self","_top","_parent"],Xs=["ascii","utf-8","utf-16","latin1","latin1"],Ys=["get","post","put","delete"],zs=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],_e=["true","false"],I={},v2={a:{attrs:{href:null,ping:null,type:null,media:null,target:Kn,hreflang:null}},abbr:I,address:I,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:I,aside:I,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:I,base:{attrs:{href:null,target:Kn}},bdi:I,bdo:I,blockquote:{attrs:{cite:null}},body:I,br:I,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:zs,formmethod:Ys,formnovalidate:["novalidate"],formtarget:Kn,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:I,center:I,cite:I,code:I,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:I,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:I,div:I,dl:I,dt:I,em:I,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:I,figure:I,footer:I,form:{attrs:{action:null,name:null,"accept-charset":Xs,autocomplete:["on","off"],enctype:zs,method:Ys,novalidate:["novalidate"],target:Kn}},h1:I,h2:I,h3:I,h4:I,h5:I,h6:I,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:I,hgroup:I,hr:I,html:{attrs:{manifest:null}},i:I,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:zs,formmethod:Ys,formnovalidate:["novalidate"],formtarget:Kn,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:I,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:I,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:I,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:Xs,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:I,noscript:I,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:I,param:{attrs:{name:null,value:null}},pre:I,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:I,rt:I,ruby:I,samp:I,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:Xs}},section:I,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:I,source:{attrs:{src:null,type:null,media:null}},span:I,strong:I,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:I,summary:I,sup:I,table:I,tbody:I,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:I,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:I,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:I,time:{attrs:{datetime:null}},title:I,tr:I,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:I,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:I},Nd={accesskey:null,class:null,contenteditable:_e,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:_e,autocorrect:_e,autocapitalize:_e,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":_e,"aria-autocomplete":["inline","list","both","none"],"aria-busy":_e,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":_e,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":_e,"aria-hidden":_e,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":_e,"aria-multiselectable":_e,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":_e,"aria-relevant":null,"aria-required":_e,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},qd="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(r=>"on"+r);for(let r of qd)Nd[r]=null;class Li{constructor(e,t){this.tags=Object.assign(Object.assign({},v2),e),this.globalAttrs=Object.assign(Object.assign({},Nd),t),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}}Li.default=new Li;function Ln(r,e,t=r.length){if(!e)return"";let n=e.firstChild,s=n&&n.getChild("TagName");return s?r.sliceString(s.from,Math.min(s.to,t)):""}function Bn(r,e=!1){for(;r;r=r.parent)if(r.name=="Element")if(e)e=!1;else return r;return null}function Ud(r,e,t){let n=t.tags[Ln(r,Bn(e))];return(n==null?void 0:n.children)||t.allTags}function Ca(r,e){let t=[];for(let n=Bn(e);n&&!n.type.isTop;n=Bn(n.parent)){let s=Ln(r,n);if(s&&n.lastChild.name=="CloseTag")break;s&&t.indexOf(s)<0&&(e.name=="EndTag"||e.from>=n.firstChild.to)&&t.push(s)}return t}const _d=/^[:\-\.\w\u00b7-\uffff]*$/;function jc(r,e,t,n,s){let o=/\s*>/.test(r.sliceDoc(s,s+5))?"":">",a=Bn(t,!0);return{from:n,to:s,options:Ud(r.doc,a,e).map(l=>({label:l,type:"type"})).concat(Ca(r.doc,t).map((l,c)=>({label:"/"+l,apply:"/"+l+o,type:"type",boost:99-c}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function Ec(r,e,t,n){let s=/\s*>/.test(r.sliceDoc(n,n+5))?"":">";return{from:t,to:n,options:Ca(r.doc,e).map((o,a)=>({label:o,apply:o+s,type:"type",boost:99-a})),validFor:_d}}function w2(r,e,t,n){let s=[],o=0;for(let a of Ud(r.doc,t,e))s.push({label:"<"+a,type:"type"});for(let a of Ca(r.doc,t))s.push({label:"</"+a+">",type:"type",boost:99-o++});return{from:n,to:n,options:s,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}function y2(r,e,t,n,s){let o=Bn(t),a=o?e.tags[Ln(r.doc,o)]:null,l=a&&a.attrs?Object.keys(a.attrs):[],c=a&&a.globalAttrs===!1?l:l.length?l.concat(e.globalAttrNames):e.globalAttrNames;return{from:n,to:s,options:c.map(u=>({label:u,type:"property"})),validFor:_d}}function b2(r,e,t,n,s){var o;let a=(o=t.parent)===null||o===void 0?void 0:o.getChild("AttributeName"),l=[],c;if(a){let u=r.sliceDoc(a.from,a.to),h=e.globalAttrs[u];if(!h){let d=Bn(t),f=d?e.tags[Ln(r.doc,d)]:null;h=(f==null?void 0:f.attrs)&&f.attrs[u]}if(h){let d=r.sliceDoc(n,s).toLowerCase(),f='"',p='"';/^['"]/.test(d)?(c=d[0]=='"'?/^[^"]*$/:/^[^']*$/,f="",p=r.sliceDoc(s,s+1)==d[0]?"":d[0],d=d.slice(1),n++):c=/^[^\s<>='"]*$/;for(let m of h)l.push({label:m,apply:f+m+p,type:"constant"})}}return{from:n,to:s,options:l,validFor:c}}function S2(r,e){let{state:t,pos:n}=e,s=xe(t).resolveInner(n,-1),o=s.resolve(n);for(let a=n,l;o==s&&(l=s.childBefore(a));){let c=l.lastChild;if(!c||!c.type.isError||c.from<c.to)break;o=s=l,a=c.from}return s.name=="TagName"?s.parent&&/CloseTag$/.test(s.parent.name)?Ec(t,s,s.from,n):jc(t,r,s,s.from,n):s.name=="StartTag"?jc(t,r,s,n,n):s.name=="StartCloseTag"||s.name=="IncompleteCloseTag"?Ec(t,s,n,n):s.name=="OpenTag"||s.name=="SelfClosingTag"||s.name=="AttributeName"?y2(t,r,s,s.name=="AttributeName"?s.from:n,n):s.name=="Is"||s.name=="AttributeValue"||s.name=="UnquotedAttributeValue"?b2(t,r,s,s.name=="Is"?n:s.from,n):e.explicit&&(o.name=="Element"||o.name=="Text"||o.name=="Document")?w2(t,r,s,n):null}function C2(r){let{extraTags:e,extraGlobalAttributes:t}=r,n=t||e?new Li(e,t):Li.default;return s=>S2(n,s)}const x2=Mt.parser.configure({top:"SingleExpression"}),Gd=[{tag:"script",attrs:r=>r.type=="text/typescript"||r.lang=="ts",parser:zd.parser},{tag:"script",attrs:r=>r.type=="text/babel"||r.type=="text/jsx",parser:Wd.parser},{tag:"script",attrs:r=>r.type=="text/typescript-jsx",parser:Ld.parser},{tag:"script",attrs(r){return/^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(r.type)},parser:x2},{tag:"script",attrs(r){return!r.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(r.type)},parser:Mt.parser},{tag:"style",attrs(r){return(!r.lang||r.lang=="css")&&(!r.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(r.type))},parser:Yi.parser}],Fd=[{name:"style",parser:Yi.parser.configure({top:"Styles"})}].concat(qd.map(r=>({name:r,parser:Mt.parser}))),Jd=Xn.define({name:"html",parser:E1.configure({props:[Ki.add({Element(r){let e=/^(\s*)(<\/)?/.exec(r.textAfter);return r.node.to<=r.pos+e[0].length?r.continue():r.lineIndent(r.node.from)+(e[2]?0:r.unit)},"OpenTag CloseTag SelfClosingTag"(r){return r.column(r.node.from)+r.unit},Document(r){if(r.pos+/\s*/.exec(r.textAfter)[0].length<r.node.to)return r.continue();let e=null,t;for(let n=r.node;;){let s=n.lastChild;if(!s||s.name!="Element"||s.to!=n.to)break;e=n=s}return e&&!((t=e.lastChild)&&(t.name=="CloseTag"||t.name=="SelfClosingTag"))?r.lineIndent(e.from)+r.unit:null}}),Oa.add({Element(r){let e=r.firstChild,t=r.lastChild;return!e||e.name!="OpenTag"?null:{from:e.to,to:t.name=="CloseTag"?t.from:r.to}}}),ud.add({"OpenTag CloseTag":r=>r.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),vi=Jd.configure({wrap:Zd(Gd,Fd)});function k2(r={}){let e="",t;r.matchClosingTags===!1&&(e="noMatch"),r.selfClosingTags===!0&&(e=(e?e+" ":"")+"selfClosing"),(r.nestedLanguages&&r.nestedLanguages.length||r.nestedAttributes&&r.nestedAttributes.length)&&(t=Zd((r.nestedLanguages||[]).concat(Gd),(r.nestedAttributes||[]).concat(Fd)));let n=t?Jd.configure({wrap:t,dialect:e}):e?vi.configure({dialect:e}):vi;return new pa(n,[vi.data.of({autocomplete:C2(r)}),r.autoCloseTags!==!1?P2:[],Io().support,Sd().support])}const Ic=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),P2=z.inputHandler.of((r,e,t,n,s)=>{if(r.composing||r.state.readOnly||e!=t||n!=">"&&n!="/"||!vi.isActiveAt(r.state,e,-1))return!1;let o=s(),{state:a}=o,l=a.changeByRange(c=>{var u,h,d;let f=a.doc.sliceString(c.from-1,c.to)==n,{head:p}=c,m=xe(a).resolveInner(p,-1),O;if(f&&n==">"&&m.name=="EndTag"){let v=m.parent;if(((h=(u=v.parent)===null||u===void 0?void 0:u.lastChild)===null||h===void 0?void 0:h.name)!="CloseTag"&&(O=Ln(a.doc,v.parent,p))&&!Ic.has(O)){let w=p+(a.doc.sliceString(p,p+1)===">"?1:0),x=`</${O}>`;return{range:c,changes:{from:p,to:w,insert:x}}}}else if(f&&n=="/"&&m.name=="IncompleteCloseTag"){let v=m.parent;if(m.from==p-2&&((d=v.lastChild)===null||d===void 0?void 0:d.name)!="CloseTag"&&(O=Ln(a.doc,v,p))&&!Ic.has(O)){let w=p+(a.doc.sliceString(p,p+1)===">"?1:0),x=`${O}>`;return{range:Q.cursor(p+x.length,-1),changes:{from:p,to:w,insert:x}}}}return{range:c}});return l.changes.empty?!1:(r.dispatch([o,a.update(l,{userEvent:"input.complete",scrollIntoView:!0})]),!0)});var te="colors",Xe="sizes",Z="space",$2={gap:Z,gridGap:Z,columnGap:Z,gridColumnGap:Z,rowGap:Z,gridRowGap:Z,inset:Z,insetBlock:Z,insetBlockEnd:Z,insetBlockStart:Z,insetInline:Z,insetInlineEnd:Z,insetInlineStart:Z,margin:Z,marginTop:Z,marginRight:Z,marginBottom:Z,marginLeft:Z,marginBlock:Z,marginBlockEnd:Z,marginBlockStart:Z,marginInline:Z,marginInlineEnd:Z,marginInlineStart:Z,padding:Z,paddingTop:Z,paddingRight:Z,paddingBottom:Z,paddingLeft:Z,paddingBlock:Z,paddingBlockEnd:Z,paddingBlockStart:Z,paddingInline:Z,paddingInlineEnd:Z,paddingInlineStart:Z,top:Z,right:Z,bottom:Z,left:Z,scrollMargin:Z,scrollMarginTop:Z,scrollMarginRight:Z,scrollMarginBottom:Z,scrollMarginLeft:Z,scrollMarginX:Z,scrollMarginY:Z,scrollMarginBlock:Z,scrollMarginBlockEnd:Z,scrollMarginBlockStart:Z,scrollMarginInline:Z,scrollMarginInlineEnd:Z,scrollMarginInlineStart:Z,scrollPadding:Z,scrollPaddingTop:Z,scrollPaddingRight:Z,scrollPaddingBottom:Z,scrollPaddingLeft:Z,scrollPaddingX:Z,scrollPaddingY:Z,scrollPaddingBlock:Z,scrollPaddingBlockEnd:Z,scrollPaddingBlockStart:Z,scrollPaddingInline:Z,scrollPaddingInlineEnd:Z,scrollPaddingInlineStart:Z,fontSize:"fontSizes",background:te,backgroundColor:te,backgroundImage:te,borderImage:te,border:te,borderBlock:te,borderBlockEnd:te,borderBlockStart:te,borderBottom:te,borderBottomColor:te,borderColor:te,borderInline:te,borderInlineEnd:te,borderInlineStart:te,borderLeft:te,borderLeftColor:te,borderRight:te,borderRightColor:te,borderTop:te,borderTopColor:te,caretColor:te,color:te,columnRuleColor:te,fill:te,outline:te,outlineColor:te,stroke:te,textDecorationColor:te,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Xe,minBlockSize:Xe,maxBlockSize:Xe,inlineSize:Xe,minInlineSize:Xe,maxInlineSize:Xe,width:Xe,minWidth:Xe,maxWidth:Xe,height:Xe,minHeight:Xe,maxHeight:Xe,flexBasis:Xe,gridTemplateColumns:Xe,gridTemplateRows:Xe,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Q2=(r,e)=>typeof e=="function"?{"()":Function.prototype.toString.call(e)}:e,Ir=()=>{const r=Object.create(null);return(e,t,...n)=>{const s=(o=>JSON.stringify(o,Q2))(e);return s in r?r[s]:r[s]=t(e,...n)}},wi=Symbol.for("sxs.internal"),xa=(r,e)=>Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)),Dc=r=>{for(const e in r)return!0;return!1},{hasOwnProperty:T2}=Object.prototype,Do=r=>r.includes("-")?r:r.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),M2=/\s+(?![^()]*\))/,Cn=r=>e=>r(...typeof e=="string"?String(e).split(M2):[e]),Xc={appearance:r=>({WebkitAppearance:r,appearance:r}),backfaceVisibility:r=>({WebkitBackfaceVisibility:r,backfaceVisibility:r}),backdropFilter:r=>({WebkitBackdropFilter:r,backdropFilter:r}),backgroundClip:r=>({WebkitBackgroundClip:r,backgroundClip:r}),boxDecorationBreak:r=>({WebkitBoxDecorationBreak:r,boxDecorationBreak:r}),clipPath:r=>({WebkitClipPath:r,clipPath:r}),content:r=>({content:r.includes('"')||r.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(r)?r:`"${r}"`}),hyphens:r=>({WebkitHyphens:r,hyphens:r}),maskImage:r=>({WebkitMaskImage:r,maskImage:r}),maskSize:r=>({WebkitMaskSize:r,maskSize:r}),tabSize:r=>({MozTabSize:r,tabSize:r}),textSizeAdjust:r=>({WebkitTextSizeAdjust:r,textSizeAdjust:r}),userSelect:r=>({WebkitUserSelect:r,userSelect:r}),marginBlock:Cn((r,e)=>({marginBlockStart:r,marginBlockEnd:e||r})),marginInline:Cn((r,e)=>({marginInlineStart:r,marginInlineEnd:e||r})),maxSize:Cn((r,e)=>({maxBlockSize:r,maxInlineSize:e||r})),minSize:Cn((r,e)=>({minBlockSize:r,minInlineSize:e||r})),paddingBlock:Cn((r,e)=>({paddingBlockStart:r,paddingBlockEnd:e||r})),paddingInline:Cn((r,e)=>({paddingInlineStart:r,paddingInlineEnd:e||r}))},Ws=/([\d.]+)([^]*)/,R2=(r,e)=>r.length?r.reduce((t,n)=>(t.push(...e.map(s=>s.includes("&")?s.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(s)?`:is(${n})`:n):n+" "+s)),t),[]):e,A2=(r,e)=>r in Z2&&typeof e=="string"?e.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(t,n,s,o)=>n+(s==="stretch"?`-moz-available${o};${Do(r)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${Do(r)}:${n}fit-content`)+o):String(e),Z2={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Yt=r=>r?r+"-":"",Hd=(r,e,t)=>r.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,s,o,a,l)=>a=="$"==!!o?n:(s||a=="--"?"calc(":"")+"var(--"+(a==="$"?Yt(e)+(l.includes("$")?"":Yt(t))+l.replace(/\$/g,"-"):l)+")"+(s||a=="--"?"*"+(s||"")+(o||"1")+")":"")),j2=/\s*,\s*(?![^()]*\))/,E2=Object.prototype.toString,Pn=(r,e,t,n,s)=>{let o,a,l;const c=(u,h,d)=>{let f,p;const m=O=>{for(f in O){const x=f.charCodeAt(0)===64,k=x&&Array.isArray(O[f])?O[f]:[O[f]];for(p of k){const b=/[A-Z]/.test(w=f)?w:w.replace(/-[^]/g,C=>C[1].toUpperCase()),g=typeof p=="object"&&p&&p.toString===E2&&(!n.utils[b]||!h.length);if(b in n.utils&&!g){const C=n.utils[b];if(C!==a){a=C,m(C(p)),a=null;continue}}else if(b in Xc){const C=Xc[b];if(C!==l){l=C,m(C(p)),l=null;continue}}if(x&&(v=f.slice(1)in n.media?"@media "+n.media[f.slice(1)]:f,f=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(C,P,T,B,X,D)=>{const W=Ws.test(P),F=.0625*(W?-1:1),[J,ge]=W?[B,P]:[P,B];return"("+(T[0]==="="?"":T[0]===">"===W?"max-":"min-")+J+":"+(T[0]!=="="&&T.length===1?ge.replace(Ws,(Fe,qe,je)=>Number(qe)+F*(T===">"?1:-1)+je):ge)+(X?") and ("+(X[0]===">"?"min-":"max-")+J+":"+(X.length===1?D.replace(Ws,(Fe,qe,je)=>Number(qe)+F*(X===">"?-1:1)+je):D):"")+")"})),g){const C=x?d.concat(f):[...d],P=x?[...h]:R2(h,f.split(j2));o!==void 0&&s(Yc(...o)),o=void 0,c(p,P,C)}else o===void 0&&(o=[[],h,d]),f=x||f.charCodeAt(0)!==36?f:`--${Yt(n.prefix)}${f.slice(1).replace(/\$/g,"-")}`,p=g?p:typeof p=="number"?p&&b in I2?String(p)+"px":String(p):Hd(A2(b,p??""),n.prefix,n.themeMap[b]),o[0].push(`${x?`${f} `:`${Do(f)}:`}${p}`)}}var v,w};m(u),o!==void 0&&s(Yc(...o)),o=void 0};c(r,e,t)},Yc=(r,e,t)=>`${t.map(n=>`${n}{`).join("")}${e.length?`${e.join(",")}{`:""}${r.join(";")}${e.length?"}":""}${Array(t.length?t.length+1:0).join("}")}`,I2={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},zc=r=>String.fromCharCode(r+(r>25?39:97)),dn=r=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=zc(t%52)+n;return zc(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(r))>>>0),lr=["themed","global","styled","onevar","resonevar","allvar","inline"],D2=r=>{if(r.href&&!r.href.startsWith(location.origin))return!1;try{return!!r.cssRules}catch{return!1}},X2=r=>{let e;const t=()=>{const{cssRules:s}=e.sheet;return[].map.call(s,(o,a)=>{const{cssText:l}=o;let c="";if(l.startsWith("--sxs"))return"";if(s[a-1]&&(c=s[a-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const u in e.rules)if(e.rules[u].group===o)return`--sxs{--sxs:${[...e.rules[u].cache].join(" ")}}${l}`;return o.cssRules.length?`${c}${l}`:""}return l}).join("")},n=()=>{if(e){const{rules:l,sheet:c}=e;if(!c.deleteRule){for(;Object(Object(c.cssRules)[0]).type===3;)c.cssRules.splice(0,1);c.cssRules=[]}for(const u in l)delete l[u]}const s=Object(r).styleSheets||[];for(const l of s)if(D2(l)){for(let c=0,u=l.cssRules;u[c];++c){const h=Object(u[c]);if(h.type!==1)continue;const d=Object(u[c+1]);if(d.type!==4)continue;++c;const{cssText:f}=h;if(!f.startsWith("--sxs"))continue;const p=f.slice(14,-3).trim().split(/\s+/),m=lr[p[0]];m&&(e||(e={sheet:l,reset:n,rules:{},toString:t}),e.rules[m]={group:d,index:c,cache:new Set(p)})}if(e)break}if(!e){const l=(c,u)=>({type:u,cssRules:[],insertRule(h,d){this.cssRules.splice(d,0,l(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return c==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:c}});e={sheet:r?(r.head||r).appendChild(document.createElement("style")).sheet:l("","text/css"),rules:{},reset:n,toString:t}}const{sheet:o,rules:a}=e;for(let l=lr.length-1;l>=0;--l){const c=lr[l];if(!a[c]){const u=lr[l+1],h=a[u]?a[u].index:o.cssRules.length;o.insertRule("@media{}",h),o.insertRule(`--sxs{--sxs:${l}}`,h),a[c]={group:o.cssRules[h+1],index:h,cache:new Set([l])}}Y2(a[c])}};return n(),e},Y2=r=>{const e=r.group;let t=e.cssRules.length;r.apply=n=>{try{e.insertRule(n,t),++t}catch{}}},er=Symbol(),z2=Ir(),W2=(r,e)=>z2(r,()=>(...t)=>{let n={type:null,composers:new Set};for(const s of t)if(s!=null)if(s[wi]){n.type==null&&(n.type=s[wi].type);for(const o of s[wi].composers)n.composers.add(o)}else s.constructor!==Object||s.$$typeof?n.type==null&&(n.type=s):n.composers.add(L2(s,r));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),B2(r,n,e)}),L2=({variants:r,compoundVariants:e,defaultVariants:t,...n},s)=>{const o=`${Yt(s.prefix)}c-${dn(n)}`,a=[],l=[],c=Object.create(null),u=[];for(const f in t)c[f]=String(t[f]);if(typeof r=="object"&&r)for(const f in r){h=c,d=f,T2.call(h,d)||(c[f]="undefined");const p=r[f];for(const m in p){const O={[f]:String(m)};String(m)==="undefined"&&u.push(f);const v=p[m],w=[O,v,!Dc(v)];a.push(w)}}var h,d;if(typeof e=="object"&&e)for(const f of e){let{css:p,...m}=f;p=typeof p=="object"&&p||{};for(const v in m)m[v]=String(m[v]);const O=[m,p,!Dc(p)];l.push(O)}return[o,n,a,l,c,u]},B2=(r,e,t)=>{const[n,s,o,a]=V2(e.composers),l=typeof e.type=="function"||e.type.$$typeof?(d=>{function f(){for(let p=0;p<f[er].length;p++){const[m,O]=f[er][p];d.rules[m].apply(O)}return f[er]=[],null}return f[er]=[],f.rules={},lr.forEach(p=>f.rules[p]={apply:m=>f[er].push([p,m])}),f})(t):null,c=(l||t).rules,u=`.${n}${s.length>1?`:where(.${s.slice(1).join(".")})`:""}`,h=d=>{d=typeof d=="object"&&d||N2;const{css:f,...p}=d,m={};for(const w in o)if(delete p[w],w in d){let x=d[w];typeof x=="object"&&x?m[w]={"@initial":o[w],...x}:(x=String(x),m[w]=x!=="undefined"||a.has(w)?x:o[w])}else m[w]=o[w];const O=new Set([...s]);for(const[w,x,k,b]of e.composers){t.rules.styled.cache.has(w)||(t.rules.styled.cache.add(w),Pn(x,[`.${w}`],[],r,P=>{c.styled.apply(P)}));const g=Wc(k,m,r.media),C=Wc(b,m,r.media,!0);for(const P of g)if(P!==void 0)for(const[T,B,X]of P){const D=`${w}-${dn(B)}-${T}`;O.add(D);const W=(X?t.rules.resonevar:t.rules.onevar).cache,F=X?c.resonevar:c.onevar;W.has(D)||(W.add(D),Pn(B,[`.${D}`],[],r,J=>{F.apply(J)}))}for(const P of C)if(P!==void 0)for(const[T,B]of P){const X=`${w}-${dn(B)}-${T}`;O.add(X),t.rules.allvar.cache.has(X)||(t.rules.allvar.cache.add(X),Pn(B,[`.${X}`],[],r,D=>{c.allvar.apply(D)}))}}if(typeof f=="object"&&f){const w=`${n}-i${dn(f)}-css`;O.add(w),t.rules.inline.cache.has(w)||(t.rules.inline.cache.add(w),Pn(f,[`.${w}`],[],r,x=>{c.inline.apply(x)}))}for(const w of String(d.className||"").trim().split(/\s+/))w&&O.add(w);const v=p.className=[...O].join(" ");return{type:e.type,className:v,selector:u,props:p,toString:()=>v,deferredInjector:l}};return xa(h,{className:n,selector:u,[wi]:e,toString:()=>(t.rules.styled.cache.has(n)||h(),n)})},V2=r=>{let e="";const t=[],n={},s=[];for(const[o,,,,a,l]of r){e===""&&(e=o),t.push(o),s.push(...l);for(const c in a){const u=a[c];(n[c]===void 0||u!=="undefined"||l.includes(u))&&(n[c]=u)}}return[e,t,n,new Set(s)]},Wc=(r,e,t,n)=>{const s=[];e:for(let[o,a,l]of r){if(l)continue;let c,u=0,h=!1;for(c in o){const d=o[c];let f=e[c];if(f!==d){if(typeof f!="object"||!f)continue e;{let p,m,O=0;for(const v in f){if(d===String(f[v])){if(v!=="@initial"){const w=v.slice(1);(m=m||[]).push(w in t?t[w]:v.replace(/^@media ?/,"")),h=!0}u+=O,p=!0}++O}if(m&&m.length&&(a={["@media "+m.join(", ")]:a}),!p)continue e}}}(s[u]=s[u]||[]).push([n?"cv":`${c}-${o[c]}`,a,h])}return s},N2={},q2=Ir(),U2=(r,e)=>q2(r,()=>(...t)=>{const n=()=>{for(let s of t){s=typeof s=="object"&&s||{};let o=dn(s);if(!e.rules.global.cache.has(o)){if(e.rules.global.cache.add(o),"@import"in s){let a=[].indexOf.call(e.sheet.cssRules,e.rules.themed.group)-1;for(let l of[].concat(s["@import"]))l=l.includes('"')||l.includes("'")?l:`"${l}"`,e.sheet.insertRule(`@import ${l};`,a++);delete s["@import"]}Pn(s,[],[],r,a=>{e.rules.global.apply(a)})}}return""};return xa(n,{toString:n})}),_2=Ir(),G2=(r,e)=>_2(r,()=>t=>{const n=`${Yt(r.prefix)}k-${dn(t)}`,s=()=>{if(!e.rules.global.cache.has(n)){e.rules.global.cache.add(n);const o=[];Pn(t,[],[],r,l=>o.push(l));const a=`@keyframes ${n}{${o.join("")}}`;e.rules.global.apply(a)}return n};return xa(s,{get name(){return s()},toString:s})}),F2=class{constructor(r,e,t,n){this.token=r==null?"":String(r),this.value=e==null?"":String(e),this.scale=t==null?"":String(t),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Yt(this.prefix)+Yt(this.scale)+this.token}toString(){return this.computedValue}},J2=Ir(),H2=(r,e)=>J2(r,()=>(t,n)=>{n=typeof t=="object"&&t||Object(n);const s=`.${t=(t=typeof t=="string"?t:"")||`${Yt(r.prefix)}t-${dn(n)}`}`,o={},a=[];for(const c in n){o[c]={};for(const u in n[c]){const h=`--${Yt(r.prefix)}${c}-${u}`,d=Hd(String(n[c][u]),r.prefix,c);o[c][u]=new F2(u,d,c,r.prefix),a.push(`${h}:${d}`)}}const l=()=>{if(a.length&&!e.rules.themed.cache.has(t)){e.rules.themed.cache.add(t);const c=`${n===r.theme?":root,":""}.${t}{${a.join(";")}}`;e.rules.themed.apply(c)}return t};return{...o,get className(){return l()},selector:s,toString:l}}),K2=Ir(),e5=r=>{let e=!1;const t=K2(r,n=>{e=!0;const s="prefix"in(n=typeof n=="object"&&n||{})?String(n.prefix):"",o=typeof n.media=="object"&&n.media||{},a=typeof n.root=="object"?n.root||null:globalThis.document||null,l=typeof n.theme=="object"&&n.theme||{},c={prefix:s,media:o,theme:l,themeMap:typeof n.themeMap=="object"&&n.themeMap||{...$2},utils:typeof n.utils=="object"&&n.utils||{}},u=X2(a),h={css:W2(c,u),globalCss:U2(c,u),keyframes:G2(c,u),createTheme:H2(c,u),reset(){u.reset(),h.theme.toString()},theme:{},sheet:u,config:c,prefix:s,getCssText:u.toString,toString:u.toString};return String(h.theme=h.createTheme(l)),h});return e||t.reset(),t},Lc=Object.prototype.hasOwnProperty;function Bc(r,e,t){for(t of r.keys())if(pr(t,e))return t}function pr(r,e){var t,n,s;if(r===e)return!0;if(r&&e&&(t=r.constructor)===e.constructor){if(t===Date)return r.getTime()===e.getTime();if(t===RegExp)return r.toString()===e.toString();if(t===Array){if((n=r.length)===e.length)for(;n--&&pr(r[n],e[n]););return n===-1}if(t===Set){if(r.size!==e.size)return!1;for(n of r)if(s=n,s&&typeof s=="object"&&(s=Bc(e,s),!s)||!e.has(s))return!1;return!0}if(t===Map){if(r.size!==e.size)return!1;for(n of r)if(s=n[0],s&&typeof s=="object"&&(s=Bc(e,s),!s)||!pr(n[1],e.get(s)))return!1;return!0}if(t===ArrayBuffer)r=new Uint8Array(r),e=new Uint8Array(e);else if(t===DataView){if((n=r.byteLength)===e.byteLength)for(;n--&&r.getInt8(n)===e.getInt8(n););return n===-1}if(ArrayBuffer.isView(r)){if((n=r.byteLength)===e.byteLength)for(;n--&&r[n]===e[n];);return n===-1}if(!t||typeof r=="object"){n=0;for(t in r)if(Lc.call(r,t)&&++n&&!Lc.call(e,t)||!(t in e)||!pr(r[t],e[t]))return!1;return Object.keys(e).length===n}}return r!==r&&e!==e}var t5=/(%?)(%([sdjo]))/g;function n5(r,e){switch(e){case"s":return r;case"d":case"i":return Number(r);case"j":return JSON.stringify(r);case"o":{if(typeof r=="string")return r;const t=JSON.stringify(r);return t==="{}"||t==="[]"||/^\[object .+?\]$/.test(t)?r:t}}}function Xo(r,...e){if(e.length===0)return r;let t=0,n=r.replace(t5,(s,o,a,l)=>{const c=e[t],u=n5(c,l);return o?s:(t++,u)});return t<e.length&&(n+=` ${e.slice(t).join(" ")}`),n=n.replace(/%{2,2}/g,"%"),n}var r5=2;function i5(r){if(!r.stack)return;const e=r.stack.split(`
`);e.splice(1,r5),r.stack=e.join(`
`)}var s5=class extends Error{constructor(r,...e){super(r),this.message=r,this.name="Invariant Violation",this.message=Xo(r,...e),i5(this)}},Kd=(r,e,...t)=>{if(!r)throw new s5(e,...t)};Kd.as=(r,e,t,...n)=>{if(!e)throw r.prototype.name!=null?new r(Xo(t,n)):r(Xo(t,n))};var Yo=function(r,e){return Yo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},Yo(r,e)};function r9(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Yo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var $n=function(){return $n=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$n.apply(this,arguments)};function o5(r,e,t,n){function s(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function l(h){try{u(n.next(h))}catch(d){a(d)}}function c(h){try{u(n.throw(h))}catch(d){a(d)}}function u(h){h.done?o(h.value):s(h.value).then(l,c)}u((n=n.apply(r,[])).next())})}function a5(r,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,s,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(h){return c([u,h])}}function c(u){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,s&&(o=u[0]&2?s.return:u[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,u[1])).done)return o;switch(s=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,s=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){t.label=u[1];break}if(u[0]===6&&t.label<o[1]){t.label=o[1],o=u;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(u);break}o[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(r,t)}catch(h){u=[6,h],s=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function i9(r,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,o;n<s;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return r.concat(o||Array.prototype.slice.call(e))}var Vc;(function(r){r[r.None=0]="None",r[r.Error=10]="Error",r[r.Warning=20]="Warning",r[r.Info=30]="Info",r[r.Debug=40]="Debug"})(Vc||(Vc={}));var l5=function(r){return"[sandpack-client]: ".concat(r)};function Ls(r,e){return e===void 0&&(e="Value is nullish"),Kd(r!=null,l5(e)),r}var c5='"dependencies" was not specified - provide either a package.json or a "dependencies" value',Nc='"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';function u5(r,e,t){return r===void 0&&(r={}),e===void 0&&(e={}),t===void 0&&(t="/index.js"),JSON.stringify({name:"sandpack-project",main:t,dependencies:r,devDependencies:e},null,2)}function h5(r,e,t,n){var s,o,a=vn(r),l=a["/package.json"];if(!l)return Ls(e,c5),Ls(n,Nc),a["/package.json"]={code:u5(e,t,n)},a;if(l){var c=JSON.parse(l.code);Ls(!(!e&&!c.dependencies),Nc),e&&(c.dependencies=$n($n({},(s=c.dependencies)!==null&&s!==void 0?s:{}),e??{})),t&&(c.devDependencies=$n($n({},(o=c.devDependencies)!==null&&o!==void 0?o:{}),t??{})),n&&(c.main=n),a["/package.json"]={code:JSON.stringify(c,null,2)}}return a}function d5(r){var e;if(r.title==="SyntaxError"){var t=r.title,n=r.path,s=r.message,o=r.line,a=r.column;return{title:t,path:n,message:s,line:o,column:a}}var l=f5((e=r.payload)===null||e===void 0?void 0:e.frames);if(!l)return{message:r.message};var c=m5(l),u=p5(l),h=O5(l._originalFileName,r.message,u,c);return{message:h,title:r.title,path:l._originalFileName,line:l._originalLineNumber,column:l._originalColumnNumber}}function f5(r){if(r)return r.find(function(e){return!!e._originalFileName})}function p5(r){return r?" (".concat(r._originalLineNumber,":").concat(r._originalColumnNumber,")"):""}function m5(r){var e=r._originalScriptCode[r._originalScriptCode.length-1],t=e.lineNumber.toString().length,n=2,s=3,o=n+t+s+r._originalColumnNumber;return r._originalScriptCode.reduce(function(a,l){var c=l.highlight?">":" ",u=l.lineNumber.toString().length===t?"".concat(l.lineNumber):" ".concat(l.lineNumber),h=l.highlight?`
`+" ".repeat(o)+"^":"";return a+`
`+c+" "+u+" | "+l.content+h},"")}function O5(r,e,t,n){return"".concat(r,": ").concat(e).concat(t,`
`).concat(n)}var vn=function(r){return typeof r=="string"?r.startsWith("/")?r:"/".concat(r):Array.isArray(r)?r.map(function(e){return e.startsWith("/")?e:"/".concat(e)}):typeof r=="object"&&r!==null?Object.entries(r).reduce(function(e,t){var n=t[0],s=t[1],o=n.startsWith("/")?n:"/".concat(n);return e[o]=s,e},{}):null};function g5(r,e,t){var n;return t===void 0&&(t={}),o5(this,void 0,void 0,function(){var s,o,a;return a5(this,function(l){switch(l.label){case 0:switch(s=(n=e.template)!==null&&n!==void 0?n:"parcel",a=s,a){case"node":return[3,1];case"static":return[3,3]}return[3,5];case 1:return[4,ds(()=>import("./index-CgMLLQe2.js"),__vite__mapDeps([0,1,2,3,4])).then(function(c){return c.SandpackNode})];case 2:return o=l.sent(),[3,7];case 3:return[4,ds(()=>import("./index-585bceb7-BfnANNfy.js"),__vite__mapDeps([5,2,1,3,4])).then(function(c){return c.SandpackStatic})];case 4:return o=l.sent(),[3,7];case 5:return[4,ds(()=>import("./index-CS48Wr0i.js"),__vite__mapDeps([6,1,3,4])).then(function(c){return c.SandpackRuntime})];case 6:o=l.sent(),l.label=7;case 7:return[2,new o(r,e,t)]}})})}const v5=r=>{let{state:e}=r,t=e.doc.lineAt(e.selection.main.from),n=Pa(r.state,t.from);return n.line?w5(r):n.block?b5(r):!1};function ka(r,e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let s=r(e,t);return s?(n(t.update(s)),!0):!1}}const w5=ka(x5,0),y5=ka(ef,0),b5=ka((r,e)=>ef(r,e,C5(e)),0);function Pa(r,e){let t=r.languageDataAt("commentTokens",e);return t.length?t[0]:{}}const tr=50;function S5(r,{open:e,close:t},n,s){let o=r.sliceDoc(n-tr,n),a=r.sliceDoc(s,s+tr),l=/\s*$/.exec(o)[0].length,c=/^\s*/.exec(a)[0].length,u=o.length-l;if(o.slice(u-e.length,u)==e&&a.slice(c,c+t.length)==t)return{open:{pos:n-l,margin:l&&1},close:{pos:s+c,margin:c&&1}};let h,d;s-n<=2*tr?h=d=r.sliceDoc(n,s):(h=r.sliceDoc(n,n+tr),d=r.sliceDoc(s-tr,s));let f=/^\s*/.exec(h)[0].length,p=/\s*$/.exec(d)[0].length,m=d.length-p-t.length;return h.slice(f,f+e.length)==e&&d.slice(m,m+t.length)==t?{open:{pos:n+f+e.length,margin:/\s/.test(h.charAt(f+e.length))?1:0},close:{pos:s-p-t.length,margin:/\s/.test(d.charAt(m-1))?1:0}}:null}function C5(r){let e=[];for(let t of r.selection.ranges){let n=r.doc.lineAt(t.from),s=t.to<=n.to?n:r.doc.lineAt(t.to),o=e.length-1;o>=0&&e[o].to>n.from?e[o].to=s.to:e.push({from:n.from+/^\s*/.exec(n.text)[0].length,to:s.to})}return e}function ef(r,e,t=e.selection.ranges){let n=t.map(o=>Pa(e,o.from).block);if(!n.every(o=>o))return null;let s=t.map((o,a)=>S5(e,n[a],o.from,o.to));if(r!=2&&!s.every(o=>o))return{changes:e.changes(t.map((o,a)=>s[a]?[]:[{from:o.from,insert:n[a].open+" "},{from:o.to,insert:" "+n[a].close}]))};if(r!=1&&s.some(o=>o)){let o=[];for(let a=0,l;a<s.length;a++)if(l=s[a]){let c=n[a],{open:u,close:h}=l;o.push({from:u.pos-c.open.length,to:u.pos+u.margin},{from:h.pos-h.margin,to:h.pos+c.close.length})}return{changes:o}}return null}function x5(r,e,t=e.selection.ranges){let n=[],s=-1;for(let{from:o,to:a}of t){let l=n.length,c=1e9,u=Pa(e,o).line;if(u){for(let h=o;h<=a;){let d=e.doc.lineAt(h);if(d.from>s&&(o==a||a>d.from)){s=d.from;let f=/^\s*/.exec(d.text)[0].length,p=f==d.length,m=d.text.slice(f,f+u.length)==u?f:-1;f<d.text.length&&f<c&&(c=f),n.push({line:d,comment:m,token:u,indent:f,empty:p,single:!1})}h=d.to+1}if(c<1e9)for(let h=l;h<n.length;h++)n[h].indent<n[h].line.text.length&&(n[h].indent=c);n.length==l+1&&(n[l].single=!0)}}if(r!=2&&n.some(o=>o.comment<0&&(!o.empty||o.single))){let o=[];for(let{line:l,token:c,indent:u,empty:h,single:d}of n)(d||!h)&&o.push({from:l.from+u,insert:c+" "});let a=e.changes(o);return{changes:a,selection:e.selection.map(a,1)}}else if(r!=1&&n.some(o=>o.comment>=0)){let o=[];for(let{line:a,comment:l,token:c}of n)if(l>=0){let u=a.from+l,h=u+c.length;a.text[h-a.from]==" "&&h++,o.push({from:u,to:h})}return{changes:o}}return null}const zo=ut.define(),k5=ut.define(),P5=Y.define(),tf=Y.define({combine(r){return _i(r,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,s)=>e(n,s)||t(n,s)})}}),nf=ft.define({create(){return $t.empty},update(r,e){let t=e.state.facet(tf),n=e.annotation(zo);if(n){let c=Ne.fromTransaction(e,n.selection),u=n.side,h=u==0?r.undone:r.done;return c?h=Bi(h,h.length,t.minDepth,c):h=of(h,e.startState.selection),new $t(u==0?n.rest:h,u==0?h:n.rest)}let s=e.annotation(k5);if((s=="full"||s=="before")&&(r=r.isolate()),e.annotation(ye.addToHistory)===!1)return e.changes.empty?r:r.addMapping(e.changes.desc);let o=Ne.fromTransaction(e),a=e.annotation(ye.time),l=e.annotation(ye.userEvent);return o?r=r.addChanges(o,a,l,t,e):e.selection&&(r=r.addSelection(e.startState.selection,a,l,t.newGroupDelay)),(s=="full"||s=="after")&&(r=r.isolate()),r},toJSON(r){return{done:r.done.map(e=>e.toJSON()),undone:r.undone.map(e=>e.toJSON())}},fromJSON(r){return new $t(r.done.map(Ne.fromJSON),r.undone.map(Ne.fromJSON))}});function $5(r={}){return[nf,tf.of(r),z.domEventHandlers({beforeinput(e,t){let n=e.inputType=="historyUndo"?rf:e.inputType=="historyRedo"?Wo:null;return n?(e.preventDefault(),n(t)):!1}})]}function ns(r,e){return function({state:t,dispatch:n}){if(!e&&t.readOnly)return!1;let s=t.field(nf,!1);if(!s)return!1;let o=s.pop(r,t,e);return o?(n(o),!0):!1}}const rf=ns(0,!1),Wo=ns(1,!1),Q5=ns(0,!0),T5=ns(1,!0);class Ne{constructor(e,t,n,s,o){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=s,this.selectionsAfter=o}setSelAfter(e){return new Ne(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,n;return{changes:(e=this.changes)===null||e===void 0?void 0:e.toJSON(),mapped:(t=this.mapped)===null||t===void 0?void 0:t.toJSON(),startSelection:(n=this.startSelection)===null||n===void 0?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map(s=>s.toJSON())}}static fromJSON(e){return new Ne(e.changes&&be.fromJSON(e.changes),[],e.mapped&&Tt.fromJSON(e.mapped),e.startSelection&&Q.fromJSON(e.startSelection),e.selectionsAfter.map(Q.fromJSON))}static fromTransaction(e,t){let n=et;for(let s of e.startState.facet(P5)){let o=s(e);o.length&&(n=n.concat(o))}return!n.length&&e.changes.empty?null:new Ne(e.changes.invert(e.startState.doc),n,void 0,t||e.startState.selection,et)}static selection(e){return new Ne(void 0,et,void 0,void 0,e)}}function Bi(r,e,t,n){let s=e+1>t+20?e-t-1:0,o=r.slice(s,e);return o.push(n),o}function M5(r,e){let t=[],n=!1;return r.iterChangedRanges((s,o)=>t.push(s,o)),e.iterChangedRanges((s,o,a,l)=>{for(let c=0;c<t.length;){let u=t[c++],h=t[c++];l>=u&&a<=h&&(n=!0)}}),n}function R5(r,e){return r.ranges.length==e.ranges.length&&r.ranges.filter((t,n)=>t.empty!=e.ranges[n].empty).length===0}function sf(r,e){return r.length?e.length?r.concat(e):r:e}const et=[],A5=200;function of(r,e){if(r.length){let t=r[r.length-1],n=t.selectionsAfter.slice(Math.max(0,t.selectionsAfter.length-A5));return n.length&&n[n.length-1].eq(e)?r:(n.push(e),Bi(r,r.length-1,1e9,t.setSelAfter(n)))}else return[Ne.selection([e])]}function Z5(r){let e=r[r.length-1],t=r.slice();return t[r.length-1]=e.setSelAfter(e.selectionsAfter.slice(0,e.selectionsAfter.length-1)),t}function Bs(r,e){if(!r.length)return r;let t=r.length,n=et;for(;t;){let s=j5(r[t-1],e,n);if(s.changes&&!s.changes.empty||s.effects.length){let o=r.slice(0,t);return o[t-1]=s,o}else e=s.mapped,t--,n=s.selectionsAfter}return n.length?[Ne.selection(n)]:et}function j5(r,e,t){let n=sf(r.selectionsAfter.length?r.selectionsAfter.map(l=>l.map(e)):et,t);if(!r.changes)return Ne.selection(n);let s=r.changes.map(e),o=e.mapDesc(r.changes,!0),a=r.mapped?r.mapped.composeDesc(o):o;return new Ne(s,se.mapEffects(r.effects,e),a,r.startSelection.map(o),n)}const E5=/^(input\.type|delete)($|\.)/;class $t{constructor(e,t,n=0,s=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=s}isolate(){return this.prevTime?new $t(this.done,this.undone):this}addChanges(e,t,n,s,o){let a=this.done,l=a[a.length-1];return l&&l.changes&&!l.changes.empty&&e.changes&&(!n||E5.test(n))&&(!l.selectionsAfter.length&&t-this.prevTime<s.newGroupDelay&&s.joinToEvent(o,M5(l.changes,e.changes))||n=="input.type.compose")?a=Bi(a,a.length-1,s.minDepth,new Ne(e.changes.compose(l.changes),sf(e.effects,l.effects),l.mapped,l.startSelection,et)):a=Bi(a,a.length,s.minDepth,e),new $t(a,et,t,n)}addSelection(e,t,n,s){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:et;return o.length>0&&t-this.prevTime<s&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&R5(o[o.length-1],e)?this:new $t(of(this.done,e),this.undone,t,n)}addMapping(e){return new $t(Bs(this.done,e),Bs(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,n){let s=e==0?this.done:this.undone;if(s.length==0)return null;let o=s[s.length-1],a=o.selectionsAfter[0]||t.selection;if(n&&o.selectionsAfter.length)return t.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:zo.of({side:e,rest:Z5(s),selection:a}),userEvent:e==0?"select.undo":"select.redo",scrollIntoView:!0});if(o.changes){let l=s.length==1?et:s.slice(0,s.length-1);return o.mapped&&(l=Bs(l,o.mapped)),t.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:zo.of({side:e,rest:l,selection:a}),filter:!1,userEvent:e==0?"undo":"redo",scrollIntoView:!0})}else return null}}$t.empty=new $t(et,et);const I5=[{key:"Mod-z",run:rf,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:Wo,preventDefault:!0},{linux:"Ctrl-Shift-z",run:Wo,preventDefault:!0},{key:"Mod-u",run:Q5,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:T5,preventDefault:!0}];function Un(r,e){return Q.create(r.ranges.map(e),r.mainIndex)}function At(r,e){return r.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function mt({state:r,dispatch:e},t){let n=Un(r.selection,t);return n.eq(r.selection,!0)?!1:(e(At(r,n)),!0)}function rs(r,e){return Q.cursor(e?r.to:r.from)}function af(r,e){return mt(r,t=>t.empty?r.moveByChar(t,e):rs(t,e))}function Ze(r){return r.textDirectionAt(r.state.selection.main.head)==Se.LTR}const lf=r=>af(r,!Ze(r)),cf=r=>af(r,Ze(r));function uf(r,e){return mt(r,t=>t.empty?r.moveByGroup(t,e):rs(t,e))}const D5=r=>uf(r,!Ze(r)),X5=r=>uf(r,Ze(r));function Y5(r,e,t){if(e.type.prop(t))return!0;let n=e.to-e.from;return n&&(n>2||/[^\s,.;:]/.test(r.sliceDoc(e.from,e.to)))||e.firstChild}function is(r,e,t){let n=xe(r).resolveInner(e.head),s=t?N.closedBy:N.openedBy;for(let c=e.head;;){let u=t?n.childAfter(c):n.childBefore(c);if(!u)break;Y5(r,u,s)?n=u:c=t?u.to:u.from}let o=n.type.prop(s),a,l;return o&&(a=t?Pt(r,n.from,1):Pt(r,n.to,-1))&&a.matched?l=t?a.end.to:a.end.from:l=t?n.to:n.from,Q.cursor(l,t?-1:1)}const z5=r=>mt(r,e=>is(r.state,e,!Ze(r))),W5=r=>mt(r,e=>is(r.state,e,Ze(r)));function hf(r,e){return mt(r,t=>{if(!t.empty)return rs(t,e);let n=r.moveVertically(t,e);return n.head!=t.head?n:r.moveToLineBoundary(t,e)})}const df=r=>hf(r,!1),ff=r=>hf(r,!0);function pf(r){let e=r.scrollDOM.clientHeight<r.scrollDOM.scrollHeight-2,t=0,n=0,s;if(e){for(let o of r.state.facet(z.scrollMargins)){let a=o(r);a!=null&&a.top&&(t=Math.max(a==null?void 0:a.top,t)),a!=null&&a.bottom&&(n=Math.max(a==null?void 0:a.bottom,n))}s=r.scrollDOM.clientHeight-t-n}else s=(r.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:t,marginBottom:n,selfScroll:e,height:Math.max(r.defaultLineHeight,s-5)}}function mf(r,e){let t=pf(r),{state:n}=r,s=Un(n.selection,a=>a.empty?r.moveVertically(a,e,t.height):rs(a,e));if(s.eq(n.selection))return!1;let o;if(t.selfScroll){let a=r.coordsAtPos(n.selection.main.head),l=r.scrollDOM.getBoundingClientRect(),c=l.top+t.marginTop,u=l.bottom-t.marginBottom;a&&a.top>c&&a.bottom<u&&(o=z.scrollIntoView(s.main.head,{y:"start",yMargin:a.top-c}))}return r.dispatch(At(n,s),{effects:o}),!0}const qc=r=>mf(r,!1),Lo=r=>mf(r,!0);function nn(r,e,t){let n=r.lineBlockAt(e.head),s=r.moveToLineBoundary(e,t);if(s.head==e.head&&s.head!=(t?n.to:n.from)&&(s=r.moveToLineBoundary(e,t,!1)),!t&&s.head==n.from&&n.length){let o=/^\s*/.exec(r.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length;o&&e.head!=n.from+o&&(s=Q.cursor(n.from+o))}return s}const L5=r=>mt(r,e=>nn(r,e,!0)),B5=r=>mt(r,e=>nn(r,e,!1)),V5=r=>mt(r,e=>nn(r,e,!Ze(r))),N5=r=>mt(r,e=>nn(r,e,Ze(r))),q5=r=>mt(r,e=>Q.cursor(r.lineBlockAt(e.head).from,1)),U5=r=>mt(r,e=>Q.cursor(r.lineBlockAt(e.head).to,-1));function _5(r,e,t){let n=!1,s=Un(r.selection,o=>{let a=Pt(r,o.head,-1)||Pt(r,o.head,1)||o.head>0&&Pt(r,o.head-1,1)||o.head<r.doc.length&&Pt(r,o.head+1,-1);if(!a||!a.end)return o;n=!0;let l=a.start.from==o.head?a.end.to:a.end.from;return Q.cursor(l)});return n?(e(At(r,s)),!0):!1}const G5=({state:r,dispatch:e})=>_5(r,e);function ot(r,e){let t=Un(r.state.selection,n=>{let s=e(n);return Q.range(n.anchor,s.head,s.goalColumn,s.bidiLevel||void 0)});return t.eq(r.state.selection)?!1:(r.dispatch(At(r.state,t)),!0)}function Of(r,e){return ot(r,t=>r.moveByChar(t,e))}const gf=r=>Of(r,!Ze(r)),vf=r=>Of(r,Ze(r));function wf(r,e){return ot(r,t=>r.moveByGroup(t,e))}const F5=r=>wf(r,!Ze(r)),J5=r=>wf(r,Ze(r)),H5=r=>ot(r,e=>is(r.state,e,!Ze(r))),K5=r=>ot(r,e=>is(r.state,e,Ze(r)));function yf(r,e){return ot(r,t=>r.moveVertically(t,e))}const bf=r=>yf(r,!1),Sf=r=>yf(r,!0);function Cf(r,e){return ot(r,t=>r.moveVertically(t,e,pf(r).height))}const Uc=r=>Cf(r,!1),_c=r=>Cf(r,!0),ev=r=>ot(r,e=>nn(r,e,!0)),tv=r=>ot(r,e=>nn(r,e,!1)),nv=r=>ot(r,e=>nn(r,e,!Ze(r))),rv=r=>ot(r,e=>nn(r,e,Ze(r))),iv=r=>ot(r,e=>Q.cursor(r.lineBlockAt(e.head).from)),sv=r=>ot(r,e=>Q.cursor(r.lineBlockAt(e.head).to)),Gc=({state:r,dispatch:e})=>(e(At(r,{anchor:0})),!0),Fc=({state:r,dispatch:e})=>(e(At(r,{anchor:r.doc.length})),!0),Jc=({state:r,dispatch:e})=>(e(At(r,{anchor:r.selection.main.anchor,head:0})),!0),Hc=({state:r,dispatch:e})=>(e(At(r,{anchor:r.selection.main.anchor,head:r.doc.length})),!0),ov=({state:r,dispatch:e})=>(e(r.update({selection:{anchor:0,head:r.doc.length},userEvent:"select"})),!0),av=({state:r,dispatch:e})=>{let t=ss(r).map(({from:n,to:s})=>Q.range(n,Math.min(s+1,r.doc.length)));return e(r.update({selection:Q.create(t),userEvent:"select"})),!0},lv=({state:r,dispatch:e})=>{let t=Un(r.selection,n=>{var s;let o=xe(r).resolveStack(n.from,1);for(let a=o;a;a=a.next){let{node:l}=a;if((l.from<n.from&&l.to>=n.to||l.to>n.to&&l.from<=n.from)&&(!((s=l.parent)===null||s===void 0)&&s.parent))return Q.range(l.to,l.from)}return n});return e(At(r,t)),!0},cv=({state:r,dispatch:e})=>{let t=r.selection,n=null;return t.ranges.length>1?n=Q.create([t.main]):t.main.empty||(n=Q.create([Q.cursor(t.main.head)])),n?(e(At(r,n)),!0):!1};function Dr(r,e){if(r.state.readOnly)return!1;let t="delete.selection",{state:n}=r,s=n.changeByRange(o=>{let{from:a,to:l}=o;if(a==l){let c=e(o);c<a?(t="delete.backward",c=si(r,c,!1)):c>a&&(t="delete.forward",c=si(r,c,!0)),a=Math.min(a,c),l=Math.max(l,c)}else a=si(r,a,!1),l=si(r,l,!0);return a==l?{range:o}:{changes:{from:a,to:l},range:Q.cursor(a,a<o.head?-1:1)}});return s.changes.empty?!1:(r.dispatch(n.update(s,{scrollIntoView:!0,userEvent:t,effects:t=="delete.selection"?z.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function si(r,e,t){if(r instanceof z)for(let n of r.state.facet(z.atomicRanges).map(s=>s(r)))n.between(e,e,(s,o)=>{s<e&&o>e&&(e=t?o:s)});return e}const xf=(r,e,t)=>Dr(r,n=>{let s=n.from,{state:o}=r,a=o.doc.lineAt(s),l,c;if(t&&!e&&s>a.from&&s<a.from+200&&!/[^ \t]/.test(l=a.text.slice(0,s-a.from))){if(l[l.length-1]=="	")return s-1;let u=Ar(l,o.tabSize),h=u%ji(o)||ji(o);for(let d=0;d<h&&l[l.length-1-d]==" ";d++)s--;c=s}else c=Ye(a.text,s-a.from,e,e)+a.from,c==s&&a.number!=(e?o.doc.lines:1)?c+=e?1:-1:!e&&/[\ufe00-\ufe0f]/.test(a.text.slice(c-a.from,s-a.from))&&(c=Ye(a.text,c-a.from,!1,!1)+a.from);return c}),Bo=r=>xf(r,!1,!0),kf=r=>xf(r,!0,!1),Pf=(r,e)=>Dr(r,t=>{let n=t.head,{state:s}=r,o=s.doc.lineAt(n),a=s.charCategorizer(n);for(let l=null;;){if(n==(e?o.to:o.from)){n==t.head&&o.number!=(e?s.doc.lines:1)&&(n+=e?1:-1);break}let c=Ye(o.text,n-o.from,e)+o.from,u=o.text.slice(Math.min(n,c)-o.from,Math.max(n,c)-o.from),h=a(u);if(l!=null&&h!=l)break;(u!=" "||n!=t.head)&&(l=h),n=c}return n}),$a=r=>Pf(r,!1),uv=r=>Pf(r,!0),hv=r=>Dr(r,e=>{let t=r.lineBlockAt(e.head).to;return e.head<t?t:Math.min(r.state.doc.length,e.head+1)}),dv=r=>Dr(r,e=>{let t=r.moveToLineBoundary(e,!1).head;return e.head>t?t:Math.max(0,e.head-1)}),fv=r=>Dr(r,e=>{let t=r.moveToLineBoundary(e,!0).head;return e.head<t?t:Math.min(r.state.doc.length,e.head+1)}),pv=({state:r,dispatch:e})=>{if(r.readOnly)return!1;let t=r.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:G.of(["",""])},range:Q.cursor(n.from)}));return e(r.update(t,{scrollIntoView:!0,userEvent:"input"})),!0},mv=({state:r,dispatch:e})=>{if(r.readOnly)return!1;let t=r.changeByRange(n=>{if(!n.empty||n.from==0||n.from==r.doc.length)return{range:n};let s=n.from,o=r.doc.lineAt(s),a=s==o.from?s-1:Ye(o.text,s-o.from,!1)+o.from,l=s==o.to?s+1:Ye(o.text,s-o.from,!0)+o.from;return{changes:{from:a,to:l,insert:r.doc.slice(s,l).append(r.doc.slice(a,s))},range:Q.cursor(l)}});return t.changes.empty?!1:(e(r.update(t,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function ss(r){let e=[],t=-1;for(let n of r.selection.ranges){let s=r.doc.lineAt(n.from),o=r.doc.lineAt(n.to);if(!n.empty&&n.to==o.from&&(o=r.doc.lineAt(n.to-1)),t>=s.number){let a=e[e.length-1];a.to=o.to,a.ranges.push(n)}else e.push({from:s.from,to:o.to,ranges:[n]});t=o.number+1}return e}function $f(r,e,t){if(r.readOnly)return!1;let n=[],s=[];for(let o of ss(r)){if(t?o.to==r.doc.length:o.from==0)continue;let a=r.doc.lineAt(t?o.to+1:o.from-1),l=a.length+1;if(t){n.push({from:o.to,to:a.to},{from:o.from,insert:a.text+r.lineBreak});for(let c of o.ranges)s.push(Q.range(Math.min(r.doc.length,c.anchor+l),Math.min(r.doc.length,c.head+l)))}else{n.push({from:a.from,to:o.from},{from:o.to,insert:r.lineBreak+a.text});for(let c of o.ranges)s.push(Q.range(c.anchor-l,c.head-l))}}return n.length?(e(r.update({changes:n,scrollIntoView:!0,selection:Q.create(s,r.selection.mainIndex),userEvent:"move.line"})),!0):!1}const Ov=({state:r,dispatch:e})=>$f(r,e,!1),gv=({state:r,dispatch:e})=>$f(r,e,!0);function Qf(r,e,t){if(r.readOnly)return!1;let n=[];for(let s of ss(r))t?n.push({from:s.from,insert:r.doc.slice(s.from,s.to)+r.lineBreak}):n.push({from:s.to,insert:r.lineBreak+r.doc.slice(s.from,s.to)});return e(r.update({changes:n,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const vv=({state:r,dispatch:e})=>Qf(r,e,!1),wv=({state:r,dispatch:e})=>Qf(r,e,!0),yv=r=>{if(r.state.readOnly)return!1;let{state:e}=r,t=e.changes(ss(e).map(({from:s,to:o})=>(s>0?s--:o<e.doc.length&&o++,{from:s,to:o}))),n=Un(e.selection,s=>{let o;if(r.lineWrapping){let a=r.lineBlockAt(s.head),l=r.coordsAtPos(s.head,s.assoc||1);l&&(o=a.bottom+r.documentTop-l.bottom+r.defaultLineHeight/2)}return r.moveVertically(s,!0,o)}).map(t);return r.dispatch({changes:t,selection:n,scrollIntoView:!0,userEvent:"delete.line"}),!0};function bv(r,e){if(/\(\)|\[\]|\{\}/.test(r.sliceDoc(e-1,e+1)))return{from:e,to:e};let t=xe(r).resolveInner(e),n=t.childBefore(e),s=t.childAfter(e),o;return n&&s&&n.to<=e&&s.from>=e&&(o=n.type.prop(N.closedBy))&&o.indexOf(s.name)>-1&&r.doc.lineAt(n.to).from==r.doc.lineAt(s.from).from&&!/\S/.test(r.sliceDoc(n.to,s.from))?{from:n.to,to:s.from}:null}const Sv=Tf(!1),Cv=Tf(!0);function Tf(r){return({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(s=>{let{from:o,to:a}=s,l=e.doc.lineAt(o),c=!r&&o==a&&bv(e,o);r&&(o=a=(a<=l.to?l:e.doc.lineAt(a)).to);let u=new Hi(e,{simulateBreak:o,simulateDoubleBreak:!!c}),h=rd(u,o);for(h==null&&(h=Ar(/^\s*/.exec(e.doc.lineAt(o).text)[0],e.tabSize));a<l.to&&/\s/.test(l.text[a-l.from]);)a++;c?{from:o,to:a}=c:o>l.from&&o<l.from+100&&!/\S/.test(l.text.slice(0,o))&&(o=l.from);let d=["",Ei(e,h)];return c&&d.push(Ei(e,u.lineIndent(l.from,-1))),{changes:{from:o,to:a,insert:G.of(d)},range:Q.cursor(o+1+d[1].length)}});return t(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}function Qa(r,e){let t=-1;return r.changeByRange(n=>{let s=[];for(let a=n.from;a<=n.to;){let l=r.doc.lineAt(a);l.number>t&&(n.empty||n.to>l.from)&&(e(l,s,n),t=l.number),a=l.to+1}let o=r.changes(s);return{changes:s,range:Q.range(o.mapPos(n.anchor,1),o.mapPos(n.head,1))}})}const xv=({state:r,dispatch:e})=>{if(r.readOnly)return!1;let t=Object.create(null),n=new Hi(r,{overrideIndentation:o=>{let a=t[o];return a??-1}}),s=Qa(r,(o,a,l)=>{let c=rd(n,o.from);if(c==null)return;/\S/.test(o.text)||(c=0);let u=/^\s*/.exec(o.text)[0],h=Ei(r,c);(u!=h||l.from<o.from+u.length)&&(t[o.from]=c,a.push({from:o.from,to:o.from+u.length,insert:h}))});return s.changes.empty||e(r.update(s,{userEvent:"indent"})),!0},Mf=({state:r,dispatch:e})=>r.readOnly?!1:(e(r.update(Qa(r,(t,n)=>{n.push({from:t.from,insert:r.facet(Ji)})}),{userEvent:"input.indent"})),!0),Rf=({state:r,dispatch:e})=>r.readOnly?!1:(e(r.update(Qa(r,(t,n)=>{let s=/^\s*/.exec(t.text)[0];if(!s)return;let o=Ar(s,r.tabSize),a=0,l=Ei(r,Math.max(0,o-ji(r)));for(;a<s.length&&a<l.length&&s.charCodeAt(a)==l.charCodeAt(a);)a++;n.push({from:t.from+a,to:t.from+s.length,insert:l.slice(a)})}),{userEvent:"delete.dedent"})),!0),kv=r=>(r.setTabFocusMode(),!0),Pv=[{key:"Ctrl-b",run:lf,shift:gf,preventDefault:!0},{key:"Ctrl-f",run:cf,shift:vf},{key:"Ctrl-p",run:df,shift:bf},{key:"Ctrl-n",run:ff,shift:Sf},{key:"Ctrl-a",run:q5,shift:iv},{key:"Ctrl-e",run:U5,shift:sv},{key:"Ctrl-d",run:kf},{key:"Ctrl-h",run:Bo},{key:"Ctrl-k",run:hv},{key:"Ctrl-Alt-h",run:$a},{key:"Ctrl-o",run:pv},{key:"Ctrl-t",run:mv},{key:"Ctrl-v",run:Lo}],$v=[{key:"ArrowLeft",run:lf,shift:gf,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:D5,shift:F5,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:V5,shift:nv,preventDefault:!0},{key:"ArrowRight",run:cf,shift:vf,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:X5,shift:J5,preventDefault:!0},{mac:"Cmd-ArrowRight",run:N5,shift:rv,preventDefault:!0},{key:"ArrowUp",run:df,shift:bf,preventDefault:!0},{mac:"Cmd-ArrowUp",run:Gc,shift:Jc},{mac:"Ctrl-ArrowUp",run:qc,shift:Uc},{key:"ArrowDown",run:ff,shift:Sf,preventDefault:!0},{mac:"Cmd-ArrowDown",run:Fc,shift:Hc},{mac:"Ctrl-ArrowDown",run:Lo,shift:_c},{key:"PageUp",run:qc,shift:Uc},{key:"PageDown",run:Lo,shift:_c},{key:"Home",run:B5,shift:tv,preventDefault:!0},{key:"Mod-Home",run:Gc,shift:Jc},{key:"End",run:L5,shift:ev,preventDefault:!0},{key:"Mod-End",run:Fc,shift:Hc},{key:"Enter",run:Sv},{key:"Mod-a",run:ov},{key:"Backspace",run:Bo,shift:Bo},{key:"Delete",run:kf},{key:"Mod-Backspace",mac:"Alt-Backspace",run:$a},{key:"Mod-Delete",mac:"Alt-Delete",run:uv},{mac:"Mod-Backspace",run:dv},{mac:"Mod-Delete",run:fv}].concat(Pv.map(r=>({mac:r.key,run:r.run,shift:r.shift}))),Qv=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:z5,shift:H5},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:W5,shift:K5},{key:"Alt-ArrowUp",run:Ov},{key:"Shift-Alt-ArrowUp",run:vv},{key:"Alt-ArrowDown",run:gv},{key:"Shift-Alt-ArrowDown",run:wv},{key:"Escape",run:cv},{key:"Mod-Enter",run:Cv},{key:"Alt-l",mac:"Ctrl-l",run:av},{key:"Mod-i",run:lv,preventDefault:!0},{key:"Mod-[",run:Rf},{key:"Mod-]",run:Mf},{key:"Mod-Alt-\\",run:xv},{key:"Shift-Mod-k",run:yv},{key:"Shift-Mod-\\",run:G5},{key:"Mod-/",run:v5},{key:"Alt-A",run:y5},{key:"Ctrl-m",mac:"Shift-Alt-m",run:kv}].concat($v);var Ta={exports:{}};Ta.exports;(function(r){var e=function(){var t=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function a(c,u){if(!o[c]){o[c]={};for(var h=0;h<c.length;h++)o[c][c.charAt(h)]=h}return o[c][u]}var l={compressToBase64:function(c){if(c==null)return"";var u=l._compress(c,6,function(h){return n.charAt(h)});switch(u.length%4){default:case 0:return u;case 1:return u+"===";case 2:return u+"==";case 3:return u+"="}},decompressFromBase64:function(c){return c==null?"":c==""?null:l._decompress(c.length,32,function(u){return a(n,c.charAt(u))})},compressToUTF16:function(c){return c==null?"":l._compress(c,15,function(u){return t(u+32)})+" "},decompressFromUTF16:function(c){return c==null?"":c==""?null:l._decompress(c.length,16384,function(u){return c.charCodeAt(u)-32})},compressToUint8Array:function(c){for(var u=l.compress(c),h=new Uint8Array(u.length*2),d=0,f=u.length;d<f;d++){var p=u.charCodeAt(d);h[d*2]=p>>>8,h[d*2+1]=p%256}return h},decompressFromUint8Array:function(c){if(c==null)return l.decompress(c);for(var u=new Array(c.length/2),h=0,d=u.length;h<d;h++)u[h]=c[h*2]*256+c[h*2+1];var f=[];return u.forEach(function(p){f.push(t(p))}),l.decompress(f.join(""))},compressToEncodedURIComponent:function(c){return c==null?"":l._compress(c,6,function(u){return s.charAt(u)})},decompressFromEncodedURIComponent:function(c){return c==null?"":c==""?null:(c=c.replace(/ /g,"+"),l._decompress(c.length,32,function(u){return a(s,c.charAt(u))}))},compress:function(c){return l._compress(c,16,function(u){return t(u)})},_compress:function(c,u,h){if(c==null)return"";var d,f,p={},m={},O="",v="",w="",x=2,k=3,b=2,g=[],C=0,P=0,T;for(T=0;T<c.length;T+=1)if(O=c.charAt(T),Object.prototype.hasOwnProperty.call(p,O)||(p[O]=k++,m[O]=!0),v=w+O,Object.prototype.hasOwnProperty.call(p,v))w=v;else{if(Object.prototype.hasOwnProperty.call(m,w)){if(w.charCodeAt(0)<256){for(d=0;d<b;d++)C=C<<1,P==u-1?(P=0,g.push(h(C)),C=0):P++;for(f=w.charCodeAt(0),d=0;d<8;d++)C=C<<1|f&1,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=f>>1}else{for(f=1,d=0;d<b;d++)C=C<<1|f,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=0;for(f=w.charCodeAt(0),d=0;d<16;d++)C=C<<1|f&1,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=f>>1}x--,x==0&&(x=Math.pow(2,b),b++),delete m[w]}else for(f=p[w],d=0;d<b;d++)C=C<<1|f&1,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=f>>1;x--,x==0&&(x=Math.pow(2,b),b++),p[v]=k++,w=String(O)}if(w!==""){if(Object.prototype.hasOwnProperty.call(m,w)){if(w.charCodeAt(0)<256){for(d=0;d<b;d++)C=C<<1,P==u-1?(P=0,g.push(h(C)),C=0):P++;for(f=w.charCodeAt(0),d=0;d<8;d++)C=C<<1|f&1,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=f>>1}else{for(f=1,d=0;d<b;d++)C=C<<1|f,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=0;for(f=w.charCodeAt(0),d=0;d<16;d++)C=C<<1|f&1,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=f>>1}x--,x==0&&(x=Math.pow(2,b),b++),delete m[w]}else for(f=p[w],d=0;d<b;d++)C=C<<1|f&1,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=f>>1;x--,x==0&&(x=Math.pow(2,b),b++)}for(f=2,d=0;d<b;d++)C=C<<1|f&1,P==u-1?(P=0,g.push(h(C)),C=0):P++,f=f>>1;for(;;)if(C=C<<1,P==u-1){g.push(h(C));break}else P++;return g.join("")},decompress:function(c){return c==null?"":c==""?null:l._decompress(c.length,32768,function(u){return c.charCodeAt(u)})},_decompress:function(c,u,h){var d=[],f=4,p=4,m=3,O="",v=[],w,x,k,b,g,C,P,T={val:h(0),position:u,index:1};for(w=0;w<3;w+=1)d[w]=w;for(k=0,g=Math.pow(2,2),C=1;C!=g;)b=T.val&T.position,T.position>>=1,T.position==0&&(T.position=u,T.val=h(T.index++)),k|=(b>0?1:0)*C,C<<=1;switch(k){case 0:for(k=0,g=Math.pow(2,8),C=1;C!=g;)b=T.val&T.position,T.position>>=1,T.position==0&&(T.position=u,T.val=h(T.index++)),k|=(b>0?1:0)*C,C<<=1;P=t(k);break;case 1:for(k=0,g=Math.pow(2,16),C=1;C!=g;)b=T.val&T.position,T.position>>=1,T.position==0&&(T.position=u,T.val=h(T.index++)),k|=(b>0?1:0)*C,C<<=1;P=t(k);break;case 2:return""}for(d[3]=P,x=P,v.push(P);;){if(T.index>c)return"";for(k=0,g=Math.pow(2,m),C=1;C!=g;)b=T.val&T.position,T.position>>=1,T.position==0&&(T.position=u,T.val=h(T.index++)),k|=(b>0?1:0)*C,C<<=1;switch(P=k){case 0:for(k=0,g=Math.pow(2,8),C=1;C!=g;)b=T.val&T.position,T.position>>=1,T.position==0&&(T.position=u,T.val=h(T.index++)),k|=(b>0?1:0)*C,C<<=1;d[p++]=t(k),P=p-1,f--;break;case 1:for(k=0,g=Math.pow(2,16),C=1;C!=g;)b=T.val&T.position,T.position>>=1,T.position==0&&(T.position=u,T.val=h(T.index++)),k|=(b>0?1:0)*C,C<<=1;d[p++]=t(k),P=p-1,f--;break;case 2:return v.join("")}if(f==0&&(f=Math.pow(2,m),m++),d[P])O=d[P];else if(P===p)O=x+x.charAt(0);else return null;v.push(O),d[p++]=x+O.charAt(0),f--,x=O,f==0&&(f=Math.pow(2,m),m++)}}};return l}();r!=null?r.exports=e:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return e})})(Ta);var Tv=Ta.exports;const Mv=Qu(Tv);var Kc=function(){function r(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();function Rv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var Bt=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],Av=function(){Kc(r,null,[{key:"escapeForHtml",value:function(t){return new r().escapeForHtml(t)}},{key:"linkify",value:function(t){return new r().linkify(t)}},{key:"ansiToHtml",value:function(t,n){return new r().ansiToHtml(t,n)}},{key:"ansiToJson",value:function(t,n){return new r().ansiToJson(t,n)}},{key:"ansiToText",value:function(t){return new r().ansiToText(t)}}]);function r(){Rv(this,r),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0,this.decorations=[]}return Kc(r,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var t=0;t<2;++t)for(var n=0;n<8;++n)this.PALETTE_COLORS.push(Bt[t][n].color);for(var s=[0,95,135,175,215,255],o=function(f,p,m){return s[f]+", "+s[p]+", "+s[m]},a=0;a<6;++a)for(var l=0;l<6;++l)for(var c=0;c<6;++c)this.PALETTE_COLORS.push(o(a,l,c));for(var u=8,h=0;h<24;++h,u+=10)this.PALETTE_COLORS.push(o(u,u,u))}},{key:"escapeForHtml",value:function(t){return t.replace(/[&<>\"]/gm,function(n){return n=="&"?"&amp;":n=='"'?"&quot;":n=="<"?"&lt;":n==">"?"&gt;":""})}},{key:"linkify",value:function(t){return t.replace(/(https?:\/\/[^\s]+)/gm,function(n){return'<a href="'+n+'">'+n+"</a>"})}},{key:"ansiToHtml",value:function(t,n){return this.process(t,n,!0)}},{key:"ansiToJson",value:function(t,n){return n=n||{},n.json=!0,n.clearLine=!1,this.process(t,n,!0)}},{key:"ansiToText",value:function(t){return this.process(t,{},!1)}},{key:"process",value:function(t,n,s){var o=this,a=this,l=t.split(/\033\[/),c=l.shift();n==null&&(n={}),n.clearLine=/\r/.test(t);var u=l.map(function(d){return o.processChunk(d,n,s)});if(n&&n.json){var h=a.processChunkJson("");return h.content=c,h.clearLine=n.clearLine,u.unshift(h),n.remove_empty&&(u=u.filter(function(d){return!d.isEmpty()})),u}else u.unshift(c);return u.join("")}},{key:"processChunkJson",value:function(t,n,s){n=typeof n>"u"?{}:n;var o=n.use_classes=typeof n.use_classes<"u"&&n.use_classes,a=n.key=o?"class":"color",l={content:t,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,isInverted:!1,clearLine:n.clearLine,decoration:null,decorations:[],was_processed:!1,isEmpty:function(){return!l.content}},c=t.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);if(!c)return l;l.content=c[4];var u=c[2].split(";");if(c[1]!==""||c[3]!=="m"||!s)return l;for(var h=this;u.length>0;){var d=u.shift(),f=parseInt(d);if(isNaN(f)||f===0)h.fg=h.bg=null,h.decorations=[];else if(f===1)h.decorations.push("bold");else if(f===2)h.decorations.push("dim");else if(f===3)h.decorations.push("italic");else if(f===4)h.decorations.push("underline");else if(f===5)h.decorations.push("blink");else if(f===7)h.decorations.push("reverse");else if(f===8)h.decorations.push("hidden");else if(f===9)h.decorations.push("strikethrough");else if(f===21)h.removeDecoration("bold");else if(f===22)h.removeDecoration("bold"),h.removeDecoration("dim");else if(f===23)h.removeDecoration("italic");else if(f===24)h.removeDecoration("underline");else if(f===25)h.removeDecoration("blink");else if(f===27)h.removeDecoration("reverse");else if(f===28)h.removeDecoration("hidden");else if(f===29)h.removeDecoration("strikethrough");else if(f===39)h.fg=null;else if(f===49)h.bg=null;else if(f>=30&&f<38)h.fg=Bt[0][f%10][a];else if(f>=90&&f<98)h.fg=Bt[1][f%10][a];else if(f>=40&&f<48)h.bg=Bt[0][f%10][a];else if(f>=100&&f<108)h.bg=Bt[1][f%10][a];else if(f===38||f===48){var p=f===38;if(u.length>=1){var m=u.shift();if(m==="5"&&u.length>=1){var O=parseInt(u.shift());if(O>=0&&O<=255)if(!o)this.PALETTE_COLORS||h.setupPalette(),p?h.fg=this.PALETTE_COLORS[O]:h.bg=this.PALETTE_COLORS[O];else{var v=O>=16?"ansi-palette-"+O:Bt[O>7?1:0][O%8].class;p?h.fg=v:h.bg=v}}else if(m==="2"&&u.length>=3){var w=parseInt(u.shift()),x=parseInt(u.shift()),k=parseInt(u.shift());if(w>=0&&w<=255&&x>=0&&x<=255&&k>=0&&k<=255){var b=w+", "+x+", "+k;o?p?(h.fg="ansi-truecolor",h.fg_truecolor=b):(h.bg="ansi-truecolor",h.bg_truecolor=b):p?h.fg=b:h.bg=b}}}}}return h.fg===null&&h.bg===null&&h.decorations.length===0||(l.fg=h.fg,l.bg=h.bg,l.fg_truecolor=h.fg_truecolor,l.bg_truecolor=h.bg_truecolor,l.decorations=h.decorations,l.decoration=h.decorations.slice(-1).pop()||null,l.was_processed=!0),l}},{key:"processChunk",value:function(t,n,s){var o=this;n=n||{};var a=this.processChunkJson(t,n,s),l=n.use_classes;if(a.decorations=a.decorations.filter(function(p){if(p==="reverse"){a.fg||(a.fg=Bt[0][7][l?"class":"color"]),a.bg||(a.bg=Bt[0][0][l?"class":"color"]);var m=a.fg;a.fg=a.bg,a.bg=m;var O=a.fg_truecolor;return a.fg_truecolor=a.bg_truecolor,a.bg_truecolor=O,a.isInverted=!0,!1}return!0}),n.json)return a;if(a.isEmpty())return"";if(!a.was_processed)return a.content;var c=[],u=[],h=[],d={},f=function(m){var O=[],v=void 0;for(v in m)m.hasOwnProperty(v)&&O.push("data-"+v+'="'+o.escapeForHtml(m[v])+'"');return O.length>0?" "+O.join(" "):""};return a.isInverted&&(d["ansi-is-inverted"]="true"),a.fg&&(l?(c.push(a.fg+"-fg"),a.fg_truecolor!==null&&(d["ansi-truecolor-fg"]=a.fg_truecolor,a.fg_truecolor=null)):c.push("color:rgb("+a.fg+")")),a.bg&&(l?(c.push(a.bg+"-bg"),a.bg_truecolor!==null&&(d["ansi-truecolor-bg"]=a.bg_truecolor,a.bg_truecolor=null)):c.push("background-color:rgb("+a.bg+")")),a.decorations.forEach(function(p){if(l){u.push("ansi-"+p);return}p==="bold"?u.push("font-weight:bold"):p==="dim"?u.push("opacity:0.5"):p==="italic"?u.push("font-style:italic"):p==="hidden"?u.push("visibility:hidden"):p==="strikethrough"?h.push("line-through"):h.push(p)}),h.length&&u.push("text-decoration:"+h.join(" ")),l?'<span class="'+c.concat(u).join(" ")+'"'+f(d)+">"+a.content+"</span>":'<span style="'+c.concat(u).join(";")+'"'+f(d)+">"+a.content+"</span>"}},{key:"removeDecoration",value:function(t){var n=this.decorations.indexOf(t);n>=0&&this.decorations.splice(n,1)}}]),r}(),Zv=Av;const jv=Qu(Zv);var Ma={exports:{}};function Ra(r){if(!r)return"";if(!/\r/.test(r))return r;for(r=r.replace(/\r+\n/gm,`
`);/\r./.test(r);)r=r.replace(/^([^\r\n]*)\r+([^\r\n]+)/gm,function(e,t,n){return n+t.slice(n.length)});return r}function Ev(r){for(var e=0,t=0;t<r.length;t++)r[e].length<=r[t].length&&(e=t);return e}function eu(r){if(!/\r/.test(r))return r;for(var e=r.split("\r"),t=[];e.length>0;){var n=Ev(e);t.push(e[n]),e=e.slice(n+1)}return t.join("\r")}function Iv(r){if(!r)return"";if(!/\r/.test(r))return r;if(!/\n/.test(r))return eu(r);r=r.replace(/\r+\n/gm,`
`);var e=r.lastIndexOf(`
`);return Ra(r.slice(0,e))+`
`+eu(r.slice(e+1))}Ma.exports=Ra;var Dv=Ma.exports.escapeCarriageReturn=Ra;Ma.exports.escapeCarriageReturnSafe=Iv;var E=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),yn=E((r,e)=>{e.exports=function(t){try{return!!t()}catch{return!0}}}),rn=E((r,e)=>{var t=yn();e.exports=!t(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})}),Wt=E((r,e)=>{var t=function(n){return n&&n.Math==Math&&n};e.exports=t(typeof globalThis=="object"&&globalThis)||t(typeof window=="object"&&window)||t(typeof self=="object"&&self)||t(typeof global=="object"&&global)||function(){return this}()||r||Function("return this")()}),Xv=E((r,e)=>{e.exports=!1}),Yv=E((r,e)=>{var t=Wt(),n=Object.defineProperty;e.exports=function(s,o){try{n(t,s,{value:o,configurable:!0,writable:!0})}catch{t[s]=o}return o}}),Aa=E((r,e)=>{var t=Wt(),n=Yv(),s="__core-js_shared__",o=t[s]||n(s,{});e.exports=o}),Af=E((r,e)=>{var t=Xv(),n=Aa();(e.exports=function(s,o){return n[s]||(n[s]=o!==void 0?o:{})})("versions",[]).push({version:"3.32.0",mode:t?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),Zf=E((r,e)=>{var t=yn();e.exports=!t(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")})}),sn=E((r,e)=>{var t=Zf(),n=Function.prototype,s=n.call,o=t&&n.bind.bind(s,s);e.exports=t?o:function(a){return function(){return s.apply(a,arguments)}}}),jf=E((r,e)=>{e.exports=function(t){return t==null}}),Ef=E((r,e)=>{var t=jf(),n=TypeError;e.exports=function(s){if(t(s))throw n("Can't call method on "+s);return s}}),If=E((r,e)=>{var t=Ef(),n=Object;e.exports=function(s){return n(t(s))}}),Xr=E((r,e)=>{var t=sn(),n=If(),s=t({}.hasOwnProperty);e.exports=Object.hasOwn||function(o,a){return s(n(o),a)}}),Df=E((r,e)=>{var t=sn(),n=0,s=Math.random(),o=t(1 .toString);e.exports=function(a){return"Symbol("+(a===void 0?"":a)+")_"+o(++n+s,36)}}),zv=E((r,e)=>{e.exports=typeof navigator<"u"&&String(navigator.userAgent)||""}),Wv=E((r,e)=>{var t=Wt(),n=zv(),s=t.process,o=t.Deno,a=s&&s.versions||o&&o.version,l=a&&a.v8,c,u;l&&(c=l.split("."),u=c[0]>0&&c[0]<4?1:+(c[0]+c[1])),!u&&n&&(c=n.match(/Edge\/(\d+)/),(!c||c[1]>=74)&&(c=n.match(/Chrome\/(\d+)/),c&&(u=+c[1]))),e.exports=u}),Xf=E((r,e)=>{var t=Wv(),n=yn(),s=Wt(),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!n(function(){var a=Symbol();return!o(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&t&&t<41})}),Yf=E((r,e)=>{var t=Xf();e.exports=t&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}),zf=E((r,e)=>{var t=Wt(),n=Af(),s=Xr(),o=Df(),a=Xf(),l=Yf(),c=t.Symbol,u=n("wks"),h=l?c.for||c:c&&c.withoutSetter||o;e.exports=function(d){return s(u,d)||(u[d]=a&&s(c,d)?c[d]:h("Symbol."+d)),u[d]}}),Wf=E((r,e)=>{var t=typeof document=="object"&&document.all,n=typeof t>"u"&&t!==void 0;e.exports={all:t,IS_HTMLDDA:n}}),on=E((r,e)=>{var t=Wf(),n=t.all;e.exports=t.IS_HTMLDDA?function(s){return typeof s=="function"||s===n}:function(s){return typeof s=="function"}}),Yr=E((r,e)=>{var t=on(),n=Wf(),s=n.all;e.exports=n.IS_HTMLDDA?function(o){return typeof o=="object"?o!==null:t(o)||o===s}:function(o){return typeof o=="object"?o!==null:t(o)}}),Za=E((r,e)=>{var t=Yr(),n=String,s=TypeError;e.exports=function(o){if(t(o))return o;throw s(n(o)+" is not an object")}}),Lf=E((r,e)=>{var t=rn(),n=yn();e.exports=t&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})}),Bf=E((r,e)=>{var t=Wt(),n=Yr(),s=t.document,o=n(s)&&n(s.createElement);e.exports=function(a){return o?s.createElement(a):{}}}),Lv=E((r,e)=>{var t=rn(),n=yn(),s=Bf();e.exports=!t&&!n(function(){return Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a!=7})}),Vf=E((r,e)=>{var t=Zf(),n=Function.prototype.call;e.exports=t?n.bind(n):function(){return n.apply(n,arguments)}}),Nf=E((r,e)=>{var t=Wt(),n=on(),s=function(o){return n(o)?o:void 0};e.exports=function(o,a){return arguments.length<2?s(t[o]):t[o]&&t[o][a]}}),Bv=E((r,e)=>{var t=sn();e.exports=t({}.isPrototypeOf)}),qf=E((r,e)=>{var t=Nf(),n=on(),s=Bv(),o=Yf(),a=Object;e.exports=o?function(l){return typeof l=="symbol"}:function(l){var c=t("Symbol");return n(c)&&s(c.prototype,a(l))}}),Vv=E((r,e)=>{var t=String;e.exports=function(n){try{return t(n)}catch{return"Object"}}}),Nv=E((r,e)=>{var t=on(),n=Vv(),s=TypeError;e.exports=function(o){if(t(o))return o;throw s(n(o)+" is not a function")}}),qv=E((r,e)=>{var t=Nv(),n=jf();e.exports=function(s,o){var a=s[o];return n(a)?void 0:t(a)}}),Uv=E((r,e)=>{var t=Vf(),n=on(),s=Yr(),o=TypeError;e.exports=function(a,l){var c,u;if(l==="string"&&n(c=a.toString)&&!s(u=t(c,a))||n(c=a.valueOf)&&!s(u=t(c,a))||l!=="string"&&n(c=a.toString)&&!s(u=t(c,a)))return u;throw o("Can't convert object to primitive value")}}),_v=E((r,e)=>{var t=Vf(),n=Yr(),s=qf(),o=qv(),a=Uv(),l=zf(),c=TypeError,u=l("toPrimitive");e.exports=function(h,d){if(!n(h)||s(h))return h;var f=o(h,u),p;if(f){if(d===void 0&&(d="default"),p=t(f,h,d),!n(p)||s(p))return p;throw c("Can't convert object to primitive value")}return d===void 0&&(d="number"),a(h,d)}}),Gv=E((r,e)=>{var t=_v(),n=qf();e.exports=function(s){var o=t(s,"string");return n(o)?o:o+""}}),os=E(r=>{var e=rn(),t=Lv(),n=Lf(),s=Za(),o=Gv(),a=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,u="enumerable",h="configurable",d="writable";r.f=e?n?function(f,p,m){if(s(f),p=o(p),s(m),typeof f=="function"&&p==="prototype"&&"value"in m&&d in m&&!m[d]){var O=c(f,p);O&&O[d]&&(f[p]=m.value,m={configurable:h in m?m[h]:O[h],enumerable:u in m?m[u]:O[u],writable:!1})}return l(f,p,m)}:l:function(f,p,m){if(s(f),p=o(p),s(m),t)try{return l(f,p,m)}catch{}if("get"in m||"set"in m)throw a("Accessors not supported");return"value"in m&&(f[p]=m.value),f}}),Fv=E((r,e)=>{var t=sn(),n=t({}.toString),s=t("".slice);e.exports=function(o){return s(n(o),8,-1)}}),Jv=E((r,e)=>{var t=sn(),n=yn(),s=Fv(),o=Object,a=t("".split);e.exports=n(function(){return!o("z").propertyIsEnumerable(0)})?function(l){return s(l)=="String"?a(l,""):o(l)}:o}),ja=E((r,e)=>{var t=Jv(),n=Ef();e.exports=function(s){return t(n(s))}}),Hv=E((r,e)=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(s){var o=+s;return(o>0?n:t)(o)}}),Uf=E((r,e)=>{var t=Hv();e.exports=function(n){var s=+n;return s!==s||s===0?0:t(s)}}),Kv=E((r,e)=>{var t=Uf(),n=Math.max,s=Math.min;e.exports=function(o,a){var l=t(o);return l<0?n(l+a,0):s(l,a)}}),e3=E((r,e)=>{var t=Uf(),n=Math.min;e.exports=function(s){return s>0?n(t(s),9007199254740991):0}}),_f=E((r,e)=>{var t=e3();e.exports=function(n){return t(n.length)}}),t3=E((r,e)=>{var t=ja(),n=Kv(),s=_f(),o=function(a){return function(l,c,u){var h=t(l),d=s(h),f=n(u,d),p;if(a&&c!=c){for(;d>f;)if(p=h[f++],p!=p)return!0}else for(;d>f;f++)if((a||f in h)&&h[f]===c)return a||f||0;return!a&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}}),Ea=E((r,e)=>{e.exports={}}),n3=E((r,e)=>{var t=sn(),n=Xr(),s=ja(),o=t3().indexOf,a=Ea(),l=t([].push);e.exports=function(c,u){var h=s(c),d=0,f=[],p;for(p in h)!n(a,p)&&n(h,p)&&l(f,p);for(;u.length>d;)n(h,p=u[d++])&&(~o(f,p)||l(f,p));return f}}),Gf=E((r,e)=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]}),r3=E((r,e)=>{var t=n3(),n=Gf();e.exports=Object.keys||function(s){return t(s,n)}}),i3=E(r=>{var e=rn(),t=Lf(),n=os(),s=Za(),o=ja(),a=r3();r.f=e&&!t?Object.defineProperties:function(l,c){s(l);for(var u=o(c),h=a(c),d=h.length,f=0,p;d>f;)n.f(l,p=h[f++],u[p]);return l}}),s3=E((r,e)=>{var t=Nf();e.exports=t("document","documentElement")}),Ff=E((r,e)=>{var t=Af(),n=Df(),s=t("keys");e.exports=function(o){return s[o]||(s[o]=n(o))}}),o3=E((r,e)=>{var t=Za(),n=i3(),s=Gf(),o=Ea(),a=s3(),l=Bf(),c=Ff(),u=">",h="<",d="prototype",f="script",p=c("IE_PROTO"),m=function(){},O=function(b){return h+f+u+b+h+"/"+f+u},v=function(b){b.write(O("")),b.close();var g=b.parentWindow.Object;return b=null,g},w=function(){var b=l("iframe"),g="java"+f+":",C;return b.style.display="none",a.appendChild(b),b.src=String(g),C=b.contentWindow.document,C.open(),C.write(O("document.F=Object")),C.close(),C.F},x,k=function(){try{x=new ActiveXObject("htmlfile")}catch{}k=typeof document<"u"?document.domain&&x?v(x):w():v(x);for(var b=s.length;b--;)delete k[d][s[b]];return k()};o[p]=!0,e.exports=Object.create||function(b,g){var C;return b!==null?(m[d]=t(b),C=new m,m[d]=null,C[p]=b):C=k(),g===void 0?C:n.f(C,g)}}),a3=E((r,e)=>{var t=zf(),n=o3(),s=os().f,o=t("unscopables"),a=Array.prototype;a[o]==null&&s(a,o,{configurable:!0,value:n(null)}),e.exports=function(l){a[o][l]=!0}}),l3=E((r,e)=>{var t=rn(),n=Xr(),s=Function.prototype,o=t&&Object.getOwnPropertyDescriptor,a=n(s,"name"),l=a&&(function(){}).name==="something",c=a&&(!t||t&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}}),c3=E((r,e)=>{var t=sn(),n=on(),s=Aa(),o=t(Function.toString);n(s.inspectSource)||(s.inspectSource=function(a){return o(a)}),e.exports=s.inspectSource}),u3=E((r,e)=>{var t=Wt(),n=on(),s=t.WeakMap;e.exports=n(s)&&/native code/.test(String(s))}),h3=E((r,e)=>{e.exports=function(t,n){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:n}}}),d3=E((r,e)=>{var t=rn(),n=os(),s=h3();e.exports=t?function(o,a,l){return n.f(o,a,s(1,l))}:function(o,a,l){return o[a]=l,o}}),f3=E((r,e)=>{var t=u3(),n=Wt(),s=Yr(),o=d3(),a=Xr(),l=Aa(),c=Ff(),u=Ea(),h="Object already initialized",d=n.TypeError,f=n.WeakMap,p,m,O,v=function(b){return O(b)?m(b):p(b,{})},w=function(b){return function(g){var C;if(!s(g)||(C=m(g)).type!==b)throw d("Incompatible receiver, "+b+" required");return C}};t||l.state?(x=l.state||(l.state=new f),x.get=x.get,x.has=x.has,x.set=x.set,p=function(b,g){if(x.has(b))throw d(h);return g.facade=b,x.set(b,g),g},m=function(b){return x.get(b)||{}},O=function(b){return x.has(b)}):(k=c("state"),u[k]=!0,p=function(b,g){if(a(b,k))throw d(h);return g.facade=b,o(b,k,g),g},m=function(b){return a(b,k)?b[k]:{}},O=function(b){return a(b,k)});var x,k;e.exports={set:p,get:m,has:O,enforce:v,getterFor:w}}),p3=E((r,e)=>{var t=sn(),n=yn(),s=on(),o=Xr(),a=rn(),l=l3().CONFIGURABLE,c=c3(),u=f3(),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,m=t("".slice),O=t("".replace),v=t([].join),w=a&&!n(function(){return p(function(){},"length",{value:8}).length!==8}),x=String(String).split("String"),k=e.exports=function(b,g,C){m(f(g),0,7)==="Symbol("&&(g="["+O(f(g),/^Symbol\(([^)]*)\)/,"$1")+"]"),C&&C.getter&&(g="get "+g),C&&C.setter&&(g="set "+g),(!o(b,"name")||l&&b.name!==g)&&(a?p(b,"name",{value:g,configurable:!0}):b.name=g),w&&C&&o(C,"arity")&&b.length!==C.arity&&p(b,"length",{value:C.arity});try{C&&o(C,"constructor")&&C.constructor?a&&p(b,"prototype",{writable:!1}):b.prototype&&(b.prototype=void 0)}catch{}var P=h(b);return o(P,"source")||(P.source=v(x,typeof g=="string"?g:"")),b};Function.prototype.toString=k(function(){return s(this)&&d(this).source||c(this)},"toString")}),m3=E((r,e)=>{var t=p3(),n=os();e.exports=function(s,o,a){return a.get&&t(a.get,o,{getter:!0}),a.set&&t(a.set,o,{setter:!0}),n.f(s,o,a)}}),O3=rn(),g3=a3(),v3=If(),w3=_f(),y3=m3();O3&&(y3(Array.prototype,"lastIndex",{configurable:!0,get:function(){var r=v3(this),e=w3(r);return e==0?0:e-1}}),g3("lastIndex"));function b3(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return r=typeof r=="string"?r:S3(r),r=Dv($3(r)),jv.ansiToJson(r,{json:!0,remove_empty:!0,use_classes:e})}function S3(r){let e="";return r&&Array.isArray(r)?e=r[0].children:e=r.children,e}function C3(r){let e="";return r.bg&&(e+=`${r.bg}-bg `),r.fg&&(e+=`${r.fg}-fg `),r.decoration&&(e+=`ansi-${r.decoration} `),e===""?null:(e=e.substring(0,e.length-1),e)}function x3(r){let e={};switch(r.bg&&(e.backgroundColor=`rgb(${r.bg})`),r.fg&&(e.color=`rgb(${r.fg})`),r.decoration){case"bold":e.fontWeight="bold";break;case"dim":e.opacity="0.5";break;case"italic":e.fontStyle="italic";break;case"hidden":e.visibility="hidden";break;case"strikethrough":e.textDecoration="line-through";break;case"underline":e.textDecoration="underline";break;case"blink":e.textDecoration="blink";break}return e}function k3(r,e,t,n){let s=e?null:x3(t),o=e?C3(t):null;if(!r)return oi("span",{style:s,key:n,class:o},t.content);let a=[],l=/(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g,c=0,u;for(;(u=l.exec(t.content))!==null;){let[,h,d]=u,f=u.index+h.length;f>c&&a.push(t.content.substring(c,f));let p=d.startsWith("www.")?`http://${d}`:d;a.push(oi("a",{key:c,href:p,target:"_blank"},`${d}`)),c=l.lastIndex}return c<t.content.length&&a.push(t.content.substring(c)),oi("span",{style:s,key:n,class:o},a)}var P3=ue({name:"Ansi",props:{linkify:{type:Boolean,required:!1,default:void 0},useClasses:{type:Boolean,required:!1,default:void 0}},setup(r,e){let{attrs:t,slots:n}=e;return()=>{var s,o,a,l;return oi("code",{class:(t==null?void 0:t.class)||""},b3((s=n==null?void 0:n.default())!=null?s:"",(o=r.useClasses)!=null?o:!1).map(k3.bind(null,(a=r.linkify)!=null?a:!1,(l=r.useClasses)!=null?l:!1)))}}});function $3(r){let e=r;do r=e,e=r.replace(/[^\n]\x08/gm,"");while(e.length<r.length);return r}var Q3=P3,T3=Object.defineProperty,M3=Object.defineProperties,R3=Object.getOwnPropertyDescriptors,tu=Object.getOwnPropertySymbols,A3=Object.prototype.hasOwnProperty,Z3=Object.prototype.propertyIsEnumerable,nu=(r,e,t)=>e in r?T3(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,L=(r,e)=>{for(var t in e||(e={}))A3.call(e,t)&&nu(r,t,e[t]);if(tu)for(var t of tu(e))Z3.call(e,t)&&nu(r,t,e[t]);return r},ce=(r,e)=>M3(r,R3(e)),cr=(r,e,t)=>new Promise((n,s)=>{var o=c=>{try{l(t.next(c))}catch(u){s(u)}},a=c=>{try{l(t.throw(c))}catch(u){s(u)}},l=c=>c.done?n(c.value):Promise.resolve(c.value).then(o,a);l((t=t.apply(r,e)).next())}),j3={onCodeUpdate:{type:Function},code:{type:String,required:!0},filePath:{type:String},fileType:{type:String},showLineNumbers:{type:Boolean,default:!1},showInlineErrors:{type:Boolean,default:!1},wrapContent:{type:Boolean,default:!1},editorState:{type:String,default:"pristine"},readOnly:{type:Boolean,default:!1},showReadOnly:{type:Boolean,default:!0},decorators:{type:Array,default(){return[]}},initMode:{type:String,default:"lazy"},extensions:{type:Array,default(){return[]}},extensionsKeymap:{type:Array,default(){return[]}},additionalLanguages:{type:Array,default(){return[]}}},E3=j3;function I3(r){return v0()?(w0(r),!0):!1}var D3=typeof window<"u",X3=D3?window:void 0;function ru(r){var e;let t=Vt(r);return(e=t==null?void 0:t.$el)!=null?e:t}var Vs=()=>{};function Y3(r,e,t={}){let{root:n,rootMargin:s="0px",threshold:o=.1,window:a=X3}=t,l=a&&"IntersectionObserver"in a,c=Vs,u=l?Oe(()=>({el:ru(r),root:ru(n)}),({el:d,root:f})=>{if(c(),!d)return;let p=new IntersectionObserver(e,{root:f,rootMargin:s,threshold:o});p.observe(d),c=()=>{p.disconnect(),c=Vs}},{immediate:!0,flush:"post"}):Vs,h=()=>{c(),u()};return I3(h),{isSupported:l,stop:h}}var Vi=r=>{let e=r.lastIndexOf("/");return r.slice(e+1)},z3=(r,e)=>{let t=(r[0]==="/"?r.slice(1):r).split("/"),n=[];if(t.length===1)n.unshift(t[0]);else for(let s=0;s<e.length;s++){let o=e[s].split("/");for(let a=1;a<=t.length;a++){let l=t[t.length-a],c=o[o.length-a];if(n.length<a&&n.unshift(l),l!==c)break}}return n.length<t.length&&n.unshift(".."),n.join("/")},iu=r=>{let e=0,t=0,n=0;if(r.startsWith("#")){if(r.length<7)return!0;e=parseInt(r.substr(1,2),16),t=parseInt(r.substr(3,2),16),n=parseInt(r.substr(5,2),16)}else{let s=r.replace("rgb(","").replace("rgba(","").replace(")","").split(",");if(s.length<3)return!0;e=parseInt(s[0],10),t=parseInt(s[1],10),n=parseInt(s[2],10)}return(e*299+t*587+n*114)/1e3<128},W3=0,Ni=()=>(+(Date.now().toString(10).substr(0,4)+W3++)).toString(16),$r=()=>"",Vo=()=>$r,Jf=Object.getOwnPropertyDescriptors({toString:$r});Object.defineProperties($r,Jf);Object.defineProperties(Vo,Jf);var L3={createTheme:$r,css:Vo,getCssText:$r,keyframes:Vo},Qr={colors:{surface1:"#ffffff",surface2:"#EFEFEF",surface3:"#F3F3F3",disabled:"#C5C5C5",base:"#323232",clickable:"#808080",hover:"#4D4D4D",accent:"#3973E0",error:"#EA3323",errorSurface:"#FCF1F0",warning:"#6A4516",warningSurface:"#FEF2C0"},syntax:{plain:"#151515",comment:{color:"#999",fontStyle:"italic"},keyword:"#7C5AE3",tag:"#0971F1",punctuation:"#3B3B3B",definition:"#85A600",property:"#3B3B3B",static:"#3B3B3B",string:"#2E6BD0"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',size:"13px",lineHeight:"20px"}},No={colors:{surface1:"#151515",surface2:"#252525",surface3:"#2F2F2F",disabled:"#4D4D4D",base:"#808080",clickable:"#999999",hover:"#C5C5C5",accent:"#E5E5E5",error:"#FFB4A6",errorSurface:"#690000",warning:"#E7C400",warningSurface:"#3A3000"},syntax:{plain:"#FFFFFF",comment:{color:"#757575",fontStyle:"italic"},keyword:"#77B7D7",tag:"#DFAB5C",punctuation:"#ffffff",definition:"#86D9CA",property:"#77B7D7",static:"#C64640",string:"#977CDC"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',size:"13px",lineHeight:"20px"}},su,B3={light:Qr,dark:No,auto:typeof window<"u"&&(su=window==null?void 0:window.matchMedia)!=null&&su.call(window,"(prefers-color-scheme: dark)").matches?No:Qr},ee="sp",V3=()=>typeof __UNSTYLED_COMPONENTS__<"u"&&!!__UNSTYLED_COMPONENTS__,{createTheme:ou,css:M,getCssText:s9,keyframes:Hf}=V3()?L3:e5({prefix:ee}),N3={space:new Array(11).fill(" ").reduce((r,e,t)=>ce(L({},r),{[t+1]:`${(t+1)*4}px`}),{}),border:{radius:"4px"},layout:{height:"300px",headerHeight:"40px"},transitions:{default:"150ms ease"},zIndices:{base:"1",overlay:"2",top:"3"}},au=r=>{let e=Object.entries(r.syntax).reduce((t,[n,s])=>{let o={[`color-${n}`]:s};return typeof s=="object"&&(o=Object.entries(s).reduce((a,[l,c])=>ce(L({},a),{[`${l}-${n}`]:c}),{})),L(L({},t),o)},{});return ce(L({},N3),{colors:r.colors,font:r.font,syntax:e})},lu=r=>{var e,t,n,s,o;let a="default";if(r=r||"light",typeof r=="string"){let m=B3[r];if(!m)throw new Error(`[sandpack-vue3]: invalid theme '${r}' provided.`);return{theme:m,id:r,mode:iu(m.colors.surface1)?"dark":"light"}}let l=iu((t=(e=r==null?void 0:r.colors)==null?void 0:e.surface1)!=null?t:Qr.colors.surface1)?"dark":"light",c=l==="dark"?No:Qr,u=L(L({},c.colors),(n=r==null?void 0:r.colors)!=null?n:{}),h=L(L({},c.syntax),(s=r==null?void 0:r.syntax)!=null?s:{}),d=L(L({},c.font),(o=r==null?void 0:r.font)!=null?o:{}),f={colors:u,syntax:h,font:d},p=r?q3(JSON.stringify(f)):a;return{theme:f,id:`sp-${p}`,mode:l}},q3=r=>{let e=0;for(let t=0;t<r.length;e&=e)e=31*e+r.charCodeAt(t++);return Math.abs(e)},cu=()=>"";cu.toString=cu;var qo=(r,{line:e,column:t})=>r.line(e).from+(t??0)-1,U3=()=>z.theme({"&":{backgroundColor:`var(--${ee}-colors-surface1)`,color:`var(--${ee}-syntax-color-plain)`,height:"100%"},".cm-matchingBracket, .cm-nonmatchingBracket, &.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{color:"inherit",backgroundColor:"rgba(128,128,128,.25)",backgroundBlendMode:"difference"},"&.cm-editor.cm-focused":{outline:"none"},".cm-activeLine":{backgroundColor:`var(--${ee}-colors-surface3)`,borderRadius:`var(--${ee}-border-radius)`},".cm-errorLine":{backgroundColor:`var(--${ee}-colors-errorSurface)`,borderRadius:`var(--${ee}-border-radius)`},".cm-content":{caretColor:`var(--${ee}-colors-accent)`,padding:`0 var(--${ee}-space-4)`},".cm-scroller":{fontFamily:`var(--${ee}-font-mono)`,lineHeight:`var(--${ee}-font-lineHeight)`},".cm-gutters":{backgroundColor:`var(--${ee}-colors-surface1)`,color:`var(--${ee}-colors-disabled)`,border:"none",paddingLeft:`var(--${ee}-space-1)`},".cm-gutter.cm-lineNumbers":{fontSize:".6em"},".cm-lineNumbers .cm-gutterElement":{lineHeight:`var(--${ee}-font-lineHeight)`,minWidth:`var(--${ee}-space-5)`},".cm-content .cm-line":{paddingLeft:`var(--${ee}-space-1)`},".cm-content.cm-readonly .cm-line":{paddingLeft:0}}),lt=r=>`${ee}-syntax-${r}`,_3=()=>["string","plain","comment","keyword","definition","punctuation","property","tag","static"].reduce((r,e)=>ce(L({},r),{[`.${lt(e)}`]:{color:`$syntax$color$${e}`,fontStyle:`$syntax$fontStyle$${e}`}}),{}),G3=r=>es.define([{tag:S.link,textDecoration:"underline"},{tag:S.emphasis,fontStyle:"italic"},{tag:S.strong,fontWeight:"bold"},{tag:S.keyword,class:lt("keyword")},{tag:[S.atom,S.number,S.bool],class:lt("static")},{tag:S.variableName,class:lt("plain")},{tag:S.function(S.variableName),class:lt("definition")},{tag:S.standard(S.tagName),class:lt("tag")},{tag:[S.function(S.variableName),S.definition(S.function(S.variableName)),S.tagName],class:lt("definition")},{tag:S.propertyName,class:lt("property")},{tag:[S.literal,S.inserted],class:lt(r.syntax.string?"string":"static")},{tag:S.punctuation,class:lt("punctuation")},{tag:[S.comment,S.quote],class:lt("comment")}]),F3=(r,e,t)=>{if(!r&&!e)return"javascript";let n=e;if(!n&&r){let s=r.lastIndexOf(".");n=r.slice(s+1)}for(let s of t)if(n===s.name||s.extensions.includes(n||""))return s.name;switch(n){case"ts":case"tsx":return"typescript";case"html":case"svelte":case"vue":case"astro":return"html";case"css":case"less":case"scss":return"css";case"js":case"jsx":case"json":default:return"javascript"}},J3=(r,e)=>{let t={javascript:Io({jsx:!0,typescript:!1}),typescript:Io({jsx:!0,typescript:!0}),html:k2(),css:Sd()};for(let n of e)if(r===n.name)return n.language;return t[r]};function H3(r){return it.fromClass(class{constructor(e){this.decorations=this.getDecoration(e)}update(e){}getDecoration(e){if(!r)return q.none;let t=r.map(n=>{var s,o,a;let l=q.line({attributes:{class:(s=n.className)!=null?s:""}}),c=q.mark({class:(o=n.className)!=null?o:"",attributes:(a=n.elementAttributes)!=null?a:void 0}),u=qo(e.state.doc,{line:n.line,column:n.startColumn})+1;if(n.startColumn&&n.endColumn){let h=qo(e.state.doc,{line:n.line,column:n.endColumn})+1;return c.range(u,h)}return l.range(u)});return q.set(t)}},{decorations:e=>e.decorations})}function K3(){return tw}var ew=q.line({attributes:{class:"cm-errorLine"}}),tw=it.fromClass(class{constructor(){this.decorations=q.none}update(r){r.transactions.forEach(e=>{let t=e.annotation("show-error");if(t!==void 0){let n=qo(r.view.state.doc,{line:t})+1;this.decorations=q.set([ew.range(n)])}else e.annotation("remove-errors")&&(this.decorations=q.none)})}},{decorations:r=>r.decorations}),uu=(r,e)=>{if(r.length!==e.length)return!1;let t=!0;for(let n=0;n<r.length;n++)if(r[n]!==e[n]){t=!1;break}return t},Kf=Symbol("classNamesProvider"),nw=ue({name:"ClassNamesProvider",props:{classes:{type:Object,required:!1,default(){return{}}}},setup(r,{slots:e}){return Ho(Kf,r.classes),()=>y(rt,null,[e.default?e.default():null])}}),$e=()=>{let r=Ia(Kf,{});return function(e,t=[]){let n=`${ee}-${e}`;return rw(...t,n,r[n])}},rw=(...r)=>r.filter(Boolean).join(" "),oe={"/styles.css":{code:`body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`}},iw={files:{"/src/styles.css":oe["/styles.css"],"/src/pages/index.astro":{code:`---
import "../styles.css";
const data = "world";
---

<h1>Hello {data}</h1>

<style>
  h1 {
    font-size: 1.5rem;
  }
</style>`},"/src/env.d.ts":{code:'/// <reference types="astro/client" />'},".env":{code:'ASTRO_TELEMETRY_DISABLED="1"'},"/astro.config.mjs":{code:`import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});`},"/tsconfig.json":{code:`{
  "extends": "astro/tsconfigs/base"
}`},"/package.json":{code:JSON.stringify({dependencies:{astro:"^1.9.2","esbuild-wasm":"^0.17.19"},scripts:{dev:"astro dev",start:"astro dev",build:"astro build",preview:"astro preview",astro:"astro"}},null,2)}},main:"/src/pages/index.astro",environment:"node"},sw={files:ce(L({},oe),{"/styles.css":oe["/styles.css"],"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Lit + TS</title>
    <link rel="stylesheet" href="/styles.css" />
    <script type="module" src="/main.ts"><\/script>
  </head>
  <body>
    <my-element />
  </body>
</html>
`},"/main.ts":{code:`import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  msg = 'Hello world'

  render() {
    return html\`<h1>\${this.msg}</h1>\`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
`},"/vite-env.d.ts":{code:'/// <reference types="vite/client" />'},"/tsconfig.json":{code:`{
  "compilerOptions": {
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "declaration": true,
    "emitDeclarationOnly": true,
    "outDir": "./types",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "Node",
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": false,
    "skipLibCheck": true
  },
  "references": [{ "path": "./tsconfig.node.json" }]
}
`},"/tsconfig.node.json":{code:`{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
`},"/vite.config.ts":{code:`import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: '/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
`},"/package.json":{code:`{
  "name": "vite-lit",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build"
  },
  "dependencies": {
    "lit": "^2.7.4"
  },
  "devDependencies": {
    "typescript": "^5.0.4",
    "vite": "4.2.2",
    "esbuild-wasm": "^0.17.19"
  }
}
`}}),entry:"/main.ts",main:"/main.ts",environment:"node"},ow={files:ce(L({},oe),{"/pages/_app.js":{code:`import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}`},"/pages/index.js":{code:`export default function Home({ data }) {
  return (
    <div>
      <h1>Hello {data}</h1>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { data: "world" },
  }
}
`},"/next.config.js":{code:`/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
`},"/package.json":{code:JSON.stringify({name:"my-app",version:"0.1.0",private:!0,scripts:{dev:"NEXT_TELEMETRY_DISABLED=1 next dev",build:"next build",start:"next start",lint:"next lint"},dependencies:{next:"12.1.6",react:"18.2.0","react-dom":"18.2.0","@next/swc-wasm-nodejs":"12.1.6"}},null,2)}}),main:"/pages/index.js",environment:"node"},aw={files:{"/index.js":{code:`const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello world');
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`},"/package.json":{code:JSON.stringify({dependencies:{},scripts:{start:"node index.js"},main:"index.js"},null,2)}},main:"/index.js",environment:"node"},lw={files:ce(L({},oe),{"/App.tsx":{code:`import { Component } from "solid-js";

const App: Component = () => {
  return <h1>Hello world</h1>
};

export default App;`},"/index.tsx":{code:`import { render } from "solid-js/web";
import App from "./App";

import "./styles.css";

render(() => <App />, document.getElementById("app"));`},"/index.html":{code:`<html>
<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/index.tsx"><\/script>
</body>
</html>`},"/vite.config.ts":{code:`/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});`},"/tsconfig.json":{code:`{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "types": ["vite/client", "@testing-library/jest-dom"]
  }
}`},"/package.json":{code:JSON.stringify({type:"module",scripts:{dev:"vite",build:"tsc && vite build",serve:"vite preview"},dependencies:{"solid-js":"^1.7.5"},devDependencies:{vite:"4.2.2",typescript:"^5.0.4","vite-plugin-solid":"^2.7.0","esbuild-wasm":"^0.17.19"},main:"/index.tsx"},null,2)}}),main:"/App.tsx",environment:"node"},cw={files:ce(L({},oe),{"/index.js":{code:`import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
\`;
`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/index.js"><\/script>
  </body>
</html>
`},"/package.json":{code:JSON.stringify({scripts:{dev:"vite",build:"vite build",preview:"vite preview"},devDependencies:{vite:"4.2.2","esbuild-wasm":"^0.17.19"}},null,2)}}),main:"/index.js",environment:"node"},uw={files:ce(L({},oe),{"/App.jsx":{code:`export default function App() {
  const data = "world"

  return <h1>Hello {data}</h1>
}
`},"/index.jsx":{code:`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.jsx"><\/script>
  </body>
</html>
`},"/package.json":{code:JSON.stringify({scripts:{dev:"vite",build:"vite build",preview:"vite preview"},dependencies:{react:"^18.2.0","react-dom":"^18.2.0"},devDependencies:{"@vitejs/plugin-react":"^3.1.0",vite:"4.2.2","esbuild-wasm":"^0.17.19"}},null,2)},"/vite.config.js":{code:`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
`}}),main:"/App.jsx",environment:"node"},hw={files:ce(L({},oe),{"/App.tsx":{code:`export default function App() {
  const data: string = "world"

  return <h1>Hello {data}</h1>
}
`},"/index.tsx":{code:`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import React from "react";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"><\/script>
  </body>
</html>
`},"/tsconfig.json":{code:JSON.stringify({compilerOptions:{target:"ESNext",useDefineForClassFields:!0,lib:["DOM","DOM.Iterable","ESNext"],allowJs:!1,skipLibCheck:!0,esModuleInterop:!1,allowSyntheticDefaultImports:!0,strict:!0,forceConsistentCasingInFileNames:!0,module:"ESNext",moduleResolution:"Node",resolveJsonModule:!0,isolatedModules:!0,noEmit:!0,jsx:"react-jsx"},references:[{path:"./tsconfig.node.json"}]},null,2)},"/tsconfig.node.json":{code:JSON.stringify({compilerOptions:{composite:!0,module:"ESNext",moduleResolution:"Node",allowSyntheticDefaultImports:!0},include:["vite.config.ts"]},null,2)},"/package.json":{code:JSON.stringify({scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{react:"^18.2.0","react-dom":"^18.2.0"},devDependencies:{"@types/react":"^18.0.28","@types/react-dom":"^18.0.11","@vitejs/plugin-react":"^3.1.0","vite-plugin-checker":"^0.5.6",typescript:"^5.0.4",vite:"4.2.2","esbuild-wasm":"^0.17.19"}},null,2)},"/vite-env.d.ts":{code:'/// <reference types="vite/client" />'},"/vite.config.ts":{code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
})
`}}),main:"/App.tsx",environment:"node"},dw={files:ce(L({},oe),{"/App.jsx":{code:`export default function App() {
  const data = "world"

  return <h1>Hello {data}</h1>
}
`},"/index.jsx":{code:`import { render } from "preact";
import "./styles.css";

import App from "./App";

const root = document.getElementById("root");
render(<App />, root);
`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.jsx"><\/script>
  </body>
</html>
`},"/package.json":{code:JSON.stringify({scripts:{dev:"vite",build:"vite build",preview:"vite preview"},dependencies:{preact:"^10.16.0"},devDependencies:{"@preact/preset-vite":"^2.5.0",vite:"4.2.2","esbuild-wasm":"0.17.12"}})},"/vite.config.js":{code:`import { defineConfig } from "vite";
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
});
`}}),main:"/App.jsx",environment:"node"},fw={files:ce(L({},oe),{"/App.tsx":{code:`export default function App() {
  const data: string = "world"

  return <h1>Hello {data}</h1>
}
`},"/index.tsx":{code:`import { render } from "preact";
import "./styles.css";

import App from "./App";

const root = document.getElementById("root") as HTMLElement;
render(<App />, root);
`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"><\/script>
  </body>
</html>
`},"/tsconfig.json":{code:JSON.stringify({compilerOptions:{target:"ESNext",useDefineForClassFields:!0,lib:["DOM","DOM.Iterable","ESNext"],allowJs:!1,skipLibCheck:!0,esModuleInterop:!1,allowSyntheticDefaultImports:!0,strict:!0,forceConsistentCasingInFileNames:!0,module:"ESNext",moduleResolution:"Node",resolveJsonModule:!0,isolatedModules:!0,noEmit:!0,jsx:"react-jsx",jsxImportSource:"preact"},include:["src"],references:[{path:"./tsconfig.node.json"}]},null,2)},"/tsconfig.node.json":{code:JSON.stringify({compilerOptions:{composite:!0,module:"ESNext",moduleResolution:"Node",allowSyntheticDefaultImports:!0},include:["vite.config.ts"]},null,2)},"/package.json":{code:JSON.stringify({scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{preact:"^10.16.0"},devDependencies:{"@preact/preset-vite":"^2.5.0",typescript:"^4.9.5",vite:"4.2.2","esbuild-wasm":"^0.17.12"}},null,2)},"/vite-env.d.ts":{code:'/// <reference types="vite/client" />'},"/vite.config.ts":{code:`import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
})
`}}),main:"/App.tsx",environment:"node"},pw={files:{"/src/styles.css":oe["/styles.css"],"/src/App.svelte":{code:`<script>
const data = "world";
<\/script>

<h1>Hello {data}</h1>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`},"/src/main.js":{code:`import App from './App.svelte'
import "./styles.css"

const app = new App({
  target: document.getElementById('app'),
})

export default app`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
`},"svelte.config.js":{code:`import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
`},"/vite.config.js":{code:`import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})`},"/package.json":{code:JSON.stringify({type:"module",scripts:{dev:"vite"},dependencies:{svelte:"^3.59.1"},devDependencies:{"@sveltejs/vite-plugin-svelte":"2.1.1",vite:"4.2.2","esbuild-wasm":"^0.17.19"}},null,2)}},main:"/src/App.svelte",environment:"node"},mw={files:{"/src/styles.css":oe["/styles.css"],"/src/App.svelte":{code:`<script lang="ts">
const data: string = "world";
<\/script>

<h1>Hello {data}</h1>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`},"/src/main.ts":{code:`import App from './App.svelte'
import "./styles.css"

const app = new App({
  target: document.getElementById('app'),
})

export default app`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>
`},"/vite-env.d.ts":{code:`/// <reference types="svelte" />
/// <reference types="vite/client" />`},"svelte.config.js":{code:`import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
`},"/vite.config.ts":{code:`import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})`},"tsconfig.json":{code:JSON.stringify({extends:"@tsconfig/svelte/tsconfig.json",compilerOptions:{target:"ESNext",useDefineForClassFields:!0,module:"ESNext",resolveJsonModule:!0,allowJs:!0,checkJs:!0,isolatedModules:!0},include:["src/**/*.d.ts","src/**/*.ts","src/**/*.js","src/**/*.svelte"],references:[{path:"./tsconfig.node.json"}]},null,2)},"tsconfig.node.json":{code:JSON.stringify({compilerOptions:{composite:!0,module:"ESNext",moduleResolution:"Node"},include:["vite.config.ts"]},null,2)},"/package.json":{code:JSON.stringify({type:"module",scripts:{dev:"vite"},devDependencies:{"@sveltejs/vite-plugin-svelte":"2.1.1","@tsconfig/svelte":"^4.0.1",svelte:"^3.59.1","svelte-check":"^3.3.2",typescript:"^5.0.4",tslib:"^2.5.0",vite:"4.2.2","esbuild-wasm":"^0.17.19"}},null,2)}},main:"/src/App.svelte",environment:"node"},Ow={files:{"/src/styles.css":oe["/styles.css"],"/src/App.vue":{code:`<script setup>
import { ref } from "vue";

const data = ref("world");
<\/script>

<template>
  <h1>Hello {{ data }}</h1>
</template>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`},"/src/main.js":{code:`import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css"

createApp(App).mount('#app')
`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>
`},"/vite.config.js":{code:`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
`},"/package.json":{code:JSON.stringify({scripts:{dev:"vite",build:"vite build",preview:"vite preview"},dependencies:{vue:"^3.3.2"},devDependencies:{"@vitejs/plugin-vue":"^4.2.3",vite:"4.2.2","esbuild-wasm":"^0.17.19"}},null,2)}},main:"/src/App.vue",environment:"node"},gw={files:{"/src/styles.css":oe["/styles.css"],"/src/App.vue":{code:`<script setup lang="ts">
import { ref } from "vue";

const data = ref<string>("world");
<\/script>

<template>
  <h1>Hello {{ data }}</h1>
</template>

<style>
h1 {
  font-size: 1.5rem;
}
</style>`},"/src/main.ts":{code:`import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css"

createApp(App).mount('#app')
`},"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>
`},"/vite-env.d.ts":{code:'/// <reference types="vite/client" />'},"/vite.config.ts":{code:`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
`},"tsconfig.json":{code:JSON.stringify({compilerOptions:{target:"ESNext",useDefineForClassFields:!0,module:"ESNext",moduleResolution:"Node",strict:!0,jsx:"preserve",resolveJsonModule:!0,isolatedModules:!0,esModuleInterop:!0,lib:["ESNext","DOM"],skipLibCheck:!0,noEmit:!0},include:["src/**/*.ts","src/**/*.d.ts","src/**/*.tsx","src/**/*.vue"],references:[{path:"./tsconfig.node.json"}]},null,2)},"tsconfig.node.json":{code:JSON.stringify({compilerOptions:{composite:!0,module:"ESNext",moduleResolution:"Node",allowSyntheticDefaultImports:!0},include:["vite.config.ts"]},null,2)},"/package.json":{code:JSON.stringify({scripts:{dev:"vite",build:"tsc && vite build",preview:"vite preview"},dependencies:{vue:"^3.3.2"},devDependencies:{"@vitejs/plugin-vue":"^4.2.3",vite:"4.2.2","vue-tsc":"^1.6.5",typescript:"^5.0.4","esbuild-wasm":"^0.17.19"}},null,2)}},main:"/src/App.vue",environment:"node"},vw={files:{"/src/app/app.component.css":oe["/styles.css"],"/src/app/app.component.html":{code:`<div>
<h1>{{ helloWorld }}</h1>
</div>
`},"/src/app/app.component.ts":{code:`import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  helloWorld = "Hello world";
}
`},"/src/app/app.module.ts":{code:`import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
`},"/src/index.html":{code:`<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Angular</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
   <app-root></app-root>
</body>

</html>
`},"/src/main.ts":{code:`import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

`},"/src/polyfills.ts":{code:`import "core-js/proposals/reflect-metadata";
      import "zone.js/dist/zone";
`},"/package.json":{code:JSON.stringify({dependencies:{"@angular/core":"^11.2.0","@angular/platform-browser":"^11.2.0","@angular/platform-browser-dynamic":"^11.2.0","@angular/common":"^11.2.0","@angular/compiler":"^11.2.0","zone.js":"0.11.3","core-js":"3.8.3",rxjs:"6.6.3"},main:"/src/main.ts"},null,2)}},main:"/src/app/app.component.ts",environment:"angular-cli"},ww={files:ce(L({},oe),{"/App.js":{code:`export default function App() {
  return <h1>Hello world</h1>
}
`},"/index.js":{code:`import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`},"/package.json":{code:JSON.stringify({dependencies:{react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"},main:"/index.js"},null,2)}}),main:"/App.js",environment:"create-react-app"},yw={files:ce(L({},oe),{"tsconfig.json":{code:`{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`},"/App.tsx":{code:`export default function App(): JSX.Element {
  return <h1>Hello world</h1>
}
`},"/index.tsx":{code:`import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`},"/package.json":{code:JSON.stringify({dependencies:{react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"},devDependencies:{"@types/react":"^18.0.0","@types/react-dom":"^18.0.0",typescript:"^4.0.0"},main:"/index.tsx"},null,2)}}),main:"/App.tsx",environment:"create-react-app"},bw={files:ce(L({},oe),{"/App.tsx":{code:`import { Component } from "solid-js";

const App: Component = () => {
  return <h1>Hello world</h1>
};

export default App;`},"/index.tsx":{code:`import { render } from "solid-js/web";
import App from "./App";

import "./styles.css";

render(() => <App />, document.getElementById("app"));`},"/index.html":{code:`<html>
<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>
<body>
  <div id="app"></div>
  <script src="src/index.tsx"><\/script>
</body>
</html>`},"/package.json":{code:JSON.stringify({dependencies:{"solid-js":"1.3.15"},main:"/index.tsx"},null,2)}}),main:"/App.tsx",environment:"solid"},Sw={files:ce(L({},oe),{"/App.svelte":{code:`<style>
  h1 {
    font-size: 1.5rem;
  }
</style>

<script>
  let name = 'world';
<\/script>

<main>
  <h1>Hello {name}</h1>
</main>`},"/index.js":{code:`import App from "./App.svelte";
import "./styles.css";

const app = new App({
  target: document.body
});

export default app;
      `},"/public/index.html":{code:`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8" />
    <meta name="viewport" content="width=device-width" />

    <title>Svelte app</title>

    <link rel="stylesheet" href="public/bundle.css" />
  </head>

  <body>
    <script src="bundle.js"><\/script>
  </body>
</html>`},"/package.json":{code:JSON.stringify({dependencies:{svelte:"^3.0.0"},main:"/index.js"},null,2)}}),main:"/App.svelte",environment:"svelte"},Cw={files:{"tsconfig.json":{code:`{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`},"/add.ts":{code:"export const add = (a: number, b: number): number => a + b;"},"/add.test.ts":{code:`import { add } from './add';

describe('add', () => {
  test('Commutative Law of Addition', () => {
    expect(add(1, 2)).toBe(add(2, 1));
  });
});`},"package.json":{code:JSON.stringify({dependencies:{},devDependencies:{typescript:"^4.0.0"},main:"/add.ts"},null,2)}},main:"/add.test.ts",environment:"parcel",mode:"tests"},xw={files:ce(L({},oe),{"/index.js":{code:`import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
\`;
`},"/index.html":{code:`<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="index.js">
  <\/script>
</body>

</html>`},"/package.json":{code:JSON.stringify({dependencies:{},main:"/index.js"},null,2)}}),main:"/index.js",environment:"parcel"},kw={files:ce(L({},oe),{"tsconfig.json":{code:`{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "jsx": "preserve",
    "esModuleInterop": true,
    "sourceMap": true,
    "allowJs": true,
    "lib": [
      "es6",
      "dom"
    ],
    "rootDir": "src",
    "moduleResolution": "node"
  }
}`},"/index.ts":{code:`import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello world</h1>
\`;
`},"/index.html":{code:`<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="index.ts">
  <\/script>
</body>

</html>`},"/package.json":{code:JSON.stringify({dependencies:{},devDependencies:{typescript:"^4.0.0"},main:"/index.ts"},null,2)}}),main:"/index.ts",environment:"parcel"},hu={files:{"/src/styles.css":oe["/styles.css"],"/src/App.vue":{code:`<template>
  <h1>Hello {{ msg }}</h1>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('world');
<\/script>`},"/src/main.js":{code:`import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css";

createApp(App).mount('#app')
`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`},"/package.json":{code:JSON.stringify({name:"vue3",version:"0.1.0",private:!0,main:"/src/main.js",scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build"},dependencies:{"core-js":"^3.30.2",vue:"^3.3.2"},devDependencies:{"@vue/cli-plugin-babel":"^5.0.8","@vue/cli-service":"^5.0.8"}},null,2)}},main:"/src/App.vue",environment:"vue-cli"},du={files:{"/src/styles.css":oe["/styles.css"],"/src/App.vue":{code:`<template>
  <h1>Hello {{ msg }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const msg = ref<string>('world');
<\/script>`},"/src/main.ts":{code:`import { createApp } from 'vue'
import App from './App.vue'
import "./styles.css";

createApp(App).mount('#app')
`},"/src/shims-vue.d.ts":`/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}`,"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`},"/package.json":{code:JSON.stringify({name:"vue3-ts",version:"0.1.0",private:!0,main:"/src/main.ts",scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build"},dependencies:{"core-js":"^3.30.2",vue:"^3.3.2"},devDependencies:{"@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-typescript":"^5.0.8","@vue/cli-service":"^5.0.8",typescript:"^4.9.5"}},null,2)},"/tsconfig.json":{code:JSON.stringify({compilerOptions:{target:"esnext",module:"esnext",strict:!0,jsx:"preserve",moduleResolution:"node",experimentalDecorators:!0,skipLibCheck:!0,esModuleInterop:!0,allowSyntheticDefaultImports:!0,forceConsistentCasingInFileNames:!0,useDefineForClassFields:!0,sourceMap:!1,baseUrl:".",types:["webpack-env"],paths:{"@/*":["src/*"]},lib:["esnext","dom","dom.iterable","scripthost"]},include:["src/**/*.ts","src/**/*.tsx","src/**/*.vue","tests/**/*.ts","tests/**/*.tsx"],exclude:["node_modules"]},null,2)}},main:"/src/App.vue",environment:"vue-cli"},Pw={files:{"/src/styles.css":oe["/styles.css"],"/src/App.vue":{code:`<template>
  <div id="app">
    <h1>Hello {{ msg }}</h1>
    <button @click="add">add</button>
    <p>count: {{ count }}</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "App",
  data() {
    return {
      msg: "",
      count: 1,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
  },
  mounted() {
    this.msg = "world";
  },
});
<\/script>`},"/src/main.js":{code:`import Vue from "vue";
import App from "./App.vue";
import "./styles.css";

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`},"/package.json":{code:JSON.stringify({name:"vue",version:"0.1.0",private:!0,main:"/src/main.js",scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build"},dependencies:{"core-js":"^3.26.1",vue:"^2.7.14"},devDependencies:{"@vue/cli-plugin-babel":"^5.0.8","@vue/cli-service":"^5.0.8","vue-template-compiler":"^2.7.14"}},null,2)}},main:"/src/App.vue",environment:"vue-cli"},$w={files:{"/src/styles.css":oe["/styles.css"],"/src/App.vue":{code:`<template>
  <div id="app">
    <h1>Hello {{ msg }}</h1>
    <button @click="add">add</button>
    <p>count: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      msg: "",
      count: 1,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
  },
  mounted() {
    this.msg = "world";
  },
});
<\/script>`},"/src/main.ts":{code:`import Vue from "vue";
import App from "./App.vue";
import "./styles.css";

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`},"/src/shims-vue.d.ts":`declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}`,"/package.json":{code:JSON.stringify({name:"vue-ts",version:"0.1.0",private:!0,main:"/src/main.ts",scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build"},dependencies:{"core-js":"^3.26.1",vue:"^2.7.14"},devDependencies:{"@vue/cli-plugin-babel":"^5.0.8","@vue/cli-plugin-typescript":"^5.0.8","@vue/cli-service":"^5.0.8",typescript:"^4.9.3","vue-template-compiler":"^2.7.14"}},null,2)},"/tsconfig.json":{code:JSON.stringify({compilerOptions:{target:"esnext",module:"esnext",strict:!0,jsx:"preserve",moduleResolution:"node",skipLibCheck:!0,esModuleInterop:!0,allowSyntheticDefaultImports:!0,forceConsistentCasingInFileNames:!0,useDefineForClassFields:!0,sourceMap:!0,baseUrl:".",types:["webpack-env"],paths:{"@/*":["src/*"]},lib:["esnext","dom","dom.iterable","scripthost"]},include:["src/**/*.ts","src/**/*.tsx","src/**/*.vue","tests/**/*.ts","tests/**/*.tsx"],exclude:["node_modules"]},null,2)}},main:"/src/App.vue",environment:"vue-cli"},Qw={files:ce(L({},oe),{"/index.html":{code:`<!DOCTYPE html>
<html>
<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <h1>Hello world</h1>
</body>
</html>`},"/package.json":{code:JSON.stringify({dependencies:{},main:"/index.html"})}}),main:"/index.html",environment:"static"},fu={react:ww,"react-ts":yw,vue2:Pw,"vue2-ts":$w,vue:hu,"vue-ts":du,vue3:hu,"vue3-ts":du,vanilla:xw,"vanilla-ts":kw,static:Qw,angular:vw,svelte:Sw,solid:bw,"test-ts":Cw,node:aw,nextjs:ow,vite:cw,"vite-react":uw,"vite-react-ts":hw,"vite-preact":dw,"vite-preact-ts":fw,"vite-vue":Ow,"vite-vue-ts":gw,"vite-svelte":pw,"vite-svelte-ts":mw,"vite-solid":lw,"vite-lit":sw,astro:iw},nr=r=>{var e,t,n,s,o,a;let l=vn(r.files),c=Tw({template:r.template,customSetup:r.customSetup,files:l}),u=vn((t=(e=r.options)==null?void 0:e.visibleFiles)!=null?t:[]),h=(n=r.options)!=null&&n.activeFile?pu((s=r.options)==null?void 0:s.activeFile,c.files):void 0;u.length===0&&l&&Object.keys(l).forEach(f=>{let p=l[f];if(typeof p=="string"){u.push(f);return}!h&&p.active&&(h=f,p.hidden===!0&&u.push(f)),p.hidden||u.push(f)}),u.length===0&&(u=[c.main]),c.entry&&!c.files[c.entry]&&(c.entry=pu(c.entry,c.files)),!h&&c.main&&(h=c.main),(!h||!c.files[h])&&(h=u[0]),u.includes(h)||u.push(h);let d=h5(c.files,(o=c.dependencies)!=null?o:{},(a=c.devDependencies)!=null?a:{},c.entry);return{visibleFiles:u.filter(f=>d[f]),activeFile:h,files:d,environment:c.environment,shouldUpdatePreview:!0}},pu=(r,e)=>{let t=vn(e),n=vn(r);if(n in t)return n;if(!r)return null;let s=null,o=0,a=[".js",".jsx",".ts",".tsx"];for(;!s&&o<a.length;){let l=`${n.split(".")[0]}${a[o]}`;t[l]!==void 0&&(s=l),o++}return s},Tw=({files:r,template:e,customSetup:t})=>{if(!e){if(!t){let s=fu.vanilla;return ce(L({},s),{files:L(L({},s.files),yi(r))})}if(!r||Object.keys(r).length===0)throw new Error("[sandpack-vue3]: without a template, you must pass at least one file");return ce(L({},t),{files:yi(r)})}let n=fu[e];if(!n)throw new Error(`[sandpack-vue3]: invalid template "${e}" provided`);return!t&&!r?n:{files:yi(L(L({},n.files),r)),dependencies:L(L({},n.dependencies),t==null?void 0:t.dependencies),devDependencies:L(L({},n.devDependencies),t==null?void 0:t.devDependencies),entry:vn((t==null?void 0:t.entry)||n.entry),main:n.main,environment:(t==null?void 0:t.environment)||n.environment}},yi=r=>r?Object.keys(r).reduce((e,t)=>(typeof r[t]=="string"?e[t]={code:r[t]}:e[t]=r[t],e),{}):{},Mw=3e4,e0=Symbol("sandpackStateContext"),Rw=ue({name:"SandpackProvider",props:{files:{type:Object,required:!1,default:void 0},template:{type:String,required:!1,default:void 0},customSetup:{type:Object,required:!1,default:void 0},theme:{type:[String,Object],required:!1,default:void 0},options:{type:Object,required:!1,default:void 0}},setup(r,{attrs:e,slots:t}){var n,s,o,a,l,c,u;let{activeFile:h,visibleFiles:d=[],files:f,environment:p}=nr(r),m=((n=r.options)==null?void 0:n.initMode)||"lazy",O=U(null),v=U(null),w=U({}),x=U(null),k=U(),b=U(),g=Tu({visibleFiles:d,activeFile:h,files:f,environment:p,visibleFilesFromProps:d,shouldUpdatePreview:!0,editorState:"pristine",teamId:r.teamId,openFile:P,resetFile:T,resetAllFiles:B,setActiveFile:X,updateFile:D,updateCurrentFile:W,addFile:D,closeFile:F,deleteFile:J,autoReload:(o=(s=r.options)==null?void 0:s.autoReload)!=null?o:!0,reactDevTools:void 0,startRoute:(a=r.options)==null?void 0:a.startRoute,initMode:((l=r.options)==null?void 0:l.initMode)||"lazy",bundlerState:{entry:"",transpiledModules:{}},error:{message:""},status:(u=(c=r.options)==null?void 0:c.autorun)==null||u?"initial":"idle",clients:{},lazyAnchorRef:null,unsubscribeClientListenersRef:{},queuedListenersRef:{global:{}},initializeSandpackIframe:at,runSandpack:Ie,registerBundler:qe,unregisterBundler:je,registerReactDevTools:C,addListener:Fe,dispatchMessage:ge,listen:Fe,dispatch:ge});function C($){g.reactDevTools=$}function P($){let{visibleFiles:A}=g,V=A.includes($)?A:[...A,$];g.activeFile=$,g.visibleFiles=V}function T($){let{files:A}=nr(r);g.files=ce(L({},he(g.files)),{[$]:A[$]})}function B(){let{files:$}=nr(r);g.files=$}function X($){g&&g.files[$]&&(g.activeFile=$)}function D($,A,V=!0){typeof $=="string"&&typeof A=="string"?g.files=ce(L({},he(g.files)),{[$]:{code:A}}):typeof $=="object"&&(g.files=vn(L(L({},he(g.files)),yi($)))),g.shouldUpdatePreview=V}function W($,A=!0){D(g.activeFile,$,A)}function F($){if(g.visibleFiles.length===1)return;let A=g.visibleFiles.indexOf($),V=g.visibleFiles.filter(ae=>ae!==$);g.activeFile=$===g.activeFile?A===0?g.visibleFiles[1]:g.visibleFiles[A-1]:g.activeFile,g.visibleFiles=V}function J($,A=!0){let{visibleFiles:V,files:ae,activeFile:fe}=g,Qe=L({},ae);delete Qe[$];let De=V.filter(ve=>ve!==$);if(De.length===0){let ve=Object.keys(ae)[Object.keys(ae).length-1];g.visibleFiles=[ve],g.activeFile=ve}else g.visibleFiles=De,g.activeFile=$===fe?De[De.length-1]:fe;g.files=he(Qe),g.shouldUpdatePreview=A}function ge($,A){var V;if(g.status!=="running"){console.warn("[sandpack-vue3]: dispatch cannot be called while in idle mode");return}A?(V=he(g.clients[A]))==null||V.dispatch($):Object.values(g.clients).forEach(ae=>{he(ae).dispatch($)})}function Fe($,A){if(A){if(g.clients[A])return he(g.clients[A]).listen($);{let V=Ni();return g.queuedListenersRef[A]=g.queuedListenersRef[A]||{},g.unsubscribeClientListenersRef[A]=g.unsubscribeClientListenersRef[A]||{},g.queuedListenersRef[A][V]=$,()=>{g.queuedListenersRef[A][V]?delete g.queuedListenersRef[A][V]:g.unsubscribeClientListenersRef[A][V]&&(g.unsubscribeClientListenersRef[A][V](),delete g.unsubscribeClientListenersRef[A][V])}}}else{let V=Ni();g.queuedListenersRef.global[V]=$;let ae=Object.values(g.clients).map(fe=>he(fe).listen($));return()=>{ae.forEach(fe=>fe()),delete g.queuedListenersRef.global[V],Object.values(g.unsubscribeClientListenersRef).forEach(fe=>{var Qe;(Qe=fe==null?void 0:fe[V])==null||Qe.call(fe)})}}}function qe($,A,V){return cr(this,null,function*(){w.value[A]={iframe:$,clientPropsOverride:V},g.status==="running"&&(yield Je($,A,V))})}function je($){var A,V;let ae=he(g.clients[$]);ae&&(ae.destroy(),(A=ae.iframe.contentWindow)==null||A.location.replace("about:blank"),ae.iframe.removeAttribute("src"),delete g.clients[$]),delete w.value[$],x.value&&clearTimeout(x.value),Object.values((V=g.unsubscribeClientListenersRef[$])!=null?V:{}).forEach(Qe=>{Object.values(Qe).forEach(De=>De())});let fe=Object.keys(g.clients).length>0?"running":"idle";g.status=fe}function zr($){$.type==="start"?g.error=null:$.type==="state"?g.bundlerState=$.state:$.type==="done"&&!$.compilatonError||$.type==="connected"?(x.value&&clearTimeout(x.value),g.error=null):$.type==="action"&&$.action==="show-error"?g.error=d5($):$.type==="action"&&$.action==="notification"&&$.notificationType==="error"&&(g.error={message:$.title})}function Je($,A,V){return cr(this,null,function*(){var ae,fe,Qe,De,ve,bn,za,Wa,La,Ba,Va;g.clients[A]&&g.clients[A].destroy();let Na=(ae=r==null?void 0:r.customSetup)!=null?ae:{npmRegistries:[]},p0=(Qe=(fe=r==null?void 0:r.options)==null?void 0:fe.bundlerTimeOut)!=null?Qe:Mw;x.value&&clearTimeout(x.value),typeof k.value!="function"&&(x.value=setTimeout(()=>{Ee(),g.status="timeout"},p0));let Wr=yield g5($,{files:he(g.files),template:he(g.environment)},{externalResources:(De=r.options)==null?void 0:De.externalResources,bundlerURL:(ve=r.options)==null?void 0:ve.bundlerURL,startRoute:(za=V==null?void 0:V.startRoute)!=null?za:(bn=r.options)==null?void 0:bn.startRoute,fileResolver:(Wa=r.options)==null?void 0:Wa.fileResolver,skipEval:(Ba=(La=r.options)==null?void 0:La.skipEval)!=null?Ba:!1,logLevel:(Va=r.options)==null?void 0:Va.logLevel,showOpenInCodeSandbox:!1,showErrorScreen:!0,showLoadingScreen:!0,reactDevTools:g.reactDevTools,customNpmRegistries:Na==null?void 0:Na.npmRegistries,teamId:r.teamId,sandboxId:r.sandboxId});typeof k.value!="function"&&(k.value=Wr.listen(zr)),g.unsubscribeClientListenersRef[A]=g.unsubscribeClientListenersRef[A]||{},g.queuedListenersRef[A]&&(Object.keys(g.queuedListenersRef[A]).forEach(Lr=>{let us=g.queuedListenersRef[A][Lr],hs=Wr.listen(us);g.unsubscribeClientListenersRef[A][Lr]=hs}),g.queuedListenersRef[A]={}),Object.entries(g.queuedListenersRef.global).forEach(([Lr,us])=>{let hs=Wr.listen(us);g.unsubscribeClientListenersRef[A][Lr]=hs}),g.clients[A]=Wr})}function Ee(){Object.keys(g.clients).map(je),typeof k.value=="function"&&(k.value(),k.value=void 0)}function Ie(){return cr(this,null,function*(){yield Promise.all(Object.entries(w.value).map($=>cr(this,[$],function*([A,{iframe:V,clientPropsOverride:ae={}}]){yield Je(V,A,ae)}))),g.error=null,g.status="running"})}function at(){var $,A,V,ae,fe;if(!((A=($=r.options)==null?void 0:$.autorun)==null||A))return;let Qe=(ae=(V=r.options)==null?void 0:V.initModeObserverOptions)!=null?ae:{rootMargin:"1000px 0px"};O.value&&g.lazyAnchorRef&&((fe=O.value)==null||fe.unobserve(g.lazyAnchorRef)),g.lazyAnchorRef&&g.initMode==="lazy"?(O.value=new IntersectionObserver(De=>{var ve;De.some(bn=>bn.isIntersecting)&&(v.value=setTimeout(()=>{Ie()},50),g.lazyAnchorRef&&((ve=O.value)==null||ve.unobserve(g.lazyAnchorRef)))},Qe),O.value.observe(g.lazyAnchorRef)):g.lazyAnchorRef&&g.initMode==="user-visible"?(O.value=new IntersectionObserver(De=>{De.some(ve=>ve.isIntersecting)?v.value=setTimeout(()=>{Ie()},50):(v.value&&clearTimeout(v.value),Object.keys(g.clients).map(je),Ee())},Qe),O.value.observe(g.lazyAnchorRef)):v.value=setTimeout(()=>Ie(),50)}return Ho(e0,g),Oe([()=>g.files,()=>g.environment,()=>g.shouldUpdatePreview,()=>g.reactDevTools,()=>g.status,()=>{var $;return($=r.options)==null?void 0:$.recompileMode},()=>{var $;return($=r.options)==null?void 0:$.recompileDelay}],()=>{var $,A,V,ae;let{environment:fe}=nr(r),Qe=(A=($=r.options)==null?void 0:$.recompileMode)!=null?A:"delayed",De=(ae=(V=r.options)==null?void 0:V.recompileDelay)!=null?ae:500;if(!(g.status!=="running"||!g.shouldUpdatePreview)&&(fe!==g.environment&&(g.environment=fe,Object.entries(g.clients).forEach(([ve,bn])=>{qe(he(bn).iframe,ve)})),Qe==="immediate"&&Object.values(g.clients).forEach(ve=>{ve.status==="done"&&he(ve).updateSandbox({files:L({},he(g.files)),template:he(g.environment)})}),Qe==="delayed")){if(typeof window>"u")return;window.clearTimeout(b.value),b.value=window.setTimeout(()=>{Object.values(g.clients).forEach(ve=>{ve.status==="done"&&he(ve).updateSandbox({files:L({},he(g.files)),template:he(g.environment)})})},De)}},{immediate:!0,deep:!0}),Oe([()=>{var $;return($=r.options)==null?void 0:$.initMode},()=>g.initMode,()=>{var $;return($=r.options)==null?void 0:$.autorun},()=>{var $;return($=r.options)==null?void 0:$.initModeObserverOptions},()=>g.environment,()=>g.files,()=>g.reactDevTools],()=>{m!==g.initMode&&(g.initMode=m,at())},{immediate:!0,deep:!0}),Oe([()=>r.options,()=>r.template,()=>r==null?void 0:r.files,()=>r.customSetup],()=>{let $=nr(r);g.activeFile=$.activeFile,g.visibleFiles=$.visibleFiles,g.visibleFilesFromProps=$.visibleFiles,g.files=$.files,g.environment=$.environment;let A=pr($.files,he(g.files))?"pristine":"dirty";A!==g.editorState&&(g.editorState=A)},{deep:!0}),Vn(()=>{typeof k.value=="function"&&k.value(),x.value&&clearTimeout(x.value),b.value&&clearTimeout(b.value),v.value&&clearTimeout(v.value),O.value&&O.value.disconnect(),Rr(()=>{at()})}),()=>{var $;return y(nw,{classes:($=r.options)==null?void 0:$.classes},{default:()=>[y(Iw,{style:(e==null?void 0:e.style)||{},class:(e==null?void 0:e.class)||"",theme:r.theme},{default:()=>[t.default?t.default():null]})]})}}});function Ce(){let r=Ia(e0,void 0);return r||(r={files:{},dispatch:()=>{},listen:()=>{}},console.error('[sandpack-vue3]: "useSandpack" must be wrapped by a "SandpackProvider"')),{sandpack:r,dispatch:r.dispatch,listen:r.listen}}var Aw=()=>{let{sandpack:r}=Ce(),e=me(()=>{var n;return(n=r==null?void 0:r.files[r.activeFile])==null?void 0:n.code}),t=me(()=>{var n,s;return(s=(n=r==null?void 0:r.files[r.activeFile])==null?void 0:n.readOnly)!=null?s:!1});return{code:e,readOnly:t,updateCode:r.updateCurrentFile}},t0=200,Zw=r=>{let e,t,{sandpack:n,listen:s}=Ce(),o=U("LOADING"),a=()=>{e&&e(),e=s(l=>{l.type==="start"&&l.firstLoad===!0&&(o.value="LOADING"),l.type==="done"&&(o.value=o.value==="LOADING"?"PRE_FADING":"HIDDEN")},r.clientId)};return O0(()=>{o.value="LOADING"}),zt(()=>{e&&e()}),Rt(()=>{e&&e()}),Oe(()=>n.status,()=>{n.status!=="running"&&(o.value="HIDDEN"),n.status==="timeout"&&(o.value="TIMEOUT"),n.status==="idle"&&a()},{immediate:!0}),Oe(()=>r.clientId,a,{immediate:!0}),Oe([o,()=>r.loading],()=>{t&&clearTimeout(t),o.value==="PRE_FADING"&&!r.loading?o.value="FADING":o.value==="FADING"&&(t&&clearTimeout(t),t=setTimeout(()=>{o.value="HIDDEN"},t0))},{deep:!0,immediate:!0}),o},jw=r=>{let{dispatch:e}=Ce();return{refresh:()=>e({type:"refresh"},r),back:()=>e({type:"urlback"},r),forward:()=>e({type:"urlforward"},r)}},Ew=M({all:"initial",fontSize:"$font$size",fontFamily:"$font$body",display:"block",boxSizing:"border-box",textRendering:"optimizeLegibility",WebkitTapHighlightColor:"transparent",WebkitFontSmoothing:"subpixel-antialiased",variants:{variant:{dark:{colorScheme:"dark"},light:{colorScheme:"light"}}},"@media screen and (min-resolution: 2dppx)":{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"*":{boxSizing:"border-box"},".sp-wrapper:focus":{outline:"0"}}),n0=Symbol("sandpackThemeProvider"),Iw=ue({name:"SandpackThemeProvider",props:{theme:{type:[String,Object],required:!1,default:void 0},mode:{type:String,required:!1,default:"light"}},setup(r,{slots:e,attrs:t}){let{theme:n,id:s="",mode:o="light"}=lu(r.theme),a=$e(),l=U({}),c=Tu({theme:n,id:s,mode:o});return c.theme&&(l.value=ou(s,au(n)),Ho(n0,c)),Oe(()=>r.theme,()=>{let{theme:u,id:h}=lu(r.theme);r.theme&&(c.id=h,c.theme=u,l.value=ou(h,au(u)))},{immediate:!0}),()=>y("div",{class:a("wrapper",[l.value.toString(),Ew({variant:o}),(t==null?void 0:t.class)||""])},[e.default?e.default():null])}}),Ia=(r=Symbol(),e)=>{let t=m0(r,e);return t??e},Dw=()=>Ia(n0,{theme:Qr,id:"light",mode:"light"}),r0=r=>{let{sandpack:e,listen:t,dispatch:n}=Ce(),s=U(null),o=U(Ni());return Vn(()=>{let a=s.value;a!==null&&e.registerBundler(a,o.value,r)}),zt(()=>{e&&o.value&&e.unregisterBundler(o.value)}),Rt(()=>{e&&o.value&&e.unregisterBundler(o.value)}),{sandpack:e,getClient:()=>{let{clients:a}=e;return he(a[o.value]||null)},clientId:o,iframe:s,listen:a=>t(a,o.value),dispatch:a=>n(a,o.value)}},as=r=>{let{dispatch:e}=Ce();return{restart:()=>e({type:"shell/restart"},r),openPreview:()=>e({type:"shell/openPreview"},r)}},Xw=({langSupport:r,highlightTheme:e,code:t=""})=>{let n=r.language.parser.parse(t),s=0,o=[],a=(l,c)=>{if(l>s){let u=t.slice(s,l);o.push(c?y("span",{key:`${l}${s}`,class:c},[u]):u),s=l}};return ed(n,e,(l,c,u)=>{a(l,""),a(c,u)}),s<t.length&&t!=null&&t.includes(`
`)&&o.push(`

`),o};function Yw(r){let e,t=Dw(),n=F3(r.filePath,r.fileType,r.additionalLanguages),s=J3(n,r.additionalLanguages),o=G3(t.theme),a=Xw({langSupport:s,highlightTheme:o,code:r.code}),l=U(r.code),c=U(),u=U(),h=U(!1),d=me(()=>r.initMode||"lazy"),f=me(()=>{let k=r.decorators?[...r.decorators]:[];return k&&k.sort((b,g)=>b.line-g.line)}),p=U(d.value==="immediate"),m=U([]),O=U([]);Y3(c,([{isIntersecting:k}])=>{h.value=k},{rootMargin:"600px 0px",threshold:.2});let v=()=>{!c.value||!p.value||(x(),e=setTimeout(w))},w=()=>{let k=[{key:"Tab",run:T=>{var B,X;Mf(T);let D=r.extensionsKeymap.find(({key:W})=>W==="Tab");return(X=(B=D==null?void 0:D.run)==null?void 0:B.call(D,T))!=null?X:!0}},{key:"Shift-Tab",run:({state:T,dispatch:B})=>{var X,D;Rf({state:T,dispatch:B});let W=r.extensionsKeymap.find(({key:F})=>F==="Shift-Tab");return(D=(X=W==null?void 0:W.run)==null?void 0:X.call(W,P))!=null?D:!0}},{key:"Escape",run:()=>(r.readOnly||c.value&&c.value.focus(),!0)},{key:"mod-Backspace",run:$a}],b=[Em(),$5(),ag(),...r.extensions,Ti.of([...hg,...Qv,...I5,...k,...r.extensionsKeymap]),s,U3(),MO(o)];r.readOnly?(b.push(H.readOnly.of(!0)),b.push(z.editable.of(!1))):(b.push(YO()),b.push(Wm())),f.value&&b.push(H3(f.value)),r.wrapContent&&b.push(z.lineWrapping),r.showLineNumbers&&b.push(Fm()),r.showInlineErrors&&b.push(K3());let g=c.value,C=g.querySelector(".sp-pre-placeholder");C&&g.removeChild(C);let P=new z({doc:r.code,extensions:b,parent:g,dispatch:T=>{var B;if(P.update([T]),T.docChanged){let X=T.newDoc.sliceString(0,T.newDoc.length);l.value=X,(B=r.onCodeUpdate)==null||B.call(r,X)}}});P.contentDOM.setAttribute("data-gramm","false"),P.contentDOM.setAttribute("data-lt-active","false"),P.contentDOM.setAttribute("aria-label",r.filePath?`Code Editor for ${Vi(r.filePath)}`:"Code Editor"),r.readOnly?P.contentDOM.classList.add("cm-readonly"):P.contentDOM.setAttribute("tabIndex","-1"),u.value=P},x=()=>{var k;(k=u.value)==null||k.destroy(),e&&clearTimeout(e)};return Oe([()=>r.readOnly,()=>r.showLineNumbers,()=>r.showInlineErrors,()=>r.wrapContent,()=>r.readOnly,()=>t.id,p,f],v,{immediate:!0}),Oe([()=>r.initMode,h],()=>{(d.value==="lazy"||d.value==="user-visible")&&h.value&&(p.value=!0)}),Oe([()=>r.extensions,()=>r.extensionsKeymap],()=>{let k=u.value,b=!uu(r.extensions,m.value)||!uu(r.extensionsKeymap,O.value);k&&b&&(k.dispatch({effects:se.appendConfig.of(r.extensions||[])}),k.dispatch({effects:se.appendConfig.of(Ti.of([...r.extensionsKeymap||[]]))}),m.value=r.extensions,O.value=r.extensionsKeymap)},{immediate:!0}),Vn(()=>{Rr(v)}),Rt(x),{internalCode:l,shouldInitEditor:p,wrapperRef:c,cmView:u,languageExtension:n,syntaxHighlightRender:a}}var It=M({svg:{margin:"auto"}}),We=M({appearance:"none",outline:"none",display:"flex",alignItems:"center",fontSize:"inherit",fontFamily:"inherit",backgroundColor:"transparent",transition:"color $default, background $default",cursor:"pointer",color:"$colors$clickable",border:"0",textDecoration:"none","&:disabled":{color:"$colors$disabled"},"&:hover:not(:disabled,[data-active='true'])":{color:"$colors$hover"},'&[data-active="true"]':{color:"$colors$accent"},svg:{minWidth:"$space$4",width:"$space$4",height:"$space$4"},[`&.${It}`]:{padding:"$space$1",height:"$space$7",display:"flex"},[`&.${It}&:not(:has(span))`]:{width:"$space$7"},[`&.${It}&:has(svg + span)`]:{paddingRight:"$space$3",paddingLeft:"$space$2",gap:"$space$1"}});M({backgroundColor:"$colors$surface2",borderRadius:"99999px",'&[data-active="true"]':{color:"$colors$surface1",background:"$colors$accent"},"&:hover:not(:disabled,[data-active='true'])":{backgroundColor:"$colors$surface3"}});var wn=M({backgroundColor:"$colors$surface2",borderRadius:"99999px",border:"1px solid $colors$surface3",'&[data-active="true"]':{color:"$colors$surface1",background:"$colors$accent"},"&:hover:not(:disabled,[data-active='true'])":{backgroundColor:"$colors$surface3"}}),zw=M({padding:0}),Da=Hf({"0%":{opacity:0,transform:"translateY(4px)"},"100%":{opacity:1,transform:"translateY(0)"}}),mr=M({position:"absolute",bottom:"0",left:"0",right:"0",top:"0",margin:"0",overflow:"auto",height:"100%",zIndex:"$top"}),i0=M({whiteSpace:"pre-wrap",padding:"$space$10",backgroundColor:"$colors$surface1",display:"flex",gap:"$space$2",flexDirection:"column",[`.${We}`]:{width:"auto",gap:"$space$2",padding:"0 $space$3 0 $space$2",marginTop:"$space$1"},variants:{solidBg:{true:{backgroundColor:"$colors$errorSurface"}}}}),Uo=M({padding:"$space$10",backgroundColor:"$colors$surface1",[`.${We}`]:{marginTop:"$space$6",width:"auto",gap:"$space$2",padding:"0 $space$3 0 $space$2"}}),Gt=M({animation:`${Da} 150ms ease`,color:"$colors$error",display:"flex",flexDirection:"column",gap:"$space$3",variants:{errorCode:{true:{fontFamily:"$font$mono"}}},a:{color:"inherit"},p:{margin:0}}),_o=M({margin:"0",display:"block",fontFamily:"$font$mono",fontSize:"$font$size",color:"$syntax$color$plain",lineHeight:"$font$lineHeight"}),mu=M(_3()),Ww=M({flex:1,position:"relative",overflow:"auto",background:"$colors$surface1",".cm-scroller":{padding:"$space$4 0"},[`.${_o}`]:{padding:"$space$4 0"},"@media screen and (max-width: 768px)":{"@supports (-webkit-overflow-scrolling: touch)":{".cm-content":{fontSize:"16px"}}}}),Ou=M({margin:"0",outline:"none",height:"100%"}),Lw=M({fontFamily:"$font$mono",fontSize:"0.8em",position:"absolute",right:"$space$2",bottom:"$space$2",zIndex:"$top",color:"$colors$clickable",backgroundColor:"$colors$surface2",borderRadius:"99999px",padding:"calc($space$1 / 2) $space$2",[`& + .${We}`]:{right:"calc($space$11 * 2)"}}),s0=ue({name:"CodeMirror",props:E3,setup(r,e){let t,{cmView:n,wrapperRef:s,languageExtension:o,internalCode:a,syntaxHighlightRender:l}=Yw(r),c=$e(),{listen:u}=Ce(),h=f=>{f.key==="Enter"&&n.value&&(f.preventDefault(),n.value.contentDOM.focus())};e.expose({getCodemirror:()=>n.value}),Vn(()=>{Rr(()=>{n.value&&r.editorState==="dirty"&&window.matchMedia("(min-width: 768px)").matches&&n.value.contentDOM.focus()})}),Oe(()=>r.code,f=>{if(n.value&&typeof f=="string"&&f!==a.value){let p=n.value,m=p.state.selection.ranges.some(({to:v,from:w})=>v>f.length||w>f.length)?Q.cursor(f.length):p.state.selection,O={from:0,to:p.state.doc.length,insert:f};p.dispatch({changes:O,selection:m})}},{immediate:!0}),Oe([()=>r.showInlineErrors],()=>{r.showInlineErrors&&(t&&t(),t=u(f=>{let p=n.value;f.type==="success"?p==null||p.dispatch({annotations:[new ut("remove-errors",!0)]}):f.type==="action"&&f.action==="show-error"&&f.path===r.filePath&&f.line&&(p==null||p.dispatch({annotations:[new ut("show-error",f.line)]})),f.type==="action"&&f.action==="show-error"&&f.line&&(p==null||p.dispatch({annotations:[{type:"error",value:f.line}]}))}))},{immediate:!0});let d=()=>{let f=4;return r.showLineNumbers&&(f+=6),r.readOnly||(f+=1),`var(--${ee}-space-${f})`};return zt(()=>{t&&t()}),Rt(()=>{t&&t()}),()=>r.readOnly?y(rt,null,[y("pre",{ref:s,class:c("cm",[c(r.editorState),c(o),Ou,mu]),translate:"no"},[y("code",{class:c("pre-placeholder",[_o]),style:{marginLeft:d()}},[l])]),r.readOnly&&r.showReadOnly&&y("span",{class:c("read-only",[Lw])},[_("Read-only")])]):y("div",{ref:s,"aria-autocomplete":"list","aria-label":r.filePath?`Code Editor for ${Vi(r.filePath)}`:"Code Editor","aria-multiline":"true",onKeydown:h,class:c("cm",[c(r.editorState),c(o),Ou,mu]),role:"textbox",tabindex:0,translate:"no"},[y("pre",{class:c("pre-placeholder",[_o]),style:{marginLeft:d()}},[l])])}}),Ot=ue({props:{fill:{type:String,required:!1,default:"currentColor"},height:{type:String,required:!1,default:"16"},viewBox:{type:String,required:!1,default:"0 0 16 16"},stroke:{type:String,required:!1,default:void 0},width:{type:String,required:!1,default:"16"},xmlns:{type:String,required:!1,default:"http://www.w3.org/2000/svg"}},setup(r,{slots:e}){return()=>y("svg",r,[e.default?e.default():null])}}),ls=()=>y(Ot,{fill:"none",stroke:"currentColor"},{default:()=>[y("title",null,[_("Restart script")]),y("path",{d:"M8 2C4.68629 2 2 4.68629 2 8C2 10.0946 3.07333 11.9385 4.7 13.0118","stroke-linecap":"round"},null),y("path",{d:"M14.0005 7.9998C14.0005 5.82095 12.8391 3.91335 11.1016 2.8623","stroke-linecap":"round"},null),y("path",{d:"M14.0003 2.3335H11.167C10.8908 2.3335 10.667 2.55735 10.667 2.8335V5.66683","stroke-linecap":"round"},null),y("path",{d:"M1.99967 13.6665L4.83301 13.6665C5.10915 13.6665 5.33301 13.4426 5.33301 13.1665L5.33301 10.3332","stroke-linecap":"round"},null),y("path",{d:"M10 10L12 12L10 14","stroke-linecap":"round","stroke-linejoin":"round"},null),y("path",{d:"M14.667 14L12.667 14","stroke-linecap":"round","stroke-linejoin":"round"},null)]}),Bw=()=>y(Ot,null,{default:()=>[y("title",null,[_("Run sandbox")]),y("path",{d:"M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z"},null)]}),Vw=()=>y(Ot,null,{default:()=>[y("title",null,[_("Click to go back")]),y("path",{d:"M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64644C10.1583 3.45118 9.84171 3.45118 9.64645 3.64644L10.3536 4.35355ZM6.07072 7.92929L5.71716 7.57573L6.07072 7.92929ZM10.3536 11.6464L6.42427 7.71716L5.71716 8.42426L9.64645 12.3536L10.3536 11.6464ZM6.42427 8.28284L10.3536 4.35355L9.64645 3.64644L5.71716 7.57573L6.42427 8.28284ZM6.42427 7.71716C6.58048 7.87337 6.58048 8.12663 6.42427 8.28284L5.71716 7.57573C5.48285 7.81005 5.48285 8.18995 5.71716 8.42426L6.42427 7.71716Z"},null)]}),Nw=()=>y(Ot,null,{default:()=>[y("title",null,[_("Click to go forward")]),y("path",{d:"M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM9.92929 8.07071L10.2828 8.42426L9.92929 8.07071ZM5.64645 4.35355L9.57574 8.28284L10.2828 7.57574L6.35355 3.64645L5.64645 4.35355ZM9.57574 7.71716L5.64645 11.6464L6.35355 12.3536L10.2828 8.42426L9.57574 7.71716ZM9.57574 8.28284C9.41952 8.12663 9.41953 7.87337 9.57574 7.71716L10.2828 8.42426C10.5172 8.18995 10.5172 7.81005 10.2828 7.57574L9.57574 8.28284Z"},null)]}),o0=()=>y(Ot,null,{default:()=>[y("title",null,[_("Refresh preview")]),y("path",{"clip-rule":"evenodd",d:"M3.83325 7.99992C3.83325 5.69867 5.69853 3.83325 7.99934 3.83325C9.81246 3.83325 11.3563 4.99195 11.9285 6.61097C11.9396 6.6425 11.9536 6.67221 11.97 6.69992H8.80005C8.52391 6.69992 8.30005 6.92378 8.30005 7.19992C8.30005 7.47606 8.52391 7.69992 8.80005 7.69992H12.5667C12.8981 7.69992 13.1667 7.43129 13.1667 7.09992V3.33325C13.1667 3.05711 12.9429 2.83325 12.6667 2.83325C12.3906 2.83325 12.1667 3.05711 12.1667 3.33325V4.94608C11.2268 3.66522 9.7106 2.83325 7.99934 2.83325C5.14613 2.83325 2.83325 5.14651 2.83325 7.99992C2.83325 10.8533 5.14613 13.1666 7.99934 13.1666C9.91218 13.1666 11.5815 12.1266 12.474 10.5836C12.6123 10.3446 12.5306 10.0387 12.2915 9.90044C12.0525 9.76218 11.7466 9.84387 11.6084 10.0829C10.8873 11.3296 9.54072 12.1666 7.99934 12.1666C5.69853 12.1666 3.83325 10.3012 3.83325 7.99992Z","fill-rule":"evenodd"},null)]}),qw=()=>y(Ot,{fill:"none",stroke:"currentColor"},{default:()=>[y("title",null,[_("Clean")]),y("circle",{cx:"7.99998",cy:"8.00004",r:"4.66667","stroke-linecap":"round"},null),y("path",{d:"M4.66669 4.66663L11.3334 11.3333"},null)]}),Uw=()=>y(Ot,{fill:"none",stroke:"currentColor"},{default:()=>[y("title",null,[_("Open on CodeSandbox")]),y("path",{d:"M6.66665 3.33337H4.33331C3.78103 3.33337 3.33331 3.78109 3.33331 4.33337V11.6667C3.33331 12.219 3.78103 12.6667 4.33331 12.6667H11.6666C12.2189 12.6667 12.6666 12.219 12.6666 11.6667V9.33337","stroke-linecap":"round"},null),y("path",{d:"M10 3.33337H12.5667C12.6219 3.33337 12.6667 3.37815 12.6667 3.43337V6.00004","stroke-linecap":"round"},null),y("path",{d:"M7.33331 8.66668L12.5333 3.46667","stroke-linecap":"round"},null)]}),_w=()=>y(Ot,{stroke:"currentColor"},{default:()=>[y("title",null,[_("Close file")]),y("path",{d:"M12 4L4 12","stroke-linecap":"round"},null),y("path",{d:"M4 4L12 12","stroke-linecap":"round"},null)]}),Gw=()=>y(Ot,null,{default:()=>[y("title",null,[_("Open browser console")]),y("path",{d:"M5.65871 3.62037C5.44905 3.44066 5.1334 3.46494 4.95368 3.6746C4.77397 3.88427 4.79825 4.19992 5.00792 4.37963L5.65871 3.62037ZM5.00792 11.6204C4.79825 11.8001 4.77397 12.1157 4.95368 12.3254C5.1334 12.5351 5.44905 12.5593 5.65871 12.3796L5.00792 11.6204ZM9.9114 7.92407L10.2368 7.54445L9.9114 7.92407ZM5.00792 4.37963L9.586 8.3037L10.2368 7.54445L5.65871 3.62037L5.00792 4.37963ZM9.586 7.6963L5.00792 11.6204L5.65871 12.3796L10.2368 8.45555L9.586 7.6963ZM9.586 8.3037C9.39976 8.14407 9.39976 7.85594 9.586 7.6963L10.2368 8.45555C10.5162 8.2161 10.5162 7.7839 10.2368 7.54445L9.586 8.3037Z"},null),y("path",{d:"M10 11.5C9.72386 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.72386 12.5 10 12.5V11.5ZM14.6667 12.5C14.9428 12.5 15.1667 12.2761 15.1667 12C15.1667 11.7239 14.9428 11.5 14.6667 11.5V12.5ZM10 12.5H14.6667V11.5H10V12.5Z"},null)]}),Fw=()=>y(Ot,{viewBox:"0 0 48 48"},{default:()=>[y("title",null,[_("Sign in")]),y("path",{d:"M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z"},null)]}),Jw=()=>y(Ot,{viewBox:"0 0 48 48"},{default:()=>[y("title",null,[_("Sign out")]),y("path",{d:"M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z"},null)]}),Hw=M({borderBottom:"1px solid $colors$surface2",background:"$colors$surface1"}),Kw=M({padding:"0 $space$2",overflow:"auto",display:"flex",flexWrap:"nowrap",alignItems:"stretch",minHeight:"40px",marginBottom:"-1px"}),a0=M({padding:"0 $space$1 0 $space$1",borderRadius:"$border$radius",marginLeft:"$space$1",width:"$space$5",visibility:"hidden",svg:{width:"$space$3",height:"$space$3",display:"block",position:"relative",top:1}}),ey=M({padding:"0 $space$2",height:"$layout$headerHeight",whiteSpace:"nowrap","&:focus":{outline:"none"},[`&:hover > .${a0}`]:{visibility:"unset"}}),ty=ue({name:"FileTabs",props:{closableTabs:{type:Boolean,required:!1,default:void 0}},setup(r,{attrs:e}){let{sandpack:t}=Ce(),n=$e(),s=a=>{a.stopPropagation();let l=a.target.closest("[data-active]"),c=l==null?void 0:l.getAttribute("title");c&&t.closeFile(c)},o=a=>{let l=Vi(a),c=(t.visibleFiles||[]).reduce((u,h)=>(h===a||Vi(h)===l&&u.push(h),u),[]);return c.length===0?l:z3(a,c)};return()=>y("div",{class:n("tabs",[Hw,(e==null?void 0:e.class)||""]),translate:"no"},[y("div",{"aria-label":"Select active file",class:n("tabs-scrollable-container",[Kw]),role:"tablist"},[(t.visibleFiles||[]).map(a=>y("button",{key:a,"aria-selected":a===t.activeFile,class:n("tab-button",[We,ey]),"data-active":a===t.activeFile,onClick:()=>t.setActiveFile(a),role:"tab",title:a,type:"button",style:{display:"flex !important"}},[o(a),r.closableTabs&&t.visibleFiles.length>1&&y("span",{class:n("close-button",[a0]),onClick:s},[y(_w,null,null)])]))])])}}),Tr=ue({name:"RoundedButton",props:{title:{type:String,required:!1,default:""},onClick:{type:Function,required:!1,default:()=>{}}},setup(r,{slots:e,attrs:t}){let n=$e();return()=>y("button",{title:r.title,class:n("button",[n("icon-standalone"),We,It,wn,(t==null?void 0:t.class)||""]),onClick:r.onClick,type:"button"},[e.default?e.default():null])}}),ny=M({position:"absolute",bottom:"$space$2",right:"$space$2",paddingRight:"$space$3"}),ry=ue({name:"RunButton",props:{onClick:{type:Function,default:null}},setup(r){let{sandpack:e}=Ce();return()=>y(Tr,{class:ny.toString(),onClick:t=>{e&&e.runSandpack&&e.runSandpack(),r.onClick&&r.onClick(t)}},{default:()=>[y(Bw,null,null),y("span",null,[_("Run")])]})}}),l0=M({display:"flex",flexDirection:"column",width:"100%",position:"relative",backgroundColor:"$colors$surface1",gap:"1px",[`&:has(.${ee}-stack)`]:{backgroundColor:"$colors$surface2"}}),Xa=ue({name:"SandpackStack",setup(r,{slots:e,attrs:t}){let n=$e();return()=>y("div",{class:n("stack",[l0,(t==null?void 0:t.class)||""]),style:(t==null?void 0:t.style)||{}},[e.default?e.default():null])}}),iy=M({border:"1px solid $colors$surface2",display:"flex",flexWrap:"wrap",alignItems:"stretch",borderRadius:"$border$radius",overflow:"hidden",position:"relative",backgroundColor:"$colors$surface2",gap:"1px",[`> .${l0}`]:{flexGrow:1,flexShrink:1,flexBasis:"0",height:"$layout$height",overflow:"hidden","@media print":{height:"auto",display:"block"},"@media screen and (max-width: 768px)":{[`&:not(.${ee}-preview, .${ee}-editor, .${ee}-preset-column)`]:{height:"calc($layout$height / 2)"},minWidth:"100%;"}},[`> .${ee}-file-explorer`]:{flex:.2,minWidth:"200px","@media screen and (max-width: 768px)":{flex:1}}}),gu=ue({name:"SandpackLayout",setup(r,{slots:e,attrs:t}){let n=U(),{sandpack:s}=Ce(),o=$e();return Oe(n,()=>{s&&n.value&&(s.lazyAnchorRef=n)}),()=>y("div",{ref:n,class:o("layout",[iy,(t==null?void 0:t.class)||""])},[e.default?e.default():null])}}),sy=()=>{let{sandpack:r}=Ce();return me(()=>{var e;return(e=r.error)!=null?e:{message:""}})},oy=r=>{let e=r.replace("[sandpack-client]: ","");if(/process.exit/.test(e)){let t=e.match(/process.exit\((\d+)\)/);return t?Number(t[1])===0?"Server is not running, would you like to start it again?":`Server has crashed with status code ${t[1]}, would you like to restart the server?`:e}return e},ay=ue({name:"ErrorOverlay",props:{clientId:{type:String,required:!1,default:""}},setup(r,{slots:e,attrs:t}){let n=sy(),{restart:s}=as(),{sandpack:o,dispatch:a}=Ce(),l=$e(),c=me(()=>{var d,f;return(f=(d=n.value)==null?void 0:d.message)==null?void 0:f.startsWith("[sandpack-client]")}),u=me(()=>{var d,f;return(f=(d=n.value)==null?void 0:d.message)==null?void 0:f.includes("NPM_REGISTRY_UNAUTHENTICATED_REQUEST")}),h=()=>{o!=null&&o.teamId&&a({type:"sign-in",teamId:o.teamId})};return()=>{var d,f,p;return y(rt,null,[u.value?y("div",Si(r,{class:l("overlay",[l("error"),mr,Uo,(t==null?void 0:t.class)||""])}),[y("p",{class:l("error-message",[Gt])},[y("strong",null,[_("Unable to fetch required dependency.")])]),y("div",{class:l("error-message",[Gt])},[y("p",null,[_("Authentication required. Please sign in to your account (make sure to allow pop-ups to this page) and try again. If the issue persists, contact")," ",y("a",{href:"mailto:hello@codesandbox.io?subject=Sandpack Timeout Error"},[_("support")])," ",_("for further assistance.")])]),y("div",null,[y("button",{class:l("button",[We,It,wn]),onClick:h},[y(Fw,null,null),y("span",null,[_("Sign in")])])])]):y(rt,null,[c.value&&(d=n.value)!=null&&d.message?y("div",Si({class:l("overlay",[l("error"),mr,Uo,(t==null?void 0:t.class)||""])},r),[y("div",{class:l("error-message",[Gt])},[y("p",{class:l("error-title",[M({fontWeight:"bold"})])},[_("Couldn't connect to server")]),y("p",null,[oy((f=n.value)==null?void 0:f.message)]),y("div",null,[y("button",{class:l("button",[l("icon-standalone"),We,It,wn]),onClick:()=>{s(),o&&o.runSandpack()},title:"Restart script",type:"button"},[y(ls,null,null),_(" "),y("span",null,[_("Restart")])])])])]):!n.value.message&&!e.default?null:y("div",{class:l("overlay",[l("error"),mr,i0({solidBg:!0}),(t==null?void 0:t.class)||""]),translate:"no"},[y("p",{class:l("error-message",[Gt])},[y("strong",null,[_("Something went wrong")])]),y("p",{class:l("error-message",[Gt({errorCode:!0})])},[((p=n.value)==null?void 0:p.message)||(e.default?e.default():null)])])])])}}}),ly=r=>Mv.compressToBase64(JSON.stringify(r)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),vu="https://codesandbox.io/api/v1/sandboxes/define",cy=(r,e)=>{let t=Object.keys(r).reduce((n,s)=>{let o=s.replace("/",""),a={content:r[s].code,isBinary:!1};return ce(L({},n),{[o]:a})},{});return ly(L({files:t},e?{template:e}:null))},uy=ue({name:"UnstyledOpenInCodeSandboxButton",setup(r,{slots:e}){let t,{sandpack:n}=Ce(),s=U(),o=U({});return Oe([()=>n.activeFile,()=>n.environment,()=>n.files],()=>{t&&clearTimeout(t),t=setTimeout(()=>{let a=cy(n.files,n.environment),l=new URLSearchParams({parameters:a,query:new URLSearchParams({file:n.activeFile,utm_medium:"sandpack"}).toString()});o.value=l},600)},{deep:!0,immediate:!0}),()=>{var a,l,c,u,h;return((u=(c=(l=(a=o.value)==null?void 0:a.get)==null?void 0:l.call(a,"parameters"))==null?void 0:c.length)!=null?u:0)>1500?y("button",{onClick:()=>{var d;return(d=s.value)==null?void 0:d.submit()},title:"Open in CodeSandbox",type:"button"},[y("form",{ref:s,action:vu,method:"POST",style:{visibility:"hidden"},target:"_blank"},[y("input",{name:"environment",type:"hidden",value:n.environment==="node"?"server":n.environment},null),Array.from(o.value,([d,f])=>y("input",{key:d,name:d,type:"hidden",value:f},null))]),e.default?e.default():null]):y("a",{href:`${vu}?${(h=o.value)==null?void 0:h.toString()}&environment=${n.environment==="node"?"server":n.environment}`,rel:"noreferrer noopener",target:"_blank",title:"Open in CodeSandbox"},[e.default?e.default():null])}}}),c0=ue({name:"OpenInCodeSandboxButton",setup(){let r=$e();return()=>y(uy,{class:r("button",[r("icon-standalone"),We,It,wn])},{default:()=>[y(Uw,null,null),y("span",null,[_("Open Sandbox")])]})}}),Go=M({transform:"translate(-4px, 9px) scale(0.13, 0.13)","*":{position:"absolute",width:"96px",height:"96px"}}),hy=M({position:"absolute",right:"$space$2",bottom:"$space$2",zIndex:"$top",width:"32px",height:"32px",borderRadius:"$border$radius",[`.${Go}`]:{display:"flex"},[`.sp-button.${We}`]:{display:"none"},[`&:hover .sp-button.${We}`]:{display:"flex"},[`&:hover .sp-button.${We} > span`]:{display:"none"},[`&:hover .${Go}`]:{display:"none"}}),dy=Hf({"0%":{transform:"rotateX(-25.5deg) rotateY(45deg)"},"100%":{transform:"rotateX(-25.5deg) rotateY(405deg)"}}),fy=M({animation:`${dy} 1s linear infinite`,animationFillMode:"forwards",transformStyle:"preserve-3d",transform:"rotateX(-25.5deg) rotateY(45deg)","*":{border:"10px solid $colors$clickable",borderRadius:"8px",background:"$colors$surface1"},".top":{transform:"rotateX(90deg) translateZ(44px)",transformOrigin:"50% 50%"},".bottom":{transform:"rotateX(-90deg) translateZ(44px)",transformOrigin:"50% 50%"},".front":{transform:"rotateY(0deg) translateZ(44px)",transformOrigin:"50% 50%"},".back":{transform:"rotateY(-180deg) translateZ(44px)",transformOrigin:"50% 50%"},".left":{transform:"rotateY(-90deg) translateZ(44px)",transformOrigin:"50% 50%"},".right":{transform:"rotateY(90deg) translateZ(44px)",transformOrigin:"50% 50%"}}),py=ue({name:"Loading",props:{showOpenInCodeSandbox:{type:Boolean,required:!0,default:!1}},setup(r,{attrs:e}){let t=$e();return()=>y("div",{class:t("cube-wrapper",[hy,(e==null?void 0:e.class)||""]),title:"Open in CodeSandbox"},[r.showOpenInCodeSandbox&&y(c0,null,null),y("div",{class:t("cube",[Go])},[y("div",{class:t("sides",[fy])},[y("div",{class:"top"},null),y("div",{class:"right"},null),y("div",{class:"bottom"},null),y("div",{class:"left"},null),y("div",{class:"front"},null),y("div",{class:"back"},null)])])])}});function my(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!g0(r)}var u0=ue({name:"StdoutList",props:{data:{type:Array,required:!1,default(){return[]}}},setup(r){let e=$e();return()=>y(rt,null,[r.data.map(({data:t,id:n})=>y("div",{key:n,class:e("console-item",[Oy])},[y(Q3,{linkify:!0},my(t)?t:{default:()=>[t]})]))])}}),Oy=M({width:"100%",padding:"$space$3 $space$2",fontSize:".85em",position:"relative",whiteSpace:"pre","&:not(:first-child):after":{content:"",position:"absolute",top:0,left:0,right:0,height:1,background:"$colors$surface3"}}),gy=(r,e)=>{var t;switch(r.state){case"downloading_manifest":return"[1/3] Downloading manifest";case"downloaded_module":return`[2/3] Downloaded ${r.name} (${e-r.totalPending}/${e})`;case"starting_command":return"[3/3] Starting command";case"command_running":return`[3/3] Running "${(t=r.command)==null?void 0:t.trim()}"`}},h0=r=>{let e,t,n=U(!1),s=U(),o=U(null),{listen:a}=Ce();return Oe([s,n,()=>r==null?void 0:r.timeout,()=>r==null?void 0:r.clientId],()=>{e&&e(),e=a(l=>{l.type==="start"&&l.firstLoad&&(n.value=!1),r!=null&&r.timeout&&(t=setTimeout(()=>{o.value=null},r==null?void 0:r.timeout)),l.type==="shell/progress"&&!n.value&&(!s.value&&l.data.state==="downloaded_module"&&(s.value=l.data.totalPending),s.value!==void 0&&(o.value=gy(l.data,s.value))),l.type==="done"&&l.compilatonError===!1&&(n.value=!0,o.value=null,clearTimeout(t))},r==null?void 0:r.clientId)},{immediate:!0}),zt(()=>{t&&clearTimeout(t),e&&e()}),Rt(()=>{t&&clearTimeout(t),e&&e()}),o},vy=400*2,d0=r=>{let e,t=U([]),{listen:n}=Ce(),s=me(()=>{var a;return(a=r==null?void 0:r.maxMessageCount)!=null?a:vy}),o=me(()=>{var a;return(a=r==null?void 0:r.resetOnPreviewRestart)!=null?a:!1});return Oe([s,()=>r==null?void 0:r.clientId],()=>{e&&e(),e=n(a=>{if(o.value&&a.type==="start")t.value=[];else if(a.type==="stdout"&&a.payload.data&&a.payload.data.trim()){let l=[...he(t.value),{data:a.payload.data,id:Ni()}];for(;l.length>s.value;)l.shift();t.value=he(l)}},r==null?void 0:r.clientId)},{immediate:!0}),zt(()=>{e&&e()}),Rt(()=>{e&&e()}),{logs:t,reset:()=>{t.value=[]}}},wy=M({backgroundColor:"$colors$surface1"}),yy=ue({name:"LoadingOverlay",props:{clientId:String,loading:Boolean,showOpenInCodeSandbox:{type:Boolean,required:!0,default:!1}},setup(r,{attrs:e}){let t,{sandpack:n}=Ce(),{restart:s}=as(r.clientId),o=$e(),a=U(!1),l=Zw(r),c=h0({clientId:r==null?void 0:r.clientId}),{logs:u}=d0({clientId:r==null?void 0:r.clientId}),h=me(()=>l.value!=="HIDDEN"),d=me(()=>l.value==="TIMEOUT"),f=me(()=>l.value==="LOADING"),p=me(()=>f.value||l.value==="PRE_FADING"),m=()=>y("div",{class:o("overlay",[o("error"),mr,i0,Uo,(e==null?void 0:e.class)||""])},[y("div",{class:o(o("error-message",[Gt]))},[y("p",{class:o("error-title",[M({fontWeight:"bold"})])},[_("Couldn't connect to server")]),y("div",{class:o("error-message",[Gt])},[y("p",null,[_("This means sandpack cannot connect to the runtime or your network is having some issues. Please check the network tab in your browser and try again. If the problem persists, report it via")," ",y("a",{href:"mailto:hello@codesandbox.io?subject=Sandpack Timeout Error"},[_("email")])," ",_("or submit an issue on")," ",y("a",{href:"https://github.com/codesandbox/sandpack/issues",rel:"noreferrer noopener",target:"_blank"},[_("GitHub.")])])]),y("p",{class:o("error-message",[Gt({errorCode:!0})])},[_("ENV: "),n.environment,y("br",null,null),_("ERROR: TIME_OUT")]),y("div",null,[y("button",{class:o("button",[o("icon-standalone"),We,It,wn]),onClick:()=>cr(this,null,function*(){n&&(yield n.runSandpack()),s()}),title:"Restart script",type:"button"},[y(ls,null,null),y("span",null,[_("Try again")])])])])]);return Oe(c,()=>{var O;t&&clearTimeout(t),(O=c.value)!=null&&O.includes("Running")&&(t=setTimeout(()=>{a.value=!0},3e3))},{immediate:!0}),zt(()=>{t&&clearTimeout(t)}),Rt(()=>{t&&clearTimeout(t)}),()=>y(rt,null,[h.value?d.value?m():f.value?y(rt,null,[y("div",{class:o("overlay",[o("loading"),mr,wy,(e==null?void 0:e.class)||""]),style:ce(L({},e.style||{}),{opacity:n&&p.value&&n.status&&n.status!=="idle"?1:0,transition:`opacity ${t0}ms ease-out`})},[a.value&&y("div",{class:by.toString()},[y(u0,{data:u.value},null)]),y(py,{showOpenInCodeSandbox:r.showOpenInCodeSandbox},null)]),c.value&&y("div",{class:Sy.toString()},[y("p",null,[c.value])])]):null:null])}}),by=M({position:"absolute",left:0,right:0,bottom:"$space$8",overflow:"auto",opacity:.5,overflowX:"hidden"}),Sy=M({position:"absolute",left:"$space$5",bottom:"$space$4",zIndex:"$top",color:"$colors$clickable",animation:`${Da} 150ms ease`,fontFamily:"$font$mono",fontSize:".8em",width:"75%",p:{whiteSpace:"nowrap",margin:0,textOverflow:"ellipsis",overflow:"hidden"}}),Cy=ue({name:"SandpackLayout",props:{clientId:{type:String,required:!1,default:void 0}},setup(r){let e=h0({timeout:3e3,clientId:r==null?void 0:r.clientId});return()=>y(rt,null,[e.value?y("div",{class:xy.toString()},[y("p",null,[e.value])]):null])}}),xy=M({position:"absolute",left:"$space$5",bottom:"$space$4",zIndex:"$top",color:"$colors$clickable",animation:`${Da} 150ms ease`,fontFamily:"$font$mono",fontSize:".8em",width:"75%",p:{whiteSpace:"nowrap",margin:0,textOverflow:"ellipsis",overflow:"hidden"}}),ky=ue({name:"SandpackCodeEditor",props:{showTabs:{type:Boolean,required:!1,default:void 0},showLineNumbers:{type:Boolean,required:!1,default:!1},showInlineErrors:{type:Boolean,required:!1,default:!1},wrapContent:{type:Boolean,required:!1,default:!1},closableTabs:{type:Boolean,required:!1},initMode:{type:String,required:!1,default:void 0},extensions:{type:Array,required:!1,default:void 0},extensionsKeymap:{type:Array,required:!1,default:void 0},readOnly:{type:Boolean,required:!1,default:void 0},showReadOnly:{type:Boolean,required:!1,default:void 0},additionalLanguages:{type:Array,required:!1,default:void 0}},setup(r,{attrs:e}){let{sandpack:t}=Ce(),{code:n,readOnly:s}=Aw(),o=me(()=>{var h,d;return(d=r.showTabs)!=null?d:((h=t==null?void 0:t.visibleFiles)==null?void 0:h.length)>1}),a=me(()=>!(t!=null&&t.autorun)),l=U(null),c=$e(),u=(h,d=!0)=>{t.updateCurrentFile(h,d)};return()=>y(Xa,{class:c("editor",[(e==null?void 0:e.class)||""]),style:(e==null?void 0:e.style)||{}},{default:()=>[o.value&&y(ty,{closableTabs:r.closableTabs},null),y("div",{class:c("code-editor",[Ww])},[y(s0,{key:t.activeFile,ref:l,code:n.value,editorState:t.editorState,extensions:r.extensions,extensionsKeymap:r.extensionsKeymap,filePath:t.activeFile,initMode:r.initMode||t.initMode,onCodeUpdate:h=>{var d;u(h,(d=t.autoReload)!=null?d:!0)},readOnly:r.readOnly||s.value,showInlineErrors:r.showInlineErrors,showLineNumbers:r.showLineNumbers,showReadOnly:r.showReadOnly,wrapContent:r.wrapContent,additionalLanguages:r.additionalLanguages},null),a.value&&(!t.autoReload||t.status==="idle")?y(ry,null,null):null])]})}});M({borderRadius:"0",width:"100%",padding:0,marginBottom:"$space$2",span:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},svg:{marginRight:"$space$1"}});M({padding:"$space$3",overflow:"auto",height:"100%"});var Py=M({display:"flex",alignItems:"center",height:"$layout$headerHeight",borderBottom:"1px solid $colors$surface2",padding:"$space$3 $space$2",background:"$colors$surface1"}),$y=M({backgroundColor:"$colors$surface2",color:"$colors$clickable",padding:"$space$1 $space$3",borderRadius:"99999px",border:"1px solid $colors$surface2",height:"24px",lineHeight:"24px",fontSize:"inherit",outline:"none",flex:1,marginLeft:"$space$4",width:"0",transition:"background $transitions$default","&:hover":{backgroundColor:"$colors$surface3"},"&:focus":{backgroundColor:"$surface1",border:"1px solid $colors$accent",color:"$colors$base"}}),Qy=r=>{let e=r.match(/(https?:\/\/.*?)\//);return e&&e[1]?[e[1],r.replace(e[1],"")]:[r,"/"]},Ty=ue({name:"Navigator",props:{clientId:{type:String,required:!0},onURLChange:{type:Function,required:!1,default:void 0},startRoute:{type:String,required:!1,default:void 0}},setup(r,{attrs:e}){var t,n;let s,o=U(""),{sandpack:a,dispatch:l,listen:c}=Ce(),u=U((n=(t=r==null?void 0:r.startRoute)!=null?t:a.startRoute)!=null?n:"/"),h=U(!1),d=U(!1),f=$e();Oe(()=>r.clientId,()=>{s&&s(),s=c(k=>{if(k.type==="urlchange"){let{url:b,back:g,forward:C}=k,[P,T]=Qy(b);o.value=P,u.value=T,h.value=g,d.value=C}},r.clientId)},{immediate:!0});let p=k=>{let b=k.target.value.startsWith("/")?k.target.value:`/${k.target.value}`;u.value=b},m=k=>{var b;k.code==="Enter"&&(k.preventDefault(),k.stopPropagation(),typeof r.onURLChange=="function"&&r.onURLChange(o.value+((b=k.currentTarget)==null?void 0:b.value)))},O=()=>{l({type:"refresh"})},v=()=>{l({type:"urlback"})},w=()=>{l({type:"urlforward"})},x=f("button",[f("icon"),We,zw,M({minWidth:"$space$6",justifyContent:"center"})]);return zt(()=>{s&&s()}),Rt(()=>{s&&s()}),()=>y("div",{class:f("navigator",[Py,(e==null?void 0:e.class)||""])},[y("button",{"aria-label":"Go back one page",class:x,disabled:!h.value,onClick:v,type:"button"},[y(Vw,null,null)]),y("button",{"aria-label":"Go forward one page",class:x,disabled:!d.value,onClick:w,type:"button"},[y(Nw,null,null)]),y("button",{"aria-label":"Refresh page",class:x,onClick:O,type:"button"},[y(o0,null,null)]),y("input",{"aria-label":"Current Sandpack URL",class:f("input",[$y]),name:"Current Sandpack URL",onChange:p,onKeydown:m,type:"text",value:u.value},null)])}}),My=M({flex:1,display:"flex",flexDirection:"column",background:"white",overflow:"auto",position:"relative",[`.${ee}-bridge-frame`]:{border:0,position:"absolute",left:"$space$2",bottom:"$space$2",zIndex:"$top",height:12,width:"30%",mixBlendMode:"multiply",pointerEvents:"none"}}),Ry=M({border:"0",outline:"0",width:"100%",height:"100%",minHeight:"160px",maxHeight:"2000px",flex:1}),Ay=M({display:"flex",position:"absolute",bottom:"$space$2",right:"$space$2",zIndex:"$overlay",gap:"$space$2"}),Zy=ue({name:"SandpackPreview",props:{showNavigator:{type:Boolean,required:!1,default:!1},showRefreshButton:{type:Boolean,required:!1,default:!0},showOpenInCodeSandbox:{type:Boolean,required:!1,default:!0},showSandpackErrorOverlay:{type:Boolean,required:!1,default:!0},showOpenNewtab:{type:Boolean,required:!1,default:!0},showRestartButton:{type:Boolean,required:!1,default:!0},actionsChildren:{type:Object,required:!1,default:null},startRoute:{type:String,required:!1,default:"/"}},setup(r,{slots:e,attrs:t,expose:n}){let{sandpack:s,listen:o,iframe:a,getClient:l,clientId:c,dispatch:u}=r0({startRoute:r==null?void 0:r.startRoute}),h=U(null),d,f=$e(),{refresh:p}=jw(c.value),{restart:m}=as(c.value);Vn(()=>{Rr(()=>{d&&d(),d=o(v=>{v.type==="resize"&&(h.value=v.height)})})}),zt(()=>{d&&d()}),Rt(()=>{d&&d()}),n({clientId:c.value,getClient:l});let O=v=>{a.value&&(a.value.src=v)};return()=>y(Xa,Si(r,{class:f("preview",[(t==null?void 0:t.class)||""])}),{default:()=>[r.showNavigator&&y(Ty,{clientId:c.value,startRoute:r==null?void 0:r.startRoute,onURLChange:O},null),y("div",{class:f("preview-container",[My])},[y("iframe",{ref:a,class:f("preview-iframe",[Ry]),style:{height:h.value?`${h.value}px`:void 0},title:"Sandpack Preview"},null),y("div",{class:f("preview-actions",[Ay])},[e.actionsChildren?e.actionsChildren():r.actionsChildren?r.actionsChildren:null,r.showRestartButton&&s.environment==="node"&&y(Tr,{onClick:m},{default:()=>[y(ls,null,null)]}),!r.showNavigator&&r.showRefreshButton&&s.status==="running"&&y(Tr,{onClick:p},{default:()=>[y(o0,null,null)]}),s.teamId&&y("button",{class:f("button",[f("icon-standalone"),We,It,wn]),onClick:()=>u({type:"sign-out"}),title:"Sign out",type:"button"},[y(Jw,null,null)]),r.showOpenInCodeSandbox&&y(c0,null,null)]),y(yy,{clientId:c.value,showOpenInCodeSandbox:r.showOpenInCodeSandbox},null),r.showSandpackErrorOverlay&&y(ay,{clientId:c.value},null),e.default?e.default():null])]})}});M({display:"flex",flexDirection:"column",width:"100%",position:"relative",overflow:"auto",minHeight:"160px",flex:1,[`.${ee}-stack`]:{height:"100%"}});var jy=["SyntaxError: ","Error in sandbox:"],Ey={id:"random",method:"clear",data:["Console was cleared"]},wu="@t",yu="#@t",bu="@r",Su=1e4,f0=2,Fo=400,Cu=Fo*2,Ns=function(){return(0,eval)("this")}(),Iy=typeof ArrayBuffer=="function",Dy=typeof Map=="function",Xy=typeof Set=="function",bi=function(r){return r[r.infinity=0]="infinity",r[r.minusInfinity=1]="minusInfinity",r[r.minusZero=2]="minusZero",r}(bi||{}),xu={Arithmetic:r=>r===bi.infinity?1/0:r===bi.minusInfinity?-1/0:r===bi.minusZero?-0:r,HTMLElement:r=>{let e=document.implementation.createHTMLDocument("sandbox");try{let t=e.createElement(r.tagName);t.innerHTML=r.innerHTML;for(let n of Object.keys(r.attributes))try{t.setAttribute(n,r.attributes[n])}catch{}return t}catch{return r}},Function:r=>{let e=()=>{};return Object.defineProperty(e,"toString",{value:()=>`function ${r.name}() {${r.body}}`}),e},"[[NaN]]":()=>NaN,"[[undefined]]":()=>{},"[[Date]]":r=>{let e=new Date;return e.setTime(r),e},"[[RegExp]]":r=>new RegExp(r.src,r.flags),"[[Error]]":r=>{let e=Ns[r.name]||Error,t=new e(r.message);return t.stack=r.stack,t},"[[ArrayBuffer]]":r=>{if(Iy){let e=new ArrayBuffer(r.length);return new Int8Array(e).set(r),e}return r},"[[TypedArray]]":r=>typeof Ns[r.ctorName]=="function"?new Ns[r.ctorName](r.arr):r.arr,"[[Map]]":r=>{if(Dy){let t=new Map;for(let n=0;n<r.length;n+=2)t.set(r[n],r[n+1]);return t}let e=[];for(let t=0;t<r.length;t+=2)e.push([r[i],r[i+1]]);return e},"[[Set]]":r=>{if(Xy){let e=new Set;for(let t=0;t<r.length;t++)e.add(r[t]);return e}return r}},Jo=r=>{var e;if(typeof r=="string"||typeof r=="number"||r===null)return r;if(Array.isArray(r))return r.map(Jo);if(typeof r=="object"&&wu in r){let t=r[wu],n=xu[t];return n(r.data)}else if(typeof r=="object"&&yu in r){let t=r[yu],n=xu[t];return n(r.data)}else if(typeof r=="object"&&((e=r.constructor)==null?void 0:e.name)==="NodeList"){let t={};return Object.entries(r).forEach(([n,s])=>{t[n]=Jo(s)}),t}return r},Yy=(r,e,t)=>`[${r.reduce((n,s,o)=>`${n}${o?", ":""}${Mr(s,e,t)}`,"")}]`,zy=(r,e,t)=>{let n=r.constructor.name!=="Object"?`${r.constructor.name} `:"";if(t>f0)return n;let s=Object.entries(r),o=Object.entries(r).reduce((a,[l,c],u)=>{let h=u===0?"":", ",d=s.length>10?`
  `:"",f=Mr(c,e,t);return u===Fo?a+d+"...":u>Fo?a:a+`${h}${d}${l}: `+f},"");return`${n}{ ${o}${s.length>10?`
`:" "}}`},Mr=(r,e,t=0)=>{var n;try{let s=Jo(r);if(Array.isArray(s))return Yy(s,e,t+1);switch(typeof s){case"string":return`"${s}"`.slice(0,Su);case"number":case"function":case"symbol":return s.toString();case"boolean":return String(s);case"undefined":return"undefined";case"object":default:if(s instanceof RegExp||s instanceof Error||s instanceof Date)return s.toString();if(s===null)return String(null);if(s instanceof HTMLElement)return s.outerHTML.slice(0,Su);if(Object.entries(s).length===0)return"{}";if(bu in s){if(t>f0)return"Unable to print information";let o=e[s[bu]];return Mr(o,e,t+1)}if(((n=s.constructor)==null?void 0:n.name)==="NodeList"){let{length:o}=s,a=new Array(o).fill(null).map((l,c)=>Mr(s[c],e));return`NodeList(${s.length})[${a}]`}return zy(s,e,t+1)}}catch{return"Unable to print information"}},Wy=r=>{switch(r){case"warn":return"warning";case"clear":return"clear";case"error":return"error";case"log":case"info":default:return"info"}},Ly=ue({name:"ConsoleList",props:{data:{type:Array,required:!1,default(){return[]}}},setup(r){let e=$e();return()=>y(rt,null,[r.data.map(({data:t,id:n,method:s},o,a)=>t&&Array.isArray(t)?y(rt,{key:n},[t.map((l,c)=>{let u=a.slice(o,a.length);return y("div",{key:`${n}-${c}`,class:e("console-item",[By({variant:Wy(s)})])},[y(s0,{code:s==="clear"?l:Mr(l,u),fileType:"js",initMode:"user-visible",showReadOnly:!1,readOnly:!0,wrapContent:!0},null)])})]):null)])}}),By=M({width:"100%",padding:"$space$3 $space$2",fontSize:".8em",position:"relative","&:not(:first-child):after":{content:"",position:"absolute",top:0,left:0,right:0,height:1,background:"$colors$surface3"},".sp-cm":{padding:0},".cm-editor":{background:"none"},".cm-content":{padding:0},[`.${ee}-pre-placeholder`]:{margin:"0 !important",fontSize:"1em"},variants:{variant:{error:{color:"$colors$error",background:"$colors$errorSurface","&:not(:first-child):after":{background:"$colors$error",opacity:.07}},warning:{color:"$colors$warning",background:"$colors$warningSurface","&:not(:first-child):after":{background:"$colors$warning",opacity:.07}},clear:{fontStyle:"italic"},info:{}}}}),Vy=M({justifyContent:"space-between",borderBottom:"1px solid $colors$surface2",padding:"0 $space$2",fontFamily:"$font$mono",height:"$layout$headerHeight",minHeight:"$layout$headerHeight",overflowX:"auto",whiteSpace:"nowrap"}),ku=M({display:"flex",flexDirection:"row",alignItems:"center",gap:"$space$2"}),Ny=ue({name:"Header",props:{currentTab:{type:String,required:!0},setCurrentTab:{type:Function,required:!0},node:{type:Boolean,required:!0}},setup(r){let e=$e(),t=e("console-header-button",[We,wn,M({padding:"$space$1 $space$3"})]);return()=>y("div",{class:e("console-header",[Vy,ku])},[y("p",{class:e("console-header-title",[M({lineHeight:1,margin:0,color:"$colors$base",fontSize:"$font$size",display:"flex",alignItems:"center",gap:"$space$2"})])},[y(Gw,null,null),y("span",null,[_("Terminal")]),r.node&&y("div",{class:e("console-header-actions",[ku])},[y("button",{class:t,"data-active":r.currentTab==="server",onClick:()=>r.setCurrentTab("server"),type:"button"},[_("Server")]),y("button",{class:t,"data-active":r.currentTab==="client",onClick:()=>r.setCurrentTab("client"),type:"button"},[_("Client")])])])])}}),qy=r=>{let e,t=U([]),{listen:n}=Ce(),s=me(()=>{var c;return(c=r==null?void 0:r.resetOnPreviewRestart)!=null?c:!1}),o=me(()=>{var c;return(c=r==null?void 0:r.showSyntaxError)!=null?c:!1}),a=me(()=>{var c;return(c=r==null?void 0:r.maxMessageCount)!=null?c:Cu}),l=()=>{e&&e(),e=n(c=>{if(s.value&&c.type==="start")t.value=[];else if(c.type==="console"&&c.codesandbox){let u=Array.isArray(c.log)?c.log:[c.log];if(u.find(({method:f})=>f==="clear")){t.value=[Ey];return}let h=o.value?u:u.filter(f=>{var p,m,O;return((O=(m=(p=f==null?void 0:f.data)==null?void 0:p.filter)==null?void 0:m.call(p,v=>typeof v!="string"?!0:jy.filter(w=>v.startsWith(w)).length===0))!=null?O:[]).length>0});if(!h)return;let d=[...t.value,...h].filter((f,p,m)=>p===m.findIndex(O=>O.id===f.id));for(;d.length>Cu;)d.shift();t.value=d}},r==null?void 0:r.clientId)};return Oe([a,o,s,()=>r==null?void 0:r.clientId],()=>{l()},{immediate:!0}),zt(()=>{e&&e()}),Rt(()=>{e&&e()}),{logs:t,reset:()=>{t.value=[]}}},Uy=ue({name:"SandpackConsole",props:{onLogsChange:{type:Function,required:!1,default:void 0},showSetupProgress:{type:Boolean,required:!1,default:!1},showRestartButton:{type:Boolean,required:!1,default:!0},showResetConsoleButton:{type:Boolean,required:!1,default:!0},resetOnPreviewRestart:{type:Boolean,required:!1,default:!1},showHeader:{type:Boolean,required:!1,default:!0},showSyntaxError:{type:Boolean,required:!1,default:!1},maxMessageCount:{type:Number,required:!1,default:void 0},standalone:{type:Boolean,required:!1,default:!1},actionsChildren:{type:Object,required:!1,default:null}},setup(r,{slots:e,attrs:t,expose:n}){let{sandpack:{environment:s}}=Ce(),o=U(),{iframe:a,clientId:l}=r0(),{restart:c}=as(),u=$e(),h=U(s==="node"?"server":"client"),d=me(()=>r.standalone?l.value:void 0),{logs:f,reset:p}=qy({maxMessageCount:r.maxMessageCount,showSyntaxError:r.showSyntaxError,resetOnPreviewRestart:r.resetOnPreviewRestart,clientId:d.value}),{logs:m,reset:O}=d0({maxMessageCount:r.maxMessageCount,resetOnPreviewRestart:r.resetOnPreviewRestart,clientId:d.value}),v=me(()=>h.value==="server"),w=me(()=>s==="node");return n({reset(){p(),O()}}),Oe([()=>r.onLogsChange,f,m,h],()=>{r.onLogsChange&&r.onLogsChange(he(f.value)),Rr(()=>{setTimeout(()=>{o.value&&(o.value.scrollTop=o.value.scrollHeight)})})}),()=>y(Xa,Si(r,{class:u("console",[M({height:"100%",background:"$surface1",iframe:{display:"none"},[`.${ee}-bridge-frame`]:{display:"block",border:0,position:"absolute",left:"$space$2",bottom:"$space$2",zIndex:"$top",height:12,width:"30%",mixBlendMode:"multiply",pointerEvents:"none"}}),(t==null?void 0:t.class)||""])}),{default:()=>[r.showHeader&&w.value&&y(Ny,{currentTab:h.value,node:w.value,setCurrentTab:x=>{h.value=x}},null),y("div",{ref:o,class:u("console-list",[M({overflow:"auto",scrollBehavior:"smooth"})])},[v.value?y(u0,{data:m.value},null):y(Ly,{data:f.value},null)]),y("div",{class:u("console-actions",[M({position:"absolute",bottom:"$space$2",right:"$space$2",display:"flex",gap:"$space$2"})])},[e.actionsChildren?e.actionsChildren():r.actionsChildren?r.actionsChildren:null,r.showRestartButton&&v.value&&y(Tr,{onClick:()=>{c(),p(),O()}},{default:()=>[y(ls,null,null)]}),r.showResetConsoleButton&&y(Tr,{onClick:()=>{h.value==="client"?p():O()}},{default:()=>[y(qw,null,null)]})]),r.standalone&&y(rt,null,[y(Cy,{clientId:d.value},null),y("iframe",{title:"console",ref:a},null)])]})}}),cs=M({variants:{status:{pass:{color:"var(--test-pass)"},fail:{color:"var(--test-fail)"},skip:{color:"var(--test-skip)"},title:{color:"var(--test-title)"}}}});cs({status:"pass"});cs({status:"fail"});cs({status:"skip"});cs({status:"title"});var Ya=M({variants:{status:{pass:{background:"var(--test-pass)",color:"$colors$surface1"},fail:{background:"var(--test-fail)",color:"$colors$surface1"},run:{background:"var(--test-run)",color:"$colors$surface1"}}}});Ya({status:"run"});Ya({status:"pass"});Ya({status:"fail"});M({justifyContent:"space-between",borderBottom:"1px solid $colors$surface2",padding:"0 $space$2",fontFamily:"$font$mono",height:"$layout$headerHeight",minHeight:"$layout$headerHeight",overflowX:"auto",whiteSpace:"nowrap"});M({display:"flex",flexDirection:"row",alignItems:"center",gap:"$space$2"});M({marginLeft:"$space$4"});M({marginBottom:"$space$2",color:"$colors$clickable"});M({marginBottom:"$space$2",color:"$colors$hover"});M({marginLeft:"$space$2"});M({marginRight:"$space$2"});M({color:"$colors$hover",marginBottom:"$space$2"});M({marginLeft:"$space$4"});M({color:"$colors$hover",fontSize:"$font$size",padding:"$space$2",whiteSpace:"pre-wrap"});M({display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"$space$2"});M({marginBottom:"$space$2"});M({fontWeight:"bold"});M({borderRadius:"calc($border$radius / 2)"});M({padding:"$space$1 $space$2",fontFamily:"$font$mono",textTransform:"uppercase",marginRight:"$space$2"});M({fontFamily:"$font$mono",cursor:"pointer",display:"inline-block"});M({color:"$colors$clickable",textDecorationStyle:"dotted",textDecorationLine:"underline"});M({color:"$colors$hover",fontWeight:"bold",textDecorationStyle:"dotted",textDecorationLine:"underline"});M({marginBottom:"$space$2"});M({fontWeight:"bold",color:"$colors$hover",whiteSpace:"pre-wrap"});M({fontWeight:"bold",color:"$colors$clickable"});M({display:"flex",position:"absolute",bottom:"$space$2",right:"$space$2",zIndex:"$overlay","> *":{marginLeft:"$space$2"}});M({padding:"$space$4",height:"100%",overflow:"auto",display:"flex",flexDirection:"column",position:"relative",fontFamily:"$font$mono"});M({fontWeight:"bold",color:"$colors$base"});M({position:"absolute",zIndex:"$top",variants:{direction:{vertical:{right:0,left:0,height:10,cursor:"ns-resize"},horizontal:{top:0,bottom:0,width:10,cursor:"ew-resize"}}},"@media screen and (max-width: 768px)":{display:"none"}});M({position:"relative",strong:{background:"$colors$clickable",color:"$colors$surface1",minWidth:"12px",height:"12px",padding:"0 2px",borderRadius:"12px",fontSize:"8px",lineHeight:"12px",position:"absolute",top:"0",right:"0",fontWeight:"normal"}});M({transition:"flex $transitions$default",width:"100%",overflow:"hidden"});M({flexDirection:"row-reverse","@media screen and (max-width: 768px)":{flexFlow:"wrap-reverse !important",flexDirection:"initial"}});const _y=`<template>\r
  <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addMoonTrack } from './function';\r
onMounted(() => {\r
  const script = document.createElement('script');\r
  script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
  script.onload = () => {\r
    window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
    const viewer = new window.Cesium.Viewer('cesiumContainer', {\r
      infoBox: false,\r
    });\r
    addMoonTrack(viewer)\r
  };\r
  document.head.appendChild(script);\r
\r
  const link = document.createElement('link');\r
  link.rel = 'stylesheet';\r
  link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
  document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
  width: 100%;\r
  height: 100vh;\r
}\r
</style>`,Gy=`<template>\r
  <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addSunTrack } from './function';\r
onMounted(() => {\r
  \r
  const script = document.createElement('script');\r
  script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
  script.onload = () => {\r
    window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
    const viewer = new window.Cesium.Viewer('cesiumContainer', {\r
      infoBox: false,\r
    });\r
    addSunTrack(viewer)\r
  }\r
  document.head.appendChild(script);\r
  const link = document.createElement('link');\r
  link.rel = 'stylesheet';\r
  link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
  document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
  width: 100%;\r
  height: 100vh;\r
}\r
</style>`,Fy=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <div class="btn-class">\r
        <button @click="changeShow">测站显示/隐藏</button>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import Station from './function.js'; // 确保路径正确\r
\r
let viewer;\r
let station;\r
\r
function cesiumInit() {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            shouldAnimate: true\r
        });\r
\r
        let siteInfo = {\r
            id: 'site',\r
            position: [20, 20, 250],\r
            ellipsoid: {\r
                radii: [50000, 50000, 50000],\r
                innerRadii: [1, 1, 1],\r
                minimumClock: 45,\r
                maximumClock: 90,\r
                minimumCone: 45,\r
                maximumCone: 75,\r
                outline: false,\r
                fill: true,\r
            },\r
            label: {\r
                text: ''\r
            },\r
        };\r
        station = new Station(viewer, siteInfo.id, siteInfo);\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
}\r
\r
function changeShow(){\r
    // 获取站点实体\r
    const siteEntity = viewer.entities.getById('site');\r
    // 切换站点可见性\r
    station.setSiteVisible(siteEntity, !siteEntity.show);\r
}\r
\r
onMounted(() => {\r
    cesiumInit()\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.btn-class {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>`,Jy=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import Station from './function.js'; // 确保路径正确\r
\r
let viewer;\r
let station;\r
\r
function cesiumInit() {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        let siteInfo = {\r
            id: 'site',\r
            position: [20, 20, 250],\r
            ellipsoid: {\r
                radii: [50000, 50000, 50000],\r
                innerRadii: [1, 1, 1],\r
                minimumClock: 45,\r
                maximumClock: 90,\r
                minimumCone: 45,\r
                maximumCone: 75,\r
                outline: false,\r
                fill: true,\r
            },\r
            label: {\r
                text: ''\r
            },\r
        };\r
        station = new Station(viewer, siteInfo.id, siteInfo);\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
}\r
\r
onMounted(() => {\r
    cesiumInit()\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.btn-class {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>`,Hy=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <div class="btn-class">\r
        <button>多个起点的脉冲线</button>\r
        <button @click="cone">圆锥</button>\r
        <button>脉冲圆锥</button>\r
        <button @click="transmitLine">脉冲线</button>\r
        <button @click="staticLines">静态线</button>\r
        <button @click="dashedLine">虚线</button>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { SpecifyConnectionType, Station }  from './function.js';\r
\r
let viewer;\r
let stationOne;\r
let stationTwo;\r
let stationThree;\r
let satellite;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            shouldAnimate: true\r
        });\r
\r
        let siteInfoOne = {\r
            id: 'site1',\r
            position: [20, 20, 250],\r
            ellipsoid: {\r
                radii: [500000, 500000, 500000],\r
                innerRadii: [1, 1, 1],\r
                minimumClock: 45,\r
                maximumClock: 90,\r
                minimumCone: 45,\r
                maximumCone: 75,\r
                outline: false,\r
                fill: true,\r
            },\r
            label: {\r
                text: ''\r
            },\r
        };\r
        let siteInfoTwo = {\r
            id: 'site2',\r
            position: [120, -10, 250],\r
            ellipsoid: {\r
                radii: [500000, 500000, 500000],\r
                innerRadii: [1, 1, 1],\r
                minimumClock: 45,\r
                maximumClock: 90,\r
                minimumCone: 45,\r
                maximumCone: 75,\r
                outline: false,\r
                fill: true,\r
            },\r
            label: {\r
                text: ''\r
            },\r
        };\r
        let siteInfoThree = {\r
            id: 'site3',\r
            position: [-70, 10, 250],\r
            ellipsoid: {\r
                radii: [500000, 500000, 500000],\r
                innerRadii: [1, 1, 1],\r
                minimumClock: 45,\r
                maximumClock: 90,\r
                minimumCone: 45,\r
                maximumCone: 75,\r
                outline: false,\r
                fill: true,\r
            },\r
            label: {\r
                text: ''\r
            },\r
        };\r
        // 地面测站实例\r
        stationOne = new Station(viewer, siteInfoOne.id, siteInfoOne);\r
        stationTwo = new Station(viewer, siteInfoTwo.id, siteInfoTwo);\r
        stationThree = new Station(viewer, siteInfoThree.id, siteInfoThree);\r
\r
        // 轨道卫星实例\r
        satellite = new SpecifyConnectionType(viewer, stationOne, stationTwo, stationThree);\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
\r
// 连接方式为脉冲圆锥类方法的调用\r
function cone() {\r
    satellite.toggleCone();\r
}\r
\r
// 连接方式为脉冲线类方法的调用\r
function transmitLine() {\r
    satellite.toggleTransmitLine();\r
}\r
\r
// 连接方式为静态线类方法的调用\r
function staticLines() {\r
    satellite.toggleStaticLines();\r
}\r
\r
// 连接方式为虚线类方法的调用\r
function dashedLine() {\r
    satellite.toggleDashedLine();\r
}\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.btn-class {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>`,Ky=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addVehicle } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            shouldAnimate: true\r
        });\r
\r
        addVehicle(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,eb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addShip } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            baseLayerPicker: false,  // 影像切换\r
            animation: true,  //是否显示动画控件\r
            timeline: false, //是否显示时间线控件\r
            infoBox: false, //是否显示点击要素之后显示的信息\r
            geocoder: false, //是否显示地名查找控件\r
            timeline: true, //是否启用时间线控件\r
            fullscreenButton: false,\r
            shouldAnimate: true,\r
            navigationHelpButton: false, //是否显示帮助信息控件\r
            terrainProvider: Cesium.createWorldTerrain({\r
                requestWaterMask: true, // required for water effects\r
                requestVertexNormals: true // required for terrain lighting\r
            })\r
        });\r
        \r
        addShip(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,tb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addAircraft } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            shouldAnimate: true\r
        });\r
        \r
        addAircraft(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,nb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addRobotArmAnimation } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            shouldAnimate: true\r
        });\r
\r
        addRobotArmAnimation(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,rb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addRealTimeDriver } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            shouldAnimate: true\r
        });\r
        \r
        addRealTimeDriver(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,ib=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addCoordinateAxis } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            shouldAnimate: true\r
        });\r
\r
        addCoordinateAxis(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,sb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addMovingTargets } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new Cesium.Viewer('cesiumContainer', {\r
            baseLayerPicker: false,  // 影像切换\r
            animation: true,  //是否显示动画控件\r
            timeline: false, //是否显示时间线控件\r
            infoBox: true, //是否显示点击要素之后显示的信息\r
            geocoder: false, //是否显示地名查找控件\r
            timeline: true, //是否启用时间线控件\r
            fullscreenButton: false,\r
            shouldAnimate: true,\r
            navigationHelpButton: false, //是否显示帮助信息控件\r
            // terrainProvider: Cesium.createWorldTerrain({\r
            //     requestWaterMask: true, // required for water effects\r
            //     requestVertexNormals: true // required for terrain lighting\r
            // })\r
        })\r
        \r
        addMovingTargets(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,ob=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addMovingTargetsWebsocket } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new Cesium.Viewer('cesiumContainer', {\r
            baseLayerPicker: false,  // 影像切换\r
            animation: true,  //是否显示动画控件\r
            timeline: false, //是否显示时间线控件\r
            infoBox: true, //是否显示点击要素之后显示的信息\r
            geocoder: false, //是否显示地名查找控件\r
            timeline: true, //是否启用时间线控件\r
            fullscreenButton: false,\r
            shouldAnimate: true,\r
            navigationHelpButton: false, //是否显示帮助信息控件\r
        })\r
        \r
        addMovingTargetsWebsocket(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,ab=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addMovingTargetsSocketIO } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new Cesium.Viewer('cesiumContainer', {\r
            baseLayerPicker: false,  // 影像切换\r
            animation: true,  //是否显示动画控件\r
            timeline: false, //是否显示时间线控件\r
            infoBox: true, //是否显示点击要素之后显示的信息\r
            geocoder: false, //是否显示地名查找控件\r
            timeline: true, //是否启用时间线控件\r
            fullscreenButton: false,\r
            shouldAnimate: true,\r
            navigationHelpButton: false, //是否显示帮助信息控件\r
        })\r
\r
        // 引入socket.io-client库\r
        const socketIoScript = document.createElement('script');\r
        socketIoScript.src = 'https://cdn.jsdelivr.net/npm/socket.io-client@4/dist/socket.io.js';\r
        socketIoScript.onload = () => {\r
            addMovingTargetsSocketIO(viewer);\r
        };\r
        document.head.appendChild(socketIoScript);\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,lb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addClickOnPath } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            // shouldAnimate: true\r
        });\r
        \r
        addClickOnPath(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,cb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addMissileLaunch } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
  \r
        viewer = new Cesium.Viewer('cesiumContainer', {\r
          shouldAnimate: true  // 一开始就播放动画\r
        });  \r
\r
        addMissileLaunch(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,ub=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <div class="itemClass">\r
        <div>\r
            <input type="string" class="inputClass" v-model="startLon" placeholder="起点的经度：" />\r
            <input type="string" class="inputClass" v-model="startLat" placeholder="起点的纬度：" />\r
            <input type="string" class="inputClass" v-model="startHeight" placeholder="起点的高度：" />\r
        </div>\r
        <div>\r
            <input type="string" class="inputClass" v-model="endLon" placeholder="终点的经度：" />\r
            <input type="string" class="inputClass" v-model="endLat" placeholder="终点的纬度：" />\r
            <input type="string" class="inputClass" v-model="endHeight" placeholder="终点的高度：" />\r
        </div>\r
        <div>\r
            <button @click="launchMissile" style="margin: 1px;">发射导弹</button>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { ref, onMounted } from 'vue';\r
import { addMissileMobileLaunch } from './function';\r
\r
const startLon = ref(120);\r
const startLat = ref(30);\r
const startHeight = ref(0);\r
const endLon = ref(180);\r
const endLat = ref(60);\r
const endHeight = ref(1000000);\r
\r
let missileId = 0;\r
\r
onMounted(() => {\r
    addMissileMobileLaunch(startLon.value, startLat.value, startHeight.value, endLon.value, endLat.value, endHeight.value, missileId++);\r
});\r
\r
const launchMissile = () => {\r
    addMissileMobileLaunch(startLon.value, startLat.value, startHeight.value, endLon.value, endLat.value, endHeight.value, missileId++);\r
};\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.itemClass {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
.inputClass {\r
    width: 80px;\r
    height: 15px;\r
    margin: 1px;\r
}\r
</style>`,hb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addRocketLaunch } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new Cesium.Viewer('cesiumContainer', {\r
            shouldAnimate: true  // 一开始就播放动画\r
        }); \r
\r
        addRocketLaunch(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,db=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addRocketLaunchIntoOrbit } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
  \r
        viewer = new Cesium.Viewer('cesiumContainer', {\r
          shouldAnimate: true  // 一开始就播放动画\r
        });   \r
\r
        addRocketLaunchIntoOrbit(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,fb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <button @click="getNodeDate" class="btn-class">获取模型的节点</button>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addGetNodes, getNodeDate } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new Cesium.Viewer('cesiumContainer', {\r
            shouldAnimate: true  // 一开始就播放动画\r
        }); \r
\r
        addGetNodes(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.btn-class {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>`,pb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addPoint } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addPoint(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,mb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addLine } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addLine(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Ob=`<template>\r
  <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addMultiLine } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
  const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
        \r
        addMultiLine(viewer)\r
\r
      };\r
      document.head.appendChild(script);\r
      const link = document.createElement('link');\r
      link.rel = 'stylesheet';\r
      link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
      document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,gb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addPlane } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addPlane(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,vb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addCirclesAndEllipses } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addCirclesAndEllipses(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,wb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addBox } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addBox(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
  width: 100%;\r
  height: 100vh;\r
}\r
</style>`,yb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addStraightArrow } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addStraightArrow(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,bb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addTerminatorLine } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addTerminatorLine(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Sb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addJingweiNetwork3D } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addJingweiNetwork3D(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Cb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addSceneInfo } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: true, // 启用InfoBox\r
        });\r
\r
        addSceneInfo(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,xb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <button @click="exportImage(viewer)" class="btn-class">下载场景图片</button>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { exportImage } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            navigationHelpButton: false, // 是否显示帮助信息控件\r
            infoBox: true,  // 是否显示点击要素之后显示的信息\r
            fullscreenButton: false, // 全屏显示\r
            CreditsDisplay: false,\r
            contextOptions: {\r
                webgl: {\r
                    alpha: true,\r
                    depth: true,\r
                    stencil: true,\r
                    antialias: true,\r
                    premultipliedAlpha: true,\r
                    // 通过canvas.toDataURL()实现截图需要将该项设置为true\r
                    preserveDrawingBuffer: true,\r
                    failIfMajorPerformanceCaveat: true\r
                }\r
            }\r
        });\r
\r
        \r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.btn-class {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>`,kb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addJingweiNetwork2D } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            sceneMode: window.Cesium.SceneMode.SCENE2D\r
        });\r
\r
        addJingweiNetwork2D(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Pb=`<template>\r
  <div id="cesiumContainer" class="cesium-container"></div>\r
  <div class="time">\r
\r
  </div>\r
  <div class="time">\r
    <img src="https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/time.png"\r
      style="width: 100%; height: 100%;">\r
    <button class="button1" @click="forward(viewer)">▶</button>\r
    <button class="button2" v-on:click="start(viewer)">◼</button>\r
    <button class="button3" v-on:click="back(viewer)">◀</button>\r
    <button class="button4" v-on:click="multiplier(viewer)">X2</button>\r
    <button class="button5" v-on:click="divide(viewer)">X-2</button>\r
    <button class="button6" v-on:click="reset(viewer)">⚪</button>\r
    <p class="bei">X{{ bei }}</p>\r
    <p class="time-text"> {{ timetext }}</p>\r
  </div>\r
</template>\r
<script setup>\r
import { onMounted,ref, watch } from 'vue';\r
import { addDial, divide, multiplier, back, start, forward, reset } from './function';\r
let viewer=ref();\r
let bei = ref(66)\r
let timetext=ref('')\r
onMounted(() => {\r
  const script = document.createElement('script');\r
  script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
  script.onload = () => {\r
    window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
    viewer = new window.Cesium.Viewer('cesiumContainer', {\r
      animation: false,\r
      baseLayerPicker: false,\r
      fullscreenButton: false,\r
      vrButton: false,\r
      geocoder: false,\r
      homeButton: false,\r
      infoBox: false,\r
      sceneModePicker: false,\r
      selectionIndicator: false,\r
      timeline: true,\r
      navigationHelpButton: false,\r
    });\r
    timetext=addDial(viewer, timetext)\r
    bei.value = viewer.clockViewModel.multiplier\r
  };\r
  document.head.appendChild(script);\r
  const link = document.createElement('link');\r
  link.rel = 'stylesheet';\r
  link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
  document.head.appendChild(link);\r
});\r
\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
width: 100%;\r
height: 100vh;\r
}\r
.time {\r
  width: 180px;\r
  height: 100px;\r
  position: absolute;\r
  bottom: 0px;\r
  left: 0px;\r
}\r
\r
.button1 {\r
  position: absolute;\r
  bottom: 0px;\r
  left: 120px;\r
}\r
\r
.button2 {\r
  position: absolute;\r
  bottom: 0px;\r
  left: 85px;\r
}\r
\r
.button3 {\r
  position: absolute;\r
  bottom: 0px;\r
  left: 50px;\r
}\r
\r
.button4 {\r
  position: absolute;\r
  bottom: 0px;\r
  left: 150px;\r
}\r
\r
.button5 {\r
  position: absolute;\r
  bottom: 0px;\r
  left: 10px;\r
}\r
\r
.button6 {\r
\r
  position: absolute;\r
  bottom: 85px;\r
  left: 10px;\r
}\r
\r
.bei {\r
  color: aliceblue;\r
  font-size: 15px;\r
  position: absolute;\r
  bottom: 40px;\r
  left: 80px;\r
}\r
\r
.time-text {\r
  color: aliceblue;\r
  font-size: 15px;\r
  position: absolute;\r
  bottom: 30px;\r
  left: 40px;\r
}\r
</style>`,$b=`<template>\r
  <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { change } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
  const script = document.createElement('script');\r
  script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
  script.onload = () => {\r
    window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
    viewer = new window.Cesium.Viewer('cesiumContainer', {\r
      infoBox: false,\r
    });\r
\r
    viewer.camera.changed.addEventListener(() => {\r
      let alt = (viewer.camera.positionCartographic.height / 1000).toFixed(2);\r
      let divisionCount = alt > 8000 ? 36 : 360;\r
      viewer.entities.removeAll();\r
      change(viewer, divisionCount)\r
\r
    })\r
\r
\r
    \r
\r
  };\r
  document.head.appendChild(script);\r
  const link = document.createElement('link');\r
  link.rel = 'stylesheet';\r
  link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
  document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
  width: 100%;\r
  height: 100vh;\r
}\r
</style>`,Qb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addCircularSpaceGrid } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addCircularSpaceGrid(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Tb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addRectangularSpaceGrid } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addRectangularSpaceGrid(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Mb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addearthCoordinate } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
            orderIndependentTranslucency: false,\r
        });\r
\r
        addearthCoordinate(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Rb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addSkyBox } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addSkyBox(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Ab=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <div id="eye" class="eye-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addMapx } from './function';\r
\r
let viewerMain;\r
let viewerEye;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewerMain = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        viewerEye = new window.Cesium.Viewer('eye', {\r
            infoBox: false,\r
            // 禁用所有小组件\r
            baseLayerPicker: false,  // 是否显示图层选择控件\r
            animation: false, // 是否显示动画控件\r
            timeline: false,  // 是否显示时间轴控件，和cesuim中的click进行挂接的\r
            fullscreenButton: false, // 是否显示全屏按钮\r
            geocoder: false, // 是否显示搜索按钮\r
            homeButton: false, // 是否显示主页按钮(回到地球初始化的状态)\r
            navigationHelpButton: false, // 是否显示帮助提示按钮\r
            sceneModePicker: false,  // 是否显示投影方式按钮\r
            infoBox: false,  // 是否显示信息框，显示实体相关的属性信息\r
        });\r
\r
        addMapx(viewerMain, viewerEye)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.eye-container {\r
    position: absolute;\r
    bottom: 10px;\r
    right: 10px;\r
    width: 180px;\r
    height: 180px;\r
}\r
</style>`,Zb=`<template>\r
  <div id="cesiumContainer" class="cesium-container"> </div>\r
  <button @click="viewTrack(viewer)" class="btn-class">viewTrack</button>\r
\r
</template>\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addViewTrack, viewTrack } from './function';\r
let viewer\r
onMounted(() => {\r
  const script = document.createElement('script');\r
  script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
  script.onload = () => {\r
    window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
    viewer = new window.Cesium.Viewer('cesiumContainer', {\r
      infoBox: false,\r
    });\r
    addViewTrack(viewer)\r
  };\r
  document.head.appendChild(script);\r
\r
  const link = document.createElement('link');\r
  link.rel = 'stylesheet';\r
  link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
  document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
width: 100%;\r
height: 100vh;\r
}\r
.btn-class {\r
  position: absolute;\r
  top: 10px;\r
  left: 10px;\r
}\r
</style>`,jb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <div class="item-class">\r
        <span style="background-color: aliceblue; margin: 2px;">跳转到指定位置</span>\r
        <div>\r
            <input v-model="inputLongitude" style="width: 52px; margin-top: 5px; margin-left: 2px;" placeholder="经度:" />\r
            <input v-model="inputLatitude" style="width: 52px; margin-top: 5px; margin-left: 2px;" placeholder="纬度:" />\r
            <input v-model="inputAltitude" style="width: 52px; margin-top: 5px; margin-left: 2px;" placeholder="高度:" />\r
        </div>\r
        <div style="margin: 2px;">\r
            <button type="primary" @click="perspectiveFly(viewer, inputLongitude, inputLatitude, inputAltitude)">跳转</button>\r
            <button @click="reset()">重置</button>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { onMounted, ref } from 'vue';\r
import { perspectiveFly } from './function';\r
\r
let viewer;\r
const inputLongitude = ref('')\r
const inputLatitude = ref('')\r
const inputAltitude = ref('')\r
\r
function reset() {\r
    inputLongitude.value = '';\r
    inputLatitude.value = '';\r
    inputAltitude.value = '';\r
}\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.item-class {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>`,Eb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
    <div class="btn-class">\r
        <button @click="zoomByBound(viewer, 1)">放大相机视角</button>\r
        <button @click="zoomByBound(viewer, 0)">缩小相机视角</button>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { zoomByBound } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
.btn-class {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>`,Ib=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addRain } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addRain(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Db=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addSnow } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addSnow(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Xb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addFog } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addFog(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Yb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addWaterSurface } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
\r
        addWaterSurface(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,zb=`<template>\r
    <div id="cesiumContainer" style="width: 100vw; height: 100vh"></div>\r
    <div class="itemClass">\r
        <div>\r
        <input type="string" class="inputClass" v-model="X" placeholder="X:" />\r
        <input type="string" class="inputClass" v-model="Y" placeholder="Y:" />\r
        <input type="string" class="inputClass" v-model="Z" placeholder="Z:" />\r
        </div>\r
        <div>\r
        <button @click="changeCoordinate(viewer, X, Y, Z)" style="margin: 1px">转换坐标</button>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { onMounted, ref } from "vue";\r
import { changeCoordinate } from './function'\r
\r
let viewer;\r
const X = ref();\r
const Y = ref();\r
const Z = ref();\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style scoped>\r
.itemClass {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>\r
  `,Wb=`<template>\r
    <div id="cesiumContainer" style="width: 100vw; height: 100vh"></div>\r
    <div class="itemClass">\r
        <div>\r
            <input type="string" class="inputClass" v-model="longitude" placeholder="经度：" />\r
            <input type="string" class="inputClass" v-model="latitude" placeholder="纬度：" />\r
            <input type="string" class="inputClass" v-model="height" placeholder="高度：" />\r
        </div>\r
        <div>\r
            <button @click="changeCoordinate(viewer, longitude, latitude, height)" style="margin: 1px">转换坐标</button>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup>\r
\r
import { onMounted, ref } from "vue";\r
import { changeCoordinate } from  './function.js'\r
\r
const longitude = ref();\r
const latitude = ref();\r
const height = ref();\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style scoped>\r
.itemClass {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>\r
`,Lb=`<template>\r
    <div id="cesiumContainer" style="width: 100vw; height: 100vh"></div>\r
    <div class="itemClass">\r
        <button @click="changeTime(viewer)" style="margin: 1px">点击转换现在的时间</button>\r
    </div>\r
  </template>\r
  \r
<script setup>\r
import { onMounted } from "vue";\r
import { changeTime } from './function.js';\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
  \r
<style scoped>\r
.itemClass {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>\r
  `,Bb=`<template>\r
    <div id="cesiumContainer" style="width: 100vw; height: 100vh"></div>\r
    <div class="itemClass">\r
        <button  @click="changeTime(viewer)">点击转换现在的时间</button>\r
    </div>\r
</template>\r
  \r
<script setup>\r
import { onMounted } from "vue";\r
import { changeTime } from './function.js';\r
let viewer;\r
  \r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
}); \r
<\/script>\r
  \r
<style scoped>\r
.itemClass {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>\r
  `,Vb=`<template>\r
    <div id="cesiumContainer" style="width: 100vw; height: 100vh"></div>\r
    <div class="itemClass">\r
        <button  @click="addPoint(viewer)">按下添加点</button>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from "vue";\r
import { addPoint } from "./function.js"\r
let viewer;\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            infoBox: false,\r
        });\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style scoped>\r
.itemClass {\r
    position: absolute;\r
    top: 10px;\r
    left: 10px;\r
}\r
</style>\r
`,Nb=`<template>\r
    <div id="cesiumContainer" class="cesium-container"></div>\r
</template>\r
\r
<script setup>\r
import { onMounted } from 'vue';\r
import { addDistanceTwoPoints } from './function';\r
\r
let viewer;\r
\r
onMounted(() => {\r
    const script = document.createElement('script');\r
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
    script.onload = () => {\r
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
\r
        viewer = new window.Cesium.Viewer('cesiumContainer', {\r
            selectionIndicator:false,\r
            infoBox:false,\r
        });\r
\r
        addDistanceTwoPoints(viewer)\r
\r
    };\r
    document.head.appendChild(script);\r
    const link = document.createElement('link');\r
    link.rel = 'stylesheet';\r
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
    document.head.appendChild(link);\r
});\r
<\/script>\r
\r
<style>\r
.cesium-container {\r
    width: 100%;\r
    height: 100vh;\r
}\r
</style>`,Pu={月球轨道:_y,绕太阳:Gy,添加测站:Fy,测站坐标系:Jy,指定连接类型:Hy,车:Ky,船:eb,飞机:tb,机械臂动画:nb,实时驱动:rb,坐标轴:ib,大批量动目标:sb,大批量动目标websocket:ob,大批量动目标socketIO:ab,点选路径:lb,导弹发射:cb,导弹机动发射:ub,火箭发射:hb,火箭发射卫星入轨:db,获取模型节点数:fb,点:pb,线:mb,多颜色线:Ob,面:gb,椭圆:vb,盒子:wb,直线箭头:yb,晨昏线:bb,经纬网络3D:Sb,场景信息:Cb,场景截图:xb,经纬网络2D:kb,时间盘:Pb,圆形空间网格:Qb,矩形空间网格:Tb,地球坐标系:Mb,天空盒:Rb,鹰眼图:Ab,刻度盘:$b,相机缩放:Eb,视角飞行:jb,跟踪视角:Zb,雨:Ib,雪:Db,雾:Xb,水面:Yb,经纬高转地固XYZ:Wb,地固XYZ转经纬高:zb,UTC时间转JulianDate:Lb,JulianDate转UTC时间:Bb,计算点到直线的距离:Vb,计算两点间距离:Nb};function qb(r){if(!Pu.hasOwnProperty(r))throw new Error(`${r}不存在`);return Pu[r]}const Ub=`export function addMoonTrack(viewer) {\r
  var start = new Cesium.JulianDate.fromDate(new Date());\r
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());\r
  var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());\r
  viewer.clock.startTime = start.clone();\r
  viewer.clock.stopTime = stop.clone();\r
  viewer.clock.currentTime = start.clone();\r
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;\r
  viewer.clock.multiplier = 1;\r
  viewer.timeline.zoomTo(start, stop);\r
\r
  const inclination = Cesium.Math.toRadians(28.5); // 轨道倾角（以弧度表示）\r
  const semiMajorAxis = 384400000; // 半长轴（米），大约为月球到地球的平均距离\r
  // const period = 27.321582 * 24 * 60 * 60; // 月球的公转周期（秒）\r
  const period = 360 ; \r
  // 定义轨道上的点数\r
  const numberOfPoints = 1000;\r
\r
  function createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints) {\r
    const positions = [];\r
    // 计算每个点的位置\r
    for (let i = 0; i < numberOfPoints; i++) {\r
      const meanAnomaly = (2 * Math.PI / period) * (i * period / numberOfPoints); // 平均异常\r
      const trueAnomaly = meanAnomaly; // 简化处理，假设轨道是圆的\r
      const radius = semiMajorAxis; // 圆轨道的半径等于半长轴\r
\r
      // 计算笛卡尔坐标\r
      const x = radius * Math.cos(trueAnomaly);\r
      const y = radius * Math.sin(trueAnomaly) * Math.cos(inclination);\r
      const z = radius * Math.sin(trueAnomaly) * Math.sin(inclination);\r
\r
      // 将笛卡尔坐标转换为经纬度坐标\r
      const cartographic = Cesium.Cartographic.fromCartesian(Cesium.Cartesian3.fromElements(x, y, z));\r
\r
      // 添加到位置数组\r
      positions.push(cartographic);\r
    }\r
        positions.push(positions[0])\r
    return positions;\r
  }\r
  // 创建轨道路径\r
  const moonOrbitPositions = createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints);\r
\r
  // 将轨道位置转换为Cartesian3坐标\r
  const cartesianPositions = moonOrbitPositions.map(position => Cesium.Cartesian3.fromRadians(position.longitude, position.latitude, position.height));\r
\r
  // 创建SampledPositionProperty\r
  const orbitPosition = new Cesium.SampledPositionProperty();\r
  for (let i = 0; i <= numberOfPoints; i++) {\r
    const time = Cesium.JulianDate.addSeconds(viewer.clock.startTime, i * period / numberOfPoints, new Cesium.JulianDate());\r
    orbitPosition.addSample(time, cartesianPositions[i]);\r
  }\r
  const moonEntity = viewer.entities.add({\r
    name: 'Moon',\r
    availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({\r
      start: start,\r
      stop: stop\r
    })]),\r
    position: orbitPosition,\r
    orientation: new Cesium.VelocityOrientationProperty(orbitPosition),\r
    // 设置月球的形状\r
    model: {\r
      uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/moon.gltf',\r
      minimumPixelSize: 10,\r
      scale: 200.0,\r
    },\r
    // 显示月球的运动轨迹\r
    path: {\r
      resolution: 1,\r
      material: new Cesium.PolylineGlowMaterialProperty({\r
        glowPower: 0.1,\r
        color: Cesium.Color.PINK\r
      }),\r
      width: 5\r
    }\r
  });\r
\r
  // 设置插值选项\r
  moonEntity.position.setInterpolationOptions({\r
    interpolationDegree: 5,\r
    interpolationAlgorithm: Cesium.LagrangePolynomialApproximation\r
  });\r
\r
};\r
\r
\r
`,_b=`export function addSunTrack(viewer) {\r
  var start = new Cesium.JulianDate.fromDate(new Date());\r
  const scene = viewer.scene;\r
  const globe = scene.globe;\r
  const baseLayer = viewer.scene.imageryLayers.get(0);\r
  globe.showGroundAtmosphere = false;\r
  globe.baseColor = Cesium.Color.TRANSPARENT;\r
  globe.translucency.enabled = true;\r
  globe.undergroundColor = undefined;\r
  scene.screenSpaceCameraController.enableCollisionDetection = false;\r
  // Set oceans on Bing base layer to transparent\r
  baseLayer.colorToAlpha = new Cesium.Color(0.0, 0.016, 0.059);\r
  baseLayer.colorToAlphaThreshold = 0.2;\r
  viewer.scene.globe.enableLighting = false;\r
  viewer.shadows = false;\r
  viewer.scene.sun.show = false;//还可以viewer.scene.sun.destroy();\r
  //月亮\r
  viewer.scene.moon.show = false;\r
  viewer.scene.skyAtmosphere.show = false;\r
  //雾\r
  viewer.scene.fog.enable = false;\r
  var start = new Cesium.JulianDate.fromDate(new Date());\r
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());\r
  var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());\r
  viewer.clock.startTime = start.clone();\r
  viewer.clock.stopTime = stop.clone();\r
  viewer.clock.currentTime = start.clone();\r
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;\r
  viewer.clock.multiplier = 1;\r
  viewer.timeline.zoomTo(start, stop);\r
  const inclination = Cesium.Math.toRadians(28.5); // 轨道倾角（以弧度表示）\r
  const semiMajorAxis = 38440000; // 半长轴（米），大约为月球到地球的平均距离\r
  // const period = 27.321582 * 24 * 60 * 60; // 月球的公转周期（秒）\r
  const period = 360;\r
  // 定义轨道上的点数\r
  const numberOfPoints = 1000;\r
  function createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints) {\r
    const positions = [];\r
    // 计算每个点的位置\r
    for (let i = 0; i < numberOfPoints; i++) {\r
      const meanAnomaly = (2 * Math.PI / period) * (i * period / numberOfPoints); // 平均异常\r
      const trueAnomaly = meanAnomaly; // 简化处理，假设轨道是圆的\r
      const radius = semiMajorAxis; // 圆轨道的半径等于半长轴\r
      const x = radius * Math.cos(trueAnomaly);\r
      const y = radius * Math.sin(trueAnomaly) * Math.cos(inclination);\r
      const z = radius * Math.sin(trueAnomaly) * Math.sin(inclination);\r
      const cartographic = Cesium.Cartographic.fromCartesian(Cesium.Cartesian3.fromElements(x, y, z));\r
      positions.push(cartographic);\r
    }\r
    positions.push(positions[0])\r
    return positions;\r
  }\r
  const moonOrbitPositions = createMoonOrbit(inclination, semiMajorAxis, period, numberOfPoints);\r
  const cartesianPositions = moonOrbitPositions.map(position => Cesium.Cartesian3.fromRadians(position.longitude, position.latitude, position.height));\r
  const orbitPosition = new Cesium.SampledPositionProperty();\r
  for (let i = 0; i <= numberOfPoints; i++) {\r
    const time = Cesium.JulianDate.addSeconds(viewer.clock.startTime, i * period / numberOfPoints, new Cesium.JulianDate());\r
    orbitPosition.addSample(time, cartesianPositions[i]);\r
  }\r
  const mantleRadius = 6400000.0;\r
  const sunEntity = viewer.entities.add({\r
    position: Cesium.Cartesian3.ZERO,\r
    ellipsoid: {\r
      radii: new Cesium.Cartesian3(\r
        mantleRadius,\r
        mantleRadius,\r
        mantleRadius\r
      ),\r
      material: new Cesium.ImageMaterialProperty({\r
              image: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/sun.jpg",\r
              repeat: new Cesium.Cartesian2(1, 1)\r
            })\r
    },\r
  })\r
  const moonEntity = viewer.entities.add({\r
    name: 'Moon',\r
    availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({\r
      start: start,\r
      stop: stop\r
    })]),\r
    position: orbitPosition,\r
    orientation: new Cesium.VelocityOrientationProperty(orbitPosition),\r
    model: {\r
      uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/earth.gltf',\r
      minimumPixelSize: 100,\r
      scale: 200.0,\r
      shadows: Cesium.ShadowMode.DISABLED,\r
    },\r
\r
    path: {\r
      resolution: 1,\r
      material: new Cesium.PolylineGlowMaterialProperty({\r
        glowPower: 0.1,\r
        color: Cesium.Color.PINK\r
      }),\r
      width: 5\r
    }\r
  });\r
  moonEntity.position.setInterpolationOptions({\r
    interpolationDegree: 5,\r
    interpolationAlgorithm: Cesium.LagrangePolynomialApproximation\r
  }); \r
}\r
\r
`,Gb=`/**\r
 * @class 测站类\r
 * @classdesc 该类用于在Cesium场景中创建测站\r
 */\r
class Station {\r
  /**\r
   * 测站构造函数\r
   * @param {Object} viewer - viewer对象\r
   * @param {String} id - 测站ID\r
   * @param {Object} [ellipsoid] - 使用椭圆配置西瓜瓣\r
   * @param {Object} [label] - 表单属性\r
   * @param {Object} [model] - 模型属性\r
   * @param {Object} [point] - 点属性\r
   * @param {Array} position - 测站位置\r
   * @param {Boolean} [visible=true] - 测站显隐性\r
   */\r
  constructor(viewer, id, options = {}) {\r
      this.viewer = viewer;\r
      this.id = id;\r
      this.visible = options.visible !== undefined ? options.visible : true;\r
      this.position = options.position || [0, 0, 0];\r
      this.rotationAngle = 150; // 初始旋转角度\r
\r
      const SITE = {\r
          ellipsoid: {\r
              show: true,\r
              heightReference: Cesium.HeightReference.NONE, // 默认高度参考方式\r
              radii: null,\r
              innerRadii: null,\r
              minimumClock: 0.0,\r
              maximumClock: 2 * Cesium.Math.PI,\r
              minimumCone: 0.0,\r
              maximumCone: Cesium.Math.PI,\r
              fill: true,\r
              material: Cesium.Color.RED.withAlpha(0.3),\r
              outline: false,\r
              outlineColor: Cesium.Color.BLACK,\r
              outlineWidth: 1.0,\r
              stackPartitions: 64,\r
              slicePartitions: 64,\r
              subdivisions: 128,\r
              shadows: undefined,\r
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 200000.0),\r
          },\r
          model: {\r
              show: true,\r
              uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Station.glb',\r
              scale: 1,\r
              minimumPixelSize: 64,\r
              maximumScale: 500,\r
              incrementallyLoadTextures: true,\r
              runAnimations: true,\r
              clampAnimations: true,\r
              shadows: Cesium.ShadowMode.ENABLED,\r
              heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,\r
              silhouetteColor: Cesium.Color.RED,\r
              silhouetteSize: 0.0,\r
              color: Cesium.Color.WHITE,\r
              colorBlendMode: Cesium.ColorBlendMode.HIGHLIGHT,\r
              colorBlendAmount: 0.5,\r
              imageBasedLightingFactor: new Cesium.Cartesian2(1.0, 1.0),\r
              lightColor: undefined,\r
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 250000.0),\r
              nodeTransformations: undefined,\r
              articulations: undefined,\r
              clippingPlanes: undefined,\r
          },\r
          label: {\r
              show: true,\r
              text: null,\r
              font: '30px sans-serif',\r
              style: Cesium.LabelStyle.FILL,\r
              scale: 0.5,\r
              showBackground: false,\r
              backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),\r
              backgroundPadding: new Cesium.Cartesian2(7, 5),\r
              pixelOffset: new Cesium.Cartesian2(15, 0),\r
              eyeOffset: Cesium.Cartesian3.ZERO,\r
              horizontalOrigin: Cesium.HorizontalOrigin.LEFT,\r
              verticalOrigin: Cesium.VerticalOrigin.TOP,\r
              heightReference: Cesium.HeightReference.NONE,\r
              fillColor: Cesium.Color.WHITE,\r
              outlineColor: Cesium.Color.BLACK,\r
              outlineWidth: 1.0,\r
              translucencyByDistance: null,\r
              pixelOffsetScaleByDistance: null,\r
              scaleByDistance: null,\r
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 250000.0),\r
              disableDepthTestDistance: null,\r
          },\r
          point: {\r
              show: true,\r
              pixelSize: 10,\r
              heightReference: Cesium.HeightReference.NONE,\r
              color: Cesium.Color.RED,\r
              outlineColor: Cesium.Color.BLACK,\r
              outlineWidth: 0,\r
              scaleByDistance: undefined,\r
              translucencyByDistance: undefined,\r
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(250000.0, 99999999999999),\r
              disableDepthTestDistance: undefined,\r
          }\r
      };\r
\r
      let { label, ellipsoid, model, point } = options;\r
      label = { ...SITE.label, ...label };\r
      ellipsoid = { ...SITE.ellipsoid, ...ellipsoid };\r
      model = { ...SITE.model, ...model };\r
      point = { ...SITE.point, ...point };\r
\r
      ellipsoid.radii = new Cesium.Cartesian3(...ellipsoid.radii);\r
      ellipsoid.innerRadii = new Cesium.Cartesian3(...ellipsoid.innerRadii);\r
      ellipsoid.minimumClock = Cesium.Math.toRadians(ellipsoid.minimumClock);\r
      ellipsoid.maximumClock = Cesium.Math.toRadians(ellipsoid.maximumClock);\r
      ellipsoid.minimumCone = Cesium.Math.toRadians(ellipsoid.minimumCone);\r
      ellipsoid.maximumCone = Cesium.Math.toRadians(ellipsoid.maximumCone);\r
      label.text = \`\${id}\`;\r
\r
      this.entity = viewer.entities.add({\r
          id: id,\r
          position: Cesium.Cartesian3.fromDegrees(...this.position),\r
          orientation: new Cesium.CallbackProperty(() => { \r
              this.rotationAngle -= 1.5;\r
              if (this.rotationAngle <= -360) this.rotationAngle = 0;\r
              return Cesium.Transforms.headingPitchRollQuaternion(\r
                  Cesium.Cartesian3.fromDegrees(...this.position),\r
                  new Cesium.HeadingPitchRoll((this.rotationAngle * Math.PI) / 180, 0, 0)\r
              );\r
          }, false),\r
          label: label,\r
          ellipsoid: ellipsoid,\r
          model: model,\r
          point: point,\r
      });\r
\r
      viewer.zoomTo(this.entity);\r
  }\r
\r
  setSiteVisible(site, visible) {\r
      site.show = visible;\r
  }\r
}\r
\r
export default Station;`,Fb=`/**\r
 * @class 测站类\r
 * @classdesc 该类用于在Cesium场景中创建测站\r
 */\r
class Station {\r
    /**\r
     * 测站构造函数\r
     * @param {Object} viewer - viewer对象\r
     * @param {String} id - 测站ID\r
     * @param {Object} [ellipsoid] - 使用椭圆配置西瓜瓣\r
     * @param {Object} [label] - 表单属性\r
     * @param {Object} [model] - 模型属性\r
     * @param {Object} [point] - 点属性\r
     * @param {Array} position - 测站位置\r
     * @param {Boolean} [visible=true] - 测站显隐性\r
     */\r
    constructor(viewer, id, options = {}) {\r
        this.viewer = viewer;\r
        this.id = id;\r
        this.visible = options.visible !== undefined ? options.visible : true;\r
        this.position = options.position || [0, 0, 0];\r
        this.rotationAngle = 150; // 初始旋转角度\r
\r
        const SITE = {\r
            ellipsoid: {\r
                show: true,\r
                heightReference: Cesium.HeightReference.NONE, // 默认高度参考方式\r
                radii: null,\r
                innerRadii: null,\r
                minimumClock: 0.0,\r
                maximumClock: 2 * Cesium.Math.PI,\r
                minimumCone: 0.0,\r
                maximumCone: Cesium.Math.PI,\r
                fill: true,\r
                material: Cesium.Color.RED.withAlpha(0.3),\r
                outline: false,\r
                outlineColor: Cesium.Color.BLACK,\r
                outlineWidth: 1.0,\r
                stackPartitions: 64,\r
                slicePartitions: 64,\r
                subdivisions: 128,\r
                shadows: undefined,\r
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 200000.0),\r
            },\r
            model: {\r
                show: true,\r
                uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Station.glb',\r
                scale: 1,\r
                minimumPixelSize: 64,\r
                maximumScale: 500,\r
                incrementallyLoadTextures: true,\r
                runAnimations: true,\r
                clampAnimations: true,\r
                shadows: Cesium.ShadowMode.ENABLED,\r
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,\r
                silhouetteColor: Cesium.Color.RED,\r
                silhouetteSize: 0.0,\r
                color: Cesium.Color.WHITE,\r
                colorBlendMode: Cesium.ColorBlendMode.HIGHLIGHT,\r
                colorBlendAmount: 0.5,\r
                imageBasedLightingFactor: new Cesium.Cartesian2(1.0, 1.0),\r
                lightColor: undefined,\r
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 250000.0),\r
                nodeTransformations: undefined,\r
                articulations: undefined,\r
                clippingPlanes: undefined,\r
            },\r
            label: {\r
                show: true,\r
                text: null,\r
                font: '30px sans-serif',\r
                style: Cesium.LabelStyle.FILL,\r
                scale: 0.5,\r
                showBackground: false,\r
                backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),\r
                backgroundPadding: new Cesium.Cartesian2(7, 5),\r
                pixelOffset: new Cesium.Cartesian2(15, 0),\r
                eyeOffset: Cesium.Cartesian3.ZERO,\r
                horizontalOrigin: Cesium.HorizontalOrigin.LEFT,\r
                verticalOrigin: Cesium.VerticalOrigin.TOP,\r
                heightReference: Cesium.HeightReference.NONE,\r
                fillColor: Cesium.Color.WHITE,\r
                outlineColor: Cesium.Color.BLACK,\r
                outlineWidth: 1.0,\r
                translucencyByDistance: null,\r
                pixelOffsetScaleByDistance: null,\r
                scaleByDistance: null,\r
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 250000.0),\r
                disableDepthTestDistance: null,\r
            },\r
            point: {\r
                show: true,\r
                pixelSize: 10,\r
                heightReference: Cesium.HeightReference.NONE,\r
                color: Cesium.Color.RED,\r
                outlineColor: Cesium.Color.BLACK,\r
                outlineWidth: 0,\r
                scaleByDistance: undefined,\r
                translucencyByDistance: undefined,\r
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(250000.0, 99999999999999),\r
                disableDepthTestDistance: undefined,\r
            }\r
        };\r
\r
        let { label, ellipsoid, model, point } = options;\r
        label = { ...SITE.label, ...label };\r
        ellipsoid = { ...SITE.ellipsoid, ...ellipsoid };\r
        model = { ...SITE.model, ...model };\r
        point = { ...SITE.point, ...point };\r
\r
        ellipsoid.radii = new Cesium.Cartesian3(...ellipsoid.radii);\r
        ellipsoid.innerRadii = new Cesium.Cartesian3(...ellipsoid.innerRadii);\r
        ellipsoid.minimumClock = Cesium.Math.toRadians(ellipsoid.minimumClock);\r
        ellipsoid.maximumClock = Cesium.Math.toRadians(ellipsoid.maximumClock);\r
        ellipsoid.minimumCone = Cesium.Math.toRadians(ellipsoid.minimumCone);\r
        ellipsoid.maximumCone = Cesium.Math.toRadians(ellipsoid.maximumCone);\r
        label.text = \`\${id}\`;\r
\r
        this.entity = viewer.entities.add({\r
            id: id,\r
            position: Cesium.Cartesian3.fromDegrees(...this.position),\r
            orientation: new Cesium.CallbackProperty(() => { \r
                this.rotationAngle -= 1.5;\r
                if (this.rotationAngle <= -360) this.rotationAngle = 0;\r
                return Cesium.Transforms.headingPitchRollQuaternion(\r
                    Cesium.Cartesian3.fromDegrees(...this.position),\r
                    new Cesium.HeadingPitchRoll((this.rotationAngle * Math.PI) / 180, 0, 0)\r
                );\r
            }, false),\r
            label: label,\r
            ellipsoid: ellipsoid,\r
            model: model,\r
            point: point,\r
        });\r
\r
        viewer.zoomTo(this.entity).then(() => {\r
            viewer.trackedEntity = this.entity;\r
            let matrix = this.entity.computeModelMatrix(Cesium.JulianDate.fromIso8601('2019-08-28T04:00:00.00Z'));\r
            // 通过调试的实体来绘制模型坐标轴\r
            viewer.scene.primitives.add(\r
                new Cesium.DebugModelMatrixPrimitive({  // 加载模型偏移矩阵的图元\r
                    modelMatrix: matrix,  // 设置偏移矩阵\r
                    length: 100000,\r
                    width: 10\r
                })\r
            ); \r
        }).catch(error => {\r
            console.error('Failed to zoom to entity:', error);\r
        });\r
    }\r
}\r
\r
export default Station;`,Jb=`/**\r
 * @class 指定连接类型类\r
 * @classdesc 该类用于在Cesium场景中更改卫星和地面测站的连接类型\r
 */\r
export class SpecifyConnectionType {\r
    constructor(viewer, stationOne, stationTwo, stationThree) {\r
        this.viewer = viewer;\r
        this.stationOne = stationOne;\r
        this.stationTwo = stationTwo;\r
        this.stationThree = stationThree;\r
        this.connections = [];\r
        this.visible = false;\r
\r
        // 设置时间\r
        var start = new Cesium.JulianDate.fromDate(new Date());\r
        start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());\r
        var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());\r
        this.viewer.clock.startTime = start.clone();\r
        this.viewer.clock.stopTime = stop.clone();\r
        this.viewer.clock.currentTime = start.clone();\r
        this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;\r
        this.viewer.clock.multiplier = 1;\r
        this.viewer.timeline.zoomTo(start, stop);\r
\r
        // 创建卫星轨道的函数\r
        this.createOrbit = function(inclination, semiMajorAxis, period, numberOfPoints) {\r
            const positions = [];\r
            // 计算每个点的位置\r
            for (let i = 0; i < numberOfPoints; i++) {\r
                const meanAnomaly = (2 * Math.PI / period) * (i * period / numberOfPoints); // 平均异常\r
                const trueAnomaly = meanAnomaly; // 简化处理，假设轨道是圆的\r
                const radius = semiMajorAxis; // 圆轨道的半径等于半长轴\r
                // 计算笛卡尔坐标\r
                const x = radius * Math.cos(trueAnomaly);\r
                const y = radius * Math.sin(trueAnomaly) * Math.cos(inclination);\r
                const z = radius * Math.sin(trueAnomaly) * Math.sin(inclination);\r
                // 将笛卡尔坐标转换为经纬度坐标\r
                const cartographic = Cesium.Cartographic.fromCartesian(Cesium.Cartesian3.fromElements(x, y, z));\r
                // 添加到位置数组\r
                positions.push(cartographic);\r
            }\r
            positions.push(positions[0])\r
            return positions;\r
        };\r
\r
        const inclination = Cesium.Math.toRadians(28.5);  // 轨道倾角（以弧度表示）\r
        const semiMajorAxis = 8000000;  // 半长轴（米），大约为月球到地球的平均距离\r
        const period = 360; \r
        const numberOfPoints = 1000;  // 定义轨道上的点数\r
\r
        // 调用函数创建轨道路径\r
        const OrbitPositions = this.createOrbit(inclination, semiMajorAxis, period, numberOfPoints);\r
\r
        // 将轨道位置转换为Cartesian3坐标\r
        const cartesianPositions = OrbitPositions.map(position => Cesium.Cartesian3.fromRadians(position.longitude, position.latitude, position.height));\r
\r
        // 创建SampledPositionProperty\r
        const orbitPosition = new Cesium.SampledPositionProperty();\r
        for (let i = 0; i <= numberOfPoints; i++) {\r
            const time = Cesium.JulianDate.addSeconds(this.viewer.clock.startTime, i * period / numberOfPoints, new Cesium.JulianDate());\r
            orbitPosition.addSample(time, cartesianPositions[i]);\r
        }\r
        \r
        this.satelliteEntity = this.viewer.entities.add({\r
            name: 'Satellite',\r
            availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({\r
                start: start,\r
                stop: stop\r
            })]),  \r
            position: orbitPosition,\r
            orientation: new Cesium.VelocityOrientationProperty(orbitPosition),\r
            model: {\r
                uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/spaceStation.gltf',\r
                minimumPixelSize: 64,\r
            },\r
            // 卫星的运动轨迹\r
            path: {\r
                resolution: 1,\r
                material: new Cesium.PolylineGlowMaterialProperty({\r
                    glowPower: 0.1,\r
                    color: Cesium.Color.PINK\r
                }),\r
                width: 5\r
            }\r
        });\r
\r
        // 设置插值选项\r
        this.satelliteEntity.position.setInterpolationOptions({\r
            interpolationDegree: 5,\r
            interpolationAlgorithm: Cesium.LagrangePolynomialApproximation\r
        });\r
    }\r
\r
    // 连接方式为圆锥\r
    useCone() {\r
        function createCone(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {\r
            return viewer.entities.add({\r
                availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({\r
                    start: viewer.clock.startTime,\r
                    stop: viewer.clock.stopTime\r
                })]),\r
                position: new Cesium.CallbackProperty((time) => {\r
                    const satellitePosition = satellitePositionProperty.getValue(time);\r
                    const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);\r
                    if (distance > maxDistance) {\r
                        return null; // 返回 null 隐藏圆锥\r
                    }\r
                    return satellitePosition;\r
                }, false),\r
                cylinder: {\r
                    length: 3800000,\r
                    topRadius: 0,\r
                    bottomRadius: 2000000, // 圆锥底部的半径\r
                    material: color.withAlpha(0.5),\r
                    outline: true,\r
                    outlineColor: color\r
                }\r
            });\r
        }\r
\r
        // 获取测站位置\r
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);\r
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);\r
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);\r
\r
        // 最大连接显示距离\r
        const maxDistance = 5000000;\r
\r
        // 创建圆锥\r
        this.connections.push(createCone(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));\r
        this.connections.push(createCone(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));\r
        this.connections.push(createCone(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));\r
    }\r
\r
    // 切换圆锥的显示和隐藏\r
    toggleCone() {\r
        if (this.visible) {\r
            this.connections.forEach(connection => {\r
                this.viewer.entities.remove(connection);\r
            });\r
            this.connections = [];\r
        } else {\r
            this.useCone();\r
        }\r
        this.visible = !this.visible;\r
    }\r
\r
    // 连接方式为脉冲线\r
    usePulseLine() {\r
        function createPulseLineMaterial() {\r
            return new Cesium.Material({\r
                fabric: {\r
                    type: 'PolylinePulseLink',\r
                    uniforms: {\r
                        color: new Cesium.Color(0.0, 1.0, 0.0, 0.5),\r
                        speed: 1.5,\r
                        headSize: 0.05,\r
                        tailSize: 0.5,\r
                        widthOffset: 0.1,\r
                        coreSize: 0.05,\r
                    },\r
                    source: "float SPEED_STEP = 0.01; \\n" +\r
                            "vec4 drawLight(float xPos, vec2 st, float headOffset, float tailOffset, float widthOffset){ \\n" +\r
                            "float lineLength = smoothstep(xPos + headOffset, xPos, st.x) - smoothstep(xPos, xPos - tailOffset, st.x); \\n" +\r
                            "float lineWidth = smoothstep(widthOffset, 0.5, st.y) - smoothstep(0.5, 1.0 - widthOffset, st.y); \\n" +\r
                            "return vec4(lineLength * lineWidth); \\n" +\r
                            "}\\n" +\r
                            "czm_material czm_getMaterial(czm_materialInput materialInput) \\n" +\r
                            "{ \\n" +\r
                            "czm_material m = czm_getDefaultMaterial(materialInput);\\n" +\r
                            "float sinTime = sin(czm_frameNumber * SPEED_STEP * speed); \\n" +\r
                            "vec4 v4_core;\\n" +\r
                            "vec4 v4_color;\\n" +\r
                            "float xPos = 0.0; \\n" +\r
                            "if (sinTime < 0.0){ \\n" +\r
                            "xPos = cos(czm_frameNumber * SPEED_STEP * speed)+ 1.0 - tailsize; \\n" +\r
                            "}else{ \\n" +\r
                            "xPos = -cos(czm_frameNumber * SPEED_STEP * speed)+ 1.0 - tailsize; \\n" +\r
                            "} \\n" +\r
                            "v4_color = drawLight(xPos, materialInput.st, headsize, tailsize, widthoffset);\\n" +\r
                            "v4_core = drawLight(xPos, materialInput.st, coresize, coresize*2.0, widthoffset*2.0);\\n" +\r
                            "m.diffuse = color.xyz + v4_core.xyz*v4_core.w*0.8; \\n" +\r
                            "m.alpha = pow(v4_color.w, 3.0); \\n" +\r
                            "return m; \\n" +\r
                            "} \\n",\r
                },\r
            });\r
        }\r
\r
        function createConnection(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {\r
            return viewer.entities.add({\r
                polyline: {\r
                    positions: new Cesium.CallbackProperty((time) => {\r
                        const satellitePosition = satellitePositionProperty.getValue(time);\r
                        const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);\r
                        if (distance > maxDistance) {\r
                            return []; // 返回空数组隐藏连线\r
                        }\r
                        return [satellitePosition, stationPosition];\r
                    }, false),\r
                    width: 1.5,\r
                    material: createPulseLineMaterial(),\r
                }\r
            });\r
        }\r
\r
        // 获取测站位置\r
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);\r
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);\r
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);\r
\r
        // 最大连接显示距离\r
        const maxDistance = 5000000;\r
\r
        // 创建连线\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));\r
    }\r
\r
    // 切换脉冲线的显示和隐藏\r
    togglePulseLine() {\r
        if (this.visible) {\r
            this.connections.forEach(connection => {\r
                this.viewer.entities.remove(connection);\r
            });\r
            this.connections = [];\r
        } else {\r
            this.usePulseLine();\r
        }\r
        this.visible = !this.visible;\r
    }\r
\r
    // 连接方式为静态线\r
    useStaticLines() {\r
        function createConnection(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {\r
            return viewer.entities.add({\r
                polyline: {\r
                    positions: new Cesium.CallbackProperty((time) => {\r
                        const satellitePosition = satellitePositionProperty.getValue(time);\r
                        const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);\r
                        if (distance > maxDistance) {\r
                            return []; // 返回空数组隐藏连线\r
                        }\r
                        return [satellitePosition, stationPosition];\r
                    }, false),\r
                    width: 1.5,\r
                    material: new Cesium.PolylineOutlineMaterialProperty({\r
                        color: color,\r
                        outlineWidth: 1,\r
                        outlineColor: Cesium.Color.BLACK\r
                    })\r
                }\r
            });\r
        }\r
\r
        // 获取测站位置\r
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);\r
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);\r
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);\r
\r
        // 最大连接显示距离\r
        const maxDistance = 5000000;\r
\r
        // 创建连线\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));\r
    }\r
\r
    // 切换静态线的显示和隐藏\r
    toggleStaticLines() {\r
        if (this.visible) {\r
            this.connections.forEach(connection => {\r
                this.viewer.entities.remove(connection);\r
            });\r
            this.connections = [];\r
        } else {\r
            this.useStaticLines();\r
        }\r
        this.visible = !this.visible;\r
    }\r
\r
    // 连接方式为虚线\r
    useDashedLine() {\r
        function createConnection(viewer, satellitePositionProperty, stationPosition, color, maxDistance) {\r
            return viewer.entities.add({\r
                polyline: {\r
                    positions: new Cesium.CallbackProperty((time) => {\r
                        const satellitePosition = satellitePositionProperty.getValue(time);\r
                        const distance = Cesium.Cartesian3.distance(satellitePosition, stationPosition);\r
                        if (distance > maxDistance) {\r
                            return []; // 返回空数组隐藏连线\r
                        }\r
                        return [satellitePosition, stationPosition];\r
                    }, false),\r
                    width: 1.5,\r
                    material: new Cesium.PolylineDashMaterialProperty({\r
                        color: color,\r
                        dashLength: 16\r
                    })\r
                }\r
            });\r
        }\r
\r
        // 获取测站位置\r
        const stationOnePosition = Cesium.Cartesian3.fromDegrees(...this.stationOne.position);\r
        const stationTwoPosition = Cesium.Cartesian3.fromDegrees(...this.stationTwo.position);\r
        const stationThreePosition = Cesium.Cartesian3.fromDegrees(...this.stationThree.position);\r
\r
        // 最大连接显示距离\r
        const maxDistance = 5000000;\r
\r
        // 创建连线\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationOnePosition, Cesium.Color.BLUE, maxDistance));\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationTwoPosition, Cesium.Color.GREEN, maxDistance));\r
        this.connections.push(createConnection(this.viewer, this.satelliteEntity.position, stationThreePosition, Cesium.Color.YELLOW, maxDistance));\r
    }\r
\r
    // 切换虚线的显示和隐藏\r
    toggleDashedLine() {\r
        if (this.visible) {\r
            this.connections.forEach(connection => {\r
                this.viewer.entities.remove(connection);\r
            });\r
            this.connections = [];\r
        } else {\r
            this.useDashedLine();\r
        }\r
        this.visible = !this.visible;\r
    }\r
}\r
\r
/**\r
 * @class 测站类\r
 * @classdesc 该类用于在Cesium场景中创建测站\r
 */\r
export class Station {\r
    /**\r
     * 测站构造函数\r
     * @param {Object} viewer - viewer对象\r
     * @param {String} id - 测站ID\r
     * @param {Object} [ellipsoid] - 使用椭圆配置西瓜瓣\r
     * @param {Object} [label] - 表单属性\r
     * @param {Object} [model] - 模型属性\r
     * @param {Object} [point] - 点属性\r
     * @param {Array} position - 测站位置\r
     * @param {Boolean} [visible=true] - 测站显隐性\r
     */\r
    constructor(viewer, id, options = {}) {\r
        this.viewer = viewer;\r
        this.id = id;\r
        this.visible = options.visible !== undefined ? options.visible : true;\r
        this.position = options.position || [0, 0, 0];\r
        this.rotationAngle = 150; // 初始旋转角度\r
\r
        const SITE = {\r
            ellipsoid: {\r
                show: true,\r
                heightReference: Cesium.HeightReference.NONE, // 默认高度参考方式\r
                radii: null,\r
                innerRadii: null,\r
                minimumClock: 0.0,\r
                maximumClock: 2 * Cesium.Math.PI,\r
                minimumCone: 0.0,\r
                maximumCone: Cesium.Math.PI,\r
                fill: true,\r
                material: Cesium.Color.RED.withAlpha(0.3),\r
                outline: false,\r
                outlineColor: Cesium.Color.BLACK,\r
                outlineWidth: 1.0,\r
                stackPartitions: 64,\r
                slicePartitions: 64,\r
                subdivisions: 128,\r
                shadows: undefined,\r
            },\r
            model: {\r
                show: true,\r
                uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Station.glb',\r
                scale: 1,\r
                minimumPixelSize: 64,\r
                maximumScale: 500,\r
                incrementallyLoadTextures: true,\r
                runAnimations: true,\r
                clampAnimations: true,\r
                shadows: Cesium.ShadowMode.ENABLED,\r
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,\r
                silhouetteColor: Cesium.Color.RED,\r
                silhouetteSize: 0.0,\r
                color: Cesium.Color.WHITE,\r
                colorBlendMode: Cesium.ColorBlendMode.HIGHLIGHT,\r
                colorBlendAmount: 0.5,\r
                imageBasedLightingFactor: new Cesium.Cartesian2(1.0, 1.0),\r
                lightColor: undefined,\r
                nodeTransformations: undefined,\r
                articulations: undefined,\r
                clippingPlanes: undefined,\r
            },\r
            label: {\r
                show: true,\r
                text: null,\r
                font: '30px sans-serif',\r
                style: Cesium.LabelStyle.FILL,\r
                scale: 0.5,\r
                showBackground: false,\r
                backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),\r
                backgroundPadding: new Cesium.Cartesian2(7, 5),\r
                pixelOffset: new Cesium.Cartesian2(15, 0),\r
                eyeOffset: Cesium.Cartesian3.ZERO,\r
                horizontalOrigin: Cesium.HorizontalOrigin.LEFT,\r
                verticalOrigin: Cesium.VerticalOrigin.TOP,\r
                heightReference: Cesium.HeightReference.NONE,\r
                fillColor: Cesium.Color.WHITE,\r
                outlineColor: Cesium.Color.BLACK,\r
                outlineWidth: 1.0,\r
                translucencyByDistance: null,\r
                pixelOffsetScaleByDistance: null,\r
                scaleByDistance: null,\r
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 250000.0),\r
                disableDepthTestDistance: null,\r
            },\r
        };\r
\r
        let { label, ellipsoid, model, point } = options;\r
        label = { ...SITE.label, ...label };\r
        ellipsoid = { ...SITE.ellipsoid, ...ellipsoid };\r
        model = { ...SITE.model, ...model };\r
        // point = { ...SITE.point, ...point };\r
\r
        ellipsoid.radii = new Cesium.Cartesian3(...ellipsoid.radii);\r
        ellipsoid.innerRadii = new Cesium.Cartesian3(...ellipsoid.innerRadii);\r
        ellipsoid.minimumClock = Cesium.Math.toRadians(ellipsoid.minimumClock);\r
        ellipsoid.maximumClock = Cesium.Math.toRadians(ellipsoid.maximumClock);\r
        ellipsoid.minimumCone = Cesium.Math.toRadians(ellipsoid.minimumCone);\r
        ellipsoid.maximumCone = Cesium.Math.toRadians(ellipsoid.maximumCone);\r
        label.text = \`\${id}\`;\r
\r
        this.entity = viewer.entities.add({\r
            id: id,\r
            position: Cesium.Cartesian3.fromDegrees(...this.position),\r
            orientation: new Cesium.CallbackProperty(() => { \r
                this.rotationAngle -= 1.5;\r
                if (this.rotationAngle <= -360) this.rotationAngle = 0;\r
                return Cesium.Transforms.headingPitchRollQuaternion(\r
                    Cesium.Cartesian3.fromDegrees(...this.position),\r
                    new Cesium.HeadingPitchRoll((this.rotationAngle * Math.PI) / 180, 0, 0)\r
                );\r
            }, false),\r
            label: label,\r
            ellipsoid: ellipsoid,\r
            model: model,\r
            // point: point,\r
        });\r
    }\r
}`,Hb=`export function addVehicle(viewer) {\r
    // 定义开始时间\r
    let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间\r
    start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间\r
    let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒\r
\r
    viewer.clock.startTime = start.clone();  // 设置时钟开始时间\r
    viewer.clock.currentTime = start.clone();  // 设置时钟当前时间\r
    viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间\r
    viewer.clock.multiplier = 10;  // 设置时间倍数\r
    viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去\r
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始\r
\r
    function computeFlight(source) {\r
		var property = new Cesium.SampledPositionProperty();\r
		for(var i = 0; i < source.length; i++) {\r
			var time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate ());\r
			var position =Cesium.Cartesian3.fromDegrees(source[i].longitude, source[i].latitude, source[i].height);\r
			property.addSample(time,position);\r
		}\r
		return property;\r
	}   \r
\r
    let data = [\r
        { longitude:108.95847801120208, latitude:34.21765422118126, height: -3.948, time: 0 },\r
        { longitude:108.95849254781227, latitude:34.21800309998983, height: -3.839, time: 100 },\r
        { longitude:108.9594164044393, latitude:34.21802855891169, height: -2.579, time: 200 },\r
    ];\r
\r
    let property = computeFlight(data);              \r
    // 添加模型\r
    let entityCar = viewer.entities.add({\r
        id: "car",\r
        availability: new Cesium.TimeIntervalCollection([ //要添加到集合中的间隔数组\r
            new Cesium.TimeInterval({start: start, stop: stop}),\r
        ]),\r
        position: property,\r
        path: {\r
            resolution: 1, \r
            leadTime: 0, \r
            trailTime: 200,\r
            material: new Cesium.PolylineGlowMaterialProperty({\r
                glowPower: 0.1,\r
                color: Cesium.Color.ORANGE\r
            }),\r
            width: 10\r
        },\r
        orientation: new Cesium.VelocityOrientationProperty(property),  // 根据速度计算方向角\r
        model: {\r
            uri:'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/CesiumMilkTruck.glb',\r
            minimumPixelSize: 2,\r
        }\r
    });\r
    viewer.trackedEntity = entityCar;   // 视角跟随模型\r
}`,Kb=`export function addShip(viewer) {\r
    let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间\r
    start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间\r
    let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒\r
\r
    viewer.clock.startTime = start.clone();  // 设置时钟开始时间\r
    viewer.clock.currentTime = start.clone();  // 设置时钟当前时间\r
    viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间\r
    viewer.clock.multiplier = 1;  // 设置时间倍数\r
    viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去\r
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始\r
\r
    // 生成路径\r
    function computeFlight(source) {\r
        let property = new Cesium.SampledPositionProperty();\r
        for (let i = 0; i < source.length; i++) {\r
          let time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate);\r
          let position = Cesium.Cartesian3.fromDegrees(source[i].longitude, source[i].latitude, source[i].height);\r
          // 添加位置，和时间对应\r
          property.addSample(time, position);\r
        }\r
        return property;\r
    }\r
\r
    let data =  [\r
        { longitude: 121, latitude: 33, height: 0, time: 0 },\r
        { longitude: 123, latitude: 32, height: 0, time: 180 },\r
        { longitude: 122, latitude: 31, height: 0, time: 400 }\r
    ]\r
    let property = computeFlight(data);\r
    let entity = viewer.entities.add({\r
        availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({\r
            start: start,  \r
            stop: stop\r
        })]),\r
        position: property,\r
        orientation: new Cesium.VelocityOrientationProperty(property),  // 根据速度计算方向角\r
        model: {\r
            uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/ship.glb', //gltf文件的URL\r
            scale: 0.05,     // 放大倍数\r
            silhouetteColor: Cesium.Color.fromCssColorString('rgba(0, 255, 0, 1)'),   // 船模型边框颜色\r
            silhouetteSize: 1,      // 船模型边框宽度\r
            minimumPixelSize: 128\r
        },\r
        path: {    // 船路径\r
            resolution: 1,\r
            material: new Cesium.PolylineGlowMaterialProperty({\r
                glowPower: 0.1,    // 颜色透明度\r
                color: Cesium.Color.fromCssColorString('rgba(0, 253, 239, 0.5)')   // 路线颜色\r
            }),\r
            width: 2  // 路线的显示宽度\r
        }\r
    });\r
    viewer.trackedEntity = entity;   // 视角跟随模型\r
}`,e4=`export function addAircraft(viewer) {\r
    const czml = [\r
        {\r
            id: "document",\r
            name: "SpaceX",\r
            version: "1.0",\r
            clock: {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",\r
                currentTime: "2019-08-28T04:00:00.00Z",\r
                multiplier: 1,\r
                range: "LOOP_STOP",\r
                step: "SYSTEM_CLOCK_MULTIPLIER"\r
                }\r
        },\r
        {\r
            id: "path",\r
            name: "path for Spacex",\r
            description: "<p>this is a description</p>",\r
            availability: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",\r
            path: {\r
                material: {\r
                    polylineOutline: {\r
                        color: {\r
                            rgba: [255, 0, 255, 255],\r
                        },\r
                        outlineColor: {\r
                            rgba: [0, 255, 255, 255],\r
                        },\r
                        outlineWidth: 5    \r
                    }, \r
                },\r
                width: 8,   // 折线宽度\r
                leadTime: 5,  \r
                trailTime: 50000,\r
                resolution: 5,\r
                },\r
                orientation: {\r
                "velocityReference": "#position"\r
                },\r
                model: {\r
                    gltf: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb',\r
                    // https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb\r
                    // https://gitee.com/jin-linchao/cesium-assets/raw/master/3Dmodel/Cesium_Air.glb  \r
                    minimumPixelSize: 128,\r
                },\r
                position: {\r
                    epoch: "2019-08-28T04:00:00.00Z",\r
                    cartographicDegrees: [\r
                        0, 120, 40, 65000,\r
                        1200, 130, 40, 80000\r
                    ]\r
                }\r
        },\r
    ];\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
    dataSourcePromise.then(function (dataSource) {\r
        // 根据模型所在的实体去进行加载\r
        viewer.trackedEntity = dataSource.entities.getById('path');\r
    }).catch(function (error) {\r
        console.error(error);\r
    });\r
}\r
`,t4=`export function addRobotArmAnimation(viewer) {\r
    const czml = [\r
        {\r
          id: "document",\r
          name: "CZML Model",\r
          version: "1.0",\r
          clock: {\r
            interval: "2015-01-01T00:00:00Z/2015-01-01T00:00:20Z",\r
            currentTime: "2015-01-01T00:00:00Z",\r
            multiplier: 20,\r
          },\r
        },\r
        {\r
          id: "model",\r
          position: {\r
            cartographicDegrees: [120, 30, 100000],\r
          },\r
          viewFrom: {\r
            cartesian: [4.3, 0.1, 2.6],\r
          },\r
          model: {\r
            gltf: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Man.glb",\r
            runAnimations: false,\r
            nodeTransformations: {\r
              Skeleton_arm_joint_L__3_: {\r
                rotation: {\r
                  epoch: "2015-01-01T00:00:00Z",\r
                  unitQuaternion: [\r
                    0,\r
                    -0.23381920887303329,\r
                    -0.6909886782144156,\r
                    -0.0938384854833712,\r
                    0.6775378681547408,\r
                    10,\r
                    -0.4924076887347565,\r
                    -0.6304934596091216,\r
                    0.20657864059632378,\r
                    0.563327551886459,\r
                    20,\r
                    -0.23381920887303329,\r
                    -0.6909886782144156,\r
                    -0.0938384854833712,\r
                    0.6775378681547408,\r
                  ],\r
                },\r
              },\r
              Skeleton_arm_joint_R__2_: {\r
                rotation: {\r
                  unitQuaternion: [\r
                    -0.2840422631464792,\r
                    -0.40211904424847345,\r
                    0.25175867757399086,\r
                    0.7063888981321548,\r
                  ],\r
                },\r
              },\r
            },\r
          },\r
        },\r
    ];\r
\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
    dataSourcePromise.then(function(dataSource) {\r
        // 根据模型所在的实体去进行加载\r
        viewer.trackedEntity = dataSource.entities.getById('model');\r
    }).catch(function(error) {\r
        console.error(error);\r
    });\r
}\r
`,n4=`export function addRealTimeDriver(viewer) {\r
    const czml = [\r
        {\r
            id: "document",\r
            name: "realTimeDriver",\r
            version: "1.0",\r
            clock: {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",\r
                currentTime: "2019-08-28T04:00:00.00Z",\r
                multiplier: 1,\r
                range: "LOOP_STOP",\r
                step: "SYSTEM_CLOCK_MULTIPLIER"\r
                }\r
        },\r
        {\r
            id: "realTimeDriver",\r
            name: "realTimeDriver",\r
            description: "<p>this is a realTimeDriver</p>",\r
            availability: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",\r
            position: {\r
                cartographicDegrees: [120, 30, 0]\r
            },\r
            model: {\r
                show: true,\r
                gltf: [\r
                    {\r
                        interval: "2019-08-28T04:00:00Z/9999-12-31T23:59:59.9999999Z",\r
                        uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Station.glb'\r
                    }\r
                ],\r
                minimumPixelSize: 128,\r
                scale: 1,\r
                runAnimations: true\r
            }\r
        },\r
    ];\r
\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
    dataSourcePromise.then(function (dataSource) {\r
        // 根据模型所在的实体去进行加载\r
        viewer.trackedEntity = dataSource.entities.getById('realTimeDriver');\r
    }).catch(function (error) {\r
        console.error(error);\r
    });\r
}\r
`,r4=`export function addCoordinateAxis(viewer) {\r
    const czml = [\r
        {\r
            id: "document",\r
            name: "SpaceX",\r
            version: "1.0",\r
            clock: {\r
              interval: "2019-08-28T04:00:00Z/2019-08-28T04:20:00Z",\r
              currentTime: "2019-08-28T04:00:00.00Z",\r
              multiplier: 1,\r
              range: "LOOP_STOP",\r
              step: "SYSTEM_CLOCK_MULTIPLIER"\r
              }\r
        },\r
        {\r
            id: "point",\r
            name: "point",\r
            position: {\r
              cartographicDegrees: [120.0, 30.0, 0],\r
            },\r
            point: {\r
              color: {\r
                rgba: [255, 255, 255, 255],\r
              },\r
              outlineColor: {\r
                rgba: [255, 0, 0, 255],\r
              },\r
              outlineWidth: 4,\r
              pixelSize: 20,\r
            },\r
          },\r
    ];\r
\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
    dataSourcePromise.then(function (dataSource) {\r
        // 根据模型所在的实体去进行加载\r
        viewer.trackedEntity = dataSource.entities.getById('point');\r
\r
        let matrix = viewer.trackedEntity?.computeModelMatrix(Cesium.JulianDate.fromIso8601('2019-08-28T04:00:00.00Z'))\r
        // 通过调试的实体来绘制模型坐标轴\r
        viewer.scene.primitives.add(\r
            new Cesium.DebugModelMatrixPrimitive({  // 加载模型偏移矩阵的图元\r
                modelMatrix: matrix,  // 设置偏移矩阵\r
                length: 100000,\r
                width: 10\r
            })\r
        );\r
    }).catch(function (error) {\r
      console.error(error);\r
    });\r
}\r
`,i4=`export function addMovingTargets(viewer) {\r
	// 定义开始时间\r
  let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间\r
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间\r
  let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒\r
\r
  viewer.clock.startTime = start.clone();  // 设置时钟开始时间\r
  viewer.clock.currentTime = start.clone();  // 设置时钟当前时间\r
  viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间\r
  viewer.clock.multiplier = 1;  // 设置时间倍数\r
  viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去\r
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始\r
\r
	// 模型的路径数据\r
  var data = [];\r
  data[0] = [\r
    { longitude:108.95847801120208, latitude:34.21765422118126, height: -3.948, time: 0 },\r
    { longitude:108.95849254781227, latitude:34.21800309998983, height: -3.839, time: 100 },\r
    { longitude:108.9594164044393, latitude:34.21802855891169, height: -2.579, time: 200 },\r
  ];\r
  data[1] = [\r
    { longitude:108.95950701639765, latitude:34.217844331494476, height: 60, time: 0 },\r
    { longitude:108.9595823050117, latitude:34.21968058035922, height: 60, time: 90 },\r
    { longitude:108.95962187417913, latitude:34.2203211325976, height: 60, time: 110 },\r
    { longitude:108.95893458332738, latitude:34.22035583250216, height: 60, time: 150 },\r
    { longitude:108.95890809899528, latitude:34.21925021094963, height: 60, time: 200 },\r
  ];\r
\r
	function computeFlight(source) {\r
		var property = new Cesium.SampledPositionProperty();\r
		for(var i = 0; i < source.length; i++) {\r
			var time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate ());\r
			var position =Cesium.Cartesian3.fromDegrees(source[i].longitude, source[i].latitude, source[i].height);\r
			property.addSample(time,position);\r
		}\r
		return property;\r
	}   \r
\r
  for(var j = 0; j < data.length; j++) {\r
    var property = computeFlight(data[j]);              \r
    // 添加模型\r
    if(j == 0){\r
			let entityCar = viewer.entities.add({\r
        id: "entities" + j,\r
 				availability: new Cesium.TimeIntervalCollection([ //要添加到集合中的间隔数组\r
    			new Cesium.TimeInterval({start: start, stop: stop}),\r
				]),\r
    		position: property,\r
				path: {\r
						resolution: 1, \r
						leadTime: 0, \r
						trailTime: 200,\r
						material: new Cesium.PolylineGlowMaterialProperty({\r
							glowPower: 0.1,\r
							color: Cesium.Color.ORANGE\r
						}),\r
						width: 10\r
				},\r
				orientation: new Cesium.VelocityOrientationProperty(property),\r
				model: {\r
					uri:'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/CesiumMilkTruck.glb',\r
					minimumPixelSize: 2,\r
				},\r
  		});\r
			// viewer.trackedEntity = entityCar;\r
		}\r
		else if(j == 1) {\r
			let entityAir = viewer.entities.add ({\r
				id:"entities" + j,\r
				availability: new Cesium.TimeIntervalCollection([\r
					new Cesium.TimeInterval({start: start, stop: stop}),\r
				]),\r
				position: property,\r
				path: {\r
						resolution: 1, \r
						leadTime: 0, \r
						trailTime: 200,\r
						material: new Cesium.PolylineGlowMaterialProperty({\r
							glowPower: 0.1,\r
							color: Cesium.Color.ORANGE\r
						}),\r
						width: 10\r
				},\r
				orientation: new Cesium.VelocityOrientationProperty(property),\r
				model: {\r
					uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb',\r
					minimumPixelSize: 2,\r
				},\r
			});\r
			viewer.trackedEntity = entityAir;\r
    }\r
	}\r
}`,s4=`export function addMovingTargetsWebsocket(viewer) {\r
  const ws = new WebSocket('ws://localhost:8080');\r
  ws.onopen = function() {\r
    console.log('连接开启');\r
  };\r
\r
  let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间\r
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间\r
  let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒\r
\r
  viewer.clock.startTime = start.clone();  // 设置时钟开始时间\r
  viewer.clock.currentTime = start.clone();  // 设置时钟当前时间\r
  viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间\r
  viewer.clock.multiplier = 1;  // 设置时间倍数\r
  viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去\r
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始\r
\r
  let modelArr = [];\r
  let pendingUpdates = {};\r
\r
  // 创建飞机\r
  function createModel(obj) {\r
    let property = new Cesium.SampledPositionProperty();\r
    property.setInterpolationOptions({\r
      interpolationDegree: 5,\r
      interpolationAlgorithm: Cesium.LagrangePolynomialApproximation,\r
    });\r
    let entity = viewer.entities.add({\r
      position: property,\r
      orientation: new Cesium.VelocityOrientationProperty(property),\r
      model: {\r
        uri: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb",\r
        minimumPixelSize: 60\r
      },\r
      path: {\r
        resolution: 1, \r
        leadTime: 0, \r
        trailTime: 200,\r
        material: new Cesium.PolylineGlowMaterialProperty({\r
          glowPower: 0.1,\r
          color: Cesium.Color.ORANGE\r
        }),\r
        width: 10\r
      }\r
    });\r
    entity.attr = {\r
      property: property,\r
      icao: obj.icao\r
    };\r
    return entity;\r
  }\r
\r
  // 获取模型\r
  function getModelById(id) {\r
    if (!id) return null;\r
    let obj = {};\r
    for (let i = 0; i < modelArr.length; i++) {\r
      let item = modelArr[i];\r
      if (id === item.attr.icao) {\r
        obj.index = i;\r
        obj.model = item;\r
        break;\r
      }\r
    }\r
    return obj;\r
  }\r
\r
  // 更新模型位置\r
  function updateModelPosition(icao, position, time) {\r
    let obj = getModelById(icao);\r
    if (obj.model) {\r
      obj.model.attr.property.addSample(time, position);\r
    }\r
  }\r
\r
  ws.onmessage = function(event) {\r
    const data = JSON.parse(event.data);\r
    console.log('Received data:', data);\r
\r
    let item = data; // 单个数据点\r
    let icao = item.icao;\r
    let position = Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude, item.altitude);\r
    let julianDate = Cesium.JulianDate.addSeconds(start, item.time, new Cesium.JulianDate());\r
\r
    // 存储待更新的数据\r
    pendingUpdates[icao] = { position, julianDate };\r
\r
    // 延迟几秒钟再更新位置\r
    setTimeout(() => {\r
      if (pendingUpdates[icao]) {\r
        let obj = getModelById(icao);\r
        if (!obj.model) {\r
          // 如果模型不存在，创建模型\r
          obj.model = createModel(item);\r
          modelArr.push(obj.model);\r
        }\r
        updateModelPosition(icao, pendingUpdates[icao].position, pendingUpdates[icao].julianDate);\r
        delete pendingUpdates[icao];\r
      }\r
    }, 3000); // 延迟3秒钟\r
  };\r
\r
  ws.onclose = function() {\r
    console.log('连接关闭');\r
  };\r
}`,o4=`export function addMovingTargetsSocketIO(viewer) {\r
    const socket = io('http://localhost:8080');\r
  \r
    socket.on('connect', function() {\r
      console.log('连接开启');\r
    });\r
  \r
    let start = Cesium.JulianDate.fromDate(new Date());  // 设置时间轴当前时间为开始时间\r
    start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());   // 开始时间加8小时改为北京时间\r
    let stop = Cesium.JulianDate.addSeconds(start, 400, new Cesium.JulianDate());   // 设置结束时间为开始时间加400秒\r
  \r
    viewer.clock.startTime = start.clone();  // 设置时钟开始时间\r
    viewer.clock.currentTime = start.clone();  // 设置时钟当前时间\r
    viewer.clock.stopTime = stop.clone();  // 设置时钟结束时间\r
    viewer.clock.multiplier = 1;  // 设置时间倍数\r
    viewer.timeline.zoomTo(start, stop);  // 时间轴绑定到viewer上去\r
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;  // 循环执行，到达终止时间，重新从起点时间开始\r
  \r
    let modelArr = [];\r
    let pendingUpdates = {};\r
  \r
    // 创建飞机\r
    function createModel(obj) {\r
      let property = new Cesium.SampledPositionProperty();\r
      property.setInterpolationOptions({\r
        interpolationDegree: 5,\r
        interpolationAlgorithm: Cesium.LagrangePolynomialApproximation,\r
      });\r
      let entity = viewer.entities.add({\r
        position: property,\r
        orientation: new Cesium.VelocityOrientationProperty(property),\r
        model: {\r
          uri: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb",\r
          minimumPixelSize: 60\r
        },\r
        path: {\r
          resolution: 1, \r
          leadTime: 0, \r
          trailTime: 200,\r
          material: new Cesium.PolylineGlowMaterialProperty({\r
            glowPower: 0.1,\r
            color: Cesium.Color.ORANGE\r
          }),\r
          width: 10\r
        }\r
      });\r
      entity.attr = {\r
        property: property,\r
        icao: obj.icao\r
      };\r
      return entity;\r
    }\r
  \r
    // 获取模型\r
    function getModelById(id) {\r
      if (!id) return null;\r
      let obj = {};\r
      for (let i = 0; i < modelArr.length; i++) {\r
        let item = modelArr[i];\r
        if (id === item.attr.icao) {\r
          obj.index = i;\r
          obj.model = item;\r
          break;\r
        }\r
      }\r
      return obj;\r
    }\r
  \r
    // 更新模型位置\r
    function updateModelPosition(icao, position, time) {\r
      let obj = getModelById(icao);\r
      if (obj.model) {\r
        obj.model.attr.property.addSample(time, position);\r
      }\r
    }\r
  \r
    socket.on('waypoint', function(data) {\r
        console.log('Received data:', data);\r
      const item = data; // 单个数据点\r
      const icao = item.icao;\r
      const position = Cesium.Cartesian3.fromDegrees(item.longitude, item.latitude, item.altitude);\r
      const julianDate = Cesium.JulianDate.addSeconds(start, item.time, new Cesium.JulianDate());\r
  \r
      // 存储待更新的数据\r
      pendingUpdates[icao] = { position, julianDate };\r
  \r
      // 延迟几秒钟再更新位置\r
      setTimeout(() => {\r
        if (pendingUpdates[icao]) {\r
          let obj = getModelById(icao);\r
          if (!obj.model) {\r
            // 如果模型不存在，创建模型\r
            obj.model = createModel(item);\r
            modelArr.push(obj.model);\r
          }\r
          updateModelPosition(icao, pendingUpdates[icao].position, pendingUpdates[icao].julianDate);\r
          delete pendingUpdates[icao];\r
        }\r
      }, 3000); // 延迟3秒钟\r
    });\r
  \r
    socket.on('disconnect', function() {\r
      console.log('连接关闭');\r
    });\r
  }\r
  `,a4=`export function addClickOnPath(viewer) {\r
    // 存储路径点\r
    const pathPoints = [];\r
\r
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);\r
    // 处理鼠标左键点击事件\r
    handler.setInputAction(function(movement) {\r
        const cartesian = viewer.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid);\r
        if (cartesian) {\r
            pathPoints.push(cartesian);\r
            viewer.entities.add({\r
                point: {\r
                    pixelSize: 10,\r
                    color: Cesium.Color.RED,\r
                    position: cartesian\r
                }\r
            });\r
\r
            // 如果路径点数量大于1，绘制路径线\r
            if (pathPoints.length > 1) {\r
                const linePositions = pathPoints.slice(-2); // 获取最后两个点\r
                viewer.entities.add({\r
                    polyline: {\r
                        positions: linePositions,\r
                        width: 2,\r
                        material: Cesium.Color.YELLOW\r
                    }\r
                });\r
            }\r
        }\r
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);\r
    \r
    // 处理鼠标右键点击事件，开始动画\r
    handler.setInputAction(function() {\r
        if (pathPoints.length < 2) {\r
            alert('至少绘制两个点');\r
            return;\r
        }\r
        // 创建一个动态模型\r
        const modelEntity = viewer.entities.add({\r
            model: {\r
                uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/Cesium_Air.glb',\r
                scale: 100,\r
                minimumPixelSize: 128,\r
            },\r
            position: new Cesium.CallbackProperty(function(time, result) {\r
                const t = (time.secondsOfDay % 20) / 20; // 20秒完成一个循环\r
                const index = Math.floor(t * (pathPoints.length - 1));\r
                const start = pathPoints[index];\r
                const end = pathPoints[index + 1];\r
                const fraction = (t * (pathPoints.length - 1)) % 1;\r
                return Cesium.Cartesian3.lerp(start, end, fraction, result);\r
            }, false),\r
            orientation: new Cesium.VelocityOrientationProperty(new Cesium.CallbackProperty(function(time, result) {\r
                const t = (time.secondsOfDay % 20) / 20; // 20秒完成一个循环\r
                const index = Math.floor(t * (pathPoints.length - 1));\r
                const start = pathPoints[index];\r
                const end = pathPoints[index + 1];\r
                const fraction = (t * (pathPoints.length - 1)) % 1;\r
                return Cesium.Cartesian3.lerp(start, end, fraction, result);\r
            }, false))\r
        });\r
        // 开始动画\r
        viewer.clock.shouldAnimate = true;\r
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);\r
}`,l4=`export function addMissileLaunch(viewer) {\r
    var czml =\r
      [\r
        {\r
          id: "document",\r
          name: "Missile",\r
          version: "1.0",\r
          clock: {\r
            interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
            currentTime: "2019-08-28T04:00:00.00Z",\r
            multiplier: 1,\r
            range: "LOOP_STOP",\r
            step: "SYSTEM_CLOCK_MULTIPLIER"\r
          }\r
        },     \r
        {\r
          id: "MissileLaunch",\r
          availability: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
          name: "MissileLaunch",\r
          path: {\r
            show: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
                boolean: true\r
              }\r
            ],\r
            width: 1,\r
            resolution: 86400,\r
            leadTime: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1053,\r
                  1053, 0\r
                ]\r
              }\r
            ],\r
            trailTime: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  1053, 1053\r
                ]\r
              }\r
            ],\r
            material: {\r
              solidColor: {\r
                color: [\r
                  {\r
                    rgba: [ 0, 255, 0, 255 ]\r
                  }\r
                ]\r
              }\r
            }\r
          },\r
          model: {\r
            show: true,\r
            gltf: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/9999-12-31T23:59:59.9999999Z",\r
                uri: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/MissileTwo.glb"\r
              }\r
            ],\r
            minimumPixelSize: 128,\r
            scale: 1,\r
            runAnimations: false,\r
            articulations: {\r
              "SRBFlames Size": {\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                    0, 1,\r
                    60, 1,\r
                    61, 0, \r
                    1000,0\r
                ]\r
              },\r
            }\r
          },\r
          position: {\r
            interpolationAlgorithm: "LAGRANGE",\r
            interpolationDegree: 5,\r
            referenceFrame: "FIXED",\r
            epoch: "2019-08-28T04:00:00Z",\r
            cartesian: [\r
              0.000, 917843.164, -5530578.249, 3031358.548,\r
              5.000, 917858.034, -5530668.136, 3031408.144,\r
              10.000, 917904.041, -5530947.370, 3031562.198,\r
              15.000, 917995.379, -5531429.784, 3031827.039,\r
              20.000, 918185.888, -5532123.853, 3032201.781,\r
              25.000, 918522.148, -5533037.209, 3032685.775,\r
              30.000, 919039.536, -5534178.813, 3033280.277,\r
              35.000, 919765.781, -5535552.193, 3033984.231,\r
              40.000, 920725.932, -5537159.564, 3034796.104,\r
              45.000, 921951.333, -5539013.869, 3035719.776,\r
              50.000, 923478.083, -5541133.458, 3036761.666,\r
              55.000, 925347.644, -5543541.795, 3037930.491,\r
              60.000, 927605.957, -5546265.685, 3039236.339,\r
              65.000, 930159.431, -5549170.295, 3040612.213,\r
              70.000, 932893.237, -5552105.857, 3041984.985,\r
              75.000, 935823.252, -5555076.264, 3043355.017,\r
              80.000, 938964.862, -5558083.710, 3044721.750,\r
              85.000, 942333.298, -5561129.288, 3046084.004,\r
              90.000, 945943.826, -5564213.327, 3047440.156,\r
              95.000, 949811.859, -5567335.599, 3048788.235,\r
              100.000, 953953.060, -5570495.476, 3050126.007,\r
              105.000, 958383.411, -5573692.036, 3051451.024,\r
              110.000, 963119.273, -5576924.135, 3052760.660,\r
              115.000, 968177.426, -5580190.468, 3054052.136,\r
              120.000, 973575.121, -5583489.609, 3055322.543,\r
              125.000, 979330.120, -5586820.054, 3056568.856,\r
              130.000, 985460.755, -5590180.254, 3057787.947,\r
              135.000, 991985.993, -5593568.654, 3058976.602,\r
              140.000, 998925.515, -5596983.723, 3060131.528,\r
              145.000, 1006299.806, -5600423.996, 3061249.362,\r
              150.000, 1014130.264, -5603888.099, 3062326.677,\r
              155.000, 1022439.320, -5607374.791, 3063359.991,\r
              160.000, 1031250.582, -5610882.993, 3064345.765,\r
              165.000, 1040588.998, -5614411.827, 3065280.405,\r
              170.000, 1050481.047, -5617960.649, 3066160.261,\r
              175.000, 1060954.957, -5621529.087, 3066981.622,\r
              180.000, 1072040.964, -5625117.088, 3067740.708,\r
              185.000, 1083771.619, -5628724.957, 3068433.661,\r
              190.000, 1096182.138, -5632353.415, 3069056.535,\r
              195.000, 1109310.838, -5636003.654, 3069605.272,\r
              200.000, 1123199.643, -5639677.407, 3070075.687,\r
              205.000, 1137894.713, -5643377.031, 3070463.435,\r
              210.000, 1153447.204, -5647105.606, 3070763.982,\r
              215.000, 1169914.223, -5650867.058, 3070972.558,\r
              220.000, 1187360.015, -5654666.310, 3071084.105,\r
              225.000, 1205857.496, -5658509.476, 3071093.203,\r
              230.000, 1225490.224, -5662404.112, 3070993.980,\r
              235.000, 1245704.746, -5666236.399, 3070784.103,\r
              240.000, 1265936.771, -5669896.839, 3070465.398\r
            ]\r
          },\r
          orientation: {\r
            "interpolationAlgorithm": "LINEAR",\r
            "interpolationDegree": 1,\r
            "epoch": "2019-08-28T04:00:00Z",\r
            "velocityReference": "#position"  // 方向的参考属性，指向实体的位置属性\r
          }\r
        }\r
      ]\r
\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
\r
    dataSourcePromise.then(function (dataSource) {\r
      viewer.trackedEntity = dataSource.entities.getById('MissileLaunch');\r
    }).catch(function (error) {\r
      console.error(error);\r
    });\r
}\r
  `,c4=`let viewer = null;\r
let cesiumInitialized = false;  // 判断是初始化还是触发导弹发射函数\r
\r
export function addMissileMobileLaunch(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId) {\r
    if (!cesiumInitialized) {\r
        const script = document.createElement('script');\r
        script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';\r
        script.onload = () => {\r
            window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'\r
            viewer = new Cesium.Viewer('cesiumContainer', {\r
                shouldAnimate: true  // 一开始就播放动画\r
            });\r
            cesiumInitialized = true;\r
            // addMissile(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId);  // 一开始是否自动发射一次导弹\r
        };\r
        document.head.appendChild(script);\r
\r
        const link = document.createElement('link');\r
        link.rel = 'stylesheet';\r
        link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';\r
        document.head.appendChild(link);\r
    } else {\r
        addMissile(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId);  // 点击导弹发射按钮时触发\r
    }\r
}\r
\r
/**\r
 * startLon：导弹发射起点的的经度\r
 * startLat：导弹发射起点的的纬度\r
 * startHeight：：导弹发射起点的的高度\r
 * endLon：导弹发射终点的的经度\r
 * endLat：导弹发射终点的的纬度\r
 * endHeight：导弹发射终点的高度\r
 * missileId：导弹的id\r
 */\r
function addMissile(startLon, startLat, startHeight, endLon, endLat, endHeight, missileId) {\r
    const numPoints = 600; // 生成路径的点数\r
    const cartesianData = generateArcPath(startLon, startLat, startHeight, endLon, endLat, endHeight, numPoints);  // 通过generateArcPath函数生成路径\r
\r
    const now = Cesium.JulianDate.toIso8601(viewer.clock.currentTime);  // 获取当前的时刻\r
    \r
    // 构造导弹的cmzl数组\r
    var czml =\r
        [\r
            {\r
                id: "document",\r
                name: "Missile",\r
                version: "1.0",\r
                clock: {\r
                    currentTime: \`\${now}\`,\r
                    multiplier: 1,\r
                    range: "LOOP_STOP",\r
                    step: "SYSTEM_CLOCK_MULTIPLIER"\r
                }\r
            },\r
            {\r
                id: \`MissileLaunch\${missileId}\`,\r
                name: \`MissileLaunch\${missileId}\`,\r
                path: {\r
                    show: true,\r
                    width: 1,\r
                    resolution: 86400,\r
                    leadTime: 500,\r
                    trailTime: 500,\r
                    material: {\r
                        solidColor: {\r
                            color: {\r
                                rgba: [0, 255, 0, 255] // 设置轨迹颜色为绿色\r
                            }\r
                        }\r
                    }\r
                },\r
                model: {\r
                    show: true,\r
                    gltf: [\r
                        {\r
                            interval: \`\${now}/9999-12-31T23:59:59.9999999Z\`,\r
                            uri: "https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/MissileTwo.glb"\r
                        }\r
                    ],\r
                    minimumPixelSize: 128,\r
                    scale: 1,\r
                    runAnimations: false,\r
                },\r
                position: {\r
                    interpolationAlgorithm: "LAGRANGE",\r
                    interpolationDegree: 5,\r
                    referenceFrame: "FIXED",\r
                    epoch: \`\${now}\`,\r
                    cartographicDegrees: cartesianData\r
                },\r
                orientation: {\r
                    "interpolationAlgorithm": "LINEAR",\r
                    "interpolationDegree": 1,\r
                    "epoch": \`\${now}\`,\r
                    "velocityReference": "#position"  // 方向的参考属性，指向实体的位置属性\r
                }\r
            }\r
        ]\r
\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
\r
    dataSourcePromise.then(function (dataSource) {\r
        viewer.trackedEntity = dataSource.entities.getById('MissileLaunch0');\r
    }).catch(function (error) {\r
        console.error(error);\r
    });\r
}\r
\r
// 路径生成函数，通过传入起点和终点的经纬度和高度信息，生成路径数组\r
function generateArcPath(startLon, startLat, startHeight, endLon, endLat, endHeight, numPoints) {\r
    const startCartographic = new Cesium.Cartographic(Cesium.Math.toRadians(startLon), Cesium.Math.toRadians(startLat), startHeight);\r
    const endCartographic = new Cesium.Cartographic(Cesium.Math.toRadians(endLon), Cesium.Math.toRadians(endLat), endHeight);\r
\r
    const geodesic = new Cesium.EllipsoidGeodesic(startCartographic, endCartographic);  // EllipsoidGeodesic 对象用于计算地球表面上两点之间的最短路径（测地线）\r
\r
    const cartesianArray = [];\r
    for (let i = 0; i <= numPoints; i++) {  // 使用循环生成路径上的点，点的数量由 numPoints 决定\r
        const fraction = i / numPoints;  // fraction 表示当前点在起点和终点之间的比例\r
        const intermediateCartographic = geodesic.interpolateUsingFraction(fraction);\r
        const intermediateHeight = Cesium.Math.lerp(startHeight, endHeight, fraction);  // 计算当前点的地理坐标（弧度）\r
        const intermediatePosition = Cesium.Cartographic.toCartesian(intermediateCartographic);  // 将地理坐标转换为笛卡尔坐标\r
        const cartographic = Cesium.Cartographic.fromCartesian(intermediatePosition);  // 将笛卡尔坐标转换回地理坐标\r
        const lon = Cesium.Math.toDegrees(cartographic.longitude);\r
        const lat = Cesium.Math.toDegrees(cartographic.latitude);\r
        cartesianArray.push(i * (240 / numPoints), lon, lat, intermediateHeight);\r
    }\r
    return cartesianArray;\r
}`,u4=`export function addRocketLaunch(viewer) {\r
    var czml =\r
      [\r
        {\r
          id: "document",\r
          name: "SpaceX",\r
          version: "1.0",\r
          clock: {\r
            interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
            currentTime: "2019-08-28T04:00:00.00Z",\r
            multiplier: 1,\r
            range: "LOOP_STOP",\r
            step: "SYSTEM_CLOCK_MULTIPLIER"\r
          }\r
        },     \r
        {\r
          id: "Vulcan",\r
          availability: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
          name: "Vulcan",\r
          path: {\r
            show: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
                boolean: true\r
              }\r
            ],\r
            width: 1,\r
            resolution: 86400,\r
            leadTime: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1053,\r
                  1053, 0\r
                ]\r
              }\r
            ],\r
            trailTime: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:04:00Z",\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  1053, 1053\r
                ]\r
              }\r
            ],\r
            material: {\r
              solidColor: {\r
                color: [\r
                  {\r
                    rgba: [ 0, 255, 0, 255 ]\r
                  }\r
                ]\r
              }\r
            }\r
          },\r
          model: {\r
            show: true,\r
            gltf: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/9999-12-31T23:59:59.9999999Z",\r
                uri: "https://cesium.com/public/SandcastleSampleData/launchvehicle.glb"\r
              }\r
            ],\r
            minimumPixelSize: 128,\r
            scale: 1,\r
            runAnimations: false,\r
            articulations: {   // 定义动画参数\r
              "BoosterFlames Size": {   // 二级发动机底部火焰样式的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  180, 1,\r
                  182, 0,\r
                  1000,0                  \r
                ]\r
              },\r
              "Booster MoveZ": {  // 二级发动机随着z轴向下掉落的情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  180, 0,\r
                  200, -300,\r
                  1000,-300\r
                ]\r
              },\r
              "Booster Yaw": {\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  190, 0,\r
                  200, 90,\r
                  1000, 90\r
                ]\r
              },\r
              "Booster Size": {  // 二级发动机随时间变化的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  200, 1,\r
                  201, 0,\r
                  1000,0\r
                ]\r
              },\r
              "InterstageAdapter MoveZ": {\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  180, 0,\r
                  200, -300,\r
                  1000,-300\r
                ]\r
              },\r
              "InterstageAdapter Size": {\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  190, 1,\r
                  191, 0, \r
                  1000,0\r
                ]\r
              },\r
\r
              "SRBFlames Size": {   // 一级助推器底部火焰随时间变化的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  60, 1,\r
                  61, 0, \r
                  1000,0\r
                ]\r
              },\r
              "SRBs Separate": {  // 一级助推器分开的距离\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  61, 0,\r
                  71, 40,\r
                  1000,40\r
                ]\r
              },\r
              "SRBs Drop": {  // 一级助推器掉落：随时间的变化掉落的距离，负号表示向下掉落\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  61, 0,\r
                  71, -150,\r
                  1000,-150\r
                ]\r
              },\r
              "SRBs Rotate": {  // 一级助推器掉落的张开角度随时间的变化，张开的角度单位为度\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  61, 0,\r
                  71, 120,\r
                  1000,120\r
                ]\r
              },\r
              "SRBs Size": {  // 一级助推器的显示和消失情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,1,\r
                  70, 1,\r
                  71, 0, \r
                  1000,0\r
                ]\r
              },\r
              "UpperStageFlames Size": {   // 顶部卫星仓助推器底部火焰随时间变化的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  181, 0,\r
                  182, 1,\r
                  1000,1,\r
                  1001,0,\r
                  1050,0\r
                ]\r
              },\r
              "Fairing Open": {  // 整流罩随时间的变化而打开的角度\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  200, 0,\r
                  210, 120,  // 第210秒时，打开的角度为120度\r
                  1000,120\r
                ]\r
              },\r
              "Fairing Separate": {  // 整流罩分离：随时间的变化分离出去的距离，负号表示往外部分离\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  200, 0,\r
                  210, -50,\r
                  1000,-50\r
                ]\r
              },\r
              "Fairing Drop": {  // 整流罩掉落：随时间的变化掉落的距离，负号表示向下掉落\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  202, 0,\r
                  210, -150,\r
                  1000,-150\r
                ]\r
              },\r
              "Fairing Size": {  // 整流罩的显示和消失：1表示显示，0表示消失\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  215, 1,\r
                  216, 0, \r
                  1000,0\r
                ]\r
              }\r
\r
            }\r
          },\r
          position: {\r
            interpolationAlgorithm: "LAGRANGE",\r
            interpolationDegree: 5,\r
            referenceFrame: "FIXED",\r
            epoch: "2019-08-28T04:00:00Z",\r
            cartesian: [\r
              0.000, 917843.164, -5530578.249, 3031358.548,\r
              5.000, 917858.034, -5530668.136, 3031408.144,\r
              10.000, 917904.041, -5530947.370, 3031562.198,\r
              15.000, 917995.379, -5531429.784, 3031827.039,\r
              20.000, 918185.888, -5532123.853, 3032201.781,\r
              25.000, 918522.148, -5533037.209, 3032685.775,\r
              30.000, 919039.536, -5534178.813, 3033280.277,\r
              35.000, 919765.781, -5535552.193, 3033984.231,\r
              40.000, 920725.932, -5537159.564, 3034796.104,\r
              45.000, 921951.333, -5539013.869, 3035719.776,\r
              50.000, 923478.083, -5541133.458, 3036761.666,\r
              55.000, 925347.644, -5543541.795, 3037930.491,\r
              60.000, 927605.957, -5546265.685, 3039236.339,\r
              65.000, 930159.431, -5549170.295, 3040612.213,\r
              70.000, 932893.237, -5552105.857, 3041984.985,\r
              75.000, 935823.252, -5555076.264, 3043355.017,\r
              80.000, 938964.862, -5558083.710, 3044721.750,\r
              85.000, 942333.298, -5561129.288, 3046084.004,\r
              90.000, 945943.826, -5564213.327, 3047440.156,\r
              95.000, 949811.859, -5567335.599, 3048788.235,\r
              100.000, 953953.060, -5570495.476, 3050126.007,\r
              105.000, 958383.411, -5573692.036, 3051451.024,\r
              110.000, 963119.273, -5576924.135, 3052760.660,\r
              115.000, 968177.426, -5580190.468, 3054052.136,\r
              120.000, 973575.121, -5583489.609, 3055322.543,\r
              125.000, 979330.120, -5586820.054, 3056568.856,\r
              130.000, 985460.755, -5590180.254, 3057787.947,\r
              135.000, 991985.993, -5593568.654, 3058976.602,\r
              140.000, 998925.515, -5596983.723, 3060131.528,\r
              145.000, 1006299.806, -5600423.996, 3061249.362,\r
              150.000, 1014130.264, -5603888.099, 3062326.677,\r
              155.000, 1022439.320, -5607374.791, 3063359.991,\r
              160.000, 1031250.582, -5610882.993, 3064345.765,\r
              165.000, 1040588.998, -5614411.827, 3065280.405,\r
              170.000, 1050481.047, -5617960.649, 3066160.261,\r
              175.000, 1060954.957, -5621529.087, 3066981.622,\r
              180.000, 1072040.964, -5625117.088, 3067740.708,\r
              185.000, 1083771.619, -5628724.957, 3068433.661,\r
              190.000, 1096182.138, -5632353.415, 3069056.535,\r
              195.000, 1109310.838, -5636003.654, 3069605.272,\r
              200.000, 1123199.643, -5639677.407, 3070075.687,\r
              205.000, 1137894.713, -5643377.031, 3070463.435,\r
              210.000, 1153447.204, -5647105.606, 3070763.982,\r
              215.000, 1169914.223, -5650867.058, 3070972.558,\r
              220.000, 1187360.015, -5654666.310, 3071084.105,\r
              225.000, 1205857.496, -5658509.476, 3071093.203,\r
              230.000, 1225490.224, -5662404.112, 3070993.980,\r
              235.000, 1245704.746, -5666236.399, 3070784.103,\r
              240.000, 1265936.771, -5669896.839, 3070465.398\r
            ]\r
          },\r
          orientation: {  // 火箭的飞行方位\r
            "interpolationAlgorithm": "LINEAR",\r
            "interpolationDegree": 1,\r
            "epoch": "2019-08-28T04:00:00Z",\r
            "unitQuaternion":[\r
                0,0.722984469848251,-0.640384836496241,0.1341966101407179,0.22179266753133725,\r
                1,0.7229621157600349,-0.6404100730249704,0.13418886803435182,0.22179735174159645,\r
                2,0.7229341719109916,-0.6404416175885533,0.13417919017146634,0.22180320662437597,\r
                3,0.7229118158407721,-0.6404668523615189,0.13417144769722708,0.2218078902265571,\r
                4,0.7228894588897065,-0.6404920863540949,0.1341637050595041,0.221812573558472,\r
                5,0.7228671010578217,-0.640517319566251,0.13415596225830653,0.22181725662011503,\r
                6,0.7228447423451456,-0.6405425519979558,0.1341482192936441,0.22182193941148037,\r
                7,0.7228223827517051,-0.6405677836491793,0.13414047616552616,0.2218266219325625,\r
                8,0.7227944320213707,-0.6405993221156093,0.1341307970255337,0.22183247470382064,\r
                9,0.7227720704463099,-0.6406245520106364,0.1341230535296753,0.2218371566167444,\r
                10,0.722749707990573,-0.640649781125082,0.134115309870392,0.22184183825936643,\r
                11,0.7325985472067631,-0.6293624931834747,0.13064613932779767,0.22390579957464835,\r
                12,0.7416083208967981,-0.6187227849782444,0.12738149256427075,0.2257723833366159,\r
                13,0.7496089384666046,-0.6090034537366417,0.12441210328180824,0.2274266063256652,\r
                14,0.7566950556907154,-0.6001769297758566,0.12172169094359413,0.22887567719590476,\r
                15,0.7629658687060288,-0.5921842543557891,0.11928679534425676,0.2301554964349763,\r
                16,0.7685412426700112,-0.5849307747978074,0.11708218395535598,0.23128361206517822,\r
                17,0.7735197352842451,-0.5783323021042686,0.11508609564909775,0.23228034367293188,\r
                18,0.7779989429811806,-0.5722934906574213,0.11325822014089924,0.23317457160210564,\r
                19,0.7820447068562919,-0.5667494671191624,0.11158321266182447,0.2339878301328258,\r
                20,0.7857428294641052,-0.5616113363579892,0.11002538769157115,0.23472393760171792,\r
                21,0.7891461106505435,-0.5568181934274639,0.10857868487821491,0.2353987780414613,\r
                22,0.79230456700711,-0.5523137313791615,0.107221861192316,0.23602221868323944,\r
                23,0.7952586692171513,-0.5480523699650737,0.10593524499869424,0.23660087209834713,\r
                24,0.7980471659162047,-0.5439859717925845,0.10471182383580174,0.23714007973130838,\r
                25,0.8006912263339976,-0.5400869456277596,0.10353419711942355,0.2376558883366305,\r
                26,0.8032153043618433,-0.5363249613045822,0.10239490490422824,0.23815120022835054,\r
                27,0.8056403386998425,-0.5326743229140798,0.10130131555156709,0.23862052266129902,\r
                28,0.807975722954782,-0.5291252497853631,0.10022815397318326,0.23907324883056746,\r
                29,0.8102414398418379,-0.5256510650816937,0.09918308373340579,0.23950466142152355,\r
                30,0.8124391030025412,-0.522247710031348,0.09815844253422763,0.23992697522099127,\r
                31,0.8145856585347871,-0.518894751499507,0.09715266934739455,0.24033268736147384,\r
                32,0.8166822362480016,-0.515587625585817,0.09615840083425449,0.24073447465774764,\r
                33,0.8187361296400982,-0.5123191149208184,0.09518193163489921,0.24112377402270196,\r
                34,0.8207414276273278,-0.5090979173480034,0.09421635596685385,0.24150796632100663,\r
                35,0.8227253722022236,-0.5058880901501561,0.09325700026747816,0.2418746247129944,\r
                36,0.8246729983428778,-0.5027063448842031,0.09229802469484022,0.24224337195218226,\r
                37,0.8265911022394841,-0.4995447338529317,0.0913576381673436,0.24260253610958654,\r
                38,0.8284866973678142,-0.4963963826904395,0.09041834619241051,0.24295050155998488,\r
                39,0.8303492157699334,-0.49327653108604985,0.08948319541288496,0.24329241971066345,\r
                40,0.832179034722444,-0.4901796314731287,0.08855736933761801,0.24363820593923669,\r
                41,0.8339829649987511,-0.4871040396510243,0.08764172360965199,0.2439692540675458,\r
                42,0.8357550056433899,-0.48405819693238505,0.08672961562788395,0.24429327927232303,\r
                43,0.8375039768869902,-0.48102789348165864,0.08582510062339338,0.24460847592440157,\r
                44,0.8392196226146338,-0.4780286978557113,0.08493131160125073,0.2449197038921454,\r
                45,0.8409065297569724,-0.47505373707104714,0.08405021505667468,0.24522584785426924,\r
                46,0.8425672254303463,-0.47210276693783637,0.0831740143109325,0.245522975347831,\r
                47,0.8441917042243813,-0.4691915391380762,0.08230585737070253,0.24581580901653052,\r
                48,0.8457926861516801,-0.46629839428605463,0.08145200522621647,0.24610182929673877,\r
                49,0.8473604654979634,-0.46344514222922234,0.08059818108170497,0.24637933123850222,\r
                50,0.848895274698886,-0.46062626680164803,0.07976167741060064,0.24665427169000578,\r
                51,0.8504058170506538,-0.45783329402107603,0.07892913012113871,0.24691863767350847,\r
                52,0.8518842109357959,-0.4550755392415173,0.0781135830573011,0.24717971778503386,\r
                53,0.8533290685300448,-0.45236010377112756,0.07730502499229158,0.24743437600455231,\r
                54,0.8547487289876081,-0.44967249849528756,0.07650759936307315,0.2476809270629727,\r
                55,0.856137540465226,-0.44702138845545103,0.07572670897708635,0.24792308407450525,\r
                56,0.8574941514984157,-0.4444138239434401,0.07495230522090124,0.24815778282386025,\r
                57,0.8588245831812935,-0.4418358649026012,0.07418469103906461,0.2483908923948024,\r
                58,0.8601237658344255,-0.4393024497904642,0.0734348588242122,0.24861171847757124,\r
                59,0.8613975429637984,-0.43679935056279556,0.07269154573646026,0.24883034280870023,\r
                60,0.8626425656913194,-0.4343346967287153,0.07196405145847498,0.24904286854426227,\r
                61,0.8638613011316026,-0.43190791992292366,0.07124444884135524,0.2492457213762348,\r
                62,0.8650794986226389,-0.4294594703659661,0.07051940397140763,0.24945748743885257,\r
                63,0.866303358187329,-0.42698703347444417,0.06978864622289685,0.24965998817677165,\r
                64,0.8675247615975736,-0.4244996712882718,0.0690540316653712,0.24986467898040404,\r
                65,0.8687457663026229,-0.42199673384990505,0.0683192561762648,0.2500640505686554,\r
                66,0.8699638913654857,-0.4194783242470369,0.06756911569143621,0.2502702095971403,\r
                67,0.8711815373525268,-0.4169446886078629,0.06683025899740841,0.2504667085664667,\r
                68,0.872396030060593,-0.41439544173754045,0.06607604899951863,0.25067018241162864,\r
                69,0.8736096052661125,-0.41183041504637946,0.06532158618894394,0.25086860546364603,\r
                70,0.8748185658528208,-0.40925721188757785,0.06456462793199086,0.25106258219261496,\r
                71,0.8760242089450097,-0.40666874578276263,0.06380376107999494,0.25125922195571637,\r
                72,0.8772250700011747,-0.4040720724929827,0.06304033358066966,0.25145149260781446,\r
                73,0.8784210886202233,-0.4014671947586772,0.062274288675877684,0.2516394157714044,\r
                74,0.8796102734695433,-0.3988552954353598,0.06151346645365964,0.25182595885821946,\r
                75,0.8807976927413184,-0.3962268799812875,0.06074076591003073,0.2520123873910319,\r
                76,0.8819746918961102,-0.3935991476535796,0.05997103865079627,0.2521979943304108,\r
                77,0.8831500316475032,-0.39095554086977036,0.059200731122120674,0.25237880279224323,\r
                78,0.8843145988039058,-0.38831197869763806,0.05842199466354925,0.2525635921540245,\r
                79,0.885476171483691,-0.385659744177895,0.05764377388591624,0.2527364373955905,\r
                80,0.8866284108050373,-0.38300113632352617,0.05686720164520158,0.25291562250139027,\r
                81,0.8877701714256424,-0.38034344898901645,0.056093424068938344,0.253093878460636,\r
                82,0.8889106854455648,-0.3776759049647196,0.055311991271769875,0.2532573547428149,\r
                83,0.8900366682798302,-0.37501118681538037,0.05453789543774942,0.253430378687877,\r
                84,0.8911591126362606,-0.3723371312274947,0.053752732071339196,0.25359641257221865,\r
                85,0.8922692685449742,-0.36966556490059643,0.05297814927075059,0.25376413898891553,\r
                86,0.8933780196087484,-0.36698424372022587,0.05219558503510628,0.2539171121525444,\r
                87,0.894472302970718,-0.3643060268167945,0.0514202990088939,0.2540794578336802,\r
                88,0.8955579549484225,-0.3616277717359422,0.05063949521931818,0.25423797033847884,\r
                89,0.89663544104202,-0.358950504001712,0.04986425335784957,0.25438745602203633,\r
                90,0.8977021123484203,-0.35627374913297,0.04908022965732064,0.2545408890938871,\r
                91,0.8987615433534971,-0.353590713146195,0.04830076340466603,0.25469262262604286,\r
                92,0.8998098059136085,-0.3509167430790577,0.04752443216298646,0.25483559593606003,\r
                93,0.9008478307810204,-0.34824451734815576,0.04675030710787176,0.25497715721099373,\r
                94,0.9018764506784298,-0.3455666504284122,0.04597755753340023,0.25512471857236496,\r
                95,0.9028957906887609,-0.3428966380189702,0.045199697288776805,0.2552607963569955,\r
                96,0.9039033270447723,-0.3402301153379016,0.04443195958504512,0.2553978170266591,\r
                97,0.9049024600735787,-0.3375641304939749,0.04365820088028317,0.25553073602314236,\r
                98,0.9058908583798211,-0.33490780693533095,0.042887118144635084,0.2556544712202119,\r
                99,0.9068683419164637,-0.3322477455436038,0.04212533363993548,0.2557864388051111,\r
                100,0.9078346418785762,-0.3295963472304626,0.041355148924495475,0.25591456104521787,\r
                101,0.9087904619941011,-0.3269549160334838,0.04058743713568935,0.2560332771669387,\r
                102,0.9097377525915081,-0.32430965299646103,0.039831813118742856,0.25615209768171043,\r
                103,0.9106740753010302,-0.3216733075417496,0.039067590277857805,0.2562669217430257,\r
                104,0.911596373388307,-0.3190492088401598,0.0383109070703518,0.25638238777888267,\r
                105,0.9125134303405135,-0.3164182808446541,0.03754999717960008,0.25649309680245697,\r
                106,0.9134138906212254,-0.3138077684489235,0.03679430915198913,0.2566046135503628,\r
                107,0.9143034101990776,-0.31120187588648257,0.0360482898349353,0.25671616104766026,\r
                108,0.9151873424423551,-0.30859704289214046,0.03529835872984509,0.25681514601460953,\r
                109,0.916057787875607,-0.3060050133410735,0.03455573062517038,0.25691430976794527,\r
                110,0.916914145044534,-0.3034245093575981,0.03380959312233814,0.25701931668894906,\r
                111,0.917763640025592,-0.3008470218818875,0.03306746084703619,0.2571138143019639,\r
                112,0.91860262175925,-0.29827465629294647,0.03233476135068248,0.2572079235147149,\r
                113,0.9194289062834288,-0.2957200839971882,0.031590678140356085,0.25729777936427384,\r
                114,0.920243461862262,-0.29317258378316324,0.030864096629780916,0.25738922774057843,\r
                115,0.9210506686001947,-0.2906270021822681,0.03013052836226296,0.2574757517404181,\r
                116,0.9218435464420244,-0.28810453461769564,0.029412418352446915,0.257556134973666,\r
                117,0.922627015563736,-0.2855844169563812,0.028684691186390762,0.25763951450656547,\r
                118,0.9234003598232189,-0.2830778302102515,0.027966386978537833,0.25771418028733467,\r
                119,0.9241616869308645,-0.2805773242973706,0.02725475854417973,0.25779588754657323,\r
                120,0.9249145073854895,-0.2780887703962283,0.026544261901604055,0.2578666166208227,\r
                121,0.9256544362464492,-0.27561272451612506,0.025829973768607822,0.2579424416360753,\r
                122,0.9263847696066004,-0.27315065246001813,0.025124866666444312,0.2580091486296283,\r
                123,0.9271034128355119,-0.2707028999682034,0.02442647873066764,0.2580746965403071,\r
                124,0.9278119021455776,-0.26825983313787966,0.023726489656714717,0.25814490088012987,\r
                125,0.9285088742404723,-0.2658391672456582,0.023033250685171897,0.25820588098976316,\r
                126,0.9291981578573112,-0.2634231499916274,0.02234066520905871,0.2582632807061138,\r
                127,0.929876297542302,-0.26101391708978877,0.021654617778656876,0.25832708701049006,\r
                128,0.9305433791302361,-0.25862741461851035,0.020975140738585224,0.25838135272426954,\r
                129,0.9312008254948623,-0.2562539310543986,0.020293936892005288,0.2584320056461237,\r
                130,0.9318474983419398,-0.25388749360010926,0.019619218611730594,0.25848881346856795,\r
                131,0.9324858048223263,-0.2515359764086669,0.01895314640247241,0.25853559642425156,\r
                132,0.9331125692515903,-0.24919788846313332,0.018283045856517233,0.2585866889931123,\r
                133,0.9337312458608593,-0.2468749148396508,0.017621469843240714,0.25862757147413057,\r
                134,0.9343374726809841,-0.2445674662293449,0.016964052465269025,0.2586744334684531,\r
                135,0.9349369147003062,-0.24226536788223282,0.016306951724578966,0.25871710492545924,\r
                136,0.9355243040275447,-0.23998696301584307,0.015653846027656862,0.25875759169684864,\r
                137,0.9361039992177557,-0.23771602186388777,0.015009214127706297,0.2587955159754521,\r
                138,0.9366740356336779,-0.23546079481818288,0.01437076116515705,0.25883092221920306,\r
                139,0.9372356521587045,-0.2332193895471895,0.013730199628497114,0.2588619907982741,\r
                140,0.937784544454644,-0.2309959660718423,0.013101974154723445,0.25890027059426063,\r
                141,0.9383252856701971,-0.22878651445181078,0.012471598248816704,0.25893406171080396,\r
                142,0.9388591925489469,-0.22659299933484836,0.011849262311076275,0.25895679987492176,\r
                143,0.9393806693192897,-0.2244138049176913,0.011220734362423324,0.2589913075606513,\r
                144,0.9398964921173822,-0.2222445154335665,0.010610691733438538,0.259016162982307,\r
                145,0.9404046310883859,-0.2200894819694122,0.009998332121240405,0.2590362582897343,\r
                146,0.9409019321926845,-0.21795087707032007,0.009389979012252789,0.25906137781325256,\r
                147,0.9413907993170928,-0.21582868715747572,0.008787534530986685,0.2590832298661426,\r
                148,0.941871375184718,-0.21372298977945925,0.00819096147868513,0.25910172596382364,\r
                149,0.9423447624114695,-0.21163181300043377,0.007591943625647107,0.25911520000533667,\r
                150,0.9428069065177058,-0.20955938286101433,0.0070051710552025,0.2591349641710135,\r
                151,0.9432639285245086,-0.20749336808588764,0.0064181723402681745,0.259149513618482,\r
                152,0.943710899022294,-0.20544416373367114,0.0058351356606878985,0.2591686436398656,\r
                153,0.944152480174383,-0.20341173413576996,0.005259627694362834,0.25917580310082355,\r
                154,0.9445842866407093,-0.20139624604082293,0.0046880436865566755,0.2591873834863878,\r
                155,0.9450087171968187,-0.19939771713199322,0.004122139744330039,0.2591950670605076,\r
                156,0.9454245200519481,-0.19741415919552938,0.0035518601100864855,0.2592055379875676,\r
                157,0.9458340377555893,-0.19544151152296402,0.0029977783753093595,0.25921342928442226,\r
                158,0.9462374009601806,-0.1934839079443982,0.0024410009175943603,0.2592157400799698,\r
                159,0.946631607478503,-0.19154351556028135,0.0018881165833940644,0.25922213714349585,\r
                160,0.9470182263725037,-0.18962247713126096,0.0013491001193955132,0.2592257221298645,\r
                161,0.9473984293140862,-0.1877083862693711,0.0008079308785136493,0.25923179802070306,\r
                162,0.9477704788876746,-0.18581992022548433,0.0002700231767802652,0.2592334925967451,\r
                163,0.9481385557955077,-0.18393848043622957,-0.00026844611656427764,0.2592293238919982,\r
                164,0.9484972959607669,-0.18207662056583904,-0.000794742161067924,0.25923030722377777,\r
                165,0.9488498923812458,-0.18023228034192576,-0.0013155886979311362,0.2592266885897858,\r
                166,0.9491965233062621,-0.17839508437467158,-0.0018386334035652293,0.2592253333327316,\r
                167,0.94953646480817,-0.1765776320414517,-0.0023479513820377357,0.25922061836695104,\r
                168,0.9498690817844185,-0.17477568441386393,-0.0028617402162054856,0.25921805116663127,\r
                169,0.9501960049482804,-0.17299144280495451,-0.003370160364465538,0.2592106381221755,\r
                170,0.9505188521918095,-0.17121666451349948,-0.003870984481635295,0.25919834278015697,\r
                171,0.9508316975817522,-0.16945961361892853,-0.004369466586306686,0.25919766586078286,\r
                172,0.9511414490035699,-0.16772044165558705,-0.004861158548527325,0.2591836541447211,\r
                173,0.9514451521971788,-0.16599081431588902,-0.005346775280347313,0.2591728842246747,\r
                174,0.9517406829255818,-0.16428520880384118,-0.005839161214157811,0.2591639381336463,\r
                175,0.9520333768440379,-0.16258311790897292,-0.006313439156638845,0.2591511520945848,\r
                176,0.9523181145659918,-0.16090511929100632,-0.006794497605014216,0.25914008963824414,\r
                177,0.9525971690549934,-0.15923678901803814,-0.007269470907090388,0.25913207698848917,\r
                178,0.952873135277245,-0.15758877674253613,-0.0077295214312821945,0.25911159759869407,\r
                179,0.9531406061260248,-0.15595657877643873,-0.008195483486329161,0.2591010701260956,\r
                180,0.9534049293670853,-0.15433421590285454,-0.008654012835708977,0.2590851182951921,\r
                181,0.9536645097476172,-0.15271946122899074,-0.009114818354568873,0.2590708186888809,\r
                182,0.9539178419961201,-0.15113343262889703,-0.009564408615633445,0.2590520379211585,\r
                183,0.9541660334067437,-0.14955725654653335,-0.010007940986964795,0.2590359990895416,\r
                184,0.9544097180519316,-0.1479887638465222,-0.010453754066614265,0.2590214950329903,\r
                185,0.954648085223924,-0.14644691799511375,-0.010896737218612687,0.25900114807856894,\r
                186,0.954882272713673,-0.1449088614653474,-0.011323055700358756,0.25898466274201287,\r
                187,0.9551119139602477,-0.143395326756086,-0.011754928999409222,0.25896106603102853,\r
                188,0.955335083081045,-0.14188946296528993,-0.012190348508285848,0.25894720453637116,\r
                189,0.9555575654803491,-0.14039600647841172,-0.01260888732871332,0.25892028962310754,\r
                190,0.9557719712527825,-0.13892079944446192,-0.013024863167529668,0.2589040428204032,\r
                191,0.9559834207359865,-0.13746188228691267,-0.013444186799913951,0.25888063665973526,\r
                192,0.9561899408645073,-0.1360152353172344,-0.01384910455700318,0.2588606865750315,\r
                193,0.9563914068953313,-0.13458480590125466,-0.014258582175673065,0.25884184296908047,\r
                194,0.9565908438013533,-0.1331646030581782,-0.01466083484695696,0.2588169352445142,\r
                195,0.9567860560849788,-0.1317545221281893,-0.015057042416214347,0.2587942701332484,\r
                196,0.9569764207973005,-0.1303607134561913,-0.015457818510157276,0.25877262272521806,\r
                197,0.9571633826100091,-0.1289877673021047,-0.015845306775773685,0.25874570746229786,\r
                198,0.9573467888885282,-0.12762278245232422,-0.016235117516083288,0.25871987199129015,\r
                199,0.9575251474080023,-0.12627634619344183,-0.01662113943391806,0.25869598798055565,\r
                200,0.9576996443157736,-0.12494011986170822,-0.017001108250623655,0.25867415805339633,\r
                201,0.9578725968083167,-0.12361426893184332,-0.017373939117243185,0.25864598786698445,\r
                202,0.9580407396005305,-0.12230702222642145,-0.01774298468647236,0.2586196436355717,\r
                203,0.958204557057643,-0.12101616904659271,-0.018116607868456543,0.25859408767911407,\r
                204,0.958365439911536,-0.11972945437951071,-0.01847355115567738,0.2585715940408989,\r
                205,0.9585233418333389,-0.11846768726851731,-0.018836284587143676,0.2585413015687229,\r
                206,0.9586769174404796,-0.11720545999910317,-0.019200114775583463,0.2585204125515493,\r
                207,0.9588279375098411,-0.11596431014413519,-0.019550747968178288,0.25849377802435414,\r
                208,0.9589746091389311,-0.11474185759530661,-0.01989758338467236,0.2584687434059737,\r
                209,0.9591206085227708,-0.11352768781123111,-0.02024574417574865,0.2584361279889397,\r
                210,0.9592611211343189,-0.11232369480005838,-0.020588843923895553,0.2584135998210437,\r
                211,0.9594007118236938,-0.1111302453089259,-0.020924906617429143,0.2583843861629793,\r
                212,0.9595365394071865,-0.10995330677744802,-0.021265550110711292,0.2583557165027975,\r
                213,0.9596680409889629,-0.10879737045643229,-0.02159401447827135,0.2583294056527141,\r
                214,0.9597978100273202,-0.10764121757834813,-0.021922542034498088,0.2583039571817601,\r
                215,0.9599259441688861,-0.10650404158283527,-0.022246329676630684,0.25827150763085144,\r
                216,0.9600492263430078,-0.10537484773401648,-0.022573368015523614,0.2582480736030005,\r
                217,0.9601707182615625,-0.10426690111538994,-0.022887296286706226,0.25821846718148,\r
                218,0.9602897184270979,-0.1031671509847043,-0.023203547734955775,0.25818944791260573,\r
                219,0.9604059869822132,-0.10207784911438073,-0.023513737341186572,0.2581618814719796,\r
                220,0.96051869201054485,-0.10100738558709356,-0.023820113579691427,0.25813553134790057,\r
                221,0.9606312893651467,-0.09994535064637808,-0.024127931399397534,0.258101328363909,\r
                222,0.960739054041394,-0.09889357959050264,-0.024430557498875006,0.25807688353612485,\r
                223,0.9608465384623213,-0.09785250340656143,-0.02472625267324193,0.2580454020725478,\r
                224,0.9609484410144825,-0.09683008606706327,-0.025018981735903698,0.2580234072656574,\r
                225,0.9610504023095928,-0.09581613366068101,-0.025313176794583843,0.25799348021113766,\r
                226,0.9611499759054367,-0.09481268639532492,-0.02560130237996256,0.2579648263464034,\r
                227,0.9612472075737566,-0.09381975066865443,-0.025883354839202965,0.2579374192675326,\r
                228,0.961341332349519,-0.09284572198221305,-0.02616158132550047,0.2579110045899602,\r
                229,0.9614356742343593,-0.09188019618402483,-0.026441314798412895,0.2578765804225726,\r
                230,0.9615255617957791,-0.09092497206725361,-0.02671577569524708,0.25785172250128974,\r
                231,0.9615223873297151,-0.09095853558564296,-0.02672477640204825,0.25785078978770143,\r
                232,0.9615192116920652,-0.0909920989932021,-0.026733777076286082,0.2578498567599297,\r
                233,0.9615160348828334,-0.09102566228989023,-0.026742777717949633,0.25784892341797594,\r
                234,0.9615257316327005,-0.09092146972771054,-0.026795785232961625,0.2578440219289601,\r
                235,0.9615362040822879,-0.09080888462329026,-0.02684654356947425,0.25783936435476873,\r
                236,0.9615464646758723,-0.09069855176643807,-0.02688891286276409,0.2578355199383146,\r
                237,0.9615561100804,-0.09059435444506382,-0.0269419230866429,0.2578306476936467,\r
                238,0.9615685867439352,-0.09048425393648879,-0.026983504490250526,0.2578184308040312,\r
                239,0.9615789871410607,-0.09037166261728373,-0.0270342675408935,0.2578138135614285,\r
                240,0.9615893688511769,-0.09025906957842726,-0.027085031559323583,0.2578092068500706,\r
            ]\r
          }\r
        }\r
      ]\r
\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
\r
    dataSourcePromise.then(function (dataSource) {\r
      viewer.trackedEntity = dataSource.entities.getById('Vulcan');\r
    }).catch(function (error) {\r
      console.error(error);\r
    });\r
}\r
`,h4=`export function addRocketLaunchIntoOrbit(viewer) {\r
    var czml =\r
      [\r
        {\r
          id: "document",\r
          name: "SpaceX",\r
          version: "1.0",\r
          clock: {\r
            interval: "2019-08-28T04:00:00Z/2019-08-28T04:17:33Z",\r
            currentTime: "2019-08-28T04:00:00.00Z",\r
            multiplier: 1,\r
            range: "LOOP_STOP",\r
            step: "SYSTEM_CLOCK_MULTIPLIER"\r
          }\r
        },     \r
        {\r
          id: "Vulcan",\r
          availability: "2019-08-28T04:00:00Z/2019-08-28T04:17:33Z",\r
          name: "Vulcan",\r
          path: {\r
            show: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:17:33Z",\r
                boolean: true\r
              }\r
            ],\r
            width: 1,\r
            resolution: 86400,\r
            leadTime: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:17:33Z",\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1053,\r
                  1053, 0\r
                ]\r
              }\r
            ],\r
            trailTime: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/2019-08-28T04:17:33Z",\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  1053, 1053\r
                ]\r
              }\r
            ],\r
            material: {\r
              solidColor: {\r
                color: [\r
                  {\r
                    interval: "2019-08-28T04:00:00Z/2019-08-28T04:10:00Z",\r
                    rgba: [ 0, 255, 0, 255 ]\r
                  },\r
                  {\r
                    interval: "2019-08-28T04:10:00Z/2019-08-28T04:17:33Z",\r
                    rgba: [ 255, 255, 0, 255 ]\r
                  }\r
                ]\r
              }\r
            }\r
          },\r
          model: {\r
            show: true,\r
            gltf: [\r
              {\r
                interval: "2019-08-28T04:00:00Z/9999-12-31T23:59:59.9999999Z",\r
                uri: "https://cesium.com/public/SandcastleSampleData/launchvehicle.glb"\r
              }\r
            ],\r
            minimumPixelSize: 128,\r
            scale: 1,\r
            runAnimations: false,\r
            articulations: {   // 定义动画参数\r
              "BoosterFlames Size": {   // 二级发动机底部火焰样式的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  180, 1,\r
                  182, 0,\r
                  1000,0                  \r
                ]\r
              },\r
              "Booster MoveZ": {  // 二级发动机随着z轴向下掉落的情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  180, 0,\r
                  200, -300,\r
                  1000,-300\r
                ]\r
              },\r
              "Booster Yaw": {\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  190, 0,\r
                  200, 90,\r
                  1000, 90\r
                ]\r
              },\r
              "Booster Size": {  // 二级发动机随时间变化的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  200, 1,\r
                  201, 0,\r
                  1000,0\r
                ]\r
              },\r
              "InterstageAdapter MoveZ": {\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  180, 0,\r
                  200, -300,\r
                  1000,-300\r
                ]\r
              },\r
              "InterstageAdapter Size": {\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  190, 1,\r
                  191, 0, \r
                  1000,0\r
                ]\r
              },\r
\r
              "SRBFlames Size": {   // 一级助推器底部火焰随时间变化的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  60, 1,\r
                  61, 0, \r
                  1000,0\r
                ]\r
              },\r
              "SRBs Separate": {  // 一级助推器分开的距离\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  61, 0,\r
                  71, 40,\r
                  1000,40\r
                ]\r
              },\r
              "SRBs Drop": {  // 一级助推器掉落：随时间的变化掉落的距离，负号表示向下掉落\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  61, 0,\r
                  71, -150,\r
                  1000,-150\r
                ]\r
              },\r
              "SRBs Rotate": {  // 一级助推器掉落的张开角度随时间的变化，张开的角度单位为度\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  61, 0,\r
                  71, 120,\r
                  1000,120\r
                ]\r
              },\r
              "SRBs Size": {  // 一级助推器的显示和消失情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,1,\r
                  70, 1,\r
                  71, 0, \r
                  1000,0\r
                ]\r
              },\r
              "UpperStageFlames Size": {   // 顶部卫星仓助推器底部火焰随时间变化的显示情况\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0,0,\r
                  181, 0,\r
                  182, 1,\r
                  1000,1,\r
                  1001,0,\r
                  1050,0\r
                ]\r
              },\r
              "Fairing Open": {  // 整流罩随时间的变化而打开的角度\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  200, 0,\r
                  210, 120,  // 第210秒时，打开的角度为120度\r
                  1000,120\r
                ]\r
              },\r
              "Fairing Separate": {  // 整流罩分离：随时间的变化分离出去的距离，负号表示往外部分离\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  200, 0,\r
                  210, -50,\r
                  1000,-50\r
                ]\r
              },\r
              "Fairing Drop": {  // 整流罩掉落：随时间的变化掉落的距离，负号表示向下掉落\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 0,\r
                  202, 0,\r
                  210, -150,\r
                  1000,-150\r
                ]\r
              },\r
              "Fairing Size": {  // 整流罩的显示和消失：1表示显示，0表示消失\r
                epoch: "2019-08-28T04:00:00Z",\r
                number: [\r
                  0, 1,\r
                  215, 1,\r
                  216, 0, \r
                  1000,0\r
                ]\r
              }\r
\r
            }\r
          },\r
          position: {\r
            interpolationAlgorithm: "LAGRANGE",\r
            interpolationDegree: 5,\r
            referenceFrame: "FIXED",\r
            epoch: "2019-08-28T04:00:00Z",\r
            cartesian: [\r
              0.000, 917843.164, -5530578.249, 3031358.548,\r
              5.000, 917858.034, -5530668.136, 3031408.144,\r
              10.000, 917904.041, -5530947.370, 3031562.198,\r
              15.000, 917995.379, -5531429.784, 3031827.039,\r
              20.000, 918185.888, -5532123.853, 3032201.781,\r
              25.000, 918522.148, -5533037.209, 3032685.775,\r
              30.000, 919039.536, -5534178.813, 3033280.277,\r
              35.000, 919765.781, -5535552.193, 3033984.231,\r
              40.000, 920725.932, -5537159.564, 3034796.104,\r
              45.000, 921951.333, -5539013.869, 3035719.776,\r
              50.000, 923478.083, -5541133.458, 3036761.666,\r
              55.000, 925347.644, -5543541.795, 3037930.491,\r
              60.000, 927605.957, -5546265.685, 3039236.339,\r
              65.000, 930159.431, -5549170.295, 3040612.213,\r
              70.000, 932893.237, -5552105.857, 3041984.985,\r
              75.000, 935823.252, -5555076.264, 3043355.017,\r
              80.000, 938964.862, -5558083.710, 3044721.750,\r
              85.000, 942333.298, -5561129.288, 3046084.004,\r
              90.000, 945943.826, -5564213.327, 3047440.156,\r
              95.000, 949811.859, -5567335.599, 3048788.235,\r
              100.000, 953953.060, -5570495.476, 3050126.007,\r
              105.000, 958383.411, -5573692.036, 3051451.024,\r
              110.000, 963119.273, -5576924.135, 3052760.660,\r
              115.000, 968177.426, -5580190.468, 3054052.136,\r
              120.000, 973575.121, -5583489.609, 3055322.543,\r
              125.000, 979330.120, -5586820.054, 3056568.856,\r
              130.000, 985460.755, -5590180.254, 3057787.947,\r
              135.000, 991985.993, -5593568.654, 3058976.602,\r
              140.000, 998925.515, -5596983.723, 3060131.528,\r
              145.000, 1006299.806, -5600423.996, 3061249.362,\r
              150.000, 1014130.264, -5603888.099, 3062326.677,\r
              155.000, 1022439.320, -5607374.791, 3063359.991,\r
              160.000, 1031250.582, -5610882.993, 3064345.765,\r
              165.000, 1040588.998, -5614411.827, 3065280.405,\r
              170.000, 1050481.047, -5617960.649, 3066160.261,\r
              175.000, 1060954.957, -5621529.087, 3066981.622,\r
              180.000, 1072040.964, -5625117.088, 3067740.708,\r
              185.000, 1083771.619, -5628724.957, 3068433.661,\r
              190.000, 1096182.138, -5632353.415, 3069056.535,\r
              195.000, 1109310.838, -5636003.654, 3069605.272,\r
              200.000, 1123199.643, -5639677.407, 3070075.687,\r
              205.000, 1137894.713, -5643377.031, 3070463.435,\r
              210.000, 1153447.204, -5647105.606, 3070763.982,\r
              215.000, 1169914.223, -5650867.058, 3070972.558,\r
              220.000, 1187360.015, -5654666.310, 3071084.105,\r
              225.000, 1205857.496, -5658509.476, 3071093.203,\r
              230.000, 1225490.224, -5662404.112, 3070993.980,\r
              235.000, 1245704.746, -5666236.399, 3070784.103,\r
              240.000, 1265936.771, -5669896.839, 3070465.398,\r
              245.000, 1286200.148, -5673388.627, 3070038.095,\r
              250.000, 1306494.726, -5676712.255, 3069502.479,\r
              255.000, 1326820.357, -5679868.207, 3068858.832,\r
              260.000, 1347176.894, -5682856.962, 3068107.431,\r
              265.000, 1367564.193, -5685678.987, 3067248.548,\r
              270.000, 1387982.108, -5688334.745, 3066282.451,\r
              275.000, 1408430.498, -5690824.689, 3065209.404,\r
              280.000, 1428909.221, -5693149.265, 3064029.667,\r
              285.000, 1449418.139, -5695308.914, 3062743.495,\r
              290.000, 1469957.113, -5697304.066, 3061351.141,\r
              295.000, 1490526.006, -5699135.148, 3059852.852,\r
              300.000, 1511124.681, -5700802.577, 3058248.871,\r
              305.000, 1531753.006, -5702306.766, 3056539.439,\r
              310.000, 1552410.845, -5703648.119, 3054724.792,\r
              315.000, 1573098.067, -5704827.034, 3052805.164,\r
              320.000, 1593814.541, -5705843.905, 3050780.782,\r
              325.000, 1614560.136, -5706699.118, 3048651.873,\r
              330.000, 1635334.723, -5707393.051, 3046418.660,\r
              335.000, 1656138.174, -5707926.079, 3044081.361,\r
              340.000, 1676970.362, -5708298.571, 3041640.191,\r
              345.000, 1697831.161, -5708510.889, 3039095.365,\r
              350.000, 1718720.444, -5708563.388, 3036447.090,\r
              355.000, 1739638.087, -5708456.422, 3033695.573,\r
              360.000, 1760583.968, -5708190.334, 3030841.017,\r
              365.000, 1781557.962, -5707765.467, 3027883.623,\r
              370.000, 1802559.947, -5707182.155, 3024823.589,\r
              375.000, 1823589.803, -5706440.729, 3021661.108,\r
              380.000, 1844647.408, -5705541.514, 3018396.373,\r
              385.000, 1865732.644, -5704484.830, 3015029.573,\r
              390.000, 1886845.390, -5703270.994, 3011560.895,\r
              395.000, 1907985.528, -5701900.316, 3007990.522,\r
              400.000, 1929152.942, -5700373.102, 3004318.637,\r
              405.000, 1950347.512, -5698689.656, 3000545.417,\r
              410.000, 1971569.125, -5696850.275, 2996671.041,\r
              415.000, 1992817.663, -5694855.252, 2992695.682,\r
              420.000, 2014093.011, -5692704.877, 2988619.512,\r
              425.000, 2035395.056, -5690399.435, 2984442.701,\r
              430.000, 2056723.684, -5687939.208, 2980165.418,\r
              435.000, 2078078.781, -5685324.473, 2975787.826,\r
              440.000, 2099460.235, -5682555.505, 2971310.091,\r
              445.000, 2120867.934, -5679632.574, 2966732.374,\r
              450.000, 2142301.768, -5676555.947, 2962054.834,\r
              455.000, 2163761.625, -5673325.886, 2957277.629,\r
              460.000, 2185247.396, -5669942.653, 2952400.914,\r
              465.000, 2206758.971, -5666406.504, 2947424.845,\r
              470.000, 2228296.243, -5662717.692, 2942349.574,\r
              475.000, 2249859.103, -5658876.469, 2937175.250,\r
              480.000, 2271447.444, -5654883.082, 2931902.025,\r
              485.000, 2293061.159, -5650737.777, 2926530.044,\r
              490.000, 2314700.143, -5646440.794, 2921059.455,\r
              495.000, 2336364.290, -5641992.375, 2915490.401,\r
              500.000, 2358053.497, -5637392.755, 2909823.027,\r
              505.000, 2379767.659, -5632642.171, 2904057.474,\r
              510.000, 2401506.674, -5627740.852, 2898193.882,\r
              515.000, 2423270.440, -5622689.031, 2892232.391,\r
              520.000, 2445058.855, -5617486.935, 2886173.140,\r
              525.000, 2466871.820, -5612134.788, 2880016.265,\r
              530.000, 2488709.234, -5606632.817, 2873761.902,\r
              535.000, 2510571.000, -5600981.241, 2867410.186,\r
              540.000, 2532457.019, -5595180.282, 2860961.251,\r
              545.000, 2554367.195, -5589230.158, 2854415.230,\r
              550.000, 2576301.433, -5583131.086, 2847772.255,\r
              555.000, 2598259.637, -5576883.281, 2841032.458,\r
              560.000, 2620241.715, -5570486.959, 2834195.968,\r
              565.000, 2642247.573, -5563942.331, 2827262.915,\r
              570.000, 2664277.122, -5557249.609, 2820233.429,\r
              575.000, 2686330.270, -5550409.005, 2813107.638,\r
              580.000, 2708406.929, -5543420.728, 2805885.670,\r
              585.000, 2730507.012, -5536284.986, 2798567.652,\r
              590.000, 2752630.433, -5529001.989, 2791153.710,\r
              595.000, 2774777.107, -5521571.942, 2783643.971,\r
              600.000, 2796946.952, -5513995.054, 2776038.561,\r
              605.000, 2819139.886, -5506271.531, 2768337.605,\r
              610.000, 2841355.829, -5498401.579, 2760541.229,\r
              615.000, 2863594.703, -5490385.403, 2752649.558,\r
              620.000, 2885856.432, -5482223.210, 2744662.717,\r
              625.000, 2908140.942, -5473915.205, 2736580.829,\r
              630.000, 2930448.159, -5465461.594, 2728404.021,\r
              635.000, 2952778.014, -5456862.583, 2720132.415,\r
              640.000, 2975130.438, -5448118.378, 2711766.138,\r
              645.000, 2997505.365, -5439229.186, 2703305.312,\r
              650.000, 3019902.730, -5430195.214, 2694750.063,\r
              655.000, 3042322.474, -5421016.665, 2686100.514,\r
              660.000, 3064764.548, -5411693.578, 2677356.691,\r
              665.000, 3087228.922, -5402225.774, 2668518.498,\r
              670.000, 3109715.566, -5392613.057, 2659585.827,\r
              675.000, 3132224.452, -5382855.226, 2650558.571,\r
              680.000, 3154755.551, -5372952.079, 2641436.618,\r
              685.000, 3177308.834, -5362903.407, 2632219.856,\r
              690.000, 3199884.274, -5352709.001, 2622908.171,\r
              695.000, 3222481.844, -5342368.646, 2613501.445,\r
              700.000, 3245101.516, -5331882.125, 2603999.562,\r
              705.000, 3267743.265, -5321249.218, 2594402.401,\r
              710.000, 3290407.066, -5310469.701, 2584709.840,\r
              715.000, 3313092.895, -5299543.346, 2574921.756,\r
              720.000, 3335800.727, -5288469.922, 2565038.024,\r
              725.000, 3358530.542, -5277249.197, 2555058.516,\r
              730.000, 3381282.316, -5265880.932, 2544983.103,\r
              735.000, 3404056.030, -5254364.889, 2534811.655,\r
              740.000, 3426851.666, -5242700.823, 2524544.040,\r
              745.000, 3449669.205, -5230888.488, 2514180.122,\r
              750.000, 3472508.631, -5218927.634, 2503719.766,\r
              755.000, 3495369.929, -5206818.010, 2493162.833,\r
              760.000, 3518253.088, -5194559.359, 2482509.185,\r
              765.000, 3541158.095, -5182151.422, 2471758.680,\r
              770.000, 3564084.941, -5169593.939, 2460911.175,\r
              775.000, 3587033.620, -5156886.643, 2449966.524,\r
              780.000, 3610004.125, -5144029.269, 2438924.581,\r
              785.000, 3632996.454, -5131021.545, 2427785.198,\r
              790.000, 3656010.606, -5117863.197, 2416548.223,\r
              795.000, 3679046.584, -5104553.949, 2405213.504,\r
              800.000, 3702104.393, -5091093.522, 2393780.888,\r
              805.000, 3725184.039, -5077481.634, 2382250.219,\r
              810.000, 3748285.533, -5063717.998, 2370621.338,\r
              815.000, 3771408.890, -5049802.329, 2358894.086,\r
              820.000, 3794554.125, -5035734.334, 2347068.301,\r
              825.000, 3817721.260, -5021513.719, 2335143.821,\r
              830.000, 3840910.318, -5007140.189, 2323120.478,\r
              835.000, 3864121.328, -4992613.443, 2310998.106,\r
              840.000, 3887354.322, -4977933.180, 2298776.535,\r
              845.000, 3910609.335, -4963099.093, 2286455.594,\r
              850.000, 3933886.408, -4948110.876, 2274035.109,\r
              855.000, 3957185.587, -4932968.216, 2261514.905,\r
              860.000, 3980506.922, -4917670.801, 2248894.802,\r
              865.000, 4003850.467, -4902218.313, 2236174.622,\r
              870.000, 4027216.284, -4886610.432, 2223354.182,\r
              875.000, 4050604.438, -4870846.836, 2210433.297,\r
              880.000, 4074015.002, -4854927.199, 2197411.780,\r
              885.000, 4097448.052, -4838851.191, 2184289.442,\r
              890.000, 4120903.674, -4822618.483, 2171066.091,\r
              895.000, 4144381.957, -4806228.738, 2157741.533,\r
              900.000, 4167883.000, -4789681.618, 2144315.570,\r
              905.000, 4191406.906, -4772976.782, 2130788.003,\r
              910.000, 4214953.789, -4756113.886, 2117158.630,\r
              915.000, 4238523.768, -4739092.581, 2103427.246,\r
              920.000, 4262116.970, -4721912.518, 2089593.641,\r
              925.000, 4285733.533, -4704573.340, 2075657.606,\r
              930.000, 4309373.600, -4687074.691, 2061618.926,\r
              935.000, 4333037.326, -4669416.208, 2047477.384,\r
              940.000, 4356724.875, -4651597.526, 2033232.759,\r
              945.000, 4380436.419, -4633618.276, 2018884.828,\r
              950.000, 4404172.141, -4615478.085, 2004433.362,\r
              955.000, 4427932.236, -4597176.576, 1989878.130,\r
              960.000, 4451716.907, -4578713.368, 1975218.898,\r
              965.000, 4475526.372, -4560088.076, 1960455.426,\r
              970.000, 4499360.857, -4541300.310, 1945587.472,\r
              975.000, 4523220.604, -4522349.676, 1930614.789,\r
              980.000, 4547105.863, -4503235.776, 1915537.126,\r
              985.000, 4571016.901, -4483958.206, 1900354.225,\r
              990.000, 4594953.998, -4464516.558, 1885065.828,\r
              995.000, 4618917.446, -4444910.417, 1869671.667,\r
              1000.000, 4642907.554, -4425139.366, 1854171.474,\r
              1005.000, 4666924.644, -4405202.980, 1838564.971,\r
              1010.000, 4690969.055, -4385100.828, 1822851.878,\r
              1015.000, 4715041.141, -4364832.474, 1807031.908,\r
              1020.000, 4739141.275, -4344397.476, 1791104.767,\r
              1025.000, 4763269.845, -4323795.385, 1775070.158,\r
              1030.000, 4787427.258, -4303025.746, 1758927.774,\r
              1035.000, 4811613.938, -4282088.095, 1742677.303,\r
              1040.000, 4835830.331, -4260981.963, 1726318.426,\r
              1045.000, 4860076.900, -4239706.872, 1709850.818,\r
              1050.000, 4884354.130, -4218262.337, 1693274.144,\r
              1053.000, 4898935.396, -4205314.077, 1683275.646\r
            ]\r
          },\r
          orientation: {  // 火箭的飞行方位\r
            "interpolationAlgorithm": "LINEAR",\r
            "interpolationDegree": 1,\r
            "epoch": "2019-08-28T04:00:00Z",\r
            "velocityReference": "#position"  // 方向的参考属性，指向实体的位置属性\r
          }\r
        }\r
      ]\r
\r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
\r
    dataSourcePromise.then(function (dataSource) {\r
      viewer.trackedEntity = dataSource.entities.getById('Vulcan');\r
    }).catch(function (error) {\r
      console.error(error);\r
    });\r
}\r
  `,d4=`let modelEntity;\r
export function addGetNodes(viewer) {\r
    // 添加模型实体并设置其位置\r
    modelEntity = viewer.entities.add({\r
        id: 'rocketModel',\r
        position: Cesium.Cartesian3.fromDegrees(120, 30, 5000),  // 模型的初始位置\r
        model: {\r
            uri: 'https://cesium.com/public/SandcastleSampleData/launchvehicle.glb',\r
            minimumPixelSize: 128\r
        },\r
    });\r
\r
    viewer.trackedEntity = modelEntity;   // 视角跟随模型\r
\r
    let modelDate = modelEntity.model;\r
    console.log(modelDate)\r
}\r
\r
\r
\r
// /**\r
//  * @class 获取模型节点类\r
//  * @classdesc 该类用于在Cesium场景中获取模型的节点\r
//  */\r
// class modelNodes{\r
//     /**\r
//      * 测站构造函数\r
//      * @param {Object} viewer - viewer对象\r
//      */\r
//     constructor(viewer, id, options = {}) {\r
//         this.viewer = viewer;\r
//     }\r
\r
//     getNodes(site, visible) {\r
\r
//     }\r
// }\r
\r
// export default modelNodes;\r
`,f4=`export function addPoint(viewer) {\r
    const czml = [\r
        {\r
          id: "document",\r
          name: "CZML Point",\r
          version: "1.0",\r
        },\r
        {\r
          id: "point 1",\r
          name: "point",\r
          position: {\r
            cartographicDegrees: [-111.0, 40.0, 0],\r
          },\r
          point: {\r
            color: {\r
              rgba: [255, 255, 255, 255],\r
            },\r
            outlineColor: {\r
              rgba: [255, 0, 0, 255],\r
            },\r
            outlineWidth: 4,\r
            pixelSize: 20,\r
          },\r
        },\r
      ];\r
      \r
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);\r
      viewer.dataSources.add(dataSourcePromise);\r
      viewer.zoomTo(dataSourcePromise);\r
}\r
`,p4=`export function addLine(viewer) {\r
    const line = viewer.entities.add({\r
        polyline: {\r
            positions: Cesium.Cartesian3.fromDegreesArray([120, 30, 121, 30]),  // 线的起始和结束经纬度\r
            material: Cesium.Color.YELLOW, // 线的颜色\r
            width: 5\r
        }\r
    })\r
    viewer.zoomTo(line)\r
}\r
`,m4=`export function addMultiLine(viewer) {\r
  const czml = [\r
      {\r
        id: "document",\r
        name: "CZML Geometries: Polyline",\r
        version: "1.0",\r
      },\r
      {\r
        id: "redLine",\r
        name: "Red line clamped to terain",\r
        polyline: {\r
          positions: {\r
            cartographicDegrees: [-75, 35, 0, -125, 35, 0],\r
          },\r
          material: {\r
            solidColor: {\r
              color: {\r
                rgba: [255, 0, 0, 255],\r
              },\r
            },\r
          },\r
          width: 5,\r
          clampToGround: true,\r
        },\r
      },\r
      {\r
        id: "blueLine",\r
        name: "Glowing blue line on the surface",\r
        polyline: {\r
          positions: {\r
            cartographicDegrees: [-75, 37, 0, -125, 37, 0],\r
          },\r
          material: {\r
            polylineGlow: {\r
              color: {\r
                rgba: [100, 149, 237, 255],\r
              },\r
              glowPower: 0.2,\r
              taperPower: 0.5,\r
            },\r
          },\r
          width: 10,\r
        },\r
      },\r
      {\r
        id: "orangeLine",\r
        name:\r
          "Orange line with black outline at height and following the surface",\r
        polyline: {\r
          positions: {\r
            cartographicDegrees: [-75, 39, 250000, -125, 39, 250000],\r
          },\r
          material: {\r
            polylineOutline: {\r
              color: {\r
                rgba: [255, 165, 0, 255],\r
              },\r
              outlineColor: {\r
                rgba: [0, 0, 0, 255],\r
              },\r
              outlineWidth: 2,\r
            },\r
          },\r
          width: 5,\r
        },\r
      },\r
      {\r
        id: "dashedLine",\r
        name: "Blue dashed line",\r
        polyline: {\r
          positions: {\r
            cartographicDegrees: [-75, 45, 500000, -125, 45, 500000],\r
          },\r
          material: {\r
            polylineDash: {\r
              color: {\r
                rgba: [0, 255, 255, 255],\r
              },\r
            },\r
          },\r
          width: 4,\r
        },\r
      },\r
    ];\r
    \r
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);\r
    viewer.dataSources.add(dataSourcePromise);\r
    viewer.zoomTo(dataSourcePromise);          \r
}\r
`,O4=`export function addPlane(viewer) {\r
    const czml = [\r
        {\r
          id: "document",\r
          name: "CZML Colors",\r
          version: "1.0",\r
        },\r
        {\r
          id: "rgba",\r
          name: "Rectangle with outline using RGBA Colors",\r
          rectangle: {\r
            coordinates: {\r
              wsenDegrees: [-120, 40, -110, 50],\r
            },\r
            fill: true,\r
            material: {\r
              solidColor: {\r
                color: {\r
                  rgba: [255, 0, 0, 100],\r
                },\r
              },\r
            },\r
            height: 0, // disables ground clamping, needed for outlines\r
            outline: true,\r
            outlineColor: {\r
              rgba: [0, 0, 0, 255],\r
            },\r
          },\r
        },\r
        {\r
          id: "rgbaf",\r
          name: "Rectangle using RGBAF Colors",\r
          rectangle: {\r
            coordinates: { wsenDegrees: [-100, 40, -90, 50] },\r
            fill: true,\r
            material: {\r
              solidColor: {\r
                color: {\r
                  rgbaf: [1, 0, 0, 0.39],\r
                },\r
              },\r
            },\r
            height: 0, // disables ground clamping, needed for outlines\r
            outline: true,\r
            outlineColor: {\r
              rgba: [0, 0, 0, 255],\r
            },\r
          },\r
        },\r
      ];\r
      \r
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);\r
      viewer.dataSources.add(dataSourcePromise);\r
      viewer.zoomTo(dataSourcePromise); \r
}\r
`,g4=`export function addCirclesAndEllipses(viewer) {\r
    const czml = [\r
        {\r
          id: "document",\r
          name: "CZML Geometries: Circles and Ellipses",\r
          version: "1.0",\r
        },\r
        {\r
          id: "shape1",\r
          name: "Green circle at height",\r
          position: {\r
            cartographicDegrees: [-111.0, 40.0, 150000.0],\r
          },\r
          ellipse: {\r
            semiMinorAxis: 300000.0,\r
            semiMajorAxis: 300000.0,\r
            height: 200000.0,\r
            material: {\r
              solidColor: {\r
                color: {\r
                  rgba: [0, 255, 0, 255],\r
                },\r
              },\r
            },\r
          },\r
        },\r
        {\r
          id: "shape2",\r
          name: "Red ellipse with white outline on surface",\r
          position: {\r
            cartographicDegrees: [-103.0, 40.0, 0],\r
          },\r
          ellipse: {\r
            semiMinorAxis: 250000.0,\r
            semiMajorAxis: 400000.0,\r
            height: 0,\r
            material: {\r
              solidColor: {\r
                color: {\r
                  rgba: [255, 0, 0, 127],\r
                },\r
              },\r
            },\r
            outline: true, // height must be set for outlines to display\r
            outlineColor: {\r
              rgba: [255, 255, 255, 255],\r
            },\r
          },\r
        },\r
        {\r
          id: "shape3",\r
          name:\r
            "Blue translucent, rotated, and extruded ellipse with outline",\r
          position: {\r
            cartographicDegrees: [-95.0, 40.0, 100000.0],\r
          },\r
          ellipse: {\r
            semiMinorAxis: 150000.0,\r
            semiMajorAxis: 300000.0,\r
            extrudedHeight: 200000.0,\r
            rotation: 0.78539,\r
            material: {\r
              solidColor: {\r
                color: {\r
                  rgba: [0, 0, 255, 127],\r
                },\r
              },\r
            },\r
            outline: true,\r
          },\r
        },\r
    ];\r
      \r
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);\r
    viewer.dataSources.add(dataSourcePromise);\r
    viewer.zoomTo(dataSourcePromise);\r
}\r
`,v4=`export function addBox(viewer) {\r
    const czml = [\r
        {\r
          id: "document",\r
          name: "box",\r
          version: "1.0",\r
        },\r
        {\r
          id: "shape1",\r
          name: "Blue box",\r
          position: {\r
            cartographicDegrees: [-114.0, 40.0, 300000.0],\r
          },\r
          box: {\r
            dimensions: {\r
              cartesian: [400000.0, 300000.0, 500000.0],\r
            },\r
            material: {\r
              solidColor: {\r
                color: {\r
                  rgba: [0, 0, 255, 255],\r
                },\r
              },\r
            },\r
          },\r
        },\r
        {\r
          id: "shape2",\r
          name: "Red box with black outline",\r
          position: {\r
            cartographicDegrees: [-107.0, 40.0, 300000.0],\r
          },\r
          box: {\r
            dimensions: {\r
              cartesian: [400000.0, 300000.0, 500000.0],\r
            },\r
            material: {\r
              solidColor: {\r
                color: {\r
                  rgba: [255, 0, 0, 128],\r
                },\r
              },\r
            },\r
            outline: true,\r
            outlineColor: {\r
              rgba: [0, 0, 0, 255],\r
            },\r
          },\r
        },\r
        {\r
          id: "shape3",\r
          name: "Yellow box outline",\r
          position: {\r
            cartographicDegrees: [-100.0, 40.0, 300000.0],\r
          },\r
          box: {\r
            dimensions: {\r
              cartesian: [400000.0, 300000.0, 500000.0],\r
            },\r
            fill: false,\r
            outline: true,\r
            outlineColor: {\r
              rgba: [255, 255, 0, 255],\r
            },\r
          },\r
        },\r
    ];\r
      \r
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);\r
    viewer.dataSources.add(dataSourcePromise);\r
    viewer.zoomTo(dataSourcePromise);\r
}\r
`,w4=`export function addStraightArrow(viewer) {\r
    const czml = [\r
        {\r
            id: "document",\r
            name: "CZML Geometries: Polyline",\r
            version: "1.0",\r
        },\r
        {\r
          id: "purpleLine",\r
          name: "Purple arrow at height",\r
          polyline: {\r
            positions: {\r
              cartographicDegrees: [-75, 43, 500000, -125, 43, 500000],\r
            },\r
            material: {\r
              polylineArrow: {\r
                color: {\r
                  rgba: [148, 0, 211, 255],\r
                },\r
              },\r
            },\r
            arcType: "NONE",\r
            width: 10,\r
          },\r
        },\r
    ];\r
      \r
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);\r
    viewer.dataSources.add(dataSourcePromise);\r
    viewer.zoomTo(dataSourcePromise);\r
}\r
`,y4=`export function addTerminatorLine(viewer) {\r
    viewer.scene.globe.enableLighting = true;\r
}\r
`,b4=`export function addJingweiNetwork3D(viewer) {\r
    if(Cesium.FeatureDetection.supportsImageRenderingPixelated()){  // 判断是否支持图像渲染像素化处理\r
        viewer.resolutionScale = window.devicePixelRatio;\r
    }\r
    // 开启抗锯齿(在折线进行放大的时候会出现锯齿状的形态，开启抗锯齿可以避免这种情况)\r
    viewer.scene.fxaa = true;\r
    viewer.scene.postProcessStages.fxaa.enabled = true;\r
\r
    const entities = viewer.entities;\r
    for (let lang = -180; lang <= 180; lang += 20) {\r
        let text = "";\r
        if (lang === 0) {\r
            text = "0";\r
        }\r
        text += lang === 0 ? "" : "" + lang + "°";\r
        if (lang === -180) {\r
            text = "";\r
        }\r
\r
        entities.add({\r
            position: Cesium.Cartesian3.fromDegrees(lang, 0),\r
            polyline: {\r
                positions: Cesium.Cartesian3.fromDegreesArray([\r
                    lang,\r
                    -90,\r
                    lang,\r
                    0,\r
                    lang,\r
                    90,\r
                ]),\r
                width: 1.0,\r
                material: Cesium.Color.WHITE,\r
            },\r
            label: {\r
                text: text,\r
                verticalOrigin: Cesium.VerticalOrigin.TOP,\r
                font: "12px sans-serif",\r
                fillColor: Cesium.Color.WHITE,\r
            },\r
        });\r
    }\r
\r
    //纬度\r
    let langS = [];\r
    for (let lang = -180; lang <= 180; lang += 5) {\r
        langS.push(lang);\r
    } \r
    // 每隔10读绘制一条纬度线和纬度标注\r
    for (let lat = -80; lat <= 80; lat += 10) {\r
        let text = "";\r
        text += "" + lat + "°";\r
        if (lat === 0) {\r
            text = "";\r
        }\r
        entities.add({\r
            position: Cesium.Cartesian3.fromDegrees(0, lat),\r
            polyline: {\r
            positions: Cesium.Cartesian3.fromDegreesArray(\r
                langS\r
                .map((long) => {\r
                    return [long, lat].join(",");\r
                })\r
                .join(",")\r
                .split(",")\r
                .map((item) => Number(item))\r
            ),\r
            width: 1.0,\r
            material: Cesium.Color.WHITE,\r
            },\r
            label: {\r
                text: text,\r
                font: "12px sans-serif",\r
                fillColor: Cesium.Color.WHITE,\r
            },\r
        });\r
    }\r
}\r
`,S4=`export function addSceneInfo(viewer) {\r
    const czml = [\r
        {\r
          id: "document",\r
          name: "CZML Point",\r
          version: "1.0",\r
        },\r
        {\r
          id: "point",\r
          name: "point",\r
          description: "<!--HTML-->\\r\\n<p>GeoEye-1 is a high-resolution earth observation satellite owned by GeoEye, which was launched in September 2008.</p>\\r\\n\\r\\n<p>On December 1, 2004, General Dynamics C4 Systems announced it had been awarded a contract worth approximately $209 million to build the OrbView-5 satellite. Its sensor is designed by the ITT Exelis.</p>\\r\\n\\r\\n<p>The satellite, now known as GeoEye-1, was originally scheduled for April 2008 but lost its 30-day launch slot to a U.S. government mission which had been delayed. It was rescheduled for launch August 22, 2008 from Vandenberg Air Force Base aboard a Delta II launch vehicle. The launch was postponed to September 4, 2008, due to unavailability of the Big Crow telemetry-relay aircraft. It was delayed again to September 6 because Hurricane Hanna interfered with its launch crews.</p>\\r\\n\\r\\n<p>The launch took place successfully on September 6, 2008 at 11:50:57 a.m. PDT (18:50:57 UTC). The GeoEye-1 satellite separated successfully from its Delta II launch vehicle at 12:49 p.m. PDT (19:49 UTC), 58 minutes and 56 seconds after launch.</p>",\r
          position: {\r
            cartographicDegrees: [-111.0, 40.0, 0],\r
          },\r
          point: {\r
            color: {\r
              rgba: [255, 255, 255, 255],\r
            },\r
            outlineColor: {\r
              rgba: [255, 0, 0, 255],\r
            },\r
            outlineWidth: 4,\r
            pixelSize: 20,\r
          },\r
        },\r
      ];\r
      \r
    var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));\r
\r
    dataSourcePromise.then(function (dataSource) {\r
        viewer.zoomTo(dataSource).then(function() {\r
            viewer.trackedEntity = dataSource.entities.getById('point');\r
        });\r
    }).catch(function (error) {\r
        console.error(error);\r
    });\r
\r
    // 监听selectedEntityChanged事件，更新InfoBox内容\r
    viewer.selectedEntityChanged.addEventListener(function(entity) {\r
        if (Cesium.defined(entity) && Cesium.defined(entity.description)) {\r
            viewer.infoBox.viewModel.description = entity.description;\r
        }\r
    });\r
}`,C4=`export function exportImage(viewer){\r
    // 获取场景的canvas\r
    const canvas = viewer.scene.canvas;\r
    // 创建一个临时的a标签用于下载图片\r
    const a = document.createElement('a');\r
    a.href = canvas.toDataURL('image/png');\r
    a.download = 'screenshot.png';\r
    // 模拟点击a标签进行下载\r
    a.click();\r
}`,x4=`export function addJingweiNetwork2D(viewer) {\r
    if(Cesium.FeatureDetection.supportsImageRenderingPixelated()){  // 判断是否支持图像渲染像素化处理\r
        viewer.resolutionScale = window.devicePixelRatio;\r
    }\r
    // 开启抗锯齿(在折线进行放大的时候会出现锯齿状的形态，开启抗锯齿可以避免这种情况)\r
    viewer.scene.fxaa = true;\r
    viewer.scene.postProcessStages.fxaa.enabled = true;\r
\r
    const entities = viewer.entities;\r
    for (let lang = -180; lang <= 180; lang += 20) {\r
        let text = "";\r
        if (lang === 0) {\r
            text = "0";\r
        }\r
        text += lang === 0 ? "" : "" + lang + "°";\r
        if (lang === -180) {\r
            text = "";\r
        }\r
\r
        entities.add({\r
            position: Cesium.Cartesian3.fromDegrees(lang, 0),\r
            polyline: {\r
                positions: Cesium.Cartesian3.fromDegreesArray([\r
                    lang,\r
                    -90,\r
                    lang,\r
                    0,\r
                    lang,\r
                    90,\r
                ]),\r
                width: 1.0,\r
                material: Cesium.Color.WHITE,\r
            },\r
            label: {\r
                text: text,\r
                verticalOrigin: Cesium.VerticalOrigin.TOP,\r
                font: "12px sans-serif",\r
                fillColor: Cesium.Color.WHITE,\r
            },\r
        });\r
    }\r
\r
    //纬度\r
    let langS = [];\r
    for (let lang = -180; lang <= 180; lang += 5) {\r
        langS.push(lang);\r
    } \r
    // 每隔10读绘制一条纬度线和纬度标注\r
    for (let lat = -80; lat <= 80; lat += 10) {\r
        let text = "";\r
        text += "" + lat + "°";\r
        if (lat === 0) {\r
            text = "";\r
        }\r
        entities.add({\r
            position: Cesium.Cartesian3.fromDegrees(0, lat),\r
            polyline: {\r
            positions: Cesium.Cartesian3.fromDegreesArray(\r
                langS\r
                .map((long) => {\r
                    return [long, lat].join(",");\r
                })\r
                .join(",")\r
                .split(",")\r
                .map((item) => Number(item))\r
            ),\r
            width: 1.0,\r
            material: Cesium.Color.WHITE,\r
            },\r
            label: {\r
                text: text,\r
                font: "12px sans-serif",\r
                fillColor: Cesium.Color.WHITE,\r
            },\r
        });\r
    }\r
}\r
`,k4=`\r
export function addDial(viewer, timetext) {\r
         // 格式化时间轴\r
        viewer.timeline.makeLabel = function (date) {\r
        const julianDT = new Cesium.JulianDate();\r
        Cesium.JulianDate.addHours(date, 8, julianDT);\r
        var gregorianDT = Cesium.JulianDate.toGregorianDate(julianDT);\r
        let hour = gregorianDT.hour + "";\r
        let minute = gregorianDT.minute + "";\r
        let second = gregorianDT.second + "";\r
        timetext = \`\${gregorianDT.year}年\${gregorianDT.month}月\${gregorianDT.day}日\${hour.padStart(2, "0")}:\${minute.padStart(2, "0")}:\${second.padStart(2,"0")}\`\r
        return \`\${gregorianDT.year}年\${gregorianDT.month}月\${gregorianDT.day}日\${hour.padStart(2, "0")}:\${minute.padStart(2, "0")}:\${second.padStart(2,"0")}\`;\r
        };\r
    };\r
\r
export function forward(viewer) {\r
  let t = viewer.clockViewModel.multiplier;\r
  viewer.clockViewModel.multiplier = Math.abs(t);\r
  viewer.clock.shouldAnimate = true;\r
}\r
var flag = false;\r
export function start(viewer) {\r
   flag = !(flag);\r
  if(flag==true)\r
    viewer.clock.shouldAnimate = true;\r
  else\r
    viewer.clock.shouldAnimate = false;\r
}\r
export function back(viewer) {\r
  let t = viewer.clockViewModel.multiplier;\r
  viewer.clockViewModel.multiplier = -Math.abs(t);\r
  viewer.clock.shouldAnimate = true;\r
}\r
export function multiplier(viewer) {\r
  viewer.clockViewModel.multiplier *= 2;\r
}\r
\r
export function divide(viewer) {\r
  viewer.clockViewModel.multiplier /= 2;\r
\r
}\r
export function reset(viewer) {\r
  viewer.clock.currentTime = viewer.clock.startTime;\r
}`,P4=`export function change(viewer, divisionCount) {\r
    if(Cesium.FeatureDetection.supportsImageRenderingPixelated()){  // 判断是否支持图像渲染像素化处理\r
        viewer.resolutionScale = window.devicePixelRatio;\r
    }\r
    // 开启抗锯齿(在折线进行放大的时候会出现锯齿状的形态，开启抗锯齿可以避免这种情况)\r
    viewer.scene.fxaa = true;\r
    viewer.scene.postProcessStages.fxaa.enabled = true;\r
    \r
    for (let i = 0; i < divisionCount; i++) {\r
      const angle = (360 / divisionCount) * i;\r
      const startLongitude = angle - 180;\r
      const endLongitude = startLongitude + 10; \r
\r
      viewer.entities.add({\r
        polyline: {\r
          positions: Cesium.Cartesian3.fromDegreesArrayHeights([\r
            startLongitude, 0, 100000, \r
            endLongitude, 0, 100000 \r
          ]),\r
          width: 2,\r
          material: Cesium.Color.PINK,\r
        }\r
      });\r
\r
      viewer.entities.add({\r
        position: Cesium.Cartesian3.fromDegrees(startLongitude + 5, 0, 0),\r
        label: {\r
          text: \`\${startLongitude}°\`,\r
          font: '16px Helvetica',\r
          fillColor: Cesium.Color.WHITE,\r
          pixelOffset: new Cesium.Cartesian2(0, -10),\r
          scale: 0.5,\r
        }\r
      });\r
    }\r
}\r
  \r
`,$4=`export function addCircularSpaceGrid(viewer) {\r
    // 定义圆心位置和半径\r
    const center = Cesium.Cartesian3.fromDegrees(120, 30);\r
    const radius = 100000; // 半径，单位为米\r
\r
    // 定义网格参数\r
    const numRings = 10; // 圆环数量\r
    const numRadials = 24; // 径向数量\r
\r
    // 创建圆环\r
    for (let i = 1; i <= numRings; i++) {\r
        const circleRadius = radius * i / numRings;\r
        const circlePositions = [];\r
        for (let j = 0; j <= 360; j++) {\r
            const angle = Cesium.Math.toRadians(j);\r
            const x = circleRadius * Math.cos(angle);\r
            const y = circleRadius * Math.sin(angle);\r
            const position = Cesium.Cartesian3.add(center, new Cesium.Cartesian3(x, y, 0), new Cesium.Cartesian3());\r
            circlePositions.push(position);\r
        }\r
        viewer.entities.add({\r
            name: \`Circle Ring \${i}\`,\r
            polyline: {\r
                positions: circlePositions,\r
                width: 1,\r
                material: Cesium.Color.WHITE\r
            }\r
        });\r
    }\r
\r
    // 创建径向线\r
    for (let i = 0; i < numRadials; i++) {\r
        const angle = Cesium.Math.toRadians(360 * i / numRadials);\r
        const endPoint = Cesium.Cartesian3.add(\r
            center,\r
            new Cesium.Cartesian3(radius * Math.cos(angle), radius * Math.sin(angle), 0),\r
            new Cesium.Cartesian3()\r
        );\r
        viewer.entities.add({\r
            name: \`Radial \${i}\`,\r
            polyline: {\r
                positions: [center, endPoint],\r
                width: 1,\r
                material: Cesium.Color.WHITE\r
            }\r
        });\r
    }\r
\r
    viewer.camera.flyTo({\r
        destination: Cesium.Cartesian3.fromDegrees(120, 30, 300000),\r
        orientation: {\r
            heading: Cesium.Math.toRadians(0),\r
            pitch: Cesium.Math.toRadians(-90),\r
            roll: 0.0\r
        }\r
    });\r
}\r
`,Q4=`export function addRectangularSpaceGrid(viewer) {\r
    // 定义矩形的中心位置和尺寸\r
    const center = Cesium.Cartesian3.fromDegrees(120, 30);\r
    const width = 200000; // 矩形的宽度，单位为米\r
    const height = 200000; // 矩形的高度，单位为米\r
\r
    // 定义网格参数\r
    const numHorizontalLines = 10; // 水平线数量\r
    const numVerticalLines = 10; // 垂直线数量\r
\r
    // 计算每个网格单元的大小\r
    const horizontalSpacing = width / numHorizontalLines;\r
    const verticalSpacing = height / numVerticalLines;\r
\r
    // 创建水平线\r
    for (let i = 0; i <= numHorizontalLines; i++) {\r
        const yOffset = (i - numHorizontalLines / 2) * horizontalSpacing;\r
        const startPoint = Cesium.Cartesian3.add(\r
            center,\r
            new Cesium.Cartesian3(-width / 2, yOffset, 0),\r
            new Cesium.Cartesian3()\r
        );\r
        const endPoint = Cesium.Cartesian3.add(\r
            center,\r
            new Cesium.Cartesian3(width / 2, yOffset, 0),\r
            new Cesium.Cartesian3()\r
        );\r
        viewer.entities.add({\r
            name: \`Horizontal Line \${i}\`,\r
            polyline: {\r
                positions: [startPoint, endPoint],\r
                width: 1,\r
                material: Cesium.Color.WHITE\r
            }\r
        });\r
    }\r
\r
    // 创建垂直线\r
    for (let i = 0; i <= numVerticalLines; i++) {\r
        const xOffset = (i - numVerticalLines / 2) * verticalSpacing;\r
        const startPoint = Cesium.Cartesian3.add(\r
            center,\r
            new Cesium.Cartesian3(xOffset, -height / 2, 0),\r
            new Cesium.Cartesian3()\r
        );\r
        const endPoint = Cesium.Cartesian3.add(\r
            center,\r
            new Cesium.Cartesian3(xOffset, height / 2, 0),\r
            new Cesium.Cartesian3()\r
        );\r
        viewer.entities.add({\r
            name: \`Vertical Line \${i}\`,\r
            polyline: {\r
                positions: [startPoint, endPoint],\r
                width: 1,\r
                material: Cesium.Color.WHITE\r
            }\r
        });\r
    }\r
\r
    viewer.camera.flyTo({\r
        destination: Cesium.Cartesian3.fromDegrees(120, 30, 300000),\r
        orientation: {\r
            heading: Cesium.Math.toRadians(0),\r
            pitch: Cesium.Math.toRadians(-90),\r
            roll: 0.0\r
        }\r
    });\r
}\r
`,T4=`export function addearthCoordinate(viewer) {\r
    const scene = viewer.scene;\r
    // 获取地球globe实例\r
    const globe = scene.globe;\r
    const baseLayer = viewer.scene.imageryLayers.get(0);\r
    \r
    scene.screenSpaceCameraController.enableCollisionDetection = false;\r
    \r
    function reset() {\r
        globe.showGroundAtmosphere = true;\r
        globe.baseColor = Cesium.Color.BLUE;\r
        globe.translucency.enabled = false;\r
        globe.translucency.frontFaceAlpha = 1.0;\r
        globe.undergroundColor = Cesium.Color.BLACK;\r
        globe.translucency.rectangle = undefined;\r
        baseLayer.colorToAlpha = undefined;\r
    }\r
    \r
    function useTranslucencyMask() {\r
        globe.showGroundAtmosphere = false;\r
        globe.baseColor = Cesium.Color.TRANSPARENT;\r
        globe.translucency.enabled = true;\r
        globe.undergroundColor = undefined;\r
        baseLayer.colorToAlpha = new Cesium.Color(0.0, 0.016, 0.059);\r
        baseLayer.colorToAlphaThreshold = 0.2;\r
    }\r
    \r
    reset();\r
    useTranslucencyMask();\r
\r
    // 创建一个以地球球心为起点的坐标系\r
    const center = new Cesium.Cartesian3(0, 0, 0); // 地球球心的坐标\r
    const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);\r
\r
    // 添加坐标轴图元\r
    viewer.scene.primitives.add(new Cesium.DebugModelMatrixPrimitive({\r
        modelMatrix: modelMatrix,\r
        length: 10000000, // 坐标轴的长度\r
        width: 2.0 // 坐标轴的宽度\r
    }));\r
}\r
`,M4=`export function addSkyBox(viewer) {\r
    // 定义图片的URL\r
    const imageUrls = {\r
        positiveX: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_px.jpg',\r
        negativeX: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_mx.jpg',\r
        positiveY: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_py.jpg',\r
        negativeY: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_my.jpg',\r
        positiveZ: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_pz.jpg',\r
        negativeZ: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/tycho2t3_80_mz.jpg',\r
    };\r
\r
    // 异步加载图片\r
    async function loadImages() {\r
        const sources = {};\r
        for (const [key, url] of Object.entries(imageUrls)) {\r
            const response = await fetch(url);\r
            const blob = await response.blob();\r
            const imageUrl = URL.createObjectURL(blob);\r
            sources[key] = imageUrl;\r
        }\r
        return sources;\r
    }\r
\r
    // 设置SkyBox\r
    loadImages().then(sources => {\r
        viewer.scene.skyBox = new Cesium.SkyBox({\r
            sources: sources\r
        });\r
    });\r
}\r
`,R4=`export function addMapx(viewerMain, viewerEye) {\r
    // 禁用鹰眼地图的操作\r
    const setViewer = (viewer) => {\r
        let control = viewer.scene.screenSpaceCameraController;\r
        control.enableRotate = false;\r
        control.enableTranslate = false;\r
        control.enableZoom = false;\r
        control.enableTilt = false;\r
        control.enableLook = false;\r
    }\r
\r
    setViewer(viewerEye)\r
\r
    //鹰眼地图与主地图同步\r
    const syncViewer = () =>{\r
        viewerEye.camera.flyTo({\r
            destination: viewerMain.camera.position,\r
            orientation: {\r
                heading: viewerMain.camera.heading,\r
                pitch: viewerMain.camera.pitch,\r
                roll: viewerMain.camera.roll\r
            },\r
            duration: 0.0\r
        });\r
    };\r
    //添加主界面Cesium 视图监听事件  \r
    viewerMain.scene.preRender.addEventListener(syncViewer);  \r
}\r
`,A4=`\r
var satelliteEntity\r
export function addViewTrack(viewer) {\r
  var start = new Cesium.JulianDate.fromDate(new Date());//把js中的时间转换为儒略时间\r
  start = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());//东八区时间\r
  // 结束时间\r
  var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());\r
  //确保查看器处于预期的时间\r
  viewer.clock.startTime = start.clone();\r
  viewer.clock.stopTime = stop.clone();\r
  viewer.clock.currentTime = start.clone();\r
  viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //循环结束时\r
  //时间变化来控制速度 // 时间速率，数字越大时间过的越快\r
  viewer.clock.multiplier = 10;\r
  //给时间线设置边界\r
  viewer.timeline.zoomTo(start, stop);\r
  class mySatePosition {\r
    constructor() {\r
      this.lon = 0;\r
      this.lat = 0;\r
      this.satelliteHeight = 700000; //卫星高度\r
      this.orbitHeight = 700000 / 2; //轨道高度\r
      this.time = 0;\r
    }\r
  }\r
  function getRandState(ifLat, degree) {\r
    var arr = [];\r
    var lat = Math.floor(360);\r
    for (var i = lat; i <= 360 + lat; i += 30) {\r
      var aaa = new mySatePosition();\r
      if (ifLat == 'lon') {\r
        aaa.lon = degree;\r
        aaa.lat = i;\r
      } else {\r
        aaa.lon = i\r
        aaa.lat = degree;\r
      }\r
      aaa.time = i - lat;\r
      arr.push(aaa);\r
    }\r
    return arr\r
  }\r
\r
  function computePosition(source, panduan) {\r
    var property = new Cesium.SampledPositionProperty();\r
    for (var i = 0; i < source.length; i++) {\r
      var time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate());\r
      var position = Cesium.Cartesian3.fromDegrees(source[i].lon, source[i].lat, panduan === 1 ? source[i].satelliteHeight : source[i].orbitHeight);\r
      property.addSample(time, position);\r
    }\r
    return property;\r
  }\r
  let ifLat = 'lon'\r
  let degree= 60\r
\r
    //获取路径\r
    let path = getRandState(ifLat, degree);\r
    //扫描圆锥\r
    var entityPath = computePosition(path, 2);\r
    var entity = viewer.entities.add({\r
      //关联时间轴  TimeIntervalCollection管理时间间隔数据的集合  把时间轴的起止时间同步为实体的\r
      availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({\r
        start: start,\r
        stop: stop\r
      })]),\r
      position: entityPath,\r
      orientation: new Cesium.VelocityOrientationProperty(entityPath)\r
    });\r
    entity.position.setInterpolationOptions({\r
      interpolationDegree: 5,\r
      interpolationAlgorithm: Cesium.LagrangePolynomialApproximation\r
    });\r
    //卫星环绕\r
    var satellitePath = computePosition(path, 1);\r
    satelliteEntity = viewer.entities.add({\r
      // 将实体availability设置为与模拟时间相同的时间间隔。\r
      availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({\r
        start: start,\r
        stop: stop\r
      })]),\r
      //计算实体位置属性\r
      position: satellitePath,\r
      //基于位置移动自动计算方向.\r
      orientation: new Cesium.VelocityOrientationProperty(satellitePath),\r
      //加载飞机模型\r
      model: {\r
        uri: 'https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/3Dmodel/spaceStation.gltf',\r
        minimumPixelSize: 100,\r
        scale: 200.0,\r
      },\r
      //白色路径\r
      path: {\r
        resolution: 1,\r
        material: new Cesium.PolylineGlowMaterialProperty({\r
          glowPower: 0.1,\r
          color: Cesium.Color.PINK\r
        }),\r
        width: 5\r
      }\r
    });\r
    //插值器\r
    satelliteEntity.position.setInterpolationOptions({\r
      interpolationDegree: 5,\r
      interpolationAlgorithm: Cesium.LagrangePolynomialApproximation\r
    })\r
}\r
\r
export function viewTrack(viewer) {\r
  viewer.camera.flyTo({\r
    destination: Cesium.Cartesian3.fromDegrees(60, 0, 1000000.0)\r
  })\r
    viewer.trackedEntity = satelliteEntity\r
}`,Z4=`export function perspectiveFly(viewer, longitude, latitude, altitude) {\r
    if (longitude && latitude && altitude) {\r
        viewer.camera.flyTo({\r
            destination: Cesium.Cartesian3.fromDegrees(parseFloat(longitude), parseFloat(latitude), parseFloat(altitude)),\r
        });\r
    } else {\r
        console.error('请输入有效的经度、纬度和高度');\r
    }\r
}`,j4=`export function zoomByBound(viewer, flag){\r
    var ellipsoid = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(\r
        viewer.canvas.clientWidth / 2,\r
        viewer.canvas.clientHeight / 2));\r
    var curPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(ellipsoid);\r
    var lon = curPosition.longitude * 180 / Math.PI;\r
    var lat = curPosition.latitude * 180 / Math.PI;\r
    var height = viewer.camera.positionCartographic.height;\r
    const camera = viewer.camera;\r
    var boundingSph = new Cesium.BoundingSphere(Cesium.Cartesian3.fromDegrees(lon, lat, 1000), height);\r
    var moveRate = 0;\r
    if(flag){\r
        moveRate = 0.5\r
    }\r
    else{\r
        moveRate = 1.5\r
    }\r
    var zoomParams = {\r
        duration: 0.8,\r
        offset: new Cesium.HeadingPitchRange(camera.heading, camera.pitch, height * moveRate)\r
    }\r
    camera.flyToBoundingSphere(boundingSph,zoomParams);\r
}\r
`,E4=`export function addRain(viewer) {\r
    viewer.scene.postProcessStages.add(new Cesium.PostProcessStage({\r
        fragmentShader: \`\r
                uniform sampler2D colorTexture;\r
                varying vec2 v_textureCoordinates;\r
                uniform float tiltAngle;\r
                uniform float rainSize;\r
                uniform float rainSpeed;\r
                float hash(float x) {\r
                    return fract(sin(x * 133.3) * 13.13);\r
                }\r
                varying vec4 fragColor;\r
                void main(void) {\r
                    float time = czm_frameNumber / rainSpeed;\r
                    vec2 resolution = czm_viewport.zw;\r
                    vec2 uv = (gl_FragCoord.xy * 2. - resolution.xy) / min(resolution.x, resolution.y);\r
                    vec3 c = vec3(.6, .7, .8);\r
                    float a = tiltAngle;\r
                    float si = sin(a), co = cos(a);\r
                    uv *= mat2(co, -si, si, co);\r
                    uv *= length(uv + vec2(0, 4.9)) * rainSize + 1.;\r
                    float v = 1. - sin(hash(floor(uv.x * 100.)) * 2.);\r
                    float b = clamp(abs(sin(20. * time * v + uv.y * (5. / (2. + v)))) - .95, 0., 1.) * 20.;\r
                    c *= v * b;\r
                    gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c, 1.0), 0.5);\r
                }\r
                \`,\r
        uniforms: {\r
            tiltAngle: -0.2, //倾斜角度\r
            rainSize: 0.8, // 雨大小\r
            rainSpeed: 200.0, // 雨速\r
        },\r
    }));\r
}\r
`,I4=`export function addSnow(viewer) {\r
    viewer.scene.postProcessStages.add(new Cesium.PostProcessStage({\r
        fragmentShader: \`\r
                uniform sampler2D colorTexture; \r
                varying vec2 v_textureCoordinates;\r
                uniform float snowSpeed;\r
                uniform float snowSize;\r
                float snow(vec2 uv,float scale)\r
                {\r
                    float time=czm_frameNumber*snowSpeed;\r
                    float w=smoothstep(1.,0.,-uv.y*(scale/10.));if(w<.1)return 0.;\r
                    uv+=time/scale;uv.y+=time*2./scale;uv.x+=sin(uv.y+time*.5)/scale;\r
                    uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;\r
                    p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);\r
                    k=smoothstep(0.,k,sin(f.x+f.y)*snowSize);\r
                    return k*w;\r
                }\r
                varying vec4 fragColor;\r
                void main(void){\r
                    vec2 resolution=czm_viewport.zw;\r
                    vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\r
                    vec3 finalColor=vec3(0);\r
                    float c=0.;\r
                    c+=snow(uv,30.)*.0;\r
                    c+=snow(uv,20.)*.0;\r
                    c+=snow(uv,15.)*.0;\r
                    c+=snow(uv,10.);\r
                    c+=snow(uv,8.);\r
                    c+=snow(uv,6.);\r
                    c+=snow(uv,5.);\r
                    finalColor=(vec3(c));\r
                    gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(finalColor, 1.0), 0.5);\r
                }\r
            \`,\r
        uniforms: {\r
            snowSize: 0.02,\r
            snowSpeed: 0.005\r
        },\r
    }));\r
}\r
`,D4=`export function addFog(viewer) {\r
    viewer.scene.postProcessStages.add(new Cesium.PostProcessStage({\r
        fragmentShader: \`\r
                uniform sampler2D colorTexture;\r
                uniform sampler2D depthTexture;\r
                uniform float visibility;\r
                uniform vec4 fogColor;\r
                varying vec2 v_textureCoordinates; \r
                varying vec4 fragColor;\r
                void main(void) \r
                { \r
                        vec4 origcolor = texture2D(colorTexture, v_textureCoordinates);\r
                    float depth = czm_readDepth(depthTexture, v_textureCoordinates); \r
                    vec4 depthcolor = texture2D(depthTexture, v_textureCoordinates);\r
                    float f = visibility * (depthcolor.r - 0.3) / 0.2; \r
                    if (f < 0.0) f = 0.0; \r
                    else if (f > 1.0) f = 1.0; \r
                    gl_FragColor = mix(origcolor, fogColor, f);\r
                }\r
            \`,\r
        uniforms: {\r
            visibility: 0.1,\r
            fogColor: new Cesium.Color(0.8, 0.8, 0.8, 0.8),\r
        },\r
    }));     \r
}\r
`,X4=`export function addWaterSurface(viewer) {\r
    viewer.scene.primitives.add(\r
        new Cesium.Primitive({\r
            geometryInstances: new Cesium.GeometryInstance({\r
                geometry: new Cesium.RectangleGeometry({\r
                    rectangle: Cesium.Rectangle.fromDegrees(\r
                        100,\r
                        30,\r
                        101,\r
                        31\r
                    ),\r
                    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,\r
                    height: 0,\r
                }),\r
            }),\r
            appearance: new Cesium.EllipsoidSurfaceAppearance({\r
                material: new Cesium.Material({\r
                    fabric: {\r
                        type: "Water",\r
                        uniforms: {\r
                            baseWaterColor: new Cesium.Color(\r
                                64 / 255.0,\r
                                157 / 255.0,\r
                                253 / 255.0,\r
                                0.6\r
                            ),\r
                            normalMap: "https://webgishome-pic.oss-cn-chengdu.aliyuncs.com/cesium/waterMaterial.jpg",\r
                            frequency: 1000.0,\r
                            animationSpeed: 0.1,\r
                            amplitude: 10,\r
                            specularIntensity: 8,\r
                        },\r
                    },\r
                }),\r
            }),\r
        })\r
    );\r
\r
    viewer.camera.setView({\r
        destination: Cesium.Cartesian3.fromDegrees(100.5, 30.5, 150000),\r
        orientation: {\r
            heading: 6.283185, //相机绕z轴旋转。左右摇头。\r
            pitch: 30, //相机绕y轴旋转。上下点头。\r
            roll: 0.0, //相机绕x轴旋转。左右歪头。\r
        },\r
    });\r
}\r
`,Y4=`export function changeCoordinate(viewer, longitude, latitude, height) {\r
    // let nums = []; //定义一个数组\r
    // nums = input.value.split(","); //将输入框的字符串数据取出来放入数组中 在数组中的input数据做个分隔\r
    let longitude2 = Cesium.Math.toRadians(longitude); //将经纬度转换为弧度\r
    let latitude2 = Cesium.Math.toRadians(latitude); //将经纬度转换为弧度\r
    let height2 = Number(height);\r
    let cartesianPosition = Cesium.Cartesian3.fromRadians(\r
      longitude2,\r
      latitude2,\r
      height2\r
    );\r
    let x = cartesianPosition.x.toFixed(4); //将需要输出的xyz坐标保留四位小数\r
    let y = cartesianPosition.y.toFixed(4);\r
    let z = cartesianPosition.z.toFixed(4);\r
    let Position = "X: " + x + ", Y: " + y + ", Z: " + z;\r
    console.log(Position);\r
}`,z4=`export function changeCoordinate(viewer, x, y, z) {\r
    // 创建Cesium.Cartesian3对象\r
    let cartesian3 = new Cesium.Cartesian3(x, y, z);\r
    // 转换为WGS84弧度坐标\r
    let cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian3);\r
    // 转换弧度为度数\r
    let longitudeDegrees = Cesium.Math.toDegrees(cartographic.longitude);\r
    let latitudeDegrees = Cesium.Math.toDegrees(cartographic.latitude);\r
    let degreesLongitude = longitudeDegrees.toFixed(4);\r
    let degreesLatitude = latitudeDegrees.toFixed(4);\r
    let Height = cartographic.height.toFixed(4);\r
    // 输出WGS84坐标\r
    console.log("经度: " + degreesLongitude + "度");\r
    console.log("纬度: " + degreesLatitude + "度");\r
    console.log("海拔: " + Height + "米");\r
  }`,W4=`export function changeTime(viewer){\r
    let date = new Date(); // 获取当前时间\r
    let utcTime = date.toISOString(); // 将UTC 时间转换为 ISO 8601 格式字符串方便进行下一步转化\r
    let julianDate = Cesium.JulianDate.fromIso8601(utcTime); // 转换为 JulianDate时间\r
    console.log(julianDate);\r
  }`,L4=`export function changeTime(viewer){\r
    let jd = Cesium.JulianDate.fromDate(new Date());  //获取一个julianDate时间\r
    let utcDate = Cesium.JulianDate.toDate(jd);  //将julianDatt时间转换为UTC时间(世界协调时)\r
    console.log(utcDate)\r
}`,B4=`export function addPoint(viewer) {\r
    const polyline = viewer.entities.add({\r
        polyline:{\r
            positions:Cesium.Cartesian3.fromDegreesArray([120,20,121000,20]),  \r
            width:10,\r
            material:Cesium.Color.WHITE,\r
            clampToGround: true,\r
        }\r
    })\r
    viewer.entities.add({\r
        position:Cesium.Cartesian3.fromDegrees(90,35),\r
        point: {\r
            pixelSize: 3, \r
            color: Cesium.Color.WHITE,\r
            outlineColor: Cesium.Color.RED,\r
            outlineWidth: 2,\r
            disableDepthTestDistance: Number.POSITIVE_INFINITY,\r
        },\r
    })\r
    let Point1 = new Cesium.Cartesian3.fromDegrees(120, 20); \r
    let Point2 = new Cesium.Cartesian3.fromDegrees(121000, 20); \r
    let lineDirection = Cesium.Cartesian3.subtract(Point2, Point1, new Cesium.Cartesian3());\r
    Cesium.Cartesian3.normalize(lineDirection, lineDirection);\r
    let point = new Cesium.Cartesian3.fromDegrees(90, 35); \r
    let projection = Cesium.Cartesian3.multiplyByScalar(lineDirection, Cesium.Cartesian3.dot(point, lineDirection), new Cesium.Cartesian3());\r
    let distance1 = Cesium.Cartesian3.distance(point, projection);\r
    let distance = distance1.toFixed(4);\r
    console.log('点到直线最近距离为:', distance + '米');\r
}`,V4=`export function addDistanceTwoPoints(viewer) {\r
    let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);\r
    viewer.scene.globe.depthTestAgainstTerrain = true; //务必开启，否则无论是否有地形，绘制点偏移都很大\r
    document.getElementById("cesiumContainer").style.cursor = "crosshair"\r
    let tempEntities = []\r
    let pointNum = 0\r
    let floatingPoint = undefined\r
    let activeShape = undefined\r
    let position = []\r
    let tempPoints = []\r
    let activeShapePoints = []\r
    \r
    /* 空间两点距离计算函数 */\r
    function getLength(start, end) {\r
        // 将起点与终点位置信息从笛卡尔坐标形式转换为Cartographic形式\r
        let startCartographic = Cesium.Cartographic.fromCartesian(start)\r
        let endCartographic = Cesium.Cartographic.fromCartesian(end)\r
        // 初始化测地线\r
        let geodesic = new Cesium.EllipsoidGeodesic()\r
        // 设置测地线起点和终点，EllipsoidGeodesic中setEndPoints常与surfaceDistance搭配使用\r
        geodesic.setEndPoints(startCartographic, endCartographic)\r
        // 获取起点和终点之间的表面距离，单位为km，规定四舍五入保留两位小数\r
        // surfaceDistance返回number 单位为m，带小数\r
        // console.log((geodesic.surfaceDistance / 1000).toFixed(2))\r
        return (geodesic.surfaceDistance / 1000).toFixed(2)\r
    }\r
    /* 空间两点计算中点函数 */\r
    function getMidpoint(start, end) {\r
        let startPoint = Cesium.Cartographic.fromCartesian(start)\r
        let endPoint = Cesium.Cartographic.fromCartesian(end)\r
        let geodesic = new Cesium.EllipsoidGeodesic()\r
        geodesic.setEndPoints(startPoint, endPoint)\r
        let geoPoint = geodesic.interpolateUsingFraction(0.5)\r
        console.log(Cesium.Ellipsoid.WGS84.cartographicToCartesian(geoPoint))\r
        return Cesium.Ellipsoid.WGS84.cartographicToCartesian(geoPoint)\r
    }\r
    function addLabel(midPoint, labelLength) {\r
        return viewer.entities.add({\r
        name: "中点",\r
        position: midPoint,\r
        label: {\r
            text: labelLength + "km",\r
            font: "20px sans-serif",\r
            fillColor: Cesium.Color.WHITE,\r
            outlineWidth: 2,\r
            backgroundColor: Cesium.Color.BLACK,\r
            showBackground: true,\r
            style: Cesium.LabelStyle.FILL,\r
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,\r
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,\r
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,\r
            disableDepthTestDistance: Number.POSITIVE_INFINITY\r
        }\r
        })\r
    }\r
    /* 测量空间面积 */\r
    // 方向\r
    function Bearing(from, to) {\r
        let fromCartographic = Cesium.Cartographic.fromCartesian(from)\r
        let toCartographic = Cesium.Cartographic.fromCartesian(to)\r
        let lat1 = fromCartographic.latitude\r
        let lon1 = fromCartographic.longitude\r
        let lat2 = toCartographic.latitude\r
        let lon2 = toCartographic.longitude\r
        let angle = -Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2))\r
        if (angle < 0) {\r
            angle += Math.PI * 2.0\r
        }\r
        return angle\r
    }\r
    // 角度\r
    function pointAngle(point1, point2, point3) {\r
        let bearing21 = Bearing(point2, point1)\r
        let bearing23 = Bearing(point2, point3)\r
        let angle = bearing21 - bearing23\r
        if (angle < 0) {\r
            angle += Math.PI * 2.0\r
        }\r
        return angle\r
    }\r
    function getArea(positions) {\r
        let res = 0\r
        for (let i = 0; i < positions.length - 2; i++) {\r
            let j = (i + 1) % positions.length\r
            let k = (i + 2) % positions.length\r
            let totalAngle = pointAngle(positions[i], positions[j], positions[k])\r
            let tempLength1 = getLength(positions[j], positions[0])\r
            let tempLength2 = getLength(positions[k], positions[0])\r
            res += tempLength1 * tempLength2 * Math.sin(totalAngle) / 2\r
        }\r
        res = res.toFixed(2)\r
        // console.log(res)\r
        res = parseFloat(res)\r
        // console.log(Math.abs(res))\r
        return Math.abs(res)\r
    }\r
    function addArea(area, positions) {\r
        return viewer.entities.add({\r
            name: "多边形面积",\r
            position: positions[positions.length - 1],\r
            label: {\r
                text: area + "平方公里",\r
                font: "20px sans-serif",\r
                fillColor: Cesium.Color.WHITE,\r
                outlineWidth: 2,\r
                backgroundColor: Cesium.Color.BLACK,\r
                showBackground: true,\r
                style: Cesium.LabelStyle.FILL,\r
                pixelOffset: new Cesium.Cartesian2(60, -60),\r
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,\r
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,\r
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,\r
                disableDepthTestDistance: Number.POSITIVE_INFINITY\r
            }\r
        })\r
    }\r
    /* 绘制函数 */\r
    function drawPointLabel(position, pointNum) {\r
        // 本质上就是添加一个点的实体\r
        return viewer.entities.add({\r
            name: "点几何对象",\r
            position: position,\r
            point: {\r
                color: Cesium.Color.WHEAT,\r
                pixelSize: 5,\r
                outlineWidth: 3,\r
                disableDepthTestDistance: Number.POSITIVE_INFINITY, //\r
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 规定贴地\r
            },\r
            label: {\r
                text: pointNum,\r
                font: "30px sans-serif",\r
                fillColor: Cesium.Color.WHITE,\r
                outlineWidth: 2,\r
                backgroundColor: Cesium.Color.BLACK,\r
                showBackground: true,\r
                style: Cesium.LabelStyle.FILL,\r
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,\r
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER\r
            }\r
        })\r
    }\r
    function drawPoint(position) {\r
        // 本质上就是添加一个点的实体\r
        return viewer.entities.add({\r
            position: position,\r
            point: {\r
                color: Cesium.Color.WHEAT,\r
                pixelSize: 5,\r
                outlineWidth: 3,\r
                disableDepthTestDistance: Number.POSITIVE_INFINITY,\r
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 规定贴地\r
            }\r
        })\r
    }\r
    function drawPolyline(positions) {\r
        if (positions.length < 1) return\r
        return viewer.entities.add({\r
            name: "线几何对象",\r
            polyline: {\r
                positions: positions,\r
                width: 5.0,\r
                material: new Cesium.PolylineGlowMaterialProperty({\r
                    // eslint-disable-next-line new-cap\r
                    color: Cesium.Color.WHEAT\r
                }),\r
                depthFailMaterial: new Cesium.PolylineGlowMaterialProperty({\r
                    // eslint-disable-next-line new-cap\r
                    color: Cesium.Color.WHEAT\r
                }),\r
                clampToGround: true\r
            }\r
        })\r
    }\r
    \r
    /* 清除实体 */\r
    function clearAllDrawn() {\r
        tempEntities = []\r
        pointNum = 0\r
        viewer.entities.removeAll()\r
    }\r
    \r
    // 开启深度检测\r
    viewer.scene.globe.depthTestAgainstTerrain = true\r
    // 创建场景的HTML canvas元素\r
    // 取消鼠标双击事件\r
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)\r
    // 监听鼠标移动\r
    handler.setInputAction(function (movement) {\r
        if (Cesium.defined(floatingPoint)) {\r
            let newPosition = viewer.scene.pickPosition(movement.endPosition)\r
            if (Cesium.defined(newPosition)) {\r
                floatingPoint.position.setValue(newPosition)\r
                activeShapePoints.pop()\r
                activeShapePoints.push(newPosition)\r
            }\r
        }\r
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)\r
    // 左键单击开始画线\r
    handler.setInputAction(function (click) {\r
        let earthPosition = viewer.scene.pickPosition(click.position)\r
        if (Cesium.defined(earthPosition)) {\r
            floatingPoint = drawPoint(earthPosition)\r
        }\r
        // 获取位置信息\r
        // 从相机位置创建一条射线，这条射线通过世界中movement.position像素所在的坐标,返回Cartesian3坐标\r
        let ray = viewer.camera.getPickRay(click.position)\r
        // 找到射线与渲染的地球表面之间的交点。射线必须以世界坐标给出。返回Cartesian3坐标\r
        position = viewer.scene.globe.pick(ray, viewer.scene)\r
        tempPoints.push(position) // 记录点位\r
        pointNum += 1\r
        let tempLength = tempPoints.length // 记录点数\r
        // 调用绘制点的接口\r
        let point = drawPointLabel(tempPoints[tempPoints.length - 1], JSON.stringify(pointNum))\r
        tempEntities.push(point)\r
        // 存在超过一个点时\r
        if (tempLength > 1) {\r
            // 绘制线\r
            let pointLength = getLength(tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1])\r
            let midPosition = getMidpoint(tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1])\r
            let pointline = drawPolyline([tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1]])\r
            let pointLabel = addLabel(midPosition, pointLength)\r
            tempEntities.push(pointline) // 保存记录\r
            tempEntities.push(pointLabel)\r
        }\r
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)\r
    // 右键单击结束画线\r
    handler.setInputAction(function (click) {\r
        console.log(pointNum)\r
        activeShapePoints.pop()\r
        viewer.entities.remove(activeShapePoints)\r
        viewer.entities.remove(floatingPoint)\r
        tempPoints = [] // 清空点位记录\r
        handler.destroy()\r
        handler = null\r
        floatingPoint = undefined\r
        activeShape = undefined\r
        activeShapePoints = []\r
        console.log(pointNum)\r
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)\r
}\r
`,$u={月球轨道:Ub,绕太阳:_b,添加测站:Gb,测站坐标系:Fb,指定连接类型:Jb,车:Hb,船:Kb,飞机:e4,机械臂动画:t4,实时驱动:n4,坐标轴:r4,大批量动目标:i4,大批量动目标websocket:s4,大批量动目标socketIO:o4,点选路径:a4,导弹发射:l4,导弹机动发射:c4,火箭发射:u4,火箭发射卫星入轨:h4,获取模型节点数:d4,点:f4,线:p4,多颜色线:m4,面:O4,椭圆:g4,盒子:v4,直线箭头:w4,晨昏线:y4,经纬网络3D:b4,场景信息:S4,场景截图:C4,经纬网络2D:x4,时间盘:k4,圆形空间网格:$4,矩形空间网格:Q4,地球坐标系:T4,天空盒:M4,鹰眼图:R4,刻度盘:P4,跟踪视角:A4,视角飞行:Z4,相机缩放:j4,雨:E4,雪:I4,雾:D4,水面:X4,经纬高转地固XYZ:Y4,地固XYZ转经纬高:z4,UTC时间转JulianDate:W4,JulianDate转UTC时间:L4,计算点到直线的距离:B4,计算两点间距离:V4};function N4(r){if(!$u.hasOwnProperty(r))throw new Error(`${r}不存在`);return $u[r]}var q4={colors:{surface1:"#011627",surface2:"#243b4c",surface3:"#112331",clickable:"#6988a1",base:"#808080",disabled:"#4D4D4D",hover:"#c5e4fd",accent:"#c5e4fd",error:"#ffcdca",errorSurface:"#811e18"},syntax:{plain:"#d6deeb",comment:{color:"#999999",fontStyle:"italic"},keyword:{color:"#c792ea",fontStyle:"italic"},tag:"#7fdbca",punctuation:"#7fdbca",definition:"#82aaff",property:{color:"#addb67",fontStyle:"italic"},static:"#f78c6c",string:"#ecc48d"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',size:"13px",lineHeight:"20px"}};const U4=r=>(P0("data-v-6409079c"),r=r(),$0(),r),_4={class:"app-continer"},G4={class:"btn-class"},F4=U4(()=>qs("span",{style:{color:"aliceblue"}}," 回到首页 ",-1)),J4={__name:"CodeAndCesium",setup(r){const e=b0(),t=S0(),n=U(),s=U(),o=U({"src/App.vue":{code:n,readOnly:!1,active:!0,hidden:!1},"src/function.js":{code:s}});function a(){t.push("/")}return Vn(()=>{n.value=qb(e.query.id),s.value=N4(e.query.id)}),(l,c)=>{const u=x0("el-button");return k0(),C0(rt,null,[qs("div",_4,[y(Vt(Rw),{template:"vue3",style:{width:"100%",height:"100%"},files:o.value,theme:Vt(q4)},{default:Br(()=>[y(Vt(gu),{class:"h-[80%] w-full"},{default:Br(()=>[y(Vt(ky),{showLineNumbers:"",style:{height:"100%"}}),y(Vt(Zy),{style:{height:"100%"}})]),_:1}),y(Vt(gu),{class:"h-[20%] w-full"},{default:Br(()=>[y(Vt(Uy),{style:{height:"100%"}})]),_:1})]),_:1},8,["files","theme"])]),qs("div",G4,[y(u,{onClick:a,style:{"background-color":"rgb(33.2, 61.4, 90.5)",border:"0cap"}},{default:Br(()=>[F4]),_:1})])],64)}}},H4=y0(J4,[["__scopeId","data-v-6409079c"]]),o9=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"}));export{o9 as C,Vc as S,r9 as _,o5 as a,a5 as b,$n as c,l5 as d,pr as e,u5 as f,h5 as g,i9 as h,Kd as i,d5 as j,Ls as n};

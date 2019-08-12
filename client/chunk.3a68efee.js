import{c as a,d as o,b as c,A as r,e,J as s,B as n,f as t,g as d,h,i as l,l as i,m as f,q as u,a3 as v,K as m,Y as p,a as E}from"./chunk.7be93334.js";function H(a,o,c){const r=Object.create(a);return r.doc=o[c],r}function T(a){for(var o,c,u,v,m,E,T,D,b,y,A,L,N,I,M,O,B,R,V,$,k,q,x,C=a.showHeader&&j(a),P=a.showHeader&&w(a),Y=a.jsdoc,J=[],K=0;K<Y.length;K+=1)J[K]=g(H(a,Y,K));return{c(){C&&C.c(),o=r(),c=e("section"),P&&P.c(),u=r(),v=e("div"),m=e("table"),E=e("thead"),T=e("tr"),D=e("th"),b=s("Name"),y=r(),A=e("th"),L=s("Description"),N=r(),I=e("th"),M=s("Type"),O=r(),B=e("th"),R=s("Values"),V=r(),$=e("th"),k=s("Default"),q=r(),x=e("tbody");for(var a=0;a<J.length;a+=1)J[a].c();this.h()},l(a){C&&C.l(a),o=n(a,"\n\n  "),c=t(a,"SECTION",{},!1);var r=d(c);P&&P.l(r),u=n(r,"\n\n    "),v=t(r,"DIV",{class:!0},!1);var e=d(v);m=t(e,"TABLE",{class:!0},!1);var s=d(m);E=t(s,"THEAD",{},!1);var l=d(E);T=t(l,"TR",{},!1);var i=d(T);D=t(i,"TH",{},!1);var f=d(D);b=n(f,"Name"),f.forEach(h),y=n(i,"\n            "),A=t(i,"TH",{},!1);var p=d(A);L=n(p,"Description"),p.forEach(h),N=n(i,"\n            "),I=t(i,"TH",{},!1);var H=d(I);M=n(H,"Type"),H.forEach(h),O=n(i,"\n            "),B=t(i,"TH",{},!1);var j=d(B);R=n(j,"Values"),j.forEach(h),V=n(i,"\n            "),$=t(i,"TH",{},!1);var w=d($);k=n(w,"Default"),w.forEach(h),i.forEach(h),l.forEach(h),q=n(s,"\n        "),x=t(s,"TBODY",{},!1);for(var g=d(x),Y=0;Y<J.length;Y+=1)J[Y].l(g);g.forEach(h),s.forEach(h),e.forEach(h),r.forEach(h),this.h()},h(){l(m,"class","table is-fullwidth"),l(v,"class","table-wrapper svelte-1kqt1pt")},m(a,r){C&&C.m(a,r),i(a,o,r),i(a,c,r),P&&P.m(c,null),f(c,u),f(c,v),f(v,m),f(m,E),f(E,T),f(T,D),f(D,b),f(T,y),f(T,A),f(A,L),f(T,N),f(T,I),f(I,M),f(T,O),f(T,B),f(B,R),f(T,V),f(T,$),f($,k),f(m,q),f(m,x);for(var e=0;e<J.length;e+=1)J[e].m(x,null)},p(a,r){if(r.showHeader?C||((C=j(r)).c(),C.m(o.parentNode,o)):C&&(C.d(1),C=null),r.showHeader?P||((P=w(r)).c(),P.m(c,u)):P&&(P.d(1),P=null),a.jsdoc){Y=r.jsdoc;for(var e=0;e<Y.length;e+=1){const o=H(r,Y,e);J[e]?J[e].p(a,o):(J[e]=g(o),J[e].c(),J[e].m(x,null))}for(;e<J.length;e+=1)J[e].d(1);J.length=Y.length}},d(a){C&&C.d(a),a&&(h(o),h(c)),P&&P.d(),p(J,a)}}}function j(a){var o;return{c(){o=e("hr"),this.h()},l(a){o=t(a,"HR",{class:!0},!1),d(o).forEach(h),this.h()},h(){l(o,"class","is-medium")},m(a,c){i(a,o,c)},d(a){a&&h(o)}}}function w(a){var o,c;return{c(){o=e("h2"),c=s("API"),this.h()},l(a){o=t(a,"H2",{class:!0},!1);var r=d(o);c=n(r,"API"),r.forEach(h),this.h()},h(){l(o,"class","title is-4")},m(a,r){i(a,o,r),f(o,c)},d(a){a&&h(o)}}}function D(a){var o;return{c(){o=s(", optional")},l(a){o=n(a,", optional")},m(a,c){i(a,o,c)},d(a){a&&h(o)}}}function g(a){var o,c,l,p,E,H,T,j,w,g,b,y,A,L,N,I,M=a.doc.name+"",O=a.doc.description+"",B=(a.doc.type||[]).join(", ")+"",R=a.doc.values||"&mdash;",V="defaultvalue"in a.doc&&`<code>${a.doc.defaultvalue}</code>`||"&mdash;",$=a.doc.optional&&D();return{c(){o=e("tr"),c=e("td"),l=e("code"),p=s(M),E=r(),H=e("td"),j=u(),$&&$.c(),w=r(),g=e("td"),b=s(B),y=r(),A=e("td"),L=r(),N=e("td"),I=r(),this.h()},l(a){o=t(a,"TR",{},!1);var r=d(o);c=t(r,"TD",{},!1);var e=d(c);l=t(e,"CODE",{},!1);var s=d(l);p=n(s,M),s.forEach(h),e.forEach(h),E=n(r,"\n              "),H=t(r,"TD",{},!1);var i=d(H);j=u(),$&&$.l(i),i.forEach(h),w=n(r,"\n              "),g=t(r,"TD",{},!1);var f=d(g);b=n(f,B),f.forEach(h),y=n(r,"\n              "),A=t(r,"TD",{},!1),d(A).forEach(h),L=n(r,"\n              "),N=t(r,"TD",{},!1),d(N).forEach(h),I=n(r,"\n            "),r.forEach(h),this.h()},h(){T=new v(O,j)},m(a,r){i(a,o,r),f(o,c),f(c,l),f(l,p),f(o,E),f(o,H),T.m(H),f(H,j),$&&$.m(H,null),f(o,w),f(o,g),f(g,b),f(o,y),f(o,A),A.innerHTML=R,f(o,L),f(o,N),N.innerHTML=V,f(o,I)},p(a,o){a.jsdoc&&M!==(M=o.doc.name+"")&&m(p,M),a.jsdoc&&O!==(O=o.doc.description+"")&&T.p(O),o.doc.optional?$||(($=D()).c(),$.m(H,null)):$&&($.d(1),$=null),a.jsdoc&&B!==(B=(o.doc.type||[]).join(", ")+"")&&m(b,B),a.jsdoc&&R!==(R=o.doc.values||"&mdash;")&&(A.innerHTML=R),a.jsdoc&&V!==(V="defaultvalue"in o.doc&&`<code>${o.doc.defaultvalue}</code>`||"&mdash;")&&(N.innerHTML=V)},d(a){a&&h(o),$&&$.d()}}}function b(a){var o,c=a.jsdoc&&T(a);return{c(){c&&c.c(),o=u()},l(a){c&&c.l(a),o=u()},m(a,r){c&&c.m(a,r),i(a,o,r)},p(a,r){r.jsdoc?c?c.p(a,r):((c=T(r)).c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},i:E,o:E,d(a){c&&c.d(a),a&&h(o)}}}function y(a,o,c){let{jsdoc:r,showHeader:e=!0}=o;return a.$set=(a=>{"jsdoc"in a&&c("jsdoc",r=a.jsdoc),"showHeader"in a&&c("showHeader",e=a.showHeader)}),{jsdoc:r,showHeader:e}}class A extends a{constructor(a){super(),o(this,a,y,b,c,["jsdoc","showHeader"])}}export{A as a};
//# sourceMappingURL=chunk.3a68efee.js.map
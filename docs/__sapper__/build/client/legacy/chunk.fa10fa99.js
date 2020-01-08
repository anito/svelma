import{u as e}from"./chunk.62c32bab.js";import{d as n}from"./chunk.891d8ac1.js";var t=n(function(n,t){!function(n){"object"===("undefined"==typeof window?"undefined":e(window))&&window||"object"===("undefined"==typeof self?"undefined":e(self))&&self;!function(e){var n=[],t=Object.keys,r={},a={},i=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(e){return e.nodeName.toLowerCase()}function f(e,n){var t=e&&e.exec(n);return t&&0===t.index}function d(e){return i.test(e)}function E(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function v(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),g(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function m(e){function n(e){return e&&e.source||e}function r(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}!function a(i,s){if(i.compiled)return;i.compiled=!0;i.keywords=i.keywords||i.beginKeywords;if(i.keywords){var o={},l=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.keywords?l("keyword",i.keywords):t(i.keywords).forEach(function(e){l(e,i.keywords[e])}),i.keywords=o}i.lexemesRe=r(i.lexemes||/\w+/,!0);s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=r(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=r(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end));i.illegal&&(i.illegalRe=r(i.illegal));null==i.relevance&&(i.relevance=1);i.contains||(i.contains=[]);i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return E(e,{variants:null},n)}));return e.cached_variants||e.endsWithParent&&[E(e)]||[e]}("self"===e?i:e)}));i.contains.forEach(function(e){a(e,i)});i.starts&&a(i.starts,s);var c=i.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=c.length?r(function(e,t){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,i="",s=0;s<e.length;s++){var o=a,l=n(e[s]);for(s>0&&(i+=t);l.length>0;){var c=r.exec(l);if(null==c){i+=l;break}i+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+o):(i+=c[0],"("==c[0]&&a++)}}return i}(c,"|"),!0):{exec:function(){return null}}}(e)}function b(e,n,t,a){function i(e,n){var t=E.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function s(e,n,t,r){var a=r?"":c.classPrefix,i='<span class="'+a,s=t?"":l;return(i+=e+'">')+n+s}function o(){_+=null!=p.subLanguage?function(){var e="string"==typeof p.subLanguage;if(e&&!r[p.subLanguage])return u(w);var n=e?b(p.subLanguage,w,!0,R[p.subLanguage]):h(w,p.subLanguage.length?p.subLanguage:void 0);p.relevance>0&&(x+=n.relevance);e&&(R[p.subLanguage]=n.top);return s(n.language,n.value,!1,!0)}():function(){var e,n,t,r;if(!p.keywords)return u(w);r="",n=0,p.lexemesRe.lastIndex=0,t=p.lexemesRe.exec(w);for(;t;)r+=u(w.substring(n,t.index)),(e=i(p,t))?(x+=e[1],r+=s(e[0],u(t[0]))):r+=u(t[0]),n=p.lexemesRe.lastIndex,t=p.lexemesRe.exec(w);return r+u(w.substr(n))}(),w=""}function g(e){_+=e.className?s(e.className,"",!0):"",p=Object.create(e,{parent:{value:p}})}function d(e,n){if(w+=e,null==n)return o(),0;var r=function(e,n){var t,r;for(t=0,r=n.contains.length;t<r;t++)if(f(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=(a=n.contains[t].beginRe.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.contains[t];var a}(n,p);if(r)return r.skip?w+=n:(r.excludeBegin&&(w+=n),o(),r.returnBegin||r.excludeBegin||(w=n)),g(r),r.returnBegin?0:n.length;var a=function e(n,t){if(f(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(p,n);if(a){var i=p;i.skip?w+=n:(i.returnEnd||i.excludeEnd||(w+=n),o(),i.excludeEnd&&(w=n));do{p.className&&(_+=l),p.skip||p.subLanguage||(x+=p.relevance),p=p.parent}while(p!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),g(a.starts)),i.returnEnd?0:n.length}if(function(e,n){return!t&&f(n.illegalRe,e)}(n,p))throw new Error('Illegal lexeme "'+n+'" for mode "'+(p.className||"<unnamed>")+'"');return w+=n,n.length||1}var E=N(e);if(!E)throw new Error('Unknown language: "'+e+'"');m(E);var v,p=a||E,R={},_="";for(v=p;v!==E;v=v.parent)v.className&&(_=s(v.className,"",!0)+_);var w="",x=0;try{for(var M,O,S=0;p.terminators.lastIndex=S,M=p.terminators.exec(n);)O=d(n.substring(S,M.index),M[0]),S=M.index+O;for(d(n.substr(S)),v=p;v.parent;v=v.parent)v.className&&(_+=l);return{relevance:x,value:_,language:e,top:p}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:u(n)};throw e}}function h(e,n){n=n||c.languages||t(r);var a={relevance:0,value:u(e)},i=a;return n.filter(N).filter(w).forEach(function(n){var t=b(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>a.relevance&&(i=a,a=t)}),i.language&&(a.second_best=i),a}function p(e){return c.tabReplace||c.useBR?e.replace(o,function(e,n){return c.useBR&&"\n"===e?"<br>":c.tabReplace?n.replace(/\t/g,c.tabReplace):""}):e}function R(e){var t,r,i,o,l,f=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=s.exec(i))return N(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;n<r;n++)if(d(a=i[n])||N(a))return a}(e);d(f)||(c.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,l=t.textContent,i=f?b(f,l,!0):h(l),(r=v(t)).length&&((o=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,t,r){var a=0,i="",s=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){i+="<"+g(e)+n.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+u(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){i+="</"+g(e)+">"}function f(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){var d=o();if(i+=u(r.substring(a,d[0].offset)),a=d[0].offset,d===e){s.reverse().forEach(c);do{f(d.splice(0,1)[0]),d=o()}while(d===e&&d.length&&d[0].offset===a);s.reverse().forEach(l)}else"start"===d[0].event?s.push(d[0].node):s.pop(),f(d.splice(0,1)[0])}return i+u(r.substr(a))}(r,v(o),l)),i.value=p(i.value),e.innerHTML=i.value,e.className=function(e,n,t){var r=n?a[n]:t,i=[e.trim()];e.match(/\bhljs\b/)||i.push("hljs");-1===e.indexOf(r)&&i.push(r);return i.join(" ").trim()}(e.className,f,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function _(){if(!_.called){_.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,R)}}function N(e){return e=(e||"").toLowerCase(),r[e]||r[a[e]]}function w(e){var n=N(e);return n&&!n.disableAutodetect}e.highlight=b,e.highlightAuto=h,e.fixMarkup=p,e.highlightBlock=R,e.configure=function(e){c=E(c,e)},e.initHighlighting=_,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",_,!1),addEventListener("load",_,!1)},e.registerLanguage=function(n,t){var i=r[n]=t(e);i.aliases&&i.aliases.forEach(function(e){a[e]=n})},e.listLanguages=function(){return t(r)},e.getLanguage=N,e.autoDetection=w,e.inherit=E,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}}(t)}()});export{t as a};
//# sourceMappingURL=chunk.fa10fa99.js.map

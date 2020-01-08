'use strict';

var __chunk_1 = require('./chunk-7f071dbf.js');
require('./chunk-1959450c.js');
var __chunk_4 = require('./chunk-14459e5a.js');

var lzString = __chunk_4.createCommonjsModule(function (module) {
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if( module != null ) {
  module.exports = LZString;
}
});

var define = __chunk_4.createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function compress(input) {
    return lzString.compressToBase64(input)
        .replace(/\+/g, "-") // Convert '+' to '-'
        .replace(/\//g, "_") // Convert '/' to '_'
        .replace(/=+$/, ""); // Remove ending '='
}
function getParameters(parameters) {
    return compress(JSON.stringify(parameters));
}
exports.getParameters = getParameters;
//# sourceMappingURL=define.js.map
});

__chunk_4.unwrapExports(define);
var define_1 = define.getParameters;

var define$1 = __chunk_4.createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.getParameters = define.getParameters;
//# sourceMappingURL=define.js.map
});

__chunk_4.unwrapExports(define$1);
var define_2 = define$1.getParameters;

/* src/components/CodepenButton.svelte generated by Svelte v3.16.7 */

const css = {
	code: ".slot-wrap.svelte-7fflr3{cursor:pointer;pointer-events:auto}",
	map: "{\"version\":3,\"file\":\"CodepenButton.svelte\",\"sources\":[\"CodepenButton.svelte\"],\"sourcesContent\":[\"<script>\\n  import { getParameters } from 'codesandbox/lib/api/define'\\n\\n  export let title = 'Svelma Example'\\n  export let code\\n\\n  let form\\n\\n  function extractTag(code, tag) {\\n    let start = code.indexOf(`<${tag}>`)\\n    if (start === -1) return\\n\\n    start = start + tag.length + 2\\n    const end = code.lastIndexOf(`<\\\\/${tag}>`)\\n\\n    const extracted = code.substring(start, end)\\n\\n    return extracted\\n  }\\n\\n  function extractHTML(code) {\\n    code = code.replace(/<script>[\\\\s\\\\S]*<\\\\/script>/im, '')\\n    code = code.replace(/<script>[\\\\s\\\\S]*<\\\\/style>/im, '')\\n\\n    return code\\n  }\\n\\n  $: value = getParameters({\\n    files: {\\n      'sandbox.config.json': {\\n        content: {\\n          template: 'svelte',\\n        },\\n      },\\n      'index.html': {\\n        content: `<html>\\n  <body>\\n    <link\\n      id=\\\"external-css\\\"\\n      rel=\\\"stylesheet\\\"\\n      type=\\\"text/css\\\"\\n      href=\\\"https://unpkg.com/bulma/css/bulma.min.css\\\"\\n      media=\\\"all\\\"\\n    />\\n    <link\\n      id=\\\"external-css2\\\"\\n      rel=\\\"stylesheet\\\"\\n      type=\\\"text/css\\\"\\n      href=\\\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\\\"\\n      media=\\\"all\\\"\\n    />\\n  </body>\\n</html>`,\\n      },\\n      'index.js': {\\n        content: `import App from \\\"./App.svelte\\\";\\n\\nconst app = new App({\\n  target: document.body\\n});\\n\\nexport default app;`,\\n      },\\n      'App.svelte': { content: code },\\n      'package.json': {\\n        content: {\\n          name: 'svelma-example',\\n          version: '1.0.0',\\n          devDependencies: {\\n            'npm-run-all': '^4.1.5',\\n            rollup: '^1.10.1',\\n            'rollup-plugin-commonjs': '^9.3.4',\\n            'rollup-plugin-node-resolve': '^4.2.3',\\n            'rollup-plugin-svelte': '^5.0.3',\\n            'rollup-plugin-terser': '^4.0.4',\\n            'sirv-cli': '^0.3.1',\\n          },\\n          dependencies: {\\n            svelte: '^3.4.4',\\n            svelma: 'latest',\\n            '@fortawesome/fontawesome-free': 'latest',\\n            bulma: 'latest',\\n          },\\n          scripts: {\\n            build: 'rollup -c',\\n            autobuild: 'rollup -c -w',\\n            dev: 'run-p start:dev autobuild',\\n            start: 'sirv public',\\n            'start:dev': 'sirv public --dev',\\n          },\\n        },\\n      },\\n    },\\n  })\\n\\n  function open() {\\n    form.submit()\\n  }\\n</script>\\n\\n<style>\\n  .slot-wrap {\\n    cursor: pointer;\\n    pointer-events: auto;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvZGVwZW5CdXR0b24uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvQ29kZXBlbkJ1dHRvbi5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLnNsb3Qtd3JhcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG4iXX0= */</style>\\n\\n<form action=\\\"https://codesandbox.io/api/v1/sandboxes/define\\\" method=\\\"POST\\\" target=\\\"_blank\\\" bind:this={form}>\\n  <input type=\\\"hidden\\\" name=\\\"parameters\\\" {value} />\\n  <div class=\\\"slot-wrap\\\" on:click={open}>\\n    <slot />\\n  </div>\\n</form>\\n\"],\"names\":[],\"mappings\":\"AAqGE,UAAU,cAAC,CAAC,AACV,MAAM,CAAE,OAAO,CACf,cAAc,CAAE,IAAI,AACtB,CAAC\"}"
};

const CodepenButton = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title = "Svelma Example" } = $$props;
	let { code } = $$props;
	let form;

	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
	$$result.css.add(css);

	let value = define_2({
		files: {
			"sandbox.config.json": { content: { template: "svelte" } },
			"index.html": {
				content: `<html>
  <body>
    <link
      id="external-css"
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/bulma/css/bulma.min.css"
      media="all"
    />
    <link
      id="external-css2"
      rel="stylesheet"
      type="text/css"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      media="all"
    />
  </body>
</html>`
			},
			"index.js": {
				content: `import App from "./App.svelte";

const app = new App({
  target: document.body
});

export default app;`
			},
			"App.svelte": { content: code },
			"package.json": {
				content: {
					name: "svelma-example",
					version: "1.0.0",
					devDependencies: {
						"npm-run-all": "^4.1.5",
						rollup: "^1.10.1",
						"rollup-plugin-commonjs": "^9.3.4",
						"rollup-plugin-node-resolve": "^4.2.3",
						"rollup-plugin-svelte": "^5.0.3",
						"rollup-plugin-terser": "^4.0.4",
						"sirv-cli": "^0.3.1"
					},
					dependencies: {
						svelte: "^3.4.4",
						svelma: "latest",
						"@fortawesome/fontawesome-free": "latest",
						bulma: "latest"
					},
					scripts: {
						build: "rollup -c",
						autobuild: "rollup -c -w",
						dev: "run-p start:dev autobuild",
						start: "sirv public",
						"start:dev": "sirv public --dev"
					}
				}
			}
		}
	});

	return `<form action="${"https://codesandbox.io/api/v1/sandboxes/define"}" method="${"POST"}" target="${"_blank"}"${__chunk_1.add_attribute("this", form, 1)}>
  <input type="${"hidden"}" name="${"parameters"}"${__chunk_1.add_attribute("value", value, 0)}>
  <div class="${"slot-wrap svelte-7fflr3"}">
    ${$$slots.default ? $$slots.default({}) : ``}
  </div>
</form>`;
});

/* src/components/Example.svelte generated by Svelte v3.16.7 */

const css$1 = {
	code: ".snippet.svelte-150a96u{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:6px;border-top-left-radius:0;border:2px solid #f5f5f5;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:3em}.snippet.horizontal.svelte-150a96u{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width: 1087px){.snippet.svelte-150a96u{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.preview.svelte-150a96u{min-width:50%;padding:1.5rem}.code.svelte-150a96u{min-width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:0 6px 6px 0;border-left:1px solid #f5f5f5;overflow:hidden;position:relative}.snippet.svelte-150a96u::before{background:#ffdd57;border-radius:2px 2px 0 0;bottom:100%;color:rgba(0, 0, 0, 0.7);content:'Example';display:inline-block;font-size:7px;font-weight:700;left:-1px;letter-spacing:1px;margin-left:-1px;padding:3px 5px;position:absolute;text-transform:uppercase;vertical-align:top}.snippet.svelte-150a96u::before{content:'Snippet';-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.codepen-button.svelte-150a96u{position:absolute;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;background:#ffdd57;border-radius:4px 4px 0 0;bottom:100%;font-size:7px;font-weight:700;right:-1px;padding:0 0 0 8px;vertical-align:top;letter-spacing:1px;text-transform:uppercase;line-height:17px}.codeview{margin-bottom:0 !important}.btn-show-code{-ms-flex-item-align:center;align-self:center;margin:2em 0 0.5em;position:absolute;bottom:0;background:none}",
	map: "{\"version\":3,\"file\":\"Example.svelte\",\"sources\":[\"Example.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onMount } from 'svelte'\\n  import { Button } from 'svelma'\\n  import Code from './Code.svelte'\\n  import CodepenButton from './CodepenButton.svelte'\\n\\n  export let lang = 'xml'\\n  export let code\\n  export let horizontal = false\\n\\n  let showCode = false\\n\\n  function show() {\\n    showCode = true\\n  }\\n\\n  function hide(e) {\\n    e.stopPropagation()\\n    showCode = false\\n  }\\n</script>\\n\\n<style lang=\\\"scss\\\">.snippet {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: stretch;\\n      -ms-flex-align: stretch;\\n          align-items: stretch;\\n  border-radius: 6px;\\n  border-top-left-radius: 0;\\n  border: 2px solid #f5f5f5;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  margin-top: 3em; }\\n  .snippet.horizontal {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; }\\n\\n@media screen and (max-width: 1087px) {\\n  .snippet {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; } }\\n\\n.preview {\\n  min-width: 50%;\\n  padding: 1.5rem; }\\n\\n.code {\\n  min-width: 50%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: stretch;\\n      -ms-flex-align: stretch;\\n          align-items: stretch;\\n  border-radius: 0 6px 6px 0;\\n  border-left: 1px solid #f5f5f5;\\n  overflow: hidden;\\n  position: relative;\\n  /* cursor: pointer;\\n  pointer-events: auto; */\\n  /*\\n  &::before {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    opacity: 0.8;\\n    background-color: white;\\n    content: '<> Show Code';\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    z-index: 1;\\n    font-size: 0.75rem;\\n  }*/\\n  /*\\n  &:hover::before {\\n    background-color: #ffdd57;\\n  }\\n\\n  & :global(pre),\\n  & :global(pre code) {\\n    overflow: hidden;\\n  }\\n\\n  &.show-code {\\n    cursor: auto;\\n\\n    &::before {\\n      content: inherit;\\n    }\\n\\n    & :global(figure) {\\n      margin-bottom: 3em;\\n    }\\n\\n    & :global(pre) {\\n      overflow: auto;\\n    }\\n  }*/ }\\n\\n.snippet::before {\\n  background: #ffdd57;\\n  border-radius: 2px 2px 0 0;\\n  bottom: 100%;\\n  color: rgba(0, 0, 0, 0.7);\\n  content: 'Example';\\n  display: inline-block;\\n  font-size: 7px;\\n  font-weight: 700;\\n  left: -1px;\\n  letter-spacing: 1px;\\n  margin-left: -1px;\\n  padding: 3px 5px;\\n  position: absolute;\\n  text-transform: uppercase;\\n  vertical-align: top; }\\n\\n.snippet::before {\\n  content: 'Snippet';\\n  -webkit-box-align: stretch;\\n      -ms-flex-align: stretch;\\n          align-items: stretch;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.codepen-button {\\n  position: absolute;\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  background: #ffdd57;\\n  border-radius: 4px 4px 0 0;\\n  bottom: 100%;\\n  font-size: 7px;\\n  font-weight: 700;\\n  right: -1px;\\n  padding: 0 0 0 8px;\\n  vertical-align: top;\\n  letter-spacing: 1px;\\n  text-transform: uppercase;\\n  line-height: 17px; }\\n\\n/*.code {\\n  :global(.codeview) {\\n    height: 100%;\\n\\n    :global(figure) {\\n      height: 100%;\\n\\n      :global(pre:not(.hidden)) {\\n        height: 100%;\\n      }\\n    }\\n  }\\n}*/\\n:global(.codeview) {\\n  margin-bottom: 0 !important; }\\n\\n:global(.btn-show-code) {\\n  -ms-flex-item-align: center;\\n      align-self: center;\\n  margin: 2em 0 0.5em;\\n  position: absolute;\\n  bottom: 0;\\n  background: none; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0V4YW1wbGUuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO01BQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsOEJBQW1CO0VBQW5CLDZCQUFtQjtNQUFuQix1QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBRTtFQUNqQjtJQUNFLDRCQUFzQjtJQUF0Qiw2QkFBc0I7UUFBdEIsMEJBQXNCO1lBQXRCLHNCQUFzQixFQUFFOztBQUU1QjtFQUNFO0lBQ0UsNEJBQXNCO0lBQXRCLDZCQUFzQjtRQUF0QiwwQkFBc0I7WUFBdEIsc0JBQXNCLEVBQUUsRUFBRTs7QUFFOUI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGNBQWM7RUFDZCxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7TUFBdEIsMEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEI7eUJBQ3VCO0VBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7SUFlRTtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QkUsRUFBRTs7QUFFTjtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhLEVBQUU7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUFvQjtFQUFwQiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBRTs7QUFFckI7Ozs7Ozs7Ozs7OztFQVlFO0FBQ0Y7RUFDRSwyQkFBMkIsRUFBRTs7QUFFL0I7RUFDRSwyQkFBa0I7TUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0V4YW1wbGUuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiLnNuaXBwZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjVmNWY1O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAzZW07IH1cbiAgLnNuaXBwZXQuaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDg3cHgpIHtcbiAgLnNuaXBwZXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxuXG4ucHJldmlldyB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxLjVyZW07IH1cblxuLmNvZGUge1xuICBtaW4td2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgKi9cbiAgLypcbiAgJjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb250ZW50OiAnPD4gU2hvdyBDb2RlJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH0qL1xuICAvKlxuICAmOmhvdmVyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkNTc7XG4gIH1cblxuICAmIDpnbG9iYWwocHJlKSxcbiAgJiA6Z2xvYmFsKHByZSBjb2RlKSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gICYuc2hvdy1jb2RlIHtcbiAgICBjdXJzb3I6IGF1dG87XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAmIDpnbG9iYWwoZmlndXJlKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgfVxuXG4gICAgJiA6Z2xvYmFsKHByZSkge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9Ki8gfVxuXG4uc25pcHBldDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZGQ1NztcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XG4gIGJvdHRvbTogMTAwJTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29udGVudDogJ0V4YW1wbGUnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZWZ0OiAtMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5zbmlwcGV0OjpiZWZvcmUge1xuICBjb250ZW50OiAnU25pcHBldCc7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5jb2RlcGVuLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmRkNTc7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBib3R0b206IDEwMCU7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICByaWdodDogLTFweDtcbiAgcGFkZGluZzogMCAwIDAgOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMTdweDsgfVxuXG4vKi5jb2RlIHtcbiAgOmdsb2JhbCguY29kZXZpZXcpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICA6Z2xvYmFsKGZpZ3VyZSkge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICA6Z2xvYmFsKHByZTpub3QoLmhpZGRlbikpIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSovXG46Z2xvYmFsKC5jb2Rldmlldykge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cblxuOmdsb2JhbCguYnRuLXNob3ctY29kZSkge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtIDAgMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPUV4YW1wbGUuc3ZlbHRlLmNzcy5tYXAgKi8iXX0= */</style>\\n\\n<div class=\\\"snippet\\\" class:horizontal>\\n  <CodepenButton {code}>\\n    <div class=\\\"codepen-button\\\">\\n      Codesandbox\\n      <i class=\\\"icon is-small fas fa-external-link-alt\\\" />\\n    </div>\\n  </CodepenButton>\\n  <div class=\\\"preview\\\">\\n    <slot name=\\\"preview\\\" />\\n  </div>\\n  <div class=\\\"code\\\">\\n    <!-- class:show-code={showCode} on:click={show} -->\\n    <Code {lang} {code} />\\n\\n    <!-- {#if showCode}\\n      <Button class=\\\"btn-show-code is-rounded is-outline has-text-grey-light\\\" on:click|stopPropagation={hide}>\\n        Hide Code\\n      </Button>\\n    {/if} -->\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Example = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { lang = "xml" } = $$props;
	let { code } = $$props;
	let { horizontal = false } = $$props;

	if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
	if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
	if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
	$$result.css.add(css$1);

	return `<div class="${["snippet svelte-150a96u", horizontal ? "horizontal" : ""].join(" ").trim()}">
  ${__chunk_1.validate_component(CodepenButton, "CodepenButton").$$render($$result, { code }, {}, {
		default: () => `
    <div class="${"codepen-button svelte-150a96u"}">
      Codesandbox
      <i class="${"icon is-small fas fa-external-link-alt"}"></i>
    </div>
  `
	})}
  <div class="${"preview svelte-150a96u"}">
    ${$$slots.preview ? $$slots.preview({}) : ``}
  </div>
  <div class="${"code svelte-150a96u"}">
    
    ${__chunk_1.validate_component(__chunk_4.Codeview, "Code").$$render($$result, { lang, code }, {}, {})}

    
  </div>
</div>`;
});

exports.Example = Example;

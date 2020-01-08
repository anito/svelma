import { c as SvelteComponentDev, d as init, b as safe_not_equal, e as dispatch_dev, B as create_slot, f as element, G as space, g as claim_element, h as children, H as claim_space, i as detach_dev, j as attr_dev, k as add_location, m as listen_dev, n as insert_dev, o as append_dev, ad as prop_dev, J as get_slot_context, K as get_slot_changes, A as transition_in, y as transition_out, W as binding_callbacks, C as create_component, D as claim_component, l as toggle_class, E as mount_component, F as destroy_component, R as text, S as claim_text } from './chunk.0f951886.js';
import './chunk.b9034416.js';
import { c as createCommonjsModule, d as unwrapExports } from './chunk.0a41e55b.js';
import { a as Codeview } from './chunk.162a27e3.js';

var lzString = createCommonjsModule(function (module) {
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

var define = createCommonjsModule(function (module, exports) {
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

unwrapExports(define);
var define_1 = define.getParameters;

var define$1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.getParameters = define.getParameters;
//# sourceMappingURL=define.js.map
});

unwrapExports(define$1);
var define_2 = define$1.getParameters;

/* src/components/CodepenButton.svelte generated by Svelte v3.16.7 */
const file = "src/components/CodepenButton.svelte";

function create_fragment(ctx) {
	let form_1;
	let input;
	let t;
	let div;
	let current;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	const block = {
		c: function create() {
			form_1 = element("form");
			input = element("input");
			t = space();
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			form_1 = claim_element(nodes, "FORM", { action: true, method: true, target: true });
			var form_1_nodes = children(form_1);
			input = claim_element(form_1_nodes, "INPUT", { type: true, name: true, value: true });
			t = claim_space(form_1_nodes);
			div = claim_element(form_1_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			form_1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "type", "hidden");
			attr_dev(input, "name", "parameters");
			input.value = /*value*/ ctx[1];
			add_location(input, file, 109, 2, 2866);
			attr_dev(div, "class", "slot-wrap svelte-7fflr3");
			add_location(div, file, 110, 2, 2918);
			attr_dev(form_1, "action", "https://codesandbox.io/api/v1/sandboxes/define");
			attr_dev(form_1, "method", "POST");
			attr_dev(form_1, "target", "_blank");
			add_location(form_1, file, 108, 0, 2754);
			dispose = listen_dev(div, "click", /*open*/ ctx[2], false, false, false);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form_1, anchor);
			append_dev(form_1, input);
			append_dev(form_1, t);
			append_dev(form_1, div);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*form_1_binding*/ ctx[7](form_1);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*value*/ 2) {
				prop_dev(input, "value", /*value*/ ctx[1]);
			}

			if (default_slot && default_slot.p && dirty & /*$$scope*/ 32) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(form_1);
			if (default_slot) default_slot.d(detaching);
			/*form_1_binding*/ ctx[7](null);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { title = "Svelma Example" } = $$props;
	let { code } = $$props;
	let form;

	function open() {
		form.submit();
	}

	const writable_props = ["title", "code"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CodepenButton> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;

	function form_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, form = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(3, title = $$props.title);
		if ("code" in $$props) $$invalidate(4, code = $$props.code);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return { title, code, form, value };
	};

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(3, title = $$props.title);
		if ("code" in $$props) $$invalidate(4, code = $$props.code);
		if ("form" in $$props) $$invalidate(0, form = $$props.form);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
	};

	let value;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*code*/ 16) {
			$: $$invalidate(1, value = define_2({
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
			}));
		}
	};

	return [form, value, open, title, code, $$scope, $$slots, form_1_binding];
}

class CodepenButton extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { title: 3, code: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CodepenButton",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*code*/ ctx[4] === undefined && !("code" in props)) {
			console.warn("<CodepenButton> was created without expected prop 'code'");
		}
	}

	get title() {
		throw new Error("<CodepenButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<CodepenButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get code() {
		throw new Error("<CodepenButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set code(value) {
		throw new Error("<CodepenButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Example.svelte generated by Svelte v3.16.7 */
const file$1 = "src/components/Example.svelte";
const get_preview_slot_changes = dirty => ({});
const get_preview_slot_context = ctx => ({});

// (188:2) <CodepenButton {code}>
function create_default_slot(ctx) {
	let div;
	let t;
	let i;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Codesandbox\n      ");
			i = element("i");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Codesandbox\n      ");
			i = claim_element(div_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "icon is-small fas fa-external-link-alt");
			add_location(i, file$1, 190, 6, 9274);
			attr_dev(div, "class", "codepen-button svelte-150a96u");
			add_location(div, file$1, 188, 4, 9221);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
			append_dev(div, i);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(188:2) <CodepenButton {code}>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div2;
	let t0;
	let div0;
	let t1;
	let div1;
	let current;

	const codepenbutton = new CodepenButton({
			props: {
				code: /*code*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const preview_slot_template = /*$$slots*/ ctx[6].preview;
	const preview_slot = create_slot(preview_slot_template, ctx, /*$$scope*/ ctx[7], get_preview_slot_context);

	const code_1 = new Codeview({
			props: {
				lang: /*lang*/ ctx[0],
				code: /*code*/ ctx[1]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div2 = element("div");
			create_component(codepenbutton.$$.fragment);
			t0 = space();
			div0 = element("div");
			if (preview_slot) preview_slot.c();
			t1 = space();
			div1 = element("div");
			create_component(code_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(codepenbutton.$$.fragment, div2_nodes);
			t0 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (preview_slot) preview_slot.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(code_1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "preview svelte-150a96u");
			add_location(div0, file$1, 193, 2, 9359);
			attr_dev(div1, "class", "code svelte-150a96u");
			add_location(div1, file$1, 196, 2, 9420);
			attr_dev(div2, "class", "snippet svelte-150a96u");
			toggle_class(div2, "horizontal", /*horizontal*/ ctx[2]);
			add_location(div2, file$1, 186, 0, 9153);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			mount_component(codepenbutton, div2, null);
			append_dev(div2, t0);
			append_dev(div2, div0);

			if (preview_slot) {
				preview_slot.m(div0, null);
			}

			append_dev(div2, t1);
			append_dev(div2, div1);
			mount_component(code_1, div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const codepenbutton_changes = {};
			if (dirty & /*code*/ 2) codepenbutton_changes.code = /*code*/ ctx[1];

			if (dirty & /*$$scope*/ 128) {
				codepenbutton_changes.$$scope = { dirty, ctx };
			}

			codepenbutton.$set(codepenbutton_changes);

			if (preview_slot && preview_slot.p && dirty & /*$$scope*/ 128) {
				preview_slot.p(get_slot_context(preview_slot_template, ctx, /*$$scope*/ ctx[7], get_preview_slot_context), get_slot_changes(preview_slot_template, /*$$scope*/ ctx[7], dirty, get_preview_slot_changes));
			}

			const code_1_changes = {};
			if (dirty & /*lang*/ 1) code_1_changes.lang = /*lang*/ ctx[0];
			if (dirty & /*code*/ 2) code_1_changes.code = /*code*/ ctx[1];
			code_1.$set(code_1_changes);

			if (dirty & /*horizontal*/ 4) {
				toggle_class(div2, "horizontal", /*horizontal*/ ctx[2]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(codepenbutton.$$.fragment, local);
			transition_in(preview_slot, local);
			transition_in(code_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(codepenbutton.$$.fragment, local);
			transition_out(preview_slot, local);
			transition_out(code_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(codepenbutton);
			if (preview_slot) preview_slot.d(detaching);
			destroy_component(code_1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { lang = "xml" } = $$props;
	let { code } = $$props;
	let { horizontal = false } = $$props;
	let showCode = false;

	function show() {
		showCode = true;
	}

	function hide(e) {
		e.stopPropagation();
		showCode = false;
	}

	const writable_props = ["lang", "code", "horizontal"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Example> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("lang" in $$props) $$invalidate(0, lang = $$props.lang);
		if ("code" in $$props) $$invalidate(1, code = $$props.code);
		if ("horizontal" in $$props) $$invalidate(2, horizontal = $$props.horizontal);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return { lang, code, horizontal, showCode };
	};

	$$self.$inject_state = $$props => {
		if ("lang" in $$props) $$invalidate(0, lang = $$props.lang);
		if ("code" in $$props) $$invalidate(1, code = $$props.code);
		if ("horizontal" in $$props) $$invalidate(2, horizontal = $$props.horizontal);
		if ("showCode" in $$props) showCode = $$props.showCode;
	};

	return [lang, code, horizontal, showCode, show, hide, $$slots, $$scope];
}

class Example extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { lang: 0, code: 1, horizontal: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Example",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*code*/ ctx[1] === undefined && !("code" in props)) {
			console.warn("<Example> was created without expected prop 'code'");
		}
	}

	get lang() {
		throw new Error("<Example>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set lang(value) {
		throw new Error("<Example>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get code() {
		throw new Error("<Example>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set code(value) {
		throw new Error("<Example>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get horizontal() {
		throw new Error("<Example>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set horizontal(value) {
		throw new Error("<Example>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Example as a };

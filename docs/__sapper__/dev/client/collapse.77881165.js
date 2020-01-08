import { c as SvelteComponentDev, d as init, b as safe_not_equal, e as dispatch_dev, C as create_component, G as space, D as claim_component, H as claim_space, E as mount_component, n as insert_dev, A as transition_in, y as transition_out, F as destroy_component, i as detach_dev, f as element, g as claim_element, h as children, j as attr_dev, k as add_location, a as noop, R as text, S as claim_text, o as append_dev } from './chunk.0f951886.js';
import { f as Collapse } from './chunk.b9034416.js';
import './chunk.0a41e55b.js';
import { a as DocHeader } from './chunk.45862366.js';
import './chunk.162a27e3.js';
import { a as Example } from './chunk.09bae8d1.js';
import { a as JSDoc } from './chunk.472f5470.js';

/* src/routes/components/collapse.svelte generated by Svelte v3.16.7 */
const file = "src/routes/components/collapse.svelte";

// (38:6) <button class="button is-primary" slot="trigger">
function create_trigger_slot(ctx) {
	let button;
	let t;

	const block = {
		c: function create() {
			button = element("button");
			t = text("Click Me!");
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true, slot: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, "Click Me!");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "button is-primary");
			attr_dev(button, "slot", "trigger");
			add_location(button, file, 37, 6, 853);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_trigger_slot.name,
		type: "slot",
		source: "(38:6) <button class=\\\"button is-primary\\\" slot=\\\"trigger\\\">",
		ctx
	});

	return block;
}

// (37:4) <Collapse>
function create_default_slot_1(ctx) {
	let t0;
	let div1;
	let div0;
	let h3;
	let t1;
	let t2;
	let p;
	let t3;

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h3 = element("h3");
			t1 = text("Subtitle");
			t2 = space();
			p = element("p");
			t3 = text("Lorem ipsum dolor...");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h3 = claim_element(div0_nodes, "H3", {});
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "Subtitle");
			h3_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Lorem ipsum dolor...");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 40, 10, 994);
			add_location(p, file, 41, 10, 1022);
			attr_dev(div0, "class", "content");
			add_location(div0, file, 39, 8, 962);
			attr_dev(div1, "class", "notification");
			add_location(div1, file, 38, 6, 927);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h3);
			append_dev(h3, t1);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(37:4) <Collapse>",
		ctx
	});

	return block;
}

// (36:2) <div slot="preview">
function create_preview_slot(ctx) {
	let div;
	let current;

	const collapse = new Collapse({
			props: {
				$$slots: {
					default: [create_default_slot_1],
					trigger: [create_trigger_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(collapse.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true });
			var div_nodes = children(div);
			claim_component(collapse.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "preview");
			add_location(div, file, 35, 2, 811);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(collapse, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const collapse_changes = {};

			if (dirty & /*$$scope*/ 2) {
				collapse_changes.$$scope = { dirty, ctx };
			}

			collapse.$set(collapse_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(collapse.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(collapse.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(collapse);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preview_slot.name,
		type: "slot",
		source: "(36:2) <div slot=\\\"preview\\\">",
		ctx
	});

	return block;
}

// (21:0) <Example code={`<script>   import { Collapse } from 'svelma' </script>  <Collapse>   <button class="button is-primary" slot="trigger">     Click Me!   </button>   <div class="notification">     <div class="content">       <h3>Subtitle</h3>       <p>Lorem ipsum dolor...</p>     </div>   </div> </Collapse>`}>
function create_default_slot(ctx) {

	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(21:0) <Example code={`<script>   import { Collapse } from 'svelma' </script>  <Collapse>   <button class=\\\"button is-primary\\\" slot=\\\"trigger\\\">     Click Me!   </button>   <div class=\\\"notification\\\">     <div class=\\\"content\\\">       <h3>Subtitle</h3>       <p>Lorem ipsum dolor...</p>     </div>   </div> </Collapse>`}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let t1;
	let current;

	const docheader = new DocHeader({
			props: {
				title: "Collapse",
				subtitle: "Collapsible elements"
			},
			$$inline: true
		});

	const example = new Example({
			props: {
				code: `<script>
  import { Collapse } from 'svelma'
</script>

<Collapse>
  <button class="button is-primary" slot="trigger">
    Click Me!
  </button>
  <div class="notification">
    <div class="content">
      <h3>Subtitle</h3>
      <p>Lorem ipsum dolor...</p>
    </div>
  </div>
</Collapse>`,
				$$slots: {
					default: [create_default_slot],
					preview: [create_preview_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const jsdoc_1 = new JSDoc({
			props: { jsdoc: /*jsdoc*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(docheader.$$.fragment);
			t0 = space();
			create_component(example.$$.fragment);
			t1 = space();
			create_component(jsdoc_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(docheader.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(example.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(jsdoc_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(docheader, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(example, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(jsdoc_1, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const example_changes = {};

			if (dirty & /*$$scope*/ 2) {
				example_changes.$$scope = { dirty, ctx };
			}

			example.$set(example_changes);
			const jsdoc_1_changes = {};
			if (dirty & /*jsdoc*/ 1) jsdoc_1_changes.jsdoc = /*jsdoc*/ ctx[0];
			jsdoc_1.$set(jsdoc_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(docheader.$$.fragment, local);
			transition_in(example.$$.fragment, local);
			transition_in(jsdoc_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(docheader.$$.fragment, local);
			transition_out(example.$$.fragment, local);
			transition_out(jsdoc_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(docheader, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(example, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(jsdoc_1, detaching);
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

async function preload() {
	const res = await this.fetch(`components/collapse.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

function instance($$self, $$props, $$invalidate) {
	let { jsdoc } = $$props;
	const writable_props = ["jsdoc"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Collapse> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("jsdoc" in $$props) $$invalidate(0, jsdoc = $$props.jsdoc);
	};

	$$self.$capture_state = () => {
		return { jsdoc };
	};

	$$self.$inject_state = $$props => {
		if ("jsdoc" in $$props) $$invalidate(0, jsdoc = $$props.jsdoc);
	};

	return [jsdoc];
}

class Collapse_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { jsdoc: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Collapse_1",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*jsdoc*/ ctx[0] === undefined && !("jsdoc" in props)) {
			console.warn("<Collapse> was created without expected prop 'jsdoc'");
		}
	}

	get jsdoc() {
		throw new Error("<Collapse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set jsdoc(value) {
		throw new Error("<Collapse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Collapse_1;
export { preload };

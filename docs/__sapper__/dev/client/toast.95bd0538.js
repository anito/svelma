import { c as SvelteComponentDev, d as init, b as safe_not_equal, e as dispatch_dev, C as create_component, G as space, D as claim_component, H as claim_space, E as mount_component, n as insert_dev, A as transition_in, y as transition_out, F as destroy_component, i as detach_dev, f as element, g as claim_element, h as children, j as attr_dev, k as add_location, o as append_dev, a as noop, R as text, S as claim_text } from './chunk.0f951886.js';
import { d as Button, j as Toast } from './chunk.b9034416.js';
import './chunk.0a41e55b.js';
import { a as DocHeader } from './chunk.45862366.js';
import './chunk.162a27e3.js';
import { a as Example } from './chunk.09bae8d1.js';
import { a as JSDoc } from './chunk.472f5470.js';

/* src/routes/components/toast.svelte generated by Svelte v3.16.7 */
const file = "src/routes/components/toast.svelte";

// (53:6) <Button on:click={() => open()}>
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Toast");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Toast");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(53:6) <Button on:click={() => open()}>",
		ctx
	});

	return block;
}

// (54:6) <Button type="is-success" on:click={() => open('is-success')}>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Success");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Success");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(54:6) <Button type=\\\"is-success\\\" on:click={() => open('is-success')}>",
		ctx
	});

	return block;
}

// (55:6) <Button type="is-danger" on:click={() => open('is-danger', 'is-bottom-right')}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Bottom Right");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Bottom Right");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(55:6) <Button type=\\\"is-danger\\\" on:click={() => open('is-danger', 'is-bottom-right')}>",
		ctx
	});

	return block;
}

// (56:6) <Button type="is-primary" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Custom Background");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Custom Background");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(56:6) <Button type=\\\"is-primary\\\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>",
		ctx
	});

	return block;
}

// (51:2) <div slot="preview">
function create_preview_slot(ctx) {
	let div0;
	let div1;
	let t0;
	let t1;
	let t2;
	let current;

	const button0 = new Button({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[1]);

	const button1 = new Button({
			props: {
				type: "is-success",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[2]);

	const button2 = new Button({
			props: {
				type: "is-danger",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_2*/ ctx[3]);

	const button3 = new Button({
			props: {
				type: "is-primary",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button3.$on("click", /*click_handler_3*/ ctx[4]);

	const block = {
		c: function create() {
			div0 = element("div");
			div1 = element("div");
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
			t2 = space();
			create_component(button3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true });
			var div0_nodes = children(div0);
			div1 = claim_element(div0_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(button0.$$.fragment, div1_nodes);
			t0 = claim_space(div1_nodes);
			claim_component(button1.$$.fragment, div1_nodes);
			t1 = claim_space(div1_nodes);
			claim_component(button2.$$.fragment, div1_nodes);
			t2 = claim_space(div1_nodes);
			claim_component(button3.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div1, "class", "buttons svelte-3pxc2m");
			add_location(div1, file, 51, 4, 1945);
			attr_dev(div0, "slot", "preview");
			add_location(div0, file, 50, 2, 1920);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div1);
			mount_component(button0, div1, null);
			append_dev(div1, t0);
			mount_component(button1, div1, null);
			append_dev(div1, t1);
			mount_component(button2, div1, null);
			append_dev(div1, t2);
			mount_component(button3, div1, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
			const button3_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button3_changes.$$scope = { dirty, ctx };
			}

			button3.$set(button3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(button0);
			destroy_component(button1);
			destroy_component(button2);
			destroy_component(button3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preview_slot.name,
		type: "slot",
		source: "(51:2) <div slot=\\\"preview\\\">",
		ctx
	});

	return block;
}

// (39:0) <Example code={`<script>   import { Button, Toast } from 'svelma'    function open(type, position) {     Toast.create({ message: 'I am a toast', type, position })   } </script>  <Button on:click={() => open()}>Toast</Button> <Button type="is-success" on:click={() => open('is-success')}>Success</Button> <Button type="is-danger" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button> <Button type="is-primary" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`}>
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
		source: "(39:0) <Example code={`<script>   import { Button, Toast } from 'svelma'    function open(type, position) {     Toast.create({ message: 'I am a toast', type, position })   } </script>  <Button on:click={() => open()}>Toast</Button> <Button type=\\\"is-success\\\" on:click={() => open('is-success')}>Success</Button> <Button type=\\\"is-danger\\\" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button> <Button type=\\\"is-primary\\\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`}>",
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
				title: "Toast",
				subtitle: "Toasty notifications"
			},
			$$inline: true
		});

	const example = new Example({
			props: {
				code: `<script>
  import { Button, Toast } from 'svelma'

  function open(type, position) {
    Toast.create({ message: 'I am a toast', type, position })
  }
</script>

<Button on:click={() => open()}>Toast</Button>
<Button type="is-success" on:click={() => open('is-success')}>Success</Button>
<Button type="is-danger" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>
<Button type="is-primary" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`,
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

			if (dirty & /*$$scope*/ 32) {
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
	const res = await this.fetch(`components/toast.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

function open(type, position, background) {
	Toast.create({
		message: "I am a toast",
		type,
		position,
		background
	});
}

function instance($$self, $$props, $$invalidate) {
	let { jsdoc } = $$props;
	const writable_props = ["jsdoc"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Toast> was created with unknown prop '${key}'`);
	});

	const click_handler = () => open();
	const click_handler_1 = () => open("is-success");
	const click_handler_2 = () => open("is-danger", "is-bottom-right");
	const click_handler_3 = () => open("is-primary", "is-top", "has-background-grey-lighter");

	$$self.$set = $$props => {
		if ("jsdoc" in $$props) $$invalidate(0, jsdoc = $$props.jsdoc);
	};

	$$self.$capture_state = () => {
		return { jsdoc };
	};

	$$self.$inject_state = $$props => {
		if ("jsdoc" in $$props) $$invalidate(0, jsdoc = $$props.jsdoc);
	};

	return [jsdoc, click_handler, click_handler_1, click_handler_2, click_handler_3];
}

class Toast_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { jsdoc: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Toast_1",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*jsdoc*/ ctx[0] === undefined && !("jsdoc" in props)) {
			console.warn("<Toast> was created without expected prop 'jsdoc'");
		}
	}

	get jsdoc() {
		throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set jsdoc(value) {
		throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Toast_1;
export { preload };

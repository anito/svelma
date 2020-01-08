import { c as SvelteComponentDev, d as init, b as safe_not_equal, e as dispatch_dev, C as create_component, G as space, D as claim_component, H as claim_space, E as mount_component, n as insert_dev, A as transition_in, y as transition_out, F as destroy_component, i as detach_dev, f as element, g as claim_element, h as children, j as attr_dev, k as add_location, o as append_dev, a as noop, R as text, S as claim_text } from './chunk.0f951886.js';
import { d as Button, c as Message } from './chunk.b9034416.js';
import './chunk.0a41e55b.js';
import { a as DocHeader } from './chunk.45862366.js';
import './chunk.162a27e3.js';
import { a as Example } from './chunk.09bae8d1.js';

/* src/routes/components/message.svelte generated by Svelte v3.16.7 */
const file = "src/routes/components/message.svelte";

// (25:4) <Button class="block" on:click={() => open = !open}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Toggle");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Toggle");
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
		source: "(25:4) <Button class=\\\"block\\\" on:click={() => open = !open}>",
		ctx
	});

	return block;
}

// (26:4) <Message active={!open} title="Default"       on:close={active => open = active}     >
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit");
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
		source: "(26:4) <Message active={!open} title=\\\"Default\\\"       on:close={active => open = active}     >",
		ctx
	});

	return block;
}

// (24:2) <div slot="preview">
function create_preview_slot(ctx) {
	let div;
	let t;
	let current;

	const button = new Button({
			props: {
				class: "block",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[1]);

	const message = new Message({
			props: {
				active: !/*open*/ ctx[0],
				title: "Default",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	message.$on("close", /*close_handler*/ ctx[2]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(button.$$.fragment);
			t = space();
			create_component(message.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true });
			var div_nodes = children(div);
			claim_component(button.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			claim_component(message.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "preview");
			add_location(div, file, 23, 2, 681);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(button, div, null);
			append_dev(div, t);
			mount_component(message, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 8) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			const message_changes = {};
			if (dirty & /*open*/ 1) message_changes.active = !/*open*/ ctx[0];

			if (dirty & /*$$scope*/ 8) {
				message_changes.$$scope = { dirty, ctx };
			}

			message.$set(message_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			transition_in(message.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			transition_out(message.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(button);
			destroy_component(message);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preview_slot.name,
		type: "slot",
		source: "(24:2) <div slot=\\\"preview\\\">",
		ctx
	});

	return block;
}

// (11:0) <Example code={`<script>   import { Button, Message } from 'svelma'    let open </script>  <Button class="block" on:click={() => open = !open}>Toggle</Button> <Message active={!open} title="Default"   on:close={active => open = active}>   Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Fusce id fermentum quam. Proin sagittis, nibh id   hendrerit imperdiet, elit sapien laoreet elit </Message>`}>
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
		source: "(11:0) <Example code={`<script>   import { Button, Message } from 'svelma'    let open </script>  <Button class=\\\"block\\\" on:click={() => open = !open}>Toggle</Button> <Message active={!open} title=\\\"Default\\\"   on:close={active => open = active}>   Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Fusce id fermentum quam. Proin sagittis, nibh id   hendrerit imperdiet, elit sapien laoreet elit </Message>`}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let current;

	const docheader = new DocHeader({
			props: {
				title: "Message",
				subtitle: "Message blocks to convey information"
			},
			$$inline: true
		});

	const example = new Example({
			props: {
				code: `<script>
  import { Button, Message } from 'svelma'

  let open
</script>

<Button class="block" on:click={() => open = !open}>Toggle</Button>
<Message active={!open} title="Default"
  on:close={active => open = active}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Message>`,
				$$slots: {
					default: [create_default_slot],
					preview: [create_preview_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(docheader.$$.fragment);
			t = space();
			create_component(example.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(docheader.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(example.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(docheader, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(example, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const example_changes = {};

			if (dirty & /*$$scope, open*/ 9) {
				example_changes.$$scope = { dirty, ctx };
			}

			example.$set(example_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(docheader.$$.fragment, local);
			transition_in(example.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(docheader.$$.fragment, local);
			transition_out(example.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(docheader, detaching);
			if (detaching) detach_dev(t);
			destroy_component(example, detaching);
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
	let open;
	const click_handler = () => $$invalidate(0, open = !open);
	const close_handler = active => $$invalidate(0, open = active);

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
	};

	return [open, click_handler, close_handler];
}

class Message_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Message_1",
			options,
			id: create_fragment.name
		});
	}
}

export default Message_1;

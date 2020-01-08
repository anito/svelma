import { c as SvelteComponentDev, d as init, b as safe_not_equal, e as dispatch_dev, C as create_component, G as space, f as element, R as text, D as claim_component, H as claim_space, g as claim_element, h as children, S as claim_text, i as detach_dev, j as attr_dev, k as add_location, E as mount_component, n as insert_dev, o as append_dev, A as transition_in, y as transition_out, F as destroy_component, W as binding_callbacks, ae as bind, af as add_flush_callback, T as set_data_dev, a as noop } from './chunk.0f951886.js';
import { l as Switch } from './chunk.b9034416.js';
import './chunk.0a41e55b.js';
import { a as DocHeader } from './chunk.45862366.js';
import './chunk.162a27e3.js';
import { a as Example } from './chunk.09bae8d1.js';
import { a as JSDoc } from './chunk.472f5470.js';

/* src/routes/components/switch.svelte generated by Svelte v3.16.7 */
const file = "src/routes/components/switch.svelte";

// (39:6) <Switch bind:checked={val}>
function create_default_slot_14(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Foo");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Foo");
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
		id: create_default_slot_14.name,
		type: "slot",
		source: "(39:6) <Switch bind:checked={val}>",
		ctx
	});

	return block;
}

// (44:6) <Switch disabled>
function create_default_slot_13(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Disabled");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Disabled");
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
		id: create_default_slot_13.name,
		type: "slot",
		source: "(44:6) <Switch disabled>",
		ctx
	});

	return block;
}

// (37:2) <div slot="preview">
function create_preview_slot_2(ctx) {
	let div0;
	let div1;
	let updating_checked;
	let t0;
	let br;
	let t1;
	let code;
	let t2;
	let t3_value = JSON.stringify(/*val*/ ctx[1]) + "";
	let t3;
	let t4;
	let div2;
	let current;

	function switch0_checked_binding(value) {
		/*switch0_checked_binding*/ ctx[2].call(null, value);
	}

	let switch0_props = {
		$$slots: { default: [create_default_slot_14] },
		$$scope: { ctx }
	};

	if (/*val*/ ctx[1] !== void 0) {
		switch0_props.checked = /*val*/ ctx[1];
	}

	const switch0 = new Switch({ props: switch0_props, $$inline: true });
	binding_callbacks.push(() => bind(switch0, "checked", switch0_checked_binding));

	const switch1 = new Switch({
			props: {
				disabled: true,
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			div1 = element("div");
			create_component(switch0.$$.fragment);
			t0 = space();
			br = element("br");
			t1 = space();
			code = element("code");
			t2 = text("value = ");
			t3 = text(t3_value);
			t4 = space();
			div2 = element("div");
			create_component(switch1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true });
			var div0_nodes = children(div0);
			div1 = claim_element(div0_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(switch0.$$.fragment, div1_nodes);
			t0 = claim_space(div1_nodes);
			br = claim_element(div1_nodes, "BR", {});
			t1 = claim_space(div1_nodes);
			code = claim_element(div1_nodes, "CODE", {});
			var code_nodes = children(code);
			t2 = claim_text(code_nodes, "value = ");
			t3 = claim_text(code_nodes, t3_value);
			code_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			div2 = claim_element(div0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(switch1.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(br, file, 39, 6, 881);
			add_location(code, file, 40, 6, 892);
			attr_dev(div1, "class", "field");
			add_location(div1, file, 37, 4, 809);
			attr_dev(div2, "class", "field");
			add_location(div2, file, 42, 4, 950);
			attr_dev(div0, "slot", "preview");
			add_location(div0, file, 36, 2, 784);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div1);
			mount_component(switch0, div1, null);
			append_dev(div1, t0);
			append_dev(div1, br);
			append_dev(div1, t1);
			append_dev(div1, code);
			append_dev(code, t2);
			append_dev(code, t3);
			append_dev(div0, t4);
			append_dev(div0, div2);
			mount_component(switch1, div2, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch0_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_checked && dirty & /*val*/ 2) {
				updating_checked = true;
				switch0_changes.checked = /*val*/ ctx[1];
				add_flush_callback(() => updating_checked = false);
			}

			switch0.$set(switch0_changes);
			if ((!current || dirty & /*val*/ 2) && t3_value !== (t3_value = JSON.stringify(/*val*/ ctx[1]) + "")) set_data_dev(t3, t3_value);
			const switch1_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch1_changes.$$scope = { dirty, ctx };
			}

			switch1.$set(switch1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(switch0.$$.fragment, local);
			transition_in(switch1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(switch0.$$.fragment, local);
			transition_out(switch1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(switch0);
			destroy_component(switch1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preview_slot_2.name,
		type: "slot",
		source: "(37:2) <div slot=\\\"preview\\\">",
		ctx
	});

	return block;
}

// (22:0) <Example code={`<script>   import { Switch } from 'svelma'      let val </script>  <div class="field">   <Switch bind:checked={val}>Foo</Switch>   <br>   <code>value = {JSON.stringify(val)}</code> </div> <div class="field">   <Switch disabled>Disabled</Switch> </div> `}>
function create_default_slot_12(ctx) {

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
		id: create_default_slot_12.name,
		type: "slot",
		source: "(22:0) <Example code={`<script>   import { Switch } from 'svelma'      let val </script>  <div class=\\\"field\\\">   <Switch bind:checked={val}>Foo</Switch>   <br>   <code>value = {JSON.stringify(val)}</code> </div> <div class=\\\"field\\\">   <Switch disabled>Disabled</Switch> </div> `}>",
		ctx
	});

	return block;
}

// (77:6) <Switch checked="true" type="is-primary">
function create_default_slot_11(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Primary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Primary");
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
		id: create_default_slot_11.name,
		type: "slot",
		source: "(77:6) <Switch checked=\\\"true\\\" type=\\\"is-primary\\\">",
		ctx
	});

	return block;
}

// (80:6) <Switch checked="true" type="is-danger">
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Danger");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Danger");
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
		id: create_default_slot_10.name,
		type: "slot",
		source: "(80:6) <Switch checked=\\\"true\\\" type=\\\"is-danger\\\">",
		ctx
	});

	return block;
}

// (83:6) <Switch checked="true" type="is-warning">
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Warning");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Warning");
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
		id: create_default_slot_9.name,
		type: "slot",
		source: "(83:6) <Switch checked=\\\"true\\\" type=\\\"is-warning\\\">",
		ctx
	});

	return block;
}

// (86:6) <Switch checked="true" type="is-info">
function create_default_slot_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Info");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Info");
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
		id: create_default_slot_8.name,
		type: "slot",
		source: "(86:6) <Switch checked=\\\"true\\\" type=\\\"is-info\\\">",
		ctx
	});

	return block;
}

// (89:6) <Switch checked="true" type="is-link">
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Link");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Link");
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
		id: create_default_slot_7.name,
		type: "slot",
		source: "(89:6) <Switch checked=\\\"true\\\" type=\\\"is-link\\\">",
		ctx
	});

	return block;
}

// (92:6) <Switch checked="true" type="is-dark">
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dark");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dark");
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
		id: create_default_slot_6.name,
		type: "slot",
		source: "(92:6) <Switch checked=\\\"true\\\" type=\\\"is-dark\\\">",
		ctx
	});

	return block;
}

// (75:2) <div slot="preview">
function create_preview_slot_1(ctx) {
	let div0;
	let div1;
	let t0;
	let div2;
	let t1;
	let div3;
	let t2;
	let div4;
	let t3;
	let div5;
	let t4;
	let div6;
	let current;

	const switch0 = new Switch({
			props: {
				checked: "true",
				type: "is-primary",
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch1 = new Switch({
			props: {
				checked: "true",
				type: "is-danger",
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch2 = new Switch({
			props: {
				checked: "true",
				type: "is-warning",
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch3 = new Switch({
			props: {
				checked: "true",
				type: "is-info",
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch4 = new Switch({
			props: {
				checked: "true",
				type: "is-link",
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch5 = new Switch({
			props: {
				checked: "true",
				type: "is-dark",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			div1 = element("div");
			create_component(switch0.$$.fragment);
			t0 = space();
			div2 = element("div");
			create_component(switch1.$$.fragment);
			t1 = space();
			div3 = element("div");
			create_component(switch2.$$.fragment);
			t2 = space();
			div4 = element("div");
			create_component(switch3.$$.fragment);
			t3 = space();
			div5 = element("div");
			create_component(switch4.$$.fragment);
			t4 = space();
			div6 = element("div");
			create_component(switch5.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true });
			var div0_nodes = children(div0);
			div1 = claim_element(div0_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(switch0.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			div2 = claim_element(div0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(switch1.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			div3 = claim_element(div0_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(switch2.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			div4 = claim_element(div0_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(switch3.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			div5 = claim_element(div0_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(switch4.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			div6 = claim_element(div0_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			claim_component(switch5.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div1, "class", "field");
			add_location(div1, file, 75, 4, 1702);
			attr_dev(div2, "class", "field");
			add_location(div2, file, 78, 4, 1801);
			attr_dev(div3, "class", "field");
			add_location(div3, file, 81, 4, 1898);
			attr_dev(div4, "class", "field");
			add_location(div4, file, 84, 4, 1997);
			attr_dev(div5, "class", "field");
			add_location(div5, file, 87, 4, 2090);
			attr_dev(div6, "class", "field");
			add_location(div6, file, 90, 4, 2183);
			attr_dev(div0, "slot", "preview");
			add_location(div0, file, 74, 2, 1677);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div1);
			mount_component(switch0, div1, null);
			append_dev(div0, t0);
			append_dev(div0, div2);
			mount_component(switch1, div2, null);
			append_dev(div0, t1);
			append_dev(div0, div3);
			mount_component(switch2, div3, null);
			append_dev(div0, t2);
			append_dev(div0, div4);
			mount_component(switch3, div4, null);
			append_dev(div0, t3);
			append_dev(div0, div5);
			mount_component(switch4, div5, null);
			append_dev(div0, t4);
			append_dev(div0, div6);
			mount_component(switch5, div6, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch0_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch0_changes.$$scope = { dirty, ctx };
			}

			switch0.$set(switch0_changes);
			const switch1_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch1_changes.$$scope = { dirty, ctx };
			}

			switch1.$set(switch1_changes);
			const switch2_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch2_changes.$$scope = { dirty, ctx };
			}

			switch2.$set(switch2_changes);
			const switch3_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch3_changes.$$scope = { dirty, ctx };
			}

			switch3.$set(switch3_changes);
			const switch4_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch4_changes.$$scope = { dirty, ctx };
			}

			switch4.$set(switch4_changes);
			const switch5_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch5_changes.$$scope = { dirty, ctx };
			}

			switch5.$set(switch5_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(switch0.$$.fragment, local);
			transition_in(switch1.$$.fragment, local);
			transition_in(switch2.$$.fragment, local);
			transition_in(switch3.$$.fragment, local);
			transition_in(switch4.$$.fragment, local);
			transition_in(switch5.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(switch0.$$.fragment, local);
			transition_out(switch1.$$.fragment, local);
			transition_out(switch2.$$.fragment, local);
			transition_out(switch3.$$.fragment, local);
			transition_out(switch4.$$.fragment, local);
			transition_out(switch5.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(switch0);
			destroy_component(switch1);
			destroy_component(switch2);
			destroy_component(switch3);
			destroy_component(switch4);
			destroy_component(switch5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preview_slot_1.name,
		type: "slot",
		source: "(75:2) <div slot=\\\"preview\\\">",
		ctx
	});

	return block;
}

// (52:0) <Example code={`<script>   import { Switch } from 'svelma' </script>  <div class="field">   <Switch checked="true" type="is-primary">Primary</Switch> </div> <div class="field">   <Switch checked="true" type="is-danger">Danger</Switch> </div> <div class="field">   <Switch checked="true" type="is-warning">Warning</Switch> </div> <div class="field">   <Switch checked="true" type="is-info">Info</Switch> </div> <div class="field">   <Switch checked="true" type="is-link">Link</Switch> </div> <div class="field">   <Switch checked="true" type="is-dark">Dark</Switch> </div> `}>
function create_default_slot_5(ctx) {

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
		id: create_default_slot_5.name,
		type: "slot",
		source: "(52:0) <Example code={`<script>   import { Switch } from 'svelma' </script>  <div class=\\\"field\\\">   <Switch checked=\\\"true\\\" type=\\\"is-primary\\\">Primary</Switch> </div> <div class=\\\"field\\\">   <Switch checked=\\\"true\\\" type=\\\"is-danger\\\">Danger</Switch> </div> <div class=\\\"field\\\">   <Switch checked=\\\"true\\\" type=\\\"is-warning\\\">Warning</Switch> </div> <div class=\\\"field\\\">   <Switch checked=\\\"true\\\" type=\\\"is-info\\\">Info</Switch> </div> <div class=\\\"field\\\">   <Switch checked=\\\"true\\\" type=\\\"is-link\\\">Link</Switch> </div> <div class=\\\"field\\\">   <Switch checked=\\\"true\\\" type=\\\"is-dark\\\">Dark</Switch> </div> `}>",
		ctx
	});

	return block;
}

// (120:6) <Switch size="is-small">
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Small");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Small");
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
		source: "(120:6) <Switch size=\\\"is-small\\\">",
		ctx
	});

	return block;
}

// (123:6) <Switch>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Default");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Default");
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
		source: "(123:6) <Switch>",
		ctx
	});

	return block;
}

// (126:6) <Switch size="is-medium">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Medium");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Medium");
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
		source: "(126:6) <Switch size=\\\"is-medium\\\">",
		ctx
	});

	return block;
}

// (129:6) <Switch size="is-large">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Large");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Large");
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
		source: "(129:6) <Switch size=\\\"is-large\\\">",
		ctx
	});

	return block;
}

// (118:2) <div slot="preview">
function create_preview_slot(ctx) {
	let div0;
	let div1;
	let t0;
	let div2;
	let t1;
	let div3;
	let t2;
	let div4;
	let current;

	const switch0 = new Switch({
			props: {
				size: "is-small",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch1 = new Switch({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch2 = new Switch({
			props: {
				size: "is-medium",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const switch3 = new Switch({
			props: {
				size: "is-large",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			div1 = element("div");
			create_component(switch0.$$.fragment);
			t0 = space();
			div2 = element("div");
			create_component(switch1.$$.fragment);
			t1 = space();
			div3 = element("div");
			create_component(switch2.$$.fragment);
			t2 = space();
			div4 = element("div");
			create_component(switch3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true });
			var div0_nodes = children(div0);
			div1 = claim_element(div0_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(switch0.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			div2 = claim_element(div0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(switch1.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			div3 = claim_element(div0_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(switch2.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			div4 = claim_element(div0_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(switch3.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div1, "class", "field");
			add_location(div1, file, 118, 4, 2717);
			attr_dev(div2, "class", "field");
			add_location(div2, file, 121, 4, 2797);
			attr_dev(div3, "class", "field");
			add_location(div3, file, 124, 4, 2863);
			attr_dev(div4, "class", "field");
			add_location(div4, file, 127, 4, 2945);
			attr_dev(div0, "slot", "preview");
			add_location(div0, file, 117, 2, 2692);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div1);
			mount_component(switch0, div1, null);
			append_dev(div0, t0);
			append_dev(div0, div2);
			mount_component(switch1, div2, null);
			append_dev(div0, t1);
			append_dev(div0, div3);
			mount_component(switch2, div3, null);
			append_dev(div0, t2);
			append_dev(div0, div4);
			mount_component(switch3, div4, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch0_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch0_changes.$$scope = { dirty, ctx };
			}

			switch0.$set(switch0_changes);
			const switch1_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch1_changes.$$scope = { dirty, ctx };
			}

			switch1.$set(switch1_changes);
			const switch2_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch2_changes.$$scope = { dirty, ctx };
			}

			switch2.$set(switch2_changes);
			const switch3_changes = {};

			if (dirty & /*$$scope*/ 8) {
				switch3_changes.$$scope = { dirty, ctx };
			}

			switch3.$set(switch3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(switch0.$$.fragment, local);
			transition_in(switch1.$$.fragment, local);
			transition_in(switch2.$$.fragment, local);
			transition_in(switch3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(switch0.$$.fragment, local);
			transition_out(switch1.$$.fragment, local);
			transition_out(switch2.$$.fragment, local);
			transition_out(switch3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(switch0);
			destroy_component(switch1);
			destroy_component(switch2);
			destroy_component(switch3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preview_slot.name,
		type: "slot",
		source: "(118:2) <div slot=\\\"preview\\\">",
		ctx
	});

	return block;
}

// (100:0) <Example code={`<script>   import { Switch } from 'svelma' </script>  <div class="field">   <Switch size="is-small">Small</Switch> </div> <div class="field">   <Switch>Default</Switch> </div> <div class="field">   <Switch size="is-medium">Medium</Switch> </div> <div class="field">   <Switch size="is-large">Large</Switch> </div> </div> `}>
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
		source: "(100:0) <Example code={`<script>   import { Switch } from 'svelma' </script>  <div class=\\\"field\\\">   <Switch size=\\\"is-small\\\">Small</Switch> </div> <div class=\\\"field\\\">   <Switch>Default</Switch> </div> <div class=\\\"field\\\">   <Switch size=\\\"is-medium\\\">Medium</Switch> </div> <div class=\\\"field\\\">   <Switch size=\\\"is-large\\\">Large</Switch> </div> </div> `}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let t1;
	let hr0;
	let t2;
	let p0;
	let t3;
	let t4;
	let t5;
	let hr1;
	let t6;
	let p1;
	let t7;
	let t8;
	let t9;
	let current;

	const docheader = new DocHeader({
			props: {
				title: "Switch",
				subtitle: "Switchy toggly thing"
			},
			$$inline: true
		});

	const example0 = new Example({
			props: {
				code: `<script>
  import { Switch } from 'svelma'
  
  let val
</script>

<div class="field">
  <Switch bind:checked={val}>Foo</Switch>
  <br>
  <code>value = {JSON.stringify(val)}</code>
</div>
<div class="field">
  <Switch disabled>Disabled</Switch>
</div>
`,
				$$slots: {
					default: [create_default_slot_12],
					preview: [create_preview_slot_2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example1 = new Example({
			props: {
				code: `<script>
  import { Switch } from 'svelma'
</script>

<div class="field">
  <Switch checked="true" type="is-primary">Primary</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-danger">Danger</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-warning">Warning</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-info">Info</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-link">Link</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-dark">Dark</Switch>
</div>
`,
				$$slots: {
					default: [create_default_slot_5],
					preview: [create_preview_slot_1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const example2 = new Example({
			props: {
				code: `<script>
  import { Switch } from 'svelma'
</script>

<div class="field">
  <Switch size="is-small">Small</Switch>
</div>
<div class="field">
  <Switch>Default</Switch>
</div>
<div class="field">
  <Switch size="is-medium">Medium</Switch>
</div>
<div class="field">
  <Switch size="is-large">Large</Switch>
</div>
</div>
`,
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
			create_component(example0.$$.fragment);
			t1 = space();
			hr0 = element("hr");
			t2 = space();
			p0 = element("p");
			t3 = text("Types");
			t4 = space();
			create_component(example1.$$.fragment);
			t5 = space();
			hr1 = element("hr");
			t6 = space();
			p1 = element("p");
			t7 = text("Sizes");
			t8 = space();
			create_component(example2.$$.fragment);
			t9 = space();
			create_component(jsdoc_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(docheader.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(example0.$$.fragment, nodes);
			t1 = claim_space(nodes);
			hr0 = claim_element(nodes, "HR", { class: true });
			t2 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Types");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			claim_component(example1.$$.fragment, nodes);
			t5 = claim_space(nodes);
			hr1 = claim_element(nodes, "HR", { class: true });
			t6 = claim_space(nodes);
			p1 = claim_element(nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Sizes");
			p1_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			claim_component(example2.$$.fragment, nodes);
			t9 = claim_space(nodes);
			claim_component(jsdoc_1.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(hr0, "class", "is-medium");
			add_location(hr0, file, 48, 0, 1043);
			attr_dev(p0, "class", "title is-4");
			add_location(p0, file, 49, 0, 1066);
			attr_dev(hr1, "class", "is-medium");
			add_location(hr1, file, 96, 0, 2293);
			attr_dev(p1, "class", "title is-4");
			add_location(p1, file, 97, 0, 2316);
		},
		m: function mount(target, anchor) {
			mount_component(docheader, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(example0, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, hr0, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			mount_component(example1, target, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, hr1, anchor);
			insert_dev(target, t6, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t7);
			insert_dev(target, t8, anchor);
			mount_component(example2, target, anchor);
			insert_dev(target, t9, anchor);
			mount_component(jsdoc_1, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const example0_changes = {};

			if (dirty & /*$$scope, val*/ 10) {
				example0_changes.$$scope = { dirty, ctx };
			}

			example0.$set(example0_changes);
			const example1_changes = {};

			if (dirty & /*$$scope*/ 8) {
				example1_changes.$$scope = { dirty, ctx };
			}

			example1.$set(example1_changes);
			const example2_changes = {};

			if (dirty & /*$$scope*/ 8) {
				example2_changes.$$scope = { dirty, ctx };
			}

			example2.$set(example2_changes);
			const jsdoc_1_changes = {};
			if (dirty & /*jsdoc*/ 1) jsdoc_1_changes.jsdoc = /*jsdoc*/ ctx[0];
			jsdoc_1.$set(jsdoc_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(docheader.$$.fragment, local);
			transition_in(example0.$$.fragment, local);
			transition_in(example1.$$.fragment, local);
			transition_in(example2.$$.fragment, local);
			transition_in(jsdoc_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(docheader.$$.fragment, local);
			transition_out(example0.$$.fragment, local);
			transition_out(example1.$$.fragment, local);
			transition_out(example2.$$.fragment, local);
			transition_out(jsdoc_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(docheader, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(example0, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(hr0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			destroy_component(example1, detaching);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(hr1);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t8);
			destroy_component(example2, detaching);
			if (detaching) detach_dev(t9);
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
	const res = await this.fetch(`components/switch.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

function instance($$self, $$props, $$invalidate) {
	let { jsdoc } = $$props;
	let val;
	const writable_props = ["jsdoc"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Switch> was created with unknown prop '${key}'`);
	});

	function switch0_checked_binding(value) {
		val = value;
		$$invalidate(1, val);
	}

	$$self.$set = $$props => {
		if ("jsdoc" in $$props) $$invalidate(0, jsdoc = $$props.jsdoc);
	};

	$$self.$capture_state = () => {
		return { jsdoc, val };
	};

	$$self.$inject_state = $$props => {
		if ("jsdoc" in $$props) $$invalidate(0, jsdoc = $$props.jsdoc);
		if ("val" in $$props) $$invalidate(1, val = $$props.val);
	};

	return [jsdoc, val, switch0_checked_binding];
}

class Switch_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { jsdoc: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Switch_1",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*jsdoc*/ ctx[0] === undefined && !("jsdoc" in props)) {
			console.warn("<Switch> was created without expected prop 'jsdoc'");
		}
	}

	get jsdoc() {
		throw new Error("<Switch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set jsdoc(value) {
		throw new Error("<Switch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Switch_1;
export { preload };

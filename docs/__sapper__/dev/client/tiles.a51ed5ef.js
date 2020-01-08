import { c as SvelteComponentDev, d as init, b as safe_not_equal, e as dispatch_dev, u as onMount, C as create_component, G as space, D as claim_component, H as claim_space, E as mount_component, n as insert_dev, A as transition_in, y as transition_out, F as destroy_component, i as detach_dev, f as element, R as text, g as claim_element, h as children, S as claim_text, j as attr_dev, k as add_location, o as append_dev, a as noop } from './chunk.0f951886.js';
import './chunk.b9034416.js';
import './chunk.0a41e55b.js';
import { a as DocHeader } from './chunk.45862366.js';
import './chunk.162a27e3.js';
import { a as Example } from './chunk.146fff5a.js';

/* src/routes/bulma/tiles.svelte generated by Svelte v3.16.7 */
const file = "src/routes/bulma/tiles.svelte";

// (138:2) <div slot="preview">
function create_preview_slot(ctx) {
	let div0;
	let script;
	let script_src_value;
	let t0;
	let h5;
	let t1;
	let t2;
	let div10;
	let div6;
	let div3;
	let div1;
	let article0;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let article1;
	let p2;
	let t7;
	let t8;
	let p3;
	let t9;
	let t10;
	let div2;
	let article2;
	let p4;
	let t11;
	let t12;
	let p5;
	let t13;
	let t14;
	let figure;
	let img;
	let img_src_value;
	let t15;
	let div5;
	let article3;
	let p6;
	let t16;
	let t17;
	let p7;
	let t18;
	let t19;
	let div4;
	let t20;
	let div9;
	let article4;
	let div8;
	let p8;
	let t21;
	let t22;
	let p9;
	let t23;
	let t24;
	let div7;

	const block = {
		c: function create() {
			div0 = element("div");
			script = element("script");
			t0 = space();
			h5 = element("h5");
			t1 = text("Click to drag tiles");
			t2 = space();
			div10 = element("div");
			div6 = element("div");
			div3 = element("div");
			div1 = element("div");
			article0 = element("article");
			p0 = element("p");
			t3 = text("Vertical...");
			t4 = space();
			p1 = element("p");
			t5 = text("Top tile");
			t6 = space();
			article1 = element("article");
			p2 = element("p");
			t7 = text("...tiles");
			t8 = space();
			p3 = element("p");
			t9 = text("Bottom tile");
			t10 = space();
			div2 = element("div");
			article2 = element("article");
			p4 = element("p");
			t11 = text("Middle tile");
			t12 = space();
			p5 = element("p");
			t13 = text("With an image");
			t14 = space();
			figure = element("figure");
			img = element("img");
			t15 = space();
			div5 = element("div");
			article3 = element("article");
			p6 = element("p");
			t16 = text("Wide tile");
			t17 = space();
			p7 = element("p");
			t18 = text("Aligned with the right tile");
			t19 = space();
			div4 = element("div");
			t20 = space();
			div9 = element("div");
			article4 = element("article");
			div8 = element("div");
			p8 = element("p");
			t21 = text("Tall tile");
			t22 = space();
			p9 = element("p");
			t23 = text("With even more content");
			t24 = space();
			div7 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true });
			var div0_nodes = children(div0);
			script = claim_element(div0_nodes, "SCRIPT", { src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t1 = claim_text(h5_nodes, "Click to drag tiles");
			h5_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			div10 = claim_element(div0_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div6 = claim_element(div10_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			article0 = claim_element(div1_nodes, "ARTICLE", { class: true });
			var article0_nodes = children(article0);
			p0 = claim_element(article0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Vertical...");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(article0_nodes);
			p1 = claim_element(article0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Top tile");
			p1_nodes.forEach(detach_dev);
			article0_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			article1 = claim_element(div1_nodes, "ARTICLE", { class: true });
			var article1_nodes = children(article1);
			p2 = claim_element(article1_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "...tiles");
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(article1_nodes);
			p3 = claim_element(article1_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t9 = claim_text(p3_nodes, "Bottom tile");
			p3_nodes.forEach(detach_dev);
			article1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t10 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			article2 = claim_element(div2_nodes, "ARTICLE", { class: true });
			var article2_nodes = children(article2);
			p4 = claim_element(article2_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t11 = claim_text(p4_nodes, "Middle tile");
			p4_nodes.forEach(detach_dev);
			t12 = claim_space(article2_nodes);
			p5 = claim_element(article2_nodes, "P", { class: true });
			var p5_nodes = children(p5);
			t13 = claim_text(p5_nodes, "With an image");
			p5_nodes.forEach(detach_dev);
			t14 = claim_space(article2_nodes);
			figure = claim_element(article2_nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { src: true, alt: true });
			figure_nodes.forEach(detach_dev);
			article2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t15 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			article3 = claim_element(div5_nodes, "ARTICLE", { class: true });
			var article3_nodes = children(article3);
			p6 = claim_element(article3_nodes, "P", { class: true });
			var p6_nodes = children(p6);
			t16 = claim_text(p6_nodes, "Wide tile");
			p6_nodes.forEach(detach_dev);
			t17 = claim_space(article3_nodes);
			p7 = claim_element(article3_nodes, "P", { class: true });
			var p7_nodes = children(p7);
			t18 = claim_text(p7_nodes, "Aligned with the right tile");
			p7_nodes.forEach(detach_dev);
			t19 = claim_space(article3_nodes);
			div4 = claim_element(article3_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div4_nodes.forEach(detach_dev);
			article3_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t20 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			article4 = claim_element(div9_nodes, "ARTICLE", { class: true });
			var article4_nodes = children(article4);
			div8 = claim_element(article4_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			p8 = claim_element(div8_nodes, "P", { class: true });
			var p8_nodes = children(p8);
			t21 = claim_text(p8_nodes, "Tall tile");
			p8_nodes.forEach(detach_dev);
			t22 = claim_space(div8_nodes);
			p9 = claim_element(div8_nodes, "P", { class: true });
			var p9_nodes = children(p9);
			t23 = claim_text(p9_nodes, "With even more content");
			p9_nodes.forEach(detach_dev);
			t24 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			article4_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (script.src !== (script_src_value = "https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js")) attr_dev(script, "src", script_src_value);
			add_location(script, file, 138, 4, 4648);
			attr_dev(h5, "class", "title");
			add_location(h5, file, 140, 4, 4738);
			attr_dev(p0, "class", "title");
			add_location(p0, file, 147, 14, 5019);
			attr_dev(p1, "class", "subtitle");
			add_location(p1, file, 148, 14, 5066);
			attr_dev(article0, "class", "tile is-child notification is-primary svelte-1q6iq0m");
			add_location(article0, file, 146, 12, 4949);
			attr_dev(p2, "class", "title");
			add_location(p2, file, 151, 14, 5204);
			attr_dev(p3, "class", "subtitle");
			add_location(p3, file, 152, 14, 5248);
			attr_dev(article1, "class", "tile is-child notification is-warning svelte-1q6iq0m");
			add_location(article1, file, 150, 12, 5134);
			attr_dev(div1, "class", "tile is-parent is-vertical svelte-1q6iq0m");
			add_location(div1, file, 145, 10, 4896);
			attr_dev(p4, "class", "title");
			add_location(p4, file, 157, 14, 5442);
			attr_dev(p5, "class", "subtitle");
			add_location(p5, file, 158, 14, 5489);
			if (img.src !== (img_src_value = "https://bulma.io/images/placeholders/640x480.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "profile");
			add_location(img, file, 160, 16, 5588);
			attr_dev(figure, "class", "image is-4by3");
			add_location(figure, file, 159, 14, 5541);
			attr_dev(article2, "class", "tile is-child notification is-info svelte-1q6iq0m");
			add_location(article2, file, 156, 12, 5375);
			attr_dev(div2, "class", "tile is-parent svelte-1q6iq0m");
			add_location(div2, file, 155, 10, 5334);
			attr_dev(div3, "class", "tile svelte-1q6iq0m");
			add_location(div3, file, 144, 8, 4867);
			attr_dev(p6, "class", "title");
			add_location(p6, file, 167, 12, 5858);
			attr_dev(p7, "class", "subtitle");
			add_location(p7, file, 168, 12, 5901);
			attr_dev(div4, "class", "content");
			add_location(div4, file, 169, 12, 5965);
			attr_dev(article3, "class", "tile is-child notification is-danger svelte-1q6iq0m");
			add_location(article3, file, 166, 10, 5791);
			attr_dev(div5, "class", "tile is-parent svelte-1q6iq0m");
			add_location(div5, file, 165, 8, 5752);
			attr_dev(div6, "class", "tile is-vertical is-8 svelte-1q6iq0m");
			add_location(div6, file, 143, 6, 4823);
			attr_dev(p8, "class", "title");
			add_location(p8, file, 178, 12, 6229);
			attr_dev(p9, "class", "subtitle");
			add_location(p9, file, 179, 12, 6272);
			attr_dev(div7, "class", "content");
			add_location(div7, file, 180, 12, 6331);
			attr_dev(div8, "class", "content");
			add_location(div8, file, 177, 10, 6195);
			attr_dev(article4, "class", "tile is-child notification is-success svelte-1q6iq0m");
			add_location(article4, file, 176, 8, 6129);
			attr_dev(div9, "class", "tile is-parent svelte-1q6iq0m");
			add_location(div9, file, 175, 6, 6092);
			attr_dev(div10, "class", "tile is-ancestor svelte-1q6iq0m");
			add_location(div10, file, 142, 4, 4786);
			attr_dev(div0, "slot", "preview");
			add_location(div0, file, 137, 2, 4623);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, script);
			append_dev(div0, t0);
			append_dev(div0, h5);
			append_dev(h5, t1);
			append_dev(div0, t2);
			append_dev(div0, div10);
			append_dev(div10, div6);
			append_dev(div6, div3);
			append_dev(div3, div1);
			append_dev(div1, article0);
			append_dev(article0, p0);
			append_dev(p0, t3);
			append_dev(article0, t4);
			append_dev(article0, p1);
			append_dev(p1, t5);
			append_dev(div1, t6);
			append_dev(div1, article1);
			append_dev(article1, p2);
			append_dev(p2, t7);
			append_dev(article1, t8);
			append_dev(article1, p3);
			append_dev(p3, t9);
			append_dev(div3, t10);
			append_dev(div3, div2);
			append_dev(div2, article2);
			append_dev(article2, p4);
			append_dev(p4, t11);
			append_dev(article2, t12);
			append_dev(article2, p5);
			append_dev(p5, t13);
			append_dev(article2, t14);
			append_dev(article2, figure);
			append_dev(figure, img);
			append_dev(div6, t15);
			append_dev(div6, div5);
			append_dev(div5, article3);
			append_dev(article3, p6);
			append_dev(p6, t16);
			append_dev(article3, t17);
			append_dev(article3, p7);
			append_dev(p7, t18);
			append_dev(article3, t19);
			append_dev(article3, div4);
			append_dev(div10, t20);
			append_dev(div10, div9);
			append_dev(div9, article4);
			append_dev(article4, div8);
			append_dev(div8, p8);
			append_dev(p8, t21);
			append_dev(div8, t22);
			append_dev(div8, p9);
			append_dev(p9, t23);
			append_dev(div8, t24);
			append_dev(div8, div7);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preview_slot.name,
		type: "slot",
		source: "(138:2) <div slot=\\\"preview\\\">",
		ctx
	});

	return block;
}

// (48:0) <Example code={`<script>   import { onMount } from 'svelte'    async waitForDraggabilly() {     return new Promise((resolve, reject) => {       const interval = setInterval({         if (Draggabilly) {           clearInterval(interval);           resolve();         }       }, 100);     });   }    onMount(async () => {     const draggables = document.querySelectorAll('.tile.is-child');      await waitForDraggabilly();      for (const elm of draggables) {       let drag = new Draggabilly(elm, {         containment: '.tile.is-ancestor',       });     }   }) </script>  <style> .tile:not(.is-ancestor) {   -webkit-user-select: none;      -moz-user-select: none;       -ms-user-select: none;           user-select: none; }  :global(.is-dragging) {   -webkit-transform: rotate(25deg);           transform: rotate(25deg);   cursor: move; }  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGlsZTpub3QoLmlzLWFuY2VzdG9yKSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG46Z2xvYmFsKC5pcy1kcmFnZ2luZykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiJdfQ== */</style>  <script src="https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js"></script>  <div class="tile is-ancestor">   <div class="tile is-vertical is-8">     <div class="tile">       <div class="tile is-parent is-vertical">         <article class="tile is-child notification is-primary">           <p class="title">Vertical...</p>           <p class="subtitle">Top tile</p>         </article>         <article class="tile is-child notification is-warning">           <p class="title">...tiles</p>           <p class="subtitle">Bottom tile</p>         </article>       </div>       <div class="tile is-parent">         <article class="tile is-child notification is-info">           <p class="title">Middle tile</p>           <p class="subtitle">With an image</p>           <figure class="image is-4by3">             <img src="https://bulma.io/images/placeholders/640x480.png" />           </figure>         </article>       </div>     </div>     <div class="tile is-parent">       <article class="tile is-child notification is-danger">         <p class="title">Wide tile</p>         <p class="subtitle">Aligned with the right tile</p>         <div class="content">           <!-- Content -->         </div>       </article>     </div>   </div>   <div class="tile is-parent">     <article class="tile is-child notification is-success">       <div class="content">         <p class="title">Tall tile</p>         <p class="subtitle">With even more content</p>         <div class="content">           <!-- Content -->         </div>       </div>     </article>   </div> </div>`}>
function create_default_slot(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(48:0) <Example code={`<script>   import { onMount } from 'svelte'    async waitForDraggabilly() {     return new Promise((resolve, reject) => {       const interval = setInterval({         if (Draggabilly) {           clearInterval(interval);           resolve();         }       }, 100);     });   }    onMount(async () => {     const draggables = document.querySelectorAll('.tile.is-child');      await waitForDraggabilly();      for (const elm of draggables) {       let drag = new Draggabilly(elm, {         containment: '.tile.is-ancestor',       });     }   }) </script>  <style> .tile:not(.is-ancestor) {   -webkit-user-select: none;      -moz-user-select: none;       -ms-user-select: none;           user-select: none; }  :global(.is-dragging) {   -webkit-transform: rotate(25deg);           transform: rotate(25deg);   cursor: move; }  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGlsZTpub3QoLmlzLWFuY2VzdG9yKSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG46Z2xvYmFsKC5pcy1kcmFnZ2luZykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiJdfQ== */</style>  <script src=\\\"https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js\\\"></script>  <div class=\\\"tile is-ancestor\\\">   <div class=\\\"tile is-vertical is-8\\\">     <div class=\\\"tile\\\">       <div class=\\\"tile is-parent is-vertical\\\">         <article class=\\\"tile is-child notification is-primary\\\">           <p class=\\\"title\\\">Vertical...</p>           <p class=\\\"subtitle\\\">Top tile</p>         </article>         <article class=\\\"tile is-child notification is-warning\\\">           <p class=\\\"title\\\">...tiles</p>           <p class=\\\"subtitle\\\">Bottom tile</p>         </article>       </div>       <div class=\\\"tile is-parent\\\">         <article class=\\\"tile is-child notification is-info\\\">           <p class=\\\"title\\\">Middle tile</p>           <p class=\\\"subtitle\\\">With an image</p>           <figure class=\\\"image is-4by3\\\">             <img src=\\\"https://bulma.io/images/placeholders/640x480.png\\\" />           </figure>         </article>       </div>     </div>     <div class=\\\"tile is-parent\\\">       <article class=\\\"tile is-child notification is-danger\\\">         <p class=\\\"title\\\">Wide tile</p>         <p class=\\\"subtitle\\\">Aligned with the right tile</p>         <div class=\\\"content\\\">           <!-- Content -->         </div>       </article>     </div>   </div>   <div class=\\\"tile is-parent\\\">     <article class=\\\"tile is-child notification is-success\\\">       <div class=\\\"content\\\">         <p class=\\\"title\\\">Tall tile</p>         <p class=\\\"subtitle\\\">With even more content</p>         <div class=\\\"content\\\">           <!-- Content -->         </div>       </div>     </article>   </div> </div>`}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let current;

	const docheader = new DocHeader({
			props: {
				title: "Tiles",
				subtitle: "2D grids with flexbox"
			},
			$$inline: true
		});

	const example = new Example({
			props: {
				code: `<script>
  import { onMount } from 'svelte'

  async waitForDraggabilly() {
    return new Promise((resolve, reject) => {
      const interval = setInterval({
        if (Draggabilly) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }

  onMount(async () => {
    const draggables = document.querySelectorAll('.tile.is-child');

    await waitForDraggabilly();

    for (const elm of draggables) {
      let drag = new Draggabilly(elm, {
        containment: '.tile.is-ancestor',
      });
    }
  })
</script>

<style>
.tile:not(.is-ancestor) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

:global(.is-dragging) {
  -webkit-transform: rotate(25deg);
          transform: rotate(25deg);
  cursor: move;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGlsZTpub3QoLmlzLWFuY2VzdG9yKSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG46Z2xvYmFsKC5pcy1kcmFnZ2luZykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiJdfQ== */</style>

<script src="https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js"></script>

<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">Top tile</p>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" />
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>`,
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

			if (dirty & /*$$scope*/ 1) {
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

async function waitForDraggabilly() {
	return new Promise((resolve, reject) => {
			const interval = setInterval(
				() => {
					if (Draggabilly) {
						clearInterval(interval);
						resolve();
					}
				},
				250
			);
		});
}

function instance($$self) {
	onMount(async () => {
		const draggables = document.querySelectorAll(".tile.is-child");
		await waitForDraggabilly();

		for (const elm of draggables) {
			let drag = new Draggabilly(elm, { containment: ".tile.is-ancestor" });
		}
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		
	};

	return [];
}

class Tiles extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tiles",
			options,
			id: create_fragment.name
		});
	}
}

export default Tiles;

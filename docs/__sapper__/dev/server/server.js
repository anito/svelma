'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var __chunk_1 = require('./chunk-7f071dbf.js');
var __chunk_2 = require('./chunk-1959450c.js');
var index = require('./index-b109f01e.js');
require('./chunk-8c7fa0c8.js');
require('clipboard');
var __chunk_4 = require('./chunk-14459e5a.js');
require('./chunk-64148feb.js');
require('./chunk-58469ebb.js');
var notification = require('./notification-4b738366.js');
var collapse = require('./collapse-36623572.js');
var progress = require('./progress-cedcdc19.js');
var snackbar = require('./snackbar-ee695c35.js');
var message = require('./message-e5569286.js');
var button = require('./button-f07d8edb.js');
var dialog = require('./dialog-c353d519.js');
var _switch = require('./switch-069690de.js');
var field = require('./field-4ce929b3.js');
var input = require('./input-adb6dfee.js');
var modal = require('./modal-7d8fc2ca.js');
var toast = require('./toast-fd747174.js');
var icon = require('./icon-4d555486.js');
var tabs = require('./tabs-ad130b4a.js');
var index$1 = require('./index-5b31f3b5.js');
var about = require('./about-25dd369b.js');
var intro = require('./intro-f202c78a.js');
var media = require('./media-6e3e33aa.js');
var table = require('./table-3171db4c.js');
var tiles = require('./tiles-baaea80e.js');
var hero = require('./hero-23593e53.js');
var index$2 = require('./index-a9332d54.js');
var _slug_ = require('./[slug]-896d1e3e.js');
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

var Button = [
	{
		meta: {
			filename: "Button.svelte",
			lineno: 7,
			columnno: 2,
			path: "src/components"
		},
		description: "HTML tag to use for button (either 'a' or 'button')",
		type: [
			"String"
		],
		defaultvalue: "button",
		name: "tag",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			defaultvalue: "button",
			name: "tag"
		},
		kind: "prop",
		values: "<code><code>button</code></code>, <code><code>a</code></code>",
		longname: "module:Button~tag",
		scope: "inner",
		memberof: "module:Button",
		___s: true
	},
	{
		meta: {
			filename: "Button.svelte",
			lineno: 13,
			columnno: 2,
			path: "src/components"
		},
		description: "Type (color of control)",
		type: [
			"String"
		],
		optional: true,
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			description: "Type (color of control)",
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Button~type",
		scope: "inner",
		memberof: "module:Button",
		___s: true
	},
	{
		meta: {
			filename: "Button.svelte",
			lineno: 19,
			columnno: 2,
			path: "src/components"
		},
		description: "Size of button",
		type: [
			"String"
		],
		optional: true,
		name: "size",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "size"
		},
		kind: "prop",
		values: "<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",
		longname: "module:Button~size",
		scope: "inner",
		memberof: "module:Button",
		___s: true
	},
	{
		meta: {
			filename: "Button.svelte",
			lineno: 25,
			columnno: 2,
			path: "src/components"
		},
		description: "Href to use when <code>tag</code> is 'a'",
		type: [
			"String"
		],
		optional: true,
		name: "href",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "href"
		},
		kind: "prop",
		longname: "module:Button~href",
		scope: "inner",
		memberof: "module:Button",
		___s: true,
		values: ""
	}
];
var Collapse = [
	{
		meta: {
			filename: "Collapse.svelte",
			lineno: 5,
			columnno: 2,
			path: "src/components"
		},
		description: "Whether the Collapse is open or not",
		type: [
			"boolean"
		],
		defaultvalue: true,
		name: "open",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			defaultvalue: true,
			name: "open"
		},
		kind: "prop",
		longname: "module:Collapse~open",
		scope: "inner",
		memberof: "module:Collapse",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Collapse.svelte",
			lineno: 10,
			columnno: 2,
			path: "src/components"
		},
		description: "Animation to use when opening/closing",
		type: [
			"String"
		],
		defaultvalue: "slide",
		name: "animation",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			defaultvalue: "slide",
			name: "animation"
		},
		kind: "prop",
		values: "<code>Any animation that ships with Svelte</code>",
		longname: "module:Collapse~animation",
		scope: "inner",
		memberof: "module:Collapse",
		___s: true
	}
];
var Dialog = [
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 7,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Show a header on the dialog with this text",
		type: [
			"String"
		],
		optional: true,
		name: "message",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "message"
		},
		kind: "prop",
		longname: "module:Dialog~message",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 12,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Text or html message for this dialog",
		type: [
			"String"
		],
		name: "message",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			name: "message"
		},
		kind: "prop",
		longname: "module:Dialog~message",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 17,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Text to show on the confirmation button",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "OK",
		name: "confirmText",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "OK",
			name: "confirmText"
		},
		kind: "prop",
		longname: "module:Dialog~confirmText",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 22,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Text to show on the cancel  button",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "Cancel",
		name: "cancelText",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "Cancel",
			name: "cancelText"
		},
		kind: "prop",
		longname: "module:Dialog~cancelText",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 27,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Focus on confirm or cancel button when dialog opens",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "confirm",
		name: "focusOn",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "confirm",
			name: "focusOn"
		},
		kind: "prop",
		values: "<code><code>confirm</code></code>, <code><code>cancel</code></code>",
		longname: "module:Dialog~focusOn",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 33,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Show this icon on left-side of dialog. It will use the color from <code>type</code>",
		type: [
			"String"
		],
		optional: true,
		name: "icon",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "icon"
		},
		kind: "prop",
		longname: "module:Dialog~icon",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 38,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>",
		type: [
			"String"
		],
		optional: true,
		name: "iconPack",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "iconPack"
		},
		kind: "prop",
		values: "<code><code>fas</code></code>, <code><code>fab</code></code>, <code>etc...</code>",
		longname: "module:Dialog~iconPack",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 44,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Show an input field",
		type: [
			"Boolean"
		],
		optional: true,
		defaultvalue: false,
		name: "hasInput",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Boolean"
				]
			},
			optional: true,
			defaultvalue: false,
			name: "hasInput"
		},
		kind: "prop",
		longname: "module:Dialog~hasInput",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 51,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Show the cancel button. True for <code>confirm()</code>",
		type: [
			"Boolean"
		],
		optional: true,
		defaultvalue: false,
		name: "showCancel",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Boolean"
				]
			},
			optional: true,
			defaultvalue: false,
			name: "showCancel"
		},
		kind: "prop",
		longname: "module:Dialog~showCancel",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 56,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Dialog's size",
		type: [
			"String"
		],
		optional: true,
		name: "size",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "size"
		},
		kind: "prop",
		values: "<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",
		longname: "module:Dialog~size",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 62,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Type (color) to use on confirm button and icon",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "is-primary",
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "is-primary",
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Dialog~type",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 70,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Animation to use when showing dialog",
		type: [
			"String",
			"function"
		],
		optional: true,
		defaultvalue: "scale",
		name: "animation",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String",
					"function"
				]
			},
			optional: true,
			defaultvalue: "scale",
			name: "animation"
		},
		kind: "prop",
		values: "<code>Any transition name that ships with Svelte</code>, <code>or a custom function</code>",
		longname: "module:Dialog~animation",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 76,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Props to pass to animation function",
		type: [
			"Object"
		],
		optional: true,
		defaultvalue: "{ start: 1.2 }",
		name: "animProps",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Object"
				]
			},
			optional: true,
			defaultvalue: "{ start: 1.2 }",
			name: "animProps"
		},
		kind: "prop",
		longname: "module:Dialog~animProps",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Dialog.svelte",
			lineno: 81,
			columnno: 2,
			path: "src/components/Dialog"
		},
		description: "Props (attributes) to use to on prompt input element",
		type: [
			"Object"
		],
		optional: true,
		name: "inputProps",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Object"
				]
			},
			optional: true,
			name: "inputProps"
		},
		kind: "prop",
		longname: "module:Dialog~inputProps",
		scope: "inner",
		memberof: "module:Dialog",
		___s: true,
		values: ""
	}
];
var Dropdown = [
];
var Field = [
	{
		meta: {
			filename: "Field.svelte",
			lineno: 6,
			columnno: 2,
			path: "src/components"
		},
		description: "Label for input",
		type: [
			"String"
		],
		optional: true,
		name: "label",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "label"
		},
		kind: "prop",
		longname: "module:Field~label",
		scope: "inner",
		memberof: "module:Field",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Field.svelte",
			lineno: 11,
			columnno: 2,
			path: "src/components"
		},
		description: "Type (color of control)",
		type: [
			"String"
		],
		optional: true,
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Field~type",
		scope: "inner",
		memberof: "module:Field",
		___s: true
	},
	{
		meta: {
			filename: "Field.svelte",
			lineno: 17,
			columnno: 2,
			path: "src/components"
		},
		description: "Message to show beneath input",
		type: [
			"String"
		],
		optional: true,
		name: "message",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "message"
		},
		kind: "prop",
		longname: "module:Field~message",
		scope: "inner",
		memberof: "module:Field",
		___s: true,
		values: ""
	}
];
var Icon = [
];
var Input = [
	{
		meta: {
			filename: "Input.svelte",
			lineno: 7,
			columnno: 2,
			path: "src/components"
		},
		description: "Binding value",
		type: [
			"String",
			"Number"
		],
		optional: true,
		name: "value",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String",
					"Number"
				]
			},
			optional: true,
			name: "value"
		},
		kind: "prop",
		longname: "module:Input~value",
		scope: "inner",
		memberof: "module:Input",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Input.svelte",
			lineno: 12,
			columnno: 2,
			path: "src/components"
		},
		description: "Input type, or <code>textarea</code>",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "text",
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "text",
			name: "type"
		},
		kind: "prop",
		values: "<code>Any native type</code>, <code><code>textarea</code></code>",
		longname: "module:Input~type",
		scope: "inner",
		memberof: "module:Input",
		___s: true
	},
	{
		meta: {
			filename: "Input.svelte",
			lineno: 18,
			columnno: 2,
			path: "src/components"
		},
		description: "Size of input",
		type: [
			"String"
		],
		optional: true,
		name: "size",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "size"
		},
		kind: "prop",
		values: "<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",
		longname: "module:Input~size",
		scope: "inner",
		memberof: "module:Input",
		___s: true
	},
	{
		meta: {
			filename: "Input.svelte",
			lineno: 24,
			columnno: 2,
			path: "src/components"
		},
		description: "Show the password reveal toggle button",
		type: [
			"boolean"
		],
		optional: true,
		name: "passwordReveal",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			optional: true,
			name: "passwordReveal"
		},
		kind: "prop",
		longname: "module:Input~passwordReveal",
		scope: "inner",
		memberof: "module:Input",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Input.svelte",
			lineno: 29,
			columnno: 2,
			path: "src/components"
		},
		description: "Set input maxlength and show a counter",
		type: [
			"Number"
		],
		optional: true,
		name: "maxlength",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			optional: true,
			name: "maxlength"
		},
		kind: "prop",
		longname: "module:Input~maxlength",
		scope: "inner",
		memberof: "module:Input",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Input.svelte",
			lineno: 34,
			columnno: 2,
			path: "src/components"
		},
		description: "Show the character counter when <code>maxlength<code> is set",
		type: [
			"boolean"
		],
		optional: true,
		defaultvalue: true,
		name: "hasCounter",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			optional: true,
			defaultvalue: true,
			name: "hasCounter"
		},
		kind: "prop",
		longname: "module:Input~hasCounter",
		scope: "inner",
		memberof: "module:Input",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Input.svelte",
			lineno: 39,
			columnno: 2,
			path: "src/components"
		},
		description: "Show loading indicator",
		type: [
			"boolean"
		],
		optional: true,
		defaultvalue: false,
		name: "loading",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			optional: true,
			defaultvalue: false,
			name: "loading"
		},
		kind: "prop",
		longname: "module:Input~loading",
		scope: "inner",
		memberof: "module:Input",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Input.svelte",
			lineno: 44,
			columnno: 2,
			path: "src/components"
		},
		description: "Input is disabled",
		type: [
			"boolean"
		],
		optional: true,
		defaultvalue: false,
		name: "disabled",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			optional: true,
			defaultvalue: false,
			name: "disabled"
		},
		kind: "prop",
		longname: "module:Input~disabled",
		scope: "inner",
		memberof: "module:Input",
		___s: true,
		values: ""
	}
];
var Message = [
];
var Modal = [
];
var Notice = [
];
var Notification = [
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 9,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Type (color)",
		type: [
			"String"
		],
		optional: true,
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Notification~type",
		scope: "inner",
		memberof: "module:Notification",
		___s: true
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 15,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Whether the notification is visible or not",
		type: [
			"boolean"
		],
		defaultvalue: true,
		name: "active",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			defaultvalue: true,
			name: "active"
		},
		kind: "prop",
		longname: "module:Notification~active",
		scope: "inner",
		memberof: "module:Notification",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 20,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Display an X button that closes the notification",
		type: [
			"boolean"
		],
		defaultvalue: true,
		name: "showClose",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			defaultvalue: true,
			name: "showClose"
		},
		kind: "prop",
		longname: "module:Notification~showClose",
		scope: "inner",
		memberof: "module:Notification",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 25,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Automatically close the notification after <code>duration</code>. Doesn't apply when opening programmatically",
		type: [
			"boolean"
		],
		defaultvalue: false,
		name: "autoClose",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"boolean"
				]
			},
			defaultvalue: false,
			name: "autoClose"
		},
		kind: "prop",
		longname: "module:Notification~autoClose",
		scope: "inner",
		memberof: "module:Notification",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 30,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Duration notification will remain on screen",
		type: [
			"Number"
		],
		optional: true,
		defaultvalue: 2000,
		name: "duration",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			optional: true,
			defaultvalue: 2000,
			name: "duration"
		},
		kind: "prop",
		longname: "module:Notification~duration",
		scope: "inner",
		memberof: "module:Notification",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 35,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Show icon on left-side of the notification. If set to <code>true</code>, icon will be determined from <code>type</code> property.",
		type: [
			"String",
			"Boolean"
		],
		optional: true,
		name: "icon",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String",
					"Boolean"
				]
			},
			optional: true,
			name: "icon"
		},
		kind: "prop",
		longname: "module:Notification~icon",
		scope: "inner",
		memberof: "module:Notification",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 40,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>",
		type: [
			"String"
		],
		optional: true,
		name: "iconPack",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "iconPack"
		},
		kind: "prop",
		values: "<code><code>fas</code></code>, <code><code>fab</code></code>, <code>etc...</code>",
		longname: "module:Notification~iconPack",
		scope: "inner",
		memberof: "module:Notification",
		___s: true
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 46,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Label for the close button, to be read by accessibility screenreaders",
		type: [
			"String"
		],
		optional: true,
		name: "ariaCloseLabel",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "ariaCloseLabel"
		},
		kind: "prop",
		longname: "module:Notification~ariaCloseLabel",
		scope: "inner",
		memberof: "module:Notification",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 51,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Text for notification, when used programmatically",
		type: [
			"String"
		],
		name: "message",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			name: "message"
		},
		kind: "prop",
		longname: "module:Notification~message",
		scope: "inner",
		memberof: "module:Notification",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Notification.svelte",
			lineno: 55,
			columnno: 2,
			path: "src/components/Notification"
		},
		description: "Where the notification will show on the screen when used programmatically",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "is-top-right",
		name: "position",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "is-top-right",
			name: "position"
		},
		kind: "prop",
		values: "<code><code>is-top</code></code>, <code><code>is-bottom</code></code>, <code><code>is-top-left</code></code>, <code><code>is-top-right</code></code>, <code><code>is-bottom-left</code></code>, <code><code>is-bottom-right</code></code>",
		longname: "module:Notification~position",
		scope: "inner",
		memberof: "module:Notification",
		___s: true
	}
];
var NotificationNotice = [
];
var Progress = [
	{
		meta: {
			filename: "Progress.svelte",
			lineno: 7,
			columnno: 0,
			path: "src/components"
		},
		description: "Value of progress bar",
		type: [
			"Number"
		],
		name: "value",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			name: "value"
		},
		kind: "prop",
		longname: "module:Progress~value",
		scope: "inner",
		memberof: "module:Progress",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Progress.svelte",
			lineno: 12,
			columnno: 0,
			path: "src/components"
		},
		description: "Type (color) of progress bar",
		type: [
			"String"
		],
		optional: true,
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Progress~type",
		scope: "inner",
		memberof: "module:Progress",
		___s: true
	},
	{
		meta: {
			filename: "Progress.svelte",
			lineno: 18,
			columnno: 0,
			path: "src/components"
		},
		description: "Maximum value of progress bar",
		type: [
			"Number"
		],
		optional: true,
		defaultvalue: 100,
		name: "max",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			optional: true,
			defaultvalue: 100,
			name: "max"
		},
		kind: "prop",
		longname: "module:Progress~max",
		scope: "inner",
		memberof: "module:Progress",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Progress.svelte",
			lineno: 23,
			columnno: 0,
			path: "src/components"
		},
		description: "Duration of progress change animation (in ms)",
		type: [
			"Number"
		],
		optional: true,
		defaultvalue: 400,
		name: "duration",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			optional: true,
			defaultvalue: 400,
			name: "duration"
		},
		kind: "prop",
		longname: "module:Progress~duration",
		scope: "inner",
		memberof: "module:Progress",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Progress.svelte",
			lineno: 28,
			columnno: 0,
			path: "src/components"
		},
		description: "Easing function to use for animation",
		type: [
			"function"
		],
		optional: true,
		name: "cubicOut",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"function"
				]
			},
			optional: true,
			name: "cubicOut"
		},
		kind: "prop",
		values: "<code>Any function from <code>svelte/easing</code></code>, <code>or a custom one</code>",
		longname: "module:Progress~cubicOut",
		scope: "inner",
		memberof: "module:Progress",
		___s: true
	}
];
var Snackbar = [
	{
		meta: {
			filename: "Snackbar.svelte",
			lineno: 7,
			columnno: 2,
			path: "src/components/Snackbar"
		},
		description: "Text or html message for snackbar",
		type: [
			"String"
		],
		name: "message",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			name: "message"
		},
		kind: "prop",
		longname: "module:Snackbar~message",
		scope: "inner",
		memberof: "module:Snackbar",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Snackbar.svelte",
			lineno: 12,
			columnno: 2,
			path: "src/components/Snackbar"
		},
		description: "Duration snackbar will remain on screen",
		type: [
			"Number"
		],
		optional: true,
		defaultvalue: 3500,
		name: "duration",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			optional: true,
			defaultvalue: 3500,
			name: "duration"
		},
		kind: "prop",
		longname: "module:Snackbar~duration",
		scope: "inner",
		memberof: "module:Snackbar",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Snackbar.svelte",
			lineno: 17,
			columnno: 2,
			path: "src/components/Snackbar"
		},
		description: "Where the snackbar will show on the screen",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "is-bottom-right",
		name: "position",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "is-bottom-right",
			name: "position"
		},
		kind: "prop",
		values: "<code><code>is-top</code></code>, <code><code>is-bottom</code></code>, <code><code>is-top-left</code></code>, <code><code>is-top-right</code></code>, <code><code>is-bottom-left</code></code>, <code><code>is-bottom-right</code></code>",
		longname: "module:Snackbar~position",
		scope: "inner",
		memberof: "module:Snackbar",
		___s: true
	},
	{
		meta: {
			filename: "Snackbar.svelte",
			lineno: 23,
			columnno: 2,
			path: "src/components/Snackbar"
		},
		description: "Type (color)",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "is-dark",
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "is-dark",
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Snackbar~type",
		scope: "inner",
		memberof: "module:Snackbar",
		___s: true
	},
	{
		meta: {
			filename: "Snackbar.svelte",
			lineno: 29,
			columnno: 2,
			path: "src/components/Snackbar"
		},
		description: "Background type (any of the Bulma <code>has-background-</code> classes will work)",
		type: [
			"String"
		],
		optional: true,
		name: "background",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "background"
		},
		kind: "prop",
		values: "<code><code>has-background-*</code></code>",
		longname: "module:Snackbar~background",
		scope: "inner",
		memberof: "module:Snackbar",
		___s: true
	}
];
var Switch = [
	{
		meta: {
			filename: "Switch.svelte",
			lineno: 4,
			columnno: 2,
			path: "src/components"
		},
		description: "Binding for whether the switch to \"on\" or not",
		type: [
			"Any"
		],
		optional: true,
		defaultvalue: false,
		name: "checked",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Any"
				]
			},
			optional: true,
			defaultvalue: false,
			name: "checked"
		},
		kind: "prop",
		longname: "module:Switch~checked",
		scope: "inner",
		memberof: "module:Switch",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Switch.svelte",
			lineno: 9,
			columnno: 2,
			path: "src/components"
		},
		description: "Type (color of control)",
		type: [
			"String"
		],
		optional: true,
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			description: "Type (color of control)",
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Switch~type",
		scope: "inner",
		memberof: "module:Switch",
		___s: true
	},
	{
		meta: {
			filename: "Switch.svelte",
			lineno: 15,
			columnno: 2,
			path: "src/components"
		},
		description: "Size of switch",
		type: [
			"String"
		],
		optional: true,
		name: "size",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "size"
		},
		kind: "prop",
		values: "<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",
		longname: "module:Switch~size",
		scope: "inner",
		memberof: "module:Switch",
		___s: true
	},
	{
		meta: {
			filename: "Switch.svelte",
			lineno: 21,
			columnno: 2,
			path: "src/components"
		},
		description: "Whether switch is disabled or not",
		type: [
			"Boolean"
		],
		optional: true,
		defaultvalue: false,
		name: "disabled",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Boolean"
				]
			},
			optional: true,
			defaultvalue: false,
			name: "disabled"
		},
		kind: "prop",
		longname: "module:Switch~disabled",
		scope: "inner",
		memberof: "module:Switch",
		___s: true,
		values: ""
	}
];
var Tab = [
	{
		meta: {
			filename: "Tab.svelte",
			lineno: 6,
			columnno: 2,
			path: "src/components/Tabs"
		},
		description: "Label for tab",
		type: [
			"String"
		],
		name: "label",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			name: "label"
		},
		kind: "prop",
		longname: "module:Tab~label",
		scope: "inner",
		memberof: "module:Tab",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Tab.svelte",
			lineno: 11,
			columnno: 2,
			path: "src/components/Tabs"
		},
		description: "Show this icon on left-side of the tab.",
		type: [
			"String"
		],
		optional: true,
		name: "icon",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "icon"
		},
		kind: "prop",
		longname: "module:Tab~icon",
		scope: "inner",
		memberof: "module:Tab",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Tab.svelte",
			lineno: 16,
			columnno: 2,
			path: "src/components/Tabs"
		},
		description: "Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>",
		type: [
			"String"
		],
		optional: true,
		name: "iconPack",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "iconPack"
		},
		kind: "prop",
		values: "<code><code>fas</code></code>, <code><code>fab</code></code>, <code>etc...</code>",
		longname: "module:Tab~iconPack",
		scope: "inner",
		memberof: "module:Tab",
		___s: true
	}
];
var Tabs = [
	{
		meta: {
			filename: "Tabs.svelte",
			lineno: 9,
			columnno: 2,
			path: "src/components/Tabs"
		},
		description: "Index of the active tab (zero-based)",
		type: [
			"Number"
		],
		optional: true,
		defaultvalue: 0,
		name: "value",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			optional: true,
			defaultvalue: 0,
			name: "value"
		},
		kind: "prop",
		longname: "module:Tabs~value",
		scope: "inner",
		memberof: "module:Tabs",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Tabs.svelte",
			lineno: 14,
			columnno: 2,
			path: "src/components/Tabs"
		},
		description: "Size of tabs",
		type: [
			"String"
		],
		optional: true,
		name: "size",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "size"
		},
		kind: "prop",
		values: "<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",
		longname: "module:Tabs~size",
		scope: "inner",
		memberof: "module:Tabs",
		___s: true
	},
	{
		meta: {
			filename: "Tabs.svelte",
			lineno: 20,
			columnno: 2,
			path: "src/components/Tabs"
		},
		description: "Position of tabs list, horizontally. By default they're positioned to the left",
		type: [
			"String"
		],
		optional: true,
		name: "position",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "position"
		},
		kind: "prop",
		values: "<code>is-centered</code>, <code>is-right</code>",
		longname: "module:Tabs~position",
		scope: "inner",
		memberof: "module:Tabs",
		___s: true
	},
	{
		meta: {
			filename: "Tabs.svelte",
			lineno: 26,
			columnno: 2,
			path: "src/components/Tabs"
		},
		description: "Style of tabs",
		type: [
			"String"
		],
		optional: true,
		name: "style",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "style"
		},
		kind: "prop",
		values: "<code>is-boxed</code>, <code>is-toggle</code>, <code>is-toggle-rounded</code>, <code>is-fullwidth</code>",
		longname: "module:Tabs~style",
		scope: "inner",
		memberof: "module:Tabs",
		___s: true
	}
];
var Toast = [
	{
		meta: {
			filename: "Toast.svelte",
			lineno: 7,
			columnno: 2,
			path: "src/components/Toast"
		},
		description: "Text or html message for toast",
		type: [
			"String"
		],
		name: "message",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			name: "message"
		},
		kind: "prop",
		longname: "module:Toast~message",
		scope: "inner",
		memberof: "module:Toast",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Toast.svelte",
			lineno: 12,
			columnno: 2,
			path: "src/components/Toast"
		},
		description: "Duration toast will remain on screen",
		name: "duration",
		kind: "prop",
		type: [
			"Number"
		],
		optional: true,
		defaultvalue: 2000,
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"Number"
				]
			},
			optional: true,
			defaultvalue: 2000,
			name: "duration"
		},
		longname: "module:Toast~duration",
		scope: "inner",
		memberof: "module:Toast",
		___s: true,
		values: ""
	},
	{
		meta: {
			filename: "Toast.svelte",
			lineno: 18,
			columnno: 2,
			path: "src/components/Toast"
		},
		description: "Where the toast will show on the screen",
		name: "position",
		kind: "prop",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "is-top",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "is-top",
			name: "position"
		},
		values: "<code><code>is-top</code></code>, <code><code>is-bottom</code></code>, <code><code>is-top-left</code></code>, <code><code>is-top-right</code></code>, <code><code>is-bottom-left</code></code>, <code><code>is-bottom-right</code></code>",
		longname: "module:Toast~position",
		scope: "inner",
		memberof: "module:Toast",
		___s: true
	},
	{
		meta: {
			filename: "Toast.svelte",
			lineno: 25,
			columnno: 2,
			path: "src/components/Toast"
		},
		description: "Type (color)",
		type: [
			"String"
		],
		optional: true,
		defaultvalue: "is-dark",
		name: "type",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			defaultvalue: "is-dark",
			name: "type"
		},
		kind: "prop",
		values: "<code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>",
		longname: "module:Toast~type",
		scope: "inner",
		memberof: "module:Toast",
		___s: true
	},
	{
		meta: {
			filename: "Toast.svelte",
			lineno: 31,
			columnno: 2,
			path: "src/components/Toast"
		},
		description: "Background type (any of the Bulma <code>has-background-</code> classes will work)",
		type: [
			"String"
		],
		optional: true,
		name: "background",
		_isSvelteDoc: true,
		_svelteProps: {
			type: {
				names: [
					"String"
				]
			},
			optional: true,
			name: "background"
		},
		kind: "prop",
		values: "<code><code>has-background-*</code></code>",
		longname: "module:Toast~background",
		scope: "inner",
		memberof: "module:Toast",
		___s: true
	}
];
var jsdocs = {
	Button: Button,
	Collapse: Collapse,
	Dialog: Dialog,
	Dropdown: Dropdown,
	Field: Field,
	Icon: Icon,
	Input: Input,
	Message: Message,
	Modal: Modal,
	Notice: Notice,
	Notification: Notification,
	NotificationNotice: NotificationNotice,
	Progress: Progress,
	Snackbar: Snackbar,
	Switch: Switch,
	Tab: Tab,
	Tabs: Tabs,
	Toast: Toast
};

var route_0 = /*#__PURE__*/Object.freeze({
  Button: Button,
  Collapse: Collapse,
  Dialog: Dialog,
  Dropdown: Dropdown,
  Field: Field,
  Icon: Icon,
  Input: Input,
  Message: Message,
  Modal: Modal,
  Notice: Notice,
  Notification: Notification,
  NotificationNotice: NotificationNotice,
  Progress: Progress,
  Snackbar: Snackbar,
  Switch: Switch,
  Tab: Tab,
  Tabs: Tabs,
  Toast: Toast,
  'default': jsdocs
});

const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase());

async function get(req, res, next) {
  const { slug } = req.params;

  res.setHeader('Content-Type', 'application/json');
	res.end(
    JSON.stringify(
      jsdocs[titleize(slug)]
    )
  );
}

var route_1 = /*#__PURE__*/Object.freeze({
  get: get
});

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit sveltejs/sapper-template#rollup my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].html</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get$1(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_2 = /*#__PURE__*/Object.freeze({
  get: get$1
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get$2(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_3 = /*#__PURE__*/Object.freeze({
  get: get$2
});

const CONTEXT_KEY = {};

/* src/routes/_error.svelte generated by Svelte v3.16.7 */

const css = {
	code: "h1.svelte-1hjjbzs,p.svelte-1hjjbzs{margin:0 auto}h1.svelte-1hjjbzs{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1hjjbzs{margin:1em auto}@media(min-width: 480px){h1.svelte-1hjjbzs{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = \\\"development\\\" === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDO0dBQ0MsY0FBYztFQUNmO0NBQ0QiLCJmaWxlIjoic3JjL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdGgxLCBwIHtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cbiJdfQ== */</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,iBAAE,CAAE,CAAC,eAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,eAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css);

	return `${($$result.head += `<title>${__chunk_1.escape(status)}</title>`, "")}

<h1 class="${"svelte-1hjjbzs"}">${__chunk_1.escape(status)}</h1>

<p class="${"svelte-1hjjbzs"}">${__chunk_1.escape(error.message)}</p>

${error.stack
	? `<pre>${__chunk_1.escape(error.stack)}</pre>`
	: ``}`;
});

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.16.7 */

const App = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	__chunk_1.setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);

	return `


${__chunk_1.validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `
	${error
		? `${__chunk_1.validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${__chunk_1.validate_component(level1.component || __chunk_1.missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}
`
	})}`;
});

// This file is generated by Sapper — do not edit it!

const ignore = [/^\/components\/jsdocs\/?$/, /^\/components\/([^\/]+?).json$/, /^\/blog.json$/, /^\/blog\/([^\/]+?).json$/];

const components = [
	{
		js: () => Promise.resolve(require('./index-b109f01e.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:index.svelte__"
	},
	{
		js: () => Promise.resolve(require('./notification-4b738366.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/notification.svelte__"
	},
	{
		js: () => Promise.resolve(require('./collapse-36623572.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/collapse.svelte__"
	},
	{
		js: () => Promise.resolve(require('./progress-cedcdc19.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/progress.svelte__"
	},
	{
		js: () => Promise.resolve(require('./snackbar-ee695c35.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/snackbar.svelte__"
	},
	{
		js: () => Promise.resolve(require('./message-e5569286.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/message.svelte__"
	},
	{
		js: () => Promise.resolve(require('./button-f07d8edb.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/button.svelte__"
	},
	{
		js: () => Promise.resolve(require('./dialog-c353d519.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/dialog.svelte__"
	},
	{
		js: () => Promise.resolve(require('./switch-069690de.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/switch.svelte__"
	},
	{
		js: () => Promise.resolve(require('./field-4ce929b3.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/field.svelte__"
	},
	{
		js: () => Promise.resolve(require('./input-adb6dfee.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/input.svelte__"
	},
	{
		js: () => Promise.resolve(require('./modal-7d8fc2ca.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/modal.svelte__"
	},
	{
		js: () => Promise.resolve(require('./toast-fd747174.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/toast.svelte__"
	},
	{
		js: () => Promise.resolve(require('./icon-4d555486.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/icon.svelte__"
	},
	{
		js: () => Promise.resolve(require('./tabs-ad130b4a.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:components/tabs.svelte__"
	},
	{
		js: () => Promise.resolve(require('./index-5b31f3b5.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:install/index.svelte__"
	},
	{
		js: () => Promise.resolve(require('./about-25dd369b.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:about.svelte__"
	},
	{
		js: () => Promise.resolve(require('./intro-f202c78a.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:bulma/intro.svelte__"
	},
	{
		js: () => Promise.resolve(require('./media-6e3e33aa.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:bulma/media.svelte__"
	},
	{
		js: () => Promise.resolve(require('./table-3171db4c.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:bulma/table.svelte__"
	},
	{
		js: () => Promise.resolve(require('./tiles-baaea80e.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:bulma/tiles.svelte__"
	},
	{
		js: () => Promise.resolve(require('./hero-23593e53.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:bulma/hero.svelte__"
	},
	{
		js: () => Promise.resolve(require('./index-a9332d54.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:blog/index.svelte__"
	},
	{
		js: () => Promise.resolve(require('./[slug]-896d1e3e.js')),
		css: "__SAPPER_CSS_PLACEHOLDER:blog/[slug].svelte__"
	}
];

const routes = (d => [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// components/notification.svelte
		pattern: /^\/components\/notification\/?$/,
		parts: [
			null,
			{ i: 1 }
		]
	},

	{
		// components/collapse.svelte
		pattern: /^\/components\/collapse\/?$/,
		parts: [
			null,
			{ i: 2 }
		]
	},

	{
		// components/progress.svelte
		pattern: /^\/components\/progress\/?$/,
		parts: [
			null,
			{ i: 3 }
		]
	},

	{
		// components/snackbar.svelte
		pattern: /^\/components\/snackbar\/?$/,
		parts: [
			null,
			{ i: 4 }
		]
	},

	{
		// components/message.svelte
		pattern: /^\/components\/message\/?$/,
		parts: [
			null,
			{ i: 5 }
		]
	},

	{
		// components/button.svelte
		pattern: /^\/components\/button\/?$/,
		parts: [
			null,
			{ i: 6 }
		]
	},

	{
		// components/dialog.svelte
		pattern: /^\/components\/dialog\/?$/,
		parts: [
			null,
			{ i: 7 }
		]
	},

	{
		// components/switch.svelte
		pattern: /^\/components\/switch\/?$/,
		parts: [
			null,
			{ i: 8 }
		]
	},

	{
		// components/field.svelte
		pattern: /^\/components\/field\/?$/,
		parts: [
			null,
			{ i: 9 }
		]
	},

	{
		// components/input.svelte
		pattern: /^\/components\/input\/?$/,
		parts: [
			null,
			{ i: 10 }
		]
	},

	{
		// components/modal.svelte
		pattern: /^\/components\/modal\/?$/,
		parts: [
			null,
			{ i: 11 }
		]
	},

	{
		// components/toast.svelte
		pattern: /^\/components\/toast\/?$/,
		parts: [
			null,
			{ i: 12 }
		]
	},

	{
		// components/icon.svelte
		pattern: /^\/components\/icon\/?$/,
		parts: [
			null,
			{ i: 13 }
		]
	},

	{
		// components/tabs.svelte
		pattern: /^\/components\/tabs\/?$/,
		parts: [
			null,
			{ i: 14 }
		]
	},

	{
		// install/index.svelte
		pattern: /^\/install\/?$/,
		parts: [
			{ i: 15 }
		]
	},

	{
		// about.svelte
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 16 }
		]
	},

	{
		// bulma/intro.svelte
		pattern: /^\/bulma\/intro\/?$/,
		parts: [
			null,
			{ i: 17 }
		]
	},

	{
		// bulma/media.svelte
		pattern: /^\/bulma\/media\/?$/,
		parts: [
			null,
			{ i: 18 }
		]
	},

	{
		// bulma/table.svelte
		pattern: /^\/bulma\/table\/?$/,
		parts: [
			null,
			{ i: 19 }
		]
	},

	{
		// bulma/tiles.svelte
		pattern: /^\/bulma\/tiles\/?$/,
		parts: [
			null,
			{ i: 20 }
		]
	},

	{
		// bulma/hero.svelte
		pattern: /^\/bulma\/hero\/?$/,
		parts: [
			null,
			{ i: 21 }
		]
	},

	{
		// blog/index.svelte
		pattern: /^\/blog\/?$/,
		parts: [
			{ i: 22 }
		]
	},

	{
		// blog/[slug].svelte
		pattern: /^\/blog\/([^\/]+?)\/?$/,
		parts: [
			null,
			{ i: 23, params: match => ({ slug: d(match[1]) }) }
		]
	}
])(decodeURIComponent);

if (typeof window !== 'undefined') {
	Promise.resolve(require('./sapper-dev-client-39a0eff9.js')).then(client => {
		client.connect(10000);
	});
}

function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];
let current_query = '{}';

const stores = {
	page: __chunk_2.writable({}),
	preloading: __chunk_2.writable(null),
	session: __chunk_2.writable(initial_data && initial_data.session)
};

let $session;
let session_dirty;

stores.session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;

let target;

let uid = 1;

let cid;

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function extract_query(search) {
	const query = Object.create(null);
	if (search.length > 0) {
		search.slice(1).split('&').forEach(searchParam => {
			let [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
			if (typeof query[key] === 'string') query[key] = [query[key]];
			if (typeof query[key] === 'object') (query[key] ).push(value);
			else query[key] = value;
		});
	}
	return query;
}

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	let path = url.pathname.slice(initial_data.baseUrl.length);

	if (path === '') {
		path = '/';
	}

	// avoid accidental clashes between server routes and page routes
	if (ignore.some(pattern => pattern.test(path))) return;

	for (let i = 0; i < routes.length; i += 1) {
		const route = routes[i];

		const match = route.pattern.exec(path);

		if (match) {
			const query = extract_query(url.search);
			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.stores = {
			page: { subscribe: stores.page.subscribe },
			preloading: { subscribe: stores.preloading.subscribe },
			session: stores.session
		};
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new App({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	current_query = JSON.stringify(page.query);
	ready = true;
	session_dirty = false;
}

function part_changed(i, segment, match, stringified_query) {
	// TODO only check query string changes for preload functions
	// that do in fact depend on it (using static analysis or
	// runtime instrumentation)
	if (stringified_query !== current_query) return true;

	const previous = current_branch[i];

	if (!previous) return false;
	if (segment !== previous.segment) return true;
	if (previous.match) {
		if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
			return true;
		}
	}
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		const stringified_query = JSON.stringify(page.query);
		const match = route.pattern.exec(page.path);

		let segment_dirty = false;

		branch = await Promise.all(route.parts.map(async (part, i) => {
			const segment = segments[i];

			if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;

			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return { segment };

			const j = l++;

			if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
				return current_branch[i];
			}

			segment_dirty = false;

			const { default: component, preload } = await load_component(components[part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment, match, part: part.i });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

const stores$1 = () => __chunk_1.getContext(CONTEXT_KEY);

/* src/components/Nav.svelte generated by Svelte v3.16.7 */

const css$1 = {
	code: "img.logo.svelte-19nr2rz{padding:0 10px;vertical-align:top}.brand.svelte-19nr2rz{text-transform:uppercase;font-weight:bold}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n  export let segment\\n\\n  const rootUrl = \\\"development\\\" === 'development' ? '/' : '/svelma'\\n  const github = 'https://github.com/c0bra/svelma'\\n</script>\\n\\n<style>\\n  img.logo {\\n    padding: 0 10px;\\n    vertical-align: top;\\n  }\\n\\n  .brand {\\n    text-transform: uppercase;\\n    font-weight: bold;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbWcubG9nbyB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuYnJhbmQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiJdfQ== */</style>\\n\\n{#if false}\\n  <nav>\\n    <ul>\\n      <li>\\n        <a class={segment === undefined ? 'selected' : ''} href=\\\".\\\">home</a>\\n      </li>\\n      <li>\\n        <a class={segment === 'about' ? 'selected' : ''} href=\\\"about\\\">about</a>\\n      </li>\\n\\n      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\n      <li>\\n        <a rel=\\\"prefetch\\\" class={segment === 'blog' ? 'selected' : ''} href=\\\"blog\\\">blog</a>\\n      </li>\\n    </ul>\\n  </nav>\\n{/if}\\n\\n<nav id=\\\"navbar\\\" class=\\\"navbar has-shadow is-spaced\\\">\\n  <div class=\\\"container\\\">\\n    <div class=\\\"navbar-brand\\\">\\n      <a href={rootUrl} class=\\\"navbar-item brand\\\">\\n        <img src=\\\"svelma-logo.svg\\\" class=\\\"logo\\\" alt=\\\"Svelma: Bulma components for Svelte\\\" />\\n        Svelma\\n      </a>\\n      <a class=\\\"navbar-item is-hidden-desktop\\\" href={github} target=\\\"_blank\\\">\\n        <span class=\\\"icon\\\" style=\\\"color: #333;\\\">\\n          <i class=\\\"fab fa-github-alt\\\" />\\n        </span>\\n      </a>\\n    </div>\\n    <div class=\\\"navbar-menu\\\">\\n      <div class=\\\"navbar-end\\\">\\n        <a class=\\\"navbar-item is-hidden-touch\\\" href={github} target=\\\"_blank\\\">\\n          <span class=\\\"icon\\\" style=\\\"color: #333;\\\">\\n            <i class=\\\"fab fa-lg fa-github-alt\\\" />\\n          </span>\\n        </a>\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAQE,GAAG,KAAK,eAAC,CAAC,AACR,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,cAAc,CAAE,GAAG,AACrB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,IAAI,AACnB,CAAC\"}"
};

const github = "https://github.com/c0bra/svelma";

const Nav = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	const rootUrl = "/";
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$1);

	return `${``}

<nav id="${"navbar"}" class="${"navbar has-shadow is-spaced"}">
  <div class="${"container"}">
    <div class="${"navbar-brand"}">
      <a${__chunk_1.add_attribute("href", rootUrl, 0)} class="${"navbar-item brand svelte-19nr2rz"}">
        <img src="${"svelma-logo.svg"}" class="${"logo svelte-19nr2rz"}" alt="${"Svelma: Bulma components for Svelte"}">
        Svelma
      </a>
      <a class="${"navbar-item is-hidden-desktop"}"${__chunk_1.add_attribute("href", github, 0)} target="${"_blank"}">
        <span class="${"icon"}" style="${"color: #333;"}">
          <i class="${"fab fa-github-alt"}"></i>
        </span>
      </a>
    </div>
    <div class="${"navbar-menu"}">
      <div class="${"navbar-end"}">
        <a class="${"navbar-item is-hidden-touch"}"${__chunk_1.add_attribute("href", github, 0)} target="${"_blank"}">
          <span class="${"icon"}" style="${"color: #333;"}">
            <i class="${"fab fa-lg fa-github-alt"}"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</nav>`;
});

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __chunk_4.commonjsGlobal == 'object' && __chunk_4.commonjsGlobal && __chunk_4.commonjsGlobal.Object === Object && __chunk_4.commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = _arrayMap(values, _baseUnary(iteratee));
  }
  if (comparator) {
    includes = _arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = _cacheHas;
    isCommon = false;
    values = new _SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

var _baseDifference = baseDifference;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = _baseRest(function(array, values) {
  return isArrayLikeObject_1(array)
    ? _baseDifference(array, _baseFlatten(values, 1, isArrayLikeObject_1, true))
    : [];
});

var difference_1 = difference;

/* src/components/Sidebar.svelte generated by Svelte v3.16.7 */

const css$2 = {
	code: ".sidebar.svelte-1o002vm.svelte-1o002vm{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-negative:0;flex-shrink:0;width:16rem;padding:3rem 1rem;background:#f5f5f5}.sidebar.svelte-1o002vm>ul.svelte-1o002vm{margin-bottom:1.5em;margin-top:0}.sidebar.svelte-1o002vm>ul ul.svelte-1o002vm{margin-left:1.5em}.sidebar.svelte-1o002vm li.svelte-1o002vm{font-weight:600}.sidebar-label.svelte-1o002vm.svelte-1o002vm{margin-bottom:0.5em;color:#7a7a7a;font-size:0.9em;text-transform:uppercase;letter-spacing:0.1em}.sidebar-bg.svelte-1o002vm.svelte-1o002vm{position:absolute;top:0;left:0;bottom:0;right:50%;background:#f5f5f5;min-height:calc(100vh - 4rem);z-index:-1}@media screen and (max-width: 1087px){.sidebar.svelte-1o002vm.svelte-1o002vm{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;width:100%}}",
	map: "{\"version\":3,\"file\":\"Sidebar.svelte\",\"sources\":[\"Sidebar.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload({ params, query }) {\\n    // const res = await this.fetch('')\\n  }\\n</script>\\n\\n<script>\\n  import difference from 'lodash/difference'\\n  import { Svelma as Components } from 'svelma'\\n\\n  const formComponents = ['Input', 'Field', 'Switch'].sort()\\n  const omittedComponents = ['Tab']\\n  let components = ['Form', ...Object.keys(Components)].sort()\\n  components = difference(components, [...formComponents, ...omittedComponents])\\n\\n  const bulmaElements = ['Media', 'Table', 'Hero', 'Tiles'].sort()\\n</script>\\n\\n<style lang=\\\"scss\\\">.sidebar {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -ms-flex-negative: 0;\\n      flex-shrink: 0;\\n  width: 16rem;\\n  padding: 3rem 1rem;\\n  background: #f5f5f5; }\\n\\n.sidebar > ul {\\n  margin-bottom: 1.5em;\\n  margin-top: 0; }\\n  .sidebar > ul ul {\\n    margin-left: 1.5em; }\\n\\n.sidebar li {\\n  font-weight: 600; }\\n\\n.sidebar-label {\\n  margin-bottom: 0.5em;\\n  color: #7a7a7a;\\n  font-size: 0.9em;\\n  text-transform: uppercase;\\n  letter-spacing: 0.1em; }\\n\\n.sidebar-bg {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 50%;\\n  background: #f5f5f5;\\n  min-height: calc(100vh - 4rem);\\n  z-index: -1; }\\n\\n@media screen and (max-width: 1087px) {\\n  .sidebar {\\n    -webkit-box-ordinal-group: 3;\\n        -ms-flex-order: 2;\\n            order: 2;\\n    width: 100%; } }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NpZGViYXIuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO01BQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsb0JBQWM7TUFBZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYSxFQUFFO0VBQ2Y7SUFDRSxrQkFBa0IsRUFBRTs7QUFFeEI7RUFDRSxnQkFBZ0IsRUFBRTs7QUFFcEI7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCLEVBQUU7O0FBRXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVcsRUFBRTs7QUFFZjtFQUNFO0lBQ0UsNEJBQVE7UUFBUixpQkFBUTtZQUFSLFFBQVE7SUFDUixXQUFXLEVBQUUsRUFBRSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9TaWRlYmFyLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxNnJlbTtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XG5cbi5zaWRlYmFyID4gdWwge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogMDsgfVxuICAuc2lkZWJhciA+IHVsIHVsIHtcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07IH1cblxuLnNpZGViYXIgbGkge1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5zaWRlYmFyLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGNvbG9yOiAjN2E3YTdhO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07IH1cblxuLnNpZGViYXItYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XG4gIHotaW5kZXg6IC0xOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODdweCkge1xuICAuc2lkZWJhciB7XG4gICAgb3JkZXI6IDI7XG4gICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1TaWRlYmFyLnN2ZWx0ZS5jc3MubWFwICovIl19 */</style>\\n\\n<div class=\\\"sidebar-bg\\\" />\\n<aside class=\\\"sidebar\\\">\\n  <p class=\\\"sidebar-label\\\">Installation</p>\\n  <ul>\\n    <li>\\n      <a href=\\\"install\\\">Start</a>\\n    </li>\\n  </ul>\\n  <p class=\\\"sidebar-label\\\">Bulma Elements</p>\\n  <ul>\\n    <li><a href=\\\"bulma/intro\\\">Intro</a></li>\\n    {#each bulmaElements as c}\\n      <li>\\n        <a href=\\\"bulma/{c.toLowerCase()}\\\">{c}</a>\\n      </li>\\n    {/each}\\n  </ul>\\n  <p class=\\\"sidebar-label\\\">Svelma Components</p>\\n  <ul>\\n    {#each components as c}\\n      <li>\\n        {#if c === 'Form'}\\n          <p>{c}</p>\\n          <ul>\\n            {#each formComponents as fc}\\n              <li>\\n                <a href=\\\"components/{fc.toLowerCase()}\\\">{fc}</a>\\n              </li>\\n            {/each}\\n          </ul>\\n        {:else}\\n          <a href=\\\"components/{c.toLowerCase()}\\\">{c}</a>\\n        {/if}\\n      </li>\\n    {/each}\\n    <!-- <li>\\n      <a href=\\\"/components/collapse\\\">Collapse</a>\\n    </li>\\n    <li>\\n      <a href=\\\"/components/icon\\\">Icon</a>\\n    </li> -->\\n  </ul>\\n</aside>\\n\"],\"names\":[],\"mappings\":\"AAkBmB,QAAQ,8BAAC,CAAC,AAC3B,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,CAC9B,iBAAiB,CAAE,CAAC,CAChB,WAAW,CAAE,CAAC,CAClB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,OAAO,AAAE,CAAC,AAExB,uBAAQ,CAAG,EAAE,eAAC,CAAC,AACb,aAAa,CAAE,KAAK,CACpB,UAAU,CAAE,CAAC,AAAE,CAAC,AAChB,uBAAQ,CAAG,EAAE,CAAC,EAAE,eAAC,CAAC,AAChB,WAAW,CAAE,KAAK,AAAE,CAAC,AAEzB,uBAAQ,CAAC,EAAE,eAAC,CAAC,AACX,WAAW,CAAE,GAAG,AAAE,CAAC,AAErB,cAAc,8BAAC,CAAC,AACd,aAAa,CAAE,KAAK,CACpB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,KAAK,AAAE,CAAC,AAE1B,WAAW,8BAAC,CAAC,AACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9B,OAAO,CAAE,EAAE,AAAE,CAAC,AAEhB,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACrC,QAAQ,8BAAC,CAAC,AACR,yBAAyB,CAAE,CAAC,CACxB,cAAc,CAAE,CAAC,CACb,KAAK,CAAE,CAAC,CAChB,KAAK,CAAE,IAAI,AAAE,CAAC,AAAC,CAAC\"}"
};

const Sidebar = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const formComponents = ["Input", "Field", "Switch"].sort();
	const omittedComponents = ["Tab"];
	let components = ["Form", ...Object.keys(__chunk_2.Svelma)].sort();
	components = difference_1(components, [...formComponents, ...omittedComponents]);
	const bulmaElements = ["Media", "Table", "Hero", "Tiles"].sort();
	$$result.css.add(css$2);

	return `<div class="${"sidebar-bg svelte-1o002vm"}"></div>
<aside class="${"sidebar svelte-1o002vm"}">
  <p class="${"sidebar-label svelte-1o002vm"}">Installation</p>
  <ul class="${"svelte-1o002vm"}">
    <li class="${"svelte-1o002vm"}">
      <a href="${"install"}">Start</a>
    </li>
  </ul>
  <p class="${"sidebar-label svelte-1o002vm"}">Bulma Elements</p>
  <ul class="${"svelte-1o002vm"}">
    <li class="${"svelte-1o002vm"}"><a href="${"bulma/intro"}">Intro</a></li>
    ${__chunk_1.each(bulmaElements, c => `<li class="${"svelte-1o002vm"}">
        <a href="${"bulma/" + __chunk_1.escape(c.toLowerCase())}">${__chunk_1.escape(c)}</a>
      </li>`)}
  </ul>
  <p class="${"sidebar-label svelte-1o002vm"}">Svelma Components</p>
  <ul class="${"svelte-1o002vm"}">
    ${__chunk_1.each(components, c => `<li class="${"svelte-1o002vm"}">
        ${c === "Form"
	? `<p>${__chunk_1.escape(c)}</p>
          <ul class="${"svelte-1o002vm"}">
            ${__chunk_1.each(formComponents, fc => `<li class="${"svelte-1o002vm"}">
                <a href="${"components/" + __chunk_1.escape(fc.toLowerCase())}">${__chunk_1.escape(fc)}</a>
              </li>`)}
          </ul>`
	: `<a href="${"components/" + __chunk_1.escape(c.toLowerCase())}">${__chunk_1.escape(c)}</a>`}
      </li>`)}
    
  </ul>
</aside>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.16.7 */

const css$3 = {
	code: ".docs.svelte-iocv4n{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.docs-main.svelte-iocv4n{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:3rem;background-color:white;min-height:calc(100vh - 4rem);overflow:auto}@media screen and (max-width: 1087px){.docs.svelte-iocv4n{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.docs-main.svelte-iocv4n{min-height:unset}}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload({ path }) {\\n    \\n    const url = `/svelma/${path}`.replace(/\\\\/\\\\//g, '/').replace(/([^\\\\/]$)/, '$1/')\\n\\n    return { url };\\n  }\\n</script>\\n\\n<script>\\n  import 'bulma/css/bulma.css'\\n  import 'highlight.js/styles/github.css'\\n\\n  import { afterUpdate } from 'svelte'\\n  import { stores } from '@sapper/app';\\n  import Nav from '../components/Nav.svelte'\\n  import Sidebar from '../components/Sidebar.svelte'\\n\\n  const { page } = stores()\\n\\n  export let segment\\n  let url\\n\\n  page.subscribe(({ path }) => {\\n    url = 'https://svelma.webpremiere.dev' + `/svelma/${path}`.replace(/\\\\/\\\\//g, '/').replace(/([^\\\\/]$)/, '$1/')\\n  })\\n\\n  // afterUpdate(function() {\\n  //   console.log('I updated!', this)\\n  // })\\n\\n</script>\\n\\n<style lang=\\\"scss\\\">.docs {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row; }\\n\\n.docs-main {\\n  -webkit-box-flex: 1;\\n      -ms-flex-positive: 1;\\n          flex-grow: 1;\\n  -ms-flex-negative: 1;\\n      flex-shrink: 1;\\n  padding: 3rem;\\n  background-color: white;\\n  min-height: calc(100vh - 4rem);\\n  overflow: auto; }\\n\\n@media screen and (max-width: 1087px) {\\n  .docs {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; }\\n  .docs-main {\\n    min-height: unset; } }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvX2xheW91dC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBbUI7RUFBbkIsNkJBQW1CO01BQW5CLHVCQUFtQjtVQUFuQixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxtQkFBWTtNQUFaLG9CQUFZO1VBQVosWUFBWTtFQUNaLG9CQUFjO01BQWQsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGNBQWMsRUFBRTs7QUFFbEI7RUFDRTtJQUNFLDRCQUFzQjtJQUF0Qiw2QkFBc0I7UUFBdEIsMEJBQXNCO1lBQXRCLHNCQUFzQixFQUFFO0VBQzFCO0lBQ0UsaUJBQWlCLEVBQUUsRUFBRSIsImZpbGUiOiJzcmMvcm91dGVzL19sYXlvdXQuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLmRvY3MtbWFpbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODdweCkge1xuICAuZG9jcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuZG9jcy1tYWluIHtcbiAgICBtaW4taGVpZ2h0OiB1bnNldDsgfSB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPV9sYXlvdXQuc3ZlbHRlLmNzcy5tYXAgKi8iXX0= */</style>\\n\\n<svelte:head>\\n  <title>Svelma</title>\\n  <meta property=\\\"og:site_name\\\" content=\\\"Svelma\\\" />\\n  <meta property=\\\"og:image\\\" content=\\\"https://webpremiere.dev/svelma-logo.png\\\" />\\n  <meta property=\\\"og:image:width\\\" content=\\\"200\\\" />\\n  <meta property=\\\"og:image:height\\\" content=\\\"200\\\" />\\n  <meta property=\\\"og:url\\\" content={url}>\\n</svelte:head>\\n\\n<Nav {segment} />\\n\\n<main>\\n  <section class=\\\"docs\\\">\\n    <Sidebar />\\n\\n    <div class=\\\"docs-main\\\">\\n      <slot />\\n    </div>\\n  </section>\\n</main>\"],\"names\":[],\"mappings\":\"AAiCmB,KAAK,cAAC,CAAC,AACxB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,kBAAkB,CAAE,UAAU,CAC9B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,GAAG,CACnB,cAAc,CAAE,GAAG,AAAE,CAAC,AAEhC,UAAU,cAAC,CAAC,AACV,gBAAgB,CAAE,CAAC,CACf,iBAAiB,CAAE,CAAC,CAChB,SAAS,CAAE,CAAC,CACpB,iBAAiB,CAAE,CAAC,CAChB,WAAW,CAAE,CAAC,CAClB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9B,QAAQ,CAAE,IAAI,AAAE,CAAC,AAEnB,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACrC,KAAK,cAAC,CAAC,AACL,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,AAAE,CAAC,AACnC,UAAU,cAAC,CAAC,AACV,UAAU,CAAE,KAAK,AAAE,CAAC,AAAC,CAAC\"}"
};

async function preload({ path }) {
	const url = `/svelma/${path}`.replace(/\/\//g, "/").replace(/([^\/]$)/, "$1/");
	return { url };
}

const Layout = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const { page } = stores$1();
	let { segment } = $$props;
	let url;

	page.subscribe(({ path }) => {
		url = "https://svelma.webpremiere.dev" + `/svelma/${path}`.replace(/\/\//g, "/").replace(/([^\/]$)/, "$1/");
	});

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$3);

	return `${($$result.head += `<title>Svelma</title><meta property="${"og:site_name"}" content="${"Svelma"}"><meta property="${"og:image"}" content="${"https://webpremiere.dev/svelma-logo.png"}"><meta property="${"og:image:width"}" content="${"200"}"><meta property="${"og:image:height"}" content="${"200"}"><meta property="${"og:url"}"${__chunk_1.add_attribute("content", url, 0)}>`, "")}

${__chunk_1.validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main>
  <section class="${"docs svelte-iocv4n"}">
    ${__chunk_1.validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}

    <div class="${"docs-main svelte-iocv4n"}">
      ${$$slots.default ? $$slots.default({}) : ``}
    </div>
  </section>
</main>`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// components/jsdocs.json
			pattern: /^\/components\/jsdocs\/?$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// components/[slug].json.js
			pattern: /^\/components\/([^\/]+?).json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		},

		{
			// blog/index.json.js
			pattern: /^\/blog.json$/,
			handlers: route_2,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?).json$/,
			handlers: route_3,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: index.default }
			]
		},

		{
			// components/notification.svelte
			pattern: /^\/components\/notification\/?$/,
			parts: [
				null,
				{ name: "components_notification", file: "components/notification.svelte", component: notification.default, preload: notification.preload }
			]
		},

		{
			// components/collapse.svelte
			pattern: /^\/components\/collapse\/?$/,
			parts: [
				null,
				{ name: "components_collapse", file: "components/collapse.svelte", component: collapse.default, preload: collapse.preload }
			]
		},

		{
			// components/progress.svelte
			pattern: /^\/components\/progress\/?$/,
			parts: [
				null,
				{ name: "components_progress", file: "components/progress.svelte", component: progress.default }
			]
		},

		{
			// components/snackbar.svelte
			pattern: /^\/components\/snackbar\/?$/,
			parts: [
				null,
				{ name: "components_snackbar", file: "components/snackbar.svelte", component: snackbar.default, preload: snackbar.preload }
			]
		},

		{
			// components/message.svelte
			pattern: /^\/components\/message\/?$/,
			parts: [
				null,
				{ name: "components_message", file: "components/message.svelte", component: message.default }
			]
		},

		{
			// components/button.svelte
			pattern: /^\/components\/button\/?$/,
			parts: [
				null,
				{ name: "components_button", file: "components/button.svelte", component: button.default, preload: button.preload }
			]
		},

		{
			// components/dialog.svelte
			pattern: /^\/components\/dialog\/?$/,
			parts: [
				null,
				{ name: "components_dialog", file: "components/dialog.svelte", component: dialog.default, preload: dialog.preload }
			]
		},

		{
			// components/switch.svelte
			pattern: /^\/components\/switch\/?$/,
			parts: [
				null,
				{ name: "components_switch", file: "components/switch.svelte", component: _switch.default, preload: _switch.preload }
			]
		},

		{
			// components/field.svelte
			pattern: /^\/components\/field\/?$/,
			parts: [
				null,
				{ name: "components_field", file: "components/field.svelte", component: field.default, preload: field.preload }
			]
		},

		{
			// components/input.svelte
			pattern: /^\/components\/input\/?$/,
			parts: [
				null,
				{ name: "components_input", file: "components/input.svelte", component: input.default, preload: input.preload }
			]
		},

		{
			// components/modal.svelte
			pattern: /^\/components\/modal\/?$/,
			parts: [
				null,
				{ name: "components_modal", file: "components/modal.svelte", component: modal.default }
			]
		},

		{
			// components/toast.svelte
			pattern: /^\/components\/toast\/?$/,
			parts: [
				null,
				{ name: "components_toast", file: "components/toast.svelte", component: toast.default, preload: toast.preload }
			]
		},

		{
			// components/icon.svelte
			pattern: /^\/components\/icon\/?$/,
			parts: [
				null,
				{ name: "components_icon", file: "components/icon.svelte", component: icon.default }
			]
		},

		{
			// components/tabs.svelte
			pattern: /^\/components\/tabs\/?$/,
			parts: [
				null,
				{ name: "components_tabs", file: "components/tabs.svelte", component: tabs.default, preload: tabs.preload }
			]
		},

		{
			// install/index.svelte
			pattern: /^\/install\/?$/,
			parts: [
				{ name: "install", file: "install/index.svelte", component: index$1.default }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: about.default }
			]
		},

		{
			// bulma/intro.svelte
			pattern: /^\/bulma\/intro\/?$/,
			parts: [
				null,
				{ name: "bulma_intro", file: "bulma/intro.svelte", component: intro.default }
			]
		},

		{
			// bulma/media.svelte
			pattern: /^\/bulma\/media\/?$/,
			parts: [
				null,
				{ name: "bulma_media", file: "bulma/media.svelte", component: media.default }
			]
		},

		{
			// bulma/table.svelte
			pattern: /^\/bulma\/table\/?$/,
			parts: [
				null,
				{ name: "bulma_table", file: "bulma/table.svelte", component: table.default }
			]
		},

		{
			// bulma/tiles.svelte
			pattern: /^\/bulma\/tiles\/?$/,
			parts: [
				null,
				{ name: "bulma_tiles", file: "bulma/tiles.svelte", component: tiles.default }
			]
		},

		{
			// bulma/hero.svelte
			pattern: /^\/bulma\/hero\/?$/,
			parts: [
				null,
				{ name: "bulma_hero", file: "bulma/hero.svelte", component: hero.default }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: index$2.default, preload: index$2.preload }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: _slug_.default, preload: _slug_.preload, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root: Layout,
	root_preload: preload,
	error: Error$1
};

const build_dir = "__sapper__/dev";

const src_dir = "src";

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped) {
            result += escaped[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch$1(url, opts) {

	// allow custom promise
	if (!fetch$1.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch$1.Promise;

	// wrap http.request into fetch
	return new fetch$1.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch$1.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch$1(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch$1.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch$1.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info = () => JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8'));

	const template = () => read_template(src_dir);

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message = escape_html(err.message);

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control', 'no-cache');

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		const session = session_getter(req, res);

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				if (opts) {
					opts = Object.assign({}, opts);

					const include_cookies = (
						opts.credentials === 'include' ||
						opts.credentials === 'same-origin' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
					);

					if (include_cookies) {
						opts.headers = Object.assign({}, opts.headers);

						const cookies = Object.assign(
							{},
							cookie.parse(req.headers.cookie || ''),
							cookie.parse(opts.headers.cookie || '')
						);

						const set_cookie = res.getHeader('Set-Cookie');
						(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
							const match = /([^=]+)=([^;]+)/.exec(str);
							if (match) cookies[match[1]] = match[2];
						});

						const str = Object.keys(cookies)
							.map(key => `${key}=${cookies[key]}`)
							.join('; ');

						opts.headers.cookie = str;
					}
				}

				return fetch$1(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: __chunk_2.writable({
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: __chunk_2.writable(null).subscribe
					},
					session: __chunk_2.writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && try_serialize(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

function escape_html(html) {
	const chars = {
		'"' : 'quot',
		"'": '#39',
		'&': 'amp',
		'<' : 'lt',
		'>' : 'gt'
	};

	return html.replace(/["'&<>]/g, c => `&${chars[c]};`);
}

var mime_raw = "application/andrew-inset\t\t\tez\napplication/applixware\t\t\t\taw\napplication/atom+xml\t\t\t\tatom\napplication/atomcat+xml\t\t\t\tatomcat\napplication/atomsvc+xml\t\t\t\tatomsvc\napplication/ccxml+xml\t\t\t\tccxml\napplication/cdmi-capability\t\t\tcdmia\napplication/cdmi-container\t\t\tcdmic\napplication/cdmi-domain\t\t\t\tcdmid\napplication/cdmi-object\t\t\t\tcdmio\napplication/cdmi-queue\t\t\t\tcdmiq\napplication/cu-seeme\t\t\t\tcu\napplication/davmount+xml\t\t\tdavmount\napplication/docbook+xml\t\t\t\tdbk\napplication/dssc+der\t\t\t\tdssc\napplication/dssc+xml\t\t\t\txdssc\napplication/ecmascript\t\t\t\tecma\napplication/emma+xml\t\t\t\temma\napplication/epub+zip\t\t\t\tepub\napplication/exi\t\t\t\t\texi\napplication/font-tdpfr\t\t\t\tpfr\napplication/gml+xml\t\t\t\tgml\napplication/gpx+xml\t\t\t\tgpx\napplication/gxf\t\t\t\t\tgxf\napplication/hyperstudio\t\t\t\tstk\napplication/inkml+xml\t\t\t\tink inkml\napplication/ipfix\t\t\t\tipfix\napplication/java-archive\t\t\tjar\napplication/java-serialized-object\t\tser\napplication/java-vm\t\t\t\tclass\napplication/javascript\t\t\t\tjs\napplication/json\t\t\t\tjson map\napplication/jsonml+json\t\t\t\tjsonml\napplication/lost+xml\t\t\t\tlostxml\napplication/mac-binhex40\t\t\thqx\napplication/mac-compactpro\t\t\tcpt\napplication/mads+xml\t\t\t\tmads\napplication/marc\t\t\t\tmrc\napplication/marcxml+xml\t\t\t\tmrcx\napplication/mathematica\t\t\t\tma nb mb\napplication/mathml+xml\t\t\t\tmathml\napplication/mbox\t\t\t\tmbox\napplication/mediaservercontrol+xml\t\tmscml\napplication/metalink+xml\t\t\tmetalink\napplication/metalink4+xml\t\t\tmeta4\napplication/mets+xml\t\t\t\tmets\napplication/mods+xml\t\t\t\tmods\napplication/mp21\t\t\t\tm21 mp21\napplication/mp4\t\t\t\t\tmp4s\napplication/msword\t\t\t\tdoc dot\napplication/mxf\t\t\t\t\tmxf\napplication/octet-stream\tbin dms lrf mar so dist distz pkg bpk dump elc deploy\napplication/oda\t\t\t\t\toda\napplication/oebps-package+xml\t\t\topf\napplication/ogg\t\t\t\t\togx\napplication/omdoc+xml\t\t\t\tomdoc\napplication/onenote\t\t\t\tonetoc onetoc2 onetmp onepkg\napplication/oxps\t\t\t\toxps\napplication/patch-ops-error+xml\t\t\txer\napplication/pdf\t\t\t\t\tpdf\napplication/pgp-encrypted\t\t\tpgp\napplication/pgp-signature\t\t\tasc sig\napplication/pics-rules\t\t\t\tprf\napplication/pkcs10\t\t\t\tp10\napplication/pkcs7-mime\t\t\t\tp7m p7c\napplication/pkcs7-signature\t\t\tp7s\napplication/pkcs8\t\t\t\tp8\napplication/pkix-attr-cert\t\t\tac\napplication/pkix-cert\t\t\t\tcer\napplication/pkix-crl\t\t\t\tcrl\napplication/pkix-pkipath\t\t\tpkipath\napplication/pkixcmp\t\t\t\tpki\napplication/pls+xml\t\t\t\tpls\napplication/postscript\t\t\t\tai eps ps\napplication/prs.cww\t\t\t\tcww\napplication/pskc+xml\t\t\t\tpskcxml\napplication/rdf+xml\t\t\t\trdf\napplication/reginfo+xml\t\t\t\trif\napplication/relax-ng-compact-syntax\t\trnc\napplication/resource-lists+xml\t\t\trl\napplication/resource-lists-diff+xml\t\trld\napplication/rls-services+xml\t\t\trs\napplication/rpki-ghostbusters\t\t\tgbr\napplication/rpki-manifest\t\t\tmft\napplication/rpki-roa\t\t\t\troa\napplication/rsd+xml\t\t\t\trsd\napplication/rss+xml\t\t\t\trss\napplication/rtf\t\t\t\t\trtf\napplication/sbml+xml\t\t\t\tsbml\napplication/scvp-cv-request\t\t\tscq\napplication/scvp-cv-response\t\t\tscs\napplication/scvp-vp-request\t\t\tspq\napplication/scvp-vp-response\t\t\tspp\napplication/sdp\t\t\t\t\tsdp\napplication/set-payment-initiation\t\tsetpay\napplication/set-registration-initiation\t\tsetreg\napplication/shf+xml\t\t\t\tshf\napplication/smil+xml\t\t\t\tsmi smil\napplication/sparql-query\t\t\trq\napplication/sparql-results+xml\t\t\tsrx\napplication/srgs\t\t\t\tgram\napplication/srgs+xml\t\t\t\tgrxml\napplication/sru+xml\t\t\t\tsru\napplication/ssdl+xml\t\t\t\tssdl\napplication/ssml+xml\t\t\t\tssml\napplication/tei+xml\t\t\t\ttei teicorpus\napplication/thraud+xml\t\t\t\ttfi\napplication/timestamped-data\t\t\ttsd\napplication/vnd.3gpp.pic-bw-large\t\tplb\napplication/vnd.3gpp.pic-bw-small\t\tpsb\napplication/vnd.3gpp.pic-bw-var\t\t\tpvb\napplication/vnd.3gpp2.tcap\t\t\ttcap\napplication/vnd.3m.post-it-notes\t\tpwn\napplication/vnd.accpac.simply.aso\t\taso\napplication/vnd.accpac.simply.imp\t\timp\napplication/vnd.acucobol\t\t\tacu\napplication/vnd.acucorp\t\t\t\tatc acutc\napplication/vnd.adobe.air-application-installer-package+zip\tair\napplication/vnd.adobe.formscentral.fcdt\t\tfcdt\napplication/vnd.adobe.fxp\t\t\tfxp fxpl\napplication/vnd.adobe.xdp+xml\t\t\txdp\napplication/vnd.adobe.xfdf\t\t\txfdf\napplication/vnd.ahead.space\t\t\tahead\napplication/vnd.airzip.filesecure.azf\t\tazf\napplication/vnd.airzip.filesecure.azs\t\tazs\napplication/vnd.amazon.ebook\t\t\tazw\napplication/vnd.americandynamics.acc\t\tacc\napplication/vnd.amiga.ami\t\t\tami\napplication/vnd.android.package-archive\t\tapk\napplication/vnd.anser-web-certificate-issue-initiation\tcii\napplication/vnd.anser-web-funds-transfer-initiation\tfti\napplication/vnd.antix.game-component\t\tatx\napplication/vnd.apple.installer+xml\t\tmpkg\napplication/vnd.apple.mpegurl\t\t\tm3u8\napplication/vnd.aristanetworks.swi\t\tswi\napplication/vnd.astraea-software.iota\t\tiota\napplication/vnd.audiograph\t\t\taep\napplication/vnd.blueice.multipass\t\tmpm\napplication/vnd.bmi\t\t\t\tbmi\napplication/vnd.businessobjects\t\t\trep\napplication/vnd.chemdraw+xml\t\t\tcdxml\napplication/vnd.chipnuts.karaoke-mmd\t\tmmd\napplication/vnd.cinderella\t\t\tcdy\napplication/vnd.claymore\t\t\tcla\napplication/vnd.cloanto.rp9\t\t\trp9\napplication/vnd.clonk.c4group\t\t\tc4g c4d c4f c4p c4u\napplication/vnd.cluetrust.cartomobile-config\t\tc11amc\napplication/vnd.cluetrust.cartomobile-config-pkg\tc11amz\napplication/vnd.commonspace\t\t\tcsp\napplication/vnd.contact.cmsg\t\t\tcdbcmsg\napplication/vnd.cosmocaller\t\t\tcmc\napplication/vnd.crick.clicker\t\t\tclkx\napplication/vnd.crick.clicker.keyboard\t\tclkk\napplication/vnd.crick.clicker.palette\t\tclkp\napplication/vnd.crick.clicker.template\t\tclkt\napplication/vnd.crick.clicker.wordbank\t\tclkw\napplication/vnd.criticaltools.wbs+xml\t\twbs\napplication/vnd.ctc-posml\t\t\tpml\napplication/vnd.cups-ppd\t\t\tppd\napplication/vnd.curl.car\t\t\tcar\napplication/vnd.curl.pcurl\t\t\tpcurl\napplication/vnd.dart\t\t\t\tdart\napplication/vnd.data-vision.rdz\t\t\trdz\napplication/vnd.dece.data\t\t\tuvf uvvf uvd uvvd\napplication/vnd.dece.ttml+xml\t\t\tuvt uvvt\napplication/vnd.dece.unspecified\t\tuvx uvvx\napplication/vnd.dece.zip\t\t\tuvz uvvz\napplication/vnd.denovo.fcselayout-link\t\tfe_launch\napplication/vnd.dna\t\t\t\tdna\napplication/vnd.dolby.mlp\t\t\tmlp\napplication/vnd.dpgraph\t\t\t\tdpg\napplication/vnd.dreamfactory\t\t\tdfac\napplication/vnd.ds-keypoint\t\t\tkpxx\napplication/vnd.dvb.ait\t\t\t\tait\napplication/vnd.dvb.service\t\t\tsvc\napplication/vnd.dynageo\t\t\t\tgeo\napplication/vnd.ecowin.chart\t\t\tmag\napplication/vnd.enliven\t\t\t\tnml\napplication/vnd.epson.esf\t\t\tesf\napplication/vnd.epson.msf\t\t\tmsf\napplication/vnd.epson.quickanime\t\tqam\napplication/vnd.epson.salt\t\t\tslt\napplication/vnd.epson.ssf\t\t\tssf\napplication/vnd.eszigno3+xml\t\t\tes3 et3\napplication/vnd.ezpix-album\t\t\tez2\napplication/vnd.ezpix-package\t\t\tez3\napplication/vnd.fdf\t\t\t\tfdf\napplication/vnd.fdsn.mseed\t\t\tmseed\napplication/vnd.fdsn.seed\t\t\tseed dataless\napplication/vnd.flographit\t\t\tgph\napplication/vnd.fluxtime.clip\t\t\tftc\napplication/vnd.framemaker\t\t\tfm frame maker book\napplication/vnd.frogans.fnc\t\t\tfnc\napplication/vnd.frogans.ltf\t\t\tltf\napplication/vnd.fsc.weblaunch\t\t\tfsc\napplication/vnd.fujitsu.oasys\t\t\toas\napplication/vnd.fujitsu.oasys2\t\t\toa2\napplication/vnd.fujitsu.oasys3\t\t\toa3\napplication/vnd.fujitsu.oasysgp\t\t\tfg5\napplication/vnd.fujitsu.oasysprs\t\tbh2\napplication/vnd.fujixerox.ddd\t\t\tddd\napplication/vnd.fujixerox.docuworks\t\txdw\napplication/vnd.fujixerox.docuworks.binder\txbd\napplication/vnd.fuzzysheet\t\t\tfzs\napplication/vnd.genomatix.tuxedo\t\ttxd\napplication/vnd.geogebra.file\t\t\tggb\napplication/vnd.geogebra.tool\t\t\tggt\napplication/vnd.geometry-explorer\t\tgex gre\napplication/vnd.geonext\t\t\t\tgxt\napplication/vnd.geoplan\t\t\t\tg2w\napplication/vnd.geospace\t\t\tg3w\napplication/vnd.gmx\t\t\t\tgmx\napplication/vnd.google-earth.kml+xml\t\tkml\napplication/vnd.google-earth.kmz\t\tkmz\napplication/vnd.grafeq\t\t\t\tgqf gqs\napplication/vnd.groove-account\t\t\tgac\napplication/vnd.groove-help\t\t\tghf\napplication/vnd.groove-identity-message\t\tgim\napplication/vnd.groove-injector\t\t\tgrv\napplication/vnd.groove-tool-message\t\tgtm\napplication/vnd.groove-tool-template\t\ttpl\napplication/vnd.groove-vcard\t\t\tvcg\napplication/vnd.hal+xml\t\t\t\thal\napplication/vnd.handheld-entertainment+xml\tzmm\napplication/vnd.hbci\t\t\t\thbci\napplication/vnd.hhe.lesson-player\t\tles\napplication/vnd.hp-hpgl\t\t\t\thpgl\napplication/vnd.hp-hpid\t\t\t\thpid\napplication/vnd.hp-hps\t\t\t\thps\napplication/vnd.hp-jlyt\t\t\t\tjlt\napplication/vnd.hp-pcl\t\t\t\tpcl\napplication/vnd.hp-pclxl\t\t\tpclxl\napplication/vnd.hydrostatix.sof-data\t\tsfd-hdstx\napplication/vnd.ibm.minipay\t\t\tmpy\napplication/vnd.ibm.modcap\t\t\tafp listafp list3820\napplication/vnd.ibm.rights-management\t\tirm\napplication/vnd.ibm.secure-container\t\tsc\napplication/vnd.iccprofile\t\t\ticc icm\napplication/vnd.igloader\t\t\tigl\napplication/vnd.immervision-ivp\t\t\tivp\napplication/vnd.immervision-ivu\t\t\tivu\napplication/vnd.insors.igm\t\t\tigm\napplication/vnd.intercon.formnet\t\txpw xpx\napplication/vnd.intergeo\t\t\ti2g\napplication/vnd.intu.qbo\t\t\tqbo\napplication/vnd.intu.qfx\t\t\tqfx\napplication/vnd.ipunplugged.rcprofile\t\trcprofile\napplication/vnd.irepository.package+xml\t\tirp\napplication/vnd.is-xpr\t\t\t\txpr\napplication/vnd.isac.fcs\t\t\tfcs\napplication/vnd.jam\t\t\t\tjam\napplication/vnd.jcp.javame.midlet-rms\t\trms\napplication/vnd.jisp\t\t\t\tjisp\napplication/vnd.joost.joda-archive\t\tjoda\napplication/vnd.kahootz\t\t\t\tktz ktr\napplication/vnd.kde.karbon\t\t\tkarbon\napplication/vnd.kde.kchart\t\t\tchrt\napplication/vnd.kde.kformula\t\t\tkfo\napplication/vnd.kde.kivio\t\t\tflw\napplication/vnd.kde.kontour\t\t\tkon\napplication/vnd.kde.kpresenter\t\t\tkpr kpt\napplication/vnd.kde.kspread\t\t\tksp\napplication/vnd.kde.kword\t\t\tkwd kwt\napplication/vnd.kenameaapp\t\t\thtke\napplication/vnd.kidspiration\t\t\tkia\napplication/vnd.kinar\t\t\t\tkne knp\napplication/vnd.koan\t\t\t\tskp skd skt skm\napplication/vnd.kodak-descriptor\t\tsse\napplication/vnd.las.las+xml\t\t\tlasxml\napplication/vnd.llamagraphics.life-balance.desktop\tlbd\napplication/vnd.llamagraphics.life-balance.exchange+xml\tlbe\napplication/vnd.lotus-1-2-3\t\t\t123\napplication/vnd.lotus-approach\t\t\tapr\napplication/vnd.lotus-freelance\t\t\tpre\napplication/vnd.lotus-notes\t\t\tnsf\napplication/vnd.lotus-organizer\t\t\torg\napplication/vnd.lotus-screencam\t\t\tscm\napplication/vnd.lotus-wordpro\t\t\tlwp\napplication/vnd.macports.portpkg\t\tportpkg\napplication/vnd.mcd\t\t\t\tmcd\napplication/vnd.medcalcdata\t\t\tmc1\napplication/vnd.mediastation.cdkey\t\tcdkey\napplication/vnd.mfer\t\t\t\tmwf\napplication/vnd.mfmp\t\t\t\tmfm\napplication/vnd.micrografx.flo\t\t\tflo\napplication/vnd.micrografx.igx\t\t\tigx\napplication/vnd.mif\t\t\t\tmif\napplication/vnd.mobius.daf\t\t\tdaf\napplication/vnd.mobius.dis\t\t\tdis\napplication/vnd.mobius.mbk\t\t\tmbk\napplication/vnd.mobius.mqy\t\t\tmqy\napplication/vnd.mobius.msl\t\t\tmsl\napplication/vnd.mobius.plc\t\t\tplc\napplication/vnd.mobius.txf\t\t\ttxf\napplication/vnd.mophun.application\t\tmpn\napplication/vnd.mophun.certificate\t\tmpc\napplication/vnd.mozilla.xul+xml\t\t\txul\napplication/vnd.ms-artgalry\t\t\tcil\napplication/vnd.ms-cab-compressed\t\tcab\napplication/vnd.ms-excel\t\t\txls xlm xla xlc xlt xlw\napplication/vnd.ms-excel.addin.macroenabled.12\t\txlam\napplication/vnd.ms-excel.sheet.binary.macroenabled.12\txlsb\napplication/vnd.ms-excel.sheet.macroenabled.12\t\txlsm\napplication/vnd.ms-excel.template.macroenabled.12\txltm\napplication/vnd.ms-fontobject\t\t\teot\napplication/vnd.ms-htmlhelp\t\t\tchm\napplication/vnd.ms-ims\t\t\t\tims\napplication/vnd.ms-lrm\t\t\t\tlrm\napplication/vnd.ms-officetheme\t\t\tthmx\napplication/vnd.ms-pki.seccat\t\t\tcat\napplication/vnd.ms-pki.stl\t\t\tstl\napplication/vnd.ms-powerpoint\t\t\tppt pps pot\napplication/vnd.ms-powerpoint.addin.macroenabled.12\t\tppam\napplication/vnd.ms-powerpoint.presentation.macroenabled.12\tpptm\napplication/vnd.ms-powerpoint.slide.macroenabled.12\t\tsldm\napplication/vnd.ms-powerpoint.slideshow.macroenabled.12\t\tppsm\napplication/vnd.ms-powerpoint.template.macroenabled.12\t\tpotm\napplication/vnd.ms-project\t\t\tmpp mpt\napplication/vnd.ms-word.document.macroenabled.12\tdocm\napplication/vnd.ms-word.template.macroenabled.12\tdotm\napplication/vnd.ms-works\t\t\twps wks wcm wdb\napplication/vnd.ms-wpl\t\t\t\twpl\napplication/vnd.ms-xpsdocument\t\t\txps\napplication/vnd.mseq\t\t\t\tmseq\napplication/vnd.musician\t\t\tmus\napplication/vnd.muvee.style\t\t\tmsty\napplication/vnd.mynfc\t\t\t\ttaglet\napplication/vnd.neurolanguage.nlu\t\tnlu\napplication/vnd.nitf\t\t\t\tntf nitf\napplication/vnd.noblenet-directory\t\tnnd\napplication/vnd.noblenet-sealer\t\t\tnns\napplication/vnd.noblenet-web\t\t\tnnw\napplication/vnd.nokia.n-gage.data\t\tngdat\napplication/vnd.nokia.n-gage.symbian.install\tn-gage\napplication/vnd.nokia.radio-preset\t\trpst\napplication/vnd.nokia.radio-presets\t\trpss\napplication/vnd.novadigm.edm\t\t\tedm\napplication/vnd.novadigm.edx\t\t\tedx\napplication/vnd.novadigm.ext\t\t\text\napplication/vnd.oasis.opendocument.chart\t\todc\napplication/vnd.oasis.opendocument.chart-template\totc\napplication/vnd.oasis.opendocument.database\t\todb\napplication/vnd.oasis.opendocument.formula\t\todf\napplication/vnd.oasis.opendocument.formula-template\todft\napplication/vnd.oasis.opendocument.graphics\t\todg\napplication/vnd.oasis.opendocument.graphics-template\totg\napplication/vnd.oasis.opendocument.image\t\todi\napplication/vnd.oasis.opendocument.image-template\toti\napplication/vnd.oasis.opendocument.presentation\t\todp\napplication/vnd.oasis.opendocument.presentation-template\totp\napplication/vnd.oasis.opendocument.spreadsheet\t\tods\napplication/vnd.oasis.opendocument.spreadsheet-template\tots\napplication/vnd.oasis.opendocument.text\t\t\todt\napplication/vnd.oasis.opendocument.text-master\t\todm\napplication/vnd.oasis.opendocument.text-template\tott\napplication/vnd.oasis.opendocument.text-web\t\toth\napplication/vnd.olpc-sugar\t\t\txo\napplication/vnd.oma.dd2+xml\t\t\tdd2\napplication/vnd.openofficeorg.extension\t\toxt\napplication/vnd.openxmlformats-officedocument.presentationml.presentation\tpptx\napplication/vnd.openxmlformats-officedocument.presentationml.slide\tsldx\napplication/vnd.openxmlformats-officedocument.presentationml.slideshow\tppsx\napplication/vnd.openxmlformats-officedocument.presentationml.template\tpotx\napplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet\txlsx\napplication/vnd.openxmlformats-officedocument.spreadsheetml.template\txltx\napplication/vnd.openxmlformats-officedocument.wordprocessingml.document\tdocx\napplication/vnd.openxmlformats-officedocument.wordprocessingml.template\tdotx\napplication/vnd.osgeo.mapguide.package\t\tmgp\napplication/vnd.osgi.dp\t\t\t\tdp\napplication/vnd.osgi.subsystem\t\t\tesa\napplication/vnd.palm\t\t\t\tpdb pqa oprc\napplication/vnd.pawaafile\t\t\tpaw\napplication/vnd.pg.format\t\t\tstr\napplication/vnd.pg.osasli\t\t\tei6\napplication/vnd.picsel\t\t\t\tefif\napplication/vnd.pmi.widget\t\t\twg\napplication/vnd.pocketlearn\t\t\tplf\napplication/vnd.powerbuilder6\t\t\tpbd\napplication/vnd.previewsystems.box\t\tbox\napplication/vnd.proteus.magazine\t\tmgz\napplication/vnd.publishare-delta-tree\t\tqps\napplication/vnd.pvi.ptid1\t\t\tptid\napplication/vnd.quark.quarkxpress\t\tqxd qxt qwd qwt qxl qxb\napplication/vnd.realvnc.bed\t\t\tbed\napplication/vnd.recordare.musicxml\t\tmxl\napplication/vnd.recordare.musicxml+xml\t\tmusicxml\napplication/vnd.rig.cryptonote\t\t\tcryptonote\napplication/vnd.rim.cod\t\t\t\tcod\napplication/vnd.rn-realmedia\t\t\trm\napplication/vnd.rn-realmedia-vbr\t\trmvb\napplication/vnd.route66.link66+xml\t\tlink66\napplication/vnd.sailingtracker.track\t\tst\napplication/vnd.seemail\t\t\t\tsee\napplication/vnd.sema\t\t\t\tsema\napplication/vnd.semd\t\t\t\tsemd\napplication/vnd.semf\t\t\t\tsemf\napplication/vnd.shana.informed.formdata\t\tifm\napplication/vnd.shana.informed.formtemplate\titp\napplication/vnd.shana.informed.interchange\tiif\napplication/vnd.shana.informed.package\t\tipk\napplication/vnd.simtech-mindmapper\t\ttwd twds\napplication/vnd.smaf\t\t\t\tmmf\napplication/vnd.smart.teacher\t\t\tteacher\napplication/vnd.solent.sdkm+xml\t\t\tsdkm sdkd\napplication/vnd.spotfire.dxp\t\t\tdxp\napplication/vnd.spotfire.sfs\t\t\tsfs\napplication/vnd.stardivision.calc\t\tsdc\napplication/vnd.stardivision.draw\t\tsda\napplication/vnd.stardivision.impress\t\tsdd\napplication/vnd.stardivision.math\t\tsmf\napplication/vnd.stardivision.writer\t\tsdw vor\napplication/vnd.stardivision.writer-global\tsgl\napplication/vnd.stepmania.package\t\tsmzip\napplication/vnd.stepmania.stepchart\t\tsm\napplication/vnd.sun.xml.calc\t\t\tsxc\napplication/vnd.sun.xml.calc.template\t\tstc\napplication/vnd.sun.xml.draw\t\t\tsxd\napplication/vnd.sun.xml.draw.template\t\tstd\napplication/vnd.sun.xml.impress\t\t\tsxi\napplication/vnd.sun.xml.impress.template\tsti\napplication/vnd.sun.xml.math\t\t\tsxm\napplication/vnd.sun.xml.writer\t\t\tsxw\napplication/vnd.sun.xml.writer.global\t\tsxg\napplication/vnd.sun.xml.writer.template\t\tstw\napplication/vnd.sus-calendar\t\t\tsus susp\napplication/vnd.svd\t\t\t\tsvd\napplication/vnd.symbian.install\t\t\tsis sisx\napplication/vnd.syncml+xml\t\t\txsm\napplication/vnd.syncml.dm+wbxml\t\t\tbdm\napplication/vnd.syncml.dm+xml\t\t\txdm\napplication/vnd.tao.intent-module-archive\ttao\napplication/vnd.tcpdump.pcap\t\t\tpcap cap dmp\napplication/vnd.tmobile-livetv\t\t\ttmo\napplication/vnd.trid.tpt\t\t\ttpt\napplication/vnd.triscape.mxs\t\t\tmxs\napplication/vnd.trueapp\t\t\t\ttra\napplication/vnd.ufdl\t\t\t\tufd ufdl\napplication/vnd.uiq.theme\t\t\tutz\napplication/vnd.umajin\t\t\t\tumj\napplication/vnd.unity\t\t\t\tunityweb\napplication/vnd.uoml+xml\t\t\tuoml\napplication/vnd.vcx\t\t\t\tvcx\napplication/vnd.visio\t\t\t\tvsd vst vss vsw\napplication/vnd.visionary\t\t\tvis\napplication/vnd.vsf\t\t\t\tvsf\napplication/vnd.wap.wbxml\t\t\twbxml\napplication/vnd.wap.wmlc\t\t\twmlc\napplication/vnd.wap.wmlscriptc\t\t\twmlsc\napplication/vnd.webturbo\t\t\twtb\napplication/vnd.wolfram.player\t\t\tnbp\napplication/vnd.wordperfect\t\t\twpd\napplication/vnd.wqd\t\t\t\twqd\napplication/vnd.wt.stf\t\t\t\tstf\napplication/vnd.xara\t\t\t\txar\napplication/vnd.xfdl\t\t\t\txfdl\napplication/vnd.yamaha.hv-dic\t\t\thvd\napplication/vnd.yamaha.hv-script\t\thvs\napplication/vnd.yamaha.hv-voice\t\t\thvp\napplication/vnd.yamaha.openscoreformat\t\t\tosf\napplication/vnd.yamaha.openscoreformat.osfpvg+xml\tosfpvg\napplication/vnd.yamaha.smaf-audio\t\tsaf\napplication/vnd.yamaha.smaf-phrase\t\tspf\napplication/vnd.yellowriver-custom-menu\t\tcmp\napplication/vnd.zul\t\t\t\tzir zirz\napplication/vnd.zzazz.deck+xml\t\t\tzaz\napplication/voicexml+xml\t\t\tvxml\napplication/widget\t\t\t\twgt\napplication/winhlp\t\t\t\thlp\napplication/wsdl+xml\t\t\t\twsdl\napplication/wspolicy+xml\t\t\twspolicy\napplication/x-7z-compressed\t\t\t7z\napplication/x-abiword\t\t\t\tabw\napplication/x-ace-compressed\t\t\tace\napplication/x-apple-diskimage\t\t\tdmg\napplication/x-authorware-bin\t\t\taab x32 u32 vox\napplication/x-authorware-map\t\t\taam\napplication/x-authorware-seg\t\t\taas\napplication/x-bcpio\t\t\t\tbcpio\napplication/x-bittorrent\t\t\ttorrent\napplication/x-blorb\t\t\t\tblb blorb\napplication/x-bzip\t\t\t\tbz\napplication/x-bzip2\t\t\t\tbz2 boz\napplication/x-cbr\t\t\t\tcbr cba cbt cbz cb7\napplication/x-cdlink\t\t\t\tvcd\napplication/x-cfs-compressed\t\t\tcfs\napplication/x-chat\t\t\t\tchat\napplication/x-chess-pgn\t\t\t\tpgn\napplication/x-conference\t\t\tnsc\napplication/x-cpio\t\t\t\tcpio\napplication/x-csh\t\t\t\tcsh\napplication/x-debian-package\t\t\tdeb udeb\napplication/x-dgc-compressed\t\t\tdgc\napplication/x-director\t\t\tdir dcr dxr cst cct cxt w3d fgd swa\napplication/x-doom\t\t\t\twad\napplication/x-dtbncx+xml\t\t\tncx\napplication/x-dtbook+xml\t\t\tdtb\napplication/x-dtbresource+xml\t\t\tres\napplication/x-dvi\t\t\t\tdvi\napplication/x-envoy\t\t\t\tevy\napplication/x-eva\t\t\t\teva\napplication/x-font-bdf\t\t\t\tbdf\napplication/x-font-ghostscript\t\t\tgsf\napplication/x-font-linux-psf\t\t\tpsf\napplication/x-font-pcf\t\t\t\tpcf\napplication/x-font-snf\t\t\t\tsnf\napplication/x-font-type1\t\t\tpfa pfb pfm afm\napplication/x-freearc\t\t\t\tarc\napplication/x-futuresplash\t\t\tspl\napplication/x-gca-compressed\t\t\tgca\napplication/x-glulx\t\t\t\tulx\napplication/x-gnumeric\t\t\t\tgnumeric\napplication/x-gramps-xml\t\t\tgramps\napplication/x-gtar\t\t\t\tgtar\napplication/x-hdf\t\t\t\thdf\napplication/x-install-instructions\t\tinstall\napplication/x-iso9660-image\t\t\tiso\napplication/x-java-jnlp-file\t\t\tjnlp\napplication/x-latex\t\t\t\tlatex\napplication/x-lzh-compressed\t\t\tlzh lha\napplication/x-mie\t\t\t\tmie\napplication/x-mobipocket-ebook\t\t\tprc mobi\napplication/x-ms-application\t\t\tapplication\napplication/x-ms-shortcut\t\t\tlnk\napplication/x-ms-wmd\t\t\t\twmd\napplication/x-ms-wmz\t\t\t\twmz\napplication/x-ms-xbap\t\t\t\txbap\napplication/x-msaccess\t\t\t\tmdb\napplication/x-msbinder\t\t\t\tobd\napplication/x-mscardfile\t\t\tcrd\napplication/x-msclip\t\t\t\tclp\napplication/x-msdownload\t\t\texe dll com bat msi\napplication/x-msmediaview\t\t\tmvb m13 m14\napplication/x-msmetafile\t\t\twmf wmz emf emz\napplication/x-msmoney\t\t\t\tmny\napplication/x-mspublisher\t\t\tpub\napplication/x-msschedule\t\t\tscd\napplication/x-msterminal\t\t\ttrm\napplication/x-mswrite\t\t\t\twri\napplication/x-netcdf\t\t\t\tnc cdf\napplication/x-nzb\t\t\t\tnzb\napplication/x-pkcs12\t\t\t\tp12 pfx\napplication/x-pkcs7-certificates\t\tp7b spc\napplication/x-pkcs7-certreqresp\t\t\tp7r\napplication/x-rar-compressed\t\t\trar\napplication/x-research-info-systems\t\tris\napplication/x-sh\t\t\t\tsh\napplication/x-shar\t\t\t\tshar\napplication/x-shockwave-flash\t\t\tswf\napplication/x-silverlight-app\t\t\txap\napplication/x-sql\t\t\t\tsql\napplication/x-stuffit\t\t\t\tsit\napplication/x-stuffitx\t\t\t\tsitx\napplication/x-subrip\t\t\t\tsrt\napplication/x-sv4cpio\t\t\t\tsv4cpio\napplication/x-sv4crc\t\t\t\tsv4crc\napplication/x-t3vm-image\t\t\tt3\napplication/x-tads\t\t\t\tgam\napplication/x-tar\t\t\t\ttar\napplication/x-tcl\t\t\t\ttcl\napplication/x-tex\t\t\t\ttex\napplication/x-tex-tfm\t\t\t\ttfm\napplication/x-texinfo\t\t\t\ttexinfo texi\napplication/x-tgif\t\t\t\tobj\napplication/x-ustar\t\t\t\tustar\napplication/x-wais-source\t\t\tsrc\napplication/x-x509-ca-cert\t\t\tder crt\napplication/x-xfig\t\t\t\tfig\napplication/x-xliff+xml\t\t\t\txlf\napplication/x-xpinstall\t\t\t\txpi\napplication/x-xz\t\t\t\txz\napplication/x-zmachine\t\t\t\tz1 z2 z3 z4 z5 z6 z7 z8\napplication/xaml+xml\t\t\t\txaml\napplication/xcap-diff+xml\t\t\txdf\napplication/xenc+xml\t\t\t\txenc\napplication/xhtml+xml\t\t\t\txhtml xht\napplication/xml\t\t\t\t\txml xsl\napplication/xml-dtd\t\t\t\tdtd\napplication/xop+xml\t\t\t\txop\napplication/xproc+xml\t\t\t\txpl\napplication/xslt+xml\t\t\t\txslt\napplication/xspf+xml\t\t\t\txspf\napplication/xv+xml\t\t\t\tmxml xhvml xvml xvm\napplication/yang\t\t\t\tyang\napplication/yin+xml\t\t\t\tyin\napplication/zip\t\t\t\t\tzip\naudio/adpcm\t\t\t\t\tadp\naudio/basic\t\t\t\t\tau snd\naudio/midi\t\t\t\t\tmid midi kar rmi\naudio/mp4\t\t\t\t\tm4a mp4a\naudio/mpeg\t\t\t\t\tmpga mp2 mp2a mp3 m2a m3a\naudio/ogg\t\t\t\t\toga ogg spx\naudio/s3m\t\t\t\t\ts3m\naudio/silk\t\t\t\t\tsil\naudio/vnd.dece.audio\t\t\t\tuva uvva\naudio/vnd.digital-winds\t\t\t\teol\naudio/vnd.dra\t\t\t\t\tdra\naudio/vnd.dts\t\t\t\t\tdts\naudio/vnd.dts.hd\t\t\t\tdtshd\naudio/vnd.lucent.voice\t\t\t\tlvp\naudio/vnd.ms-playready.media.pya\t\tpya\naudio/vnd.nuera.ecelp4800\t\t\tecelp4800\naudio/vnd.nuera.ecelp7470\t\t\tecelp7470\naudio/vnd.nuera.ecelp9600\t\t\tecelp9600\naudio/vnd.rip\t\t\t\t\trip\naudio/webm\t\t\t\t\tweba\naudio/x-aac\t\t\t\t\taac\naudio/x-aiff\t\t\t\t\taif aiff aifc\naudio/x-caf\t\t\t\t\tcaf\naudio/x-flac\t\t\t\t\tflac\naudio/x-matroska\t\t\t\tmka\naudio/x-mpegurl\t\t\t\t\tm3u\naudio/x-ms-wax\t\t\t\t\twax\naudio/x-ms-wma\t\t\t\t\twma\naudio/x-pn-realaudio\t\t\t\tram ra\naudio/x-pn-realaudio-plugin\t\t\trmp\naudio/x-wav\t\t\t\t\twav\naudio/xm\t\t\t\t\txm\nchemical/x-cdx\t\t\t\t\tcdx\nchemical/x-cif\t\t\t\t\tcif\nchemical/x-cmdf\t\t\t\t\tcmdf\nchemical/x-cml\t\t\t\t\tcml\nchemical/x-csml\t\t\t\t\tcsml\nchemical/x-xyz\t\t\t\t\txyz\nfont/collection\t\t\t\t\tttc\nfont/otf\t\t\t\t\totf\nfont/ttf\t\t\t\t\tttf\nfont/woff\t\t\t\t\twoff\nfont/woff2\t\t\t\t\twoff2\nimage/bmp\t\t\t\t\tbmp\nimage/cgm\t\t\t\t\tcgm\nimage/g3fax\t\t\t\t\tg3\nimage/gif\t\t\t\t\tgif\nimage/ief\t\t\t\t\tief\nimage/jpeg\t\t\t\t\tjpeg jpg jpe\nimage/ktx\t\t\t\t\tktx\nimage/png\t\t\t\t\tpng\nimage/prs.btif\t\t\t\t\tbtif\nimage/sgi\t\t\t\t\tsgi\nimage/svg+xml\t\t\t\t\tsvg svgz\nimage/tiff\t\t\t\t\ttiff tif\nimage/vnd.adobe.photoshop\t\t\tpsd\nimage/vnd.dece.graphic\t\t\t\tuvi uvvi uvg uvvg\nimage/vnd.djvu\t\t\t\t\tdjvu djv\nimage/vnd.dvb.subtitle\t\t\t\tsub\nimage/vnd.dwg\t\t\t\t\tdwg\nimage/vnd.dxf\t\t\t\t\tdxf\nimage/vnd.fastbidsheet\t\t\t\tfbs\nimage/vnd.fpx\t\t\t\t\tfpx\nimage/vnd.fst\t\t\t\t\tfst\nimage/vnd.fujixerox.edmics-mmr\t\t\tmmr\nimage/vnd.fujixerox.edmics-rlc\t\t\trlc\nimage/vnd.ms-modi\t\t\t\tmdi\nimage/vnd.ms-photo\t\t\t\twdp\nimage/vnd.net-fpx\t\t\t\tnpx\nimage/vnd.wap.wbmp\t\t\t\twbmp\nimage/vnd.xiff\t\t\t\t\txif\nimage/webp\t\t\t\t\twebp\nimage/x-3ds\t\t\t\t\t3ds\nimage/x-cmu-raster\t\t\t\tras\nimage/x-cmx\t\t\t\t\tcmx\nimage/x-freehand\t\t\t\tfh fhc fh4 fh5 fh7\nimage/x-icon\t\t\t\t\tico\nimage/x-mrsid-image\t\t\t\tsid\nimage/x-pcx\t\t\t\t\tpcx\nimage/x-pict\t\t\t\t\tpic pct\nimage/x-portable-anymap\t\t\t\tpnm\nimage/x-portable-bitmap\t\t\t\tpbm\nimage/x-portable-graymap\t\t\tpgm\nimage/x-portable-pixmap\t\t\t\tppm\nimage/x-rgb\t\t\t\t\trgb\nimage/x-tga\t\t\t\t\ttga\nimage/x-xbitmap\t\t\t\t\txbm\nimage/x-xpixmap\t\t\t\t\txpm\nimage/x-xwindowdump\t\t\t\txwd\nmessage/rfc822\t\t\t\t\teml mime\nmodel/iges\t\t\t\t\tigs iges\nmodel/mesh\t\t\t\t\tmsh mesh silo\nmodel/vnd.collada+xml\t\t\t\tdae\nmodel/vnd.dwf\t\t\t\t\tdwf\nmodel/vnd.gdl\t\t\t\t\tgdl\nmodel/vnd.gtw\t\t\t\t\tgtw\nmodel/vnd.mts\t\t\t\t\tmts\nmodel/vnd.vtu\t\t\t\t\tvtu\nmodel/vrml\t\t\t\t\twrl vrml\nmodel/x3d+binary\t\t\t\tx3db x3dbz\nmodel/x3d+vrml\t\t\t\t\tx3dv x3dvz\nmodel/x3d+xml\t\t\t\t\tx3d x3dz\ntext/cache-manifest\t\t\t\tappcache\ntext/calendar\t\t\t\t\tics ifb\ntext/css\t\t\t\t\tcss\ntext/csv\t\t\t\t\tcsv\ntext/html\t\t\t\t\thtml htm\ntext/n3\t\t\t\t\t\tn3\ntext/plain\t\t\t\t\ttxt text conf def list log in\ntext/prs.lines.tag\t\t\t\tdsc\ntext/richtext\t\t\t\t\trtx\ntext/sgml\t\t\t\t\tsgml sgm\ntext/tab-separated-values\t\t\ttsv\ntext/troff\t\t\t\t\tt tr roff man me ms\ntext/turtle\t\t\t\t\tttl\ntext/uri-list\t\t\t\t\turi uris urls\ntext/vcard\t\t\t\t\tvcard\ntext/vnd.curl\t\t\t\t\tcurl\ntext/vnd.curl.dcurl\t\t\t\tdcurl\ntext/vnd.curl.mcurl\t\t\t\tmcurl\ntext/vnd.curl.scurl\t\t\t\tscurl\ntext/vnd.dvb.subtitle\t\t\t\tsub\ntext/vnd.fly\t\t\t\t\tfly\ntext/vnd.fmi.flexstor\t\t\t\tflx\ntext/vnd.graphviz\t\t\t\tgv\ntext/vnd.in3d.3dml\t\t\t\t3dml\ntext/vnd.in3d.spot\t\t\t\tspot\ntext/vnd.sun.j2me.app-descriptor\t\tjad\ntext/vnd.wap.wml\t\t\t\twml\ntext/vnd.wap.wmlscript\t\t\t\twmls\ntext/x-asm\t\t\t\t\ts asm\ntext/x-c\t\t\t\t\tc cc cxx cpp h hh dic\ntext/x-fortran\t\t\t\t\tf for f77 f90\ntext/x-java-source\t\t\t\tjava\ntext/x-nfo\t\t\t\t\tnfo\ntext/x-opml\t\t\t\t\topml\ntext/x-pascal\t\t\t\t\tp pas\ntext/x-setext\t\t\t\t\tetx\ntext/x-sfv\t\t\t\t\tsfv\ntext/x-uuencode\t\t\t\t\tuu\ntext/x-vcalendar\t\t\t\tvcs\ntext/x-vcard\t\t\t\t\tvcf\nvideo/3gpp\t\t\t\t\t3gp\nvideo/3gpp2\t\t\t\t\t3g2\nvideo/h261\t\t\t\t\th261\nvideo/h263\t\t\t\t\th263\nvideo/h264\t\t\t\t\th264\nvideo/jpeg\t\t\t\t\tjpgv\nvideo/jpm\t\t\t\t\tjpm jpgm\nvideo/mj2\t\t\t\t\tmj2 mjp2\nvideo/mp4\t\t\t\t\tmp4 mp4v mpg4\nvideo/mpeg\t\t\t\t\tmpeg mpg mpe m1v m2v\nvideo/ogg\t\t\t\t\togv\nvideo/quicktime\t\t\t\t\tqt mov\nvideo/vnd.dece.hd\t\t\t\tuvh uvvh\nvideo/vnd.dece.mobile\t\t\t\tuvm uvvm\nvideo/vnd.dece.pd\t\t\t\tuvp uvvp\nvideo/vnd.dece.sd\t\t\t\tuvs uvvs\nvideo/vnd.dece.video\t\t\t\tuvv uvvv\nvideo/vnd.dvb.file\t\t\t\tdvb\nvideo/vnd.fvt\t\t\t\t\tfvt\nvideo/vnd.mpegurl\t\t\t\tmxu m4u\nvideo/vnd.ms-playready.media.pyv\t\tpyv\nvideo/vnd.uvvu.mp4\t\t\t\tuvu uvvu\nvideo/vnd.vivo\t\t\t\t\tviv\nvideo/webm\t\t\t\t\twebm\nvideo/x-f4v\t\t\t\t\tf4v\nvideo/x-fli\t\t\t\t\tfli\nvideo/x-flv\t\t\t\t\tflv\nvideo/x-m4v\t\t\t\t\tm4v\nvideo/x-matroska\t\t\t\tmkv mk3d mks\nvideo/x-mng\t\t\t\t\tmng\nvideo/x-ms-asf\t\t\t\t\tasf asx\nvideo/x-ms-vob\t\t\t\t\tvob\nvideo/x-ms-wm\t\t\t\t\twm\nvideo/x-ms-wmv\t\t\t\t\twmv\nvideo/x-ms-wmx\t\t\t\t\twmx\nvideo/x-ms-wvx\t\t\t\t\twvx\nvideo/x-msvideo\t\t\t\t\tavi\nvideo/x-sgi-movie\t\t\t\tmovie\nvideo/x-smv\t\t\t\t\tsmv\nx-conference/x-cooltalk\t\t\t\tice\n";

const map = new Map();

mime_raw.split('\n').forEach((row) => {
	const match = /(.+?)\t+(.+)/.exec(row);
	if (!match) return;

	const type = match[1];
	const extensions = match[2].split(' ');

	extensions.forEach(ext => {
		map.set(ext, type);
	});
});

function lookup$1(file) {
	const match = /\.([^\.]+)$/.exec(file);
	return match && map.get(match[1]);
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control: 'no-cache'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const read = (file) => fs.readFileSync(path.resolve(build_dir, file));

	return (req, res, next) => {
		if (filter(req)) {
			const type = lookup$1(req.path);

			try {
				const file = decodeURIComponent(req.path.slice(1));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(...[
		process.env.SAPPER_EXPORT && '/svelma' || undefined,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	].filter(x => !!x))
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

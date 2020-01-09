'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
require('clipboard');
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
  __proto__: null,
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
  __proto__: null,
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
  __proto__: null,
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
  __proto__: null,
  get: get$2
});

function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function subscribe(store, callback) {
    const unsub = store.subscribe(callback);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function flush() {
    const seen_callbacks = new Set();
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components.length) {
            const component = dirty_components.shift();
            set_current_component(component);
            update(component.$$);
        }
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                callback();
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

const globals = (typeof window !== 'undefined' ? window : global);

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, classes_to_add) {
    const attributes = Object.assign({}, ...args);
    if (classes_to_add) {
        if (attributes.class == null) {
            attributes.class = classes_to_add;
        }
        else {
            attributes.class += ' ' + classes_to_add;
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += " " + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += " " + name;
        }
        else if (value != null) {
            str += " " + name + "=" + JSON.stringify(String(value)
                .replace(/"/g, '&#34;')
                .replace(/'/g, '&#39;'));
        }
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

/* Library/Server/Web/Data/Sites/svelma/src/components/Icon.svelte generated by Svelte v3.16.7 */

const Icon$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { type = "" } = $$props;
	let { pack = "fas" } = $$props;
	let { icon } = $$props;
	let { size = "" } = $$props;
	let { customClass = "" } = $$props;
	let { customSize = "" } = $$props;
	let { isClickable = false } = $$props;
	let { isRight = false } = $$props;
	let newCustomSize = "";
	let newType = "";
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.pack === void 0 && $$bindings.pack && pack !== void 0) $$bindings.pack(pack);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0) $$bindings.customClass(customClass);
	if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0) $$bindings.customSize(customSize);
	if ($$props.isClickable === void 0 && $$bindings.isClickable && isClickable !== void 0) $$bindings.isClickable(isClickable);
	if ($$props.isRight === void 0 && $$bindings.isRight && isRight !== void 0) $$bindings.isRight(isRight);
	let newPack = pack || "fas";

	 {
		{
			if (customSize) newCustomSize = customSize; else {
				switch (size) {
					case "is-small":
						break;
					case "is-medium":
						newCustomSize = "fa-lg";
						break;
					case "is-large":
						newCustomSize = "fa-3x";
						break;
					default:
						newCustomSize = "";
				}
			}
		}
	}

	 {
		{
			if (!type) newType = "";
			let splitType = [];

			if (typeof type === "string") {
				splitType = type.split("-");
			} else {
				for (let key in type) {
					if (type[key]) {
						splitType = key.split("-");
						break;
					}
				}
			}

			if (splitType.length <= 1) newType = ""; else newType = `has-text-${splitType[1]}`;
		}
	}

	return `<span class="${[
		"icon " + escape(size) + " " + escape(newType) + " " + escape(isRight && "is-right" || ""),
		isClickable ? "is-clickable" : ""
	].join(" ").trim()}">
  <i class="${escape(newPack) + " fa-" + escape(icon) + " " + escape(customClass) + " " + escape(newCustomSize)}"></i>
</span>`;
});

function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function blur(node, { delay = 0, duration = 400, easing = cubicInOut, amount = 5, opacity = 0 }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const f = style.filter === 'none' ? '' : style.filter;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `opacity: ${target_opacity - (od * u)}; filter: ${f} blur(${u * amount}px);`
    };
}
function fade(node, { delay = 0, duration = 400, easing = identity }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut }) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
        delay,
        duration,
        easing,
        css: t => `overflow: hidden;` +
            `opacity: ${Math.min(t * 20, 1) * opacity};` +
            `height: ${t * height}px;` +
            `padding-top: ${t * padding_top}px;` +
            `padding-bottom: ${t * padding_bottom}px;` +
            `margin-top: ${t * margin_top}px;` +
            `margin-bottom: ${t * margin_bottom}px;` +
            `border-top-width: ${t * border_top_width}px;` +
            `border-bottom-width: ${t * border_bottom_width}px;`
    };
}
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - (sd * u)});
			opacity: ${target_opacity - (od * u)}
		`
    };
}
function draw(node, { delay = 0, speed, duration, easing = cubicInOut }) {
    const len = node.getTotalLength();
    if (duration === undefined) {
        if (speed === undefined) {
            duration = 800;
        }
        else {
            duration = len / speed;
        }
    }
    else if (typeof duration === 'function') {
        duration = duration(len);
    }
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
    };
}
function crossfade(_a) {
    var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade(from, node, params) {
        const { delay = 0, duration = d => Math.sqrt(d) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        const opacity = +style.opacity;
        return {
            delay,
            duration: is_function(duration) ? duration(d) : duration,
            easing,
            css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
    }
    function transition(items, counterparts, intro) {
        return (node, params) => {
            items.set(params.key, {
                rect: node.getBoundingClientRect()
            });
            return () => {
                if (counterparts.has(params.key)) {
                    const { rect } = counterparts.get(params.key);
                    counterparts.delete(params.key);
                    return crossfade(rect, node, params);
                }
                // if the node is disappearing altogether
                // (i.e. wasn't claimed by the other list)
                // then we need to supply an outro
                items.delete(params.key);
                return fallback && fallback(node, params, intro);
            };
        };
    }
    return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
    ];
}

var transitions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  blur: blur,
  crossfade: crossfade,
  draw: draw,
  fade: fade,
  fly: fly,
  scale: scale,
  slide: slide
});

function chooseAnimation(animation) {
  return typeof animation === 'function' ? animation : transitions[animation]
}

function omit(obj, ...keysToOmit) {
  return Object.keys(obj).reduce((acc, key) => {
    if (keysToOmit.indexOf(key) === -1) acc[key] = obj[key];
    return acc
  }, {})
}

function typeToIcon(type) {
  switch (type) {
    case 'is-info':
      return 'info-circle'
    case 'is-success':
      return 'check-circle'
    case 'is-warning':
      return 'exclamation-triangle'
    case 'is-danger':
      return 'exclamation-circle'
    default:
      return null
  }
}

/* Library/Server/Web/Data/Sites/svelma/src/components/Button.svelte generated by Svelte v3.16.7 */

const Button$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { tag = "button" } = $$props;
	let { type = "" } = $$props;
	let { size = "" } = $$props;
	let { href = "" } = $$props;
	let { loading = false } = $$props;
	let { inverted = false } = $$props;
	let { outlined = false } = $$props;
	let { rounded = false } = $$props;
	let { iconLeft = null } = $$props;
	let { iconRight = null } = $$props;
	let { iconPack = null } = $$props;
	let iconSize = "";

	onMount(() => {
		if (!["button", "a"].includes(tag)) throw new Error(`'${tag}' cannot be used as a tag for a Bulma button`);
	});

	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
	if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0) $$bindings.inverted(inverted);
	if ($$props.outlined === void 0 && $$bindings.outlined && outlined !== void 0) $$bindings.outlined(outlined);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
	if ($$props.iconLeft === void 0 && $$bindings.iconLeft && iconLeft !== void 0) $$bindings.iconLeft(iconLeft);
	if ($$props.iconRight === void 0 && $$bindings.iconRight && iconRight !== void 0) $$bindings.iconRight(iconRight);
	if ($$props.iconPack === void 0 && $$bindings.iconPack && iconPack !== void 0) $$bindings.iconPack(iconPack);

	let props = {
		...omit($$props, "loading", "inverted", "outlined", "rounded"),
		class: `button ${type} ${size} ${$$props.class || ""}`
	};

	 {
		{
			if (!size || size === "is-medium") {
				iconSize = "is-small";
			} else if (size === "is-large") {
				iconSize = "is-medium";
			} else {
				iconSize = size;
			}
		}
	}

	return `${tag === "button"
	? `<button${spread([props], (inverted ? "is-inverted" : "") + " " + (loading ? "is-loading" : "") + " " + (outlined ? "is-outlined" : "") + " " + (rounded ? "is-rounded" : ""))}>
    ${iconLeft
		? `${validate_component(Icon$1, "Icon").$$render(
				$$result,
				{
					pack: iconPack,
					icon: iconLeft,
					size: iconSize
				},
				{},
				{}
			)}`
		: ``}
    <span>
      ${$$slots.default ? $$slots.default({}) : ``}
    </span>
    ${iconRight
		? `${validate_component(Icon$1, "Icon").$$render(
				$$result,
				{
					pack: iconPack,
					icon: iconRight,
					size: iconSize
				},
				{},
				{}
			)}`
		: ``}
  </button>`
	: `${tag === "a"
		? `<a${spread([{ href: escape(href) }, props], (inverted ? "is-inverted" : "") + " " + (loading ? "is-loading" : "") + " " + (outlined ? "is-outlined" : "") + " " + (rounded ? "is-rounded" : ""))}>
    ${iconLeft
			? `${validate_component(Icon$1, "Icon").$$render(
					$$result,
					{
						pack: iconPack,
						icon: iconLeft,
						size: iconSize
					},
					{},
					{}
				)}`
			: ``}
    <span>
      ${$$slots.default ? $$slots.default({}) : ``}
    </span>
    ${iconRight
			? `${validate_component(Icon$1, "Icon").$$render(
					$$result,
					{
						pack: iconPack,
						icon: iconRight,
						size: iconSize
					},
					{},
					{}
				)}`
			: ``}
  </a>`
		: ``}`}`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Collapse.svelte generated by Svelte v3.16.7 */

const Collapse$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { open = true } = $$props;
	let { animation = "slide" } = $$props;
	let _animation = transitions[animation];

	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0) $$bindings.animation(animation);

	_animation = typeof animation === "function"
	? animation
	: transitions[animation];

	return `<div class="${"collapse"}">
  <div class="${"collapse-trigger"}">
    ${$$slots.trigger ? $$slots.trigger({}) : ``}
  </div>
  ${open
	? `<div class="${"collapse-content"}">
      ${$$slots.default ? $$slots.default({}) : ``}
    </div>`
	: ``}
</div>`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Dialog/Dialog.svelte generated by Svelte v3.16.7 */

const css = {
	code: "@-webkit-keyframes svelte-fac1wo-spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes svelte-fac1wo-spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.dialog.svelte-fac1wo .modal-card.svelte-fac1wo{max-width:460px;width:auto}.dialog.svelte-fac1wo .modal-card .modal-card-head.svelte-fac1wo{font-size:1.25rem;font-weight:600}.dialog.svelte-fac1wo .modal-card .modal-card-body .field.svelte-fac1wo{margin-top:16px}.dialog.svelte-fac1wo .modal-card .modal-card-body.is-titleless.svelte-fac1wo{border-top-left-radius:6px;border-top-right-radius:6px}.dialog.svelte-fac1wo .modal-card .modal-card-foot.svelte-fac1wo{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.dialog.svelte-fac1wo .modal-card .modal-card-foot .button.svelte-fac1wo{display:inline;min-width:5em;font-weight:600}@media screen and (min-width: 769px), print{.dialog.svelte-fac1wo .modal-card.svelte-fac1wo{min-width:320px}}.dialog.is-small.svelte-fac1wo .modal-card.svelte-fac1wo,.dialog.is-small.svelte-fac1wo .input.svelte-fac1wo,.dialog.is-small.svelte-fac1wo .button.svelte-fac1wo{border-radius:2px;font-size:0.75rem}.dialog.is-medium.svelte-fac1wo .modal-card.svelte-fac1wo,.dialog.is-medium.svelte-fac1wo .input.svelte-fac1wo,.dialog.is-medium.svelte-fac1wo .button.svelte-fac1wo{font-size:1.25rem}.dialog.is-large.svelte-fac1wo .modal-card.svelte-fac1wo,.dialog.is-large.svelte-fac1wo .input.svelte-fac1wo,.dialog.is-large.svelte-fac1wo .button.svelte-fac1wo{font-size:1.5rem}",
	map: "{\"version\":3,\"file\":\"Dialog.svelte\",\"sources\":[\"Dialog.svelte\"],\"sourcesContent\":[\"<script>\\n  import { createEventDispatcher, onDestroy, onMount, tick } from 'svelte'\\n  import Icon from '../Icon.svelte'\\n  import { chooseAnimation, isEnterKey, isEscKey } from '../../utils'\\n  \\n  /** Show a header on the dialog with this text\\n   * @svelte-prop {String} [message]\\n   * */\\n  export let title = ''\\n\\n  /** Text or html message for this dialog\\n   * @svelte-prop {String} message\\n   * */\\n  export let message\\n\\n  /** Text to show on the confirmation button\\n   * @svelte-prop {String} [confirmText=OK]\\n   * */\\n  export let confirmText = 'OK'\\n\\n  /** Text to show on the cancel  button\\n   * @svelte-prop {String} [cancelText=Cancel]\\n   * */\\n  export let cancelText = 'Cancel'\\n\\n  /** Focus on confirm or cancel button when dialog opens\\n   * @svelte-prop {String} [focusOn=confirm]\\n   * @values <code>confirm</code>, <code>cancel</code>\\n   * */\\n  export let focusOn = 'confirm'\\n\\n  /** Show this icon on left-side of dialog. It will use the color from <code>type</code>\\n   * @svelte-prop {String} [icon]\\n   * */\\n  export let icon = ''\\n\\n  /** Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>\\n   * @svelte-prop {String} [iconPack]\\n   * @values <code>fas</code>, <code>fab</code>, etc...\\n   * */\\n  export let iconPack = ''\\n\\n  /** Show an input field\\n   * @svelte-prop {Boolean} [hasInput=false]\\n   * */\\n  export let hasInput = false\\n  \\n  export let prompt = null\\n\\n  /** Show the cancel button. True for <code>confirm()</code>\\n   * @svelte-prop {Boolean} [showCancel=false]\\n   * */\\n  export let showCancel = false\\n\\n  /** Dialog's size\\n   * @svelte-prop {String} [size]\\n   * @values $$sizes$$\\n   * */\\n  export let size = ''\\n\\n  /** Type (color) to use on confirm button and icon\\n   * @svelte-prop {String} [type=is-primary]\\n   * @values $$colors$$\\n   * */\\n  export let type = 'is-primary'\\n\\n  export let active = true\\n\\n  /** Animation to use when showing dialog\\n   * @svelte-prop {String|Function} [animation=scale]\\n   * @values Any transition name that ships with Svelte, or a custom function\\n   * */\\n  export let animation = 'scale'\\n\\n  /** Props to pass to animation function\\n   * @svelte-prop {Object} [animProps={ start: 1.2 }]\\n   * */\\n  export let animProps = { start: 1.2 }\\n\\n  /** Props (attributes) to use to on prompt input element\\n   * @svelte-prop {Object} [inputProps]\\n   * */\\n  export let inputProps = {}\\n\\n  // export let showClose = true\\n  let resolve\\n  export let promise = new Promise((fulfil) => (resolve = fulfil))\\n  \\n  // TODO: programmatic subcomponents\\n  export let subComponent = null\\n  export let appendToBody = true\\n\\n  let modal\\n  let cancelButton\\n  let confirmButton\\n  let input\\n  let validationMessage = ''\\n\\n  const dispatch = createEventDispatcher()\\n\\n  $: _animation = chooseAnimation(animation)\\n  $: {\\n    if (modal && active && appendToBody) {\\n      modal.parentNode.removeChild(modal)\\n      document.body.appendChild(modal)\\n    }\\n  }\\n  $: newInputProps = { required: true, ...inputProps }\\n\\n  onMount(async () => {\\n    await tick()\\n\\n    if (hasInput) {\\n      input.focus()\\n    } else if (focusOn === 'cancel' && showCancel) {\\n      cancelButton.focus()\\n    } else {\\n      confirmButton.focus()\\n    }\\n  })\\n\\n\\n  function cancel() {\\n    resolve(hasInput ? null : false)\\n    close()\\n  }\\n\\n  function close() {\\n    resolve(hasInput ? null : false)\\n    active = false\\n    dispatch('destroyed')\\n  }\\n\\n  async function confirm() {\\n    if (input && !input.checkValidity()) {\\n      validationMessage = input.validationMessage\\n\\n      await tick()\\n      input.select()\\n\\n      return\\n    }\\n\\n    validationMessage = ''\\n\\n    resolve(hasInput ? prompt: true)\\n    close()\\n  }\\n\\n  function keydown(e) {\\n    if (active && isEscKey(e)) {\\n      close()\\n    }\\n  }\\n</script>\\n\\n<style lang=\\\"scss\\\">@-webkit-keyframes spinAround {\\n  from {\\n    -webkit-transform: rotate(0deg);\\n            transform: rotate(0deg); }\\n  to {\\n    -webkit-transform: rotate(359deg);\\n            transform: rotate(359deg); } }\\n\\n@keyframes spinAround {\\n  from {\\n    -webkit-transform: rotate(0deg);\\n            transform: rotate(0deg); }\\n  to {\\n    -webkit-transform: rotate(359deg);\\n            transform: rotate(359deg); } }\\n\\n.dialog .modal-card {\\n  max-width: 460px;\\n  width: auto; }\\n  .dialog .modal-card .modal-card-head {\\n    font-size: 1.25rem;\\n    font-weight: 600; }\\n  .dialog .modal-card .modal-card-body .field {\\n    margin-top: 16px; }\\n  .dialog .modal-card .modal-card-body.is-titleless {\\n    border-top-left-radius: 6px;\\n    border-top-right-radius: 6px; }\\n  .dialog .modal-card .modal-card-foot {\\n    -webkit-box-pack: end;\\n        -ms-flex-pack: end;\\n            justify-content: flex-end; }\\n    .dialog .modal-card .modal-card-foot .button {\\n      display: inline;\\n      min-width: 5em;\\n      font-weight: 600; }\\n  @media screen and (min-width: 769px), print {\\n    .dialog .modal-card {\\n      min-width: 320px; } }\\n\\n.dialog.is-small .modal-card,\\n.dialog.is-small .input,\\n.dialog.is-small .button {\\n  border-radius: 2px;\\n  font-size: 0.75rem; }\\n\\n.dialog.is-medium .modal-card,\\n.dialog.is-medium .input,\\n.dialog.is-medium .button {\\n  font-size: 1.25rem; }\\n\\n.dialog.is-large .modal-card,\\n.dialog.is-large .input,\\n.dialog.is-large .button {\\n  font-size: 1.5rem; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2cuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUU7RUFDM0I7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUUsRUFBRTs7QUFKakM7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBRTtFQUMzQjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBRSxFQUFFOztBQUVqQztFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUU7RUFDYjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLGdCQUFnQixFQUFFO0VBQ3BCO0lBQ0UsMkJBQTJCO0lBQzNCLDRCQUE0QixFQUFFO0VBQ2hDO0lBQ0UscUJBQXlCO1FBQXpCLGtCQUF5QjtZQUF6Qix5QkFBeUIsRUFBRTtJQUMzQjtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0JBQWdCLEVBQUU7RUFDdEI7SUFDRTtNQUNFLGdCQUFnQixFQUFFLEVBQUU7O0FBRTFCOzs7RUFHRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUU7O0FBRXRCOzs7RUFHRSxrQkFBa0IsRUFBRTs7QUFFdEI7OztFQUdFLGlCQUFpQixFQUFFIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL0RpYWxvZy9EaWFsb2cuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzcGluQXJvdW5kIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7IH0gfVxuXG4uZGlhbG9nIC5tb2RhbC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0NjBweDtcbiAgd2lkdGg6IGF1dG87IH1cbiAgLmRpYWxvZyAubW9kYWwtY2FyZCAubW9kYWwtY2FyZC1oZWFkIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAuZGlhbG9nIC5tb2RhbC1jYXJkIC5tb2RhbC1jYXJkLWJvZHkgLmZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4OyB9XG4gIC5kaWFsb2cgLm1vZGFsLWNhcmQgLm1vZGFsLWNhcmQtYm9keS5pcy10aXRsZWxlc3Mge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4OyB9XG4gIC5kaWFsb2cgLm1vZGFsLWNhcmQgLm1vZGFsLWNhcmQtZm9vdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAgIC5kaWFsb2cgLm1vZGFsLWNhcmQgLm1vZGFsLWNhcmQtZm9vdCAuYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIG1pbi13aWR0aDogNWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCksIHByaW50IHtcbiAgICAuZGlhbG9nIC5tb2RhbC1jYXJkIHtcbiAgICAgIG1pbi13aWR0aDogMzIwcHg7IH0gfVxuXG4uZGlhbG9nLmlzLXNtYWxsIC5tb2RhbC1jYXJkLFxuLmRpYWxvZy5pcy1zbWFsbCAuaW5wdXQsXG4uZGlhbG9nLmlzLXNtYWxsIC5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTsgfVxuXG4uZGlhbG9nLmlzLW1lZGl1bSAubW9kYWwtY2FyZCxcbi5kaWFsb2cuaXMtbWVkaXVtIC5pbnB1dCxcbi5kaWFsb2cuaXMtbWVkaXVtIC5idXR0b24ge1xuICBmb250LXNpemU6IDEuMjVyZW07IH1cblxuLmRpYWxvZy5pcy1sYXJnZSAubW9kYWwtY2FyZCxcbi5kaWFsb2cuaXMtbGFyZ2UgLmlucHV0LFxuLmRpYWxvZy5pcy1sYXJnZSAuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9RGlhbG9nLnN2ZWx0ZS5jc3MubWFwICovIl19 */</style>\\n\\n<svelte:window on:keydown={keydown}></svelte:window>\\n<svelte:options accessors/>\\n\\n{#if active}\\n  <div class=\\\"modal dialog {size} is-active\\\" bind:this={modal}>\\n    <div class=\\\"modal-background\\\" on:click={close}></div>\\n    <div class=\\\"modal-card\\\" transition:_animation={animProps}>\\n      {#if title}\\n        <header class=\\\"modal-card-head\\\">\\n          <p class=\\\"modal-card-title\\\">{title}</p>\\n          <!-- NOTE: don't think we need this... -->\\n          <!-- {#if showClose}\\n            <button class=\\\"delete\\\" aria-label=\\\"close\\\" on:click={close}></button>\\n          {/if} -->\\n        </header>\\n      {/if}\\n      <section class=\\\"modal-card-body\\\" class:is-titleless={!title} class:is-flex={icon}>\\n        <div class=\\\"media\\\">\\n          {#if icon}\\n            <div class=\\\"media-left\\\">\\n              <Icon pack={iconPack} {icon} {type} size=\\\"is-large\\\"></Icon>\\n            </div>\\n          {/if}\\n          <div class=\\\"media-content\\\">\\n            <p>{@html message}</p>\\n\\n            {#if hasInput}\\n              <div class=\\\"field\\\">\\n                <div class=\\\"control\\\">\\n                  <input\\n                      bind:value={prompt}\\n                      class=\\\"input\\\"\\n                      bind:this={input}\\n                      {...newInputProps}\\n                      on:keyup={e => isEnterKey(e) && confirm()}>\\n                  <p class=\\\"help is-danger\\\">{validationMessage}</p>\\n                </div>\\n              </div>\\n            {/if}\\n          </div>\\n        </div>\\n      </section>\\n\\n      <footer class=\\\"modal-card-foot\\\">\\n        {#if showCancel}\\n          <button\\n              class=\\\"button\\\"\\n              bind:this={cancelButton}\\n              on:click={cancel}>\\n              {cancelText}\\n          </button>\\n        {/if}\\n        <button\\n            class=\\\"button {type}\\\"\\n            bind:this={confirmButton}\\n            on:click={confirm}>\\n            {confirmText}\\n        </button>\\n      </footer>\\n    </div>\\n  </div>\\n{/if}\"],\"names\":[],\"mappings\":\"AA4JmB,mBAAmB,wBAAW,CAAC,AAChD,IAAI,AAAC,CAAC,AACJ,iBAAiB,CAAE,OAAO,IAAI,CAAC,CACvB,SAAS,CAAE,OAAO,IAAI,CAAC,AAAE,CAAC,AACpC,EAAE,AAAC,CAAC,AACF,iBAAiB,CAAE,OAAO,MAAM,CAAC,CACzB,SAAS,CAAE,OAAO,MAAM,CAAC,AAAE,CAAC,AAAC,CAAC,AAE1C,WAAW,wBAAW,CAAC,AACrB,IAAI,AAAC,CAAC,AACJ,iBAAiB,CAAE,OAAO,IAAI,CAAC,CACvB,SAAS,CAAE,OAAO,IAAI,CAAC,AAAE,CAAC,AACpC,EAAE,AAAC,CAAC,AACF,iBAAiB,CAAE,OAAO,MAAM,CAAC,CACzB,SAAS,CAAE,OAAO,MAAM,CAAC,AAAE,CAAC,AAAC,CAAC,AAE1C,qBAAO,CAAC,WAAW,cAAC,CAAC,AACnB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,AAAE,CAAC,AACd,qBAAO,CAAC,WAAW,CAAC,gBAAgB,cAAC,CAAC,AACpC,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,AAAE,CAAC,AACrB,qBAAO,CAAC,WAAW,CAAC,gBAAgB,CAAC,MAAM,cAAC,CAAC,AAC3C,UAAU,CAAE,IAAI,AAAE,CAAC,AACrB,qBAAO,CAAC,WAAW,CAAC,gBAAgB,aAAa,cAAC,CAAC,AACjD,sBAAsB,CAAE,GAAG,CAC3B,uBAAuB,CAAE,GAAG,AAAE,CAAC,AACjC,qBAAO,CAAC,WAAW,CAAC,gBAAgB,cAAC,CAAC,AACpC,gBAAgB,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CACd,eAAe,CAAE,QAAQ,AAAE,CAAC,AACpC,qBAAO,CAAC,WAAW,CAAC,gBAAgB,CAAC,OAAO,cAAC,CAAC,AAC5C,OAAO,CAAE,MAAM,CACf,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,AAAE,CAAC,AACvB,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,EAAE,KAAK,AAAC,CAAC,AAC3C,qBAAO,CAAC,WAAW,cAAC,CAAC,AACnB,SAAS,CAAE,KAAK,AAAE,CAAC,AAAC,CAAC,AAE3B,OAAO,uBAAS,CAAC,yBAAW,CAC5B,OAAO,uBAAS,CAAC,oBAAM,CACvB,OAAO,uBAAS,CAAC,OAAO,cAAC,CAAC,AACxB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,OAAO,AAAE,CAAC,AAEvB,OAAO,wBAAU,CAAC,yBAAW,CAC7B,OAAO,wBAAU,CAAC,oBAAM,CACxB,OAAO,wBAAU,CAAC,OAAO,cAAC,CAAC,AACzB,SAAS,CAAE,OAAO,AAAE,CAAC,AAEvB,OAAO,uBAAS,CAAC,yBAAW,CAC5B,OAAO,uBAAS,CAAC,oBAAM,CACvB,OAAO,uBAAS,CAAC,OAAO,cAAC,CAAC,AACxB,SAAS,CAAE,MAAM,AAAE,CAAC\"}"
};

const Dialog$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title = "" } = $$props;
	let { message } = $$props;
	let { confirmText = "OK" } = $$props;
	let { cancelText = "Cancel" } = $$props;
	let { focusOn = "confirm" } = $$props;
	let { icon = "" } = $$props;
	let { iconPack = "" } = $$props;
	let { hasInput = false } = $$props;
	let { prompt = null } = $$props;
	let { showCancel = false } = $$props;
	let { size = "" } = $$props;
	let { type = "is-primary" } = $$props;
	let { active = true } = $$props;
	let { animation = "scale" } = $$props;
	let { animProps = { start: 1.2 } } = $$props;
	let { inputProps = {} } = $$props;
	let resolve;
	let { promise = new Promise(fulfil => resolve = fulfil) } = $$props;
	let { subComponent = null } = $$props;
	let { appendToBody = true } = $$props;
	let modal;
	let cancelButton;
	let confirmButton;
	let input;
	let validationMessage = "";
	const dispatch = createEventDispatcher();

	onMount(async () => {
		await tick();

		if (hasInput) {
			input.focus();
		} else if (focusOn === "cancel" && showCancel) {
			cancelButton.focus();
		} else {
			confirmButton.focus();
		}
	});

	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
	if ($$props.confirmText === void 0 && $$bindings.confirmText && confirmText !== void 0) $$bindings.confirmText(confirmText);
	if ($$props.cancelText === void 0 && $$bindings.cancelText && cancelText !== void 0) $$bindings.cancelText(cancelText);
	if ($$props.focusOn === void 0 && $$bindings.focusOn && focusOn !== void 0) $$bindings.focusOn(focusOn);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.iconPack === void 0 && $$bindings.iconPack && iconPack !== void 0) $$bindings.iconPack(iconPack);
	if ($$props.hasInput === void 0 && $$bindings.hasInput && hasInput !== void 0) $$bindings.hasInput(hasInput);
	if ($$props.prompt === void 0 && $$bindings.prompt && prompt !== void 0) $$bindings.prompt(prompt);
	if ($$props.showCancel === void 0 && $$bindings.showCancel && showCancel !== void 0) $$bindings.showCancel(showCancel);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
	if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0) $$bindings.animation(animation);
	if ($$props.animProps === void 0 && $$bindings.animProps && animProps !== void 0) $$bindings.animProps(animProps);
	if ($$props.inputProps === void 0 && $$bindings.inputProps && inputProps !== void 0) $$bindings.inputProps(inputProps);
	if ($$props.promise === void 0 && $$bindings.promise && promise !== void 0) $$bindings.promise(promise);
	if ($$props.subComponent === void 0 && $$bindings.subComponent && subComponent !== void 0) $$bindings.subComponent(subComponent);
	if ($$props.appendToBody === void 0 && $$bindings.appendToBody && appendToBody !== void 0) $$bindings.appendToBody(appendToBody);
	$$result.css.add(css);
	let _animation = chooseAnimation(animation);

	let newInputProps = { required: true, ...inputProps };

	return `


${active
	? `<div class="${"modal dialog " + escape(size) + " is-active" + " svelte-fac1wo"}"${add_attribute("this", modal, 1)}>
    <div class="${"modal-background"}"></div>
    <div class="${"modal-card svelte-fac1wo"}">
      ${title
		? `<header class="${"modal-card-head svelte-fac1wo"}">
          <p class="${"modal-card-title"}">${escape(title)}</p>
          
          
        </header>`
		: ``}
      <section class="${[
			"modal-card-body svelte-fac1wo",
			(!title ? "is-titleless" : "") + " " + (icon ? "is-flex" : "")
		].join(" ").trim()}">
        <div class="${"media"}">
          ${icon
		? `<div class="${"media-left"}">
              ${validate_component(Icon$1, "Icon").$$render(
				$$result,
				{
					pack: iconPack,
					icon,
					type,
					size: "is-large"
				},
				{},
				{}
			)}
            </div>`
		: ``}
          <div class="${"media-content"}">
            <p>${message}</p>

            ${hasInput
		? `<div class="${"field svelte-fac1wo"}">
                <div class="${"control"}">
                  <input${spread([{ class: "input" }, newInputProps], "svelte-fac1wo")}${add_attribute("value", prompt, 1)}${add_attribute("this", input, 1)}>
                  <p class="${"help is-danger"}">${escape(validationMessage)}</p>
                </div>
              </div>`
		: ``}
          </div>
        </div>
      </section>

      <footer class="${"modal-card-foot svelte-fac1wo"}">
        ${showCancel
		? `<button class="${"button svelte-fac1wo"}"${add_attribute("this", cancelButton, 1)}>
              ${escape(cancelText)}
          </button>`
		: ``}
        <button class="${"button " + escape(type) + " svelte-fac1wo"}"${add_attribute("this", confirmButton, 1)}>
            ${escape(confirmText)}
        </button>
      </footer>
    </div>
  </div>`
	: ``}`;
});

function createDialog(props) {
  if (typeof props === 'string') props = { message: props };

  const dialog = new Dialog$1({
    target: document.body,
    props,
    intro: true,
  });

  dialog.$on('destroy', () => {
  });

  return dialog.promise
}

function alert(props) {
  return createDialog(props);
}

function confirm(props) {
  if (typeof props === 'string') props = { message: props };

  return createDialog({ showCancel: true, ...props });
}

function prompt(props) {
  if (typeof props === 'string') props = { message: props };

  return createDialog({ hasInput: true, confirmText: 'Done', ...props });
}

Dialog$1.alert = alert;
Dialog$1.confirm = confirm;
Dialog$1.prompt = prompt;

/* Library/Server/Web/Data/Sites/svelma/src/components/Field.svelte generated by Svelte v3.16.7 */

const Field$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { label = null } = $$props;
	let { type = "" } = $$props;
	let { message = "" } = $$props;
	let { labelFor = "" } = $$props;
	setContext("type", () => type);
	let hasIcons = false;
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
	if ($$props.labelFor === void 0 && $$bindings.labelFor && labelFor !== void 0) $$bindings.labelFor(labelFor);

	 {
		{
			if (["is-danger", "is-success"].includes(type)) {
				hasIcons = true;
			}
		}
	}

	let props = { ...omit($$props, "class") };

	return `<div${spread([
		props,
		{
			class: "field " + escape(type) + " " + escape($$props.class || "")
		},
		{ "has-icons-right": escape(hasIcons) }
	])}>
  ${label
	? `<label${add_attribute("for", labelFor, 0)} class="${"label"}">${escape(label)}</label>`
	: ``}
  ${$$slots.default
	? $$slots.default({ statusType: type })
	: ``}
  ${message
	? `<p class="${"help " + escape(type)}">${escape(message)}</p>`
	: ``}
</div>`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Input.svelte generated by Svelte v3.16.7 */

const css$1 = {
	code: ".control.svelte-nhop5 .help.counter.svelte-nhop5{float:right;margin-left:0.5em}",
	map: "{\"version\":3,\"file\":\"Input.svelte\",\"sources\":[\"Input.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onMount, getContext, tick } from 'svelte'\\n  import { omit } from '../utils'\\n  import Icon from './Icon.svelte'\\n\\n  /** Binding value\\n   * @svelte-prop {String|Number} [value]\\n   * */\\n  export let value = ''\\n\\n  /** Input type, or <code>textarea</code>\\n   * @svelte-prop {String} [type=text]\\n   * @values Any native type, <code>textarea</code>\\n   * */\\n  export let type = 'text'\\n\\n  /** Size of input\\n   * @svelte-prop {String} [size]\\n   * @values $$sizes$$\\n   * */\\n  export let size = ''\\n\\n  /** Show the password reveal toggle button\\n   * @svelte-prop {boolean} [passwordReveal]\\n   * */\\n  export let passwordReveal = false\\n\\n  /** Set input maxlength and show a counter\\n   * @svelte-prop {Number} [maxlength]\\n   * */\\n  export let maxlength = null\\n\\n  /** Show the character counter when <code>maxlength<code> is set\\n   * @svelte-prop {boolean} [hasCounter=true]\\n   * */\\n  export let hasCounter = true\\n\\n  /** Show loading indicator\\n   * @svelte-prop {boolean} [loading=false]\\n   * */\\n  export let loading = false\\n\\n  /** Input is disabled\\n   * @svelte-prop {boolean} [disabled=false]\\n   * */\\n  export let disabled = false\\n\\n  let input\\n  let isFocused\\n  let isPasswordVisible = false\\n  let newType = 'text'\\n  let statusType = ''\\n  let statusTypeIcon = ''\\n  let valueLength = null\\n\\n  const getType = getContext('type')\\n  if (getType) statusType = getType() || ''\\n\\n  $: props = {\\n    ...omit($$props, 'class', 'value', 'type', 'size', 'passwordReveal', 'hasCounter', 'loading', 'disabled'),\\n  }\\n  $: hasIconRight = passwordReveal || loading || statusType\\n  $: passwordVisibleIcon = isPasswordVisible ? 'eye-slash' : 'eye'\\n  $: {\\n    switch (statusType) {\\n      case 'is-success':\\n        statusTypeIcon = 'check'\\n        break\\n      case 'is-danger':\\n        statusTypeIcon = 'exclamation-circle'\\n        break\\n      case 'is-info':\\n        statusTypeIcon = 'info-circle'\\n        break\\n      case 'is-warning':\\n        statusTypeIcon = 'exclamation-triangle'\\n        break\\n    }\\n  }\\n  $: {\\n    if (typeof value === 'string') {\\n      valueLength = value.length\\n    } else if (typeof value === 'number') {\\n      valueLength = value.toString().length\\n    } else {\\n      valueLength = 0\\n    }\\n  }\\n\\n  onMount(() => {\\n    newType = type\\n  })\\n\\n  async function togglePasswordVisibility() {\\n    isPasswordVisible = !isPasswordVisible\\n    newType = isPasswordVisible ? 'text' : 'password'\\n    await tick()\\n    input.focus()\\n  }\\n\\n  const onInput = e => {\\n    value = e.target.value\\n    $$props.value = value\\n  }\\n  const onFocus = () => (isFocused = true)\\n  const onBlur = () => (isFocused = false)\\n</script>\\n\\n<style>\\n  .control .help.counter {\\n    float: right;\\n    margin-left: 0.5em;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0lucHV0LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL0lucHV0LnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuY29udHJvbCAuaGVscC5jb3VudGVyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICB9XG4iXX0= */</style>\\n\\n<div class=\\\"control\\\" class:has-icons-right={hasIconRight} class:is-loading={loading}>\\n\\n  {#if type !== 'textarea'}\\n    <input\\n      {...props}\\n      type={newType}\\n      {value}\\n      class=\\\"input {statusType}\\n      {size}\\n      {$$props.class || ''}\\\"\\n      bind:this={input}\\n      on:input={onInput}\\n      on:focus={onFocus}\\n      on:blur={onBlur}\\n      {disabled} />\\n  {:else}\\n    <textarea\\n      {...props}\\n      {value}\\n      class=\\\"textarea {statusType}\\n      {size}\\\"\\n      bind:this={input}\\n      on:input={onInput}\\n      on:focus={onFocus}\\n      on:blur={onBlur}\\n      {disabled} />\\n  {/if}\\n\\n  {#if !loading && (passwordReveal || statusType)}\\n    <!-- pack={iconPack}\\n    size={iconSize} -->\\n    <Icon\\n      pack=\\\"fas\\\"\\n      isRight={true}\\n      isClickable={passwordReveal}\\n      icon={passwordReveal ? passwordVisibleIcon : statusTypeIcon}\\n      type={!passwordReveal ? statusType : 'is-primary'}\\n      on:click={togglePasswordVisibility} />\\n  {/if}\\n\\n  {#if maxlength && hasCounter && type !== 'number'}\\n    <small class=\\\"help counter\\\" class:is-invisible={!isFocused}>{valueLength} / {maxlength}</small>\\n  {/if}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA6GE,qBAAQ,CAAC,KAAK,QAAQ,aAAC,CAAC,AACtB,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,KAAK,AACpB,CAAC\"}"
};

const Input$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { value = "" } = $$props;
	let { type = "text" } = $$props;
	let { size = "" } = $$props;
	let { passwordReveal = false } = $$props;
	let { maxlength = null } = $$props;
	let { hasCounter = true } = $$props;
	let { loading = false } = $$props;
	let { disabled = false } = $$props;
	let input;
	let newType = "text";
	let statusType = "";
	let statusTypeIcon = "";
	let valueLength = null;
	const getType = getContext("type");
	if (getType) statusType = getType() || "";

	onMount(() => {
		newType = type;
	});
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.passwordReveal === void 0 && $$bindings.passwordReveal && passwordReveal !== void 0) $$bindings.passwordReveal(passwordReveal);
	if ($$props.maxlength === void 0 && $$bindings.maxlength && maxlength !== void 0) $$bindings.maxlength(maxlength);
	if ($$props.hasCounter === void 0 && $$bindings.hasCounter && hasCounter !== void 0) $$bindings.hasCounter(hasCounter);
	if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
	$$result.css.add(css$1);

	let props = {
		...omit($$props, "class", "value", "type", "size", "passwordReveal", "hasCounter", "loading", "disabled")
	};

	let hasIconRight = passwordReveal || loading || statusType;
	let passwordVisibleIcon =  "eye";

	 {
		{
			switch (statusType) {
				case "is-success":
					statusTypeIcon = "check";
					break;
				case "is-danger":
					statusTypeIcon = "exclamation-circle";
					break;
				case "is-info":
					statusTypeIcon = "info-circle";
					break;
				case "is-warning":
					statusTypeIcon = "exclamation-triangle";
					break;
			}
		}
	}

	 {
		{
			if (typeof value === "string") {
				valueLength = value.length;
			} else if (typeof value === "number") {
				valueLength = value.toString().length;
			} else {
				valueLength = 0;
			}
		}
	}

	return `<div class="${[
		"control svelte-nhop5",
		(hasIconRight ? "has-icons-right" : "") + " " + (loading ? "is-loading" : "")
	].join(" ").trim()}">

  ${type !== "textarea"
	? `<input${spread(
			[
				props,
				{ type: escape(newType) },
				{ value: escape(value) },
				{
					class: "input " + escape(statusType) + "\n      " + escape(size) + "\n      " + escape($$props.class || "")
				},
				{ disabled: disabled || null }
			],
			"svelte-nhop5"
		)}${add_attribute("this", input, 1)}>`
	: `<textarea${spread(
			[
				props,
				{
					class: "textarea " + escape(statusType) + "\n      " + escape(size)
				},
				{ disabled: disabled || null }
			],
			"svelte-nhop5"
		)}${add_attribute("this", input, 1)}>${escape(value)}</textarea>`}

  ${!loading && (passwordReveal || statusType)
	? `
    ${validate_component(Icon$1, "Icon").$$render(
			$$result,
			{
				pack: "fas",
				isRight: true,
				isClickable: passwordReveal,
				icon: passwordReveal ? passwordVisibleIcon : statusTypeIcon,
				type: !passwordReveal ? statusType : "is-primary"
			},
			{},
			{}
		)}`
	: ``}

  ${maxlength && hasCounter && type !== "number"
	? `<small class="${["help counter svelte-nhop5",  "is-invisible" ].join(" ").trim()}">${escape(valueLength)} / ${escape(maxlength)}</small>`
	: ``}
</div>`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Message.svelte generated by Svelte v3.16.7 */

const css$2 = {
	code: ".message-header.svelte-1eemcsd.svelte-1eemcsd{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.message.svelte-1eemcsd .media.svelte-1eemcsd{padding-top:0;border:0}",
	map: "{\"version\":3,\"file\":\"Message.svelte\",\"sources\":[\"Message.svelte\"],\"sourcesContent\":[\"<script>\\n  import { createEventDispatcher } from 'svelte';\\n  import { fade } from 'svelte/transition'\\n  import Icon from './Icon.svelte'\\n\\n  export let type = ''\\n  export let active = true\\n  export let title = ''\\n  export let showClose = true\\n  export let autoClose = false\\n  export let duration = 5000\\n  export let size = ''\\n  export let iconSize = ''\\n  export let ariaCloseLabel = 'delete'\\n\\n  let icon\\n\\n  const dispatch = createEventDispatcher()\\n\\n  if (autoClose) {\\n    setTimeout(() => {\\n      close = true\\n    }, duration)\\n  }\\n\\n  $: newIconSize = iconSize || size || 'is-large'\\n\\n  $: {\\n    switch (type) {\\n      case 'is-info':\\n        icon = 'info-circle'\\n        break\\n      case 'is-success':\\n        icon = 'check-circle'\\n        break\\n      case 'is-warning':\\n        icon = 'exclamation-triangle'\\n        break\\n      case 'is-danger':\\n        icon = 'exclamation-circle'\\n        break\\n      default:\\n        icon = null\\n    }\\n  }\\n\\n  function close() {\\n    active = false\\n    dispatch('close', active)\\n  }\\n</script>\\n\\n<style>\\n  .message-header {\\n    -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n            justify-content: space-between;\\n  }\\n\\n  .message .media {\\n    padding-top: 0;\\n    border: 0;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2Uuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLHlCQUE4QjtRQUE5QixzQkFBOEI7WUFBOUIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsY0FBYztJQUNkLFNBQVM7RUFDWCIsImZpbGUiOiIuLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAubWVzc2FnZS1oZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5tZXNzYWdlIC5tZWRpYSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4iXX0= */</style>\\n\\n{#if active}\\n  <article class=\\\"message {type} {size}\\\" transition:fade|local>\\n    {#if title || showClose}\\n      <div class=\\\"message-header\\\">\\n        {#if title}\\n          <p>{title}</p>\\n        {/if}\\n        {#if showClose}\\n          <button class=\\\"delete\\\" aria-label=\\\"ariaCloseLabel\\\" on:click={close} />\\n        {/if}\\n      </div>\\n    {/if}\\n    <section class=\\\"message-body\\\">\\n      <div class=\\\"media\\\">\\n        {#if icon}\\n          <div class=\\\"media-left\\\">\\n            <Icon {icon} size={newIconSize} />\\n          </div>\\n        {/if}\\n        <div class=\\\"media-content\\\">\\n          <slot />\\n        </div>\\n      </div>\\n    </section>\\n  </article>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAqDE,eAAe,8BAAC,CAAC,AACf,gBAAgB,CAAE,OAAO,CACrB,aAAa,CAAE,OAAO,CAClB,eAAe,CAAE,aAAa,AACxC,CAAC,AAED,uBAAQ,CAAC,MAAM,eAAC,CAAC,AACf,WAAW,CAAE,CAAC,CACd,MAAM,CAAE,CAAC,AACX,CAAC\"}"
};

const Message$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { type = "" } = $$props;
	let { active = true } = $$props;
	let { title = "" } = $$props;
	let { showClose = true } = $$props;
	let { autoClose = false } = $$props;
	let { duration = 5000 } = $$props;
	let { size = "" } = $$props;
	let { iconSize = "" } = $$props;
	let { ariaCloseLabel = "delete" } = $$props;
	let icon;
	const dispatch = createEventDispatcher();

	if (autoClose) {
		setTimeout(
			() => {
			},
			duration
		);
	}

	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.showClose === void 0 && $$bindings.showClose && showClose !== void 0) $$bindings.showClose(showClose);
	if ($$props.autoClose === void 0 && $$bindings.autoClose && autoClose !== void 0) $$bindings.autoClose(autoClose);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0) $$bindings.iconSize(iconSize);
	if ($$props.ariaCloseLabel === void 0 && $$bindings.ariaCloseLabel && ariaCloseLabel !== void 0) $$bindings.ariaCloseLabel(ariaCloseLabel);
	$$result.css.add(css$2);
	let newIconSize = iconSize || size || "is-large";

	 {
		{
			switch (type) {
				case "is-info":
					icon = "info-circle";
					break;
				case "is-success":
					icon = "check-circle";
					break;
				case "is-warning":
					icon = "exclamation-triangle";
					break;
				case "is-danger":
					icon = "exclamation-circle";
					break;
				default:
					icon = null;
			}
		}
	}

	return `${active
	? `<article class="${"message " + escape(type) + " " + escape(size) + " svelte-1eemcsd"}">
    ${title || showClose
		? `<div class="${"message-header svelte-1eemcsd"}">
        ${title ? `<p>${escape(title)}</p>` : ``}
        ${showClose
			? `<button class="${"delete"}" aria-label="${"ariaCloseLabel"}"></button>`
			: ``}
      </div>`
		: ``}
    <section class="${"message-body"}">
      <div class="${"media svelte-1eemcsd"}">
        ${icon
		? `<div class="${"media-left"}">
            ${validate_component(Icon$1, "Icon").$$render($$result, { icon, size: newIconSize }, {}, {})}
          </div>`
		: ``}
        <div class="${"media-content"}">
          ${$$slots.default ? $$slots.default({}) : ``}
        </div>
      </div>
    </section>
  </article>`
	: ``}`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Modal/Modal.svelte generated by Svelte v3.16.7 */

const Modal$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { active = true } = $$props;
	let { animation = "scale" } = $$props;
	let { animProps = { start: 1.2 } } = $$props;
	let { size = "" } = $$props;
	let { showClose = true } = $$props;
	let { subComponent = null } = $$props;
	let { onBody = true } = $$props;
	let modal;

	onMount(() => {
		
	});

	if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
	if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0) $$bindings.animation(animation);
	if ($$props.animProps === void 0 && $$bindings.animProps && animProps !== void 0) $$bindings.animProps(animProps);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.showClose === void 0 && $$bindings.showClose && showClose !== void 0) $$bindings.showClose(showClose);
	if ($$props.subComponent === void 0 && $$bindings.subComponent && subComponent !== void 0) $$bindings.subComponent(subComponent);
	if ($$props.onBody === void 0 && $$bindings.onBody && onBody !== void 0) $$bindings.onBody(onBody);
	let _animation = chooseAnimation(animation);

	return `

${active
	? `<div class="${"modal " + escape(size) + " is-active"}"${add_attribute("this", modal, 1)}>
    <div class="${"modal-background"}"></div>
    <div class="${"modal-content"}"> 
      ${$$slots.default ? $$slots.default({}) : ``}
      <div class="${"sub-component"}"></div>
    </div>
    ${showClose
		? `<button class="${"modal-close is-large"}" aria-label="${"close"}"></button>`
		: ``}
  </div>`
	: ``}`;
});

Modal$1.open = open;

function open(props) {
  const modal = new Modal$1({
    target: document.body,
    props,
    intro: true
  });

  modal.close = () => modal.$destroy();

  return modal;
}

/* Library/Server/Web/Data/Sites/svelma/src/components/Notice.svelte generated by Svelte v3.16.7 */

const css$3 = {
	code: ".notice{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;pointer-events:auto}.notice.is-top,.notice.is-bottom{-ms-flex-item-align:center;align-self:center}.notice.is-top-left,.notice.is-bottom-left{-ms-flex-item-align:start;align-self:flex-start}.notice.is-top-right,.notice.is-bottom-right{-ms-flex-item-align:end;align-self:flex-end}.notices{position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;padding:3em;z-index:1000;pointer-events:none;display:-webkit-box;display:-ms-flexbox;display:flex}.notices[class*=is-top]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.notices[class*=is-bottom]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.notices [class*='has-background-'] .text{color:transparent !important;-webkit-filter:invert(1) brightness(2.5) grayscale(1) contrast(9);filter:invert(1) brightness(2.5) grayscale(1) contrast(9);background:inherit;background-clip:text !important;-webkit-background-clip:text !important}",
	map: "{\"version\":3,\"file\":\"Notice.svelte\",\"sources\":[\"Notice.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export function filterProps(props) {\\n    const { active, type, position, duration } = props\\n    return { active, type, position, duration }\\n  }\\n  export const notices = {}\\n</script>\\n\\n<script>\\n  import { createEventDispatcher, onDestroy, onMount } from 'svelte'\\n  import { fly, fade } from 'svelte/transition'\\n\\n  const dispatch = createEventDispatcher()\\n\\n  export let active = true\\n  export let type = 'is-dark'\\n  export let position = 'is-top'\\n  export let duration = 2000\\n  export let transitionOut = true\\n\\n  let el\\n  let parent\\n  let timer\\n  const div = () => document.createElement('div')\\n\\n  $: transitionY = ~position.indexOf('is-top') ? -200 : 200\\n\\n  export function close() {\\n    active = false\\n  }\\n\\n  function remove() {\\n    clearTimeout(timer)\\n\\n    // Just making sure\\n    active = false\\n\\n    dispatch('destroyed')\\n  }\\n\\n  function setupContainers() {\\n    if (!notices.topLeft) {\\n      notices.topLeft = div()\\n      notices.topLeft.className = 'notices is-top-left'\\n      document.body.appendChild(notices.topLeft)\\n    }\\n    if (!notices.top) {\\n      notices.top = div()\\n      notices.top.className = 'notices is-top'\\n      document.body.appendChild(notices.top)\\n    }\\n    if (!notices.topRight) {\\n      notices.topRight = div()\\n      notices.topRight.className = 'notices is-top-right'\\n      document.body.appendChild(notices.topRight)\\n    }\\n    if (!notices.bottomRight) {\\n      notices.bottomRight = div()\\n      notices.bottomRight.className = 'notices is-bottom-right'\\n      document.body.appendChild(notices.bottomRight)\\n    }\\n    if (!notices.bottom) {\\n      notices.bottom = div()\\n      notices.bottom.className = 'notices is-bottom'\\n      document.body.appendChild(notices.bottom)\\n    }\\n    if (!notices.bottomLeft) {\\n      notices.bottomLeft = div()\\n      notices.bottomLeft.className = 'notices is-bottom-left'\\n      document.body.appendChild(notices.bottomLeft)\\n    }\\n  }\\n\\n  function chooseParent() {\\n    let div, divName = position.replace('is-', '').replace(/-([a-z])/g, g => g[1].toUpperCase() )\\n    console.log(divName)\\n    if(div = notices[divName]) div.insertAdjacentElement('afterbegin', el)\\n  }\\n\\n  onMount(() => {\\n    setupContainers()\\n    chooseParent()\\n\\n    timer = setTimeout(() => {\\n      close()\\n    }, duration)\\n  })\\n</script>\\n\\n<style lang=\\\"scss\\\">:global(.notice) {\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  pointer-events: auto; }\\n  :global(.notice).is-top, :global(.notice).is-bottom {\\n    -ms-flex-item-align: center;\\n        align-self: center; }\\n  :global(.notice).is-top-left, :global(.notice).is-bottom-left {\\n    -ms-flex-item-align: start;\\n        align-self: flex-start; }\\n  :global(.notice).is-top-right, :global(.notice).is-bottom-right {\\n    -ms-flex-item-align: end;\\n        align-self: flex-end; }\\n\\n:global(.notices) {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  overflow: hidden;\\n  padding: 3em;\\n  z-index: 1000;\\n  pointer-events: none;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n  :global(.notices)[class*=is-top] {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; }\\n  :global(.notices)[class*=is-bottom] {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: reverse;\\n        -ms-flex-direction: column-reverse;\\n            flex-direction: column-reverse; }\\n  :global(.notices) [class*='has-background-'] .text {\\n    color: transparent !important;\\n    -webkit-filter: invert(1) brightness(2.5) grayscale(1) contrast(9);\\n            filter: invert(1) brightness(2.5) grayscale(1) contrast(9);\\n    background: inherit;\\n    background-clip: text !important;\\n    -webkit-background-clip: text !important; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL05vdGljZS5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBb0I7RUFBcEIsMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLDJCQUFrQjtRQUFsQixrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLDBCQUFzQjtRQUF0QixzQkFBc0IsRUFBRTtFQUMxQjtJQUNFLHdCQUFvQjtRQUFwQixvQkFBb0IsRUFBRTs7QUFFMUI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYSxFQUFFO0VBQ2Y7SUFDRSw0QkFBc0I7SUFBdEIsNkJBQXNCO1FBQXRCLDBCQUFzQjtZQUF0QixzQkFBc0IsRUFBRTtFQUMxQjtJQUNFLDRCQUE4QjtJQUE5Qiw4QkFBOEI7UUFBOUIsa0NBQThCO1lBQTlCLDhCQUE4QixFQUFFO0VBQ2xDO0lBQ0UsNkJBQTZCO0lBQzdCLGtFQUEwRDtZQUExRCwwREFBMEQ7SUFDMUQsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyx3Q0FBd0MsRUFBRSIsImZpbGUiOiIuLi9zcmMvY29tcG9uZW50cy9Ob3RpY2Uuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiOmdsb2JhbCgubm90aWNlKSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICA6Z2xvYmFsKC5ub3RpY2UpLmlzLXRvcCwgOmdsb2JhbCgubm90aWNlKS5pcy1ib3R0b20ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxuICA6Z2xvYmFsKC5ub3RpY2UpLmlzLXRvcC1sZWZ0LCA6Z2xvYmFsKC5ub3RpY2UpLmlzLWJvdHRvbS1sZWZ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XG4gIDpnbG9iYWwoLm5vdGljZSkuaXMtdG9wLXJpZ2h0LCA6Z2xvYmFsKC5ub3RpY2UpLmlzLWJvdHRvbS1yaWdodCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IH1cblxuOmdsb2JhbCgubm90aWNlcykge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogM2VtO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDsgfVxuICA6Z2xvYmFsKC5ub3RpY2VzKVtjbGFzcyo9aXMtdG9wXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICA6Z2xvYmFsKC5ub3RpY2VzKVtjbGFzcyo9aXMtYm90dG9tXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlOyB9XG4gIDpnbG9iYWwoLm5vdGljZXMpIFtjbGFzcyo9J2hhcy1iYWNrZ3JvdW5kLSddIC50ZXh0IHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBmaWx0ZXI6IGludmVydCgxKSBicmlnaHRuZXNzKDIuNSkgZ3JheXNjYWxlKDEpIGNvbnRyYXN0KDkpO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0ICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQgIWltcG9ydGFudDsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1Ob3RpY2Uuc3ZlbHRlLmNzcy5tYXAgKi8iXX0= */</style>\\n\\n{#if active}\\n  <div\\n    class=\\\"notice {position}\\\"\\n    aria-hidden={!active}\\n    in:fly={{ y: transitionY }}\\n    out:fade={{ duration: transitionOut ? 400 : 0 }}\\n    on:outroend={remove}\\n    bind:this={el}>\\n\\n    <slot />\\n  </div>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAyF2B,OAAO,AAAE,CAAC,AACnC,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,WAAW,CACpB,cAAc,CAAE,IAAI,AAAE,CAAC,AACf,OAAO,AAAC,OAAO,CAAU,OAAO,AAAC,UAAU,AAAC,CAAC,AACnD,mBAAmB,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,AAAE,CAAC,AACnB,OAAO,AAAC,YAAY,CAAU,OAAO,AAAC,eAAe,AAAC,CAAC,AAC7D,mBAAmB,CAAE,KAAK,CACtB,UAAU,CAAE,UAAU,AAAE,CAAC,AACvB,OAAO,AAAC,aAAa,CAAU,OAAO,AAAC,gBAAgB,AAAC,CAAC,AAC/D,mBAAmB,CAAE,GAAG,CACpB,UAAU,CAAE,QAAQ,AAAE,CAAC,AAEvB,QAAQ,AAAE,CAAC,AACjB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,AAAE,CAAC,AACR,QAAQ,AAAC,CAAC,KAAK,EAAE,MAAM,CAAC,AAAC,CAAC,AAChC,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,AAAE,CAAC,AAC3B,QAAQ,AAAC,CAAC,KAAK,EAAE,SAAS,CAAC,AAAC,CAAC,AACnC,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,OAAO,CAC1B,kBAAkB,CAAE,cAAc,CAC9B,cAAc,CAAE,cAAc,AAAE,CAAC,AACnC,QAAQ,AAAC,CAAC,CAAC,KAAK,EAAE,iBAAiB,CAAC,CAAC,KAAK,AAAC,CAAC,AAClD,KAAK,CAAE,WAAW,CAAC,UAAU,CAC7B,cAAc,CAAE,OAAO,CAAC,CAAC,CAAC,WAAW,GAAG,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC,SAAS,CAAC,CAAC,CAC1D,MAAM,CAAE,OAAO,CAAC,CAAC,CAAC,WAAW,GAAG,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC,SAAS,CAAC,CAAC,CAClE,UAAU,CAAE,OAAO,CACnB,eAAe,CAAE,IAAI,CAAC,UAAU,CAChC,uBAAuB,CAAE,IAAI,CAAC,UAAU,AAAE,CAAC\"}"
};

function filterProps(props) {
	const { active, type, position, duration } = props;
	return { active, type, position, duration };
}

const notices = {};

const Notice$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const dispatch = createEventDispatcher();
	let { active = true } = $$props;
	let { type = "is-dark" } = $$props;
	let { position = "is-top" } = $$props;
	let { duration = 2000 } = $$props;
	let { transitionOut = true } = $$props;
	let el;
	let timer;
	const div = () => document.createElement("div");

	function close() {
		active = false;
	}

	function setupContainers() {
		if (!notices.topLeft) {
			notices.topLeft = div();
			notices.topLeft.className = "notices is-top-left";
			document.body.appendChild(notices.topLeft);
		}

		if (!notices.top) {
			notices.top = div();
			notices.top.className = "notices is-top";
			document.body.appendChild(notices.top);
		}

		if (!notices.topRight) {
			notices.topRight = div();
			notices.topRight.className = "notices is-top-right";
			document.body.appendChild(notices.topRight);
		}

		if (!notices.bottomRight) {
			notices.bottomRight = div();
			notices.bottomRight.className = "notices is-bottom-right";
			document.body.appendChild(notices.bottomRight);
		}

		if (!notices.bottom) {
			notices.bottom = div();
			notices.bottom.className = "notices is-bottom";
			document.body.appendChild(notices.bottom);
		}

		if (!notices.bottomLeft) {
			notices.bottomLeft = div();
			notices.bottomLeft.className = "notices is-bottom-left";
			document.body.appendChild(notices.bottomLeft);
		}
	}

	function chooseParent() {
		let div,
			divName = position.replace("is-", "").replace(/-([a-z])/g, g => g[1].toUpperCase());

		console.log(divName);
		if (div = notices[divName]) div.insertAdjacentElement("afterbegin", el);
	}

	onMount(() => {
		setupContainers();
		chooseParent();

		timer = setTimeout(
			() => {
				close();
			},
			duration
		);
	});

	if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0) $$bindings.transitionOut(transitionOut);
	if ($$props.close === void 0 && $$bindings.close && close !== void 0) $$bindings.close(close);
	$$result.css.add(css$3);
	let transitionY = ~position.indexOf("is-top") ? -200 : 200;

	return `${active
	? `<div class="${"notice " + escape(position)}"${add_attribute("aria-hidden", !active, 0)}${add_attribute("this", el, 1)}>

    ${$$slots.default ? $$slots.default({}) : ``}
  </div>`
	: ``}`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Notification/Notification.svelte generated by Svelte v3.16.7 */

const css$4 = {
	code: ".message.svelte-pee90k .media.svelte-pee90k{padding-top:0;border:0}",
	map: "{\"version\":3,\"file\":\"Notification.svelte\",\"sources\":[\"Notification.svelte\"],\"sourcesContent\":[\"<script>\\n  import { createEventDispatcher, onDestroy, onMount } from 'svelte'\\n  import { fly, fade } from 'svelte/transition'\\n  import Icon from '../Icon.svelte'\\n  import Notice, { filterProps } from '../Notice.svelte'\\n  import { typeToIcon } from '../../utils'\\n\\n  /** Type (color)\\n   * @svelte-prop {String} [type]\\n   * @values $$colors$$\\n   * */\\n  export let type = ''\\n\\n  /** Whether the notification is visible or not\\n   * @svelte-prop {boolean} active=true\\n   * */\\n  export let active = true\\n\\n  /** Display an X button that closes the notification\\n   * @svelte-prop {boolean} showClose=true\\n   * */\\n  export let showClose = true\\n\\n  /** Automatically close the notification after <code>duration</code>. Doesn't apply when opening programmatically\\n   * @svelte-prop {boolean} autoClose=false\\n   * */\\n  export let autoClose = false\\n\\n  /** Duration notification will remain on screen\\n   * @svelte-prop {Number} [duration=2000]\\n   * */\\n  export let duration = 2000\\n\\n  /** Show icon on left-side of the notification. If set to <code>true</code>, icon will be determined from <code>type</code> property.\\n   * @svelte-prop {String|Boolean} [icon]\\n   * */\\n  export let icon = ''\\n\\n  /** Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>\\n   * @svelte-prop {String} [iconPack]\\n   * @values <code>fas</code>, <code>fab</code>, etc...\\n   * */\\n  export let iconPack = ''\\n\\n  /** Label for the close button, to be read by accessibility screenreaders\\n   * @svelte-prop {String} [ariaCloseLabel]\\n   * */\\n  export let ariaCloseLabel = ''\\n\\n  /** Text for notification, when used programmatically\\n   * @svelte-prop {String} message\\n   * */\\n\\n  /** Where the notification will show on the screen when used programmatically\\n   * @svelte-prop {String} [position=is-top-right]\\n   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>\\n   * */\\n\\n  const dispatch = createEventDispatcher()\\n\\n  let newIcon = ''\\n  let timer\\n\\n  $: {\\n    if (icon === true) {\\n      newIcon = typeToIcon(type)\\n    } else {\\n      newIcon = icon\\n    }\\n  }\\n\\n  $: {\\n    if (active && autoClose) {\\n      timer = setTimeout(() => {\\n        if (active) close()\\n      }, duration)\\n    }\\n  }\\n\\n  function close() {\\n    active = false\\n    if (timer) clearTimeout(timer)\\n    dispatch('close', active)\\n  }\\n</script>\\n\\n<style lang=\\\"scss\\\">.message .media {\\n  padding-top: 0;\\n  border: 0; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb24uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFNBQVMsRUFBRSIsImZpbGUiOiIuLi9zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24vTm90aWZpY2F0aW9uLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIC5tZWRpYSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3JkZXI6IDA7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWZpY2F0aW9uLnN2ZWx0ZS5jc3MubWFwICovIl19 */</style>\\n\\n{#if active}\\n  <article class=\\\"notification {type}\\\" transition:fade|local>\\n    {#if showClose}\\n      <button class=\\\"delete\\\" aria-label={ariaCloseLabel} on:click={close} />\\n    {/if}\\n    <div class=\\\"media\\\">\\n      {#if icon}\\n        <div class=\\\"media-left\\\">\\n          <Icon pack={iconPack} icon={newIcon} size=\\\"is-large\\\" />\\n        </div>\\n      {/if}\\n      <div class=\\\"media-content\\\">\\n        <slot />\\n      </div>\\n    </div>\\n  </article>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAsFmB,sBAAQ,CAAC,MAAM,cAAC,CAAC,AAClC,WAAW,CAAE,CAAC,CACd,MAAM,CAAE,CAAC,AAAE,CAAC\"}"
};

const Notification$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { type = "" } = $$props;
	let { active = true } = $$props;
	let { showClose = true } = $$props;
	let { autoClose = false } = $$props;
	let { duration = 2000 } = $$props;
	let { icon = "" } = $$props;
	let { iconPack = "" } = $$props;
	let { ariaCloseLabel = "" } = $$props;
	const dispatch = createEventDispatcher();
	let newIcon = "";
	let timer;

	function close() {
		active = false;
		if (timer) clearTimeout(timer);
		dispatch("close", active);
	}

	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
	if ($$props.showClose === void 0 && $$bindings.showClose && showClose !== void 0) $$bindings.showClose(showClose);
	if ($$props.autoClose === void 0 && $$bindings.autoClose && autoClose !== void 0) $$bindings.autoClose(autoClose);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.iconPack === void 0 && $$bindings.iconPack && iconPack !== void 0) $$bindings.iconPack(iconPack);
	if ($$props.ariaCloseLabel === void 0 && $$bindings.ariaCloseLabel && ariaCloseLabel !== void 0) $$bindings.ariaCloseLabel(ariaCloseLabel);
	$$result.css.add(css$4);

	 {
		{
			if (icon === true) {
				newIcon = typeToIcon(type);
			} else {
				newIcon = icon;
			}
		}
	}

	 {
		{
			if (active && autoClose) {
				timer = setTimeout(
					() => {
						if (active) close();
					},
					duration
				);
			}
		}
	}

	return `${active
	? `<article class="${"notification " + escape(type) + " svelte-pee90k"}">
    ${showClose
		? `<button class="${"delete"}"${add_attribute("aria-label", ariaCloseLabel, 0)}></button>`
		: ``}
    <div class="${"media svelte-pee90k"}">
      ${icon
		? `<div class="${"media-left"}">
          ${validate_component(Icon$1, "Icon").$$render(
				$$result,
				{
					pack: iconPack,
					icon: newIcon,
					size: "is-large"
				},
				{},
				{}
			)}
        </div>`
		: ``}
      <div class="${"media-content"}">
        ${$$slots.default ? $$slots.default({}) : ``}
      </div>
    </div>
  </article>`
	: ``}`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Notification/NotificationNotice.svelte generated by Svelte v3.16.7 */

const { Object: Object_1 } = globals;

const css$5 = {
	code: ".notification{margin:0.5em 0}",
	map: "{\"version\":3,\"file\":\"NotificationNotice.svelte\",\"sources\":[\"NotificationNotice.svelte\"],\"sourcesContent\":[\"<script>\\n  import { createEventDispatcher, onDestroy, onMount } from 'svelte'\\n  import { fly, fade } from 'svelte/transition'\\n  import Notice, { filterProps } from '../Notice.svelte'\\n  import Notification from './Notification.svelte'\\n\\n  export let message\\n  export let duration = 2000\\n  export let position = 'is-top-right'\\n\\n  $: props = { ...filterProps($$props), duration, position }\\n  $: notificationProps = { ...removeNonNoficationProps($$props) }\\n\\n  function removeNonNoficationProps(props) {\\n    const newProps = {}\\n\\n    const blacklist = ['duration', 'message', 'position']\\n\\n    Object.keys(props).forEach(key => {\\n      if (!blacklist.includes(key)) newProps[key] = props[key]\\n    })\\n\\n    return newProps\\n  }\\n</script>\\n\\n<style>\\n:global(.notification) {\\n  margin: 0.5em 0;\\n}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25Ob3RpY2Uuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiLi4vc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uL05vdGlmaWNhdGlvbk5vdGljZS5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpnbG9iYWwoLm5vdGlmaWNhdGlvbikge1xuICBtYXJnaW46IDAuNWVtIDA7XG59XG4iXX0= */</style>\\n\\n<Notice {...props} transitionOut={true}>\\n  <Notification {...notificationProps}>\\n    {@html message}\\n  </Notification>\\n</Notice>\\n\"],\"names\":[],\"mappings\":\"AA2BQ,aAAa,AAAE,CAAC,AACtB,MAAM,CAAE,KAAK,CAAC,CAAC,AACjB,CAAC\"}"
};

const NotificationNotice$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { message } = $$props;
	let { duration = 2000 } = $$props;
	let { position = "is-top-right" } = $$props;

	function removeNonNoficationProps(props) {
		const newProps = {};
		const blacklist = ["duration", "message", "position"];

		Object.keys(props).forEach(key => {
			if (!blacklist.includes(key)) newProps[key] = props[key];
		});

		return newProps;
	}

	if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
	$$result.css.add(css$5);

	let props = {
		...filterProps($$props),
		duration,
		position
	};

	let notificationProps = { ...removeNonNoficationProps($$props) };

	return `${validate_component(Notice$1, "Notice").$$render($$result, Object_1.assign(props, { transitionOut: true }), {}, {
		default: () => `
  ${validate_component(Notification$1, "Notification").$$render($$result, Object_1.assign(notificationProps), {}, {
			default: () => `
    ${message}
  `
		})}
`
	})}`;
});

Notification$1.create = create;

function create(props) {
  if (typeof props === 'string') props = { message: props };

  const notification = new NotificationNotice$1({
    target: document.body,
    props,
    intro: true,
  });

  notification.$on('destroyed', notification.$destroy);

  return notification
}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

function is_date(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

function get_interpolator(a, b) {
    if (a === b || a !== a)
        return () => a;
    const type = typeof a;
    if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
        throw new Error('Cannot interpolate values of different type');
    }
    if (Array.isArray(a)) {
        const arr = b.map((bi, i) => {
            return get_interpolator(a[i], bi);
        });
        return t => arr.map(fn => fn(t));
    }
    if (type === 'object') {
        if (!a || !b)
            throw new Error('Object cannot be null');
        if (is_date(a) && is_date(b)) {
            a = a.getTime();
            b = b.getTime();
            const delta = b - a;
            return t => new Date(a + t * delta);
        }
        const keys = Object.keys(b);
        const interpolators = {};
        keys.forEach(key => {
            interpolators[key] = get_interpolator(a[key], b[key]);
        });
        return t => {
            const result = {};
            keys.forEach(key => {
                result[key] = interpolators[key](t);
            });
            return result;
        };
    }
    if (type === 'number') {
        const delta = b - a;
        return t => a + t * delta;
    }
    throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
    const store = writable(value);
    let task;
    let target_value = value;
    function set(new_value, opts) {
        if (value == null) {
            store.set(value = new_value);
            return Promise.resolve();
        }
        target_value = new_value;
        let previous_task = task;
        let started = false;
        let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
        const start = now() + delay;
        let fn;
        task = loop(now => {
            if (now < start)
                return true;
            if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === 'function')
                    duration = duration(value, new_value);
                started = true;
            }
            if (previous_task) {
                previous_task.abort();
                previous_task = null;
            }
            const elapsed = now - start;
            if (elapsed > duration) {
                store.set(value = new_value);
                return false;
            }
            // @ts-ignore
            store.set(value = fn(easing(elapsed / duration)));
            return true;
        });
        return task.promise;
    }
    return {
        set,
        update: (fn, opts) => set(fn(target_value, value), opts),
        subscribe: store.subscribe
    };
}

/* Library/Server/Web/Data/Sites/svelma/src/components/Progress.svelte generated by Svelte v3.16.7 */

const Progress$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { value = null } = $$props;
	let { type = "" } = $$props;
	let { max = 100 } = $$props;
	let { duration = 400 } = $$props;
	let { easing = cubicOut } = $$props;
	let el;
	let newValue = tweened(value, { duration, easing });

	newValue.subscribe(val => {
	});

	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0) $$bindings.easing(easing);

	 {
		newValue.set(value);
	}

	return `<progress class="${"progress " + escape(type)}"${add_attribute("max", max, 0)}${add_attribute("this", el, 1)}>${escape(value)}%</progress>`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Snackbar/Snackbar.svelte generated by Svelte v3.16.7 */

const css$6 = {
	code: ".snackbar.svelte-jpep0r.svelte-jpep0r{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;border-radius:4px;margin:0.5em 0;-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);pointer-events:auto;min-height:3em}.snackbar.svelte-jpep0r .text.svelte-jpep0r{margin:.5em 1em}.snackbar.svelte-jpep0r .action.svelte-jpep0r{margin-left:auto;padding:0.5em;padding-left:0}.snackbar.svelte-jpep0r .action .button.svelte-jpep0r{font-weight:600;text-transform:uppercase;background:transparent;border:transparent;position:relative}.snackbar.svelte-jpep0r .action .button.svelte-jpep0r:hover::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0, 0, 0, 0.1)}",
	map: "{\"version\":3,\"file\":\"Snackbar.svelte\",\"sources\":[\"Snackbar.svelte\"],\"sourcesContent\":[\"<script>\\n  import { createEventDispatcher, onDestroy, onMount } from 'svelte'\\n  import { fly, fade } from 'svelte/transition'\\n  import Notice, { filterProps } from '../Notice.svelte'\\n\\n  /** Text or html message for snackbar\\n   * @svelte-prop {String} message\\n   * */\\n  export let message\\n\\n  /** Duration snackbar will remain on screen\\n   * @svelte-prop {Number} [duration=3500]\\n   * */\\n  export let duration = 3500\\n\\n  /** Where the snackbar will show on the screen\\n   * @svelte-prop {String} [position=is-bottom-right]\\n   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>\\n   * */\\n  export let position = 'is-bottom-right'\\n\\n  /** Type (color)\\n   * @svelte-prop {String} [type=is-dark]\\n   * @values $$colors$$\\n   * */\\n  export let type = 'is-primary'\\n\\n  /** Background type (any of the Bulma <code>has-background-</code> classes will work)\\n   * @svelte-prop {String} [background]\\n   * @values <code>has-background-*</code>\\n   * */\\n  export let background = ''\\n\\n  export let actionText = 'OK'\\n\\n  export let onAction = () => {}\\n\\n  let notice\\n \\n  function action() {\\n    Promise.resolve(onAction())\\n      .then(() => notice.close())\\n  }\\n\\n  onMount(() => {\\n    if (typeof onAction !== 'function') throw new Error(`onAction ${onAction} is not a function`)\\n  })\\n\\n  $: newType = type && type.replace(/^is-(.*)/, 'has-text-$1')\\n\\n</script>\\n\\n<style lang=\\\"scss\\\">.snackbar {\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  border-radius: 4px;\\n  margin: 0.5em 0;\\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\\n  /* super subtle... */\\n  pointer-events: auto;\\n  min-height: 3em; }\\n  .snackbar .text {\\n    margin: .5em 1em; }\\n  .snackbar .action {\\n    margin-left: auto;\\n    padding: 0.5em;\\n    padding-left: 0; }\\n    .snackbar .action .button {\\n      font-weight: 600;\\n      text-transform: uppercase;\\n      background: transparent;\\n      border: transparent;\\n      position: relative; }\\n      .snackbar .action .button:hover::after {\\n        content: '';\\n        position: absolute;\\n        top: 0;\\n        bottom: 0;\\n        left: 0;\\n        right: 0;\\n        background: rgba(0, 0, 0, 0.1); }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1NuYWNrYmFyL1NuYWNrYmFyLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFvQjtFQUFwQiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUFtQjtNQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE2QjtNQUE3Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4RUFBc0U7VUFBdEUsc0VBQXNFO0VBQ3RFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZUFBZSxFQUFFO0VBQ2pCO0lBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWUsRUFBRTtJQUNqQjtNQUNFLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBRTtNQUNwQjtRQUNFLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtRQUNSLDhCQUE4QixFQUFFIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL1NuYWNrYmFyL1NuYWNrYmFyLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFja2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIC8qIHN1cGVyIHN1YnRsZS4uLiAqL1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgbWluLWhlaWdodDogM2VtOyB9XG4gIC5zbmFja2JhciAudGV4dCB7XG4gICAgbWFyZ2luOiAuNWVtIDFlbTsgfVxuICAuc25hY2tiYXIgLmFjdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XG4gICAgLnNuYWNrYmFyIC5hY3Rpb24gLmJ1dHRvbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgLnNuYWNrYmFyIC5hY3Rpb24gLmJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1TbmFja2Jhci5zdmVsdGUuY3NzLm1hcCAqLyJdfQ== */</style>\\n\\n<Notice { ...filterProps( { $$props, duration, position, type })} bind:this={notice} transitionOut={false}>\\n  <div class=\\\"snackbar {type} {background}\\\" class:has-background-dark={!background} role=\\\"alert\\\">\\n    <div class=\\\"text\\\"> <!-- NOTE: this extra div is for dynamic text styling with background-clip -->\\n      {@html message}\\n    </div>\\n\\n    {#if actionText}\\n      <div class=\\\"action\\\" on:click={action}>\\n        <button class=\\\"button {newType}\\\">{ actionText }</button>\\n      </div>\\n    {/if}\\n  </div>\\n</Notice>\\n\"],\"names\":[],\"mappings\":\"AAoDmB,SAAS,4BAAC,CAAC,AAC5B,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,WAAW,CACpB,iBAAiB,CAAE,MAAM,CACrB,cAAc,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CAC3B,aAAa,CAAE,UAAU,CACrB,eAAe,CAAE,YAAY,CACjC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,kBAAkB,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACtE,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAE9E,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,GAAG,AAAE,CAAC,AAClB,uBAAS,CAAC,KAAK,cAAC,CAAC,AACf,MAAM,CAAE,IAAI,CAAC,GAAG,AAAE,CAAC,AACrB,uBAAS,CAAC,OAAO,cAAC,CAAC,AACjB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,KAAK,CACd,YAAY,CAAE,CAAC,AAAE,CAAC,AAClB,uBAAS,CAAC,OAAO,CAAC,OAAO,cAAC,CAAC,AACzB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,SAAS,CACzB,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,WAAW,CACnB,QAAQ,CAAE,QAAQ,AAAE,CAAC,AACrB,uBAAS,CAAC,OAAO,CAAC,qBAAO,MAAM,OAAO,AAAC,CAAC,AACtC,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AAAE,CAAC\"}"
};

const Snackbar$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { message } = $$props;
	let { duration = 3500 } = $$props;
	let { position = "is-bottom-right" } = $$props;
	let { type = "is-primary" } = $$props;
	let { background = "" } = $$props;
	let { actionText = "OK" } = $$props;

	let { onAction = () => {
		
	} } = $$props;

	let notice;

	onMount(() => {
		if (typeof onAction !== "function") throw new Error(`onAction ${onAction} is not a function`);
	});

	if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
	if ($$props.actionText === void 0 && $$bindings.actionText && actionText !== void 0) $$bindings.actionText(actionText);
	if ($$props.onAction === void 0 && $$bindings.onAction && onAction !== void 0) $$bindings.onAction(onAction);
	$$result.css.add(css$6);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;
		let newType = type && type.replace(/^is-(.*)/, "has-text-$1");

		$$rendered = `${validate_component(Notice$1, "Notice").$$render(
			$$result,
			Object.assign(filterProps({ $$props, duration, position, type }), { transitionOut: false }, { this: notice }),
			{
				this: $$value => {
					notice = $$value;
					$$settled = false;
				}
			},
			{
				default: () => `
  <div class="${[
					"snackbar " + escape(type) + " " + escape(background) + " svelte-jpep0r",
					!background ? "has-background-dark" : ""
				].join(" ").trim()}" role="${"alert"}">
    <div class="${"text svelte-jpep0r"}"> 
      ${message}
    </div>

    ${actionText
				? `<div class="${"action svelte-jpep0r"}">
        <button class="${"button " + escape(newType) + " svelte-jpep0r"}">${escape(actionText)}</button>
      </div>`
				: ``}
  </div>
`
			}
		)}`;
	} while (!$$settled);

	return $$rendered;
});

function create$1(props) {

  if (typeof props === 'string') props = { message: props };

  const snackbar = new Snackbar$1({
    target: document.body,
    props,
    intro: true,
  });
  
  snackbar.$on('destroyed', snackbar.$destroy);
  
  return snackbar;
}

Snackbar$1.create = create$1;

/* Library/Server/Web/Data/Sites/svelma/src/components/Switch.svelte generated by Svelte v3.16.7 */

const css$7 = {
	code: "@-webkit-keyframes svelte-16lix3s-spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes svelte-16lix3s-spinAround{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.switch.svelte-16lix3s.svelte-16lix3s{position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.switch[disabled]{opacity:.5;cursor:not-allowed}.switch.svelte-16lix3s input.svelte-16lix3s{position:absolute;opacity:0;left:0;z-index:-1}.switch input+.check.svelte-16lix3s.svelte-16lix3s{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;width:2.75em;height:1.575em;padding:.2em;border-radius:1em;-webkit-transition:background .15s ease-out;transition:background .15s ease-out}.switch input+.check.svelte-16lix3s.svelte-16lix3s::before{content:\"\";display:block;border-radius:1em;width:1.175em;height:1.175em;background:#f5f5f5;-webkit-box-shadow:0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);box-shadow:0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);-webkit-transition:width .15s ease-out,-webkit-transform .15s ease-out;transition:width .15s ease-out,-webkit-transform .15s ease-out;transition:transform .15s ease-out,width .15s ease-out;transition:transform .15s ease-out,width .15s ease-out,-webkit-transform .15s ease-out;will-change:transform}.switch input:not(:checked)+.check.svelte-16lix3s.svelte-16lix3s{background-color:#b5b5b5 !important}.switch input:checked+.check.svelte-16lix3s.svelte-16lix3s{background-color:unset}.switch input:checked+.check.svelte-16lix3s.svelte-16lix3s::before{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}.switch.svelte-16lix3s .control-label.svelte-16lix3s{padding-left:.5em}.switch.is-small.svelte-16lix3s.svelte-16lix3s{border-radius:2px;font-size:0.75rem}.switch.is-medium.svelte-16lix3s.svelte-16lix3s{font-size:1.25rem}.switch.is-large.svelte-16lix3s.svelte-16lix3s{font-size:1.5rem}",
	map: "{\"version\":3,\"file\":\"Switch.svelte\",\"sources\":[\"Switch.svelte\"],\"sourcesContent\":[\"\\n<script>\\n  /** Binding for whether the switch to \\\"on\\\" or not\\n   * @svelte-prop {Any} [checked=false]\\n   * */\\n  export let checked = false\\n\\n  /** Type (color of control)\\n   * @svelte-prop {String} [type] - Type (color of control)\\n   * @values $$colors$$\\n   * */\\n  export let type = 'is-primary'\\n\\n  /** Size of switch\\n   * @svelte-prop {String} [size]\\n   * @values $$sizes$$\\n   * */\\n  export let size = ''\\n\\n  /** Whether switch is disabled or not\\n   * @svelte-prop {Boolean} [disabled=false]\\n   * */\\n  export let disabled = false\\n\\n  let label\\n  let input\\n\\n  $: newBackground = type && type.replace(/^is-(.*)/, 'has-background-$1') || ''\\n\\n  $: {\\n    if (input) {\\n      if (disabled) {\\n        label.setAttribute('disabled', 'disabled')\\n        input.setAttribute('disabled', 'disabled')\\n      } else {\\n        label.removeAttribute('disabled')\\n        input.removeAttribute('disabled')\\n      }\\n    }\\n  }\\n</script>\\n\\n<style lang=\\\"scss\\\">@-webkit-keyframes spinAround {\\n  from {\\n    -webkit-transform: rotate(0deg);\\n            transform: rotate(0deg); }\\n  to {\\n    -webkit-transform: rotate(359deg);\\n            transform: rotate(359deg); } }\\n\\n@keyframes spinAround {\\n  from {\\n    -webkit-transform: rotate(0deg);\\n            transform: rotate(0deg); }\\n  to {\\n    -webkit-transform: rotate(359deg);\\n            transform: rotate(359deg); } }\\n\\n.switch {\\n  position: relative;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex; }\\n  :global(.switch[disabled]) {\\n    opacity: .5;\\n    cursor: not-allowed; }\\n  .switch input {\\n    position: absolute;\\n    opacity: 0;\\n    left: 0;\\n    z-index: -1; }\\n    .switch input + .check {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center;\\n      -ms-flex-negative: 0;\\n          flex-shrink: 0;\\n      width: 2.75em;\\n      height: 1.575em;\\n      padding: .2em;\\n      border-radius: 1em;\\n      -webkit-transition: background .15s ease-out;\\n      transition: background .15s ease-out; }\\n      .switch input + .check::before {\\n        content: \\\"\\\";\\n        display: block;\\n        border-radius: 1em;\\n        width: 1.175em;\\n        height: 1.175em;\\n        background: #f5f5f5;\\n        -webkit-box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\\n                box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\\n        -webkit-transition: width .15s ease-out,-webkit-transform .15s ease-out;\\n        transition: width .15s ease-out,-webkit-transform .15s ease-out;\\n        transition: transform .15s ease-out,width .15s ease-out;\\n        transition: transform .15s ease-out,width .15s ease-out,-webkit-transform .15s ease-out;\\n        will-change: transform; }\\n    .switch input:not(:checked) + .check {\\n      background-color: #b5b5b5 !important; }\\n    .switch input:checked + .check {\\n      background-color: unset; }\\n      .switch input:checked + .check::before {\\n        -webkit-transform: translate3d(100%, 0, 0);\\n                transform: translate3d(100%, 0, 0); }\\n  .switch .control-label {\\n    padding-left: .5em; }\\n  .switch.is-small {\\n    border-radius: 2px;\\n    font-size: 0.75rem; }\\n  .switch.is-medium {\\n    font-size: 1.25rem; }\\n  .switch.is-large {\\n    font-size: 1.5rem; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1N3aXRjaC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBRTtFQUMzQjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBRSxFQUFFOztBQUpqQztFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFFO0VBQzNCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFFLEVBQUU7O0FBRWpDO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsMkJBQW9CO0VBQXBCLDJCQUFvQjtFQUFwQixvQkFBb0IsRUFBRTtFQUN0QjtJQUNFLFdBQVc7SUFDWCxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVcsRUFBRTtJQUNiO01BQ0Usb0JBQWE7TUFBYixvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7VUFBbkIsc0JBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixvQkFBYztVQUFkLGNBQWM7TUFDZCxhQUFhO01BQ2IsZUFBZTtNQUNmLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsNENBQW9DO01BQXBDLG9DQUFvQyxFQUFFO01BQ3RDO1FBQ0UsV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsb0hBQTRHO2dCQUE1Ryw0R0FBNEc7UUFDNUcsdUVBQXVEO1FBQXZELCtEQUF1RDtRQUF2RCx1REFBdUQ7UUFBdkQsdUZBQXVEO1FBQ3ZELHNCQUFzQixFQUFFO0lBQzVCO01BQ0Usb0NBQW9DLEVBQUU7SUFDeEM7TUFDRSx1QkFBdUIsRUFBRTtNQUN6QjtRQUNFLDBDQUFrQztnQkFBbEMsa0NBQWtDLEVBQUU7RUFDMUM7SUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGtCQUFrQixFQUFFO0VBQ3RCO0lBQ0UsaUJBQWlCLEVBQUUiLCJmaWxlIjoiLi4vc3JjL2NvbXBvbmVudHMvU3dpdGNoLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3BpbkFyb3VuZCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpOyB9IH1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cbiAgOmdsb2JhbCguc3dpdGNoW2Rpc2FibGVkXSkge1xuICAgIG9wYWNpdHk6IC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTsgfVxuICAgIC5zd2l0Y2ggaW5wdXQgKyAuY2hlY2sge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHdpZHRoOiAyLjc1ZW07XG4gICAgICBoZWlnaHQ6IDEuNTc1ZW07XG4gICAgICBwYWRkaW5nOiAuMmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzIGVhc2Utb3V0OyB9XG4gICAgICAuc3dpdGNoIGlucHV0ICsgLmNoZWNrOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICB3aWR0aDogMS4xNzVlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjE3NWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2Utb3V0LHdpZHRoIC4xNXMgZWFzZS1vdXQ7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07IH1cbiAgICAuc3dpdGNoIGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY2hlY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNSAhaW1wb3J0YW50OyB9XG4gICAgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLmNoZWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0OyB9XG4gICAgICAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuY2hlY2s6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7IH1cbiAgLnN3aXRjaCAuY29udHJvbC1sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuNWVtOyB9XG4gIC5zd2l0Y2guaXMtc21hbGwge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBmb250LXNpemU6IDAuNzVyZW07IH1cbiAgLnN3aXRjaC5pcy1tZWRpdW0ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuICAuc3dpdGNoLmlzLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1Td2l0Y2guc3ZlbHRlLmNzcy5tYXAgKi8iXX0= */</style>\\n\\n<label ref=\\\"label\\\" class=\\\"switch {size}\\\" bind:this={label}>\\n  <input type=\\\"checkbox\\\" bind:checked bind:this={input} on:input on:click />\\n\\n  <div class=\\\"check {newBackground}\\\"></div>\\n\\n  <span class=\\\"control-label\\\">\\n    <slot/>\\n  </span>\\n</label>\"],\"names\":[],\"mappings\":\"AA0CmB,mBAAmB,yBAAW,CAAC,AAChD,IAAI,AAAC,CAAC,AACJ,iBAAiB,CAAE,OAAO,IAAI,CAAC,CACvB,SAAS,CAAE,OAAO,IAAI,CAAC,AAAE,CAAC,AACpC,EAAE,AAAC,CAAC,AACF,iBAAiB,CAAE,OAAO,MAAM,CAAC,CACzB,SAAS,CAAE,OAAO,MAAM,CAAC,AAAE,CAAC,AAAC,CAAC,AAE1C,WAAW,yBAAW,CAAC,AACrB,IAAI,AAAC,CAAC,AACJ,iBAAiB,CAAE,OAAO,IAAI,CAAC,CACvB,SAAS,CAAE,OAAO,IAAI,CAAC,AAAE,CAAC,AACpC,EAAE,AAAC,CAAC,AACF,iBAAiB,CAAE,OAAO,MAAM,CAAC,CACzB,SAAS,CAAE,OAAO,MAAM,CAAC,AAAE,CAAC,AAAC,CAAC,AAE1C,OAAO,8BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,OAAO,CACf,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACzB,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,WAAW,AAAE,CAAC,AACf,iBAAiB,AAAE,CAAC,AAC1B,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,WAAW,AAAE,CAAC,AACxB,sBAAO,CAAC,KAAK,eAAC,CAAC,AACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,EAAE,AAAE,CAAC,AACd,OAAO,CAAC,KAAK,CAAG,MAAM,8BAAC,CAAC,AACtB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACrB,cAAc,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CAC3B,iBAAiB,CAAE,CAAC,CAChB,WAAW,CAAE,CAAC,CAClB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAClB,kBAAkB,CAAE,UAAU,CAAC,IAAI,CAAC,QAAQ,CAC5C,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,QAAQ,AAAE,CAAC,AACvC,OAAO,CAAC,KAAK,CAAG,oCAAM,QAAQ,AAAC,CAAC,AAC9B,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,OAAO,CACnB,kBAAkB,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5G,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACpH,kBAAkB,CAAE,KAAK,CAAC,IAAI,CAAC,QAAQ,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CACvE,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,QAAQ,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CAC/D,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,IAAI,CAAC,QAAQ,CACvD,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,IAAI,CAAC,QAAQ,CAAC,iBAAiB,CAAC,IAAI,CAAC,QAAQ,CACvF,WAAW,CAAE,SAAS,AAAE,CAAC,AAC7B,OAAO,CAAC,KAAK,KAAK,QAAQ,CAAC,CAAG,MAAM,8BAAC,CAAC,AACpC,gBAAgB,CAAE,OAAO,CAAC,UAAU,AAAE,CAAC,AACzC,OAAO,CAAC,KAAK,QAAQ,CAAG,MAAM,8BAAC,CAAC,AAC9B,gBAAgB,CAAE,KAAK,AAAE,CAAC,AAC1B,OAAO,CAAC,KAAK,QAAQ,CAAG,oCAAM,QAAQ,AAAC,CAAC,AACtC,iBAAiB,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAClC,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAE,CAAC,AACnD,sBAAO,CAAC,cAAc,eAAC,CAAC,AACtB,YAAY,CAAE,IAAI,AAAE,CAAC,AACvB,OAAO,SAAS,8BAAC,CAAC,AAChB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,OAAO,AAAE,CAAC,AACvB,OAAO,UAAU,8BAAC,CAAC,AACjB,SAAS,CAAE,OAAO,AAAE,CAAC,AACvB,OAAO,SAAS,8BAAC,CAAC,AAChB,SAAS,CAAE,MAAM,AAAE,CAAC\"}"
};

const Switch$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { checked = false } = $$props;
	let { type = "is-primary" } = $$props;
	let { size = "" } = $$props;
	let { disabled = false } = $$props;
	let label;
	let input;
	if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
	$$result.css.add(css$7);
	let newBackground = type && type.replace(/^is-(.*)/, "has-background-$1") || "";

	return `<label ref="${"label"}" class="${"switch " + escape(size) + " svelte-16lix3s"}"${add_attribute("this", label, 1)}>
  <input type="${"checkbox"}" class="${"svelte-16lix3s"}"${add_attribute("checked", checked, 1)}${add_attribute("this", input, 1)}>

  <div class="${"check " + escape(newBackground) + " svelte-16lix3s"}"></div>

  <span class="${"control-label svelte-16lix3s"}">
    ${$$slots.default ? $$slots.default({}) : ``}
  </span>
</label>`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Tabs/Tabs.svelte generated by Svelte v3.16.7 */

const css$8 = {
	code: ".tabs-wrapper.svelte-1wu1l6d .tab-content.svelte-1wu1l6d{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:hidden}",
	map: "{\"version\":3,\"file\":\"Tabs.svelte\",\"sources\":[\"Tabs.svelte\"],\"sourcesContent\":[\"<script>\\n  import { setContext, getContext, onMount, onDestroy, createEventDispatcher } from 'svelte'\\n  import { get, writable } from 'svelte/store'\\n  import Icon from '../Icon.svelte'\\n\\n  const dispatch = createEventDispatcher()\\n\\n  /** Index of the active tab (zero-based)\\n   * @svelte-prop {Number} [value=0]\\n   * */\\n  export let value = 0\\n\\n  /** Size of tabs\\n   * @svelte-prop {String} [size]\\n   * @values $$sizes$$\\n   * */\\n  export let size = ''\\n\\n  /** Position of tabs list, horizontally. By default they're positioned to the left\\n   * @svelte-prop {String} [position]\\n   * @values is-centered, is-right\\n   * */\\n  export let position = ''\\n\\n  /** Style of tabs\\n   * @svelte-prop {String} [style]\\n   * @values is-boxed, is-toggle, is-toggle-rounded, is-fullwidth\\n   * */\\n  export let style = ''\\n\\n  export let expanded = false\\n\\n  let activeTab = 0\\n  $: changeTab(value)\\n\\n  const tabs = writable([])\\n\\n  const tabConfig = {\\n    activeTab,\\n    tabs,\\n  }\\n\\n  setContext('tabs', tabConfig)\\n\\n  // This only runs as tabs are added/removed\\n  const unsubscribe = tabs.subscribe(ts => {\\n    if (ts.length > 0 && ts.length > value - 1) {\\n      ts.forEach(t => t.deactivate())\\n      if (ts[value]) ts[value].activate()\\n    }\\n  })\\n\\n  function changeTab(tabNumber) {\\n    const ts = get(tabs)\\n    // NOTE: change this back to using changeTab instead of activate/deactivate once transitions/animations are working\\n    if (ts[activeTab]) ts[activeTab].deactivate()\\n    if (ts[tabNumber]) ts[tabNumber].activate()\\n    // ts.forEach(t => t.changeTab({ from: activeTab, to: tabNumber }))\\n    activeTab = tabConfig.activeTab = tabNumber\\n    dispatch('activeTabChanged', tabNumber)\\n  }\\n\\n  onMount(() => {\\n    changeTab(activeTab)\\n  })\\n\\n  onDestroy(() => {\\n    unsubscribe()\\n  })\\n</script>\\n\\n<style lang=\\\"scss\\\">.tabs-wrapper.is-fullwidth {\\n  /* TODO */ }\\n\\n.tabs-wrapper .tab-content {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -ms-flex-wrap: nowrap;\\n      flex-wrap: nowrap;\\n  overflow-x: hidden; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1RhYnMvVGFicy5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTLEVBQUU7O0FBRWI7RUFDRSxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7TUFBbkIsdUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFFIiwiZmlsZSI6Ii4uL3NyYy9jb21wb25lbnRzL1RhYnMvVGFicy5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy13cmFwcGVyLmlzLWZ1bGx3aWR0aCB7XG4gIC8qIFRPRE8gKi8gfVxuXG4udGFicy13cmFwcGVyIC50YWItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9VGFicy5zdmVsdGUuY3NzLm1hcCAqLyJdfQ== */</style>\\n\\n<div class=\\\"tabs-wrapper\\\" class:is-fullwidth={expanded}>\\n  <nav class=\\\"tabs {size} {position} {style}\\\">\\n    <ul>\\n      {#each $tabs as tab, index}\\n        <li class:is-active={index === activeTab}>\\n          <a href on:click|preventDefault={() => changeTab(index)}>\\n            {#if tab.icon}\\n              <Icon pack={tab.iconPack} icon={tab.icon} />\\n            {/if}\\n\\n            <span>{tab.label}</span>\\n          </a>\\n        </li>\\n      {/each}\\n    </ul>\\n  </nav>\\n  <section class=\\\"tab-content\\\">\\n    <slot />\\n  </section>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA0EA,4BAAa,CAAC,YAAY,eAAC,CAAC,AAC1B,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,UAAU,CAC9B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,GAAG,CACnB,cAAc,CAAE,GAAG,CAC3B,aAAa,CAAE,MAAM,CACjB,SAAS,CAAE,MAAM,CACrB,UAAU,CAAE,MAAM,AAAE,CAAC\"}"
};

const Tabs$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $tabs;
	const dispatch = createEventDispatcher();
	let { value = 0 } = $$props;
	let { size = "" } = $$props;
	let { position = "" } = $$props;
	let { style = "" } = $$props;
	let { expanded = false } = $$props;
	let activeTab = 0;
	const tabs = writable([]);
	$tabs = get_store_value(tabs);
	const tabConfig = { activeTab, tabs };
	setContext("tabs", tabConfig);

	const unsubscribe = tabs.subscribe(ts => {
		if (ts.length > 0 && ts.length > value - 1) {
			ts.forEach(t => t.deactivate());
			if (ts[value]) ts[value].activate();
		}
	});

	function changeTab(tabNumber) {
		const ts = get_store_value(tabs);
		if (ts[activeTab]) ts[activeTab].deactivate();
		if (ts[tabNumber]) ts[tabNumber].activate();
		activeTab = tabConfig.activeTab = tabNumber;
		dispatch("activeTabChanged", tabNumber);
	}

	onMount(() => {
		changeTab(activeTab);
	});

	onDestroy(() => {
		unsubscribe();
	});

	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
	if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
	if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0) $$bindings.expanded(expanded);
	$$result.css.add(css$8);
	$tabs = get_store_value(tabs);

	 {
		changeTab(value);
	}

	return `<div class="${["tabs-wrapper svelte-1wu1l6d", expanded ? "is-fullwidth" : ""].join(" ").trim()}">
  <nav class="${"tabs " + escape(size) + " " + escape(position) + " " + escape(style) + " svelte-1wu1l6d"}">
    <ul>
      ${each($tabs, (tab, index) => `<li${add_classes([index === activeTab ? "is-active" : ""].join(" ").trim())}>
          <a href>
            ${tab.icon
	? `${validate_component(Icon$1, "Icon").$$render($$result, { pack: tab.iconPack, icon: tab.icon }, {}, {})}`
	: ``}

            <span>${escape(tab.label)}</span>
          </a>
        </li>`)}
    </ul>
  </nav>
  <section class="${"tab-content svelte-1wu1l6d"}">
    ${$$slots.default ? $$slots.default({}) : ``}
  </section>
</div>`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Tabs/Tab.svelte generated by Svelte v3.16.7 */

const css$9 = {
	code: ".tab.svelte-yuw9hu{display:none;-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%}.tab.is-active.svelte-yuw9hu{display:inline-block}",
	map: "{\"version\":3,\"file\":\"Tab.svelte\",\"sources\":[\"Tab.svelte\"],\"sourcesContent\":[\"<script>\\n  import { beforeUpdate, setContext, getContext, tick, onMount } from 'svelte'\\n  import Icon from '../Icon.svelte'\\n\\n  /** Label for tab\\n   * @svelte-prop {String} label\\n   * */\\n  export let label\\n\\n  /** Show this icon on left-side of the tab.\\n   * @svelte-prop {String} [icon]\\n   * */\\n  export let icon = ''\\n\\n  /** Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>\\n   * @svelte-prop {String} [iconPack]\\n   * @values <code>fas</code>, <code>fab</code>, etc...\\n   * */\\n  export let iconPack = ''\\n\\n  let active = false\\n\\n  let el\\n  let index\\n  let starting = false\\n  let direction = ''\\n  let isIn = false\\n\\n  const tabConfig = getContext('tabs')\\n\\n  export async function changeTab({ from, to }) {\\n    if (from === to) return\\n\\n    // console.log({ index, from, to }, to === index)\\n    if (from === index) {\\n      // Transition out\\n      direction = index < to ? 'left' : 'right'\\n    } else if (to === index) {\\n      // Transition in; start at direction when rendered, then remove it\\n      // console.log('TRANSITION', { index, to, active })\\n      active = true\\n      direction = index > from ? 'right' : 'left'\\n      // await tick()\\n      // direction = ''\\n    } else direction = ''\\n  }\\n\\n  function updateIndex() {\\n    if (!el) return\\n    index = Array.prototype.indexOf.call(el.parentNode.children, el)\\n  }\\n\\n  async function transitionend(event) {\\n    // console.log({ index, active, activeTab: tabConfig.activeTab })\\n    // console.log(event.target)\\n    active = index === tabConfig.activeTab\\n    await tick()\\n    direction = ''\\n  }\\n\\n  tabConfig.tabs.subscribe(tabs => {\\n    updateIndex()\\n  })\\n\\n  onMount(() => {\\n    updateIndex()\\n\\n    tabConfig.tabs.update(tabs => [\\n      ...tabs,\\n      {\\n        index,\\n        label,\\n        icon,\\n        iconPack,\\n        activate: () => (active = true),\\n        deactivate: () => (active = false),\\n        changeTab,\\n      },\\n    ])\\n  })\\n\\n  beforeUpdate(async () => {\\n    if (index === tabConfig.activeTab && direction) {\\n      await tick()\\n      setTimeout(() => {\\n        direction = ''\\n      })\\n    }\\n  })\\n</script>\\n\\n<style lang=\\\"scss\\\">.tab {\\n  display: none;\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1 0 100%;\\n          flex: 1 0 100%; }\\n  .tab.is-active {\\n    display: inline-block; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1RhYnMvVGFiLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBYztNQUFkLGtCQUFjO1VBQWQsY0FBYyxFQUFFO0VBQ2hCO0lBQ0UscUJBQXFCLEVBQUUiLCJmaWxlIjoiLi4vc3JjL2NvbXBvbmVudHMvVGFicy9UYWIuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXg6IDEgMCAxMDAlOyB9XG4gIC50YWIuaXMtYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9VGFiLnN2ZWx0ZS5jc3MubWFwICovIl19 */</style>\\n\\n<div\\n  class=\\\"tab {direction}\\\"\\n  class:is-active={active}\\n  bind:this={el}\\n  aria-hidden={!active}\\n  on:transitionend={transitionend}>\\n  <slot {label} {iconPack} {icon} />\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA2FmB,IAAI,cAAC,CAAC,AACvB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,CAAC,CACf,QAAQ,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,AAAE,CAAC,AACzB,IAAI,UAAU,cAAC,CAAC,AACd,OAAO,CAAE,YAAY,AAAE,CAAC\"}"
};

const Tab$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { label } = $$props;
	let { icon = "" } = $$props;
	let { iconPack = "" } = $$props;
	let active = false;
	let el;
	let index;
	let direction = "";
	const tabConfig = getContext("tabs");

	async function changeTab({ from, to }) {
		if (from === to) return;

		if (from === index) {
			direction = index < to ? "left" : "right";
		} else if (to === index) {
			active = true;
			direction = index > from ? "right" : "left";
		} else direction = "";
	}

	tabConfig.tabs.subscribe(tabs => {
	});

	onMount(() => {

		tabConfig.tabs.update(tabs => [
			...tabs,
			{
				index,
				label,
				icon,
				iconPack,
				activate: () => active = true,
				deactivate: () => active = false,
				changeTab
			}
		]);
	});

	beforeUpdate(async () => {
		if (index === tabConfig.activeTab && direction) {
			await tick();

			setTimeout(() => {
				direction = "";
			});
		}
	});

	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.iconPack === void 0 && $$bindings.iconPack && iconPack !== void 0) $$bindings.iconPack(iconPack);
	if ($$props.changeTab === void 0 && $$bindings.changeTab && changeTab !== void 0) $$bindings.changeTab(changeTab);
	$$result.css.add(css$9);

	return `<div class="${["tab " + escape(direction) + " svelte-yuw9hu", active ? "is-active" : ""].join(" ").trim()}"${add_attribute("aria-hidden", !active, 0)}${add_attribute("this", el, 1)}>
  ${$$slots.default
	? $$slots.default({ label, iconPack, icon })
	: ``}
</div>`;
});

/* Library/Server/Web/Data/Sites/svelma/src/components/Toast/Toast.svelte generated by Svelte v3.16.7 */

const css$a = {
	code: ".toast.svelte-u20xz4{text-align:center;padding:0.75em 1.5em;border-radius:2em;margin:0.5em 0;-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);pointer-events:auto}",
	map: "{\"version\":3,\"file\":\"Toast.svelte\",\"sources\":[\"Toast.svelte\"],\"sourcesContent\":[\"<script>\\n  import { createEventDispatcher, onDestroy, onMount } from 'svelte'\\n  import { fly, fade } from 'svelte/transition'\\n  import Notice, { filterProps } from '../Notice.svelte'\\n\\n  /** Text or html message for toast\\n   * @svelte-prop {String} message\\n   * */\\n  export let message\\n\\n  /** Duration toast will remain on screen\\n   * @name duration\\n   * @kind member\\n   * @svelte-prop {Number} [duration=2000]\\n   * */\\n\\n  /** Where the toast will show on the screen\\n   * @name position\\n   * @kind member\\n   * @svelte-prop {String} [position=is-top]\\n   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>\\n   * */\\n\\n  /** Type (color)\\n   * @svelte-prop {String} [type=is-dark]\\n   * @values $$colors$$\\n   * */\\n  export let type = 'is-dark'\\n\\n  /** Background type (any of the Bulma <code>has-background-</code> classes will work)\\n   * @svelte-prop {String} [background]\\n   * @values <code>has-background-*</code>\\n   * */\\n  export let background = ''\\n\\n  $: newBackground = background || type.replace(/^is-(.*)/, 'has-background-$1')\\n</script>\\n\\n<style lang=\\\"scss\\\">.toast {\\n  text-align: center;\\n  padding: 0.75em 1.5em;\\n  border-radius: 2em;\\n  margin: 0.5em 0;\\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\\n  /* super subtle... */\\n  pointer-events: auto; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1RvYXN0L1RvYXN0LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4RUFBc0U7VUFBdEUsc0VBQXNFO0VBQ3RFLG9CQUFvQjtFQUNwQixvQkFBb0IsRUFBRSIsImZpbGUiOiIuLi9zcmMvY29tcG9uZW50cy9Ub2FzdC9Ub2FzdC5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNzVlbSAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIC8qIHN1cGVyIHN1YnRsZS4uLiAqL1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1Ub2FzdC5zdmVsdGUuY3NzLm1hcCAqLyJdfQ== */</style>\\n\\n<Notice {...filterProps($$props)}>\\n  <div class=\\\"toast {type} {newBackground}\\\" role=\\\"alert\\\">\\n    <div class=\\\"text\\\"> <!-- NOTE: this extra div is for dynamic text styling with background-clip -->\\n      {@html message}\\n    </div>\\n  </div>\\n</Notice>\"],\"names\":[],\"mappings\":\"AAsCmB,MAAM,cAAC,CAAC,AACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,MAAM,CAAC,KAAK,CACrB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,kBAAkB,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACtE,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAE9E,cAAc,CAAE,IAAI,AAAE,CAAC\"}"
};

const Toast$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { message } = $$props;
	let { type = "is-dark" } = $$props;
	let { background = "" } = $$props;
	if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
	$$result.css.add(css$a);
	let newBackground = background || type.replace(/^is-(.*)/, "has-background-$1");

	return `${validate_component(Notice$1, "Notice").$$render($$result, Object.assign(filterProps($$props)), {}, {
		default: () => `
  <div class="${"toast " + escape(type) + " " + escape(newBackground) + " svelte-u20xz4"}" role="${"alert"}">
    <div class="${"text"}"> 
      ${message}
    </div>
  </div>
`
	})}`;
});

function create$2(props) {
  if (typeof props === 'string') props = { message: props };
  
  const toast = new Toast$1({
    target: document.body,
    props,
    intro: true,
  });
  
  toast.$on('destroyed', toast.$destroy);
  
  return toast;
}

Toast$1.create = create$2;

// import './scss/main.scss'

const Svelma = {
  Button: Button$1,
  Collapse: Collapse$1,
  Dialog: Dialog$1,
  Icon: Icon$1,
  Input: Input$1,
  Field: Field$1,
  Message: Message$1,
  Modal: Modal$1,
  Notification: Notification$1,
  Progress: Progress$1,
  Snackbar: Snackbar$1,
  Switch: Switch$1,
  Tabs: Tabs$1,
  Tab: Tab$1,
  Toast: Toast$1,
};

/* src/routes/index.svelte generated by Svelte v3.16.7 */

const css$b = {
	code: "h1.svelte-16xcuqw,p.svelte-16xcuqw{text-align:center;margin:0 auto}h1.svelte-16xcuqw{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}p.svelte-16xcuqw{margin:1em auto}@media(min-width: 480px){h1.svelte-16xcuqw{font-size:4em}}pre.svelte-16xcuqw{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n  import { Message } from 'svelma'\\n</script>\\n\\n<style>\\n  h1,\\n  /* figure, */\\n  p {\\n    text-align: center;\\n    margin: 0 auto;\\n  }\\n\\n  h1 {\\n    font-size: 2.8em;\\n    text-transform: uppercase;\\n    font-weight: 700;\\n    margin: 0 0 0.5em 0;\\n  }\\n\\n  /* figure {\\n    margin: 0 0 1em 0;\\n  }\\n\\n  img {\\n    width: 100%;\\n    max-width: 400px;\\n    margin: 0 0 1em 0;\\n  } */\\n\\n  p {\\n    margin: 1em auto;\\n  }\\n\\n  @media (min-width: 480px) {\\n    h1 {\\n      font-size: 4em;\\n    }\\n  }\\n\\n  pre {\\n    display: -webkit-inline-box;\\n    display: -ms-inline-flexbox;\\n    display: inline-flex;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTs7O0lBR0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7Ozs7Ozs7O0tBUUc7O0VBRUg7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFLDJCQUFvQjtJQUFwQiwyQkFBb0I7SUFBcEIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InNyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGgxLFxuICAvKiBmaWd1cmUsICovXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuOGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9XG5cbiAgLyogZmlndXJlIHtcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcbiAgfSAqL1xuXG4gIHAge1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDRlbTtcbiAgICB9XG4gIH1cblxuICBwcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG4iXX0= */</style>\\n\\n<svelte:head>\\n  <title>Svelma</title>\\n  <meta property=\\\"og:type\\\" content=\\\"website\\\" />\\n  <meta property=\\\"og:title\\\" content=\\\"Svelma\\\" />\\n  <meta property=\\\"og:description\\\" content=\\\"Bulma components for Svelte\\\" />\\n</svelte:head>\\n\\n<div class=\\\"hero is-full-height\\\">\\n  <div class=\\\"hero-body\\\">\\n    <div class=\\\"container has-text-centered\\\">\\n      <h1 class=\\\"title\\\">Svelma</h1>\\n      <h2 class=\\\"subtitle\\\">Bulma components for Svelte</h2>\\n\\n      <pre>\\n        <code>$ npm install svelma</code>\\n      </pre>\\n\\n      <br />\\n      <br />\\n\\n      <p>\\n        <Message title=\\\"Note!\\\" type=\\\"is-primary\\\" showClose={false}>\\n          This library is a very early work-in-progress. Please forgive all broken and missing features and\\n          documentation.\\n        </Message>\\n      </p>\\n    </div>\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAKE,iBAAE,CAEF,CAAC,eAAC,CAAC,AACD,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACrB,CAAC,AAYD,CAAC,eAAC,CAAC,AACD,MAAM,CAAE,GAAG,CAAC,IAAI,AAClB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,GAAG,AAChB,CAAC,AACH,CAAC,AAED,GAAG,eAAC,CAAC,AACH,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,WAAW,AACtB,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$b);

	return `${($$result.head += `<title>Svelma</title><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:title"}" content="${"Svelma"}"><meta property="${"og:description"}" content="${"Bulma components for Svelte"}">`, "")}

<div class="${"hero is-full-height"}">
  <div class="${"hero-body"}">
    <div class="${"container has-text-centered"}">
      <h1 class="${"title svelte-16xcuqw"}">Svelma</h1>
      <h2 class="${"subtitle"}">Bulma components for Svelte</h2>

      <pre class="${"svelte-16xcuqw"}">
        <code>$ npm install svelma</code>
      </pre>

      <br>
      <br>

      <p class="${"svelte-16xcuqw"}">
        ${validate_component(Message$1, "Message").$$render(
		$$result,
		{
			title: "Note!",
			type: "is-primary",
			showClose: false
		},
		{},
		{
			default: () => `
          This library is a very early work-in-progress. Please forgive all broken and missing features and
          documentation.
        `
		}
	)}
      </p>
    </div>
  </div>
</div>`;
});

/* src/components/DocHeader.svelte generated by Svelte v3.16.7 */

const DocHeader = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title } = $$props;
	let { subtitle } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
	let newTitle = `${title} | Svelma`;

	return `${($$result.head += `<meta property="${"og:type"}" content="${"article"}"><meta property="${"og:title"}"${add_attribute("content", newTitle, 0)}><meta property="${"og:description"}"${add_attribute("content", subtitle, 0)}>`, "")}


<header class="${"header"}">
  <h1 class="${"title"}">${escape(title)}</h1>
  <h2 class="${"subtitle"}">${escape(subtitle)}</h2>
</header>`;
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var highlight = createCommonjsModule(function (module, exports) {
/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  // `nodeType` is checked to ensure that `exports` is not a HTML element.
  if( !exports.nodeType) {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  var SAFE_MODE = true;

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';
  var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  // keywords that should have no default relevance value
  var COMMON_KEYWORDS = 'of and for in not or if then'.split(' ');


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      var language = getLanguage(match[1]);
      if (!language) {
        console.warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        console.warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  /**
   * performs a shallow merge of multiple objects into one
   *
   * @arguments list of objects with properties to merge
   * @returns a single new object
   */
  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {
        return ' ' + a.nodeName + '="' + escape(a.value).replace(/"/g, '&quot;') + '"';
      }
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function dependencyOnParent(mode) {
    if (!mode) return false;

    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }

  function expand_or_clone_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }

    // EXPAND
    // if we have variants then essentially "replace" the mode with the variants
    // this happens in compileMode, where this function is called from
    if (mode.cached_variants)
      return mode.cached_variants;

    // CLONE
    // if we have dependencies on parents then we need a unique
    // instance of ourselves, so we can be reused with many
    // different parents without issue
    if (dependencyOnParent(mode))
      return [inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null })];

    if (Object.isFrozen(mode))
      return [inherit(mode)];

    // no special dependency issues, just return ourselves
    return [mode];
  }

  function compileKeywords(rawKeywords, case_insensitive) {
      var compiled_keywords = {};

      if (typeof rawKeywords === 'string') { // string
        splitAndCompile('keyword', rawKeywords);
      } else {
        objectKeys(rawKeywords).forEach(function (className) {
          splitAndCompile(className, rawKeywords[className]);
        });
      }
    return compiled_keywords;

    // ---

    function splitAndCompile(className, str) {
      if (case_insensitive) {
        str = str.toLowerCase();
      }
      str.split(' ').forEach(function(keyword) {
        var pair = keyword.split('|');
        compiled_keywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }

  function scoreForKeyword(keyword, providedScore) {
    // manual scores always win over common keywords
    // so you can force a score of 1 if you really insist
    if (providedScore)
      return Number(providedScore);

    return commonKeyword(keyword) ? 0 : 1;
  }

  function commonKeyword(word) {
    return COMMON_KEYWORDS.indexOf(word.toLowerCase()) != -1;
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function reCountMatchGroups(re) {
      return (new RegExp(re.toString() + '|')).exec('').length - 1;
    }

    // joinRe logically computes regexps.join(separator), but fixes the
    // backreferences so they continue to match.
    // it also places each individual regular expression into it's own
    // match group, keeping track of the sequencing of those match groups
    // is currently an exercise for the caller. :-)
    function joinRe(regexps, separator) {
      // backreferenceRe matches an open parenthesis or backreference. To avoid
      // an incorrect parse, it additionally matches the following:
      // - [...] elements, where the meaning of parentheses and escapes change
      // - other escape sequences, so we do not misparse escape sequences as
      //   interesting elements
      // - non-matching or lookahead parentheses, which do not capture. These
      //   follow the '(' with a '?'.
      var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      var numCaptures = 0;
      var ret = '';
      for (var i = 0; i < regexps.length; i++) {
        numCaptures += 1;
        var offset = numCaptures;
        var re = reStr(regexps[i]);
        if (i > 0) {
          ret += separator;
        }
        ret += "(";
        while (re.length > 0) {
          var match = backreferenceRe.exec(re);
          if (match == null) {
            ret += re;
            break;
          }
          ret += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] == '\\' && match[1]) {
            // Adjust the backreference.
            ret += '\\' + String(Number(match[1]) + offset);
          } else {
            ret += match[0];
            if (match[0] == '(') {
              numCaptures++;
            }
          }
        }
        ret += ")";
      }
      return ret;
    }

    function buildModeRegex(mode) {

      var matchIndexes = {};
      var matcherRe;
      var regexes = [];
      var matcher = {};
      var matchAt = 1;

      function addRule(rule, regex) {
        matchIndexes[matchAt] = rule;
        regexes.push([rule, regex]);
        matchAt += reCountMatchGroups(regex) + 1;
      }

      var term;
      for (var i=0; i < mode.contains.length; i++) {
        var re;
        term = mode.contains[i];
        if (term.beginKeywords) {
          re = '\\.?(?:' + term.begin + ')\\.?';
        } else {
          re = term.begin;
        }
        addRule(term, re);
      }
      if (mode.terminator_end)
        addRule("end", mode.terminator_end);
      if (mode.illegal)
        addRule("illegal", mode.illegal);

      var terminators = regexes.map(function(el) { return el[1]; });
      matcherRe = langRe(joinRe(terminators, '|'), true);

      matcher.lastIndex = 0;
      matcher.exec = function(s) {
        var rule;

        if( regexes.length === 0) return null;

        matcherRe.lastIndex = matcher.lastIndex;
        var match = matcherRe.exec(s);
        if (!match) { return null; }

        for(var i = 0; i<match.length; i++) {
          if (match[i] != undefined && matchIndexes["" +i] != undefined ) {
            rule = matchIndexes[""+i];
            break;
          }
        }

        // illegal or end match
        if (typeof rule === "string") {
          match.type = rule;
          match.extra = [mode.illegal, mode.terminator_end];
        } else {
          match.type = "begin";
          match.rule = rule;
        }
        return match;
      };

      return matcher;
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords)
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);

      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (mode.endSameAsBegin)
          mode.end = mode.begin;
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_or_clone_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      mode.terminators = buildModeRegex(mode);
    }

    // self is not valid at the top-level
    if (language.contains && language.contains.indexOf('self') != -1) {
      if (!SAFE_MODE) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
      } else {
        // silently remove the broken rule (effectively ignoring it), this has historically
        // been the behavior in the past, so this removal preserves compatibility with broken
        // grammars when running in Safe Mode
        language.contains = language.contains.filter(function(mode) { return mode != 'self'; });
      }
    }
    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(className, insideSpan, leaveOpen, noPrefix) {
      if (!leaveOpen && insideSpan === '') return '';
      if (!className) return insideSpan;

      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag;

      openSpan += className + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }


    function doBeginMatch(match) {
      var lexeme = match[0];
      var new_mode = match.rule;

      if (new_mode && new_mode.endSameAsBegin) {
        new_mode.endRe = escapeRe( lexeme );
      }

      if (new_mode.skip) {
        mode_buffer += lexeme;
      } else {
        if (new_mode.excludeBegin) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (!new_mode.returnBegin && !new_mode.excludeBegin) {
          mode_buffer = lexeme;
        }
      }
      startNewMode(new_mode);
      return new_mode.returnBegin ? 0 : lexeme.length;
    }

    function doEndMatch(match) {
      var lexeme = match[0];
      var matchPlusRemainder = value.substr(match.index);
      var end_mode = endOfMode(top, matchPlusRemainder);
      if (!end_mode) { return; }

      var origin = top;
      if (origin.skip) {
        mode_buffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          mode_buffer = lexeme;
        }
      }
      do {
        if (top.className) {
          result += spanEndTag;
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== end_mode.parent);
      if (end_mode.starts) {
        if (end_mode.endSameAsBegin) {
          end_mode.starts.endRe = end_mode.endRe;
        }
        startNewMode(end_mode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    var lastMatch = {};
    function processLexeme(text_before_match, match) {

      var lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      mode_buffer += text_before_match;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type=="begin" && match.type=="end" && lastMatch.index == match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        mode_buffer += value.slice(match.index, match.index + 1);
        return 1;
      }
      lastMatch = match;

      if (match.type==="begin") {
        return doBeginMatch(match);
      } else if (match.type==="illegal" && !ignore_illegals) {
        // illegal match, we do not continue processing
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
      } else if (match.type==="end") {
        var processed = doEndMatch(match);
        if (processed != undefined)
          return processed;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      mode_buffer += lexeme;
      return lexeme.length;
    }

    var language = getLanguage(name);
    if (!language) {
      console.error(LANGUAGE_NOT_FOUND.replace("{}", name));
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        illegal:false,
        language: name,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.indexOf('Illegal') !== -1) {
        return {
          illegal: true,
          relevance: 0,
          value: escape(value)
        };
      } else if (SAFE_MODE) {
        return {
          relevance: 0,
          value: escape(value),
          language: name,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    if (!(options.tabReplace || options.useBR)) {
      return value;
    }

    return value.replace(fixMarkupRe, function(match, p1) {
        if (options.useBR && match === '\n') {
          return '<br>';
        } else if (options.tabReplace) {
          return p1.replace(/\t/g, options.tabReplace);
        }
        return '';
    });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElement('div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElement('div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    window.addEventListener('DOMContentLoaded', initHighlighting, false);
    window.addEventListener('load', initHighlighting, false);
  }

  var PLAINTEXT_LANGUAGE = { disableAutodetect: true };

  function registerLanguage(name, language) {
    var lang;
    try { lang = language(hljs); }
    catch (error) {
      console.error("Language definition for '{}' could not be registered.".replace("{}", name));
      // hard or soft error
      if (!SAFE_MODE) { throw error; } else { console.error(error); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    languages[name] = lang;
    lang.rawDefinition = language.bind(null,hljs);

    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  /*
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.
  */
  function requireLanguage(name) {
    var lang = getLanguage(name);
    if (lang) { return lang; }

    var err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}',name));
    throw err;
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.requireLanguage = requireLanguage;
  hljs.autoDetection = autoDetection;
  hljs.inherit = inherit;
  hljs.debugMode = function() { SAFE_MODE = false; };

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  var constants = [
    hljs.BACKSLASH_ESCAPE,
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.PHRASAL_WORDS_MODE,
    hljs.COMMENT,
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.NUMBER_MODE,
    hljs.C_NUMBER_MODE,
    hljs.BINARY_NUMBER_MODE,
    hljs.CSS_NUMBER_MODE,
    hljs.REGEXP_MODE,
    hljs.TITLE_MODE,
    hljs.UNDERSCORE_TITLE_MODE,
    hljs.METHOD_GUARD
  ];
  constants.forEach(function(obj) { deepFreeze(obj); });

  // https://github.com/substack/deep-freeze/blob/master/index.js
  function deepFreeze (o) {
    Object.freeze(o);

    var objIsFunction = typeof o === 'function';

    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      // IE11 fix: https://github.com/highlightjs/highlight.js/issues/2318
      // TODO: remove in the future
      && (objIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)
      && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });

    return o;
  }

  return hljs;
}));
});

/* src/components/Code.svelte generated by Svelte v3.16.7 */

const css$c = {
	code: ".codeview.svelte-1ccczge{padding:0}.codeview.svelte-1ccczge:not(:last-child){margin-bottom:1.5rem}figure.highlight.svelte-1ccczge{position:relative}.button-container.svelte-1ccczge{position:absolute;right:0}pre.hidden.svelte-1ccczge{visibility:hidden;height:0px;padding:0px}pre.show.svelte-1ccczge{visibility:visible}",
	map: "{\"version\":3,\"file\":\"Code.svelte\",\"sources\":[\"Code.svelte\"],\"sourcesContent\":[\"<script>\\n  import Clipboard from 'clipboard'\\n  import hljs from 'highlight.js/lib/highlight'\\n  import { beforeUpdate, tick, onMount, onDestroy } from 'svelte'\\n\\n  export let lang = 'js'\\n  export let code = ''\\n  export let showCopy = true\\n  let _code = ''\\n  let button\\n  let codeElm\\n  let clip\\n  let show = false\\n  let compiled\\n  let observer\\n\\n  $: {\\n    _code = code || (codeElm && codeElm.innerHTML) || _code\\n    updateCode(code)\\n  }\\n\\n  function updateCode(newCode) {\\n    if (!newCode) return\\n    code = newCode.trim()\\n    compiled = hljs.highlightAuto(code, [lang]).value\\n  }\\n\\n  onMount(async () => {\\n    if (codeElm.innerHTML) code = codeElm.innerHTML\\n\\n    if (button) {\\n      clip = new Clipboard(button, {\\n        text: trigger => code,\\n      })\\n    }\\n\\n    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver\\n    observer = new MutationObserver(() => {\\n      if (codeElm && codeElm.innerHTML) updateCode(codeElm.innerHTML)\\n    })\\n    observer.observe(codeElm, {\\n      subtree: true,\\n      childList: true,\\n      characterData: true,\\n    })\\n\\n    await tick()\\n\\n    show = true\\n  })\\n\\n  onDestroy(() => {\\n    if (clip) clip.destroy()\\n    if (observer) observer.disconnect()\\n  })\\n</script>\\n\\n<style>\\n  .codeview {\\n    padding: 0;\\n  }\\n\\n  .codeview:not(:last-child) {\\n    margin-bottom: 1.5rem;\\n  }\\n\\n  figure.highlight {\\n    position: relative;\\n  }\\n\\n  .button-container {\\n    position: absolute;\\n    right: 0;\\n  }\\n\\n  /* code {\\n    padding: 1.25rem 1.5rem;\\n  } */\\n\\n  pre.hidden {\\n    visibility: hidden;\\n    height: 0px;\\n    padding: 0px;\\n  }\\n\\n  pre.show {\\n    /* display: block; */\\n    visibility: visible;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvZGUuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0VBQ1Y7O0VBRUE7O0tBRUc7O0VBRUg7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvQ29kZS5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmNvZGV2aWV3IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmNvZGV2aWV3Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuXG4gIGZpZ3VyZS5oaWdobGlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5idXR0b24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAvKiBjb2RlIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcbiAgfSAqL1xuXG4gIHByZS5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICBwcmUuc2hvdyB7XG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuIl19 */</style>\\n\\n<div class=\\\"codeview\\\">\\n  <figure class=\\\"highlight is-expanded\\\">\\n    {#if showCopy}\\n      <div class=\\\"button-container\\\">\\n        <button class=\\\"button is-text is-small copy-code\\\" bind:this={button}>Copy</button>\\n      </div>\\n    {/if}\\n    <pre class=\\\"hidden\\\">\\n      <code class={lang} bind:this={codeElm}>\\n        <slot />\\n      </code>\\n    </pre>\\n    <pre class:hidden={!show} class:show>\\n      <code>\\n        {@html compiled}\\n      </code>\\n    </pre>\\n  </figure>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA0DE,SAAS,eAAC,CAAC,AACT,OAAO,CAAE,CAAC,AACZ,CAAC,AAED,wBAAS,KAAK,WAAW,CAAC,AAAC,CAAC,AAC1B,aAAa,CAAE,MAAM,AACvB,CAAC,AAED,MAAM,UAAU,eAAC,CAAC,AAChB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,AACV,CAAC,AAMD,GAAG,OAAO,eAAC,CAAC,AACV,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,GAAG,AACd,CAAC,AAED,GAAG,KAAK,eAAC,CAAC,AAER,UAAU,CAAE,OAAO,AACrB,CAAC\"}"
};

const Code = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { lang = "js" } = $$props;
	let { code = "" } = $$props;
	let { showCopy = true } = $$props;
	let button;
	let codeElm;
	let show = false;
	let compiled;
	let observer;

	function updateCode(newCode) {
		if (!newCode) return;
		code = newCode.trim();
		compiled = highlight.highlightAuto(code, [lang]).value;
	}

	onMount(async () => {
		if (codeElm.innerHTML) ;

		const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

		observer = new MutationObserver(() => {
			});

		observer.observe(codeElm, {
			subtree: true,
			childList: true,
			characterData: true
		});

		await tick();
		show = true;
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
	});

	if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
	if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
	if ($$props.showCopy === void 0 && $$bindings.showCopy && showCopy !== void 0) $$bindings.showCopy(showCopy);
	$$result.css.add(css$c);

	 {
		{
			updateCode(code);
		}
	}

	return `<div class="${"codeview svelte-1ccczge"}">
  <figure class="${"highlight is-expanded svelte-1ccczge"}">
    ${showCopy
	? `<div class="${"button-container svelte-1ccczge"}">
        <button class="${"button is-text is-small copy-code"}"${add_attribute("this", button, 1)}>Copy</button>
      </div>`
	: ``}
    <pre class="${"hidden svelte-1ccczge"}">
      <code class="${escape(null_to_empty(lang)) + " svelte-1ccczge"}"${add_attribute("this", codeElm, 1)}>
        ${$$slots.default ? $$slots.default({}) : ``}
      </code>
    </pre>
    <pre class="${["svelte-1ccczge", (!show ? "hidden" : "") + " " + (show ? "show" : "")].join(" ").trim()}">
      <code>
        ${compiled}
      </code>
    </pre>
  </figure>
</div>`;
});

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

if(  module != null ) {
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

});

unwrapExports(define);
var define_1 = define.getParameters;

var define$1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.getParameters = define.getParameters;

});

unwrapExports(define$1);
var define_2 = define$1.getParameters;

/* src/components/CodepenButton.svelte generated by Svelte v3.16.7 */

const css$d = {
	code: ".slot-wrap.svelte-7fflr3{cursor:pointer;pointer-events:auto}",
	map: "{\"version\":3,\"file\":\"CodepenButton.svelte\",\"sources\":[\"CodepenButton.svelte\"],\"sourcesContent\":[\"<script>\\n  import { getParameters } from 'codesandbox/lib/api/define'\\n\\n  export let title = 'Svelma Example'\\n  export let code\\n\\n  let form\\n\\n  function extractTag(code, tag) {\\n    let start = code.indexOf(`<${tag}>`)\\n    if (start === -1) return\\n\\n    start = start + tag.length + 2\\n    const end = code.lastIndexOf(`<\\\\/${tag}>`)\\n\\n    const extracted = code.substring(start, end)\\n\\n    return extracted\\n  }\\n\\n  function extractHTML(code) {\\n    code = code.replace(/<script>[\\\\s\\\\S]*<\\\\/script>/im, '')\\n    code = code.replace(/<script>[\\\\s\\\\S]*<\\\\/style>/im, '')\\n\\n    return code\\n  }\\n\\n  $: value = getParameters({\\n    files: {\\n      'sandbox.config.json': {\\n        content: {\\n          template: 'svelte',\\n        },\\n      },\\n      'index.html': {\\n        content: `<html>\\n  <body>\\n    <link\\n      id=\\\"external-css\\\"\\n      rel=\\\"stylesheet\\\"\\n      type=\\\"text/css\\\"\\n      href=\\\"https://unpkg.com/bulma/css/bulma.min.css\\\"\\n      media=\\\"all\\\"\\n    />\\n    <link\\n      id=\\\"external-css2\\\"\\n      rel=\\\"stylesheet\\\"\\n      type=\\\"text/css\\\"\\n      href=\\\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\\\"\\n      media=\\\"all\\\"\\n    />\\n  </body>\\n</html>`,\\n      },\\n      'index.js': {\\n        content: `import App from \\\"./App.svelte\\\";\\n\\nconst app = new App({\\n  target: document.body\\n});\\n\\nexport default app;`,\\n      },\\n      'App.svelte': { content: code },\\n      'package.json': {\\n        content: {\\n          name: 'svelma-example',\\n          version: '1.0.0',\\n          devDependencies: {\\n            'npm-run-all': '^4.1.5',\\n            rollup: '^1.10.1',\\n            'rollup-plugin-commonjs': '^9.3.4',\\n            'rollup-plugin-node-resolve': '^4.2.3',\\n            'rollup-plugin-svelte': '^5.0.3',\\n            'rollup-plugin-terser': '^4.0.4',\\n            'sirv-cli': '^0.3.1',\\n          },\\n          dependencies: {\\n            svelte: '^3.4.4',\\n            svelma: 'latest',\\n            '@fortawesome/fontawesome-free': 'latest',\\n            bulma: 'latest',\\n          },\\n          scripts: {\\n            build: 'rollup -c',\\n            autobuild: 'rollup -c -w',\\n            dev: 'run-p start:dev autobuild',\\n            start: 'sirv public',\\n            'start:dev': 'sirv public --dev',\\n          },\\n        },\\n      },\\n    },\\n  })\\n\\n  function open() {\\n    form.submit()\\n  }\\n</script>\\n\\n<style>\\n  .slot-wrap {\\n    cursor: pointer;\\n    pointer-events: auto;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0NvZGVwZW5CdXR0b24uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvQ29kZXBlbkJ1dHRvbi5zdmVsdGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLnNsb3Qtd3JhcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG4iXX0= */</style>\\n\\n<form action=\\\"https://codesandbox.io/api/v1/sandboxes/define\\\" method=\\\"POST\\\" target=\\\"_blank\\\" bind:this={form}>\\n  <input type=\\\"hidden\\\" name=\\\"parameters\\\" {value} />\\n  <div class=\\\"slot-wrap\\\" on:click={open}>\\n    <slot />\\n  </div>\\n</form>\\n\"],\"names\":[],\"mappings\":\"AAqGE,UAAU,cAAC,CAAC,AACV,MAAM,CAAE,OAAO,CACf,cAAc,CAAE,IAAI,AACtB,CAAC\"}"
};

const CodepenButton = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title = "Svelma Example" } = $$props;
	let { code } = $$props;
	let form;

	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
	$$result.css.add(css$d);

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

	return `<form action="${"https://codesandbox.io/api/v1/sandboxes/define"}" method="${"POST"}" target="${"_blank"}"${add_attribute("this", form, 1)}>
  <input type="${"hidden"}" name="${"parameters"}"${add_attribute("value", value, 0)}>
  <div class="${"slot-wrap svelte-7fflr3"}">
    ${$$slots.default ? $$slots.default({}) : ``}
  </div>
</form>`;
});

/* src/components/Example.svelte generated by Svelte v3.16.7 */

const css$e = {
	code: ".snippet.svelte-150a96u{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:6px;border-top-left-radius:0;border:2px solid #f5f5f5;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:3em}.snippet.horizontal.svelte-150a96u{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width: 1087px){.snippet.svelte-150a96u{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.preview.svelte-150a96u{min-width:50%;padding:1.5rem}.code.svelte-150a96u{min-width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:0 6px 6px 0;border-left:1px solid #f5f5f5;overflow:hidden;position:relative}.snippet.svelte-150a96u::before{background:#ffdd57;border-radius:2px 2px 0 0;bottom:100%;color:rgba(0, 0, 0, 0.7);content:'Example';display:inline-block;font-size:7px;font-weight:700;left:-1px;letter-spacing:1px;margin-left:-1px;padding:3px 5px;position:absolute;text-transform:uppercase;vertical-align:top}.snippet.svelte-150a96u::before{content:'Snippet';-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.codepen-button.svelte-150a96u{position:absolute;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;background:#ffdd57;border-radius:4px 4px 0 0;bottom:100%;font-size:7px;font-weight:700;right:-1px;padding:0 0 0 8px;vertical-align:top;letter-spacing:1px;text-transform:uppercase;line-height:17px}.codeview{margin-bottom:0 !important}.btn-show-code{-ms-flex-item-align:center;align-self:center;margin:2em 0 0.5em;position:absolute;bottom:0;background:none}",
	map: "{\"version\":3,\"file\":\"Example.svelte\",\"sources\":[\"Example.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onMount } from 'svelte'\\n  import { Button } from 'svelma'\\n  import Code from './Code.svelte'\\n  import CodepenButton from './CodepenButton.svelte'\\n\\n  export let lang = 'xml'\\n  export let code\\n  export let horizontal = false\\n\\n  let showCode = false\\n\\n  function show() {\\n    showCode = true\\n  }\\n\\n  function hide(e) {\\n    e.stopPropagation()\\n    showCode = false\\n  }\\n</script>\\n\\n<style lang=\\\"scss\\\">.snippet {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: stretch;\\n      -ms-flex-align: stretch;\\n          align-items: stretch;\\n  border-radius: 6px;\\n  border-top-left-radius: 0;\\n  border: 2px solid #f5f5f5;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  margin-top: 3em; }\\n  .snippet.horizontal {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; }\\n\\n@media screen and (max-width: 1087px) {\\n  .snippet {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; } }\\n\\n.preview {\\n  min-width: 50%;\\n  padding: 1.5rem; }\\n\\n.code {\\n  min-width: 50%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: stretch;\\n      -ms-flex-align: stretch;\\n          align-items: stretch;\\n  border-radius: 0 6px 6px 0;\\n  border-left: 1px solid #f5f5f5;\\n  overflow: hidden;\\n  position: relative;\\n  /* cursor: pointer;\\n  pointer-events: auto; */\\n  /*\\n  &::before {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    opacity: 0.8;\\n    background-color: white;\\n    content: '<> Show Code';\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    z-index: 1;\\n    font-size: 0.75rem;\\n  }*/\\n  /*\\n  &:hover::before {\\n    background-color: #ffdd57;\\n  }\\n\\n  & :global(pre),\\n  & :global(pre code) {\\n    overflow: hidden;\\n  }\\n\\n  &.show-code {\\n    cursor: auto;\\n\\n    &::before {\\n      content: inherit;\\n    }\\n\\n    & :global(figure) {\\n      margin-bottom: 3em;\\n    }\\n\\n    & :global(pre) {\\n      overflow: auto;\\n    }\\n  }*/ }\\n\\n.snippet::before {\\n  background: #ffdd57;\\n  border-radius: 2px 2px 0 0;\\n  bottom: 100%;\\n  color: rgba(0, 0, 0, 0.7);\\n  content: 'Example';\\n  display: inline-block;\\n  font-size: 7px;\\n  font-weight: 700;\\n  left: -1px;\\n  letter-spacing: 1px;\\n  margin-left: -1px;\\n  padding: 3px 5px;\\n  position: absolute;\\n  text-transform: uppercase;\\n  vertical-align: top; }\\n\\n.snippet::before {\\n  content: 'Snippet';\\n  -webkit-box-align: stretch;\\n      -ms-flex-align: stretch;\\n          align-items: stretch;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.codepen-button {\\n  position: absolute;\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  background: #ffdd57;\\n  border-radius: 4px 4px 0 0;\\n  bottom: 100%;\\n  font-size: 7px;\\n  font-weight: 700;\\n  right: -1px;\\n  padding: 0 0 0 8px;\\n  vertical-align: top;\\n  letter-spacing: 1px;\\n  text-transform: uppercase;\\n  line-height: 17px; }\\n\\n/*.code {\\n  :global(.codeview) {\\n    height: 100%;\\n\\n    :global(figure) {\\n      height: 100%;\\n\\n      :global(pre:not(.hidden)) {\\n        height: 100%;\\n      }\\n    }\\n  }\\n}*/\\n:global(.codeview) {\\n  margin-bottom: 0 !important; }\\n\\n:global(.btn-show-code) {\\n  -ms-flex-item-align: center;\\n      align-self: center;\\n  margin: 2em 0 0.5em;\\n  position: absolute;\\n  bottom: 0;\\n  background: none; }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0V4YW1wbGUuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO01BQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsOEJBQW1CO0VBQW5CLDZCQUFtQjtNQUFuQix1QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBRTtFQUNqQjtJQUNFLDRCQUFzQjtJQUF0Qiw2QkFBc0I7UUFBdEIsMEJBQXNCO1lBQXRCLHNCQUFzQixFQUFFOztBQUU1QjtFQUNFO0lBQ0UsNEJBQXNCO0lBQXRCLDZCQUFzQjtRQUF0QiwwQkFBc0I7WUFBdEIsc0JBQXNCLEVBQUUsRUFBRTs7QUFFOUI7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFFOztBQUVuQjtFQUNFLGNBQWM7RUFDZCxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7TUFBdEIsMEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEI7eUJBQ3VCO0VBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7SUFlRTtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QkUsRUFBRTs7QUFFTjtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUU7O0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUFvQjtNQUFwQix1QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhLEVBQUU7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUFvQjtFQUFwQiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBRTs7QUFFckI7Ozs7Ozs7Ozs7OztFQVlFO0FBQ0Y7RUFDRSwyQkFBMkIsRUFBRTs7QUFFL0I7RUFDRSwyQkFBa0I7TUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0V4YW1wbGUuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiLnNuaXBwZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjVmNWY1O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAzZW07IH1cbiAgLnNuaXBwZXQuaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDg3cHgpIHtcbiAgLnNuaXBwZXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxuXG4ucHJldmlldyB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxLjVyZW07IH1cblxuLmNvZGUge1xuICBtaW4td2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgKi9cbiAgLypcbiAgJjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb250ZW50OiAnPD4gU2hvdyBDb2RlJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH0qL1xuICAvKlxuICAmOmhvdmVyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkNTc7XG4gIH1cblxuICAmIDpnbG9iYWwocHJlKSxcbiAgJiA6Z2xvYmFsKHByZSBjb2RlKSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gICYuc2hvdy1jb2RlIHtcbiAgICBjdXJzb3I6IGF1dG87XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAmIDpnbG9iYWwoZmlndXJlKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgfVxuXG4gICAgJiA6Z2xvYmFsKHByZSkge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9Ki8gfVxuXG4uc25pcHBldDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZGQ1NztcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XG4gIGJvdHRvbTogMTAwJTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29udGVudDogJ0V4YW1wbGUnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZWZ0OiAtMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5zbmlwcGV0OjpiZWZvcmUge1xuICBjb250ZW50OiAnU25pcHBldCc7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5jb2RlcGVuLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmRkNTc7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBib3R0b206IDEwMCU7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICByaWdodDogLTFweDtcbiAgcGFkZGluZzogMCAwIDAgOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMTdweDsgfVxuXG4vKi5jb2RlIHtcbiAgOmdsb2JhbCguY29kZXZpZXcpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICA6Z2xvYmFsKGZpZ3VyZSkge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICA6Z2xvYmFsKHByZTpub3QoLmhpZGRlbikpIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSovXG46Z2xvYmFsKC5jb2Rldmlldykge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cblxuOmdsb2JhbCguYnRuLXNob3ctY29kZSkge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtIDAgMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lOyB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPUV4YW1wbGUuc3ZlbHRlLmNzcy5tYXAgKi8iXX0= */</style>\\n\\n<div class=\\\"snippet\\\" class:horizontal>\\n  <CodepenButton {code}>\\n    <div class=\\\"codepen-button\\\">\\n      Codesandbox\\n      <i class=\\\"icon is-small fas fa-external-link-alt\\\" />\\n    </div>\\n  </CodepenButton>\\n  <div class=\\\"preview\\\">\\n    <slot name=\\\"preview\\\" />\\n  </div>\\n  <div class=\\\"code\\\">\\n    <!-- class:show-code={showCode} on:click={show} -->\\n    <Code {lang} {code} />\\n\\n    <!-- {#if showCode}\\n      <Button class=\\\"btn-show-code is-rounded is-outline has-text-grey-light\\\" on:click|stopPropagation={hide}>\\n        Hide Code\\n      </Button>\\n    {/if} -->\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAsBmB,QAAQ,eAAC,CAAC,AAC3B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,MAAM,CACpB,aAAa,CAAE,MAAM,CACjB,eAAe,CAAE,MAAM,CAC/B,iBAAiB,CAAE,OAAO,CACtB,cAAc,CAAE,OAAO,CACnB,WAAW,CAAE,OAAO,CAC5B,aAAa,CAAE,GAAG,CAClB,sBAAsB,CAAE,CAAC,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,kBAAkB,CAAE,UAAU,CAC9B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,GAAG,CACnB,cAAc,CAAE,GAAG,CAC3B,UAAU,CAAE,GAAG,AAAE,CAAC,AAClB,QAAQ,WAAW,eAAC,CAAC,AACnB,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,AAAE,CAAC,AAErC,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACrC,QAAQ,eAAC,CAAC,AACR,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,AAAE,CAAC,AAAC,CAAC,AAEvC,QAAQ,eAAC,CAAC,AACR,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,MAAM,AAAE,CAAC,AAEpB,KAAK,eAAC,CAAC,AACL,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,CAC9B,iBAAiB,CAAE,OAAO,CACtB,cAAc,CAAE,OAAO,CACnB,WAAW,CAAE,OAAO,CAC5B,aAAa,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAC1B,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC9B,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,AA2Cd,CAAC,AAEP,uBAAQ,QAAQ,AAAC,CAAC,AAChB,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAC1B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,OAAO,CAAE,SAAS,CAClB,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,IAAI,CAAE,IAAI,CACV,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,GAAG,AAAE,CAAC,AAExB,uBAAQ,QAAQ,AAAC,CAAC,AAChB,OAAO,CAAE,SAAS,CAClB,iBAAiB,CAAE,OAAO,CACtB,cAAc,CAAE,OAAO,CACnB,WAAW,CAAE,OAAO,CAC5B,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,AAAE,CAAC,AAElB,eAAe,eAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,kBAAkB,CAC3B,OAAO,CAAE,WAAW,CACpB,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAC1B,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAClB,cAAc,CAAE,GAAG,CACnB,cAAc,CAAE,GAAG,CACnB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,IAAI,AAAE,CAAC,AAed,SAAS,AAAE,CAAC,AAClB,aAAa,CAAE,CAAC,CAAC,UAAU,AAAE,CAAC,AAExB,cAAc,AAAE,CAAC,AACvB,mBAAmB,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CACtB,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,KAAK,CACnB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IAAI,AAAE,CAAC\"}"
};

const Example = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { lang = "xml" } = $$props;
	let { code } = $$props;
	let { horizontal = false } = $$props;

	if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
	if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
	if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
	$$result.css.add(css$e);

	return `<div class="${["snippet svelte-150a96u", horizontal ? "horizontal" : ""].join(" ").trim()}">
  ${validate_component(CodepenButton, "CodepenButton").$$render($$result, { code }, {}, {
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
    
    ${validate_component(Code, "Code").$$render($$result, { lang, code }, {}, {})}

    
  </div>
</div>`;
});

/* src/components/JSDoc.svelte generated by Svelte v3.16.7 */

const css$f = {
	code: "@media screen and (max-width: 1087px){.table-wrapper.svelte-2ae2jn{overflow-x:scroll}}",
	map: "{\"version\":3,\"file\":\"JSDoc.svelte\",\"sources\":[\"JSDoc.svelte\"],\"sourcesContent\":[\"<script>\\n  export let jsdoc\\n  export let showHeader = true\\n</script>\\n\\n<style>\\n  @media screen and (max-width: 1087px) {\\n    .table-wrapper {\\n      overflow-x: scroll;\\n    }\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0pTRG9jLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0pTRG9jLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDg3cHgpIHtcbiAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgfVxuICB9XG4iXX0= */</style>\\n\\n{#if jsdoc}\\n  {#if showHeader}<hr class=\\\"is-medium\\\" />{/if}\\n\\n  <section>\\n    {#if showHeader}<h2 class=\\\"title is-4\\\">API</h2>{/if}\\n\\n    <div class=\\\"table-wrapper\\\">\\n      <table class=\\\"table is-fullwidth\\\">\\n        <thead>\\n          <tr>\\n            <th>Name</th>\\n            <th>Description</th>\\n            <th>Type</th>\\n            <th>Values</th>\\n            <th>Default</th>\\n          </tr>\\n        </thead>\\n        <tbody>\\n          {#each jsdoc as doc}\\n            <tr>\\n              <td>\\n                <code>{doc.name}</code>\\n              </td>\\n              <td>\\n                {@html doc.description}{#if doc.optional}, optional{/if}\\n              </td>\\n              <td>{(doc.type || []).join(', ')}</td>\\n              <td>\\n                {@html doc.values || '&mdash;'}\\n              </td>\\n              <td>\\n                {@html ('defaultvalue' in doc && `<code>${doc.defaultvalue}</code>`) || '&mdash;'}\\n              </td>\\n            </tr>\\n          {/each}\\n        </tbody>\\n      </table>\\n    </div>\\n  </section>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAME,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACrC,cAAc,cAAC,CAAC,AACd,UAAU,CAAE,MAAM,AACpB,CAAC,AACH,CAAC\"}"
};

const JSDoc = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	let { showHeader = true } = $$props;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	if ($$props.showHeader === void 0 && $$bindings.showHeader && showHeader !== void 0) $$bindings.showHeader(showHeader);
	$$result.css.add(css$f);

	return `${jsdoc
	? `${showHeader ? `<hr class="${"is-medium"}">` : ``}

  <section>
    ${showHeader ? `<h2 class="${"title is-4"}">API</h2>` : ``}

    <div class="${"table-wrapper svelte-2ae2jn"}">
      <table class="${"table is-fullwidth"}">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Values</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          ${each(jsdoc, doc => `<tr>
              <td>
                <code>${escape(doc.name)}</code>
              </td>
              <td>
                ${doc.description}${doc.optional ? `, optional` : ``}
              </td>
              <td>${escape((doc.type || []).join(", "))}</td>
              <td>
                ${doc.values || "&mdash;"}
              </td>
              <td>
                ${"defaultvalue" in doc && `<code>${doc.defaultvalue}</code>` || "&mdash;"}
              </td>
            </tr>`)}
        </tbody>
      </table>
    </div>
  </section>`
	: ``}`;
});

/* src/routes/components/notification.svelte generated by Svelte v3.16.7 */

async function preload() {
	const res = await this.fetch(`components/notification.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Notification_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	let isOpen = true;
	let autoIsOpen = false;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${validate_component(DocHeader, "DocHeader").$$render(
			$$result,
			{
				title: "Notification",
				subtitle: "Notifications to alert users"
			},
			{},
			{}
		)}

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Button, Notification } from 'svelma';

  let isOpen = true
</script>

<Button class="block" on:click={() => (isOpen = !isOpen)}>Toggle</Button>
<Notification bind:active={isOpen}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { class: "block" }, {}, { default: () => `Toggle` })}
    ${validate_component(Notification$1, "Notification").$$render(
					$$result,
					{ active: isOpen },
					{
						active: $$value => {
							isOpen = $$value;
							$$settled = false;
						}
					},
					{
						default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
					}
				)}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Types</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Notification } from 'svelma';
</script>

<Notification>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-info">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-success">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-warning">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-danger">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Notification$1, "Notification").$$render($$result, {}, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-info" }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-success" }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-warning" }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-danger" }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Icons</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Notification } from 'svelma';
</script>

<Notification icon="question-circle">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-info" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-success" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-warning" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-danger" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Notification$1, "Notification").$$render($$result, { icon: "question-circle" }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-info", icon: true }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-success", icon: true }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-warning", icon: true }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}

    ${validate_component(Notification$1, "Notification").$$render($$result, { type: "is-danger", icon: true }, {}, {
					default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Auto-close</p>

<p>
  Notification will close automatically after
  <code>duration</code>
  .
</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Button, Notification } from 'svelma';

  let autoIsOpen = false
</script>

<Button class="block" on:click={() => (autoIsOpen = true)}>Show</Button>
<Notification bind:active={autoIsOpen} autoClose={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { class: "block" }, {}, { default: () => `Show` })}
    ${validate_component(Notification$1, "Notification").$$render(
					$$result,
					{ autoClose: true, active: autoIsOpen },
					{
						active: $$value => {
							autoIsOpen = $$value;
							$$settled = false;
						}
					},
					{
						default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
					}
				)}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Opening with code</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Button, Notification } from 'svelma';

  function showNotification(props) {
    Notification.create({
      message: 'You opened this programmatically!',
      ...props
    })
  }
</script>

<Button class="block" on:click={() => showNotification()}>Show Notification</Button>
<Button class="block" type="is-success" on:click={() => showNotification({ type: 'is-success' })}>Show Notification (success)</Button>
<Button class="block" type="is-danger" on:click={() => showNotification({ type: 'is-danger', position: 'is-bottom-right', icon: true })}>Show Notification (danger)</Button>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { class: "block" }, {}, { default: () => `Show Notification` })}
    ${validate_component(Button$1, "Button").$$render($$result, { class: "block", type: "is-success" }, {}, {
					default: () => `Show Notification (success)`
				})}
    ${validate_component(Button$1, "Button").$$render($$result, { class: "block", type: "is-danger" }, {}, {
					default: () => `Show Notification (danger)`
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
	} while (!$$settled);

	return $$rendered;
});

/* src/routes/components/collapse.svelte generated by Svelte v3.16.7 */

async function preload$1() {
	const res = await this.fetch(`components/collapse.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Collapse_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Collapse",
			subtitle: "Collapsible elements"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
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
</Collapse>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Collapse$1, "Collapse").$$render($$result, {}, {}, {
				trigger: () => `<button class="${"button is-primary"}" slot="${"trigger"}">Click Me!</button>`,
				default: () => `
      
      <div class="${"notification"}">
        <div class="${"content"}">
          <h3>Subtitle</h3>
          <p>Lorem ipsum dolor...</p>
        </div>
      </div>
    `
			})}
  </div>`,
			default: () => `
  
`
		}
	)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
});

/* src/routes/components/progress.svelte generated by Svelte v3.16.7 */

const Progress_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const types = ["is-primary", "is-success", "is-danger", "is-warning", "is-info", "is-link"];
	const progresses = Array(6).fill(0);

	function update() {
		types.forEach((type, i) => {
			progresses[i] = Math.floor(Math.random() * 100);
		});
	}

	onMount(() => {
		update();
	});

	return `${validate_component(DocHeader, "DocHeader").$$render($$result, { title: "Hero", subtitle: "Hero headers" }, {}, {})}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { fade } from 'svelte/transition'

  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']
  let type = 'is-primary'

  function update() {
    types.forEach((type, i) => {
      progresses[i] = Math.floor(Math.random() * 100)
    })
  }
  
  onMount(() => {
    update()
  })
</script>

<button class="button is-primary" on:click={update}>Update</button>

<br />
<br />

{#each types as type, i}
  <Progress {type} value={progresses[i]} duration={i * 200} max="100"></Progress>
{/each}

<br>
<br>

<p class="title is-5">Indeterminate (no value)</p>
<Progress max="100"></Progress>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <button class="${"button is-primary"}">Update</button>

    <br>
    <br>

    ${each(types, (type, i) => `${validate_component(Progress$1, "Progress").$$render(
				$$result,
				{
					type,
					value: progresses[i],
					duration: i * 200,
					max: "100"
				},
				{},
				{}
			)}`)}

    <br>
    <br>
    
    <p class="${"title is-5"}">Indeterminate (no value)</p>
    ${validate_component(Progress$1, "Progress").$$render($$result, { max: "100" }, {}, {})}
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

/* src/routes/components/snackbar.svelte generated by Svelte v3.16.7 */

const css$g = {
	code: ".buttons.svelte-nm7qtc{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}",
	map: "{\"version\":3,\"file\":\"snackbar.svelte\",\"sources\":[\"snackbar.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload() {\\n    const res = await this.fetch(`components/snackbar.json`);\\n    const jsdoc = await res.json();\\n\\n    return { jsdoc };\\n  }\\n</script>\\n\\n<script>\\n  import { Button, Snackbar } from 'svelma'\\n  import DocHeader from '../../components/DocHeader.svelte'\\n  import Example from '../../components/Example.svelte'\\n  import JSDoc from '../../components/JSDoc.svelte'\\n\\n  export let jsdoc\\n\\n  function open(props) {\\n    let defaults = { message: 'I am a Snackbar' }\\n    props = Object.assign(defaults, props)\\n    Snackbar.create(props)\\n  }\\n</script>\\n\\n<style>\\n.buttons {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: start;\\n      -ms-flex-pack: start;\\n          justify-content: flex-start;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvY29tcG9uZW50cy9zbmFja2Jhci5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBMkI7TUFBM0Isb0JBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixtQkFBZTtNQUFmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL3JvdXRlcy9jb21wb25lbnRzL3NuYWNrYmFyLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */</style>\\n\\n<DocHeader title=\\\"Snackbar\\\" subtitle=\\\"Bigger than a toast, smaller than a dialog\\\" />\\n\\n<Example code={`<script>\\n  import { Button, Snackbar } from 'svelma'\\n\\n  function open(props) {\\n    let defaults = { message: 'I am a Snackbar' }\\n    props = Object.assign(defaults, props)\\n    Snackbar.create(props)\\n  }\\n</script>\\n\\n<Button on:click={open}>Default Snackbar</Button>\\n<Button type=\\\"is-success\\\" on:click={() => open({ message: 'Success', type: 'is-success', position: 'is-bottom-left', duration: 1000 })}>Successs</Button>\\n<Button type=\\\"is-danger\\\" on:click={() => open({ message: 'Danger', type: 'is-danger', actionText: 'retry', position: 'is-top-left' })}>Top Left</Button>\\n<Button type=\\\"is-primary\\\" on:click={() => open({ message: 'Customized Background', background: 'has-background-grey-lighter', position: 'is-bottom'  })}>Custom Background</Button>`}>\\n  <div slot=\\\"preview\\\">\\n    <div class=\\\"buttons\\\">\\n      <Button on:click={open}>Default Snackbar</Button>\\n      <Button type=\\\"is-success\\\" on:click={() => open({ message: 'Success', type: 'is-success', position: 'is-bottom-left', duration: 1000 })}>Successs</Button>\\n      <Button type=\\\"is-danger\\\" on:click={() => open({ message: 'Danger', type: 'is-danger', actionText: 'retry', position: 'is-top-left' })}>Top Left</Button>\\n      <Button type=\\\"is-primary\\\" on:click={() => open({ message: 'Customized Background', background: 'has-background-grey-lighter', position: 'is-bottom'  })}>Custom Background</Button>\\n    </div>\\n  </div>\\n</Example>\\n\\n\\n<JSDoc {jsdoc} />\"],\"names\":[],\"mappings\":\"AAyBA,QAAQ,cAAC,CAAC,AACR,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACnB,aAAa,CAAE,KAAK,CAChB,eAAe,CAAE,UAAU,CACnC,aAAa,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,AACrB,CAAC\"}"
};

async function preload$2() {
	const res = await this.fetch(`components/snackbar.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Snackbar_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	$$result.css.add(css$g);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Snackbar",
			subtitle: "Bigger than a toast, smaller than a dialog"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button, Snackbar } from 'svelma'

  function open(props) {
    let defaults = { message: 'I am a Snackbar' }
    props = Object.assign(defaults, props)
    Snackbar.create(props)
  }
</script>

<Button on:click={open}>Default Snackbar</Button>
<Button type="is-success" on:click={() => open({ message: 'Success', type: 'is-success', position: 'is-bottom-left', duration: 1000 })}>Successs</Button>
<Button type="is-danger" on:click={() => open({ message: 'Danger', type: 'is-danger', actionText: 'retry', position: 'is-top-left' })}>Top Left</Button>
<Button type="is-primary" on:click={() => open({ message: 'Customized Background', background: 'has-background-grey-lighter', position: 'is-bottom'  })}>Custom Background</Button>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <div class="${"buttons svelte-nm7qtc"}">
      ${validate_component(Button$1, "Button").$$render($$result, {}, {}, { default: () => `Default Snackbar` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-success" }, {}, { default: () => `Successs` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-danger" }, {}, { default: () => `Top Left` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary" }, {}, { default: () => `Custom Background` })}
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}


${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
});

/* src/routes/components/message.svelte generated by Svelte v3.16.7 */

const Message_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let open;

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Message",
			subtitle: "Message blocks to convey information"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
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
</Message>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { class: "block" }, {}, { default: () => `Toggle` })}
    ${validate_component(Message$1, "Message").$$render($$result, { active: !open, title: "Default" }, {}, {
				default: () => `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    `
			})}
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

/* src/routes/components/button.svelte generated by Svelte v3.16.7 */

const css$h = {
	code: ".buttons.svelte-1uf8rcq{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}",
	map: "{\"version\":3,\"file\":\"button.svelte\",\"sources\":[\"button.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload(page, session) {\\n\\t\\tconst res = await this.fetch(`components/button.json`);\\n    const jsdoc = await res.json();\\n\\n\\t\\treturn { jsdoc };\\n\\t}\\n</script>\\n\\n<script>\\n  import { onMount } from 'svelte'\\n  import { Button, Icon } from 'svelma'\\n  import DocHeader from '../../components/DocHeader.svelte'\\n  import Example from '../../components/Example.svelte'\\n  import JSDoc from '../../components/JSDoc.svelte'\\n\\n  export let jsdoc\\n\\n  let counter = 0\\n</script>\\n\\n<style>\\n  .buttons {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-pack: start;\\n        -ms-flex-pack: start;\\n            justify-content: flex-start;\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvY29tcG9uZW50cy9idXR0b24uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLG9CQUFhO0lBQWIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsdUJBQTJCO1FBQTNCLG9CQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsbUJBQWU7UUFBZixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9yb3V0ZXMvY29tcG9uZW50cy9idXR0b24uc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiJdfQ== */</style>\\n\\n<DocHeader title=\\\"Buttons\\\" subtitle=\\\"Tasty clickable buttons\\\" />\\n\\n<Example code={`<script>\\n  import { Button } from 'svelma'\\n\\n  let counter = 0\\n</script>\\n\\n<Button type=\\\"is-primary\\\" on:click={() => counter++}>\\n  Click!: {counter}\\n</Button>`}>\\n  <div slot=\\\"preview\\\">\\n    <Button type=\\\"is-primary\\\" on:click={() => counter++}>\\n      Click!: {counter}\\n    </Button>\\n  </div>\\n</Example>\\n\\n<hr class=\\\"is-medium\\\">\\n\\n<p class=\\\"title is-4\\\">States and styles</p>\\n\\n<Example code={`<script>\\n  import { Button } from 'svelma'\\n</script>\\n\\n<div class=\\\"buttons\\\">\\n  <Button type=\\\"is-primary\\\">Primary</Button>\\n  <Button type=\\\"is-success\\\">Success</Button>\\n  <Button type=\\\"is-danger\\\">Danger</Button>\\n  <Button type=\\\"is-warning\\\">Warning</Button>\\n  <Button type=\\\"is-info\\\">Info</Button>\\n  <Button type=\\\"is-link\\\">Link</Button>\\n  <Button type=\\\"is-light\\\">Light</Button>\\n  <Button type=\\\"is-dark\\\">Dark</Button>\\n  <Button type=\\\"is-text\\\">Text</Button>\\n</div>\\n<div class=\\\"buttons\\\">\\n  <Button disabled>Disabled</Button>\\n  <Button type=\\\"is-primary\\\" loading>Loading</Button>\\n  <Button type=\\\"is-success\\\" rounded>Rounded</Button>\\n  <Button type=\\\"is-info\\\" outline>Outlined</Button>\\n</div>\\n<div class=\\\"buttons\\\">\\n  <div class=\\\"notification is-primary\\\">\\n    <Button type=\\\"is-primary\\\" inverted>Inverted</Button>\\n    <Button type=\\\"is-primary\\\" inverted outlined>Invert Outlined</Button>\\n  </div>\\n</div>`}>\\n  <div slot=\\\"preview\\\">\\n    <div class=\\\"buttons\\\">\\n      <Button type=\\\"is-primary\\\">Primary</Button>\\n      <Button type=\\\"is-success\\\">Success</Button>\\n      <Button type=\\\"is-danger\\\">Danger</Button>\\n      <Button type=\\\"is-warning\\\">Warning</Button>\\n      <Button type=\\\"is-info\\\">Info</Button>\\n      <Button type=\\\"is-link\\\">Link</Button>\\n      <Button type=\\\"is-light\\\">Light</Button>\\n      <Button type=\\\"is-dark\\\">Dark</Button>\\n      <Button type=\\\"is-text\\\">Text</Button>\\n    </div>\\n    <div class=\\\"buttons\\\">\\n      <Button disabled>Disabled</Button>\\n      <Button type=\\\"is-primary\\\" loading>Loading</Button>\\n      <Button type=\\\"is-success\\\" rounded>Rounded</Button>\\n      <Button type=\\\"is-info\\\" outline>Outlined</Button>\\n    </div>\\n    <div class=\\\"buttons\\\">\\n      <div class=\\\"notification is-primary\\\">\\n        <Button type=\\\"is-primary\\\" inverted>Inverted</Button>\\n        <Button type=\\\"is-primary\\\" inverted outlined>Invert Outlined</Button>\\n      </div>\\n    </div>\\n  </div>\\n</Example>\\n\\n<hr class=\\\"is-medium\\\">\\n\\n<p class=\\\"title is-4\\\">Sizes</p>\\n\\n<Example code={`<script>\\n  import { Button } from 'svelma'\\n</script>\\n\\n<div class=\\\"buttons\\\">\\n  <Button size=\\\"is-small\\\">Small</Button>\\n  <Button>Default</Button>\\n  <Button size=\\\"is-medium\\\">Medium</Button>\\n  <Button size=\\\"is-large\\\">Large</Button>\\n</div>`}>\\n  <div slot=\\\"preview\\\">\\n    <div class=\\\"buttons\\\">\\n      <Button size=\\\"is-small\\\">Small</Button>\\n      <Button>Default</Button>\\n      <Button size=\\\"is-medium\\\">Medium</Button>\\n      <Button size=\\\"is-large\\\">Large</Button>\\n    </div>\\n  </div>\\n</Example>\\n\\n<hr class=\\\"is-medium\\\">\\n\\n<p class=\\\"title is-4\\\">Icons</p>\\n\\n<Example code={`<script>\\n  import { Button, Icon } from 'svelma'\\n</script>\\n\\n<div class=\\\"buttons\\\">\\n  <Button>\\n    <Icon icon=\\\"bold\\\" />\\n  </Button>\\n  <Button>\\n    <Icon icon=\\\"underline\\\" />\\n  </Button>\\n  <Button>\\n    <Icon icon=\\\"italic\\\" />\\n  </Button>\\n</div>\\n<div class=\\\"buttons\\\">\\n  <Button iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n  <Button type=\\\"is-primary\\\" iconPack=\\\"fab\\\" iconLeft=\\\"twitter\\\">Twitter</Button>\\n  <Button type=\\\"is-success\\\" iconPack=\\\"fa\\\" iconLeft=\\\"check\\\">Save</Button>\\n  <Button type=\\\"is-danger\\\" outline iconPack=\\\"fa\\\" iconRight=\\\"times\\\">Delete</Button>\\n</div>\\n<div class=\\\"buttons\\\">\\n  <Button size=\\\"is-small\\\" iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n  <Button iconLeft=\\\"github\\\" iconPack=\\\"fab\\\">GitHub</Button>\\n  <Button size=\\\"is-medium\\\" iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n  <Button size=\\\"is-large\\\" iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n</div>`}>\\n  <div slot=\\\"preview\\\">\\n    <div class=\\\"buttons\\\">\\n      <Button>\\n        <Icon icon=\\\"bold\\\" />\\n      </Button>\\n      <Button>\\n        <Icon icon=\\\"underline\\\" />\\n      </Button>\\n      <Button>\\n        <Icon icon=\\\"italic\\\" />\\n      </Button>\\n    </div>\\n    <div class=\\\"buttons\\\">\\n      <Button iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n      <Button type=\\\"is-primary\\\" iconPack=\\\"fab\\\" iconLeft=\\\"twitter\\\">Twitter</Button>\\n      <Button type=\\\"is-success\\\" iconPack=\\\"fa\\\" iconLeft=\\\"check\\\">Save</Button>\\n      <Button type=\\\"is-danger\\\" outline iconPack=\\\"fa\\\" iconRight=\\\"times\\\">Delete</Button>\\n    </div>\\n    <div class=\\\"buttons\\\">\\n      <Button size=\\\"is-small\\\" iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n      <Button iconLeft=\\\"github\\\" iconPack=\\\"fab\\\">GitHub</Button>\\n      <Button size=\\\"is-medium\\\" iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n      <Button size=\\\"is-large\\\" iconPack=\\\"fab\\\" iconLeft=\\\"github\\\">GitHub</Button>\\n    </div>\\n  </div>\\n</Example>\\n\\n<JSDoc {jsdoc}></JSDoc>\\n\"],\"names\":[],\"mappings\":\"AAsBE,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACnB,aAAa,CAAE,KAAK,CAChB,eAAe,CAAE,UAAU,CACnC,aAAa,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,AACrB,CAAC\"}"
};

async function preload$3(page, session) {
	const res = await this.fetch(`components/button.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Button_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	let counter = 0;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	$$result.css.add(css$h);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Buttons",
			subtitle: "Tasty clickable buttons"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button } from 'svelma'

  let counter = 0
</script>

<Button type="is-primary" on:click={() => counter++}>
  Click!: {counter}
</Button>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary" }, {}, {
				default: () => `
      Click!: ${escape(counter)}
    `
			})}
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">States and styles</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button } from 'svelma'
</script>

<div class="buttons">
  <Button type="is-primary">Primary</Button>
  <Button type="is-success">Success</Button>
  <Button type="is-danger">Danger</Button>
  <Button type="is-warning">Warning</Button>
  <Button type="is-info">Info</Button>
  <Button type="is-link">Link</Button>
  <Button type="is-light">Light</Button>
  <Button type="is-dark">Dark</Button>
  <Button type="is-text">Text</Button>
</div>
<div class="buttons">
  <Button disabled>Disabled</Button>
  <Button type="is-primary" loading>Loading</Button>
  <Button type="is-success" rounded>Rounded</Button>
  <Button type="is-info" outline>Outlined</Button>
</div>
<div class="buttons">
  <div class="notification is-primary">
    <Button type="is-primary" inverted>Inverted</Button>
    <Button type="is-primary" inverted outlined>Invert Outlined</Button>
  </div>
</div>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <div class="${"buttons svelte-1uf8rcq"}">
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary" }, {}, { default: () => `Primary` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-success" }, {}, { default: () => `Success` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-danger" }, {}, { default: () => `Danger` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-warning" }, {}, { default: () => `Warning` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-info" }, {}, { default: () => `Info` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-link" }, {}, { default: () => `Link` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-light" }, {}, { default: () => `Light` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-dark" }, {}, { default: () => `Dark` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-text" }, {}, { default: () => `Text` })}
    </div>
    <div class="${"buttons svelte-1uf8rcq"}">
      ${validate_component(Button$1, "Button").$$render($$result, { disabled: true }, {}, { default: () => `Disabled` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary", loading: true }, {}, { default: () => `Loading` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-success", rounded: true }, {}, { default: () => `Rounded` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-info", outline: true }, {}, { default: () => `Outlined` })}
    </div>
    <div class="${"buttons svelte-1uf8rcq"}">
      <div class="${"notification is-primary"}">
        ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary", inverted: true }, {}, { default: () => `Inverted` })}
        ${validate_component(Button$1, "Button").$$render(
				$$result,
				{
					type: "is-primary",
					inverted: true,
					outlined: true
				},
				{},
				{ default: () => `Invert Outlined` }
			)}
      </div>
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Sizes</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button } from 'svelma'
</script>

<div class="buttons">
  <Button size="is-small">Small</Button>
  <Button>Default</Button>
  <Button size="is-medium">Medium</Button>
  <Button size="is-large">Large</Button>
</div>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <div class="${"buttons svelte-1uf8rcq"}">
      ${validate_component(Button$1, "Button").$$render($$result, { size: "is-small" }, {}, { default: () => `Small` })}
      ${validate_component(Button$1, "Button").$$render($$result, {}, {}, { default: () => `Default` })}
      ${validate_component(Button$1, "Button").$$render($$result, { size: "is-medium" }, {}, { default: () => `Medium` })}
      ${validate_component(Button$1, "Button").$$render($$result, { size: "is-large" }, {}, { default: () => `Large` })}
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Icons</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button, Icon } from 'svelma'
</script>

<div class="buttons">
  <Button>
    <Icon icon="bold" />
  </Button>
  <Button>
    <Icon icon="underline" />
  </Button>
  <Button>
    <Icon icon="italic" />
  </Button>
</div>
<div class="buttons">
  <Button iconPack="fab" iconLeft="github">GitHub</Button>
  <Button type="is-primary" iconPack="fab" iconLeft="twitter">Twitter</Button>
  <Button type="is-success" iconPack="fa" iconLeft="check">Save</Button>
  <Button type="is-danger" outline iconPack="fa" iconRight="times">Delete</Button>
</div>
<div class="buttons">
  <Button size="is-small" iconPack="fab" iconLeft="github">GitHub</Button>
  <Button iconLeft="github" iconPack="fab">GitHub</Button>
  <Button size="is-medium" iconPack="fab" iconLeft="github">GitHub</Button>
  <Button size="is-large" iconPack="fab" iconLeft="github">GitHub</Button>
</div>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <div class="${"buttons svelte-1uf8rcq"}">
      ${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
				default: () => `
        ${validate_component(Icon$1, "Icon").$$render($$result, { icon: "bold" }, {}, {})}
      `
			})}
      ${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
				default: () => `
        ${validate_component(Icon$1, "Icon").$$render($$result, { icon: "underline" }, {}, {})}
      `
			})}
      ${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
				default: () => `
        ${validate_component(Icon$1, "Icon").$$render($$result, { icon: "italic" }, {}, {})}
      `
			})}
    </div>
    <div class="${"buttons svelte-1uf8rcq"}">
      ${validate_component(Button$1, "Button").$$render($$result, { iconPack: "fab", iconLeft: "github" }, {}, { default: () => `GitHub` })}
      ${validate_component(Button$1, "Button").$$render(
				$$result,
				{
					type: "is-primary",
					iconPack: "fab",
					iconLeft: "twitter"
				},
				{},
				{ default: () => `Twitter` }
			)}
      ${validate_component(Button$1, "Button").$$render(
				$$result,
				{
					type: "is-success",
					iconPack: "fa",
					iconLeft: "check"
				},
				{},
				{ default: () => `Save` }
			)}
      ${validate_component(Button$1, "Button").$$render(
				$$result,
				{
					type: "is-danger",
					outline: true,
					iconPack: "fa",
					iconRight: "times"
				},
				{},
				{ default: () => `Delete` }
			)}
    </div>
    <div class="${"buttons svelte-1uf8rcq"}">
      ${validate_component(Button$1, "Button").$$render(
				$$result,
				{
					size: "is-small",
					iconPack: "fab",
					iconLeft: "github"
				},
				{},
				{ default: () => `GitHub` }
			)}
      ${validate_component(Button$1, "Button").$$render($$result, { iconLeft: "github", iconPack: "fab" }, {}, { default: () => `GitHub` })}
      ${validate_component(Button$1, "Button").$$render(
				$$result,
				{
					size: "is-medium",
					iconPack: "fab",
					iconLeft: "github"
				},
				{},
				{ default: () => `GitHub` }
			)}
      ${validate_component(Button$1, "Button").$$render(
				$$result,
				{
					size: "is-large",
					iconPack: "fab",
					iconLeft: "github"
				},
				{},
				{ default: () => `GitHub` }
			)}
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
});

/* src/routes/components/dialog.svelte generated by Svelte v3.16.7 */

async function preload$4() {
	const res = await this.fetch(`components/dialog.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Dialog_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;

	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Dialog",
			subtitle: "User alerts, promps, and confirmation dialogs"
		},
		{},
		{}
	)}

<p class="${"title is-4"}">Alert and Dialog</p>

<p class="${"content"}">Use <code>Dialog.alert()</code> and <code>Dialog.confirm()</code> to create these kinds of dialogs.
The methods return a promise that is resolved when the user cancels or confirms the alert. If the use closes/cancels the
value will be <code>false</code>. If the user clicks the confirm button the value will be <code>true</code>.

The first argument can either be an object of options or a string to use as the message.</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button, Dialog, Toast } from 'svelma'

  function alert() {
    Dialog.alert('Alles ist gut')
  }

  const thenHandler = result => Toast.create(\`You \${result ? 'confirmed' : 'canceled'}\`)

  function confirm(type) {
    switch(type) {
      case 'custom':
        return Dialog.confirm({
          message: 'This is a custom confirmation message',
          title: "I'm a title!",
          type: 'is-danger',
          icon: 'times-circle'
        })
        .then(thenHandler)
      default:
        Dialog.confirm('Shall we dance?')
        .then(thenHandler)
    }
  }
</script>

<Button type="is-primary" on:click={() => alert()}>Dialog</Button>
<Button type="is-info" on:click={() => confirm()}>Confirm</Button>
<Button type="is-danger" on:click={() => confirm('custom')}>Confirm (custom)</Button>
`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary" }, {}, { default: () => `Dialog` })}
    ${validate_component(Button$1, "Button").$$render($$result, { type: "is-info" }, {}, { default: () => `Confirm` })}
    ${validate_component(Button$1, "Button").$$render($$result, { type: "is-danger" }, {}, { default: () => `Confirm (custom)` })}
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Prompt</p>

<p class="${"content"}">Use <code>Dialog.prompt()</code> to programmatically create prompts for user input. By default the
dialog will be created with a required text input. You can control the props (attributes) on the prompt with the
<code>inputProps</code> prop.

<code>prompt()</code> returns a promise that will be resolved with the prompt input value if the user confirms, or null
if they cancel/close.</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button, Dialog, Toast } from 'svelma'

  function prompt(opts) {
    Dialog.prompt({
      message: "What is your quest?",
      ...opts
    })
    .then(prompt => Toast.create(\`Your answer was: '\${prompt}'\`))
  }
</script>

<Button type="is-primary" on:click={() => prompt()}>Prompt</Button>
<Button type="is-link" on:click={() => prompt({ message: 'Which date?', inputProps: { type: 'date' }})}>Date Prompt</Button>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary" }, {}, { default: () => `Prompt` })}
    ${validate_component(Button$1, "Button").$$render($$result, { type: "is-link" }, {}, { default: () => `Date Prompt` })}
  </div>`,
			default: () => `
  
`
		}
	)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
});

/* src/routes/components/switch.svelte generated by Svelte v3.16.7 */

async function preload$5() {
	const res = await this.fetch(`components/switch.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Switch_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	let val;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${validate_component(DocHeader, "DocHeader").$$render(
			$$result,
			{
				title: "Switch",
				subtitle: "Switchy toggly thing"
			},
			{},
			{}
		)}

${validate_component(Example, "Example").$$render(
			$$result,
			{
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
`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render(
					$$result,
					{ checked: val },
					{
						checked: $$value => {
							val = $$value;
							$$settled = false;
						}
					},
					{ default: () => `Foo` }
				)}
      <br>
      <code>value = ${escape(JSON.stringify(val))}</code>
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { disabled: true }, {}, { default: () => `Disabled` })}
    </div>
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">
<p class="${"title is-4"}">Types</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
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
`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { checked: "true", type: "is-primary" }, {}, { default: () => `Primary` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { checked: "true", type: "is-danger" }, {}, { default: () => `Danger` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { checked: "true", type: "is-warning" }, {}, { default: () => `Warning` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { checked: "true", type: "is-info" }, {}, { default: () => `Info` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { checked: "true", type: "is-link" }, {}, { default: () => `Link` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { checked: "true", type: "is-dark" }, {}, { default: () => `Dark` })}
    </div>
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">
<p class="${"title is-4"}">Sizes</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
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
`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { size: "is-small" }, {}, { default: () => `Small` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, {}, {}, { default: () => `Default` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { size: "is-medium" }, {}, { default: () => `Medium` })}
    </div>
    <div class="${"field"}">
      ${validate_component(Switch$1, "Switch").$$render($$result, { size: "is-large" }, {}, { default: () => `Large` })}
    </div>
  </div>`,
				default: () => `
  
`
			}
		)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
	} while (!$$settled);

	return $$rendered;
});

/* src/routes/components/field.svelte generated by Svelte v3.16.7 */

async function preload$6(page, session) {
	const res = await this.fetch(`components/field.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Field_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Field",
			subtitle: "Add functionality and styling to form elements/inputs by grouping components together"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Field, Input } from 'svelma'
</script>

<Field label="Name">
  <Input value="Rich Harris" />
</Field>

<Field label="Name" type="is-danger" message="Pick a better name">
  <Input type="text" value="Moby Dick" />
</Field>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Field$1, "Field").$$render($$result, { label: "Name" }, {}, {
				default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { value: "Rich Harris" }, {}, {})}
    `
			})}

    ${validate_component(Field$1, "Field").$$render(
				$$result,
				{
					label: "Email",
					type: "is-danger",
					message: "Email is invalid"
				},
				{},
				{
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { value: "john@" }, {}, {})}
    `
				}
			)}

    ${validate_component(Field$1, "Field").$$render(
				$$result,
				{
					label: "Username",
					type: "is-success",
					message: "Username is available"
				},
				{},
				{
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { value: "joey55" }, {}, {})}
    `
				}
			)}
  </div>`,
			default: () => `
  
`
		}
	)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
});

/* src/routes/components/input.svelte generated by Svelte v3.16.7 */

async function preload$7() {
	const res = await this.fetch(`components/input.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Input_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;

	let bound = {
		name: "Rich Harris",
		email: "rich@",
		username: "richie55",
		password: "secret123"
	};

	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${validate_component(DocHeader, "DocHeader").$$render(
			$$result,
			{
				title: "Input",
				subtitle: "User input controls"
			},
			{},
			{}
		)}

<p class="${"content"}">
  Mostly just wraps <code>${escape(`<input>`)}</code>  and <code>${escape(`<textarea>`)}</code> so additional Bulma features can be bound easily.
</p>

<br>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Input } from 'svelma'
</script>

<Input type="text" placeholder="Text input" />
`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Input$1, "Input").$$render($$result, { type: "text", placeholder: "Text input" }, {}, {})}
  </div>`,
				default: () => `
  
`
			}
		)}

<br>

<p class="${"title is-4"}">Types and colors</p>

<p class="${"content"}">Wrap with <a href="${"components/field"}"><strong>Field</strong></a> for additional features</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Field, Input } from 'svelma'

  let bound = {
    name: 'Rich Harris',
    email: 'rich@',
    username: 'richie55',
    password: 'secret123',
  }
</script>

<Field label="Name">
  <Input type="text" bind:value={bound.name} placeholder="Text input" />
</Field>

<Field label="Email" type="is-danger" message="Invalid email"> 
  <Input type="email" bind:value={bound.email} maxlength="30" />
</Field>

<Field label="Username" type="is-success" message="Username available"> 
  <Input type="email" bind:value={bound.username} />
</Field>

<Field label="Password"> 
  <Input type="password" bind:value={bound.password} passwordReveal={true} />
</Field>

<Field label="Textarea"> 
  <Input type="textarea" maxlength="200" />
</Field>
`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Code, "Codeview").$$render($$result, { lang: "js", showCopy: false }, {}, {
					default: () => `
// Bound values
${escape(JSON.stringify(bound, null, 2))}
    `
				})}

    <br>

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Name" }, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render(
						$$result,
						{
							type: "text",
							placeholder: "Text input",
							value: bound.name
						},
						{
							value: $$value => {
								bound.name = $$value;
								$$settled = false;
							}
						},
						{}
					)}
    `
				})}

    ${validate_component(Field$1, "Field").$$render(
					$$result,
					{
						label: "Email",
						type: "is-danger",
						message: "Invalid email"
					},
					{},
					{
						default: () => ` 
      ${validate_component(Input$1, "Input").$$render(
							$$result,
							{
								type: "email",
								maxlength: "30",
								value: bound.email
							},
							{
								value: $$value => {
									bound.email = $$value;
									$$settled = false;
								}
							},
							{}
						)}
    `
					}
				)}

    ${validate_component(Field$1, "Field").$$render(
					$$result,
					{
						label: "Username",
						type: "is-success",
						message: "Username available"
					},
					{},
					{
						default: () => ` 
      ${validate_component(Input$1, "Input").$$render(
							$$result,
							{ type: "email", value: bound.username },
							{
								value: $$value => {
									bound.username = $$value;
									$$settled = false;
								}
							},
							{}
						)}
    `
					}
				)}

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Password" }, {}, {
					default: () => ` 
      ${validate_component(Input$1, "Input").$$render(
						$$result,
						{
							type: "password",
							passwordReveal: true,
							value: bound.password
						},
						{
							value: $$value => {
								bound.password = $$value;
								$$settled = false;
							}
						},
						{}
					)}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Textarea" }, {}, {
					default: () => ` 
      ${validate_component(Input$1, "Input").$$render($$result, { type: "textarea", maxlength: "200" }, {}, {})}
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">States, plus more styles</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Field, Input } from 'svelma'
</script>

<Field>
  <Input placeholder="No label" />
</Field>

<Field label="Rounded">
  <Input class="is-rounded" placeholder="Rounded" />
</Field>

<Field label="Info" type="is-info"> 
  <Input placeholder="Info" />
</Field>

<Field label="Warning" type="is-warning"> 
  <Input placeholder="Warning" />
</Field>

<Field label="Disabled"> 
  <Input placeholder="Disabled" disabled />
</Field>

<Field label="Loading">
  <Input placeholder="Loading" loading />
</Field>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Field$1, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "No label" }, {}, {})}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Rounded" }, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render(
						$$result,
						{
							class: "is-rounded",
							placeholder: "Rounded"
						},
						{},
						{}
					)}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Info", type: "is-info" }, {}, {
					default: () => ` 
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Info" }, {}, {})}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Warning", type: "is-warning" }, {}, {
					default: () => ` 
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Warning" }, {}, {})}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Disabled" }, {}, {
					default: () => ` 
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Disabled", disabled: true }, {}, {})}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, { label: "Loading" }, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Loading", loading: true }, {}, {})}
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Sizes</p>

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Field, Input } from 'svelma'
</script>

<Field>
  <Input placeholder="Small" size="is-small" />
</Field>

<Field>
  <Input placeholder="Default" />
</Field>

<Field>
  <Input placeholder="Medium" size="is-medium" />
</Field>

<Field>
  <Input placeholder="Large" size="is-large" />
</Field>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Field$1, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Small", size: "is-small" }, {}, {})}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Default" }, {}, {})}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Medium", size: "is-medium" }, {}, {})}
    `
				})}

    ${validate_component(Field$1, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${validate_component(Input$1, "Input").$$render($$result, { placeholder: "Large", size: "is-large" }, {}, {})}
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
	} while (!$$settled);

	return $$rendered;
});

/* src/routes/components/modal.svelte generated by Svelte v3.16.7 */

const Modal_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let active = false;
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${validate_component(DocHeader, "DocHeader").$$render($$result, { title: "Modal", subtitle: "Modal popups" }, {}, {})}

${validate_component(Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Button, Modal } from 'svelma'
  
  let active = false
</script>

<Button class="block" on:click={() => active = !active}>Toggle</Button>
<Modal bind:active={active}>
  <p class="image is-4by3">
    <img alt="Test image" src="https://via.placeholder.com/1280x920"/>
  </p>
</Modal>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${validate_component(Button$1, "Button").$$render($$result, { class: "block" }, {}, { default: () => `Toggle` })}
    ${validate_component(Modal$1, "Modal").$$render(
					$$result,
					{ active },
					{
						active: $$value => {
							active = $$value;
							$$settled = false;
						}
					},
					{
						default: () => `
      <p class="${"image is-4by3"}">
        <img alt="${"Test image"}" src="${"https://via.placeholder.com/1280x920"}">
      </p>
    `
					}
				)}
  </div>`,
				default: () => `
  
`
			}
		)}`;
	} while (!$$settled);

	return $$rendered;
});

/* src/routes/components/toast.svelte generated by Svelte v3.16.7 */

const css$i = {
	code: ".buttons.svelte-3pxc2m{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}",
	map: "{\"version\":3,\"file\":\"toast.svelte\",\"sources\":[\"toast.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload() {\\n    const res = await this.fetch(`components/toast.json`);\\n    const jsdoc = await res.json();\\n\\n    return { jsdoc };\\n  }\\n</script>\\n\\n<script>\\n  import { Button, Toast } from 'svelma'\\n  import DocHeader from '../../components/DocHeader.svelte'\\n  import Example from '../../components/Example.svelte'\\n  import JSDoc from '../../components/JSDoc.svelte'\\n\\n  export let jsdoc\\n\\n  function open(type, position, background) {\\n    Toast.create({ message: 'I am a toast', type, position, background })\\n  }\\n</script>\\n\\n<style>\\n.buttons {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: start;\\n      -ms-flex-pack: start;\\n          justify-content: flex-start;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvY29tcG9uZW50cy90b2FzdC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBMkI7TUFBM0Isb0JBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixtQkFBZTtNQUFmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL3JvdXRlcy9jb21wb25lbnRzL3RvYXN0LnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */</style>\\n\\n<DocHeader title=\\\"Toast\\\" subtitle=\\\"Toasty notifications\\\" />\\n\\n<Example code={`<script>\\n  import { Button, Toast } from 'svelma'\\n\\n  function open(type, position) {\\n    Toast.create({ message: 'I am a toast', type, position })\\n  }\\n</script>\\n\\n<Button on:click={() => open()}>Toast</Button>\\n<Button type=\\\"is-success\\\" on:click={() => open('is-success')}>Success</Button>\\n<Button type=\\\"is-danger\\\" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>\\n<Button type=\\\"is-primary\\\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`}>\\n  <div slot=\\\"preview\\\">\\n    <div class=\\\"buttons\\\">\\n      <Button on:click={() => open()}>Toast</Button>\\n      <Button type=\\\"is-success\\\" on:click={() => open('is-success')}>Success</Button>\\n      <Button type=\\\"is-danger\\\" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>\\n      <Button type=\\\"is-primary\\\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>\\n    </div>\\n  </div>\\n</Example>\\n\\n<JSDoc {jsdoc} />\"],\"names\":[],\"mappings\":\"AAuBA,QAAQ,cAAC,CAAC,AACR,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACnB,aAAa,CAAE,KAAK,CAChB,eAAe,CAAE,UAAU,CACnC,aAAa,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,AACrB,CAAC\"}"
};

async function preload$8() {
	const res = await this.fetch(`components/toast.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Toast_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	$$result.css.add(css$i);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Toast",
			subtitle: "Toasty notifications"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button, Toast } from 'svelma'

  function open(type, position) {
    Toast.create({ message: 'I am a toast', type, position })
  }
</script>

<Button on:click={() => open()}>Toast</Button>
<Button type="is-success" on:click={() => open('is-success')}>Success</Button>
<Button type="is-danger" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>
<Button type="is-primary" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <div class="${"buttons svelte-3pxc2m"}">
      ${validate_component(Button$1, "Button").$$render($$result, {}, {}, { default: () => `Toast` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-success" }, {}, { default: () => `Success` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-danger" }, {}, { default: () => `Bottom Right` })}
      ${validate_component(Button$1, "Button").$$render($$result, { type: "is-primary" }, {}, { default: () => `Custom Background` })}
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
});

/* src/routes/components/icon.svelte generated by Svelte v3.16.7 */

const Icon_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Icon",
			subtitle: "Font Awesome icons"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Icon } from 'svelma'
</script>

<Icon pack="fab" size="is-large" icon="github" />
`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Icon$1, "Icon").$$render(
				$$result,
				{
					pack: "fab",
					size: "is-large",
					icon: "github"
				},
				{},
				{}
			)}
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

/* src/routes/components/tabs.svelte generated by Svelte v3.16.7 */

async function preload$9() {
	const tabsRes = await this.fetch(`components/tabs.json`);
	const tabRes = await this.fetch(`components/tab.json`);
	const jsdocTabs = await tabsRes.json();
	const jsdocTab = await tabRes.json();
	return { jsdocTabs, jsdocTab };
}

const Tabs_1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdocTabs } = $$props;
	let { jsdocTab } = $$props;
	if ($$props.jsdocTabs === void 0 && $$bindings.jsdocTabs && jsdocTabs !== void 0) $$bindings.jsdocTabs(jsdocTabs);
	if ($$props.jsdocTab === void 0 && $$bindings.jsdocTab && jsdocTab !== void 0) $$bindings.jsdocTab(jsdocTab);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Tabs",
			subtitle: "Horizontal navigation tabs"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Tabs, Tab } from 'svelma'
</script>

<Tabs>
  <Tab label="Svelte">
    Is cool
  </Tab>
  <Tab label="Vue">
    Is good
  </Tab>
  <Tab label="Angular">
    lol no
  </Tab>
</Tabs>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Tabs$1, "Tabs").$$render($$result, {}, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Svelte" }, {}, {
					default: () => `
        Is cool
      `
				})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Vue" }, {}, {
					default: () => `
        Is good
      `
				})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Angular" }, {}, {
					default: () => `
        lol no
      `
				})}
    `
			})}
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Icons and Sizes</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Tabs, Tab } from 'svelma'
</script>

<Tabs>
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs size="is-medium">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs size="is-large">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Tabs$1, "Tabs").$$render($$result, {}, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}

    ${validate_component(Tabs$1, "Tabs").$$render($$result, { size: "is-medium" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}

    ${validate_component(Tabs$1, "Tabs").$$render($$result, { size: "is-large" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Position</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Tabs, Tab } from 'svelma'
</script>

<Tabs position="is-centered">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs position="is-right">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Tabs$1, "Tabs").$$render($$result, { position: "is-centered" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}

    ${validate_component(Tabs$1, "Tabs").$$render($$result, { position: "is-right" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Style</p>

<p class="${"content"}">
  Use <code>is-boxed</code>, <code>is-toggle</code>, <code>is-toggle</code> and <code>is-toggle-rounded</code>, or
  <code>is-fullwidth</code> to alter to style of your tabs.
</p>

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Tabs, Tab } from 'svelma'
</script>

<Tabs style="is-boxed">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs style="is-toggle">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs style="is-toggle is-toggle-rounded">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs style="is-fullwidth">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    ${validate_component(Tabs$1, "Tabs").$$render($$result, { style: "is-boxed" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}

    ${validate_component(Tabs$1, "Tabs").$$render($$result, { style: "is-toggle" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}

    ${validate_component(Tabs$1, "Tabs").$$render($$result, { style: "is-toggle is-toggle-rounded" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}

    ${validate_component(Tabs$1, "Tabs").$$render($$result, { style: "is-fullwidth" }, {}, {
				default: () => `
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "People", icon: "users" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Places", icon: "map-marker-alt" }, {}, {})}
      ${validate_component(Tab$1, "Tab").$$render($$result, { label: "Things", icon: "ellipsis-h" }, {}, {})}
    `
			})}
  </div>`,
			default: () => `
  
`
		}
	)}

<hr class="${"is-medium"}">

<h2 class="${"title is-4 is-spaced"}">API</h2>

<h3 class="${"subtitle"}">Tabs</h3>

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc: jsdocTabs, showHeader: false }, {}, {})}

<br>
<br>

<h3 class="${"subtitle is-spaced"}">Tab</h3>

${validate_component(JSDoc, "JSDoc").$$render($$result, { jsdoc: jsdocTab, showHeader: false }, {}, {})}`;
});

/* src/routes/install/index.svelte generated by Svelte v3.16.7 */

const Install = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Start",
			subtitle: "How to install and use Svelma"
		},
		{},
		{}
	)}
<div class="${"media"}">
  <div class="${"media-left"}">
    <p class="${"title"}">1</p>
  </div>
  <div class="${"media-content"}">
    <p class="${"title"}">NPM</p>
    <p class="${"subtitle is-spaced"}">For use with a project using a bundler like Webpack, Rollup, or Parcel</p>
    <p class="${"title is-4"}">Installation</p>
    ${validate_component(Code, "Codeview").$$render($$result, { lang: "bash" }, {}, {
		default: () => `npm install --save bulma svelma rollup-plugin-postcss`
	})}

    <div class="${"content"}">Add <code>rollup-plugin-postcss</code> to your <code>rollup.config.js</code>.</div>

    ${validate_component(Code, "Codeview").$$render(
		$$result,
		{
			lang: "js",
			code: `import postcss from 'rollup-plugin-postcss'

// ...

export default {
  // ... 
  plugins: [
    svelte({
      // ...
    }),

    postcss(),
  }
}`
		},
		{},
		{}
	)}

    <p class="${"title is-4"}">Usage</p>
    <div class="${"content"}">Import Bulma&#39;s CSS in your main app&#39;s component</div>
    ${validate_component(Code, "Codeview").$$render(
		$$result,
		{
			lang: "html",
			code: `
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
</script>
    `
		},
		{},
		{
			default: () => `
    `
		}
	)}

    <div class="${"content"}">
      Svelma components can be imported one at a time like so:
    </div>
    ${validate_component(Code, "Codeview").$$render(
		$$result,
		{
			lang: "html",
			code: `
<script>
  import { Button } from 'svelma'
</script>

<Button>I am a Button</Button>
    `
		},
		{},
		{
			default: () => `
    `
		}
	)}

    <div class="${"content"}">
      Or import the full Svelma package.
    </div>
    ${validate_component(Code, "Codeview").$$render(
		$$result,
		{
			lang: "html",
			code: `
<script>
  import { Svelma } from 'svelma'
</script>

<Svelma.Button>I am a Button</Svelma.Button>
    `
		},
		{},
		{
			default: () => `
    `
		}
	)}
    
  </div>
</div>

<hr class="${"is-medium"}">

<div class="${"media"}">
  <div class="${"media-left"}">
    <p class="${"title"}">2</p>
  </div>
  <div class="${"media-content"}">
    <p class="${"title is-spaced"}">CDN</p>
    ${validate_component(Message$1, "Message").$$render(
		$$result,
		{
			type: "is-info",
			showClose: false,
			title: "Coming soon.."
		},
		{},
		{
			default: () => `This feature is in progress`
		}
	)}
  </div>
</div>`;
});

/* src/routes/about.svelte generated by Svelte v3.16.7 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `<title>About</title>`, "")}

<h1>About this site</h1>

<p>This is the &#39;about&#39; page. There&#39;s not much here.</p>`;
});

/* src/routes/bulma/intro.svelte generated by Svelte v3.16.7 */

const Intro = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Bulma Elements",
			subtitle: "Using regular Bulma elements with Svelte"
		},
		{},
		{}
	)}

<p class="${"content"}">
  Many Bulma components are easy to use with regular Svelte code, without needing an additional layer of a Svelma component. The docs in this section go over how to use
  some of these elements in Svelte.
</p>`;
});

/* src/routes/bulma/media.svelte generated by Svelte v3.16.7 */

const Media = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let user;
	const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase());

	async function updateUser() {
		user = null;
		user = (await (await fetch("https://randomuser.me/api/")).json()).results[0];
	}

	onMount(() => updateUser());

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Media",
			subtitle: "Social media UI element"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			horizontal: true,
			code: `<script>
  import { onDestroy, onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  let user

  const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())

  async function updateUser() {
    user = null
    user = (await (await fetch('https://randomuser.me/api/')).json()).results[0]
  }
</script>

<button class="button is-primary" on:click={updateUser}>Fetch New User</button>

<br />
<br />

<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        {#if user}
          <img transition:fade class="is-rounded" src={user.picture.medium} alt="Profile picture" />
        {/if}
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        {#if user}
          <p transition:fade>
            <strong>{titleize(user.name.first)} {titleize(user.name.last)}</strong>
            <small>@{user.login.username}</small>
            <small />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
            egestas. Nullam condimentum luctus turpis.
          </p>
        {/if}
      </div>
      {#if user}
        <nav class="level is-mobile" transition:fade>
          <div class="level-left">
            <a href class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true" />
              </span>
            </a>
            <a href class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true" />
              </span>
            </a>
            <a href class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true" />
              </span>
            </a>
          </div>
        </nav>
      {/if}
    </div>
  </article>
</div>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <button class="${"button is-primary"}">Fetch New User</button>

    <br>
    <br>

    <div class="${"box"}">
      <article class="${"media"}">
        <div class="${"media-left"}">
          <figure class="${"image is-64x64"}">
            ${user
			? `<img class="${"is-rounded"}"${add_attribute("src", user.picture.medium, 0)} alt="${"Profile picture"}">`
			: ``}
          </figure>
        </div>
        <div class="${"media-content"}">
          <div class="${"content"}">
            ${user
			? `<p>
                <strong>${escape(titleize(user.name.first))} ${escape(titleize(user.name.last))}</strong>
                <small>@${escape(user.login.username)}</small>
                <small></small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
                egestas. Nullam condimentum luctus turpis.
              </p>`
			: ``}
          </div>
          ${user
			? `<nav class="${"level is-mobile"}">
              <div class="${"level-left"}">
                <a href class="${"level-item"}" aria-label="${"reply"}">
                  <span class="${"icon is-small"}">
                    <i class="${"fas fa-reply"}" aria-hidden="${"true"}"></i>
                  </span>
                </a>
                <a href class="${"level-item"}" aria-label="${"retweet"}">
                  <span class="${"icon is-small"}">
                    <i class="${"fas fa-retweet"}" aria-hidden="${"true"}"></i>
                  </span>
                </a>
                <a href class="${"level-item"}" aria-label="${"like"}">
                  <span class="${"icon is-small"}">
                    <i class="${"fas fa-heart"}" aria-hidden="${"true"}"></i>
                  </span>
                </a>
              </div>
            </nav>`
			: ``}
        </div>
      </article>
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

/* src/routes/bulma/table.svelte generated by Svelte v3.16.7 */

const Table = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let loading = false;
	let users = [];
	const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase());

	async function update() {
		loading = true;
		users = [];
		users = (await (await fetch("https://randomuser.me/api/?results=10")).json()).results;
		loading = false;
	}

	onMount(() => update());

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Tables",
			subtitle: "Pretty HTML tables"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  let loading = false
  let users = []

  const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())

  async function update() {
    loading = true

    users = []
    users = (await (await fetch('https://randomuser.me/api/?results=10')).json()).results

    loading = false
  }

  onMount(() => update())
</script>

<button class="button is-primary" on:click={update}>Update</button>
<button class="button is-primary" on:click={() => users = []}>No Data</button>

<br>
<br>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th></th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>City</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td><figure class="image"><img class="is-rounded" src="{user.picture.thumbnail}" alt=""></figure></td>
        <td>{titleize(user.name.first)}</td>
        <td>{titleize(user.name.last)}</td>
        <td>{titleize(user.location.city)}</td>
        <td>{titleize(user.location.state)}</td>
      </tr>
    {:else}
      {#if !loading}
        <tr>
          <td colspan="5">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p><i class="far fa-3x fa-frown"></i></p>
                <p>No data</p>
              </div>
            </section>
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <button class="${"button is-primary"}">Update</button>
    <button class="${"button is-primary"}">No Data</button>

    <br>
    <br>

    <table class="${"table is-fullwidth"}">
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        ${users.length
			? each(users, user => `<tr>
            <td><figure class="${"image"}"><img class="${"is-rounded"}"${add_attribute("src", user.picture.thumbnail, 0)} alt="${""}"></figure></td>
            <td>${escape(titleize(user.name.first))}</td>
            <td>${escape(titleize(user.name.last))}</td>
            <td>${escape(titleize(user.location.city))}</td>
            <td>${escape(titleize(user.location.state))}</td>
          </tr>`)
			: `${!loading
				? `<tr>
              <td colspan="${"5"}">
                <section class="${"section"}">
                  <div class="${"content has-text-grey has-text-centered"}">
                    <p><i class="${"far fa-3x fa-frown"}"></i></p>
                    <p>No data</p>
                  </div>
                </section>
              </td>
            </tr>`
				: ``}`}
      </tbody>
    </table>
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

/* src/routes/bulma/tiles.svelte generated by Svelte v3.16.7 */

const css$j = {
	code: ".tile.svelte-1q6iq0m:not(.is-ancestor){-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.is-dragging{-webkit-transform:rotate(25deg);transform:rotate(25deg);cursor:move}",
	map: "{\"version\":3,\"file\":\"tiles.svelte\",\"sources\":[\"tiles.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onDestroy, onMount } from 'svelte'\\n  import DocHeader from '../../components/DocHeader.svelte'\\n  import Example from '../../components/Example.svelte'\\n\\n  async function waitForDraggabilly() {\\n    return new Promise((resolve, reject) => {\\n      const interval = setInterval(() => {\\n        if (Draggabilly) {\\n          clearInterval(interval);\\n          resolve();\\n        }\\n      }, 250);\\n    });\\n  }\\n\\n  onMount(async () => {\\n    const draggables = document.querySelectorAll('.tile.is-child');\\n\\n    await waitForDraggabilly();\\n\\n    for (const elm of draggables) {\\n      let drag = new Draggabilly(elm, { // .tile:not(.is-ancestor)\\n        containment: '.tile.is-ancestor',\\n      });\\n    }\\n  })\\n</script>\\n\\n<style>\\n.tile:not(.is-ancestor) {\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n\\n:global(.is-dragging) {\\n  -webkit-transform: rotate(25deg);\\n          transform: rotate(25deg);\\n  cursor: move;\\n}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGlsZTpub3QoLmlzLWFuY2VzdG9yKSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG46Z2xvYmFsKC5pcy1kcmFnZ2luZykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiJdfQ== */</style>\\n\\n<DocHeader title=\\\"Tiles\\\" subtitle=\\\"2D grids with flexbox\\\" />\\n\\n<Example code={`<script>\\n  import { onMount } from 'svelte'\\n\\n  async waitForDraggabilly() {\\n    return new Promise((resolve, reject) => {\\n      const interval = setInterval({\\n        if (Draggabilly) {\\n          clearInterval(interval);\\n          resolve();\\n        }\\n      }, 100);\\n    });\\n  }\\n\\n  onMount(async () => {\\n    const draggables = document.querySelectorAll('.tile.is-child');\\n\\n    await waitForDraggabilly();\\n\\n    for (const elm of draggables) {\\n      let drag = new Draggabilly(elm, {\\n        containment: '.tile.is-ancestor',\\n      });\\n    }\\n  })\\n</script>\\n\\n<style>\\n.tile:not(.is-ancestor) {\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n}\\n\\n:global(.is-dragging) {\\n  -webkit-transform: rotate(25deg);\\n          transform: rotate(25deg);\\n  cursor: move;\\n}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9yb3V0ZXMvYnVsbWEvdGlsZXMuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGlsZTpub3QoLmlzLWFuY2VzdG9yKSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG46Z2xvYmFsKC5pcy1kcmFnZ2luZykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiJdfQ== */</style>\\n\\n<script src=\\\"https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js\\\"></script>\\n\\n<div class=\\\"tile is-ancestor\\\">\\n  <div class=\\\"tile is-vertical is-8\\\">\\n    <div class=\\\"tile\\\">\\n      <div class=\\\"tile is-parent is-vertical\\\">\\n        <article class=\\\"tile is-child notification is-primary\\\">\\n          <p class=\\\"title\\\">Vertical...</p>\\n          <p class=\\\"subtitle\\\">Top tile</p>\\n        </article>\\n        <article class=\\\"tile is-child notification is-warning\\\">\\n          <p class=\\\"title\\\">...tiles</p>\\n          <p class=\\\"subtitle\\\">Bottom tile</p>\\n        </article>\\n      </div>\\n      <div class=\\\"tile is-parent\\\">\\n        <article class=\\\"tile is-child notification is-info\\\">\\n          <p class=\\\"title\\\">Middle tile</p>\\n          <p class=\\\"subtitle\\\">With an image</p>\\n          <figure class=\\\"image is-4by3\\\">\\n            <img src=\\\"https://bulma.io/images/placeholders/640x480.png\\\" />\\n          </figure>\\n        </article>\\n      </div>\\n    </div>\\n    <div class=\\\"tile is-parent\\\">\\n      <article class=\\\"tile is-child notification is-danger\\\">\\n        <p class=\\\"title\\\">Wide tile</p>\\n        <p class=\\\"subtitle\\\">Aligned with the right tile</p>\\n        <div class=\\\"content\\\">\\n          <!-- Content -->\\n        </div>\\n      </article>\\n    </div>\\n  </div>\\n  <div class=\\\"tile is-parent\\\">\\n    <article class=\\\"tile is-child notification is-success\\\">\\n      <div class=\\\"content\\\">\\n        <p class=\\\"title\\\">Tall tile</p>\\n        <p class=\\\"subtitle\\\">With even more content</p>\\n        <div class=\\\"content\\\">\\n          <!-- Content -->\\n        </div>\\n      </div>\\n    </article>\\n  </div>\\n</div>`}>\\n  <div slot=\\\"preview\\\">\\n    <script src=\\\"https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js\\\"></script>\\n\\n    <h5 class=\\\"title\\\">Click to drag tiles</h5>\\n\\n    <div class=\\\"tile is-ancestor\\\">\\n      <div class=\\\"tile is-vertical is-8\\\">\\n        <div class=\\\"tile\\\">\\n          <div class=\\\"tile is-parent is-vertical\\\">\\n            <article class=\\\"tile is-child notification is-primary\\\">\\n              <p class=\\\"title\\\">Vertical...</p>\\n              <p class=\\\"subtitle\\\">Top tile</p>\\n            </article>\\n            <article class=\\\"tile is-child notification is-warning\\\">\\n              <p class=\\\"title\\\">...tiles</p>\\n              <p class=\\\"subtitle\\\">Bottom tile</p>\\n            </article>\\n          </div>\\n          <div class=\\\"tile is-parent\\\">\\n            <article class=\\\"tile is-child notification is-info\\\">\\n              <p class=\\\"title\\\">Middle tile</p>\\n              <p class=\\\"subtitle\\\">With an image</p>\\n              <figure class=\\\"image is-4by3\\\">\\n                <img src=\\\"https://bulma.io/images/placeholders/640x480.png\\\" alt=\\\"profile\\\" />\\n              </figure>\\n            </article>\\n          </div>\\n        </div>\\n        <div class=\\\"tile is-parent\\\">\\n          <article class=\\\"tile is-child notification is-danger\\\">\\n            <p class=\\\"title\\\">Wide tile</p>\\n            <p class=\\\"subtitle\\\">Aligned with the right tile</p>\\n            <div class=\\\"content\\\">\\n              <!-- Content -->\\n            </div>\\n          </article>\\n        </div>\\n      </div>\\n      <div class=\\\"tile is-parent\\\">\\n        <article class=\\\"tile is-child notification is-success\\\">\\n          <div class=\\\"content\\\">\\n            <p class=\\\"title\\\">Tall tile</p>\\n            <p class=\\\"subtitle\\\">With even more content</p>\\n            <div class=\\\"content\\\">\\n              <!-- Content -->\\n            </div>\\n          </div>\\n        </article>\\n      </div>\\n    </div>\\n  </div>\\n</Example>\"],\"names\":[],\"mappings\":\"AA8BA,oBAAK,KAAK,YAAY,CAAC,AAAC,CAAC,AACvB,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,AAC3B,CAAC,AAEO,YAAY,AAAE,CAAC,AACrB,iBAAiB,CAAE,OAAO,KAAK,CAAC,CACxB,SAAS,CAAE,OAAO,KAAK,CAAC,CAChC,MAAM,CAAE,IAAI,AACd,CAAC\"}"
};

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

const Tiles = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	onMount(async () => {
		const draggables = document.querySelectorAll(".tile.is-child");
		await waitForDraggabilly();

		for (const elm of draggables) {
			let drag = new Draggabilly(elm, { containment: ".tile.is-ancestor" });
		}
	});

	$$result.css.add(css$j);

	return `${validate_component(DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Tiles",
			subtitle: "2D grids with flexbox"
		},
		{},
		{}
	)}

${validate_component(Example, "Example").$$render(
		$$result,
		{
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
</div>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <script src="${"https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js"}"></script>

    <h5 class="${"title"}">Click to drag tiles</h5>

    <div class="${"tile is-ancestor svelte-1q6iq0m"}">
      <div class="${"tile is-vertical is-8 svelte-1q6iq0m"}">
        <div class="${"tile svelte-1q6iq0m"}">
          <div class="${"tile is-parent is-vertical svelte-1q6iq0m"}">
            <article class="${"tile is-child notification is-primary svelte-1q6iq0m"}">
              <p class="${"title"}">Vertical...</p>
              <p class="${"subtitle"}">Top tile</p>
            </article>
            <article class="${"tile is-child notification is-warning svelte-1q6iq0m"}">
              <p class="${"title"}">...tiles</p>
              <p class="${"subtitle"}">Bottom tile</p>
            </article>
          </div>
          <div class="${"tile is-parent svelte-1q6iq0m"}">
            <article class="${"tile is-child notification is-info svelte-1q6iq0m"}">
              <p class="${"title"}">Middle tile</p>
              <p class="${"subtitle"}">With an image</p>
              <figure class="${"image is-4by3"}">
                <img src="${"https://bulma.io/images/placeholders/640x480.png"}" alt="${"profile"}">
              </figure>
            </article>
          </div>
        </div>
        <div class="${"tile is-parent svelte-1q6iq0m"}">
          <article class="${"tile is-child notification is-danger svelte-1q6iq0m"}">
            <p class="${"title"}">Wide tile</p>
            <p class="${"subtitle"}">Aligned with the right tile</p>
            <div class="${"content"}">
              
            </div>
          </article>
        </div>
      </div>
      <div class="${"tile is-parent svelte-1q6iq0m"}">
        <article class="${"tile is-child notification is-success svelte-1q6iq0m"}">
          <div class="${"content"}">
            <p class="${"title"}">Tall tile</p>
            <p class="${"subtitle"}">With even more content</p>
            <div class="${"content"}">
              
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

/* src/routes/bulma/hero.svelte generated by Svelte v3.16.7 */

const Hero = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let type = "is-primary";

	return `${validate_component(DocHeader, "DocHeader").$$render($$result, { title: "Hero", subtitle: "Hero headers" }, {}, {})}

${validate_component(Example, "Example").$$render(
		$$result,
		{
			horizontal: true,
			code: `<script>
  import { fade } from 'svelte/transition'

  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']
  let type = 'is-primary'

  async function update() {
    type = ''

    setTimeout(() => {
      type = types[Math.floor(Math.random() * types.length)];
    }, 1000)
  }
</script>

<button class="button is-primary" on:click={update}>Update Hero</button>

<br />
<br />

{#if type}
  <section class="hero {type}" transition:slide>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Title
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div>
  </section>
{/if}`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <button class="${"button is-primary"}">Update Hero</button>

    <br>
    <br>

    ${ `<section class="${"hero " + escape(type)}">
        <div class="${"hero-body"}">
          <div class="${"container"}">
            <h1 class="${"title"}">
              Title
            </h1>
            <h2 class="${"subtitle"}">
              Subtitle
            </h2>
          </div>
        </div>
      </section>`
			}
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

/* src/routes/blog/index.svelte generated by Svelte v3.16.7 */

const css$k = {
	code: "ul.svelte-4fatyy{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\n\\t\\t\\treturn { posts };\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvcm91dGVzL2Jsb2cvaW5kZXguc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdHVsIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG4iXX0= */</style>\\n\\n<svelte:head>\\n\\t<title>Blog</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\n\\t{/each}\\n</ul>\"],\"names\":[],\"mappings\":\"AAaC,EAAE,cAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload$a({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$k);

	return `${($$result.head += `<title>Blog</title>`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-4fatyy"}">
	${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}
</ul>`;
});

/* src/routes/blog/[slug].svelte generated by Svelte v3.16.7 */

const css$l = {
	code: ".content.svelte-jdqhj6 h2{font-size:1.4em;font-weight:500}.content.svelte-jdqhj6 pre{background-color:#f9f9f9;-webkit-box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-jdqhj6 pre code{background-color:transparent;padding:0}.content.svelte-jdqhj6 ul{line-height:1.5}.content.svelte-jdqhj6 li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params, query }) {\\n\\t\\t// the `slug` parameter is available because\\n\\t\\t// this file is called [slug].html\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\tconst data = await res.json();\\n\\n\\t\\tif (res.status === 200) {\\n\\t\\t\\treturn { post: data };\\n\\t\\t} else {\\n\\t\\t\\tthis.error(res.status, data.message);\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\t-webkit-box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\n\\t\\t        box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYmxvZy9bc2x1Z10uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQzs7Ozs7OztFQU9DO0NBQ0Q7RUFDQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MseUJBQXlCO0VBQ3pCLHNEQUE4QztVQUE5Qyw4Q0FBOEM7RUFDOUMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyw2QkFBNkI7RUFDN0IsVUFBVTtDQUNYOztDQUVBO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9yb3V0ZXMvYmxvZy9bc2x1Z10uc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdC8qXG5cdFx0QnkgZGVmYXVsdCwgQ1NTIGlzIGxvY2FsbHkgc2NvcGVkIHRvIHRoZSBjb21wb25lbnQsXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cblx0XHRJbiB0aGlzIHBhZ2UsIFN2ZWx0ZSBjYW4ndCBrbm93IHdoaWNoIGVsZW1lbnRzIGFyZVxuXHRcdGdvaW5nIHRvIGFwcGVhciBpbnNpZGUgdGhlIHt7e3Bvc3QuaHRtbH19fSBibG9jayxcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxuXHRcdGFsbCBlbGVtZW50cyBpbnNpZGUgLmNvbnRlbnRcblx0Ki9cblx0LmNvbnRlbnQgOmdsb2JhbChoMikge1xuXHRcdGZvbnQtc2l6ZTogMS40ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwocHJlKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xuXHRcdHBhZGRpbmc6IDAuNWVtO1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHVsKSB7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwobGkpIHtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG4iXX0= */</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<h1>{post.title}</h1>\\n\\n<div class='content'>\\n\\t{@html post.html}\\n</div>\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,kBAAkB,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACtD,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$b({ params, query }) {
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$l);

	return `${($$result.head += `<title>${escape(post.title)}</title>`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-jdqhj6"}">
	${post.html}
</div>`;
});

const CONTEXT_KEY = {};

/* src/routes/_error.svelte generated by Svelte v3.16.7 */

const css$m = {
	code: "h1.svelte-1hjjbzs,p.svelte-1hjjbzs{margin:0 auto}h1.svelte-1hjjbzs{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1hjjbzs{margin:1em auto}@media(min-width: 480px){h1.svelte-1hjjbzs{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = undefined === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDO0dBQ0MsY0FBYztFQUNmO0NBQ0QiLCJmaWxlIjoic3JjL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdGgxLCBwIHtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cbiJdfQ== */</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,iBAAE,CAAE,CAAC,eAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,eAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$m);

	return `${($$result.head += `<title>${escape(status)}</title>`, "")}

<h1 class="${"svelte-1hjjbzs"}">${escape(status)}</h1>

<p class="${"svelte-1hjjbzs"}">${escape(error.message)}</p>

${ ``}`;
});

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.16.7 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `
	${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}
`
	})}`;
});

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

const stores = {
	page: writable({}),
	preloading: writable(null),
	session: writable(initial_data && initial_data.session)
};

stores.session.subscribe(async value => {

	return;
});

const stores$1 = () => getContext(CONTEXT_KEY);

/* src/components/Nav.svelte generated by Svelte v3.16.7 */

const css$n = {
	code: "img.logo.svelte-19nr2rz{padding:0 10px;vertical-align:top}.brand.svelte-19nr2rz{text-transform:uppercase;font-weight:bold}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n  export let segment\\n\\n  const rootUrl = undefined === 'development' ? '/' : '/svelma'\\n  const github = 'https://github.com/c0bra/svelma'\\n</script>\\n\\n<style>\\n  img.logo {\\n    padding: 0 10px;\\n    vertical-align: top;\\n  }\\n\\n  .brand {\\n    text-transform: uppercase;\\n    font-weight: bold;\\n  }\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL05hdi5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbWcubG9nbyB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuYnJhbmQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiJdfQ== */</style>\\n\\n{#if false}\\n  <nav>\\n    <ul>\\n      <li>\\n        <a class={segment === undefined ? 'selected' : ''} href=\\\".\\\">home</a>\\n      </li>\\n      <li>\\n        <a class={segment === 'about' ? 'selected' : ''} href=\\\"about\\\">about</a>\\n      </li>\\n\\n      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\n      <li>\\n        <a rel=\\\"prefetch\\\" class={segment === 'blog' ? 'selected' : ''} href=\\\"blog\\\">blog</a>\\n      </li>\\n    </ul>\\n  </nav>\\n{/if}\\n\\n<nav id=\\\"navbar\\\" class=\\\"navbar has-shadow is-spaced\\\">\\n  <div class=\\\"container\\\">\\n    <div class=\\\"navbar-brand\\\">\\n      <a href={rootUrl} class=\\\"navbar-item brand\\\">\\n        <img src=\\\"svelma-logo.svg\\\" class=\\\"logo\\\" alt=\\\"Svelma: Bulma components for Svelte\\\" />\\n        Svelma\\n      </a>\\n      <a class=\\\"navbar-item is-hidden-desktop\\\" href={github} target=\\\"_blank\\\">\\n        <span class=\\\"icon\\\" style=\\\"color: #333;\\\">\\n          <i class=\\\"fab fa-github-alt\\\" />\\n        </span>\\n      </a>\\n    </div>\\n    <div class=\\\"navbar-menu\\\">\\n      <div class=\\\"navbar-end\\\">\\n        <a class=\\\"navbar-item is-hidden-touch\\\" href={github} target=\\\"_blank\\\">\\n          <span class=\\\"icon\\\" style=\\\"color: #333;\\\">\\n            <i class=\\\"fab fa-lg fa-github-alt\\\" />\\n          </span>\\n        </a>\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAQE,GAAG,KAAK,eAAC,CAAC,AACR,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,cAAc,CAAE,GAAG,AACrB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,IAAI,AACnB,CAAC\"}"
};

const github = "https://github.com/c0bra/svelma";

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	const rootUrl =  "/svelma";
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$n);

	return `${ ``}

<nav id="${"navbar"}" class="${"navbar has-shadow is-spaced"}">
  <div class="${"container"}">
    <div class="${"navbar-brand"}">
      <a${add_attribute("href", rootUrl, 0)} class="${"navbar-item brand svelte-19nr2rz"}">
        <img src="${"svelma-logo.svg"}" class="${"logo svelte-19nr2rz"}" alt="${"Svelma: Bulma components for Svelte"}">
        Svelma
      </a>
      <a class="${"navbar-item is-hidden-desktop"}"${add_attribute("href", github, 0)} target="${"_blank"}">
        <span class="${"icon"}" style="${"color: #333;"}">
          <i class="${"fab fa-github-alt"}"></i>
        </span>
      </a>
    </div>
    <div class="${"navbar-menu"}">
      <div class="${"navbar-end"}">
        <a class="${"navbar-item is-hidden-touch"}"${add_attribute("href", github, 0)} target="${"_blank"}">
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
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

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
function identity$1(value) {
  return value;
}

var identity_1 = identity$1;

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

const css$o = {
	code: ".sidebar.svelte-1o002vm.svelte-1o002vm{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-negative:0;flex-shrink:0;width:16rem;padding:3rem 1rem;background:#f5f5f5}.sidebar.svelte-1o002vm>ul.svelte-1o002vm{margin-bottom:1.5em;margin-top:0}.sidebar.svelte-1o002vm>ul ul.svelte-1o002vm{margin-left:1.5em}.sidebar.svelte-1o002vm li.svelte-1o002vm{font-weight:600}.sidebar-label.svelte-1o002vm.svelte-1o002vm{margin-bottom:0.5em;color:#7a7a7a;font-size:0.9em;text-transform:uppercase;letter-spacing:0.1em}.sidebar-bg.svelte-1o002vm.svelte-1o002vm{position:absolute;top:0;left:0;bottom:0;right:50%;background:#f5f5f5;min-height:calc(100vh - 4rem);z-index:-1}@media screen and (max-width: 1087px){.sidebar.svelte-1o002vm.svelte-1o002vm{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;width:100%}}",
	map: "{\"version\":3,\"file\":\"Sidebar.svelte\",\"sources\":[\"Sidebar.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload({ params, query }) {\\n    // const res = await this.fetch('')\\n  }\\n</script>\\n\\n<script>\\n  import difference from 'lodash/difference'\\n  import { Svelma as Components } from 'svelma'\\n\\n  const formComponents = ['Input', 'Field', 'Switch'].sort()\\n  const omittedComponents = ['Tab']\\n  let components = ['Form', ...Object.keys(Components)].sort()\\n  components = difference(components, [...formComponents, ...omittedComponents])\\n\\n  const bulmaElements = ['Media', 'Table', 'Hero', 'Tiles'].sort()\\n</script>\\n\\n<style lang=\\\"scss\\\">.sidebar {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -ms-flex-negative: 0;\\n      flex-shrink: 0;\\n  width: 16rem;\\n  padding: 3rem 1rem;\\n  background: #f5f5f5; }\\n\\n.sidebar > ul {\\n  margin-bottom: 1.5em;\\n  margin-top: 0; }\\n  .sidebar > ul ul {\\n    margin-left: 1.5em; }\\n\\n.sidebar li {\\n  font-weight: 600; }\\n\\n.sidebar-label {\\n  margin-bottom: 0.5em;\\n  color: #7a7a7a;\\n  font-size: 0.9em;\\n  text-transform: uppercase;\\n  letter-spacing: 0.1em; }\\n\\n.sidebar-bg {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 50%;\\n  background: #f5f5f5;\\n  min-height: calc(100vh - 4rem);\\n  z-index: -1; }\\n\\n@media screen and (max-width: 1087px) {\\n  .sidebar {\\n    -webkit-box-ordinal-group: 3;\\n        -ms-flex-order: 2;\\n            order: 2;\\n    width: 100%; } }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NpZGViYXIuc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO01BQXRCLDBCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsb0JBQWM7TUFBZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYSxFQUFFO0VBQ2Y7SUFDRSxrQkFBa0IsRUFBRTs7QUFFeEI7RUFDRSxnQkFBZ0IsRUFBRTs7QUFFcEI7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCLEVBQUU7O0FBRXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVcsRUFBRTs7QUFFZjtFQUNFO0lBQ0UsNEJBQVE7UUFBUixpQkFBUTtZQUFSLFFBQVE7SUFDUixXQUFXLEVBQUUsRUFBRSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9TaWRlYmFyLnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxNnJlbTtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XG5cbi5zaWRlYmFyID4gdWwge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogMDsgfVxuICAuc2lkZWJhciA+IHVsIHVsIHtcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07IH1cblxuLnNpZGViYXIgbGkge1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5zaWRlYmFyLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGNvbG9yOiAjN2E3YTdhO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07IH1cblxuLnNpZGViYXItYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XG4gIHotaW5kZXg6IC0xOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODdweCkge1xuICAuc2lkZWJhciB7XG4gICAgb3JkZXI6IDI7XG4gICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1TaWRlYmFyLnN2ZWx0ZS5jc3MubWFwICovIl19 */</style>\\n\\n<div class=\\\"sidebar-bg\\\" />\\n<aside class=\\\"sidebar\\\">\\n  <p class=\\\"sidebar-label\\\">Installation</p>\\n  <ul>\\n    <li>\\n      <a href=\\\"install\\\">Start</a>\\n    </li>\\n  </ul>\\n  <p class=\\\"sidebar-label\\\">Bulma Elements</p>\\n  <ul>\\n    <li><a href=\\\"bulma/intro\\\">Intro</a></li>\\n    {#each bulmaElements as c}\\n      <li>\\n        <a href=\\\"bulma/{c.toLowerCase()}\\\">{c}</a>\\n      </li>\\n    {/each}\\n  </ul>\\n  <p class=\\\"sidebar-label\\\">Svelma Components</p>\\n  <ul>\\n    {#each components as c}\\n      <li>\\n        {#if c === 'Form'}\\n          <p>{c}</p>\\n          <ul>\\n            {#each formComponents as fc}\\n              <li>\\n                <a href=\\\"components/{fc.toLowerCase()}\\\">{fc}</a>\\n              </li>\\n            {/each}\\n          </ul>\\n        {:else}\\n          <a href=\\\"components/{c.toLowerCase()}\\\">{c}</a>\\n        {/if}\\n      </li>\\n    {/each}\\n    <!-- <li>\\n      <a href=\\\"/components/collapse\\\">Collapse</a>\\n    </li>\\n    <li>\\n      <a href=\\\"/components/icon\\\">Icon</a>\\n    </li> -->\\n  </ul>\\n</aside>\\n\"],\"names\":[],\"mappings\":\"AAkBmB,QAAQ,8BAAC,CAAC,AAC3B,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,CAC9B,iBAAiB,CAAE,CAAC,CAChB,WAAW,CAAE,CAAC,CAClB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,OAAO,AAAE,CAAC,AAExB,uBAAQ,CAAG,EAAE,eAAC,CAAC,AACb,aAAa,CAAE,KAAK,CACpB,UAAU,CAAE,CAAC,AAAE,CAAC,AAChB,uBAAQ,CAAG,EAAE,CAAC,EAAE,eAAC,CAAC,AAChB,WAAW,CAAE,KAAK,AAAE,CAAC,AAEzB,uBAAQ,CAAC,EAAE,eAAC,CAAC,AACX,WAAW,CAAE,GAAG,AAAE,CAAC,AAErB,cAAc,8BAAC,CAAC,AACd,aAAa,CAAE,KAAK,CACpB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,KAAK,AAAE,CAAC,AAE1B,WAAW,8BAAC,CAAC,AACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9B,OAAO,CAAE,EAAE,AAAE,CAAC,AAEhB,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACrC,QAAQ,8BAAC,CAAC,AACR,yBAAyB,CAAE,CAAC,CACxB,cAAc,CAAE,CAAC,CACb,KAAK,CAAE,CAAC,CAChB,KAAK,CAAE,IAAI,AAAE,CAAC,AAAC,CAAC\"}"
};

const Sidebar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const formComponents = ["Input", "Field", "Switch"].sort();
	const omittedComponents = ["Tab"];
	let components = ["Form", ...Object.keys(Svelma)].sort();
	components = difference_1(components, [...formComponents, ...omittedComponents]);
	const bulmaElements = ["Media", "Table", "Hero", "Tiles"].sort();
	$$result.css.add(css$o);

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
    ${each(bulmaElements, c => `<li class="${"svelte-1o002vm"}">
        <a href="${"bulma/" + escape(c.toLowerCase())}">${escape(c)}</a>
      </li>`)}
  </ul>
  <p class="${"sidebar-label svelte-1o002vm"}">Svelma Components</p>
  <ul class="${"svelte-1o002vm"}">
    ${each(components, c => `<li class="${"svelte-1o002vm"}">
        ${c === "Form"
	? `<p>${escape(c)}</p>
          <ul class="${"svelte-1o002vm"}">
            ${each(formComponents, fc => `<li class="${"svelte-1o002vm"}">
                <a href="${"components/" + escape(fc.toLowerCase())}">${escape(fc)}</a>
              </li>`)}
          </ul>`
	: `<a href="${"components/" + escape(c.toLowerCase())}">${escape(c)}</a>`}
      </li>`)}
    
  </ul>
</aside>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.16.7 */

const css$p = {
	code: ".docs.svelte-iocv4n{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.docs-main.svelte-iocv4n{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:3rem;background-color:white;min-height:calc(100vh - 4rem);overflow:auto}@media screen and (max-width: 1087px){.docs.svelte-iocv4n{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.docs-main.svelte-iocv4n{min-height:unset}}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload({ path }) {\\n    \\n    const url = `/svelma/${path}`.replace(/\\\\/\\\\//g, '/').replace(/([^\\\\/]$)/, '$1/')\\n\\n    return { url };\\n  }\\n</script>\\n\\n<script>\\n  import 'bulma/css/bulma.css'\\n  import 'highlight.js/styles/github.css'\\n\\n  import { afterUpdate } from 'svelte'\\n  import { stores } from '@sapper/app';\\n  import Nav from '../components/Nav.svelte'\\n  import Sidebar from '../components/Sidebar.svelte'\\n\\n  const { page } = stores()\\n\\n  export let segment\\n  let url\\n\\n  page.subscribe(({ path }) => {\\n    url = 'https://svelma.webpremiere.dev' + `/svelma/${path}`.replace(/\\\\/\\\\//g, '/').replace(/([^\\\\/]$)/, '$1/')\\n  })\\n\\n  // afterUpdate(function() {\\n  //   console.log('I updated!', this)\\n  // })\\n\\n</script>\\n\\n<style lang=\\\"scss\\\">.docs {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  position: relative;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row; }\\n\\n.docs-main {\\n  -webkit-box-flex: 1;\\n      -ms-flex-positive: 1;\\n          flex-grow: 1;\\n  -ms-flex-negative: 1;\\n      flex-shrink: 1;\\n  padding: 3rem;\\n  background-color: white;\\n  min-height: calc(100vh - 4rem);\\n  overflow: auto; }\\n\\n@media screen and (max-width: 1087px) {\\n  .docs {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column; }\\n  .docs-main {\\n    min-height: unset; } }\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvX2xheW91dC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBbUI7RUFBbkIsNkJBQW1CO01BQW5CLHVCQUFtQjtVQUFuQixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxtQkFBWTtNQUFaLG9CQUFZO1VBQVosWUFBWTtFQUNaLG9CQUFjO01BQWQsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGNBQWMsRUFBRTs7QUFFbEI7RUFDRTtJQUNFLDRCQUFzQjtJQUF0Qiw2QkFBc0I7UUFBdEIsMEJBQXNCO1lBQXRCLHNCQUFzQixFQUFFO0VBQzFCO0lBQ0UsaUJBQWlCLEVBQUUsRUFBRSIsImZpbGUiOiJzcmMvcm91dGVzL19sYXlvdXQuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLmRvY3MtbWFpbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODdweCkge1xuICAuZG9jcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuZG9jcy1tYWluIHtcbiAgICBtaW4taGVpZ2h0OiB1bnNldDsgfSB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPV9sYXlvdXQuc3ZlbHRlLmNzcy5tYXAgKi8iXX0= */</style>\\n\\n<svelte:head>\\n  <title>Svelma</title>\\n  <meta property=\\\"og:site_name\\\" content=\\\"Svelma\\\" />\\n  <meta property=\\\"og:image\\\" content=\\\"https://webpremiere.dev/svelma-logo.png\\\" />\\n  <meta property=\\\"og:image:width\\\" content=\\\"200\\\" />\\n  <meta property=\\\"og:image:height\\\" content=\\\"200\\\" />\\n  <meta property=\\\"og:url\\\" content={url}>\\n</svelte:head>\\n\\n<Nav {segment} />\\n\\n<main>\\n  <section class=\\\"docs\\\">\\n    <Sidebar />\\n\\n    <div class=\\\"docs-main\\\">\\n      <slot />\\n    </div>\\n  </section>\\n</main>\"],\"names\":[],\"mappings\":\"AAiCmB,KAAK,cAAC,CAAC,AACxB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,kBAAkB,CAAE,UAAU,CAC9B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,GAAG,CACnB,cAAc,CAAE,GAAG,AAAE,CAAC,AAEhC,UAAU,cAAC,CAAC,AACV,gBAAgB,CAAE,CAAC,CACf,iBAAiB,CAAE,CAAC,CAChB,SAAS,CAAE,CAAC,CACpB,iBAAiB,CAAE,CAAC,CAChB,WAAW,CAAE,CAAC,CAClB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9B,QAAQ,CAAE,IAAI,AAAE,CAAC,AAEnB,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACrC,KAAK,cAAC,CAAC,AACL,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CACzB,kBAAkB,CAAE,MAAM,CACtB,cAAc,CAAE,MAAM,AAAE,CAAC,AACnC,UAAU,cAAC,CAAC,AACV,UAAU,CAAE,KAAK,AAAE,CAAC,AAAC,CAAC\"}"
};

async function preload$c({ path }) {
	const url = `/svelma/${path}`.replace(/\/\//g, "/").replace(/([^\/]$)/, "$1/");
	return { url };
}

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const { page } = stores$1();
	let { segment } = $$props;
	let url;

	page.subscribe(({ path }) => {
		url = "https://svelma.webpremiere.dev" + `/svelma/${path}`.replace(/\/\//g, "/").replace(/([^\/]$)/, "$1/");
	});

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$p);

	return `${($$result.head += `<title>Svelma</title><meta property="${"og:site_name"}" content="${"Svelma"}"><meta property="${"og:image"}" content="${"https://webpremiere.dev/svelma-logo.png"}"><meta property="${"og:image:width"}" content="${"200"}"><meta property="${"og:image:height"}" content="${"200"}"><meta property="${"og:url"}"${add_attribute("content", url, 0)}>`, "")}

${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main>
  <section class="${"docs svelte-iocv4n"}">
    ${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}

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
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// components/notification.svelte
			pattern: /^\/components\/notification\/?$/,
			parts: [
				null,
				{ name: "components_notification", file: "components/notification.svelte", component: Notification_1, preload: preload }
			]
		},

		{
			// components/collapse.svelte
			pattern: /^\/components\/collapse\/?$/,
			parts: [
				null,
				{ name: "components_collapse", file: "components/collapse.svelte", component: Collapse_1, preload: preload$1 }
			]
		},

		{
			// components/progress.svelte
			pattern: /^\/components\/progress\/?$/,
			parts: [
				null,
				{ name: "components_progress", file: "components/progress.svelte", component: Progress_1 }
			]
		},

		{
			// components/snackbar.svelte
			pattern: /^\/components\/snackbar\/?$/,
			parts: [
				null,
				{ name: "components_snackbar", file: "components/snackbar.svelte", component: Snackbar_1, preload: preload$2 }
			]
		},

		{
			// components/message.svelte
			pattern: /^\/components\/message\/?$/,
			parts: [
				null,
				{ name: "components_message", file: "components/message.svelte", component: Message_1 }
			]
		},

		{
			// components/button.svelte
			pattern: /^\/components\/button\/?$/,
			parts: [
				null,
				{ name: "components_button", file: "components/button.svelte", component: Button_1, preload: preload$3 }
			]
		},

		{
			// components/dialog.svelte
			pattern: /^\/components\/dialog\/?$/,
			parts: [
				null,
				{ name: "components_dialog", file: "components/dialog.svelte", component: Dialog_1, preload: preload$4 }
			]
		},

		{
			// components/switch.svelte
			pattern: /^\/components\/switch\/?$/,
			parts: [
				null,
				{ name: "components_switch", file: "components/switch.svelte", component: Switch_1, preload: preload$5 }
			]
		},

		{
			// components/field.svelte
			pattern: /^\/components\/field\/?$/,
			parts: [
				null,
				{ name: "components_field", file: "components/field.svelte", component: Field_1, preload: preload$6 }
			]
		},

		{
			// components/input.svelte
			pattern: /^\/components\/input\/?$/,
			parts: [
				null,
				{ name: "components_input", file: "components/input.svelte", component: Input_1, preload: preload$7 }
			]
		},

		{
			// components/modal.svelte
			pattern: /^\/components\/modal\/?$/,
			parts: [
				null,
				{ name: "components_modal", file: "components/modal.svelte", component: Modal_1 }
			]
		},

		{
			// components/toast.svelte
			pattern: /^\/components\/toast\/?$/,
			parts: [
				null,
				{ name: "components_toast", file: "components/toast.svelte", component: Toast_1, preload: preload$8 }
			]
		},

		{
			// components/icon.svelte
			pattern: /^\/components\/icon\/?$/,
			parts: [
				null,
				{ name: "components_icon", file: "components/icon.svelte", component: Icon_1 }
			]
		},

		{
			// components/tabs.svelte
			pattern: /^\/components\/tabs\/?$/,
			parts: [
				null,
				{ name: "components_tabs", file: "components/tabs.svelte", component: Tabs_1, preload: preload$9 }
			]
		},

		{
			// install/index.svelte
			pattern: /^\/install\/?$/,
			parts: [
				{ name: "install", file: "install/index.svelte", component: Install }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// bulma/intro.svelte
			pattern: /^\/bulma\/intro\/?$/,
			parts: [
				null,
				{ name: "bulma_intro", file: "bulma/intro.svelte", component: Intro }
			]
		},

		{
			// bulma/media.svelte
			pattern: /^\/bulma\/media\/?$/,
			parts: [
				null,
				{ name: "bulma_media", file: "bulma/media.svelte", component: Media }
			]
		},

		{
			// bulma/table.svelte
			pattern: /^\/bulma\/table\/?$/,
			parts: [
				null,
				{ name: "bulma_table", file: "bulma/table.svelte", component: Table }
			]
		},

		{
			// bulma/tiles.svelte
			pattern: /^\/bulma\/tiles\/?$/,
			parts: [
				null,
				{ name: "bulma_tiles", file: "bulma/tiles.svelte", component: Tiles }
			]
		},

		{
			// bulma/hero.svelte
			pattern: /^\/bulma\/hero\/?$/,
			parts: [
				null,
				{ name: "bulma_hero", file: "bulma/hero.svelte", component: Hero }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload$a }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D, preload: preload$b, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root: Layout,
	root_preload: preload$c,
	error: Error$1
};

const build_dir = "__sapper__/build";

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
				console.error(err);
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
var escaped$1 = {
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
    return escaped$1[c] || c;
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
        else if (char in escaped$1) {
            result += escaped$1[char];
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
	const get_build_info =  (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

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
		res.setHeader('Cache-Control',  'max-age=600');

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
					host: req.headers.host,
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
							host: req.headers.host,
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
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
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

var mime_raw = "application/andrew-inset\t\t\tez\napplication/applixware\t\t\t\taw\napplication/atom+xml\t\t\t\tatom\napplication/atomcat+xml\t\t\t\tatomcat\napplication/atomsvc+xml\t\t\t\tatomsvc\napplication/ccxml+xml\t\t\t\tccxml\napplication/cdmi-capability\t\t\tcdmia\napplication/cdmi-container\t\t\tcdmic\napplication/cdmi-domain\t\t\t\tcdmid\napplication/cdmi-object\t\t\t\tcdmio\napplication/cdmi-queue\t\t\t\tcdmiq\napplication/cu-seeme\t\t\t\tcu\napplication/davmount+xml\t\t\tdavmount\napplication/docbook+xml\t\t\t\tdbk\napplication/dssc+der\t\t\t\tdssc\napplication/dssc+xml\t\t\t\txdssc\napplication/ecmascript\t\t\t\tecma\napplication/emma+xml\t\t\t\temma\napplication/epub+zip\t\t\t\tepub\napplication/exi\t\t\t\t\texi\napplication/font-tdpfr\t\t\t\tpfr\napplication/gml+xml\t\t\t\tgml\napplication/gpx+xml\t\t\t\tgpx\napplication/gxf\t\t\t\t\tgxf\napplication/hyperstudio\t\t\t\tstk\napplication/inkml+xml\t\t\t\tink inkml\napplication/ipfix\t\t\t\tipfix\napplication/java-archive\t\t\tjar\napplication/java-serialized-object\t\tser\napplication/java-vm\t\t\t\tclass\napplication/javascript\t\t\t\tjs\napplication/json\t\t\t\tjson map\napplication/jsonml+json\t\t\t\tjsonml\napplication/lost+xml\t\t\t\tlostxml\napplication/mac-binhex40\t\t\thqx\napplication/mac-compactpro\t\t\tcpt\napplication/mads+xml\t\t\t\tmads\napplication/marc\t\t\t\tmrc\napplication/marcxml+xml\t\t\t\tmrcx\napplication/mathematica\t\t\t\tma nb mb\napplication/mathml+xml\t\t\t\tmathml\napplication/mbox\t\t\t\tmbox\napplication/mediaservercontrol+xml\t\tmscml\napplication/metalink+xml\t\t\tmetalink\napplication/metalink4+xml\t\t\tmeta4\napplication/mets+xml\t\t\t\tmets\napplication/mods+xml\t\t\t\tmods\napplication/mp21\t\t\t\tm21 mp21\napplication/mp4\t\t\t\t\tmp4s\napplication/msword\t\t\t\tdoc dot\napplication/mxf\t\t\t\t\tmxf\napplication/octet-stream\tbin dms lrf mar so dist distz pkg bpk dump elc deploy\napplication/oda\t\t\t\t\toda\napplication/oebps-package+xml\t\t\topf\napplication/ogg\t\t\t\t\togx\napplication/omdoc+xml\t\t\t\tomdoc\napplication/onenote\t\t\t\tonetoc onetoc2 onetmp onepkg\napplication/oxps\t\t\t\toxps\napplication/patch-ops-error+xml\t\t\txer\napplication/pdf\t\t\t\t\tpdf\napplication/pgp-encrypted\t\t\tpgp\napplication/pgp-signature\t\t\tasc sig\napplication/pics-rules\t\t\t\tprf\napplication/pkcs10\t\t\t\tp10\napplication/pkcs7-mime\t\t\t\tp7m p7c\napplication/pkcs7-signature\t\t\tp7s\napplication/pkcs8\t\t\t\tp8\napplication/pkix-attr-cert\t\t\tac\napplication/pkix-cert\t\t\t\tcer\napplication/pkix-crl\t\t\t\tcrl\napplication/pkix-pkipath\t\t\tpkipath\napplication/pkixcmp\t\t\t\tpki\napplication/pls+xml\t\t\t\tpls\napplication/postscript\t\t\t\tai eps ps\napplication/prs.cww\t\t\t\tcww\napplication/pskc+xml\t\t\t\tpskcxml\napplication/rdf+xml\t\t\t\trdf\napplication/reginfo+xml\t\t\t\trif\napplication/relax-ng-compact-syntax\t\trnc\napplication/resource-lists+xml\t\t\trl\napplication/resource-lists-diff+xml\t\trld\napplication/rls-services+xml\t\t\trs\napplication/rpki-ghostbusters\t\t\tgbr\napplication/rpki-manifest\t\t\tmft\napplication/rpki-roa\t\t\t\troa\napplication/rsd+xml\t\t\t\trsd\napplication/rss+xml\t\t\t\trss\napplication/rtf\t\t\t\t\trtf\napplication/sbml+xml\t\t\t\tsbml\napplication/scvp-cv-request\t\t\tscq\napplication/scvp-cv-response\t\t\tscs\napplication/scvp-vp-request\t\t\tspq\napplication/scvp-vp-response\t\t\tspp\napplication/sdp\t\t\t\t\tsdp\napplication/set-payment-initiation\t\tsetpay\napplication/set-registration-initiation\t\tsetreg\napplication/shf+xml\t\t\t\tshf\napplication/smil+xml\t\t\t\tsmi smil\napplication/sparql-query\t\t\trq\napplication/sparql-results+xml\t\t\tsrx\napplication/srgs\t\t\t\tgram\napplication/srgs+xml\t\t\t\tgrxml\napplication/sru+xml\t\t\t\tsru\napplication/ssdl+xml\t\t\t\tssdl\napplication/ssml+xml\t\t\t\tssml\napplication/tei+xml\t\t\t\ttei teicorpus\napplication/thraud+xml\t\t\t\ttfi\napplication/timestamped-data\t\t\ttsd\napplication/vnd.3gpp.pic-bw-large\t\tplb\napplication/vnd.3gpp.pic-bw-small\t\tpsb\napplication/vnd.3gpp.pic-bw-var\t\t\tpvb\napplication/vnd.3gpp2.tcap\t\t\ttcap\napplication/vnd.3m.post-it-notes\t\tpwn\napplication/vnd.accpac.simply.aso\t\taso\napplication/vnd.accpac.simply.imp\t\timp\napplication/vnd.acucobol\t\t\tacu\napplication/vnd.acucorp\t\t\t\tatc acutc\napplication/vnd.adobe.air-application-installer-package+zip\tair\napplication/vnd.adobe.formscentral.fcdt\t\tfcdt\napplication/vnd.adobe.fxp\t\t\tfxp fxpl\napplication/vnd.adobe.xdp+xml\t\t\txdp\napplication/vnd.adobe.xfdf\t\t\txfdf\napplication/vnd.ahead.space\t\t\tahead\napplication/vnd.airzip.filesecure.azf\t\tazf\napplication/vnd.airzip.filesecure.azs\t\tazs\napplication/vnd.amazon.ebook\t\t\tazw\napplication/vnd.americandynamics.acc\t\tacc\napplication/vnd.amiga.ami\t\t\tami\napplication/vnd.android.package-archive\t\tapk\napplication/vnd.anser-web-certificate-issue-initiation\tcii\napplication/vnd.anser-web-funds-transfer-initiation\tfti\napplication/vnd.antix.game-component\t\tatx\napplication/vnd.apple.installer+xml\t\tmpkg\napplication/vnd.apple.mpegurl\t\t\tm3u8\napplication/vnd.aristanetworks.swi\t\tswi\napplication/vnd.astraea-software.iota\t\tiota\napplication/vnd.audiograph\t\t\taep\napplication/vnd.blueice.multipass\t\tmpm\napplication/vnd.bmi\t\t\t\tbmi\napplication/vnd.businessobjects\t\t\trep\napplication/vnd.chemdraw+xml\t\t\tcdxml\napplication/vnd.chipnuts.karaoke-mmd\t\tmmd\napplication/vnd.cinderella\t\t\tcdy\napplication/vnd.claymore\t\t\tcla\napplication/vnd.cloanto.rp9\t\t\trp9\napplication/vnd.clonk.c4group\t\t\tc4g c4d c4f c4p c4u\napplication/vnd.cluetrust.cartomobile-config\t\tc11amc\napplication/vnd.cluetrust.cartomobile-config-pkg\tc11amz\napplication/vnd.commonspace\t\t\tcsp\napplication/vnd.contact.cmsg\t\t\tcdbcmsg\napplication/vnd.cosmocaller\t\t\tcmc\napplication/vnd.crick.clicker\t\t\tclkx\napplication/vnd.crick.clicker.keyboard\t\tclkk\napplication/vnd.crick.clicker.palette\t\tclkp\napplication/vnd.crick.clicker.template\t\tclkt\napplication/vnd.crick.clicker.wordbank\t\tclkw\napplication/vnd.criticaltools.wbs+xml\t\twbs\napplication/vnd.ctc-posml\t\t\tpml\napplication/vnd.cups-ppd\t\t\tppd\napplication/vnd.curl.car\t\t\tcar\napplication/vnd.curl.pcurl\t\t\tpcurl\napplication/vnd.dart\t\t\t\tdart\napplication/vnd.data-vision.rdz\t\t\trdz\napplication/vnd.dece.data\t\t\tuvf uvvf uvd uvvd\napplication/vnd.dece.ttml+xml\t\t\tuvt uvvt\napplication/vnd.dece.unspecified\t\tuvx uvvx\napplication/vnd.dece.zip\t\t\tuvz uvvz\napplication/vnd.denovo.fcselayout-link\t\tfe_launch\napplication/vnd.dna\t\t\t\tdna\napplication/vnd.dolby.mlp\t\t\tmlp\napplication/vnd.dpgraph\t\t\t\tdpg\napplication/vnd.dreamfactory\t\t\tdfac\napplication/vnd.ds-keypoint\t\t\tkpxx\napplication/vnd.dvb.ait\t\t\t\tait\napplication/vnd.dvb.service\t\t\tsvc\napplication/vnd.dynageo\t\t\t\tgeo\napplication/vnd.ecowin.chart\t\t\tmag\napplication/vnd.enliven\t\t\t\tnml\napplication/vnd.epson.esf\t\t\tesf\napplication/vnd.epson.msf\t\t\tmsf\napplication/vnd.epson.quickanime\t\tqam\napplication/vnd.epson.salt\t\t\tslt\napplication/vnd.epson.ssf\t\t\tssf\napplication/vnd.eszigno3+xml\t\t\tes3 et3\napplication/vnd.ezpix-album\t\t\tez2\napplication/vnd.ezpix-package\t\t\tez3\napplication/vnd.fdf\t\t\t\tfdf\napplication/vnd.fdsn.mseed\t\t\tmseed\napplication/vnd.fdsn.seed\t\t\tseed dataless\napplication/vnd.flographit\t\t\tgph\napplication/vnd.fluxtime.clip\t\t\tftc\napplication/vnd.framemaker\t\t\tfm frame maker book\napplication/vnd.frogans.fnc\t\t\tfnc\napplication/vnd.frogans.ltf\t\t\tltf\napplication/vnd.fsc.weblaunch\t\t\tfsc\napplication/vnd.fujitsu.oasys\t\t\toas\napplication/vnd.fujitsu.oasys2\t\t\toa2\napplication/vnd.fujitsu.oasys3\t\t\toa3\napplication/vnd.fujitsu.oasysgp\t\t\tfg5\napplication/vnd.fujitsu.oasysprs\t\tbh2\napplication/vnd.fujixerox.ddd\t\t\tddd\napplication/vnd.fujixerox.docuworks\t\txdw\napplication/vnd.fujixerox.docuworks.binder\txbd\napplication/vnd.fuzzysheet\t\t\tfzs\napplication/vnd.genomatix.tuxedo\t\ttxd\napplication/vnd.geogebra.file\t\t\tggb\napplication/vnd.geogebra.tool\t\t\tggt\napplication/vnd.geometry-explorer\t\tgex gre\napplication/vnd.geonext\t\t\t\tgxt\napplication/vnd.geoplan\t\t\t\tg2w\napplication/vnd.geospace\t\t\tg3w\napplication/vnd.gmx\t\t\t\tgmx\napplication/vnd.google-earth.kml+xml\t\tkml\napplication/vnd.google-earth.kmz\t\tkmz\napplication/vnd.grafeq\t\t\t\tgqf gqs\napplication/vnd.groove-account\t\t\tgac\napplication/vnd.groove-help\t\t\tghf\napplication/vnd.groove-identity-message\t\tgim\napplication/vnd.groove-injector\t\t\tgrv\napplication/vnd.groove-tool-message\t\tgtm\napplication/vnd.groove-tool-template\t\ttpl\napplication/vnd.groove-vcard\t\t\tvcg\napplication/vnd.hal+xml\t\t\t\thal\napplication/vnd.handheld-entertainment+xml\tzmm\napplication/vnd.hbci\t\t\t\thbci\napplication/vnd.hhe.lesson-player\t\tles\napplication/vnd.hp-hpgl\t\t\t\thpgl\napplication/vnd.hp-hpid\t\t\t\thpid\napplication/vnd.hp-hps\t\t\t\thps\napplication/vnd.hp-jlyt\t\t\t\tjlt\napplication/vnd.hp-pcl\t\t\t\tpcl\napplication/vnd.hp-pclxl\t\t\tpclxl\napplication/vnd.hydrostatix.sof-data\t\tsfd-hdstx\napplication/vnd.ibm.minipay\t\t\tmpy\napplication/vnd.ibm.modcap\t\t\tafp listafp list3820\napplication/vnd.ibm.rights-management\t\tirm\napplication/vnd.ibm.secure-container\t\tsc\napplication/vnd.iccprofile\t\t\ticc icm\napplication/vnd.igloader\t\t\tigl\napplication/vnd.immervision-ivp\t\t\tivp\napplication/vnd.immervision-ivu\t\t\tivu\napplication/vnd.insors.igm\t\t\tigm\napplication/vnd.intercon.formnet\t\txpw xpx\napplication/vnd.intergeo\t\t\ti2g\napplication/vnd.intu.qbo\t\t\tqbo\napplication/vnd.intu.qfx\t\t\tqfx\napplication/vnd.ipunplugged.rcprofile\t\trcprofile\napplication/vnd.irepository.package+xml\t\tirp\napplication/vnd.is-xpr\t\t\t\txpr\napplication/vnd.isac.fcs\t\t\tfcs\napplication/vnd.jam\t\t\t\tjam\napplication/vnd.jcp.javame.midlet-rms\t\trms\napplication/vnd.jisp\t\t\t\tjisp\napplication/vnd.joost.joda-archive\t\tjoda\napplication/vnd.kahootz\t\t\t\tktz ktr\napplication/vnd.kde.karbon\t\t\tkarbon\napplication/vnd.kde.kchart\t\t\tchrt\napplication/vnd.kde.kformula\t\t\tkfo\napplication/vnd.kde.kivio\t\t\tflw\napplication/vnd.kde.kontour\t\t\tkon\napplication/vnd.kde.kpresenter\t\t\tkpr kpt\napplication/vnd.kde.kspread\t\t\tksp\napplication/vnd.kde.kword\t\t\tkwd kwt\napplication/vnd.kenameaapp\t\t\thtke\napplication/vnd.kidspiration\t\t\tkia\napplication/vnd.kinar\t\t\t\tkne knp\napplication/vnd.koan\t\t\t\tskp skd skt skm\napplication/vnd.kodak-descriptor\t\tsse\napplication/vnd.las.las+xml\t\t\tlasxml\napplication/vnd.llamagraphics.life-balance.desktop\tlbd\napplication/vnd.llamagraphics.life-balance.exchange+xml\tlbe\napplication/vnd.lotus-1-2-3\t\t\t123\napplication/vnd.lotus-approach\t\t\tapr\napplication/vnd.lotus-freelance\t\t\tpre\napplication/vnd.lotus-notes\t\t\tnsf\napplication/vnd.lotus-organizer\t\t\torg\napplication/vnd.lotus-screencam\t\t\tscm\napplication/vnd.lotus-wordpro\t\t\tlwp\napplication/vnd.macports.portpkg\t\tportpkg\napplication/vnd.mcd\t\t\t\tmcd\napplication/vnd.medcalcdata\t\t\tmc1\napplication/vnd.mediastation.cdkey\t\tcdkey\napplication/vnd.mfer\t\t\t\tmwf\napplication/vnd.mfmp\t\t\t\tmfm\napplication/vnd.micrografx.flo\t\t\tflo\napplication/vnd.micrografx.igx\t\t\tigx\napplication/vnd.mif\t\t\t\tmif\napplication/vnd.mobius.daf\t\t\tdaf\napplication/vnd.mobius.dis\t\t\tdis\napplication/vnd.mobius.mbk\t\t\tmbk\napplication/vnd.mobius.mqy\t\t\tmqy\napplication/vnd.mobius.msl\t\t\tmsl\napplication/vnd.mobius.plc\t\t\tplc\napplication/vnd.mobius.txf\t\t\ttxf\napplication/vnd.mophun.application\t\tmpn\napplication/vnd.mophun.certificate\t\tmpc\napplication/vnd.mozilla.xul+xml\t\t\txul\napplication/vnd.ms-artgalry\t\t\tcil\napplication/vnd.ms-cab-compressed\t\tcab\napplication/vnd.ms-excel\t\t\txls xlm xla xlc xlt xlw\napplication/vnd.ms-excel.addin.macroenabled.12\t\txlam\napplication/vnd.ms-excel.sheet.binary.macroenabled.12\txlsb\napplication/vnd.ms-excel.sheet.macroenabled.12\t\txlsm\napplication/vnd.ms-excel.template.macroenabled.12\txltm\napplication/vnd.ms-fontobject\t\t\teot\napplication/vnd.ms-htmlhelp\t\t\tchm\napplication/vnd.ms-ims\t\t\t\tims\napplication/vnd.ms-lrm\t\t\t\tlrm\napplication/vnd.ms-officetheme\t\t\tthmx\napplication/vnd.ms-pki.seccat\t\t\tcat\napplication/vnd.ms-pki.stl\t\t\tstl\napplication/vnd.ms-powerpoint\t\t\tppt pps pot\napplication/vnd.ms-powerpoint.addin.macroenabled.12\t\tppam\napplication/vnd.ms-powerpoint.presentation.macroenabled.12\tpptm\napplication/vnd.ms-powerpoint.slide.macroenabled.12\t\tsldm\napplication/vnd.ms-powerpoint.slideshow.macroenabled.12\t\tppsm\napplication/vnd.ms-powerpoint.template.macroenabled.12\t\tpotm\napplication/vnd.ms-project\t\t\tmpp mpt\napplication/vnd.ms-word.document.macroenabled.12\tdocm\napplication/vnd.ms-word.template.macroenabled.12\tdotm\napplication/vnd.ms-works\t\t\twps wks wcm wdb\napplication/vnd.ms-wpl\t\t\t\twpl\napplication/vnd.ms-xpsdocument\t\t\txps\napplication/vnd.mseq\t\t\t\tmseq\napplication/vnd.musician\t\t\tmus\napplication/vnd.muvee.style\t\t\tmsty\napplication/vnd.mynfc\t\t\t\ttaglet\napplication/vnd.neurolanguage.nlu\t\tnlu\napplication/vnd.nitf\t\t\t\tntf nitf\napplication/vnd.noblenet-directory\t\tnnd\napplication/vnd.noblenet-sealer\t\t\tnns\napplication/vnd.noblenet-web\t\t\tnnw\napplication/vnd.nokia.n-gage.data\t\tngdat\napplication/vnd.nokia.n-gage.symbian.install\tn-gage\napplication/vnd.nokia.radio-preset\t\trpst\napplication/vnd.nokia.radio-presets\t\trpss\napplication/vnd.novadigm.edm\t\t\tedm\napplication/vnd.novadigm.edx\t\t\tedx\napplication/vnd.novadigm.ext\t\t\text\napplication/vnd.oasis.opendocument.chart\t\todc\napplication/vnd.oasis.opendocument.chart-template\totc\napplication/vnd.oasis.opendocument.database\t\todb\napplication/vnd.oasis.opendocument.formula\t\todf\napplication/vnd.oasis.opendocument.formula-template\todft\napplication/vnd.oasis.opendocument.graphics\t\todg\napplication/vnd.oasis.opendocument.graphics-template\totg\napplication/vnd.oasis.opendocument.image\t\todi\napplication/vnd.oasis.opendocument.image-template\toti\napplication/vnd.oasis.opendocument.presentation\t\todp\napplication/vnd.oasis.opendocument.presentation-template\totp\napplication/vnd.oasis.opendocument.spreadsheet\t\tods\napplication/vnd.oasis.opendocument.spreadsheet-template\tots\napplication/vnd.oasis.opendocument.text\t\t\todt\napplication/vnd.oasis.opendocument.text-master\t\todm\napplication/vnd.oasis.opendocument.text-template\tott\napplication/vnd.oasis.opendocument.text-web\t\toth\napplication/vnd.olpc-sugar\t\t\txo\napplication/vnd.oma.dd2+xml\t\t\tdd2\napplication/vnd.openofficeorg.extension\t\toxt\napplication/vnd.openxmlformats-officedocument.presentationml.presentation\tpptx\napplication/vnd.openxmlformats-officedocument.presentationml.slide\tsldx\napplication/vnd.openxmlformats-officedocument.presentationml.slideshow\tppsx\napplication/vnd.openxmlformats-officedocument.presentationml.template\tpotx\napplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet\txlsx\napplication/vnd.openxmlformats-officedocument.spreadsheetml.template\txltx\napplication/vnd.openxmlformats-officedocument.wordprocessingml.document\tdocx\napplication/vnd.openxmlformats-officedocument.wordprocessingml.template\tdotx\napplication/vnd.osgeo.mapguide.package\t\tmgp\napplication/vnd.osgi.dp\t\t\t\tdp\napplication/vnd.osgi.subsystem\t\t\tesa\napplication/vnd.palm\t\t\t\tpdb pqa oprc\napplication/vnd.pawaafile\t\t\tpaw\napplication/vnd.pg.format\t\t\tstr\napplication/vnd.pg.osasli\t\t\tei6\napplication/vnd.picsel\t\t\t\tefif\napplication/vnd.pmi.widget\t\t\twg\napplication/vnd.pocketlearn\t\t\tplf\napplication/vnd.powerbuilder6\t\t\tpbd\napplication/vnd.previewsystems.box\t\tbox\napplication/vnd.proteus.magazine\t\tmgz\napplication/vnd.publishare-delta-tree\t\tqps\napplication/vnd.pvi.ptid1\t\t\tptid\napplication/vnd.quark.quarkxpress\t\tqxd qxt qwd qwt qxl qxb\napplication/vnd.realvnc.bed\t\t\tbed\napplication/vnd.recordare.musicxml\t\tmxl\napplication/vnd.recordare.musicxml+xml\t\tmusicxml\napplication/vnd.rig.cryptonote\t\t\tcryptonote\napplication/vnd.rim.cod\t\t\t\tcod\napplication/vnd.rn-realmedia\t\t\trm\napplication/vnd.rn-realmedia-vbr\t\trmvb\napplication/vnd.route66.link66+xml\t\tlink66\napplication/vnd.sailingtracker.track\t\tst\napplication/vnd.seemail\t\t\t\tsee\napplication/vnd.sema\t\t\t\tsema\napplication/vnd.semd\t\t\t\tsemd\napplication/vnd.semf\t\t\t\tsemf\napplication/vnd.shana.informed.formdata\t\tifm\napplication/vnd.shana.informed.formtemplate\titp\napplication/vnd.shana.informed.interchange\tiif\napplication/vnd.shana.informed.package\t\tipk\napplication/vnd.simtech-mindmapper\t\ttwd twds\napplication/vnd.smaf\t\t\t\tmmf\napplication/vnd.smart.teacher\t\t\tteacher\napplication/vnd.solent.sdkm+xml\t\t\tsdkm sdkd\napplication/vnd.spotfire.dxp\t\t\tdxp\napplication/vnd.spotfire.sfs\t\t\tsfs\napplication/vnd.stardivision.calc\t\tsdc\napplication/vnd.stardivision.draw\t\tsda\napplication/vnd.stardivision.impress\t\tsdd\napplication/vnd.stardivision.math\t\tsmf\napplication/vnd.stardivision.writer\t\tsdw vor\napplication/vnd.stardivision.writer-global\tsgl\napplication/vnd.stepmania.package\t\tsmzip\napplication/vnd.stepmania.stepchart\t\tsm\napplication/vnd.sun.xml.calc\t\t\tsxc\napplication/vnd.sun.xml.calc.template\t\tstc\napplication/vnd.sun.xml.draw\t\t\tsxd\napplication/vnd.sun.xml.draw.template\t\tstd\napplication/vnd.sun.xml.impress\t\t\tsxi\napplication/vnd.sun.xml.impress.template\tsti\napplication/vnd.sun.xml.math\t\t\tsxm\napplication/vnd.sun.xml.writer\t\t\tsxw\napplication/vnd.sun.xml.writer.global\t\tsxg\napplication/vnd.sun.xml.writer.template\t\tstw\napplication/vnd.sus-calendar\t\t\tsus susp\napplication/vnd.svd\t\t\t\tsvd\napplication/vnd.symbian.install\t\t\tsis sisx\napplication/vnd.syncml+xml\t\t\txsm\napplication/vnd.syncml.dm+wbxml\t\t\tbdm\napplication/vnd.syncml.dm+xml\t\t\txdm\napplication/vnd.tao.intent-module-archive\ttao\napplication/vnd.tcpdump.pcap\t\t\tpcap cap dmp\napplication/vnd.tmobile-livetv\t\t\ttmo\napplication/vnd.trid.tpt\t\t\ttpt\napplication/vnd.triscape.mxs\t\t\tmxs\napplication/vnd.trueapp\t\t\t\ttra\napplication/vnd.ufdl\t\t\t\tufd ufdl\napplication/vnd.uiq.theme\t\t\tutz\napplication/vnd.umajin\t\t\t\tumj\napplication/vnd.unity\t\t\t\tunityweb\napplication/vnd.uoml+xml\t\t\tuoml\napplication/vnd.vcx\t\t\t\tvcx\napplication/vnd.visio\t\t\t\tvsd vst vss vsw\napplication/vnd.visionary\t\t\tvis\napplication/vnd.vsf\t\t\t\tvsf\napplication/vnd.wap.wbxml\t\t\twbxml\napplication/vnd.wap.wmlc\t\t\twmlc\napplication/vnd.wap.wmlscriptc\t\t\twmlsc\napplication/vnd.webturbo\t\t\twtb\napplication/vnd.wolfram.player\t\t\tnbp\napplication/vnd.wordperfect\t\t\twpd\napplication/vnd.wqd\t\t\t\twqd\napplication/vnd.wt.stf\t\t\t\tstf\napplication/vnd.xara\t\t\t\txar\napplication/vnd.xfdl\t\t\t\txfdl\napplication/vnd.yamaha.hv-dic\t\t\thvd\napplication/vnd.yamaha.hv-script\t\thvs\napplication/vnd.yamaha.hv-voice\t\t\thvp\napplication/vnd.yamaha.openscoreformat\t\t\tosf\napplication/vnd.yamaha.openscoreformat.osfpvg+xml\tosfpvg\napplication/vnd.yamaha.smaf-audio\t\tsaf\napplication/vnd.yamaha.smaf-phrase\t\tspf\napplication/vnd.yellowriver-custom-menu\t\tcmp\napplication/vnd.zul\t\t\t\tzir zirz\napplication/vnd.zzazz.deck+xml\t\t\tzaz\napplication/voicexml+xml\t\t\tvxml\napplication/wasm\t\t\t\twasm\napplication/widget\t\t\t\twgt\napplication/winhlp\t\t\t\thlp\napplication/wsdl+xml\t\t\t\twsdl\napplication/wspolicy+xml\t\t\twspolicy\napplication/x-7z-compressed\t\t\t7z\napplication/x-abiword\t\t\t\tabw\napplication/x-ace-compressed\t\t\tace\napplication/x-apple-diskimage\t\t\tdmg\napplication/x-authorware-bin\t\t\taab x32 u32 vox\napplication/x-authorware-map\t\t\taam\napplication/x-authorware-seg\t\t\taas\napplication/x-bcpio\t\t\t\tbcpio\napplication/x-bittorrent\t\t\ttorrent\napplication/x-blorb\t\t\t\tblb blorb\napplication/x-bzip\t\t\t\tbz\napplication/x-bzip2\t\t\t\tbz2 boz\napplication/x-cbr\t\t\t\tcbr cba cbt cbz cb7\napplication/x-cdlink\t\t\t\tvcd\napplication/x-cfs-compressed\t\t\tcfs\napplication/x-chat\t\t\t\tchat\napplication/x-chess-pgn\t\t\t\tpgn\napplication/x-conference\t\t\tnsc\napplication/x-cpio\t\t\t\tcpio\napplication/x-csh\t\t\t\tcsh\napplication/x-debian-package\t\t\tdeb udeb\napplication/x-dgc-compressed\t\t\tdgc\napplication/x-director\t\t\tdir dcr dxr cst cct cxt w3d fgd swa\napplication/x-doom\t\t\t\twad\napplication/x-dtbncx+xml\t\t\tncx\napplication/x-dtbook+xml\t\t\tdtb\napplication/x-dtbresource+xml\t\t\tres\napplication/x-dvi\t\t\t\tdvi\napplication/x-envoy\t\t\t\tevy\napplication/x-eva\t\t\t\teva\napplication/x-font-bdf\t\t\t\tbdf\napplication/x-font-ghostscript\t\t\tgsf\napplication/x-font-linux-psf\t\t\tpsf\napplication/x-font-pcf\t\t\t\tpcf\napplication/x-font-snf\t\t\t\tsnf\napplication/x-font-type1\t\t\tpfa pfb pfm afm\napplication/x-freearc\t\t\t\tarc\napplication/x-futuresplash\t\t\tspl\napplication/x-gca-compressed\t\t\tgca\napplication/x-glulx\t\t\t\tulx\napplication/x-gnumeric\t\t\t\tgnumeric\napplication/x-gramps-xml\t\t\tgramps\napplication/x-gtar\t\t\t\tgtar\napplication/x-hdf\t\t\t\thdf\napplication/x-install-instructions\t\tinstall\napplication/x-iso9660-image\t\t\tiso\napplication/x-java-jnlp-file\t\t\tjnlp\napplication/x-latex\t\t\t\tlatex\napplication/x-lzh-compressed\t\t\tlzh lha\napplication/x-mie\t\t\t\tmie\napplication/x-mobipocket-ebook\t\t\tprc mobi\napplication/x-ms-application\t\t\tapplication\napplication/x-ms-shortcut\t\t\tlnk\napplication/x-ms-wmd\t\t\t\twmd\napplication/x-ms-wmz\t\t\t\twmz\napplication/x-ms-xbap\t\t\t\txbap\napplication/x-msaccess\t\t\t\tmdb\napplication/x-msbinder\t\t\t\tobd\napplication/x-mscardfile\t\t\tcrd\napplication/x-msclip\t\t\t\tclp\napplication/x-msdownload\t\t\texe dll com bat msi\napplication/x-msmediaview\t\t\tmvb m13 m14\napplication/x-msmetafile\t\t\twmf wmz emf emz\napplication/x-msmoney\t\t\t\tmny\napplication/x-mspublisher\t\t\tpub\napplication/x-msschedule\t\t\tscd\napplication/x-msterminal\t\t\ttrm\napplication/x-mswrite\t\t\t\twri\napplication/x-netcdf\t\t\t\tnc cdf\napplication/x-nzb\t\t\t\tnzb\napplication/x-pkcs12\t\t\t\tp12 pfx\napplication/x-pkcs7-certificates\t\tp7b spc\napplication/x-pkcs7-certreqresp\t\t\tp7r\napplication/x-rar-compressed\t\t\trar\napplication/x-research-info-systems\t\tris\napplication/x-sh\t\t\t\tsh\napplication/x-shar\t\t\t\tshar\napplication/x-shockwave-flash\t\t\tswf\napplication/x-silverlight-app\t\t\txap\napplication/x-sql\t\t\t\tsql\napplication/x-stuffit\t\t\t\tsit\napplication/x-stuffitx\t\t\t\tsitx\napplication/x-subrip\t\t\t\tsrt\napplication/x-sv4cpio\t\t\t\tsv4cpio\napplication/x-sv4crc\t\t\t\tsv4crc\napplication/x-t3vm-image\t\t\tt3\napplication/x-tads\t\t\t\tgam\napplication/x-tar\t\t\t\ttar\napplication/x-tcl\t\t\t\ttcl\napplication/x-tex\t\t\t\ttex\napplication/x-tex-tfm\t\t\t\ttfm\napplication/x-texinfo\t\t\t\ttexinfo texi\napplication/x-tgif\t\t\t\tobj\napplication/x-ustar\t\t\t\tustar\napplication/x-wais-source\t\t\tsrc\napplication/x-x509-ca-cert\t\t\tder crt\napplication/x-xfig\t\t\t\tfig\napplication/x-xliff+xml\t\t\t\txlf\napplication/x-xpinstall\t\t\t\txpi\napplication/x-xz\t\t\t\txz\napplication/x-zmachine\t\t\t\tz1 z2 z3 z4 z5 z6 z7 z8\napplication/xaml+xml\t\t\t\txaml\napplication/xcap-diff+xml\t\t\txdf\napplication/xenc+xml\t\t\t\txenc\napplication/xhtml+xml\t\t\t\txhtml xht\napplication/xml\t\t\t\t\txml xsl\napplication/xml-dtd\t\t\t\tdtd\napplication/xop+xml\t\t\t\txop\napplication/xproc+xml\t\t\t\txpl\napplication/xslt+xml\t\t\t\txslt\napplication/xspf+xml\t\t\t\txspf\napplication/xv+xml\t\t\t\tmxml xhvml xvml xvm\napplication/yang\t\t\t\tyang\napplication/yin+xml\t\t\t\tyin\napplication/zip\t\t\t\t\tzip\naudio/adpcm\t\t\t\t\tadp\naudio/basic\t\t\t\t\tau snd\naudio/midi\t\t\t\t\tmid midi kar rmi\naudio/mp4\t\t\t\t\tm4a mp4a\naudio/mpeg\t\t\t\t\tmpga mp2 mp2a mp3 m2a m3a\naudio/ogg\t\t\t\t\toga ogg spx\naudio/s3m\t\t\t\t\ts3m\naudio/silk\t\t\t\t\tsil\naudio/vnd.dece.audio\t\t\t\tuva uvva\naudio/vnd.digital-winds\t\t\t\teol\naudio/vnd.dra\t\t\t\t\tdra\naudio/vnd.dts\t\t\t\t\tdts\naudio/vnd.dts.hd\t\t\t\tdtshd\naudio/vnd.lucent.voice\t\t\t\tlvp\naudio/vnd.ms-playready.media.pya\t\tpya\naudio/vnd.nuera.ecelp4800\t\t\tecelp4800\naudio/vnd.nuera.ecelp7470\t\t\tecelp7470\naudio/vnd.nuera.ecelp9600\t\t\tecelp9600\naudio/vnd.rip\t\t\t\t\trip\naudio/webm\t\t\t\t\tweba\naudio/x-aac\t\t\t\t\taac\naudio/x-aiff\t\t\t\t\taif aiff aifc\naudio/x-caf\t\t\t\t\tcaf\naudio/x-flac\t\t\t\t\tflac\naudio/x-matroska\t\t\t\tmka\naudio/x-mpegurl\t\t\t\t\tm3u\naudio/x-ms-wax\t\t\t\t\twax\naudio/x-ms-wma\t\t\t\t\twma\naudio/x-pn-realaudio\t\t\t\tram ra\naudio/x-pn-realaudio-plugin\t\t\trmp\naudio/x-wav\t\t\t\t\twav\naudio/xm\t\t\t\t\txm\nchemical/x-cdx\t\t\t\t\tcdx\nchemical/x-cif\t\t\t\t\tcif\nchemical/x-cmdf\t\t\t\t\tcmdf\nchemical/x-cml\t\t\t\t\tcml\nchemical/x-csml\t\t\t\t\tcsml\nchemical/x-xyz\t\t\t\t\txyz\nfont/collection\t\t\t\t\tttc\nfont/otf\t\t\t\t\totf\nfont/ttf\t\t\t\t\tttf\nfont/woff\t\t\t\t\twoff\nfont/woff2\t\t\t\t\twoff2\nimage/bmp\t\t\t\t\tbmp\nimage/cgm\t\t\t\t\tcgm\nimage/g3fax\t\t\t\t\tg3\nimage/gif\t\t\t\t\tgif\nimage/ief\t\t\t\t\tief\nimage/jpeg\t\t\t\t\tjpeg jpg jpe\nimage/ktx\t\t\t\t\tktx\nimage/png\t\t\t\t\tpng\nimage/prs.btif\t\t\t\t\tbtif\nimage/sgi\t\t\t\t\tsgi\nimage/svg+xml\t\t\t\t\tsvg svgz\nimage/tiff\t\t\t\t\ttiff tif\nimage/vnd.adobe.photoshop\t\t\tpsd\nimage/vnd.dece.graphic\t\t\t\tuvi uvvi uvg uvvg\nimage/vnd.djvu\t\t\t\t\tdjvu djv\nimage/vnd.dvb.subtitle\t\t\t\tsub\nimage/vnd.dwg\t\t\t\t\tdwg\nimage/vnd.dxf\t\t\t\t\tdxf\nimage/vnd.fastbidsheet\t\t\t\tfbs\nimage/vnd.fpx\t\t\t\t\tfpx\nimage/vnd.fst\t\t\t\t\tfst\nimage/vnd.fujixerox.edmics-mmr\t\t\tmmr\nimage/vnd.fujixerox.edmics-rlc\t\t\trlc\nimage/vnd.ms-modi\t\t\t\tmdi\nimage/vnd.ms-photo\t\t\t\twdp\nimage/vnd.net-fpx\t\t\t\tnpx\nimage/vnd.wap.wbmp\t\t\t\twbmp\nimage/vnd.xiff\t\t\t\t\txif\nimage/webp\t\t\t\t\twebp\nimage/x-3ds\t\t\t\t\t3ds\nimage/x-cmu-raster\t\t\t\tras\nimage/x-cmx\t\t\t\t\tcmx\nimage/x-freehand\t\t\t\tfh fhc fh4 fh5 fh7\nimage/x-icon\t\t\t\t\tico\nimage/x-mrsid-image\t\t\t\tsid\nimage/x-pcx\t\t\t\t\tpcx\nimage/x-pict\t\t\t\t\tpic pct\nimage/x-portable-anymap\t\t\t\tpnm\nimage/x-portable-bitmap\t\t\t\tpbm\nimage/x-portable-graymap\t\t\tpgm\nimage/x-portable-pixmap\t\t\t\tppm\nimage/x-rgb\t\t\t\t\trgb\nimage/x-tga\t\t\t\t\ttga\nimage/x-xbitmap\t\t\t\t\txbm\nimage/x-xpixmap\t\t\t\t\txpm\nimage/x-xwindowdump\t\t\t\txwd\nmessage/rfc822\t\t\t\t\teml mime\nmodel/iges\t\t\t\t\tigs iges\nmodel/mesh\t\t\t\t\tmsh mesh silo\nmodel/vnd.collada+xml\t\t\t\tdae\nmodel/vnd.dwf\t\t\t\t\tdwf\nmodel/vnd.gdl\t\t\t\t\tgdl\nmodel/vnd.gtw\t\t\t\t\tgtw\nmodel/vnd.mts\t\t\t\t\tmts\nmodel/vnd.vtu\t\t\t\t\tvtu\nmodel/vrml\t\t\t\t\twrl vrml\nmodel/x3d+binary\t\t\t\tx3db x3dbz\nmodel/x3d+vrml\t\t\t\t\tx3dv x3dvz\nmodel/x3d+xml\t\t\t\t\tx3d x3dz\ntext/cache-manifest\t\t\t\tappcache\ntext/calendar\t\t\t\t\tics ifb\ntext/css\t\t\t\t\tcss\ntext/csv\t\t\t\t\tcsv\ntext/html\t\t\t\t\thtml htm\ntext/n3\t\t\t\t\t\tn3\ntext/plain\t\t\t\t\ttxt text conf def list log in\ntext/prs.lines.tag\t\t\t\tdsc\ntext/richtext\t\t\t\t\trtx\ntext/sgml\t\t\t\t\tsgml sgm\ntext/tab-separated-values\t\t\ttsv\ntext/troff\t\t\t\t\tt tr roff man me ms\ntext/turtle\t\t\t\t\tttl\ntext/uri-list\t\t\t\t\turi uris urls\ntext/vcard\t\t\t\t\tvcard\ntext/vnd.curl\t\t\t\t\tcurl\ntext/vnd.curl.dcurl\t\t\t\tdcurl\ntext/vnd.curl.mcurl\t\t\t\tmcurl\ntext/vnd.curl.scurl\t\t\t\tscurl\ntext/vnd.dvb.subtitle\t\t\t\tsub\ntext/vnd.fly\t\t\t\t\tfly\ntext/vnd.fmi.flexstor\t\t\t\tflx\ntext/vnd.graphviz\t\t\t\tgv\ntext/vnd.in3d.3dml\t\t\t\t3dml\ntext/vnd.in3d.spot\t\t\t\tspot\ntext/vnd.sun.j2me.app-descriptor\t\tjad\ntext/vnd.wap.wml\t\t\t\twml\ntext/vnd.wap.wmlscript\t\t\t\twmls\ntext/x-asm\t\t\t\t\ts asm\ntext/x-c\t\t\t\t\tc cc cxx cpp h hh dic\ntext/x-fortran\t\t\t\t\tf for f77 f90\ntext/x-java-source\t\t\t\tjava\ntext/x-nfo\t\t\t\t\tnfo\ntext/x-opml\t\t\t\t\topml\ntext/x-pascal\t\t\t\t\tp pas\ntext/x-setext\t\t\t\t\tetx\ntext/x-sfv\t\t\t\t\tsfv\ntext/x-uuencode\t\t\t\t\tuu\ntext/x-vcalendar\t\t\t\tvcs\ntext/x-vcard\t\t\t\t\tvcf\nvideo/3gpp\t\t\t\t\t3gp\nvideo/3gpp2\t\t\t\t\t3g2\nvideo/h261\t\t\t\t\th261\nvideo/h263\t\t\t\t\th263\nvideo/h264\t\t\t\t\th264\nvideo/jpeg\t\t\t\t\tjpgv\nvideo/jpm\t\t\t\t\tjpm jpgm\nvideo/mj2\t\t\t\t\tmj2 mjp2\nvideo/mp4\t\t\t\t\tmp4 mp4v mpg4\nvideo/mpeg\t\t\t\t\tmpeg mpg mpe m1v m2v\nvideo/ogg\t\t\t\t\togv\nvideo/quicktime\t\t\t\t\tqt mov\nvideo/vnd.dece.hd\t\t\t\tuvh uvvh\nvideo/vnd.dece.mobile\t\t\t\tuvm uvvm\nvideo/vnd.dece.pd\t\t\t\tuvp uvvp\nvideo/vnd.dece.sd\t\t\t\tuvs uvvs\nvideo/vnd.dece.video\t\t\t\tuvv uvvv\nvideo/vnd.dvb.file\t\t\t\tdvb\nvideo/vnd.fvt\t\t\t\t\tfvt\nvideo/vnd.mpegurl\t\t\t\tmxu m4u\nvideo/vnd.ms-playready.media.pyv\t\tpyv\nvideo/vnd.uvvu.mp4\t\t\t\tuvu uvvu\nvideo/vnd.vivo\t\t\t\t\tviv\nvideo/webm\t\t\t\t\twebm\nvideo/x-f4v\t\t\t\t\tf4v\nvideo/x-fli\t\t\t\t\tfli\nvideo/x-flv\t\t\t\t\tflv\nvideo/x-m4v\t\t\t\t\tm4v\nvideo/x-matroska\t\t\t\tmkv mk3d mks\nvideo/x-mng\t\t\t\t\tmng\nvideo/x-ms-asf\t\t\t\t\tasf asx\nvideo/x-ms-vob\t\t\t\t\tvob\nvideo/x-ms-wm\t\t\t\t\twm\nvideo/x-ms-wmv\t\t\t\t\twmv\nvideo/x-ms-wmx\t\t\t\t\twmx\nvideo/x-ms-wvx\t\t\t\t\twvx\nvideo/x-msvideo\t\t\t\t\tavi\nvideo/x-sgi-movie\t\t\t\tmovie\nvideo/x-smv\t\t\t\t\tsmv\nx-conference/x-cooltalk\t\t\t\tice\n";

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
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
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

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.resolve(build_dir, file)))).get(file);

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

function noop$1(){}

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

riot.tag('rg-code', '<div class="editor"></div>', 'rg-code .editor, [riot-tag="rg-code"] .editor{ position: absolute; top: 0; right: 0; bottom: 0; left: 0; }', function(opts) {var _this = this;

this.on('mount', function () {
	var editor = ace.edit(_this.root.querySelector('.editor'));
	if (opts.theme) editor.setTheme('ace/theme/' + opts.theme);
	if (opts.mode) editor.getSession().setMode('ace/mode/' + opts.mode);
	editor.getSession().setTabSize(opts.tabsize || 2);
	if (opts.softtabs == "true") editor.getSession().setUseSoftTabs(true);
	if (opts.wordwrap == "true") editor.getSession().setUseWrapMode(true);
	if (opts.readonly == "true") editor.setReadOnly(true);

	editor.getSession().on('change', function (e) {
		if (opts.onchange) opts.onchange(editor.getValue());
	});

	if (opts.src) {
		(function () {
			var oReq = new XMLHttpRequest();
			oReq.onload = function () {
				editor.setValue(oReq.responseText);
				_this.update();
			};
			oReq.open('get', opts.src, true);
			oReq.send();
		})();
	} else {
		editor.setValue(opts.code);
	}
});
});

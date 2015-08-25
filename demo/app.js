riot.tag('demo-app', '<rg-code theme="monokai" mode="html" code="{ code }" src="app.tag" onchange="{ changed }"></rg-code>', function(opts) {
this.code = "<html>\n\t<head></head>\n\t<body>\n\t\t<h1>Hello World</h1>\n\t</body>\n</html>";

this.changed = function (e) {
	return console.log(e);
};
});

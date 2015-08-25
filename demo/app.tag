<demo-app>

	<rg-code theme="monokai" mode="html" code="{ code }" src="app.tag" onchange={ changed }></rg-code>

	<script>
		this.code =
`<html>
	<head></head>
	<body>
		<h1>Hello World</h1>
	</body>
</html>`

		this.changed = e => console.log(e)
	</script>

</demo-app>

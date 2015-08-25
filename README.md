## Use

```
npm install riotgear-code --save
```

then add this to your Riot app markup

```html
<rg-code theme="monokai"
         mode="javascript"
         tabsize="2"
         softtabs="false"
         wordwrap="false"
         readonly="false"
         onchange="{ ... }"
         code="{ code }"
         src="index.html">
</rg-code>
```

Use `src` to specify a separate file to display in the editor.

**Or** add this to your JavaScript (using ES6 string template for prettiness)

```javascript
this.code =
`<html>
  <head></head>
  <body>
    <h1>Heading</h1>
    <script>
      var foo = e => {
        var i = 0
      }
    </script>
  </body>
</html>`
```

*Specifying `src` will override any content assigned to `code`*

Your code will then be wrapped in an [Ace](http://ace.c9.io/) code editor.

There are 7 additional options available:

- `theme` is the theme of the syntax highlighting, [see all themes](https://github.com/ajaxorg/ace/tree/master/lib/ace/theme)
- `mode` is the language of the code you are writing
- `tabsize` is the number of spaces that the editor should insert on tab
- `softtabs` if set to true will insert spaces instead of tab characters
- `wordwrap` will wrap the text onto the next line
- `readonly` prevents the text from being changed
- `onchange` fires when the text in the editor changes and is passed the value of the editor

*This tag relies on Ace code editor. Ensure you have a script link to their code on the page. e.g.*

`<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ace.js"></script>`

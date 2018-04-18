# Escape a HTML string

Write a JavaScript function to escape a HTML string.

```

Test Data:
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output: 
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to escape a HTML string.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js

function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
		var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"'
        };

		return chars_to_replace[tag] || tag;
	});
}

console.log(escape_HTML('

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-19.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
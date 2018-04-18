# Escapes special characters for use in HTML

Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.

```

Test Data:
console.log(escape_html('PHP & MySQL')); 
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to escapes special characters for use in HTML.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function escape_html(str) {
  
 if ((str===null) || (str===''))
       return false;
 else
   str = str.toString();
  
  var map = {
    '&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#039;'
  };

  return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}
console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-31.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
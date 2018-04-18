# Convert Hexadecimal to ASCII format

Write a JavaScript function to convert Hexadecimal to ASCII format.

```

Test Data:
console.log(hex_to_ascii('3132')); 
console.log(hex_to_ascii('313030'));
Output: 
"12" "100"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to convert Hexadecimal to ASCII</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-28.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
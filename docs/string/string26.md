# Remove the first occurrence of a given 'search string' from a string

Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

```

Test Data:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output: 
"The quick brown fox jumps over lazy dog"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to remove the first occurrence of a given 'search string' from a string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-26.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
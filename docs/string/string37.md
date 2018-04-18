# Test case insensitive (except special Unicode characters) string comparison

Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.

```

Test Data:
console.log(compare_strings('abcd', 'AbcD')); 
true
console.log(compare_strings('ABCD', 'Abce'));
false
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to test case insensitive (except special Unicode characters) string comparison</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function compare_strings(str1, str2)
{
var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
}

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-37.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Strip leading and trailing spaces from a string

Write a JavaScript function to strip leading and trailing spaces from a string.

```

Test Data:
console.log(strip('w3resource ')); 
console.log(strip(' w3resource')); 
console.log(strip(' w3resource '));
Output : 
"w3resource"  "w3resource" 
"w3resource"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to strip leading and trailing spaces from a string.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource  '));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-23.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
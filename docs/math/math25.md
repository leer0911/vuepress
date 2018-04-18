# Currency math (add, subtract, multiply, division etc.)

Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

```
Test Data : 
n1 = '$40.24', n2 = '$21.57';
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
var n1 = '$40.24';
var n2 = '$21.57';
var regp = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regp, '')) +       parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) -         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) *         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) /         parseFloat(n2.replace(regp, '')));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-25.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
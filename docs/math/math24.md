# Round a number to a specified number of digits and strip extra zeros

Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any).

```
Test Data : 
var a = -4.55555;
console.log(result);
-4.5556 
var a = 5.0001000;
console.log(result);
5.0001
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to round a number to a specified number of digitsand strip extra zeros (if any).</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
//var a = -1.1230000;
//var a = 0.0000009999999;
//var a = 1.000000000;
//var a = -4.55555;
//var a = 5.0001000;
var a = 1.1234000;


var result = parseFloat(a.toFixed(4));
console.log(result);

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
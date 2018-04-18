# Limit a value inside a certain range

Write a JavaScript function to limit a value inside a certain range.

```
Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.
Test Data : 
console.log(value_limit(7, 1, 12)); 
7
console.log(value_limit(-7, 0, 12)); 
0
console.log(value_limit(15, 0, 12));
12
```

**Sample Solution:-**

**HTML Code :**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to limit a value inside a certain range.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}

console.log(value_limit(7, 1, 12));
console.log(value_limit(-7, 0, 12));
console.log(value_limit(15, 0, 12));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-37.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
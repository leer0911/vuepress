# Calculate the divisor and modulus of two integers

Write a JavaScript function to calculate the divisor and modulus of two integers.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the divisor and modulus of two integers</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```html
function div_mod(a, b)
 {
  if (b <= 0) 
    throw new Error("b cannot be zero. Undefined.");
  if (isInt(a) && !isInt(b))
    throw new Error("A or B are not integers.");
  return [Math.floor(a / b), a % b];
}
function isInt(n) {
  return n % 1 === 0;
}
console.log(div_mod(17, 4));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-46.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
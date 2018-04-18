# Convert a positive number to negative number

Write a JavaScript function to convert a positive number to negative number.

```
Test Data : 
console.log(pos_to_neg(15));
-15
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to convert a positive number to negative number.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function pos_to_neg(num)
{
return -Math.abs(num);
}

console.log(pos_to_neg(15));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-29.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
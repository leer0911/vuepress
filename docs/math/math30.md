# Cast a square root of a number to an integer

Write a JavaScript function to cast a square root of a number to an integer.

```
Test Data: 
console.log(sqrt_to_int(17));
4
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to cast a square root of a number to an integer.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function sqrt_to_int(num)
{
return parseInt(Math.sqrt(num)+"");
}

console.log(sqrt_to_int(17));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-30.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
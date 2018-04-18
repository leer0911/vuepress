# Convert degrees to radians

Write a JavaScript function to convert degrees to radians.

```
Test Data : 
console.log(degrees_to_radians(45));
0.7853981633974483
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to convert degrees to radians</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

console.log(degrees_to_radians(45));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-33.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
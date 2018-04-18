# Calculate degrees between 2 points with inverse Y axis

Write a JavaScript function to calculate degrees between 2 points with inverse Y axis.

```
Test Data : 
console.log(pointDirection(1, 0, 12, 0));
0
console.log(pointDirection(1, 0, 1, 10));
90
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to calculate degrees between 2 points with inverse Y axis</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

console.log(pointDirection(1, 0, 12, 0));
console.log(pointDirection(1, 0, 1, 10));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-27.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
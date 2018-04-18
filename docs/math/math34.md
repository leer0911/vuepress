# Convert radians to degrees

Write a JavaScript function to convert radians to degrees.

```
Test Data :
console.log(radians_to_degrees(0.7853981633974483));
45
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to convert radians to degrees</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
          
console.log(radians_to_degrees(0.7853981633974483));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-34.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
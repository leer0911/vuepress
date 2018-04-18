# Round up an integer value to the next multiple of 5

Write a JavaScript function to round up an integer value to the next multiple of 5.

```
Test Data: 
console.log(int_round5(32)); 
35
console.log(int_round5(137));
140
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to round up an integer value to the next multiple of 5</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function int_round5(num)
{
    return Math.ceil(num/5)*5;
}

console.log(int_round5(32));
console.log(int_round5(137));
console.log(int_round5(142));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-28.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
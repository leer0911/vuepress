# Return values that are powers of two

Write a JavaScript function which will return values that are powers of two.

```
Test Data : 
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false 
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function which will return values that are powers of two</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function isPower_of_two(num)
  {
     return num && (num & (num - 1)) === 0;
}

console.log(isPower_of_two(64));  
console.log(isPower_of_two(94));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-36.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
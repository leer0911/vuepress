# Calculate the nth root of a number

Write a JavaScript function to calculate the nth root of a number.

```
Test Data : 
console.log(nthroot(64, 2)); 
8
console.log(nthroot(64, -2)); 
0.125
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the nth root of a number</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function nthroot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);
  
    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r; 
   }
console.log(nthroot(64, 2));
console.log(nthroot(64, -2));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-26.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
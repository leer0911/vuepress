# Calculate the falling factorial of a number

Write a JavaScript function to calculate the falling factorial of a number.

```
Let x be a real number (but usually an integer).
Let k be a positive integer.
Then x to the (power of) k falling is:

This is called the kth falling factorial power of x.
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the falling factorial of a number</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function fallingFactorial(n, k) 
{
  var i = (n - k + 1),
    r = 1;
  if (n < 0) 
  {
    throw new Error("n must be positive.");
  }
  if (k > n)
  {
    throw new Error("k cannot be greater than n.");
  }
  while (i <= n) 
  {
    r *= i++;
  }
  return r;
}
console.log(fallingFactorial(10, 2));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-48.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
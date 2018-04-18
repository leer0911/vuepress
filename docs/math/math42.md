# Calculate the combination of n and r

Write a JavaScript function to calculate the combination of n and r.  
The formula is : n!/(r!*(n - r)!).

```
Test Data : 
console.log(combinations(6, 2)); 
15
console.log(combinations(5, 3));
10
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to calculate the combination of n and r. The formula is : n!/(r!*(n - r)!)</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;
}


function combinations(n, r) 
{
  if (n==r) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}


console.log(combinations(6, 2));
console.log(combinations(5, 3));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-42.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
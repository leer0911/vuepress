# Compute the factors of a positive integers

Write a JavaScript function to compute the factors of a positive integer.

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Compute the factors of a positive integer</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-13.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="BwdONp" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Compute the factors of a positive integers-function-ex- 13" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
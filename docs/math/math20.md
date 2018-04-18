# Evaluate binomial coefficients

Write a JavaScript program to evaluate binomial coefficients.

```
 Note: 
Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. They are indexed by two nonnegative integers; the binomial coefficient indexed by n and k is usually written \tbinom nk. It is the coefficient of the x k term in the polynomial expansion of the binomial power (1 + x) n. Under suitable circumstances the value of the coefficient is given by the expression :
```

![](https://www.w3resource.com/w3r_images/binomial_coefficients.png)

Arranging binomial coefficients into rows for successive values of n, and in which k ranges from 0 to n, gives a triangular array called Pascal's triangle.

_Test Data_:  
console.log(binomial(8,3));  
console.log(binomial(10,2));  
_Output_ :  
56  
45

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Binomial coefficient</title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
function binomial(n, k) {
     if ((typeof n !== 'number') || (typeof k !== 'number')) 
  return false; 
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
}

console.log(binomial(8,3));
console.log(binomial(10,2));

```

**Flowchar:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-20.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
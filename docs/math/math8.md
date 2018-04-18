# Greatest common divisor (gcd) of two integers

Write a JavaScript function to get the greatest common divisor (gcd) of two integers.  
**Note:**  
According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.

```
Test Data :
console.log(gcd_two_numbers(12, 13)); 
console.log(gcd_two_numbers(9, 3)); 
Output :
1 
3
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>GCD of two numbers</title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-8.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
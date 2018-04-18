# JavaScript: Find the sum of squares of a numeric vector

Write a JavaScript program to find the sum of squares of a numeric vector.

::: tip

**Sample Solution:**

:::

**HTML Code:**

```html




Sum of squares of a numeric vector





```

**JavaScript Code:**

```javascript
function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
console.log(sum_sq([0,1,2,3,4])); 

```

Sample Output:

30

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-11.png)  

**ES6 Version:**

```javascript
function sum_sq(array) {
 let sum = 0;
 let i = array.length;
 while (i--) 
  sum += array[i] ** 2;
 return sum;
}
 
console.log(sum_sq([0,1,2,3,4]));

```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="RLpdQo" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -   Find the sum of squares of a numeric vector- array-ex- 11" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/RLpdQo/">JavaScript - Find the sum of squares of a numeric vector- array-ex- 11</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
# JavaScript: Compute the sum and product of an array of integers

Write a JavaScript program to compute the sum and product of an array of integers.

::: tip

**Sample Solution:** -

:::

**HTML Code:**

```html




Compute the sum and product of an array of integers





```

**JavaScript Code:**

```javascript
var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 

```

Sample Output:

::: tip

Sum : 21 Product :  720

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-12.png)  

**ES6 Version:**

```javascript
const array = [1, 2, 3, 4, 5, 6];
let s = 0;
let p = 1;
let i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log(`Sum : ${s} Product :  ${p}`); 

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="BwWbEY" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -   sum and product of an array of integers- array-ex- 11" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/BwWbEY/">JavaScript - sum and product of an array of integers- array-ex- 11</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
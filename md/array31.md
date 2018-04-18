# JavaScript: Remove a specific element from an array

Write a JavaScript function to remove a specific element from an array.

::: tip

Test data:  
console.log(remove\_array\_element(\[2, 5, 9, 6\], 5));  
\[2, 9, 6\]

:::

**Sample Solution**:

**HTML Code:**

```html



  
  JavaScript function to remove a specific element from an array






```

**JavaScript Code:**

```javascript
function remove_array_element(array, n)
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));

```

Sample Output:

::: tip

\[2,9,6\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-31.png)  

**ES6 Version:**

```javascript
function remove_array_element(array, n)
 {
   const index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));

```

**Live Demo:**

  

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="NagGNb" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -  Merge two arrays and removes all duplicates elements - array-ex- 30" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/NagGNb/">JavaScript - Merge two arrays and removes all duplicates elements - array-ex- 30</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
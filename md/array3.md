# JavaScript: Get the first element of an array

Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

::: tip

_Test Data_:  
console.log(array_Clone(\[1, 2, 4, 0\]));  
console.log(array_Clone(\[1, 2, \[4, 0\]\]));  
\[1, 2, 4, 0\]  
\[1, 2, \[4, 0\]\]

:::

**Sample Solution:**

**HTML Code:**

```html




Get the first element of an array





```

**JavaScript Code:**

```javascript
first =  function(array, n) {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

```

Sample Output:

::: tip

7
\[\]
\[7,9,0\]
\[7,9,0,-2\]
\[\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-3.png)  

**ES6 Version:**

```javascript
first =  (array, n) => {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="BwpBOR" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Get the first element of an array- array-ex-3" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/BwpBOR/">JavaScript - Get the first element of an array- array-ex-3</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
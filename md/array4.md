# JavaScript: Get the last element of an array

Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

::: tip

_Test Data_ :  
console.log(last(\[7, 9, 0, -2\]));  
console.log(last(\[7, 9, 0, -2\],3));  
console.log(last(\[7, 9, 0, -2\],6));

:::

**Sample Solution:** -

**HTML Code :**

```html




Get last and last n elements of an array





```

**JavaScript Code:**

```javascript
last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

```

Sample Output:

::: tip

-2
\[9,0,-2\]
\[7,9,0,-2\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-4.png)  

**ES6 Version:**

```javascript
is_array = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="GMrKPN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Get the last element of an array- array-ex-4" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/GMrKPN/">JavaScript - Get the last element of an array- array-ex-4</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
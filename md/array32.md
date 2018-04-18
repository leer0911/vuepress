# JavaScript: Find to if an array contains a specific element

Write a JavaScript function to find an array contains a specific element.

::: tip

Test data:  
console.log(remove\_array\_element(\[2, 5, 9, 6\], 5));  
\[2, 9, 6\]

:::

**Sample Solution**:

**HTML Code:**

```html



  
  JavaScript function to find to if an array contains a specific element






```

**JavaScript Code:**

```js
function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));

```

Sample Output:

::: tip

true

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-32.png)  

**ES6 Version:**

```javascript
function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="NagGNb" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -  Merge two arrays and removes all duplicates elements - array-ex- 30" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/NagGNb/">JavaScript - Merge two arrays and removes all duplicates elements - array-ex- 30</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
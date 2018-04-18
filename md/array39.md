# JavaScript: Filter false, null, 0 and blank values from an array

Write a JavaScript function to filter false, null, 0 and blank values from an array.

::: tip

_Test Data_ :  
console.log(filter\_array\_values(\[58, '', 'abcd', true, null, false, 0\]));  
\[58, "abcd", true\]

:::

**Sample Solution:**

**HTML Code:**

```html



  
  JavaScript function to filter false, null, 0 and blank values from an array






```

**JavaScript Code:**

```html
function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

```

Sample Output:

::: tip

\[58,"abcd",true\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-39.png)  

**ES6 Version:**

```javascript
function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="aLwxRv" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Filter false, null, 0 and blank values from an array-array-ex- 39" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/aLwxRv/">JavaScript - Filter false, null, 0 and blank values from an array-array-ex- 39</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
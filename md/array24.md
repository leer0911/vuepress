# JavaScript: Remove null, 0, blank, false, undefined and NaN values from an array

Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

::: tip

Sample array: \[NaN, 0, 15, false, -22, '',undefined, 47, null\]  
Expected result: \[15, -22, 47\]

:::

**Sample Solution:**

**HTML Code:**

```html




Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.





```

**JavaScript Code:**

```js
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));

```

Sample Output:

::: tip

\[15,-22,47\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-24.png)  

**ES6 Version:**

```javascript
function filter_array(test_array) {
    let index = -1;
    const arr_length = test_array ? test_array.length : 0;
    let resIndex = -1;
    const result = [];

    while (++index < arr_length) {
        const value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, '',undefined, 47, null]));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="ZXyGNJ" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Remove null, 0, blank, false, undefined and NaN values from an array - array-ex- 24" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/ZXyGNJ/">JavaScript - Remove null, 0, blank, false, undefined and NaN values from an array - array-ex- 24</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
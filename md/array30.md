# JavaScript: Merge two arrays and removes all duplicates elements

Write a JavaScript function to merge two arrays and removes all duplicates elements.

::: tip

Test data:  
var array1 = \[1, 2, 3\];  
var array2 = \[2, 30, 1\];  
console.log(merge_array(array1, array2));  
\[3, 2, 30, 1\]

:::

**Sample Solution**:

**HTML Code:**

```html



  
  JavaScript function to merge two arrays and removes all duplicates elements.






```

**JavaScript Code:**

```javascript
function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array1 = [1, 2, 3];

var array2 = [2, 30, 1];

console.log(merge_array(array1, array2));

```

Sample Output:

::: tip

\[3,2,30,1\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-30.png)  

**ES6 Version:**

```javascript
function merge_array(array1, array2) {
    const result_array = [];
    const arr = array1.concat(array2);
    let len = arr.length;
    const assoc = {};

    while(len--) {
        const item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


const array1 = [1, 2, 3];

const array2 = [2, 30, 1];

console.log(merge_array(array1, array2));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="xXrwZy" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -  Merge two arrays and removes all duplicates elements - array-ex- 30" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/xXrwZy/">JavaScript - Merge two arrays and removes all duplicates elements - array-ex- 30</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
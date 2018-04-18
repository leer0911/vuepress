# Pancake sort

Write a JavaScript program to sort a list of elements using Pancake sort.

```
Pancake sorting is the colloquial term for the mathematical problem of sorting a disordered stack of pancakes in order of size when a spatula can be inserted at any point in the stack and used to flip all pancakes above it. A pancake number is the minimum number of flips required for a given number of pancakes. The problem was first discussed by American geometer Jacob E. Goodman. It is a variation of the sorting problem in which the only allowed operation is to reverse the elements of some prefix of the sequence.
```

**Demonstration of the** **:**

![](https://www.w3resource.com/w3r_images/Pancake_sort_operation.png)

The spatula is flipping over the top three pancakes, with the result seen below. In the burnt pancake problem, their top sides would now be burnt instead of their bottom sides.

**Sample Solution :** -

**HTML Code :**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>JavaScript program of Pancake sort</title>
  </head>
  <body></body>
</html>

```

**JavaScript Code :**

```js
function pancake_sort(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
        // find the index of the largest element not yet sorted
        var max_idx = 0;
        var max = arr[0];
        for (var j = 1; j <= i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                max_idx = j;
            }
        }
 
        if (max_idx == i) 
            continue; // element already in place
 
        var new_slice;
 
        // flip arr max element to index 0
        if (max_idx > 0) {
            new_slice = arr.slice(0, max_idx+1).reverse();
            for ( j = 0; j <= max_idx; j++) 
                arr[j] = new_slice[j];
        }
 
        // then flip the max element to its place
        new_slice = arr.slice(0, i+1).reverse();
        for ( j = 0; j <= i; j++) 
            arr[j] = new_slice[j];
    }
    return arr;
}

var arra = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(pancake_sort(arra, 0, 5));

```

**Flowchart :**

![](https://www.w3resource.com/w3r_images/searching-and-sorting-algorithm-exercise-13.png)  

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# JavaScript: Find the difference of two arrays

Write a JavaScript function to find the difference of two arrays.

::: tip

Test Data:  
console.log(difference(\[1, 2, 3\], \[100, 2, 1, 10\]));  
\["3", "10", "100"\]  
console.log(difference(\[1, 2, 3, 4, 5\], \[1, \[2\], \[3, \[\[4\]\]\],\[5,6\]\]));  
\["6"\]  
console.log(difference(\[1, 2, 3\], \[100, 2, 1, 10\]));  
\["3", "10", "100"\]

:::

**Sample Solution**:

**HTML Code:**

```html




JS, difference between two arrays





```

**JavaScript Code:**

```js
function differenceOf2Arrays (array1, array2) {
var temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (var i in array1) {
if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}
return temp.sort((a,b) => a-b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

```

Sample Output:

::: tip

\[3,10,100\]
\[6\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-23.png)  

**ES6 Version:**

```javascript
function differenceOf2Arrays (array1, array2) {
const temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (var i in array1) {
if(!array2.includes(array1[i])) temp.push(array1[i]);
}
for(i in array2) {
if(!array1.includes(array2[i])) temp.push(array2[i]);
}
return temp.sort((a,b) => a-b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="MEowxo" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find the difference of two arrays - array-ex- 23" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/MEowxo/">JavaScript - Find the difference of two arrays - array-ex- 23</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
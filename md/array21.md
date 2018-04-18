# JavaScript: Flatten a nested array

Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

::: tip

Sample Data:  
console.log(flatten(\[1, \[2\], \[3, \[\[4\]\]\],\[5,6\]\]));  
\[1, 2, 3, 4, 5, 6\]  
console.log(flatten(\[1, \[2\], \[3, \[\[4\]\]\],\[5,6\]\], true));  
\[1, 2, 3, \[\[4\]\], 5, 6\]

:::

**Sample Solution**:

**HTML Code:**

```html




Flatten a nested array





```

**JavaScript Code:**

```js
var flatten = function(a, shallow,r){
  if(!r){ r = []}
   
if (shallow) {
  return r.concat.apply(r,a);
  }
      
   for(var i=0; i

```

``

Sample Output:

::: tip

[1,2,3,4,5,6]
[1,2,3,[[4]],5,6]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-21.png)  

**ES6 Version:**

```javascript
const flatten = (a, shallow, r) => {
  if(!r){ r = []}
   
if (shallow) {
  return r.concat(...a);
  }
      
   for(let i=0; i
```

`

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="ZXyGmy" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Flatten a nested array - array-ex- 21" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/ZXyGmy/">JavaScript - Flatten a nested array - array-ex- 21</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>

  
` ``
# JavaScript: Remove duplicate items from an array, ignore case sensitivity

Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

::: tip

**Sample Solution:**

:::

**HTML Code:**

```html




Remove duplicate items from an JavaScript array 





```

**JavaScript Code:**

```js
function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x

```

``

Sample Output:

::: tip

[1,2,2,4,5,4,7,8,7,3,6]
["1","2","3","4","5","6","7","8"]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-14.png)  

**ES6 Version:**

```javascript
function removeDuplicates(num) {
  let x;
  const len=num.length;
  const out=[];
  const obj={};

  for (x=0; x
```

`

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="BwWEzP" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -  Remove duplicate items from an array, ignore case sensitivity - array-ex- 14" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/BwWEzP/">JavaScript - Remove duplicate items from an array, ignore case sensitivity - array-ex- 14</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>

  
` ``
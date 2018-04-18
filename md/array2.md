# JavaScript: Clone an array

Write a JavaScript function to clone an array.

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




JS array Clone





```

**JavaScript Code:**

```javascript
array_Clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

```

Sample Output:

::: tip

\[1,2,4,0\]
\[1,2,\[4,0\]\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-2.png)  

**ES6 Version:**

```javascript
array_Clone = arra1 => arra1.slice(0);
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]])); 

```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="NadKKr" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Clone an array- array-ex-1" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/NadKKr/">JavaScript - Clone an array- array-ex-1</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
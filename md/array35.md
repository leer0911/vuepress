# JavaScript: Get a random item from an array

Write a JavaScript function to get a random item from an array.

::: tip

**Sample Solution:**

:::

**HTML Code:**

```html



  
  JavaScript function to get a random item from an array.






```

**JavaScript Code:**

```js
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

```

Sample Output:

::: tip

365

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-35.png)  

**ES6 Version:**

```javascript
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

const items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="pWweWG" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Get a random item from an array - array-ex- 35" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/pWweWG/">JavaScript - Get a random item from an array - array-ex- 35</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
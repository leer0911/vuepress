# JavaScript: Randomly arrange or shuffle an array

Write a JavaScript program to shuffle an array.

::: tip

**Sample Solution:**

:::

**HTML Code:**

```html




Shuffle an array





```

**JavaScript Code:**

```js
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

```

Sample Output:

::: tip

\[5,3,0,9,8,2,1,4,7,6\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-17.png)  

**ES6 Version:**

```javascript
function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="rGygxm" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Randomly arrange or shuffle an array - array-ex- 17" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/rGygxm/">JavaScript - Randomly arrange or shuffle an array - array-ex- 17</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
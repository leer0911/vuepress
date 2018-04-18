# JavaScript: Sort the specified array of objects by title value

Write a JavaScript function to sort the following array of objects by title value.

::: tip

Sample object:

:::

::: tip

var library = \[ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   \];

:::

**Sample Solution**:

**HTML Code:**

```html



  
  Write a JavaScript function to sort an lowing array of objects by title value.






```

**JavaScript Code:**

```js
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function compare_to_sort(x,y) 
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }

console.log(library.sort(compare_to_sort));

```

Sample Output:

::: tip

\[{"author":"Suzanne Collins","title":"Mockingjay: The Final Book of The Hunger Games","libraryID":3245},{"author":"Bill Gates","title":"The Road Ahead","libraryID":1254},{"author":"Steve Jobs","title":"Walter Isaacson","libraryID":4264}\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-25.png)  

**ES6 Version:**

```javascript
const library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function compare_to_sort(x,y) 
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }

console.log(library.sort(compare_to_sort));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="KXqpja" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Sort the specified array of objects by title value - array-ex- 25" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/KXqpja/">JavaScript - Sort the specified array of objects by title value - array-ex- 25</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
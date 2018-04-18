# JavaScript: Retrieve the value of a specified property from all elements in an array

Write a JavaScript function to retrieve the value of a given property from all elements in an array.

::: tip

Sample array: \[NaN, 0, 15, false, -22, '',undefined, 47, null\]  
Expected result: \[15, -22, 47\]

:::

**Sample Solution:**

**HTML Code:**

```html



  
  Write a JavaScript function to retrieve the value of a given property from all elements in an array.






```

**JavaScript Code:**

```javascript
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function property_value(array, property_key) {
	var arr = [],
		index = -1,
		arrlen = array.length,array_items;

	while (++index < arrlen) {
		array_items = array[index];

  if (array_items.hasOwnProperty(property_key)) 
      {
	 arr[arr.length] = array_items[property_key];
      }
	}

	return arr;
}

console.log(property_value(library, 'title'));

console.log(property_value(library, 'author'));

```

Sample Output:

::: tip

\["The Road Ahead","Walter Isaacson","Mockingjay: The Final Book of The Hunger Games"\]
\["Bill Gates","Steve Jobs","Suzanne Collins"\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-27.png)  

**ES6 Version:**

```javascript
const library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function property_value(array, property_key) {
    const arr = [];
    let index = -1;
    const arrlen = array.length;
    let array_items;

    while (++index < arrlen) {
		array_items = array[index];

  if (array_items.hasOwnProperty(property_key)) 
      {
	 arr[arr.length] = array_items[property_key];
      }
	}

    return arr;
}

console.log(property_value(library, 'title'));

console.log(property_value(library, 'author'));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="pWwjzP" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Retrieve the value of a specified property from all elements in an array - array-ex- 27" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/pWwjzP/">JavaScript - Retrieve the value of a specified property from all elements in an array - array-ex- 27</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
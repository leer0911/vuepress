# Sort the specified array of objects by title value

Write a JavaScript function to sort the following array of objects by title value.

```

Sample object:
```

```
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

```

**Sample Solution**:

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to sort an lowing array of objects by title value.</title>
</head>
<body>

</body>
</html>

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

```
[{"author":"Suzanne Collins","title":"Mockingjay: The Final Book of The Hunger Games","libraryID":3245},{"author":"Bill Gates","title":"The Road Ahead","libraryID":1254},{"author":"Steve Jobs","title":"Walter Isaacson","libraryID":4264}]

```

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

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="KXqpja" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Sort the specified array of objects by title value - array-ex- 25" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
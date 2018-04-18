# Perform a binary search within an array

Write a JavaScript program to perform a binary search.

```
Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
```

  
Sample array:  
var items = \[1, 2, 3, 4, 5, 7, 8, 9\];  
Expected Output:  
console.log(binary_Search(items, 1)); //0  
console.log(binary_Search(items, 5)); //4

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Binary Search</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));

```

Sample Output:

```
0
4

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-18.png)  

**ES6 Version:**

```javascript
function binary_Search(items, value){
    let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="qPjdxo" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Perform a binary search within an array - array-ex- 18" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
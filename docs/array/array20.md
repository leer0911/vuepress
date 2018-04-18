# Find duplicate values in a array

Write a JavaScript program to find duplicate values in a JavaScript array.

```
Sample Solution: 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Find duplicate values in a JavaScript array</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
function find_duplicate_in_array(arra1) {
  var i,
  len=arra1.length,
  result = [],
  obj = {}; 
  for (i=0; i<len; i++)
  {
  obj[arra1[i]]=0;
  }
  for (i in obj) {
  result.push(i);
  }
  return result;
  }
var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
console.log(find_duplicate_in_array(arr));

```

Sample Output:

```
["1","2","3","4","5","6","7","8","71","-2"]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-20.png)  

**ES6 Version:**

```javascript
function find_duplicate_in_array(arra1) {
  let i;
  const len=arra1.length;
  const result = [];
  const obj = {};
  for (i=0; i<len; i++)
  {
  obj[arra1[i]]=0;
  }
  for (i in obj) {
  result.push(i);
  }
  return result;
}
const arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
console.log(find_duplicate_in_array(arr));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="yzXNEV" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find duplicate values in a array - array-ex- 20" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
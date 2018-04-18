# Remove duplicate items from an array, ignore case sensitivity

Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

```
Sample Solution: 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Remove duplicate items from an JavaScript array </title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
function removeDuplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);

```

Sample Output:

```
[1,2,2,4,5,4,7,8,7,3,6]
["1","2","3","4","5","6","7","8"]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-14.png)  

**ES6 Version:**

```javascript
function removeDuplicates(num) {
  let x;
  const len=num.length;
  const out=[];
  const obj={};

  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
const Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="BwWEzP" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -  Remove duplicate items from an array, ignore case sensitivity - array-ex- 14" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
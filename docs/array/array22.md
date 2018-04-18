# Compute the union of two arrays

Write a JavaScript program to compute the union of two arrays.

```

Sample Data:
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
```

**Sample Solution**:

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JS Bin</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
function union(arra1, arra2) {
  
  if ((arra1 == null) || (arra2==null)) 
    return void 0;
  
  var obj = {};
 
  for (var i = arra1.length-1; i >= 0; -- i)
     obj[arra1[i]] = arra1[i];
 
  for (var i = arra2.length-1; i >= 0; -- i)
     obj[arra2[i]] = arra2[i];
 
  var res = [];
 
  for (var n in obj)
  {
  
    if (obj.hasOwnProperty(n)) 
      res.push(obj[n]);
  }
 
  return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

```

Sample Output:

```
[1,2,3,10,100]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-22.png)  

**ES6 Version:**

```javascript
function union(arra1, arra2) {
  
  if ((arra1 == null) || (arra2==null)) 
    return void 0;
  
  const obj = {};
 
  for (var i = arra1.length-1; i >= 0; -- i)
     obj[arra1[i]] = arra1[i];
 
  for (var i = arra2.length-1; i >= 0; -- i)
     obj[arra2[i]] = arra2[i];
 
  const res = [];
 
  for (const n in obj)
  {
  
    if (obj.hasOwnProperty(n)) 
      res.push(obj[n]);
  }
 
  return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="ZXyGwy" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Compute the union of two arrays - array-ex- 22" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
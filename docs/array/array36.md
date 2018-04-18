# Create a specified number of elements and pre-filled numeric value array

Write a JavaScript function to create a specified number of elements and pre-filled numeric value array.

```
Test Data:
console.log(array_filled(6, 0)); 
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]
```

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to create a specified number of elements and numeric value filled array</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```javascript
function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));

```

Sample Output:

```
[0,0,0,0,0,0]
[11,11,11,11]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-36.png)  

**ES6 Version:**

```javascript
function array_filled(n, val)
{
    return Array(...Array(n)).map(Number.prototype.valueOf,val);
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="xXreWw" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Create a specified number of elements and pre-filled numeric value array-array-ex- 36" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
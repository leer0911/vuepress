# Create a specified number of elements and pre-filled string value array

Write a JavaScript function to create a specified number of elements and pre-filled string value array.

```
 Test Data:
console.log(array_filled(3, 'default value')); 
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]
```

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to create a specified number of elements and pre-filled string value array</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code :**

```javascript
function array_filled(n, val)
{
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));

```

Sample Output:

```
["default value","default value","default value"]
["password","password","password","password"]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-37.png)  

**ES6 Version:**

```javascript
function array_filled(n, val)
{
    return Array(...Array(n)).map(String.prototype.valueOf,val);
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="VMWNdP" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Create a specified number of elements and pre-filled string value array-array-ex- 37" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
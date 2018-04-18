# Bigger elements in an array

Write a JavaScript function that returns array elements larger than a number.

```
Sample Solution:  -
```

**HTML Code :**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Bigger elements in an array</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-19.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="WZEgMz" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Bigger elements in an array-function-ex- 19" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Clone an array

Write a JavaScript function to clone an array.

```

Test Data:
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0] 
[1, 2, [4, 0]]
```

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JS array Clone</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```javascript
array_Clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

```

Sample Output:

```
[1,2,4,0]
[1,2,[4,0]]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-2.png)  

**ES6 Version:**

```javascript
array_Clone = arra1 => arra1.slice(0);
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]])); 

```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="NadKKr" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Clone an array- array-ex-1" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
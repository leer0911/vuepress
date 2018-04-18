# Move an array element from one position to another

Write a JavaScript function to move an array element from one position to another.

```
 Test Data:
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]
```

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to move an array element from one position to another.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```javascript
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

console.log(move([10, 20, 30, 40, 50], -1, -2));

```

Sample Output:

```
[20,30,10,40,50]
[10,20,30,50,40]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-38.png)  

**ES6 Version:**

```javascript
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        let k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

console.log(move([10, 20, 30, 40, 50], -1, -2));

```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="dVRLqN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Create a specified number of elements and pre-filled string value array-array-ex- 37" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
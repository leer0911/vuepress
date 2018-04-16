JavaScript Array: Exercise-1 with Solution
------------------------------------------

Write a JavaScript function to check whether an 'input' is an array or not.

_Test Data_ :  
console.log(is_array('w3resource'));  
console.log(is_array(\[1, 2, 4, 0\]));  
false  
true

**Sample Solution:**

**HTML Code:**

```html

<html>
<head>
<meta charset="utf-8">
<title>JS Bintitle>
head>
<body>
body>
html>

```

**JavaScript Code:**

```js
is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

```

Sample Output:

false
true

**Flowchart:**

![Flowchart: JavaScript: Display the colors entered in an array by a specific format](https://www.w3resource.com/w3r_images/javascript-array-exercise-1.png)  

**ES6 Version:**

```js
is_array = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

```
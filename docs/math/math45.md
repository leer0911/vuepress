# Subtract elements from one another in an array

Write a JavaScript function to subtract elements from one another in an array.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to subtract elements from one another in array</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function subtraction(arr) 
 {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++)
    {
      if (typeof (arr[i]) === 'number')
      {
        total -= arr[i];
      } 
      else 
      return false;
    }
    return total;
   } 
    else
     return false;
  }
console.log(subtraction([7,3, 2,-1]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-45.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
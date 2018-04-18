# Get the integers in a range

Write a JavaScript program to get the integers in range (x, y).

_Example_ : range(2, 9)  
_Expected Output :_ \[3, 4, 5, 6, 7, 8\]

```
Sample Solution:-

```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Gets the integers from x to y</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-recursion-function-exercise-3.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
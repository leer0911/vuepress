# Check whether an 'input' is a string or not

Write a JavaScript function to check whether an 'input' is a string or not.

```

Test Data:
console.log(is_string('w3resource')); 
true
console.log(is_string([1, 2, 4, 0]));
false
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Check whether an input is a string or not</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
is_string = function(input) {
  if (Object.prototype.toString.call(input) === '[object String]')
    return true;
  else
    return false;   
    };
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-1.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
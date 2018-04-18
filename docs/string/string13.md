# Concatenate a specific string for a specific number of times

Write a JavaScript function to concatenates a given string n times (default is 1).

```

Test Data:
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
"Ha!" 
"Ha!Ha!" 
"Ha!Ha!Ha!"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript program to concatenates a given string n times (default is 1).</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
repeat = function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-13.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
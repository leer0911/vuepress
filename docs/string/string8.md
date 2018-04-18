# Make capitalize the first letter of a string

Write a JavaScript function to capitalize the first letter of a string.

```

Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JS Bin</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}
    
 console.log(capitalize('js string exercises'));
 
```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-8.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Check whether a string is blank or not

Write a JavaScript function to check whether a string is blank or not.

```

Test Data :
console.log(is_Blank('')); 
console.log(is_Blank('abc'));
true 
false
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JS string : is blank</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
is_Blank =  function(input) {
        if (input.length === 0)
        return true;
        else 
        return false;
      }
console.log(is_Blank(''));
console.log(is_Blank('abc'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-2.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
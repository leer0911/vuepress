# Test whether the character at the provided character index is upper case

Write a JavaScript function to test whether the character at the provided (character) index is upper case.

```

Test Data:
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to test whether the character at the provided (character) index is upper case</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function isUpperCaseAt(str, index) {
 return str.charAt(index).toUpperCase() === str.charAt(index);
    }
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-43.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
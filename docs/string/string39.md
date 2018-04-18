# Uncapitalize the first character of a string

Write a JavaScript function to uncapitalize  the first character of a string.

```

Test Data:
console.log(Uncapitalize('Js string exercises'));
"js string exercises"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to uncapitalize the first character of a string.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function Uncapitalize(str1){
  return str1.charAt(0).toLowerCase() + str1.slice(1);
}
 console.log(Uncapitalize('Js string exercises'));
 
```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-39.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Uncapitalize the first letter of each word of a string

Write a JavaScript function to Uncapitalize the first letter of each word of a string.

```

Test Data:
console.log(unCapitalize_Words('Js String Exercises'));
"js string exercises"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to Uncapitalize the first letter of each word of a string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function unCapitalize_Words(str)
{ 
  return str.replace(/\w\S*/g, 
    function(txt)
       {
          return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
}

console.log(unCapitalize_Words('Js String Exercises'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-40.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
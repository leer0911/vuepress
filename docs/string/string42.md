# Uncapitalize each word in the string

Write a JavaScript function to uncapitalize each word in the string.

```

Test Data:
console.log(unCapitalizeWords('JS STRING EXERCISES'));
"js string exercises"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to uncapitalize each word in the string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function unCapitalizeWords(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toLowerCase();});
}
console.log(unCapitalizeWords('JS STRING EXERCISES'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-42.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Convert a string to title case

Write a JavaScript function to convert a string to title case.

```

Test Data:
console.log(sentenceCase('PHP exercises. python exercises.')); 
"Php Exercises. Python Exercises."
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to convert a string to title case.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function sentenceCase (str) {
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();

 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(sentenceCase('PHP exercises. python exercises.'));

```

**Flowchart:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
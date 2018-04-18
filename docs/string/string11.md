# Convert a string into camel case

Write a JavaScript function to convert a string into camel case.

```

Test Data:
console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises" 
"JavaScriptExercises" 
"JavaScriptExercises"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Javascript camel case</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
camelize = function camelize(str) {
      return str.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
    }

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-11.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
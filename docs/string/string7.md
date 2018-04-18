# Parameterize a string

Write a JavaScript function to parameterize a string.

```

Test Data:
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
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
string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-7.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
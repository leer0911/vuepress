# Test whether a string starts with a specified string

Write a JavaScript function to test whether a string starts with a specified string.

```

Test Data:
console.log(startsWith('js string exercises', 'js'));
true
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to test whether a string starts with a specified string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function startsWith(input, string) {
  return input.indexOf(string) === 0;
}
console.log(startsWith('js string exercises', 'js'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-46.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
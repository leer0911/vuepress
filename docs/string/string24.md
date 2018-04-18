# Truncate a string to a certain number of words

Write a JavaScript function to truncate a string to a certain number of words.

```

Test Data:
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output: 
"The quick brown fox"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<title>JavaScript function to truncate a string to a certain number of words</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-24.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Check a given value contains alpha, dash and underscore

Write a JavaScript function to check a given value contains alpha, dash and underscore.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check a given value contains alpha, dash and underscore</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function is_alphaDash(str)
{
 regexp = /^[a-z0-9_\-]+$/i;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_alphaDash('12-133'));

console.log(is_alphaDash('100_23'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-20.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
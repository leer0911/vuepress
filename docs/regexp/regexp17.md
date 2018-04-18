# Check whether a given value is hexcolor value or not

Write a JavaScript function to check whether a given value is hexcolor value or not.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check whether a given value is hexcolor value or not.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function is_hexcolor(str)
{
 regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_hexcolor("#444"));

console.log(is_hexcolor("#3333"));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-17.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
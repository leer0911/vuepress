# Check whether a given value is UK Post Code or not

Write a JavaScript function to check whether a given value is UK Post Code or not.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check whether a given value is UK Post Code or not</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function is_ukPostCode(str)
{
 regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_ukPostCode("B294HJ"));

console.log(is_ukPostCode("7892"));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-13.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
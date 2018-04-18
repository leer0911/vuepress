# Check whether a given value is a social security number or not

Write a JavaScript function to check whether a given value is a social security number or not.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check whether a given value is A social security number or not</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function is_socialSecurity_Number(str)
{
 regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_socialSecurity_Number("019-90-5680"));

console.log(is_socialSecurity_Number("K8V-3Y1"));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-15.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
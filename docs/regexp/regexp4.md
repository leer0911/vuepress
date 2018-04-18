# Search a date within a string

Write a JavaScript program to search a date within a string.

```
 Sample string: 
```

"Albert Einstein was born in Ulm, on 14/03/1879."

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check whether a given value is date string or not.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function is_dateString(str)
{
 regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_dateString("01/01/2015"));

console.log(is_dateString("01/22/2015"));

console.log(is_dateString("32/01/2015"));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-4.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
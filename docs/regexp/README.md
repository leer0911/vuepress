# Check whether the first character of a string is uppercase or not

Write a JavaScript program to test the first character of a string is uppercase or not.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript Regular expression to check string's first character is uppercase or not</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
function upper_case(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("String's first character is uppercase");
    } 
    else
    {
      console.log("String's first character is not uppercase");
    }
}
upper_case('Abcd');
upper_case('abcd');

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-1.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
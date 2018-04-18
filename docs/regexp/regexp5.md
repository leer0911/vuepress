# Alternet of trim function using regular expression

Write a JavaScript program that works as a trim function (string) using regular expression.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Trim function using regular expression</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```html
function Trim(str)
{
  var result;
  if (typeof str === 'string') 
  {
    result = str.replace(/^\s+|\s+$/g, '');
    return result;
  }
  else
  {
    return false;
  }
}
console.log(Trim(' w3resource '));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-5.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
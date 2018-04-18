# Check if a string ends with specified suffix

Write a JavaScript function check if a string ends with specified suffix.

```

Test Data:
console.log(escape_html('PHP & MySQL')); 
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function check if a string ends with specified suffix</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function string_endsWith(str, suffix) 
{
 
 if (((str===null) || (str==='')) || ((suffix===null) || (suffix==='')))
   {
    return false;
   }
  else
  {     
   str = str.toString();
   suffix = suffix.toString();
   }
 return str.indexOf(suffix, str.length -     suffix.length) !== -1;
}

console.log(string_endsWith('JS PHP PYTHON','PYTHON'));

console.log(string_endsWith('JS PHP PYTHON',''));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-30.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
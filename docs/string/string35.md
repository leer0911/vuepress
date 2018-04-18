# Remove HTML/XML tags from string

Write a JavaScript function to remove HTML/XML tags from string.

```

Test Data:
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to remove HTML/XML tags from string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function strip_html_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

console.log(strip_html_tags('PHP Exercises'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-35.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
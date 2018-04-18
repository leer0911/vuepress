# Remove non-word characters

Write a JavaScript function to remove non-word characters.

```

Test Data :
console.log(remove_non_word('PHP #$%^&*()+`-={}[]|\\:";\'/?><., MySQL')); 
"PHP - MySQL"
```

**Sample Solution:-**

**HTML Code :**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to remove non-printable ASCII chars.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code :**

```js
function remove_non_word (str) {
    if ((str===null) || (str===''))
       return false;
 else
   str = str.toString();
  
var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
  
  return str.replace(PATTERN, '');
}
console.log(remove_non_word('PHP #$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

```

**Flowchart :**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-33.png)

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
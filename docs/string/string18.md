# Count the occurrence of a substring in a string

Write a JavaScript function to count the occurrence of a substring in a string.

```

Test Data:
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output:
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output:
1
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to count the occurrence of a substring in a string.</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-18.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
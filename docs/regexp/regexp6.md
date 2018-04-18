# Count number of words in string

Write a JavaScript program to count number of words in string.

```
The script will be used to: 
```

\- Remove white-space from start and end position.  
\- Convert 2 or more spaces to 1.  
\- Exclude newline with a start spacing.

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset=utf-8 />
  <title>Count number of words in a string</title>
  <style type="text/css">
  body {margin-top: 40px;}
  </style> 
</head>
  <body>
  <textarea id="InputText" cols="30" rows="4">The quick brown fox jumps over the lazy dog.</textarea>
  <br>
  <input type="button" name="Convert" value="No. of Words" onClick="count_words();">
  <input id = "noofwords" type="text" value="" size="6"> 
  </body>
  </html>
  
```

**JavaScript Code:**

```js
function count_words()
{
str1= document.getElementById("InputText").value;
//exclude  start and end white-space
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
str1 = str1.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
str1 = str1.replace(/\n /,"\n");
document.getElementById("noofwords").value = str1.split(' ').length;
}

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
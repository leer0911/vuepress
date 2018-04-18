# Get unique guid of the specified length, or 32 by default

Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier’) of the specified length, or 32 by default.  
_Test Data_:  
console.log(guid());  
console.log(guid(15));  
"hRYilcoV7ajokxsYFl1dba41AyE0rUQR"  
"b7pwBqrZwqaDrex"

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get the successor of a string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function guid(len) {
        var buf = [],
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            charlen = chars.length,
            length = len || 32;
            
        for (var i = 0; i < length; i++) {
            buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
        }
        
        return buf.join('');
    }

console.log(guid());  
console.log(guid(15));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-49.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
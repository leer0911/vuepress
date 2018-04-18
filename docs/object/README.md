# List the properties of a JavaScript object

Write a JavaScript program to list the properties of a JavaScript object.  
_Sample object_:  
var student = {  
name : "David Rayy",  
sclass : "VI",  
rollno : 12 };  
_Sample Output_: name,sclass,rollno

```
Sample Solution: -
```

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>JavaScript program to list the properties of a JavaScript object. </title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
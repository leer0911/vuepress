# Find the length of an object

Write a JavaScript program to get the length of an JavaScript object.

```
Sample object:
var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 }; 
```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Write a JavaScript program to get the length of an JavaScript object.</title>
  </head>
  <body>
 </body>
  </html>
  
```

**JavaScript Code:**

```js
//Write a JavaScript program to get the length of an JavaScript object.

Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
alert('Size of the current object : '+objsize);

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Delete a property from an object and print before or after deleting

Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.  
_Sample object_:  
var student = {  
name : "David Rayy",  
sclass : "VI",  
rollno : 12 };

```
Sample Solution:- 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Delete a property from an object</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
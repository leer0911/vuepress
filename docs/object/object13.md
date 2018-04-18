# Retrieve all the names of object's own and inherited properties

Write a JavaScript function to retrieve all the names of object's own and inherited properties.

```
Sample Solution: -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to retrieve all the names of object's own and inherited properties.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```html
function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-object-exercise-13.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
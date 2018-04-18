# Print all the methods in an JavaScript object

Write a JavaScript function to print all the methods in an JavaScript object.  
_Test Data_:  
console.log(all_properties(Array));  
\["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"\]

```
Sample Solution: -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to display all methods in a object.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function all_properties(obj) 
{
 return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
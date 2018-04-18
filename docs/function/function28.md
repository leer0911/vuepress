# Pass a JavaScript function as parameter

Write a JavaScript program to pass a 'JavaScript function' as parameter.

```
Sample Solution: -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to pass a JavaScript function as parameter</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-28.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="PJKyWB" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Pass a JavaScript function as parameter-function-ex- 28" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
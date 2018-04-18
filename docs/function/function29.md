# Get the function name

Write a JavaScript function to get the function name.

```
Sample Solution: 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get the function name.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function abc() {
    console.log( arguments.callee.name );
}

abc();

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-29.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="wrqYJQ" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Get the function name-function-ex- 29" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
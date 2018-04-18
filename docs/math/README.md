# Convert a number from one base to another

Write a JavaScript function to convert a number from one base to another.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Base convert</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
var base_convert = function(number, initial_base, change_base) {
   if ((initial_base && change_base) <2 || (initial_base && change_base)>36)
    return 'Base between 2 and 36';
   
    return parseInt(number + '', initial_base)
    .toString(change_base);
}

console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-1.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
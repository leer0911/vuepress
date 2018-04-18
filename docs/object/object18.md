# Check whether a specified value is a DOM element

Write a JavaScript function to check whether a given value is a DOM element.

```
Sample Solution: -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to check whether a specified value is a DOM element</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
  }
console.log(is_dom_element(jQuery('body')[0]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-object-exercise-18.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
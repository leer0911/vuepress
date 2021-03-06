# Print an integer with commas as thousands separators

Write a JavaScript function to print an integer with commas as thousands separators.

```
Test Data:
console.log(thousands_separators(1000)); 
"1,000"
console.log(thousands_separators(10000.23)); 
"10,000.23"
console.log(thousands_separators(100000));
"100,000"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to print an integer with commas as thousands separators</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-39.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
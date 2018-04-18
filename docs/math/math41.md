# Count the digits of an integer

Write a JavaScript function to count the digits of an integer.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to count the digits of an integer.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function digits_count(n) {
  var count = 0;
  if (n > 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

console.log(digits_count(12112));

console.log(digits_count(457));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-41.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
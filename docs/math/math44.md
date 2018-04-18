# Show the Hamming numbers

Write a JavaScript function to show the first twenty Hamming numbers.

```
Hamming Numbers are numbers whose only prime factors are 2, 3 and 5.
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to show the Hamming numbers</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function Hamming(n) {
        var succession = [1];
        var length = succession.length;
        var candidate = 2;
        while (length < n) {
            if (isHammingNumber(candidate)) {
                succession[length] = candidate;
                length++;
            }
            candidate++;
        }
        return succession;
  }
 function isHammingNumber(num) {
        while (num % 5 === 0) num /= 5;
        while (num % 3 === 0) num /= 3;
        while (num % 2 === 0) num /= 2;

        return num == 1;
    }

console.log(Hamming(20));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-44.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
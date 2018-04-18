# Create a Zerofilled value with optional +, - sign

Write a JavaScript function to create a Zerofilled value with optional +, - sign.

```

Test Data:
console.log(zeroFill(120, 5, '-')); 
"+00120"
console.log(zeroFill(29, 4));
"0029"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to create a Zerofilled value with optional +, - sign.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function zeroFill(number, width, osign) {
    var num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill(120, 5, '-'));

console.log(zeroFill(29, 4));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-36.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
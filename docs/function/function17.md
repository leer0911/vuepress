# Number of occurrences of each letter in specified string

Write a JavaScript function to get the number of occurrences of each letter in specified string.

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>=Write a JavaScript function to get the number of occurrences of each letter in specified string - w3resouce</title>
</head>
<body>

```

**JavaScript Code:**

```js
function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-17.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="eGELgQ" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Number of occurrences of each letter in specified string-function-ex- 17" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
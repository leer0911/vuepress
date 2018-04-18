# Convert a decimal number to binary, hexadecimal or octal number

Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

```
 Test Data:
console.log(dec_to_bho(120,'B')); 
console.log(dec_to_bho(120,'H')); 
console.log(dec_to_bho(120,'O'));
"1111000" 
"78" 
"170"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Convert a decimal number to binary, hexadecimal or octal number</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
dec_to_bho  = function(n, base) {
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
     } 
switch (base)  
{  
case 'B':  
return parseInt(n, 10).toString(2);
break;  
case 'H':  
return parseInt(n, 10).toString(16);
break;  
case 'O':  
return parseInt(n, 10).toString(8);
break;  
default:  
return("Wrong input.........");  
}  
}

console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-3.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Check whether a variable is numeric or not

Write a JavaScript function to check whether a variable is numeric or not.

```

Test Data:
console.log(is_Numeric(12)); 
console.log(is_Numeric('abcd')); 
console.log(is_Numeric('12')); 
console.log(is_Numeric(' ')); 
console.log(is_Numeric(1.20)); 
console.log(is_Numeric(-200));
Output:
true 
false 
true 
false 
true 
true
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Check whether a variable is numeric or not</title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
function is_Numeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-16.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
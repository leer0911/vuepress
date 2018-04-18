# Check whether a value is an integer or not

Write a JavaScript function to check whether a value is an integer or not.

```

Test Data:
console.log(is_Int(23)); 
console.log(is_Int(4e2)); 
console.log(is_Int(NaN)); 
console.log(is_Int(23.75));  
console.log(is_Int(-23));
Output  :
true 
true 
false 
false 
true
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Check whether a value is an integer or not</title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
function is_Int(num) {
  
   if (typeof num !== 'number')
       return false; 
  
  return !isNaN(num) && 
         parseInt(Number(num)) == num && 
         !isNaN(parseInt(num, 10));
}
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-15.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
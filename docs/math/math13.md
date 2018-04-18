# Test if a number is a power of 2

Write a JavaScript function to test if a number is a power of 2.

```
Test Data:
console.log(power_of_2(16)); 
console.log(power_of_2(18)); 
console.log(power_of_2(256));
Output:
true 
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
  <title>Test if a number is a power of 2</title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
function power_of_2(n) {
 if (typeof n !== 'number') 
      return 'Not a number'; 

    return n && (n & (n - 1)) === 0;
}

console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-13.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
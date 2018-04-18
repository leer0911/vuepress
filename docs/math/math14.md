# Round a number to a given specific decimal places

Write a JavaScript function to round a number to a given decimal places.

```

Test Data:
console.log(precise_round(12.375,2)); 
console.log(precise_round(12.37499,2)); 
console.log(precise_round(-10.3079499, 3));
Output :
"12.38" 
"12.37"
"-10.308"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Round a number to a given decimal places</title>
  </head>
  <body>
lt;/body>
  </html>
  
```

**JavaScript Code:**

```js
function precise_round(num, dec){
 
  if ((typeof num !== 'number') || (typeof dec !== 'number')) 
return false; 

  var num_sign = num >= 0 ? 1 : -1;
    
  return (Math.round((num*Math.pow(10,dec))+(num_sign*0.0001))/Math.pow(10,dec)).toFixed(dec);
}


console.log(precise_round(12.375,2));
console.log(precise_round(12.37499,2));
console.log(precise_round(-10.3079499, 3));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-14.png)

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
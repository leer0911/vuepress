# Calculate the sum of values in an array

Write a JavaScript function to calculate the sum of values in an array.

```

Test Data :
console.log(sum([1,2,3])); 
console.log(sum([100,-200,3])); 
console.log(sum([1,2,'a',3]));
Output  :
6 
-97
6
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Sum of values in an array</title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-17.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
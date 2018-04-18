# Generate a random integer

Write a JavaScript function to generate a random integer.

```
Test Data :
console.log(rand(20,1)); 
console.log(rand(1,10)); 
console.log(rand(6)); 
console.log(rand()); 
15 
5 
1 
0
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Javascript random function</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
rand = function(min, max) {
  if (min==null && max==null)
    return 0;    
  
  if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };
 console.log(rand(20,1));
 console.log(rand(1,10));
 console.log(rand(6));
 console.log(rand());
 
```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-4.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
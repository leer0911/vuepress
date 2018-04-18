# Find the lowest value in an array

Write a JavaScript function to find the lowest value in an array.

```
Test Data :
console.log(min([12,34,56,1])); 
console.log(min([-12,-34,0,-56,-1]));
1 
-56
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
function min(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.min.apply(null, input);
	}

console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-7.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
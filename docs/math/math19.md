# JavaScript : Pythagorean function in JavaScript

Create a Pythagorean function in JavaScript.

```
Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle. 
```

_Test Data_:  
console.log(pythagorean_theorem(2, 4));  
console.log(pythagorean_theorem(3, 4));  
_Output_ :  
4.47213595499958  
5

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Pythagorean Theorem</title>
</head>
<body></body>
</html>

```

**JavaScript Code:**

```js
function pythagorean_theorem(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
return false; 
		return Math.sqrt(x * x + y * y);
	}

console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-19.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
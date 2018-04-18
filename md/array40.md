# JavaScript: Generate an array of specified length, the content of the array is integer numbers, increase by one from starting

Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

::: tip

_Test Data_ :  
console.log(array_range(1, 4));  
\[1, 2, 3, 4\]  
console.log(array_range(-6, 4));  
\[-6, -5, -4, -3\]

:::

**Sample Solution:**

**HTML Code:**

```html



  
  JavaScript function to generate an array of given length, the content of the array is integer numbers, increase by one from starting






```

**JavaScript Code:**

```javascript
function array_range(start, len) 
     {
		var arr = new Array(len);
		for (var i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));

```

Sample Output:

::: tip

\[1,2,3,4\]
\[-6,-5,-4,-3\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-40.png)  

**ES6 Version:**

```javascript
function array_range(start, len) 
     {
		const arr = new Array(len);
		for (let i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="qPjwQa" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Generate an array of specified length, the content of the array is integer numbers, increase by one from starting-array-ex- 40" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/qPjwQa/">JavaScript - Generate an array of specified length, the content of the array is integer numbers, increase by one from starting-array-ex- 40</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
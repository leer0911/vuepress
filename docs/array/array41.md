# Generate an array between two integers of 1 step length

Write a JavaScript function to generate an array between two integers of 1 step length.

```
Test Data :
console.log(rangeBetwee(4, 7)); 
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
```

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to generate an array between two integers of 1 step length</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function rangeBetwee(start, end) 
{
  
		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			var arro = new Array(end-start+1);
         
		for (var j = 0; j < arro.length; j++, start++) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

```

Sample Output:

```
[4,5,6,7]
[-4,-3,-2,-1,0,1,2,3,4,5,6,7]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-41.png)  

**ES6 Version:**

```javascript
function rangeBetwee(start, end) 
{
  
		if (start > end) {
			const arr = new Array(start - end + 1);
			for (let i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			const arro = new Array(end-start+1);
         
		for (let j = 0; j < arro.length; j++, start++) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="YYrRdL" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Generate an array between two integers of 1 step length-array-ex- 41" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
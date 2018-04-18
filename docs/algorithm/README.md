# Quick sort

Write a JavaScript program to sort a list of elements using Quick sort.

```
Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.
```

**Pictorial presentation - Quick Sort algorithm :**

![](https://www.w3resource.com/w3r_images/quick-sort-part-1.png) ![](https://www.w3resource.com/w3r_images/quick-sort-part-2.png) ![](https://www.w3resource.com/w3r_images/Sorting_quicksort_anim.gif)

Animated visualization of the quicksort algorithm. The horizontal lines are pivot values. Animation credits:

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>JavaScript program of Quick sort</title>
  </head>
  <body></body>
</html>

```

**JavaScript Code:**

```js
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/searching-and-sorting-algorithm-exercise-1.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>

  

* To run the code mouse over on Result panel and click on 'RERUN' button.*
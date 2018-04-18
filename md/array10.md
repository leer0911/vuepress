# JavaScript: Print the elements of an array

Write a JavaScript program which prints the elements of the following array.

::: tip

Note : Use nested for loops.  
Sample array : var a = \[\[1, 2, 1, 24\], \[8, 11, 9, 4\], \[7, 0, 7, 27\], \[7, 4, 28, 14\], \[3, 10, 26, 7\]\];  
_Sample Output_ :  
"row 0"  
" 1"  
" 2"  
" 1"  
" 24"  
"row 1"  
\-\-\-\-\-\-  
\-\-\-\-\-\-

:::

**Sample Solution:**

**HTML Code:**

```html




Print 2-D array





```

**JavaScript Code:**

```javascript
// a sample 2-D array 
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}

```

Sample Output:

::: tip

row 0
 1
 2
 1
 24
row 1
 8
 11
 9
 4
row 2
 7
 0
 7
 27
row 3
 7
 4
 28
 14
row 4
 3
 10
 26
 7

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-10.png)  

**ES6 Version:**

```javascript
// a sample 2-D array 
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (const i in a) 
{
   console.log(`row ${i}`);
   for (const j in a[i]) 
     {
      console.log(` ${a[i][j]}`);
     }
}
```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="zEZbEX" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -  Print the elements of an array- array-ex- 10" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/zEZbEX/">JavaScript - Print the elements of an array- array-ex- 10</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
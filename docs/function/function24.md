# Bubble Sort algorithm

Write a JavaScript function to apply Bubble Sort algorithm.

```
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
```

_Sample array_: \[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213\]  
_Expected output_: \[3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1\]

**Step by step pictorial presentation:**

![](https://www.w3resource.com/w3r_images/bubble-short.png)

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Bubble Sort</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

```

Output:

```
[3223,546,455,345,234,213,122,98,84,64,23,12,9,4,1]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-24.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="PJKdLE" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Bubble Sort algorithm-function-ex- 24" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
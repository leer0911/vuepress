# Sort an array using Bubble Sorting method

Write a Bubble Sort algorithm in JavaScript.  
Note: Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,  
_Sample Data:_ \[6,4,0, 3,-2,1\]  
_Expected Output :_ \[-2, 0, 1, 3, 4, 6\]

```
Sample Solution: -
```

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
Array.prototype.bubbleSort_algo = function() 
{
var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

console.log([6,4,0, 3,-2,1].bubbleSort_algo());

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
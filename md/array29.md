# JavaScript: Fill an array with values on supplied bounds

Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

::: tip

Test Data:  
console.log(num\_string\_range('a', "z", 2));  
\["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"\]

:::

**Sample Solution:**

**HTML Code:**

```html



  
  Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.






```

**JavaScript Code:**

```javascript
function num_string_range(start, end, step) 
  {
    var range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end ==    "undefined") || (typeof start != typeof end))
     return false;
  
    if (end < start) {
        step = -step;
    }

    if (typeof start == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
        } 
      else if (typeof start == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    }
   
    else
       {
        throw TypeError("Only string and number are supported");
        }

    return range;

}

console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));

```

Sample Output:

::: tip

\["a","c","e","g","i","k","m","o","q","s","u","w","y"\]
\["Z","X","V","T","R","P","N","L","J","H","F","D","B"\]
\[0,-1,-2,-3,-4,-5\]
\[0,5,10,15,20,25\]
\[20,15,10,5\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-29.png)  

**ES6 Version:**

```javascript
function num_string_range(start, end, step) 
  {
    const range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end ==    "undefined") || (typeof start != typeof end))
     return false;
  
    if (end < start) {
        step = -step;
    }

    if (typeof start == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
        } 
      else if (typeof start == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    }
   
    else
       {
        throw TypeError("Only string and number are supported");
        }

    return range;

}

console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="mBweVd" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Fill an array with values on supplied bounds - array-ex- 29" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/mBweVd/">JavaScript - Fill an array with values on supplied bounds - array-ex- 29</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
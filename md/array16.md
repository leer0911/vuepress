# JavaScript: Find the leap years from a given range of years

Find the leap years in a given range of years.

::: tip

**Sample Solution:**

:::

**HTML Code:**

```html




Find Leap years in a range





```

**JavaScript Code:**

```js
function leap_year_range(st_year, end_year) {
        var year_range = [];
        for (var i = st_year; i <= end_year; i++)
        {
             year_range.push(i);
        }
        var new_array = [];

  year_range.forEach(
   function(year)
    { 
       if (test_LeapYear(year)) 
       new_array.push(year);
    });

  return new_array;
     }

function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

console.log(leap_year_range(2000,2012));

```

Sample Output:

::: tip

\[2000,2004,2008,2012\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-16.png)  

**ES6 Version:**

```javascript
function leap_year_range(st_year, end_year) {
        const year_range = [];
        for (let i = st_year; i <= end_year; i++)
        {
             year_range.push(i);
        }
        const new_array = [];

  year_range.forEach(
   year => { 
      if (test_LeapYear(year)) 
      new_array.push(year);
   });

  return new_array;
     }

function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

console.log(leap_year_range(2000,2012));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="ZXeZMQ" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find the leap years from a given range of years - array-ex- 16" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/ZXeZMQ/">JavaScript - Find the leap years from a given range of years - array-ex- 16</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
# JavaScript: Compute the sum of each individual index value of two or more arrays

There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

::: tip

Sample array:  
array1 = \[1,0,2,3,4\];  
array2 = \[3,5,6,7,8,13\];  
Expected Output:  
\[4, 5, 8, 10, 12, 13\]

:::

**Sample Solution:**

**HTML Code:**

```html




compute the sum of each individual index value from two arrays





```

**JavaScript Code:**

```js
function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

```

Sample Output:

::: tip

\[4,5,8,10,12,13\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-19.png)  

**ES6 Version:**

```javascript
function Arrays_sum(array1, array2) 
{
  const result = [];
  let ctr = 0;
  let x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="xXrGjY" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Compute the sum of each individual index value of two or more arrays - array-ex- 18" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/xXrGjY/">JavaScript - Compute the sum of each individual index value of two or more arrays - array-ex- 18</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
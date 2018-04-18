# JavaScript: Find a pair of elements from an specified array whose sum equals a specific target number

Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

::: tip

Input: numbers= \[10,20,10,40,50,60,70\], target=50  
Output: 3, 4

:::

**Sample Solution:**

**HTML Code:**

```html



  
  Find a pair of elements from an specified array whose sum equals a specific target number






```

**JavaScript Code:**

```javascript
function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];
  
  for (var x = 0; x < nums.length; x++)
  {
  if (map[nums[x]] != null)
  {
  index = map[nums[x]];
  indexnum[0] = index+1;
  indexnum[1] = x+1;
  break;
  }
  else
  {
  map[target_num - nums[x]] = x;
  }
  }
  return indexnum;
  }
console.log(twoSum([10,20,10,40,50,60,70],50));

```

Sample Output:

::: tip

\[3,4\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-26.png)  

**ES6 Version:**

```javascript
function twoSum(nums, target_num) {
  const map = [];
  const indexnum = [];
  
  for (let x = 0; x < nums.length; x++)
  {
  if (map[nums[x]] != null)
  {
  index = map[nums[x]];
  indexnum[0] = index+1;
  indexnum[1] = x+1;
  break;
  }
  else
  {
  map[target_num - nums[x]] = x;
  }
  }
  return indexnum;
  }
console.log(twoSum([10,20,10,40,50,60,70],50));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="YrQXoM" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find a pair of elements from an specified array whose sum equals a specific target number - array-ex- 26" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/YrQXoM/">JavaScript - Find a pair of elements from an specified array whose sum equals a specific target number - array-ex- 26</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
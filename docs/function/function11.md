# Second lowest and second greatest numbers from an array

Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Find the second lowest and second greatest numbers from an array</title>
</head>
<body>
  
</body>

```

**JavaScript Code:**

```js
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-11.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="oGePvK" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Second lowest and second greatest numbers from an array-function-ex- 11" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
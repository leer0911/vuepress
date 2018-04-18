# JavaScript: Get the first element of an array

Write a JavaScript function to check whether an 'input' is an array or not.

::: tip

_Test Data_ :  
console.log(is_array('w3resource'));  
console.log(is_array(\[1, 2, 4, 0\]));  
false  
true

:::

**Sample Solution:**

**HTML Code:**

```html




JS Bin





```

**JavaScript Code:**

```js
is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

```

Sample Output:

::: tip

false
true

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-1.png)  

**ES6 Version:**

```js
is_array = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="eGBqxG" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Get the first element of an array- array-ex-1" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/eGBqxG/">JavaScript - Get the first element of an array- array-ex-1</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
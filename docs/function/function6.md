# Find the longest word within a string

Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
_Sample Data and output_:  
_Example string_: 'Web Development Tutorial'  
_Expected Output:_ 'Development'

```
Sample Solution:  - 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Find the longest word within a string</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

```

**Explanation:**  
Assume str = '@Web Development #Tutorial';

The method is used to retrieve the matches when matching a string against a regular expression.  
Therefore str.match(/\\w\[a-z\]{0,}/gi) will return \["Web", "Development", "Tutorial"\].

For loop checks the length of the array element and compare with previous one and finally return the longest string.

The represents an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.  
Syntax -> arr.length

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-6.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="ZXJjzL" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Converts the first letter of each word of a string in upper case-function-ex- 5" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
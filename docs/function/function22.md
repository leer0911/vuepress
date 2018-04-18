# Letter count within a string

Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  
  
_Sample arguments_: 'w3resource.com', 'o'  
_Expected output_: 2

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Letter count within a string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-22.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="QqMVJV" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Letter count within a string-function-ex- 22" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Get a part of string after a specified character

Write a JavaScript function to get a part of string after a specified character.

```

Test Data:
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a')); 
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output: 
"w3resource" "xercises"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to get a part of string after a specified character.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function subStrAfterChars(str, char, pos)
{
  if(pos=='b')
   return str.substring(str.indexOf(char) + 1);
  else if(pos=='a') 
   return str.substring(0, str.indexOf(char));
  else
  return str;  
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));

console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-22.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
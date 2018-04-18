# Repeat a string a specified times

Write a JavaScript function to repeat a string a specified times.

```

Test Data:
console.log(repeat_string('a', 4)); 
console.log(repeat_string('a'));
Output: 
"aaaa" 
"Error in string or count."
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to repeat a string a specified times.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function repeat_string(string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
        count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
  }

console.log(repeat_string('a', 4.6));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2));
console.log(repeat_string('a', Infinity));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-21.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Pad (left, right) a string to get to a determined length

Write a JavaScript function that can pad (left, right) a string to get to a determined length.

```

Test Data:
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output: 
"0123" "12300000"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function that can pad (left, right) a string to get to a determined length.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function formatted_string(pad, user_str, pad_pos)
{
  if (typeof user_str === 'undefined') 
    return pad;
  if (pad_pos == 'l')
     {
     return (pad + user_str).slice(-pad.length);
     }
  else 
    {
    return (user_str + pad).substring(0, pad.length);
    }
}
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-20.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
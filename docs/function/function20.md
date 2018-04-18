# Generates a string id (specified length) of random characters

Write a JavaScript function that generates a string id (specified length) of random characters.

```
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Generates a string id (specified length) of random characters</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-20.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="WZEgKy" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Generates a string id (specified length) of random characters-function-ex- 20" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
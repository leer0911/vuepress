# Chop a string into chunks of a specific length

Write a JavaScript function to chop a string into chunks of a given length.

```

Test Data:
console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',3));
["w3resource"] 
["w3", "re", "so", "ur", "ce"] 
["w3r", "eso", "urc", "e"]
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>chop a string into chunks of a given length</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
string_chop =  function(str, size){
      if (str == null) return [];
      str = String(str);
      size = ~~size;
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-17.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Convert Roman Numeral to Integer

Write a JavaScript function that Convert Roman Numeral to Integer.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function that Convert Roman Numeral to Integer</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function roman_to_Int(str1) {
if(str1 == null) return -1;
var num = char_to_int(str1.charAt(0));
var pre, curr;

for(var i = 1; i < str1.length; i++){
curr = char_to_int(str1.charAt(i));
pre = char_to_int(str1.charAt(i-1));
if(curr <= pre){
num += curr;
} else {
num = num - pre*2 + curr;
}
}

return num;
}

function char_to_int(c){
switch (c){
case 'I': return 1;
case 'V': return 5;
case 'X': return 10;
case 'L': return 50;
case 'C': return 100;
case 'D': return 500;
case 'M': return 1000;
default: return -1;
}
}
console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-22.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
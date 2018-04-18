# Convert an integer into a Roman Numeral

Write a JavaScript function that Convert an integer into a Roman numeral.

```
Sample Solution:-
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function that Convert an integer into a Roman Numeral</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```html
function integer_to_roman(num) {
if (typeof num !== 'number') 
return false; 

var digits = String(+num).split(""),
key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
"","I","II","III","IV","V","VI","VII","VIII","IX"],
roman_num = "",
i = 3;
while (i--)
roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
return Array(+digits.join("") + 1).join("M") + roman_num;
}

console.log(integer_to_roman(27));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-math-exercise-21.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
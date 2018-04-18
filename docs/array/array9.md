# Swap the case of each character of a string, upper case to lower and vice versa

Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

```
Sample Solution:  - 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Swap the case of each character of a string</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```javascript
str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

```

Sample Output:

```
C

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-9.png)  

**ES6 Version:**

```javascript
str = 'c';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];
  
  for(let x=0; x<str.length; x++)
  {
    if(UPPER.includes(str[x]))
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="gGmERg" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Swap the case of each character of a string, upper case to lower and vice versa- array-ex- 9" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
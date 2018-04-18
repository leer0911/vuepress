# Find the first not repeated character

Write a JavaScript function to find the first not repeated character.

```
Sample arguments  : 'abacddbec' 
Expected output : 'e' 

Sample Solution:  - 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>find the first not repeated character.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var ctr = 0;
 
  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;
 
    for (var y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar('abacddbec'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-23.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="xXLaMG" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find the first not repeated character-function-ex- 23" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
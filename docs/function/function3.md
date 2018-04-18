# Generates all combinations of a string

Write a JavaScript function that generates all combinations of a string.  
_Example string:_ 'dog'  
_Expected Output:_ d,o,do,g,dg,og,dog

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Combination of a word</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
//Write a JavaScript function that generates all combinations of a string.
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-3.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="yzoEKN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Check whether a passed string is palindrome or not-function-ex- 2" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
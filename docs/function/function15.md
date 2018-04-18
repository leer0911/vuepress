# Compute the value of bn where n is the exponent and b is the bases

Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
<body>
<body onload="updateClock(); setInterval('updateClock()', 1000)">  
</body>
</html>

```

**JavaScript Code:**

```js
function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-15.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="pWrOgL" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Compute the value of bn where n is the exponent and b is the bases-function-ex- 15" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
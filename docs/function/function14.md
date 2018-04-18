# Convert an amount to coins

Write a JavaScript function to convert an amount to coins.

```
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1

```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Write a JavaScript function to convert an amount to coins.</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-14.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="oGePjv" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Convert an amount to coins-function-ex- 14" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
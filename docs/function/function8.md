# Check a number is prime or not

Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

```
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Check a number is prime or not</title>
</head>
<body>
 
</body>
</html>

```

**JavaScript Code:**

```js
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-8.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="borjdG" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Counts the number of vowels within a string-function-ex- 7" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Find the most frequent item of an array

Write a JavaScript program to find the most frequent item of an array.

```

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Write a JavaScript program to find the most frequent item of an array. - w3resource</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

```

Sample Output:

```
a ( 5 times )

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-8.png)  

**ES6 Version:**

```js
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(`${item} ( ${mf} times ) `) ;

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="YrZgNy" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find the most frequent item of an array- array-ex- 8" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
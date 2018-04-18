# Returns n rows by n columns identity matrix

Write a JavaScript function which returns the n rows by n columns identity matrix.

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>n rows by n columns identity matrix</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function matrix(n) {

        var i;
        var j;

        for (i=0; i < n; i++)
        {
          for (j=0; j < n; j++)
          {
               if (i === j)
               {
                
                 console.log(' 1 ');
               }
                      
               else 
                {
                 console.log(' 0 ');}
                }
             console.log('----------');
           }
       }
matrix(4);

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-10.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="RLZBRd" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Returns n rows by n columns identity matrix-function-ex- 10" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Get the data type

Write a JavaScript function which accepts an argument and returns the type.

```
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
```

**Sample Solution**: -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Detect JavaScript Data Types</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-9.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="XeaBma" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Check a number is prime or not-function-ex- 8" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
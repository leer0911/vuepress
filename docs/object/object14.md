# Retrieve all the values of an object's properties

Write a JavaScript function to retrieve all the values of an object's properties.

```
Sample Solution: -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to retrieve all the values of an object's properties.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function all_values(obj) {
    var keys = _keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  }
function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj)   
{  
    var type = typeof obj;  
    return type === 'function' || type === 'object' && !!obj;  
  } 
console.log(all_values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-object-exercise-14.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
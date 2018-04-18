# Flatten a nested array

Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

```

Sample Data:
console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
[1, 2, 3, [[4]], 5, 6]
```

**Sample Solution**:

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Flatten a nested array</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
var flatten = function(a, shallow,r){
  if(!r){ r = []}
   
if (shallow) {
  return r.concat.apply(r,a);
  }
      
   for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));

console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));

```

Sample Output:

```
[1,2,3,4,5,6]
[1,2,3,[[4]],5,6]

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-21.png)  

**ES6 Version:**

```javascript
const flatten = (a, shallow, r) => {
  if(!r){ r = []}
   
if (shallow) {
  return r.concat(...a);
  }
      
   for(let i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
};

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));

console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="ZXyGmy" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Flatten a nested array - array-ex- 21" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
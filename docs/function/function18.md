# Search JavaScript arrays with a binary search

Write a function for searching JavaScript arrays with a binary search.

```
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript Binary Search</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function array_binarySearch(narray, delement) {
   var mposition = Math.floor(narray.length / 2);

   if (narray[mposition] === delement){
      return mposition;
   }
   else if (narray.length === 1) 
   {
      return null;
   }
   else if (narray[mposition] < delement) {
      var arr = narray.slice(mposition + 1);
      var res = array_binarySearch(arr, delement);
      if (res === null)
      {
         return null;
      }
      else {
         return mposition + 1 + res;
      }
   }
   else {
      var arr1 = narray.slice(0, mposition);
      return array_binarySearch(arr1, delement);
   }
}

 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
 console.log(array_binarySearch(myArray, 6));
 
```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-18.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="veJzmG" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Search JavaScript arrays with a binary search-function-ex- 18" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
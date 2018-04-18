# JavaScript: Find the unique elements from two arrays

Write a JavaScript function to find the unique elements from two arrays.

::: tip

_Test Data_ :  
console.log(difference(\[1, 2, 3\], \[100, 2, 1, 10\]));  
\["1", "2", "3", "10", "100"\]  
console.log(difference(\[1, 2, 3, 4, 5\], \[1, \[2\], \[3, \[\[4\]\]\],\[5,6\]\]));  
\["1", "2", "3", "4", "5", "6"\]  
console.log(difference(\[1, 2, 3\], \[100, 2, 1, 10\]));  
\["1", "2", "3", "10", "100"\]

:::

**Sample Solution:**

**HTML Code :**

```markup



  
  JavaScript function to find the unique elements from two arrays






```

**JavaScript Code :**

```javascript
function difference(arr1,arr2) {
  
  var a1= flatten(arr1,true);
  var a2= flatten(arr2,true);
  
 var a=[], diff=[];
  for(var i=0;i< a1.length;i++)
    a[a1[i]]=false;
  for(i=0;i< a2.length;i++)
  if(a[a2[i]]===true) 
     { delete a[a2[i]];}
    else a[a2[i]]=true;
  for(var k in a)
    diff.push(k);
  return diff;   
  }

var flatten = function(a, shallow,r){
  if(!r){ r = [];}
if (shallow) {
  return r.concat.apply(r,a);
  }  
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

```

Sample Output:

::: tip

\["1","2","3","10","100"\]
\["1","2","3","4","5","6"\]
\["1","2","3","10","100"\]

:::

**ES6 Version:**

```javascript
function difference(arr1,arr2) {
  const a1= flatten(arr1,true);
  const a2= flatten(arr2,true);

  const a=[];
  const diff=[];
  for(var i=0;i< a1.length;i++)
    a[a1[i]]=false;
  for(i=0;i< a2.length;i++)
  if(a[a2[i]]===true) 
     { delete a[a2[i]];}
    else a[a2[i]]=true;
  for(const k in a)
    diff.push(k);
  return diff;
}

var flatten = (a, shallow, r) => {
  if(!r){ r = [];}
if (shallow) {
  return r.concat(...a);
  }  
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="dJVQEm" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="find the unique elements from two arrays" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/dJVQEm/">find the unique elements from two arrays</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
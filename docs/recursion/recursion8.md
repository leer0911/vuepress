# Binary search using recursion

Write a JavaScript program for binary search.

```
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5' 
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Binary search using recursion</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
Array.prototype.br_search = function (target) 
{
  var half = parseInt(this.length / 2);
  if (target === this[half]) 
  {
    return half;
  }
  if (target > this[half]) 
  {
    return half + this.slice(half,this.length).br_search(target);
  } 
  else
  {
    return this.slice(0, half).br_search(target);
  }
};

l= [0,1,2,3,4,5,6];

console.log(l.br_search(5));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-recursion-function-exercise-8.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
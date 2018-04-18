# Marge sort - recursion

Write a merge sort program in JavaScript.

```
Sample array  : [34,7,23,32,5,62]
Sample output  : [5, 7, 23, 32, 34, 62] 
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Merge sort - recursion</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
Array.prototype.merge_Sort = function () {
  if (this.length <= 1) 
  {
    return this;
  }

  var half = parseInt(this.length / 2);
  var left = this.slice(0, half).merge_Sort();
  var right = this.slice(half,     this.length).merge_Sort();
  var merge = function (left, right) 
  {
  var arry = [];
  while (left.length > 0 && right.length > 0)
  {
    arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
    return arry.concat(left).concat(right);
  };

  return merge(left, right);
};

var a = [34,7,23,32,5,62];
console.log(a.merge_Sort());

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-recursion-function-exercise-9.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Returns a subset of a string

Write a JavaScript program which returns a subset of a string.  
_Sample Data:_ dog  
_Expected Output:_ \["d", "do", "dog", "o", "og", "g"\]

```
Sample Solution: -
```

**HTML Code:**

```html
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Subset of a string</title>
  </head>
  <body>
</body>
  </html>
  
```

**JavaScript Code:**

```js
String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dog".sub_String());

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Create a case-insensitive search

Write a JavaScript function to create a case-insensitive search.

```

Test Data:
console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); 
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); 
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); 
"Not Matched"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to create a case-insensitive search.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function case_insensitive_search(str, search_str)
  {
    var result= str.search(new RegExp(search_str, "i"));
  
    if (result>0)
    return 'Matched';
    else
    return 'Not Matched';  
   }

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));

console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-38.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
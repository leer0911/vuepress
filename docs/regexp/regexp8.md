# Count the number of vowels in a given string

Write a JavaScript function to count the number of vowels in a given string.

```
Test Data: 
console.log(alphabetize_string('United States'));
Output : 
"SUadeeinsttt"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to count the number of vowels in a given string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function vowel_count(str) {

  return str.match(/[aeiou]/gi).length;

}

console.log(vowel_count('The quick brown fox jumps over the lazy dog'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-regexp-exercise-8.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Alphabetize a given string

Write a JavaScript function to alphabetize a given string.

```

Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data:
console.log(alphabetize_string('United States'));
Output: 
"SUadeeinsttt"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to alphabetize a given string.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function alphabetize_string(str) 
{
	
return str.split('').sort().join('').trim();

}
console.log(alphabetize_string('United States'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-25.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
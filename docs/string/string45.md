# Get humanized number with the correct suffix

Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

```

Test Data:
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));
"1st"
"20th"
"302nd"
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get humanized number with the correct suffix</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function humanize(number) {
        if(number % 100 >= 11 && number % 100 <= 13)
            return number + "th";
        
        switch(number % 10) {
            case 1: return number + "st";
            case 2: return number + "nd";
            case 3: return number + "rd";
        }
        
        return number + "th";
    }
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-45.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
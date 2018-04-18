# Hide email addresses to protect from unauthorized user

Write a JavaScript function to hide email addresses to protect from unauthorized user.

```

Test Data:
console.log(protect_email("rob"));
""
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Hide email addresses to protect from unauthorised user</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```js
protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "" + part2;
};

console.log(protect_email(""));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-6.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
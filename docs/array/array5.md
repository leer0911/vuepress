# Join all elements of an array into a string

Write a simple JavaScript program to join all elements of the following array into a string.

```

Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
```

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript Array Join</title>
</head>
<body>
</body>
</html>

```

**JavaScript Code:**

```javascript
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

```

Sample Output:

```
Red,Green,White,Black
Red,Green,White,Black
Red+Green+White+Black

```

**ES6 Version:**

```javascript
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="vegBwK" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Join all elements of an array into a string- array-ex-5" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# JavaScript: Join all elements of an array into a string

Write a simple JavaScript program to join all elements of the following array into a string.

::: tip

_Expected Output_ :  
"Red,Green,White,Black"  
"Red,Green,White,Black"  
"Red+Green+White+Black"

:::

**Sample Solution:**

**HTML Code:**

```html




JavaScript Array Join





```

**JavaScript Code:**

```javascript
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

```

Sample Output:

::: tip

Red,Green,White,Black
Red,Green,White,Black
Red+Green+White+Black

:::

**ES6 Version:**

```javascript
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="vegBwK" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Join all elements of an array into a string- array-ex-5" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/vegBwK/">JavaScript - Join all elements of an array into a string- array-ex-5</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
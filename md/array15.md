# JavaScript: Display the colors entered in an array by a specific format

Write a JavaScript program to display the colors in the following way:

::: tip

_Here is the sample array:_  
color = \["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "\];  
o = \["th","st","nd","rd"\]  
_Output_  
"1st choice is Blue ."  
"2nd choice is Green."  
"3rd choice is Red."  
\- \- \- \- \- \- \- \- \- \- \- \- \-

:::

**Sample Solution:**

**HTML Code :**

```html




Display colors using ordinal numbers

 



```

**JavaScript Code:**

```js
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;

 var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

console.log(output);
}

```

Sample Output:

::: tip

1st choice is Blue .
2nd choice is Green.
3rd choice is Red.
4th choice is Orange.
5th choice is Violet.
6th choice is Indigo.
7th choice is Yellow .

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-15.png)  

**ES6 Version:**

```javascript
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n)
 {
  const o = ["th","st","nd","rd"];
  const x = n%100;
  return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 const ordinal = n + 1;

 const output = (`${Ordinal(ordinal)} choice is ${color[n]}.`);

console.log(output);
}

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="Napmpe" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Display the colors entered in an array by a specific format - array-ex- 15" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/Napmpe/">JavaScript - Display the colors entered in an array by a specific format - array-ex- 15</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>
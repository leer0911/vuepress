# JavaScript: Insert dashes (-) between each two even digits of a specific number

Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

::: tip

**Sample Solution:**

:::

**HTML Code:**

```html




Insert dashes (-) between even numbers





```

**JavaScript Code:**

```javascript
const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x

```

`

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-15.png)  

**ES6 Version:**

```javascript
is_array = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
```

**Live Demo :**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="bogGba" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Insert dashes (-) between each two even digits of a specific number- array-ex-6" data-preview="true" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/bogGba/">JavaScript - Insert dashes (-) between each two even digits of a specific number- array-ex-6</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>

  
`
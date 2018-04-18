# Find a word within a string

Write a JavaScript function to find a word within a string.

```

Test Data:
console.log(search_word('The quick brown fox', 'fox')); 
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output: 
"'fox' was found 1 times." 
"'aa' was found 2 times."
```

**Sample Solution:-**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to find a word within a string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function search_word(text, word){
    
    var x = 0, y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-string-exercise-29.png)  

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="jGLepN" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - common-editor-exercises" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
# Extract unique characters from a string

Write a JavaScript function to extract unique characters from a string.

```
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Extract unique character from a string - w3resource</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```html
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-16.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="MEvqeB" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Extract unique characters from a string-function-ex- 16" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
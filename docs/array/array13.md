# Add items in a blank array and display the items

Write a JavaScript program to add items in an blank array and display the items.  
  
_Sample Screen_:  
![](https://www.w3resource.com/w3r_images/add-items-in-array.png)

```
Sample Solution:  
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
<style>
body {padding-top:50px} 
</style> 
</head>
<body>
<input type="text" id="text1"></input>
<input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
<input type="button" id="button2" value="Display" onclick="display_array();"></input>
<div id="Result"></div> 
</body>
</html>

```

**JavaScript Code:**

```javascript
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-13.png)  

**ES6 Version:**

```javascript
let x = 0;
const array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert(`Element: ${array[x]} Added at index ${x}`);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   let e = "<hr/>";   
    
   for (let y=0; y<array.length; y++)
   {
     e += `Element ${y} = ${array[y]}<br/>`;
   }
   document.getElementById("Result").innerHTML = e;
}

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="jGBREX" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript: Add items in a blank array and display the items - array-ex-13" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
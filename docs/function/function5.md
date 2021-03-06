# Converts the first letter of each word of a string in upper case

Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
_Example string_: 'the quick brown fox'  
_Expected Output:_ 'The Quick Brown Fox '

```
Sample Solution:  - 
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

```

**Explanation:**  
Assume str = "the quick brown fox";

The method is used to split a String object into an array of strings by separating the string into substrings.  
console.log(str.split(' '));  
Output : \["the", "quick", "brown", "fox"\]  
First substrings -> "the"  
Code to convert first character of the above sting to upper case-> array1\[x\].charAt(0).toUpperCase()  
console.log(array1\[x\].charAt(0).toUpperCase()); \[here x=0\]  
Output : "T"  
Rest part of the string "the" -> array1\[x\].slice(1)  
console.log(array1\[0\].slice(1));  
Output : "he"  
Final string :  
console.log(array1\[0\].charAt(0).toUpperCase()+array1\[0\].slice(1));  
Output : "The"  
Now insert the above string into another array :  
newarray1.push(array1\[x\].charAt(0).toUpperCase()+array1\[x\].slice(1));  
  
Used functions :  
The method is used to get the specified character from a string.  
Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.  
The method is used to convert the string value to uppercase.  
The method returns a shallow copy of a portion of an array into a new array object.  
The method is used to add one or more elements to the end of an array and returns the new length of the array.  
  
After completing the for loop return the final string :  
return newarray1.join(' ');  
The method joins all elements of an array into a string.

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-5.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="WZEyqb" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Returns a passed string with letters in alphabetical order-function-ex- 4" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
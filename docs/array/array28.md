# Find the longest common starting substring in a set of strings

Write a JavaScript function to find the longest common starting substring in a set of strings.

```

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"
```

**Sample Solution:**

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function to find the longest common starting substring in a set of strings</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```javascript
function longest_common_starting_substring(arr1){
var arr= arr1.concat().sort(),
a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
return a1.substring(0, i);
}

console.log(longest_common_starting_substring(['go', 'google'])); 

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

console.log(longest_common_starting_substring(['abcd', '1234'])); 

```

Sample Output:

```
go
SQL

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-28.png)  

**ES6 Version:**

```javascript
function longest_common_starting_substring(arr1){
  const arr= arr1.concat().sort();
  const a1= arr[0];
  const a2= arr[arr.length-1];
  const L= a1.length;
  let i= 0;
  while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
  return a1.substring(0, i);
}

console.log(longest_common_starting_substring(['go', 'google'])); 

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

console.log(longest_common_starting_substring(['abcd', '1234']));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="LzLpPX" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find the longest common starting substring in a set of strings - array-ex- 28" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
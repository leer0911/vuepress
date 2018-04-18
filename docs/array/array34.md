# Get nth largest element from an unsorted array

Write a JavaScript function to get nth largest element from an unsorted array.

```
Test Data:
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89
```

**Sample Solution:**

```html

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get nth largest element from an unsorted array.</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js

function nthlargest(arra,highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				tnum = arra.length, 
				flag = false, 
				result = false; 
   
			while(x < tnum){
				y = x + 1; 
				
				if(y < tnum){
					for(z = y; z < tnum; z++){
						
						if(arra[x] < arra[z]){
							temp = arra[z];
							arra[z] = arra[x];
							arra[x] = temp;
							flag = true; 
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; 
					if(x === highest){ 
                      
						result = true;
					}	
				}
				if(result){
					break;
				}
			}

			return (arra[(highest - 1)]);	
		}
		
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); 

```

Sample Output:

```
89

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-34.png)  

**ES6 Version:**

```javascript
function nthlargest(arra,highest){
    let x = 0;
    let y = 0;
    let z = 0;
    let temp = 0;
    const tnum = arra.length;
    let flag = false;
    let result = false;

    while(x < tnum){
        y = x + 1; 
        
        if(y < tnum){
            for(z = y; z < tnum; z++){
                
                if(arra[x] < arra[z]){
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){ 
              
                result = true;
            }	
        }
        if(result){
            break;
        }
    }

    return (arra[(highest - 1)]);
}
		
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="XegmjY" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Get nth largest element from an unsorted array - array-ex- 34" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>
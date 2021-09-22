# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 5 and line 7 output different numbers.

Line 5 is within the function scope so when value of X is reassigned, 2 would be printed, if the function was ever called.

Line 7 is has no access to the reassignment of X within the function scope, remains unchanged from initial assignment

## Question 2

Take a look at the following code:

```


function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

X is declared in global scope, accessible inside the function 10 will print to console, when the function is called.

Assignment of Y happens in function-scope, calls to the log OUTSIDE of that result in ref error

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

Calling f1 function with var X will add 1 to the  result, then will log output of initialization value of X

Calling X

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Both instances will output x as an object with value of 10

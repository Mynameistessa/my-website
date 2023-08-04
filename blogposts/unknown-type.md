---
title: 'Typescript: The Unknown Type'
date: '2023-01-01'
---

&nbsp;  
Around 5 years ago from the date of this post the lead architect of Typescript, Anders Hjelsberg, opened a PR to add the ‘unknown’ type to Typescript v3. As of this post we are on v5 and I have rarely made use of this type. 
As such I wanted to dig into the practical benefits of its introduction to the type system. 
&nbsp;  

&nbsp; 
# **Use Cases**
As brief introduction, the Uknown type increases type safety within our project and can be seen as a type safe alternative to the any type.


&nbsp;  
### **Migrating From JS to Typescript**
Perhaps in the past you used `any` when migrating a javascript project to Typescript and then subsequently added the types afterwards. This can involve some guesswork when you’re working with a legacy codebase and the previous developers are either busy or have moved on. This is one use case where the unknown type can help you. It will force and therefore guide you to really understand the flow of types in your project. 
It would be more typesafe to instead use the unknown type here and narrow the type down. This can also be a good way to deduce and learn the codebase. 

&nbsp;  
Whenever we use the type ‘any’ we are basically turning the compiler off. We are no longer getting any feedback about our types at all and we can use operations meant for strings on variables of type number. **This defeats the purpose of using Typescript!** Essentially if you disable type checking you might as well be using javascript.


There are genuine reasons why a variable might be assigned to type unknown. For example if we are working with a logging system, or reading from an API that we ourselves do not maintain. 

It is really helpful I think to think of the type system in terms of set theory. 
Both unknown and any can be described as ‘top types’ or ‘universal supertypes’.  
They are the outermost sets that encompass all other types. A type can be thought of as a set. The unknown set contains all possible values, and therefore we can have as members of this set the following:  

&nbsp;   
` x = 123;
  x = "hello";
  x = [1, 2, 3];`

&nbsp;  


There isn’t anything in the unknown set that allows you to perform all of the operations that exist. I.e. you cannot increment, or make a variable of type unknown upper case without first deducing the type. There is a recommended way to narrow from unknown to a specific type. The recommendation is to use ‘typeof’ operator or ‘instanceof’ operator. You can also use keywords and cast such as ‘as unknown’ ‘as string’. Once again this switches off the compiler. You are essentially telling it you know best and it will trust your judgement. This can result in runtime errors.  

&nbsp;  

`if (typeof example === 'string') example.toUpperCase();`
&nbsp;  
`if (example &&
  typeof example === 'object' &&
  'prop' in example &&
  typeof example.prop === 'number'
) example.prop = 2;`
&nbsp;  
`if (typeof example === 'number') example++;`  

&nbsp;  

This is why a variable of type unknown is only assignable to itself or any. This is also why the following principles hold:
&nbsp;  

*In an intersection everything absorbs unknown: T & unknown => T
*In a union unknown absorbs all other types: T | unknown => unknown *  

*except for any!  

&nbsp;  
Another main use case where unknown is a useful tool is when you are reading from localStorage or any API where json is being deserialised. We can set the response to unknown and then handle the case for each type separately, ensuring type safety. 
  
&nbsp;  

<p>&nbsp;</p>

TODO: Give example

However casting is a common solution when encountering the following error: 

> “Conversion of type 'X' to type 'Y' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.”

This occurs when we use a type assertion with incompatible types.

The solution to this is to first cast and widen the type to unknown and then to the type. This works because remember that all types are assignable to the ‘unknown’ type. 
If the variable was already ox type x OR y, i.e. the union, then we can cast as x or y without this issue. The problem was due to the fact that we had narrows the type down, and yet wanted to cast as another type. 
Solution

Make sure you are comparing values of compatible types.
To solve the error, declare any overlapping properties if they exist or use a type assertion.

If we are confident then we do type assertion or we can make sure there is an overlap. We can edit the type to contain the properties for total overlap. 

The key principle to remember is that we cannot read properties or assign it or perform operations on an unknown value before narrowing the type down first. 




https://bobbyhadz.com/blog/typescript-type-has-no-properties-in-common-with-type
https://bobbyhadz.com/blog/typescript-conversion-of-type-to-type-may-be-mistake


Go back to our use of it, is it ok practise? 

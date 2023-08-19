---
title: 'Typescript: The Unknown Type'
date: '2023-04-14'
---

&nbsp;  
Around 5 years ago from the date of this post the lead architect of Typescript, Anders Hjelsberg, opened a PR to add the ‘unknown’ type to Typescript v3. As I'm writing this we are on v5 and in this post I want to dig into the practical benefits of its introduction to the type system. 

&nbsp;  
The Unknown type increases type safety within our project and can be seen as a type safe counterpart to the `any` type. This is because any allows you to perform any operation on a value without any type checking. Because of this the unknown type can  help us avoid errors such as *`TypeError: Cannot Read Property of Undefined.`*

&nbsp;  
### **Theory**
It can be helpful to think of the type system in terms of set theory. Both unknown and any can be described as *top types* or *universal supertypes*. They are the outermost sets that encompass all other types. A type can be thought of as a set. The unknown set contains all possible values, and therefore we can have as members of this set the following:  

&nbsp;   
`x = 123;`
&nbsp;  
`x = "hello";`
&nbsp;  
`x = [1, 2, 3];`

&nbsp;  
This illustrates the principle that any variable is assignable to unknown, but unknown isn't assignable to anything but itself or any. And this defines it as an atomic type, i.e. it cannot be broken down. 

&nbsp;  
There isn’t anything in the unknown set that allows you to perform operations such as increment, or make a variable of type unknown upper case without first deducing the type. Everything assigned to type unknown will result in an error unless you assert or narrow the type down first.

&nbsp; 

### **Narrowing**
There is a recommended way to narrow from unknown to a specific type. The recommendation is to use ‘typeof’ operator or ‘instanceof’ operator. You can also use keywords and cast such as ‘as unknown’ ‘as string’. This switches off the compiler. You are essentially telling it you know best and it will trust your judgement. This can result in runtime errors.  

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
* In an intersection everything absorbs unknown: T & unknown => T

* In a union unknown absorbs all other types: T | unknown => unknown *  

&nbsp;  
*except for any!  

&nbsp;  
The key principle to remember here is that we cannot read properties or assign it or perform operations on an unknown value before narrowing the type down first. 
  
&nbsp; 
##  **Use Cases**
Below are common scenarios for where this type can be applied.

&nbsp;  
* ### **Migrating From JS to Typescript**
Perhaps in the past your team decided to migrate a Javascript project to Typescript. This can involve some guesswork if you’re working with a legacy codebase and the previous developers are either busy or have moved on. This was a situation I found myself in as a junior developer that had just been joined the project. It is tempting to make use of the `any` to get the project to compile and then gradually add the types in as you became more familiar with the codebase. However, this is where the unknown type can help. It would be type-safe to instead use the unknown type here and narrow the type down. This can also be a good way to deduce and learn the codebase. Whenever we use the type ‘any’ we are basically turning the compiler off. We are no longer getting any feedback which means that we can use operations meant for strings on variables of type number without generating any errors. This defeats the purpose of using Typescript!

&nbsp;  
### **Reading from an external API**
If we are working with a logging system, or reading from an API that we cannot rely on without any risk then it is correct to use the unknown type when reading from it.
 
Another typical example is when you are reading from localStorage or any API where json is being deserialised. We can set the response to unknown and then handle the case for each type separately, ensuring type safety. 

&nbsp;  
---
&nbsp;  
### **Sources**

* [https://bobbyhadz.com/blog/typescript-type-has-no-properties-in-common-with-type](https://bobbyhadz.com/blog/typescript-type-has-no-properties-in-common-with-type)
* [https://bobbyhadz.com/blog/typescript-conversion-of-type-to-type-may-be-mistake](https://bobbyhadz.com/blog/typescript-conversion-of-type-to-type-may-be-mistake)


---
title: 'Typescript: The Unknown Type'
date: '2023-04-14'
readingTime: '5'
---

&nbsp;  
In 2018, the unknown type was introduced along with Typescript 3.0. In this post I will dig into the practical benefits of its introduction to the type system. 

&nbsp;  
The unknown type increases type safety within our project and can be seen as a type safe counterpart to the `any` type. This is because any allows you to perform any operation on a value without any type checking. Because of this it can help us avoid errors at runtime such as *`TypeError: Cannot Read Property of Undefined.`*

&nbsp;  
### **Theory**
It can be helpful to think of the type system in terms of set theory, i.e. a type can be thought of as a set. Both unknown and any can be described as *top types* or *universal supertypes*. They are the outermost sets that encompass all other types.  The unknown set contains all possible values, and therefore we can have as members of this set the following:  

&nbsp;  
`let x: unknown;`
&nbsp;   
`x = 123;`
&nbsp;  
`x = "hello";`
&nbsp;  
`x = [1, 2, 3];`

&nbsp;  
This illustrates the principle that any variable is assignable to unknown, but unknown isn't assignable to anything but itself or any without a type assertion or narrowing.  
For union and intersection types the following principles hold: 

&nbsp;  
* In an intersection everything absorbs unknown: T & unknown => T

* In a union unknown absorbs all other types: T | unknown => unknown *  

&nbsp;  
*except for any!  

* unknown | any => any;

&nbsp;  
Unlike the any type, we cannot access properties on variables of the unknown type nor call or construct them. For example, consider x above, we cannot increment, or use the method toUpperCase without first deducing the type. Everything assigned to type unknown will result in an error unless you assert or narrow the type down first.

&nbsp; 

### **Narrowing**
There is a recommended way to narrow from unknown to a specific type. The recommendation is to use ‘typeof’ operator or ‘instanceof’ operator. You could also use keywords and cast such as ‘as unknown’ ‘as string’ however this switches off the compiler. As mentioned, this will result in a runtime error if you make a mistake and get the type wrong.  

&nbsp;  

```
if (typeof example === 'string') example.toUpperCase();

if (example &&
  typeof example === 'object' &&
  'prop' in example &&
  typeof example.prop === 'number'
) example.prop = 2;

if (typeof example === 'number') example++;
```


&nbsp;  
The key principle to remember here is that we cannot read properties or assign it or perform operations on an unknown value before narrowing the type down first. While the any type is like an escape hatch out of the type system, the unknown type will force us to ensure type safety. 
  
&nbsp; 
##  **Use Cases**
Below are common scenarios for where this type can be applied.

&nbsp;  
* ### **Migrating From JS to Typescript**
Perhaps in the past your team decided to migrate a Javascript project to Typescript. This can involve some guesswork if you’re working with a legacy codebase and the previous developers are either busy or have moved on. This was a situation I found myself in as a junior developer that had just been onboarded to the project. It is tempting to make use of the `any` to get the project to compile and then gradually add the types in as you became more familiar with the codebase. However, this is where the unknown type can help. It would be type-safe to instead use the unknown type here and narrow the type down. This can also be a good way to deduce and learn the codebase. Whenever we use the type ‘any’ we are basically turning the compiler off. We are no longer getting any feedback which means that we can use operations meant for strings on variables of type number without generating any errors. This defeats the purpose of using Typescript!

&nbsp;  
### **Reading from an external API**
If we are working with a logging system, or reading from an API where the types might get updated before we update our application then it is correct to use the unknown type when reading from it.
 
&nbsp;  
Another typical example is when you are reading from localStorage or any API where JSON is being deserialised. We can set the response to unknown and then handle the case for each type separately, ensuring type safety. 

&nbsp;  
---
&nbsp;  
### **Sources**

* [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)
* [https://bobbyhadz.com/blog/typescript-type-has-no-properties-in-common-with-type](https://bobbyhadz.com/blog/typescript-type-has-no-properties-in-common-with-type)
* [https://bobbyhadz.com/blog/typescript-conversion-of-type-to-type-may-be-mistake](https://bobbyhadz.com/blog/typescript-conversion-of-type-to-type-may-be-mistake)
* [https://mariusschulz.com/blog/the-unknown-type-in-typescript](https://mariusschulz.com/blog/the-unknown-type-in-typescript)


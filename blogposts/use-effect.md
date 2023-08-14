---
title: 'How not to use useEffect'
date: '2023-08-11'
---

&nbsp;  
useEffect is a React Hook that lets you synchronise with external system. It executes after render (and every time component renders afterwards if no dependency
array is set). Called twice when strict mode is wrapping your application. It can run an optional clean-up function after current effect and before executing the
next effect. When should it be used: subscribing to services and events, fetching data on component mount, reacting to updates in component. Risks include memory leaks, waterfalls and race conditions. 


&nbsp;  
### **When not to use it**

“Sometimes slow, sometimes its just wrong to use it for the situation”
• “Separate the concept of “data fetching” into two categories: initial data
fetching and data fetching on demand.”
• “If your app is a story, can you tell it in pieces, or you want your users to see
the story in full right away, without any intermediate steps?”
• Don’t make the request unless its really necessary, runs too many times, we
just want it to run once
• If you need to keep fetching then a library might be better to use

&nbsp;  
### **Race conditions and memory leaks**

Why race conditions happen: asynchronous nature of requests
• How to fix it: add a clean up function in your useEffect in combination with
1. Browsers use API called Abort Controller if you want to save bandwidth
and cancel requests
OR
2. A boolean flag (better if you need to support users of IE).


`useEffect(() => {
 let ignore = false;
 fetchStuff().then(res => {
 if (!ignore) setResult(res)
 })
 return () => { ignore = true }
}, [])
`

Memory leaks occur when you have objects or resources that are no longer needed but are still being referenced by the application”
• Subscribe to an event listener and then you navigate away or delete the app
• Or an id is passed down as a prop, and if the component receives a different
id and if second request finishes FIRST then we will see the response for the
first request (stale data)
• Again can be fixed via clean up function to cancel any unnecessary requests

Waterfalls
• Component tree where each component renders and execute a useEffect to
fetch data, this is blocking and takes time
• This adds adds up!
• To improve performance fetch in parallel instead of fetch in useEffect
• Or “lift” requests higher up the component tree and pass down result as
props

&nbsp;  
### **Sources**

Sources
• https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
• https://www.wisdomgeek.com/development/web-development/react/
avoiding-race-conditions-memory-leaks-react-useeffect/
• https://medium.com/geekculture/the-tricky-behavior-of-useeffect-hook-inreact-18-282ef4fb570a
• https://twitter.com/_georgemoller
• https://www.developerway.com/posts/how-to-fetch-data-in-react


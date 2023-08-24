---
title: 'Pitfalls of useEffect'
date: '2023-08-11'
readingTime: '6'
---


&nbsp;  
The useEffect Hook provided by React lets you synchronise with external system. It executes after render and every time the component renders again if a dependency array is not set. It is also important to note that it will be called twice if you are using [StrictMode](https://react.dev/reference/react/StrictMode) as a tool for unearthing nasty bugs earlier on in development. 

&nbsp;  
In addition to this, useEffect can return an optional clean-up function. This will run before our component unmounts and after the current effect and before executing the next effect during re-rendering. 

&nbsp;  
```
useEffect(() => {
	// effect
	return () => {
		// cleanup 
	}
}, [input])
```

&nbsp;  
Generally speaking, the useEffect hook is used when subscribing to services and events, fetching data on component mount and reacting to updates in a component. However it can also cause memory leaks, network waterfalls and race conditions if not used carefully. In this blogpost I will go through the causes of these risks and give examples of using this hook.

&nbsp;  
### **Memory leaks and Race Conditions**
Memory leaks occur when you have objects or resources that are no longer needed but are still being referenced by the application”. 
One scenario where this can happen is when your component subscribes to an event listener. For example, perhaps we want to listen to subscribe to changes to the window size. If the user navigates away from the page, and the component unmounts without unsubscribing, then this event listener will remain and continue to up resources needlessly.

&nbsp;  

Race conditions occur due to the synchronous nature of requests. This means that we cannot guarantee the order in which requests resolve. This can cause our component to render stale or incorrect data. To avoid this happening we can make use of the aforementioned clean up function.
We can solve this in two ways. The first method is to use a boolean flag to ensure we always display the latest results:   

&nbsp;  
```
useEffect(() => {
let isMounted = true;
	try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const jsonData = await response.json();

        if (isMounted) {
          setData(jsonData);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setData(null);
          setError(err.message);
        }
      }
return () => { isMounted = false }
}, [])
```  
&nbsp;  

The first time this function runs, isMounted is true and we fetch data and set the data to be read. Then, the clean-up function will run before the next effect executes and this sets isMounted to false. This means that if the component rerenders and the hook is called while an in-

&nbsp;  
The second method would be to make use of an API that the browser is already using: Abort Controller. This will cancel any in-flight HTTP requests that are no longer needed and therefore save bandwidth. You can read more about this [here](https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect). This solution doesn't support users of IE.
<!-- make links look like links! -->

&nbsp;  
### **Network waterfalls**
Consider a component tree where each sub-component executes a useEffect function and displays a loading spinner while fetching some data to be displayed. As we know, the request to fetch this data will happen after the component renders. For a complex application this can mean that the number of requests we make over the network adds up and slow down our application. To improve performance we have a few choices: either we fetch in parallel, possibly by using a library, or we move the hook higher up in our applications component tree. By “lifting” requests higher up the component tree and pass down result as props we can avoid or reduce the number of requests executing at any one time.

&nbsp;  

Before using this hook consider if this is the best way to achieve what you want. Do you need to make a request on every render, or can it be on demand? Is it sufficient to just fetch once on mount? To save resources we don't want to make any unnecessary requests. In fact, there is a limit set by the browser for the number of requests we can run in parallel. In Google Chrome, the default value is 6 connections per domain. Therefore, Chrome will only make a maximum of 6 HTTP requests to a single domain at the same time.

&nbsp;  

>	“If your app is a story, can you tell it in pieces, or you want your users to see
the story in full right away, without any intermediate steps?”

&nbsp;  
### **Final notes**
When its required to repeatedly fetch then a library might be better alternative as this can make use of caching. 

&nbsp;  
Make sure the dependency array only tracks changing to the variables that should trigger a new request. The code snippet below illustrates how this can be achieved. 

&nbsp;  
```
const onPageView = (currentPath) => {
	trackAnalytics('Page View', currentPath, user.name)
}
useEffect(() => {
	onPageView(route.url);
	}, [route.path]);
```

&nbsp;  
Our function to track analytics requires three arguments, but we only need want to call this function when the path updates. Instead of putting all three arguments in our effect dependency array, we can wrap the function in another function that takes a single argument, the variable we want to listen to, and call that in the useEffect hook instead. 
This prevents calling the hook more than necessary. However a word of warning is that many nasty bugs can arise when we miss out dependencies in the hooks array, so we need to be sure we of the props we add or remove.

&nbsp;  
Avoid using the useEffect hook to recalculate a value when a prop updates. Take the code snippet below as an example. We could write a useEffect to listen to updates to items, and then return a new total. However, it might be sufficienet to simply call a regular function to do the recalculation. 

&nbsp;  
```
const Checkout = () => {
	const [items, setItems] = useState([]);
	const newTotal = items.reduce((acc, currValue) => {
		return acc + currValue.price;
	}, 0);
}
```


&nbsp;  
<!-- how to make these open in a new tab? -->
### **Sources**

- [https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect](https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect)
- [https://www.wisdomgeek.com/development/web-development/react/avoiding-race-conditions-memory-leaks-react-useeffect/](https://www.wisdomgeek.com/development/web-development/react/avoiding-race-conditions-memory-leaks-react-useeffect/)
- [https://medium.com/geekculture/the-tricky-behavior-of-useeffect-hook-inreact-18-282ef4fb570a](https://medium.com/geekculture/the-tricky-behavior-of-useeffect-hook-inreact-18-282ef4fb570a)
- [https://twitter.com/_georgemoller](https://twitter.com/_georgemoller)
- [https://www.developerway.com/posts/how-to-fetch-data-in-react](https://www.developerway.com/posts/how-to-fetch-data-in-react)

# Basic Components:-

1. React is extremely popular ,declarative, component based , state driven js library for building interfaces.

2. Whenever the state changes , react reacts to the changes by re-rendering the UI.

3. React is also called the view layer.

4. React is an abstraction away from dom.

4. cra and vite are tool chains used to create react apps.

5. cra used some slow and outdated technologies like webpack bundler 

6. Hot module reloading:- Whenever the code changes automatically page refeeshes.

7. jsx is simply as syntax that combines html,css ,js as well as referencing other components.

8. Babel is a transpiler which converts jsx code to raw js code. 

9. Template literal ${} ke andar optional chaining ? use nahi ho sakta hai.

10. There are two options for creating react scaffolding:-
(a) cra (create react app)
(b) vite

11. If you will create large scale application using cra then you will face problems like slow refresh.

12. In vite hot module reloading is very fast so now it is being used to make large scale apps.

13. React strict mode is a development only feature and does not impact applications on production.In development mode react strict mode renders all the component twice.

14. Never write two components in the same file.

15. To apply inline styling use style props where style is passed as an object.

16. While using style props write the css properties in camel case.

17. For class use className

18. @import url('path to css file') (wheteher in repository or on internt) used to impprt other css files inside a css file

19. filename.module.css used to style things in local scope . If we use normal css files then style will happen in global scope.

20. You cannot export anything inside a function. To export something you have to be in global scope.

21. In {} we can only write expressions that return some value.

22. onClick={()=>fun(p1,p2)}

23. onClick={(e)=>fun(e,p1,p2)} (Way to pass event listener)

24. onClick={fun()}=> It executes fun() before clicking and nothing happens after clicking.

25. In {} you can write anything which produces a value.

26. A piece of jsx produces js expression.

27. A piece of jsx can have excatly one root or parent element. 

28. You can use React.Fragment to return multiple elements in jsx . It can only have key and children as props.

29. css inline styles are written like {{styles}}

30. Comments needs to be in {} because they are in js

31. Jab bhi loop lagao key props hamesha use karo.

32. {true} or {false} we are not able to see the output.

33. In js [] is considered as true and [] in python considered as false

34. {condition && rendering}

35. 0 is falsly value.

36. {
  condition?():()
}
or sometimes:
{
  condition ?():null
}

37. Insted of using <></> use <React.Fragment></React.Fragment> as when passing key props we have the only option of writing <React.Fragment></React.Fragment>

38. Apply styles in class dynamically:
className={condition?"claa1":"class2"}

39. You should only use index as key in the following cases:-
(a) Data is static
(b) No reordering to be done on data
(c) Absence of unique identifier

40. To handle event listeners in react use callback functions.

41. 

42. 

43. 

# State and  Props:


1. Props are used to pass data from parent to child . They are read only and they should not be modified by the child (unless they are used as lifting of state).

2. In react it is a rule that the component must be pure functions in terms of props and states.

3. Props are immutable i.e child component cannot modify them unless they are state variables. If the props is an object then it can be modified in child component but that is not a good practice.

4. Props is one way data flow . You can only pass props from parent to child. For two way data flow you need lifting of the state

5. 

  Question:  const Dummy=({name})=>{
    console.log(`Dummy component rendered`);
    name="Atul";
    return (
      <h1>{name}</h1>
    );
  }

  export default Dummy;
  import "./App.css";
  import Dummy from './components/Dummy';

  const callConsole=()=>{
    console.log("Hello World");
    return <h1>Work done</h1>
  }
  function App() {
    console.log("App component rendered")
    return (
      <>
        <div>Hello World</div>
        {
          callConsole()
        }
        <Dummy name="Rahul"/>
      </>
    );
  }

  export default App;

  props are immutatble. How this is happening that in child component it is getting changed?

  Ans: In React, props are immutable by default, which means that the values passed from the parent component to the child component cannot be directly modified within the child component. However, in your code, you are modifying the `name` prop inside the `Dummy` component, which is not the correct way to handle props.

  Here's what's happening in your code:

  1. In the `Dummy` component, you have the following code:

  ```jsx
  const Dummy = ({ name }) => {
    console.log(`Dummy component rendered`);
    name = "Atul"; // Modifying the prop directly
    return (
      <h1>{name}</h1>
    );
  };
  ```

  When you assign a new value to the `name` prop (`name = "Atul"`), it creates a new local variable named `name` within the scope of the `Dummy` component. This local variable shadows the prop with the same name, but it does not actually modify the original prop passed from the parent component.

  2. In the `App` component, you are passing the string `"Rahul"` as the value for the `name` prop when rendering the `Dummy` component:

  ```jsx
  <Dummy name="Rahul" />
  ```

  3. When the `Dummy` component is rendered, it logs `"Dummy component rendered"` to the console, but the `name` prop is not being used to render the `<h1>` element. Instead, the local variable `name` with the value `"Atul"` is used.

  4. The actual value of the `name` prop passed from the `App` component (`"Rahul"`) is never used or displayed in the `Dummy` component.

  To properly handle props in React, you should avoid modifying them directly within the child component. Props are designed to be read-only values passed from the parent component to the child component.

  If you need to update the state based on the prop value, you can use the `useState` hook and initialize it with the prop value:

```jsx
  import { useState } from 'react';

  const Dummy = ({ name }) => {
    console.log(`Dummy component rendered`);
    const [localName, setLocalName] = useState(name);
    // Now you can use localName and setLocalName to update the state
    return (
      <h1>{localName}</h1>
    );
  };
  ```

  In this updated code, the `name` prop is used to initialize the `localName` state variable using the `useState` hook. You can then use `localName` to render the component and `setLocalName` to update the state if needed, without modifying the original prop.

6. 

const Dummy=(props)=>{
  console.log(`Dummy component rendered`);
  props.name="Atul";
  return (
    <h1>{props.name}</h1>
  );
}

export default Dummy;


import "./App.css";
import Dummy from './components/Dummy';

const callConsole=()=>{
  console.log("Hello World");
  return <h1>Work done</h1>
}
function App() {
  console.log("App component rendered")
  return (
    <>
      <div>Hello World</div>
      {
        callConsole()
      }
      <Dummy name="Rahul"/>
    </>
  );
}

export default App;

Here you will get error:

react-dom_client.js?v=3bf25f9e:19411 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'



7. The potential flaw in the code snippet you provided is that it may not produce the expected result due to the asynchronous nature of the `setState` function in React.

```javascript
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

The issue is that the `count` variable used in each `setCount` call is the initial value of the state, not the updated value from the previous `setCount` call. This is because the state updates are batched and applied asynchronously by React.

Here's how it works:

1. The first `setCount(count + 1)` call updates the state, but the new state value is not immediately available.
2. The next three `setCount(count + 1)` calls also use the initial `count` value, not the updated value from the previous call.
3. The final state value may not be what you expect, as it only reflects the last `setCount` call, not the cumulative updates.

To ensure that the state updates are applied correctly, you should use the functional form of `setState`, which provides the previous state as a parameter:

```javascript
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
```

In this updated version, each `setCount` call uses the previous state value (`prevCount`) to calculate the new state, ensuring that the updates are applied correctly and the final state reflects the cumulative changes.

Alternatively, you can combine multiple state updates into a single `setCount` call:

```javascript
setCount(count => count + 4);
```

This will update the state by adding 4 to the current value, which is equivalent to the four separate `setCount` calls in the original example.

By using the functional form of `setState` or combining multiple updates into a single call, you can avoid the potential issues caused by the asynchronous nature of state updates in React.

8. By default children par bhi same css apply ho jata hain parent ke hisab se.

9. Using index as key is an anti-pattern :
Using the index of an array as the `key` prop when rendering a list of items in React is considered an anti-pattern for the following reasons:

   1. It can lead to performance issues

    When you use the index as the `key`, React doesn't have a stable identifier for each item. If the order of the items changes or if items are added or removed, React may re-render more items than necessary, leading to potential performance issues.

    2. It can cause data inconsistencies

    If the list is dynamic and items can be reordered, added, or removed, using the index as the `key` can cause issues with data mapping. React assumes that the order of the items will remain the same, but if the order changes, React may associate the wrong data with each item.

   3. It violates the assumptions of React's diffing algorithm*

    React's diffing algorithm assumes that the developer can hint at which child elements may be stable across different renders with a `key` attribute. Using the index as the `key` violates this assumption, as the index may change if the order of the items changes.

   4. It can lead to unexpected behavior in some cases

    Using the index as the `key` may work fine in some cases, but it can lead to unexpected behavior if the list is dynamic. For example, if you add an item to the beginning of the list, all the `key` values will change, and React may not be able to track the changes correctly.



10. value prop in input should be either empty string or undefined but it should not be null

11. Form par onsubmit define karo na ki submit button par . Submit button ka type submit hona chahiye

12. Jo data change ho raha hai UI me aur wo visibile hai to uske liye state variables use karo.

13. State allows developers to do things:-
(a) Allows to update the component view (by re-rendering it)
(b) Allows developers to persist local variables between multiple renders and re-renders.

14. Normal variables are destroyed and re-created during re-renders. So if you want that local variables are not destroyed and re-created during re-renders, that make that local variable as state.

15. Not complete file is re-rendered during the state change . Only the functional component that consumed the state changed re-renders and its child components also re-renders.

16. Always change the state variable using the available function for the state. Otherwise the change in state variable will not be reflected in UI.

17. Jab aap input element ke andar value likhte hain to wo dom hold karta hain naki reactjs

18. In React , controlled components refers to the component that have their state and behavoiur controlled by parent component.

19. e.target[0].value used to access the first input element of form

20.  faltu ka state variable nahi banana hai. Yadi koi state variable kisi group of state variable se derived hota hai to wo state variable useless hai.

21. e.preventDefault(); The e.preventDefault() method is used in JavaScript to prevent the default behavior of an event from occurring. It's commonly used in event handlers to stop the default action associated with a particular event.

22. Form Submission: When a form is submitted, the default behavior is to reload the page. To prevent this and handle the form submission in JavaScript, you can call e.preventDefault() in the form's submit event handler.

23. Hooks can onluy be defined inside the functional component. 

24. Child component ka state change hone se parent component re-rednder nahi karega yadi wo state parent me use nahi ho raha directly. Par parent component ka state change hone se automatically child component re-render hoga

25. Rules regarding using hooks:-
(a) call hook at the top level
(b) Only call hook inside the functional component

26. We cannot directly export state variables are they are defined inside the functional component using hooks. We can only export variables in local scope.

27. State variable aur uske related functions re-render ke time firse create nahi hota hai.


# Hooks ,axios and react apis

https://www.youtube.com/playlist?list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2

1. Axios is a powerful and easy-to-use library for making HTTP requests in JavaScript. It provides a simple and intuitive interface for sending and receiving data from a server. By using Axios, you can make requests to a server and handle the responses in a straightforward way.

2. Axios automatically jsonifies the incomming data

3. Get request:

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

4. Post request:

import axios from 'axios';

axios.post('https://jsonplaceholder.typicode.com/todos', {
  title: 'New Todo',
  completed: false
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

5. PUT request:
import axios from 'axios';

axios.put('https://jsonplaceholder.typicode.com/todos/1', {
  title: 'Updated Todo',
  completed: true
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

6. DELETE 
import axios from 'axios';

axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

7. memo api:

Application: Jab tak props change nahi hoga tab tak component re-render nahi karega

Usage:

const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;

8. lazy api:

Usage: Jab tak component render nahi hoga  for the first time tab tak uss compoennt ka code load nahi hoga

Application:

import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

9. useState hook: useState is a React Hook that lets you add a state variable to your component.
const [state, setState] = useState(initialState)
setState((prev)=>prev_to_new)



10. useEffect Hook : If there is no dependency array , then it will be called on every re-render.
If the dependency array is [] then it will be called only once. If the dependency array has some parameters then it will be called when those parametewrs changes or during initial re-render. The elements in dependency array can be state or props. This is true for useEffect, useMemo, useCallback etc where there is a provision for providing dependency array.

import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}

11. useMemo : useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
const cachedValue = useMemo(calculateValue, dependencies)

import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}



12. useRef: 

- Value of useRef always inside current property.
const ref=useRef();
ref.current => used to access the value of ref

- useRef will allow you to make update and read the updated value instantly without re-render and the reason you dont wait for re-render is because useRef dont even trigger a re-render in first place.Jab tak component re-render nahi hoga tab tak uska dom re-paint nahi hoga yani UI par koi visible effect nahi hoga. So it ia adviced not to use useRef inside return .

- useRef always allows you to access dom directly.

- Hooks always runs after things are rendered




13. useReducer: It is similar to useState. It is used when two or more states are dependent on each other . It is done so to reduce the lines of code.

const [state, dispatch] = useReducer(reducer, initialState);

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}



14. useCallback : Jab bhi koi component re-render hota hai to usme functiosn firse create hota hai.Function create hone ke karan uska reference bhi change hota hai. Yadi wo function kisi bhi child component me as a props pass hua hai to bhalehi wo memo me ho par wo fir se render hoga. Isslie humlog callback hook use karte hain taki function firse create nahi ho.

15. useTransition :useRef is a React Hook that lets you reference a value that’s not needed for rendering.


16. useId : useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

const id = useId()

17. Do not call useId to generate keys in a list. Keys should be generated from your data.

18. Jab state change hota hai tab pehle pura code execute hoga and fir re-render trigger hoga . Aaisa nahi hoga ki jaise hi state change hua aage ka code execute hone ke wjah re-render ho yagega functional component. Except for useRef hook all updated values are accesible in the next render.





# Differnt types of storage in browsers

1. Use localStorage when:

- You need to store simple data that should persist across browser sessions, like user preferences, settings, or non-sensitive data
- You want to store data that is publicly available and not at all sensitive, like a username or favorite color 
- You have a small amount of data to store, as localStorage has a 5MB limit per domain.

2. Don't use localStorage when:-

- You need to store sensitive data like authentication tokens, as localStorage is accessible by JavaScript and can be read by any script on the page.
- You need to store large amounts of data, as there are size limitations. Use IndexedDB instead for larger datasets.
- You only need to store data for the current session. Use sessionStorage instead, which clears when the browser tab is closed.
- You need to store data that should be sent with every HTTP request, like session cookies. localStorage is only accessible client-side.

3. In summary, localStorage is best used for simple, non-sensitive data that should persist permanently on the client-side. Avoid storing anything security-related or large datasets in it. Use sessionStorage for session-only data, cookies for data to be sent to the server, and IndexedDB for larger storage needs.

4.  Comparison of localStorage vs cookies in terms of performance:


- localStorage is faster than cookies. One benchmark found localStorage to be two orders of magnitude faster than cookies.

- Accessing data from localStorage takes about 0.0007 milliseconds. It is significantly faster than accessing regular object properties.

- localStorage does not impact HTTP traffic at all, as the data is only stored and accessed client-side. 

- Cookies, on the other hand, can potentially slow down web traffic slightly since they are sent with every HTTP request to a domain if they match the domain and path.

- localStorage has a much larger storage limit of around 5-10MB per domain, depending on the browser.

- Cookies are limited to only 4KB per cookie.

In summary, localStorage is faster and can store much more data than cookies without impacting HTTP performance. However, cookies can be read server-side while localStorage is client-side only. The choice depends on your specific use case and data requirements.

5. IndexedDB allows you to store a wide range of data types.
There is no specific limit on the size of a single item in IndexedDB, but the total size of the database is limited by the browser and disk space. It is very huge as compared to that of local storage in the magintude of gb generally.

6. Cookie ka size 4kb hota hai aur wo session id store karne ke kaam aata hai.

7. localStorage me data persist karta hai aur indexDB me bhi

8. Differences between localStorage and indexedDB in terms of data persistence:

(a)localStorage:
- Stores data as key-value pairs, where both the key and value are strings.
- Data stored in localStorage persists across browser sessions and page reloads.
- Has a storage limit of around 5-10MB per domain, depending on the browser.
- Synchronous API, which means it can block the main thread if large amounts of data are being accessed or modified.
- Good for storing small amounts of non-sensitive data that needs to persist across sessions, like user preferences or settings.

(b)indexedDB:
- Provides a more robust and flexible database-like storage system.
- Stores data in the form of objects, which can be complex data structures like arrays, nested objects, etc.
- Data stored in indexedDB persists across browser sessions and page reloads.
- Has a much larger storage limit, typically up to 50MB per origin (domain + protocol) or more, depending on the browser and available disk space.
- Asynchronous API, which means it can perform operations without blocking the main thread.
- Suitable for storing large amounts of structured data, such as user-generated content, offline-first applications, and other data-intensive use cases.
- Supports advanced features like indexing, transactions, and version management, making it more suitable for complex data storage and retrieval needs.

In summary, localStorage is better suited for small, simple key-value data that needs to persist, while indexedDB is more appropriate for larger, more complex data structures that require advanced database-like features and higher storage limits.

9. localStorage always stores the string data only.
To convert string to json JSON.parse()
To convert json to string JSON.stringify()


# React Router Dom


# Context Api

1.  Here is a coding example to illustrate the effects of state transitions on parent and child components when using the React Context API:

### Example Code

#### `TodoContext.js`
```javascript
import { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const selectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const value = {
    todos,
    selectedTodo,
    addTodo,
    selectTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
```

#### `ParentComponent.js`
```javascript
import React from 'react';
import { TodoContext } from './TodoContext';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const { todos, selectedTodo } = React.useContext(TodoContext);

  return (
    <div>
      <h1>Parent Component</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
```

#### `ChildComponent.js`
```javascript
import React from 'react';
import { TodoContext } from './TodoContext';

const ChildComponent = () => {
  const { addTodo, selectTodo } = React.useContext(TodoContext);

  const handleAddTodo = (event) => {
    const todoText = event.target.value;
    addTodo({ id: Date.now(), text: todoText });
    event.target.value = '';
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" onChange={handleAddTodo} />
      <button onClick={() => selectTodo(selectedTodo)}>Select Todo</button>
    </div>
  );
};

export default ChildComponent;
```

### Effects of State Transitions

1. **Parent Component**:
   - When the `todos` state changes (e.g., a new todo is added), the `ParentComponent` will re-render because it consumes the `todos` state from the context. Jo state variable return statement me directly ya indirectly hain usko hi manajayega ki wo component consume kar raha hai. 
   - When the `selectedTodo` state changes (e.g., a todo is selected), the `ParentComponent` will not re-render because it only consumes the `selectedTodo` state indirectly through the `ChildComponent`.

2. **Child Component**:
   - When the `todos` state changes (e.g., a new todo is added), the `ChildComponent` will re-render because it consumes the `todos` state from the context.
   - When the `selectedTodo` state changes (e.g., a todo is selected), the `ChildComponent` will re-render because it consumes the `selectedTodo` state directly.

### Key Points

- **Parent Component**:
  - Re-renders when the `todos` state changes.
  - Does not re-render when the `selectedTodo` state changes unless it directly consumes it.

- **Child Component**:
  - Re-renders when the `todos` state changes.
  - Re-renders when the `selectedTodo` state changes.

By understanding these effects, you can optimize your application's performance and ensure that components re-render only when necessary.


2. Strategies to Mitigate Performance Issues
Memoization: Use useMemo to memoize the context value. This ensures that components only re-render when the context state actually changes, rather than on every re-render.
Optimize Context Updates: Carefully consider when and how to update the context value to minimize unnecessary re-renders. For example, only update the context when there is a significant change in the state.
Use Reducers and Middlewares: Instead of using useEffect to handle state changes, consider using useReducer and middlewares to manage state transitions more explicitly. This can help in avoiding unnecessary re-renders and side effects.

3. 

# Redux and redux persist


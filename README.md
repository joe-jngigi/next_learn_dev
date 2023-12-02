# NextJS Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Code Snippets

 ```TSX
 <p className="date">
    {new Date(`${blogPost.datePublished}`).toLocaleDateString(
      'en-us',
      {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }
    )}
</p>
```

## Random Modal Component Code

```TSX
<div className='md:hidden overflow-y-hidden bg-slate-500 bg-transparent backdrop-blur-lg fixed top-0 z-50 h-[100%] w-[100%]'>
    <div className='absolute top-5 right-5 text-slate-50 '>
      <button className='text-2xl border-2 border-slate-50 rounded-full p-2' onClick={() =>{
        document.body.style.overflow = 'unset'}}>
        <MdClose/>
      </button>
    </div>
    <div className='absolute top-0 bg-blend-luminosity bg-black  bg-opacity-90  w-[70%]  h-[100vh] p-2 md:p-5 text-white'>
      Yeap   
    </div>
</div>
```

## Getting Started

The `layout` entrypoint for the nextjs components is the main entry point of our application and all the components are wrapped within it as its `children`. As a result, any code that is written will be displayed on every route page that you get to create; like a `</ Header>` and a `</ Navbar>`. This means that the component accepts a children prop.

In NextJs we have the built in pages that handle the different layouts. The can include: </br>

> - layout.tsx ( *js, *jsx)
> - page.tsx ( *js, *jsx)
> - error.tsx ( *js, *jsx)
> - not-found.tsx ( *js, *jsx)
> - loading.tsx ( *js, *jsx)

Anytime you write this, next framework will recognize this page according to what it is defined for.

## Highlight: The spread operator

The spread operator `(...)` in JavaScript is used to "spread" the contents of an iterable (like an array or an object) into another array or object. Let's break down how this works using your marvelMovies array:

```JS
const marvelMovies = [
    "Iron Man (2008)",
    "The Incredible Hulk (2008)",
    // ... (other movies)
];

// Using the spread operator to spread the data from each item in the marvelMovies array
<Postcard {...eachData} />;
```

Compare the above with this:

```JS
const marvelMovies = [
    {1: "Iron Man (2008)"},
    {2: "The Incredible Hulk (2008)"},
    // ... (other movies)
];

// Using the spread operator to spread the data from each item in the marvelMovies array
<Postcard {...eachData} />;
```

`eachData` represents one of the items from the `marvelMovies array`. `eachData` is a string, such as `"Iron Man (2008)` or `"The Incredible Hulk (2008)"` When you use the spread operator with `{...eachData}`, you're telling JavaScript to treat the string as an iterable and spread its characters into separate properties in an object. For this we get this for each of the string.

```json
{
  '0': 'B',
  '1': 'l',
  '2': 'a',
  '3': 'c',
  '4': 'k',
  '5': ' ',
  '6': 'W',
  '7': 'i',
  '8': 'd',
  '9': 'o',
  '10': 'w',
  '11': ' ',
  '12': '(',
  '13': '2',
  '14': '0',
  '15': '2',
  '16': '1',
  '17': ')'
}
```

For the latter, the `console.log(eachData)` will be as shown. Note that the last one is a string,

```json
{ '1': 'Iron Man (2008)' }
{ '2': 'The Incredible Hulk (2008)' }
{ '3': 'Iron Man 2 (2010)' }
{ '4': 'Thor (2011)' }
{ name: 'Spider-Man: Far From Home (2019)' }
Black Widow (2021)
```

If you `console.log({...eachData})` you get the following

```json
{ '1': 'Iron Man (2008)' }
{ '2': 'The Incredible Hulk (2008)' }
{ '3': 'Iron Man 2 (2010)' }
{ '4': 'Thor (2011)' }
{ name: 'Spider-Man: Far From Home (2019)' }
{
  '0': 'B',
  '1': 'l',
  '2': 'a',
  '3': 'c',
  '4': 'k',
  '5': ' ',
  '6': 'W',
  '7': 'i',
  '8': 'd',
  '9': 'o',
  '10': 'w',
  '11': ' ',
  '12': '(',
  '13': '2',
  '14': '0',
  '15': '2',
  '16': '1',
  '17': ')'
}
```

> ### Take away

When you use the spread operator with `{...eachData}`, you're telling JavaScript to treat the string as an iterable and spread its characters into separate properties in an object. Also we note that in `TS`, for any data we describe, it is given an `any` type, so we can describe the data as shown in this section of the code

```tsx
FETCHED_DATA.map((eachData: {id: number, title: string, body:string}) =>(
  <Postcard key= {eachData.id} {...eachData} />
))
```

>**NB** This type declaration ensures that when you use the `eachData` object in your code, it should adhere to this specific structure with the defined data types. For example, it prevents you from assigning a non-number value to the id property or a non-string value to the title property.

check out the code structure in [Learning Typescript](https://github.com/joe-jngigi/next_learn_dev/blob/next/app/typescript/page.tsx)

## Mouse event

You note that when you are handling the button and you want to perform an event, it will need to have a mouse event paramater passed in to do the `e.preventDefault`. If you hover on the `onClick` event used it the button, it will show the data type required for the button.

```TS
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
  e.preventDefault()
  console.log('deleted succesfully');
}
```

In a form submission context, `e.preventDefault()` can be used to prevent the default action of submitting the form, allowing you to perform custom actions like client-side validation or data manipulation before sending the data to the server.

## States With TS

When using `useState` in react, you can pass in an object into as state to receive values, like shown

```TS
const [User, setUser] = useState(null)
setUser({
  name: username,
  sessionId: Math.random()
})
```

In Typescript, you will note that name has a Lint.</br>

***Error***</br>
Argument of type `{ name: string; sessionId: number; }` is not assignable to parameter of type `SetStateAction<null>`. Object literal may only specify known properties, and `name` does not exist in type `(prevState: null) => null`.

> Linting, is the process of analyzing your code to find potential issues, coding style violations, and other problematic patterns. You can identify this using **ESLint**, which is a popular open-source linting tool for JavaScript and TypeScript.

In simple terms, you are giving name and sessionId, but you specified that it can be null. To prevent the error, we will use generics
> Generics in TypeScript are a powerful feature that allow you to write functions, classes, and types that can work with a variety of data types while maintaining type safety. They allow you to maintain type safety while still dealing with flexible types.

```TS
export type userType = {
    sessionId: number,
    name: string
}

const [User, setUser] = useState<userType | null>(null)
setUser({
  name: username,
  sessionId: Math.random()
})
```

### Use case of generics

```TS
import React, { useState } from 'react';

// Define a generic ListProps
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
};

// Generic List component
function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Example usage
type Person = {
  name: string;
  age: number;
};

function App() {
  const persons: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    // ...
  ];

  return (
    <div>
      <h1>Person List</h1>
      <List items={persons} renderItem={(person) => <div>{person.name} - {person.age}</div>} />
    </div>
  );
}

export default App;

```

In the above piece of code, you note that `ListProps` is a type defined and it has generics. In the prop, `items` receives this array `persons` and then `renderItem` receives a function as a JSX element

```TS
const persons: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
    // ...
];

renderItem={(person) => <div>{person.name} - {person.age}</div>}
```

> ### Take away #2

If you omit `(null)` and just write `useState<userType | null>()`, TypeScript will still understand that the initial state value is null, as useState automatically infers the initial state value based on the type you provide in the generic parameter. However, including `(null)` can improve code readability and make the intent more obvious.

In a nutshell, generics allow you to define placeholders for types that will be specified when the code is used. This helps you write more flexible and reusable code that doesn't sacrifice type checking.

```TS
function identity<T>(value: T): T {
  return value;
}

const stringValue: string = identity("Hello, TypeScript!");
const numberValue: number = identity(42);
```

Check out the code at[State with NextJS](https://github.com/joe-jngigi/next_learn_dev/blob/next/app/typescript/react_states/input.tsx)

## Context API

The Context API is a feature in React, a JavaScript library for building user interfaces, that provides a way to manage and share state across components without having to pass props manually through every level of the component tree.

To create context, you want to start by importing `createContext`

> ### Forms in HTML

**Big Question**</br>
Does a form capture the data from the inputs automatically?
>> Absolutely Yes, a form captures data from the input fields automatically when it's submitted. However, in the provided code, there are a few modifications needed to correctly capture and handle the form data. Remember in this code, I am using typescript, so I will need to be able to handle data types for the data entered by the user

So basically this is how the form is supposed to be created

```TSX
<form onSubmit={handleSubmit} action="AddProduct">
  <input required type="text" name="product_name" id="product_name" placeholder="Product Name"/>
  <input required type="text" name="product_price" id="product_price" placeholder="Product Price"/>
  <input required type="text" name="product_description" id="product_description" placeholder="Product Description"/>
  <input required type="text" name="product_size" id="product_size" placeholder="Product Size"/>
  <input required type="text" name="product_color" id="product_color" placeholder="Product Color"/>

  <button>Add Product</button>
</form>
```

Take note of the `type` and the `name` of the input. The `type` will describe the data that will be entered in the `input`, and then the `name`, will be resposible for the `key` for the data to be collected from the inputs. In order to collect the data, you will need to define a function to handle the form submission and capture the data from the input fields. You can note that on the `<form onSubmit={handleSubmit}>{....}</form>` we have defined a function callled `handleSubmit`.

This is the code for responsible for capturing the data from the input fields

```TS
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();

  const formData = new FormData(e.currentTarget)
  console.log(formData.get('product_name'));
  const productData: productsProps = {
    product_name: '',
    product_price: '',
    product_description: '',
    product_size: '',
    product_color: ''
  }
    formData.forEach((value, key) =>{
      if (typeof value === 'string') {
        productData[key as keyof productsProps] = value;
    } else if (value instanceof File) {
        // Handle the File object, if needed
    }
    })
    console.log(productData);
  }
```

So we have `const formData = new FormData(e.currentTarget)`

The `FormData` object is a built-in JavaScript object that is used to capture form data and send it as part of an HTTP request, typically in the context of AJAX requests or form submissions.

So `new FormData(e.currentTarget)` creates a new instance of the FormData object and initializes it with the data from the form element `(e.currentTarget)`. This property of the event object refers to the DOM element that the event handler is currently attached to. In this case, it refers to the form element `<form>` that is being submitted.

I could basically use this piece of code to get individual data of an input `console.log(formData.get('product_name'));`

By passing the form element to `FormData`, you're essentially capturing all the input values, including text inputs, file inputs, checkboxes, and other form elements, as well as their associated names and values. This data is then stored in the formData object.

> ### Creating Context

A context is a mechanism that allows components to share data without the need to pass props explicitly through every level of the component tree. It provides a way to manage and share state or other values across different components, even if they are not directly related in the component hierarchy. In simple terms it can be used to share data accross the application. Using context, you can create a context provider component that wraps a portion of your component tree. This provider makes the specified data or functions available to any component.

> How can one create a context?
We start by first creating a context like shown below. and since I am using typescript, I will define a data structure initially like shown. Ypu note that we first import create context like shown bellow,

```TS
import { createContext } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const initialAuthStatus: AuthContextType = {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
}


export const AppContext = createContext<AuthContextType>(initialAuthStatus);
```

What is `initialAuthStatus`?</br>
It is called a **default value**, and is required to pe passed in so that when you have forgotten to provide context, that is it is used when there is no provider. That means that everything falls back to default value. Let me break down what is happening here.

`createContext` is a built in react function used to provide context. `AuthContextType` is used in as the generics and it is used to define a the default data type of the context. `initialAuthStatus`  This can be anything, and it used to define a **default value** as shown. I will using a simpler example to see how we can use the context. Suppose we want to change the theme of our application to be maybe `dark mode` or `light mode`. You notice that when we pass in the value `light`, it will have a lint *Argument of type 'string' is not assignable to parameter of type 'ThemeTypes'.*

`export const ThemeContext = createContext<ThemeTypes>('light')`

Since `ThemeTypes` is describing a datatype, same case we will create an variable, with the same structure, that is why we pass it in as an object. An example is shown on how the data type works.

```TS
// An example is shown on how the data type works.
const ThemedType: ThemeTypes = {
    theme_value: 'light'
}
```

```TS
import { createContext } from 'react';

type ThemeTypes ={
  theme_value: 'light' | `dark`
}
// const ThemeContext = createContext('light') => for JS

export const ThemeContext = createContext<ThemeTypes>({
  theme_value: 'light'
})
```

Now we can import the exported `ThemeContext` to be available to our components. This happens to the `main/parent` component that carries all the other components. On importing, the ThemeContext will have three properties; provider, consumer and displayname. `Consumer` is for components that consume those contexts; those that get the value of the provided context. `Provider` Provides the value to the components it wraps around. Provider takes all properties a component can take. like `value`, `key` and `children`. Children are passed in implicitly

```TSX
import React from 'react'
import Link from 'next/link'
import { ThemeContext } from './context/ThemeContext'

 const [themeValue, setThemeValue] = useState<'light' | 'dark' >(defaultThemeValue.themeValue) )

const ProductsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-590'>
      <ThemeContext.Provider value = {{themeValue}}>
        // So all the children here have access to the state of theme value
      </ThemeContext.Provider>
    </div>
  )
}
```

So far, we realize that the state mutation is happening in the layout file (This is basically the component holding the children components). We would want to have context change in maybe a specific child component. What do I mean, If I have a `</newProduct>` component and want to mutate a state inside that, I will have to wrap it in `<ThemeContext.Provider>`.

So what we do is that we can define a custom component in the context provider file

```TS
import { createContext, FC } from "react";
import { ThemeTypes } from "@/app/typescript/types/types";

export const defaultThemeValue: ThemeTypes = {
    themeValue: 'light'
}

export const ThemeContext = createContext<ThemeTypes>(defaultThemeValue)


export const ThemeContextProvider:FC<ThemeTypes> = () => {

  return  <ThemeContext></ThemeContext>
  
}
```

`TProducts`: An array of productsProps type. It's intended to store an array of products, each represented by a productsProps object. So this means that TProducts will have the following structure.

```JSON
Const TProducts = [
  {
    "product_id": 1,
    "product_name": "Smartphone X",
    "product_price": 799,
    "product_description": "High-end mobile device",
    "product_size": "5.8 inches",
    "product_color": "Black"
  },
  {
    "product_id": 2,
    "product_name": "Laptop Pro",
    "product_price": 1299,
    "product_description": "Powerful laptop for professionals",
    "product_size": "13.3 inches",
    "product_color": "Silver"
  },]
```

`TAddProduct`: A function that takes a single argument of type productsProps and returns void. This function is intended to add a new product to the array stored in `TProducts`.

> ### Take away 3

**Can I safely say a type/interface is used to describe a data structure of what is intended?**</br>
Yes, that's a very accurate description of the purpose of types and interfaces in programming, particularly in languages like TypeScript. Both types and interfaces are used to define the structure and shape of data. They help ensure that data adheres to a specific structure and type.

In TypeScript, using the syntax `'light' | 'dark'` as the type of a property indicates that the property can only take one of those two specific string values. This enforces type safety and helps prevent unintended values from being assigned to the property.

## Pagination in React

In this code, I am making a pagination, and as provided in the code, we will have different elements we use

`const lastIndex = CurrentPage * recordsPerPage`, on this piece of code, it is going to indicate, the last number for of the current count of data. Simply that means that if we have the first page with 25 records, so last index will hold `number 25` and if we have the second records page, it will have `lastIndex => 2 * 25 = 50`

`const firstIndex = lastIndex - recordsPerPage` on this it means that the value for the firstIndex is the first number on a new page. So this is; I have 25 records per page, so the new number will be `firstIndex => 50 - 25 = 25`

## Function components in TS

The use of FC after MyFunctionalComponent is a type annotation in TypeScript. It explicitly specifies that MyFunctionalComponent is a functional component and gives it the type FC, which is typically imported from the React library. FC stands for `Functional Component` and it's a predefined type in TypeScript that helps you define the prop types for functional components. It ensures typesafety.

```TSX
import React, { FC } from 'react';

interface MyComponentProps {
  name: string;
  description: string;
}

const MyFunctionalComponent: FC<MyComponentProps> = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>{props.description}</p>
    </div>
  );
};
```

In this updated code, MyComponentProps is an interface that defines the prop types for MyFunctionalComponent, and `FC<MyComponentProps>` specifies that this functional component expects props conforming to those types. This adds a layer of type safety and helps communicate the expected props to anyone working with the component.

```TSX
const App = () => {
  // This will cause a TypeScript error because 'extraProp' is not in MyComponentProps
  return (
    <MyFunctionalComponent name="John" description="A description" extraProp="Extra" />
  );
```

When you attempt to pass an additional prop `extraProp` to the component, TypeScript will raise a type error because extraProp is not part of the expected prop types defined in `MyComponentProps`.

```TSX
import React from 'react';

interface MyComponentProps {
  name: string;
  description: string;
}

const MyFunctionalComponent = (props: MyComponentProps) => {
  // TypeScript knows that `props` has the type `MyComponentProps`
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>{props.description}</p>
    </div>
  );
};

```

Both approaches achieve the same result: they specify that props should conform to the MyComponentProps interface, and TypeScript enforces this type checking. You can choose the approach that you find more readable and maintainable for your codebase. Some developers prefer the FC type because it's a bit shorter and often used in React projects, while others prefer the explicit annotation for clarity.

## Authenitcation Adding

In this section, I a learning more on Authentication uisng nextjs. For this I will be applying a custom authentication with custom credentials. I have not used any of the authentication provider, and this is because I have used the extensively in another project. This will be helping me sharpen some skills in that.

On this project, I will be using `nextAuth` It is a completely secured and flexible authentication library designed to sync with any OAuth service, with full support for passwordless signin. I will install `bcryptjs`, `next-auth` and `mongoose`; `bcryptjs` will be used in the encryption of the passwords and then `mongoose` will be used for the database, `mongodb`

In the next phase I will be creating the API routes to help me make data transfer to the database.

## Creating APIs

We create APIs in the API folder, which is in the app folder. This only applies to NextJS. In the context of APIs (Application Programming Interfaces), POST and DELETE are HTTP methods used to perform different operations on resources.

We start by receiving the data from the request, which is returned as a promise. I mean how does this work?

This below is the code that is user to send the data to the database. So, we destructure each section

```TS
export const POST = async (req: Request) => {
    try {
        const user_data = await req.json();
        const { user_password, user_email, user_name } = user_data;

        // Your logic for handling the user data goes here
    } catch (error) {
        // Handle errors
    }
};

```

- The function is marked as `async`, indicating that it will perform **`asynchronous operations`** .
- The function takes a single parameter `req`, which is assumed to be an `Express.js` Request object.
- This line is using await to asynchronously wait for the JSON body of the incoming `HTTP request (req)` to be parsed. `req.json()` is a method provided by Express.js to parse the JSON body of a request.

### Take away 4

This is how we create APIS in JS. Note we have to install exrpess

```TS

const express = require('express');
const app = express();
const port = 3000; // You can use any available port

// Define a route for the API
app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello, this is your API!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

```

**What are asynchronous operations?** </br>

Asynchronous operations in programming refer to tasks that don't necessarily execute in a sequential or synchronous order. Instead of waiting for each operation to complete before moving on to the next one, asynchronous programming allows a program to continue executing other tasks while waiting for certain operations to finish. This is particularly useful for tasks that might take some time to complete, such as reading from a file, making a network request, or querying a database.

## Connecting to Database

I am using `Mongodb Atlas`. we use this npm package. Remember this isa no SQL database

```bash
npm isntall mongoose
```

After that, we create a function to call on the mongodb. Remember to make the configurations in `Mongodb Atlas`

```TS
import mongoose from 'mongoose'

export const connectToMongoDB = async () =>{

    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log('Connect to MongoDB'); 
    } catch (error) {
        console.log("Error Making a connection to MongoDB", error);
        
    }
    
}
```

Next step is usually to make a schema for this. For that we will put the schemas in a folder called models

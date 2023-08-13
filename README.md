# NextJS Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

For the latter, the `console.log(eachData)` will be as show. Note that the one one last one is a string,

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

### Take away

When you use the spread operator with `{...eachData}`, you're telling JavaScript to treat the string as an iterable and spread its characters into separate properties in an object. Also we note that in `TS`, for any data we describe, it is given an `any` type, so we can describe the data as shown in this section of the code

```tsx
FETCHED_DATA.map((eachData: {id: number, title: string, body:string}) =>(
  <Postcard key= {eachData.id} {...eachData} />
))
```

>**NB** This type declaration ensures that when you use the `eachData` object in your code, it should adhere to this specific structure with the defined data types. For example, it prevents you from assigning a non-number value to the id property or a non-string value to the title property.

check out the code structure in [Learning Typescript](https://github.com/joe-jngigi/next_learn_dev/blob/next/app/typescript/page.tsx)

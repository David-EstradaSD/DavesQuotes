# _Dave's Quotes_ (SPA with React Routing)

### Overview
"_Dave's Quotes_" is a simple app I created that displays "Famous Quotes" or quotes from the public's creation. I built this app implementing "_single page application_" with React Routing, thus allowing different URL paths without having to leave the browser and send more Http requests. I utilize [Google Firebase](https://firebase.google.com/)'s realtime database to send and fetch quotes and quote comments data, as well as for the site hosting.


### Technologies
* React, JavaScript
* ReactRouter libraries 
* _Suspense, Switch, Prompt, Redirect, BrowserRouter, Route, NavLink and Link_ components
* _useRouteMatch, useHistory, useLocation, useParams_ custom hooks
* _path, exact, and to_ built-in props
* query parameters (_?_) with React Router
* URLSearchParams (_JS constructor func_)
* [Google Firebase](https://firebase.google.com/) (_Hosting & Realtime Database_)
* Lazy Loading ( _code optimization_)

### How to Run
This app is currently deployed and WAS hosted by Google Firebase. NOTE: The realtime database has expired and thus the data cannot be persisted. I haven't found the need to reconnect a database at this time. 

### Lessons Learned
This app taught me about setting up a project with multi-page domains / path URLs while still maintaining that React effect of "_Single Page Application_". I learned about so many new custom hooks, components, and associated built-in props. What's more, I learned how to implement Lazy Loading to ensure website optimization! This project was built with the assistance of a Udemy course that taught the _React framework_ ( 48+ hours ).

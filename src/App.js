import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetails from './components/pages/QuoteDetails';
import NewQuote from './components/pages/NewQuote';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes'>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetails />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

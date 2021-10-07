import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetails from './components/pages/QuoteDetails';
import NewQuote from './components/pages/NewQuote';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId' exact>
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

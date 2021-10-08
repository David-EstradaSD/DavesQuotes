import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "David Estrada",
    text: "Adaptability is the key to success",
  },
  {
    id: "q2",
    author: "Buddha",
    text: "Success is not the key to happiness, happiness is the key to success",
  },
  { id: "q3", author: "Master Yoda", text: "Do or do not. There is not try" },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  // recall that 'params' refers to the URL path "variable" name, thus here we're checking to see which quote.id === the URL quoteId

  if (!quote) {
    return <h3>No quote found!</h3>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
      {/* <Route path='/quotes/:quoteId/comments'></Route> // this is another way */}
    </Fragment>
  );
};

export default QuoteDetails;

// TODO: Extract quoteId and output it on the screen.

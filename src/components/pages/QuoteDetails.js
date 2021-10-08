import { Fragment, useEffect } from "react";
import { useParams, useRouteMatch, Route, Link } from "react-router-dom";
import Comments from "../comments/Comments";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from '../UI/LoadingSpinner';

const QuoteDetails = () => {
  const match = useRouteMatch();
  console.log(match); // we can see in DevTools that ReactRouter constructs the path props and URL props strings for us! So we don't have to manually write it out in our JSX
  const params = useParams();

  const { quoteId } = params; // use object destructuring to extract ONLY the quoteId from params so that we only add quoteId as a parameter in useEffect BELOW instead of params.quoteId (our params object) which may result in re-rendering the page for other existing params properties 

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {/* match.path is a placeholder j */}
        <Comments />
      </Route>
      {/* <Route path='/quotes/:quoteId/comments'></Route> // manual writing of the URL path string */}
    </Fragment>
  );
};

export default QuoteDetails;

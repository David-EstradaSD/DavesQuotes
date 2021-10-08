import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../comments/Comments";

const QuoteDetails = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <Fragment>
      <h1>Quote Detais</h1>
      <p> {params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`} >
        <Comments />
      </Route>
      {/* <Route path='/quotes/:quoteId/comments'></Route> // this is another way */} 
    </Fragment>
  );
};

export default QuoteDetails;

// TODO: Extract quoteId and output it on the screen.

import { Fragment } from "react";
import { useParams } from "react-router";

const QuoteDetails = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <Fragment>
      <h1>Quote Detais</h1>
      <p> {params.quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetails;

// TODO: Extract quoteId and output it on the screen.

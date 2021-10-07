import { useParams } from "react-router";

const QuoteDetails = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Quote Detais</h1>
      <p> {params.quoteId}</p>
    </section>
  );
};

export default QuoteDetails;

// TODO: Extract quoteId and output it on the screen.

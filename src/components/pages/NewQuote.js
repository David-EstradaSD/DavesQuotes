import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory(); // gives us our Browser History

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);

    history.push("/quotes");
    // push() -- adds a new page on the stack of pages (allows user to go back to previous page)
    // replace() -- like a 'redirect' where we change the page
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;

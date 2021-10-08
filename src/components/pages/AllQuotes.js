import { useEffect } from "react";
import QuoteList from "../quotes/QuoteList";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from '../quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "David Estrada",
//     text: "Adaptability is the key to success",
//   },
//   {
//     id: "q2",
//     author: "Buddha",
//     text: "Success is not the key to happiness, happiness is the key to success",
//   },
//   { id: "q3", author: "Master Yoda", text: "Do or do not. There is not try" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;

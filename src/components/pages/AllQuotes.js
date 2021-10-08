import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'David Estrada', text: "Adaptability is the key to success" },
  { id: 'q2', author: 'Buddha', text: "Success is not the key to happiness, happiness is the key to success" },
  { id: 'q3', author: 'Master Yoda', text: "Do or do not. There is not try" },
];


const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};

export default AllQuotes;

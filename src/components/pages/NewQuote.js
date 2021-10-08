import QuoteForm from '../quotes/QuoteForm';

const NewQuote = () => {

    const addQuoteHandler = quoteData => {
        console.log(quoteData); // will send to DB later
    };

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    );
};

export default NewQuote;
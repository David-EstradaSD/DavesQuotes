import { useHistory } from 'react-router-dom';

import QuoteForm from '../quotes/QuoteForm';

const NewQuote = () => {

    const history = useHistory(); // gives us our Browser History

    const addQuoteHandler = quoteData => {
        console.log(quoteData); // will send to DB later

        history.push('/quotes'); 
        // push() -- adds a new page on the stack of pages (allows user to go back to previous page)
        // replace() -- like a 'redirect' where we change the page 
    };

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    );
};

export default NewQuote;
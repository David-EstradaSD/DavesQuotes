import { Link } from "react-router-dom";

const AllQuotes = () => {
  return (
    <section>
      <h1>All Quotes</h1>
      <ul>
        <li>
          <Link to="/quotes/q1">
            "Adaptability is the key to success" - David Estrada
          </Link>
        </li>
        <li>
          <Link to="/quotes/q2">
            "Success is not the key to happiness, happiness is the key to success" - Buddha
          </Link>
        </li>
        <li>
          <Link to="/quotes/q3">
            "Do or do not. There is no try" - Master Yoda 
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default AllQuotes;

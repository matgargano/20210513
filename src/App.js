import "bootstrap/dist/css/bootstrap.min.css";
import Books from './components/Books';

function App() {
  return (
    <div className="container">
      <Books />
    </div>
  );
}

/**
 * 
 * <Books /> => when mounting, list the books as buttons/links
 * <Book id="#" /> => when this mounts, grab the book data and output it
 * 
 */


export default App;

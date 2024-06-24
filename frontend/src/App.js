import './App.css';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';

function App() {
  return (
    <div className="App">
      <h1>Welcome to react node express Graphql Project.</h1>
      <CreateBlog />
      <BlogList />
    </div>
  );
}

export default App;

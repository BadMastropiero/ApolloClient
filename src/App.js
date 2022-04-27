import './App.css';
import PostComponent from './components/postComponent';
import PostForm from './components/postForm';

function App() {
  return (
    <div className="App">
      <h2>Create a New Post</h2>
      <PostForm />
      <h2>Post List</h2>
      <PostComponent />
    </div>
  );
}

export default App;

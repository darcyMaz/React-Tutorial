import './App.css';

function App() {
  
  const title = "Welcome to the new blog folks!";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content"> 
        <h1> {title} </h1>
        <p> Liked {likes} times! </p>

        <p> {"What's up guys!"} </p>
        <p> {Math.random() * 10} </p>

        <a href={link}> Go to Google! </a>
      </div>
    </div>
  );
}

export default App;

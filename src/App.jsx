import './App.css';

function App() {
  return (
    <div className="App">
      {/* { <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>} */}
        <section className="card-container">
          <header>
            <span initials="JS"></span>
            <h2>Joon Smith</h2>
          </header>

          <main>
            <ul>
              <li><span>Birthday</span> Jan 1, 1990</li>
              <li><span>Address</span> 123 Fulton St.</li>
              <li><span>Phone</span> 555-555-5555</li>
            </ul>
          </main>
        </section>
      {/* </header> */}
    </div>
  );
}

export default App;

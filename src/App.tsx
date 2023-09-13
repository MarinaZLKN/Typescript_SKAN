import React from "react";
import './styles/App.css'
import Header from "./components/Header/Header";
function App() {

    return (
        <div className="app">
            <header>
                <Header/>
            </header>
            <main>
                <h1>I am main </h1>

            </main>
            <footer>
                i am footer
            </footer>

        </div>
      );
    }

export default App;

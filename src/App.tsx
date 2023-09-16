import React from "react";
import './styles/App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import AuthPage from "./components/AuthPage/AuthPage";
import {Route, Routes} from "react-router-dom";
function App(){

    return (
        <div className="app">
            <header>
                <Header/>
            </header>
            <main>
                <Routes>
                    <Route path="/" component={<MainPage/>} />
                    <Route path="/auth" component={<AuthPage />} />

                </Routes>
                {/*<MainPage/>*/}
                {/*<AuthPage />*/}

            </main>
            <footer>
                <Footer/>
            </footer>

        </div>
      );
    }

export default App;

import Header from "./components/Header";
import "./assets/css/App.css";
import Main from "./components/Main";
import RefContextProvider from "./components/RefContext";

const App = () => {
  return (
    <div>
      <RefContextProvider>
        <Header />
        <Main />
        <footer>
          <div className='attribution'>
            Challenge by{" "}
            <a
              href='https://www.frontendmentor.io?ref=challenge'
              target='_blank'
            >
              Frontend Mentor
            </a>
            . Coded by <a href='http://github.com/iamprincetj'>Justin Nwanze</a>
            .
          </div>
        </footer>
      </RefContextProvider>
    </div>
  );
};

export default App;

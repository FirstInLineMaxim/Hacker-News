import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';

function App() {
  return (
    <>
      <div className='container'>    
      <div className='col-2'></div>
        <div className='col-8'>
          {/* HEADER */}
          <Header />
          {/* MAIN */}
          <Main />
          {/* FOOTER */}
          <div>FOOTER</div></div>
        <div className='col-2'></div></div>
    </>
  );
}

export default App;

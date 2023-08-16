import './App.css';
import NavBar from "./components/Navbar";
import Name_Section from './components/Name_Section';
import Intro_Section_Top from './components/Intro_Section_Top';
import Intro_Section_Timeline from './components/Intro_Section_Timeline';

function App(){

  return(

    <>
      <NavBar></NavBar>
      <Name_Section></Name_Section>
      <Intro_Section_Top></Intro_Section_Top>
      <Intro_Section_Timeline></Intro_Section_Timeline>
    </>

  );


}

export default App;

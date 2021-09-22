import {Home}from"./components/Home";
import {Nav} from"./components/Nav";
import { Personalinfo } from "./components/Home/Personalinfo";
import { Professionalinfo } from "./components/Home/professionalinfo";

const  App=()=>{
  return (
    <div>
            <Nav/>
            <Home/>
            <Personalinfo/>
            <Professionalinfo/>

    </div>
  );
}

export default App;

import {RecoilRoot} from "recoil";
import Login from "./Components/login";
import UserData from "./Components/UserData";
import Task from "./Components/Task";


const App = ()=>{


    return(
        <RecoilRoot>
            <Task/>
            <UserData/>
            <Login/>
        </RecoilRoot>
    )
}

export default App;
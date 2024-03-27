import { RecoilRoot } from "recoil";
import Login from "./Components/login";
import UserData from "./Components/UserData";


const App = ()=>{


    return(
        <RecoilRoot>
            <UserData/>
            <Login/>
        </RecoilRoot>
    )
}

export default App;



export const UserStateEffect=()=>({setSelf,onSet})=>{

    const savedValues = localStorage.getItem("taskData");

    if (savedValues != null){
        setSelf(JSON.parse(savedValues))
    }
    onSet(newValue=>{
        localStorage.setItem("taskData",JSON.stringify(newValue))
    })
}



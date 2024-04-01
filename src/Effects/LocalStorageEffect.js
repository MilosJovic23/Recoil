

export const LocalStorageEffect=(key)=>({setSelf,onSet})=>{

    const savedValues = localStorage.getItem(key);

    if (savedValues != null){
        setSelf(JSON.parse(savedValues))
    }
    onSet(newValue=>{
        localStorage.setItem(key,JSON.stringify(newValue))
    })
}



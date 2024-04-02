import {atom} from "recoil";
import {LocalStorageEffect} from "../Effects/LocalStorageEffect";


export const UserState = atom({
    key:"userState",
    default:{},
    effects_UNSTABLE:[
        LocalStorageEffect("userData")
    ]
})
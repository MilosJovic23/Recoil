import {atom} from "recoil";
import {LocalStorageEffect} from "../Effects/LocalStorageEffect";


export const TasksState=atom({
    key:"tasksState",
    default:[],
    effects_UNSTABLE:[
        LocalStorageEffect("userTasks")
    ]
})
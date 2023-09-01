import { Outlet } from "react-router-dom";
import { MyProps } from "../pages/lessons/props/MyProps";
import { H1 } from "../pages/lessons/elements/H1";
import { Lessons } from "../pages/lessons/Lessons.page";

export let myLessonsList={
    path:'/lessons',
    element:<> <Outlet/></>,
    children:[
        {
            path:'props',
            element:<MyProps/>
        },
        {
            path:'ele',
            element:<H1/>
        },{
            path:'lesssons',
            element:<Lessons/>
        }
    ]
}
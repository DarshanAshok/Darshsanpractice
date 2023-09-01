import { useRoutes } from "react-router-dom";
import { myLessonsList } from "./lessons.routes";

export default function MyRoutes(){
    return useRoutes([myLessonsList])
}
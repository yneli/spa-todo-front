import { Layout } from "../components/Layout/Layout";
import { Header } from "../components/Header/Header";
import { Login } from "../components/Login/Login";
import { Registration } from "../components/Registration/Registration";
import { Route, Routes } from "react-router-dom";
import { Projects } from "../components/Projects/Projects";
import { Todo } from "../components/Todo/Todo";

export const Test = () => {
    return <>
    <Layout header={<Header/>}>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/:id" element={<Todo/>}/>
            <Route path="/registration" element={<Registration/>}/>
        </Routes>
    </Layout>
    </>;
};
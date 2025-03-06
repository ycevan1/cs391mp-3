import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    background-color: cornsilk;
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;

function Root() {
    return(
        <>
            <Container>
                <Nav />
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/education`} element={<Education />} />
                    <Route path={`/experience`} element={<Experience />} />
                    <Route path={`/achievements`} element={<Achievements />} />
                    <Route path={`/skills`} element={<Skills />} />
                    <Route path={`/projects`} element={<Projects />} />
                </Routes>
            </Container>
            <Footer />
        </>
    )
}

const router= createBrowserRouter(
    [{path: "*", Component: Root}, ]
);

export default function App() {
    return (
        <>
            <PageWrapper>
                <Header />
                <RouterProvider router={router}></RouterProvider>
            </PageWrapper>
        </>

    );
}
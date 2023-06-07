import Header from "components/Header/Header";
import React,{Suspense} from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "components/Loader/Loader";
import { Container, Main } from 'components/Layout/Layout.styled';

const Layout = () => {
    return (
        <Container>
            <Header />
            <Main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Main>
            
        </Container>
    )
};
export default Layout;
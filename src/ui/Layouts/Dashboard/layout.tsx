'use client';

import styled from "styled-components";
import { Suspense } from "react";
import SidebarDashboard from "../../Organisms/home/sidebar";
import Loading from "../../Atoms/loading";

interface LayoutProps {
    children: React.ReactNode;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
`;

const Content = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: #f5f5f5;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container>
            <SidebarDashboard />
            <Content>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </Content>
        </Container>
    );
};

export default Layout;

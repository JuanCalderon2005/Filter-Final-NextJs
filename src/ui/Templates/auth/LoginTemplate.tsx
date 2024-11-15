'use client'
import styled from "styled-components";
import LoginForm from "../../Organisms/auth/LoginForm";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100;
    height: 100vh;
`;


const ContainerLogin = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const CardContainer = styled.div`
    width: 100%;
    max-width: 28rem; 
    padding: 1.5rem; 
    background-color: white;
    border-radius: 0.5rem; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
`;

export default function LoginTemplate() {
    
    return (
        <PageContainer>
            <ContainerLogin>
                <CardContainer>
                    <LoginForm />
                </CardContainer>
            </ContainerLogin>
        </PageContainer>
    );
};

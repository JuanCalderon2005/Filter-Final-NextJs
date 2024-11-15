'use client'
import styled from "styled-components"
import InpustFilter from "../../Molecules/InputFilter";
import ButtonsAddDownload from "../../Molecules/ButtonDownl";

const HeaderHomePageComponent = styled.header`
    width: 100%;
    height: 20vh;
    padding: 15px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export default function HeaderMainPage() {

    return (
        <HeaderHomePageComponent>
            <InpustFilter/>
            <ButtonsAddDownload/>
        </HeaderHomePageComponent>
    )
}
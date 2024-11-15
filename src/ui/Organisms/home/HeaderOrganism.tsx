'use client'
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #F5F5F5;
  width: 83vw;
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const TitleSection = styled.h2`
  color: #2F2B3D;
  font-size: 24px;
  font-weight: 700;
`;

const TitleWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export default function HeaderDashboard() {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <TitleSection>Vehículos</TitleSection>
      </TitleWrapper>
    </HeaderContainer>
  );
}

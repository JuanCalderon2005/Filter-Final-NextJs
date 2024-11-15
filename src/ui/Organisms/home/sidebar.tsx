'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { signOut } from "next-auth/react";
import Button from "../../Atoms/button";

const Sidebar = styled.nav`
  left: 0;
  width: 17vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NamePage = styled.h1`
  color: #141414;
  font-size: 25px;
  padding: 20px;
  margin-bottom: 30px;
`;

const SidebarItem = styled.li`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const StyledLinkWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 17px;
  width: 100%;
  height: 45px;
  color: ${(props) => (props.$isActive ? "#313131" : "#313131")};
  background-color: ${(props) => (props.$isActive ? "#d7d7d7" : "transparent")};

  &:hover {
    background-color: #a2a2a2;
    color: #fff;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    display: block;
  }
`;

const ButtonLogout = styled(Button)`
  display: flex;
  justify-content: start;
  color: #313131;
  font-size: 20px;
  width: 100%;
  height: 45px;
  border-radius: 0;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: #d7d7d7;
    color: #fff;
  }
`;

export default function SidebarDashboard() {
  const pathname = usePathname();
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Sidebar>
      <SidebarList>
        <NamePage>VolunteerConnect</NamePage>
        <SidebarItem>
          <StyledLinkWrapper $isActive={pathname === "/dashboard"}>
            <Icon icon="mdi:car" width="20" height="20" />
            <Link href="/dashboard/services" prefetch={false}>Vehiculos</Link>
          </StyledLinkWrapper>
        </SidebarItem>
        <SidebarItem>
          <ButtonLogout
            label="Cerrar Sesión"
            icon='MaterialSymbolsLogout'
            onClick={handleLogout}
          />
        </SidebarItem>
      </SidebarList>
    </Sidebar>
  );
}

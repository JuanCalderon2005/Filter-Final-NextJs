'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { signOut } from "next-auth/react";
import { Icon } from '@iconify/react';
import Button from "../../Atoms/button";

const SidebarContainer = styled.nav`
  width: 20vw;
  height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const PageTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #2F2B3D;
`;

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Divider = styled.hr`
  width: 60%;
  color: #9E9E9E54;
  margin: 10px 0;
`;

const Username = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #313131;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuItem = styled.li`
  width: 100%;
  margin: 15px 0;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  background-color: #7692FF;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 17px;
  width: 220px;
  font-weight: 600;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? "#7692FF" : "#313131")};
  background-color: ${(props) => (props.isActive ? "#FFFFFF" : "transparent")};

  &:hover {
    background-color: #f8f8f8;
  }

  a {
    text-decoration: none;
    font-size: 15px;
    display: block;
    padding: 10px;

    &:hover {
      font-size: 16px;
    }
  }
`;

const LogoutButton = styled(Button)`
  width: 100%;
  height: 45px;
  color: #313131;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  border-radius: 0;

  &:hover {
    font-size: 16px;
  }
`;

export default function SidebarDashboard() {
  const pathname = usePathname();

  const logoutHandler = async () => {
    await signOut();
  };

  return (
    <SidebarContainer>
      <Header>
        <PageTitle>
          <Icon icon="fluent:vehicle-car-parking-16-filled" width="50" height="50" color="#2F2B3D" />
          Transport Solutions
        </PageTitle>
      </Header>

      <Divider />

      <ProfileSection>
        <Icon icon="ix:user-profile-filled" width="50" height="50" color="#7692FF" />
        <Username>Juan Calderon</Username>
      </ProfileSection>

      <MenuList>
        <MenuItem>
          <LinkWrapper isActive={pathname === "/dashboard"}>
            <IconContainer>
              <Icon icon="fluent:vehicle-car-32-filled" width="35" height="35" color="#fff" />
            </IconContainer>
            <Link href="/dashboard/services" prefetch={false}>
              Vehiculos
            </Link>
          </LinkWrapper>
        </MenuItem>
        <MenuItem>
          <LogoutButton
            label="Cerrar sesión"
            icon={<Icon icon="bx:log-in" width="35" height="35" color="#2F2B3D" />}
            onClick={logoutHandler}
          />
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  );
}

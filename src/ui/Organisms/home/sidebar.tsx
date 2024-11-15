'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { signOut, useSession } from "next-auth/react";
import Button from "../../Atoms/button";
import { CustomSession } from "@/src/app/api/auth/[...nextauth]/route";

const Sidebar = styled.nav`
  position: fixed;
  left: 0;
  width: 17vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  background-color: #f0f0f0;
`;

const UserName = styled.h2`
  font-size: 20px;
  color: #141414;
  margin: 0;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  width: 100%;
`;

const SidebarItem = styled.li`
  margin: 15px 0;
`;

const StyledLinkWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  color: ${(props) => (props.$isActive ? "#313131" : "#313131")};
  background-color: ${(props) => (props.$isActive ? "#d7d7d7" : "transparent")};
  cursor: pointer;

  &:hover {
    background-color: #a2a2a2;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    color: inherit;
    flex-grow: 1;
  }

  svg {
    margin-right: 10px;
  }
`;

const ButtonLogout = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  background-color: transparent;
  color: #313131;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d7d7d7;
    color: #ffffff;
  }
`;

export default function SidebarDashboard() {
  const { data: session } = useSession();
  const sessionUser = session as CustomSession;
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Sidebar>
      <ProfileContainer>
        <ProfileImage
          src={sessionUser?.user?.image || "/default-profile.png"}
          alt="Foto de perfil"
        />
        <UserName>{sessionUser?.user?.name || "Usuario"}</UserName>
      </ProfileContainer>
      <SidebarList>
        <SidebarItem>
          <StyledLinkWrapper $isActive={pathname === "/dashboard/services"}>
            <Icon icon="mdi:car" width="20" height="20" />
            <Link href="/dashboard/services" prefetch={false}>Vehículos</Link>
          </StyledLinkWrapper>
        </SidebarItem>
        <SidebarItem>
          <ButtonLogout
            label="Cerrar Sesión"
            icon="MaterialSymbolsLogout"
            onClick={handleLogout}
          />
        </SidebarItem>
      </SidebarList>
    </Sidebar>
  );
}

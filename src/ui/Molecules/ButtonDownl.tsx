'use client'
import styled from "styled-components";
import { Icon } from '@iconify/react';
import Button from "../Atoms/button";
import { useState } from "react";
import Modal from "../Atoms/modal";
import RegisterForm from "../Organisms/Forms/registerCarForm";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
`;

const AddCarButton = styled(Button)`
  width: 214px;
  height: 40px;
  border-radius: 10px;
  font-weight: 600;
  background-color: #7692FF;
  border: none;
  font-size: 16px;

  &:hover {
    font-size: 17px;
  }
`;

const DownloadReportButton = styled(Button)`
  width: 214px;
  height: 40px;
  border-radius: 10px;
  font-weight: 600;
  background-color: #217346;
  border: none;
  font-size: 16px;

  &:hover {
    font-size: 17px;
  }
`;


export default function ButtonsAddDownload() {

  const [ModalOpenRegister, setModalOpenRegister] = useState(false);

  const toggleModalRegister = () => {
    setModalOpenRegister(!ModalOpenRegister);
  }

  const handleAdd = () => {
    toggleModalRegister();
  }

  return (
    <ButtonsContainer>
      <AddCarButton
        label="Agregar Vehículo"
        icon={<Icon icon="lets-icons:add-duotone" width="30" height="30" color="#FFF" onClick={handleAdd} />}
      />
      <DownloadReportButton
        label="Descargar Reporte"
        icon={<Icon icon="uiw:file-excel" width="20" height="20" color="#FFF" />}
      />
      <Modal
        isOpen={ModalOpenRegister}
        onClose={toggleModalRegister}
        title="Agregar Vehículo"
      >
        <RegisterForm onClose={toggleModalRegister} />
      </Modal>

    </ButtonsContainer>
  );
}

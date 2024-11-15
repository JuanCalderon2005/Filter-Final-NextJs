'use client';
import { ICarsResponse } from "@/src/app/core/application/dto/cars/response.dto";
import styled from "styled-components";
import VehicleList from "../../Organisms/home/vehicles";
import PageHeader from "../../Organisms/main/header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../../Atoms/modal";
import EditForm from "../../Organisms/Forms/EditForm";

interface Props {
    data: ICarsResponse;
}

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #F5F5F5;
`;

const Content = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
`;

const MainPage: React.FC<Props> = ({ data }) => {

    const [ModalOpenEdit, setModalOpenEdit] = useState(false);
    const [SelectIdEdit, setSelectIdEdit] = useState<number>(1);

    const router = useRouter();

    const toggleModalEdit = () => {
        setModalOpenEdit(!ModalOpenEdit);
    }

    const handleEdit = (Id: number) => {
        setSelectIdEdit(Id);
        toggleModalEdit();
    };

    const handleDelete = async (Id: number) => {
        try {
            const response = await fetch(`/api/vehicules/delete/${Id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log("Response DELETE:", response);

            alert("Proyecto eliminado exitosamente");
            router.refresh();
            return await response.json();

        } catch (error) {
            console.error("Error en el DELETE:", error);
            throw error;
        }
    };

    const handleView = (id: number) => {
        // Implement view functionality here
    };

    return (
        <Wrapper>
            <PageHeader />
            <Content>
                <VehicleList data={data} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
            </Content>
           <Modal isOpen={ModalOpenEdit} onClose={toggleModalEdit} title="Editar servicio">
                <EditForm onClose={toggleModalEdit} Id={SelectIdEdit} />
            </Modal> 
        </Wrapper>
    );
};

export default MainPage;

'use client';

import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCar } from "react-icons/fa";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import MainComponent from "../../Organisms/MainComponent";
import Modal from "../../Molecules/Modal";
import EditForm from "../../Molecules/EditForm";
import SearchComponent from "../../Atoms/SearchComponent";
import Loading from "../../Atoms/Loading";

interface IVehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  photo: string | null;
}

interface IProps {
  totalVehicles: number;
  activeVehicles: number;
  owners: number;
  data: IVehicle[];
}

const PageContainer = styled.div`
  margin: auto;
  width: 95%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderVehicles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyVehicles = styled.div`
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
`;

const H2 = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 20px;
`;

const VehicleCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const VehicleImage = styled.img`
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
`;

const VehicleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const VehicleTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const VehicleSubtitle = styled.p`
  margin: 2px 0;
  font-size: 14px;
`;

export default function DashboardTemplate({ data, totalVehicles, activeVehicles, owners }: IProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [ModalOpenEdit, setModalOpenEdit] = useState(false);
  const [SelectIdEdit, setSelectIdEdit] = useState<number | null>(null);

  const toggleModalEdit = () => {
    setModalOpenEdit(!ModalOpenEdit);
  };

  const handleEdit = (Id: number) => {
    setSelectIdEdit(Id);
    toggleModalEdit();
  };

  const handleDelete = async (Id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/vehicles/delete/${Id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el vehículo");
      }

      alert("Vehículo eliminado exitosamente");
      router.refresh();
      return await response.json();
    } catch (error) {
      console.error("Error en el DELETE:", error);
      alert("No se pudo eliminar el vehículo. Por favor, inténtalo nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <HeaderVehicles>
        <CartInfo title="Total Vehículos" icon={<FaCar size={20} />} body={totalVehicles} />
        <CartInfo title="Vehículos Activos" icon={<MdOutlineDirectionsCar size={20} />} body={activeVehicles} />
        <CartInfo title="Propietarios" icon={<SlPeople size={20} />} body={owners} />
        <CartInfo title="Próximo Mantenimiento" icon={<CiCalendar size={20} />} body="Próxima Fecha" />
      </HeaderVehicles>
      <BodyVehicles>
        <H2>Lista de Vehículos</H2>
        <Search>
          <SearchComponent />
        </Search>
        {data.length > 0 ? (
          data.map((vehicle) => (
            <VehicleCard key={vehicle.id}>
              <VehicleImage
                src={vehicle.photo || "/placeholder-image.png"} // Imagen por defecto si no hay foto
                alt={`${vehicle.make} ${vehicle.model}`}
              />
              <VehicleInfo>
                <VehicleTitle>{`${vehicle.make} ${vehicle.model}`}</VehicleTitle>
                <VehicleSubtitle>Año: {vehicle.year}</VehicleSubtitle>
                <VehicleSubtitle>Placa: {vehicle.licensePlate}</VehicleSubtitle>
              </VehicleInfo>
            </VehicleCard>
          ))
        ) : (
          <p>No hay vehículos disponibles.</p>
        )}
      </BodyVehicles>
      {ModalOpenEdit && (
        <Modal isOpen={ModalOpenEdit} onClose={toggleModalEdit} title="Editar Vehículo">
          {SelectIdEdit !== null && <EditForm onClose={toggleModalEdit} Id={SelectIdEdit} />}
        </Modal>
      )}
    </PageContainer>
  );
}

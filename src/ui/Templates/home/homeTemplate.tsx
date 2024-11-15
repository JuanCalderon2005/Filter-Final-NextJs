'use client'
import { ICarsResponse } from "@/src/app/core/application/dto/cars/response.dto";
import styled from "styled-components"
import MainComponent from "../../Organisms/home/vehicles";

interface IProps {
    data: ICarsResponse;
}

const PageContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: #F5F5F5;
`;

const BodyMainPage = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
`;
export default function MainPage({data}: IProps) {
    const handleEdit = (id: number) => {
        // Implement edit functionality here
    }
    
    const handleDelete = (id: number) => {
        // Implement delete functionality here
    }
    
    const handleView = (id: number) => {
        // Implement view functionality here
    }
    
    return (
        <PageContainer>
            <BodyMainPage>
                <MainComponent data={data} onEdit={handleEdit} onDelete={handleDelete} onView={handleView}/>
            </BodyMainPage>
        </PageContainer>
    )
}
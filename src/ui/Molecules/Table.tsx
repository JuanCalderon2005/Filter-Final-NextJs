import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Button from '../Atoms/button';
import { Vehicle } from '@/src/app/core/application/dto/cars/response.dto';

interface ITableProps {
  tbody: Vehicle[];
  onEdit?: (rowId: number) => void;
  onView?: (rowId: number) => void;
  onDelete?: (rowId: number) => void;
}

const StyledTable = styled.table`
  width: 97%;
  max-width: 100%;
  border-radius: 10px;
  border-collapse: collapse;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  th, td {
    border-bottom: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 14px;
  }

  th {
    background-color: transparent;
    color: #818181;
  }

  td {
    color: #4d4d4d;
    height: 80px;
  }

  td.Colum-Buttons {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  td.Colum-photo {
    width: 150px;
    font-weight: bold;
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 60px;
    }
  }

  td.Colum-model {
    width: 200px;
  }

  .status {
    padding: 2px 6px;
    border-radius: 10px;
    color: #3e3e3e87;
  }

  .status.activo {
    background-color: #009d0041;
  }

  .status.inactivo {
    background-color: red;
  }
`;

const ButtonEdit = styled(Button)`
  background-color: transparent;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #dededebe;
  }
`;

const ButtonHistory = styled(Button)`
  background-color: transparent;
  width: 20px;
  height: 20px;
`;

const ButtonDelete = styled(Button)`
  background-color: transparent;
  width: 20px;
  height: 20px;
`;

export default function TableComponent({ tbody, onEdit, onView, onDelete }: ITableProps) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año</th>
          <th>Placa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tbody.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className='Colum-photo'>
              {row.photo ? (
                <Image
                  src={row.photo}
                  alt={`Vehicle ${rowIndex}`}
                  width={150}
                  height={50}
                  objectFit="cover"
                  priority
                />
              ) : (
                <span>No image</span>
              )}
            </td>
            <td className='Colum-model'>{row.make}</td>
            <td className='Colum-model'>{row.model}</td>
            <td className='Colum-model'>{row.year}</td>
            <td className="Colum-Status">{row.licensePlate}</td>
            <td className="Colum-Buttons">
              <ButtonEdit onClick={() => onEdit && onEdit(row.id)} icon={<Icon icon="mage:edit" width="20" height="20" color="#9E9E9E54" />} />
              <ButtonHistory onClick={() => onView && onView(row.id)} icon={<Icon icon="material-symbols:history" width="20" height="20" color="#9E9E9E54" />} />
              <ButtonDelete onClick={() => onDelete && onDelete(row.id)} icon={<Icon icon="fluent:delete-20-regular" width="20" height="20" color="#9E9E9E54" />} />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

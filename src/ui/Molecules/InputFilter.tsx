import styled from "styled-components";
import FormField from "./FormField";
import { Icon } from '@iconify/react';
import { useForm } from "react-hook-form";
import Button from "../Atoms/button";

const InputsFilter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Inpust = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

const Buttons = styled.div`
  margin-left: 50px;
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonFilter = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  width: 124px;
  height: 40px;
  background-color: #7692FF;
  color: #ffff;
  border-radius: 10px;
  border: none;

  margin-left: 5px;

  &:hover {
    font-size: 17px;
  }
`;

const ButtonClean = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  width: 124px;
  height: 40px;
  background-color: transparent;
  color: #2F2B3D;
  border-radius: 10px;
  border: solid 1px #2F2B3D;

  &:hover {
    font-size: 17px;
  }
`;

export default function InpustFilter() {
  const { control } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <InputsFilter>
      <Inpust>
        <FormField
          control={control}
          type="text"
          name="placa"
          label="Placa"
          placeholder=""
          width="200px"
          height="40px"
        />
        <FormField
          control={control}
          type="text"
          name="year"
          label="Año"
          placeholder=""
        />
        <FormField
          control={control}
          type="text"
          name="marca"
          label="Marca"
          placeholder=""
        />
        <FormField
          control={control}
          type="text"
          name="modelo"
          label="Modelo"
          placeholder=""
        />
      </Inpust>
      <Buttons>
        <ButtonFilter label="Filtrar" icon={<Icon icon="ant-design:filter-outlined" width="25" height="25" color="#ffff" />} />
        <ButtonClean label="Limpiar" icon={<Icon icon="lsicon:clear-filled" width="25" height="25" color="#2F2B3D" />} />
      </Buttons>
    </InputsFilter>
  );
}

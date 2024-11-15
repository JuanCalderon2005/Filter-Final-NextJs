"use client"

import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import styled from "styled-components";
import Input from "../Atoms/Input";

interface IFormFieldProps<T extends FieldValues> {
  label: string;
  type: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  id?: string;
  placeholder?: string;
  width?: string;
  height?: string;
}

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const FieldLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #202020;
`;

export const FormField = <T extends FieldValues>({
  label,
  type,
  name,
  control,
  error,
  id,
  placeholder,
  width,
  height,
}: IFormFieldProps<T>) => {
  return (
    <FieldContainer>
      <FieldLabel htmlFor={id || label.toLowerCase()}>{label}</FieldLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={id || label.toLowerCase()}
            type={type}
            error={error?.message}
            placeholder={placeholder || ""}
            width={width}
            height={height}
            {...field}
          />
        )}
      />
    </FieldContainer>
  );
};

export default FormField;

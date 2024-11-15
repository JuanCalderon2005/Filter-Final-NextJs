import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import FormField from "../../Molecules/FormField";
import Button from "../../Atoms/button";
import { CreateCarRequest } from "@/src/app/core/application/dto/cars/create/request.dto";

interface Iprops {
    onClose: () => void;
}

// Definir el esquema de validación con yup
const registerSchema = yup.object().shape({
    make: yup.string().required("La marca es obligatoria"),
    model: yup.string().required("El modelo es obligatorio"),
    year: yup.number().required("El año es obligatorio").min(1900, "El año debe ser mayor o igual a 1900"),
    licensePlate: yup.string().required("La placa es obligatoria").matches(/^[A-Za-z0-9]+$/, "La placa debe ser alfanumérica"),
    photo: yup.mixed<File>().notRequired(),
});

const FormContainer = styled.form`
    width: 100%;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #2a2a2a;
`;

const RegisterForm = ({ onClose }: Iprops) => {
    const router = useRouter();
    const {
        control,
        handleSubmit: onSubmit,
        formState: { errors },
    } = useForm<CreateCarRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver:yupResolver(registerSchema)
    });

    const handleRegister = async (data: CreateCarRequest) => {
        try {
            const forData = new FormData();
            forData.append("make", data.make);
            forData.append("model", data.model);
            forData.append("year", data.year.toString());
            forData.append("licensePlate", data.licensePlate);
            forData.append("photo", data.file || "");
            const response = await fetch("/api/vehicules/create", {
                method: "POST",
                body: forData,
            });

            if (!response.ok) {
                throw new Error("Error al registrar el vehículo");
            }

            alert('Vehículo registrado exitosamente');
            router.refresh();
            onClose();
            return await response.json();
        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };

    return (
        <FormContainer onSubmit={onSubmit(handleRegister)}>
            <Title>Registro de Vehículo</Title>

            <FormField<CreateCarRequest>
                control={control}
                type="text"
                name="make"
                label="Marca"
                error={errors.make}
                placeholder="Ingrese la marca del vehículo"
            />

            <FormField<CreateCarRequest>
                control={control}
                type="text"
                name="model"
                label="Modelo"
                error={errors.model}
                placeholder="Ingrese el modelo del vehículo"
            />

            <FormField<CreateCarRequest>
                control={control}
                type="number"
                name="year"
                label="Año"
                error={errors.year}
                placeholder="Ingrese el año del vehículo"
            />

            <FormField<CreateCarRequest>
                control={control}
                type="text"
                name="licensePlate"
                label="Placa"
                error={errors.licensePlate}
                placeholder="Ingrese la placa del vehículo"
            />

            <FormField<CreateCarRequest>
                control={control}
                type="file"
                name="file"
                label="Foto (URL)"
                error={errors.file}
                placeholder="Ingrese la URL de la foto del vehículo (opcional)"
            />

            <Button type="submit" label="Registrar Vehículo" />
        </FormContainer>
    );
};

export default RegisterForm;

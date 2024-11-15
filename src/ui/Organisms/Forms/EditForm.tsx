import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import FormField from "../../Molecules/FormField";
import { PutCarRequest } from "@/src/app/core/application/dto/cars/put/request.dto";
import Button from "../../Atoms/button";
import Loading from "../../Atoms/loading";

interface Iprops {
    onClose: () => void;
    Id: number;
}

const editVehicleSchema = yup.object().shape({
    make: yup.string().required("La marca es obligatoria"),
    model: yup.string().required("El modelo es obligatorio"),
    year: yup
        .number()
        .required("El año es obligatorio")
        .min(1900, "El año debe ser mayor o igual a 1900"),
    licensePlate: yup
        .string()
        .required("La placa es obligatoria")
        .matches(/^[A-Za-z0-9]+$/, "La placa debe ser alfanumérica"),
    photo: yup.string().url("La URL de la foto debe ser válida").nullable(),
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
    color: black;
`;

const EditForm = ({ onClose, Id }: Iprops) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const {
        control,
        handleSubmit: onSubmit,
        setValue,
        formState: { errors },
    } = useForm<PutCarRequest>({
        mode: "onChange",
        resolver: yupResolver(editVehicleSchema),
    });

    // Cargar datos del vehículo para editar
    useEffect(() => {
        const fetchVehicleData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/vehicules/get/${Id}`);
                if (!response.ok) {
                    throw new Error("Error al cargar los datos del vehículo");
                }
                const data = await response.json();
                const vehicle = data.data;

                // Configurar valores iniciales del formulario
                setValue("make", vehicle.make);
                setValue("model", vehicle.model);
                setValue("year", vehicle.year);
                setValue("licensePlate", vehicle.licensePlate);
                setValue("file", vehicle.file || "");
            } catch (error) {
                console.error("Error al cargar los datos del vehículo:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVehicleData();
    }, [Id, setValue]);

    const handleEdit = async (data: PutCarRequest) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/vehicules/put/${Id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Error al actualizar el vehículo");
            }

            alert("Vehículo actualizado exitosamente");
            router.refresh();
            onClose();
        } catch (error) {
            console.error("Error en la actualización del vehículo:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormContainer onSubmit={onSubmit(handleEdit)}>
            <Title>Editar Vehículo</Title>

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <FormField<PutCarRequest>
                        control={control}
                        type="text"
                        name="make"
                        label="Marca"
                        error={errors.make}
                        placeholder="Ingrese la marca del vehículo"
                    />

                    <FormField<PutCarRequest>
                        control={control}
                        type="text"
                        name="model"
                        label="Modelo"
                        error={errors.model}
                        placeholder="Ingrese el modelo del vehículo"
                    />

                    <FormField<PutCarRequest>
                        control={control}
                        type="number"
                        name="year"
                        label="Año"
                        error={errors.year}
                        placeholder="Ingrese el año del vehículo"
                    />

                    <FormField<PutCarRequest>
                        control={control}
                        type="text"
                        name="licensePlate"
                        label="Placa"
                        error={errors.licensePlate}
                        placeholder="Ingrese la placa del vehículo"
                    />

                    <FormField<PutCarRequest>
                        control={control}
                        type="text"
                        name="file"
                        label="Foto (URL)"
                        error={errors.file}
                        placeholder="Ingrese la URL de la foto del vehículo (opcional)"
                    />

                    <Button type="submit" label="Actualizar Vehículo" />
                </>
            )}
        </FormContainer>
    );
};

export default EditForm;

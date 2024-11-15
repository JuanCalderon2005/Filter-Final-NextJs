'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styled from "styled-components";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ILoginRequestDto } from "@/src/app/core/application/dto/auth/login-request.dto";
import Button from "../../Atoms/button";
import { ErrorResponse, FieldError } from "@/src/app/core/application/dto/common/error-response.dto";
import FormField from "../../Molecules/FormField";
import IconAtom from "../../Atoms/icons";

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email invalido')
        .required('Email Requerido'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('Contraseña Requerida'),
});


const FormContainer = styled.form`
    width: 100%;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    `;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #7692ff;
    `;

const InstructionText = styled.p`
    text-align: center;
    font-size: 13px;    
    margin-bottom: 1rem;
    color: #2f2b3d;
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DivButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PText = styled.p`
    font-size: 15px;
    color: #161616;
    margin-right: 3px;
`;

const ButtonLogin = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #7692ff;
    
`

const LoginForm = () => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<ILoginRequestDto>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = async (data: ILoginRequestDto) => {
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password
            })

            if (result?.error) {
                console.log("ocurio un error", JSON.parse(result.error));
                handleError(JSON.parse(result.error));
                return
            }

            router.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    const handleError = (error: unknown) => {
        const errorData = error as ErrorResponse
        if (errorData.errors && errorData) {
            if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
                errorData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof ILoginRequestDto, { message: error });
                });
            } else {
                if ("message" in errorData.errors[0]) {
                    setError("email", {
                        message: errorData.errors[0].message
                    })
                }
            }
        };
    };


    return (
        <FormContainer onSubmit={handleSubmit(handleLogin)}>
            <IconAtom icon="proicons:vehicle-car" size={48} color="#7692ff" />
            <Title>Transport Solutions S.A</Title>
            <InstructionText>Inicia sesion en tu cuenta y gestiona tu flota de vehiculos</InstructionText>
            <FormField<ILoginRequestDto>
                control={control}
                type="email"
                name="email"
                label="Correo Electrónico"
                error={errors.email}
                placeholder="Ingrese Correo Electrónico"
            />
            <FormField<ILoginRequestDto>
                control={control}
                type="password"
                name="password"
                label="Contraseña"
                error={errors.password}
                placeholder="Ingrese Contraseña"
            />
            <ButtonLogin
                icon="uil:padlock"
                type="submit"
                label="Iniciar Sesión"
                onClick={() => console.log('Iniciar Sesión')}
            />
            <Buttons>
                <DivButton>
                    <PText>¿Problemas para iniciar sesión?</PText>
                </DivButton>
            </Buttons>
        </FormContainer>
    );
};

export default LoginForm;

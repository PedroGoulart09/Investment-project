'use client'
import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Landmark } from "lucide-react";
import { Label } from "../ui/label";
import { useLogin } from "@/app/hooks/useLogin";
import { ErrorType, MyFormValues, handleSubmit } from "@/app/utils/functions";
import { AlertLogin } from "./alertLogin";
import { SignupSchemaLogin } from "@/app/utils/constants";


export default function Login() {
    const { push } = useRouter();
    const initialValues: MyFormValues = { email: "", password: "", name: "" };
    const [error, setError] = React.useState<ErrorType>(ErrorType.None);
    const {values} = useSearchParams();

    return (
        <div className="flex flex-wrap justify-center items-center px-4 sm:px-6 lg:px-8 h-screen">

            <Formik
                validationSchema={SignupSchemaLogin}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions, setError, useLogin, push,'kindsOfProfile');
                }}
            >
                {() => (
                    <Form className="flex justify-center flex-col items-center space-y-6 py-16 w-full sm:max-w-md">
                        <div className="flex justify-center text-center">
                            <Landmark size={40} />
                            <h1 className="text-3xl sm:text-4xl">PG BANK</h1>
                        </div>

                        <h1 className="font-bold text-2xl sm:text-4xl text-center">
                            Login
                        </h1>
                        {
                            values().next().value &&
                            <h1 className="text-xl sm:text-2xl text-center colorText">
                                {`Bem-vindo ${values().next().value}`}
                            </h1>
                        }


                        {error === ErrorType.EmailExists && (
                            <AlertLogin
                                text={
                                    <>
                                        <p>E-mail ou senha incorretos.</p>
                                        <p>Por favor, tente outro e-mail ou senha.</p>
                                    </>
                                }

                            />

                        )}
                        {error === ErrorType.InvalidEmail && (
                            <AlertLogin
                                text={
                                    <>
                                        <p>Esse é um formato de e-mail inválido.</p>
                                        <p>Por favor, tente outro e-mail como username@gmail.com.</p>
                                    </>
                                }

                            />

                        )}
                        <Label htmlFor="name" className="w-full text-start">
                            E-mail
                        </Label>
                        <Field
                            type="email"
                            className="w-full h-12 border-2 rounded pl-3"
                            id="email"
                            name="email"
                            placeholder="user@gmail.com"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                        <Label htmlFor="password" className="w-full text-start">
                            Senha
                        </Label>
                        <Field
                            type="password"
                            className="w-full h-12 border-2 rounded pl-3"
                            id="password"
                            name="password"
                            placeholder="senha"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                        <Button
                            type="submit"
                            className="bg-customBtn hover:bg-customBtn rounded text-white w-full h-12"
                        >
                            Entrar
                        </Button>
                        <div className="flex items-center gap-5 justify-center ">
                            <hr className="w-40 max-sm:w-32 max-sm:mt-10" />
                            <p className="max-sm:mt-10">ou</p>
                            <hr className="w-40 max-sm:w-32 max-sm:mt-10" />
                        </div>
                        <Button
                            type="button"
                            className="bg-customBtn hover:bg-customBtn rounded text-white w-full h-12"
                            onClick={() => push('/')}

                        >
                            Cadastre-se
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

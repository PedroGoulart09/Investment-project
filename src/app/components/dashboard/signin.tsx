'use client'
import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Landmark } from "lucide-react";
import { Label } from "../ui/label";
import { useSignin } from "@/app/hooks/useSignin";
import { ErrorType, MyFormValues, handleSubmit } from "@/app/utils/functions";
import { AlertLogin } from "./alertLogin";
import { SignupSchemaSignin } from "@/app/utils/constants";
import { Element } from "react-scroll";

export default function Signin() {
    const { push } = useRouter();
    const initialValues: MyFormValues = { email: "", password: "", name: "" };
    const [error, setError] = React.useState<ErrorType>(ErrorType.None);


    return (

        <div className="bg-slate-50 flex flex-wrap justify-center items-center px-4 sm:px-6 lg:px-8">
            <Element name="signin">
                <Formik
                    validationSchema={SignupSchemaSignin}
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        handleSubmit(values, actions, setError, useSignin, push,'login');
                    }}
                >
                    {() => (
                        <Form className="flex justify-center flex-col items-center space-y-6 py-16 w-full sm:max-w-md">
                            <div className="flex justify-center text-center">
                                <Landmark size={40} />
                                <h1 className="text-3xl sm:text-4xl">PG BANK</h1>
                            </div>

                            <h1 className="font-bold text-2xl sm:text-4xl text-center">
                                Cadastre-se para investir nos ativos mais populares do mundo
                            </h1>
                            <h3 className="text-xl sm:text-2xl text-center colorText">
                                Crie uma conta para começar a usar a plataforma.
                            </h3>
                            {error === ErrorType.EmailExists && (
                                <AlertLogin
                                    text={
                                        <>
                                            <p>Esse e-mail já existe em nossa base de dados.</p>
                                            <p>Por favor, tente outro e-mail para se cadastrar.</p>
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
                                Nome
                            </Label>
                            <Field
                                type="name"
                                className="w-full h-12 border-2 rounded"
                                id="name"
                                name="name"
                                placeholder="Nome"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500" />
                            <Label htmlFor="name" className="w-full text-start">
                                E-mail
                            </Label>
                            <Field
                                type="email"
                                className="w-full h-12 border-2 rounded"
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
                                className="w-full h-12 border-2 rounded"
                                id="password"
                                name="password"
                                placeholder="senha"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500" />

                            <Button
                                type="submit"
                                className="bg-customBtn hover:bg-customBtn rounded text-white w-full h-12"
                            >

                                Cadastre-se
                            </Button>

                            <div className="flex items-center gap-5 justify-center ">
                                <hr className="h-10 w-40 max-sm:w-32 max-sm:mt-10" />
                                <p className="mb-10 max-sm:mt-10">ou</p>
                                <hr className="h-10 w-40 max-sm:w-32 max-sm:mt-10" />
                            </div>
                            <Button
                                type="button"
                                className="bg-customBtn hover:bg-customBtn rounded text-white w-full h-12"
                                onClick={() => push('/login')}

                            >
                                Entrar
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Element>
        </div>
    );
}

import { scroller } from "react-scroll";

export const validateEmail = (email: any) => {
    var emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com|icloud\.com)$/i;
    return emailRegex.test(String(email).toLowerCase());
};

export interface MyFormValues {
    email: string;
    password: string;
    name: string;
}

export enum ErrorType {
    EmailExists,
    InvalidEmail,
    None
}

export function parseJwt(token: any) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

export const handleSubmit = async (values: MyFormValues, actions: any, setError: any, register: any, push: any, path: string) => {
    try {
        if (!validateEmail(values.email) || values.password.length === 0) {
            setError(ErrorType.InvalidEmail);
            return;
        }
        await register(values.email, values.password);
        push(`/${path}`)
        setError(ErrorType.None);

    } catch (error) {
        setError(ErrorType.EmailExists);
    } finally {
        actions.setSubmitting(false);
    }
}

export const scroll = () => {
    scroller.scrollTo('signin', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}

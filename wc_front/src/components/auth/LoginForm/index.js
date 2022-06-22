import {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import api from "services/api"
import useAuth from "hooks/useAuth";


const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().min(8).required(),
}).required();


export default function LoginForm() {
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const { data: loginData } = await api.auth.token(data);
            console.log(loginData);
            auth.setToken(loginData.access);
            auth.setRefreshToken(loginData.refresh_token);
            auth.setUser(loginData.user);
        } catch (e) {
            if (e.response.status === 422) {
                Object.keys(e.response.data.errors).forEach((key) => {
                    setError(key, {
                        type: "manual",
                        message: e.response.data.errors[key],
                    });
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} />
            {errors.username && <span>This field is required</span>}
            <input {...register("password")} type={"password"} />
            {errors.password && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}

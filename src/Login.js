import pb from "lib/pocketbase"
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Auth() {

    const { register, handleSubmit } = useForm()
    const [isLoading, setLoading] = useState(false)

    const login = async (data) => {
        setLoading(true);
        try {
            const authData = await pb.collection("users")
                .authWithPassword(data.email, data.password);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    };

    return (<>
         {isLoading && <h1>Loading....</h1>}
        <h1>Logged In {pb.authStore.isValid.toString()}</h1>
        <form onSubmit={handleSubmit(login)}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                {...register("email")}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                {...register("password")}
            />
            <br />
            <button type="submit" disabled={isLoading}>{isLoading ? "Loading" : "Login"}</button>
        </form>
    </>);
}
export default Auth;
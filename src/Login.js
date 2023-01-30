import pb from "lib/pocketbase"
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Auth() {

    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [ userLogin, setLogin ] = useState(false);

    async function login(data) {
        setLoading(true);
        try {
            const authData = await pb.collection("users")
                .authWithPassword(data.email, data.password);
                setLogin(pb.authStore.isValid);
                setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    async function logout () {
        pb.authStore.clear();
        setLogin(pb.authStore.isValid)
    };
    
    // View Show User LOGIN
    if (userLogin) {
        return (
            <>
                <h1> Login Out: {pb.authStore.model.email}</h1>
                <button onClick={logout}>Logout</button>
            </>)
    }
    
    // View Show User LogOut
    return (<>
        {isLoading && <h1>Loading....</h1>}
        {!isLoading &&<h1>Pleae Log In</h1>}
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
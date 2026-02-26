import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm} from "react-hook-form"



function Signup() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    
    const signup = async (data) => {
        setError("");
    
        try {
            const userData = await authService.createAccount(data);
            if (!userData) throw new Error("Signup failed");
    
            const userInfo = await authService.getCurrentUser();
            if (!userInfo) throw new Error("Session created but failed to fetch user");
    
            dispatch(authLogin(userInfo));
            navigate("/");
    
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="flex items-center justify-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%"/>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Create a new account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Login
                    </Link>
                </p>
                {
                    error 
                    && 
                    <p className="text-red-600 mt-8 text-center">
                        {error}
                    </p>
                }


                <form onSubmit={handleSubmit(signup)}>
                    <div className="w-full">
                        <Input 
                        label="Full name: "
                        placeholder="Enter your fullname:"
                        type="text"
                        {...register("name", {
                            required: "Full name is required.",
                        
                            pattern: {
                              value: /^[A-Za-z\s]+$/,
                              message: "Only letters and spaces allowed",
                            },
                        
                            validate: {
                              hasTwoWords: (value) =>
                                value.trim().split(" ").length >= 2 ||
                                "Please enter first and last name",
                            },
                        })}
                        />
                        {
                            errors.name
                            && 
                            <p className="text-red-600 mt-8 text-center">
                                {errors.name.message}
                            </p>
                        }

                        <Input
                        label="Email: "
                        placeholder="Enter your email: "
                        type="email"
                        {...register("email", {
                            required:  "Email is required.",
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address."
                            }
                        })}
                        />

                        {
                            errors.email
                            && 
                            <p className="text-red-600 mt-8 text-center">
                                {errors.email.message}
                            </p>
                        }

                        <Input
                        label="Password: "
                        placeholder="Enter your password: "
                        type="password"
                        {...register("password", {
                            required: "Password is required.",
                            validate: {
                                minLength: (value) => value.length >=8 || "Password must be at least 8 characters.",
                                maxLength: (value) => value.length <=20 || "Password must be at most 20 characters."
                            }
                        })}
                        />

                        {
                            errors.password
                            && 
                            <p className="text-red-600 mt-8 text-center">
                                {errors.password.message}
                            </p>
                        }

                        <Button type="submit" className="w-full">Register</Button>
                    </div>
                </form>


            </div>
        </div>
    );
}

export default Signup;
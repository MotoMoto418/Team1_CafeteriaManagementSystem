"use client";

import React, { useState } from "react";
import Input from "../components/inputs/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_id: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center font-bold text-3xl">Login</h1>
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="user_id"
        label="Username"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        New around here?{" "}
        <Link href={"/register"} className="underline">
          Register
        </Link>
      </p>
    </>
  );
}

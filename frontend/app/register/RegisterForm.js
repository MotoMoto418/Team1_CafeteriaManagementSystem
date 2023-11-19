"use client";

import React, { useState } from "react";
import Input from "../components/inputs/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      f_name: "",
      l_name: "",
      ph_no: "",
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
      <h1 className="text-center font-bold text-3xl">Register</h1>
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="f_name"
        label="First Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="l_name"
        label="Last Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="ph_no"
        label="Phone No."
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
      <select {...register("category", { required: true })} id="type">
        <option value="customer">Customer</option>
        <option value="vendor">Vendor</option>
      </select>
      <Button
        label={isLoading ? "Loading" : "Register"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="underline">
          Login
        </Link>
      </p>
    </>
  );
}

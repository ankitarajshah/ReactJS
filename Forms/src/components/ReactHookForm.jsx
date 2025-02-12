import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const schema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (error) {
      setError("root", { message: "This email is already taken" });
    }
  };

  useEffect(() => {
    console.log("Is Submitting:", isSubmitting);
  }, [isSubmitting]);
  useEffect(() => {
    console.log("Form Errors:", errors);
  }, [errors    ]);

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: "Email is required",
            // validate: (value) => {
            // if (!value.includes("@")) {
            //     return "email is not valid";
            // }
            // return true;
            // },
          })}
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
        <input
          {...register("password", {
            // required: "Password is required",
            // minLength: {
            // value: 8,
            // message: "Password must have at least 8 characters",
            // },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && <p className="text-red-500">{errors.root?.message}</p>}
      </form>
    </>
  );
};

export default ReactHookForm;

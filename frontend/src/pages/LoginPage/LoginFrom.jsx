import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const LoginFrom = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.exists) {
        alert('Login successful!');
      } else {
        alert('User does not exist.');
      }
    } catch (error) {
      console.error('Error checking user:', error);
    }
  };

  return (
    <Card>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("mail", {
                required: "Email Address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              })}
              aria-invalid={errors.mail ? "true" : "false"}
              id="name"
              placeholder="enter your email"
            />
            {errors.mail && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.mail.message}
              </p>
            )}
            {errors.mail && errors.mail.type === "pattern" && (
              <p role="alert" className="text-red-500 text-sm">
                Invalid email format
              </p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="username"
              type="password"
              placeholder="enter your password"
              {...register("password", { required: "password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Login</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginFrom;

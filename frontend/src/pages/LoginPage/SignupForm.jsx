import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const SignupForm = () => {
    return (
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                Enter your username,email and password to signin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="name" placeholder="enter your username" />
                </div>
              <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="name" placeholder="enter your email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="username" type="password" placeholder="enter your password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Create Account</Button>
              </CardFooter>
            </Card>
    );
};

export default SignupForm;
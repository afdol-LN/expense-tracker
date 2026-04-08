"use client"

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { setSignUP } from "@/action/action";

export default function Signup() {
    const [password,setPassword] = useState("")
    
    const handlePassword = (newpassword) => {
        setPassword(newpassword)
        console.log(password)
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen" >
            <Card className="w-2/5   h-auto shadow-xl pt-0 pb-4">
                <CardHeader className={`w-full text-center bg-gray-100 p-5 shadow-gray-300 shadow-sm `}>
                    <CardTitle className={` text-lg font-semibold`}>Sign Up</CardTitle>
                </CardHeader>
                <CardAction className="flex flex-col w-[80%] mx-auto my-3 bg-red-500/0">
                    <FieldGroup className="bg-blue-500/0">
                        <div className="flex flex-row gap-x-5 justify-center items-center ">
                            <Field >
                                <FieldLabel>Fistname <span className="text-destructive">*</span></FieldLabel>
                                <Input placeholder="Enter your firstname" require ></Input>
                            </Field>
                            <Field >
                                <FieldLabel>Lastname <span className="text-destructive">*</span></FieldLabel>
                                <Input placeholder="Enter your lastname" require ></Input>
                            </Field>
                        </div>
                        <Field >
                            <FieldLabel>Email <span className="text-destructive">*</span></FieldLabel>
                            <Input type="email" placeholder="example@email.com" require ></Input>
                        </Field>
                        <Field >
                            <FieldLabel>Username <span className="text-destructive">*</span></FieldLabel>
                            <Input placeholder="Enter Username" require ></Input>
                        </Field>
                        <Field >
                            <FieldLabel>Password <span className="text-destructive">*</span></FieldLabel>
                            <Input placeholder="Enter password" type="password" require onChange={handlePassword}></Input>
                        </Field>
                        <Field >
                            <FieldLabel>Confirm password <span className="text-destructive">*</span></FieldLabel>
                            <Input placeholder="Enter password" type="password" require disabled={!password} ></Input>
                        </Field>
                    </FieldGroup>

                </CardAction>
                <CardFooter className=" flex flex-col w-[80%] mx-auto ">
                    <Button className="w-full rounded-lg text-lg " >Sign Up</Button>
                    <span className="text-primary">Already have an account <a href="#" className="text-blue-600 hover:underline ">sign in</a></span>
                </CardFooter>
            </Card>
        </div>
    )
}
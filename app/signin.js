import { CardHeader, Card, CardTitle, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function Signin(){
    return(
        <div className="flex justify-center items-center w-screen h-screen"> 
            <Card className={`w-1/3 h-1/2 pb-4 pt-0`}>
                <CardHeader className={`w-full text-center bg-gray-50 p-5`}>
                        <CardTitle className={` text-lg font-semibold`}>Sign In</CardTitle>
                </CardHeader>
                <CardAction className={`flex w-[80%] justify-center items-center m-auto`}>
                    <FieldGroup>
                        <Field> 
                            <FieldLabel>email<span className="text-destructive">*</span></FieldLabel>
                            <Input type="email" placeholder="email" require ></Input>
                        </Field>
                        <Field> 
                            <FieldLabel>Password<span className="text-destructive">*</span></FieldLabel>
                            <Input placeholder="enter your password" type="password" require></Input>
                        </Field>
                    </FieldGroup>
                </CardAction>
                <CardFooter className="flex flex-col justify-center tems-center w-[80%] mx-auto ">
                    <Button className="w-full rounded-lg">Sign In</Button>
                    <span className="text-primary">create acoount <a href="#" className="text-blue-600 hover:underline ">sign up</a></span>
                </CardFooter>
            </Card>
        </div>
    )
}
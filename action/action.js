import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
const supabase = createClient()

export const setSignUP = async() =>{
    const {data, error} = await supabase.auth.signUp({
        email:"",
        password:"",
    })
    if(error){
        console.log("error : ",error)
        return false;
    }
    if(data){
        console.log("data : ",data)
    }
    redirect()
}
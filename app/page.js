import Image from "next/image";
import { Button } from "@/components/ui/button"
import Signin from "./signin";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter} from "@/components/ui/card"
import Signup from "./signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabsTrigger, Tabs, TabsList } from "@/components/ui/tabs";


export default function Home() {
  const menu = [
    {
      name : "Home",
      link : "#"
    },
    { 
      name : "Item",
      link : "#"
    },
    {
      name : "History",
      link : "#"
    }
  ]
  return (
     <div className="flex w-screen h-screen">
          
          <nav className="flex flex-col text-xl w-1/6 bg-gray-700/0 h-full shadow-md items-center justify-between py-4" >
            <div className="w-full"> 
              Logo
            </div>
            <Tabs defaultValue={menu[0].name} orientation="vertical" className="w-4/5 mx-auto bg-amber-500/0">
                  <TabsList className="w-full bg-gray-0">
                    {
                      menu.map((item, index)=>(
                        <TabsTrigger  value={item.name} key={index} className={`hover:cursor-pointer ${index == 0 ? 'mt-0': 'mt-3'}`}>
                          {item.name}
                        </TabsTrigger>
                      ))
                    }
                  </TabsList>
            </Tabs>
             <Tabs>
              <TabsList>
                <TabsTrigger>
                Profile
                </TabsTrigger>
              </TabsList>
              
             </Tabs>
          </nav>
          <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                    home body
          </div>
     </div>
  );
}

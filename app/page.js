import { Button } from "@/components/ui/button";
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
    <>
      Helooooo
    </>
  );
}

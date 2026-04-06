"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import Signin from "./signin/page";
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card"
import Signup from "./signup/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabsTrigger, Tabs, TabsList } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress";
export default function Home() {
  const menu = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "Item",
      link: "#"
    },
    {
      name: "History",
      link: "#"
    }
  ]
  const chartData = [
    { month: "January", spend: 186, income: 80, year: 2025 },
    { month: "February", spend: 305, income: 200, year: 2025 },
    { month: "March", spend: 237, income: 120, year: 2025 },
    { month: "April", spend: 73, income: 190, year: 2025 },
    { month: "May", spend: 209, income: 130, year: 2025 },
    { month: "June", spend: 214, income: 140, year: 2025 },
  ]

  const chartConfig = {
    spend: {
      label: "Spend",
      color: "#2563eb",
    },
    income: {
      label: "Income",
      color: "#60a5fa",
    },
  }

  return (
    <div className="flex w-screen h-screen overflow-hidden">

      <nav className=" flex flex-col text-xl w-1/5 bg-gray-700/0 h-full shadow-md items-center justify-between 
      py-4 sticky left-0 top-0 shrink-0 " >
        <div className="w-full ">
          <div className="px-5">
            djnfjhdn
          </div>
          <Tabs defaultValue={menu[0].name} orientation="vertical" className="w-4/5 mx-auto bg-amber-500/0 mt-10">
            <TabsList className="w-full bg-gray-0">
              {
                menu.map((item, index) => (
                  <TabsTrigger value={item.name} key={index} className={`hover:cursor-pointer ${index == 0 ? 'mt-0' : 'mt-3'}`}>
                    {item.name}
                  </TabsTrigger>
                ))
              }
            </TabsList>
          </Tabs>

        </div>
        <Tabs>
          <TabsList>
            <TabsTrigger>
              Profile
            </TabsTrigger>
          </TabsList>

        </Tabs>
      </nav>
      <div className="w-full h-full bg-gray-200/0 flex flex-col overflow-scroll">
        <div className=" shrink-0 w-full h-1/12 items-center justify-end flex pr-5 bg-gray-200/0 border">
          <a href="#">pofile</a>
        </div>
        <div className="w-full h-full bg-amber-50/0 flex flex-col">
          <Label className="w-full h-1/6 px-10 align-center bg-blue-300/0 py-5">

            <p className="text-lg font-light"><span className="text-5xl font-extrabold"> Hello HI</span> <br /> this is desciptive</p>
          </Label>
          <div id="dashborad-total" className={`grid gap-x-4 grid-cols-3 mx-10 h-1/5`}>
            <Card className={`flex flex-row justify-between items-center px-10`}>
              <div className="flex flex-col">
                <CardDescription>card-1 </CardDescription>
                <CardTitle>Head-card-1</CardTitle>
              </div>

              <p>icon</p>
            </Card>
            <Card className={`flex flex-row justify-between items-center px-10`}>
              <div className="flex flex-col">
                <CardDescription>card-1 </CardDescription>
                <CardTitle>Head-card-1</CardTitle>
              </div>

              <p>icon</p>
            </Card>
            <Card className={`flex flex-row justify-between items-center px-10`}>
              <div className="flex flex-col">
                <CardDescription>card-1 </CardDescription>
                <CardTitle>Head-card-1</CardTitle>
              </div>

              <p>icon</p>
            </Card>

          </div>
          <div id="dashborad-main-body" className=" grid grid-cols-3 gap-x-4 px-10 mt-5 h-full w-full bg-amber-400/0">
            <div className=" bg-gray-300/0 h-full col-span-2">
              <Card className="p-5">  
                <CardTitle>
                  Activity
                </CardTitle>
                <ChartContainer config={chartConfig} >
                  <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="income" fill="var(--color-income)"></Bar>
                    <Bar dataKey="spend" fill="var(--color-spend)"></Bar>
                  </BarChart>
                </ChartContainer>
              </Card>
            </div>
            <div className=" bg-gray-300/0 h-full">
              <p className="font-semibold text-[20px]">Lastest budget</p>
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1>Icon</h1>
                    <div className="flex flex-col">
                          <h2>shopping</h2>
                          <p>1 item</p>
                    </div>
                  </div>
                  <h1 className="font-extrabold text-lg">2001$</h1>
                </CardHeader>
                <CardContent>
                  <div className="flex item-center justify-between" >
                    <p>180$ spend</p>
                    <p>5000$ remaining</p>
                  </div>
                  <Progress value={50} className={`text-sm`}></Progress>
                </CardContent>
              </Card> 
              
              <Card className="mt-4">
                <CardHeader className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1>Icon</h1>
                    <div className="flex flex-col">
                          <h2>shopping</h2>
                          <p>1 item</p>
                    </div>
                  </div>
                  <h1 className="font-extrabold text-lg">2001$</h1>
                </CardHeader>
                <CardContent>
                  <div className="flex item-center justify-between" >
                    <p>180$ spend</p>
                    <p>5000$ remaining</p>
                  </div>
                  <Progress value={50} className={`text-sm`}></Progress>
                </CardContent>
              </Card> 
             
             <Card className="mt-4">
                <CardHeader className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1>Icon</h1>
                    <div className="flex flex-col">
                          <h2>shopping</h2>
                          <p>1 item</p>
                    </div>
                  </div>
                  <h1 className="font-extrabold text-lg">2001$</h1>
                </CardHeader>
                <CardContent>
                  <div className="flex item-center justify-between" >
                    <p>180$ spend</p>
                    <p>5000$ remaining</p>
                  </div>
                  <Progress value={50} className={`text-sm`}></Progress>
                </CardContent>
              </Card> 

              <Card className="mt-4">
                <CardHeader className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1>Icon</h1>
                    <div className="flex flex-col">
                          <h2>shopping</h2>
                          <p>1 item</p>
                    </div>
                  </div>
                  <h1 className="font-extrabold text-lg">2001$</h1>
                </CardHeader>
                <CardContent>
                  <div className="flex item-center justify-between" >
                    <p>180$ spend</p>
                    <p>5000$ remaining</p>
                  </div>
                  <Progress value={50} className={`text-sm`}></Progress>
                </CardContent>
              </Card> 

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

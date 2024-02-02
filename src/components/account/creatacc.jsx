
import { TiKey } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { Button } from "@material-tailwind/react";

import {Await, Link, Navigate, useNavigate} from "react-router-dom";
import {
    Form,
    FormControl,
    FormField,
    FormItem, FormLabel,
    FormMessage,
} from "@/components/ui/form.jsx";
import { Input } from "@/components/ui/input.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Authuser from "@/api/Authuser";
import {date} from "zod";
import {useState} from "react";

const formSchema = z.object({
    username: z.string().min(2).max(100),

    email: z.string().email().min(2).max(50),
    password: z.string().min(8).max(100),
});
export default function Creatacc() {
    const navigate=useNavigate()
    const [passworderr,setPassworderr]=useState("")

    const { http } = Authuser();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username:"",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values) {
        await http.post("/register", values)
            .then(res=> {
                if (res.data.Status=== "grewart"){
                    navigate("/login")
                }
                else {
                    setPassworderr(res.data.Error)
                }
            })
            .then(err=>console.log(err))
        console.log(values)
    }

    return (
        <>
            <div className="flex font_home  ">
                <div className=" bg-login w-1/2 h-[100vh] bg-cover bg-no-repeat bg-center"></div>
                <div className="flex flex-col items-center mt-24 w-1/2 ">
                    <h1 className="text-4xl font-semibold my-5 ">
                        Welcome to
                        <span className="text-blue-500 relative hover:before:absolute hover:before:bottom-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-black ">
              <Link to="/">HOTELLO</Link>
            </span>
                    </h1>
                    <p className="text-xl text-gray-500/90 w-[80%] text-center my-5">
                        We make it easy for everyone to book a hotel room
                    </p>

                    <div>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="my-5 w-[500px] ml-20"
                            >
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel className="font-bold text-md ml-2">Usename</FormLabel>

                                            <FormControl>
                                                <div className="flex items-center relative">

                                                    <Input

                                                        placeholder=""
                                                        {...field}
                                                        className="p-5 py-7 px-[10%]  w-[80%] border-2 border-gray-500/20 rounded-lg"
                                                    />
                                                </div>
                                            </FormControl>

                                            <FormMessage className="text-red-800" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel className="font-bold text-md ml-2">Email</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center ">

                                                    <Input
                                                        placeholder=""
                                                        {...field}
                                                        className="p-5 py-7   px-[10%] w-[80%] border-2 border-gray-500/20 rounded-lg"
                                                    />
                                                </div>
                                            </FormControl>

                                            <FormMessage className="text-red-800" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel className="font-bold text-md ml-2">Password</FormLabel>

                                            <FormControl>
                                                <div className="flex items-center relative">

                                                    <Input
                                                        type={"password"}
                                                        placeholder=""
                                                        {...field}
                                                        className="p-5 py-7 px-[10%]  w-[80%] border-2 border-gray-500/20 rounded-lg"
                                                    />
                                                </div>
                                            </FormControl>

                                            <FormMessage className="text-red-800" >{passworderr}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <div className="mt-5 flex justify-end w-[80%]">
                  <span className=" capitalize text-gray-400/80">
                    <a href="#"></a>
                  </span>
                                </div>
                                <div className="flex justify-between w-[80%] mt-6">
                                    <Button
                                        className=" bg-gradient-to-l from-blue-300 to-blue-600 w-24"
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                    <Link to="/login">
                                    <Button className="text-blue-600 bg-slate-50 shadow-sm shadow-gray-300 p-5">
                                        i have account
                                    </Button>
                                    </Link>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

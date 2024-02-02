import { TiKey } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { Button } from "@material-tailwind/react";

import {Await, Link, Navigate, useNavigate} from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form.jsx";
import { Input } from "@/components/ui/input.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Authuser from "@/api/Authuser";
import axios from "axios";
import {useState} from "react";

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(100),
});
export default function Signin() {
  const [passworderr,setPassworderr]=useState("")
  const navigate= useNavigate();
  const { http } = Authuser();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    axios.defaults.withCredentials=true;
    await http.post("/login", values)
        .then((res) => {
     if (res.data.Status === "success"){
       navigate("/")
     }else {
       setPassworderr(res.data.Error)
     }
    })
    .then(err=>console.log(err))
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center ">
                          <span className=" absolute ml-3 text-2xl  text-gray-500/90">
                            <MdOutlineMail />
                          </span>
                          <Input
                            placeholder="email"
                            {...field}
                            className="p-5 py-7   px-[10%] w-[80%] border-2 border-gray-500/40 rounded-t-lg"
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
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center relative">
                          <span className="absolute ml-3 text-2xl -rotate-90 text-gray-500/90">
                            <TiKey />
                          </span>
                          <Input
                            type={"password"}
                            placeholder="password"
                            {...field}
                            className="p-5 py-7 px-[10%]  w-[80%] border-2 border-gray-500/40 border-t-0 rounded-b-lg"
                          />
                        </div>
                      </FormControl>

                      <FormMessage className="text-red-800" >{passworderr}</FormMessage>
                    </FormItem>
                  )}
                />
                <div className="mt-5 flex justify-end w-[80%]">
                  <span className=" capitalize text-gray-400/80">
                    <a href="#">forgot password?</a>
                  </span>
                </div>
                <div className="flex justify-between w-[80%] mt-6">
                  <Button
                    className=" bg-gradient-to-l from-blue-300 to-blue-600 w-24"
                    type="submit"
                  >
                    Login
                  </Button>
                 <Link to="/creataccount"> <Button className="text-blue-600 bg-slate-50 shadow-sm shadow-gray-300 p-5">
                    creat profile
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

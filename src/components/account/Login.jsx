
import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "@material-tailwind/react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input.jsx";
import {TiKey} from "react-icons/ti";
import {MdOutlineMail} from "react-icons/md";

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(100),


})
export default function Login() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
        password:"",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 w-[500px] ml-20">
              <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                      <FormItem>

                          <FormControl>
                              <div className="flex items-center ">
                <span className=" absolute ml-3 text-2xl  text-gray-500/90">
                  <MdOutlineMail/>
                </span>
                                  <Input placeholder="email" {...field}
                                         className="p-5   px-[10%] w-[80%] border-2 border-gray-500/40 rounded-t-lg"/>
                              </div>
                          </FormControl>

                          <FormMessage/>

                      </FormItem>
                  )}

              />
              <FormField
                  control={form.control}
                  name="password"
                  render={({field}) => (
                      <FormItem>

                          <FormControl>
                              <div className="flex items-center relative">
                <span className="absolute ml-3 text-2xl -rotate-90 text-gray-500/90">
                  <TiKey/>
                </span>
                                  <Input type={'password'} placeholder="password" {...field}
                                         className="p-5  px-[10%]  w-[80%] border-2 border-gray-500/40 border-t-0 rounded-b-lg"/>
                              </div>
                          </FormControl>

                          <FormMessage/>

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
                  <Button className="text-blue-600 bg-slate-50 shadow-sm shadow-gray-300 p-5">
                      creat profile
                  </Button>
              </div>
          </form>
      </Form>
    </>
  );
}

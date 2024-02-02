
import { Typography } from "@material-tailwind/react";
import Logo from "./logo.jsx";


export default function Fotter(){
    return(

        <footer className="w-full bg-white p-8">
            <div
                className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">

                <Logo />
            </div>
            <hr className="my-8 border-blue-gray-50"/>
            <Typography  className="text-center font-normal">
                &copy; 2023-2024 Hotello.ma
            </Typography>
            <hr className="my-2 border-blue-gray-50"/>
            <Typography  className="text-center text-opacity-20 font-[100px]">
                Dans certains hôtels, les annulations doivent obligatoirement être effectuées au moins 24 heures avant l’arrivée.
            </Typography>

        </footer>

    )
}
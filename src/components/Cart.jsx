
import Navbar from "./Navbar";
import imgcart from './img/icone-marketing-magasin-ligne_24877-13843.jpg'
import {
    Link
} from "react-router-dom";
export default function Cart(){
    return (
        <>
        <Navbar />
       <div className="flex items-center text-black justify-between font_home">
<div>

    <img className="po" src={imgcart}/>
</div>
           <div className="mr-24">
    <h1 className=" uppercase text-4xl mr-16 color_primary ">cart is empty</h1> 
               <Link to="/"> <button className="border-2 rounded-full w-40 mt-5 ml-6 py-2  uppercase font-bold color_bleu borde_color bg-bg">go to shoping</button></Link>
           </div>
       </div>
        </>
    )
}
import img from './img/emggetemail.png'
export default function Emailform(){

    return(

        <div className="font_home h-[50vh] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 w-[90%] mx-auto mt-9 rounded-2xl relative flex justify-around items-center md:justify-center">
<div>
    <p className="  text-2xl font-bold md:text-center capitalize max-w-[500px] ml-2 break-words ">subscribe for our mailing list to get latest updates and offers</p>
    <form className="relative mt-5 md:mx-auto md:flex md:justify-center">
        <input className="  ml-2 p-4 w-72 rounded-full shadow-sm shadow-gray-500 placeholder:font-normal placeholder:uppercase placeholder:text-sm font-bold" type="text" placeholder="entrer your email"/>
       <input className=" absolute  z-10 cursor-pointer sm:left-[70%] md:left-[70%] left-[40%] p-4 rounded-full bg-black text-white" type="submit" value="subscribe" onClick={e =>
       e.preventDefault()

       }/>
    </form>
</div>
            <div>
                <img className=" md:hidden  w-[250px] h-[49vh] absolute bottom-0 right-0" src={img}   />
            </div>

        </div>

    )

}
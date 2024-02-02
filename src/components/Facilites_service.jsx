const srvices = [ {
    title: 'wifi', img: require('./img/wifi.png'),
    id:3,
},
    {
        title: 'parking', img: require('./img/parking.png'),
        id:3,
    },
    {
        title: 'chihaga', img: require('./img/wifi.png'),
        id:3,
    },
    {
        title: 'chihaga', img: require('./img/wifi.png'),
        id:3,
    },


]


export default function Service(){


            return (
                <div className="my-10 mx-auto font_home md:w-full w-[80%] " >
                    <div>
                        <h1 className="font-bold text-2xl text-center capitalize my-5">facilities & service</h1>
                    </div>
                    <div className="grid justify-items-center justify-between  grid-cols-4">

                    {
                        srvices.map(function (srvice)  {
                            return(
                    <div className="my-5 items-center justify-center" key={srvice.id}>
                        <div
                            className="h-44 w-44 md:w-32 flex flex-col items-center justify-center md:border-0 md:shadow-none   border-2 border-gray-100 shadow-sm shadow-gray-500 rounded-2xl">
                            <img className="w-[50px] h-[50px] " src={srvice.img}/>

                            <h1 className="my-5 capitalize font-semibold ">{srvice.title}</h1>
                        </div>
                    </div>)
                        })
                    }
                    </div>


                </div>
            )


}
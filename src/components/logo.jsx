
import image1 from  "./img/logo.png"
import {Link} from "react-router-dom";
export default function Logo() {
    return <h1 className=" w-[230px] "><Link to="/"><img src={image1}/></Link></h1>;
}

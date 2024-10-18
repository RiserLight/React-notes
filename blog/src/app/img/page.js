import Image from "next/image";
import Profile from '../../../public/next.svg'
const ConditionalStyle=()=>{
  return (
    <div>
    <Image src={Profile}/>
    <Image src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
    width={400}
    height={600}
    />
    </div>
  );
}

export default ConditionalStyle;
import { Roboto } from "next/font/google";
const roboto=Roboto({
  weight:'100',
  subsets:['cyrillic'],
  display:'swap'
});

const Fonts=()=>{
  return (
    <div className={roboto.className}>Font next js </div>
  )
};

export default Fonts;
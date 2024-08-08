import amazon from '../assets/img/amazon.png';
import emirates from '../assets/img/emirates.png';
import oscorp from '../assets/img/oscorp.png';
import stark from '../assets/img/stark.png';
import tesla from '../assets/img/tesla.png';
import yamaha from '../assets/img/yamaha.png';
function Partners() {
  return (
    <div className="mt-16">
        <div className="">
            <h1 className="text-5xl font-bold justify-center items-center text-center flex">Our Partners</h1>
        </div>
        <div className="mt-8 flex gap-9 items-center">
            <img className=' w-[367px] h-[122px] opacity-70 ' src={stark}/>
            <img className=' w-[248px] h-[248px] opacity-70 ' src={tesla}/>
            <img className=' w-[217px] h-[67px] opacity-70 ' src={amazon}/>
            <img className=' w-[94px] h-[121px] opacity-70 ' src={oscorp}/>
            <img className=' w-[238px] h-[89px] opacity-70 ' src={yamaha}/>
            <img className=' w-[174px] h-[116px] opacity-70 ' src={emirates}/>
        </div>
    </div>
  );
};

export default Partners;
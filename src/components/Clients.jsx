import Container from "./Container";
import GTA from '../assets/img/GTA.png';
import GTA6 from '../assets/img/GTA6.png';
import ManAndCat from '../assets/img/ManAndCat.png';
function Clients() {
  return (
    <Container>
        <div className="mt-16">
            <h1 className="text-[40px] font-bold justify-center items-center text-center flex">Our Clients</h1>
            <div className="mt-8 flex gap-6">
                <div className="flex flex-col gap-6 border-[2px] px-6 pt-6 pb-[39px] border-white/50 bg-white cursor-pointer rounded-3xl drop-shadow-2xl">
                    <div className="flex items-center gap-2.5">
                        <img className="w-16 h-16 rounded-full"src={GTA}/>
                        <h1 className="text-2xl font-bold">Vito Corleone</h1>
                    </div>
                    <p className="text-lg text-[#172121] opacity-60">
                        “I needed to find old cars to sell, I found them! I can assure you it’s the best classifieds service I have ever seen. The user interface is incredibly intuitive and makes browsing through listings a breeze. The search functionality is powerful, allowing me to filter by make, model, year, and price range with ease. ”
                    </p>
                </div>
                <div className="flex flex-col gap-6 border-[2px] px-6 pt-6 pb-[39px] border-white/50 bg-white cursor-pointer rounded-2xl drop-shadow-2xl">
                    <div className="flex items-center gap-2.5">
                        <img className="w-16 h-16 rounded-full"src={GTA6}/>
                        <h1 className="text-2xl font-bold">Vito Scaletta</h1>
                    </div>
                    <p className="text-lg text-[#172121] opacity-60">
                    “I needed to find old cars to sell, I found them! I can assure you it’s the best classifieds service I have ever seen. The user interface is incredibly intuitive and makes browsing through listings a breeze. The search functionality is powerful, allowing me to filter by make, model, year, and price range with ease. ”
                    </p>
                </div>
                <div className="flex flex-col gap-6 border-[2px] px-6 pt-6 pb-[39px] border-white/50 bg-white cursor-pointer rounded-2xl drop-shadow-2xl">
                    <div className="flex items-center gap-2.5">
                        <img className="w-16 h-16 rounded-full"src={ManAndCat}/>
                        <h1 className="text-2xl font-bold">Joe Barbaro</h1>
                    </div>
                    <p className="text-lg text-[#172121] opacity-60">
                        “I needed to find old cars to sell, I found them! I can assure you it’s the best classifieds service I have ever seen. The user interface is incredibly intuitive and makes browsing through listings a breeze. The search functionality is powerful, allowing me to filter by make, model, year, and price range with ease. ”
                    </p>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default Clients;
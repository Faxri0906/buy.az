import Container from "./Container";

function Navbar() {
  return (
    <header className="mt-6">
        <Container>
            <div className="justify-between flex items-center">
                <h1 className="text-4xl text-[#5e2bff] font-semibold">Buy<span className="text-black">.</span><span className="text-[#e85f5c]">az</span></h1>
                <ul className="flex gap-8">
                    <li className="text-xl font-medium opacity-45 hover:opacity-100 hover:border-b-[12px] hover:border-black cursor-pointer"><a href="/" className="hover:border-b-[12px] hover:border-black">Home</a></li>
                    <li className="text-xl font-medium opacity-45 hover:opacity-100 hover:border-b-[12px] hover:border-black cursor-pointer"><a href="/" className="hover:border-b-[12px] hover:border-black">Search</a></li>
                    <li className="text-xl font-medium opacity-45 hover:opacity-100 hover:border-b-[12px] hover:border-black cursor-pointer"><a href="/" className="hover:border-b-[12px] hover:border-black">About</a></li>
                    <li className="text-xl font-medium opacity-45 hover:opacity-100 hover:border-b-[12px] hover:border-black cursor-pointer"><a href="/" className="hover:border-b-[12px] hover:border-black">Contacts</a></li>
                </ul>
            </div>
        </Container>
    </header>
  );
};

export default Navbar;
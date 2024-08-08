import Container from "./Container";

function Footer() {
  return (
    <>
        <div className="h-[2px] w-full bg-[#172121] opacity-20 mt-16"></div>
        <Container>
            <div className="h-[511px]">
                <div className="flex flex-col gap-2.5 mt-8">
                    <div className="flex items-center gap-2.5">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.5 13.375L22.75 4L4 13.375V32.125L22.75 41.5L41.5 32.125V13.375Z" stroke="#5E2BFF" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M4 13.6875L22.75 23.0625M22.75 23.0625V41.8125M22.75 23.0625L41.5 13.6875M32.125 9L22.75 13.6875L13.375 18.375" stroke="#E85F5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h1 className="text-4xl text-[#5e2bff] font-semibold">Buy<span className="text-black">.</span><span className="text-[#e85f5c]">az</span></h1>
                    </div>
                    <div className="w-[144px]">
                        <p className="text-lg text-[#172121] opacity-60">
                            Babek Pr. 14. Baku, Azerbaijan.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </>
  );
};

export default Footer;
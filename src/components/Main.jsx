import Container from "./Container";

function Main() {
  return (
    <Container>
        <div className="mt-16">
            <div className="w-[1240px] h-[238px] text-center justify-center items-center flex">
                <h1 className="text-8xl font-bold leading-[120px]">Find anything that you want, in one <span className="text-[#5E2BFF]">website!</span></h1>
            </div>
            <div className="mt-10 justify-center items-center text-center flex gap-8">
                <button className="px-10 py-4 text-xl text-white rounded-[36px] border-[2px] border-[#5E2BFF] bg-[#5E2BFF] hover:bg-white hover:text-[#5E2BFF]">Get Started!</button>
                <button className="px-10 py-4 text-xl text-white rounded-[36px] border-[2px] border-[#E85F5C] bg-[#E85F5C] hover:bg-white hover:text-[#E85F5C]">Contact Us</button>
            </div>
        </div>
    </Container>
  );
};

export default Main;
import handWith from "../assets/handWith.jpeg"

function MainSection() {
  return (
    <div
      className="h-screen w-full bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${handWith})` }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Secure Your Future with <span className="text-yellow-400">InsureMe</span></h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Get the best insurance plans tailored for you. Hassle-free, reliable, and affordable.
        </p>
        <button className=" cursor-pointer mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MainSection;

import brand1 from "../assets/brand1.jpeg";
import brand2 from "../assets/brand2.jpeg";
import brand3 from "../assets/brand3.jpeg";
import brand4 from "../assets/brand4.jpeg";
import brand5 from "../assets/brand5.jpeg";

function Partners() {
    const brands=[brand1,brand2,brand3,brand4,brand5]

  return (
    <div className="mt-10 w-full py-10 ">
      <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">
        Trusted Partners & Allies
      </h1>
      
      {/* Grid Container for Partner Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10">
        {/* Partner 1 */}
        
        {
            brands.map((val,index)=>{
               return <div key={index}
          className="h-50 w-full bg-cover bg-center rounded-lg shadow-md"
          style={{ backgroundImage: `url(${val})` }}
        ></div>
            })
        }    
        

        
      </div>
    </div>
  );
}

export default Partners;

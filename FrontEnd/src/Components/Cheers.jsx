import anna from "../assets/Anna.jpeg";
import smith from "../assets/smith.jpeg"
import kathrine from "../assets/kathrine.jpeg"

function Cheers() {
  const cheersData = [
    { name: "Anna Ritchie", img: anna, message: "Cheers to a great experience!" },
    { name: "Jane Smith", img: `${smith}`, message: "Insurance has never been this fun!" },
    { name: "Kathrine Langford", img: `${kathrine}`, message: "Secure, simple, and smooth!" }
  ];

  return (
    <div className="bg-amber-50 mt-4  p-10 rounded-2xl  w-full  mx-auto">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">Cheers</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {cheersData.map((person, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-xl text-center w-80">
            <img 
              src={person.img} 
              alt={person.name} 
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-amber-500"
            />
            <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
            <p className="text-gray-600 text-base mt-3">{person.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cheers;

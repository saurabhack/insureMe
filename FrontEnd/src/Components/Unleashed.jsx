function Unleashed() {
    const content = [
      {
        title: "What Types Of Insurance Do You Offer?",
        ans: "We cover everything from life to laughter."
      },
      {
        title: "How do I file a claim?",
        ans: "Just send us a smoke signal or call!"
      },
      {
        title: "Are there any hidden fees?",
        ans: "Only the ones we hide really well!"
      },
      {
        title: "Can I customize my policy?",
        ans: "Absolutely! We love a good makeover!"
      },
      {
        title: "What if I need help after hours?",
        ans: "We’re like superheroes, always on call!"
      }
    ];
  
    return (
      <div className="bg-amber-50 mt-4 px-4 md:px-8 py-6">
        <h1 className="text-2xl md:text-4xl text-center font-semibold text-gray-900">
          Insurance Insights Unleashed
        </h1>
        <div className="flex flex-col justify-center items-center pt-6 gap-4">
          {content.map((item) => (
            <div
              key={item.title}
              className="bg-white py-5 px-6 rounded-xl shadow-lg w-full max-w-lg border-t-4 border-amber-500"
            >
              <h2 className="text-lg md:text-2xl font-semibold text-center text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-center text-gray-600 mt-2">
                {item.ans}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Unleashed;
  
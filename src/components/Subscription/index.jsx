const subscribtionData = [
  {
    type: "Premium",
    privilege: [
      "Lifetime Access",
      "Latest Feature",
      "Global Server",
      "24/7 Support",
      "Unlimited Storage",
    ],
    price: "$300 / month",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorum.",
  },

  {
    type: "Free",
    privilege: [
      "7 Day Access",
      "Stable Feature",
      "Local Server",
      "Working Hour Support",
      "10GB Storage",
    ],
    price: "$0 / month",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorum.",
  },
];

export default function SubscriptionSection() {
  return (
    <div className="lg:container lg:mx-auto p-4 lg:py-8 lg:px-24 border-2 rounded-lg border-[#222831] bg-[#222831]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xl font-bold text-center lg:text-3xl">Getting Started</p>

          <p className="text-sm text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, ipsum.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
          <div className="container mx-auto flex flex-col justify-between gap-4 p-8 border-2 bg-[#393E46] border-transparent rounded-lg w-full h-full">
            <p className="text-xl text-center text-[#f2f2f2] italic font-extrabold tracking-widest uppercase">
              {subscribtionData[1].type}
            </p>

            <div className="flex flex-col">
              {subscribtionData[1].privilege.map((item, index) => (
                <ul key={index}>
                  <li className="list-disc list-inside">{item}</li>
                </ul>
              ))}
            </div>

            <p className="text-sm">{subscribtionData[1].description}</p>

            <p className="italic text-center">{subscribtionData[1].price}</p>

            <a href="/register" className="w-full">
              <button className="w-full py-1 rounded-lg bg-[#f2f2f2] uppercase font-bold border-4 border-[#f2f2f2] text-[#393E46] hover:text-[#f2f2f2] hover:bg-[#222831] transition-all duration-300">
                Register Now
              </button>
            </a>
          </div>

          <div className="container mx-auto flex flex-col justify-between gap-4 p-8 border-2 bg-[#393E46] border-[#f96d00] rounded-lg w-full h-full">
            <p className="text-xl text-center text-[#f96d00] italic font-extrabold tracking-widest uppercase">
              {subscribtionData[0].type}
            </p>

            <div className="flex flex-col">
              {subscribtionData[0].privilege.map((item, index) => (
                <ul key={index}>
                  <li className="list-disc list-inside">{item}</li>
                </ul>
              ))}
            </div>

            <p className="text-sm">{subscribtionData[0].description}</p>

            <p className="italic text-center">{subscribtionData[0].price}</p>

            <button className="py-1 rounded-lg bg-[#F96D00] uppercase font-bold border-4 border-[#F96D00] hover:text-[#F96D00] hover:bg-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

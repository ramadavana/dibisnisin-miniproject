const testimonialsData = [
  {
    avatar: "/images/pictures/male-testimoni.jpg",
    name: "Mary Joshiash",
    socialid: "@maryjoshiash",
    verified_icon: <ion-icon name="checkmark-circle"></ion-icon>,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam ullam odio et exercitationem facere ipsum voluptatum dolore officia sint.",
    date_posted: "Oct 12, 2024",
    platform: <ion-icon name="logo-twitter"></ion-icon>,
  },

  {
    avatar: "/images/pictures/female-testimoni.jpg",
    name: "Jessica Devis",
    socialid: "@jessicadevis",
    verified_icon: <ion-icon name="checkmark-circle"></ion-icon>,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam ullam odio et exercitationem facere ipsum voluptatum dolore officia sint.",
    date_posted: "Oct 13, 2024",
    platform: <ion-icon name="logo-twitter"></ion-icon>,
  },

  {
    avatar: "/images/pictures/male-testimoni.jpg",
    name: "John Smith",
    socialid: "@johnsmith",
    verified_icon: <ion-icon name="checkmark-circle"></ion-icon>,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam ullam odio et exercitationem facere ipsum voluptatum dolore officia sint.",
    date_posted: "Oct 14, 2024",
    platform: <ion-icon name="logo-twitter"></ion-icon>,
  },

  {
    avatar: "/images/pictures/female-testimoni.jpg",
    name: "Misha Stam",
    socialid: "@mishastam",
    verified_icon: <ion-icon name="checkmark-circle"></ion-icon>,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam ullam odio et exercitationem facere ipsum voluptatum dolore officia sint.",
    date_posted: "Oct 15, 2024",
    platform: <ion-icon name="logo-twitter"></ion-icon>,
  },

  {
    avatar: "/images/pictures/male-testimoni.jpg",
    name: "John Smith",
    socialid: "@johnsmith",
    verified_icon: <ion-icon name="checkmark-circle"></ion-icon>,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam ullam odio et exercitationem facere ipsum voluptatum dolore officia sint.",
    date_posted: "Oct 16, 2024",
    platform: <ion-icon name="logo-twitter"></ion-icon>,
  },

  {
    avatar: "/images/pictures/female-testimoni.jpg",
    name: "Lucian Eurel",
    socialid: "@lucianeurel",
    verified_icon: <ion-icon name="checkmark-circle"></ion-icon>,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quibusdam ullam odio et exercitationem facere ipsum voluptatum dolore officia sint.",
    date_posted: "Oct 17, 2024",
    platform: <ion-icon name="logo-twitter"></ion-icon>,
  },
];

export default function TestimonialsSection() {
  return (
    <div className="lg:container lg:mx-auto p-4 lg:py-8 border-2 rounded-lg border-[#222831] bg-[#222831]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xl font-bold text-center lg:text-3xl">What People Think</p>

          <p className="text-sm text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, ipsum.
          </p>
        </div>

        <div className="container grid grid-cols-1 gap-4 mx-auto lg:p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="container mx-auto flex flex-col justify-between gap-4 p-8 border-2 bg-[#393E46] border-transparent rounded-lg w-full h-full">
              <div className="flex flex-row items-center gap-4">
                <img
                  src={item.avatar}
                  alt="Avatar"
                  className="object-cover w-20 h-20 rounded-full"
                />

                <div>
                  <p className=" flex flex-row gap-1 text-[#f2f2f2]">
                    {item.name}{" "}
                    <span className="flex items-center text-blue-500">{item.verified_icon}</span>
                  </p>

                  <p className="text-sm text-[#f2f2f2] opacity-50">{item.socialid}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-sm text-[#f2f2f2] opacity-50">{item.testimonial}</p>

                <div className="flex flex-row justify-between w-full">
                  <a
                    href="/"
                    target="_blank"
                    className="flex items-center gap-2 transition-all duration-300 opacity-50 hover:opacity-100">
                    See on <span className="flex items-center text-">{item.platform}</span>
                  </a>

                  <p className="flex items-center text-sm text-[#f2f2f2]">{item.date_posted}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

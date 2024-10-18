export default function FooterDefault() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: "Home",
      icon: <ion-icon name="home"></ion-icon>,
      href: "/",
    },

    {
      name: "About",
      icon: <ion-icon name="information-circle"></ion-icon>,
      href: "/about",
    },

    {
      name: "Product",
      icon: <ion-icon name="cube"></ion-icon>,
      href: "/product",
    },

    {
      name: "User List",
      icon: <ion-icon name="person"></ion-icon>,
      href: "/user-list",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      icon: <ion-icon name="logo-facebook"></ion-icon>,
      name: "Facebook",
    },

    {
      href: "https://www.instagram.com/",
      icon: <ion-icon name="logo-instagram"></ion-icon>,
      name: "Instagram",
    },

    {
      href: "https://twitter.com/",
      icon: <ion-icon name="logo-twitter"></ion-icon>,
      name: "Twitter",
    },

    {
      href: "https://www.linkedin.com/in/ramadavana14",
      icon: <ion-icon name="logo-linkedin"></ion-icon>,
      name: "LinkedIn",
    },

    {
      href: "https://github.com/ramadavana",
      icon: <ion-icon name="logo-github"></ion-icon>,
      name: "GitHub",
    },

    {
      href: "https://wa.me/6282249604690",
      icon: <ion-icon name="logo-whatsapp"></ion-icon>,
      name: "WhatsApp",
    },
  ];

  const contactAddress = [
    {
      name: "Email",
      info: "services@dibisnisin.com",
      icon: <ion-icon name="mail"></ion-icon>,
      href: "mailto:davana1402@gmail.com",
    },

    {
      name: "Phone / Fax",
      info: "(021) 2190345",
      icon: <ion-icon name="call"></ion-icon>,
      href: "tel:+6282249604690",
    },

    {
      name: "Address",
      info: "Plaza Cityview, Jl. Kemang Timur No.1 Lantai 2, RT.14/RW.8, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510",
      icon: <ion-icon name="location"></ion-icon>,
      href: "https://maps.app.goo.gl/F2jNGRY2yVUDHmzK6",
    },
  ];

  return (
    <footer className="container max-w-screen-xl xl:rounded-t-xl p-4 lg:px-8 md:py-8 mx-auto bg-[#393E46]">
      <div className="container flex flex-col mx-auto">
        <div className="w-[200px]">
          <img src="/logo/dibisnisin-logo-color.png" alt="Logo" />
        </div>

        <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className="font-bold tracking-widest uppercase opacity-50">Contact</p>

            <div className="flex flex-col gap-4">
              {contactAddress.map((item, index) => (
                <div key={index} className="w-fit">
                  <div className="flex items-center gap-2">
                    {item.icon}

                    {item.name}
                  </div>

                  <a
                    href={item.href}
                    className="hover:text-[#F96D00] transition-all duration-300 text-sm">
                    <p>{item.info}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-8 lg:flex-row lg:col-span-2 lg:gap-24 md:pl-24 lg:pl-32">
            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="font-bold tracking-widest uppercase opacity-50">Pages</p>

              <div className="flex flex-col gap-2 lg:gap-4">
                {footerLinks.map((item, index) => (
                  <a
                    href={item.href}
                    key={index}
                    className="hover:text-[#F96D00] transition-all duration-300 w-fit">
                    <div className="flex items-center gap-2">
                      {item.icon}

                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:gap-4">
              <p className="font-bold tracking-widest uppercase opacity-50">Social Media</p>

              <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-2 lg:gap-6 w-fit">
                {socialLinks.map((item, index) => (
                  <a
                    href={item.href}
                    target="_blank"
                    key={index}
                    className="hover:text-[#F96D00] text-2xl lg:text-3xl hover:scale-125 transition-all duration-300 w-fit">
                    <div className="flex items-center gap-2">{item.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center border-t-2 border-[#f2f2f2] pt-4 border-opacity-50">
        <p className="text-sm opacity-50">
          Copyright &copy; {currentYear}{" "}
          <a href="/" className="hover:text-[#F96D00] transition-all duration-300">
            DiBisnisIn | Mini Project
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/ramadavana14/"
            target="_blank"
            className="hover:text-[#F96D00] transition-all duration-300">
            Rama Davana
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

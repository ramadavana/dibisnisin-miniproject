import Layout from "../../components/Layout";
import UseLogin from "../../hooks/UseLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, success, token } = UseLogin();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await login(email, password);

    // Navigate to a secure page if login is successful
    if (token) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  };

  if (success) {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }

  return (
    <Layout>
      <section className="bg-[#393E46]">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative hidden h-16 lg:block lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="images/pictures/loginpage-image.jpg"
              className="absolute inset-0 object-cover w-full h-full rounded-lg filter brightness-75"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-16 text-center">
              <p className="text-2xl font-bold text-[#F2F2F2]">
                Punya Mini-Project tidak terpakai?{" "}
                <span className="text-[#F96D00]">Di-Bisnis-In</span> aja!
              </p>

              <p className="text-sm">
                &quot;Saya bayarin <span className="italic">kok</span>, tapi pinjam dulu seratus
                biar bisa <span className="text-[#F96D00]">Di-Bisnis-In</span>&quot;
              </p>
            </div>
          </aside>

          <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="gap-3 text-2xl font-bold text-[#F2F2F2] sm:text-3xl md:text-4xl">
                Welcome to <span className="text-[#F96D00]">Di-Bisnis-In</span>
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Please fill out the form below to login to your account.
              </p>

              <form action="#" className="grid grid-cols-6 gap-6 mt-4" onSubmit={handleSubmit}>
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-[#F2F2F2]">
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="w-full mt-1 text-sm text-[#F2F2F2] bg-[#222831] border-[#f2f2f2] border-2 py-1 px-2 rounded-md shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Password" className="block text-sm font-medium text-[#F2F2F2]">
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="w-full mt-1 text-sm text-[#F2F2F2] bg-[#222831] border-[#f2f2f2] border-2 py-1 px-2 rounded-md shadow-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    You can read to our{" "}
                    <a href="/docs" className="text-[#F2F2F2] underline">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="/docs" className="text-[#F2F2F2] underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="flex-col col-span-6 sm:flex sm:gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-[#F96D00] border border-[#F96D00] rounded-md shrink-0 hover:bg-[#f2f2f2] hover:text-[#F96D00] focus:outline-none focus:ring active:text-[#F96D00] w-full">
                    Login
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don&apos;t have an account?
                    <br />
                    <a href="/register" className="text-[#F2F2F2] underline">
                      Register
                    </a>
                    .
                  </p>
                </div>
              </form>

              {error && (
                <p className="bg-[#222831] px-2 py-1 mt-4 font-bold text-red-500 border-2 border-red-500 rounded-md">
                  {error}
                </p>
              )}
              {success && (
                <p className="bg-[#222831] px-2 py-1 mt-4 font-bold text-green-500 border-2 border-green-500 rounded-md">
                  Login successful!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "../../components/Layout";
import BreadcrumbsDefault from "../../components/Breadcrumb";

export default function AboutPage() {
  return (
    <Layout>
      <section>
        <div className="container flex flex-col gap-8 mx-auto md:px-8 md:py-4">
          <BreadcrumbsDefault />
          <div className="flex flex-col items-center justify-center gap-4 md:gap-8 md:flex-row bg-[#222831] p-8 rounded-lg">
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-center">
                <img src="/logo/dibisnisin-favicon.svg" alt="Logo" />
              </div>

              <p className="text-center font-bold tracking-wide text-3xl text-[#f96d00]">
                DiBisnisIn
              </p>
            </div>

            <div className="flex flex-col gap-4 text-justify">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non obcaecati optio
                quisquam impedit dolorum repellat error adipisci distinctio ipsa vero ab, architecto
                eum incidunt quaerat qui expedita iure beatae ut tempore ullam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veniam
                recusandae fuga? Architecto nisi, earum fuga suscipit labore officia! Eum quaerat
                explicabo deleniti sint ut distinctio aspernatur quo, architecto nemo eos ab.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:gap-8 md:flex-row-reverse bg-[#222831] p-8 rounded-lg">
            <div className="flex items-center justify-center w-[200px] md:w-[800px] lg:w-[400px]">
              <img
                src="/images/about/profilepict-ramadavana-zoom-square.JPG"
                alt="Logo"
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col gap-4 text-justify">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non obcaecati optio
                quisquam impedit dolorum repellat error adipisci distinctio ipsa vero ab, architecto
                eum incidunt quaerat qui expedita iure beatae ut tempore ullam.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores iste
                dolorem aut reprehenderit mollitia reiciendis autem fugit necessitatibus vitae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

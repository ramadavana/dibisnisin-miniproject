import Layout from "../../components/Layout";
import Carousel from "../../components/Carousel";
import SubscriptionSection from "../../components/Subscription";
import TestimonialsSection from "../../components/Testimonials";

export default function HomePage() {
  return (
    <Layout>
      {/* Carousel */}
      <section>
        <Carousel />
      </section>

      {/* Subscribtion */}
      <section>
        <SubscriptionSection />
      </section>

      {/* Testimonials */}
      <section>
        <TestimonialsSection />
      </section>
    </Layout>
  );
}

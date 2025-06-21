import Link from "next/link";

export const metadata = {
  title: "About Us | YourStore",
  description: "Learn more about YourStore – who we are, our mission, and the team behind your favorite products.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1700px] mx-auto w-full px-4 md:px-10 py-16 space-y-20">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          About <span className="text-primary-strong">Justbakedbd</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are not just an online store — we are your trusted companion in delivering quality, style, and value.
        </p>
      </section>

      {/* Our Mission */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make shopping delightful by offering premium products at fair prices, ensuring excellent customer support, and delivering fast.
          </p>
          <p className="text-gray-600">
            Whether you're buying your first product or your hundredth, we're here to make it seamless and enjoyable.
          </p>
        </div>
        <img
          src="/images/about/mission.jpg"
          alt="Our Mission"
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/about/story.jpg"
          alt="Our Story"
          className="w-full h-64 object-cover rounded-lg shadow"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-600">
            It all started with a simple idea: to create a platform where people could find authentic, curated products without the hassle.
          </p>
          <p className="text-gray-600">
            From our humble beginnings to becoming one of the fastest-growing eCommerce platforms in the region — your trust is what drives us.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="text-center space-y-12">
        <h2 className="text-2xl font-semibold text-gray-800">What We Value</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Quality First", desc: "Every product is selected with care and tested for durability and performance." },
            { title: "Customer Centric", desc: "We believe in building long-term relationships with our customers." },
            { title: "Innovation", desc: "We constantly strive to improve and adapt to meet evolving needs." },
          ].map((value, i) => (
            <div key={i} className="bg-white border shadow-sm rounded-lg p-6 text-left">
              <h3 className="text-lg font-semibold text-primary-strong mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-strong text-white rounded-xl py-12 px-6 md:px-12 text-center space-y-4">
        <h2 className="text-2xl font-bold">Want to contact with us?</h2>
        <p className="text-sm opacity-90">
          We're always open to collaborations, suggestions, and hearing from passionate customers like you.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-white text-primary-strong font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

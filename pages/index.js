// pages/index.js
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Girls Techie</title>
        <meta name="description" content="Empowering girls through technology" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate__animated animate__fadeIn">
              The Girls Techie
            </h1>
            <p className="text-lg md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
              We&apos;re a movement, a community on a mission to close the gender gap
              in STEM.....
            </p>
            <Link
              href="#gallery"
              className="inline-block bg-[#89CFF0] text-[#004F6D] py-3 px-6 text-xl font-semibold rounded-full hover:bg-[#006B8E] hover:text-white transition-all duration-300 ease-in-out"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="py-16 bg-[#f0f9ff]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#006B8E] mb-12">
            Our Impact in Pictures
          </h2>

          {/* Counting Animation Section */}
          <div className="flex justify-center space-x-12 mb-12">
            <div>
              <h3 className="text-5xl font-bold text-[#006B8E]">
                <CountUp start={0} end={600} duration={5} separator="," />
                <span className="text-xl">+</span>
              </h3>
              <p className="text-lg text-gray-700">Impacted</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#006B8E]">
                <CountUp start={0} end={20} duration={8} separator="," />
                <span className="text-xl">+</span>
              </h3>
              <p className="text-lg text-gray-700">Events</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#006B8E]">
                <CountUp start={0} end={5} duration={10} separator="," />
                <span className="text-xl">+</span>
              </h3>
              <p className="text-lg text-gray-700">Countries</p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-8">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/image.jpg"
                alt="Girls in Tech"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={500} // Add width
                height={300} // Add height
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-semibold">
                  Inspiring Future Coders
                </p>
              </div>
            </div>
            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/image.jpg"
                alt="Coding Workshop"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-semibold">
                  Hands-On Workshops
                </p>
              </div>
            </div>
            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/image.jpg"
                alt="Tech Event"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-semibold">
                  Empowering Young Innovators
                </p>
              </div>
            </div>
            {/* Image 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/image.jpg"
                alt="Coding Bootcamp"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-semibold">
                  Building Tech Skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section (Mission, Vision, etc.) */}
      <section className="py-16 bg-[#f1f1f1]">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h2 className="text-4xl font-extrabold text-[#004F6D] mb-6 leading-tight">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            The Girls Techie is dedicated to empowering young girls by providing
            them with the resources, education, and mentorship needed to thrive in
            the tech industry. We aim to inspire, educate, and support the next
            generation of female tech leaders through workshops, coding bootcamps,
            and hands-on experiences.
          </p>
          {/* Highlighted Text or Key Point */}
          <p className="text-lg text-[#006B8E] font-semibold mb-8 px-6 md:px-12 italic">
            &quot;Empowering the next generation of female tech leaders!&quot;
          </p>

          {/* Call to Action Button */}
          <Link
            href="/about"
            className="inline-block bg-[#89CFF0] text-[#004F6D] py-3 px-8 text-xl font-semibold rounded-full shadow-lg hover:bg-[#006B8E] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-[#f0f9ff]">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h2 className="text-4xl font-extrabold text-[#004F6D] mb-6 leading-tight">
            Get Involved
          </h2>
          
          {/* Two Columns for Join and Attend */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Join Our Community Block */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-[#004F6D] mb-4">
                Join Our Community
              </h3>
              <p className="text-xl text-[#4B4B4B] mb-6">
                Connect with other girl techies across Africa to build your network,
                reach your goals, and build lifelong relationships.
              </p>
              <div className="mb-6">
                <Image
                  src="/images/image.jpg"
                  alt="Community Image"
                  className="w-full h-[300px] object-cover rounded-lg shadow-md"
                  width={500}
                  height={300}
                />
              </div>
              <Link
                href="/community"
                className="inline-block bg-[#89CFF0] text-[#004F6D] py-3 px-8 text-xl font-semibold rounded-full shadow-lg hover:bg-[#006B8E] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Join Now
              </Link>
            </div>

            {/* Attend an Event Block */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-[#004F6D] mb-4">
                Attend an Event
              </h3>
              <p className="text-xl text-[#4B4B4B] mb-6">
                Get free access to events focused on empowering and getting more young
                girls into tech across Africa. View our upcoming events so you don&apos;t
                miss the one curated to match your technical skill or passion.
              </p>
              <div className="mb-6">
                <Image
                  src="/images/image.jpg"
                  alt="Event Image"
                  className="w-full h-[300px] object-cover rounded-lg shadow-md"
                  width={500}
                  height={300}
                />
              </div>
              <Link
                href="/events"
                className="inline-block bg-[#89CFF0] text-[#004F6D] py-3 px-8 text-xl font-semibold rounded-full shadow-lg hover:bg-[#006B8E] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Attend Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

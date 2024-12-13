// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Head>
        <title>About Us - The Girls Techie</title>
        <meta name="description" content="Learn about our mission and team" />
      </Head>

      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section 
  className="relative bg-cover bg-center text-white py-20 mb-16" 
  style={{ backgroundImage: "url('/images/image.jpg')" }}
>
  <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-bold mb-6">About Us</h1>
    <p className="text-xl leading-relaxed">
      The Girls Techie is a nonprofit organization empowering young girls in STEM. We connect, inspire, and provide the tools to help them lead in the tech world. Our aim is to break barriers and foster opportunities for young girls to thrive in technology.
    </p>
  </div>
</section>


        {/* Mission Section */}
        <section className="mb-16   py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 flex items-center justify-center bg-[#e6f2f9] rounded-full shadow-lg">
              <span className="text-6xl text-[#89cff0]">🎯</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-semibold text-[#89cff0] mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to inspire, empower, and connect young girls with STEM skills to make meaningful impacts in their communities. We are breaking barriers and fostering opportunities for them to thrive in technology.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-24 h-24 flex items-center justify-center bg-[#cce7f9] rounded-full shadow-lg">
              <span className="text-6xl text-[#89cff0]">🌎</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-semibold text-[#89cff0] mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is a world where girls are leaders in the digital and tech industries, driving innovation and solving global challenges through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-16 bg-[rgb(240_249_255/1)] py-16 px-4">
          <h2 className="text-4xl font-semibold text-[#89cff0] text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: '🤝',
                title: 'Teamwork',
                description:
                  'We believe in collaboration and support, achieving success through working together.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description:
                  'We foster creativity and innovation in solving problems and advancing STEM fields.',
              },
              {
                icon: '🌟',
                title: 'Leadership',
                description:
                  'We empower young girls to build confidence and lead in STEM industries.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="text-center mb-4">
                  <span className="text-5xl text-[#89cff0]">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-[#89cff0] text-center mb-10">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Sumayah Adegbite',
                role: 'Founder & CEO',
                image: '/images/image.jpg',
                bio: 'A passionate advocate for women in tech, with a strong background in software development and mentoring.',
              },
              {
                name: 'Sumayah Adegbite',
                role: 'Founder & CEO',
                image: '/images/image.jpg',
                bio: 'A passionate advocate for women in tech, with a strong background in software development and mentoring.',
              },
              {
                name: 'Sumayah Adegbite',
                role: 'Founder & CEO',
                image: '/images/image.jpg',
                bio: 'A passionate advocate for women in tech, with a strong background in software development and mentoring.',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold text-[#89cff0] mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

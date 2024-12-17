import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Donate = () => {
  return (
    <div>
      <Head>
        <title>Donate - The Girls Techie</title>
        <meta name="description" content="Support The Girls Techie with your donation" />
      </Head>

      <Header />

      <main className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold text-[#89cff0] mb-4">Support Our Cause</h1>
        <p className="text-lg mb-6">Your donations help empower young girls to lead in the tech world. With your support, we can provide the resources they need to break barriers in STEM.</p>

        {/* Simple Donate Button */}
        <form>
          <button
            type="submit"
            className="bg-[#89cff0] text-white py-2 px-6 rounded-md hover:bg-[#89cff0]"
          >
            Donate Now
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;

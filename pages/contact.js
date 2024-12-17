// pages/contact.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - The Girls Techie</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <Header />

      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-[#89cff0] mb-4">Contact Us</h1>
        <p className="text-lg text-center mb-8">We would love to hear from you! Reach out for collaborations, volunteering, or inquiries.</p>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-lg font-medium">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md" rows="4"></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#89cff0] text-white py-2 px-6 rounded-md hover:bg-[#89cff0]"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

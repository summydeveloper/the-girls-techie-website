// pages/about.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - The Girls Techie</title>
        <meta name="description" content="Learn about our mission and team" />
      </Head>

      <Header />

      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-teal-500 mb-4">About Us</h1>
        <p className="text-lg text-center">
          The Girls Techie is a non-profit organization dedicated to empowering young girls by providing them with the skills and resources needed to succeed in the world of technology.
        </p>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Event() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", age: "" };
    let formIsValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      formIsValid = false;
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
      formIsValid = false;
    } else if (isNaN(formData.age) || formData.age < 10 || formData.age > 100) {
      newErrors.age = "Please enter a valid age between 10 and 100";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission (this could be an API call or something else)
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Head>
        <title>Events - The Girls Techie</title>
        <meta name="description" content="Learn about our mission, upcoming events, past events, and how we empower young girls in STEM." />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Upcoming Event: Girls in Tech Summit</h1>
        <p className="text-lg">Empowering young girls to lead in the world of technology. Join us for an inspiring event that connects, inspires, and provides the tools for success!</p>
        <a
          href="#register"
          className="mt-6 inline-block bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Register Now
        </a>
      </section>

      {/* Event Details Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Event Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Event Overview</h2>
            <p className="text-lg mb-4">
              Join us for a full-day event that features:
              <ul className="list-disc pl-5 text-gray-700">
                <li>Hands-on workshops with industry professionals</li>
                <li>Inspiring talks from women in tech</li>
                <li>Networking opportunities with peers and mentors</li>
                <li>Interactive STEM challenges and competitions</li>
              </ul>
            </p>
            <p className="text-lg">Date: January 25, 2025 | Time: 10:00 AM - 4:00 PM</p>
            <p className="text-lg">Location: Tech Hub Center, 1234 Innovation St, Tech City</p>
          </div>

          {/* Event Image or Visual */}
          <div className="relative h-64 lg:h-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/image.jpg"
              alt="Event Image"  width={100} height={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Past Event 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image width={100} height={100}
                src="/images/image.jpg"
                alt="Past Event Image"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Tech Talk for Teens</h3>
              <p className="text-lg text-gray-700 mb-4">An exciting day filled with inspiring talks from top tech leaders and hands-on coding sessions for young girls.</p>
              <p className="text-lg text-gray-600">Date: May 10, 2024 | Location: City Library</p>
            </div>

            {/* Past Event 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="/images/image.jpg"
                alt="Past Event Image" width={100} height={100}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Girls Who Code Hackathon</h3>
              <p className="text-lg text-gray-700 mb-4">A hackathon where girls collaborated to solve real-world tech problems, guided by mentors from the tech industry.</p>
              <p className="text-lg text-gray-600">Date: August 5, 2024 | Location: Innovation Hub</p>
            </div>

            {/* Past Event 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="/images/image.jpg"
                alt="Past Event Image"
                width={100}
                height={48}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">STEM Careers Day</h3>
              <p className="text-lg text-gray-700 mb-4">An event dedicated to introducing young girls to the vast range of career opportunities in STEM fields through workshops and presentations.</p>
              <p className="text-lg text-gray-600">Date: December 1, 2024 | Location: Downtown Conference Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Register for the Event</h2>
          <p className="text-lg mb-4">Dont miss out on this amazing opportunity to be part of our mission. Fill in the form below to register for the event!</p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-lg font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300"
          >
            Submit Registration
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

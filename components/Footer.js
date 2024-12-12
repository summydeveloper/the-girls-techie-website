// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-teal-500 p-4 text-white text-center">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} The Girls Techie. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-900 px-5 py-32 text-white" id="contact">
      <div className="text-center md:w-4/6 mx-auto">
        <h2 className="text-4xl font-bold mb-5 border-b-2 border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p className="text-lg mb-4">
          I am currently open for a full-time Web Developer role. If you want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> <a href="mailto:hatoumsalem@gmail.com">hatoumsalem@gmail.com</a>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span><a href="tel:+961 03 480 209">+961 03 480 209</a>

        </p>
      </div>
    </section>
  );
};

export default Contact;

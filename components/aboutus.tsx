import React from "react";
import Members from "./members";
const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 leading-relaxed tracking-wide md:leading-relaxed text-3xl md:text-4xl">
      <p>
        <strong>We will help you ship better apps, faster. </strong>
        Our team of expert engineers has created the best user experiences in
        some of the most popular apps worldwide.
      </p>
      <div className="py-20 text-center">
        <h2 className="font-bold text-4xl">Our Team</h2>
        <span className="mt-10">The &#8220;specops&#8221;</span>
      </div>
      <Members />
    </section>
  );
};

export default AboutUs;

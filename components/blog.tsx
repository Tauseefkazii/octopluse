"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Danish Shaikh",
    role: "Founder",
    rating: 5,
    text: "Astra Marketing has been an absolute pleasure to work with. Their team genuinely understands our vision and handles everything with professionalism and clarity. The strategies they’ve implemented have delivered consistent growth, and it’s reassuring to know our brand is in capable hands. Proud to have Astra Marketing managing CASEIT, and I wouldn’t hesitate to recommend them.",
  },
  {
    name: "Marc Nixon",
    rating: 3,
    role: "Head of Marketing at Transpoco",
    text: "We partnered with octopulse for our company rebrand and the development of a new website, and we couldn’t be more pleased with the results. The team demonstrated a strong understanding of our vision and translated it into a brand identity and website that truly reflects who we are and what we do.",
  },
  {
    name: "Hashir Ansari",
    role: "Founder",
    rating: 5,
    text: "Working with Astra Marketing has been a great experience from start to finish. They took the time to understand our brand and handled everything—from profile optimization to content strategy and growth planning—with real care and professionalism. Their knowledge of branding and Instagram growth clearly shows in the results. Highly recommended for anyone serious about growing their business online.",
  },
  {
    name: "Michael Harms",
    rating: 4,
    role: "Marketing Manager at Equiem",
    text: "The quality of the backend development has made it significantly easier for us to manage and edit ourselves going forward and is evidence of their experience building in HubSpot.",
  },
  {
    name: "Faisal sidique",
    rating:5,
    role: "Website Client",
    text: "We were genuinely surprised by how quickly the website was completed. Despite the tight timeline, the team delivered a polished, high-quality site that exceeded our expectations. Clear communication and great execution throughout.",
  },
  {
    name: "Ross Wilks",
    rating: 4,
    role: "Global Head of Marketing at Acre Security",
    text: "octopulse were truly exceptional throughout our global rebrand project. From the very beginning, they demonstrated a deep understanding of our business and its unique needs, translating them into a remarkable visual identity that perfectly captured our brand essence.",
  },

  // Hidden until button click
  {
    name: "Dan Spring",
    rating: 5,
    role: "Growth Manager at Vidco",
    text: "The team demonstrated high professionalism and responsiveness, consistently delivering quality outcomes throughout the project. The project was completed on schedule and within budget, reflecting commendable project management. octopulse's expertise and meticulous attention to detail ensured the website was visually appealing and functionally robust, aligning seamlessly with our goals.",
  },
  {
    name: "Alisa Pritchard",
    rating: 5,    role: "VP of Marketing at Greyparrot",
    text: "We absolutely enjoyed collaborating with octopulse to launch our new website! They not only met but exceeded our expectations within a tight timeline. Their dedication and effort truly went above and beyond, making the entire experience a joy. Highly recommend octopulse – professional, friendly, passionate and great customer service.",
  },
  {
    name: "Gemma Rogers",
    rating: 5,
    role: "Marketing Manager at Aeromark",
    text: "The team migrated our WordPress website in a way that gave me total front-end control of the content, enabling me to refresh the look and feel in a matter of days, prior to go-live. It is the most intuitive website migration I have ever seen.",
  },
  {
    name: "Sarah Collins",
    rating: 4,
    role: "Marketing Director",
    text: "octopulse delivered an incredibly smooth process and a final result that exceeded expectations. Communication was clear throughout.",
  },
  {
    name: "James Patel",
    rating: 4,
    role: "Product Lead",
    text: "The attention to detail and strategic thinking from the octopulse team was outstanding. The site performs beautifully.",
  },
  {
    name: "Emma Richardson",
    rating: 5,
    role: "CMO",
    text: "A highly professional agency that truly understands conversion-focused design. We’d happily work with them again.",
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section id="client" className="bg-[#f7f7fa] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold text-slate-600">
            OCTOPULSE MARKETING | ASTRA MARKETING
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-16 text-center text-4xl font-light text-[#1b1464]">
          What our customers say
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8"
            >
              {/* Stars */}
              {/* Stars */}
            <div className="mb-4 flex gap-1 text-[#f5a623]">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="text-slate-300">★</span>
              ))}
            </div>


              {/* Text */}
              <p className="mb-8 text-[15px] leading-relaxed text-slate-700">
                {review.text}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1b1464]">
                  {review.name}
                </p>
                <p className="text-sm text-slate-500">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {!showAll && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-[#ff7a59] px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Read all reviews →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

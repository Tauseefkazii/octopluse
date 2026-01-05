export default function OurWork() {
  return (
    <section id="services" className="w-full bg-white py-28">
      <h2 className="text-center text-4xl md:text-5xl font-light text-[#2E2A5A] mb-24">
        Our Services
      </h2>

      {/* ROW 1 — 2 CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* CARD 1 */}
        <WorkCard 
          bg="#f6be2d"
          title="SEO - Search Engine Optimization"
          tags={["Brand", "Website"]}
          image="/seo.jpg"
          // meta="gfjhgfgikdlfkgoidfgiodjgodsdmvoididsnsd vdsohfod gfoidhf fonfo obfod voudbvids godfgdsogods gdsougds;oi gdos;uhgdso f;oubfd ogdskj obioj obo;o"
          meta="We drive long-term organic growth through data-driven SEO strategies.
            From technical optimization to high-intent keyword targeting,
            we help brands rank higher, attract qualified traffic,
            and convert visibility into measurable business results."
          // shape="circle"
          // objectFit="cover"
        />

        {/* CARD 2 */}
        <div className="group relative bg-[#eef0f4] px-10 sm:px-14 py-16 sm:py-20 cursor-pointer overflow-hidden">
          <Tags tags={["Website", "Brand"]} />
          <h3 className="work-title">Content Marketing</h3>

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={`/content${i + 1}.jpg`}
                className="h-24 sm:h-28 lg:h-36 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ))}
          </div>

        <HoverInfo title="Manufacturing Website" meta="We create compelling content that drives engagement and conversions.
            From strategy and storytelling to social media and blogs,
            our content is tailored to your brand voice and audience.
            Optimized for reach, impact, and measurable growth." />
        </div>
      </div>

      {/* ROW 2 — FULL WIDTH */}
      <div className="bg-[#faf4f0] group cursor-pointer">
        <div className="max-w-7xl mx-auto px-10 sm:px-14 py-20 sm:py-24 grid lg:grid-cols-2 gap-16 sm:gap-20 items-center">
          <div>
            <Tags tags={["Website"]} />
            <h3 className="work-title leading-tight">
              Social Media <br />
            </h3>
            <p className="mt-6 text-lg text-[#2E2A5A]/80">
              Keep your finger on the pulse of your growth.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl max-h-[260px] sm:max-h-[320px] lg:max-h-none">
            <img
              src="/socialmedia.jpg"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      {/* ROW 3 — 2 CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <WorkCard
          bg="#eff2f1"
          title="Email Marketing"
          tags={["Product", "SaaS"]}
          image="/email.jpeg"
          meta="Boost engagement and conversions with targeted email campaigns. 
              From personalized newsletters to automated workflows, we help brands nurture leads, retain customers, and drive measurable growth."
        />

        <WorkCard
          bg="#2d2df1"
          title="AI Startup"
          tags={["AI", "Product"]}
          image="/ppc.png"
          meta="Revolutionizing industries with cutting-edge AI solutions. 
              From intelligent automation to predictive analytics, we empower startups to innovate, scale, and create smarter products."
          dark
        />
      </div>

      {/* ROW 6 — FULL WIDTH */}
      <div className="bg-[#faf4f0] group cursor-pointer">
        <div className="max-w-7xl mx-auto px-10 sm:px-14 py-20 sm:py-24 grid lg:grid-cols-2 gap-16 sm:gap-20 items-center">
        <div>
          <Tags tags={["Website", "Digital Strategy"]} />

          <h3 className="work-title leading-tight">
            Octopulse <br /> Digital Experience
          </h3>

          <p className="mt-6 text-lg text-[#2E2A5A]/80">
            Designed and developed by Octopulse to help brands communicate with
            clarity, authority, and impact. 
          </p>
        </div>


          <div className="relative overflow-hidden rounded-2xl max-h-[260px] sm:max-h-[320px] lg:max-h-none">
            <img
              src="/analytics.jpg"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      {/* SEE MORE WORK CTA */}
      <div className="relative w-full mt-0 overflow-hidden">
        <div className="relative bg-[#2CB8C8] rounded-bl-[120px] px-12 sm:px-16 py-20 sm:py-24 flex flex-col lg:flex-row items-center justify-between">
          <div className="z-10">
            <h3 className="text-4xl md:text-5xl font-light text-[#2E2A5A] mb-10">
              See more work
            </h3>

          {/* <a
            href="https://wa.me/919876543210" // replace with your WhatsApp number with country code
            target="_blank"
            rel="noopener noreferrer"
          > */}

            {/* <button className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#1E1A4D] text-white text-base font-medium transition-all duration-300 hover:scale-105"> */}
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#1E1A4D] text-white text-base font-medium transition-all duration-300 hover:scale-105"
              >
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          {/* </a> */}

          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#18C5D4]" />

          <svg
            className="absolute right-24 sm:right-48 top-24 w-48 sm:w-64 h-48 sm:h-64"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M40 40 L120 40 L160 80 L160 140 Q120 180 80 140 L40 100 Z"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="80" cy="120" r="5" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-3 mb-8 sm:mb-10">
      {tags.map((t) => (
        <span
          key={t}
          className="px-4 py-1 text-sm border border-current rounded-full opacity-80"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function WorkCard({
  bg,
  title,
  image,
  meta,
  tags,
  dark,
  shape,
}: any) {
  return (
    <div
      className="group relative px-10 sm:px-14 py-16 sm:py-20 overflow-hidden cursor-pointer"
      style={{ backgroundColor: bg, color: dark ? "#fff" : "#2E2A5A" }}
    >
      <Tags tags={tags} />
      <h3 className="work-title">{title}</h3>

      <div
        className={`mt-12 overflow-hidden mx-auto ${
          shape === "circle"
            ? "w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full"
            : "w-full max-h-[220px] sm:max-h-[260px] lg:max-h-[320px] rounded-2xl"
        }`}
      >
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <HoverInfo title={title} meta={meta} dark={dark} />
    </div>
  );
}

function HoverInfo({
  title,
  meta,
  dark,
}: {
  title: string
  meta: string
  dark?: boolean
}) {
  return (
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-all duration-500 ease-out
        bg-gradient-to-r
        from-[#1E1B4B]/90
        via-[#2E2A5A]/80
        to-[#1E1B4B]/60
        backdrop-blur-[2px]
      "
    >
      <div className="text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
        {/* Meta */}
        <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80">
          {meta}
        </p>

        {/* Title */}
        <p className="mt-2 text-lg sm:text-xl font-medium text-white">
          {title}
        </p>
      </div>
    </div>
  )
}

const handleWhatsAppClick = () => {
  alert(
    "WhatsApp messaging is currently unavailable. Please try again after some time."
  )
}

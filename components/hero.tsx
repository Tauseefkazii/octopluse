"use client"

export default function Hero() {
  return (
    <section  id="home" className="relative min-h-screen overflow-hidden bg-[#eef3fb]">
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0 z-0
          bg-cover bg-center
          sm:bg-right
        "
        style={{ backgroundImage: "url('/homepage-hero.webp')" }}
      />

      {/* WHITE SQUARE BACKGROUND */}
      <div
        aria-hidden
        className="
          absolute top-1/2 z-10 -translate-y-1/2

          /* MOBILE */
          h-[600px] w-[600px] -translate-x-[50%]

          /* SMALL SCREENS */
          sm:h-[1000px] sm:w-[900px] sm:-translate-x-[58%]

          /* LARGE SCREENS */
          lg:h-[35rem] lg:w-[1800px] lg:-translate-x-[55%]
        "
      />

      {/* CONTENT LAYER */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="w-full px-6 sm:pl-[4rem] lg:pl-[12rem]">
          <div className="
            max-w-xl 
            bg-white 
            p-14 sm:p-8 md:p-10 
            mt-10
            rounded-tl-[40px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[40px] 
            shadow-2xl 
            border-l-4 border-[#ff7a59] 
            overflow-hidden
          ">

            <h1 className="text-[2rem] font-light leading-tight text-[#1b1464] sm:text-[3.2rem] lg:text-[4.5rem]">
              The <span className="font-semibold">#1 Digital</span>
              <br />
              Growth Agency
            </h1>

            <p className="mt-4 text-base text-slate-600 sm:mt-6 sm:text-lg">
              We drive growth through strategy-led digital marketing — from high-performing websites to SEO, paid media, and conversion optimization.
            </p>

            <a
              href="mailto:contact@octopulse.in?subject=Website%20&%20Digital%20Marketing%20Inquiry&body=Hello%20Octopulse%20Team,%0D%0A%0D%0AI%20am%20reaching%20out%20to%20discuss%20my%20website%20and%20digital%20marketing%20requirements.%0D%0A%0D%0AI%20am%20interested%20in%20services%20such%20as%20brand%20strategy,%20website%20design,%20performance%20marketing,%20and%20organic%20growth.%0D%0A%0D%0APlease%20share%20details%20on%20how%20Octopulse%20can%20help%20scale%20my%20business%20effectively.%0D%0A%0D%0AI%20would%20love%20to%20schedule%20a%20discussion%20to%20understand%20your%20approach%20and%20process.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]%0D%0A[Your%20Business%20Name]"
              className="mt-6 sm:mt-8 inline-block rounded-full bg-[#ff7a59] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition hover:opacity-90"
            >
              Discuss your website →
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

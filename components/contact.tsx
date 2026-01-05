"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

/* ================= SECTION FLAG BACKGROUNDS ================= */

const bgVariants = {
  london:
    "bg-[radial-gradient(circle_at_top_left,rgba(1,33,105,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(200,16,46,0.35),transparent_45%)]",
  india:
    "bg-[radial-gradient(circle_at_top_left,rgba(255,153,51,0.35),transparent_40%),radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(19,136,8,0.35),transparent_45%)]",
};

const placeholders = {
  name: "Enter your full name",
  email: "you@example.com",
  subject: "What would you like to discuss?",
  message: "Tell us briefly about your project or requirement…",
};


/* ================= FORM FLAG IMAGES ================= */

const formBgImages = {
  london: "/london.jpg",
  india: "/india.jpg",
};

/* ================= CONTACT ================= */

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [location, setLocation] = useState<"london" | "india">("london");
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  /* ---------- LOCATION DATA ---------- */
  const locationData = {
    london: {
      label: "London",
      flag: "gb",
      email: "contact@octopulse.co.uk",
      phone: "+44 XX XXXX XXXX",
      address: "London, United Kingdom",
      availability: "Available across Europe",
    },
    india: {
      label: "India",
      flag: "in",
      email: "astramarketing.in@gmail.com",
      phone: "+91 8261000137",
      address: "Nashik, India",
      availability: "Available across India",
    },
  };

  const active = locationData[location];

  /* ---------- ANIMATION ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- FORM ---------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setShowPopup(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`relative py-32 overflow-hidden transition-all duration-1000 ${bgVariants[location]}`}
    >
      {/* BASE DARK LAYER */}
      <div className="absolute inset-0 bg-[#1e0e87]/90" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Contact us
          </h2>
          <p className="text-lg text-[#d6d3ff] max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let’s start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* LEFT */}
          <div
            className={`space-y-10 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0 -translate-x-6"
            }`}
          >
            <LocationToggle location={location} setLocation={setLocation} />

            <Info
              icon={<Mail />}
              title={`Let’s talk (${active.label})`}
              text={active.email}
              href={`mailto:${active.email}`}
            />

            <Info
              icon={<Phone />}
              title="Call us"
              text={active.phone}
              href={`tel:${active.phone.replace(/\s+/g, "")}`}
            />

            <Info
              icon={<MapPin />}
              title="Find us"
              text={`${active.address}\n${active.availability}`}
            />

            <div className="flex items-center gap-3 text-[#d6d3ff]">
              <Clock className="w-5 h-5" />
              Usually responds within 24 hours
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden rounded-[28px] shadow-2xl border-0 transition-all duration-700">
              {/* FLAG IMAGE BACKGROUND */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(
                    to bottom right,
                    rgba(255,255,255,10.75),
                    rgba(255,255,255,0)
                  ), url(${formBgImages[location]})`,
                }}
              />


              {/* GLASS OVERLAY */}
              <div className="absolute inset-0  " />

              {/* CONTENT */}
              <div className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1a1446]">
                    Get in touch
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <InputField
                        label="First name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder={placeholders.name}
                      />

                      <InputField
                        label="Email address *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder={placeholders.email}
                      />
                    </div>

                    <InputField
                      label="Subject *"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={errors.subject}
                      placeholder={placeholders.subject}
                    />

                    <TextareaField
                      label="How can we help you? *"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      placeholder={placeholders.message}
                    />


                    <div className="flex gap-3 text-sm text-[#100c5d]">
                      <CheckCircle className="w-5 h-5 text-[#241b6a]" />
                      Your information is safe and will never be shared.
                    </div>

                    <Button className="w-full md:w-auto bg-[#ff6a3d] text-white rounded-full px-12 h-14 transition-all duration-300 hover:bg-[#2563eb] hover:shadow-[0_0_25px_rgba(37,99,235,0.45)]">
                      Get in touch →
                    </Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center backdrop-blur">
          <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-2xl">
            <h3 className="text-2xl text-[#1a1446] font-semibold mb-4">
              Almost there 🚀
            </h3>
            <p className="text-[#7d7ab5] mb-6">
              To connect better and understand your needs, please share a few
              more details with us.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                className="border rounded-xl"
                variant="outline"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-[#2563eb] text-white hover:bg-[#ff6a3d] border rounded-xl"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeqH98IJptOLt_W_gUEVk6isZgWsFT4HL0PTMr3w9xk_FVjqA/viewform?usp=dialog",
                    "_blank"
                  )
                }
              >
                Continue →
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= HELPERS ================= */

function Info({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode
  title: string
  text: string
  href?: string
}) {
  const Wrapper = href ? "a" : "div"

  return (
    <div>
      <h3 className="text-xl text-white font-semibold mb-3">{title}</h3>

      <Wrapper
        {...(href
          ? {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {})}
        className={`flex gap-3 text-[#d6d3ff] whitespace-pre-line ${
          href ? "hover:text-white transition cursor-pointer" : ""
        }`}
      >
        {icon}
        {text}
      </Wrapper>
    </div>
  )
}


function Flag({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      className="w-6 h-4 rounded-sm"
      alt={code}
    />
  );
}

function LocationToggle({ location, setLocation }: any) {
  return (
    <div className="inline-flex bg-white/10 rounded-full p-1 w-full max-w-[260px]">
      {["london", "india"].map((loc) => {
        const active = location === loc;
        return (
          <button
            key={loc}
            onClick={() => setLocation(loc)}
            className={`flex-1 flex items-center justify-center gap-2 h-12 rounded-full text-sm font-medium transition-all duration-300 ${
              active
                ? "bg-white text-[#1a1446] shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Flag code={loc === "london" ? "gb" : "in"} />
            {loc === "london" ? "London" : "India"}
          </button>
        );
      })}
    </div>
  );
}

function InputField({ label, error, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-[#1a1446] font-medium">
        {label}
      </label>

      <Input
        {...props}
        placeholder={props.placeholder}
        className="
          h-12
          rounded-2xl
          bg-white/35
          backdrop-blur-md
          border border-white/50
          text-[#1a1446]
          placeholder:text-[#1a1446]/60
          focus:border-[#ff6a3d]
          focus:ring-2
          focus:ring-[#ff6a3d]/40
          transition-all
        "
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}



function TextareaField({ label, error, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-[#1a1446] font-medium">
        {label}
      </label>

      <Textarea
        {...props}
        placeholder={props.placeholder}
        rows={4}
        className="
          rounded-2xl
          bg-white/35
          backdrop-blur-md
          border border-white/50
          text-[#1a1446]
          placeholder:text-[#1a1446]/60
          focus:border-[#ff6a3d]
          focus:ring-2
          focus:ring-[#ff6a3d]/40
          transition-all
        "
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

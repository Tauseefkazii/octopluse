"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Cog, Users, Zap, Shield, Rocket, ArrowRight, CheckCircle } from "lucide-react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Globe,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern technologies and scalable architecture.",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Cross-browser Compatibility",
        "Performance Optimization",
        "SEO Implementation",
        "Progressive Web Apps",
      ],
      technologies: ["Laravel", "PHP", "JavaScript", "MySQL", "HTML5", "CSS3"],
      gradient: "from-purple-500 to-pink-500",
      price: "Starting at $2,500",
      timeline: "4-8 weeks",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with clean architecture, security, and optimal performance.",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Server Architecture",
        "Authentication Systems",
        "Third-party Integrations",
        "Microservices Architecture",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Redis", "Docker", "AWS"],
      gradient: "from-blue-500 to-cyan-500",
      price: "Starting at $1,800",
      timeline: "3-6 weeks",
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Seamless integration of third-party APIs and custom API development for your applications.",
      features: [
        "Third-party API Integration",
        "Custom API Development",
        "Data Synchronization",
        "Webhook Implementation",
        "API Documentation",
        "Rate Limiting & Security",
      ],
      technologies: ["REST APIs", "GraphQL", "OAuth", "JWT", "Postman", "Swagger"],
      gradient: "from-green-500 to-teal-500",
      price: "Starting at $800",
      timeline: "1-3 weeks",
    },
    {
      icon: Shield,
      title: "Security & Optimization",
      description: "Comprehensive security audits and performance optimization for existing applications.",
      features: [
        "Security Audits",
        "Performance Analysis",
        "Code Review",
        "Database Optimization",
        "Vulnerability Assessment",
        "Speed Optimization",
      ],
      technologies: ["Security Tools", "Performance Monitoring", "Code Analysis", "Testing"],
      gradient: "from-red-500 to-orange-500",
      price: "Starting at $1,200",
      timeline: "2-4 weeks",
    },
    {
      icon: Cog,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your applications running smoothly.",
      features: [
        "Bug Fixes & Updates",
        "Performance Monitoring",
        "Security Updates",
        "Feature Enhancements",
        "Technical Support",
        "Backup & Recovery",
      ],
      technologies: ["Monitoring Tools", "Version Control", "Deployment", "Support Systems"],
      gradient: "from-indigo-500 to-purple-500",
      price: "Starting at $500/month",
      timeline: "Ongoing",
    },
    {
      icon: Rocket,
      title: "Consulting & Strategy",
      description: "Technical consulting and strategic planning for your web development projects.",
      features: [
        "Technical Architecture",
        "Technology Selection",
        "Project Planning",
        "Code Review",
        "Best Practices",
        "Team Training",
      ],
      technologies: ["Architecture Design", "Project Management", "Documentation", "Training"],
      gradient: "from-yellow-500 to-orange-500",
      price: "Starting at $150/hour",
      timeline: "Flexible",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and technical specifications.",
      icon: Users,
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating detailed technical architecture and system design.",
      icon: Code,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your solution with rigorous testing and quality assurance.",
      icon: Cog,
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "Deploying your application and ensuring smooth launch.",
      icon: Rocket,
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-transparent to-blue-50" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-lg font-semibold mb-4">
              <Zap className="w-5 h-5 text-purple-600" />
              Services
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              What I{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services tailored to bring your vision to life
            </p>
          </div>

          {/* Services grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge
                      className={`bg-gradient-to-r ${service.gradient} text-white px-3 py-1 text-xs font-semibold`}
                    >
                      Popular
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  {/* Pricing and timeline */}
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-600">Timeline: {service.timeline}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-4 h-4 text-green-500 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-all duration-300`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process section */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">My Development Process</h3>
              <p className="text-xl text-gray-600">A proven methodology for delivering exceptional results</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 z-0" />
                  )}

                  <Card className="relative z-10 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">{step.step}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/20 p-12">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Ideas?</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Let's discuss your project requirements and create something extraordinary together. I'm here to help
                  you build the perfect solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

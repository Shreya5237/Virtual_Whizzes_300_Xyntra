import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-light/10 to-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-6 gradient-text">About Us</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Easy Skill Enhancer is dedicated to transforming special education through innovative AR and VR technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="col-span-2">
            <div className="inline-block mb-4 bg-yellow-light/30 px-4 py-2 rounded-full">
              <span className="text-yellow-dark font-semibold">Our Purpose</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-dark">Our Mission</h2>
            <p className="text-lg mb-6 leading-relaxed">
              At Easy Skill Enhancer, we believe that every child deserves access to education that adapts to their
              unique needs. Our mission is to leverage cutting-edge AR and VR technologies to create immersive, engaging
              learning experiences that help autistic children develop essential life skills in a safe, controlled
              environment.
            </p>
            <p className="text-lg leading-relaxed">
              We work closely with special education professionals, therapists, and parents to ensure our solutions
              address real challenges and provide meaningful support for children with autism spectrum disorders.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-light/20 via-teal-light/20 to-orange-light/20 rounded-3xl p-12 mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-purple-light/50 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple">Research-Based</h3>
              <p className="text-lg">
                Our solutions are grounded in evidence-based research on autism spectrum disorders, special education
                methodologies, and immersive technology applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-teal-light/50 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal">User-Centered</h3>
              <p className="text-lg">
                We design with the end users in mind, creating intuitive interfaces that accommodate the unique sensory
                and cognitive needs of children with autism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-orange-light/50 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-dark">Collaborative</h3>
              <p className="text-lg">
                We work closely with educators, therapists, and families to ensure our solutions integrate seamlessly
                into existing educational and therapeutic frameworks.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Contact Us</h2>
        <div className="max-w-2xl mx-auto text-center bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-lg">
          <p className="text-xl mb-6">
            Interested in learning more about Easy Skill Enhancer or partnering with us? We'd love to hear from you!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-purple-light/50 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-lg">sec22cj027@sairamtap.edu.in</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-teal-light/50 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="text-lg">+91 8610556160</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


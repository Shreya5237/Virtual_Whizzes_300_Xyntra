import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Remove the gradient div and replace with Image */}
        <Image
          src="/images/Flux_Dev_A_realistic_digital_illustration_of_two_young_kids_en_2.jpeg"
          alt="Children learning with AR/VR"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center drop-shadow-lg">Easy Skill Enhancer</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl text-center drop-shadow-md">
              Empowering autistic children through immersive AR and VR learning experiences
            </p>
          </div>
          <Link href="/login">
            <Button
              size="lg"
              className="text-lg px-10 py-6 rounded-full bg-white text-purple hover:bg-purple-light hover:text-white transition-all duration-300 shadow-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 pattern-waves">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Our Innovative Approach</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* VR Feature */}
            <div className="bg-gradient-to-br from-purple-light/30 to-purple/10 p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-56 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/images/vr-image.webp"
                  alt="VR Learning"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover image-hover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-purple">Virtual Reality</h3>
              <p className="text-lg">
                Immersive environments that help children learn essential skills in a safe, controlled setting.
              </p>
            </div>

            {/* AR Feature */}
            <div className="bg-gradient-to-br from-teal-light/30 to-teal/10 p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-56 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/images/ar-image.png"
                  alt="AR Learning"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover image-hover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-teal">Augmented Reality</h3>
              <p className="text-lg">
                Interactive learning experiences that bring educational content to life in the physical world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-light/20 via-teal-light/20 to-orange-light/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 gradient-text">Trusted by Educators</h2>
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <svg className="w-16 h-16 mx-auto mb-6 text-purple opacity-30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl italic mb-8 text-gray-700">
              "Easy Skill Enhancer has transformed how we approach special education. The immersive experiences help our
              students engage with learning in ways we never thought possible."
            </blockquote>
            <p className="font-semibold text-xl text-purple">- Jaya sumathy 
            srishtika</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple via-teal to-orange text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Learning?</h2>
          <p className="text-xl mb-10">Join institutions already enhancing education with our AR and VR solutions.</p>
          <Link href="/login">
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-10 py-6 rounded-full bg-white text-purple hover:bg-purple-light hover:text-white border-none transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-light/10 to-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-6 gradient-text">Virtual Reality Learning Modules</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Immersive experiences designed specifically for children with autism to learn in a safe, controlled
          environment.
        </p>

        <div className="grid gap-24">
          {/* Familiarization Scene Module */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105">
              <Image
                src="/images/Screenshot 2025-03-04 140604.png"
                alt="Familiarization Scene"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <div className="inline-block mb-4 bg-purple-light/30 px-4 py-2 rounded-full">
                <span className="text-purple font-semibold">Module 1</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-purple">Familiarization Scene</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Designed to introduce autistic children to new environments, people, and objects in a safe, controlled
                virtual setting. This scene reduces anxiety and fear by providing gradual exposure, helping children
                build comfort, familiarity, and confidence before transitioning to real-world experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/70 backdrop-blur-sm border-none rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader className="p-5">
                    <CardTitle className="text-xl text-purple">Safe Environment</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 p-5">
                    <p>Controlled exposure to new stimuli without overwhelming sensory input</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/70 backdrop-blur-sm border-none rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader className="p-5">
                    <CardTitle className="text-xl text-purple">Gradual Progression</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 p-5">
                    <p>Step-by-step introduction to increasingly complex social situations</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Cognitive Learning Module */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4 bg-teal-light/30 px-4 py-2 rounded-full">
                <span className="text-teal font-semibold">Module 2</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-teal">Cognitive Learning</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Teach educational content like alphabet recognition, sentence formation, and colors, while integrating
                speech therapy to improve verbal skills.
              </p>
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-teal-light/30 to-white p-5 rounded-2xl shadow-md">
                  <h3 className="font-bold text-xl mb-2 text-teal">Alphabet and Word Recognition</h3>
                  <p>
                    Interactive flashcards and objects in the VR environment will help children learn letters and words.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-teal-light/30 to-white p-5 rounded-2xl shadow-md">
                  <h3 className="font-bold text-xl mb-2 text-teal">Speech Monitoring</h3>
                  <p>
                    Machine learning algorithms will monitor the child's pronunciation and provide real-time feedback on
                    accuracy.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-teal-light/30 to-white p-5 rounded-2xl shadow-md">
                  <h3 className="font-bold text-xl mb-2 text-teal">Sentence Formation</h3>
                  <p>
                    Children will learn how to construct simple sentences and engage in one-to-one conversations with
                    virtual characters.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-teal-light/30 to-white p-5 rounded-2xl shadow-md">
                  <h3 className="font-bold text-xl mb-2 text-teal">Color Identification</h3>
                  <p>
                    Through games and visual aids, children will be taught colors and encouraged to associate them with
                    real-world objects.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-xl order-1 md:order-2 transform transition-all duration-500 hover:scale-105">
              <Image
                src="/images/Untitled design (2).png"
                alt="Cognitive Learning"
                width={500}
                height={375}
                className="w-full h-auto object-contain mx-auto"
                priority
                quality={100}
              />
            </div>
          </section>

          {/* Practical Skills Module */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105">
              <Image
                src="/images/Untitled design (3).png"
                alt="Practical Skills"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>
            <div>
              <div className="inline-block mb-4 bg-orange-light/30 px-4 py-2 rounded-full">
                <span className="text-orange-dark font-semibold">Module 3</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-orange-dark">Practical Skills</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Purpose: Simulate real-life tasks that children may encounter in daily life, helping them to practice
                and prepare for real-world situations.
              </p>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-dark">Task Simulations:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-orange-light/50 rounded-full p-2 mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-dark"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">Buying chocolate from a virtual store</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-light/50 rounded-full p-2 mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-dark"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">Crossing a busy road safely</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-light/50 rounded-full p-2 mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-dark"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">Asking for help in public spaces</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-light/30 to-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-xl mb-2 text-orange-dark">Real-World Simulation</h3>
                <p className="text-lg">
                  The VR environment mimics real-world settings, ensuring that children can generalize these learned
                  behaviors to actual daily life.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


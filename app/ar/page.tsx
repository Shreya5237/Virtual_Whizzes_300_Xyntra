import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ARPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-light/10 to-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-6 gradient-text">Augmented Reality Learning</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          AR is used to make learning more interactive by bringing content to life in the physical world.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {/* Learning Alphabets */}
          <Card className="overflow-hidden bg-white/70 backdrop-blur-sm border-none rounded-3xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-64 overflow-hidden">
              <Image
                src="/images/alphabet-learning.jpeg"
                alt="Interactive Alphabet Learning"
                width={500}
                height={500}
                className="w-full h-full object-cover image-hover"
                priority
                quality={100}
              />
            </div>
            <CardHeader className="pb-0">
              <div className="inline-block mb-2 bg-teal-light/30 px-3 py-1 rounded-full">
                <span className="text-teal font-medium">Interactive Learning</span>
              </div>
              <CardTitle className="text-2xl text-teal">Learning Alphabets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Children can visualize 3D models of letters and interact with them by touching or pointing to them in
                the physical world. This interactive approach makes alphabet learning engaging and memorable.
              </p>
            </CardContent>
          </Card>

          {/* Animals and Birds */}
          <Card className="overflow-hidden bg-white/70 backdrop-blur-sm border-none rounded-3xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="h-64 overflow-hidden rounded-xl">
                <Image
                  src="/images/alphabet-ar-1.jpeg"
                  alt="Lion AR Model"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover image-hover"
                  priority
                  quality={100}
                />
              </div>
              <div className="h-64 overflow-hidden rounded-xl">
                <Image
                  src="/images/alphabet-ar-2.jpeg"
                  alt="Parrot AR Model"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover image-hover"
                  priority
                  quality={100}
                />
              </div>
            </div>
            <CardHeader className="pb-0">
              <div className="inline-block mb-2 bg-orange-light/30 px-3 py-1 rounded-full">
                <span className="text-orange-dark font-medium">3D Exploration</span>
              </div>
              <CardTitle className="text-2xl text-orange-dark">Animals and Birds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                When children learn about animals or birds, AR provides detailed 3D representations that can be rotated
                and explored. This hands-on experience helps children understand animal characteristics and behaviors.
              </p>
            </CardContent>
          </Card>

          {/* Textbook Integration */}
          <Card className="overflow-hidden bg-white/70 backdrop-blur-sm border-none rounded-3xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-64 overflow-hidden">
              <Image
                src="/images/textbook-ar-new.png"
                alt="Textbook Integration AR"
                width={500}
                height={500}
                className="w-full h-full object-cover image-hover"
                priority
                quality={100}
              />
            </div>
            <CardHeader className="pb-0">
              <div className="inline-block mb-2 bg-purple-light/30 px-3 py-1 rounded-full">
                <span className="text-purple font-medium">Enhanced Learning</span>
              </div>
              <CardTitle className="text-2xl text-purple">Textbook Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                5th and 6th standard Social Science and Science content is enhanced through AR, where children can see
                real-world examples and visuals tied to the textbook material, making learning more tangible and
                engaging.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">How AR Enhances Learning</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-teal-light/40 to-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-teal">Spatial Understanding</h3>
                <p className="text-lg">
                  AR helps children understand spatial concepts by allowing them to manipulate and interact with 3D
                  objects in their physical environment.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-light/40 to-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-dark">Engagement & Attention</h3>
                <p className="text-lg">
                  The interactive nature of AR captures and maintains children's attention, making learning more
                  engaging and effective.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-light/40 to-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple">Sensory Integration</h3>
                <p className="text-lg">
                  AR provides controlled sensory experiences that help children with autism process and integrate
                  sensory information.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105">
              <Image
                src="/images/ar-learning-new.png"
                alt="AR Learning Benefits"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                priority
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


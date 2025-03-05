"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OurWorkPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light/10 to-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-6 gradient-text">Our Work</h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          See how Easy Skill Enhancer is making a difference in the lives of children with autism.
        </p>

        <Tabs defaultValue="testimonials" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/50 backdrop-blur-sm p-2 rounded-full">
            <TabsTrigger
              value="testimonials"
              className="rounded-full data-[state=active]:bg-pink data-[state=active]:text-white"
            >
              Expert Testimonials
            </TabsTrigger>
            <TabsTrigger
              value="field"
              className="rounded-full data-[state=active]:bg-teal data-[state=active]:text-white"
            >
              Field Implementation
            </TabsTrigger>
            <TabsTrigger
              value="prototype"
              className="rounded-full data-[state=active]:bg-purple data-[state=active]:text-white"
            >
              Prototype Demo
            </TabsTrigger>
          </TabsList>

          {/* Expert Testimonials Tab */}
          <TabsContent value="testimonials">
            <Card className="border-none bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-pink">Expert Endorsement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="overflow-hidden rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105">
                    <Image
                      src="/images/dr-expert.png"
                      alt="Dr. Sugaparaneetharan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                      unoptimized={true}
                    />
                  </div>
                  <div>
                    <div className="inline-block mb-4 bg-pink-light/30 px-4 py-2 rounded-full">
                      <span className="text-pink font-semibold">Medical Expert</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-pink">Dr. Sugaparaneetharan</h3>
                    <p className="text-lg mb-6 leading-relaxed">
                      Dr. Sugaparaneetharan confirmed that Ahanaa Hospital would be one of the first customers to adopt
                      the tool. The hospital plans to integrate it into their therapy programs to support children with
                      developmental challenges.
                    </p>
                    <p className="text-lg leading-relaxed">
                      This collaboration underscores the practical relevance and therapeutic value of the product,
                      marking a critical milestone in its journey toward wider adoption.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Field Implementation Tab */}
          <TabsContent value="field">
            <Card className="border-none bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-teal">Field Visit to Eden Preschool</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-block mb-4 bg-teal-light/30 px-4 py-2 rounded-full">
                      <span className="text-teal font-semibold">Field Research</span>
                    </div>
                    <p className="text-lg mb-6 leading-relaxed">
                      A field visit was conducted to Eden Preschool, an early childhood education institution
                      specializing in inclusive learning for children, including those with autism and intellectual
                      disabilities.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed">
                      The visit aimed to understand the specific needs of the children and educators, assess the
                      potential of implementing VR-based educational tools, and gather feedback for product enhancement.
                    </p>
                    <h3 className="text-2xl font-bold mb-4 text-teal">Key Observations:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-teal-light/50 rounded-full p-2 mr-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-teal"
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
                        <span className="text-lg">
                          The preschool caters to a diverse group of children, with a particular focus on those with
                          developmental delays.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-light/50 rounded-full p-2 mr-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-teal"
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
                        <span className="text-lg">
                          The educators expressed interest in using technology to enhance social interaction, learning
                          engagement, and emotional development among the children.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-light/50 rounded-full p-2 mr-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-teal"
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
                        <span className="text-lg">
                          The potential for VR-based tools to support individualized learning and behavioral development
                          was identified as a key area of impact.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105">
                    <Image
                      src="/images/eden-preschool-visit.png"
                      alt="Eden Preschool Field Visit"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                      priority
                      unoptimized={true}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Prototype Demo Tab */}
          <TabsContent value="prototype">
            <Card className="border-none bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-purple">Prototype Demonstration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-lg mb-8">
                  {videoPlaying ? (
                    <video
                      className="w-full h-full"
                      controls
                      autoPlay
                      src="/videos/autism-prototype.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                      <button
                        onClick={() => setVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-24 h-24 bg-purple/80 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-purple">
                          <div className="w-0 h-0 border-t-[24px] border-t-transparent border-l-[36px] border-l-white border-b-[24px] border-b-transparent ml-2"></div>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
                <div className="mt-8">
                  <div className="inline-block mb-4 bg-purple-light/30 px-4 py-2 rounded-full">
                    <span className="text-purple font-semibold">Product Demo</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-purple">About Our Prototype</h3>
                  <p className="text-lg mb-6 leading-relaxed">
                    Our prototype demonstrates the core functionality of the Easy Skill Enhancer platform, showcasing
                    how VR and AR technologies can be used to create immersive learning experiences for children with
                    autism.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The video highlights key features including the familiarization scene, cognitive learning modules,
                    and practical skills training in action with real users.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


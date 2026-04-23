"use client"
import Link from "next/link"

const coachingPrinciples = [
  {
    title: "Force & Leverage",
    description: "Joint angles determine everything. We engineer your positioning to maximize tension where it actually counts."
  },
  {
    title: "Human Physiology",
    description: "Your nervous system, muscles, and joints operate as one. We train the whole system, built to last."
  },
  {
    title: "Execution > Theory",
    description: "Wrong pattern, wrong results. We lock in movement quality first and let the weight follow."
  },
  {
    title: "Nutrition, Engineered",
    description: "We build a nutrition strategy around your life, not a meal plan you'll abandon in two weeks."
  },
  {
    title: "Data-Driven Decisions",
    description: "Feelings lie, data doesn't. We track what actually predicts progress and adjust as your body responds."
  }
]

const masterclassVideos = [
  {
    title: "BICEPS MASTERCLASS: Engineer Breakdown",
    url: "https://www.youtube.com/embed/CPQprpryOaQ?rel=0"
  },
  {
    title: "LATS MASTERCLASS: Advanced Muscle Growth Guide",
    url: "https://www.youtube.com/embed/oK6TY1143EI?rel=0"
  },
  {
    title: "HAMSTRINGS MASTERCLASS: Advanced Muscle Growth Guide",
    url: "https://www.youtube.com/embed/C-ylviVmKWE?rel=0"
  }
]

export function TestimonialsSection() {
  return (
    <section id="my-approach" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Engineering the Body Section */}
        <div className="mb-20 py-20">
          {/* Header Card Container */}
          <div className="bg-black rounded-lg p-8 md:p-12 mb-12 border border-gray-800">
            <div className="text-center">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-yellow-300 mb-4 uppercase tracking-wide drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
                Engineering the Body
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Applied physics, physiology, and data built into your training.
              </p>
              <p className="text-base text-gray-400 max-w-2xl mx-auto">
                Most coaches give you a program. I build a system based on how your body actually works.
              </p>
            </div>
          </div>
          
          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top 3 Cards */}
            {coachingPrinciples.slice(0, 3).map((principle, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-lg border-t-4 border-t-yellow-400 border border-gray-800 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <h3 className="font-montserrat font-bold text-xl text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom 2 Cards - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto mt-6">
            {coachingPrinciples.slice(3, 5).map((principle, index) => (
              <div
                key={index + 3}
                className="bg-black p-8 rounded-lg border-t-4 border-t-yellow-400 border border-gray-800 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <h3 className="font-montserrat font-bold text-xl text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Muscle Masterclasses Section */}
        <div className="bg-black rounded-lg py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-yellow-400 mb-2 uppercase tracking-wide">
              Muscle Masterclasses
            </h2>
            <p className="text-lg text-gray-300">
              Free education to help you train smarter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {masterclassVideos.map((video, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border-t-4 border-t-yellow-400 border border-gray-800 mb-4 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="font-montserrat font-bold text-white text-sm leading-snug">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonial CTA */}
        <div className="text-center">
          
        </div>
      </div>
    </section>
  )
}

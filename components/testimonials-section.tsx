"use client"
import Link from "next/link"

const coachingPrinciples = [
  {
    title: "Science over bro-science",
    description: "Every program is built on peer-reviewed principles, not gym folklore."
  },
  {
    title: "Specificity first",
    description: "Your training is designed around your body, schedule, and goals, not a template."
  },
  {
    title: "Sustainable over extreme",
    description: "Crash diets and brutal cuts create rebound. I build habits that last."
  },
  {
    title: "Technique is the shortcut",
    description: "Most people plateau because of form, not effort. We fix the root cause."
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
        {/* How I Coach Section */}
        <div className="mb-20">
          <h2 className="font-montserrat font-bold text-3xl text-center text-foreground mb-12">
            How I Coach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coachingPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-lg border-l-4 border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                <h3 className="font-montserrat font-bold text-lg text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Muscle Masterclasses Section */}
        <div className="bg-black rounded-lg p-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-white mb-2">
              Muscle Masterclasses
            </h2>
            <p className="text-lg text-gray-300">
              Free education to help you train smarter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {masterclassVideos.map((video, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black border-t-4 border-t-yellow-400 border border-gray-800 mb-4 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
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

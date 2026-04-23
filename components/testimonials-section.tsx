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
                className="bg-muted p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300"
              >
                <h3 className="font-montserrat font-bold text-lg text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Muscle Masterclasses Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-foreground mb-2">
              Muscle Masterclasses
            </h2>
            <p className="text-lg text-muted-foreground">
              Free education to help you train smarter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Video */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/PXUatSBHQQM"
                title="Muscle Masterclass 1"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Second Video */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/yakMNoy2PlY"
                title="Muscle Masterclass 2"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Video Testimonial CTA */}
        <div className="text-center">
          
        </div>
      </div>
    </section>
  )
}

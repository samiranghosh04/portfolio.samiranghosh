const testimonials = [
  {
    quote:
      "Samiran consistently demonstrates strong architectural thinking. His code is structured, scalable, and production-ready.",
    name: "Ujjal Ray",
    featured: true
  },
  {
    quote:
      "He brings clarity to complex systems. His attention to maintainability and performance stands out in collaborative environments.",
    name: "Aman Prasad Shah",
  },
  {
    quote:
      "Reliable, technically rigorous, and thoughtful in execution. A strong contributor to enterprise-grade development workflows.",
    name: "Ajay Tirkey",
  },
  {
    quote:
      "He is someone who values ownership and feedback. He has a methodical approach to architecture and is really good at understanding and explaining complex things with ease.",
    name: "Gourab Roy",
  }
];

function TestimonialCard({
  quote,
  name,
  featured = false
}: {
  quote: string;
  name: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`
        rounded-[32px]
        bg-neutral-50
        transition-all duration-500
        hover:shadow-xl
        ${featured ? "p-16 md:p-20" : "p-10"}
      `}
    >
      <p
        className={`
          leading-[1.7]
          ${featured ? "text-2xl md:text-3xl" : "text-lg"}
          text-neutral-800
        `}
      >
        “{quote}”
      </p>

      <div className="mt-10">
        <p className="text-base font-medium text-neutral-900">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const featured = testimonials.find(t => t.featured);
  const others = testimonials.filter(t => !t.featured);

  return (
    <section className="px-6 py-40 bg-white">

      <div className="max-w-6xl mx-auto">

        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-28">
          What People Say
        </h3>

        {/* Featured */}
        {featured && (
          <div className="max-w-4xl mx-auto mb-24 animate-fade-up">
            <TestimonialCard {...featured} featured />
          </div>
        )}

        {/* Supporting Grid */}
        <div className="grid md:grid-cols-2 gap-12 animate-fade-up">
          {others.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

      </div>
    </section>
  );
}
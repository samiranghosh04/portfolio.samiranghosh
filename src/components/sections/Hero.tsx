export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          Software engineering,
          <span> executed with precision.</span>
        </h1>

        <p>
          I design scalable systems, architect resilient frontends,
          and build production-grade platforms meant to last.
        </p>

        <div className="hero-cta">
          <a href="https://docs.google.com/document/d/1toa68-ZLlS1Kc0SCntXkTCGM-bjBs8bDUkJEonwt0S0/edit?usp=sharing" className="primary bg-pink-950">
            View Resume
          </a>

          <a href="mailto:samiranghoshofficial04@gmail.com" className="secondary border-2 border-pink-950 text-pink-950 px-3.5">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}


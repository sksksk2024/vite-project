import work from './../images/illustration-working.svg';

const Hero: React.FC = () => {
  return (
    <section
      data-testid="hero"
      className="max-w-container-1440 mx-auto static lg:relative left-128I z-50 flex flex-col lg:flex-row-reverse justify-center lg:justify-around items-center gap-1 lg:gap-4 p-32P lg:pl-0 lg:pr-16P lg:py-32P mb-128M"
    >
      <img className="lg:w-2/4 hidden lg:block" src={work} aria-hidden="true" />
      <section className="lg:w-2/4 flex flex-col justify-start text-center lg:items-start lg:text-start w-[100%]">
        <h1 className="font-bold text-black text-2xl lg:text-4xl leading-10 lg:leading-2xs-tight mx-auto lg:mx-0">
          More than just shorter links
        </h1>
        <p className="text-gray-500 mx-auto lg:mx-0">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="w-[90%] font-semibold text-black text-white bg-cyan-600 rounded-30BR p-16P px-32P my-16M hover:opacity-60 mx-auto lg:mx-0">
          Get Started
        </button>
      </section>
    </section>
  );
};

export default Hero;

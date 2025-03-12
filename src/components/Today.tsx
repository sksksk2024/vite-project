const Today: React.FC = () => {
  return (
    <div
      id="link-shortener-today"
      className="flex flex-col justify-center items-center gap-6 bg-dark-violet px-16P py-48P text-center"
    >
      <h2 className="font-bold text-white text-2xl">Boost your links today</h2>
      <button className="hover:brightness-125 text-black text-white bg-cyan-700 rounded-30BR px-48P py-16P">
        Get Started
      </button>
    </div>
  );
};

export default Today;

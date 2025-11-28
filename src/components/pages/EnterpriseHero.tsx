const EnterpriseHero = () => {
  return (
    <section className="w-full lg:h-screen h-[55vh] bg-primary flex flex-col items-center pt-16 sm:pt-20 md:pt-24 px-4">
      
      {/* Heading */}
      <h1 className="
        text-white 
        text-center 
        max-w-5xl 
        font-black 
        text-[28px] 
        leading-[36px]
        sm:text-[34px] sm:leading-[44px]
        md:text-[42px] md:leading-[54px]
        lg:text-[50px] lg:leading-[60px]
      ">
        Built for Scale. Trusted for Accuracy.
        <br />
        Designed for Enterprises.
      </h1>

      {/* White Content Container */}
      <div className="
        w-full 
        max-w-5xl 
        mt-10 sm:mt-12 md:mt-16
        bg-white 
        rounded-2xl 
        h-[220px] sm:h-[260px] md:h-[314px]
        shadow-lg
      " />
    </section>
  );
};

export default EnterpriseHero;

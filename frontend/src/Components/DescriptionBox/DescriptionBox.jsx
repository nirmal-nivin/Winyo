import React from "react";

const DescriptionBox = () => {
  return (
    <div className="my-8 sm:my-12 md:my-16 lg:my-20 xl:my-28 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-40">
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center justify-center font-medium text-lg sm:text-xl w-full sm:w-36 h-12 sm:h-16 border border-black">
          Description
        </div>
        <div className="flex items-center justify-center font-medium text-lg sm:text-xl w-full sm:w-36 h-12 sm:h-16 border border-black">
          Reviews (120)
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 border border-black p-4 sm:p-8 md:p-10 lg:p-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 text-base sm:text-lg md:text-xl">
        <p>
          Camo printed shirt, regular fit long sleeve with branding detail at
          side seam and enzyme softner wash. Born in 1973 on the streets of
          portobello, worn in the world today. As a denim pioneer we have
          consistently reinvented the definition of denim to keep up with the
          trends. We are an iconic brand that is synonymously associated with
          denim and limitless creativity. Pepe jeans london gives you the
          foundations to exude self-confidence, uniqueness and authenticity.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

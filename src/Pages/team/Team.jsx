import React from 'react'

function Team() {
  return (
    <div
      name="team"
      className="pt-5 dark:lg:pt-20 lg:h-[500px] md:h-full mt-20"
    >
      <h1 className="lg:text-5xl text-3xl text-center  dark:text-white text-black font-bold tracking-wide mt-5">
        Team
      </h1>
      <div className="grid lg:grid-cols-3 font-[poppins] text-white m-10  justify-center items-center text-center gap-3">
        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
            <div className="px-4">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1676277613/Wahab_-_Edited_eesa70.png"
                alt="profileimage"
                className="shadow rounded-full max-w-full  align-middle w-[130px] h-[130px] hover:scale-125 transistion-all duration-300"
                id="profile_img"
              />
            </div>
          </div>
          <h1 className="font-bold text-black dark:text-white mt-2">
            Ogunnaike Wahab B
          </h1>
          <p className="text-gray-500 text-sm leading-5">CEO</p>
        </div>

        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
            <div className="px-4">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1676277589/1e26b4d9-9075-4315-84ba-09550a2f9b06_juve2g.jpg"
                alt="profileimage"
                className="shadow rounded-full max-w-full object-cover align-middle w-[130px] h-[130px] hover:scale-125 transistion-all duration-300"
                id="profile_img"
              />
            </div>
          </div>
          <h1 className="font-bold text-black dark:text-white mt-2">
            Akanji Oluwaleke J
          </h1>
          <p className="text-gray-500 text-sm leading-5">CTO</p>
        </div>

        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
            <div className="px-4">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1676277750/profile_mgkeef.jpg"
                alt="profileimage"
                className="shadow rounded-full max-w-full align-middle w-[130px] h-[130px] hover:scale-125 transistion-all duration-300"
                id="profile_img"
              />
            </div>
          </div>
          <h1 className="font-bold text-black dark:text-white mt-2">
            Egwuenu Precious{" "}
          </h1>
          <p className="text-gray-500 text-sm leading-5">Frontend developer</p>
        </div>
      </div>
    </div>
  );
}

export default Team
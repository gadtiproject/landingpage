import React from 'react'

function Team() {
  return (
    <div name="team" className="lg:h-[400px] md:h-full mt-24 lg:mt-[5%]">
      <h2 className="lg:text-5xl text-3xl text-center  dark:text-white text-black font-bold tracking-wide mt-5">
        Team
      </h2>
      <div className="grid lg:grid-cols-4  text-white m-10  justify-center items-center text-center gap-3">
        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
            <div className="px-4">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1678092434/WhatsApp_Image_2023-02-27_at_3.18.50_PM_hrqhk6.jpg"
                alt="profileimage"
                className="shadow rounded-full max-w-full align-middle w-[130px] h-[130px] object-cover hover:scale-125 transistion-all duration-300"
                id="profile_img"
              />
            </div>
          </div>
          <h2 className="font-bold text-black dark:text-white mt-2">
            Ogunnaike Wahab B
          </h2>
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
          <h2 className="font-bold text-black dark:text-white mt-2">
            Akanji Oluwaleke J
          </h2>
          <p className="text-gray-500 text-sm leading-5">CTO</p>
        </div>

        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
            <div className="px-4">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1678182227/WhatsApp_Image_2023-03-07_at_10.41.36_AM_tpggnq.jpg"
                alt="profileimage"
                className="shadow rounded-full max-w-full align-middle w-[130px] h-[130px] hover:scale-125 transistion-all duration-300 object-cover"
                id="profile_img"
              />
            </div>
          </div>
          <h2 className="font-bold text-black dark:text-white mt-2">
            Egwuenu Precious{" "}
          </h2>
          <p className="text-gray-500 text-sm leading-5">Frontend developer</p>
        </div>

        <div className="p-3" data-aos="fade-up">
          <div className="flex flex-wrap justify-center mt-8">
            <div className="px-4">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1678182077/WhatsApp_Image_2023-03-06_at_2.15.40_PM_1_nlurqa.jpg"
                alt="profileimage"
                className="shadow rounded-full max-w-full align-middle w-[130px] h-[130px] hover:scale-125 transistion-all duration-300 object-cover"
                id="profile_img"
              />
            </div>
          </div>
          <h2 className="font-bold text-black dark:text-white mt-2">
            John Abraham
          </h2>
          <p className="text-gray-500 text-sm leading-5">Frontend developer</p>
        </div>
      </div>
    </div>
  );
}

export default Team
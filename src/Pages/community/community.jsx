const Community = () => {
    return (
      <div className="mx-auto w-[80%] text-center items-center justify-center place-items-center grid h-[200px] my-[5%]">
        <h6 className="lg:text-4xl">Join the community</h6>
        <div className="text-[#68778D]">
          <p className="lg:w-[600px] w-[389px]">
            Stay connected, join other global users of{" "}
            <span className="text-[#0BC0DF]">Regiz</span>, and tell us what you
            think
          </p>
          <p className="lg:w-[600px] w-[389px]">
            You also get rewards, exclusive invites, and updates before anyone
            else.
          </p>
        </div>

        <button>
          <a
            href="https://t.me/regizcommunity"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#0BC0DF] rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0197B2] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0197B2] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Join community!
            </span>
          </a>
        </button>
      </div>
    );
}
 
export default Community;
import { timelineData } from "@/contents/timeline";

const About = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          {/* Línea vertical */}
          <div className="hidden sm:block w-1 bg-secondary absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div className="mt-6 sm:mt-0 sm:mb-12" key={index}>
              <div className="flex flex-col sm:flex-row items-center">
                <div
                  className={`flex w-full mx-auto items-center ${
                    item.side === "right" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`w-full sm:w-[47%] ${
                      item.side === "right" ? "sm:pl-8" : "sm:pr-8"
                    }`}
                  >
                    <div className="p-4 bg-primary rounded shadow">
                      <h3 className="font-bold text-lg mb-1 mt-6 sm:mt-0">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{item.year}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Icono centrado */}
                <div className="rounded-full bg-secondary border-white border-4 w-16 h-16 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

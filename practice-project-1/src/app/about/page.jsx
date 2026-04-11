const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center">
        About our apps
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        A visual collection of our most recent works - each piece crafted with
        intention, emotion and style.
      </p>

      {/* Content */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-10 relative">
        
        {/* Background blur */}
        <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
          alt="About"
          className="max-w-sm w-full rounded-xl h-auto"
        />

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-semibold">
            Our Latest Features
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Ship Beautiful Frontends Without the Overhead — Customizable,
            Scalable and Developer-Friendly UI Components.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-10 mt-6">

            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt="fast"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Lightning-Fast Performance
                </h3>
                <p className="text-sm text-slate-500">
                  Built with speed — minimal load times and optimized.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt="design"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Beautifully Designed Components
                </h3>
                <p className="text-sm text-slate-500">
                  Modern, pixel-perfect UI components ready for any project.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt="integration"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Plug-and-Play Integration
                </h3>
                <p className="text-sm text-slate-500">
                  Simple setup with support for React, Next.js and Tailwind CSS.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
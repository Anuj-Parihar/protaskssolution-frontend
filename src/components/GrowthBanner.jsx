import { ArrowRight } from "lucide-react"; 
import { Link } from "react-router-dom"; // ✅ Import Link

const GrowthBanner = () => {
  return (
    <div className="w-full bg-gradient-to-b via-gray-300 to-gray-500 rounded-md py-16 flex flex-col items-center justify-center text-center px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
        Ready to Grow Faster?
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        Discover new opportunities and scale your success with expert-driven solutions tailored for your growth journey.
      </p>

      {/* ✅ Use Link for internal navigation */}
      <Link
        to="/contact"
        className="inline-flex items-center bg-gray-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transition"
      >
        Call to action
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
};

export default GrowthBanner;

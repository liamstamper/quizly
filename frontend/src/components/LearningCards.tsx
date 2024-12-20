import {
  FaBookmark,
  FaClipboardList,
  FaFile,
  FaChartBar,
} from "react-icons/fa";

const LearningCards = () => {
  const cards = [
    {
      title: "AI-Driven Learning",
      icon: <FaBookmark size={32} className="text-blue-600" />,
      bgColor: "bg-blue-600",
      textColor: "text-white",
      content: (
        <p className="text-lg font-medium">
          Get personalized feedback when you miss a question. Our AI identifies
          gaps and provides targeted help to boost your understanding.
        </p>
      ),
    },
    {
      title: "Study Smarter",
      icon: <FaClipboardList size={32} className="text-blue-600" />,
      bgColor: "bg-violet-600",
      textColor: "text-white",
      content: (
        <p className="text-lg font-medium">
          Generate custom study guides with AI. Focus on topics you need the
          most help with, and learn efficiently.
        </p>
      ),
    },
    {
      title: "AI-Generated Questions",
      icon: <FaFile size={32} className="text-blue-600" />,
      bgColor: "bg-blue-500",
      textColor: "text-white",
      content: (
        <p className="text-lg font-medium">
          Let AI do the work! Automatically create challenging, tailored
          questions to enhance your learning experience.
        </p>
      ),
    },
    {
      title: "Track Your Progress",
      icon: <FaChartBar size={32} className="text-blue-600" />,
      bgColor: "bg-violet-500",
      textColor: "text-white",
      content: (
        <p className="text-lg font-medium">
          Monitor your performance with detailed reports and progress tracking.
          Watch your skills improve over time!
        </p>
      ),
    },
  ];

  return (
    <section className="py-16 relative z-10 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 p-6 max-w-[320px] min-h-[300px] flex flex-col justify-between ${
              card.bgColor
            } ${card.textColor || "text-gray-900"}`}
          >
            {/* Icon and Title */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md">
                  {card.icon}
                </div>
              </div>
              <h2 className="text-xl font-bold">{card.title}</h2>
            </div>

            {/* Content */}
            <div className="flex-grow flex items-center justify-center">
              {card.content}
            </div>

            {/* Footer CTA */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningCards;

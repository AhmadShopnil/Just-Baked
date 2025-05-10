export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex rounded-t-lg text-sm md:text-md">
      {["description", "questions"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-2 px-4 font-medium ${
            tab === "description" ? "rounded-tl-xl" : "rounded-tr-xl"
          } ${activeTab === tab ? "bg-[#724B00] text-white" : "bg-gray-100"}`}
        >
          {tab === "description" ? "DESCRIPTION" : "QUESTIONS ABOUT THIS PRODUCT"}
        </button>
      ))}
    </div>
  );
}

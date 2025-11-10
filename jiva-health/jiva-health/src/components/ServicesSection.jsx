const services = [
  {
    title: "Online Consultation",
    desc: "Book appointments and consult with top doctors from your home.",
    icon: "💻",
  },
  {
    title: "24/7 Support",
    desc: "Get health guidance anytime through our expert support system.",
    icon: "🕐",
  },
  {
    title: "Trusted Specialists",
    desc: "Access verified, experienced doctors across multiple fields.",
    icon: "🩺",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

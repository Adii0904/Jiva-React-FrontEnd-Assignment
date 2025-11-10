export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1717497932377-7758b8d5b45e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1150"
          alt="About Jiva Health"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Jiva Health
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Jiva Health, we are dedicated to bringing accessible, quality
            healthcare to everyone. Our platform connects patients with trusted
            doctors and specialists, ensuring personalized care at every step.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

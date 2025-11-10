import { doctors } from "../data/doctor";
import DoctorCard from "../components/DoctorCard";

export default function Doctors() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Doctors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </section>
  );
}

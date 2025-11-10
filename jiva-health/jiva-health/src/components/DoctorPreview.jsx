import { doctors } from "../data/doctor";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";

export default function DoctorPreview() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Meet Our Experts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {doctors.slice(0, 3).map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
      <Link
        to="/doctors"
        className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View All Doctors
      </Link>
    </section>
  );
}

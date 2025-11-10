import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-lg transition">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />
      <h3 className="mt-3 text-lg font-semibold">{doctor.name}</h3>
      <p className="text-gray-500 text-sm">{doctor.specialty}</p>
      <Link
        to={`/doctor/${doctor.id}`}
        className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View Profile
      </Link>
    </div>
  );
}

import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/doctor";

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-2xl font-bold mb-4">Doctor not found</h2>
        <Link to="/doctors" className="text-blue-600 underline">
          Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {doctor.name}
            </h2>
            <p className="text-blue-600 text-lg font-medium mb-2">
              {doctor.specialty}
            </p>
            <p className="text-gray-600 mb-4">
              {doctor.experience} of experience
            </p>
            <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/doctors"
            className="text-blue-600 underline hover:text-blue-800"
          >
            ← Back to all doctors
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useData } from "../App"; // Import the useData hook

export default function Results() {
  const { details } = useData(); // Get details from context

  if (!details || details.length === 0) {
    return <div  > No information available.</div>;
  }

  return (
    <div className="space-y-6 p-2 flex-wrap bg-black h-screen ">
      <div className="w-full h-24 bg-gray-800 text-white flex items-center p-10 shadow-sm ">
        <h2 className="text-2xl font-semibold ">Employer Information</h2>
      </div>
      {details.map((info, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg w-80 text-white">
          <p><strong>Name:</strong> {info.Name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Address:</strong> {info.address}</p>
        </div>
      ))}
    </div>
  );
}



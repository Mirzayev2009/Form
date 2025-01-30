export default function Results({ details }) {
    return (
      <div>
        <div>Information of employers</div>
        <div>
          {details.map((info, index) => (
            <div key={index} className="space-y-4">
              <p><strong>Name:</strong> {info.Name}</p>
              <p><strong>Email:</strong> {info.email}</p>
              <p><strong>Address:</strong> {info.address}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
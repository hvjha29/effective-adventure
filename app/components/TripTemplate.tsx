export default function TripTemplate({
  title,
  location,
  days,
  bestTime,
  bannerImage,
  summary,
  itinerary,
  tips,
}: {
  title: string;
  location: string;
  days: string;
  bestTime: string;
  bannerImage: string;
  summary: string;
  itinerary: { day: string; description: string }[];
  tips: string[];
}) {
  return (
    <main className="content-wrapper">
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      {/* Title */}
      <h1 style={{ marginBottom: "10px" }}>{title}</h1>
      <h3 style={{ color: "#777", marginTop: "0" }}>{location}</h3>

      {/* Summary Section */}
      <section
        style={{
          background: "#fafafa",
          padding: "20px",
          borderRadius: "12px",
          margin: "20px 0",
          border: "1px solid #e4e4e4",
        }}
      >
        <p><strong>Trip Duration:</strong> {days}</p>
        <p><strong>Best time to visit:</strong> {bestTime}</p>
        <p><strong>About this trip:</strong> {summary}</p>
      </section>

      {/* Itinerary */}
      <section>
        <h2>Itinerary</h2>

        {itinerary.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>{item.day}</h3>
            <p style={{ lineHeight: "1.7", margin: "0" }}>
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* Tips */}
      <section
        style={{
          background: "#fff7d1",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "30px",
          border: "1px solid #f2e4a4",
        }}
      >
        <h2>Good to Know</h2>
        <ul>
          {tips.map((tip, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

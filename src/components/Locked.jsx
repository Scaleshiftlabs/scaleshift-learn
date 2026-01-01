export default function Locked({ course }) {
  return (
    <div className="glass">
      <h2>🔒 Course Locked</h2>
      <p>
        This course requires purchase.
      </p>
      <p>
        Price: ₹{course.price}
      </p>
    </div>
  );
}

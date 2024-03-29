function Card({ children }) {
  return (
    <div className="relative mx-auto h-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
      {children}
    </div>
  );
}

export default Card;

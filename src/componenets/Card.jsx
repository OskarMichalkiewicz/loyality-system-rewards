const Card = ({ children, title }) => {
  return (
    <div className="shadow-lg px-4 border border-gray-700 bg-gray-800 my-2 mx-2 text-neutral-100 rounded-xl overflow-hidden">
      <h1 className="text-xl px-6 py-4 font-bold text-neutral-50">
        {title}
      </h1>
      {children}
    </div>
  );
};
export default Card;

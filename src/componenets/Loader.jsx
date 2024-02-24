const Loader = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex space-x-2 justify-center items-center relative inset-0">
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;

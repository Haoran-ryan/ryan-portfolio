const Container = ({ children }) => {
  return (
    <div className="z-0 inline-block min-h-full w-full max-w-screen-2xl overflow-y-auto bg-light px-32">
      {children}
    </div>
  );
};

export default Container;

const Container = ({ children, className }) => {
  return (
    <div
      className={`z-0 inline-block min-h-full w-full max-w-screen-2xl overflow-y-auto bg-light px-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

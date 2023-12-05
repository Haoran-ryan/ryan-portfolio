const Container = ({ children }) => {
  return (
    <div className="z-0 inline-block min-h-full w-full overflow-y-auto bg-light p-32">
      {children}
    </div>
  );
};

export default Container;

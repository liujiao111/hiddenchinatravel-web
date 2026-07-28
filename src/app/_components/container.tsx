type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-20">
      {children}
    </div>
  );
};

export default Container;

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="prose dark:prose-invert max-w-full px-6 py-20">
      {children}
    </div>
  );
};

export default Container;

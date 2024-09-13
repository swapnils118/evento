type ContainerProp = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProp) {
  return (
    <div className=" flex flex-col max-w-7xl mx-auto min-h-screen bg-white/[2%]">
      {children}
    </div>
  );
}

type Menu = {
  name: string;
  handler: () => void;
};

export default function MenuItem(props: Menu) {
  const { name, handler } = props;

  const handleClick = () => {
    handler();
  };

  return (
    <main className="flex">
      <div
        className="flex w-full h-10 text-primary hover:bg-primary hover:text-third items-center mt-2 px-3"
        onClick={handleClick}
      >
        <p className="text-2xl">{name.toUpperCase()}</p>
      </div>
    </main>
  );
}

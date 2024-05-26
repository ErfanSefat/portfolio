const Filter = () => {
  return (
    <div className="flex">
      <Cat name={"Design"} />
      <Cat name={"Code"} />
    </div>
  );
};
const Cat = ({ name }: { name: string }) => {
  return (
    <div className="cursor-pointer flex items-center mx-10 mb-5 w-20">
      <div className="h-3 w-3 bg-white-1 rounded-lg mr-2 border opacity-50"></div>
      {name}
    </div>
  );
};

export default Filter;

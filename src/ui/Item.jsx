function Item({ children }) {
  return (
    <span className="text-5xl bg-neutral-300 text-white h-20 w-20 rounded-full flex justify-center items-center pb-1 hover:bg-primary-300 cursor-pointer transition-all duration-300">
      {children}
    </span>
  );
}

export default Item;

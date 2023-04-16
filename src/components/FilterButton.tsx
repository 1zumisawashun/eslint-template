type FilterButtonProps = {
  currentFilter: string;
  changeFilter: (newFilter: string) => void;
  items: string[];
};

export const FilterButton: React.FC<FilterButtonProps> = ({
  currentFilter,
  changeFilter,
  items,
}) => {
  return (
    <div>
      <nav>
        {items.map((item) => (
          <button
            key={item}
            onClick={() => changeFilter(item)}
            className={currentFilter === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

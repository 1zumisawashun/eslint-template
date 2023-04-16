type FilterButtonProps = {
  currentFilter: string
  changeFilter: (newFilter: string) => void
  items: string[]
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  currentFilter,
  changeFilter,
  items
}) => {
  return (
    <nav>
      {items.map((item) => (
        <button
          type="button"
          key={item}
          onClick={() => changeFilter(item)}
          className={currentFilter === item ? 'active' : ''}
        >
          {item}
        </button>
      ))}
    </nav>
  )
}

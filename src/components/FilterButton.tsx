// import styled from '@emotion/styled'

// const Test = styled('div')`
//   font-size: 16px;
//   margin-top: 6px;
//   width: 100%;
//   background-color: white;
// `

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
    <div>
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
    </div>
  )
}

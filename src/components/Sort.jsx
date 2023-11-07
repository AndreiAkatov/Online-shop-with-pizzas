import React from "react";

function Sort({ sortItem, onChangeSortItem }) {
  console.log(sortItem);
  const [open, setOpen] = React.useState(false);
  const list = [
    {
      name: "популярности(по убыванию)",
      parametr: "rating",
      order: "desc",
    },
    {
      name: "цене(по убыванию)",
      parametr: "price",
      order: "desc",
    },
    {
      name: "алфавиту(А-Я)",
      parametr: "name",
      order: "asc",
    },
    {
      name: "популярности(по возростанию)",
      parametr: "rating",
      order: "asc",
    },
    {
      name: "цене(по возростанию)",
      parametr: "price",
      order: "asc",
    },
    {
      name: "алфавиту(Я-А)",
      parametr: "name",
      order: "desc",
    },
  ];
  const sortName = list[sortItem];
  function onClickListItem(item) {
    onChangeSortItem(item);
    setOpen(!open);
  }
  return (
    <div class="sort">
      <div class="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
          items
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortItem.name}</span>
      </div>
      {open && (
        <div class="sort__popup">
          <ul>
            {list.map((item, index) => {
              return (
                <li
                  key={index}
                  className={sortItem.name === item.name ? "active" : ""}
                  onClick={() => onClickListItem(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;

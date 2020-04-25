import React from 'react';

const List = ({
  todos,
  onTodoDoneToggle,
  onRemoveTodo,
  onAllDone,
  onRemoveAll,
}) => {
  return (
    <div className="mt-5 w-3/5 mx-auto">
      <ul className="text-2xl">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-3 border flex justify-between bg-white shadow my-2"
          >
            <span
              onClick={() => onTodoDoneToggle(todo.id)}
              className={todo.done ? 'line-through' : '' + 'cursor-pointer'}
            >
              {todo.value}
            </span>{' '}
            <button
              className="text-red-700"
              onClick={() => onRemoveTodo(todo.id)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
      {todos.length ? (
        <div className="constrols">
          <button
            className="p-2 m-2 border text-xl bg-green-400 rounded text-white "
            onClick={onAllDone}
          >
            All Done
          </button>
          <button
            className="p-2 m-2 border text-xl bg-red-700 rounded text-white "
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default List;

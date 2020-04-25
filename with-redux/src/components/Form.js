import React from 'react';

const Form = ({ newTodo, onTodoChange, onSubmit }) => {
  const handleChange = (e) => {
    onTodoChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      onSubmit(newTodo);
      onTodoChange('');
    }
  };
  return (
    <form className="mt-10 flex flex-col w-3/5 mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ex: Todo"
        className="p-2 border text-xl mb-2"
        value={newTodo}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="p-2 border text-xl bg-green-400 rounded text-white font-bold"
      >
        Add Todo
      </button>
    </form>
  );
};

export default Form;

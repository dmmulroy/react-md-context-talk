const initialState = [
  {
    id: 0,
    text: 'Create the Todo Context (Consumer + Provider) + TodoContextProvider',
    completed: false
  },
  {
    id: 1,
    text: 'Show Completed VisibilityFilter Context + TodoContextProvider',
    completed: false
  },
  {
    id: 2,
    text: 'Add Providers to the Root/Index Component',
    completed: false
  },
  {
    id: 3,
    text:
      'Finish creating the VisbileTodoList (Visibility + Todo Consumers) and Todo Components (Todo Consumer for toggleTodo)',
    completed: false
  },
  {
    id: 4,
    text: 'Show Completed VisibilityFilters + VisibilityFilterButton',
    completed: false
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;

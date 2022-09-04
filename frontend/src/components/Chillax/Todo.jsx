import "./Styles/main.css"

const TodoList = ({id,title}) => {
    const getTodos = () => {
      axios.get("http://127.0.0.1:5000/todo/all")
        .then(res => {
          setLoading(false);
          const todos = res.data;
          setTodos(todos)
          console.log(todos);
        })
        .catch(err => {
          console.log(err);
        })
    }   
    // Get all todos
    useEffect(() => {

      getTodos()
    }, [todos]);

   

    return (
        <>
            <div className="todo" href="">
                <input type="checkbox" />
                <p onClick={() => {console.log("clicked")}} key={todo._id} className="todo-title">{todo.title}</p>
            </div>
        </>
      );
}
 
export default TodoList;
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ todos }) {
  const id = useParams().id;
  const todo = todos.find((todo) => todo.id === parseInt(id));

  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>Created at : {todo?.id}</h5>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

export default connect(mapStateToProps)(Detail);

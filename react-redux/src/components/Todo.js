import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { actionCreators } from "../store";
import { remove } from "../store";

function Todo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>삭제</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);

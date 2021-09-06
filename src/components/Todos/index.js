import PropTypes from "prop-types";
import styles from "./Todos.module.css";
import classnames from "classnames";

import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";

const Todos = ({ todos, onAddition, onSubstraction }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => {
        return (
          <div
            key={index}
            // className={`todo ${!(arr.length === index + 1) && "todoDivider"}`}
            className={classnames(styles.todo, {
              [styles.todoDivider]: !(arr.length === index + 1),
            })}
          >
            {todo.title}

            <div className={styles.todoIconWrapper}>
              <div className={styles.todoCount}>{todo.count}</div>

              <button
                onClick={() => {
                  onAddition(index);
                }}
                className={styles.todoActionButton}
              >
                <img src={plusIcon} alt="icon plus" />
              </button>

              <button
                onClick={() => {
                  onSubstraction(index);
                }}
                className={styles.todoActionButton}
              >
                <img src={minusIcon} alt="icon minus" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func,
};

export default Todos;

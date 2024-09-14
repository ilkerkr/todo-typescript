import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { FC } from "react";

interface ITodoListItem extends ITodoListFn {
  todo: ITodoType;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ padding: "1rem", cursor: "pointer" }}
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteOutline
            onClick={() => deleteTodo(todo.id)}
            sx={{ "&:hover": { color: "red" } }}
          />
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => toggleTodo(todo)}
        primary={todo.task}
        sx={{ wordWrap: "break-word" }}
      />
    </ListItem>
  );
};
export default TodoListItem;

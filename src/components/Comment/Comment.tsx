import styles from "./Comment.module.scss";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { CommentBlock } from "../CommentBlock/CommentBlock";
export const Comment = () => {
    return <>
        <div className={styles.comment}>
        <CommentBlock></CommentBlock>
        <div className={styles.root}>
        <div className={styles.form}>
          <TextField
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Отправить</Button>
        </div>
      </div>
        </div>
    </>;
};

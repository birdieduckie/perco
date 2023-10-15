import { ChangeEvent, FC, useState } from "react";

import { useAppDispatch } from "../../store/store";

import { createComment } from "../../store/comments/commentSlice";
import { Input } from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";
import { Container, Text } from './styled'


interface CommentProps {
  postId: string
}

export const Comment = ({ postId }: CommentProps) => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(prevState => prevState = e.target.value)
  }

  const handleClick = () => {
    dispatch(createComment(inputValue, postId))
  }
  return (
    <Container>
      <Input placeholder="Введите комментарий..." onChange={handleChange}></Input>
      <Button variant="primary" onClick={handleClick}>Опубликовать комментарий</Button>
    </Container>
  );
};

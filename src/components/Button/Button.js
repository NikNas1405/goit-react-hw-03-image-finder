import { Button } from './Button.styled.js';

export const ButtonLoadMore = ({ onClickButtonLoadMore }) => {
  return (
    <Button type="button" onClick={onClickButtonLoadMore}>
      Load more
    </Button>
  );
};

export default Button;

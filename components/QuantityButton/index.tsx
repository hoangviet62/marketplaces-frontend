/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import { 
  Button,
  ButtonGroup,
  styled
} from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  "&:disabled": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  }
}))

const QuantityButton = ({ callback }: any) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    callback && callback(quantity)
  }, [quantity])
  
  const handleIncrement = () => {
    setQuantity(quantity + 1)
  };

  const handleDecrement = () => {
    let number = quantity - 1
    if (number < 1) number = 1
    setQuantity(number)
  };
  
  return (
    <ButtonGroup>
      <CustomButton {...{ disabled: quantity <= 1 }} onClick={handleDecrement}>-</CustomButton>
      <CustomButton disabled>{quantity}</CustomButton>
      <CustomButton onClick={handleIncrement}>+</CustomButton>
    </ButtonGroup>
  );
}

export default QuantityButton

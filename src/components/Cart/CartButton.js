import classes from './CartButton.module.css';
import uiSlice from '../../store/uiSlice';
import { uiActions } from '../../store/uiSlice';
import { useDispatch ,useSelector} from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartQuantity=useSelector(state=>state.cart.totalQuantity);
  const toggleCart=()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

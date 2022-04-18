import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../store/profile/action";
import { selectName, selectShowName } from "../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  
  const handleClick = () => {
    dispatch(toggleCheckbox);
  }
  return (
    <>
      <h2>Profile Page</h2>
      {showName && <span>{name}</span>}
      <input onClick={handleClick} type="checkbox"></input> 
    </>
  );
};
    

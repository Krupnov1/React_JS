import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../store/profile/action";

export const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  }
  return (
    <>
      <h2>Profile Page</h2>
      {state.showName && <span>{state.name}</span>}
      <input onClick={handleClick} type="checkbox"></input>
    </>
  );
};
    

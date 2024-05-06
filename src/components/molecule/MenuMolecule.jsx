import { menuToggle } from "../../utils";
import useAppContext from "../../hooks/useAppContext";

const MenuMolecule = () => {
  const { state, dispatch } = useAppContext();
  const { stateReducers } = state;
  const { MenuOpen } = stateReducers;

  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: "UPDATE HAMBURGER TOGGLE", payload: !MenuOpen })
        }
      >
        {menuToggle(MenuOpen)}
      </button>
      {MenuOpen && <h1>Show</h1>}
    </div>
  );
};

export default MenuMolecule;

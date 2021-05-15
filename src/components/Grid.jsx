import React from 'react';
import {NavLink} from 'react-router-dom';
function Grid() {
  return (
   <>
   <div className="grid_container">
   <NavLink exact activeClassName="grido" to="/"><div className="grid">India &#127470;&#127475;</div></NavLink>
   <NavLink exact activeClassName="grido" to="/Statec"><div className="grid">Statewise</div></NavLink>

   </div>
   </>
  );
}

export default Grid;

import { useEffect } from "react";
import { useState } from "react";
import menuservice from "../../services/MenuServices";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const rowmenu = props.menu;
  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getByParentId('mainmenu', rowmenu.id).then(function (result) {
        setMenus(result.data.menus);
      });
    })();

  }, []);

  if (menus === null) {
    return (
      <li className="nav-item">
        <Link className="nav-link text-white" to={rowmenu.link}>
          {rowmenu.name}
        </Link>
      </li>
    )
  }
  else {
    return (
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle text-white" to={rowmenu.link} role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {rowmenu.name}
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {menus.map(function (menu1, index) {
            return (<li key={index}>
              <Link className="dropdown-item" to={menu1.link}>{menu1.name}</Link>

                {/* <ul className="dropdown-item" aria-labelledby="navbarDropdown">
                {menus.map(function (menu2, index) {

                return (<li key={index}>
              <Link className="drop-item" to={menu2.link}>{menu2.name}</Link>
              </li>
                  );
                })}
                </ul> */}
              </li>

            );
          })}
          
        </ul>
      </li>


    );
  }
}

export default MenuItem;
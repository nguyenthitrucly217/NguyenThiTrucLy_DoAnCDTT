import { useEffect } from "react";
import { useState } from "react";
import menuservice from "../../services/MenuServices"
import MenuItem from "./MenuItem";
function Menu() {
  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getByParentId('mainmenu', 0).then(function (result) {
        setMenus(result.data.menus);
      });
    })();

  }, []);

  return (
    <nav class="navbar navbar-expand-lg bg-dark" >
      <div class="container-fluid">
        <a class="navbar-brand text-white row d-md-none d-sm-block " href=""><b>FLOWER SHOP</b></a>
        <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            {menus.map(function (menu, index) {
              return <MenuItem key ={index} menu={menu}/>;
            })}
          </ul>
        </div>
      </div>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary" type="button">Search</button>
      </form> */}

    </nav>
  );
}

export default Menu
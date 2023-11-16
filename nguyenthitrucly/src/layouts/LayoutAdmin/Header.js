import { Link, Outlet } from "react-router-dom";
import './style.css'
import { FaSearch } from "react-icons/fa";
function Header() {
    return (
        // <section className="header bg-primary">
        //     <div className="container-fluid">
        //         <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        //             <div className="container-fluid">
        //                 <Link className="navbar-brand text-white" to="/admin">Quản trị</Link>
        //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span className="navbar-toggler-icon"></span>
        //                 </button>
        //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item dropdown">
        //                             <Link className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                Sản phẩm
        //                             </Link>
        //                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                                 <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/productsale">Sản phẩm sale</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/productstore">Sản phẩm kho</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/category">Danh mục</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/brand">Thương hiệu</Link></li>
        //                             </ul>
        //                         </li>

        //                         <li className="nav-item dropdown">
        //                         <Link className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                Đơn hàng
        //                             </Link>
        //                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                                 <li><Link className="dropdown-item" to="/admin/order">Tất cả đơn hàng</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/orderdetail">Chi tiết đơn hàng</Link></li>
        //                             </ul>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link text-white" to="/admin/contact">Liên hệ</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link text-white" to="/admin/menu">Menu</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link text-white" to="/admin/post">Post</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link text-white" to="/admin/topic">Topic</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link text-white" to="/admin/slider">Slider</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link text-white" to="/admin/user">User</Link>
        //                         </li>

        //                         <li className="nav-item">
        //                             <Link className="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        //                         </li>
        //                     </ul>
        //                     <form className="d-flex">
        //                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                         <button className="btn btn-outline-success text-white" type="submit">Search</button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>
        // </section>

<div class="wrapper">
		<nav id="sidebar" class="sidebar js-sidebar">
			<div class="sidebar-content js-simplebar">
				<a class="sidebar-brand" href="index.html">
          <span class="align-middle">Tucliee</span>
        </a>

				<ul class="sidebar-nav">
					<li class="sidebar-header">
						San Pham
					</li>

					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/product">
              <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Sản phẩm</span>
            </Link>
					</li>

					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/brand">
              <i class="align-middle" data-feather="user"></i> <span class="align-middle">Thương hiệu</span>
            </Link>
					</li>

					<li class="sidebar-item">
						<Link class="sidebar-link"to="/admin/category">
              <i class="align-middle" data-feather="log-in"></i> <span class="align-middle">Danh mục</span>
            </Link>
					</li>

					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/productsale">
              <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Khuyến mãi</span>
            </Link>
					</li>

					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/productstore">
              <i class="align-middle" data-feather="book"></i> <span class="align-middle">Sản phẩm kho </span>
            </Link>
					</li>
                    {/* <li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/productstore">
              <i class="align-middle" data-feather="book"></i> <span class="align-middle">San pham kho</span>
            </Link>
					</li> */}


					<li class="sidebar-header">
						Order
					</li>

					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/order">
              <i class="align-middle" data-feather="square"></i> <span class="align-middle">Đơn hàng</span>
            </Link>
					</li>

					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/orderdetail">
              <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Chi tiết đơn hàng</span>
            </Link>
					</li>

					<li class="sidebar-header">
						Trang chủ
					</li>
					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/page">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Trang đơn</span>
            </Link>
					</li>


					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/post">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Bài viết</span>
            </Link>
					</li>


					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/topic">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Chủ đề bài viết</span>
            </Link>
					</li>


					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/menu">
              <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Menu</span>
            </Link>
					</li>
					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/slider">
              <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Slider</span>
            </Link>
					</li>


					<li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/contact">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Liên hệ</span>
            </Link>
					</li>

                    <li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/user">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Người dùng</span>
            </Link>
					</li>
                    <li class="sidebar-item">
						<Link class="sidebar-link" to="/admin/customer">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Khách hàng</span>
            </Link>
					</li>

				</ul>

			</div>
		</nav>

		<div class="main">


			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<a class="sidebar-toggle js-sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>
        <div class="col-md-5 me-2">
                        {/* <Search/> */}
                        <label class="visually-hidden" for="autoSizingInputGroup">Enter product name</label>
                       <form action=""method="">
                        <div class="input-group">
                            <input  type="text" class="form-control" placeholder="Enter product name" />
                            <button class="btn btn-success" type ="submit"><i class=""><FaSearch/></i></button>                      
                              </div></form>
                    </div>  

				{/* <div class="navbar-collapse collapse">
					<ul class="navbar-nav navbar-align">
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="bell"></i>
									<span class="indicator">4</span>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
								<div class="dropdown-menu-header">
									4 New Notifications
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-danger" data-feather="alert-circle"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Update completed</div>
												<div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
												<div class="text-muted small mt-1">30m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-warning" data-feather="bell"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Lorem ipsum</div>
												<div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-primary" data-feather="home"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Login from 192.186.1.8</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-success" data-feather="user-plus"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">New connection</div>
												<div class="text-muted small mt-1">Christina accepted your request.</div>
												<div class="text-muted small mt-1">14h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all notifications</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="message-square"></i>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
								<div class="dropdown-menu-header">
									<div class="position-relative">
										4 New Messages
									</div>
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-5.jpg" class="avatar img-fluid rounded-circle" alt="Vanessa Tucker"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Vanessa Tucker</div>
												<div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
												<div class="text-muted small mt-1">15m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-2.jpg" class="avatar img-fluid rounded-circle" alt="William Harris"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">William Harris</div>
												<div class="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-4.jpg" class="avatar img-fluid rounded-circle" alt="Christina Mason"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Christina Mason</div>
												<div class="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
												<div class="text-muted small mt-1">4h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-3.jpg" class="avatar img-fluid rounded-circle" alt="Sharon Lessman"/>
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Sharon Lessman</div>
												<div class="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all messages</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                <i class="align-middle" data-feather="settings"></i>
              </a>

							<a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                <img src="img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span class="text-dark">Charles Hall</span>
              </a>
							<div class="dropdown-menu dropdown-menu-end">
								<a class="dropdown-item" href="pages-profile.html"><i class="align-middle me-1" data-feather="user"></i> Profile</a>
								<a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="index.html"><i class="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
								<a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Log out</a>
							</div>
						</li>
					</ul>
				</div> */}
			</nav>
<Outlet/>
{/* <footer class="footer">
				<div class="container-fluid text-center">
					<div class="row text-muted text-center">
                       <h5> Nguyễn Thị Trúc Ly - 2121110295 Tuclieee</h5>
					</div>
				</div>
			</footer> */}
</div></div>
    )
}
export default Header;
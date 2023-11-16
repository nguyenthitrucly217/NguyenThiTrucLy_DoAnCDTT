
import Logozalo from '../../assets/images/zalo.jpg';
import Logo from '../../assets/images/tuclieshop.png'
import Logofacebook from '../../assets/images/logofb.png'
import Logoinstagram from '../../assets/images/instagram.jpg'
import Logophone from '../../assets/images/phone.png'
import { useState } from 'react';
import { useEffect } from 'react';
import postservice from '../../services/PostServices';
import { Link } from 'react-router-dom';
function Footer() {
  const [footer, setFooter] = useState([]);
  useEffect(function () {
    (async function () {
      await postservice.getByPa('footer').then(function (result) {
        setFooter(result.data.posts);
      });
    })();

  }, []);


  return (

    <section className="">
      <hr></hr>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3">Tuclie Shop</i><br></br>
              <img style={{ width: 100 }} src={Logo} className="img-fluid" alt="LOGO" />
            </h6>
            <h5 className='text-danger'>
              HOA TƯƠI & LỌ TRANG TRÍ
            </h5>
            <p>Địa chỉ: 50/66a, Đ.79, Phường Phước Long B, Quận 9, TPHCM</p>
            <p>Email: tuclie@gmail.com</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Home
            </h6>
            <p>
              <a href="/" className="text-reset">Trang chủ</a>
            </p>
            <p>
              <a href="san-pham" className="text-reset">Sản phẩm</a>
            </p>
            <p>
              <a href="danh-muc-san-pham/hoa-tulip" className="text-reset">Danh mục sản phẩm</a>
            </p>
            <p>
              <a href="thuong-hieu/hoa-tuoi" className="text-reset">Thương hiệu sản phẩm</a>
            </p>

            <p>
              <a href="lien-he" className="text-reset">Thông tin liên hệ</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3mx-auto mb-3">
            <h6 className="text-uppercase fw-bold mb-4">
              Chính sách cửa hàng
            </h6>
            {footer.map(function (ft, index) {
                                  return (<p key ={index}>
                        <Link className="text-black"to ={"/don/"+ft.slug}>{ft.title}</Link>
                        </p>)

                      })}

            {/* <p>
              <a href="#!" className="text-reset">Giới thiệu</a>
            </p>

            <p>
              <a href="#!" className="text-reset">Chính sách mua hàng</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Chính sách bảo hành</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Chính sách vận chuyển</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Điều khoản đổi trả</a>
            </p> */}
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <div id="text-4" className="widget widget_text"><h6 className="h-widget fw-bold mb-4">TRADING TIMES</h6>
              <p>Monday - Friday: 9:00 – 4:00 </p>
              <p>Saturday: 9:00 – 5:00</p>
              <p>Sunday: 7:00 - 8:00</p>
              <p>*Đặt hoa trước liên hệ qua các hình thức sau:</p>
              <img style={{width:30}} src={Logozalo} className="img-fluid mx-2 " alt="LOGO" />
              <img style={{width:30}} src={Logofacebook} className="img-fluid mx-2 " alt="LOGO" />
              <img style={{width:30}} src={Logoinstagram} className="img-fluid mx-2" alt="LOGO" />
              <img style={{width:30}} src={Logophone} className="img-fluid mx-2 " alt="LOGO" />


            </div>
          </div>
        </div>
      </div>
    </section>
  )

}
export default Footer;
import React from "react";
import "./style.css";
import { useCart } from "react-use-cart";
import orderservice from "../../../services/OrderServices";
import { useNavigate } from "react-router-dom";
import { urlImage } from "../../../config";
// import "../../../assets/js/jquery"
function Cart() {
    const Navigate = useNavigate()

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    async function Checkout() {
        var order = new FormData();
        order.append("name", "Nguyen Thi Truc Ly");
        order.append("phone", '0987654321');
        order.append("email", "tucliee217@gmail.com");
        order.append("user_id", 1);
        order.append("address", "Tiengiang");
        order.append("note", "note");
        order.append("status", 1);
        await orderservice.create(order).then(function (res) {
            emptyCart();
            alert('Xác nhận đơn hàng thành công');
            Navigate('../', { replace: true });
        });

    }

    return (
        <section class="section-content padding-y">
            <div class="container">
                <div class="row">
                    <main class="col-md-9 ">
                    {isEmpty ? 'Giỏ hàng của bạn chưa có sản phẩm nào !' : 'Giỏ hàng'}

                        <div class="card">

                            <table class="table table-borderless table-shopping-cart">

                                <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" class="text-right" width="200"> </th>
                                    </tr>
                                </thead>
                                <h5 className={` my-5 text-center`}>
                            </h5>
                                <tbody>
                                    {items.map(function (item) {
                                        return (
                                            <tr>
                                                <td>
                                                    <figure class="itemside">
                                                        <div class="aside"><img src={urlImage + 'product/' + item.image} class="img-sm" width={50}
                                                            height={50} /></div>
                                                        <figcaption class="info">
                                                            <a href="#" class="title text-dark">Some name of item goes here nice</a>
                                                            <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    {item.quantity}
                                                </td>
                                                <td>
                                                    <div class="price-wrap">
                                                        <var class="price">{item.price}</var>
                                                        {/* <small class="text-muted"> $315.20 each </small> */}
                                                    </div>
                                                </td>
                                                <td class="text-right">
                                                    <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-1" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</button>
                                                    
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</button>


                                                  <button variant="danger" onClick={() => removeItem(item.id)} className="ms-2">Xóa</button>
                                                </td>
                                            </tr>

                                        );
                                    })}
                                </tbody>
                            </table>

                            {/* <div class="card-body border-top">
                                <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                                <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
                            </div> */}
                        </div>

                        <div class="alert alert-success mt-3">
                            <p class="icontext"><i class="icon text-success fa fa-truck"></i> Thời gian ship hàng 1-2 ngày</p>
                        </div>

                    </main>
                    <aside class="col-md-3">
                        {/* <div class="card mb-3">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Have coupon?</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                            <span class="input-group-append ms-2">
                                                <button class="btn btn-primary">Apply</button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                        {!isEmpty &&
                            <div class="card my-4">
                                <div class="card-body">
                                    <dl class="dlist-align">
                                        <dt>Tổng tiền:</dt>
                                        <dd class="text-right  h5"><strong>{cartTotal}.VNĐ</strong></dd>
                                    </dl>
                                    <hr />
                                    <a href="thong-tin" className="text-decoration-none ms-6" onClick={() => Checkout()}>Thanh toan</a>

                                    {/* <p class="text-center mb-3">
                                                        <img src={require("../../assets/images/misc/payments.png")} height="26" />
                                                    </p> */}

                                </div>
                            </div>

                        }
                    </aside>
                </div>

            </div>
        </section>

    );
}
export default Cart;
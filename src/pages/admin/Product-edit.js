
// import { products } from "@/data";
import { router, useEffect, useState } from "@/utilities";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
const AdminProductEditPage = ({ id }) => {

  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then(({ data }) => setProduct(data));
    //   fetch(`http://localhost:3000/products/${id}`)
    //     .then((response) => response.json())
    //     .then((data) => { setProduct(data) });
  }, []);

  useEffect(() => {
    const form = document.getElementById('form-add');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const newProduct = {
        name: productName.value,
        price: productPrice.value,
      };
      axios.put(`http://localhost:3000/products/${id}`, newProduct).then(() => {
        router.navigate("/admin/products");
      });
      // fetch(`http://localhost:3000/products/${id}`, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newProduct),
      // }).then(() => {
      //   router.navigate("/admin/products");
      // });
    });

  });



  return `<div class="container">
    <h1>Sửa sản phẩm</h1>
  <form action="" id="form-add">
      <div class="form-group mb-3">
          <label for="" class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" id="product-name" value="${product.name}"/>
      </div>
      <div class="form-group mb-3">
          <label for="" class="form-label">Giá</label>
          <input type="text" class="form-control" id="product-price" value="${product.price}"/>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
      </div>
  </form>
    </div>`;

}
export default AdminProductEditPage;
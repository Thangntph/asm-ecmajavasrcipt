// import { products } from "@/data";
import { products } from "@/data";
import { router, useEffect } from "@/utilities";
// import { v4 as uuidv4 } from "uuid";
const AdminProductAddPage = () => {
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
            fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            }).then(() => {
                router.navigate("/admin/products");
            });



        });
    });







    return `<div class="container">
    <h1>Thêm sản phẩm</h1>
  <form action="" id="form-add">
      <div class="form-group mb-3">
          <label for="" class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" id="product-name" />
      </div>
      <div class="form-group mb-3">
          <label for="" class="form-label">Giá</label>
          <input type="text" class="form-control" id="product-price" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Thêm sản phẩm</button>
      </div>
  </form>
    </div>`;

}
export default AdminProductAddPage
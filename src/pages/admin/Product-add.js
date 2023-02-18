// import { products } from "@/data";

import { router, useEffect } from "@/utilities";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
const AdminProductAddPage = () => {
    useEffect(() => {
        const form = document.getElementById('form-add');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');
        const productImgae = document.getElementById('product-images');

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const urls = await uploadFiles(productImgae.files)
            const newProduct = {
                name: productName.value,
                price: productPrice.value,
                image: urls,
            };
            axios.post(`http://localhost:3000/products`, newProduct).then(() => {
                router.navigate("/admin/products");
            });
            // fetch(`http://localhost:3000/products`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(newProduct),
            // }).then(() => {
            //     router.navigate("/admin/products");
            // });
        });
    });

    const uploadFiles = async (files) => {
        if (files) {
            const CLOUD_NAME = "djomphua4";
            const PRESET_NAME = "imageASM";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

            const formData = new FormData();

            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);

                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                urls.push(response.data.url);
            }

            return urls;
        }

    };

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
      <div class="form-group mb-3">
          <label for="" class="form-label">Ảnh</label>
          <input type="file" class="form-control" multiple id="product-images" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Thêm sản phẩm</button>
      </div>
  </form>
    </div>`;

}
export default AdminProductAddPage
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import AboutPage from "./pages/About";
import AdminProductAddPage from "./pages/admin/Product-add";
import AdminProductEditPage from "./pages/admin/Product-edit";
import AdminProductsPage from "./pages/admin/Products";
import HomePage from "./pages/HomePage";
import NotFoundPages from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import { render, router } from "./utilities";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/products", () => render(ProductsPage, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetailPage(data), app));
router.notFound(() => render(NotFoundPages, app));

// admin
router.on("admin/products", () => render(AdminProductsPage, app));
router.on("admin/products/add", () => render(AdminProductAddPage, app));
router.on("admin/products/:id/edit", ({ data }) => render(() => AdminProductEditPage(data), app));
router.resolve();


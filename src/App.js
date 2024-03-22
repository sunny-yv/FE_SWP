import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OrderStaff from "./pages/OrderStaff";
import HomeStaff from "./pages/HomeStaff";
import BookingStaff from "./pages/BookingStaff";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";
import Location from "./pages/Location";
import Chinhanh1 from "./pages/Location/Chinhanh1";
import Chinhanh2 from "./pages/Location/Chinhanh2";
import Chinhanh3 from "./pages/Location/Chinhanh3";
import Chinhanh4 from "./pages/Location/Chinhanh4";
import Chinhanh5 from "./pages/Location/Chinhanh5";
import Cat from "./pages/Cat";
import ListAllCat from "./pages/Cat/ListAllCat";
import CatShop1 from "./pages/Cat/CatShop1";
import CatShop2 from "./pages/Cat/CatShop2";
import CatShop3 from "./pages/Cat/CatShop3";
import CatShop4 from "./pages/Cat/CatShop4";
import CatShop5 from "./pages/Cat/CatShop5";
import IntroductionPage from "./pages/IntroductionPage";
import Menu from "./pages/Menu";
import ListAllMenu from "./pages/Menu/ListAllMenu";
import Drinks from "./pages/Menu/Drinks";
import CatProducts from "./pages/Menu/CatProducts";
import Admin from "./pages/Admin";
import Manager from "./pages/Manager";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/auth";
import CreateCat from "./pages/Manager/CreateCat";
import Table from "./pages/Table";
import ReadCat from "./pages/Manager/ReadCat";
import UpdateCat from "./pages/Manager/UpdateCat";
import UpdateManager from "./pages/Admin/UpdateManager";
import CreateCoffeeShop from "./pages/Admin/CreateCoffeeShop";
import TableCoffeeShop1 from "./pages/Table/TableCoffeeShop1";
import TableCoffeeShop2 from "./pages/Table/TableCoffeeShop2";
import TableCoffeeShop3 from "./pages/Table/TableCoffeeShop3";
import TableCoffeeShop4 from "./pages/Table/TableCoffeeShop4";
import TableCoffeeShop5 from "./pages/Table/TableCoffeeShop5";
import ConfirmStaff from "./pages/ConfirmStaff";
import Cart from "./pages/Cart";
import CartProvider from "./contexts/cart";
// import Detail from "./pages/HomePage/DetailCat";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/orderstaff" element={<OrderStaff />} />
            <Route path="/homestaff" element={<HomeStaff />} />
            <Route path="/bookingstaff" element={<BookingStaff />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/location" element={<Chinhanh1 />} />
            <Route path="/location2" element={<Chinhanh2 />} />
            <Route path="/location3" element={<Chinhanh3 />} />
            <Route path="/location4" element={<Chinhanh4 />} />
            <Route path="/location5" element={<Chinhanh5 />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/allcat" element={<ListAllCat />} />
            <Route path="/catshop1" element={<CatShop1 />} />
            <Route path="/catshop2" element={<CatShop2 />} />
            <Route path="/catshop3" element={<CatShop3 />} />
            <Route path="/catshop4" element={<CatShop4 />} />
            <Route path="/catshop5" element={<CatShop5 />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/allmenu" element={<ListAllMenu />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/catproducts" element={<CatProducts />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/createcat" element={<CreateCat />} />
            <Route path="/readcat" element={<ReadCat />} />
            <Route path="/updatecat" element={<UpdateCat />} />
            <Route path="/updatecat/:catID" element={<UpdateCat />} />
            <Route path="/createcoffeeshop" element={<CreateCoffeeShop />} />
            <Route path="/updatemanager" element={<UpdateManager />} />
            <Route
              path="/updatemanager/:coffeeID"
              element={<UpdateManager />}
            />
            <Route path="/table" element={<Table />} />
            <Route path="/tablecoffeeshop1" element={<TableCoffeeShop1 />} />
            <Route path="/tablecoffeeshop2" element={<TableCoffeeShop2 />} />
            <Route path="/tablecoffeeshop3" element={<TableCoffeeShop3 />} />
            <Route path="/tablecoffeeshop4" element={<TableCoffeeShop4 />} />
            <Route path="/tablecoffeeshop5" element={<TableCoffeeShop5 />} />
            <Route path="/confirmstaff" element={<ConfirmStaff />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/detail/:catID" element={Detail} /> */}
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
    </CartProvider>
  );
}

export default App;

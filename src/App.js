// Các property/Attributes sẽ dc viết theo quy tắc camelCase
// class => className

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header/Header'
import NotFound from './pages/NotFound';
import Router from './routers/Router';

// ---------------------------------------------- IMPORT BÀI TẬP NỘP ----------------------------------------------

// import BaiTapThucHanhLayout from "./components/baiTap/baiTapThucHanhLayoutBuoi1/BaiTapThucHanhLayout"; // Bài tập 1
// import BTREACTBuoi2 from "./components/baiTap/baiTapREACTBuoi2/BTREACTBuoi2"; // Bài tập 2
// import BTREACTReCodeShoesShop from "./components/baiTap/baiTapREACT-ShoesShop/BTREACTReCodeShoesShop"; // Bài tập 3
// import BaiTapREACTDatVeXemPhim from "./components/baiTap/baiTapREACTDatVeXemPhim/BaiTapREACTDatVeXemPhim";
import BaiTapForm from './components/baiTapFormQuanLySinhVien/BaiTapForm';

// ---------------------------------------------- IMPORT BÀI TẬP NỘP ----------------------------------------------

// import BTQuanLyNguoiDung from "./components/BTQuanLyNguoiDung/BTQuanLyNguoiDung";
// import LifeCycle from "./components/lifeCycle/LifeCycle";
// import BaiTapPhoneRedux from "./components/DemoRedux/BaiTapPhoneRedux/BaiTapPhoneRedux";
// import BaiTapXucXac from "./components/DemoRedux/BaiTapXucXac/BaiTapXucXac";
// import BaiTapChonXeRedux from "./components/DemoRedux/BaiTapChonXeRedux";
// import DemoRedux from "./components/DemoRedux/DemoRedux";
// import BTPhone from "./components/BTPhone/BTPhone"; 
// import BTShoesShop from "./components/BTShoesShop/BTShoesShop";
// import Parent from "./components/props/Parent";
// import BaiTapMovies from "./components/baiTapMovies/BaiTapMovies";
// import BaiTapChonXe from "./components/baiTapXe/BaiTapChonXe";
// import State from "./components/State/State";
// import RenderingWithMap from "./components/renderingWithMap/RenderingWithMap";
// import HandleEvent from "./components/handleEvent/HandleEvent";
// import DataBinding from "./components/DataBinding/DataBinding";
// import Home from "./components/baiTapLayout/Home";
// import ClassComponents from "./components/demoComponents/ClassComponents";
// import FunctionComponents from "./components/demoComponents/FunctionComponents";
// import RenderingWithConditions from "./components/renderWithCondition/RenderingWithConditions";
// import StyleComponent from "./components/styleComponents/StyleComponent";

// có 2 loại components => function components và class components

function App() {
  return (
    <div className="App">
      {/* <p>Phạm Kim Quang</p> */}
      {/* <ClassComponents />
      <ClassComponents />
      <FunctionComponents /> */}

      {/* Bài tập dàn layout component */}
      {/* <Home /> */}

      {/* DataBinding */}
      {/* <DataBinding/> */}

      {/* Handle Event */}
      {/* <HandleEvent/> */}

      {/* Style Component */}
      {/* <StyleComponent /> */}

      {/* render with conditions */}
      {/* <RenderingWithConditions /> */}

      {/* render with map */}
      {/* <RenderingWithMap /> */}

      {/* State */}
      {/* <State /> */}

      {/* Bài tập chọn xe */}
      {/* <BaiTapChonXe /> */}

      {/* Bài tập Movies */}
      {/* <BaiTapMovies /> */}

      {/* Props */}
      {/* <Parent /> */}

      {/* BTShoesShop */}
      {/* <BTShoesShop /> */}

      {/* BTPhone */}
      {/* <BTPhone /> */}

      {/* Demo Redux */}
      {/* <DemoRedux /> */}

      {/* Bài tập chọn xe Redux */}
      {/* <BaiTapChonXeRedux /> */}

      {/* Bài tập phone Redux */}
      {/* <BaiTapPhoneRedux /> */}

      {/* Bài tập xúc xắc */}
      {/* <BaiTapXucXac /> */}

      {/* Life Cycle */}
      {/* <LifeCycle /> */}

      {/* Bài tập quản lý người dùng */}
      {/* <BTQuanLyNguoiDung /> */}

      {/* ---------------------------------------------- BÀI TẬP NỘP ---------------------------------------------- */}

      {/* Bài Tập Thực Hành Layout Buổi 1 */}
      {/* <BaiTapThucHanhLayout /> */}

      {/* Bài tập chọn kính */}
      {/* <BTREACTBuoi2 /> */}

      {/* Bài tập REACT re-code Shoes Shop */}
      {/* <BTREACTReCodeShoesShop /> */}

      {/* Bài tập REACT đặt vé xem phim */}
      {/* <BaiTapREACTDatVeXemPhim /> */}

      {/* Bài tập Form Quản Lý Sinh Viên */}
      <BaiTapForm />
      {/* ---------------------------------------------- BÀI TẬP NỘP ---------------------------------------------- */}

      {/* <BrowserRouter> */}
      {/* <Header /> */}
      {/* <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
      {/* <Router />
      </BrowserRouter> */}
    </div>
  )
}

export default App;

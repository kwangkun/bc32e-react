// Các property/Attributes sẽ dc viết theo quy tắc camelCase
// class => className

import BaiTapThucHanhLayout from "./components/baiTap/baiTapThucHanhLayoutBuoi1/BaiTapThucHanhLayout";
import Parent from "./components/props/Parent";

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

      {/* Bài Tập Thực Hành Layout Buổi 1 */}
      <BaiTapThucHanhLayout />

      {/* Props */}
      {/* <Parent /> */}
    </div>
  )
}

export default App;

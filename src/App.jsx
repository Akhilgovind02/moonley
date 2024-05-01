// import Carousel from "./Components/Carousel";
// import Counter from "./Components/Footer";
// import Footer2 from "./Components/Footer2";
// import NavBar from "./Components/Navbar";

// function App() {
//   return (
//     <div className="flex flex-col ">
//       <NavBar />
//       <div className="flex-grow">
//         <Carousel />
//       </div>
//       <div className="fixed bottom-0 left-20 w-full">
//         <div  className="flex">
//           <div style={{marginTop:'100px'}} className="py-8">
//             <Counter />
//           </div>
//           <div style={{ backgroundColor: 'darkcyan' }} className="flex-1 py-16">
//             <Footer2 />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import Carousel from "./Components/Carousel";
import Counter from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Carousel />
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:py-4">
            <Counter />
          </div>
          <div style={{backgroundColor:'darkcyan'}} className=" py-16 lg:flex-1">
            <Footer2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


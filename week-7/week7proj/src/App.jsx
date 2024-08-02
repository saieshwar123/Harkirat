// import { React, Suspense, lazy } from "react";
// import "./App.css";

// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// const Landing =lazy(() =>"./components/Landing");


// const Dashboard = lazy(() => "./components/Dashboard");
// function App() {
//   return
//   <div>
//     <BrowserRouter>
//       <Appbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Suspense fallback={"loading.."}>
//               <Landing/>
//             </Suspense>
//           }
//         ></Route>
//         <Route
//           path="/dashboard"
//           element={
//             <Suspense fallback={"loading.."}>
//               <Dashboard />
//             </Suspense>
//           }
//         ></Route>
//       </Routes>
//     </BrowserRouter>
//   </div>
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           Landing Page
//         </button>
//         <button
//           onClick={() => {
//             navigate("/dashboard");
//           }}
//         >
//           Dashboard Page
//         </button>
//       </div>
//     </div>
//   );
// }
// export default App;



// import React, { Suspense, lazy } from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// const Landing = lazy(() => import("./components/Landing"));
// const Dashboard = lazy(() => import("./components/Dashboard"));

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"loading.."}>
//                 <Landing />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"loading.."}>
//                 <Dashboard />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button onClick={() => navigate("/")}>Landing Page</button>
//         <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import Landing from "./components/Landing";
// import Dashboard from "./components/Dashboard";

const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
    </div>
  );
}

export default App;

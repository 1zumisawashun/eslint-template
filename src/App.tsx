import { useState, Suspense, lazy, ReactNode } from "react";
import { FilterButton } from "./components/FilterButton";
const SuperSlowComponent = lazy(
  () => import("./components/SuperSlowComponent")
);

const items = ["step1", "step2", "step3", "step4"];

function Form({ children }: any) {
  const [name, setName] = useState("");

  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name !== "hide" && children}
    </>
  );
}

// export default function App() {
//   const [activeStep, setActiveStep] = useState(0);
//   const handleBack = () => setActiveStep((prev) => prev - 1);
//   const handleNext = () => setActiveStep((prev) => prev + 1);
//   return (
//     <>
//       <Form>
//         {activeStep === 0 && (
//           <div>
//             <p>step1</p>
//             <Suspense fallback={<div>loading...</div>}>
//               <SuperSlowComponent />
//             </Suspense>
//           </div>
//         )}
//         {activeStep === 1 && (
//           <div>
//             <p>step2</p>
//             <Suspense fallback={<div>loading...</div>}>
//               <SuperSlowComponent />
//             </Suspense>
//           </div>
//         )}
//         {activeStep === 2 && (
//           <div>
//             <p>step3</p>
//             <Suspense fallback={<div>loading...</div>}>
//               <SuperSlowComponent />
//             </Suspense>
//           </div>
//         )}
//         {activeStep === 3 && (
//           <div>
//             <p>step4</p>
//             <Suspense fallback={<div>loading...</div>}>
//               <SuperSlowComponent />
//             </Suspense>
//           </div>
//         )}
//       </Form>
//       <button onClick={handleNext}>next</button>
//       <button onClick={handleBack}>back</button>
//     </>
//   );
// }


const ComponentWithClick = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({});

  return <div onScroll={(e) => setState(e)}>{children}</div>;
};

const App = () => {
  return (
    <>
      <Form>
        <SuperSlowComponent />
      </Form>
    </>
  );
};

export default App;

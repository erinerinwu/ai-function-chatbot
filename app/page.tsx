"use client";

import Header from "./components/Header";
import Assistant from "./components/Assistant";
import Thread from "./components/Thread";
import Run from "./components/Run";
import ChatContainer from "./components/ChatContainer";
import StockPricesContainer from "./components/StockPricesContainer";
import { useAtom } from "jotai";
import {
  assistantAtom,
  isValidRunState,
  runAtom,
  runStateAtom,
  threadAtom,
} from "@/atoms";
import { useEffect } from "react";

export default function Home() {
  // Atom State
  const [, setAssistant] = useAtom(assistantAtom);
  const [, setThread] = useAtom(threadAtom);
  const [, setRun] = useAtom(runAtom);
  const [, setRunState] = useAtom(runStateAtom);

  // Load default data
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localAssistant = localStorage.getItem("assistant");
      if (localAssistant) {
        setAssistant(JSON.parse(localAssistant));
      }
      const localThread = localStorage.getItem("thread");
      if (localThread) {
        setThread(JSON.parse(localThread));
      }
      const localRun = localStorage.getItem("run");
      if (localRun) {
        setRun(JSON.parse(localRun));
      }
      const localRunState = localStorage.getItem("runState");
      if (localRunState && isValidRunState(localRunState)) {
        setRunState(localRunState);
      }
    }
  }, []);

  return (

    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Virtual Stock Analyst</h1>
        <div className="flex space-x-4">
        <Assistant />
        <Thread />
        <Run />
        </div>
      </header>
      <div className="flex-1 grid grid-cols-2 gap-6 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Chat</h2>
          <ChatContainer />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <StockPricesContainer />
        </div>
      </div>
      <Header />
    </div>
  )
}



//     <main className="flex flex-col">
//       <div className="flex flex-row  gap-x-10 justify-stretch">
//         <Assistant />
//         <Thread />
//         <Run />
//       </div>
     
//       <div className="flex flex-row mt-20 gap-x-10">
        
//         <div className="bg-white rounded-lg shadow-lg p-6">
//        
//          </div>

//         <div className="bg-white rounded-lg shadow-lg p-6">
//         <StockPricesContainer />
//           </div>
        
       
//       </div>
//       
      

//     </main>
//   );
// }

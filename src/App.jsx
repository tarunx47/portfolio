import { BrowserRouter, Routes, Route } from "react-router-dom"

// files
import { Nav } from "./components/Header-Nav/nav.jsx";
import { MainComp } from "./Main-Pages/LayoutMain.jsx";
import { ErrorPage } from "./Main-Pages/ErrorPage.jsx";
import { ProjectInfoPage } from "./Main-Pages/ProjectInfoPage.jsx";
import { ScrollContextProvider } from "./context/ScrollContext.jsx";
import { NavToggleContextProvider } from "./context/NavToggleContext.jsx";

import ChatBubble from "./components/ChatBubble.jsx"; // chatbot component
import { TooltipProvider } from "./components/ui/tooltip.jsx";

import { ReadDetail } from "./Main-Pages/ReadDetail.jsx";
import { AllProjectsPage } from "./Main-Pages/AllProjectsPage.jsx";
import { AllCertificatesPage } from "./Main-Pages/AllCertificatesPage.jsx";


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>

            <BrowserRouter>


                {/* Chatbot floating widget */}
                <ChatBubble />
                <div className="w-screen flex box-border ">

                    <ScrollContextProvider>
                        <TooltipProvider>
                            {/* navbar */}
                            <NavToggleContextProvider>
                                <Nav></Nav>


                                {/* Main pages*/}
                                <Routes>
                                    <Route path="/" element={
                                        <div className="w-full flex flex-col text-black bg-white dark:text-white dark:bg-black">
                                            <MainComp />
                                        </div>
                                    } />
                                    <Route path="/project/:id" element={<ProjectInfoPage />} />
                                    <Route path="/all-projects" element={<AllProjectsPage />} />
                                    <Route path="/all-certificates" element={<AllCertificatesPage />} />
                                    <Route path="/read/:id" element={<ReadDetail />} />
                                    <Route path="/*" element={<ErrorPage />} />
                                </Routes>

                            </NavToggleContextProvider>
                        </TooltipProvider>
                    </ScrollContextProvider>
                </div>
            </BrowserRouter >

        </QueryClientProvider>
    )


}

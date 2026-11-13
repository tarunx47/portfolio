import { useNavigate } from "react-router-dom"
import { useNavToggleContextProvider } from "@/context/NavToggleContext";

export const ErrorPage = () => {

    const navigate = useNavigate();
    const { toggle } = useNavToggleContextProvider();

    function navigateFunc() {
        navigate('/')
    }

    return <div className={`dark:text-white dark:bg-black w-full min-h-screen flex items-center justify-center transition-all duration-1000 ${toggle ? "md:pl-[10vw]" : "md:pl-[13vw]"}`}>
        <div className="p-2 flex flex-col items-center gap-6">
            <span className="text-6xl">404</span>
            <span className="text-4xl">Page not found</span>


            <div className="text-2xl flex flex-col gap-3">
                <button type="button" className="rounded-md border border-border px-3 py-2 transition-colors hover:bg-muted" onClick={navigateFunc}>Go to home page</button>
            </div>
        </div>
    </div>
}

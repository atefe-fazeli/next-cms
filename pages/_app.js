import Navbar from "@/components/modules/navbar/navbar";
import Sidebar from "@/components/modules/sidebar/sidebar";
import { ThemeProvider } from "@/context/themeContext";
import "@/styles/globals.css";
// learn to handle conflict 23
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="grid grid-cols-5 ">
        <div className="hidden md:flex md:col-span-1 h-screen border-l border-l-gray-400 p-6">
          <Sidebar />
        </div>
        <div className="col-span-5 md:col-span-4">
          <Navbar />
          <div className=" w-full overflow-auto p-6 h-[calc(100vh-2.5rem)]  md:h-[calc(100vh-3rem)]">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

import Navbar from "@/components/modules/navbar/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-5">
      <div className="hidden md:flex md:col-span-1 h-screen bg-amber-500"></div>
      <div className="col-span-5 md:col-span-4">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

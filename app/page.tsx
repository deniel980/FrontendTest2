"use client"
import MainPage from "@/pages/MainPage";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};


export default function Home() {
  return (
    <main>
      <HelmetProvider context={helmetContext}>
        <MainPage></MainPage>
      </HelmetProvider>
    </main>
  );
}

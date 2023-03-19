import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home({ initialCount }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [news, setNews] = useState("");

  const getData = async () => {
    await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setNews(data.articles[count]);
        // console.log(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (data) {
        setNews(data.articles[count]);
        setCount(count + 1);
      }
    }, 3000);
    console.log(news);
  }, [data, news, count]);

  return (
    <div className="h-screen bg-gradient-to-tl from-purple-700 to-indigo-600 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between h-full relative gap-48 overflow-hidden">
        <div className="absolute z-0 mt-24 h-screen w-[100%] stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]">
          <svg
            viewBox="0 0 1026 1026"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full animate-spin-slow"
          >
            <path
              d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
              className="stroke-indigo-400"
              strokeOpacity="0.7"
            ></path>
            <path
              d="M513 1025C230.23 1025 1 795.77 1 513"
              stroke="url(#:R65m:-gradient-1)"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id=":R65m:-gradient-1"
                x1="1"
                y1="513"
                x2="1"
                y2="1025"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffffff"></stop>
                <stop offset="1" stopColor="#ffffff" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 1026 1026"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
          >
            <path
              d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
              className="stroke-indigo-400"
              strokeOpacity="0.7"
            ></path>
            <path
              d="M913 513c0 220.914-179.086 400-400 400"
              stroke="url(#:R65m:-gradient-2)"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id=":R65m:-gradient-2"
                x1="913"
                y1="513"
                x2="913"
                y2="913"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffffff"></stop>
                <stop offset="1" stopColor="#ffffff" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[560px] my-auto mx-auto z-100">
          <h1 className="text-white leading-tight text-[58px] font-extrabold mb-4 text-center">
            Oopss... bos lagi tidur
          </h1>
          <Link
            href={news ? news.url : "/"}
            className="text-white text-xl font-light leading-normal mx-auto items-center"
          >
            <span>&quot;</span>
            {news ? news.title : "Loading .."}
            <span>&quot;`</span>
          </Link>
          {/* <div class="mt-10 flex items-center gap-4">
            <a
              href="https://elstar.themenate.net/"
              class="rounded-lg bg-slate-900 text-white hover:bg-slate-700 active:bg-slate-800 radius-round px-9 py-3 cursor-pointer text-base font-semibold"
            >
              Preview
            </a>
            <a
              href="https://themeforest.net/item/elstar-react-tailwind-admin-template/39768117"
              class="rounded-lg bg-transparent text-white ring-1 ring-slate-100 hover:bg-white/10 active:bg-white/25 radius-round px-9 py-3 cursor-pointer text-base font-semibold"
              target="_blank"
            >
              Get this template
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

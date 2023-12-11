import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";
import { GetNewsService } from "../../services/ApiService";
import { useAuth } from "../../context/AuthContext";

function Homepage() {
  const navigate = useNavigate();
  const { user, logIn, logOut } = useAuth();
  console.log(user);
  const [news, setNews] = useState(null);
  const [page, setPage] = useState(1);
  const take = 12;

  useEffect(() => {
    const skip = (page - 1) * take;
    GetNewsService.getNews(skip, take).then((news) => {
      console.log(news);
      setNews(news);

    })
  }, [page]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handelePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>

      <div className="mt-20 mb-10 text-center bannerTop bg-slate-300 py-3">
        banner top
      </div>

      <div className="flex gap-4 justify-center mb-10">
        <div className="text-center mt-4">
          <button
            onClick={handelePrevPage}
            className="bg-primary text-black px-4 py-2 rounded-full"
            disabled={page === 1}
          >
            Page {page}
          </button>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-primary text-black px-4 py-2 rounded-full"
          >
            Page {page + 1}
          </button>
        </div>
      </div>
      <div className="mt-2">
        <div className="cardContainer">
          {news &&
            news.map((item) => {
              return (
                <div
                  key={item.id}
                  className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600 mb-24 card"
                >
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-9">
                    <a href="#!">
                      <img
                        className="rounded-t-lg"
                        src={item.imageUrl}
                        alt=""
                        width={"100%"}
                      />
                    </a>
                  </div>
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {item.title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {item.description}
                  </p>
                  <div>
                    <button
                      onClick={() => navigate(`/article/${item.id}`)}
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex gap-4 justify-center">
          <div className="text-center mt-4">
            <button
              onClick={handelePrevPage}
              className="bg-primary text-black px-4 py-2 rounded-full"
              disabled={page === 1}
            >
              Page {page}
            </button>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={handleLoadMore}
              className="bg-primary text-black px-4 py-2 rounded-full"
            >
              Page {page + 1}
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Homepage;

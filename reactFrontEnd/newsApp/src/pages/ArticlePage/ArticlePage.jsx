import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GetNewsService } from '../../services/ApiService';
import './Article.css';

import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, VKIcon, VKShareButton } from 'react-share';


function ArticlePage() {
  const { id } = useParams();
  // console.log(id);

  const [article, setArticle] = useState([]);
  const [comment, setComment] = useState("");
  const [note, setNote] = useState("");
  const currentPageUrl = window.location.href;

  useEffect(() => {
    GetNewsService.getNewsById(id).then(article => {
      // console.log(article);
      setArticle(article)
    })
  }, [])
  const onCommentChange = (e) => {
    setComment(e.target.value)
    console.log(e.target.value);
  }
  const onNoteChange = (e) => {
    setNote(e.target.value)
    console.log(e.target.value);
  }
  const clearInputs = () => {
    setComment(
      'comment submited'
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentBody = {
      id: id,
      comment: comment,
    };

    try {

      await GetNewsService.postComment(commentBody.id, commentBody.comment);

    } catch (error) {
      console.log('ups', error);
    }
    clearInputs();
  }
  return (
    <>
      <div className="articlePageContainer">


        <div className="articleContainer">
          <h1>{article.title}</h1>
          <div className="imgContainer">
            <div
              className="image block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-9">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src={article.imageUrl}
                  alt=""
                  width={'100%'}
                />         1
              </a>
            </div>
            <p>{article.description}</p>
          </div>
          <p>{article.content}</p>
          <h3 className='mt-5 flex justify-end mr-44'>publishing date: {article.articleId}</h3>

          <div className="comments">
            <h2 className='underline'>Comment:</h2>


            <textarea
              onChange={onCommentChange}
              value={comment}
              className='input bg-slate-100 mt-5' name="" id="" cols="80" rows="10"></textarea>
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
        {/* if the !user we will show ad : analitycal note */}

        <div className="noteContainer">
          <div className="AnalyticalNote text-center ">

            <div>
              <h1 className=''>Analytical note:</h1>
              <textarea
                onChange={onNoteChange}
                value={note}
                className='input bg-slate-100 mt-5 p-3' name="" id="" cols="80" rows="20"></textarea>
              <meta property='og.description content={note}' />
            </div>
            <div className="tags mb-5 mt-5 ">
              {/* <label htmlFor=""></label> */}
              <input className='inputs rounded-lg text-center' type="text" name="" id="" placeholder='tags' />
              <input className='inputs rounded-lg text-center' type="text" name="" id="" placeholder='tags' />
              {/* <input className='inputs rounded-lg text-center' type="text" placeholder='tags' /> */}
            </div>
            <div className="socialShare flex gap-5 justify-center mb-5">
              {console.log('from social share', note)}
              <FacebookShareButton
                url='abreubre.mk'
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TelegramShareButton
                url='t.me/testSocialShare'
                text={note}
                title={note}
              >
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
              <TwitterShareButton
                url='placebo.mk'
                title={note}

              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <VKShareButton
                url='placebo.mk'
                title={note}

              >
                <VKIcon size={32} round={true} />
              </VKShareButton>

            </div>

            <div className="btns flex justify-around">
              <button className='px-3 text-center rounded-lg'>Save note</button>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default ArticlePage

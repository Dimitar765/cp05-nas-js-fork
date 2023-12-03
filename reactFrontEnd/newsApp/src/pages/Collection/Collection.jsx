import { useEffect, useState } from "react";
import { GetNewsService } from "../../services/ApiService";

import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
} from "react-share";

function Collection() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    GetNewsService.getNotes().then((note) => {
      console.log(note);
      setNotes(note);
    });
  }, []);

  return (
    <>
      <div className="container mt-24">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-8">Collection</h1>
            <div className="row">
              {notes &&
                notes.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="col-4 flex gap-4 justify-around"
                    >
                      <div className="card mb-4">
                        <div className="card-body">
                          <p className="card-text text-white">{item.note}</p>
                        </div>
                      </div>

                      <div className="socialShare flex gap-5 justify-center mb-5">
                        {console.log("from social share", notes)}
                        <FacebookShareButton url="abreubre.mk">
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <TelegramShareButton
                          url="t.me/testSocialShare"
                          text={item.note}
                          title={item.note}
                        >
                          <TelegramIcon size={32} round={true} />
                        </TelegramShareButton>
                        <TwitterShareButton url="placebo.mk" title={item.note}>
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <VKShareButton url="placebo.mk" title={item.note}>
                          <VKIcon size={32} round={true} />
                        </VKShareButton>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;

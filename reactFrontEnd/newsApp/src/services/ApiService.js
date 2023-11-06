export class GetNewsService {
  URL = 'https://sea-lion-app-yujst.ondigitalocean.app/'

  static getNews = async () => {
    const res = await fetch('https://sea-lion-app-yujst.ondigitalocean.app/news');
    const news = await res.json();
    // console.log(news);
    return news;
  };

  static getNewsById = async (id) => {
    const res = await fetch(`https://sea-lion-app-yujst.ondigitalocean.app/news/${id}`);
    const news = await res.json();
    // console.log(news);
    return news;
  };

  static postComment = async (id, comment) => {
    // const data = { id, comment };
    const res = await fetch(`https://sea-lion-app-yujst.ondigitalocean.app/news/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, comment }),
    });
    const result = await res.json();
    // console.log(result);
    return result;
  };

  static getComments = async (id) => {
    const res = await fetch(`https://sea-lion-app-yujst.ondigitalocean.app/news/${id}/comments`);
    const comments = await res.json();
    console.log(comments);
    return comments;
  };
}

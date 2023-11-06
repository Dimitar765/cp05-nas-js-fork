export class GetNewsService {
  //  URL = "http://localhost:3000/news";
  URL = 'https://starfish-app-be7i6.ondigitalocean.app/'
  static getNews = async () => {
    const res = await fetch('https://starfish-app-be7i6.ondigitalocean.app/news');
    const news = await res.json();
    // console.log(news);
    return news;
  };

  static getNewsById = async (id) => {
    const res = await fetch(`https://starfish-app-be7i6.ondigitalocean.app/news/${id}`);
    const news = await res.json();
    // console.log(news);
    return news;
  };

  static postComment = async (id, comment) => {
    // const data = { id, comment };
    const res = await fetch(`https://starfish-app-be7i6.ondigitalocean.app/news/${id}/comments`, {
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
    const res = await fetch(`http://localhost:3000/news/${id}/comments`);
    const comments = await res.json();
    console.log(comments);
    return comments;
  };

  static createUser = async (email, password) => {
    const createUser = await fetch('http://localhost:3000/auth/signup', {
      method: "POST",
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await createUser.json();
    console.log(result)
    return result
  }
}

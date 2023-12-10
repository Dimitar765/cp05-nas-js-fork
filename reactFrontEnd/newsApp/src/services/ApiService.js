export class GetNewsService {
  static getNews = async (skip = 0, take = 12) => {
    const query = `?skip=${skip}&take=${take}`;
    const res = await fetch(`http://localhost:3000/news/${query}`, {
      credentials: "include",
    });
    const news = await res.json();
    // console.log(news);
    return news;
  };

  static getNewsById = async (id) => {
    const res = await fetch(`http://localhost:3000/news/${id}`, {
      credentials: "include",
    });
    const news = await res.json();
    // console.log(news);
    return news;
  };

  static postComment = async (id, comment) => {
    // const data = { id, comment };
    const res = await fetch(`http://localhost:3000/news/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id, comment }),
    });
    const result = await res.json();
    // console.log(result);
    return result;
  };

  static createNote = async (id, content) => {
    // const data = { id, comment };
    const res = await fetch(`http://localhost:3000/news/${id}/a-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id, content }),
    });
    const result = await res.json();
    console.log(result);
    return result;
  };

  static getNotes = async () => {
    const res = await fetch(`http://localhost:3000/a-note`, {
      credentials: "include",
    });
    const notes = await res.json();
    console.log(notes);
    return notes;
  };

  static getComments = async (id) => {
    const res = await fetch(`http://localhost:3000/news/${id}/comments`);
    const comments = await res.json();
    console.log(comments);
    return comments;
  };

  static createUser = async (email, password) => {
    const createUser = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await createUser.json();
    console.log(result);
    return result;
  };

  static logIn = async (email, password) => {
    const userLogedIn = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await userLogedIn.json();
    console.log("log", result);
    if (result.statusCode === 500) {
      return { success: false };
    } else {
      return { success: true, info: result.email };
    }
  };

  static logOut = async () => {
    const userLogedOut = await fetch("http://localhost:3000/auth/logout");
    const result = await userLogedOut.json();
    console.log(result);
    return result;
  };
}

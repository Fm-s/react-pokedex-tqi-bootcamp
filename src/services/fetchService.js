const fetch_store = [];
const fetch_queue = [];

const fetchService = async (url) => {

  if (!fetch_queue.includes(url)) {
    fetch_queue.push(url);
    if (fetch_store.includes(url)) {
        fetch_queue.splice(fetch_queue.indexOf(url), 1);
      return fetch_store[fetch_store.indexOf(url) + 1];
    }
    console.log("fetched from API");
    const res = await fetch(url);
    fetch_queue.splice(fetch_queue.indexOf(url), 1);
    if (res.ok) {
      const ret = res.json();
      fetch_store.push(url, ret);
      return ret;
    }
    return { err: "deu erro" };
  }
};

export default fetchService;

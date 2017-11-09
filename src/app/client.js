const URL = 'https://api.github.com/search/repositories?sort=stars&order=desc';

function makeQuery(language) {
  return `q=koan+${language}+in:name+in:description+language:${language}`;
}

export default class RepositoryClient {
  static search(language) {
    const query = makeQuery(language);
    return fetch(`${URL}&${query}`).then(res => res.json());
  }
}

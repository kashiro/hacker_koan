import {h, Component} from 'preact';

export default class Item extends Component {
  render({data: {owner: {login}, name, forks_count, stargazers_count, description, html_url}}) {
    return (
      <section class="p-a repository">
        <h2 class="m-0 m-b-l font-style-title repository-title"><a href={html_url} target="blank" rel="noopener">{name}</a></h2>
        <p class="m-0 m-b-l repository-desc">{description && description.length > 40 ? description.slice(0, 40) + '...' : description}</p>
        <dl class="horizontal">
          <dt><i class="fa fa-github" aria-hidden="true"></i></dt>
          <dd>{login}</dd>
          <dt><i class="fa fa-star" aria-hidden="true"></i></dt>
          <dd>{stargazers_count}</dd>
          <dt><i class="fa fa-code-fork" aria-hidden="true"></i></dt>
          <dd>{forks_count}</dd>
        </dl>
      </section>
    );
  }
}

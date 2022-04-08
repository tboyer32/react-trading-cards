'use strict';

function Homepage() {
  return (
    <div>
      <h2>Welcome!</h2>
      <p><a href="/cards" >Go to the cards page</a></p>
      <img src="/static/img/balloonicorn.jpg" />
    </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

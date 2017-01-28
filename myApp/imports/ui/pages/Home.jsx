import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >

      <h4>Packages</h4>

      <ul>
        <Link to="CounsellorChat">Counsellor</Link> &nbsp;
        <Link to="StudentChat">Student</Link> &nbsp;

      </ul>

      <h4>Components</h4>
      <ul>
        <li>Header</li>
        <li>LoginButtons</li>
        <li>
          <a href="https://github.com/JedWatson/classnames">Classnames (NPM Component)</a>
        </li>
      </ul>

      <h4>Models</h4>
      <ul>
        <li>User</li>
        <li>See more a complex <a href="https://github.com/AdamBrodzinski/react-ive-meteor/blob/master/both/models/post.js">example</a></li>
      </ul>

      <h4>Pages/Routes</h4>
      <ul>
        <li>Home, About</li>
        <li>Not Found</li>
        <li>Main Layout</li>
      </ul>
    </div>
  );
}

export default Home;

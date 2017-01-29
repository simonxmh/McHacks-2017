import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >

      <h4>Links</h4>

      <ul>
        <Link to="CounsellorChat">Counsellor</Link> &nbsp;
        <Link to="StudentChat">Student</Link> &nbsp;

      </ul>

    </div>
  );
}

export default Home;

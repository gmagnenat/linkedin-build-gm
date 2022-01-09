import { Avatar } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://media-exp1.licdn.com/dms/image/C4D16AQHjtyVa6AX0YA/profile-displaybackgroundimage-shrink_350_1400/0/1610790933152?e=1647475200&v=beta&t=Zgm0O4gR0CIfv5rlcbGNcq43hEqclcB9pNxmDQvjJeA'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Gwenaël Magnenat</h2>
        <h4>g.magnenat@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewd you are?</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on posts</p>
          <p className='sidebar__statNumber'>2,400</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;

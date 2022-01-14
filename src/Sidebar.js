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
        <Avatar
          className='sidebar__avatar'
          src='https://media-exp1.licdn.com/dms/image/C4D03AQFuYg0IP7pDSw/profile-displayphoto-shrink_800_800/0/1610912942072?e=1646870400&v=beta&t=lmxaCtsHky89M1b9cmCX8Ywxjs7_0dXO8tGEZQCkr6w'
        />
        <h2>Gwenaël Magnenat</h2>
        <h4>Web developer chez vingtneuf degres sàrl</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Vues de votre profil</p>
          <p className='sidebar__statNumber'>24</p>
        </div>
        <div className='sidebar__stat'>
          <p>Vues de votre post</p>
          <p className='sidebar__statNumber'>208</p>
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

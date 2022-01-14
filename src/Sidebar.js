import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
  const user = useSelector(selectUser);

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
        <Avatar className='sidebar__avatar' src={user.photoUrl} />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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

import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import './Post.css';
import InputOption from './InputOption';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQFuYg0IP7pDSw/profile-displayphoto-shrink_800_800/0/1610912942072?e=1646870400&v=beta&t=lmxaCtsHky89M1b9cmCX8Ywxjs7_0dXO8tGEZQCkr6w' />
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  );
}

export default Post;

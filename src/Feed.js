import React, { useState, useEffect } from 'react';

import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
import {
  db,
  collection,
  serverTimestamp,
  addDoc,
  orderBy,
  onSnapshot,
  query,
  getDocs,
} from './firebase';

function Feed() {
  const user = useSelector(selectUser);

  const colRef = collection(db, 'posts');
  // form input
  const [input, setInput] = useState('');
  // posts array
  const [posts, setPosts] = useState([]);
  // the posts query
  const q = query(colRef, orderBy('timestamp', 'desc'));

  // get posts once on page reload
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // send post to database
  const sendPost = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Commencer un post'
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={SubscriptionsIcon} title='Photo' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Photo' color='#c0cbcd' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='Photo'
            color='#7fc15e'
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

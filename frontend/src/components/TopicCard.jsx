import { Icon, InlineIcon } from '@iconify/react';
import "../ComponentsCss/TopicCard.css";

export default function TopicCard({ title, desc, postCount, onlineCount }) {
  return (
    <div className='topic-card'>
      <div className='topic-details'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className='topic-stats'>
        <p><InlineIcon icon={"carbon:chat"} /> {postCount} posts</p>
        <p ><InlineIcon icon={"carbon:circle-solid"} style={{ color: "#509957" }} /> {onlineCount} online</p>
      </div>
    </div>
  );
}

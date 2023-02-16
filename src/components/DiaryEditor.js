import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import EmotionItem from './EmotionItem';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: '완전 좋음',
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: '좋음',
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: '그럭 저럭',
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: '나쁨',
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: '끔찍함',
  },
];

const getStringDate = date => {
  return date.toISOString().slice(0, 10); //toISOString은 Date객체를 받아 YYYY-MM-DD...형태로 변환시켜줌
};

const DiaryEditor = () => {
  const [date, setDate] = useState(getStringDate(new Date()));

  const navigate = useNavigate();
  return (
    <div className="DiaryEditor">
      <MyHeader headText={'새 일기쓰기'} leftChild={<MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)} />} />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input className="input_date" value={date} onChange={e => setDate(e.target.value)} type="date" />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            <img src={emotionList[0].emotion_img}></img>
            {emotionList.map(it => (
              <EmotionItem key={it.emotion_id} {...it} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;

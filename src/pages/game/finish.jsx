import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import { Link } from 'gatsby';

import { Hero, Title } from '@components/_styled/Heading';
import Button from '@components/Button';
import {
  finishGameEvent,
  finishShareClickEvent,
  playAgainClickEvent,
} from '@events/eventList';

const ShareRow = styled.div`
  margin-bottom: 16px;

  > div {
    display: flex;
    justify-content: center;

    > .SocialMediaShareButton {
      outline: none;
      margin: 8px;
      cursor: pointer;

      svg {
        border-radius: 32px;
      }
    }
  }
`;

function getBucket(ratio = 0) {
  const range = [
    { poor: [0, 0.2] },
    { belowAverage: [0.2, 0.4] },
    { average: [0.4, 0.6] },
    { good: [0.6, 0.8] },
    { great: [0.8, 1] },
  ];

  const bucket = range.filter(el => {
    const key = el[Object.keys(el)];
    return (ratio >= key[0] && ratio < key[1]) || ratio === key[1];
  });

  const buckets = range.map(r => Object.keys(r)).flatMap(e => e);
  if (!bucket[0]) {
    return 0;
  }

  return buckets.indexOf(Object.keys(bucket[0])[0]);
}

export default function({ score, total }) {
  if (total === 0) {
    return false;
  }

  const shareString = `I just scored ${score}/${total} on my JavaScript test. What about you?`;
  const shareUrl = 'https://jsmeanything.now.sh';

  const greetings = [
    "You'll do better next time :)",
    'Not bad! Keep going.',
    'Good job!',
    'Impressive!',
    "Wow, you're a pro!",
  ];
  const bucket = getBucket(score / total);
  finishGameEvent(score, total);

  return (
    <React.Fragment>
      <Hero>{greetings[bucket]}</Hero>
      <p>
        Final Score: {score}/{total}
      </p>
      <ShareRow>
        <Title>Share your results</Title>
        <div>
          <TwitterShareButton
            url={shareUrl}
            title={shareString}
            hashtags={['JSMeAnything', 'JavaScript', 'Developer']}
            beforeOnClick={() => finishShareClickEvent('twitter')}
          >
            <TwitterIcon size={32} />
          </TwitterShareButton>
          <FacebookShareButton
            url={shareUrl}
            quote={shareString}
            hashtag="#JSMeAnything"
            beforeOnClick={() => finishShareClickEvent('facebook')}
          >
            <FacebookIcon size={32} />
          </FacebookShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={shareString}
            description="#JSMeAnything"
            beforeOnClick={() => finishShareClickEvent('linkedin')}
          >
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
          <TelegramShareButton
            url={shareUrl}
            title={shareString}
            beforeOnClick={() => finishShareClickEvent('telegram')}
          >
            <TelegramIcon size={32} />
          </TelegramShareButton>
          <WhatsappShareButton
            url={shareUrl}
            title={shareString}
            beforeOnClick={() => finishShareClickEvent('whatsapp')}
          >
            <WhatsappIcon size={32} />
          </WhatsappShareButton>
        </div>
      </ShareRow>
      <Link to="/menu">
        <Button onClick={playAgainClickEvent}>PLAY AGAIN</Button>
      </Link>
    </React.Fragment>
  );
}

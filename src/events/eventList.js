import pushEvent from './push';
import { composeClickEvent, composePassiveEvent } from './compose';

export function answerClickEvent(questionId, answer, timeIsRunning) {
  pushEvent(
    composeClickEvent('game_answer_click', {
      questionId,
      answer: {
        id: answer.id,
        isCorrect: answer.isCorrect,
      },
      timeIsRunning,
    })
  );
}

export function finishGameEvent(score, total) {
  pushEvent(composePassiveEvent('game_finish', { score, total }));
}

export function finishShareClickEvent(shareTo) {
  pushEvent(composeClickEvent('game_finish_share_click', { shareTo }));
}

export function headerClickEvent() {
  pushEvent(composeClickEvent('header_click'));
}

export function levelSelectEvent(level) {
  pushEvent(composeClickEvent('game_level_select_click', { level }));
}

export function playAgainClickEvent() {
  pushEvent(composeClickEvent('game_play_again_click'));
}

export function startGameClickEvent() {
  pushEvent(composeClickEvent('game_start_click'));
}

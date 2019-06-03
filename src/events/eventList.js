import pushEvent from './push';
import {
  composeClickEvent,
  composeErrorEvent,
  composeTriggerEvent,
} from './compose';

export function answerClickEvent(questionId, answer, timeIsRunning) {
  pushEvent(
    composeClickEvent({
      data: {
        questionId,
        answer: {
          id: answer.id,
          isCorrect: answer.isCorrect,
        },
        timeIsRunning,
      },
      label: 'answer',
    })
  );
}

export function errorEvent(label, data = {}) {
  pushEvent(composeErrorEvent({ label, data }));
}

export function finishGameEvent(score, total) {
  pushEvent(
    composeTriggerEvent({
      data: { score, total },
      label: 'finish',
    })
  );
}

export function finishShareClickEvent(shareTo) {
  pushEvent(
    composeClickEvent({
      data: { shareTo },
      label: 'share',
    })
  );
}

export function headerClickEvent() {
  pushEvent(
    composeClickEvent({
      category: 'navigation',
      label: 'header',
    })
  );
}

export function levelSelectEvent(level) {
  pushEvent(
    composeClickEvent({
      data: { level },
      label: 'level_select',
    })
  );
}

export function playAgainClickEvent() {
  pushEvent(
    composeClickEvent({
      category: 'navigation',
      label: 'play_again',
    })
  );
}

export function startGameClickEvent() {
  pushEvent(
    composeClickEvent({
      category: 'navigation',
      label: 'game_start',
    })
  );
}

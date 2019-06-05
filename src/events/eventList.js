import pushEvent from './push';
import {
  composeClickEvent,
  composeErrorEvent,
  composeNonInteractiveEvent,
} from './compose';

export function answerClickEvent(questionId, answer) {
  pushEvent(
    composeClickEvent({
      action: 'answer',
      value: Number(answer.isCorrect),
      label: questionId,
    })
  );
}

export function errorEvent(label, action = 'loading') {
  pushEvent(composeErrorEvent({ action, label }));
}

export function finishGameEvent(score, total) {
  pushEvent(
    composeNonInteractiveEvent({
      action: 'finish',
      label: 'Finish Game',
      value: Number(((score / total) * 100).toFixed(0)),
    })
  );
}

export function finishShareClickEvent(shareTo) {
  pushEvent(
    composeClickEvent({
      action: 'share',
      label: shareTo,
    })
  );
}

export function headerClickEvent() {
  pushEvent(
    composeClickEvent({
      category: 'navigation',
      action: 'navigate',
      label: 'Header',
    })
  );
}

export function levelSelectEvent(level) {
  pushEvent(
    composeClickEvent({
      action: 'level_select',
      label: level,
    })
  );
}

export function playAgainClickEvent() {
  pushEvent(
    composeClickEvent({
      category: 'navigation',
      action: 'play_again',
      label: 'Play Again',
    })
  );
}

export function startGameClickEvent() {
  pushEvent(
    composeClickEvent({
      category: 'navigation',
      action: 'game_start',
      label: 'Start Game',
    })
  );
}

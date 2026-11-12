// Project screenshots, imported in one place so content files can share them.
// These are the low-resolution placeholders from the design canvas. Phase 8
// replaces them with fresh captures in src/assets/media/ (update the sizes too).
// Width and height let the browser reserve space, so the page doesn't jump as they load.
import mmacHome from '../../docs/redesign/screenshots/mmac-home.png'
import vetboardQuestion from '../../docs/redesign/screenshots/vetboard-question.jpg'
import vetboardAnswer from '../../docs/redesign/screenshots/vetboard-answer.jpg'
import vetiqOverview from '../../docs/redesign/screenshots/vetiq-overview.png'
import taskflowBoard from '../../docs/redesign/screenshots/taskflow-board.png'

export const screenshots = {
  mmacHome: { src: mmacHome, width: 799, height: 506 },
  vetboardQuestion: { src: vetboardQuestion, width: 800, height: 500 },
  vetboardAnswer: { src: vetboardAnswer, width: 800, height: 500 },
  vetiqOverview: { src: vetiqOverview, width: 799, height: 506 },
  taskflowBoard: { src: taskflowBoard, width: 799, height: 506 },
}

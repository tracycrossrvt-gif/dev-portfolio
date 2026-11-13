// Project screenshots, imported in one place so content files can share them.
// Captured from the live sites at 1440×900 with device pixel ratio 2 by
// `npm run screenshots`. The page shows these WebP versions (quality 0.85);
// the full-quality PNGs live in docs/screenshots/ and stay out of the build.
// Width and height let the browser reserve space, so the page doesn't jump as they load.
import mmacHome from '../assets/media/mmac-home.webp'
import vetboardQuestion from '../assets/media/vetboard-question.webp'
import vetboardAnswer from '../assets/media/vetboard-answer.webp'
import vetiqOverview from '../assets/media/vetiq-overview.webp'
import taskflowBoard from '../assets/media/taskflow-board.webp'

const size = { width: 2880, height: 1800 }

export const screenshots = {
  mmacHome: { src: mmacHome, ...size },
  vetboardQuestion: { src: vetboardQuestion, ...size },
  vetboardAnswer: { src: vetboardAnswer, ...size },
  vetiqOverview: { src: vetiqOverview, ...size },
  taskflowBoard: { src: taskflowBoard, ...size },
}

import ProjectSummaryPage from './ProjectSummaryPage'
import { mmac } from '../../content/mmac'

// The MMAC Hub case study at /case-studies/mmac-hub. It uses the same layout as
// the VetBoard and VetIQ summaries; its copy and diagrams live in content/mmac.js.
function MmacCaseStudyPage() {
  return <ProjectSummaryPage page={mmac} />
}

export default MmacCaseStudyPage

import { resumeUrl } from '../data'
import PixelIcon from '../components/PixelIcon'

export default function Resume() {
  return (
    <div className="section">
      <div className="sec-head">
        <PixelIcon name="resume" size={30} />
        <h2>Resume</h2>
        <span className="spark">✦</span>
      </div>

      <div className="resume-wrap">
        <div className="resume-chest" aria-hidden="true">
          <PixelIcon name="chestOpen" size={120} />
        </div>
        <h3 className="resume-title">Treasure Found!</h3>
        <p className="resume-text">Download my resume to see the full adventure log</p>

        <a className="resume-btn" href={resumeUrl} download="Rosheni Bolonne_CV.pdf">
          <PixelIcon name="resume" size={22} />
          Download Resume.pdf
        </a>
      </div>
    </div>
  )
}

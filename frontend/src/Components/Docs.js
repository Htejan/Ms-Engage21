import React from 'react'
import './index.css'

function Docs() {
  return (
    <div className='mainHeadDocs'>
      {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}
      <main id='main-doc'>
        <div className='contentDocs'>
          <section id='First_section' className='main-section'>
            <header>Complete user documentation</header>
            <p className='pc'>
              <code>
                Welcome to the user guide! This part is constantly extended.
              </code>
            </p>

            <h4>The content is divided in 3 main areas:</h4>
            <ul>
              <li>First this intro and user guide section</li>
              <li>Second supported browsers</li>
              <li>Third is some Keyboard Shortcuts</li>
            </ul>
          </section>
          <section id='Second_section' className='main-section'>
            <header>Supported browsers</header>
            <p>
              <h4 color='lightgrey'>Desktop browsers</h4>
              <code>
                <ol>
                  <li>Chromium based</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                </ol>
              </code>
              Browsers evolve very rapidly, so this table may become inaccurate
              as new bugs on either our software or browsers emerge.
            </p>

            <p>
              <h4 color='lightgrey'>Mobile browsers</h4>
              <code>
                <ul>
                  <li>Chromium based</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                  <li>Other iOS browsers using WKWebView </li>
                </ul>
              </code>
            </p>
          </section>
          <section id='Third_section' className='main-section'>
            <header>Keyboard shortcuts </header>
            <p>
              <code>Some cool keyboard shortcuts</code>
            </p>
            <ul>
              <li>F - Show or hide video thumbnails</li>
              <li>M - Mute or unmute your microphone</li>
              <li>D - Switch between camera and screen sharing</li>
              <li> A - Manage call quality </li>
              <li>C - Open or close the chat</li>
              <li>R - Raise or lower your hand </li>
              <li>S - View or exit full screen</li>
              <li>W - Toggle tile view ?</li>
              <li>T - Show speaker stats</li>
              <li> 1-9 - Focus on another person's video</li>
              <li> V - Start or stop your camera</li>
              <li> 0 - Focus on your video</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
export default Docs

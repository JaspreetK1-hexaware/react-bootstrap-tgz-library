import React from "react"
import {Tab, Tabs} from "bootstrap-component-library"
function reactTab() {

return(   <div style={{ display: 'block', width: '100%', padding: 3 }}>
<h4>React-Bootstrap Tab Component</h4> <Tabs
    defaultActiveKey="profile"
    id="fill-tab-example"
    className="mb-3"
    // transition={false}
    fill
  >
      <Tab eventKey="home" title="Home">
        First tab: home
      </Tab>
      <Tab eventKey="profile" title="Profile">
      Second tab: profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      <div>Third tab: contact</div>
      </Tab>
    </Tabs>
    </div>
)}

export default reactTab
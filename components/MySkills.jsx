import React from 'react'

function MySkills() {
  return (
    <div>
        <h1>My Technical Skills
 </h1>

 <ul class="skill-list">
  <li class="skill">
    <h3>Nunchucks</h3>
    <progress class="skill-1" max="100" value="50">
      <strong>Skill Level: 50%</strong>
    </progress>
  </li>
  <li class="skill">
    <h3>Bow Staff</h3>
    <progress class="skill-2" max="100" value="75">
      <strong>Skill Level: 75%</strong>
    </progress>
  </li>
  <li class="skill">
    <h3>Roundhouse Kick</h3>
    <progress class="skill-3" max="100" value="25">
      <strong>Skill Level: 25%</strong>
    </progress>
  </li>
</ul>
    </div>
  )
}

export default MySkills
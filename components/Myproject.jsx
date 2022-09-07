import React from 'react'
import Head from 'next/head'

export default function Myproject() {
  return (
    <div className='my-project'>
  
  <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
      
      </Head>

     <br></br>

<div className='my-project-dev'>
<div className='my-project-item'>
<h1>My Project </h1>

<div>
<a href='https://nnonni1.github.io/XO-game/'>
            
<button className="btn primary-btn" type="button" >XO Game</button>
</a>
</div>

<div>  
<a href='https://github.com/nnonni1/project-2-todo-list'>
   
 <button className="btn primary-btn" type="button">TO DO List</button>
 </a>
</div>

<div>

<button className="btn primary-btn" type="button" onclick="/">My portofolio</button>

</div>
</div>

<div className='my-skills'>
        <h1>My Technical Skills
 </h1>
<div className="skills-li">
 <ul class="skill-list">
  <li class="skill">
    <h3>HTML</h3>
    <progress class="skill-1" max="100" value="50">
      <strong>Skill Level: 70%</strong>
    </progress>
  </li> 
  <li class="skill">
    <h3>CSS</h3>
    <progress class="skill-2" max="100" value="75">
      <strong>Skill Level: 50%</strong>
    </progress>
  </li>
  <li class="skill">
    <h3>Java Script</h3>
    <progress class="skill-2" max="100" value="75">
      <strong>Skill Level: 50%</strong>
    </progress>
  </li>
  <li class="skill">
    <h3>React </h3>
    <progress class="skill-1" max="100" value="50">
      <strong>Skill Level: 70%</strong>
    </progress>
  </li>
  </ul>


  <ul class="skill-list">
  <li class="skill">
    <h3>Next.js</h3>
    <progress class="skill-1" max="100" value="50">
      <strong>Skill Level: 70%</strong>
    </progress>
  </li>
  <li class="skill">
    <h3>Node.js</h3>
    <progress class="skill-3" max="100" value="25">
      <strong>Skill Level: 30%</strong>
    </progress>
  </li>
  <li class="skill">
    <h3>moongoDB</h3>
    <progress class="skill-3" max="100" value="25">
      <strong>Skill Level: 40%</strong>
    </progress>
  </li>
  <li class="skill">
    <h3>Express</h3>
    <progress class="skill-3" max="100" value="25">
      <strong>Skill Level: 40%</strong>
    </progress>
  </li>

</ul>
    </div>

    </div>
</div>
    </div>
  )
}

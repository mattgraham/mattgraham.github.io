---
layout: home
customCSS: post-home.css
---
<div class="welcome">
  <div class="content">
    <h1>Matt<span>Graham</span></h1>
    <h3>UX and Frontend Developement</h3>
    <ul>
      <li class="twitter"><a href="http://twitter.com/michigangraham"><span class="icon-twitter"></span></a></li>
      <li class="github"><a href="http://github.com/mattgraham"><span class="icon-github"></span></a></li>
      <li class="dribbble"><a href="http://dribbble.com/mattgraham"><span class="icon-dribbble"></span></a></li>
    </ul>
  </div>
</div>
<!-- end welcome -->

<div class="about">
  <div class="content">
  <h3>A creative at heart, delivering apps that cause change.</h3>
  <p>Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
  </div>
</div>

<div id="skills">
  <div class="content">
    <article>
      <span class="icon"></span>
      <h3>UX Design and Development</h3>
      <p>For years I have designed and redesigned apps all over the web. My goal is simple, sexy web applcations that make the experience memorable.</p>
    </article>
    <article>
      <span class="icon"></span>
      <h3>Creative Direction</h3>
      <p>I build for the web; HTML(5), SCSS, Compass, JS and more. I automate deployments with the assistance of my buddy Hubot, and make development fun. </p>
    </article>
    <article>
      <span class="icon"></span>
      <h3>Creatively Curious</h3>
      <p>I have an issue; I cannot stop learning. From deploying via currently diving further into Rails, JS, MongoDB and more.</p>
    </article>
  </div>
</div>

<div class="portfolio-item" id="atom">
  <div class="portfolio-item-inner">
  <div class="portfolio-item-demo">
    <img src="assets/images/atom.png" alt="">
  </div>
  <div class="portfolio-item-content">
    <img src="assets/images/atom-logo.svg" class="logo" alt="">
    <p>Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
  </div>
  </div>
</div>

<div class="portfolio-item" id="play">
  <div class="portfolio-item-inner">
  <div class="portfolio-item-demo">

      <img src="http://ecx.images-amazon.com/images/I/510Smm7LcEL._SS500_.jpg" class="album-art" />

      <div class="album-tracks">
        <h3>Onething 09 Live</h3>
        <h4>Forerunner Music <span>(2010)</span></h4>
        <ol>
          <li>Lowest Place</li>
          <li>You Made a Way</li>
          <li>I Put On Christ</li>
          <li>Psalm of Abraham</li>
          <li>Where I Belong</li>
          <li>My Beloved</li>
          <li>People Get Ready</li>
          <li>Forevermore</li>
          <li>Real Love</li>
          <li>Grace to Love You</li>
          <li>Reason to Dance</li>
          <li>Whom the Son Sets Free</li>
          <li>No One Else</li>
        </ol>
      </div>

  </div>
  <div class="portfolio-item-content">
    <img src="assets/images/play-logo.png" class="logo" alt="">
    <p>Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
  </div>
  </div>
</div>

<div class="portfolio-item" id="android">
  <div class="portfolio-item-inner">
  <div class="portfolio-item-demo">
    <img src="assets/images/atom.png" alt="">
  </div>
  <div class="portfolio-item-content">
    <img src="assets/images/githubandroid-logo.svg" class="logo" alt="">
    <p>Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
  </div>
  </div>
</div>

<div id="articles">
  <div class="content">
  {% for post in site.posts limit:3 %}
      <li class="{% cycle 'even', 'odd' %}">
        <a href="{{ post.url }}">
          <span class="article-title">{{ post.title }}</span>
          <span class="article-date">{{ post.date | date: "%-m/%-d/%Y" }}</span>
        </a>
      </li>
  {% endfor %}
  </div>
</div>

---
layout: home
customCSS: post-home.css
---

<div class="welcome">
  <div class="content">
    <h1 id="fittext1">Matt Graham</h1>
    <script type="text/javascript">
      $("#fittext1").fitText(1.1, { minFontSize: '36px', maxFontSize: '125px' });
    </script>

    <h3>Product design and frontend development at Salesforce</h3>
    <ul>
      <li class="twitter"><a href="http://twitter.com/mattgraham"><span class="icon-twitter"></span></a></li>
      <li class="github"><a href="http://github.com/mattgraham"><span class="icon-github"></span></a></li>
      <li class="dribbble"><a href="http://dribbble.com/mattgraham"><span class="icon-dribbble"></span></a></li>
    </ul>
  </div>
</div>
<!-- end welcome -->

<div class="about">
  <div class="pa5 center">
  <div class="f1 mb4">Delivering apps that cause change.</div>
  <div class="w-100 mw9 center">
    <div class="mb3 f3 lh-copy mw8 center">I'm a product designer and frontend developer living in Port Huron, MI. I focus on what it takes to make simple web applications, successful experiences, while automating all that I can.</div>
    <div class="mb3 f3 lh-copy mw8 center">I currently work as a senior product designer at <a href="http://salesforce.com" target="_blank">Salesforce</a> and focus on our <a href="http://heroku.com" target="_blank">Heroku Ecosystem</a> experiences. Previously at <a href="http://github.com" target="_blank">GitHub</a>, <a href="https://github.com/blog/993-ordered-list-is-a-githubber" target="_blank">Ordered List</a> and other small design and development firms. I love simple, beautiful apps that change the way we live and do things. Please don't hesitate to reach out and say hello <a href="http://twitter.com/mattgraham" target="_blank">@mattgraham</a>.
    </div>
  </div>
  </div>
</div>

<!-- <div class="portfolio-item" id="heroku">
  <div class="flex w-100 mw9 center pa4">
    <div class="flex flex-column items-center">
      <div class="flex-auto"></div>
      <div class="white f4 lh-copy">
        I've just celebrated my third year with Heroku / Salesforce organizations as a lead designer.
      </div>
      <div class="flex-auto"></div>
    </div>

    <div class="flex flex-column items-center">
      <div class="flex-auto"></div>
      <img src="assets/images/atom.png" alt="" class="w-100">
      <div class="flex-auto"></div>
    </div>
  </div>
</div> -->

<div class="portfolio-item" id="atom">
  <div class="portfolio-item-inner">
  <div class="portfolio-item-demo">
    <img src="assets/images/atom.png" alt="">
  </div>
  <div class="portfolio-item-content">
    <img src="assets/images/atom-logo.svg" class="logo mb5" alt="">
      <div class="mb4 f4 lh-copy">Atom is an open source text editor built as a desktop application based on web technologies. It has all your native menus and dialogs, and full access to the file system. What makes it different than say Sublime then? The power of the opensource community.</div>
      <div class="mb4 f4 lh-copy">At GitHub I was part of the team who took Atom from a neat idea to a completely open source application that the market is now running with. I helped design and develop base UI and syntax themes, UX experience, marketing materials, among other elements. <a href="http://atom.io" target="_blank">Atom.io</a></div>
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
    <div class="mb4 f4 lh-copy white">Play was how we did music at GitHub. As taken from the readme, "Play is an employee-powered iTunes-based client-driven distributed music server for your office. Also it can prepare your taxes." I never got it to do my taxes, however being able to queue up music across the world and stream along side your remote co-workers; that was done well. Play was a Rails app originally built off iTunes DJ and later moved to MPD</div>
    <div class="mb4 f4 lh-copy white">I worked on designing iOS and Android apps, web interface, wrote markup and styles for the web app and even did a <a href="https://speakerdeck.com/mattgraham/github-play" target="_blank">little speaking</a> on Play. Additional design elements can be found on <a href="https://dribbble.com/mattgraham/projects/212617-Play" target="_blank">dribbble</a>.</div>
  </div>
  </div>
</div>

<div class="portfolio-item" id="android">
  <div class="portfolio-item-inner">
  <div class="portfolio-item-demo">
    <img src="assets/images/android-demo.png" alt="">
  </div>
  <div class="portfolio-item-content">
    <img src="assets/images/githubandroid-logo.svg" class="logo" alt="">
    <div class="mb4 f4 lh-copy white">Create, manage, and discuss issues and stay up to date with an integrated news feed for all your organizations, friends, and repositories. View your issues dashboard to stay connected with all the issues you've reported, been assigned, or participating in the discussion on. You can also view and filter a repository's issue list and bookmark it for quick access.</div>
    <div class="mb4 f4 lh-copy white">GitHub for android still to this day holds a 4.4/5 Star rating and over 450,000 downloads in the <a href="https://play.google.com/store/apps/details?id=com.github.mobile&hl=en" target="_blank">Google Play store</a>. I was the lone designer that worked alongside two developers to build and then opensource GitHub for Android.</div>
    <p></p>
  </div>
  </div>
</div>

<div id="articles">
  <div class="content">
    <h1>Recent Authorings</h1>
  {% for post in site.posts limit:3 %}
      <li class="{% cycle 'even', 'odd' %}">
        <a href="{{ post.url }}">
          <img src="{{ post.thumb }}" alt="">
          <span class="article-title">{{ post.title }}</span>
          <!-- <span class="article-date">{{ post.date | date: "%-m/%-d/%Y" }}</span> -->
        </a>
      </li>
  {% endfor %}
  </div>
  <span class="content view-all"><a href="/articles.html">view all articles</a></span>
</div>

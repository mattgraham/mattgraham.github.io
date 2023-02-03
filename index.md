---
layout: home
customCSS: post-home.css
---

<div class="welcome">
  <div class="content">
    <h1 id="fittext1" class="mv2">Matt Graham</h1>
    <script type="text/javascript">
      $("#fittext1").fitText(1.1, { minFontSize: '36px', maxFontSize: '125px' });
    </script>

    <div class="f4 mv3">Lead UX design and frontend development at Salesforce</div>
    <ul class="pa0 ma0 mv5">
      <li class="twitter"><a href="http://twitter.com/mattgraham"><span class="icon-twitter"></span></a></li>
      <li class="github"><a href="http://github.com/mattgraham"><span class="icon-github"></span></a></li>
      <li class="dribbble"><a href="http://dribbble.com/mattgraham"><span class="icon-dribbble"></span></a></li>
    </ul>
  </div>
</div>
<!-- end welcome -->

<div class="about">
  <div class="pa5 center">
  <div class="f1 mv5 lh-title serif">Building applications that cause change.</div>
  <div class="w-100 mw9 center sans-serif">
    <div class="mv3 f3 lh-copy mw8 center">Professionally, I'm a <strong>Lead UX Designer and frontend developer</strong> designing applications on the <a href='http://heroku.com' target='_blank'>Heroku</a> platform at <a href='http://salesforce.com' target='_blank'>Salesforce</a>, by way of remote life in Port Huron, MI. Previously I've worked at <a href="http://github.com" target="_blank">GitHub</a>, <a href="https://github.com/blog/993-ordered-list-is-a-githubber" target="_blank">Ordered List</a> and other small design and development firms. I love simple, beautiful apps that change the way we live and do things. I focus on what it takes to make simple web applications, successful experiences, while automating all that I can.</div>
    <div class="mv3 f3 lh-copy mw8 center">Personally, I'm a <strong>Search and Recovery diver</strong> for the St. Clair County Sheriff Department, <strong>Chairperson</strong> for the Dive Team Auxiliary, <strong>husband</strong> to Shannon and <strong>father</strong> to our beautiful daughter.</div>
    <div class='mv3 f3 lh-copy mw8 center'>If you have questions, please don't hesitate to reach out and say hello via twitter at <a href="http://twitter.com/mattgraham" target="_blank">@mattgraham</a>.
    </div>
  </div>
  </div>
</div>


<div class="bg-near-black portfolio-item pt4 ph1 ph4-l" id="salesforce-cli">
  <div class="flex flex-column flex-row-ns w-100 mw9 center">

    <div class="w-100 w-50-ns pt2 flex flex-column items-center order-1 order-0-ns">
      <div class="flex-auto"></div>

      <div class="white f4 lh-copy bg-black shadow-1 br4 br--top w-100 code f5 pa4 overflow-scroll">
        <div><span class="light-blue">$</span> sf</div>
        <div>The Salesforce CLI</div>
        <br/>

        <div class="b">VERSION</div>
        <div>@salesforce/cli/1.0.1 darwin-x64 node-v12.15.0</div>
        <br/>
        <div><span class="light-blue">$</span> sf org create -n MyOrg</div>
        <br/>

        <div class="b mb1">What kind of environment do you want to create?</div>
        
        <table class="mb4">
          <tr>
            <td class="">➡ </td>
            <td class="ph1">Scratch Org</td>
          </tr>
          <tr>
            <td class=""></td>
            <td class="ph1">Sandbox Org</td>
          </tr>
        </table>

        <div class="b mb1">Choose a Dev Hub to use to create your Scratch Org</div>
        
        <table class="mb2">
          <tr>
            <td class="">➡ </td>
            <td class="ph1">DevHub1 (mydevhublogin@org.salesforce.com)</td>
          </tr>
          <tr>
            <td class=""></td>
            <td class="ph1">Log in to another Dev Hub</td>
          </tr>
          <tr>
            <td class=""></td>
            <td class="ph1">Compute Org</td>
          </tr>
        </table>
      </div>

    </div>

    <div class="w-100 w-50-ns pa4 tc flex flex-column order-0 order-1-ns">
      <div class="flex-auto"></div>
      
      <div class="white lh-copy">
        <div class="flex items-center tc mb4">
          <div class="flex-auto"></div>
          <img src="/assets/images/heroku/logo-salesforce.svg" alt="">
          <div class="flex-auto"></div>
        </div>
        <div class="white mb4">One of the most difficult leaps in my design career has been designing for the future Salesforce Unified CLI. <strong>sf</strong> is a new cli (built on top of OCLIF, which I was also able to help with designning years ago) with the primary goal of unifing all the salesforce brands and future features in a brand new CLI.</div>
      </div>

      <div class="flex-auto"></div>
    </div>
  </div>
</div>


<div class="portfolio-item pv5" id="heroku">
  <div class="flex-ns w-100 mw9 center pa4">

    <div class="w-100 mb3 w-50-ns pa2 flex flex-column items-center">
      <div class="flex-auto"></div>
      <div class="white f4 lh-copy measure">
        <div class="flex items-center tc mb4">
          <div class="flex-auto"></div>
          <img src="/assets/images/heroku/logo-heroku.svg" alt="">
          <div class="w2"></div>
          <img src="/assets/images/heroku/logo-salesforce.svg" alt="">
          <div class="flex-auto"></div>
        </div>
        I've completed my fourth year with Heroku / Salesforce now as a lead product designer. I've designed and seen launched the first ever Heroku Elements Marketplace (including the internal partner portal), worked in many areas of the Heroku Dashboard, contributed to the Purple Design System among other things.
      </div>
      <div class="flex-auto"></div>
    </div>

    <div class="w-100 w-50-ns pa2">
      <div class="grid">
        <div class="bg-white pa4 br1 tc shadow-4">
          <img class="h3 w3" src="/assets/images/heroku/herokuPostgres.png">
          <div class="sans purple b mv2">Heroku Postgres</div>
          <div class="sans dark-gray f6 lh-title mb1">Reliable and powerful database as a service based on PostgreSQL.</div>
        </div>
        <div class="bg-white pa4 br1 tc shadow-4">
          <img class="h3 w3" src="/assets/images/heroku/herokuConnect.png">
          <div class="sans purple b mv2">Heroku Connect</div>
          <div class="sans dark-gray f6 lh-title mb1">Salesforce Data Synchronization Service on the Heroku platform.</div>
        </div>
        <div class="bg-white pa4 br1 tc shadow-4">
          <img class="h3" src="/assets/images/heroku/herokuScheduler.png">
          <div class="sans purple b mv2">Heroku Scheduler</div>
          <div class="sans dark-gray f6 lh-title mb1">Run scheduled tasks every 10 minutes, every hour, or every day. </div>
        </div>
        <div class="bg-white pa4 br1 tc shadow-4 relative">
          <div class="z-999 bg-purple o-90 absolute top-0 right-0 bottom-0 left-0 sans f6 b flex flex-column">
            <div class="flex-auto"></div>
            <ul class="pa0 ma0 white lh-copy">
              <li class="b">6 Regions</li>
              <li class="b">App Sharable</li>
              <li class="b">Multiple Installs</li>
              <li class="b"></li>
              <li class="normal">Plans starting at</li>
              <li class="b">$100 Mo.</li>
            </ul>
            <div class="flex-auto"></div>

            <div class="pb3 ph3">
              <div class="b pointer bg-white br1 pa2 center shadow-4 w-100 purple">View Details</div>
            </div>
          </div>
          <img class="h3 w3" src="/assets/images/heroku/herokuKafka.png">
          <div class="sans purple b mv2">Heroku Kafka</div>
          <div class="sans dark-gray f6 lh-title mb1">Reliable and powerful Apache Kafka as a service on the Heroku platform.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-item" id="atom">
  <div class="portfolio-item-inner">
  <div class="portfolio-item-demo">
    <img src="assets/images/atom.png" alt="">
  </div>
  <div class="portfolio-item-content">
    <img src="assets/images/atom-logo.svg" class="logo mb5" alt="">
      <div class="mb4 f4 lh-copy">Atom is an open source text editor built as a desktop application based on web technologies. It has all your native menus and dialogs, and full access to the file system. What makes it different than say Sublime then? The power of the opensource community.</div>
      <div class="mb4 f4 lh-copy">At GitHub I was part of the team who took Atom from a neat idea to a completely open source application that the market is now running with. I helped design and develop base UI and syntax themes, UX experience, marketing materials, among other elements.</div>
  </div>
  </div>
</div>

<div class="portfolio-item" id="play">
  <div class="portfolio-item-inner">
  <div class="portfolio-item-demo">
    <img src="assets/images/510Smm7LcEL._SS500_.jpg" class="album-art" />
      <div class="album-tracks">
        <h3>Onething Live</h3>
        <h4 class="db sans mv2">Forerunner Music</h4>
        <ol class="db sans mv4">
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
  <div class="f2 serif mv4">Personal thoughts</div>

  <div class="content">
  {% for post in site.posts limit:3 %}
      <li class="{% cycle 'even', 'odd' %}">
        <a href="{{ post.url }}">
          <img src="{{ post.thumb }}" alt="">
          <div class="f3 mv3 near-black sans-serif">{{ post.title }}</div>
        </a>
      </li>
  {% endfor %}
  </div>
  <div class="w-100 mw9 center sans pa3 bt bb b--light-gray">
    <a href="/articles.html">view all articles</a>
  </div>
</div>

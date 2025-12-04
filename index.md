---
layout: home
customCSS: post-home.css
---

<div class="welcome">
  <div class="welcome-content">
    <div class="welcome-text">
      <div class="welcome-name">MATT</div>
      <div class="welcome-quote">When this is all said and done I hope its obvious my life was full of faith, hope and love, full of family, laughter, and community.</div>
      <ul class="welcome-social flex items-center my-6">
        <li class="mx-4">
          <a href="http://twitter.com/mattgraham" target="_blank">
            <div class="icon-x h-12 md:h-12 w-12 md:w-12"></div>
          </a>
        </li>
        <li class="mx-4">
          <a href="http://github.com/mattgraham" target="_blank">
            <div class="icon-github h-12 md:h-12 w-12 md:w-12"></div>
          </a>
        </li>
        <li class="mx-4">
          <a href="http://dribbble.com/mattgraham" target="_blank">
            <div class="icon-dribbble h-12 md:h-12 w-12 md:w-12"></div>
          </a>
        </li>
      </ul>
    </div>
    <div class="welcome-image">
      <img src="/assets/images/graham-dive-hero.png" alt="Matt Graham" class="h-full w-full object-cover">
    </div>
  </div>
</div>

<div id="about" class="p-4 mb-12">  
  <div class="max-w-screen-lg	mx-auto py-8">
    <div class="text-5xl my-12 font-serif text-center">The two minute version</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="text-xl text-slate-700 leading-8 mb-6 max-w-prose mx-auto">
          When this is all said and done I hope its obvious my life was full of faith, hope and love, full of family, laughter, and community.
        </div>
        <div class="text-xl text-slate-700 leading-8 mb-6 max-w-prose mx-auto">
          I'm a graduate of, Port Huron Northern High School, Bethel College and IvyTech University, however, more importantly I'm a forever student of so many things.</div>
        <div class="text-xl text-slate-700 leading-8 mb-6 max-w-prose mx-auto">
          In 2005, I convinced my college crush and dream girl Shannon to marry me. A decade and a half later after building careers and buying our home, our family grew with the laughter, warmth and the energy of our two precious daughters, Ella and Madisyn. Outside the house, my life is full of passions – from strumming melodies as a Guitar-playing Worship Leader at church to assuming the role of Chairperson for the <a href="https://diveteamauxiliary.org" target="_blank">Dive Team Auxiliary</a>. Diving into the depths of both literal and metaphorical waters, I'm also a member of the St. Clair County Search and Recovery dive team since 2015. My measure of success is love, devotion, and a steadfast commitment to making a meaningful impact in the world around me.
        </div>
      </div>
      <div>
        <div class="text-xl text-slate-700 leading-8 mb-6 max-w-prose mx-auto">
          In my professional life, I have spent decades designing and build developer tools. I'm driven by a passion to empower the masses, I design and develop tools so others can build faster. Currently I am nearly 10 years into my role as a Lead UX designer and front-end developer at <a href="https://heroku.com" target="_blank">Heroku</a>. My imprint can be traced across the world, including the design and development of tools such as Heroku platform, the new Salesforce CLI (sf), UX on CodeBuilder, and the first ever Elements Marketplace, among other impactful contributions. Prior to Heroku / Salesforce, I owned the title of "Creative Badass" in my four-year at <a href="https://github.com" target="_blank">GitHub</a>, where we catalyzed change for millions of developers worldwide. Notably, I played a part of the incredible five person team at OrderedList, which eventually marked GitHub's inaugural acquisition, solidifying a legacy as a catalyst for positive transformation in the realm of developer tools. I'm passionate about simple, beautiful apps that change the way we live and do things. I focus on what it takes to make simple web applications, successful experiences, while automating all that I can.
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bg-zinc-900 py-24 px-6 text-center">
  <div class="mx-auto w-full max-w-screen-2xl flex items-center mb-12">
    <div class="text-3xl text-white font-serif">Blog Articles</div>
    <div class="flex-auto"></div>
    <a href="/articles.html" class="rounded border-blue-500 border px-2 py-1 no-underline">View All</a>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center mx-auto w-full max-w-screen-2xl">
    {% for post in site.posts limit:3 %}
      <a href="{{ post.url }}" class="text-white no-underline">
        <img src="{{ post.thumb }}" alt="" class="rounded">
        <div class="my-3 text-xl">{{ post.title }}</div>
      </a>
    {% endfor %}
  </div>
</div>

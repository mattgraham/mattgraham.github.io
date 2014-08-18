---
layout: home
customCSS: post-home.css
---

<article>
#The articles, talks and more.

I'm a creative web apps builder. I design community tools to better community. Things like <a href="http://atom.io">Atom.io</a>, <a href="http://speakerdeck.com" target="_blank">Speaker Deck</a>, <a href="https://play.google.com/store/apps/details?id=com.github.mobile&hl=en" target="_blank">GitHub for Android</a>, <a href="http://gaug.es" target="_blank">Gaug.es</a>, <a href="https://github.com/play/play/" target="_blank">Play</a> among others. Previously at GitHub, Ordered List, Platinum, etc.  Connect via twitter <a href="http://twitter.com/michigangraham" target="_blank">@michigangraham</a>

<ul class="postings">
  {% for post in site.posts %}
      <li class="{% cycle 'even', 'odd' %}">
        <a href="{{ post.url }}">
          <span class="article-title">{{ post.title }}</span>
          <span class="article-date">{{ post.date | date: "%-m/%-d/%Y" }}</span>
        </a>
      </li>
  {% endfor %}
</ul>

</article>

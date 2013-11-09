---
layout: home
customCSS: post-home.css
---

<article>
#$ git commit -m 'who is Matt Graham'

I'm a creative. Professionally I am a frontend design and developer for what has been refered to as a, "Little-known social coding start-up," by the WSJ however, some of you know us as GitHub. I design community tools. Things like <a href="http://speakerdeck.com" target="_blank">Speaker Deck</a>, <a href="https://play.google.com/store/apps/details?id=com.github.mobile&hl=en" target="_blank">GitHub for Android</a>, <a href="http://gaug.es" target="_blank">Gaug.es</a>, <a href="https://github.com/play/play/" target="_blank">Play</a> and other fun apps that we can't talk about yet. I love creating ways to make life easier through design and technology. Have thoughts send them to me via twitter <a href="http://twitter.com/michigangraham" target="_blank">@michigangraham</a>

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
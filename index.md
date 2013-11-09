---
layout: home
customCSS: post-home.css
---

<article>
#$ git commit -m 'who is Matt Graham'

I'm an interactive and mobile designer for GitHub. Building things like Gaug.es, Speaker Deck, GitHub for Android, Gaug.es for Android, Play, as well as other fun and exciting projects. I love creating ways to make life easier through design and technology. I am a christian who knows I do not yet have the stamina of love that Jesus has; but hope that I can be known as one who tries to reach that standard. If I can help answer any questions or just to keep track of what we're building you can catch me on twitter at @michigangraham

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
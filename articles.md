---
layout: home
customCSS: post-home.css
---

<div class="content">
  <a href="/">back to home</a>
  <ul class="postings">
    {% for post in site.posts %}
        <li class="">
          <a href="{{ post.url }}">
            <img src="{{ post.thumb }}" alt="">
            <span class="article-title">{{ post.title }}</span>
            <br>
            <span class="article-date">{{ post.date | date: "%-m/%-d/%Y" }}</span>
          </a>
        </li>
    {% endfor %}
  </ul>
</div>

---
layout: post
---

<ul class="list">
  {% for post in site.river-wrecks %}
    <li class="">
      <div class="f1">{{ post.title }}</div>
      <div>
         {{post.content | markdownify}}
      </div>
    </li>
  {% endfor %}
</ul>

---
layout: home
customCSS: post-home.css
permalink: articles
---
 
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mx-auto my-24 max-w-screen-2xl p-6">
  {% for post in site.posts %}
    <a href="{{ post.url }}" class="no-underline text-gray-900 shadow hover:shadow-lg p-4 rounded border border-gray-50">
      <img src="{{ post.thumb }}" alt="" class="rounded mb-4">
      <div class="flex flex-col px-2 w-full overflow-hidden">
        <div class="text-xl font-serif truncate">{{ post.title }}</div>
        <div class="flex-auto"></div>
        <div class="text-xs text-gray-400">{{ post.date | date: "%-m/%-d/%y" }}</div>
      </div>
    </a>
  {% endfor %}
</div>

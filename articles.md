---
layout: home
customCSS: post-home.css
permalink: articles
---

<div class="hero bg-gray-900 text-white/90 py-12 lg:py-24">
  <div class="w-full max-w-5xl mx-auto p-6 text-center md:text-left">
      <div class="text-6xl my-4 font-thin">It has been a goal to increase these reflective moments, but as of yet...</div>
    </div>
  </div>  

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

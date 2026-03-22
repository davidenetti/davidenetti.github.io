---
layout: default
title: Home
---

## Personal blog
This is where I publish stuff I'm working on.

### Latest Posts
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span> - {{ post.date | date: "%b %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>

---
layout: page
title: Members
permalink: /members/
---

I apologize for the confusion. It seems there might have been an oversight in the example code. If you want to align the member's name and information to the right of the portrait, you can adjust the layout by using a combination of Flexbox or other CSS techniques. Here's an example of how you can achieve the desired layout:

markdown
Copy code
---
layout: default
title: Members
---

<style>
.member-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Adjust margin as needed */
}

.member-portrait img {
  max-width: 100px;
  margin-right: 20px; /* Add spacing between portrait and info */
}

.member-info {
  flex-grow: 1; /* Allow info to expand and take remaining space */
}
</style>

## Staffs

<div class="member-container">
  <div class="member-portrait">
    <img src="{{ site.baseurl }}/assets/images/KosukeMitarai.jpg" alt="Kosuke Mitarai" class="member-portrait">
  </div>
  <div class="member-info">
    <h3>御手洗光祐 Kosuke MITARAI</h3>
    <p>Position</p>
    <p><a href="https://scholar.google.com/citations?user=TfsGcnMAAAAJ">Google Scholar</a></p>
  </div>
</div>

## Students

| Name            | Role           |
|-----------------|----------------|
| | |

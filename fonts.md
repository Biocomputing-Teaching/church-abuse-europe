---
title: Fonts
description: "Traçabilitat documental del corpus."
permalink: /fonts/
---
<section class="section">
  <div class="section-head">
    <p class="eyebrow">Fonts</p>
    <h1>Traçabilitat documental</h1>
    <p>Les fonts s'agrupen per funció: grans informes europeus, seguiment institucional recent i jurisprudència. L'objectiu és que cada entrada del lloc sigui auditable.</p>
  </div>
  {% for group in site.data.sources %}
    <section class="section">
      <div class="section-head">
        <p class="eyebrow">{{ group.group }}</p>
      </div>
      <div class="sources-list">
        {% for item in group.items %}
          <article class="source-item">
            <strong>{{ item.title }}</strong>
            <span>{{ item.note }}</span>
            <a class="card-link" href="{{ item.url }}" target="_blank" rel="noreferrer">{{ item.url }}</a>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</section>

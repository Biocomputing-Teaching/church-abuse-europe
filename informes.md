---
title: Informes
description: "Comissions, informes i corpus documentals europeus."
permalink: /informes/
---
<section class="section">
  <div class="section-head">
    <p class="eyebrow">Informes</p>
    <h1>Dossiers principals</h1>
    <p>Els materials següents són el nucli comparat del lloc. Combinen informes oficials, comissions independents i portals documentals institucionals que permeten reconstruir patrons, xifres mínimes acreditades, respostes institucionals i línies de reparació.</p>
  </div>
  <div class="cards-grid">
    {% assign sorted_reports = site.reports | sort: "order" %}
    {% for report in sorted_reports %}
      <article class="card {% if report.wide %}wide{% endif %}">
        <div class="card-header">
          <div>
            <div class="badge">{{ report.country }}</div>
            <h3>{{ report.title }}</h3>
          </div>
          <div class="card-meta">{{ report.published }}</div>
        </div>
        <p>{{ report.summary }}</p>
        <div class="stat-line">
          {% for metric in report.metrics limit:3 %}
            <div>
              <span>{{ metric.label }}</span>
              <strong>{{ metric.value }}</strong>
            </div>
          {% endfor %}
        </div>
        <div class="card-footer">
          {% for tag in report.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
          <a class="card-link" href="{{ report.url | relative_url }}">Veure detall</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

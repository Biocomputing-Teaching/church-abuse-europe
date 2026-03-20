---
title: Països i portals
description: "Directori per país amb portals públics, institucionals o documentals rellevants."
permalink: /paisos/
---
<section class="section">
  <div class="section-head">
    <p class="eyebrow">Directori</p>
    <h1>Països, portals i punts d'entrada</h1>
    <p>Aquí tens l'accés ràpid als principals repositoris públics o institucionals utilitzats per al corpus. Aquesta pàgina funciona com a directori d'entrada, no com a tancament interpretatiu.</p>
  </div>
  <div class="cards-grid">
    {% for country in site.data.countries %}
      <article class="card wide">
        <div class="badge">{{ country.name }}</div>
        <h3>{{ country.name }}</h3>
        <p>{{ country.note }}</p>
        <ul class="collection-list">
          {% for portal in country.portals %}
            <li><a class="card-link" href="{{ portal.url }}" target="_blank" rel="noreferrer">{{ portal.label }}</a></li>
          {% endfor %}
        </ul>
      </article>
    {% endfor %}
  </div>
</section>

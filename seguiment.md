---
title: Seguiment
description: "Línies obertes, procediments i seguiments institucionals amb confirmació pública recent."
permalink: /seguiment/
---
<section class="section">
  <div class="section-head">
    <p class="eyebrow">Seguiment</p>
    <h1>Procediments, comissions i línies actives</h1>
    <p>Només es mostren materials amb traça pública recent. Les dates són part del contingut: en assumptes oberts, una dada sense data és insuficient.</p>
  </div>
  <div class="cards-grid">
    {% assign sorted_tracks = site.tracks | sort: "order" %}
    {% for track in sorted_tracks %}
      <article class="card wide">
        <div class="card-header">
          <div>
            <div class="badge">{{ track.country }}</div>
            <h3>{{ track.title }}</h3>
          </div>
          <div class="card-meta">
            <strong>Verificat</strong><br>
            {{ track.verified_on }}
          </div>
        </div>
        <p>{{ track.summary }}</p>
        <div class="stat-line">
          <div>
            <span>Estat</span>
            <strong>{{ track.status }}</strong>
          </div>
          <div>
            <span>Clau jurídica</span>
            <strong>{{ track.legal_axis }}</strong>
          </div>
        </div>
        <div class="card-footer">
          {% for tag in track.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
          <a class="card-link" href="{{ track.url | relative_url }}">Veure detall</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

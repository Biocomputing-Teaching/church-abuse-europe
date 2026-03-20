---
title: Jurisprudència
description: "Precedents del TEDH aplicables a abús sexual infantil, protecció institucional i investigació efectiva."
permalink: /jurisprudencia/
---
<section class="section section-dark">
  <div class="section-head">
    <p class="eyebrow">Jurisprudència</p>
    <h1>Precedents del TEDH aplicables</h1>
    <p>Aquesta pàgina no ordena les sentències per escàndol mediàtic, sinó per ús jurídic. El filtre ajuda a connectar cada línia oberta amb el problema convencional rellevant.</p>
  </div>

  <div class="chip-row" data-filter-group data-target="[data-topic-card]">
    <button class="chip active" type="button" data-filter="all">Tots</button>
    <button class="chip" type="button" data-filter="proteccio">Protecció institucional</button>
    <button class="chip" type="button" data-filter="investigacio">Investigació efectiva</button>
    <button class="chip" type="button" data-filter="victima">Tracte a la víctima</button>
    <button class="chip" type="button" data-filter="publicacio">Publicació responsable</button>
  </div>

  <div class="cards-grid cards-grid-compact">
    {% for case in site.jurisprudence %}
      <article class="card" data-topic-card data-topic="{{ case.filter_topics | join: '|' }}">
        <div class="card-header">
          <div>
            <div class="badge">{{ case.topic }}</div>
            <h3>{{ case.title }}</h3>
          </div>
          <div class="card-meta">{{ case.published }}</div>
        </div>
        <p>{{ case.summary }}</p>
        <div class="card-footer">
          {% for tag in case.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
          <a class="card-link" href="{{ case.url | relative_url }}">Veure detall</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

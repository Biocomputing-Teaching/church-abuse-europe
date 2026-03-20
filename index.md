---
title: "Abusos sexuals a menors en l'Església catòlica a Europa"
description: "Portal Jekyll amb informes, jurisprudència del TEDH, seguiment institucional recent i directoris públics per país."
---
<section class="hero">
  <div class="hero-grid">
    <div>
      <p class="eyebrow">Anàlisi jurídica i institucional</p>
      <h1>Abusos sexuals a menors en l'Església catòlica: corpus europeu verificable</h1>
      <p class="lead">Aquest lloc reuneix informes públics, comissions independents, portals institucionals i jurisprudència del TEDH per estudiar responsabilitat institucional, investigació efectiva, reparació i seguiment de línies encara obertes.</p>
      <div class="hero-actions">
        <a class="button button-primary" href="{{ '/informes/' | relative_url }}">Explorar informes</a>
        <a class="button button-secondary" href="{{ '/jurisprudencia/' | relative_url }}">Veure jurisprudència</a>
      </div>
      <p class="microcopy">La base no intenta convertir-se en una llista de denúncies. És un repositori de traça pública, centrat en documents, estàndards jurídics i seguiment institucional.</p>
    </div>

    <aside class="hero-panel">
      <div class="hero-panel-card">
        <span class="metric">{{ site.reports.size }}</span>
        <span class="metric-label">dossiers i informes principals incorporats</span>
      </div>
      <div class="hero-panel-card">
        <span class="metric">{{ site.jurisprudence.size }}</span>
        <span class="metric-label">precedents del TEDH mapejats</span>
      </div>
      <div class="hero-panel-card">
        <span class="metric">{{ site.tracks.size }}</span>
        <span class="metric-label">seguiments amb confirmació pública recent</span>
      </div>
      <div class="hero-panel-note">
        <strong>Criteri editorial:</strong> no es presenten procediments oberts com si fossin resolts i no s'atribueixen xifres que la font no publiqui de manera expressa.
      </div>
    </aside>
  </div>
</section>

<section class="section">
  <div class="section-head">
    <p class="eyebrow">Panorama europeu</p>
    <h2>Informes de referència</h2>
    <p>El corpus parteix d'informes oficials o institucionalment forts d'Espanya, França, Alemanya, Irlanda, Regne Unit, Països Baixos, Bèlgica i Portugal. Alguns aporten estimacions poblacionals; d'altres, arxius, protocols o recomanacions.</p>
  </div>
  <div class="cards-grid">
    {% assign featured_reports = site.reports | sort: "order" | slice: 0, 6 %}
    {% for report in featured_reports %}
      <article class="card {% if report.wide %}wide{% endif %}">
        <div class="card-header">
          <div>
            <div class="badge">{{ report.country }}</div>
            <h3>{{ report.title }}</h3>
          </div>
          <div class="card-meta">
            <strong>{{ report.institution }}</strong><br>
            {{ report.period }}
          </div>
        </div>
        <p>{{ report.summary }}</p>
        <div class="card-footer">
          {% for tag in report.tags limit:2 %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
          <a class="card-link" href="{{ report.url | relative_url }}">Obrir dossier</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section section-dark">
  <div class="section-head">
    <p class="eyebrow">Jurisprudència</p>
    <h2>Preguntes jurídiques clau</h2>
    <p>La secció de jurisprudència treballa per problemes jurídics: obligacions positives de protecció, investigació efectiva, dignitat processal de la víctima i límits de la publicació.</p>
  </div>
  <div class="cards-grid cards-grid-compact">
    {% for case in site.jurisprudence %}
      <article class="card">
        <div class="badge">{{ case.topic }}</div>
        <h3>{{ case.title }}</h3>
        <p>{{ case.summary }}</p>
        <div class="card-footer">
          <a class="card-link" href="{{ case.url | relative_url }}">Llegir precedent</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <p class="eyebrow">Seguiment</p>
    <h2>Línies obertes amb traça pública recent</h2>
    <p>Aquest bloc no enumera rumors. Només hi entren procediments, dossiers o seguiments amb base pública recent i amb data exacta de constatació.</p>
  </div>
  <div class="cards-grid">
    {% for track in site.tracks %}
      <article class="card wide">
        <div class="card-header">
          <div>
            <div class="badge">{{ track.country }}</div>
            <h3>{{ track.title }}</h3>
          </div>
          <div class="card-meta">
            <strong>Darrera constatació</strong><br>
            {{ track.verified_on }}
          </div>
        </div>
        <p>{{ track.summary }}</p>
        <div class="card-footer">
          <a class="card-link" href="{{ track.url | relative_url }}">Obrir seguiment</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section split-panels">
  <article class="panel">
    <p class="eyebrow">Metodologia</p>
    <h2>Com està pensat aquest repositori</h2>
    <ul class="clean-list">
      <li>No es barreja material periodístic amb base probatòria sense etiquetar-lo.</li>
      <li>Les dades quantitatives només es mostren quan són públiques i textualment atribuïbles.</li>
      <li>La navegació és per informes, jurisprudència, seguiment i portals per país.</li>
      <li>Els casos oberts es llegeixen a la llum dels estàndards del TEDH.</li>
    </ul>
  </article>
  <article class="panel panel-alert">
    <p class="eyebrow">Límit necessari</p>
    <h2>No és una base de noms, sinó una base de responsabilitats</h2>
    <p>En una matèria tan sensible, l'interès públic no exigeix una llista indiscriminada de persones, sinó un mapa documentat de comissions, arxius, respostes estatals, protocols, reparació i doctrina judicial aplicable.</p>
  </article>
</section>

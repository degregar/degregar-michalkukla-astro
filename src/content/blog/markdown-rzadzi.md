---
created: 2024-04-03T08:21
updated: 2024-04-03T11:58
title: Zakończyłem przenosiny bloga. Markdown rządzi!
tags:
  - programowanie
  - technologia
  - blog
  - markdown
  - 1-sukces-dziennie
  - astro
---
Poprzednio pisałem o tym [[przenioslem-bloga-na-astro|dlaczego zmieniam technologię bloga]].

Przeniosłem wreszcie wszystkie [[moje-startupy|historie moich startupów]] oraz pozostałe artykuły i [[#esej|eseje]] na nowego bloga opartego o [Astro](https://astro.build/)! Uff... sporo pracy, bo ponad 30 długich historii, 16 artykułów, ale na szczęście mam to już z głowy. Tyle dobrze, że nie publikowałem zbyt regularnie ;-) Teraz planuję to zmienić.

Skonfigurowałem też domenę, aby kierowała na nowy serwer, więc migracja zakończona.

Największym wyzwaniem było podlinkowanie wszystkiego na nowo i ułożenie w nowej strukturze dokumentów [markdown](https://en.wikipedia.org/wiki/Markdown).

Podczas przenosin czułem obawę, że gdyby przyszło mi do głowy, żeby zmienić w przyszłości po raz kolejny framework, to będzie to dość bolesne przeżycie. Jednak markdown jest elastyczną i wdzięczną do edycji strukturą. Można bowiem użyć do zawarcia wszystkich metadanych we [frontmatter](https://dev.to/dailydevtips1/what-exactly-is-frontmatter-123g). Dlatego nie boję się już tak bardzo o kolejną zmianę technologii.

Teraz liczę na to, że nie będzie problemu z nieistniejącymi linkami. To było dużym problemem, gdy używałem WordPressa i zmieniłem na przykład strukturę linków.

Największą zaletą jest dla mnie to, że mogę linkować do artykułów, które są jeszcze w powijakach. Linki do nieopublikowanych wpisów nie są tworzone, dopóki co nie znajdą się w kolekcji Astro. Gdy zdecyduję się opublikować podlinkowany artykuł, to wystarczy, że przeniosę go do odpowiedniego folderu. Wtedy link jest tworzony.

Działa to rewelacyjnie w Obsidian. Mogę linkować do dowolnej treści w moim *vault* i publikować tylko to, co jest już gotowe i wartościowe.

Jeśli ciekawią Cię techniczne szczegóły: do hostowania użyłem Firebase.

Jeśli chcesz dowiedzieć się więcej lub skopiować to rozwiązanie, to rzuć okiem na [publiczne repozytorium mojego bloga](https://github.com/degregar/michalkukla-astro).
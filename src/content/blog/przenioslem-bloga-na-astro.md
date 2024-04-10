---
created: 2024-04-02T10:33
updated: 2024-04-10T22:11
aliases:
  - Przeniosłem bloga na Astro
title: Przeniosłem bloga na Astro
description: Odkryj, jak przenieść bloga z WordPressa na Astro, korzystając z Obsidian jako narzędzia do zarządzania treściami. Poznaj, jak zintegrować te dwa narzędzia, aby ułatwić proces publikacji i zarządzania treściami.
tags:
  - 1-sukces-dziennie
  - programowanie
  - relacja
  - astro
  - obsidian
  - blog
  - digital-garden
  - ssg
---
TLDR: Ostatnio zaczęło mnie bardzo uwierać synchronizowanie Obsidian z moim blogiem na WordPressie. Postawiłem bloga na [Astro](https://astro.build/), a do tego udało mi się znaleźć sposób na zintegrowanie [Obsidian](https://obsidian.md/), więc mogę publikować w bardzo łatwy sposób treści teraz.

W Obisidianie mam świetne linkowanie i łatwą edycję treści. Przerzucanie moich wpisów do WordPressa jest uciążliwe.

Astro mignęło mi kilka razy jako dobry silnik [SSG](https://en.wikipedia.org/wiki/Static_site_generator). Ostatnio [Marek Olczyk-Brzeziński](https://www.linkedin.com/in/marekbrzezinski/) zaprezentował swojego [bloga](https://marekbrzezinski.pl/) właśnie na nim i zainspirował mnie, aby pomyśleć nad migracją.

Najważniejsze jednak było dla mnie łatwe zintegrowanie tego z Obsidian. I udało się! No... może nie tak super łatwo. Przetestowałem [remark-wiki-link](https://github.com/datopian/datahub/blob/main/packages/remark-wiki-link/README.md), ale nie chciało mi to działać.

Za to znalazłem dobrą [alternatywę](https://astro-digital-garden.stereobooster.com/recipes/wikilinks/).

Uwaga! Jest to wczesna wersja, dokumentacja jest słaba i autor ostrzega, że mogą być *breaking changes*. Nie polecam tego osobom, które nie kodują, albo nie mają kodera JS pod ręką.

Jeśli chcesz, możesz skorzystać z [repozytorium mojego digital garden](https://github.com/degregar/michalkukla-astro).

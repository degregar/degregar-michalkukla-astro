---
created: 2024-03-28T10:04:00
updated: 2024-04-10T21:38
title: Nie rozwijaj nowych funkcji
description: Odkryj, jak skupić się na jednej klasie funkcji w aplikacji, aby zapewnić lepsze doświadczenie użytkownika i uniknąć pułapki feature creep. Dowiedz się, jak wprowadzać funkcje, które pomagają zrealizować cele użytkownika w ramach jednej klasy funkcji.
aliases:
  - Nie rozwijaj nowych funkcji
tags:
  - 1-sukces-dziennie
  - mvp
  - slowtracker
  - ux
  - markdown
  - xss
---
Udało mi się naprawić sporo małych rzeczy w [[slowtracker]] i do tego zrobić [markdown](https://pl.wikipedia.org/wiki/Markdown) z zabezpieczeniem przed [XSS](https://pl.wikipedia.org/wiki/Cross-site_scripting). Skupiłem się głównie na tym, co jest związane z podstawową klasą funkcji, żeby użytkownicy mieli jeszcze lepszy [UX](https://pl.wikipedia.org/wiki/User_experience) i chętnie używali wskazówek od AI.

Co mam na myśli, mówiąc o _klasie funkcji_?

Funkcje (z ang. _features_) w aplikacji mogą pełnić różne… funkcje 🙂 Głównym założeniem SlowTracker jest to, żeby użytkownicy na moment zatrzymali się przy swoich sukcesach i postępach, poświętowali je, uznali własną sprawczość i czerpali satysfakcję z małych, codziennych rzeczy.

Oprócz tego aplikacja pełni funkcję motywacyjną. Warto wracać co jakiś czas, zwłaszcza w chwilach zwątpienia, wrócić do tego, co już się udało. Zobaczyć jaką drogę przeszliśmy, z jakimi rzeczami musieliśmy się mierzyć.

Są jeszcze wyzwania. Służą one do [[polecane-ksiazki#nawyki|budowania nawyków]] i skupienia swojej uwagi na jednej rzeczy, którą chcemy praktykować. Np. codzienna medytacja lub pisanie na blogu _[[1-sukces-dziennie|1 sukcesu dziennie]]_.

Zapisywanie sukcesów, powrót do nich oraz wyzwania **to trzy różne klasy funkcji**.

Kiedy aktywnie rozwijałem [[microskills]], to wpadłem w pułapkę _feature creep_, bo próbowałem rozwijać wiele klas funkcji jednocześnie. Nie da się zrobić wszystkiego, a nie umiałem się zdecydować w co inwestować swój czas. Przez to żadna klasa nie była w pełni dopracowana i nie robiła dobrze tego, co powinna robić świetnie.

Teraz bardzo chciałem tego uniknąć i skupić się na tym, żeby robić jedną rzecz świetnie. Chcę wprowadzać funkcje, które pomagają zrealizować cele użytkownika w ramach jednej klasy funkcji.

Przykładowo, aby wspomóc dodawanie sukcesu, oprócz standardowego pola tekstowego, umożliwiłem też wprowadzanie głosowe (_speech-to-text_).

Na urządzeniach mobilnych ta opcja zazwyczaj jest wbudowana w klawiaturę systemową. W [wersji webowej SlowTrackera](https://app.slowtracker.com/) (z której korzystam chyba częściej niż z mobilnej) jest do tego specjalny guzik.
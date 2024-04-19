---
created: 2024-04-19T14:50
updated: 2024-04-19T15:37
title: Research metod szyfrowania danych w aplikacjach
description: Zrobiłem z Szymonem Stasikiem z mojego mastermindu rekonesans odnośnie szyfrowania danych. Potrzebne mi to było do mojego projektu SlowTracker. Głowa mi od tego spuchła, ale też wiele mi się rozjaśniło.
tags:
  - 1-sukces-dziennie
  - kryptografia
  - mastermind
  - technologia
  - programowanie
---
Zrobiłem z [Szymonem Stasikiem](https://www.linkedin.com/in/stasik/) z mojego mastermindu (i z dużą pomocą Chat GPT) rekonesans odnośnie szyfrowania danych. Potrzebne mi to do mojego projektu [[slowtracker|SlowTracker]].

Głowa mi od tego spuchła 🤯 pomimo, że mam przecież [[moje-startupy|sporo doświadczeń]] wokół aplikacji mobilnych.

Zrozumiałem zastosowanie kluczy symetrycznych i niesymetrycznych (aż dziw bierze, że dopiero teraz). Odkryłem sposób na *multi-key encryption*, *social recovery* oraz *proxy re-encryption*.

Opracowałem koncepcję zastosowania E2EE z wykorzystaniem dwóch kluczy: do notatek prywatnych i współdzielonych. To zapewni odpowiedni poziom bezpieczeństwa przed przypadkowym moim błędem jako kodera: uniknę pokazywania innym notatek, które powinny być zawsze prywatne. 

W ramach codziennej relacji postanowiłem podzielić się tymi znaleziskami i moim punktem widzenia w kontekście tworzenia [[#mvp|MVP]]. Zebrałem wszystkie wnioski i napisałem [[mvp-szyfrowanie-danych|artykuł na temat bezpieczeństwa i szyfrowania danych w kontekście mojej aplikacji]]: metod szyfrowania, dostępu do kluczy szyfrujących i ich zabezpieczania. Dzięki temu podsumowałem sobie też moją wiedzę i przemyślałem raz jeszcze w jaki sposób chcę zabezpieczyć dane moich użytkowników.

Artykuł wyszedł dość długi, więc oddzieliłem go od codziennej relacji.

W każdym razie z tematem borykałem się od dwóch miesięcy nie mogąc się zdecydować na sensowne rozwiązanie, dlatego dziękuję Szymonowi za nieocenioną pomoc.
---
created: 2024-04-25T07:02
updated: 2024-04-25T07:18
tags:
  - 1-sukces-dziennie
  - slowtracker
  - testy-automatyczne
  - tdd
  - kryptografia
  - programowanie
  - technologia
title: Wjechało szyfrowanie w SlowTracker
description: Prywatne wpisy w SlowTracker są teraz podwójnie zabezpieczone przed dostępem niepowołanych osób.
---
Wjechało szyfrowanie treści wpisów w [[slowtracker|SlowTracker]]!

Ostatni tydzień intensywnie pracowałem nad tematem szyfrowania danych. Temat jest dosyć złożony, o czym pisałem między innymi [[mvp-szyfrowanie-danych|w kontekście MVP]].

Wpisy domyślnie są zawsze prywatne. Jednak niedawno umożliwiłem udostępnianie sukcesów niepublicznie po linku, publicznie w swoim profilu i - niezależnie od tego - [[slowtracker-udostepnianie-sukcesow-w-wyzwaniach|udostępnianie sukcesów w wyzwaniach]].

Wpisy, które mają być udostępnione, są szyfrowane jednym kluczem, natomiast każdy prywatny wpis jest szyfrowany kluczem prywatnym użytkownika.

Dzięki temu nawet, jeśli ktoś dostałby się do bazy danych czy kopii zapasowych, to nie będzie mógł ich odczytać. Ponadto taki system chroni też przed przypadkowym udostępnieniem wpisów, które powinny pozostać prywatne.

Nie obyło się bez problemów. Mechanizm jest dość skomplikowany, bo musi automatycznie zmieniać klucze szyfrujące w zależności od kilku różnych warunków. Jednak na szczęście zacząłem wdrażanie tego od testów automatycznych (blisko 20 scenariuszy), więc problemy wychwytywałem i naprawiałem błyskawicznie.
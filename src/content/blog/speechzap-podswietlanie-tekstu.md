---
created: 2024-07-04T07:37
updated: 2024-07-05T12:26
tags:
  - 1-sukces-dziennie
  - speechzap
  - mvp
  - programowanie
title: "Nowość w SpeechZap: podświetlanie tekstu"
description: Zrobiłem w dyktafonie SpeechZap podświetlanie słów, które są aktualnie wypowiadane w nagraniu. Do tego po kliknięciu w konkretne słowo można przejść do fragmentu nagrania, w którym ono pada.
publishedAt: 2024-07-04T12:25:00
---
Chcesz sprawdzić, czy transkrypcja w dyktafonie [[speechzap|SpeechZap]] jest dobrze zrobiona? A może chcesz szybko znaleźć konkretny moment w nagraniu?

Zrobiłem w SpeechZap podświetlanie słów, które są aktualnie wypowiadane. Do tego po kliknięciu w konkretne słowo można przejść do fragmentu nagrania, w którym ono pada.

<iframe width="315" height="560"
src="https://www.youtube.com/embed/D1IqWU4HZI4"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

Ta funkcja okazała się być bardzo prosta w implementacji, bo wystarczyło wykorzystać dane, które już otrzymuję od AssemblyAI - modelu językowego, którego używam do tworzenia transkrypcji.

---
created: 2024-07-17T08:31
updated: 2024-07-18T16:39
tags:
  - 1-sukces-dziennie
  - ux
  - speechzap
title: "Bogatsze dane w SpeechZap: paragrafy, slug i tagi"
description: Odkryj nowe możliwości w SpeechZap! Dowiedz się, jak automatyczne tworzenie tytułów i podział na paragrafy mogą ułatwić zarządzanie notatkami i transkrypcjami. Zyskaj bogatsze dane do edycji dłuższych treści. Kliknij, aby dowiedzieć się więcej o nowościach w SpeechZap.
ogDescription: Zobacz, jak nowe funkcje w SpeechZap ułatwiają edycję i zarządzanie transkrypcjami dzięki automatycznym tytułom i paragrafom.
newsletterDescription: Zobacz, jak nowe funkcje w SpeechZap ułatwiają edycję i zarządzanie transkrypcjami dzięki automatycznym tytułom i paragrafom.
publishedAt: 2024-07-18T16:36
---
W wersji subskrypcyjnej dyktafonu [[speechzap|SpeechZap]] do tej pory, na wzór Chat GPT, tworzyłem automatycznie tytuł na podstawie treści transkrypcji. Dzięki temu łatwiej jest odnaleźć nagranie na liście lub przypomnieć sobie o czym było.

Ale AssemblyAI daje też, zupełnie bezpłatnie (choć nie *out-of-the-box*), możliwość podzielenia całej transkrypcji na zdania lub paragrafy. O ile dzielenie na zdania nie jest mi potrzebne, o tyle **paragrafy pomagają w redakcji dłuższych treści**.

Zmieniłem więc teraz sposób wyświetlania treści:

![Bogatsze dane w SpeechZap: paragrafy, slug i tagi - przykład dłuższej transkrypcji z paragrafami](./bogatsze-dane-w-speechzap-paragrafy-slug-i-tagi-przyk-ad-d-u-szej-transkrypcji-z-paragrafami.png)

Funkcja klikania w konkretne słowa, aby przejść do odpowiadającego mu fragmentu nagrania również jest dostępna.

Ponadto podczas generowania tytułu, tworzę również listę tagów, które dołączam do całej struktury danych. W przyszłości będę je być może pokazywał na liście, aby ułatwić zarządzanie notatkami, ale nie mam jeszcze pomysłu gdzie i jak to zrobić, żeby nie zaciemnić obrazu. (Może masz pomysł? Napisz na support@speechzap.com!)

Dla przykładowego nagrania...

![Bogatsze dane w SpeechZap: paragrafy, slug i tagi - przykład generowania tagów i name slug](./bogatsze-dane-w-speechzap-paragrafy-slug-i-tagi-przyk-ad-generowania-tag-w-i-name-slug.png)

... struktura danych, w której znajdziesz:
- `name` - pełna nazwa nagrania, którą możesz edytować w aplikacji
- `nameSlug` - nazwa bez znaków specjalnych, przydaje się do tworzenia nazwy pliku, np. w [[integracja-speechzap-obsidian|Obsidian]]
- `generatedTags` - lista tagów wygenerowana przez SpeechZap
- `generatedTitle` - nazwa wygenerowana przez SpeechZap
- `paragraphs` - pełna lista paragrafów z dodatkowymi informacjami z AssemblyAI
- `paragraphsText` - pełny tekst paragrafów, każdy oddzielony podwójnym znakiem nowej linii (`\n\n`)

... będzie wyglądać tak:

![Bogatsze dane w SpeechZap: paragrafy, slug i tagi - widok struktury danych](./bogatsze-dane-w-speechzap-paragrafy-slug-i-tagi-widok-struktury-danych.png)

Cała ta struktura wysyłana jest po kliknięciu w dodaną [akcję](https://app.speechzap.com/webhook-actions). O integracjach dowiesz się więcej na moim [kanale YouTube](https://www.youtube.com/playlist?list=PLBp2HwSxh1_U08EEoR8p2vA9jxflRmqcs).

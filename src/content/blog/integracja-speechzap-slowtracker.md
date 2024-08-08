---
created: 2024-07-31T09:47
updated: 2024-08-05T15:53
title: Integracja SpeechZap i SlowTracker
description: Integracja SpeechZap z aplikacją SlowTracker pozwala na automatyczne przesyłanie transkrypcji z nagrań głosowych do SlowTrackera. Dowiedz się, jak w kilku prostych krokach skonfigurować proces automatyzacji, korzystając z platformy Make i gotowego blueprinta. To idealne rozwiązanie dla osób, które chcą szybciej tworzyć treści i lepiej organizować swoje notatki.
ogDescription: Jak zautomatyzować przesyłanie notatek z dyktafonu do SlowTrackera? Zobacz, jak to zrobić jednym kliknięciem!
newsletterDescription: Sprawdź, jak połączyć SpeechZap z SlowTrackerem i zautomatyzować przesyłanie transkrypcji z nagrań głosowych. Prosty poradnik dla każdego, kto chce efektywniej zarządzać swoimi notatkami.
tags:
  - 1-sukces-dziennie
  - speechzap
  - slowtracker
  - automatyzacja
  - integracja
  - make
publishedAt: 2024-08-05T15:51
---
Aż dziwne, że dopiero teraz się za to zabrałem. Korzystam ze [[slowtracker|SlowTracker]] codziennie, bo z niego potem tworzę treści. Dyktafon [[speechzap|SpeechZap]] zrobiłem już półtorej miesiąca temu, ale wysyłanie transkrypcji z dyktafonu do SlowTracker zrobiłem dopiero wczoraj.

Dzisiaj pokażę jak jednym kliknięciem przesyłać notatki nagrane dyktafonem SpeechZap do aplikacji SlowTracker.
## Jak stworzyć scenariusz w Make?

![Integracja SpeechZap i SlowTracker - moduły w make](./integracja-speechzap-i-slowtracker-modu-y-w-make.png)


Sprawa jest dość prosta. Wystarczy bezpłatne konto w Make i zaimportować [ten blueprint](https://michalkukla.pl/blueprints/speechzap-slowtracker.json). Jedyne, co trzeba zrobić, to:

1. Podać swój adres email w module JSON (wiem, to trochę głupie, ale to zaszłość z pierwszej wersji SlowTrackera)

![Integracja SpeechZap i SlowTracker - podaj adres email](./integracja-speechzap-i-slowtracker-podaj-adres-email.png)

2.  Podać klucz API do SlowTracker, który znajdziesz [tutaj](https://app.slowtracker.com/api-keys)

![Integracja SpeechZap i SlowTracker - podaj klucz API SlowTracker](./integracja-speechzap-i-slowtracker-podaj-klucz-api-slowtracker.png)

Jeśli chcesz, możesz stworzyć więcej scenariuszy, żeby móc wybrać poziom satysfakcji (od 1 do 3) na etapie wysyłania ze SpeechZap.

Możesz też użyć OpenAI lub innego LLM, aby na podstawie treści przygotować tagi, które dodasz do wpisu. Nie będę jednak komplikował tego przykładu, za to odsyłam Cię do wpisu [[messy-thoughts-workflow|Zautomatyzowane notatki z chaotycznych myśli]], gdzie wyjaśniam jak to osiągnąć.
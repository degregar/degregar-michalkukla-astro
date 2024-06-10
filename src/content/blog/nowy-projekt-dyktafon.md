---
created: 2024-06-03T09:01
updated: 2024-06-10T10:29
title: "Nowy projekt: Dyktafon z AI i integracją z Zapierem"
description: "W kilka dni stworzyłem aplikację, której mi brakowało w mojej pracy: automatyczna transkrypcja do tekstu z możliwością integracji, np. przez wysyłkę webhooków do Zapiera lub Make.com."
tags:
  - 1-sukces-dziennie
  - programowanie
  - ionic
  - speechzap
---
W czwartek rano (początek długiego weekendu) obudziłem się z myślą, że stworzę wreszcie aplikację dyktafonu z automatyczną transkrypcją i integracją z Zapierem. I stworzyłem. Zajęło mi to ok. 3 dni.

Aplikację nazwałem SpeechZap i opisałem historię powstania na [[speechzap|podstronie projektu]].

Wykorzystałem kod źródłowy ze [[slowtracker|SlowTracker]], choć nie obyło się bez problemów. Odkryłem przy okazji [błąd z Ionic]([https://github.com/ionic-team/ionic-framework/issues/23863](https://github.com/ionic-team/ionic-framework/issues/23863 "https://github.com/ionic-team/ionic-framework/issues/23863")), który powoduje problemy z *routingiem* również w SlowTracker. Bardzo dużo pomógł mi znowu [Szymon Stasik](https://www.linkedin.com/in/stasik/), mega doświadczony deweloper (ostatnio mocno w temacie LLM). 

Aplikacja jeszcze nie jest dostępna w sklepie (dzisiaj planuję dokończyć wszystkie formalności), ale można już korzystać w wersji webowej.

Co ciekawe, Szymon zasugerował skorzystanie z [AssemblyAI](https://assemblyai.com). I to była dobra rekomendacja. Początkowo rozważałem Whisper od OpenAI, ale okazało się, że ten pierwszy ma do wykorzystania 100h bezpłatnie, i to w ich najmocniejszym modelu.

Aplikacja działa w ten sposób, że wystarczy w [ustawieniach](https://app.speechzap.com/settings) podać klucz od AssemblyAI (wystarczy utworzyć konto przez maila, nie trzeba podawać żadnych danych do płatności) i można działać.

Jeśli chcemy mieć integrację (np. [[integracja-speechzap-obsidian|automatycznie zapisywać w Obsidian]]), to trzeba założyć jeszcze konto w Zapier lub Make.com i utworzyć *webhooki*. W Zapier nazywa się to [Webhooks by Zapier intergrations](https://zapier.com/apps/webhook/integrations), w Make.com to po prostu [Webhooks](https://www.make.com/en/help/tools/webhooks).

Potem w aplikacji SpeechZap, w zakładce [Akcje](https://app.speechzap.com/webhook-actions) trzeba dodać ten webhook. Pojawi się wtedy pod transkrypcją przycisk, który można kliknąć, gdy transkrypcja się zakończy.

Nie trzeba zakładać konta w SpeechZap. Dane przechowywane są tylko na urządzeniu i z niego są wysyłane bezpośrednio do poszczególnych serwisów.

Zapraszam do testów. Póki co aplikacja jest bezpłatna, nie ma reklam ani żadnych limitów. Jeśli znajdziesz błędy lub będziesz mieć pomysł na kolejną funkcję, to napisz proszę na support@speechzap.com

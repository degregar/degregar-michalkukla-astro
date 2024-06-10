---
created: 2024-06-06T08:53
updated: 2024-06-10T13:45
tags:
  - 1-sukces-dziennie
  - programowanie
  - influxdb
  - mvp
  - speechzap
title: InfluxDB do statystyk - moje pierwsze kroki
description: Kilka pierwszych lekcji i zmiana paradygmatu używania bazy typu time series do gromadzenia statystyk wykorzystania dyktafonu SpeechZap.
---
Udało mi się sprawnie zrobić zbieranie danych statystycznych do mojego nowego projektu [[speechzap|SpeechZap]].

Od samego początku nie miałem i nie planowałem żadnego *backendu* - wszystkie dane użytkowników są trzymane jedynie na urządzeniu użytkownika. Komunikacja z usługami transkrypcji i integracji również nie przechodzi przez moje serwery.

Takie podejście zwiększa bezpieczeństwo danych, ale przez to nie mam żadnych informacji o tym ilu użytkowników korzysta z mojej aplikacji. A wiem, że już kilka osób korzysta.

Potrzebuję jednak statystyk, bo bez tego nie wiem, czy aplikacja jest używana i czy działa dobrze. Wysyłam logi z aplikacji do [Bugsnag](https://bugsnag.com), ale to nie zawsze działa i nie daje pełnego obrazu.

Pomyślałem, że postawię bazę, np. na [Supabase](https://supabase.com) lub na swoim serwerze. Na pewno chciałem uniknąć stawiania backendu na SLS, czy NestJS. Potrzebowałem czegoś, co będzie działać out-of-the-box. I tknęło mnie, że dobrą bazą może być [InfluxDB](https://en.wikipedia.org/wiki/InfluxDB). *Time series*.

Postawiłem toto z Dockera na szybko na moim serwerze i uznałem, że to był dobry wybór. Jest dostępny ładny UI, który umożliwia stworzenie *bucketu* (ichniejsza baza) oraz *API token* do zapisu danych. Jest *endpoint*, na który mogę wysłać dane, jest SDK do JS. Chat GPT szybko wygenerował mi potrzebny kodzik.

Okazało się jednak, że muszę nieco zmienić paradygmat myślenia o zbieraniu takich danych. W przypadku [[slowtracker|SlowTracker]] tworzyłem metryki w postaci snapshotów: raz na czas zbierałem dane o ilości wpisanych sukcesów, zarejestrowanych userach, itd. Wykresy generowałem potem w samodzielnie napisanym *dashboardzie*.

Tutaj najpierw pomyślałem, że będę przesyłał dane o nagraniach, takich jak:
- czas utworzenia nagrania,
- czas rozpoczęcia wysyłania pliku do AssemblyAI,
- czas rozpoczęcia i zakończenia transkrypcji,
- wraz z ogólnymi danymi o nagraniu (np. długość nagrania i wielkość pliku). 

Szybko się jednak okazało, że najlepsze podejście będzie poprzez zapisywanie *eventów* z różnymi wymiarami. Potem mogę te zdarzenia oglądać tak, jak logi w [Datadog](https://datadog.com) (jedno po drugim), a oprócz tego wykonywać różne operacje na nich i np. wyciągać czas wysyłania pliku z różnicy pomiędzy rozpoczęciem wysyłania pliku a rozpoczęciem transkrypcji.

Nie obyło się oczywiście bez drobnych problemów. Chciałem zobaczyć wszystkie rekordy pokazywane jeden za drugim, w kolejności utworzenia. Najpierw okazało się, że rekordy dodawane są osobno dla każdego *field*, które utworzę. A tych miałem kilka (np. `filesize` czy `duration`). 

Na pewno na początek trzeba porządnie zrozumieć różnicę między `tags` a `fields` i `measurements`. I to niestety w [dokumentacji Flux](https://docs.influxdata.com/flux/v0/) nie jest dobrze wyjaśnione. Warto obejrzeć jednak [to wideo](https://www.youtube.com/watch?v=5-AwY8ly6NA) (którego z racji późnej pory nie mogłem obejrzeć wczoraj w domu), bo przynajmniej wprowadza częściowo do tematu strumienia tabel, które mogą być nieco bardziej skomplikowanym konceptem, jeśli siedzieliśmy dużo w bazach relacyjnych (jak ja).

Poza tym dokumentacja oraz Chat GPT pokazuje dokładnie ten sam sposób sortowania. I to ma sens, pod warunkiem, że sortujemy właśnie w ramach jednej tabeli. Zrozumiałem to dopiero po obejrzeniu [tego filmiku](https://www.youtube.com/watch?v=9B4ioIlNGMk).

Uwaga na boku: Paweł z mojego mastermindu robił też research dla swojej aplikacji, w której zbiera dane z IoT i zwrócił mi uwagę, że przy skalowaniu bazy do *multi-server* potrzebna jest płatna licencja.

Podsumowując, wybór wydaje mi się dobry dla mojego przypadku. Potrzebuję danych statystycznych na teraz, ewentualnie do analizy zachowania i podejmowania decyzji na bieżąco. Nie używam tych danych do celów funkcjonalnych dla użytkowników, więc nie przejmuję się też, że coś się rypnie po drodze. Wysyłanie tych danych uznałem za opcjonalne, więc w razie niepowodzenia wysyłam jedynie loga, bez przerywania działania aplikacji.

Popracuję trochę na tym i pewnie dam znać za jakiś czas jakie mam z tego wnioski.
---
created: 2024-07-29T08:27
updated: 2024-07-30T17:45
title: "Nowość w SpeechZap: synchronizacja z chmury do urządzenia"
description: Synchronizacja danych w aplikacji mobilnej SpeechZap! Teraz możesz nagrywać i przetwarzać na tekst notatki na telefonie, a następnie kontynuować pracę na komputerze. Dowiedz się, jak rozwiązałem wyzwania związane z synchronizacją offline-first i jakie mam plany na przyszłość.
ogDescription: "Odkryj nowość w SpeechZap: synchronizacja notatek z chmurą! Pracuj na dowolnym urządzeniu i zachowaj ciągłość pracy nad transkrypcjami."
newsletterDescription: Opisuję jak wprowadziłem synchronizację notatek z chmurą w SpeechZap. Dowiesz się, jak radzić sobie z wyzwaniami synchronizacji offline-first i co planuję na przyszłość. Idealny temat dla programistów i osób zainteresowanych aplikacjami mobilnymi!
tags:
  - 1-sukces-dziennie
  - programowanie
  - mvp
  - speechzap
  - aplikacje-mobilne
publishedAt: 2024-07-30T17:45
---
Zrobiłem w [[speechzap|SpeechZap]] synchronizację notatek z chmurą. Teraz możesz nagrać i zrobić transkrypcję na urządzeniu mobilnym, a potem zalogować się na komputerze i kontynuować pracę nad tekstem.

Ponadto [[speechzap-formatowanie-transkrypcji|formatowanie]] również jest synchronizowane. Możesz je zrobić jeszcze na telefonie albo już później na dowolnym innym urządzeniu.

Praca wymagała jednak kilku etapów, ponieważ SpeechZap jest *offline-first*, czyli baza transkrypcji na każdym urządzeniu jest niezależna od chmury.
## Usuwanie plików audio

Najpierw musiałem uniezależnić samą notatkę od nagrania. Do tej pory wyświetlałem tylko te transkrypcje, dla których były pliki audio.

Zrobiłem więc usuwanie samych nagrań z lokalnego urządzenia i zacząłem wyświetlać notatki, korzystając z danych z lokalnej bazy.
## Dwustronna synchronizacja?

Wahałem się trochę do jakiego etapu zrobić synchronizację. Powinna być dwustronna, czyli zapisywać zarówno z chmury do urządzenia, jak i z urządzenia do chmury.

Jednak to nietrywialne zadanie. Doszedłem do wniosku, że musiałbym zrobić wersjonowanie każdego edytowanego elementu osobno, najlepiej razem z czasem edycji. Mam 3 takie pola:
- tytuł
- tekst transkrypcji podzielony na paragrafy
- formatowanie

Jak zrobić tę synchronizację najszybciej i najłatwiej?

## Pobieranie z chmury

Po dłuższym zastanowieniu uznałem, że póki co mogę zrobić pobieranie z chmury do urządzenia i na tym zakończyć. Było to możliwe, bo z edycji danych robię tylko zmianę tytułu, a najważniejsza treść (surowa i sformatowana) jest najpierw przetwarzana i zapisywana na serwerze, a dopiero potem synchronizowana z urządzeniem mobilnym.

Co prawda miałem wcześniej funkcję edycji tekstu, ale ją usunąłem, bo uznałem, że skoro sam z niej nie korzystam, to pewnie tych kilku użytkowników też nie będzie. I tak planuję znacznie lepszą funkcję edycji, a ona będzie wymagać trochę więcej pracy.

Na ten moment uznaję, że synchronizacja tytułu jest więc niepotrzebna, a edycja też raczej odbywać się będzie dopiero na komputerze, w ramach przygotowania treści np. na social media. 

## Trochę tego dużo...

Gdy już zrobiłem pobieranie wszystkich notatek z chmury, to okazało się, że w ciągu ostatniego 1.5 miesiąca nagrałem ich 160. I były to zarówno wartościowe nagrania (które już dawno przerzuciłem do notatek moimi akcjami), jak i wszystkie "raz dwa trzy cztery" i inne próby mikrofonu (i transkrypcji).

Musiałem więc zrobić jeszcze usuwanie notatek w chmurze. Trochę żałowałem, że nie zrobiłem sobie od razu hurtowego usuwania. Byłaby to jednak kolejna funkcja, a chciałem na ten moment zrobić absolutne minimum konieczne do zrobienia synchronizacji.

Gdy już zrobiłem usuwanie, to okazało się, że nie zrobiłem synchronicznego usuwania. Jeśli na jednym urządzeniu usunę nagranie w chmurze, to powinno się też usunąć na wszystkich innych.

Ale żeby to osiągnąć, to musiałem jakoś oznaczyć transkrypcję jako usuniętą. Mógłbym sprawdzić, czy nagranie z transkrypcją istnieje jeszcze na serwerze, ale na ten moment zrobiłem to inaczej. Nie usuwam od razu (pomimo komunikatu, że operacja jest nieodwracalna) tylko ustawiam datę oznaczenia jako usunięte, a usuwam później.
## Problemy

Do tej pory używałem `filepath` jako identyfikatora nagrania. Jednak to musiało się zmienić. Zacząłem używać `serverNoteId` (identyfikatora nadanego dla transkrypcji po stronie serwera), ale okazało się, że nie zapisuję go lokalnie w ogóle.

Gdybym to naprawił i od razu wymagał tego identyfikatora, to na urządzeniach ze starszą wersją kompletnie by to się rozwaliło. Musiałem więc użyć identyfikatora z AssemblyAI, którego używam do transkrypcji.

Na razie to działa, ale będzie trzeba to zmienić w przyszłości.
## Podsumowanie

Synchronizacja, zwłaszcza dwustronna, jest skomplikowanym zadaniem i nie wprowadziłem pełnego procesu na tym etapie. Nie kopiuję też wszystkich danych. Przyda się np. ustawianie akcji na różnych urządzeniach, choć sam chciałbym mieć mieć różne akcje w zależności od urządzenia, na którym pracuję.

Będę jednak stopniowo dodawał kolejne cegiełki. W następnej kolejności planuję zsynchronizować edycję tytułu. Przetrę tym szlaki i wreszcie osiągnę ideał 🤩
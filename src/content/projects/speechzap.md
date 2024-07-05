---
created: 2024-05-30T09:37
updated: 2024-07-04T11:02
title: SpeechZap
description: Nagrywaj, transkrybuj, łącz się ze wszystkim - Twój inteligentny notatnik głosowy
aliases:
  - SpeechZap
url: https://speechzap.com
---
[SpeechZap](https://speechzap.com) to aplikacja do dyktowania, transkrypcji *speech-to-text* i wysyłania notatek do innych systemów informatycznych.

## Ból

Długo szukałem aplikacji, która pozwoliłaby mi notować podczas spacerów lub jazdy samochodem i robić transkrypcje mojego [[vlog|vloga]]. Czasami podczas półtoragodzinnej jazdy nagrywałem kilkanaście krótkich notatek. Podczas spaceru czasem miałem flow i opisywałem coś, co z powodzeniem mogłoby być niezłym fragmentem artykułu czy postem na social media.

Najpierw próbowałem nagrywać dyktafonem, eksportować to do Google Drive, a potem na komputerze stworzyć skrypt, który automatycznie zrobi transkrypcję z użyciem OpenAI Whisper. Po każdym nagraniu musiałem wysłać plik, co było uciążliwe.

Poza tym jakość transkrypcji jest uzależniona od wielkości modelu. Im większy, tym lepszy rezultat, ale też trwało to znacznie dłużej.

Ostatecznie przestałem z tego korzystać i po prostu raz na czas odsłuchiwałem nagrania, spisując sobie przypomnienia i zadania do zrobienia. Miałem nawet cykliczne zadanie w Remember The Milk: "zrzuć z dyktafonu nagrania". Jakbym miał mało zadań na liście...

Do spisywania zadań korzystałem czasem z Asystenta Google. Potrafił stworzyć przypomnienie na konkretną godzinę. Musiałem jednak z wyprzedzeniem wiedzieć kiedy będę mógł się tym zadaniem zająć, żeby chociaż przepisać go do systemu zarządzania zadaniami.

## Pomysł

Jakiś czas temu rozmawiałem o tym z Gosią. Chyba nawet sama zapytała czy używam czegoś do notowania głosowego i jeśli tak, to czego. Zaczęliśmy się wtedy zastanawiać nad rozwiązaniem. Dobrym sposobem było notowanie w Google Keep. Robi automatyczną transkrypcję, całkiem niezłą. Problem jednak w tym, że chcieliśmy to zintegrować automatycznie z naszymi systemami, np. Obsidian, żeby nie trzeba było szukać tego w Google Keep potem i kopiować treści do swoich systemów.

Okazało się, że jest API do Google Keep. Można się podpiąć, np. jakimś cyklicznym zadaniem (tzw. cron job). Byłoby świetnie, gdyby nie to, że to jest dostępne tylko dla Google Workspace, czyli tylko w domenie firmowej wpiętej w Google. Dla prywatnych adresów @gmail.com nie ma takiej możliwości.

Poza tym Google Keep służy mi do trzymania rzeczy, których nie chcę mieszać z notatkami i zadaniami do zrobienia. Jest tam np. lista zakupów, czy lista rzeczy do zabrania na wyjazd. Dużo też innych ważnych danych, do których potrzebuję mieć w razie czego dostęp offline.

Sprawdziłem też wiele aplikacji dyktafonu, ale żadna nie pozwalała na integrację z innymi systemami. Transkrypcje też pozostawiały wiele do życzenia. Moja podstawowa apka dyktafonu pozwalała na rozpoznawanie mowy tylko w kilku popularnych językach. Oczywiście polskiego na tej liście nie było.

Ostatecznie nie znaleźliśmy z Gosią rozwiązania, ale z grubsza przemyślałem jakie funkcje powinna taka aplikacja zawierać, żeby dobrze się z niej korzystało. Musiała robić transkrypcje i wysyłać żądanie ([webhook](https://en.wikipedia.org/wiki/Webhook)) do różnych integratorów, np. do Zapier lub Make.com.

## Impuls

Wreszcie któregoś dnia rano obudziłem się z myślą, że zrobię ten dyktafon. Miałem już 4-miesięczne doświadczenie z budowaniem [[slowtracker|SlowTracker]], skorzystałem z kodu i w miarę szybko przygotowałem proof-of-concept.

Opracowałem z Chatem GPT nazwę, znalazłem domenę i w długi weekend czerwcowy zrobiłem pierwszą wersję, która działa z grubsza zgodnie z tym, jak chciałem.

Stworzenie aplikacji w sklepie [Google Play](https://play.google.com/store/apps/details?id=com.speechzap.mobile) w wersji MVP z możliwością zakupu subskrypcji zajęło mi ok. 3 tygodnie.

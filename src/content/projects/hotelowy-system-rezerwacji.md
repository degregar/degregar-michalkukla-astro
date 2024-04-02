---
created: 2016-01-01T16:22:00
updated: 2024-04-02T16:26
title: Hotelowy system rezerwacji
description: Property Management System
---
## Wstęp
Kontekst znajdziesz we wpisie o [[crm-hotelowy|CRM do analizy ruchu telefonicznego w hotelu]].

W skrócie: rodzice w branży hospitality od 40 lat, pracowałem z nimi przez 6 lat, zdobywając doświadczenia w marketingu i zarządzaniu.

Miałem sporo doświadczeń w branży, byłem blisko recepcji, wiedziałem czego potrzebują lub mogłem się tego łatwo dowiedzieć. Korzystaliśmy z dość prostego, taniego systemu hotelowego PMS (Property Management System).

Niestety ten PMS był słabo wspierany. Błędy naprawiali miesiącami. Stwierdziłem, że napiszę sam taki system hotelowy jako aplikację webową.

Ale…

1. Nie umiem w desktopowe apki, umiem tylko w webowe. A jednak potrzeba chociażby coś wydrukować, wystawić paragon albo zakodować kartę hotelową. Aplikacje webowe mają duże ograniczenia, jeśli chodzi o integrację z urządzeniami, czy chociażby z dyskiem twardym komputera. Kupowanie integracji mijało się z celem. Do tego sterowniki do drukarek fiskalnych trzeba było pisać albo kupować… Ponadto teraz już istnieją frameworki do desktopowych apek, które umożliwiały pisanie aplikacji desktopowych w językach typowo webowych. 
2. System hotelowy to nie tylko grafik. To całe mnóstwo funkcjonalności z zarządzania klientami, bezpieczeństwo przechowywania danych, zapewnienie dość dużej elastyczności, funkcje tworzenia raportów, w tym do GUS. To nie była wartość, którą chciałem budować, ale było to wymaganie, którego implementacja mogła kosztować bardzo dużo czasu. Lepiej już zaczekać, aż naprawią błędy, niż pisać od zera miesiącami taki system.
3. Aplikacja webowa wymaga stałego dostępu do internetu. Jak braknie dostępu, to aplikacja nie działa. Później okazało się, że nie wymaga, bo można zrobić lokalny storage w przeglądarce. Poza tym internet stawał się coraz bardziej dostępny, więc to ryzyko można było zaadresować na kilka sposobów. Kopie zapasowe lokalne, regularne, częste zrzuty ekranu na lokalny dysk, czy coś w tym rodzaju. Możliwości było tak naprawdę mnóstwo, ale brakło zbicia pomysłów z kimś.
4. Mało czasu. Cały czas zajmowałem się marketingiem i zarządzaniem, bo było tam bardzo dużo do zrobienia, żeby zoptymalizować procesy i poprawić sprzedaż.

## Jak teraz podszedłbym do tego?

1. Nie wiem, czy podjąłbym inną decyzję co do rozpoczęcia developmentu, bo miałem mało czasu i skupiałem się na procesach hotelowych, marketingowych i zarządczych. 
2. Być może mogłem lepiej zrozumieć potrzeby recepcji i sprawdzić co z tych funkcji jest im naprawdę potrzebne na co dzień, gdzie mogę zrobić coś lepiej niż dotychczasowy system. Zignorować tymczasowo to, co co nie jest krytyczne dla codziennej pracy recepcji. Np. raporty do GUS. Mógłbym zrobić je choćby ręcznie dla klienta, a potem zautomatyzować skryptem, jak już bym wiedział w jaki sposób robi się takie raporty i co w nich jest istotne. Może nawet użyłbym jakiegoś eksportu danych do CSV/Excela i w ogóle nie implementował w programie, bo Excel doskonale radzi sobie z takimi rzeczami.
3. Szukałbym wspólników: developerów, sprzedawców. Niezobowiązujące rozmowy z różnymi osobami, otwarcie rekrutacji na co-founderów mogły mi dać lepszy obraz możliwości i zobaczyć, czy ktoś nadawałby się na dobrego wspólnika. Wolałbym już oddać dużą część udziałów w zamian za pomoc w popchnięciu tego do przodu, niż samemu pisać przez jakiś czas, a potem skupić się na pilniejszych rzeczach.
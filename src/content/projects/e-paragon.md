---
created: 2022-01-01T16:46:00
updated: 2024-04-02T16:50
title: E-paragon
description: Eksploracja tematu spisywania wydatków
---
## Wstęp

Od lat z żoną spisujemy wydatki i uciążliwe często jest spisywanie rzeczy z paragonów.

Ponadto coraz większy nacisk państwo polskie kładzie na cyfryzację i uszczelnianie systemu podatkowego.

Trend był dosyć widoczny, więc chciałem się na to jakoś przygotować, stworzyć może jakiś produkt związany albo z drukarkami fiskalnymi albo z narzędziami, które pozwalałyby z tych e-paragonów pobierać wszystkie wydatki, automatycznie je klasyfikować i ułatwiać monitorowanie domowych wydatków.

Ten artykuł bardziej mówi o temacie, który eksplorowałem, niż o konkretnym projekcie.

## Kasy fiskalne

Z drukarkami fiskalnymi problem jest taki, że jest to rynek mocno uregulowany. Sprzęt musi mieć odpowiednie atesty, spełniać wymagania ustawowe, a dostarczać i instalować może go jedynie uprawniony instalator.

Nie można tak po prostu wejść z ulicy i zacząć robić kasy fiskalne wystawiające e-paragony. Prawdopodobnie dałoby się to pożenić, aby taki e-paragon byłby wysyłany na maila, oprócz paragonu papierowego, ale samemu takiego urządzenia raczej nie będę produkował.

Podrzucanie pomysłu producentom z kolei mijało się z celem zakładania biznesu z tym związanego, bo i po co producenci mieliby ze mną wchodzić we współpracę?

Chociaż mógłbym na przykład dostarczać rozwiązanie, z którym ich drukarki mogłyby się integrować, wysyłając np. kopię takiego paragonu w odpowiednim formacie.

## Aplikacja do skanowania paragonów

Od jakiegoś czasu uczyłem się tematu Machine Learning, więc pomyślałem, że skoro jest już sporo rozwiązań OCR (ang. Optical Character Recognition, czyli w wolnym tłumaczeniu komputerowe rozpoznawanie znaków), a czcionka na paragonach jest dosyć prosta, to powinno być łatwo stworzyć aplikację do skanowania paragonów za pomocą zdjęcia z telefonu i zapisywania wszystkich potrzebnych mi danych prosto do excela.

Założenie było takie, że aplikacja oszczędza czas, więc chętnie ludzie będą płacić za taką apkę, jeśli spisują ręcznie wszystko.

Ponadto apka mogła potem dostarczać dużo analiz, które pozwalałby np. wyciągnąć aktualne ceny produktów z innych sklepów, co dawało możliwości zarabiania na rekomendacjach produktów i wysyłania powiadomień o aktualnych promocjach wprost na telefon użytkownika.

Branża FMCG znienawidziłaby mnie – już widzę te clickbaitowe reklamy mojej apki 😉

Ale może chcieliby skorzystać z dostępu do bazy użytkowników i płacić mi za reklamę.

## Wymagania

Ogólny pomysł miał być prosty: zdjęcie paragonu, przerobienie do postaci cyfrowej i zapisanie wydatków w odpowiedniej kategorii.

Często na paragonach są różne pozycje, z różnych kategorii. My to z żoną rozbijamy, ale te aplikacje, które są dostępne na rynku, nie umieją tego robić.

Dodatkowym problemem z paragonami jest to, że czasami pozycje, które tam są opisane, niewiele mówią konsumentowi. Kupiłem jakieś ciastka, a potem za pierona nie mogłem ich znaleźć na tym paragonie, bo nazywały się jakoś nazwą producenta lub jakimś nieznanym kodem.

Aplikacja mogłaby rozpoznawać te różne kody z różnych sklepów, aby łatwiej było to skategoryzować.

Przy większej skali i wielu użytkownikach korzystających z systemu te dane mogłyby być współdzielone. System uczyłby się rozpoznawać poprawnie wszystkie pozycje.

## Proof-of-Concept (PoC)

Pomyślałem, że nauczę się przy okazji jak takie aplikacje się tworzy. Nigdy nie miałem z tym do czynienia, a zawsze chciałem choć liznąć tematu.

Zacząłem więc robić PoC używając wieloplatformowego frameworka Flutter, ale okazało się to być trudniejsze, niż myślałem. Lokalnie na telefonie wszystkie biblioteki do OCR miały duży problem, były często nieaktualne i wygenerowane teksty były albo bardzo niedokładne, albo sformatowane w taki sposób, że trudno było połączyć ze sobą wszystkie bloki tekstu.

W sklepie Google Play była też jedna apka do skanowania paragonów, ale mnie nie zachwyciła. Widać było, że mają dużo większą skuteczność, ale nadal nie idealną. Automatyczne skanowanie paragonów bez nadzoru nie wchodziło więc w grę.

PoC pokazało, że aplikacja jest dużo trudniejsza, niż się spodziewałem, i wiele problemów będzie ze zrobieniem wystarczająco stabilnej aplikacji z powtarzalną jakością przetworzonych paragonów.

## Jakie przekonania miałem?

1. E-paragony to trend, który w przyszłości można zmonetyzować. W przyszłości. Kiedyś. Być może. O ile Ministerstwo Cyfryzacji nie zrobi czegoś takiego za mnie, bo wtedy to nie ma sensu.
2. Ludzie będą płacić za oszczędność czasu przy spisywaniu wydatków. Kiedyś spisywaliśmy paragony co do produktu i byliśmy w stanie powiedzieć ile wydaliśmy na cytryny. Potem grupowaliśmy, bo szkoda było czasu. Czasami wystarcza nam wiedzeć tylko rząd wielkości za jedzenie i restauracje, nie potrzebujemy aż tak dokładnych danych, więc może samo spisanie kwoty byłoby już wystarczające?
3. FOMO. Jak nie wejdę w to teraz, to ktoś zaraz zajmie najlepsze domeny i zrobi produkt, który zawojuje rynek. A może ten rynek wcale nie jest duży? Może to nie jest produkt czy usługa pierwszej potrzeby i ludzie z tego będą rezygnować jak z dóbr luksusowych?
4. Upierałem się, żeby OCR robić po stronie telefonu, żeby wykorzystać jego moc obliczeniową.

## Jak teraz bym do tego podszedł?

Trend może i jest, ale czy jest sens się w niego pakować tylko dlatego, że go widzimy? Można obserwować, można się udzielać, poznawać ludzi, ale niekoniecznie od razu działać.

PoC z apką i OCR po stronie telefonu zajęło mi kilka dni, a mogłem zrobić równie dobrze apkę, która robi fotkę, wysyła na serwer i ja ręcznie ją przerabiam do Excela i wysyłam klientowi mailem albo w jakimś arkuszu odkładam całą bazę. Kasować za usługę, a nie jednorazowo za aplikację. Potem to automatyzować i robić OCR po stronie serwera.

Apka kosztowałaby mnie dużo mniej czasu, usługę mógłbym sobie automatyzować i testować w wolnym czasie. Na początku oczywiście wiązałoby mnie to, bo musiałbym ręcznie i dość szybko przerabiać te paragony. A przynajmniej sprawdzać ich czytelność, żeby klient przypadkiem nie wyrzucił tego paragonu, jeśli byłaby potrzebna lepszej jakości fotka.

Możnaby iść o krok dalej i kazać klientom wysyłać mailem zdjęcie paragonu. Nie trzeba nawet aplikacji do tego budować, choć byłoby to z pewnością łatwiejsze rozwiązanie dla klienta. Udostępnij do aplikacji „E-paragon” i już.

Można wtedy gromadzić wszystkie paragony w jednym miejscu w chmurze i udostępniać API dla zewnętrznych dostawców. Zintegrować z Zapierem i klienci sami mogą sobie zbudować wtedy system, jaki im pasuje.

Sprawdziłem jeszcze teraz aplikację Ministerstwa Finansów E-Paragony, ale ona nie skanuje paragonów, jedynie używa kodów QR, jeśli paragon taki ma. Wydatki trzeba wpisać ręcznie, co mija się z celem.

Kto wie, może jeszcze jest przestrzeń na zrobienie takiej apki?

Ciąg dalszy we wpisie [[przepisywanie-paragonow-eksperyment|Eksperyment – przepisywanie paragonów do Excela]].
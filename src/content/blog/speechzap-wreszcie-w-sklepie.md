---
created: 2024-06-28T06:46
updated: 2024-07-05T10:54
tags:
  - 1-sukces-dziennie
  - speechzap
  - programowanie
  - google-play
  - frustracja
title: SpeechZap po przebojach wreszcie w sklepie Google Play!
description: To była największa przeprawa, jaką miałem do tej pory z tym sklepem. Nauczyłem się, że Google Play jest bardzo surowe i to nie jest relacja partnerska.
---
publishedAt: 2024-07-05T10:54
[[speechzap|SpeechZap]] wreszcie w sklepie Google Play! 

To była największa przeprawa, jaką miałem do tej pory z tym sklepem. Nauczyłem się, że Google Play jest bardzo surowe i to nie jest relacja partnerska.
## Proof-of-concept

Aby stworzyć SpeechZap, użyłem kodu źródłowego z poprzedniej aplikacji [[slowtracker|SlowTracker]]. Baza pozwoliła mi dość szybko postawić wszystkie potrzebne mi rzeczy, łącznie z testami, skryptami do *deployu*, itd.

Kodu tak naprawdę niewiele potrzebowałem, bo nie chciałem logowania użytkowników, które stanowiło istotną część *codebase'u*.

Aplikacja miała być naprawdę prosta:
- nagrywanie notatek głosowych
- tworzenie transkrypcji
- uruchamianie akcji (np. przez Zapier lub Make)

W weekend zrobiłem cały potrzebny kod *proof-of-concept*. Po następnych kilku dniach poprawek, postanowiłem wysłać aplikację do sklepu.

Zrobiłem więc potrzebne w ogłoszeniu *key visuals* ze *screenshotami* z aplikacji. I tutaj znów skopiowałem te ze SlowTrackera, bo koncepcję miałem podobną.

Zignorowałem na ten moment poprawianie ikony aplikacji, bo chciałem głównie przetestować, czy mi to działa na telefonie.

Wrzuciłem wersję testową i dalej pracowałem.
## Pierwsza publikacja

Wreszcie postanowiłem opublikować i po kilku dniach dostałem odmowę z powodu naruszenia postanowień o *deceptive behaviour*. Czyli że niby kogoś oszukuję lub podszywam się pod inną aplikację.

Okazało się, że gdy w Figmie wrzucałem nowy *screenshot* z apki i zasłoniłem nim poprzedni ze SlowTrackera, to obrazka nie wstawiłem wewnątrz ramki i wyeksportowałem bez niego. Pod spodem został zrzut ekranu ze SlowTrackera.

No trudno, parę dni w plecy, myślę. Wrzuciłem jeszcze raz, z poprawionymi wizualkami. Po tygodniu dostałem wiadomość, że moja aplikacja została zawieszona, wyrzucona ze sklepu i nie będzie dostępna dla nikogo, kto już tę apkę zainstalował (a nikt jeszcze nie zainstalował). Do tego informacja, że jak poprawię, to mogę wrzucić.

Powodem było znów *deceptive behaviour*.

Okazało się, że nie poprawiłem tej ikonki, którą zignorowałem na czas testów i znowu podszywam się (pod swoją własną apkę, oczywiście).
## Druga publikacja

Poprawiłem więc tę nieszczęsna ikonkę i wszedłem do panelu, żeby opublikować zmiany. Okazało się, że nie mogę zrobić absolutnie NIC. Nawet usunąć apki. (Wisi od tej pory taka zawieszona na czerwono i straszy.)

Wyczytałem, że jeśli uważam, że kara jest zbyt surowa, to mogę się odwołać. Odwołałem się. John (bez nazwiska), który sprawdzał moją aplikację, odpisał mi, że naruszyłem zasady i jak poprawię, to mogę wrzucić.

Odpisałem, że nie mogę niczego wrzucić, na co on mi odpisał to samo co wcześniej, podświetlając tylko fragmenty, że muszę wrzucić tę aplikację od nowa, z nowym identyfikatorem i nową nazwą.

Noż kurde! Walnąłem się z ikonką, a oni mi wyrzucili do kosza ponad godzinę wyklikiwania aplikacji (tam trzeba ponad 10 formularzy wypełnić, z czego jeden frustrująco szczegółowy).

Odpisałem jeszcze raz. John wysłał tę samą wiadomość (zdarta płyta) i podkreślił zapisy o tym, że jak będę kontynuował moje *deceptive behaviour*, to sankcje będą jeszcze bardziej surowe (Czyli co? Wywalą mi całe konto?). Moje pytania zignorował. I zamknął wątek.

???!!!

Dostałem za to w kolejnym mailu ankietę do wypełnienia. Nie była pozytywna.
## Strach

Teraz już byłem porządnie wkurzony i zaniepokojony, że wywalą mi jeszcze SlowTracker ze sklepu. Napisałem jeszcze raz. W każdym mailu próbowałem dowiedzieć się czegoś więcej o tym dlaczego tak mnie potraktowali i co teraz mam zrobić.

Zapytałem o wytyczne odnośnie nazwy: czy mam zupełnie zmienić nazwę aplikacji?

Poświęciłem kilka godzin na znalezienie dobrej nazwy i domeny (z czym od ZAWSZE miałem problem i jest to najbardziej frustrujące zadanie dla mnie w każdym projekcie), a teraz muszę to wszystko wywalić i zacząć od nowa?

Nie byłem miły już w tych ostatnich mailach, bo ich uprzejme zapewnienia o pomocy pozostawały bez pokrycia. Wprost napisałem, że wygląda to tak, jakbym nie rozmawiał z człowiekiem.

John podkreślił kolejne zapisy i napisał, że nie może mi wskazać żadnych dodatkowych informacji dotyczących nowej nazwy ani w ogóle niczego, bo wie tylko tyle, co mi napisał (czyli niewiele).

Pozostało mi wyklikać nową apkę. Zamiast `SpeechZap` użyłem nazwy `SpeechZap Recorder`. Zamiast `com.speechzap.app` zrobiłem identyfikator `com.speechzap.mobile`, jak poradził mi Szymon z mojego *mastermind*. Przedarłem się przez te wszystkie nieszczęsne formularze i upewniłem się kilkukrotnie, że wizualki i ikonki skazują na aplikację dyktafonu.

Nie opublikowałem jej jeszcze w pełni, ale wersja do otwartych testów w Polsce została zaakceptowana wreszcie i od kilku dni można ją pobrać i używać.

Nie opuścił mnie jednak niepokój związany z tym, że właściwie w dowolnym momencie może się okazać, że nie przeczytałem jakiegoś jednego zapisu gdzieś w czeluściach jakiejś polityki i zabiją mój biznes jednym kliknięciem.
## Podsumowanie

Przyznam, że poszedłem trochę po najmniejszej linii oporu i nie przykładałem specjalnej wagi do szczegółów. Spodziewałem się, że Google Play wytknie mi błędy i po prostu nie zaakceptuje zmian, a nie, że wywali moją aplikację ze sklepu bez uwzględnienia odwołania.

Próbowałem na miękko i po partnersku: przyznałem się do błędów i podkreśliłem brak złych zamiarów. Zostałem potraktowany z buta. Nie czuję się już partnerem w tej relacji, ale nachalnym męczybułą, pionkiem i *desperado*, którego trzeba trzymać krótko.

Słyszałem wcześniej historie o tym, jak platformy social mediowe zamykały ludziom duże konta z dnia na dzień, ale nie sądziłem, że też mnie to czeka za stosunkowo drobne przewinienie.

Najbardziej zdziwiło mnie, jak łatwo można wylecieć ze sklepu. Popełniłem dwa błędy. Przy pierwszej próbie wykryli tylko jeden z nich, a przy drugim podejściu drugi. Nie sprawdzili dokładnie i nie wychwycili wszystkich uchybień od razu.

Trudno jest mi teraz przewidzieć jak zachowają się przy kolejnych moich błędach. Być może podejście [[Agile]] ochroni mnie przed decyzją jednego urzędnika. Częste wypuszczanie małych, dobrze przetestowanych zmian powinno ograniczyć liczbę potknięć.

*Wish me luck!*

Update: Jest już w [sklepie](https://play.google.com/store/apps/details?id=com.speechzap.mobile)!
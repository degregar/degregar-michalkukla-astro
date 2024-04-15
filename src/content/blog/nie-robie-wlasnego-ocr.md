---
created: 2024-04-15T08:11
updated: 2024-04-15T14:47
title: Zdecydowałem się nie robić własnego OCR do faktur.
description: Dlaczego zrezygnowałem ze stworzenia potrzebnego narzędzia? Krótka historia mojego dylematu.
tags:
  - 1-sukces-dziennie
  - programowanie
  - technologia
  - proces
  - startupy
  - saas
---
Uwielbiam tworzyć narzędzia. Od dziecka starałem się automatyzować co się da. Dołka w ziemi nie umiałem wykopać bez zastanowienia się jak można by tę pracę usprawnić. To jeden z najważniejszych powodów, dla których zostałem programistą. 

Gdy widzę problem, który można spróbować rozwiązać za pomocą technologii, to rzucam się na to jak Kubuś Puchatek na garnuszek pysznego miodku. Dlatego gdy zobaczyłem jak moi rodzice w swojej firmie przepisują dane z faktur do arkusza kalkulacyjnego, to postanowiłem to zautomatyzować.

Technologie [OCR](https://pl.wikipedia.org/wiki/Optyczne_rozpoznawanie_znak%C3%B3w) istnieją od roku 1914. Skanowanie tablic rejestracyjnych jest jednym z praktyczniejszych zastosowań. Samo rozpoznawanie znaków jest teraz stosunkowo proste. Sam robiłem taki algorytm na zajęcia z [computer vision](https://pl.wikipedia.org/wiki/Rozpoznawanie_obraz%C3%B3w). Jednak rozpoznanie który ciąg znaków jest numerem faktury a który kwotą do zapłaty, to już trudniejsza sprawa.

Mając doświadczenie jako programista od razu sprawdziłem technologie, z których mógłbym zbudować samodzielnie takiego OCR. Miałem wcześniej doświadczenia z tematem, gdy próbowałem zrobić [[przepisywanie-paragonow-eksperyment|skanowanie paragonów na potrzeby rozliczeń domowych]]. Nie byłem wtedy zadowolony z żadnych dostępnych bibliotek do aplikacji mobilnych, a zewnętrzne usługi były dość drogie.

Znalazłem AWS Textract. Zrobiłem w ciągu jednego dnia [PoC](https://en.wikipedia.org/wiki/Proof_of_concept) i stwierdziłem, że można spróbować to wdrożyć. Znalazłem też OCR od Fakturownia. Ceny zaczynały się od 0,50 zł netto za stronę. Wyglądało obiecująco.

Jednak po rozmowie z rodzicami okazało się, że jak wejdzie obowiązkowy [KSeF](https://www.podatki.gov.pl/ksef/), to taki system nie będzie miał sensu. Poza tym przy 300-350 fakturach kosztowych miesięcznie (1 faktura to czasem więcej niż 1 strona) to sam koszt skanowania może wynieść kilka stówek.

Zostawiłem temat. Ale niebawem okazało się, że KSeF nie będzie obowiązkowy od 2024 roku, a faktury nadal rodzice przepisują.

Sprawdziłem jak sobie radzi AWS Textract i niestety zdarzały się błędy. Przeliczyłem koszty stworzenia oprogramowania, które radziłoby sobie z niedociągnięciami i dawało dobre rezultaty. Niestety, nie było to tanie. Zbudowanie narzędzia, w którym można porównać skan z wyciągniętymi danymi, poprawianie tych danych, utrzymanie infrastruktury, poprawki do systemu... nie wyglądało to na [micro-SaaS](https://en.wikipedia.org/wiki/Software_as_a_service). Wyglądało to raczej na poważne przedsięwzięcie, które będzie się opłacać, gdy będę miał przynajmniej kilkudziesięciu klientów.

I nie dawało to dobrych zarobków. Z jednego klienta zarobiłbym kilkadziesiąt złotych na czysto. Miałbym sporo pracy ze sprzedażą tego narzędzia.

Mimo to postanowiłem przetestować jeszcze jak radziłby sobie Google Vision. To tańszy model, który mógłby znacznie zbić koszty jednostkowe. W połączeniu z GPT-4 potrafił wyciągnąć wszystkie potrzebne dane lepiej niż AWS Textract i za mniejszą cenę.

Zapytałem jeszcze w mojej grupie mastermind o pewne technikalia. Dostałem rzeczową odpowiedź i sugestię, aby skorzystać z wFirma, bo ponoć działało rewelacyjnie i 100% faktur poprawnie rozczytał.

To mi dało do myślenia. Nie chciałem tak łatwo porzucić idei stworzenia własnego, niewielkiego narzędzia, mającego spory potencjał, ale wiedziałem dwie rzeczy:
1. **To nie będzie małe narzędzie.** Bo przydałby się eksport faktur, dostęp wielu użytkowników, filtrowanie, sortowanie i cholera wie co jeszcze. PoC a [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) to dwie różne rzeczy.
2. **To nie jest coś, co mnie jara.** O ile samo automatyzowanie spoko, o tyle skanowanie faktur nie jest dla mnie sexy. Jest raczej czymś, na czym można łatwo się wyłożyć. To nie jest biznes dla mnie.

Chwilę walczyłem ze sobą, ale ostatecznie uznałem, że wypróbuję wFirma. Koszt niewielki (na dzień pisania to było 49 zł netto /mc), a jak nie będzie działać dobrze, to będę wiedział co mogę zrobić lepiej w moim narzędziu. 

I podjęcie tej decyzji uznałem za duży sukces. [[moje-startupy|Zbyt często]] rzucałem się na tworzenie narzędzia tylko dlatego, że mogłem. Wartość dla klienta mogę dostarczyć inną metodą, niż od razu tworzyć dedykowane oprogramowanie. Mogę pomóc znacznie mniejszym kosztem. Odpadają mi miesiące rozwoju oprogramowania, frustracja przy sprzedaży go do innych klientów i późniejsze utrzymanie. Za to zyskuję dużo czasu, który mogę przeznaczyć na rozwój produktu, który daje mi większą satysfakcję.

O efektach tej decyzji opowiem we wpisie [[najlepszy-ocr-na-rynku|Najlepszy OCR na rynku]].
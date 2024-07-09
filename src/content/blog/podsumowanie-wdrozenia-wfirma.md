---
created: 2024-07-09T08:28
updated: 2024-07-09T16:53
title: Podsumowanie wdrożenia wFirma w hotelu
description: "Podsumowanie wdrożenia wFirma w hotelu: czy automatyzacja fakturowania przyniosła oczekiwane korzyści? W artykule analizuję rzeczywistość wprowadzenia systemu OCR i jakie problemy napotkaliśmy. Dowiedz się, dlaczego pomimo licznych trudności, właściciele hotelu zdecydowali się kontynuować korzystanie z wFirma i jakie zyskali korzyści."
ogDescription: Sprawdź, jak wFirma wpłynęła na proces księgowania faktur w hotelu. Mimo problemów z OCR i integracją, system przyniósł istotne korzyści. Poznaj szczegóły wdrożenia i dowiedz się, jakie usprawnienia wprowadzono.
newsletterDescription: "Automatyzacja fakturowania w hotelu z wFirma: analiza wdrożenia, napotkane problemy i niespodziewane korzyści. Czy wFirma to dobry wybór? Przeczytaj moje podsumowanie i dowiedz się więcej!"
aliases:
  - Podsumowanie wdrożenia wFirma w hotelu
publishedAt: 2024-07-09T16:52
tags:
  - 1-sukces-dziennie
  - automatyzacja
  - wfirma
  - hotelarstwo
  - fakturowanie
  - ksiegowosc
  - integracja
  - raporty
  - ocr
---
W kwietniu [[nie-robie-wlasnego-ocr|pisałem]] o wyborze wFirma jako narzędzia do skanowania faktur kosztowych, który rzekomo potrafił poprawnie zaksięgować 100% dokumentów. Daliśmy sobie 3 miesiące na testy i właśnie wczoraj nadszedł dzień podsumowania.
## Kontekst

Pracuje w firmie z branży hotelarsko-gastronomicznej jako [konsultant](https://michalkukla.pl/konsultacje), gdzie faktur kosztowych jest ok. 300-400 miesięcznie. 

Aby znaleźć fakturę lub sprawdzić, czy kontrahent w ogóle ją wystawił, trzeba było szukać po teczkach lub dzwonić do księgowej.

Na koniec miesiąca pracownicy poświęcali kilka godzin na zeskanowanie wszystkich faktur do jednego PDF, w razie gdyby trzeba było znaleźć coś jednak nie będąc w biurze.

Właściciele do tej pory wpisywali sobie faktury do arkusza kalkulacyjnego na potrzeby stworzenia [[raport-kasowy|raportu kasowego]] , a faktury do zapłacenia lądowały na specjalnej kupce.

I to przepisywanie stało się najważniejszym impulsem do wprowadzenia automatyzacji. Po *researchu* postanowiłem zasugerować wFirma, ponieważ był tani i nie miał limitu skanu faktur.

Pracownicy recepcji mieli księgować faktury do systemu, a właściciele korzystać z tych danych do:
- zlecania przelewów prosto z programu,
- tworzenia raportu kasowego automatycznie,
- zaoszczędzenia na księgowości dzięki eksportowi do docelowego programu księgowego,
- łatwego odszukania potrzebnej faktury.
## Rzeczywistość

Niestety okazało się, że OCR nie działa tak dobrze i 30-70% faktur wymagało jakiejś korekty. Czasami były to drobne rzeczy, jak niepoprawna metoda płatności, a czasami brakowało połowy danych.

Wynika to z tego, że wiele faktur jest wciąż drukowanych na drukarkach igłowych, jakość wydruków pozostawia wiele do życzenia i jest wiele stawek VAT. Niejednolity format dokumentu nie ułatwia sprawy.

Recepcja hotelowa, która wprowadzała te faktury, popełniała całą masę błędów. Teoretycznie zaksięgowanie wymagało raptem 1-2 minut, jednak często przeszkodą były zdolności techniczne, brak przywiązania do detalu i prawdopodobnie ogólny opór, wynikający z konieczności wykonywania obowiązków księgowego.

Właściciele musieli ręcznie przeglądać wszystkie faktury i co rusz wracali z uwagami.

Integracja z bankiem miała zapewnić skrócenie czasu potrzebnego na zlecanie przelewów, ale okazało się, że umęczyliśmy się z integracją z Alior Bankiem, w którym niedawno założyliśmy konto. System był nieprzystępny, a wFirma miała błędy w integracji. Udawało się zrobić hurtem tylko 3 przelewy. 

Pisaliśmy kilkukrotnie do pomocy i sprawy przekazywano do działu technicznego, ale nie doczekaliśmy się odpowiedzi i po dwóch tygodniach ostatecznie zapomnieliśmy o temacie. Właściciel wrócił do sprawdzonego banku i dawnego sposobu.

No i ostatecznie nie doczytałem, że eksport danych do programu księgowego naszego biura to eksport tylko faktur przychodowych, a nie kosztowych. To oznacza, że tę całą robotę księgowania i tak trzeba zrobić drugi raz.

I pomimo tych wszystkich problemów klient podjął decyzję, aby nadal korzystać z programu.
## Dlaczego klient się zdecydował nadal korzystać?

Na bieżąco dowiadywałem się o wszystkich problemach i starałem się je rozwiązać różnymi metodami, więc na wczorajszym spotkaniu nie musiałem już o nie pytać. Czułem, że prawdopodobnie porzucimy cały ten program i wrócimy do starych nawyków. 

Jednak pomimo tego zapytałem o korzyści, jakie widzą w tym rozwiązaniu. I o dziwo było ich kilka. Oto one:
1. **Tworzenie raportu kasowego**
Stworzyłem [[raport-kasowy|integrację]], która umożliwiła mi pobieranie danych z wFirma i przygotowanie automatycznego raportu wydatków gotówkowych. Teraz właściciel nie musiał wprowadzać ręcznie faktur, co oszczędzało trochę czasu. Ponadto czasem zapominał ustawiać pewnych przełączników, które były wymagane do zaimportowania do raportu kasowego. Zmniejszyliśmy zatem ilość błędów.

2. **Wygoda w dostępie do faktur**
> Szalenie wygodne, podgląd pod każdą fakturę natychmiast, nie muszę grzebać po grupach towarowych, teraz rozliczenia miesięczne w jednym arkuszu. Dzwoni mi kobieta, czterech faktur nie było, proszę zaczekać, proszę podać kwotę i datę, nie mam takiej faktury, 20 sekund to trwało, genialne po prostu!

Ten cytat mówi sam za siebie 😄

3. **Monitoring płatności**
Widać ile faktur jest do zapłacenia i na kiedy, wszystko w jednym miejscu.

Oczywiście trochę wracamy do punktu wyjścia z wprowadzaniem dokumentów, bo jednak nie dało się oddelegować samego wprowadzania danych z powodu masy błędów, jakie pracownicy popełniali. Właściciele sami muszą te dokumenty księgować. Jednak pozwala to na większą kontrolę i zmniejsza nakład pracy związany z poprawianiem po innych.

Stworzyłem też integrację, która pozwala wyciągnąć skany dokumentów z systemu pogrupowane na 4 kategorie. Dla księgowej to spore ułatwienie, bo może niektóre grupy księgować hurtem.

## Podsumowanie

wFirma nie jest idealnym rozwiązaniem. OCR nie działa w 100% dobrze (powiedziałbym, że ledwie w 50%) i pracownik księgujący fakturę musi przykładać dużą wagę do szczegółów.

Na pewno wprowadzenie takiego systemu, gdzie łatwo odnaleźć dokumentu (wraz ze skanem) za pomocą kilku kliknięć, to duże ułatwienie w wielu procesach administracyjno-księgowych. Czasem trzeba sprawdzić, czy w ogóle otrzymaliśmy fakturę, a czasem potrzebujemy ją odnaleźć po dłuższym czasie, choćby po to, aby złożyć reklamację.

Samo skanowanie faktur nadal robią pracownicy, więc tej najprostszej czynności, której nie da się za bardzo zepsuć, a która zajmuje jednak czas, nie muszą wykonywać właściciele. Łatwiej dzięki temu wyjechać na *workation*. 

Ponadto wFirma daje pełny dostęp po API, co jest ogromnym plusem, bo umożliwia cały szereg integracji.

Ogólnie uznaliśmy, że wdrożenie, pomimo niespełnienia wszystkich oczekiwań oraz wystąpienia wielu technicznych i organizacyjnych trudności, przyniosło firmie korzyści.
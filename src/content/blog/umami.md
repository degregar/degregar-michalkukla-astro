---
created: 2024-07-10T08:10
updated: 2024-07-10T17:07
tags:
  - 1-sukces-dziennie
  - analityka
  - programowanie
title: Umami - analityka bez ciasteczek
description: Szukasz alternatywy dla Plausible do monitorowania statystyk na swojej stronie bez ciasteczek? Sprawdź Umami - proste narzędzie do analizy ruchu, które nie wymaga uciążliwych zgód na cookies i jest łatwe w obsłudze. Dowiedz się więcej o moich doświadczeniach z jego instalacją i konfiguracją.
ogDescription: Odkryj Umami - narzędzie do analityki bez ciasteczek. Dowiedz się, jak je zainstalować i skonfigurować na swoim serwerze, aby skutecznie monitorować ruch na stronie.
newsletterDescription: Chcesz monitorować ruch na swojej stronie bez użycia ciasteczek? W najnowszym wpisie opisuję, jak zainstalować i skonfigurować Umami - narzędzie do analizy statystyk, które nie wymaga zgód na cookies. Sprawdź, jak łatwo możesz to zrobić!
publishedAt: 2024-07-10T17:04
---
W moim [[digital-garden|digital garden]] brakowało mi statystyk. O ile do tej pory tworzyłem treści bez dodatkowej promocji, o tyle teraz zacząłem publikować [[automatyczny-newsletter|newsletter]], więc chciałem sprawdzić skuteczność moich działań.

Do tej pory korzystałem z [Plausible](https://plausible.io/), hostowane samodzielnie (przez CapRover można szybko wyklikać), ale ostatnio coś mi się popsuło z moim serwerem i musiałem postawić statystyki jeszcze raz. Ponadto zauważyłem, że nie zliczało mi poprawnie unikalnych wizyt.

Postanowiłem poszukać czegoś, co (tak jak Plausible):
- pozwoli mi uzyskać podstawowy wgląd w ruch na stronie, ale jednocześnie...
- nie będzie wymagać ode mnie wyświetlania upierdliwych okienek z ciasteczkami i...
- mogę to postawić na własnym serwerze (*self-hosted*).

Mignęło mi na [blogu Marka Brzezińskiego](https://marekbrze.com/pl/blog/w-jaki-sposob-zbudowalem-strone), że korzysta z [Umami](https://umami.is/) i postanowiłem wypróbować.

Umami również bardzo łatwo wyklikać na CapRover i do tego potrzebuje mniej dodatkowych serwisów. Wystarczy *front* i baza (np. postgres), podczas gdy Plausible z automatu instalowało tych serwisów aż 4.

Poza tym interfejs wygląda nieco lepiej. Drobne detale i animacje robią dużą różnicę. I wygląda na to, że da się więcej rzeczy poustawiać (raporty, *eventy*, porównania, itp.)

Napisałem do Marka i podpowiedział mi, żeby ustawić sobie [wykluczanie swoich własnych wizyt](https://umami.is/docs/guides/exclude-my-own-visits). I to była mega porada, bo nie sprawdzałem do tej pory, czy to możliwe w Plausible, a statystyki przy niewielkim ruchu łatwo zaburzyć zwykłymi testami w środowisku lokalnym, z którego korzystam choćby podczas redakcji wpisów.

Co prawda na lokalu wyłączyłem statystyki inną metodą, ale ustawienie flagi w `localStorage` przydaje się, gdy często wchodzimy na swoją stronę, by np. skopiować link do artykułu, który chcemy podesłać znajomemu.

Utworzyłem więc specjalną ukrytą podstronę, która pozwala na ustawienie tej flagi na dowolnym urządzeniu (wystarczy kliknąć w jedyny guzik na tej stronie). Bo o ile łatwo sobie to ustawić z poziomu przeglądarki w [DevTools](https://developer.chrome.com/docs/devtools?hl=pl), o tyle na komórce nie znam łatwego sposobu.

> [!tip] Jak na komórce wejść do DevTools?
> Jeśli włączysz tryb deweloperski w komórce i podłączysz się po kablu, to możesz wejść w Chrome na stronę chrome://inspect. Tam znajdziesz podłączone urządzenia, a w nich otwarte zakładki. Po kliknięciu w `inspect` otworzysz stronę (choć u mnie bez zawartości) i w konsoli możesz wklepać komendę.

Guzik jednak załatwił sprawę idealnie. Nie powiem jednak jaka to strona, bo jeszcze klikniesz i nie zobaczę co czytasz ani jak długo 😉

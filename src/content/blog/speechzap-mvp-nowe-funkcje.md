---
created: 2024-06-14T08:16
updated: 2024-06-14T12:48
title: SpeechZap - nowe funkcje
description: W SpeechZap możesz teraz zmieniać tytuł pliku na liście, wybierać język przed transkrypcją i usuwać transkrypcje bez kasowania nagrania. Idealne dla nagrywających w różnych językach.
tags:
  - 1-sukces-dziennie
  - speechzap
  - mvp
---
Gosia poprosiła mnie o nowe funkcje w [[speechzap|SpeechZap]], więc zakodowałem.

## 1. Zmiana nazwy pliku

Co prawda sama nazwa pliku się nie zmienia, ale tytuł na liście będzie można modyfikować.

## 2. Wybieranie języka przed transkrypcją.

Gosia chciała nagrywać w różnych językach, a [AssemblyAI](https://assemblyai.com) (model AI do transkrypcji) działa czasem dziwnie. Jeśli nagranie jest w języku polskim, z kilkoma słowami po angielsku, to transkrypcja po polsku będzie zawierać polskie słowa i te kilka słów po angielsku w oryginalnej pisowni po angielsku.

I ta funkcja mi się podoba. Często w moich artykułach mam anglojęzyczne wtrącenia, które wolałbym pozostawić.

Jeśli jednak nagrasz wszystko po angielsku a transkrypcję zrobisz po polsku, wtedy Assembly **przetłumaczy** całe nagranie na język polski. Nie wiadomo, czy to *bug*, czy *feature*.

Jeśli, tak jak Gosia, uważasz, że to *bug* (bo chcesz mieć transkrypcję po angielsku), to zmiana ustawień przed każdym nagraniem będzie uciążliwa.

Dlatego teraz można wybrać języki (w ustawieniach), w jakich najczęściej chcesz nagrywać. Wtedy przed transkrypcją pojawi się możliwość wyboru języka transkrypcji.

Działa to jednak tylko przy wyłączonej automatycznej transkrypcji. Jeśli nadal chcesz ją mieć włączoną, nadal możesz ustawić domyślny język transkrypcji i włączać ją w razie potrzeby.

Ta opcja jest dobra gdy wiesz, że będziesz nagrywać długo w jednym języku (to mój przypadek, kiedy jadę autem lub idę na spacer i tworzę sobie draft artykułu).

## 3. Usuwanie transkrypcji bez usuwania nagrania

Do tej pory było to potrzebne ze względu na błędy w aplikacji, które skutkowały niekończącym się przetwarzaniem 😅

Ale jest jeszcze jeden przypadek, w którym przyda się reset transkrypcji: zmiana języka. Jeśli transkrypcja została zrobiona w języku angielskim, podczas gdy nagranie było w języku polskim, to do tej pory nie dało się tego naprawić bez ponownego nagrywania.
   
Podobnie, gdyby się okazało, że transkrypcja została niespodziewanie przetłumaczona na inny język (o tym pisałem w pkt 2).

Teraz można usunąć transkrypcję i ją ponowić.

---

Poprawiłem też błąd z brakującym kluczem przy automatycznej transkrypcji.

Ogólnie cieszy mnie wprowadzanie funkcji, bo aplikacja jest mała i jeszcze dość łatwo jest robić zmiany.

W planie jeszcze kilka innych udogodnień, o których będę informował na blogu i w newsletterze. Jeśli korzystasz już z aplikacji [[speechzap|SpeechZap]] i brakuje Ci jakiejś opcji, to daj znać na support@speechzap.com
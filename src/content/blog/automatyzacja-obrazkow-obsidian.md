---
created: 2024-06-25T07:13
updated: 2024-07-05T10:54
title: Jak zautomatyzować wstawianie obrazków do postów tworzonych w Obsidian?
description: Dowiedz się, jak stworzyłem skrypt do automatyzacji publikacji obrazków we wpisach na blogu Astro tworzonych w Obsidian. Zobacz, jak zaoszczędzić czas na formatowanie markdown i przenoszenie plików graficznych.
tags:
  - 1-sukces-dziennie
  - obsidian
  - automatyzacja
  - astro
  - programowanie
  - markdown
  - seo
  - produktywnosc
---
publishedAt: 2024-07-05T10:54
Zrobiłem własny skrypt do automatyzacji publikacji obrazków we wpisach na blogu tworzonych w [Obsidian](https://obsidian.md)!

Odkąd [[markdown-rzadzi|prowadzę bloga na Astro]], to wystarczy przenieść plik `.md` do odpowiedniego folderu wewnątrz Obsidian, aby go opublikować. Jednak z obrazkami jest trochę więcej zamieszania.

## Upierdliwe obrazki

Kiedy ostatnio pisałem artykuły o [[raport-kasowy|raportach kasowych]] i [[wskazniki-spa|wskaźnikach SPA]], to wklejałem dużo *screenshotów*. Zwykłe *przeciągnij i upuść* przenosiło plik graficzny do głównego folderu i wklejało do treści pliku w formacie:

`![[Screenshot 2024-06-25 at 07.25.04.png]]`

Ale aby był widoczny we wpisie na blogu z odpowiednim *alt* (na potrzeby SEO), to musiałem:
1. Otworzyć plik w nowym oknie (CTRL + lewy przycisk myszy na plik)
2. Prawy przycisk myszy (PPM) na zakładkę z plikiem, *Rename* i podać nową nazwę pliku (np. `wskazniki-spa-raport-oblozenia.png`)
4. PPM na zakładkę z plikiem, *Move file* i podać nową lokalizację (`michalkukla.pl/content/blog`)
5. Dodać *alt* i zmienić format [[markdown-rzadzi|markdown]] na: ``![Wskaźniki SPA - raport obłożenia](./wskazniki-spa-raport-oblozenia.png)``

Niby prosta sprawa, ale może da się to zautomatyzować?

Pierwsze pytanie: [[czy-warto-automatyzowac|czy warto]]?

## Czy warto to automatyzować?

Sprawdziłem w moim [arkuszu kalkulacyjnym](https://docs.google.com/spreadsheets/d/1JNkBThPDiliYwiC8k7cujK9iHpv8Pb6TXm8Tm-EPXpY/edit?gid=0#gid=0): przy założeniu, że będę publikował raz w tygodniu przez najbliższe 12 miesięcy wpisy ze *screenshotami* lub innymi obrazkami i zajmie mi ok. 5 minut przerobienie wszystkich obrazków, to mogę poświęcić nie więcej niż 3.8 godzin na taką automatyzację.

Czy warto? Wygląda na to, że tak.

Ale warto zastanowić się jeszcze nad założeniami. Czy faktycznie będę publikował przez najbliższe 12 miesięcy?

Napisałem już 58 postów z serii [[1-sukces-dziennie|1 sukces dziennie]], które publikuję na podstawie moich codziennych wpisów do [[slowtracker|SlowTracker]]. Zaczynam zauważać pierwsze efekty mojego pisania (o tym innym razem) i mam w planie dzielić się moimi postępami zwłaszcza w obszarze automatyzacji. Mogę więc bezpiecznie założyć, że przez najbliższe pół roku będę nadal pisał.

Nawet jeśli ten maksymalny czas do inwestycji w automatyzację skróci się o połowę, to nadal mam 2 godziny do zaryzykowania. A poza tym to coś nowego 🤩, co mogę opisać na blogu 📈 w ramach serii o automatyzacjach 😇 

## Realizacja

Co prawda nie pisałem chyba żadnej wtyczki do Obsidian (a nawet jeśli, to była to raczej wtyczka testowa), ale z mojego doświadczenia programistycznego wynikało, że API powinno uwzględniać proste operacje:
- pobrania treści zaznaczenia
- przenazwienia i przesunięcia pliku
- zmiany treści zaznaczenia

Okazało się to być mega proste. Poszło gładko i zajęło z testami oraz poprawkami może pół godziny, bo wystarczyło dokładnie opisać co chciałem osiągnąć i wkleić w [Chat GPT](https://chatgpt.com/share/b916ee4f-9e78-445d-8c4f-836992cbad4f).

Cały kod źródłowy znajdziesz w repozytorium [degregar/astro-blog-image-renamer-obisidian-plugin](https://github.com/degregar/astro-blog-image-renamer-obisidian-plugin).

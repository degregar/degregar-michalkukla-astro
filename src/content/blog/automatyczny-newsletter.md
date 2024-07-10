---
created: 2024-07-08T08:43
updated: 2024-07-09T18:48
title: Automatyczny newsletter
description: Artykuł opisuje proces automatyzacji tworzenia i wysyłki newslettera za pomocą wtyczki do Obsidian. Przedstawia wyzwania związane z regularnym publikowaniem i sposób na ich rozwiązanie przy minimalnym nakładzie czasu.
ogDescription: Poznaj sposób na automatyzację tworzenia i wysyłki newslettera, który zaoszczędzi Twój czas i pomoże dotrzeć do subskrybentów regularnie i efektywnie.
newsletterDescription: W tym wpisie podzielę się z Tobą moim rozwiązaniem na automatyzację newsletterów za pomocą wtyczki do Obsidian. Opowiem, jak udało mi się zredukować czas potrzebny na przygotowanie tego właśnie mailingu do kilku minut, dzięki czemu mogę regularnie informować czytelników o nowych wpisach na blogu.
aliases:
  - Automatyczny newsletter
tags:
  - 1-sukces-dziennie
  - newsletter
  - automatyzacja
  - obsidian
  - blog
  - pisanie
publishedAt: 2024-07-08T10:33
---
Zrobiłem wreszcie automaty, które pomogą mi konstruować i wysyłać regularnie mailingi. Co prawda nie mam procesu, który by działał, ale wiem, że będę publikował regularnie i mam subskrybentów, którzy czekają na nie.

Mój odwieczny problem, to zbyt wiele zainteresowań. Aby dać upust mojej potrzebie gromadzenia wiedzy i dzielenia się nią, stworzyłem [[digital-garden|digital garden]], w którym gromadzę wszystkie treści.

Tylko jak z nimi dotrzeć do szerszego grona? To mój drugi problem. Mogę pisać dla siebie, ale zgodnie z ideą [[show-your-work-austin-kleon|Show Your Work]] warto dzielić się tym z innymi.

Próbowałem publikować zajawki moich wpisów na różnych social media ([Instagram](https://www.instagram.com/michalkukla.pl), [LinkedIn](https://www.linkedin.com/in/kukla-michal/), [Facebook](https://www.facebook.com/michalkuklapl)), jednak czułem, że moje posty nie trafiają na podatny grunt. Podejście z podzieleniem postów o danej treści na różne platformy też się nie sprawdziło, bo raz pisałem więcej raz mniej o tematyce, na której miałem się skupić. Nie było w tym żadnej konsekwencji.

Trzeci problem, to regularność. Jeśli coś ma mi zająć godzinę i mam to robić raz na tydzień, to prawdopodobnie nie będę tego robił. *I've been there, too many times*.

Tak było choćby z [[vlog|vlogiem]]. Podjąłem wyzwanie, że będę nagrywał codziennie i tak właśnie robiłem. Gdy tylko postanowiłem trochę zluzować i nagrywać raz na tydzień, to zaraz znalazłem sobie pełno wymówek i przesuwałem termin nad rzeką wstydu, aż pogodziłem się z brakiem uporu i wreszcie po 89 odcinkach zarzuciłem cały projekt.

Potrzebuję więc czegoś, co nie zajmie mi więcej niż kilka minut, a pozwoli docierać regularnie do szerszego grona odbiorców.
## Baza adresowa

Próbując różnych biznesów i uruchamiając produkty, od kursów o produktywności po aplikacje mobilne w duchu slow life, gromadziłem adresy e-mail moich klientów lub osób potencjalnie zainteresowanych danym tematem.

W moim systemie do wysyłki newsletterów [ConvertKit](https://partners.convertkit.com/klgg948khpjo) na różnych listach adresowych mam ponad 500 adresów. Jednak cały czas bujałem się z dylematem: co publikować w tych newsletterach?

Chciałem jednak zacząć wreszcie informować moich subskrybentów (zwłaszcza tych kilku, którzy zapisali się na newsletter z mojego bloga) o nowych wpisach, które mogłyby ich zainteresować.

Długo wahałem się nad formatem newslettera. Doszedłem w końcu do wniosku, że skoro produkuję przynajmniej 5 wpisów tygodniowo, to jeden mailing w tygodniu z krótkim podsumowaniem artykułów, pozwoli czytelnikom samodzielnie zdecydować, czy w tym tygodniu pojawiło się dla nich coś interesującego.

## Problem: jak sporządzić newsletter?

Wyszukiwanie ostatnio opublikowanych postów jest kłopotliwe. Teoretycznie wystarczyłoby, żebym wszedł na bloga i sprawdził ostatnio dodane wpisy. Ale to nie zawsze zadziała. Wpisy były do tej pory sortowane wg daty utworzenia. Data utworzenia czy modyfikacji pliku jeszcze nie mówi o tym kiedy artykuł został opublikowany.

Czasami piszę *draft* na kilka miesięcy (a w przyszłości pewnie i lat) przed ostateczną redakcją i publikacją.

Rozwiązaniem mógłby być parametr `publishedAt` dodany do [frontmatter](https://frontmatter.codes/). Mógłbym łatwo wtedy wydobyć wszystkie wpisy, które znalazły się na blogu w ciągu ostatnich 7 dni.

Jednak łatwo zapomnieć o dodaniu tego parametru. Brzmi to jak idealny temat do automatyzacji.
## Automatyzacja publikacji

Pomyślałem, że najprościej będzie, jak po przesunięciu do folderu, z którego [[markdown-rzadzi|publikuję]], automatycznie dodam potrzebny wpis we *frontmatter*. I tak też zrobiłem.

Miałem już doświadczenie z [[automatyzacja-obrazkow-obsidian|automatyzacją obrazków w Obsidian]], dlatego postanowiłem wykorzystać napisaną wtedy wtyczkę i zgromadzić w niej wszystkie moje automatyzacje.

Początkowo na zdarzeniu `create` oraz `rename` dla pliku w Obsidian miałem dokonać zmiany, jednak okazało się, że przy uruchamianiu programu wszystkie stare wpisy również dostały ten parametr. (Straciłem trochę czasu, żeby to przywrócić, bo nie *zacommitowałem* sobie zmian do repo przed całą tą zabawą 😅)

Ponadto miałem też ostatnio [[winny-niepublikacji|problem z publikacją zaległych wpisów]], dlatego uznałem, że może lepiej organizacyjnie będzie (i dla automatyzacji), gdy zrobię poczekalnię wpisów (folder *waiting-room*) i dopiero na zdarzeniu `rename` (przy przesunięciu pliku do innego folderu) uruchomię dodawanie parametru `publishedAt`.

Działa świetnie!

No dobra, nareszcie wiem co i kiedy publikowałem. Teraz potrzebuję zgromadzić wszystkie nowe treści i jakoś je opisać.

## Opisy artykułów

Do każdego artykułu dopisuję kilka parametrów we *frontmatter*:
- `title` - tytuł artykułu, który pojawia się na blogu
- `description` - opis pod SEO
- `ogTitle` - tytuł artykułu, który wstawiam na [[automatycznie-generowany-og-image-w-astro|obrazki pod social media]]
- `ogDescription` - krótki opis, analogiczny do `ogTitle`
- `tags` - tagi, na podstawie których modyfikuję też treść na blogu (np. dla #1-sukces-dziennie dodaję ramkę na początku z wyjaśnieniem idei projektu a dla #automatyzacja dodaję wezwanie do akcji z zachętą do zamówienia [konsultacji](https://michalkukla.pl/konsultacje))

Do tego pomyślałem, że żaden z tych opisów może nie być odpowiedni jako podsumowanie artykułu do newslettera. Dodałem więc parametr `newsletterDescription`.

Do tej pory generowałem opisy z użyciem GPT, ale to było proste: `Masz artykuł, dejże krótki opis. I jeszcze krótszy na obrazek.`

W przypadku newslettera będę miał kilka artykułów o prawdopodobnie różnej tematyce, dlatego chciałem, aby krótki opis nawiązywał głównie do tej tematyki jakby w odniesieniu do innych potencjalnie poruszanych tematów.

Potrzebowałem więc kontekstu. Napisałem prompta, w którym wymieniłem wszystkie główne tematy, o których pisałem, i poprosiłem o opis artykułu.

Po doszlifowaniu komendy uznałem, że za diabła nie będę w stanie spamiętać tego ani nie chce mi się wpisywać za każdym razem w GPT takiego opisu po to tylko, żeby wygenerować 2-3 zdania do newslettera. Szybciej będzie to samemu ręcznie zrobić, albo... zrobić sobie generator tego promptu.

Uznałem, że ponieważ za każdym razem będę potrzebował wygenerować 3 opisy, to poproszę w jednym prompcie o nie wszystkie, ustrukturyzowane w formacie *frontmattera*.

I wrzuciłem to we wtyczkę. Oto mój szablon:

```markdown
Mam taki artykuł w markdown:  
\`\`\`  
${frontmatter}  
${body}  
\`\`\`  
  
Teraz potrzebuję kilka opisów. Jeden z nich będzie na potrzeby SEO, drugi krótki na wstawienie na og image, a trzeci opis do mojego newslettera i będzie zachęcał do przeczytania wpisu na moim blogu.  
  
Publiczność będzie bardzo różna i może nie być zainteresowana akurat tym tematem, bo publikuję na tematy bardzo różnorodne (programowanie, biznes, psychologia, slow life, aplikacje mobilne, tworzsenie MVP, filozofii, buddyzmie, marketingu, automatyzacji i cyfryzacji, nawykach, konsultingu i produktywności; piszę eseje, artykuły poradnikowe i codzienne relacje z moich działań w duchu Show Your Work).  
  
W newsletterze będzie zbiór wszystkich moich artykułów z ostatniego tygodnia, czyli przynajmniej 4-5 wpisów, dlatego opis musi być krótki. Pamiętaj, że to będzie opis jednego z moich artykułów, kolejność będzie losowa i wszystkie artykuły będą wymienione w tym jednym moim newsletterze.  
  
Napisz teraz poszczególne opisy w języku polskim, zaczynając od upewnienia się, że odbiorca jest w grupie docelowej i może mieć podobny problem lub być zainteresowany moim artykułem.  
  
Format, w jaki chcę otrzymać dane, ma być jak frontmatter, ale napisz tylko te 3 brakujące opisy, czyli:  
\`\`\`  
description: [opis seo]  
ogDescription: [opis krótki mojego artykułu na og image]  
newsletterDescription: [opis mojego artykułu do newslettera]  
\`\`\`
```

Wtyczka działa tak, że po kliku prawym przyciskiem myszy w nazwę pliku i wybraniu opcji `michalkukla.pl: Get prompt for descriptions` dostaję prompt do wklejenia prosto w chat GPT. Po kilku sekundach kopiuję gotowy tekst z powrotem do Obsidian.

> [!tip] Protip
> W Obsidian możesz edytować plik w trybie kodu źródłowego. Łatwo wtedy wkleić cały wygenerowany przez GPT fragment *frontmattera*. W prawym górnym rogu trzy kropeczki poziome i kliknij w `Source mode`.

Czy mogę to zrobić bez przeklejania do Chat GPT? Mogę. Można wywołać po API, jednak czasem te artykuły są dość długie, szkoda mi płacić za wszystkie tokeny, podczas gdy Chat GPT wykorzystuję głównie do takich długich treści i trochę półautomatycznej roboty. 

W razie czego można ten proces całkowicie zautomatyzować. I pewnie tak zrobię, gdy dopracuję sobie *prompt* na tyle, że nie będę miał ręcznych poprawek.

OK, mam opisy, to teraz chcę przygotować treść newslettera automatycznie (no bo po co mam to jeszcze sklejać razem ze sobą?)
## Generowanie newslettera

Tutaj sprawa już była przyjemnie prosta. Wystarczyło dodać specjalną komendę do wywołania w Obsidian: `Create Newsletter`.

Co to robi?
1. Pobiera wszystkie wpisy, których `publishedAt` jest nie starsze niż 7 ostatnich dni.
2. Dla każdego wpisu przygotowuje szablon, w którym jest:
	- tytuł (linkujący do treści na blogu na podstawie *slug* artykułu)
	- tagi (pobrane z *frontmatter*, bo zawsze tam są)
	- `newsletterDescription` rzecz jasna
	- dodatkowy link o treści `Przeczytaj`
3. Tworzy plik w folderze `NEWSLETTERY` do którego wrzuca treść tego wpisu w formacie *markdown* (mogę to wkleić do [ConvertKit](https://partners.convertkit.com/klgg948khpjo) w ten sposób i ładnie mi sformatuje całość)

I pięknie! Teraz wystarczy kopiuj-wklej i z bani.

Ale czegoś mi tu jeszcze brakuje...
## Wstęp do newslettera

Pomyślałem, że fajnie byłoby się jakoś przywitać z czytelnikami. Mogę napisać wstęp samodzielnie, ale od czego mamy [LLM](https://pl.wikipedia.org/wiki/Du%C5%BCy_model_j%C4%99zykowy)?

Zrobiłem więc kolejną komendę wywoływaną dla pliku, tym razem stworzonego newslettera: `michalkukla.pl: Get prompt for newsletter description`. To kopiuje do schowka kolejny *prompt*, tym razem z treścią całego newslettera oraz prośbą o wygenerowanie wstępu.

Szybkie kopiuj-wklej i mamy gotowy newsletter!
## Podsumowanie

Zrobiłem wtyczkę do Obsidian, która robi kilka rzeczy:

1. Ustawia `publishedAt` we *frontmatter* we wpisach, które publikuję poprzez przeniesienie do odpowiedniego folderu.
2. Przygotowuje *prompt* do GPT do wygenerowania trzech opisów (pod SEO, na obrazek ładowany do social media, oraz na potrzeby newslettera).
3. Generuje automatycznie wpis do newslettera sprawdzając, czy `publishedAt` było w ciągu ostatnich 7 dni. Jeśli tak, to ma zostać dodany.
4. Przygotowuje *prompt* do wygenerowania opisu newslettera.

Przygotowanie teraz newslettera powinno zająć nie więcej niż 5 minut. W tej sytuacji udało mi się osiągnąć to, co było moim największym bólem: ograniczyć czas i wysiłek potrzebny na regularne informowanie moich czytelników o najnowszych wpisach.

Napisanie tych wszystkich wtyczek zajęło mniej niż napisanie tego artykułu 😅, bo oczywiście do generowania kodu użyłem GPT 😇

Źródła znajdziesz w repozytorium: https://github.com/degregar/michalkukla-blog-obsidian-plugin
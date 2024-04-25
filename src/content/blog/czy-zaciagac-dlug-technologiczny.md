---
created: 2024-04-23T08:03
updated: 2024-04-23T16:17
title: Czy warto zaciągać dług technologiczny?
description: Wielu programistów tworzących własne produkty nie zgadza się ze mną w tej kwestii.
tags:
  - ux
  - mvp
  - 1-sukces-dziennie
  - biznes
  - technologia
  - programowanie
  - startupy
---
Przyszedł czas na spłacenie długu technologicznego w [[slowtracker|SlowTracker]]. Zrobiłem porządnie otestowane szyfrowanie i odszyfrowanie danych z uwzględnieniem sytuacji przypadkowego wyświetlenia danych, które [[slowtracker-udostepnianie-sukcesow-w-wyzwaniach|powinny być zawsze prywatne]].

I ten mój dzisiejszy sukces skłonił mnie do przedstawienia mojego punktu widzenia na dług technologiczny w kontekście tworzenia [[#mvp|MVP]].

Dług technologiczny to rodzaj kredytu. Zaciągamy go, gdy potrzebujemy szybko zrobić i wprowadzić produkt na rynek, aby sprawdzić, czy nasza idea chwyci. Ta pożyczka polega na tym, że pomijamy pewne kroki, które co do zasady są ważne, ale nie przyczyniają się do dostarczenia wartości użytkownikom. Skupiamy się na *User Experience* ([[#ux|UX]]).

Wielu programistów nie zgadza się ze mną w tej kwestii. Są tak bardzo przekonani co do słuszności swojego pomysłu na biznes, że inwestują ogrom czasu i wysiłku w stworzenie automatów i innych narzędzi, które przyczyniają się do szybszego i bezpieczniejszego tworzenia aplikacji. Skupiają się na *Developer Experience* (DX).

I oczywiście ich rozumiem. Sam też byłem gorącym orędownikiem zwiększania swojej produktywności. Poza tym, jako programiści, to właśnie to robimy: automatyzujemy i zwiększamy możliwości za pomocą technologii. Tworzenie dla siebie potrzebnych skryptów przychodzi nam naturalnie.

Jednak stworzenie świetnego, dobrze sprzedającego się produktu nie polega na robieniu dobrze programistom (chyba, że robimy produkt dla programistów). To poszukiwanie *product-market fit*. Przekonałem się o tym [[moje-startupy|zbyt wiele razy]].

Myślę, że podejście mocno zmieniło mi się, gdy pracowałem przez 2 lata w startupie. Powszechne było przeświadczenie, że musimy gonić i szybko dostarczać nowe funkcje. Brakowało czasu na naprawienie błędów i rozwiązanie węzłów gordyjskich, które utrudniały szybkie wprowadzanie nowych funkcji. Z każdym miesiącem zagrzebywaliśmy się coraz bardziej w bagnie zbyt skomplikowanego kodu, jednocześnie starając się przeć jeszcze szybciej naprzód.

Często słyszałem:
> Dobra, jak możemy zrobić to szybciej? Co możemy zrobić, żeby działało i robiło przynajmniej X?

Te pytania miały sens, ale było to dla mnie bolesne doświadczenie. Nastawiony byłem na [TDD](https://pl.wikipedia.org/wiki/Test-driven_development) i szukanie przewagi operacyjnej z użyciem technologii. Widziałem te wszystkie cudowne możliwości dostarczenia użytkownikom produktów naprawdę świetnej jakości, jeśli tylko poświęcimy czas na rozwiązanie istotnych problemów u źródła.

Często tym źródłem była kultura organizacyjna, nieelastyczne myślenie i nastawienie na cele krótkoterminowe. Zderzyłem się ze ścianą nastawionego na pozyskiwanie klientów biznesu, który ma inwestorów na głowie. 

I rozumiałem ich. Choć mam wrażenie, że oni nie rozumieli mnie. Choć nie widziałem całości obrazu z drugiej strony. O ile spora część biznesu działała właśnie w oparciu o szukanie nowych rynków, nowych produktów, które mogłyby zwiększyć koszyk zamówień, o tyle trzon biznesu (przy którym ja pracowałem) nadal działał tak, jak reszta firmy. Moim zdaniem nie powinien.

Bo jeśli firma od 6 lat robi wewnętrznie rzeczy tak samo, opiera się na tych samych procedurach, to powinna chyba dojść już w tym do perfekcji, czyż nie? W tym właśnie obszarze biznes, który rozumie idee [Theory of Constraints](https://pl.wikipedia.org/wiki/Teoria_ogranicze%C5%84) czy [[Agile]], może znaleźć przewagi operacyjne, które łatwo przekuć na przewagi konkurencyjne. To w tych przewagach można znaleźć wyższą marzę i to, za co klienci kochają nasze produkty. Nie w marketingu. To marketing korzysta z tych przewag.

Więc nie dziwię się, że wielu programistów uważa, że powinni pracować nad tym, na czym znają się najlepiej: na użyciu technologii do zwiększenia możliwości i produktywności człowieka. I powinni. Czy jednak od samego początku? Czy skupić się na UX czy DX? Czy naprawdę nie warto budować narzędzi, które pomogą szybciej dostarczać wartość użytkownikom?

W każdej dobrej argumentacji powinien przyjść moment, w którym pada: "to zależy".

Steven Covey mówił o idei *ZP* i *P*: Zdolności Produkcyjne i Produkcja (produktywność). To ostatni z jego [kultowych siedmiu nawyków](https://lubimyczytac.pl/ksiazka/455/7-nawykow-skutecznego-dzialania), czyli ostrzenie piły. Jeśli nie będziemy dbać o swoje narzędzia, to nie będziemy mogli produkować.

Ale nie możemy cały czas ostrzyć piły, bo będziemy mieli perfekcyjnie naostrzone narzędzie, którego do niczego nie używamy. To nie jest produktywność. To prokrastynacja.

Dużo mówię o teorii, to przejdźmy do konkretów.

Czy warto od dnia pierwszego robić [CI/CD](https://en.wikipedia.org/wiki/CI/CD), automatyczny pipeline wdrożeniowy, który po złączeniu PRki buduje z GitHub actions wszystko samodzielnie, przeprowadza testy, tworzy *changelog* i wysyła raport? Nie.
Czy warto to robić po zrobieniu [PoC](https://en.wikipedia.org/wiki/Proof_of_concept)? Być może. Ale raczej nie.
Czy warto to robić po MVP? Być może, raczej nie.
Czy warto to robić, gdy mamy 300 użytkowników? Być może.
Czy warto to robić, gdy mamy płacących klientów? Być może.

To jeśli *nie* lub *być może*, to kiedy?

To zależy ile masz wdrożeń, ile Ci to zajmuje czasu i czy klienci tracą na tym, że tego nie masz. I czy nie wystarczy, że zrobisz część procesu zautomatyzowanego?

Jeśli jesteś jedynym programistą, to czy potrzebujesz zewnętrzne centralne miejsce, w którym to będzie robione?

Pewnie myślisz, że zaraz zatrudnisz tabun programistów, więc to Ci się przyda. Wręcz musisz to mieć. Albo będziesz musiał się skalować jak szalony.

Otóż najprawdopodobniej nie 🤷‍♂ Nie będziesz się skalował, nie będziesz zatrudniał. Większość projektów i firm upada (źródło: Pareto, pretotyping.org, GUS). Bardziej liczy się to, czego się nauczymy o klientach, ich rzeczywistych potrzebach i jaką wartość tak naprawdę czerpią z Twojego produktu ([[The Mom Test]], [[Agile]]).

Bo jak się okaże po tygodniu na rynku, że musisz zrobić piwot i z Twojego produktu zostanie tylko kilka elementów, które właściwie można ograć czymś znacznie prostszym, bez skomplikowanej infrastruktury *cloudowej* czy *pipeline'u* wdrożeniowego, to ogarnie Cię frustracja. 

Tyle czasu, pieniędzy i wysiłku zmarnowane! To źródło błędu poznawczego o nazwie [koszty utopione](https://pl.wikipedia.org/wiki/Koszty_utopione). Pakujesz więcej czasu, pieniędzy i wysiłku w projekt, bo może nie jest jeszcze perfekcyjny i myślisz, że to właśnie dlatego klienci nie kupują (pamiętasz o przewadze operacyjnej?). A klienci nadal nie kupują. Więc pakujesz jeszcze więcej czasu, pieniędzy i wysiłku. Błędne koło.

I tutaj z pomocą przychodzi idea długu technologicznego. Startupy zazwyczaj świetnie rozumieją dlaczego ten dług jest taki dobry. Pozwala uniknąć nietrafionych inwestycji i zminimalizować koszty (utopione). Pozwala na łatwiejsze podjęcie decyzji o zmianie kierunku działania. Daje potrzebną elastyczność na konkurencyjnym rynku. Daje szansę na pozyskanie informacji zwrotnych od (potencjalnych) klientów.

Te informacje zwrotne są na wagę złota. Dosłownie. To rynek daje pieniądze na rozwój projektu. A przynajmniej podstawy do zaufania inwestorów (oraz właścicieli i pracowników) w powodzenie projektu.

Decyzjami kierują przekonania. Jeśli wierzymy, że projekt osiągnie sukces, to inwestujemy tak, jakbyśmy mieli zaraz klęskę urodzaju. I może tak będzie. Jednak takie zjawisko występuje dość rzadko.

Ostatni przypadek, jaki pamiętam, to Nasza Klasa. Niemal 20 lat temu, świeżo po ich problemach z przeciążonymi serwerami, tworzyliśmy w zamierzeniu [[authalia|globalny startup]], w którym chcieliśmy za wszelką cenę uniknąć ich losu. I uniknęliśmy. Po 13 miesiącach developmentu wypuściliśmy projekt i nie przeżył na rynku tygodnia.

Oczywiście bez przekonania, że projekt ma jakąkolwiek szansę, trudno w ogóle wykrzesać z siebie motywację do jego zrobienia. *Gut feeling* też jest potrzebne. 

Jednak warto nieco krytycznie podejść do tego, co myślimy. Błędy poznawcze i sposób, w jaki działa nasz mózg ([[Pułapki Myślenia, Kahneman]]), skłaniają do zastanowienia się nad podstawami naszych decyzji. Zanim zainwestujemy mnóstwo czasu, pieniędzy i wysiłku w stworzenie świetnego produktu to sprawdźmy, czy klienci tego chcą. Zadajmy im [właściwe pytania](https://www.linkedin.com/feed/update/urn:li:activity:7157635815236419584/)

I nie mówię tu o zwrocie o 180 stopni, nagłym odrzuceniu naszego sposobu działania i przerwaniu pracy nad produktem. To może zamieszać w głowie i podkopać naszą motywację do działania. Raczej skłaniam się do zadania sobie pytania takiego, jakie słyszałem wielokrotnie w startupie:

> Dobra, jak możemy zrobić to szybciej? Co możemy zrobić, żeby działało i robiło przynajmniej X?

Czyli mniej w produkcie, więcej na rynku. Mniej zwiększania zdolności produkcyjnych, więcej zrobionej pracy.

A co z długiem technologicznym? Pomiń niektóre kroki. Zrób coś, żeby sprawdzić, czy jest wzięcie. Nie przywiązuj się tak bardzo do niektórych funkcji.

W [[slowtracker|SlowTracker]] najpierw myślałem, że zrobię *API-first* i użytkownicy będą się integrować z Todoist i innymi narzędziami do zarządzania zadaniami. Potem zrozumiałem, że większą wartość (satysfakcję i wyciągnięcie praktycznych wniosków) daje świadome wpisywanie sukcesów bezpośrednio w aplikacji (choćby dzięki konfetti i AI).

Wdrożenie aplikacji robię z mojego komputera, samodzielnie. Najpierw zrobiłem dokumentację, w której opisuję co muszę zrobić, żeby odpalić projekt lokalnie i wypuścić go na *produkcję*. (Zawsze zaczynam od najprostszych instrukcji).

Potem dopiero robiłem sobie skrypty przyspieszające niektóre procedury, ale nadal cały proces odpalam ręcznie. Na wersję [webową](https://app.slowtracker.com) najszybciej wypuszczam zmiany, a na wersje mobilne max kilka razy w tygodniu. I zajmuje mi ten proces 5-10 minut.

Testy automatyczne odpalam lokalnie. A i tak 90% kodu mam nieprzetestowane. Czy sparzyłem się na tym? Pewnie! Kilkukrotnie. Na pewno kilkunastu lub nawet kilkudziesięciu użytkowników nie wypróbowało apki, bo nie mogło się zalogować (o czym dowiedziałem się od Apple, jak próbowałem wpuścić apkę do sklepu). Testowanie ręczne jest czasochłonne i też nie robiłem tego za każdym razem.

Jednak nie przejmowałem się tym aż tak bardzo. Trochę wydłużyło to zbieranie niektórych danych o tydzień czy dwa, ale ostatecznie było dla mnie dużo lepszym podejściem, niż gdybym od razu inwestował mnóstwo czasu i wysiłku w automatyzację tworzenia dokumentacji do API, budowania integracji z Todoist i innymi narzędziami, podczas gdy zupełnie odszedłem od tej koncepcji. Jestem więc o kilka tygodni (a może nawet miesięcy) do przodu, ze względu na wartościowe informacje, jakie zebrałem z rynku i kod, którego nie musiałem pisać ani potem zmieniać.

Z szyfrowaniem danych użytkowników też wstrzymywałem się bardzo długo. Ale dopiero gdy trzy razy usłyszałem z różnych źródeł, że to może być ważne, [[mvp-szyfrowanie-danych|przemyślałem sobie różne metody]] i popytałem ludzi, to dojrzałem do decyzji o wzięciu tego na poważnie. Uznałem, że może to być istotny czynnik wpływający na decyzje użytkowników o tym co wpisywać do aplikacji, a także czy w ogóle cokolwiek wpisywać.

I w tym miejscu mocniej zainwestowałem w testy automatyczne. I zauważ, że nie mówię, że *zacząłem* w nie inwestować. Już wcześniej je pisałem dla niektórych bardziej skomplikowanych drzew decyzyjnych. Nie stosowałem co prawda TDD, przez co mam teraz kiepski *design* i ogromny *coupling* i trzeci dzień pracuję nad szyfrowaniem, które pewnie zrobione od samego początku zajęłoby mi mniej czasu.

Jednak w ciągu tych trzech miesięcy pracy nad projektem:
- aplikację przetestowało 377 użytkowników, którzy dodali ponad 400 sukcesów (sam dodałem oprócz tego ponad 200 wpisów)
- sprawdziłem, czy aplikacja dostarcza wartość w najbardziej podstawowej wersji (średnio)
- dowiedziałem się czego użytkownicy oczekiwaliby od takiej aplikacji i do czego chcieliby ją wykorzystywać (np. budowanie nawyków i poznawanie ludzi 🤯)
- dostałem sprzeczne opinie na temat *designu* ("trąci myszką" vs "przejrzysty interfejs")
- [[konkurencja-slowtrackera|poznałem konkurencję SlowTrackera]] i zrozumiałem, że potrzebuję lekkiego piwota (społecznościówka)
- rozbudowałem o wyzwania i ich [[slowtracker-udostepnianie-wyzwan|udostępnianie]]

Te wszystkie doświadczenia i informacje dają mi przekonanie, że idę w dobrym kierunku i nie ma sensu skupiać się za bardzo na technologii. PoC powinno wystarczyć, żeby sprawdzić, czy technologicznie projekt jest wykonalny.

Znacznie większy nacisk - od samego początku projektowania nowego produktu - kładę na wartość dla klienta i UX. Jeśli aplikacja będzie zrozumiała, prosta w użytkowaniu i będzie robiła jedną rzecz, ale świetnie, to ma szansę na sukces.

Oczywiście nie raz walczyłem ze sobą, żeby zrobić coś lepiej, niż trzeba. Mam tendencje do perfekcjonizmu. Pomocna okazała się moja [[10-mastermindow-za-mna|grupa mastermind]] i prawie 20 lat doświadczeń z różnymi projektami. 

I ludźmi.

A konkretnie: z wprowadzaniem zmian.

Często klienci kompletnie nie rozumieli innowacji, którą zamierzałem wprowadzić. Z podobnymi wyzwaniami mierzę się w innym filarze mojej działalności: cyfryzacji. Nauczyłem się zauważać momenty, w których wprowadzenie zmiany może być kłopotliwe. Status quo i *zawsze tak robiliśmy*, niechęć do uczenia się nowości i najzwyklejszy lęk przed nieznanym - to niektóre z powodów, dla których czasem najgenialniejsza technologia nie ma szansy na rynku.

Dlatego lepiej sprawdzić, czy ktoś widzi w tym wartość, i jeśli tak, to czy wygodnie będzie mu się tego używać. Bo jeśli nie, to wróci do nieefektywnych metod i narzędzi.

W firmach technologicznych mówi się czasem o *zarządzaniu długiem technologicznym*. Czyli "wiemy, że go mamy, wiemy, że nam utrudnia i coś z tym zrobimy". Czasem jest to tylko gadka na pokaz, dla uspokojenia deweloperów, co często rodzi cynizm.

Wiemy, że ten dług trzeba spłacić, bo prędzej czy później może spowodować cały szereg różnych niepożądanych efektów: od wolniejszego dostarczania nowych funkcji, przez utratę części klientów aż do poważnego wycieku danych i powszechnej utraty zaufania.

Dlatego warto przyjrzeć się ryzykom, jakie towarzyszą projektowi. Dla mnie najprostsza analiza ryzyka to zrobienie listy z oceną wpływu i szansą wystąpienia. Ewentualnie z planem B, mitygacją, transferem, zapobiegnięciem lub akceptacją.

Na pierwszym miejscu takiej listy wpisałbym "projekt nie rozwiązuje żadnego istotnego problemu" i jego szansę i wpływ oceniłbym bardzo wysoko. Dopiero potem wpisywałbym rzeczy takie jak "wyciek danych osobowych", czy "wydłużenie czasu dostarczania nowych funkcji". Te ryzyka zmieniają się w czasie, wraz ze zmianą strategii (którą łatwo zmienić, w przeciwieństwie do setek tysięcy linii kodu) czy popytem na niektóre funkcje.

Jeśli projekt ma zostać na rynku, to dług będzie trzeba w końcu spłacić. I powinno się go spłacać w miarę, jak ryzyko rośnie. W moim przypadku to ryzyko to pokazanie prywatnych wpisów osobom, które nie powinny nigdy mieć do nich dostępu. To oznaczałoby utratę zaufania.

Czy warto zaciągać dług technologiczny? Warto przede wszystkim zrozumieć na czym on polega, jak się on ma do naszych ryzyk i decyzji, co nam daje, a w czym przeszkadza. Warto go oswoić.

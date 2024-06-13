---
created: 2024-04-19T08:23
updated: 2024-06-12T17:22
title: Szyfrowanie danych a budowa MVP
description: Zrozum podstawy szyfrowania danych na potrzeby zbudowania MVP. Dowiedz się, jakie metody zabezpieczania są dostępne dla początkujących i jakie wyzwania mogą napotkać, starając się zwiększyć prywatność użytkowników swojej aplikacji.
tags:
  - mvp
  - kryptografia
  - programowanie
  - gpt
---
Wczorajszy dzień spędziłem głównie na researchu metod szyfrowania danych, na potrzeby mojej aplikacji [[slowtracker|SlowTracker]]. Nieocenionej pomocy w tym temacie udzielił mi [Szymon Stasik](https://www.linkedin.com/in/stasik/) -jeden z najbardziej doświadczonych i wszechstronnych software developerów jakich znam.

Jeśli chodzi o znajomość tematu, to do Szymona mi daleko. Większość mojej kariery skupiałem się raczej na biznesie niż oprogramowaniu. Dlatego potraktuj tę relację bardziej jako moje rozpoznanie tematu i próba poukładania tego, co już wiem. Jestem przekonany, że jeśli startujesz i nie wiesz zbyt wiele o kryptografii, to ten wpis może Cię trochę nakierować.

W dzisiejszej relacji napiszę więc:
- jakie są najbardziej pożądane metody zabezpieczania danych?
- gdzie leży największa trudność w szyfrowaniu danych?
- jakie ja stosuję metody bezpieczeństwa?
- jakie są najczęstsze wektory ataku?
- jak określić granice paranoi?
## Skąd potrzeba szyfrowania danych?

Temat wypłynął na naszym [[10-mastermindow-za-mna|mastermind]], na którym wspieramy się głównie w zakresie budowania [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) naszych własnych aplikacji mobilnych i szukania metod na rozpowszechnienie ich. Dwoje z nas robi aplikację, w której przechowuje na serwerze dość wrażliwe dane użytkowników.

Sam rzadko kiedy potrzebowałem się zajmować tematem szyfrowania danych. Albo robił to ktoś za mnie, albo skupiałem się na budowie [proof-of-concept](https://en.wikipedia.org/wiki/Proof_of_concept). Albo po prostu nie przywiązywałem do tego większej wagi.

Zacznę od tego, że moje MVP nie miało szyfrowania danych. Zapisywanie sukcesów nie wydawało mi się aż tak krytyczne, żeby od razu szyfrować dane. Poza tym jeśli z aplikacji nikt nie korzysta, to nie ma potrzeby danych zabezpieczać, bo ich nie ma. 

(Ekhm... RODO mówi o zabezpieczaniu danych już na etapie projektowania. To trochę wtręt w stylu "Tak się **nie robi**, ale my tak robimy, bo jest szybciej.")

Szybko okazało się, że moi użytkownicy zgłaszają potrzebę większej prywatności - nie chcieli, żeby ktokolwiek czytał te wpisy. Zacząłem więc zastanawiać się nad różnymi metodami szyfrowania. 

Wiele aplikacji *security-first* robi szyfrowanie [E2EE](https://pl.wikipedia.org/wiki/Szyfrowanie_od_ko%C5%84ca_do_ko%C5%84ca). Polega to na tym, że dane są szyfrowane i odszyfrowywane tam, gdzie to potrzebne - najlepiej tylko na urządzeniach użytkowników. I żaden pośrednik (serwer, dostawca internetu, właściciel serwera, programista, itd.) nie może tych danych po drodze odszyfrować.

W przypadku [[slowtracker|SlowTracker]] to wydawało mi się dość problematyczne i ograniczające funkcje. Używam w kilku miejscach GPT, żeby np. pomóc wydobyć więcej satysfakcji z wpisywanego sukcesu albo opisać go tak, aby przyniósł większą wartość na rozmowie kwalifikacyjnej, czy przy rozmowie sprzedażowej. Więc muszę ten wpis wysłać w formie niezaszyfrowanej do GPT. Podobnie z planowaną wyszukiwarką semantyczną.

Do tego ostatnio zrobiłem [[slowtracker-udostepnianie-sukcesow-w-wyzwaniach|udostępnianie sukcesów]]. Tutaj granica pomiędzy prywatnymi a publicznymi wpisami zrobiła się jeszcze łatwiejsza do przekroczenia. Wystarczy niewielki błąd, żeby wyświetlić wpisy, które powinny zawsze pozostać prywatne.

Czas więc nastał.
## Ogólna koncepcja

Najpierw Szymon - na mastermindzie jeszcze - opowiedział nam o kilku rzeczach:

> Trzeba ustalić granice paranoi.

> Bezpieczeństwo, to też możliwość odzyskania danych.

> (...) można odszyfrować trzema kluczami z pięciu.

No i właśnie. Chciałbym zapewnić maksymalne bezpieczeństwo. Nie mogę jednak pozwolić na to, że użytkownik straci dostęp do wszystkich wpisanych sukcesów, jeśli zapomni hasła albo straci telefon, na którym ma jedyny klucz do szyfrowania.

Dostęp musi mieć też z innych urządzeń (choćby z [przeglądarki internetowej](https://app.slowtracker.com), z której ja najczęściej korzystam). Sporo siły SlowTrackera tkwi właśnie w tym, że te sukcesy można przeglądać po czasie.

Szymon podesłał "jedno rozwiązanie freemium z raczej mało praktycznymi limitami": https://virgilsecurity.com. Jednocześnie zauważył, że nie jest super skomplikowane zaimplementowanie takiego mechanizmu.

Na ich stronie znalazłem opis jak zbudować [chat z szyfrowaniem end-to-end](https://virgilsecurity.com/blog/end-to-end-encrypted-chat-with-e3kit-and-stream). W skrócie polega to na tym, że do wymiany kluczy szyfrujących wykorzystywany jest serwer pośredniczący. Wiadomości szyfrowane są kluczami publicznymi osoby, do której są wysyłane.

## Klucze szyfrujące symetryczne i asymetryczne

I to dobry moment na wyjaśnienie różnicy między kluczami symetrycznymi a niesymetrycznymi.

**Klucz symetryczny** to taki, który służy zarówno do zaszyfrowania jak i odszyfrowania. Najprostszym przykładem jest przesunięcie znaków w alfabecie. Przykładowo, żeby zaszyfrować słowo `dom` musimy przesunąć d -> e, o -> p i m -> n. Wychodzi `epn`. I tą samą metodą odszyfrowujemy e -> d, p -> o, n -> m.

**Klucz asymetryczny** to para kluczy. Dane zaszyfrowane jednym kluczem można odszyfrować tylko pasującym do niego drugim kluczem. Nazywamy je kluczami prywatnym i publicznym. Jednym z najpopularniejszych algorytmów kryptografii asymetrycznej jest [RSA](https://pl.wikipedia.org/wiki/RSA_(kryptografia)).

Jeśli chcemy wysłać do kogoś zaszyfrowaną wiadomość, to potrzebujemy jego klucz publiczny. Wtedy tylko osoba, która ma pasujący do niego klucz prywatny może odszyfrować tę wiadomość. Nawet nadawca nie może jej odszyfrować.

Piękno tej metody polega na tym, że klucz prywatny jest **zawsze prywatny** a klucz publiczny jest **zawsze publiczny**. Innymi słowy: wszyscy wręcz POWINNI znać klucz publiczny. Może być przekazywany dowolną metodą; wszyscy po drodze mogą znać ten klucz i nie wpłynie to na zmniejszenie bezpieczeństwa.

Natomiast klucz prywatny powinien być najbardziej strzeżony.

Oprócz szyfrowania danych, ta para kluczy służy również do podpisu elektronicznego. Jeśli zaszyfrujemy wiadomość kluczem prywatnym, to dowolna osoba może zweryfikować, że to my ją zaszyfrowaliśmy, bo tylko pasującym kluczem publicznym można odszyfrować tę wiadomość.

## Szyfrowanie z użyciem Web Crypto API

Szymon zasugerował, że w naszym przypadku, gdy aplikacja jest na [Ionic](https://ionicframework.com/), to możemy użyć [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API). To ułatwia tworzenie kluczy, szyfrowanie i odszyfrowywanie danych. Utworzone klucze zostają na urządzeniu użytkownika.

Mógłbym więc na tym urządzeniu zaszyfrować dane kluczem publicznym użytkownika, wysłać dane już zaszyfrowane na serwer i tam zapisać do bazy danych. Przy odczycie danych serwer wysyłałby użytkownikowi dane zaszyfrowane (kluczem publicznym) i dopiero na urządzeniu użytkownika można te dane odszyfrować (kluczem prywatnym).

To jednak nie chroni przed utratą urządzenia. Bez klucza prywatnego nie mogę odczytać danych. To się więc nie sprawdzi.

Ponadto utrata urządzenia może skutkować skompromitowaniem klucza prywatnego.

## Multi-Key Encryption

Można spróbować innego podejścia: stworzyć dwie pary kluczy. Jeden klucz byłby dodatkowo zaszyfrowany hasłem, które zna użytkownik. Wtedy można przechowywać klucz prywatny niezaszyfrowany lokalnie na urządzeniu, a klucz prywatny zaszyfrowany hasłem - na serwerze. Bez hasła jest bezużyteczny.

W ten sposób gdyby użytkownik stracił dostęp do telefonu, to nadal po zalogowaniu się do serwera mógłby pobrać sobie zaszyfrowany klucz prywatny. Dopóki pamięta hasło, to może z niego skorzystać. Dzięki temu musi mieć albo urządzenie, albo hasło. Dopóki nie straci obu, to jest bezpieczny.

Ta metoda ma tę wadę, że trzeba zastosować silne hasło, bo inaczej metodą [brute force](https://pl.wikipedia.org/wiki/Atak_brute_force) ktoś mógłby je złamać.

Poza tym dane trzeba zaszyfrować podwójnie, żeby dało się odczytać zarówno jednym, jak i drugim kluczem prywatnym.

## Jeden klucz symetryczny, wiele kluczy prywatnych

No dobra, a gdyby nie stosować podwójnej pary kluczy i nie zapisywać wielokrotnie tych samych danych, ale jednocześnie móc zapisywać i odczytywać dane na wielu różnych urządzeniach i nie stracić dostępu do danych w razie utraty hasła i urządzenia?

Można wykorzystać do szyfrowania jeden klucz symetryczny, który szyfrujemy po drodze kluczami asymetrycznymi. Wymaga to jednak zachowania tego klucza gdzieś po drodze. Ktoś musi być gwarantem, że ten klucz ani nie wycieknie ani nie zginie. Taką rolę może pełnić menedżer haseł taki jak [1password](https://1password.com/), zewnętrzny serwer typu Virgil, [Hashicorp Vault](https://www.vaultproject.io/) i inne.

Te rozwiązania mogą być jednak kosztowne, zwłaszcza przy wielu kluczach i niewielu aktywnych użytkownikach.

## Utrudniony dostęp do kluczy

Gwarantem możemy być my, jako dostawcy aplikacji. Klucz symetryczny możemy zaszyfrować naszym kluczem publicznym, podczas gdy klucz prywatny przechowujemy bezpiecznie gdzieś poza serwerem. Powoduje to jednak, że sami mamy dostęp do danych i możemy je odszyfrować.

I jeszcze coś musimy zrobić z kluczem. Można też zastosować taką metodę, aby zapisać ten klucz w S3 Glacier, do którego dostęp trwa np. 1 dzień. Wtedy procedura odzyskania dostępu trwa dłużej, ale ostatecznie użytkownik może się dostać do tych danych, a przecież na tym nam zależy.

## Mechanizmy odzyskiwania kluczy - Key Escrow i Social Recovery

W tym modelu klucz prywatny jest zaszyfrowany i przechowywany w bezpiecznym miejscu, gdzie można go odzyskać za pomocą autoryzowanego procesu. Na przykład, klucz może być podzielony na fragmenty, z których każdy jest przechowywany przez innego zaufanego strażnika. Użytkownik musi uzyskać odpowiednią liczbę fragmentów, aby odbudować klucz.

Można takie fragmenty klucza trzymać w usługach cloudowych (AWS, Azure, GCP) albo w innych miejscach. Nazywamy to *Key Escrow* (depozyt).

Ogólnie chodzi o to, że aby odzyskać klucz, musisz mieć np. minimum trzy klucze z pięciu (albo dwa z trzech, czy inna kombinacja).

Innym wariantem jest *Social Recovery*, czyli podejście stosowane w niektórych nowoczesnych systemach kryptowalut, gdzie "zaufani przyjaciele" użytkownika, rodzina lub współpracownicy przechowują "udziały" w jego kluczu prywatnym. Użytkownik potrzebuje określonej liczby tych udziałów, aby odtworzyć swój klucz prywatny.

## Najwygodniejsza metoda

Jako user jestem przyzwyczajony do tego, że hasło do serwisu mogę odzyskać w dowolnym momencie. Wystarczy zrobić reset hasła, leci link na maila, klikam, ustawiam nowe i z bani.

Ale to hasło nie może służyć za klucz symetryczny, bo jak się zmieni, to nie odszyfrujemy danych. Mamy więc kogoś, kto ten klucz dla nas przechowuje. Gwaranta.

Teraz, gdy już mamy obraz różnych metod szyfrowania i zabezpieczania przed utratą dostępu, zobaczmy co jeszcze może pójść nie tak. Mowa o atakach hakerskich.

## Najczęstsze wektory ataku a szyfrowanie danych

Metod jest sporo i nie chcę zagłębiać się w technikalia. SQL Injection, XSS, CSRF, Broken Authentication, Security Misconfiguration, DoS (nie mówiąc już o *social engineering*) - tego jest sporo i o każdym napisano pewnie niejedną książkę.

To, nad czym warto się zastanowić, to:
- jakie są te najczęstsze metody ataku, jakie mogą mieć zastosowanie w Twojej aplikacji,
- gdzie leżą największe ryzyka
- do czego ktoś mógłby przypadkiem lub celowo uzyskać dostęp.

Dlatego nie będę mówił o metodach zabezpieczenia się przed tymi wektorami ataku. Powiem tylko, że w kontekście szyfrowania danych każda z tych metod może służyć do wydobycia danych, klucza lub informacji, które posłużą do zdobycia tych pierwszych.

Najważniejsze będzie bezpieczne oddzielenie kluczy szyfrujących od danych.
## Wyciek bazy danych

Zdarzyło mi się zgarnąć niezłe *[bug bounty](https://en.wikipedia.org/wiki/Bug_bounty_program)* za wykrycie potencjalnego wycieku danych na setki tysięcy rekordów z danymi osobowymi klientów polskich hoteli.

Jeśli ktoś dostanie się do Twojej bazy danych, to podstawowym zabezpieczeniem będzie zaszyfrowanie tych danych kluczem, którego w tej bazie nie ma. (Baza, do której ja się dostałem, była kompletnie niezaszyfrowana.)

Jeśli atakujący ma dostęp tylko do zaszyfrowanej bazy, no to sprawa załatwiona. Bez klucza nie odczyta danych lub będzie to nieopłacalna operacja (można przecież sprawdzić każdą kombinację metodą *brute force*).

Jeśli jednak klucz jest przechowywany w pamięci operacyjnej aplikacji i atakujący dostanie się do serwera w trakcie jego działania (*runtime*), wtedy może zdobyć komplet: dane i klucz.

## Rozdzielenie runtime i odzyskanie klucza aktywowane mailem

Jeśli klucze nie powinny leżeć ani w szyfrowanej bazie, ani w *runtime* serwera, który te dane odczytuje, to gdzie? Najlepiej gdzieś indziej. Na innym serwerze.

Szymon zasugerował, że albo *3rd party provider* albo nawet własny serwer, który jest odseparowany od naszego głównego serwera, byłby wystarczający do sensownego i niezbyt kosztownego zabezpieczenia dostępu do kluczy szyfrujących.

Załóżmy, że klucz jest przechowywany na urządzeniu użytkownika i jeszcze w specjalnym serwerze *vault* (skarbcu). Backend nie ma dostępu ani do *vault* ani nie przechowuje klucza. Mamy E2EE. 

Co gdy użytkownik traci urządzenie? Może poprosić *vault* o dostęp do klucza. Musi podać hasło, najlepiej jeszcze potwierdzić kodem z emaila lub SMSa, czyli stosujemy Multi-Factor Authentication (MFA). Wtedy dopiero może otrzymać klucz.

Dzięki takiemu podejściu nawet, jeśli atakujący dostanie się do *runtime* głównego serwera, to nie będzie miał dostępu do klucza szyfrującego, bo ten spoczywa bezpiecznie w *vault* i na urządzeniach użytkownika. Oddzielamy więc środowiska od siebie.

Pamiętajmy jednak, że system bezpieczeństwa jest tak mocny, jak jego najsłabsze ogniwo. MFA to jedno, ale *vault* może podlegać wielu innym wektorom ataku niż Twój główny serwer.

Zaszyfrowałem więc wszystkie sukcesy dopisane przez użytkowników w aplikacji [[slowtracker|SlowTracker]]. Ale pojawił się pewien problem: jak je teraz udostępnić innym?

## Udostępnianie wpisów a przypadkowy błąd kodera

Wpisy prywatne powinny być prywatne. Zawsze.

Jak jednak poradzić sobie z wpisami udostępnionymi? Jeśli zaszyfruję je tym samym kluczem (lub nie zaszyfruję w ogóle), to przez przypadek mogę udostępnić to, co nie powinno być publiczne.

Można odseparować wpisy do siebie. W jednej tabeli trzymać prywatne, w innej udostępnione. Trochę to utrudni dostęp do tych danych programiście.

Mogę też odszyfrować na urządzeniu użytkownika, potem zapisać niezaszyfrowane. Albo zaszyfrowane, ale innym kluczem.

W ten sposób utrudniam sobie, jako programiście, popełnienie prostego błędu. Nawet jeśli wpisy leżą w jednej tabeli i nie dodam warunku `WHERE shared = true` , to czytającym udostępniam tylko taki klucz, który odszyfrowuje wpisy udostępnione.

Gdyby więc zdarzyło się, że jednak popełnię błąd w wyciąganiu danych, to na etapie odszyfrowania użyję zawsze klucza dla udostępnionych wpisów. Operacja ta się wywali i najwyżej użytkownicy dostaną jakieś krzaki zamiast treści.

Innymi słowy, operacje wyciągania danych i odszyfrowania są w dwóch różnych miejscach i nie są ze sobą sprzęgnięte, co zapewnia dodatkowy poziom bezpieczeństwa.

## Proxy re-encryption

W ramach ciekawostki podpowiem jeszcze jedną metodę. Gdybym chciał tylko jednej osobie udostępnić wpis, albo chciałbym, aby *heavy lifting* odbywał się na serwerze, to mógłbym zastosować *proxy re-encryption*.

To metoda szyfrowania kluczami asymetrycznymi, która polega na tym, że do wiadomości zaszyfrowanej kluczem prywatnym dołączam nowy, specjalny klucz. 

Powstaje on przez połączenie mojego klucza prywatnego (do odszyfrowania) i klucza publicznego osoby, której wysyłam wiadomość. Wysyłam to na serwer, który ma za zadanie "przeszyfrować" wiadomość.

Z tego nowego klucza nie da się wyodrębnić klucza prywatnego, ani też nie da się za jego pomocą jedynie odszyfrować wiadomości. Można jedynie zaszyfrować ją ponownie w taki sposób, aby odbiorca mógł odszyfrować swoim kluczem prywatnym.

## Wymiana kluczy prywatnych między urządzeniami

Nie wiem czy wiesz, ale Whatsapp pozwala na korzystanie z przeglądarki albo aplikacji na komputerze. Jednak tutaj przy rejestracji pomiędzy urządzeniami konieczne jest jakieś spięcie, aby wymienić klucze. Aplikacja wymaga zeskanowania QR code i potwierdzenia na aplikacji mobilnej.

Nie wiem, czy taki jest dokładnie mechanizm, ale to jest moment, w którym może nastąpić wymiana kluczy.

## Granica paranoi

No dobra, przeszliśmy przez różne metody szyfrowania danych, zabezpieczania i przekazywania klucza szyfrującego oraz odzyskiwania dostępu do danych. Starałem się to w miarę po kolei opisać, ale i tak mi od tego głowa puchnie.

To, co jest najważniejsze, to ustalić granicę paranoi - co musimy koniecznie zabezpieczyć i przed czym? Czasem wystarczającym zabezpieczeniem będzie anonimizacja danych, aby nie dało się powiązać użytkownika z jego danymi.

W niektórych przypadkach szyfrowanie będzie zbędne, a może nawet szkodliwe. W [[slowtracker|SlowTracker]] można oznaczać wpisy jako zupełnie publiczne. Czy jest sens je szyfrować, skoro są dostępne dla każdego, nawet niezalogowanych użytkowników? Raczej nie.

Pamiętajmy też o tym, że bezpieczeństwo można podnosić z czasem. Na przykład zaimplementować najpierw proste szyfrowanie, następnie oddzielenie danych od kluczy, potem dopiero zaawansowane metody odzyskiwania dostępu i przechowywania haseł.

Czasem zbyt pochopne włączenie zabezpieczeń może prowadzić do utraty danych. Trzeba mieć pewność, że w razie awarii serwera będziemy mogli się do tych danych dostać. (Jak testowałem [Supabase Vault](https://supabase.com/blog/supabase-vault) w wersji *self-hosted*, to okazało się, że po restarcie serwera zmienił się główny klucz szyfrujący).

No i na koniec dodam, że bezpieczeństwo nie idzie w parze ani z wygodą ani z kosztami. Czasem tylko pozornie (utrata wizerunku może nas kosztować bankructwo).

Jest to jednak zarządzanie oczekiwaniami. Użytkownik, który wprowadza niewrażliwe dane (amatorskie fotki przyrody), nieistotne lub nieprawdziwe (bo uczy się czegoś lub testuje), będzie mieć zupełnie inne wymagania niż korporacja, która musi chronić zarówno dane swoich pracowników (lub użytkowników), jak i dane finansowe, kod źródłowy czy *know-how*.

Im lepiej ustalimy faktyczne ryzyka, tym mniej kosztować nas będzie wyciek, atak lub wdrożenie nowych funkcji. A czas i koszt, w przypadku tworzenia MVP, ma niemałe znaczenie.

I powtórzę za Szymonem - temat zabezpieczania danych w swojej aplikacji warto przedyskutować najpierw z LLM (kilka pomysłów i porównanie modeli znajdziesz [tutaj](https://budding-intelligence.hashnode.dev/casual-llm-clash-evaluating-the-latest-greatest)). Potrafi naprowadzić na wiele ciekawych rozwiązań i nauczyć się mówić o bezpieczeństwie, zwłaszcza w kontekście swojej aplikacji.

A jeśli wolisz z doświadczonym profesjonalistą skonsultować projekt, sprawdzić go pod kątem technologicznym, podjąć mądre decyzje projektowe i przyspieszyć rozwój oprogramowania, to napisz do [Szymona](https://www.linkedin.com/in/stasik/).

Powodzenia!
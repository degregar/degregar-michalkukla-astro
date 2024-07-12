---
created: 2024-07-11T11:00
updated: 2024-07-12T11:54
tags:
  - 1-sukces-dziennie
  - ux
  - mvp
  - informacja-zwrotna
  - agile
  - aplikacje-mobilne
title: Zły i dobry UX na przykładzie SpeechZap
description: Analiza doświadczeń użytkowników aplikacji SpeechZap. Dowiedz się, jak uproszczenie procesu transkrypcji i wprowadzenie kont testowych może poprawić wyniki. Praktyczne wskazówki na temat optymalizacji UX w aplikacjach mobilnych.
ogDescription: "Analiza UX aplikacji SpeechZap: Jak uprościć proces, aby poprawić wyniki?"
newsletterDescription: Jak uproszczenie procesu i wprowadzenie kont testowych poprawia UX aplikacji SpeechZap. Praktyczne wskazówki na temat optymalizacji doświadczeń użytkowników w aplikacjach mobilnych.
publishedAt: 2024-07-11T17:59
---
Od tygodnia reklamuję aplikację [[speechzap|SpeechZap]] w Google Ads. Ponad 60 instalacji, ale nikt do tej pory nawet nie wziął subskrypcji na okres testowy. 

W czym problem? Przyszedł czas na analizę.

Oryginalnie myślałem o tym, żeby dawać dostęp na 2-tygodniowy okres testowy (*trial*) po założeniu konta przez email. Przez ten czas użytkownik miałby do wykorzystania 30 minut bezpłatnej transkrypcji.

Ale gdy zacząłem ustawiać płatności przez [[tiery-revenuecat-google-play|RevenueCat]], to uznałem, że dla uproszczenia całego procesu zostawię ustawiane w Google Play darmowe okresy testowe. Działa to tak, że użytkownik zapisuje się na abonament i nie płaci do czasu, aż ten abonament się skończy. Ponadto na 2 dni przed zakończeniem okresu testowego dostanie informację kiedy nastąpi najbliższa płatność.

Teraz jednak pomyślałem, że konieczność "wykupienia" subskrypcji może być przeszkodą. Byłem już całkiem nieźle przygotowany z kodem na różne scenariusze, więc uznałem, że zrobię jednak te *triale* tak, jak chciałem na początku.

Ponadto, po rozmowach ze znajomymi, zrozumiałem, że użytkownicy potrzebują większej liczby wskazówek i/lub jeszcze prostszego procesu. Przyjrzałem się więc w jaki sposób użytkownik teraz widzi aplikację i okazało się, że musi - w najprostszym wariancie - wykonać **aż 18 kliknięć**, żeby dostać pierwszą transkrypcję.

To jest...
## Zły User Experience.

Przed transkrypcją muszę wiedzieć w jakim języku użytkownik mówił w nagraniu. Dlatego dostawał na twarz komunikat, że musi najpierw wejść w ustawienia, aby wybrać języki. To miało być ułatwienie: ograniczyć wybór do kilku, żeby user nie musiał przewijać listy ponad 90 dostępnych języków.

Kiedy już *user* ustalił listę języków, to teraz musiał wrócić do nagrania i znów wybrać język, tym razem z tej ograniczonej listy, po to tylko, żeby dowiedzieć się, że nie ma aktywnej subskrypcji.

Link prowadził do podstrony z cennikiem, który widoczny jest jedynie na Androidzie. Jeśli ktoś wszedł przez stronę internetową, to aplikacja informowała, że zakup jest możliwy tylko przez Google Play i musi zainstalować najpierw aplikację.

Po przebrnięciu przez ten proces i ponownym powrocie do nagrania, użytkownik mógł wreszcie dokonać transkrypcji.

Słabo 😞
## Dobry User Experience

Problem z wyborem języków można rozwiązać za pomocą pokazania na szczycie listy tych ostatnio wybieranych. Ale ten sposób dopiero teraz przyszedł mi do głowy 😅

Żeby poprawić wybór języka najszybciej jak się da, to użyłem innej metody: tworzę listę dostępnych języków automatycznie, przy pierwszej próbie wyświetlenia tejże listy.

Z automatu ustawiam język angielski oraz dodaję ten język, który urządzenie podaje, jako domyślny. I nie muszę po raz kolejny klikać w listę języków, żeby wybrać aktualny - ustawiam ten z urządzenia. W razie czego można go zmienić tuż przed transkrypcją.

Bo i czemu użytkownik miałby się przejmować ustawianiem tych języków, skoro wiem już wystarczająco dużo, żeby zmniejszyć liczbę kliknięć?

Zlikwidowałem też drugą przeszkodę, czyli konieczność rozpoczęcia subskrypcji w sklepie Google Play. Postanowiłem utworzyć użytkownikowi konto testowe z bezpłatnymi minutami po podaniu adresu email.

Wymagając logowania, chciałem ograniczyć koszty, a zwiększyć szansę na zakup subskrypcji. 
## Podsumowanie

Im mniej kroków, tym lepiej. Badania na ten temat były przeprowadzane wielokrotnie i dowodziły, że skoro można zrobić prostszy proces, to warto poświęcić na to trochę czasu.

Moja aplikacja zmieniała się z czasem i przeoczyłem gwałtowną komplikację całego procesu. Uproszczenie okazało się łatwe i zaskakująco oczywiste. Wystarczyło przyjrzeć się krytycznie i powiedzieć sobie: "dobra, udało się pokazać, że to działa i przynosi wartość, teraz czas, żeby zrobić to bardziej dla ludzi."

Użytkownik potrzebował wykonać 18 czynności, żeby przetestować apkę. Teraz potrzeba czterech prostych akcji:
1. Nagrać
2. Podać email
3. Wkleić kod z emaila
4. Kliknąć "Transkrybuj"

Czy można to jeszcze uprościć? Można. Wystarczy pozbyć się logowania. (🙌 Kudos za pomysł dla Pawła z mastermindu - warto rozmawiać!)

Ale wychodzę z założenia, że mogę to zostawić sobie jako opcję, w razie gdyby nie pomogły obecne uproszczenia.

Ostatecznie to kosztuje czas *developmentu* i opłaty za transkrypcję. Pozbycie się logowania wymaga ode mnie przerobienia nieco procesu od strony *backendu*.

I jeszcze jedna uwaga na koniec (trochę do siebie): warto zrobić proces najprostszym, jak się da. Przynajmniej przez jakiś czas, bo zawsze można go później zmienić.

Wyłączając konieczność logowania narażam się na nadużycia, ale chętnie zamienię wynikające z nich większe koszty na wczesną informację zwrotną. Jeśli przy najprostszym procesie nie ma efektów, to może problem leży gdzieś indziej. 

I gdybym robił teraz tę aplikację ponownie, to zacząłbym od wersji bez jakichkolwiek ograniczeń i konieczności logowania.
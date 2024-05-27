---
created: 2024-05-17T09:25
updated: 2024-05-20T14:11
tags:
  - 1-sukces-dziennie
  - slowtracker
  - programowanie
title: "Nowość w SlowTracker: wall"
description: Opowiadam o pierwszych dylematach związanych z wprowadzaniem nowej funkcji społecznościowej do aplikacji do zapisywania sukcesów SlowTracker.
---
Zrobiłem stronę główną (tzw. *wall*) w [[slowtracker|SlowTracker]], w którym pokazuję wszystkie sukcesy dodane do tych wyzwań, które użytkownik subskrybuje. Do tego pokazuję też sukcesy, które zostały skomentowane przez innych.

To krytyczny krok, bo dzięki temu userzy będą mogli w ogóle zobaczyć, że ktoś dodał jakiś sukces i będą mogli go skomentować. To ułatwi interakcję pomiędzy różnymi użytkownikami, a tym samym zaangażowanie.

Zastanawiam się teraz, czy robić możliwość obserwowania poszczególnych osób, żeby można było czytać w *wallu* ich publiczne posty. Ostatecznie można już teraz wejść w czyjś profil bezpośrednio, więc mogłoby to być użyteczne

Temat jest szerszy, bo to w sumie standard w social media, natomiast chciałem większą uwagę skupić na wspólnych celach, a nie markach osobistych.

Samo stworzenie *walla* jest dosyć trudne. Zapytania do bazy danych są skomplikowane, bo muszą uwzględniać wiele powiązań i jest ich kilka. W moim przypadku póki co 2:
1. Wpisy z zasubskrybowanych wyzwań
2. Moje skomentowane wpisy

Prawdopodobnie większy sens będzie miało wyciągnięcie powiadomień o komentarzach do powiadomień, ale tych jeszcze też nie robię. Tak czy inaczej póki co wybieranie wpisów do pokazania jest dość proste, ale w przyszłości pewnie pójdę bardziej w mechanizmy *[machine learning](https://pl.wikipedia.org/wiki/Uczenie_maszynowe)*. 

Przy okazji znalazłem błąd: jeśli już wcześniej sukces był udostępniony do jakiegoś wyzwania, to przy dodawaniu sukcesu do kolejnych wyzwań wpadałem w niewłaściwy stan przy szyfrowaniu danych. Dane nie ucierpiały.

Ogólnie praca była dość przyjemna. Fajnie jest siedzieć sobie w biurze i dłubać bez pośpiechu nowe narzędzia i funkcje. Odmiana od ostatnich intensywnych dni w pracy jako [[zaangazowanie-hotelarza-w-zbieranie-danych|konsultant]].
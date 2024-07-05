---
created: 2024-06-27T11:01
updated: 2024-07-05T12:27
title: Jak rozliczać się z Google Play za sprzedaż aplikacji?
aliases:
  - Jak rozliczać się z Google Play za sprzedaż aplikacji?
description: Dowiedz się, jak Google Play rozlicza się z twórcami aplikacji, pełniąc rolę dystrybutora. Sprawdź, jakie obowiązki podatkowe ma Google, jak działa podatek u źródła i jak uprościć proces księgowy dla Twojej spółki z o.o.
ogDescription: Dowiedz się jaką rolę pełni Google Play w kontekście wystawiania rachunków klientom i rozliczeń podatkowych.
tags:
  - 1-sukces-dziennie
  - google-play
  - speechzap
  - marketing
  - sprzedaz
  - ksiegowosc
publishedAt: 2024-06-27T12:27:00
---
Tworzę aplikację [[speechzap|SpeechZap]], którą chcę sprzedawać w sklepie [Google Play](https://play.google.com/store/apps/details?id=com.speechzap.mobile) i App Store. 
Prowadzę spółkę z o.o. i  i byłem przekonany, że muszę sam wystawiać faktury dla użytkowników końcowych. Zawahałem się jednak jeszcze podczas implementacji płatności.

Problematyczny jest też - jak zwykle - podatek VAT. Różne stawki w różnych krajach, odwrotne obciążenia, itd. Ale pojawia się tutaj też podatek u źródła.

Zapytałem o te rzeczy na mojej grupie *mastermind* i Szymon uznał, że to niemożliwe, żebym to ja musiał wystawiać faktury klientom końcowym przy sprzedaży przez sklep.

Jednak nie byłem przekonany. Nie miałem do czynienia ze sklepami, a raczej przyzwyczajony jestem do tego, że to na mnie ciążą wszystkie obowiązki podatkowe, a pośrednicy umywają ręce.

Jak jest naprawdę?

Czy Google (i Apple) są pośrednikami płatności jak Stripe, czy też dystrybutorem, który rozlicza się z klientami i urzędem skarbowym?

Po kilku godzinach samodzielnego *researchu* i pytań do kilku osób udało mi się odpowiedzieć na to pytanie.

Uwaga! Nie jestem doradcą podatkowym ani księgowym, dlatego zrób proszę własny *research* i wnioski wyciągnij samodzielnie. Ostrzeżony.
## Jaką rolę pełni Google Play?

Mój wniosek: **Google jest dystrybutorem, który pobiera płatności, wystawia rachunki klientom końcowym i rozlicza podatki.**

To oznacza, że wystawiam jedną fakturę przychodową na podstawie całej miesięcznej sprzedaży. I nie muszę nawet wysyłać jej do Google.

Nie było to jednak (przynajmniej dla mnie) takie oczywiste.
## Źródło informacji

Pierwsze znalezione artykuły wskazywały na to, że Apple, owszem, jest dystrybutorem, ale Google Play jest jedynie pośrednikiem płatności. Zaniepokoiło mnie to (bo zaczynam od dystrybucji apki właśnie w Google Play) i zdziwiło (dlaczego Google i Apple biorą taką samą prowizję, skoro robią inne rzeczy?).

Jednak te artykuły okazały się być przestarzałe. Zasady Google Play się zmieniają. Prawdopodobnie korekta, która mogła zmylić autorów niektórych artykułów, wprowadzona została [9 listopada 2019](https://play.google/intl/ALL_pl/developer-distribution-agreement/summary.html) i mogła pozwolić traktować Google nie tylko jako pośrednika płatności, ale też dystrybutora.

Pewną wskazówką może być również [podatek u źródła](https://support.google.com/googleplay/android-developer/answer/9384608?hl=pl). Jeśli Google musi go odprowadzać, to znaczy, że nie jest tylko pośrednikiem płatności, jak Stripe.

Podstawowym dokumentem jest jednak [Developer Distribution Agreement](https://play.google/developer-distribution-agreement.html) (którego oczywiście na początku nie chciało mi się czytać, stąd wszystkie wątpliwości).

Znalezione źródła:
- Google jako pośrednik (2022-03-11): https://poradnikprzedsiebiorcy.pl/-jak-rozliczyc-przychody-ze-sprzedazy-aplikacji-na-app-store-oraz-google-play
- https://antyweb.pl/jak-rozliczyc-przychody-ze-sprzedazy-aplikacji-w-app-store-i-google-play
- Perplexity: https://www.perplexity.ai/search/for-mobile-InApp-hqqQb29uRsKZae.Aj88DlA
- Google jako dystrybutor (2021): https://www.ifirma.pl/blog/jak-rozliczac-vat-z-google-play.html
- Google i Apple jako dystrybutor (2022-07-22): https://poradnikprzedsiebiorcy.pl/-sprzedaz-aplikacji-mobilnych-rozliczenie-na-gruncie-vat
- Developer Distribution Agreement (to Google odprowadza podatki): https://play.google/developer-distribution-agreement.html
- Changelog Developer Distribution Agreement: https://play.google/intl/ALL_pl/developer-distribution-agreement/summary.html
- Podatek u źródła: https://support.google.com/googleplay/android-developer/answer/9384608?hl=pl
- Rozmowa z Perplexity, która mnie nakierowała: https://www.perplexity.ai/search/Chc-sprzedawa-aplikacj-AQL3MtB4SNe4OG97AQhGvw

## Podatek u źródła

Poniżej efekty rozmowy ze sztuczną na temat podatku u źródła w kontekście rozliczania się przez spółkę z o.o. 

Podatek u źródła (ang. *withholding tax*) to rodzaj podatku, który jest pobierany u źródła dochodu, czyli przez podmiot wypłacający wynagrodzenie lub inną należność. W kontekście międzynarodowym oznacza to, że podatek jest potrącany przez płatnika (np. zagraniczną platformę dystrybucyjną) i odprowadzany do urzędu skarbowego w kraju, w którym dochód jest uzyskiwany.

Podatek u źródła dotyczy podatku typu CIT (Corporate Income Tax) lub PIT (Personal Income Tax), a nie VAT (Value Added Tax).
### Jak to działa:

1. **Wypłata należności**: Kiedy zagraniczny podmiot (np. Google) wypłaca Ci wynagrodzenie za sprzedaż aplikacji w Google Play, może być zobowiązany do potrącenia podatku u źródła od tej kwoty.
2. **Odprowadzenie podatku**: Zagraniczny podmiot odprowadza potrącony podatek do urzędu skarbowego w swoim kraju.
3. **Otrzymanie płatności netto**: Ty jako deweloper otrzymujesz wynagrodzenie pomniejszone o kwotę potrąconego podatku.
### Spółka z o.o. zarejestrowana w Polsce:

1. **Podatek u źródła w praktyce**:
    - Jeżeli sprzedajesz aplikacje za pośrednictwem Google Play, a Google ma obowiązek potrącania podatku u źródła w swoim kraju, może to oznaczać, że z każdej transakcji potrącana jest określona kwota podatku.
    - Google przekazuje tę kwotę do urzędu skarbowego w swoim kraju, a Tobie wypłaca kwotę netto (po potrąceniu podatku).
2. **Obowiązki podatkowe w Polsce**:
    - Jako polska spółka z o.o., musisz uwzględnić te potrącenia podatku w swoich rozliczeniach podatkowych w Polsce.
    - Możesz mieć prawo do ubiegania się o zwrot tego podatku lub do zaliczenia go na poczet podatku dochodowego płaconego w Polsce, zgodnie z umową o unikaniu podwójnego opodatkowania między Polską a krajem, w którym Google odprowadza podatek u źródła.
## Podsumowanie

Do tej pory wkurzała mnie wysokość prowizji (15-30%!), jaką sklepy biorą za sprzedasz przez ich sklep. Teraz jednak rozumiem, że w tę opłatę jest wliczone też coś, co dla mnie stanowi bardzo duży problem - rozliczenia z klientami końcowymi i księgowanie.

(Na marginesie, w tym temacie natrafiłem jeszcze na sekcję *What does the service fee pay for?* w [tym artykule](https://support.google.com/googleplay/android-developer/answer/11131145?hl=en&ref_topic=12798386&sjid=13867008832489078351-EU), co jest świetnym pomysłem na łagodzenie obiekcji klientów co do ponoszonych przez nich kosztów.)

A wracając do podsumowania, na szczęście mogę uprościć znacznie moje rozliczenia: nie muszę wystawiać faktur i doliczać kosztów ich księgowania (4-8 zł za fakturę + 1 zł za przelew u mojego obecnego księgowego!).

To pozwala obniżyć koszty dla moich klientów, które przy [niskich cenach abonamentu](https://app.speechzap.com/pricing) stanowiły większość kwoty.
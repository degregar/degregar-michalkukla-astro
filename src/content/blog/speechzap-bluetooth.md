---
created: 2024-07-25T09:41
updated: 2024-07-29T15:54
publishedAt: 2024-07-29T15:49
title: Lekcje z naprawy Bluetooth w dyktafonie SpeechZap
description: Naprawa problemu z nagrywaniem dźwięku przez Bluetooth w aplikacji SpeechZap. Dowiedz się, jak poradziłem sobie z problemami technicznymi na Androidzie i iOS, w tym jak zastosowałem metodę prób i błędów oraz wsparcie kolegów, aby zoptymalizować funkcjonalność aplikacji dedykowanej osobom będącym w ruchu.
ogDescription: Zobacz, jak naprawiłem problem z Bluetooth w aplikacji SpeechZap i umożliwiłem nagrywanie przez zestaw głośnomówiący na Androidzie i iOS. Praktyczne rozwiązania i historie z życia codziennego!
newsletterDescription: W tym artykule opisuję, jak rozwiązałem problem z nagrywaniem dźwięku przez Bluetooth w aplikacji SpeechZap. Dowiedz się, jak przy pomocy metody prób i błędów oraz wsparcia kolegów udało mi się naprawić krytyczny błąd w aplikacji na Androidzie i iOS. Praktyczne wskazówki dla programistów i historia zaradności w codziennym życiu.
aliases:
  - Lekcje z naprawy Bluetooth w dyktafonie SpeechZap
tags:
  - 1-sukces-dziennie
  - speechzap
  - programowanie
  - zaradnosc
  - capacitor
  - aplikacje-mobilne
---
Odkryłem błąd w aplikacji [[speechzap|SpeechZap]]: aplikacja zbierała dźwięk jedynie z mikrofonu urządzenia, bez znaczenia, czy połączyłem się z zestawem głośnomówiącym, czy nie. Trochę lipa, skoro ma to być apka dedykowana dla osób będących w ruchu.

Naprawiłem to na Android, ale niestety na iOS to nie zadziałało od kopa. Na szczęście udało mi się i tu znaleźć rozwiązanie, choć wymagało to kilkudziesięciu prób, a nie mam iPhone'a do testów.
## Rozwiązanie - dla programistów

Do tej pory korzystałem z wtyczki [capacitor-voice-recorder](https://www.npmjs.com/package/capacitor-voice-recorder). Próbowałem ją zhakować, żeby samodzielnie dodać kod do nagrywania przez zestaw głośnomówiący, ale to nie działało. Nie wiem czemu, bo nawet prostszy kod działa w innej wtyczce: [capacitor-plugin-headset](https://www.npmjs.com/package/capacitor-plugin-headset).

Metodą prób i błędów udało mi się znaleźć rozwiązanie dla Android:
```js
// w momencie rozpoczęcia nagrywania
await HeadsetPlugin.toggleBluetoothSco({  
  scoOn: true,  
});
```

Ale to nie wystarczyło dla iOS. Tam znów metodą prób i błędów (dzięki uprzejmości kolegi, bo ja nie mam jeszcze iPhone'a do testów), udało mi się znaleźć trochę brzydkie, ale działające rozwiązanie:
```js
await HeadsetPlugin.toggleBluetoothSco({  
  scoOn: true,  
});  
setTimeout(() => {  
  HeadsetPlugin.toggleBluetoothSco({  
    scoOn: true,  
  });  
}, 0);
```

Musiałem jednak zrobić jedną rzecz: dodać kod Swift do uruchomienia tej metody na iOS, bo wtyczkę zaimplementowano jedynie na Android.

Kod znajdziesz [tutaj](https://github.com/degregar/capacitor-plugin-headset).

## Dla przedsiębiorców

Początkowo rozważałem zakup iPhone'a, chociaż nie uśmiecha mi się wydawać teraz na coś, czego potrzebuję jedynie do testów raz w tygodniu. Nie chciałem jednak prosić nikogo o pomoc, bo co to za programista aplikacji mobilnych, co nie ma swojego urządzenia.

Nie chciałem też zderzać się z obawą znajomych o udostępnienie mi urządzenia i zajęcie go na kilka godzin (tyle trwały testy na Android, nie oczekiwałem, że z iOS pójdzie szybciej).

Potem podzwoniłem i okazało się, że kolega ma nieużywany, ale nieco uszkodzony iPhone 7. Po kilku godzinach, gdy dostałem urządzenie do ręki, okazało się, że nie mogę na nim zainstalować aplikacji.

W międzyczasie poszukałem bliżej. Pracownik restauracji w hotelu rodziców miał nowszego iPhone'a i zgodził się udostępnić mi go na testy. A że w tym czasie pracował, to i tak nie potrzebował telefonu. Dał mi nawet swój PIN!

Dzięki temu, że schowałem dumę do kieszeni i poprosiłem go o pomoc, to mogłem porządnie przetestować aplikację i błyskawicznie dostać informację zwrotną (kluczowe!). Nie musiałem polegać na testach znajomych, bo to zdecydowanie zbyt długi proces. (Oprócz zbudowania apki trzeba poczekać kilka godzin na akceptację wersji testowej przez Apple 🤦)

## Podsumowanie

SpeechZap ma już nagrywanie przez zestaw głośnomówiący, co było jedną z największych przeszkód technicznych dla aplikacji, która jest dedykowana osobom będącym w ruchu (spacer, samochód, rower) 🚀

Nawiązałem kontakt z innymi, miałem okazję opowiedzieć o swojej aplikacji i bez wydawania pieniędzy pokonać przeszkody. Ta krótka historia to przykład, którego mogę użyć, aby nauczyć zaradności swoje dzieci.

Wydanie pieniędzy jest szybkim sposobem, ale kosztownym 😉

P.S. Okazało się, że kolega miał jeszcze jeden telefon i pożyczył mi go do kolejnych testów. Jak dyktafon zacznie zarabiać, to sobie wreszcie kupię. Pomożesz mi w tym? 😇 Przetestuj na [speechzap.com](https://speechzap.com)
---
created: 2024-07-04T18:05
updated: 2024-07-05T14:30
tags:
  - automatyzacja
  - 1-sukces-dziennie
  - wordpress
  - speechzap
  - youtube
title: Jak utworzyć wpis w WordPress na podstawie transkrypcji bezpośrednio z dyktafonu SpeechZap?
description: Naucz się, jak zintegrować dyktafon SpeechZap z WordPressem za pomocą Make.com, aby automatycznie tworzyć robocze wersje wpisów na blogu z transkrypcji. Praktyczny poradnik krok po kroku dla efektywnej automatyzacji.
ogDescription: W 5 min pokażę Ci krok po kroku jak ustawić dodawanie wpisów jednym kliknięciem.
newsletterDescription: Czy wiesz, że możesz automatycznie tworzyć robocze wersje wpisów na WordPressie bezpośrednio z transkrypcji nagrań z dyktafonu SpeechZap? W najnowszym artykule pokazuję, jak to zrobić krok po kroku przy użyciu Make.com. Idealne dla tych, którzy szukają sposobów na oszczędność czasu i zwiększenie produktywności.
publishedAt: 2024-07-05T11:15
ogTitle: Jak utworzyć wpis w WordPress na podstawie transkrypcji ze SpeechZap?
---
Dzisiaj pokażę w jaki sposób zintegrować dyktafon [[speechzap|SpeechZap]], aby transkrypcje trafiały bezpośrednio do WordPressa jako robocze wersje wpisów, wstępnie przeredagowane i ze świetną interpunkcją.

Do integracji wykorzystamy Make.com, który w bezpłatnej wersji jest dla nas bardziej przydatny niż Zapier.

Będziemy potrzebować:
1. Zainstalowanego WordPressa
2. Konto w Make.com
3. Aplikację SpeechZap z ustawionym własnym kluczem [AssemblyAI](https://assemblyai.com) lub wykupioną subskrypcją.

## Instrukcje wideo

<iframe width="560" height="315" src="https://www.youtube.com/embed/vghjdbtw-Qs?si=T7o95JSTA-Rd21CZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Instrukcje opisowe

Na początek wejdziemy do Make.com i utworzymy nowy scenariusz. Pierwszym modułem, który wywoła nasze akcje, będzie `Custom Webhook`. Po stworzeniu kopiujemy adres webhooka, np. `https://hook.eu1.make.com/imm5pc7v2mr1knt9k5ee24nibbhwv5mt`

Teraz musimy dodać go do SpeechZap w zakładce Akcje, utworzyć testową transkrypcję i wysłać ją na tę akcję.

Wracamy do Make i dodajemy kolejny moduł o nazwie `WordPress Create a Post`. Musimy stworzyć nowe połączenie z WordPressem. W polu `Wordpress REST API base url` podajemy adres naszego bloga i na końcu dopisujemy `/wp-json/`.

Jeśli przykładowo adres to `https://wp.speechzap.com`, to wpisujemy w tym polu `https://wp.speechzap.com/wp-json/`

Zanim zapiszemy, przechodzimy do naszego WordPressa i dodajemy nową wtyczkę o nazwie `Make Connector`. Po zainstalowaniu musimy wejść w menu na dole w link `Make` skopiować klucz API. Wklejamy go do trzeciego pola w naszej integracji Make i zapisujemy.

Teraz potrzebujemy podać tytuł (*title*). Po kliknięciu w pole wybieramy opcję `1. name`. W `content` wybieramy `transcription` -> `transcriptionModelResponse` -> `text`.

W `type` wybieramy czy ma to być wpis, czy strona. Pozostałe pola możemy wypełnić wg naszego uznania.

Zapisujemy scenariusz i uruchamiamy. Możemy dla testu kliknąć w prawym dolnym rogu w `Run once` i wykonać ponownie w SpeechZap akcję wysłania do WordPressa. Sprawdźmy czy zadziała.

## Podsumowanie

Prawda, że proste?

To dopiero początek, bo w dobie łatwego dostępu do sztucznej inteligencji możemy tę wstępną treść automatycznie przeredagować, wyciągnąć tagi, kategorię, dodać linki do innych treści i wiele, wiele innych.

Powodzenia w automatyzacjach!
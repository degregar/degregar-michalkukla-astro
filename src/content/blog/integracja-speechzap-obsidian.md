---
created: 2024-06-05T07:36
updated: 2024-06-17T11:36
tags:
  - 1-sukces-dziennie
  - obsidian
  - speechzap
  - integracja
  - notowanie
  - markdown
  - automatyzacja
title: Jak zintegrować SpeechZap z Obsidian?
aliases:
  - Jak zintegrować SpeechZap z Obsidian?
description: Stworzyłem dyktafon, który ma automatyczną transkrypcję i integracje. Zobacz jak skonfigurować krok po kroku, aby wysyłać transkrypcję automatycznie do Obsidian.
---
Wczoraj zintegrowałem moją nową aplikację inteligentnego dyktafonu [[speechzap|SpeechZap]] z [Obsidianem](https://obsidian.md/). Dzisiaj pokażę jak.

Jeśli czytał_ś [[speechzap|historię]] tego projektu, to wiesz, że długo szukałem aplikacji, która pozwoliłaby mi notować podczas spacerów lub jazdy samochodem. Czasami podczas półtoragodzinnej jazdy nagrywałem kilkanaście krótkich notatek na dyktafonie. Podczas spaceru zwykle miałem *flow* i opisywałem coś, co z powodzeniem mogłoby być spójnym fragmentem artykułu czy postem na social media.

Problem polegał na tym, że potem tyle samo czasu, ile gadałem, musiałem tego słuchać i to przepisywać.

Jako narzędzie do mojego *second brain* używam Obsidian. (Tak też [[markdown-rzadzi|powstaje]] ten blog). Do niego chciałem przerzucać wszystkie moje notatki automatycznie. Nie było to jednak takie proste.

Dlatego stworzyłem wreszcie swój własny dyktafon, który robi automatycznie transkrypcje i pozwala łatwo zintegrować się z Zapierem, Make.com lub innym integratorem. To daje ogrom możliwości automatyzacji mojej pracy.

Obisidian to edytor plików tekstowych o rozszerzeniu `.md` (od [[markdown-rzadzi|markdown]]). Struktura folderów jest odwzorowana tak jak w Finderze na maku, czy w Eksploratorze plików, jak w Windowsie. Podlega więc takim samym prawom, jak wszystkie inne pliki i foldery: można je kopiować, przenosić, usuwać i synchronizować z chmurą.

## Jak zintegrować SpeechZap z Obsidian - krok po kroku

Będziemy potrzebować kilku **bezpłatnych** narzędzi:
- [SpeechZap](https://speechzap.com) oczywiście
- [Obsidian](https://obsidian.md) oczywiście
- [Make.com](https://www.make.com/en/register?pc=michalkukla) (niestety Zapier nie pozwolił mi stworzyć plików `.md`, ale możesz go użyć do innych automatyzacji)
- [Dropbox](https://www.dropbox.com/referrals/AAAtRp73jdaA1FUwP9L2uiUDonNR08OzUmg?src=global9) - z tego linku dostaniesz 500MB (i ja też 500MB)


### Wersja wideo

Jeśli wolisz oglądać zamiast czytać, to poniższe wideo wyjaśniają krok po kroku co należy zrobić, żeby skonfigurować całą integrację - od transkrypcji po wrzucenie pliku do Obsidian.

#### Jak skonfigurować transkrypcje?
  
<iframe  
  width="560"  
  height="315"  
  src="https://www.youtube.com/embed/UVBFk5sBmIU?si=ShdUjnCDKNBMK3qi"  
  title="YouTube video player"  
  frameBorder="0"  
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
  referrerPolicy="strict-origin-when-cross-origin"  
  allowFullScreen  
  className={"my-4"}  
></iframe>

#### Jak skonfigurować integrację z Obsidian?

<iframe  
  width="560"  
  height="315"  
  src="https://www.youtube.com/embed/2x1c3ymuuUU?si=O7FzRKazVgs8TAG1"  
  title="YouTube video player"  
  frameBorder="0"  
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
  referrerPolicy="strict-origin-when-cross-origin"  
  allowFullScreen  
  className={"my-4"}  
></iframe>

### 1. Transkrypcje w SpeechZap

Jeśli nie masz jeszcze tej aplikacji, to instrukcje do ustawienia transkrypcji znajdziesz w sekcji [Jak używać?](https://app.speechzap.com/instructions)

### 2. Dropbox

Integrację zaczniemy od konfiguracji Dropbox. Wejdź na [ich stronę](https://www.dropbox.com/referrals/AAAtRp73jdaA1FUwP9L2uiUDonNR08OzUmg?src=global9), utwórz konto i pobierz aplikację na komputer. Po zainstalowaniu, pliki będą automatycznie się synchronizować pomiędzy chmurą a Twoim komputerem.
### 3. Obsidian

Jeśli nie masz jeszcze, to na stronie https://obsidian.md znajdziesz link do instalacji. Proces jest dosyć prosty, więc nie będę go tłumaczył. Po stworzeniu swojego *vault* (folderu z plikami) jesteśmy gotowi do działania.

**Jeśli to jest Twój pierwszy raz w Obsidian**, to możesz  ustawić lokalizację swojego *vault* od razu wewnątrz folderu Dropboxa. W ten sposób cała zawartość Obsidiana będzie automatycznie synchronizowana z chmurą.

**Jeśli już masz swój *vault***, to możesz go przenieść do Dropboxa.

**Jeśli nie chcesz go z jakichś powodów do niego przenosić**, to na macOS i Linux (nie wiem, czy na Windows się da) możesz utworzyć link symboliczny (skrót) do folderu.

W tym celu:
1. Utwórz folder np. `SpeechZap` w folderze Dropbox.
2. Zlokalizuj ścieżkę do tego folderu
	1. W Finder kliknij prawym przyciskiem myszy w folder
	2. `Services` -> `New terminal at folder`
	   	![[Screenshot 2024-06-05 at 08.34.38.png]]
	3. Wpisz `pwd` i wciśnij `Enter`
	4. Skopiuj ścieżkę, np. `/Users/michalkukla/Dropbox/SpeechZap`
	   ![[Screenshot 2024-06-05 at 08.35.42.png]]

3. Odnajdź swój *vault* w Finderze i tak samo, jak w poprzednim kroku, otwórz w terminalu.
4. Wpisz komendę `ln -s [sciezka do folderu w Dropbox] [nazwa folderu w Obsidian]`, np. `ln -s /Users/michalkukla/Dropbox/SpeechZap SpeechZap`
   ![[Screenshot 2024-06-05 at 08.39.13.png]]
5. Teraz w Obsidian powinno być widać nowy folder `SpeechZap`.
6. Utwórz na próbę nowy plik w Obsidian w tym folderze `SpeechZap` i sprawdź, czy widać go w Dropboxie (najlepiej przez stronę internetową, w ten sposób upewnisz się, że synchronizacja z chmurą działa).

### 4. Make.com

Teraz najtrudniejsza część. W tym miejscu polecam obejrzeć [wideo](https://youtu.be/2x1c3ymuuUU?si=Zm2I682-TV_aFP1O&t=326), które umieściłem na początku, bo wyjaśnia krok po kroku cały proces.

W skrócie (dla bardziej zaawansowanych):

1. **Konfiguracja Make**:
   - Zaloguj się na make.com i stwórz nowy scenariusz.
   - Dodaj webhook jako pierwszy moduł (trigger).
   - Skopiuj adres webhooka
   - Dodaj nową akcję w SpeechZap, nazwij ją np. „Obsidian”, i wklej URL webhooka.

2. **Testowanie integracji**:
   - Wróć do Make i uruchom scenariusz (Run Once).
   - W SpeechZap kliknij w nagranie i wyślij je do webhooka przez akcję "Obsidian".

3. **Konfiguracja JSON**:
   - W Make dodaj nowy moduł „Parse JSON”.
   - W polu JSON string wybierz wartość z webhooka.
   - Stwórz nową strukturę danych na podstawie przykładowych danych JSON wysłanych na webhook ze SpeechZap.

4. **Integracja z Dropboxem**:
   - W Make dodaj moduł Dropboxa (akcja „Upload a File”).
   - Skonfiguruj połączenie z Dropboxem.
   - Wybierz folder w Dropboxie folder do zapisu plików, np. „SpeechZap Inbox”
   - Ustaw nazwę pliku jako `filePath` (z JSON) z rozszerzeniem `.md`
   - W polu data wybierz treść transkrypcji (`Transcription content`).

5. **Testowanie integracji**:
   - Uruchom ponownie scenariusz w Make.
   - Sprawdź, czy plik został poprawnie przesłany do Dropboxa i pojawił się w Obsidianie.

6. **Dodatkowe ustawienia** (opcjonalne):
   - W Make dodaj sekcję *front matter* z parametrami (`filePath`, `createdAt`, `tags`).
   - Przetestuj ponownie, aby upewnić się, że dane są poprawnie zapisywane w Obsidianie.

7. **Włączanie integracji**:
    - W Make włącz integrację (przełącznik on/off na dole po lewej).

## Podsumowanie

Pamiętaj, że Make umożliwia 1000 operacji w darmowym planie. W przypadku tej konfiguracji każde wysłanie transkrypcji na webhooka będzie kosztować 3 operacje. To oznacza, że miesięcznie możesz wysłać 333 transkrypcje.

Wiem, że proces może być trudny dla osób nietechnicznych. Jeśli masz pytania, coś nie działa jak powinno lub masz pomysł na rozwój aplikacji, to napisz do mnie na support@speechzap.com

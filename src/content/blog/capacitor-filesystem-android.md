---
created: 2024-07-03T07:34
updated: 2024-07-05T10:54
tags:
  - 1-sukces-dziennie
  - ionic
  - speechzap
  - android
  - programowanie
  - capacitor
  - javascript
title: Jak rozwiązać problemy z Capacitor Filesystem w aplikacji mobilnej?
description: Dowiedz się, jak rozwiązać problemy z zapisem plików w aplikacjach mobilnych używających Capacitor Filesystem. Przeczytaj, jak diagnozować błędy i implementować skuteczne rozwiązania dla różnych wersji Androida. Szczegółowy przewodnik krok po kroku.
ogDescription: Dowiedz się, jak rozwiązać problemy z zapisem plików w aplikacjach mobilnych korzystających z Capacitor Filesystem na różnych wersjach Androida.
---
publishedAt: 2024-07-05T10:54
Udało mi się naprawić problem z zapisywaniem nagrania w [[speechzap|dyktafonie SpeechZap]], który wykorzystuje [Ionic](https://ionicframework.com/) i [Capacitor Filesystem](https://capacitorjs.com/docs/apis/filesystem). Męczyłem się z tym cały dzień.

Poniżej znajdziesz całą relację i metodę dojścia do rozwiązania. Jeśli chcesz tylko rozwiązanie i kod, to znajdziesz go w sekcji "Rozwiązanie i metoda testowania wersji".
## Objawy

Problem pojawił się na Huawei P30 Lite, który chodzi na Android 9. Niestety, nie miałem do niego dostępu i tylko dzięki cierpliwości Gosi, która pomagała mi zdalnie, udało mi się to przetestować.

Po zakończeniu nagrania aplikacja powinna zapisać plik i pokazać nagranie do odtworzenia oraz transkrypcję. Plik się nie zapisał, a pozostały na ekranie guzik do rozpoczęcia nagrywania patrzył na mnie jakby z wyższością.
## Poszukiwania wskazówek w kodzie

Podłączyliśmy telefon do komputera i sprawdziliśmy logi. Wiedzieliśmy, że nie możemy przeczytać zawartości katalogów, stworzyć nowego folderu ani pliku, bo to wynikało z moich własnych logów. Niestety Capacitor nie dostarczył żadnego komunikatu błędu.

Skompilowałem nową wersję z większą liczbą logów, aby rzucić nieco więcej światła na naturę problemu. Wpuściłem ją do sklepu jako wersję do testów wewnętrznych dla wybranych użytkowników i poprosiłem Gosię o instalację. To zawsze trwa, bo Google Play nie od razu umożliwia instalację najnowszej wersji.

I niestety te poprawki nie rozjaśniły sytuacji ani o lumen.

Mogliśmy w przeglądarce dogrzebać się do kodu źródłowego, który wyrzucał ten wyjątek bez komunikatu. Po pół godziny testów, fedrowania i ustawiania *breakpointów* doczołgaliśmy się do wiadomości:
> Unable to create directory, unknown reason

Moja frustracja w tym momencie zbliżała się już do lokalnego ekstremum.

[Capacitor](https://capacitorjs.com/) jest w założeniu adapterem, czyli warstwą pomiędzy aplikacją napisaną w JavaScript a urządzeniem. Powinien dostarczać API, które jest napisane przez speców od Androida/iOS i będzie ukrywać szczegóły, ale jednak dostarczać jakieś informacje. 

I to oczekiwanie okazało się pierwszym spróchniałym mostem do stabilnej aplikacji.

Spodziewałem się raczej jakiegoś komunikatu o nieistniejącej ścieżce, braku uprawnień (które sprawdziliśmy z resztą), brakującym miejscu na dysku (zostało jeszcze 3GB), albo czymkolwiek, co mogłoby powiedzieć o naturze problemu. Dostaliśmy lakoniczny `Error`.

Kod zapisu wyglądał tak jak w dokumentacji:
```js
const writeSecretFile = async () => {  
  await Filesystem.writeFile({  
    path: 'secrets/text.txt',  
    data: 'This is a test',  
    directory: Directory.Documents,  
    encoding: Encoding.UTF8,   
  });  
};
```

I u mnie działał, a u Gosi nie.
## Internety

Przegrzebałem kilka wątków w necie, zwłaszcza w kontekście błędu, który otrzymałem oraz zapisywania plików przez Capacitor w Androidzie w wersji 9. Dogrzebałem się do kilku, które sugerowały jakieś przestarzałe rozwiązania, problemy z uprawnieniami i inne, które przetestowaliśmy już na wszystkie strony.

Znalazłem też [wątek na githubie](https://github.com/ionic-team/capacitor/issues/2827), który wskazywał na dokładnie ten sam problem. Niestety zamknięty od 4 lat - bez rozwiązania.

Zapytałem Szymona z mojej grupy mastermind. Zasugerował problem ze ścieżkami. Lokalnie różne proste próby zapisania pliku w lokalizacji względnej (`./sciezka-do-pliku.txt`) kończyły się błędem, więc raczej nie tędy droga.

Ręczne tworzenie folderu `SpeechZap` (do którego zapisuję wszystkie nagrania) w folderze `Documents` na urządzeniu Gosi też nie dały żadnego rezultatu. Nadal nie dało się go odczytać.

Wróciłem do pytania: czym różni się moje urządzenie od urządzenia Gosi? Wersją Androida.
## Symulator

Do tej pory testowałem aplikację albo na swoim urządzeniu albo na symulatorze, który korzystał z najnowszej wersji SDK Androida. Znalazłem [instrukcję](https://www.youtube.com/watch?v=4rCNc3uhLJE) jak wyklikać nowy symulator z inną wersją SDK.

Wyjaśnienie spoko (o dziwo, pomimo hinduskiego akcentu), ale niestety próba uruchomienia na nim kończyła się znów bez jakiegokolwiek komunikatu błędu. Mam na myśli, że apka nawet nie wstała!

Nie dało się włączyć ani przez Android Studio, ani przez konsolę za pomocą komendy np. `npx cap run android`.

Szymon mówi, że on takie rzeczy tylko z konsoli robi.

Znalazłem więc [metodę na stworzenie emulatora z konsoli](https://www.wrike.com/blog/how-to-create-an-android-emulator-terminal/) i dogrzebałem się do następującej komendy:

```bash
cd ~/Library/Android/sdk/emulator
nohup ./emulator -avd Medium_Phone_API_29_Android_10 -no-snapshot -no-boot-anim -wipe-data
```

To uruchomiło symulator, choć oczywiście bez zainstalowanej aplikacji. Natomiast - co najważniejsze - mogłem teraz dotychczasową metodą uruchomić aplikację na tym właśnie symulatorze!

Nie wnikam, co się odblokowało. Testuję!

Niestety, odpalenie na Android 9 skończyło się błędem o brakującym `globalThis`. Internety sugerowały [instalację polyfilla](https://github.com/ionic-team/capacitor/discussions/3871), ale nie dało to rezultatu.

Udało mi się natomiast uruchomić wersję Android 10. I tam odkryłem wreszcie, że mój kod również nie działa. Dostałem to, czego potrzebowałem, czyli zreprodukowałem błąd i mogłem testować zgodnie z ideą [[fail-fast|fail fast]].
## Powrót do dokumentacji

Sugestia Szymona o ścieżkach wydawała się słuszna, dlatego przyjrzałem się temu `directory`. Cały czas ustawialiśmy `Directory.Documents`, które teoretycznie powinno działać. GPT na podstawie dokumentacji podpowiadało jedynie, aby poprawić uprawnienia. To nie było pomocne.

I czytając [sekcję wyjaśniającą enum](https://capacitorjs.com/docs/apis/filesystem#directory) `Directory` również nie widziałem niczego, co mogłoby mi pomóc. Trafiłem jednak na zapis:
> Note that [`Directory.ExternalStorage`](https://capacitorjs.com/docs/apis/filesystem#directory) is only available on Android 9 or older and [`Directory.Documents`](https://capacitorjs.com/docs/apis/filesystem#directory) only allows to access the files/folders created by your app on Android on Android 11 and newer.

Czy to oznacza, że na Android 9 ten `ExternalStorage` jest, a nie ma `Documents`, czy może `Documents` jest również, a na nowszych wersjach nie ma `ExternalStorage`?

Cholera wie!

Poza tym `ExternalStorage` sugerowało mi od samego początku dodatkową kartę pamięci.

Spróbowałem jednak na moim symulatorze użyć `ExternalStorage` i... zadziałało!

No to świetnie! Kompiluję, puszczam do Gosi prośbę o instalację. Dość szybko sprawdziła (już po godzinie) i mówi, że **nie działa** 😢

Pewnie symulator Androida 9 powiedziałby mi o co chodzi, gdyby działał.

Tknęło mnie jeszcze jedno: może użyć jeszcze innego folderu, np. `External`? Skoro sama zmiana `directory` zadziałała na Android 10, to może inne wersje korzystają z innych folderów?

Z poszarpaną ze zmęczenia nadzieją wypuściłem późnym wieczorem kolejną wersję i wreszcie gdzieś koło godziny 22. Gosia odpisała:
> DZIAŁA
> 
> DZIAAAAŁAA

## Rozwiązanie i metoda testowania wersji

Okazało się, że `Directory.Documents` nie zawsze jest dostępne. Mało tego, dokumentacja nie jest za bardzo precyzyjna, jeśli chodzi o dostęp do pliku ani Capacitor nie daje API, które pomaga znaleźć odpowiedni `directory` do zapisu.

Przeszło mi przez myśl, żeby sprawdzić najpierw wersję Androida i do tej wersji dopasować odpowiedni folder, ale to rozwiązanie jest kruche. Mogłoby się okazać, że w każdej wersji jest inaczej. Musiałbym wtedy i tak przetestować na każdym urządzeniu, żeby mieć pewność, że zadziała.

Postanowiłem do tego podejść metodą *fallback*: próbować po kolei różnych metod, aż któraś zadziała.

```js
const getWritingDirectory = async () => {  
  await checkAndRequestPermissions();  
  
  if (await isWritable(Directory.Documents)) {  
    return Directory.Documents;  
  }  
  
  if (await isWritable(Directory.ExternalStorage)) {  
    return Directory.ExternalStorage;  
  }  
  
  if (await isWritable(Directory.External)) {  
    return Directory.External;  
  }  
  
  throw new Error("No permissions to write to any directory");  
};
```

Sprawdzam więc najpierw `Directory.Documents`, potem `Directory.ExternalStorage` i na końcu `Directory.External`.

I tutaj natrafiłem na kilka pułapek.

Funkcja `isWritable` wygląda tak:
```js
const isWritable = async (directory: Directory) => {  
  console.info("Checking directory", directory);  
  
  const canWrite = await canWriteTestFileTo(directory);  
  
  if (canWrite) {  
    console.info(`Directory ${directory} is available`);  
    await createRecordingsFolder(directory);  
  
    return true;  
  }  
  
  return false;  
};
```

W pierwotnej wersji próbowałem stworzyć folder, ale ten test mógł się zakończyć błędem, jeśli istniał już wcześniej. I niestety błąd był różny w zależności od wersji Androida i/lub platformy (web/android). Odkryłem dwa:
- `Current directory does already exist`
- `Directory exists`

Znowu ukazują się braki adaptera i ryzyko, że nie przetestuję wszystkich wersji.

Dlatego próbuję stworzyć plik testowy w folderze głównym:
```js
const canWriteTestFileTo = async (directory: Directory) => {
  try {
    const now = new Date().getTime();
    const testFilePath = `SpeechZap-test-file-${now}.txt`;

    await Filesystem.writeFile({
      path: testFilePath,
      data: "test",
      directory,
    });

    await Filesystem.deleteFile({
      path: testFilePath,
      directory,
    });

    return true;
  } catch (error) {
    return false;
  }
};
```

Zauważyłem, że czasem operacje tworzenia pliku testowego nachodzą jakoś dziwnie na siebie i wywołuje się dwukrotnie zapis, a potem dwukrotnie usuwanie, co kończy się błędem usuwania pliku.

Gdzieś ta metoda wywoływała się kilkukrotnie, co samo w sobie nie jest złe. Nie zapisuję nigdzie informacji o folderze do zapisu, więc przy każdej operacji odczytu czy zapisu te pliki testowe będą zapisywane i usuwane, żeby dać mi informację w którym folderze mogę zapisać. Póki co nie optymalizuję tego, bo nie widzę pogorszenia wydajności.

Sprawdziłem wszystkie *promisy* i nie pominąłem żadnej, więc nie wiem czemu tak to zadziałało. Jednak dodałem milisekundowy *timestamp* do nazwy pliku i to zniwelowało ten efekt. Apka działa, więc chyba spoko. Nieważna kolejność, ważne, że poprawnie rozpoznaje folder do zapisu.
## Podsumowanie

Różne wersje Androida oferują różne API. Boli mnie natomiast, że Capacitor, który jest w założeniu adapterem, nie jest do końca adapterem. Jeden folder ma trzy różne stałe, które umożliwiają do niego dostęp i w zależności od wersji muszę użyć jednej z nich.

Rozwiązanie jest takie, żeby nie próbować zgadywać, która wersja SDK Androida korzysta z której stałej, tylko wypróbować po kolei każdą opcję metodą `fallback`.

Jednak nie wystarczy sprawdzić, czy można przeczytać folder. Tworzenie folderu też nie jest dobrym testem, bo przy istniejącym folderze funkcja wyrzuci wyjątek.

Lepiej stworzyć plik testowy. Jeśli się wywali, to znaczy, że nie tędy droga i wtedy próbuję inny folder. I tak aż do trafienia.
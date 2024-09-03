---
created: 2024-08-21T11:11
updated: 2024-09-03T09:13
tags:
  - programowanie
  - self-hosted
  - caprover
  - docker
  - markdown
title: "Firecrawl: Jak postawić narzędzie do indeksowania stron internetowych"
description: Poznaj krok po kroku proces samodzielnego wdrożenia Firecrawl i repozytorium Docker na serwerze VPS z CapRover. Praktyczny przewodnik dla programistów i entuzjastów self-hostingu, którzy chcą automatyzować pobieranie danych z dynamicznych stron internetowych.
ogDescription: "Firecrawl: Kompletny przewodnik po wdrożeniu i hostowaniu narzędzia do pobierania danych na VPS. Dowiedz się, jak samodzielnie uruchomić Firecrawl i repozytorium Docker."
newsletterDescription: Interesuje Cię, jak uruchomić Firecrawl do pobierania danych z dynamicznych stron? Sprawdź mój przewodnik, w którym krok po kroku opisuję, jak to zrobić na VPS z CapRover.
publishedAt: 2024-09-03T09:13
---
Mam w planie zrobić narzędzie, które będzie wymagało pobierania danych ze stron internetowych. A w czasach, gdy wiele stron używa JavaScript i treść ładuje się dopiero w przeglądarce po wykonaniu całego kodu, nie jest takie trywialne zrobić samemu taki *crawler.*

O ile nie szukałem aktywnie wszystkich metod, o tyle wiem, że [[dify-self-hosted|Dify]] integruje się z [Firecrawl](https://www.firecrawl.dev/). Postanowiłem to sprawdzić, bo wyglądało jak coś nowoczesnego, co fajnie można zintegrować do moich celów.

Firecrawl dostarcza treść m.in. w formacie [[markdown-rzadzi|markdown]] i indeksuje strony w ramach domeny na podstawie szeregu współczynników, takich jak ilość linków, szablony linków (np. tylko zaczynające się od */blog*) oraz głębokość wyszukiwania.

Wersja *cloud* zaczyna się od \$19/mo, ale jest też wersja *self-hosted*.

## CapRover

Mam serwer VPS z CapRover, więc chciałem postawić sobie Firecrawl samodzielnie. Niestety, okazało się, że w przeciwieństwie do [[dify-self-hosted|Dify]], w `docker-compose.yml` obrazy budowane są z plików `Dockerfile`. 

Muszę więc:
- najpierw zbudować obrazy, 
- potem je wrzucić do jakiegoś repozytorium 
- i wtedy dopiero serwis po serwisie stawiać przez CapRover.

Ze wcześniejszych doświadczeń z różnymi repozytoriami wiem, że często są ograniczenia, np. limit ilości obrazów lub pobrań. Nie chciałem kolejnego konta zakładać, szukać i polegać na innych repozytoriach, więc pomyślałem, że skoro stawiam Firecrawl *self-hosted*, to postawię też repozytorium obrazów Dockerowych.

## Repozytorium obrazów Dockerowych

Okazało się, że jest taki obraz dockerowy i nazywa się [registry](https://hub.docker.com/_/registry). Teraz wystarczy odpalić na CapRover, udostępnić na porcie 5000 (*Container HTTP Port*) i można korzystać.

Trzeba się tylko do niego zalogować komendą:
```bash
docker login repo.example.com
```

### Budowanie obrazów

```bash
docker build --platform=linux/amd64 -t repo.example.com/firecrawl/api:latest apps/api
```

### Push obrazów

```bash
docker push repo.example.com/firecrawl/api:latest
```

Musisz oczywiście podmienić `repo.example.com` na adres, który nadał Ci CapRover po utworzeniu serwisu.

## API Dockerfile

Nie uruchamiał mi się Docker, kończył z kodem 0, bo brakowało polecenia startowego na końcu `apps/api/Dockerfile`:

```Dockerfile
CMD ["pnpm", "run", "start:production"]
```

## Worker Dockerfile

Dla workera inna komenda go startuje, więc trzeba:
1. stworzyć na boku plik `Dockerfile.worker` lub...
2. podmienić ostatnią linijkę po zbudowaniu obrazu dla serwisu `api`.

Ostatnia linijka wtedy powinna wyglądać tak:
```Dockerfile
CMD ["pnpm", "run", "workers"]
```

W przypadku pierwszego rozwiązania budujemy za pomocą komendy

```bash
docker build --platform=linux/amd64 -t repo.example.com/firecrawl/worker:latest -f apps/api/Dockerfile.worker apps/api
```

## Konfiguracja

Oprócz `REDIS_URL` koniecznie trzeba ustawić jeszcze `REDIS_RATE_LIMIT_URL`.

Redis postawiłem bez hasła, bo myślałem, że problem z połączeniem jest z tego powodu. Prawdopodobnie można też z hasłem, tylko trzeba zmienić `REDIS_URL` i ten drugi na wartość `redis://[haslo]@[host]:[port]`. Ale tutaj strzelam.

Gdy chciałem podłączyć się z Dify do endpointu, to musiałem ustawić jeszcze API Key, bo Dify tego wymaga [sic!]

No więc wstawiłem jeszcze zmienną `TEST_API_KEY`. Ale ponieważ to nie zadziałało, to jeszcze dodałem `USE_DB_AUTHENTICATION=false` i wtedy poszło.

W przypadku *workera* brakło w dokumentacji dwóch zmiennych:
- `MAX_CPU=2` (bo mam 2 vCPU)
- `MAX_RAM=4096` (u mnie jest 4GB RAMu, podałem w MB, ale nie wiem, czy dobrze, ale działa 🤷‍♂)

## Pierwsze użycie

Zadziałało fajnie, gdy indeksowałem swojego starego bloga o wyjeździe do Azji na 5 miesięcy. Utworzyłem pliki `.md` i zapisałem do Obsidian, gdzie przerobiłem już potem pousuwałem pousuwałem półautomatycznie wszystkie te niepotrzebne *sidebary*, *headery*, *footery* (polecam wtyczkę [GPT Copilot](https://github.com/logancyang/obsidian-copilot) i *custom prompty*).

## OpenAI

Teoretycznie w Firecrawl jest możliwość od razu wyciągnięcia ustrukturyzowanych danych z użyciem OpenAI. Fajna opcja, ale i tak zamierzam w moich narzędziach robić strukturyzowanie danych samodzielnie.

Jeśli jednak dowiesz się jak to uruchomić, to daj znać 🙂

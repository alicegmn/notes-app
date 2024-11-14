# notes-app

Primärfärger:

Ljusgrå: #F5F5F5 (bakgrund)
Mörkgrå: #333333 (text och ikoner)
Sekundärfärger:

Mild blå: #A8DADC (interaktiva element som knappar och länkar)
Grågrön: #457B9D (rubriker och viktiga markeringar)
Accentfärger:

Pastellgul: #F1FAEE (notifikationer eller highlights)
Sval lavendel: #E5E5FF (bakgrund för markerade anteckningar eller utvalda element)


Boiler room project

Boiler Room Vecka 46: Bygg en Anteckningsapp - JSON och Datahantering med LocalStorage

Tema
Den här veckan kommer ni att utveckla en Anteckningsapp som syftar till att ge er praktisk erfarenhet av att arbeta med JSON, datahantering och LocalStorage i JavaScript. Genom att bygga denna enklare applikation kommer ni att täcka alla veckans ämnen och lärandemål samtidigt som ni får möjlighet att repetera tidigare veckors ämnen.

Projektbeskrivning
Anteckningsapp
Beskrivning:
Anteckningsappen är en enkel webbapplikation där användare kan skapa, spara, visa och ta bort anteckningar. Applikationen kommer att använda JSON för att hantera data och LocalStorage för att spara användarens anteckningar mellan sessioner.
Denna vecka fokuserar vi på att:
Skapa en applikation där användaren kan skriva och spara anteckningar med titel och innehåll.
Visa en lista över sparade anteckningar.
Använda JSON för att hantera anteckningsdata.
Implementera funktionalitet för att spara och hämta data från LocalStorage.
Ge användaren möjlighet att ta bort enskilda anteckningar eller alla anteckningar.

Mål för Veckan
Förstå vad JSON är och dess syntax.
Lära sig att skapa och hantera JSON-data i applikationer.
Använda JavaScript för att manipulera och visa data från JSON.
Använda JSON.parse() och JSON.stringify() för att hantera data.
Lagra data i webbläsarens LocalStorage för att skapa persistens mellan sessioner.
Implementera funktioner för att interagera med data på webbsidan.

Krav för Projektet
Grundläggande Funktionalitet
1. Skapa Anteckningar
Lägg till ett formulär där användaren kan skriva en ny anteckning.
Formuläret ska innehålla:
Ett textfält för anteckningens titel.
Ett textfält för anteckningens innehåll.
En knapp för att spara anteckningen.
Validera att titel och innehåll inte är tomma.
2. Spara Anteckningar i LocalStorage
När användaren sparar en anteckning ska den lagras i LocalStorage.
Använd JSON.stringify() för att konvertera anteckningsobjektet till en JSON-sträng innan det lagras.
Varje anteckning kan ha egenskaper som:
id: unikt identifierande nummer.
title: titeln för anteckningen.
content: innehållet i anteckningen.
timestamp: datum och tid då anteckningen skapades.
3. Visa Sparade Anteckningar
Visa en lista över alla sparade anteckningar på sidan.
Använd JavaScript för att läsa in data från LocalStorage och dynamiskt skapa HTML-element för varje anteckning.
Visa anteckningens innehåll och eventuell annan relevant information (t.ex. datum).
4. Ta Bort Anteckningar
Implementera funktionalitet för att ta bort enskilda anteckningar.
Varje anteckning i listan ska ha en "Ta bort"-knapp.
När användaren klickar på "Ta bort" ska anteckningen tas bort från LocalStorage och listan uppdateras.
Lägg till en funktion eller knapp som låter användaren ta bort alla anteckningar.
5. Hantera Data i JavaScript
Använd JavaScript-objekt och arrayer för att hantera anteckningsdata.
Förstå skillnaden mellan JSON-data och JavaScript-objekt.
Validering och Felhantering
Validera att användaren inte kan spara tomma anteckningar.
Hantera fall där data i LocalStorage är korrupt eller ogiltig.
Visa användarvänliga meddelanden om något går fel eller om en begränsning nås.

Level Ups (Frivilliga Utmaningar)
Utöka Funktionaliteten
Sökfunktion:
Låt användaren söka bland sina anteckningar baserat på innehåll.
Redigera Anteckningar:
Implementera möjligheten att redigera befintliga anteckningar.
Sortering:
Tillåt användaren att sortera anteckningar efter datum eller innehåll.
Kategorier eller Taggar:
Låt användaren lägga till taggar till anteckningar och filtrera baserat på dem.
Design och Styling:
Använd CSS för att förbättra utseendet på applikationen.
Implementera responsiv design så att applikationen fungerar på olika enheter.
Animeringar och Effekter:
Lägg till animeringar när användaren sparar eller tar bort anteckningar.
Exportera och Importera Anteckningar:
Låt användaren exportera sina anteckningar till en JSON-fil.
Implementera möjlighet att importera anteckningar från en JSON-fil.

Anvisningar för Grupparbetet
Planering
Strukturera Koden
Bestäm hur ni vill organisera er JavaScript-kod.
Använd moduler eller separata filer vid behov.
Planera funktioner för att skapa, spara, visa och ta bort anteckningar.
Fördelning av Arbetsuppgifter
Dela upp arbetet baserat på gruppmedlemmarnas intressen och styrkor.
Någon kan fokusera på att skapa gränssnittet och formuläret för att skriva anteckningar.
En annan kan arbeta med att hantera data och implementera LocalStorage-funktionaliteten.
En tredje kan arbeta med att visa sparade anteckningar och implementera borttagningsfunktioner.
En fjärde kan fokusera på design och användarupplevelse.
Samarbete
Versionshantering
Använd Git och GitHub för att samarbeta effektivt.
Skapa ett nytt repository för projektet.
Använd brancher för att arbeta på olika funktioner parallellt.
Kommunikation
Ha regelbundna möten för att stämma av framsteg och lösa problem.
Dokumentation
Kommentera Koden
Använd kommentarer för att förklara funktioner och viktiga kodavsnitt.
Dokumentera användningen av JSON.parse(), JSON.stringify() och LocalStorage.
Användarinstruktioner
Skapa en README-fil som beskriver projektet, dess syfte och hur man använder det.
Beskriv hur användaren kan skapa, spara, visa och ta bort anteckningar.

Tips och Riktlinjer
Arbeta med JSON
Kom ihåg att JSON är ett textbaserat format för att representera strukturerad data.
Använd JSON.parse() för att konvertera en JSON-sträng till ett JavaScript-objekt.
Använd JSON.stringify() för att konvertera ett JavaScript-objekt till en JSON-sträng.
Använda LocalStorage
LocalStorage lagrar data som strängar; därför behöver ni konvertera era objekt till JSON-strängar.
Data i LocalStorage kvarstår mellan sidladdningar och stängningar av webbläsaren.
Använd metoderna localStorage.setItem(key, value) och localStorage.getItem(key) för att lagra och hämta data.
Användarvänlighet
Gör gränssnittet intuitivt och lätt att förstå.
Använd tydliga knappar och instruktioner.
Ge användaren feedback när de interagerar med sidan, t.ex. när en anteckning har sparats eller tagits bort.
Testa Koden
Testa att spara, visa och ta bort anteckningar flera gånger för att säkerställa att funktionaliteten är robust.
Använd webbläsarens utvecklarverktyg för att felsöka och övervaka LocalStorage.

Presentation
Datum och Tid
Presentationerna sker på måndag vecka 47 under lektionstid.
Innehåll
Demonstration av Applikationen
Visa hur användaren kan skapa och spara anteckningar.
Demonstrera hur sparade anteckningar visas och hur man kan ta bort dem.
Visa hur data kvarstår mellan sidladdningar tack vare LocalStorage.
Förklaring av Koden
Gå igenom hur ni har hanterat data med JSON och JavaScript.
Förklara hur ni använder JSON.parse(), JSON.stringify() och LocalStorage.
Utmaningar och Lärdomar
Diskutera eventuella problem ni stötte på och hur ni löste dem.
Dela med er av vad ni har lärt er om JSON, datahantering och persistens i webbapplikationer.
Presentationslängd
Varje grupp har max 15 minuter och minst 7 minuter för sin presentation.

Inlämning
Källkoden ska lämnas in före måndagens lektion vecka 47.
Ladda upp projektet till ert GitHub-repository och se till att alla filer är inkluderade.
Inkludera en README-fil med beskrivning och instruktioner för hur man använder projektet.

Veckans Ämnen och Lärandemål
Ämnen
Vad är JSON och dess syntax
JSON.parse() och JSON.stringify()
Hantera JSON-data
Lagra data i webbläsaren med LocalStorage
Arbeta med data i JavaScript
DOM-manipulation och händelsehantering
Lärandemål
Kan redogöra för vad JSON är och hur det används (Mål 1, kunskap = Godkänd).
Kan på egen hand och som del av ett team skapa och hantera JSON-data (Mål 1, färdighet = Godkänd/Väl Godkänd).
Kan utveckla en fungerande dynamisk komponent till en webbsida med JavaScript, HTML och CSS (Mål 3).

KOM IHÅG!
”Ledarrollen“ som Stina har tagit upp. Kontrollera var informationen finns och se till att fylla i vem som har den rollen i er grupp.

Sammanfattning
Genom att arbeta med Anteckningsappen kommer ni att få praktisk erfarenhet av att använda JSON och LocalStorage för datahantering i JavaScript. Ni kommer att skapa en användbar applikation där användare kan skapa, spara och hantera sina anteckningar. Projektet ger en bra grund för att förstå hur man kan lagra data lokalt i webbläsaren och hur man kan använda JSON för att strukturera och hantera data.

Lycka till med ert projekt!
Om ni har några frågor eller behöver hjälp, tveka inte att kontakta mig. Se till att samarbeta effektivt och ha roligt när ni utvecklar er Anteckningsapp!


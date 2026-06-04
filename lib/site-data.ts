export const site = {
  name: "Spurghi Reggio Emilia",
  domain: "spurghireggioemilia.it",
  url: "https://spurghireggioemilia.it",
  phone: "0522 177 0369",
  phoneHref: "+3905221770369",
  address: "Via Vincenzo Monti, 12 - 42122 Reggio Emilia RE",
  street: "Via Vincenzo Monti, 12",
  city: "Reggio Emilia",
  postalCode: "42122",
  region: "RE"
};

export type Service = {
  slug: string;
  menu: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "autospurgo",
    menu: "Autospurgo",
    title: "Autospurgo a Reggio Emilia",
    metaTitle: "Autospurgo a Reggio Emilia | Spurghi H24 per Fosse e Pozzetti",
    metaDescription:
      "Servizio di autospurgo a Reggio Emilia per fosse biologiche, pozzi neri, pozzetti e reti private. Interventi rapidi per case, condomini e aziende.",
    intro:
      "Quando un impianto non smaltisce piu' correttamente, l'autospurgo deve arrivare con il mezzo giusto, non con una soluzione generica.",
    paragraphs: [
      "Il servizio di autospurgo a Reggio Emilia e' pensato per abitazioni, condomini, attivita' commerciali e aziende che devono gestire liquami, fanghi, pozzetti pieni o vasche di raccolta. Ogni uscita parte da una valutazione pratica: accesso al punto di intervento, volume da aspirare, distanza dal mezzo e urgenza reale del problema.",
      "L'obiettivo non e' solo svuotare, ma riportare l'impianto a una condizione stabile. Per questo controlliamo i segnali che accompagnano il problema: cattivi odori, rallentamenti negli scarichi, acqua che risale o pozzetti che si riempiono troppo velocemente.",
      "Un intervento ordinato riduce disagi negli spazi comuni, nei cortili e nelle aree di lavoro. Questo e' particolarmente importante per amministratori condominiali, ristoranti, laboratori, officine e aziende dove il fermo operativo ha un costo immediato."
    ],
    faq: [
      { q: "Quando serve l'autospurgo?", a: "Serve quando fosse, pozzetti, vasche o reti private devono essere aspirati, svuotati o lavati." },
      { q: "Intervenite anche in condominio?", a: "Si, gestiamo parti comuni, cortili, autorimesse e reti condominiali." }
    ]
  },
  {
    slug: "spurgo-fosse-biologiche",
    menu: "Fosse biologiche",
    title: "Spurgo fosse biologiche a Reggio Emilia",
    metaTitle: "Spurgo Fosse Biologiche a Reggio Emilia | Svuotamento H24",
    metaDescription:
      "Spurgo fosse biologiche a Reggio Emilia per abitazioni, condomini e aziende. Svuotamento, lavaggio e manutenzione programmata.",
    intro:
      "Una fossa biologica non va aspettata fino all'emergenza: odori e rigurgiti spesso arrivano dopo settimane di segnali.",
    paragraphs: [
      "Lo spurgo delle fosse biologiche a Reggio Emilia richiede attenzione al volume, alla frequenza di utilizzo dell'impianto e all'accessibilita' del punto di aspirazione. Una fossa satura puo' generare odori persistenti, rallentamenti negli scarichi e, nei casi peggiori, fuoriuscite negli spazi esterni.",
      "Per case indipendenti e piccoli condomini la manutenzione programmata e' spesso la scelta piu' conveniente. Evita chiamate urgenti, riduce il rischio di disagi nei weekend e mantiene piu' prevedibile il comportamento dell'impianto.",
      "Il servizio comprende svuotamento e lavaggio secondo necessita'. A fine intervento vengono segnalati eventuali sintomi da monitorare, come riempimenti troppo rapidi o reflussi che potrebbero dipendere da una linea a valle non perfettamente libera."
    ],
    faq: [
      { q: "Ogni quanto va svuotata una fossa biologica?", a: "Dipende da volume e utilizzo; in molti casi conviene programmare un controllo periodico." },
      { q: "Si puo' intervenire in urgenza?", a: "Si, soprattutto in presenza di odori forti, rigurgiti o fuoriuscite." }
    ]
  },
  {
    slug: "disotturazione-tubi",
    menu: "Disotturazione tubi",
    title: "Disotturazione tubi a Reggio Emilia",
    metaTitle: "Disotturazione Tubi a Reggio Emilia | Scarichi Liberi H24",
    metaDescription:
      "Disotturazione tubi a Reggio Emilia per scarichi lenti, colonne condominiali, bagni, cucine, pozzetti e reti esterne.",
    intro:
      "Uno scarico lento non e' solo un fastidio: spesso e' il primo segnale di un blocco che sta crescendo.",
    paragraphs: [
      "La disotturazione dei tubi a Reggio Emilia riguarda bagni, cucine, lavanderie, colonne condominiali, linee esterne e pozzetti. Prima di intervenire e' utile capire se il problema riguarda un solo scarico o piu' punti dell'impianto, perche' questa differenza cambia completamente la diagnosi.",
      "Un blocco puo' dipendere da grassi, calcare, residui, oggetti caduti nello scarico, radici o depositi accumulati nel tempo. Liberare il tubo e' il primo passo, ma quando il problema torna spesso conviene approfondire con strumenti di verifica.",
      "Lavoriamo con attenzione agli ambienti interni e agli spazi comuni. In condomini e attivita' aperte al pubblico, un intervento pulito e coordinato e' importante quanto la risoluzione tecnica."
    ],
    faq: [
      { q: "La disotturazione risolve sempre?", a: "Spesso si, ma se il blocco torna e' utile verificare la causa." },
      { q: "Intervenite su cucine e bagni?", a: "Si, oltre a colonne, pozzetti e tubazioni esterne." }
    ]
  },
  {
    slug: "pronto-intervento-fognature",
    menu: "Pronto intervento",
    title: "Pronto intervento fognature a Reggio Emilia",
    metaTitle: "Pronto Intervento Fognature a Reggio Emilia | Emergenze H24",
    metaDescription:
      "Pronto intervento fognature a Reggio Emilia per rigurgiti, allagamenti, cattivi odori e scarichi bloccati in urgenza.",
    intro:
      "Quando acqua e odori entrano negli ambienti, il tempo diventa parte del problema.",
    paragraphs: [
      "Il pronto intervento per fognature a Reggio Emilia e' dedicato alle situazioni che non possono aspettare: acqua che risale, pozzetti che traboccano, odori intensi, bagni inutilizzabili o piu' scarichi bloccati nello stesso momento.",
      "La prima fase e' telefonica: chiediamo pochi dettagli per capire gravita', zona, accesso e tipo di immobile. Questo permette di organizzare l'uscita con un mezzo coerente e ridurre tempi morti al momento dell'arrivo.",
      "Il servizio e' utile per privati, condomini, ristoranti, negozi e aziende. In emergenza conta la rapidita', ma anche la capacita' di lavorare senza aumentare il disordine gia' creato dal problema."
    ],
    faq: [
      { q: "Quando devo chiamare subito?", a: "Quando l'acqua risale, il pozzetto trabocca o piu' scarichi sono bloccati insieme." },
      { q: "Il servizio e' disponibile di notte?", a: "Il servizio e' pensato per urgenze H24, in base a disponibilita' operativa." }
    ]
  },
  {
    slug: "pulizia-pozzetti",
    menu: "Pulizia pozzetti",
    title: "Pulizia pozzetti a Reggio Emilia",
    metaTitle: "Pulizia Pozzetti a Reggio Emilia | Caditoie e Reti Esterne",
    metaDescription:
      "Pulizia pozzetti a Reggio Emilia per cortili, autorimesse, condomini, caditoie e aree produttive. Interventi programmati e urgenti.",
    intro:
      "Un pozzetto pieno non e' un dettaglio: puo' rallentare l'intera rete esterna.",
    paragraphs: [
      "La pulizia dei pozzetti a Reggio Emilia e' indicata per cortili, rampe, autorimesse, condomini, aree produttive e spazi esterni soggetti a foglie, sabbia, terra e residui. Quando il pozzetto non lavora correttamente, l'acqua ristagna e puo' creare odori o allagamenti.",
      "Un intervento programmato e' particolarmente utile prima dei periodi di pioggia intensa o dopo lavori edili che possono aver portato materiali nelle caditoie.",
      "Oltre alla pulizia, valutiamo se il riempimento e' normale o se il problema deriva da una linea successiva parzialmente ostruita."
    ],
    faq: [
      { q: "Pulite anche caditoie e griglie?", a: "Si, il servizio copre pozzetti, caditoie, griglie e reti esterne private." },
      { q: "Quando conviene programmare la pulizia?", a: "Prima delle piogge intense o quando compaiono ristagni e odori." }
    ]
  },
  {
    slug: "videoispezione-tubazioni",
    menu: "Videoispezione",
    title: "Videoispezione tubazioni a Reggio Emilia",
    metaTitle: "Videoispezione Tubazioni a Reggio Emilia | Diagnosi Scarichi",
    metaDescription:
      "Videoispezione tubazioni a Reggio Emilia per individuare radici, rotture, depositi, pendenze errate e blocchi ricorrenti.",
    intro:
      "Quando il problema torna, guardare dentro la tubazione evita interventi a tentativi.",
    paragraphs: [
      "La videoispezione delle tubazioni a Reggio Emilia consente di osservare lo stato interno delle linee e individuare cause che dall'esterno non sono visibili. E' utile quando uno scarico si blocca spesso, quando ci sono odori persistenti o prima di lavori invasivi.",
      "Attraverso la verifica si possono rilevare radici, rotture, schiacciamenti, depositi, oggetti incastrati o pendenze non corrette. Queste informazioni aiutano a decidere se basta una pulizia o se serve un intervento diverso.",
      "Per amministratori e aziende, la videoispezione offre una base piu' chiara per pianificare manutenzioni e ridurre emergenze ripetute."
    ],
    faq: [
      { q: "Quando serve la videoispezione?", a: "Quando le ostruzioni tornano o serve capire lo stato reale della tubazione." },
      { q: "Evita lavori inutili?", a: "Spesso si, perche' aiuta a vedere la causa prima di intervenire pesantemente." }
    ]
  },
  {
    slug: "lavaggio-reti-fognarie",
    menu: "Lavaggio reti",
    title: "Lavaggio reti fognarie a Reggio Emilia",
    metaTitle: "Lavaggio Reti Fognarie a Reggio Emilia | Pulizia Condotte",
    metaDescription:
      "Lavaggio reti fognarie a Reggio Emilia per rimuovere sedimenti, incrostazioni e depositi da reti private, condominiali e aziendali.",
    intro:
      "Una rete lavata con regolarita' scarica meglio e crea meno emergenze.",
    paragraphs: [
      "Il lavaggio delle reti fognarie a Reggio Emilia e' indicato per condomini, aree produttive, cortili, parcheggi e impianti privati soggetti ad accumulo di residui. Sedimenti e incrostazioni riducono lentamente la sezione utile della tubazione.",
      "Quando il deflusso peggiora, possono comparire odori, ristagni e rigurgiti. Il lavaggio aiuta a ripristinare una condizione piu' stabile e a prevenire blocchi improvvisi.",
      "Il servizio puo' essere programmato come manutenzione periodica, soprattutto in contesti dove l'impianto lavora molto o dove si sono gia' verificati problemi ricorrenti."
    ],
    faq: [
      { q: "Il lavaggio e' solo per emergenze?", a: "No, e' molto utile anche come manutenzione preventiva." },
      { q: "Si fa su reti condominiali?", a: "Si, anche su cortili, autorimesse e linee comuni." }
    ]
  },
  {
    slug: "spurgo-pozzi-neri",
    menu: "Pozzi neri",
    title: "Spurgo pozzi neri a Reggio Emilia",
    metaTitle: "Spurgo Pozzi Neri a Reggio Emilia | Aspirazione e Pulizia",
    metaDescription:
      "Spurgo pozzi neri a Reggio Emilia per abitazioni, attivita' e immobili non collegati alla rete fognaria. Interventi rapidi e programmati.",
    intro:
      "Un pozzo nero va gestito prima che il riempimento crei odori o fuoriuscite.",
    paragraphs: [
      "Lo spurgo dei pozzi neri a Reggio Emilia richiede organizzazione, soprattutto quando l'accesso e' stretto o l'impianto serve piu' utenze. Valutiamo posizione, volume e urgenza per pianificare l'intervento in modo ordinato.",
      "Il servizio puo' essere richiesto per svuotamenti programmati o in presenza di segnali critici, come odori forti, scarichi lenti o livelli troppo alti nella vasca.",
      "Una gestione periodica riduce il rischio di emergenze e permette di mantenere piu' prevedibile il comportamento dell'impianto."
    ],
    faq: [
      { q: "Si puo' programmare lo svuotamento?", a: "Si, ed e' spesso la scelta migliore per evitare urgenze." },
      { q: "Intervenite anche su case isolate?", a: "Si, valutando accesso e distanza del punto di aspirazione." }
    ]
  },
  {
    slug: "spurghi-condominiali",
    menu: "Condomini",
    title: "Spurghi condominiali a Reggio Emilia",
    metaTitle: "Spurghi Condominiali a Reggio Emilia | Amministratori e Stabili",
    metaDescription:
      "Spurghi condominiali a Reggio Emilia per colonne, pozzetti, cortili, autorimesse e reti comuni. Servizio per amministratori.",
    intro:
      "In condominio il problema tecnico e' anche organizzativo: serve coordinamento.",
    paragraphs: [
      "Gli spurghi condominiali a Reggio Emilia riguardano colonne, pozzetti, reti comuni, cortili e autorimesse. Quando un blocco coinvolge piu' appartamenti, e' importante capire se la causa e' locale o condivisa.",
      "Lavoriamo con attenzione agli spazi comuni, agli accessi e alla comunicazione con amministratori o referenti dello stabile. Un intervento ordinato riduce disagio per i residenti e tempi di gestione.",
      "Oltre alle urgenze, i condomini beneficiano molto della manutenzione programmata, soprattutto quando ci sono reti datate o problemi ricorrenti."
    ],
    faq: [
      { q: "Gestite richieste da amministratori?", a: "Si, anche per manutenzioni periodiche e urgenze." },
      { q: "Intervenite su colonne condominiali?", a: "Si, insieme a pozzetti, cortili e reti comuni." }
    ]
  },
  {
    slug: "spurghi-ristoranti",
    menu: "Ristoranti",
    title: "Spurghi per ristoranti a Reggio Emilia",
    metaTitle: "Spurghi per Ristoranti a Reggio Emilia | Cucine e Degrassatori",
    metaDescription:
      "Spurghi per ristoranti a Reggio Emilia: scarichi cucina, pozzetti degrassatori, odori, intasamenti e manutenzione programmata.",
    intro:
      "In una cucina professionale, uno scarico bloccato puo' fermare il servizio.",
    paragraphs: [
      "Gli spurghi per ristoranti a Reggio Emilia sono pensati per cucine, bar, laboratori alimentari e locali dove grassi e residui sollecitano molto gli scarichi. Un piccolo rallentamento puo' diventare rapidamente un problema operativo.",
      "Interveniamo su scarichi cucina, pozzetti degrassatori, linee esterne e punti soggetti a odori. L'obiettivo e' ridurre fermo attivita', disagi per il personale e problemi davanti ai clienti.",
      "La manutenzione programmata e' spesso la scelta piu' intelligente per locali con lavoro intenso, perche' permette di pulire prima che il blocco diventi emergenza."
    ],
    faq: [
      { q: "Lavorate fuori orario?", a: "In base alla disponibilita', gli interventi possono essere organizzati per ridurre il fermo." },
      { q: "Pulite pozzetti degrassatori?", a: "Si, insieme a scarichi cucina e linee esterne." }
    ]
  },
  {
    slug: "spurghi-industriali",
    menu: "Aziende",
    title: "Spurghi industriali a Reggio Emilia",
    metaTitle: "Spurghi Industriali a Reggio Emilia | Aziende e Capannoni",
    metaDescription:
      "Spurghi industriali a Reggio Emilia per aziende, officine, capannoni, vasche, pozzetti e reti esterne. Interventi organizzati.",
    intro:
      "Negli ambienti produttivi contano tempi, accessi e continuita' operativa.",
    paragraphs: [
      "Gli spurghi industriali a Reggio Emilia richiedono un approccio diverso rispetto agli interventi domestici. Capannoni, officine e aree produttive hanno reti piu' estese, accessi tecnici e necessita' di coordinamento.",
      "Il servizio puo' riguardare pozzetti, vasche, reti esterne, aree di carico, cortili e manutenzioni periodiche. Prima dell'intervento valutiamo vincoli operativi e punti di accesso.",
      "Per le aziende e' fondamentale ridurre tempi di fermo e prevenire emergenze. Per questo la manutenzione programmata e' spesso piu' conveniente della gestione continua delle urgenze."
    ],
    faq: [
      { q: "Intervenite in aree produttive?", a: "Si, su capannoni, officine, cortili e reti esterne." },
      { q: "Si possono programmare manutenzioni?", a: "Si, soprattutto quando l'impianto e' molto sollecitato." }
    ]
  },
  {
    slug: "emergenze-scarichi",
    menu: "Emergenze scarichi",
    title: "Emergenze scarichi a Reggio Emilia",
    metaTitle: "Emergenze Scarichi a Reggio Emilia | Intervento Rapido H24",
    metaDescription:
      "Emergenze scarichi a Reggio Emilia per acqua che risale, bagni inutilizzabili, odori intensi e tubazioni bloccate.",
    intro:
      "Quando lo scarico si blocca all'improvviso, serve una risposta semplice e immediata.",
    paragraphs: [
      "Il servizio per emergenze scarichi a Reggio Emilia copre situazioni non rimandabili: acqua che risale, bagno inutilizzabile, scarico cucina bloccato, odori forti o piu' punti dell'impianto fermi nello stesso momento.",
      "La priorita' e' capire se si tratta di un blocco locale o di un problema piu' a valle. Questa distinzione aiuta a inviare strumenti e mezzo coerenti con la situazione.",
      "Un intervento rapido deve restare ordinato. Per questo prestiamo attenzione agli spazi interni, alle parti comuni e alle aree di passaggio, soprattutto in case, negozi e condomini."
    ],
    faq: [
      { q: "Quali sono i segnali di emergenza?", a: "Acqua che risale, odori forti, pozzetti pieni o piu' scarichi bloccati insieme." },
      { q: "Posso chiamare per un solo scarico?", a: "Si, soprattutto se il blocco e' totale o sta peggiorando." }
    ]
  }
];

export type City = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
};

const cityParagraphs = (name: string, nuance: string): string[] => [
  `Gli spurghi a ${name} richiedono un servizio capace di muoversi tra abitazioni, condomini, cortili, negozi e piccole aree produttive. Ogni contesto ha accessi diversi e problemi diversi: uno scarico domestico non si gestisce come una rete esterna condominiale o come un pozzetto di un'attivita'.`,
  `Interveniamo per autospurgo, disotturazione tubi, pulizia pozzetti, fosse biologiche e pronto intervento fognature. Prima dell'uscita raccogliamo informazioni semplici, come il tipo di immobile, il punto in cui compare il problema e la presenza di odori, rigurgiti o acqua che risale.`,
  nuance,
  `La manutenzione programmata e' consigliata quando gli scarichi lavorano molto o quando un problema si ripresenta piu' volte. Pulire e controllare prima dell'emergenza riduce disagi, costi imprevisti e tempi di fermo per famiglie, amministratori e imprese.`
];

export const cities: City[] = [
  {
    slug: "scandiano",
    name: "Scandiano",
    metaTitle: "Spurghi a Scandiano | Autospurgo e Fognature H24",
    metaDescription:
      "Spurghi a Scandiano per case, condomini e aziende: autospurgo, disotturazione tubi, fosse biologiche e pronto intervento fognature.",
    intro:
      "Scandiano e le sue frazioni hanno molte abitazioni, cortili e attivita' dove scarichi e pozzetti richiedono interventi rapidi e puliti.",
    paragraphs: cityParagraphs(
      "Scandiano",
      "Nelle zone residenziali e nei contesti con cortili privati, i problemi piu' frequenti riguardano pozzetti pieni, scarichi lenti e fosse biologiche da svuotare. Un intervento ben organizzato permette di lavorare senza creare disordine negli accessi e nelle aree comuni."
    )
  },
  {
    slug: "correggio",
    name: "Correggio",
    metaTitle: "Spurghi a Correggio | Disotturazione e Autospurgo",
    metaDescription:
      "Servizio di spurghi a Correggio per scarichi bloccati, pozzetti, fosse biologiche, autospurgo e pronto intervento fognature.",
    intro:
      "A Correggio interveniamo su abitazioni, condomini, negozi e aree produttive con servizi di spurgo, lavaggio e disotturazione.",
    paragraphs: cityParagraphs(
      "Correggio",
      "Per negozi, laboratori e abitazioni e' importante distinguere tra un blocco locale e un problema sulla linea principale. Questa valutazione rende l'intervento piu' rapido e riduce il rischio che la stessa ostruzione si ripresenti dopo pochi giorni."
    )
  },
  {
    slug: "carpi",
    name: "Carpi",
    metaTitle: "Spurghi a Carpi | Autospurgo e Scarichi Bloccati",
    metaDescription:
      "Spurghi a Carpi per emergenze scarichi, fognature, fosse biologiche e pozzetti. Servizi per privati, condomini e aziende.",
    intro:
      "Carpi e' un polo importante per case e imprese: gli interventi vengono organizzati valutando accessi, urgenza e tipo di impianto.",
    paragraphs: cityParagraphs(
      "Carpi",
      "In una citta' con molte attivita' e immobili di dimensioni diverse, l'organizzazione e' essenziale. Per aziende e condomini valutiamo punti di accesso, spazi di manovra e orari piu' adatti a ridurre il disagio."
    )
  },
  {
    slug: "rubiera",
    name: "Rubiera",
    metaTitle: "Spurghi a Rubiera | Pozzetti, Fosse e Fognature",
    metaDescription:
      "Spurghi a Rubiera per autospurgo, pulizia pozzetti, disotturazione tubi e pronto intervento fognature in urgenza.",
    intro:
      "A Rubiera supportiamo privati, condomini e attivita' con interventi su scarichi, pozzetti, fosse e reti esterne.",
    paragraphs: cityParagraphs(
      "Rubiera",
      "La presenza di aree residenziali e produttive rende utile un servizio flessibile. Dalle urgenze domestiche alle manutenzioni aziendali, ogni intervento viene impostato per essere rapido ma anche ordinato."
    )
  },
  {
    slug: "montecchio-emilia",
    name: "Montecchio Emilia",
    metaTitle: "Spurghi a Montecchio Emilia | Autospurgo H24",
    metaDescription:
      "Spurghi a Montecchio Emilia per fosse biologiche, scarichi ostruiti, pozzetti e pronto intervento fognature.",
    intro:
      "Montecchio Emilia richiede un servizio flessibile, utile sia per manutenzioni programmate sia per emergenze improvvise.",
    paragraphs: cityParagraphs(
      "Montecchio Emilia",
      "Le richieste piu' frequenti riguardano fosse biologiche, scarichi esterni e pozzetti che si riempiono troppo velocemente. Una valutazione corretta aiuta a capire se basta lo spurgo o se serve un controllo piu' approfondito."
    )
  },
  {
    slug: "cavriago",
    name: "Cavriago",
    metaTitle: "Spurghi a Cavriago | Disotturazione Tubi e Fosse",
    metaDescription:
      "Servizio di spurghi a Cavriago per scarichi lenti, fosse biologiche, pozzetti pieni e reti fognarie private.",
    intro:
      "A Cavriago interveniamo su impianti domestici e professionali, con particolare attenzione a scarichi lenti e pozzetti pieni.",
    paragraphs: cityParagraphs(
      "Cavriago",
      "Quando uno scarico rallenta o un pozzetto crea odori, intervenire presto evita che il problema diventi una vera emergenza. Questo vale soprattutto per immobili con reti datate o cortili soggetti a ristagni."
    )
  },
  {
    slug: "albinea",
    name: "Albinea",
    metaTitle: "Spurghi ad Albinea | Autospurgo e Pulizia Pozzetti",
    metaDescription:
      "Spurghi ad Albinea per ville, abitazioni, condomini, fosse biologiche, disotturazione tubi e pronto intervento fognature.",
    intro:
      "Ad Albinea lavoriamo su immobili residenziali, ville, cortili e reti private, mantenendo ordine e cura degli spazi.",
    paragraphs: cityParagraphs(
      "Albinea",
      "In contesti residenziali curati e spesso con spazi esterni, la pulizia dell'area di lavoro e' fondamentale. Organizziamo l'intervento prestando attenzione a pavimentazioni, giardini, accessi e punti di manovra."
    )
  },
  {
    slug: "bagnolo-in-piano",
    name: "Bagnolo in Piano",
    metaTitle: "Spurghi a Bagnolo in Piano | Fognature e Autospurgo",
    metaDescription:
      "Spurghi a Bagnolo in Piano per autospurgo, scarichi bloccati, pozzetti, fosse biologiche e reti fognarie private.",
    intro:
      "Bagnolo in Piano e le zone vicine possono contare su interventi per spurgo, autospurgo e fognature in emergenza.",
    paragraphs: cityParagraphs(
      "Bagnolo in Piano",
      "Il servizio copre sia richieste urgenti sia manutenzioni programmate. Per abitazioni, attivita' e piccoli condomini, una gestione regolare di pozzetti e fosse riduce la probabilita' di blocchi improvvisi."
    )
  }
];

export const reviews = [
  "Intervento ordinato, tecnico chiaro e tempi rispettati.",
  "Scarico cucina liberato senza sporcare gli ambienti.",
  "Ottimo coordinamento con l'amministratore del condominio.",
  "Hanno capito subito il problema del pozzetto esterno.",
  "Servizio preciso, comunicazione pulita, risultato stabile.",
  "Finalmente un intervento spiegato in modo comprensibile."
];

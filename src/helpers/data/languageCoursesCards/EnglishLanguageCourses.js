export function languageCoursesCardsData__English() {
  const timeframe = ["1 ora si", "30 de minute"];
  const greyedOut = "true";
  const lessons = "Prima lectie gratis";

  const cards = {

    // GROUP
    groupCustomJapanese: {
      id: "group custom japanese",
      imgSrc: "[ ]",
      title: "Japoneza Grup",
      lessons,
      details: [
        "adu-ti prietenii si formeaza un grup sau asteapta sa-ti gasim noi",
        "materiale personalizate pe nivelul grupului",
        "profesor cu nivel avansat de japoneza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$35",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/en-group-custom-japanese",
    },

    // INDIVIDUAL
    individualCustomJapanese: {
      id: "individual custom japanese",
      imgSrc: "[ ]",
      title: "Japoneza Individual",
      lessons,
      details: [
        "elevul alege o zi si o ora si incepem imediat",
        "materiale personalizate pe nivelul elevului",
        "profesor cu nivel avansat de japoneza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$50",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/en-individual-custom-japanese",
    },

    // GROUP INTENSIVE
    groupCustomJapaneseIntensive: {
      id: "group custom japanese (intensive)",
      imgSrc: "[ ]",
      title: "Japoneza Grup Intensiv",
      lessons,
      details: [
        "evolutie de 2 ori mai rapida cu sedinte de 2 ori pe saptamana",
        "adu-ti prietenii si formeaza un grup sau asteapta sa-ti gasim noi",
        "materiale personalizate pe nivelul grupului",
        "profesor cu nivel avansat de japoneza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$30",
      timeframe,
      total: "8",
      greyedOut: "false",
      arrows: "hide",
      link: "/en-group-custom-japanese-intensive",
    },
    
    // INDIVIDUAL INTENSIVE
    individualCustomJapaneseIntensive: {
      id: "individual custom japanese (intensive)",
      imgSrc: "[ ]",
      title: "Japoneza Individual Intensiv",
      lessons,
      details: [
        "evolutie de 2 ori mai rapida cu sedinte de 2 ori pe saptamana",
        "elevul alege o zi si o ora si incepem imediat",
        "materiale personalizate pe nivelul elevului",
        "profesor cu nivel avansat de japoneza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$45",
      timeframe,
      total: "8",
      greyedOut: "false",
      arrows: "show",
      link: "/en-individual-custom-japanese-intensive",
    },
    
    // ANIME
    animeJapanese: {
      id: "anime japanese",
      imgSrc: "アニメ",
      title: "japoneza anime",
      lessons,
      details: [
        "curs special axat pe japoneza vorbita in anime",
        "pentru inscrierea la acest curs extra se cere participarea la oricare alt curs oferit de noi.",
      ],
      price: "",
      timeframe,
      total: "6",
      greyedOut,
      arrows: "hide",
      link: "/en-anime",
    },
  };

  return cards;
}

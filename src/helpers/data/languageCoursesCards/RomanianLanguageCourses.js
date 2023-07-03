export function languageCoursesCardsData__Romanian() {
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
      price: [
        ["1 ora", "65 RON"],
        ["1 ora si 30 de minute", "85 RON"],
        ["2 ore", "115 RON"],
      ],
      total: "6",
      greyedOut: "false",
      link: "/ro-group-custom-japanese",
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
      price: [
        ["1 ora", "90 RON"],
        ["1 ora si 30 de minute", "130 RON"],
        ["2 ore", "170 RON"],
      ],
      total: "6",
      greyedOut: "false",
      link: "/ro-individual-custom-japanese",
    },

    // GROUP INTENSIVE
    // groupCustomJapaneseIntensive: {
    //   id: "group custom japanese (intensive)",
    //   imgSrc: "[ ]",
    //   title: "Japoneza Grup Intensiv",
    //   lessons,
    //   details: [
    //     "evolutie de 2 ori mai rapida cu sedinte de 2 ori pe saptamana",
    //     "adu-ti prietenii si formeaza un grup sau asteapta sa-ti gasim noi",
    //     "materiale personalizate pe nivelul grupului",
    //     "profesor cu nivel avansat de japoneza",
    //     "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
    //   ],
    //   price: "80 RON",
    //   timeframe,
    //   total: "8",
    //   greyedOut: "false",
    //   arrows: "hide",
    //   link: "/ro-group-custom-japanese-intensive",
    // },

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
      price: [
        ["1 ora", "85 RON"],
        ["1 ora si 30 de minute", "115 RON"],
        ["2 ore", "150 RON"],
      ],
      total: "8",
      greyedOut: "false",
      link: "/ro-individual-custom-japanese-intensive",
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
      price: [ ["", ""], ["", ""], ["", ""] ],
      total: "6",
      greyedOut,
      link: "/ro-anime",
    },
  };

  return cards;
}

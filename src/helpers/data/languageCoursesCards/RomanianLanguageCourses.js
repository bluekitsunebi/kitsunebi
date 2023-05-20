export function languageCoursesCardsData__Romanian() {
  const timeframe = ["1 hour and", "30 minutes"];
  const greyedOut = "true";
  const lessons = "First lesson free";

  const cards = {
    individualCustomJapanese: {
      id: "individual custom japanese",
      imgSrc: "[ ]",
      title: "Japoneza Individual",
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "130 RON",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/ro-individual-custom-japanese",
    },
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
      price: "90 RON",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/ro-individual-custom-japanese-intensive",
    },
    individualCustomJapaneseIntensive: {
      id: "individual custom japanese (intensive)",
      imgSrc: "[ ]",
      title: "individual custom japanese (intensive)",
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "110 RON",
      timeframe,
      total: "12",
      greyedOut: "false",
      arrows: "show",
      link: "/ro-individual-custom-japanese-intensive",
    },
    groupCustomJapaneseIntensive: {
      id: "group custom japanese (intensive)",
      imgSrc: "[ ]",
      title: "group custom japanese (intensive)",
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "80 RON",
      timeframe,
      total: "12",
      greyedOut: "false",
      arrows: "hide",
      link: "/ro-group-custom-japanese-intensive",
    },
    animeJapanese: {
      id: "anime japanese",
      imgSrc: "アニメ",
      title: "anime japanese",
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "",
      timeframe,
      total: "6",
      greyedOut,
      arrows: "hide",
      link: "/ro-anime",
    },
  };

  return cards;
}

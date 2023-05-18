export function languageCoursesCardsData__English() {
  const timeframe = ["1 hour and", "30 minutes"];
  const greyedOut = "true";
  const lessons = "First lesson free";

  const cards = {
    individualCustomJapanese: {
      id: "individual custom japanese",
      imgSrc: "[ ]",
      title: "individual custom japanese",
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "$50",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/en-individual-custom-japanese",
    },
    groupCustomJapanese: {
      id: "group custom japanese",
      imgSrc: "[ ]",
      title: "group custom japanese",
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "$35",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/en-group-custom-japanese",
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
      price: "$45",
      timeframe,
      total: "12",
      greyedOut: "false",
      arrows: "show",
      link: "/en-individual-custom-japanese-intensive",
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
      price: "$30",
      timeframe,
      total: "12",
      greyedOut: "false",
      arrows: "hide",
      link: "/en-group-custom-japanese-intensive",
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
      link: "/en-anime",
    },
  };

  return cards;
}

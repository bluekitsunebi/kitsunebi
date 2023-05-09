export function languageCoursesCardsData__Japanese() {
  const timeframe = ["1 hour and", "30 minutes"];
  const lessons = "First lesson free";

  const cards = {
    individualCustomEnglish: {
      id: "individual custom english",
      imgSrc: "[ ]",
      title: ["individual custom", "english"],
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "$45",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/jp-individual-custom-english",
    },
    groupCustomEnglish: {
      id: "group custom english",
      imgSrc: "[ ]",
      title: ["group custom", "english"],
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "$30",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/jp-group-custom-english",
    },
    individualCustomEnglishIntensive: {
      id: "individual custom english (intensive)",
      imgSrc: "[ ]",
      title: ["individual custom", "english (intensive)"],
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "$40",
      timeframe,
      total: "12",
      greyedOut: "false",
      arrows: "show",
      link: "/jp-individual-custom-english-intensive",
    },
    groupCustomEnglishIntensive: {
      id: "group custom english (intensive)",
      imgSrc: "[ ]",
      title: ["group custom", "english (intensive)"],
      lessons,
      details: [
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
        "---- ---- ---- --- --- --- - - -",
      ],
      price: "$25",
      timeframe,
      total: "12",
      greyedOut: "false",
      arrows: "hide",
      link: "/jp-group-custom-english-intensive",
    },
  };

  return cards;
}

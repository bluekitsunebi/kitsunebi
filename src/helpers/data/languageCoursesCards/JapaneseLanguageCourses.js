export function languageCoursesCardsData__Japanese() {
  const timeframe = ["1 hour and", "30 minutes"];
  const lessons = "First lesson free";

  const cards = {

    // GROUP
    groupCustomEnglish: {
      id: "group custom english",
      imgSrc: "[ ]",
      title: "Engleza Grup",
      lessons,
      details: [
        "adu-ti prietenii si formeaza un grup sau asteapta sa-ti gasim noi",
        "materiale personalizate pe nivelul grupului",
        "profesor cu nivel avansat de engleza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$30",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/jp-group-custom-english",
    },
    
    // INDIVIDUAL
    individualCustomEnglish: {
      id: "individual custom english",
      imgSrc: "[ ]",
      title: "Engleza Individual",
      lessons,
      details: [
        "elevul alege o zi si o ora si incepem imediat",
        "materiale personalizate pe nivelul elevului",
        "profesor cu nivel avansat de engleza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$45",
      timeframe,
      total: "6",
      greyedOut: "false",
      arrows: "hide",
      link: "/jp-individual-custom-english",
    },

    // GROUP INTENSIVE
    groupCustomEnglishIntensive: {
      id: "group custom english (intensive)",
      imgSrc: "[ ]",
      title: "Engleza Grup Intensiv",
      lessons,
      details: [
        "evolutie de 2 ori mai rapida cu sedinte de 2 ori pe saptamana",
        "adu-ti prietenii si formeaza un grup sau asteapta sa-ti gasim noi",
        "materiale personalizate pe nivelul grupului",
        "profesor cu nivel avansat de engleza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$25",
      timeframe,
      total: "8",
      greyedOut: "false",
      arrows: "hide",
      link: "/jp-group-custom-english-intensive",
    },
    
    // INDIVIDUAL INTENSIVE
    individualCustomEnglishIntensive: {
      id: "individual custom english (intensive)",
      imgSrc: "[ ]",
      title: "Engleza Individual Intensiv",
      lessons,
      details: [
        "evolutie de 2 ori mai rapida cu sedinte de 2 ori pe saptamana",
        "elevul alege o zi si o ora si incepem imediat",
        "materiale personalizate pe nivelul elevului",
        "profesor cu nivel avansat de engleza",
        "asistenta chiar si in afara orelor de curs, cu raspuns in decurs de 24 de ore",
      ],
      price: "$40",
      timeframe,
      total: "8",
      greyedOut: "false",
      arrows: "show",
      link: "/jp-individual-custom-english-intensive",
    },
  };
  
  return cards;
}

export function languageModulesCards() {
  const lessons = "12 lessons + 1 free"
  const timeframe = ["1 hour and", "30 minutes"]
  const price = "90 RON"

  const cards = {
    beginner: {
      id: "beginner",
      imgSrc: "初心者",
      title: "beginner",
      lessons,
      details: [
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
      ],
      price,
      timeframe,
      arrows: "hide",
    },
    internediate: {
      id: "internediate",
      imgSrc: "中級者",
      title: "intermediate",
      lessons,
      details: [
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
      ],
      price,
      timeframe,
      arrows: "hide",
    },
    advanced: {
      id: "advanced",
      imgSrc: "上級者",
      title: "advanced",
      lessons,
      details: [
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
      ],
      price,
      timeframe,
      arrows: "show",
    },
    "anime-focused": {
      id: "anime-focused",
      imgSrc: "アニメ",
      title: "anime-focused",
      lessons,
      details: [
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
      ],
      price,
      timeframe,
      arrows: "hide",

    },
    business: {
      id: "business",
      imgSrc: "営業",
      title: "business",
      lessons,
      details: [
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
        "---- ---- ---- - - - - - - -",
      ],
      price,
      timeframe,
      arrows: "hide",
    },
  };

  return cards;
}

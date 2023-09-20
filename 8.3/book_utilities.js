const book1 = {
  title: "Men In The Sun",
  author: "Ghassan Kanafani",
  publishingYear: 1963,
  about: "Palestinian refugees",
  where: "iraq and kuwait",
};
const book2 = {
  title: "Return to Haifa",
  author: "Ghassan Kanafani",
  publishingYear: 1969,
  about:
    "mainly depicts Israel occupation over the Palestinian lands during the 1948 war in Haifa when Britain was in control of the land.",
  where: "Haifa",
};
const bookUtils = {
  getFirstPublished: function (b1, b2) {
    return b1.publishingYear < b2.publishingYear ? b1 : b2;
  },
  setNewEdition: function (book, editionYear) {
    book.publishingYear = editionYear;
  },
  setLanguage: function (book, language) {
    book.language = language;
  },
  setTranslation: function (book, language, translator) {
    book.translation = { translator, language };
  },
  setPublisher: function (book, name, location) {
    book.publisher = { name, location };
  },
  isSamePublisher: function (b1, b2) {
    return b1.publisher.name === b2.publisher.name &&
      b1.publisher.location === b2.publisher.location
      ? true
      : false;
  },
};

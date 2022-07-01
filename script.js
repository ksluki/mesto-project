// открываю форму

const popup = document.querySelector(".popup__info");
const profiledit = document.querySelector(".profile__edit");

function popupopen() {
  popup.classList.add("popup_opened");
}

//закрываю форму

const popupclose = document.querySelector(".popup__closeinfo");

function popupclosed() {
  popup.classList.remove("popup_opened");
}

//поля формы

const infoname = document.querySelector(".profile__name");
const job = document.querySelector(".profile__subtitle");
const popupname = document.querySelector(".popup__name");
const popupjob = document.querySelector(".popup__text_job");
const formedit = document.querySelector(".popup__forminfo");
const popupedit = document.querySelector(".profile__edit");

popupjob.value = job.textContent;
popupname.value = infoname.textContent;

function formSubmitHandler(evt) {
  job.textContent = popupjob.value;
  infoname.textContent = popupname.value;
  evt.preventDefault();
  popupclosed();
}

formedit.addEventListener("submit", formSubmitHandler);
profiledit.addEventListener("click", popupopen);
popupclose.addEventListener("click", popupclosed);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
//создам карточку
const cardlist = document.querySelector(".cards");

function addCard(name, link) {
  const card = CreateCard(name, link);
  cardlist.prepend(card); // добавляем в контейнер
}

// добавление первых 6 карточек
function renderInitCards() {
  initialCards.forEach((item) => {
    addCard(item.name, item.link);
  });
}
renderInitCards();

// const popupImageClose = document.querySelector(".popupimage__close");
// const popupimage = document.querySelector(".popupimage");
// const popupImagepic = document.querySelector(".popupimage__image");

function CreateCard(name, link) {
  //шаблон - создаем
  const cardtemplate = document.querySelector("#cardtemplate").content;
  const wholelement = cardtemplate.querySelector(".card").cloneNode(true);

  //наполняю
  wholelement.querySelector(".card__image").src = link;
  wholelement.querySelector(".card__title").textContent = name;
  wholelement.querySelector(".card__image").alt = name;

  //лайк
  const likeButton = wholelement.querySelector(".card__like");

  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like-active");
  });

  //удалить карту
  const trashbutton = wholelement.querySelector(".card__trash");
  trashbutton.addEventListener("click", function (evt) {
    wholelement.remove();
  });

  const popupImageClose = document.querySelector(".popupimage__close");
  const popupimage = document.querySelector(".popupimage");
  const popupImagepic = document.querySelector(".popupimage__image");
  const popupCaption = document.querySelector(".popupimage__text");

  function popupopens() {
    popupimage.classList.add("popupimage_opened");
  }
  const picturecard = wholelement.querySelector(".card__image");
  picturecard.addEventListener("click", function (evt) {
    renderImg(name, link);
    popupopens();
  });

  function renderImg(name, link) {
    popupImagepic.src = link;
    popupImagepic.alt = name;
    popupCaption.textContent = name;
  }

  function popupcloses() {
    popupimage.classList.remove("popupimage_opened");
  }

  popupImageClose.addEventListener("click", popupcloses);

  return wholelement;
}

//добавление карточки

const addbutton = document.querySelector(".profile__button");
const popupaddcard = document.querySelector(".popup__addcard");
const popupclosecard = document.querySelector(".popup__closecard");
const formcard = popupaddcard.querySelector(".popup__formcard");
const placename = formcard.querySelector(".popup__placename");
const link = formcard.querySelector(".popup__link");

function popupopened() {
  popupaddcard.classList.add("popup_opened");
}
addbutton.addEventListener("click", popupopened);

function popupclosen() {
  popupaddcard.classList.remove("popup_opened");
}
popupclosecard.addEventListener("click", popupclosen);

function formSubmitHandlerCard(evt) {
  addCard(placename.value, link.value);
  evt.preventDefault();
  popupclosen();
}
formcard.addEventListener("submit", formSubmitHandlerCard);

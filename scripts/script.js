const popupImageClose = document.querySelector(".popup__imageclose");
const popupImage = document.querySelector(".popupimage");
const popupImagepic = document.querySelector(".popupimage__image");
const popupCaption = document.querySelector(".popupimage__text");
const profilePopup = document.querySelector(".popup__info");
const profilEdit = document.querySelector(".profile__edit");
const popupClose = document.querySelector(".popup__closeinfo");
const infoName = document.querySelector(".profile__name");
const job = document.querySelector(".profile__subtitle");
const popupName = document.querySelector(".popup__name");
const popupJob = document.querySelector(".popup__text_job");
const formEdit = document.querySelector(".popup__forminfo");
const addButton = document.querySelector(".profile__button");
const popupAddcard = document.querySelector(".popup__addcard");
const popupClosecard = document.querySelector(".popup__closecard");
const formCard = popupAddcard.querySelector(".popup__formcard");
const placeName = formCard.querySelector(".popup__placename");
const link = formCard.querySelector(".popup__link");
const cardList = document.querySelector(".cards");

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

// открываю форму
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//закрываю форму

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//поля формы

function handleProfileFormSubmit(evt) {
  job.textContent = popupJob.value;
  infoName.textContent = popupName.value;
  evt.preventDefault();
  closePopup();
}

formEdit.addEventListener("submit", handleProfileFormSubmit);
profilEdit.addEventListener("click", function () {
  openPopup(profilePopup);
});
popupClose.addEventListener("click", function () {
  closePopup(profilePopup);
});
//создам карточку

function addCard(name, link) {
  const card = createCard(name, link);
  cardList.prepend(card); // добавляем в контейнер
}

// добавление первых 6 карточек
function renderInitCards() {
  initialCards.forEach((item) => {
    addCard(item.name, item.link);
  });
}
renderInitCards();

function createCard(name, link) {
  //шаблон - создаем
  const cardtemplate = document.querySelector("#cardtemplate").content;
  const wholelement = cardtemplate.querySelector(".card").cloneNode(true);
  const picturecard = wholelement.querySelector(".card__image");

  //наполняю
  picturecard.src = link;
  wholelement.querySelector(".card__title").textContent = name;
  picturecard.alt = name;

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

  picturecard.addEventListener("click", function (evt) {
    renderImg(name, link);
    openPopup(popupImage);
  });

  function renderImg(name, link) {
    popupImagepic.src = link;
    popupImagepic.alt = name;
    popupCaption.textContent = name;
  }

  popupImageClose.addEventListener("click", function () {
    closePopup(popupImage);
  });
  return wholelement;
}

//добавление карточки

addButton.addEventListener("click", function () {
  openPopup(popupAddcard);
});

popupClosecard.addEventListener("click", function () {
  closePopup(popupAddcard);
});

function handleCardSubmit(evt) {
  addCard(placeName.value, link.value);
  evt.preventDefault();
  closePopup();
}
formCard.addEventListener("submit", handleCardSubmit);

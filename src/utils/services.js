export const passwordStrengthChecking = (
  value,
  setRedField,
  setGreenField,
  setYellowField
) => {
  const letterRegex = /[a-zA-Z]/;
  const digitRegex = /[0-9]/;
  const symbolRegex = /[!@#$%^&*(),.?":{}|<>£]/;

  const passwordCheck = document.querySelector(".password_check");
  const easyParagraph = passwordCheck.querySelector(".easy");
  const mediumParagraph = passwordCheck.querySelector(".medium");
  const strongParagraph = passwordCheck.querySelector(".strong");

  if (value === "") {
    easyParagraph.className = "easy gray";
    mediumParagraph.className = "medium gray";
    strongParagraph.className = "strong gray";
    setRedField(false);
    setGreenField(false);
    setYellowField(false);
  } else if (value.length < 8) {
    easyParagraph.className = "easy red";
    mediumParagraph.className = "medium red";
    strongParagraph.className = "strong red";
    setRedField(true);
    setGreenField(false);
    setYellowField(false);
  } else if (
    letterRegex.test(value) &&
    digitRegex.test(value) &&
    symbolRegex.test(value)
  ) {
    easyParagraph.className = "easy green";
    mediumParagraph.className = "medium green";
    strongParagraph.className = "strong green";
    setGreenField(true);
    setYellowField(false);
    setRedField(false);
  } else if (
    (letterRegex.test(value) && symbolRegex.test(value)) ||
    (letterRegex.test(value) && digitRegex.test(value)) ||
    (digitRegex.test(value) && symbolRegex.test(value))
  ) {
    easyParagraph.className = "easy yellow";
    mediumParagraph.className = "medium yellow";
    strongParagraph.className = "strong gray";
    setYellowField(true);
    setRedField(false);
    setGreenField(false);
  } else {
    easyParagraph.className = "easy red";
    mediumParagraph.className = "medium gray";
    strongParagraph.className = "strong gray";
    setRedField(true);
    setGreenField(false);
    setYellowField(false);
  }
};

import { useState } from "react";

export const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [redField, setRedField] = useState(false);
  const [yellowField, setYellowField] = useState(false);
  const [greenField, setGreenField] = useState(false);

  const handleCheckClick = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  const handleBlure = () => {
    setRedField(false);
    setGreenField(false);
    setYellowField(false);
  };

  const handlePaChange = (e) => {
    setPassword(e.target.value);

    const letterRegex = /[a-zA-Z]/;
    const digitRegex = /[0-9]/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>£]/;

    const passwordCheck = document.querySelector(".password_check");
    const easyParagraph = passwordCheck.querySelector(".easy");
    const mediumParagraph = passwordCheck.querySelector(".medium");
    const strongParagraph = passwordCheck.querySelector(".strong");

    passwordCheck.className = "password_check";

    if (e.target.value === "") {
      easyParagraph.className = "easy gray";
      mediumParagraph.className = "medium gray";
      strongParagraph.className = "strong gray";
      handleBlure();
    } else if (e.target.value.length < 8) {
      easyParagraph.className = "easy red";
      mediumParagraph.className = "medium red";
      strongParagraph.className = "strong red";
      setRedField(true);
      setGreenField(false);
      setYellowField(false);
    } else if (
      letterRegex.test(e.target.value) &&
      digitRegex.test(e.target.value) &&
      symbolRegex.test(e.target.value)
    ) {
      easyParagraph.className = "easy green";
      mediumParagraph.className = "medium green";
      strongParagraph.className = "strong green";
      setGreenField(true);
      setYellowField(false);
      setRedField(false);
    } else if (
      (letterRegex.test(e.target.value) && symbolRegex.test(e.target.value)) ||
      (letterRegex.test(e.target.value) && digitRegex.test(e.target.value)) ||
      (digitRegex.test(e.target.value) && symbolRegex.test(e.target.value))
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

  return (
    <form className="form">
      <span className="title">Password:</span>

      <label
        htmlFor="password"
        className={
          redField
            ? "label red-focus focused_red"
            : yellowField
            ? "label yellow-focus focused_yellow"
            : greenField
            ? "label green-focus focused_green"
            : "label"
        }
      >
        <input
          className={
            redField
              ? "input red-focus"
              : yellowField
              ? "input yellow-focus"
              : greenField
              ? "input green-focus"
              : "input"
          }
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePaChange}
          onBlur={handleBlure}
          placeholder="Enter password"
        />

        <button
          className={
            redField
              ? "check_btn red-focus"
              : yellowField
              ? "check_btn yellow-focus"
              : greenField
              ? "check_btn green-focus"
              : "check_btn"
          }
          onClick={handleCheckClick}
        >
          {!showPassword ? (
            <svg viewBox="0 0 60 54" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_2" data-name="Layer 2">
                <path d="m44 31h-2v-10a10 10 0 0 0 -20 0v10h-2a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3v-16a3 3 0 0 0 -3-3zm-20-10a8 8 0 0 1 16 0v10h-16zm21 29a1 1 0 0 1 -1 1h-24a1 1 0 0 1 -1-1v-16a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1z" />
                <path d="m32 37a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z" />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_2" data-name="Layer 2">
                <path d="m26 47a5 5 0 1 0 -5-5 5 5 0 0 0 5 5zm0-8a3 3 0 1 1 -3 3 3 3 0 0 1 3-3z" />
                <path d="m44 11a10 10 0 0 0 -10 10v10h-20a3 3 0 0 0 -3 3v16a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3v-16a3 3 0 0 0 -3-3h-2v-10a8 8 0 0 1 16 0v5h2v-5a10 10 0 0 0 -10-10zm-6 22a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-24a1 1 0 0 1 -1-1v-16a1 1 0 0 1 1-1z" />
              </g>
            </svg>
          )}
        </button>
      </label>

      <div className="password_check">
        <p className="easy gray">Your password is too simple</p>
        <p className="medium gray">Your password is medium</p>
        <p className="strong gray">You have a strong password</p>
      </div>
    </form>
  );
};
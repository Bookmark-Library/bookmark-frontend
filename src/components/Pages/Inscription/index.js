/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../../actions/book";
import {
  changeSettingsField,
  createUserInApi,
  togglePasswordVisibility,
  updateFormErrors,
  updatePasswordValidity,
} from "../../../actions/user";
import Field from "../../Field";
import "./styles.scss";

function Inscription() {
  const dispatch = useDispatch();

  const alias = useSelector((state) => state.user.alias);
  const email = useSelector((state) => state.user.emailInscription);
  const password = useSelector((state) => state.user.passwordInscription);
  const passwordVerify = useSelector((state) => state.user.passwordVerify);
  const validity = useSelector((state) => state.user.validity);
  const formErrors = useSelector((state) => state.user.formErrors);
  const showPassword = useSelector((state) => state.user.showPassword);
  /* ********** Verification of the form */
  const validateForm = () => {
    const errors = {};
    // Check required fields
    if (!alias) {
      errors.alias = "Veuillez saisir votre pseudo";
    }
    if (!email) {
      errors.email = "Veuillez saisir votre adresse e-mail";
    }
    if (!password) {
      errors.password = "Veuillez saisir votre mot de passe";
    }
    if (!passwordVerify) {
      errors.passwordVerify = "Veuillez valider votre mot de passe";
    }
    if (password != passwordVerify) {
      errors.password = "Le mot de passe saisis ne correspond pas ";
    }
    // Vérifier le format de l'adresse e-mail
    const emailRegex =
      /^[^\W][a-zA-Z0-9\-\._]+[^\W]@[^\W][a-zA-Z0-9\-\._]+[^\W]\.[a-zA-Z]{2,6}$/;
    if (email && !emailRegex.test(email)) {
      errors.email = "Veuillez saisir une adresse e-mail valide";
    }
    // Vérification du format du password
    const regExPassaword =
      // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-+_.]).{12,}$/;

    if (password && !regExPassaword.test(password)) {
      errors.password =
        "Le mot de passe doit comporter au moins 12 caractères, une majuscule, un chiffre et un caractère spécial (#?!@$%^&*-+)";
    }
    dispatch(updateFormErrors(errors));
  };

  // Validation logic
  const uppercaseRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  const numberRegex = /\d/;

  const newValidity = {
    uppercase: uppercaseRegex.test(password),
    minLength: password.length >= 11,
    specialChar: specialCharRegex.test(password),
    number: numberRegex.test(password),
  };

  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 col-12">
          <h2>Inscription</h2>
          <form
            className="row g-2 inscription"
            onSubmit={(e) => {
              e.preventDefault();
              validateForm();
              dispatch(createUserInApi());
            }}
          >
            <div className="col-md-6">
              <Field
                required
                identifier="alias"
                placeholder=""
                label="Alias *"
                value={alias}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
              {formErrors.alias && <p className="error">{formErrors.alias}</p>}
            </div>
            <div className="col-12">
              <Field
                identifier="emailInscription"
                placeholder=""
                label="Email *"
                value={email}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
            </div>
            <div className="col-12">
              <Field
                identifier="passwordInscription"
                placeholder=""
                label="Mot de passe *"
                type={showPassword ? "text" : "password"}
                value={password}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                  dispatch(updatePasswordValidity(newValidity));
                }}
              />
              <button type="button" onClick={handleTogglePassword}>
                {showPassword ? "🔒" : "👁️"}
              </button>

              <div>
                <p>{validity.uppercase ? "✔️" : "❌"} Au moins une majuscule</p>
                <p>{validity.minLength ? "✔️" : "❌"} Au moins 8 caractères</p>
                <p>
                  {validity.specialChar ? "✔️" : "❌"} Au moins un caractère
                  spécial
                </p>
                <p>{validity.number ? "✔️" : "❌"} Au moins un chiffre</p>
              </div>

              {formErrors.password && (
                <p className="error">{formErrors.password}</p>
              )}
            </div>
            <div className="col-12">
              <Field
                identifier="passwordVerify"
                placeholder=""
                label=" Valider votre mot de passe *"
                type={showPassword ? "text" : "password"}
                value={passwordVerify}
                changeField={(identifier, newValue) => {
                  dispatch(changeInput(identifier, newValue));
                }}
              />

              {formErrors.password && (
                <p className="error">{formErrors.password}</p>
              )}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-warning">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inscription;

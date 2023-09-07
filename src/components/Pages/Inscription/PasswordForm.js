import React from "react";
import { connect } from "react-redux";
import { updatePassword, updatePasswordValidity } from "./actions";

const PasswordForm = ({
  password,
  validity,
  updatePassword,
  updatePasswordValidity,
}) => {
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    updatePassword(newPassword);

    // Validation logic
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[#?!@$%^&*-+_.]/;
    const numberRegex = /\d/;

    const newValidity = {
      uppercase: uppercaseRegex.test(newPassword),
      minLength: newPassword.length >= 12,
      specialChar: specialCharRegex.test(newPassword),
      number: numberRegex.test(newPassword),
    };

    updatePasswordValidity(newValidity);
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Entrez un mot de passe"
        value={password}
        onChange={handlePasswordChange}
      />
      <div>
        <p>{validity.uppercase ? "✔️" : "❌"} Au moins une majuscule</p>
        <p>{validity.minLength ? "✔️" : "❌"} Au moins 12 caractères</p>
        <p>
          {validity.specialChar ? "✔️" : "❌"} Au moins un caractère spécial
        </p>
        <p>{validity.number ? "✔️" : "❌"} Au moins un chiffre</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  password: state.password.password,
  validity: state.password.validity,
});

const mapDispatchToProps = {
  updatePassword,
  updatePasswordValidity,
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);

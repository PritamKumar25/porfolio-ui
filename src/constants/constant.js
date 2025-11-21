export const LOGIN_FORM_VALIDATION = {
  email: {
    pattern: {
      value: /[a-z]/g,
      message: "Incorrect email.",
    },
    required: {
      value: true,
      message: "Email is required.",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password is required.",
    },
  },
};

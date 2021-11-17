const validator = {
  email: {
    rules: [
      {
        test: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
        message: "Зөв имэйл хаяг оруулна уу",
      },
    ],
    errors: [],
    valid: false,
    state: "",
  },
  password: {
    rules: [
      {
        test: (value) => {
          return value.length >= 6;
        },
        message: "Нууц үгийн урт 6-н тэмдэгтээс их байх ёстой",
      },
      {
        test: /^[a-z0-9A-Z_]+$/,
        message: "Үсэг тоо хосолсон нууц үг оруулна уу!",
      },
    ],
    errors: [],
    valid: false,
    state: "",
  },
  firstname: {
    rules: [
      {
        test: /^[a-zA-Zа-яА-Я_]+$/i,
        message: "Зөвхөн үсэг оруулна уу!",
      },
    ],
    errors: [],
    valid: false,
    state: "",
  },
  lastname: {
    rules: [
      {
        test: /^[a-zA-Zа-яА-Я_]+$/i,
        message: "Зөвхөн үсэг оруулна уу!",
      },
    ],
    errors: [],
    valid: false,
    state: "",
  },
};

export default validator;
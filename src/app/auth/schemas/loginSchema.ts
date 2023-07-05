import * as yup from "yup";

export const makeLoginSchema = () => {
  return yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .noUnknown()
    .strict();
};

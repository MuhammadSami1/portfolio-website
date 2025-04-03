import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup.string().required("Email is required"),

  subject: yup.string().required("Subject is required"),

  message: yup.string().required("Message is required"),
});

import { Box, Button, TextField, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import { useEffect, useState } from "react";
import useLocale from "../../../hooks/useLocale";

type FormElement = {
  value: string;
  isValid: boolean;
  message: string;
};

const ContactForm = () => {
  const { translate } = useLocale();
  const [name, setName] = useState<FormElement>({
    value: "",
    isValid: false,
    message: "",
  });
  const [email, setEmail] = useState<FormElement>({
    value: "",
    isValid: false,
    message: "",
  });
  const [phone, setPhone] = useState<FormElement>({
    value: "",
    isValid: false,
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const onSubmit = () => {
    console.log(name, email, phone);
  };

  useEffect(() => {
    const isValid = name.isValid && email.isValid && phone.isValid;
    setIsFormValid(isValid);
  }, [name, email, phone]);

  const onNameChange = (e: any) => {
    const value = e.target.value;
    let isValid = true;
    let message = "";
    if (!value) {
      isValid = false;
      message = translate("NAME_VALIDATION_ERROR");
    }

    setName({
      value,
      isValid,
      message,
    });
  };

  const onEmailChange = (e: any) => {
    const value = e.target.value;
    let isValid = true;
    let message = "";
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value || !regEx.test(String(value).toLowerCase())) {
      isValid = false;
      message = translate("EMAIL_VALIDATION_ERROR");
    }

    setEmail({
      value,
      isValid,
      message,
    });
  };

  const onPhoneChange = (e: any) => {
    const value = e.target.value;
    let isValid = true;
    let message = "";
    const regEx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (!value || !regEx.test(value)) {
      isValid = false;
      message = translate("PHONE_VALIDATION_ERROR");
    }

    setPhone({
      value,
      isValid,
      message,
    });
  };

  return (
    <CommonBox
      boxStyle={{
        "@media(min-width: 900px)": {
          padding: "20px 100px",
        },
        backgroundColor: "#F1FBFF",
        borderRadius: "5px",
        border: "2px dashed black",
      }}
    >
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "100%", display: "flex" },
        }}
      >
        <Typography variant={"h4"}>
          {translate("CONTACT_FORM_HEADER")}
        </Typography>
        <TextField
          id="zb-name"
          label={translate("NAME")}
          variant="standard"
          color={"warning"}
          value={name.value}
          required
          onChange={onNameChange}
          error={!name.isValid && !!name.message}
          helperText={name.message}
        />
        <TextField
          id="zb-phone"
          label={translate("EMAIL")}
          variant="standard"
          color={"warning"}
          value={email.value}
          required
          onChange={onEmailChange}
          error={!email.isValid && !!email.message}
          helperText={email.message}
        />
        <TextField
          id="zb-email"
          label={translate("PHONE")}
          variant="standard"
          color={"warning"}
          value={phone.value}
          required
          onChange={onPhoneChange}
          error={!phone.isValid && !!phone.message}
          helperText={phone.message}
        />
        <Box>
          <Button
            variant="contained"
            sx={{ margin: "20px 20px 0 0" }}
            disabled={!isFormValid}
            onClick={onSubmit}
          >
            {translate("SUBMIT")}
          </Button>
          <Button
            variant="outlined"
            sx={{ margin: "20px 20px 0 0" }}
            onClick={() => {
              const emptyElement: FormElement = {
                value: "",
                isValid: false,
                message: "",
              };
              setName(emptyElement);
              setEmail(emptyElement);
              setPhone(emptyElement);
            }}
          >
            {translate("RESET")}
          </Button>
        </Box>
      </Box>
    </CommonBox>
  );
};

export default ContactForm;

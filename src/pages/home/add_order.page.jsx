import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";
import Icon from "@material-ui/core/Icon";

const currencies = [
  {
    value: "TRY",
    label: "TRY"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "table",
    flexWrap: "wrap"
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "25ch"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  },
  Button: {
    marginRight: theme.spacing(1)
  }
}));

const handleButtonClick = (ev) => {
  ev.preventDefault();
};

export default function LayoutTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("TRY");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [inputFields, setInputFields] = useState([
    {
      productLink: "",
      numberOfProduct: "",
      productSize: "",
      currency: "",
      productPrice: "",
      comments: ""
    }
  ]);
  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };
  const handleAddFields = () => {
    setInputFields([...inputFields, {
      productLink: "",
      numberOfProduct: "",
      productSize: "",
      currency: "",
      productPrice: "",
      comments: ""
    }])
  }
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }
  return (
    <div className={classes.root}>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <div>
            <TextField
              value={inputField.productLink}
              style={{ margin: 8 }}
              placeholder="Məhsulun linki"
              helperText="Full width!"
              fullWidth
              margin="normal"
              onChange={event => handleChangeInput(index, event)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <div>
              <TextField
                value={inputField.numberOfProduct}
                onChange={event => handleChangeInput(index, event)}
                label="Sayı"
                className={classes.textField}
                helperText="Some important text"
                style={{ width: 350 }}
              />
              <TextField
                value={inputField.productSize}
                onChange={event => handleChangeInput(index, event)}
                label="Ölçü"
                TextField
                id="margin"
                className={classes.textField}
                helperText="Some important text"
                style={{ width: 350 }}
              />
            </div>
          </div>
          <div>
            <TextField
              value={inputField.currency}
              onChange={event => handleChangeInput(index, event)}
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
              style={{ width: 350, marginLeft: 8 }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              value={inputField.productPrice}
              onChange={event => handleChangeInput(index, event)}
              label="Məhsulun dəyəri"
              TextField
              id="margin"
              className={classes.textField}
              helperText="Some important text"
              style={{ width: 360 }}
            />
          </div>

          <TextField
            value={inputField.comments}
            onChange={event => handleChangeInput(index, event)}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Şərhləriniz"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button

            variant="contained"
            color="secondary"
            onClick={() => handleRemoveFields(index)}
          >
            <RemoveIcon />
          </Button>
        </div>
      ))}

      <Button
        variant="contained"
        fullWidth
        color="primary"
        className={classNames(classes.margin, classes.cssRoot)}
        onClick={handleAddFields}
      >
        + Yeni SIFARIS
      </Button>
    </div>
  );
}

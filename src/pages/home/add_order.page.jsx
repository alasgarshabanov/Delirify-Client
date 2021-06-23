import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import classNames from "classnames";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import isURL from "validator/lib/isURL"

const formInitialState = {
  productLink:
  {
    value: '',
    isValid: false,
    message: '',
    name: 'productLink',
  },
  numberOfProduct:
  {
    value: '',
    isValid: false,
    message: '',
    name: 'numberOfProduct',

  },
  productSize:
  {
    value: '',
    isValid: false,
    message: '',
    name: 'productSize',

  },
  priceCurrency:
  {
    value: '',
    isValid: false,
    message: '',
    name: 'priceCurrency'

  },
  productPrice:
  {
    value: '',
    isValid: false,
    message: '',
    name: 'productPrice',
  },
  comments: {
    value: '',
    isValid: false,
    message: '',
    name: 'productComments'
  },
};


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
  table: {
    minWidth: 650,
  },
}));


export default function LayoutTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("TRY");
  const [formState, setFormState] = useState([formInitialState]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };



  // const { productLink, numberOfProduct, productSize, priceCurrency, productPrice, comments } = formState;

  const handleChangeInput = (ev, index) => {
    //const values = [...inputFields];
    const { name, value, } = ev.target;
    console.log('input >> ', name, value);
    //values[index][event.target.name] = event.target.value;
    //setInputFields(values);
    console.log("formstate : ", formState);

    console.log(" >> ", name === `productLink[${[index]}]`, "name->>",name, `productLink[${[index]}]`);
    if (name === `productLink[${[index]}]`) {
      if (!isURL(value)) {
        const state = [...formState];
        state[index] = {
          ...formState[index],
          productLink: {
            name: 'productLink',
            isValid: false,
            message: "Your link is incorrect!!!, It must be asasasa",
            value: value,
          }
        }
        console.log("state : ", state);
        setFormState(state);
        return;
      }
    }

    const clearName = name.replace(/ *\[[^)]*\] */g,"");
    const state = [...formState];
    state[index] = {
      ...formState[index],
      [clearName]: {
        name: formState[index][clearName].name,
        isValid: true,
        message: "",
        value: value,
      }
    }
    
    setFormState(state);
    console.log("formstate : ", formState);
  };

  const handleAddFields = () => {
    setFormState([...formState, formInitialState]);
  }
  
  const handleRemoveFields = (ev, index) => {
    const values = [...formState];
    values.splice(index, 1);
    setFormState(values);

  }

  /*   const handleSubmitForm = (e) => {
  
    } */

  function createData(name, price) {
    return { name, price };
  }

  const rows = [
    createData("Məhsulun sayı", 1),
    createData("Mənbə qiyməti", 545.0),
    createData("Pul köçürməsi və konvertasiya itkisi ", 27.25),
    createData("Toplam", 572.25)
  ];

  return (
    <div className={classes.root}>
      {formState.map((inputField, index) => {
        console.log('index', index);
        return (<div key={index}>
          <div>
            <TextField
              value={inputField.productLink.value}
              style={{ margin: 8 }}
              placeholder="Məhsulun linki"
              helperText="Full width!"
              isValid={inputField.productLink.isValid}
              isInvalid={!inputField.productLink.isValid && inputField.productLink.message.length > 0} //true
              fullWidth
              name={`${inputField.productLink.name}[${index}]`}
              margin="normal"
              onChange={ev => handleChangeInput(ev, index)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <div>
              <TextField
                value={inputField.numberOfProduct.value}
                onChange={ev => handleChangeInput(ev, index)}
                label="Sayı"
                className={classes.textField}
                name={`${inputField.numberOfProduct.name}[${index}]`}
                helperText="Some important text"
                style={{ width: 350 }}
              />
              <TextField
                value={inputField.productSize.value}
                onChange={ev => handleChangeInput(ev, index)}
                name={`${inputField.productSize.name}[${index}]`}
                label="Ölçü"

                id="margin"
                helperText="Some important text"
                style={{ width: 350 }}
              />
            </div>
          </div>
          <div>
            <TextField
              onChange={ev => handleChangeInput(ev, index)}
              id="standard-select-currency"
              name={`${inputField.priceCurrency.name}[${index}]`}
              select
              label="Select"
              value={inputField.priceCurrency.value}
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
              value={inputField.productPrice.value}
              onChange={ev => handleChangeInput(ev, index)}
              name={`${inputField.productPrice.name}[${index}]`}
              label="Məhsulun dəyəri"
              id="margin"
              onChange={handleChange}
              helperText="Some important text"
              style={{ width: 360 }}
            />
          </div>

          <TextField
            value={inputField.comments.value}
            onChange={ev => handleChangeInput(ev, index)}
            name={`${inputField.comments.name}[${index}]`}
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
            onClick={ev => handleRemoveFields(ev, index)}
          >
            <RemoveIcon />
          </Button>
        </div>
        )
      })}

      <Button
        variant="contained"
        fullWidth
        color="primary"
        className={classNames(classes.margin, classes.cssRoot)}
        onClick={handleAddFields}
      >
        + Yeni SIFARIS
      </Button>


      <div>    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price} TRY</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></div>

    </div>

  );
}
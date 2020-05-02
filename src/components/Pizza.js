import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

export const Pizza = () => {

    const initialFormState = {
        name: "",
        size: "",
        sauce: "",
        toppings: "",
        special: ""
    }

    const [post, setPost] = useState([]);
    const [formState, setFormState] = useState(initialFormState);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errors, setErrors] = useState(initialFormState);

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        size: yup.string(),
        special: yup.string()
      });
    
      const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({ ...errors, [e.target.name]: "" });
          })
          .catch(err => {
            console.log("error!", err);
            setErrors({ ...errors, [e.target.name]: err.errors[0] });
          });
      };
    
      console.log("error state", errors);
      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          console.log("valid?", valid);
          setIsButtonDisabled(!valid);
        });
      }, [formState]);
    
      const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(response => {
            setPost(response.data);
            setFormState({
                name: "",
                size: "",
                sauce: "",
                toppings: "",
                special: "",
            });
          })
          .catch(err => console.log(err.response));
      };
    
      // onChange function
      const inputChange = e => {
        console.log("input changed!", e.target.value);
        e.persist();
        const newFormData = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
      };

    return(
        <form onSubmit={formSubmit}>
            <h4>Build Your Own Pizza</h4>
            <img src={require('./pizza-chef.jpg')} />
            <label htmlFor="name">
                Name:
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={inputChange}
                    value={formState.name}
                    data-cy="name"
                />
                {errors.name.length > 0 ? <p className="errors">{errors.name}</p> : null}
            </label>
            <label htmlFor="size">
                Size:
                <select id="size" name="size" onChange={inputChange}>
                    <option value="">--Please Choose Your Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="family">Family</option>
                </select>
            </label>
            <label htmlFor="sauce">
                Choice of Sauce:
                <input type="radio" id="original" name="sauce" value="original" />
                    Original Red
                <input type="radio" id="garlic" name="sauce" value="garlic" />
                    Garlic Ranch
                <input type="radio" id="bbq" name="sauce" value="bbq" />
                    BBQ Sauce
                <input type="radio" id="spinach" name="sauce" value="spinach" />
                    Spinach Alfredo
            </label>
            <label htmlFor="toppings" id="toppings">
                Add Toppings
                <input
                    type="checkbox"
                    name="pepperoni"
                />
                Pepperoni
                <input
                    type="checkbox"
                    name="sausage"
                />
                Sausage
                <input
                    type="checkbox"
                    name="olives"
                />
                Olives
                <input
                    type="checkbox"
                    name="pineapple"
                />
                Pineapple
                <input
                    type="checkbox"
                    name="onions"
                />
                Onions
                <input
                    type="checkbox"
                    name="peppers"
                />
                Peppers
            </label>
            <label htmlFor="special">
                Special Requests?
                <textarea
                    name="special"
                    onChange={inputChange}
                    value={formState.special}
                />
                {errors.special.length > 0 ? <p className="errors">{errors.special}</p> : null}
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button disabled={isButtonDisabled} type="submit" id="submit">
                Add to Order
            </button>
        </form>
    )
}


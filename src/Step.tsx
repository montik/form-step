import React, { useEffect, useState } from 'react';
import formStructure, { FormField } from './data/form-data';

// @ts-ignore
import useInputValues from "form_registration/useInputValues";

const Input: React.FC<FormField> = ({ name, type, attributes, value: initialValue}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <label style={{ display: 'block', marginBottom: '.5rem' }} key={name}>
      {name}
      <input type={type} {...attributes} />
    </label>
  );
};

const Step: React.FC<{ index: number; }> = ({ index }) => {
  const validationStep = formStructure.validationSteps[index];
  //@ts-ignore
  const bears = useInputValues((state) => state.bears);
  //@ts-ignore
  const increasePopulation = useInputValues((state) => state.increasePopulation);
  
  // const { setInputValues, inputValues } = useInputValues();

  // useEffect(() => {
  //   console.log('remote inputValues', inputValues);
  // }, [inputValues]);
  
  // useEffect(() => {
  //   setInputValues({ 0: { Vorname: 'gio' }});
  // }, []);

  return (
    <fieldset>
        BEARS GUEST: {bears}
        <h3>{validationStep.title}</h3>
        {validationStep.fields.map((field) => (
            <Input key={field.name} {...field} />
        ))
        }
    </fieldset>
  );
}

export default Step;
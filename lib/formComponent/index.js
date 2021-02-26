export { default as DateTyper } from './dateTime';
export { default as CheckBoxes } from './checkbox';
export { SingleImageSelector, MultipleImageSelector } from './imagePicker';
export { default as Otp } from './otp';
export { InputText } from './text';
export { default as AutoComplete } from './autoComplete';
const something = {
    name: 'Célio',
    lastName: 'Garcia',
};
const options = { ...something };
const { email, phone, name, lastName } = options;

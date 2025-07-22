import { LightningElement } from 'lwc';

export default class SampleName extends LightningElement {
    firstname = "";
    lastname = "";
    fullname = "";

    // Method to handle changes in the name fields
    nameChangeHandler(event) {
        let name = event.target.name;  // Capture 'name' from the event target
        let value = event.target.value; // Capture 'value' from the event target

        // Update firstname or lastname based on the input field's name
        if (name === "fname") {
            this.firstname = value;
        } else if (name === "lname") {
            this.lastname = value;
        }
    }

    // Method to concatenate and create the full name
    clickHandler() {
        this.fullname = `${this.firstname} ${this.lastname}`; // Concatenate firstname and lastname
    }
}

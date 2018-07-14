namespace contactFormInfo {

    let frmContact = document.querySelector('#frmContact') as HTMLFormElement;
    let txtFirstName = document.querySelector('#txtFirstName') as HTMLInputElement;
    let txtLastName = document.querySelector('#txtLastName') as HTMLInputElement;
    let txtStreetAddress = document.querySelector('#txtStreetAddress') as HTMLInputElement;
    let txtCity = document.querySelector('#txtCity') as HTMLInputElement;
    let txtState = document.querySelector('#txtState') as HTMLInputElement;
    let txtZipCode = document.querySelector('#txtZipCode') as HTMLInputElement;

    frmContact.onsubmit = () => {
        let firstName = txtFirstName.value;
        let lastName = txtLastName.value;
        let streetAddress = txtStreetAddress.value;
        let city = txtCity.value;
        let state = txtState.value;
        let zipCode = txtZipCode.value;

        alert(`Hello ${firstName} ${lastName}! You live on ${streetAddress}, in ${city}, ${state} ${zipCode}.`);

    };

}
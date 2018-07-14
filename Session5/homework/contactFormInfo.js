var contactFormInfo;
(function (contactFormInfo) {
    var frmContact = document.querySelector('#frmContact');
    var txtFirstName = document.querySelector('#txtFirstName');
    var txtLastName = document.querySelector('#txtLastName');
    var txtStreetAddress = document.querySelector('#txtStreetAddress');
    var txtCity = document.querySelector('#txtCity');
    var txtState = document.querySelector('#txtState');
    var txtZipCode = document.querySelector('#txtZipCode');
    frmContact.onsubmit = function () {
        var firstName = txtFirstName.value;
        var lastName = txtLastName.value;
        var streetAddress = txtStreetAddress.value;
        var city = txtCity.value;
        var state = txtState.value;
        var zipCode = txtZipCode.value;
        alert("Hello " + firstName + " " + lastName + "! You live on " + streetAddress + ", in " + city + ", " + state + " " + zipCode + ".");
    };
})(contactFormInfo || (contactFormInfo = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdEZvcm1JbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdEZvcm1JbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsZUFBZSxDQXNCeEI7QUF0QkQsV0FBVSxlQUFlO0lBRXJCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFvQixDQUFDO0lBQzFFLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFxQixDQUFDO0lBQy9FLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFxQixDQUFDO0lBQzdFLElBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBcUIsQ0FBQztJQUN2RixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBcUIsQ0FBQztJQUNyRSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztJQUN2RSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBcUIsQ0FBQztJQUUzRSxVQUFVLENBQUMsUUFBUSxHQUFHO1FBQ2xCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFL0IsS0FBSyxDQUFDLFdBQVMsU0FBUyxTQUFJLFFBQVEsc0JBQWlCLGFBQWEsYUFBUSxJQUFJLFVBQUssS0FBSyxTQUFJLE9BQU8sTUFBRyxDQUFDLENBQUM7SUFFNUcsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxFQXRCUyxlQUFlLEtBQWYsZUFBZSxRQXNCeEIifQ==
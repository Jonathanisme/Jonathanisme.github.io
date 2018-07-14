var s5form;
(function (s5form) {
    //get all elements
    var frmContact = document.querySelector('#frmContact');
    var txtFirstName = document.querySelector('#txtFirstName');
    frmContact.onsubmit = function () {
        var firstName = txtFirstName.value;
        alert("Hello " + firstName);
        return false;
    };
})(s5form || (s5form = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE1BQU0sQ0FZZjtBQVpELFdBQVUsTUFBTTtJQUNaLGtCQUFrQjtJQUVsQixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBb0IsQ0FBQztJQUMxRSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBcUIsQ0FBQztJQUUvRSxVQUFVLENBQUMsUUFBUSxHQUFHO1FBQ2xCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsS0FBSyxDQUFDLFdBQVMsU0FBVyxDQUFDLENBQUM7UUFFNUIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxFQVpTLE1BQU0sS0FBTixNQUFNLFFBWWYifQ==
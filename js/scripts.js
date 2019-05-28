$(document).ready(function()  {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var inputStreet = $("input#new-street-name").val();
    var inputCity = $("input#new-city-name").val();
    var inputState = $("input#new-state-name").val();
    var inputCountry = $("input#new-country-name").val();

    var newContact = new Contact(inputFirstName, inputLastName, inputStreet, inputCity, inputState, inputCountry);

    $("ul#contacts").append(
      "<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h4").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street-name").text(newContact.streetName);
      $(".city-name").text(newContact.cityName);
      $(".state-name").text(newContact.stateName);
      $(".country-name").text(newContact.countryName);
    });
    clearInput();
  });
});

// Create a constructor for object Contact
function Contact(first, last , street, city, state, country){
  this.firstName = first;
  this.lastName = last;
  this.streetName= street;
  this.cityName = city;
  this.stateName = state;
  this.countryName = country;
}
// Clear Inputs function
function clearInput()
{
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-name").val("");
  $("input#new-city-name").val("");
  $("input#new-state-name").val("");
  $("input#new-country-name").val("");
}

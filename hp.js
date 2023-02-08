$(document).ready(function() {
  $("#filter-options").change(function() {
    var selectedOption = $(this).val();
    var url = "https://hp-api.onrender.com/api/characters";

    $.ajax({
      url: url,
      success: function(result) {
        $("#character-list").empty();
        var counter = 0;
        var row = $("<div class='row'></div>");
        result.forEach(function(character) {
          if (selectedOption === "students" && character.hogwartsStudent === true ) {
            var characterItem = "<li><img src='" + character.image + "'><h2>" + character.name + "</h2><p>Gender: " + character.gender + "</p><p>Actor: " + character.actor + "</p><p>House: " + character.house + "</p><p>Patronus: " + character.patronus + "</p><p>Ancestry: " + character.ancestry + "</p><p>Date of Birth: " + character.dateOfBirth + "</p></li>";
            row.append(characterItem);
            counter++;
            if (counter % 3 === 0) {
              $("#character-list").append(row);
              row = $("<div class='row'></div>");
            }
          }
          
          else if (selectedOption === "teachers" && character.hogwartsStaff === true && character.species === "human") {
            var characterItem = "<li><img src='" + character.image + "'><h2>" + character.name + "</h2><p>Gender: " + character.gender + "</p><p>Actor: " + character.actor + "</p><p>House: " + character.house + "</p><p>Patronus: " + character.patronus + "</p><p>Ancestry: " + character.ancestry + "</p><p>Date of Birth: " + character.dateOfBirth + "</p></li>";
            row.append(characterItem);
            counter++;
            if (counter % 3 === 0) {
              $("#character-list").append(row);
              row = $("<div class='row'></div>");
            }
          }
          else if (selectedOption === "gryffindor" && character.house === "Gryffindor") {
            var characterItem = "<li><img src='" + character.image + "'><h2>" + character.name + "</h2><p>Gender: " + character.gender + "</p><p>Actor: " + character.actor + "</p><p>House: " + character.house + "</p><p>Patronus: " + character.patronus + "</p><p>Ancestry: " + character.ancestry + "</p><p>Date of Birth: " + character.dateOfBirth + "</p></li>";
            row.append(characterItem);
            counter++;
            if (counter % 3 === 0) {
              $("#character-list").append(row);
              row = $("<div class='row'></div>");
            }
          }
          else if (selectedOption === "slytherin" && character.house === "Slytherin") {
            var characterItem = "<li><img src='" + character.image + "'><h2>" + character.name + "</h2><p>Gender: " + character.gender + "</p><p>Actor: " + character.actor + "</p><p>House: " + character.house + "</p><p>Patronus: " + character.patronus + "</p><p>Ancestry: " + character.ancestry + "</p><p>Date of Birth: " + character.dateOfBirth + "</p></li>";
            row.append(characterItem);
            counter++;
            if (counter % 3 === 0) {
              $("#character-list").append(row);
              row = $("<div class='row'></div>");
            }
          }
          else if (selectedOption === "ravenclaw" && character.house === "Ravenclaw") {
            var characterItem = "<li><img src='" + character.image + "'><h2>" + character.name + "</h2><p>Gender: " + character.gender + "</p><p>Actor: " + character.actor + "</p><p>House: " + character.house + "</p><p>Patronus: " + character.patronus + "</p><p>Ancestry: " + character.ancestry + "</p><p>Date of Birth: " + character.dateOfBirth + "</p></li>";
            row.append(characterItem);
            counter++;
            if (counter % 3 === 0) {
              $("#character-list").append(row);
              row = $("<div class='row'></div>");
            }
          }
          else if (selectedOption === "hufflepuff" && character.house === "Hufflepuff") {
            var characterItem = "<li><img src='" + character.image + "'><h2>" + character.name + "</h2><p>Gender: " + character.gender + "</p><p>Actor: " + character.actor + "</p><p>House: " + character.house + "</p><p>Patronus: " + character.patronus + "</p><p>Ancestry: " + character.ancestry + "</p><p>Date of Birth: " + character.dateOfBirth + "</p></li>";
            row.append(characterItem);
            counter++;
            if (counter % 3 === 0) {
              $("#character-list").append(row);
              row = $("<div class='row'></div>");
            }
          }
        });
        
      }
    });
  });
});

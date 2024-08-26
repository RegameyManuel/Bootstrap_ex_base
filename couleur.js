
document.addEventListener("DOMContentLoaded", function() {
  let cards = document.querySelectorAll('.card');
  var pastelColors = ['#7C9ACC', '#90B7CF', '#B3DDCD', 
                      '#D0E7DA', '#E8BED3', '#FADADD', 
                      '#FBE7B2', '#FFD7A5', '#E7FBBE', 
                      '#B5EAD7', '#C3B1E1', '#A4B0F5', 
                      '#B0E0E6', '#FFDFBA', '#FFC0CB', 
                      '#FFE4E1', '#F0E68C', '#E6E6FA', 
                      '#FFF5BA', '#D8BFD8', '#FF9AA2', 
                      '#B5D8EB', '#FAFAD2', '#D3E0EA',
                      '#99C1DE'];

  let previousColorIndex = -1;

  cards.forEach(function(card) {
    let randomColorIndex;
    do {
      randomColorIndex = Math.floor(Math.random() * pastelColors.length)
    } while (randomColorIndex === previousColorIndex);
  
    card.style.backgroundColor = pastelColors[randomColorIndex];
    previousColorIndex = randomColorIndex;
  });
});

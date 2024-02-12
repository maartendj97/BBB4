function showComment(response) {
    const comment = document.getElementById('comment');
    const messageBox = document.getElementById('messageBox').value;
    if (response === 'Ja') {
      comment.textContent = "Topper vul gelijk even deze datumprikker in! " + messageBox;
    } else if (response === 'Nee') {
      comment.textContent = "Verkeerde keuze swa, probeer het nog een keer. " + messageBox;
    }
  }
  
  // Replace the image src with your own URLs
  document.getElementById('image1').src = "https://www.fotobehang.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/0/w05119-small.jpg";
  document.getElementById('image2').src = "https://media.1815.io/jfk/i/width=1784&height=1004/2019/06/biervakantie-2019.jpg";
  document.getElementById('image3').src = "https://www.pepetravel.nl/wp-content/uploads/2023/02/tennis-e1662387666805.jpg";
  
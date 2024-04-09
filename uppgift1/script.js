document.getElementById('submitButton').addEventListener('click', getApi);

function getApi() {
  const name = document.getElementById('nameInput').value;
  const fullUri = `https://www.swapi.tech/api/people/?name=${name}`;

  fetch(fullUri)
    .then(res => res.json())
    .then(data => {
      const character = data.result[0];
      const { height, mass, gender, hair_color } = character.properties;

      const characterInfo = `Height: ${height}, Mass: ${mass}, Gender: ${gender}, Hair Color: ${hair_color}`;
      document.getElementById('outputTextarea').value = characterInfo;
    })
    .catch(err => console.log(err));
}

let rec = localStorage.getItem("record");
let elRecord = document.querySelector(".js-record");

function renderPokemon(arr) {
  let res = "";

  for (i of arr) {
    console.log(i);
    res += `
        <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>${i}</td>
        </tr>
    </table>
        `;
  }
  elRecord.innerHTML = res;
}

renderPokemon(rec);
let rec = localStorage.getItem("record");
let elRecord = document.querySelector(".js-record");

function renderPokemon(arr) {
  let res = "";
let name = localStorage.getItem("user")
console.log();
  for (i of arr) {
    console.log(i);
    res += `
        <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Record</th>
        </tr>
        <tr>
            <td>${JSON.parse(name).name}</td>
            <td>${JSON.parse(name).email}</td>
            <td>${i}</td>
        </tr>
    </table>
        `;
  }
  elRecord.innerHTML = res;
}

renderPokemon(rec);
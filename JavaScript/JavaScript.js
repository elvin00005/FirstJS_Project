let calArr = [];

document.getElementById("form").addEventListener("submit", calSum);
const createTableRow = ({ deposit, amount, interest, term, calculation }) => {
    return `
        <tr>
            <td>${deposit}</td>
            <td>${amount}</td>
            <td>${interest}</td>
            <td>${term}</td>
            <td>${calculation.toFixed(1)}</td>
        </tr>
    `;
};

function calSum(event) {
    event.preventDefault();

    let fields = {};


    let formData = new FormData(event.target);


    for (let pair of formData.entries()) {
        fields[pair[0]] = pair[1];
    }

    const sum = Number(
        +fields.deposit +
        +(fields.deposit * (fields.interest / 100) * (fields.term / 360)) +
        +(fields.amount * 12)
    );

    if (fields.deposit < 0 || fields.term < 0 || (fields.interest > 100 || fields.interest <= 0) || fields.amount < 0) {
        console.log("'Ошибка при вводе данных'", `результат: NaN`);
        document.getElementById("block").style.display = "block";
        return;
    }

    if (Number.isNaN(sum) || typeof sum !== "number") {
        console.log("'Error'", `результат: ${sum}`);
        document.getElementById("block").style.display = "block";
        return;
    }

    fields.calculation = sum;

    calArr.push(fields);

    event.target.reset();
    console.log("calArr", calArr);

    let allRows = ``;

    calArr.forEach((row) => {
        allRows += createTableRow({ ...row });
    });

    document.getElementById("table").innerHTML = allRows;

    return fields;
}
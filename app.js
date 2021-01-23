const cmd = [
  {
    ref: "ref1",
    prix: "469.99",
    qte: "4",
  },
  {
    ref: "ref2",
    prix: "469.99",
    qte: "3",
  },
  {
    ref: "ref3",
    prix: "469.99",
    qte: "5",
  },
  {
    ref: "ref4",
    prix: "469.99",
    qte: "1",
  },
  {
    ref: "ref5",
    prix: "469.99",
    qte: "6",
  },
];
/*FUNCTION TO ADD DATA TO THE TABLE */
function fillPanier() {
  var total = 0;
  var tbody = document.getElementsByTagName("tbody")[0];

  // RESET TABALE DATA BEFORE LOADING NEW PRODUCTS
  tbody.innerHTML = "";

  for (let i = 0; i < cmd.length; i++) {
    tbody.innerHTML +=
      "<tr>" +
      "<td>" +
      cmd[i].ref +
      "</td><td>" +
      +cmd[i].prix +
      "</td><td>" +
      cmd[i].qte +
      "</td><td>" +
      cmd[i].prix * cmd[i].qte +
      "</td></tr>";
  }
  valueTotal();
}

/*Total Value */
function valueTotal() {
  var lbl_total = document.getElementById("total");
  var counter = 0;
  for (let i = 0; i < cmd.length; i++) {
    counter += cmd[i].prix * cmd[i].qte;
  }
  lbl_total.textContent = counter;
}

/*FUNCTION TO ADD NEW PRODUCT TO THE TABLE */
function addNewProduct() {
  var ref = document.getElementById("ref").value;
  var prix = document.getElementById("prix").value;
  var qte = document.getElementById("qte").value;

  var obj = {
    ref,
    prix,
    qte,
  };

  if (obj.ref === "" || obj.prix === 0 || obj.qte === 0) {
    alert("champs Obligatoire");
  } else {
    cmd.push(obj);
    alert("addition successfully");
    //RESET ELEMENTS
    document.getElementById("ref").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("qte").value = "";

    fillPanier();
    valueTotal();
  }
}

var datos = [1, 2, 3, 5, 8, 13, 21, 33, 55, 89, 114];

function graficar() {
  d3.select(".miGrafica")
    .selectAll("div")
    .data(datos)
    .enter()
    .append("div")
    .text(function(d) {
      if (d == 1) {
        return "Ricardito ha tenido " + d + " Balón";
      } else {
        return "Ricardito ha tenido " + d + " Balones";
      }
    })
    .style("background-color", "green")
    .style("color", "white")
    .style("padding", "5px")
    .style("margin", "5px")
    .style("text-align", "right");
}

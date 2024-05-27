function option1() {
  localStorage.setItem(
    "result",
    "<p>Decides lanzar un audaz ataque cibernético contra el sistema de comunicaciones enemigo. A pesar de tu meticulosa planificación, el enemigo logra detectar tus intrusiones y contraataca con una ferocidad inesperada. La respuesta enemiga deja a tu facción vulnerable y con importantes pérdidas, obligándote a replantear tus estrategias de guerra.</p><img src='img/ataque_fallido.png' alt='Ataque fallido' />"
  );
  window.location.href = "resolution.html";
}

function option2() {
  localStorage.setItem(
    "result",
    "<p>Optas por buscar una solución pacífica al conflicto. Después de largas negociaciones, ambas facciones logran firmar un tratado de paz que pone fin a la ciber-guerra interespacial. Este hito marca el comienzo de una nueva era de cooperación y prosperidad en la galaxia.</p><img src='img/tratado_paz.png' alt='Tratado de paz' />"
  );
  window.location.href = "resolution.html";
}

function restart() {
  localStorage.removeItem("result");
  window.location.href = "index.html";
}

window.onload = function () {
  var result = localStorage.getItem("result");
  if (result) {
    document.getElementById("result").innerHTML = result;
  } else if (!window.location.href.includes("index.html")) {
    window.location.href = "index.html";
  }
};

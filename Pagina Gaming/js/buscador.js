var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$(".caja-busqueda").css({
		"height": "17vh",
		"background": "rgba(0, 0, 0, 0)"
		
	})

	if ($("#inputBusqueda").val() == ""){
		$(".caja-busqueda").css({
			"height": "auto",
			"background": "none"

		})

		$("#search").hide()

	} else {
		$("#search").fadeIn("fast");
	}
})

function mostrarVideos() {
	document.getElementById("PlantillaVideojuegos").style.display = 'block';
	
}
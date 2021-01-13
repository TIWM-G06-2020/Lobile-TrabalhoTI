$(document).ready(function(){
    $("#accordianmenu p").click(function(){
		$("#accordianmenu ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});
});

$(document).ready(function() {
		$('#tableBody').empty();      
		$.ajax({
			type: 'GET',
			url: 'xml/telemoveis.xml',      
			dataType: 'xml',    
			success: function(xml) {
				$(xml).find('Telemovel').each(function() {
					$('#tableBody').append(
						'<tr>' +
							'<td>' +
								$(this).find('marca').text() + '</td> ' +
							'<td>' +
								$(this).find('nome').text() + '</td> ' +
							'<td>' +
								$(this).find('ecra').text() + '</td> ' +
							'<td>' +
								$(this).find('ram').text() + '</td> ' +
							'<td>' +
								$(this).find('armazenamento').text() + '</td> ' +
							'<td>' +
								$(this).find('camara').text() + '</td> ' +
							'<td>' +
								$(this).find('resolucao').text() + '</td> ' +
							'<td>' +
								$(this).find('bateria').text() + '</td> ' +
							'<td>' +
								$(this).find('preco').text() + '</td> ' +
						'</tr>');
				});
			}
		});
	
});
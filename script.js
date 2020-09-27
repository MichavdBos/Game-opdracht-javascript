var kaas = prompt ("Is je kaas geel ?");
kaas = kaas.toLowerCase();

if (kaas == "ja"){
	kaas = prompt ("Zitten er gaten in ?");
	kaas = kaas.toLowerCase();
	if (kaas == "ja"){
			kaas = prompt ("Is de kaas belachelijk duur ?");
			kaas = kaas.toLowerCase();
		if (kaas == "ja"){
			alert ("De kaas is Emmenthaler.");
		}
		else if (kaas == "nee"){
			alert ("De kaas is Leerdammer.");
		}
	}
	else if (kaas == "nee"){
			kaas = prompt ("Is de kaas hard als steen ?");
			kaas = kaas.toLowerCase();
			if (kaas == "ja"){
				alert ("De kaas is Panmigiano Reggiano.");
			}
			else if (kaas == "nee"){
				alert ("De kaas is Goudse kaas.");
			}
	}
}

else if (kaas == "nee"){
	kaas = prompt ("Heeft de kaas blauwe schimmels ?");
	kaas = kaas.toLowerCase();
	if (kaas == "ja"){
			kaas = prompt ("Heeft de kaas een korst ?");
			kaas = kaas.toLowerCase();
		if (kaas == "ja"){
			alert("De kaas is Bleu de Rochbaron.");
		}
		else if (kaas == "nee"){
			alert("De kaas is Foume d'Ambert.");
		}
	}
	else if (kaas == "nee"){
		kaas = prompt ("Heeft de kaas een korst ?");
		kaas = kaas.toLowerCase();

		if (kaas == "ja"){
			alert("De kaas is Camembert.");
		}
		else if (kaas == "nee"){
			alert("De kaas is Mozzarella.");
		}
	}
}
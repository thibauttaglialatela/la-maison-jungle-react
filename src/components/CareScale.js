import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function entretienPlante(careType, ScaleValue) {
  if (careType === 'light') {
	switch (ScaleValue) {
		case 1:
			alert("Cette plante requiert beaucoup de lumière" );
			break;
		case 2:
			alert("Cette plante requiert modérement de lumière" );
			break;
		case 3:
			alert("Cette plante requiert peu de lumière" );
			break;
		default:
			break;
	}
	} else if (careType === 'water') {
		switch (ScaleValue) {
			case 1:
				alert("Cette plante requiert beaucoup d'eau" );
				break;
			case 2:
				alert("Cette plante requiert modérement d'eau" );
				break;
			case 3:
				alert("Cette plante requiert peu d'eau" );
				break;
			default:
				break;
		}
	}
  }


function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div onClick={() => entretienPlante(careType, scaleValue)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;

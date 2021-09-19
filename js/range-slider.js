"use strict"

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [50, 130],
		connect: true,
		step: 1,
    range: {
			'min': [30],
			'max': [130]
    }
	});

	const inputNumber = document.getElementById('size-area-number');
	const inputInvisible = document.getElementById('inputInvisible');
	const inputs = [inputNumber, inputInvisible];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

// const rangeSlider = document.getElementById('range-slider');

// if (rangeSlider) {
// 	noUiSlider.create(rangeSlider, {
//     start: [50, 130],
// 		connect: true,
// 		step: 1,
//     range: {
// 			'min': [30],
// 			'max': [130]
//     }
// 	});

// 	const inputNumber = [document.getElementById('size-area-number')];

// 	rangeSlider.noUiSlider.on('update', function(values, handle){
// 		inputNumber[handle].value = Math.round(values[handle]);
// 	});

// 	const setRangeSlider = (i, value) => {
// 		let arr = [null, null];
// 		arr[i] = value;

// 		console.log(arr);

// 		rangeSlider.noUiSlider.set(arr);
// 	};

// 	inputNumber.forEach((el, index) => {
// 		el.addEventListener('change', (e) => {
// 			console.log(index);
// 			setRangeSlider(index, e.currentTarget.value);
// 		});
// 	});
// } else {
//     console.log('Не удалось обнаружить range-slider (Ползунок площади)');
//     alert('Что-то пошло не так.');
// }


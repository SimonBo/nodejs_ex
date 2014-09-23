var total =0;
for (var i = process.argv.length - 1; i > 1; i--) {
	total += Number(process.argv[i]);
};
console.log(process.argv);
console.log(total);